'use strict';

var net = require('net');

var tls = require('tls');

var Connection = require('./connection');

var Query = require('./commands').Query;

var createClientInfo = require('../topologies/shared').createClientInfo;

var MongoError = require('../error').MongoError;

var MongoNetworkError = require('../error').MongoNetworkError;

var defaultAuthProviders = require('../auth/defaultAuthProviders').defaultAuthProviders;

var WIRE_CONSTANTS = require('../wireprotocol/constants');

var MAX_SUPPORTED_WIRE_VERSION = WIRE_CONSTANTS.MAX_SUPPORTED_WIRE_VERSION;
var MAX_SUPPORTED_SERVER_VERSION = WIRE_CONSTANTS.MAX_SUPPORTED_SERVER_VERSION;
var MIN_SUPPORTED_WIRE_VERSION = WIRE_CONSTANTS.MIN_SUPPORTED_WIRE_VERSION;
var MIN_SUPPORTED_SERVER_VERSION = WIRE_CONSTANTS.MIN_SUPPORTED_SERVER_VERSION;
var AUTH_PROVIDERS;

function connect(options, callback) {
  if (AUTH_PROVIDERS == null) {
    AUTH_PROVIDERS = defaultAuthProviders(options.bson);
  }

  if (options.family !== void 0) {
    makeConnection(options.family, options, function (err, socket) {
      if (err) {
        callback(err, socket); // in the error case, `socket` is the originating error event name

        return;
      }

      performInitialHandshake(new Connection(socket, options), options, callback);
    });
    return;
  }

  return makeConnection(6, options, function (err, ipv6Socket) {
    if (err) {
      makeConnection(4, options, function (err, ipv4Socket) {
        if (err) {
          callback(err, ipv4Socket); // in the error case, `ipv4Socket` is the originating error event name

          return;
        }

        performInitialHandshake(new Connection(ipv4Socket, options), options, callback);
      });
      return;
    }

    performInitialHandshake(new Connection(ipv6Socket, options), options, callback);
  });
}

function getSaslSupportedMechs(options) {
  if (!(options && options.credentials)) {
    return {};
  }

  var credentials = options.credentials; // TODO: revisit whether or not items like `options.user` and `options.dbName` should be checked here

  var authMechanism = credentials.mechanism;
  var authSource = credentials.source || options.dbName || 'admin';
  var user = credentials.username || options.user;

  if (typeof authMechanism === 'string' && authMechanism.toUpperCase() !== 'DEFAULT') {
    return {};
  }

  if (!user) {
    return {};
  }

  return {
    saslSupportedMechs: "".concat(authSource, ".").concat(user)
  };
}

function checkSupportedServer(ismaster, options) {
  var serverVersionHighEnough = ismaster && typeof ismaster.maxWireVersion === 'number' && ismaster.maxWireVersion >= MIN_SUPPORTED_WIRE_VERSION;
  var serverVersionLowEnough = ismaster && typeof ismaster.minWireVersion === 'number' && ismaster.minWireVersion <= MAX_SUPPORTED_WIRE_VERSION;

  if (serverVersionHighEnough) {
    if (serverVersionLowEnough) {
      return null;
    }

    var _message = "Server at ".concat(options.host, ":").concat(options.port, " reports minimum wire version ").concat(ismaster.minWireVersion, ", but this version of the Node.js Driver requires at most ").concat(MAX_SUPPORTED_WIRE_VERSION, " (MongoDB ").concat(MAX_SUPPORTED_SERVER_VERSION, ")");

    return new MongoError(_message);
  }

  var message = "Server at ".concat(options.host, ":").concat(options.port, " reports maximum wire version ").concat(ismaster.maxWireVersion || 0, ", but this version of the Node.js Driver requires at least ").concat(MIN_SUPPORTED_WIRE_VERSION, " (MongoDB ").concat(MIN_SUPPORTED_SERVER_VERSION, ")");
  return new MongoError(message);
}

