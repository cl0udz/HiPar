'use strict';

var Query = require('../connection/commands').Query;

var Msg = require('../connection/msg').Msg;

var MongoError = require('../error').MongoError;

var getReadPreference = require('./shared').getReadPreference;

var isSharded = require('./shared').isSharded;

var databaseNamespace = require('./shared').databaseNamespace;

var isTransactionCommand = require('../transactions').isTransactionCommand;

var applySession = require('../sessions').applySession;

function isClientEncryptionEnabled(server) {
  return server.autoEncrypter;
}

function command(server, ns, cmd, options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {};

  if (cmd == null) {
    return callback(new MongoError("command ".concat(JSON.stringify(cmd), " does not return a cursor")));
  }

  if (!isClientEncryptionEnabled(server)) {
    _command(server, ns, cmd, options, callback);

    return;
  }

  _cryptCommand(server, ns, cmd, options, callback);
}

function _command(server, ns, cmd, options, callback) {
  var bson = server.s.bson;
  var pool = server.s.pool;
  var readPreference = getReadPreference(cmd, options);
  var shouldUseOpMsg = supportsOpMsg(server);
  var session = options.session;
  var clusterTime = server.clusterTime;
  var finalCmd = Object.assign({}, cmd);

  if (hasSessionSupport(server) && session) {
    if (session.clusterTime && session.clusterTime.clusterTime.greaterThan(clusterTime.clusterTime)) {
      clusterTime = session.clusterTime;
    }

    var err = applySession(session, finalCmd, options);

    if (err) {
      return callback(err);
    }
  } // if we have a known cluster time, gossip it


  if (clusterTime) {
    finalCmd.$clusterTime = clusterTime;
  }

  if (isSharded(server) && !shouldUseOpMsg && readPreference && readPreference.preference !== 'primary') {
    finalCmd = {
      $query: finalCmd,
      $readPreference: readPreference.toJSON()
    };
  }

  var commandOptions = Object.assign({
    command: true,
    numberToSkip: 0,
    numberToReturn: -1,
    checkKeys: false
  }, options); // This value is not overridable

  commandOptions.slaveOk = readPreference.slaveOk();
  var cmdNs = "".concat(databaseNamespace(ns), ".$cmd");
  var message = shouldUseOpMsg ? new Msg(bson, cmdNs, finalCmd, commandOptions) : new Query(bson, cmdNs, finalCmd, commandOptions);
  var inTransaction = session && (session.inTransaction() || isTransactionCommand(finalCmd));
  var commandResponseHandler = inTransaction ? function (err) {
    if (!cmd.commitTransaction && err && err instanceof MongoError && err.hasErrorLabel('TransientTransactionError')) {
      session.transaction.unpinServer();
    }

    return callback.apply(null, arguments);
  } : callback;

  try {
    pool.write(message, commandOptions, commandResponseHandler);
  } catch (err) {
    commandResponseHandler(err);
  }
}

function hasSessionSupport(topology) {
  if (topology == null) return false;

  if (topology.description) {
    return topology.description.maxWireVersion >= 6;
  }

  return topology.ismaster == null ? false : topology.ismaster.maxWireVersion >= 6;
}

function supportsOpMsg(topologyOrServer) {
  var description = topologyOrServer.ismaster ? topologyOrServer.ismaster : topologyOrServer.description;

  if (description == null) {
    return false;
  }

  return description.maxWireVersion >= 6 && description.__nodejs_mock_server__ == null;
}

function _cryptCommand(server, ns, cmd, options, callback) {
  var shouldBypassAutoEncryption = !!server.s.options.bypassAutoEncryption;
  var autoEncrypter = server.autoEncrypter;

  function commandResponseHandler(err, response) {
    if (err || response == null) {
      callback(err, response);
      return;
    }

    autoEncrypter.decrypt(response.result, function (err, decrypted) {
      if (err) {
        callback(err, null);
        return;
      }

      response.result = decrypted;
      response.message.documents = [decrypted];
      callback(null, response);
    });
  }

  if (shouldBypassAutoEncryption) {
    _command(server, ns, cmd, options, commandResponseHandler);

    return;
  }

  autoEncrypter.encrypt(ns, cmd, function (err, encrypted) {
    if (err) {
      callback(err, null);
      return;
    }

    _command(server, ns, encrypted, options, commandResponseHandler);
  });
}

module.exports = command;