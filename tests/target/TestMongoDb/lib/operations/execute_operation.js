'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.object.to-string");

var MongoError = require('../core/error').MongoError;

var Aspect = require('./operation').Aspect;

var OperationBase = require('./operation').OperationBase;

var ReadPreference = require('../core/topologies/read_preference');

var isRetryableError = require('../core/error').isRetryableError;

var maxWireVersion = require('../core/utils').maxWireVersion;

var isUnifiedTopology = require('../core/utils').isUnifiedTopology;
/**
 * Executes the given operation with provided arguments.
 *
 * This method reduces large amounts of duplication in the entire codebase by providing
 * a single point for determining whether callbacks or promises should be used. Additionally
 * it allows for a single point of entry to provide features such as implicit sessions, which
 * are required by the Driver Sessions specification in the event that a ClientSession is
 * not provided
 *
 * @param {object} topology The topology to execute this operation on
 * @param {Operation} operation The operation to execute
 * @param {function} callback The command result callback
 */


function executeOperation(topology, operation, callback) {
  if (topology == null) {
    throw new TypeError('This method requires a valid topology instance');
  }

  if (!(operation instanceof OperationBase)) {
    throw new TypeError('This method requires a valid operation instance');
  }

  if (isUnifiedTopology(topology) && !operation.hasAspect(Aspect.SKIP_SESSION) && topology.shouldCheckForSessionSupport()) {
    return selectServerForSessionSupport(topology, operation, callback);
  }

  var Promise = topology.s.promiseLibrary; // The driver sessions spec mandates that we implicitly create sessions for operations
  // that are not explicitly provided with a session.

  var session, owner;

  if (!operation.hasAspect(Aspect.SKIP_SESSION) && topology.hasSessionSupport()) {
    if (operation.session == null) {
      owner = Symbol();
      session = topology.startSession({
        owner: owner
      });
      operation.session = session;
    } else if (operation.session.hasEnded) {
      throw new MongoError('Use of expired sessions is not permitted');
    }
  }

  var makeExecuteCallback = function makeExecuteCallback(resolve, reject) {
    return function executeCallback(err, result) {
      if (session && session.owner === owner) {
        session.endSession(function () {
          if (operation.session === session) {
            operation.clearSession();
          }

          if (err) return reject(err);
          resolve(result);
        });
      } else {
        if (err) return reject(err);
        resolve(result);
      }
    };
  }; // Execute using callback


  if (typeof callback === 'function') {
    var handler = makeExecuteCallback(function (result) {
      return callback(null, result);
    }, function (err) {
      return callback(err, null);
    });

    try {
      if (operation.hasAspect(Aspect.EXECUTE_WITH_SELECTION)) {
        return executeWithServerSelection(topology, operation, handler);
      } else {
        return operation.execute(handler);
      }
    } catch (e) {
      handler(e);
      throw e;
    }
  }

  return new Promise(function (resolve, reject) {
    var handler = makeExecuteCallback(resolve, reject);

    try {
      if (operation.hasAspect(Aspect.EXECUTE_WITH_SELECTION)) {
        return executeWithServerSelection(topology, operation, handler);
      } else {
        return operation.execute(handler);
      }
    } catch (e) {
      handler(e);
    }
  });
}

function supportsRetryableReads(server) {
  return maxWireVersion(server) >= 6;
}

function executeWithServerSelection(topology, operation, callback) {
  var readPreference = operation.readPreference || ReadPreference.primary;
  var inTransaction = operation.session && operation.session.inTransaction();

  if (inTransaction && !readPreference.equals(ReadPreference.primary)) {
    callback(new MongoError("Read preference in a transaction must be primary, not: ".concat(readPreference.mode)));
    return;
  }

  var serverSelectionOptions = {
    readPreference: readPreference,
    session: operation.session
  };

  function callbackWithRetry(err, result) {
    if (err == null) {
      return callback(null, result);
    }

    if (!isRetryableError(err)) {
      return callback(err);
    } // select a new server, and attempt to retry the operation


    topology.selectServer(serverSelectionOptions, function (err, server) {
      if (err || !supportsRetryableReads(server)) {
        callback(err, null);
        return;
      }

      operation.execute(server, callback);
    });
  } // select a server, and execute the operation against it


  topology.selectServer(serverSelectionOptions, function (err, server) {
    if (err) {
      callback(err, null);
      return;
    }

    var shouldRetryReads = topology.s.options.retryReads !== false && operation.session && !inTransaction && supportsRetryableReads(server) && operation.canRetryRead;

    if (operation.hasAspect(Aspect.RETRYABLE) && shouldRetryReads) {
      operation.execute(server, callbackWithRetry);
      return;
    }

    operation.execute(server, callback);
  });
} // TODO: This is only supported for unified topology, it should go away once
//       we remove support for legacy topology types.


function selectServerForSessionSupport(topology, operation, callback) {
  var Promise = topology.s.promiseLibrary;
  var result;

  if (typeof callback !== 'function') {
    result = new Promise(function (resolve, reject) {
      callback = function callback(err, result) {
        if (err) return reject(err);
        resolve(result);
      };
    });
  }

  topology.selectServer(ReadPreference.primaryPreferred, function (err) {
    if (err) {
      callback(err);
      return;
    }

    executeOperation(topology, operation, callback);
  });
  return result;
}

module.exports = executeOperation;