function performInitialHandshake(conn, options, _callback) {
  var callback = function callback(err, ret) {
    if (err && conn) {
      conn.destroy();
    }

    _callback(err, ret);
  };

  var compressors = [];

  if (options.compression && options.compression.compressors) {
    compressors = options.compression.compressors;
  }

  var handshakeDoc = Object.assign({
    ismaster: true,
    client: createClientInfo(options),
    compression: compressors
  }, getSaslSupportedMechs(options));
  var start = new Date().getTime();
  runCommand(conn, 'admin.$cmd', handshakeDoc, options, function (err, ismaster) {
    if (err) {
      callback(err, null);
      return;
    }

    if (ismaster.ok === 0) {
      callback(new MongoError(ismaster), null);
      return;
    }

    var supportedServerErr = checkSupportedServer(ismaster, options);

    if (supportedServerErr) {
      callback(supportedServerErr, null);
      return;
    } // resolve compression


    if (ismaster.compression) {
      var agreedCompressors = compressors.filter(function (compressor) {
        return ismaster.compression.indexOf(compressor) !== -1;
      });

      if (agreedCompressors.length) {
        conn.agreedCompressor = agreedCompressors[0];
      }

      if (options.compression && options.compression.zlibCompressionLevel) {
        conn.zlibCompressionLevel = options.compression.zlibCompressionLevel;
      }
    } // NOTE: This is metadata attached to the connection while porting away from
    //       handshake being done in the `Server` class. Likely, it should be
    //       relocated, or at very least restructured.


    conn.ismaster = ismaster;
    conn.lastIsMasterMS = new Date().getTime() - start;
    var credentials = options.credentials;

    if (!ismaster.arbiterOnly && credentials) {
      credentials.resolveAuthMechanism(ismaster);
      authenticate(conn, credentials, callback);
      return;
    }

    callback(null, conn);
  });
}

var LEGAL_SSL_SOCKET_OPTIONS = ['pfx', 'key', 'passphrase', 'cert', 'ca', 'ciphers', 'NPNProtocols', 'ALPNProtocols', 'servername', 'ecdhCurve', 'secureProtocol', 'secureContext', 'session', 'minDHSize', 'crl', 'rejectUnauthorized'];

function parseConnectOptions(family, options) {
  var host = typeof options.host === 'string' ? options.host : 'localhost';

  if (host.indexOf('/') !== -1) {
    return {
      path: host
    };
  }

  var result = {
    family: family,
    host: host,
    port: typeof options.port === 'number' ? options.port : 27017,
    rejectUnauthorized: false
  };
  return result;
}

function parseSslOptions(family, options) {
  var result = parseConnectOptions(family, options); // Merge in valid SSL options

  for (var name in options) {
    if (options[name] != null && LEGAL_SSL_SOCKET_OPTIONS.indexOf(name) !== -1) {
      result[name] = options[name];
    }
  } // Override checkServerIdentity behavior


  if (options.checkServerIdentity === false) {
    // Skip the identiy check by retuning undefined as per node documents
    // https://nodejs.org/api/tls.html#tls_tls_connect_options_callback
    result.checkServerIdentity = function () {
      return undefined;
    };
  } else if (typeof options.checkServerIdentity === 'function') {
    result.checkServerIdentity = options.checkServerIdentity;
  } // Set default sni servername to be the same as host


  if (result.servername == null) {
    result.servername = result.host;
  }

  return result;
}

function makeConnection(family, options, _callback) {
  var useSsl = typeof options.ssl === 'boolean' ? options.ssl : false;
  var keepAlive = typeof options.keepAlive === 'boolean' ? options.keepAlive : true;
  var keepAliveInitialDelay = typeof options.keepAliveInitialDelay === 'number' ? options.keepAliveInitialDelay : 300000;
  var noDelay = typeof options.noDelay === 'boolean' ? options.noDelay : true;
  var connectionTimeout = typeof options.connectionTimeout === 'number' ? options.connectionTimeout : 30000;
  var socketTimeout = typeof options.socketTimeout === 'number' ? options.socketTimeout : 360000;
  var rejectUnauthorized = typeof options.rejectUnauthorized === 'boolean' ? options.rejectUnauthorized : true;

  if (keepAliveInitialDelay > socketTimeout) {
    keepAliveInitialDelay = Math.round(socketTimeout / 2);
  }

  var socket;

  var callback = function callback(err, ret) {
    if (err && socket) {
      socket.destroy();
    }

    _callback(err, ret);
  };

  try {
    if (useSsl) {
      socket = tls.connect(parseSslOptions(family, options));

      if (typeof socket.disableRenegotiation === 'function') {
        socket.disableRenegotiation();
      }
    } else {
      socket = net.createConnection(parseConnectOptions(family, options));
    }
  } catch (err) {
    return callback(err);
  }

  socket.setKeepAlive(keepAlive, keepAliveInitialDelay);
  socket.setTimeout(connectionTimeout);
  socket.setNoDelay(noDelay);
  var errorEvents = ['error', 'close', 'timeout', 'parseError'];

  function errorHandler(eventName) {
    return function (err) {
      errorEvents.forEach(function (event) {
        return socket.removeAllListeners(event);
      });
      socket.removeListener('connect', connectHandler);
      callback(connectionFailureError(eventName, err), eventName);
    };
  }

  function connectHandler() {
    errorEvents.forEach(function (event) {
      return socket.removeAllListeners(event);
    });

    if (socket.authorizationError && rejectUnauthorized) {
      return callback(socket.authorizationError);
    }

    socket.setTimeout(socketTimeout);
    callback(null, socket);
  }

  socket.once('error', errorHandler('error'));
  socket.once('close', errorHandler('close'));
  socket.once('timeout', errorHandler('timeout'));
  socket.once('parseError', errorHandler('parseError'));
  socket.once('connect', connectHandler);
}

var CONNECTION_ERROR_EVENTS = ['error', 'close', 'timeout', 'parseError'];

function runCommand(conn, ns, command, options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  var socketTimeout = typeof options.socketTimeout === 'number' ? options.socketTimeout : 360000;
  var bson = conn.options.bson;
  var query = new Query(bson, ns, command, {
    numberToSkip: 0,
    numberToReturn: 1
  });

  function errorHandler(err) {
    conn.resetSocketTimeout();
    CONNECTION_ERROR_EVENTS.forEach(function (eventName) {
      return conn.removeListener(eventName, errorHandler);
    });
    conn.removeListener('message', messageHandler);
    callback(err, null);
  }

  function messageHandler(msg) {
    if (msg.responseTo !== query.requestId) {
      return;
    }

    conn.resetSocketTimeout();
    CONNECTION_ERROR_EVENTS.forEach(function (eventName) {
      return conn.removeListener(eventName, errorHandler);
    });
    conn.removeListener('message', messageHandler);
    msg.parse({
      promoteValues: true
    });
    callback(null, msg.documents[0]);
  }

  conn.setSocketTimeout(socketTimeout);
  CONNECTION_ERROR_EVENTS.forEach(function (eventName) {
    return conn.once(eventName, errorHandler);
  });
  conn.on('message', messageHandler);
  conn.write(query.toBin());
}

function authenticate(conn, credentials, callback) {
  var mechanism = credentials.mechanism;

  if (!AUTH_PROVIDERS[mechanism]) {
    callback(new MongoError("authMechanism '".concat(mechanism, "' not supported")));
    return;
  }

  var provider = AUTH_PROVIDERS[mechanism];
  provider.auth(runCommand, [conn], credentials, function (err) {
    if (err) return callback(err);
    callback(null, conn);
  });
}

function connectionFailureError(type, err) {
  switch (type) {
    case 'error':
      return new MongoNetworkError(err);

    case 'timeout':
      return new MongoNetworkError("connection timed out");

    case 'close':
      return new MongoNetworkError("connection closed");

    default:
      return new MongoNetworkError("unknown network error");
  }
}

module.exports = connect;