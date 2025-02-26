'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OperationBase = require('./operation').OperationBase;

var defineAspects = require('./operation').defineAspects;

var Aspect = require('./operation').Aspect;

var deprecate = require('util').deprecate;

var Logger = require('../core').Logger;

var MongoCredentials = require('../core').MongoCredentials;

var MongoError = require('../core').MongoError;

var Mongos = require('../topologies/mongos');

var NativeTopology = require('../topologies/native_topology');

var parse = require('../core').parseConnectionString;

var ReadConcern = require('../read_concern');

var ReadPreference = require('../core').ReadPreference;

var ReplSet = require('../topologies/replset');

var Server = require('../topologies/server');

var ServerSessionPool = require('../core').Sessions.ServerSessionPool;

var emitDeprecationWarning = require('../utils').emitDeprecationWarning;

var client;

function loadClient() {
  if (!client) {
    client = require('../mongo_client');
  }

  return client;
}

var legacyParse = deprecate(require('../url_parser'), 'current URL string parser is deprecated, and will be removed in a future version. ' + 'To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.');
var AUTH_MECHANISM_INTERNAL_MAP = {
  DEFAULT: 'default',
  'MONGODB-CR': 'mongocr',
  PLAIN: 'plain',
  'MONGODB-X509': 'x509',
  'SCRAM-SHA-1': 'scram-sha-1',
  'SCRAM-SHA-256': 'scram-sha-256'
};
var monitoringEvents = ['timeout', 'close', 'serverOpening', 'serverDescriptionChanged', 'serverHeartbeatStarted', 'serverHeartbeatSucceeded', 'serverHeartbeatFailed', 'serverClosed', 'topologyOpening', 'topologyClosed', 'topologyDescriptionChanged', 'commandStarted', 'commandSucceeded', 'commandFailed', 'joined', 'left', 'ping', 'ha', 'all', 'fullsetup', 'open'];
var VALID_AUTH_MECHANISMS = new Set(['DEFAULT', 'MONGODB-CR', 'PLAIN', 'MONGODB-X509', 'SCRAM-SHA-1', 'SCRAM-SHA-256', 'GSSAPI']);
var validOptionNames = ['poolSize', 'ssl', 'sslValidate', 'sslCA', 'sslCert', 'sslKey', 'sslPass', 'sslCRL', 'autoReconnect', 'noDelay', 'keepAlive', 'keepAliveInitialDelay', 'connectTimeoutMS', 'family', 'socketTimeoutMS', 'reconnectTries', 'reconnectInterval', 'ha', 'haInterval', 'replicaSet', 'secondaryAcceptableLatencyMS', 'acceptableLatencyMS', 'connectWithNoPrimary', 'authSource', 'w', 'wtimeout', 'j', 'forceServerObjectId', 'serializeFunctions', 'ignoreUndefined', 'raw', 'bufferMaxEntries', 'readPreference', 'pkFactory', 'promiseLibrary', 'readConcern', 'maxStalenessSeconds', 'loggerLevel', 'logger', 'promoteValues', 'promoteBuffers', 'promoteLongs', 'domainsEnabled', 'checkServerIdentity', 'validateOptions', 'appname', 'auth', 'user', 'password', 'authMechanism', 'compression', 'fsync', 'readPreferenceTags', 'numberOfRetries', 'auto_reconnect', 'minSize', 'monitorCommands', 'retryWrites', 'retryReads', 'useNewUrlParser', 'useUnifiedTopology', 'serverSelectionTimeoutMS', 'useRecoveryToken', 'autoEncryption', 'driverInfo'];
var ignoreOptionNames = ['native_parser'];
var legacyOptionNames = ['server', 'replset', 'replSet', 'mongos', 'db']; // Validate options object

function validOptions(options) {
  var _validOptions = validOptionNames.concat(legacyOptionNames);

  for (var name in options) {
    if (ignoreOptionNames.indexOf(name) !== -1) {
      continue;
    }

    if (_validOptions.indexOf(name) === -1) {
      if (options.validateOptions) {
        return new MongoError("option ".concat(name, " is not supported"));
      } else {
        console.warn("the options [".concat(name, "] is not supported"));
      }
    }

    if (legacyOptionNames.indexOf(name) !== -1) {
      console.warn("the server/replset/mongos/db options are deprecated, " + "all their options are supported at the top level of the options object [".concat(validOptionNames, "]"));
    }
  }
}

var LEGACY_OPTIONS_MAP = validOptionNames.reduce(function (obj, name) {
  obj[name.toLowerCase()] = name;
  return obj;
}, {});

var ConnectOperation =
/*#__PURE__*/
function (_OperationBase) {
  _inherits(ConnectOperation, _OperationBase);

  function ConnectOperation(mongoClient) {
    var _this;

    _classCallCheck(this, ConnectOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectOperation).call(this));
    _this.mongoClient = mongoClient;
    return _this;
  }

  _createClass(ConnectOperation, [{
    key: "execute",
    value: function execute(callback) {
      var mongoClient = this.mongoClient;
      var err = validOptions(mongoClient.s.options); // Did we have a validation error

      if (err) return callback(err); // Fallback to callback based connect

      connect(mongoClient, mongoClient.s.url, mongoClient.s.options, function (err) {
        if (err) return callback(err);
        callback(null, mongoClient);
      });
    }
  }]);

  return ConnectOperation;
}(OperationBase);

defineAspects(ConnectOperation, [Aspect.SKIP_SESSION]);

function addListeners(mongoClient, topology) {
  topology.on('authenticated', createListener(mongoClient, 'authenticated'));
  topology.on('error', createListener(mongoClient, 'error'));
  topology.on('timeout', createListener(mongoClient, 'timeout'));
  topology.on('close', createListener(mongoClient, 'close'));
  topology.on('parseError', createListener(mongoClient, 'parseError'));
  topology.once('open', createListener(mongoClient, 'open'));
  topology.once('fullsetup', createListener(mongoClient, 'fullsetup'));
  topology.once('all', createListener(mongoClient, 'all'));
  topology.on('reconnect', createListener(mongoClient, 'reconnect'));
}

function assignTopology(client, topology) {
  client.topology = topology;
  topology.s.sessionPool = topology instanceof NativeTopology ? new ServerSessionPool(topology) : new ServerSessionPool(topology.s.coreTopology);
} // Clear out all events


function clearAllEvents(topology) {
  monitoringEvents.forEach(function (event) {
    return topology.removeAllListeners(event);
  });
} // Collect all events in order from SDAM


function collectEvents(mongoClient, topology) {
  var MongoClient = loadClient();
  var collectedEvents = [];

  if (mongoClient instanceof MongoClient) {
    monitoringEvents.forEach(function (event) {
      topology.on(event, function (object1, object2) {
        if (event === 'open') {
          collectedEvents.push({
            event: event,
            object1: mongoClient
          });
        } else {
          collectedEvents.push({
            event: event,
            object1: object1,
            object2: object2
          });
        }
      });
    });
  }

  return collectedEvents;
}

var emitDeprecationForNonUnifiedTopology = deprecate(function () {}, 'current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. ' + 'To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.');

function connect(mongoClient, url, options, callback) {
  options = Object.assign({}, options); // If callback is null throw an exception

  if (callback == null) {
    throw new Error('no callback function provided');
  }

  var didRequestAuthentication = false;
  var logger = Logger('MongoClient', options); // Did we pass in a Server/ReplSet/Mongos

  if (url instanceof Server || url instanceof ReplSet || url instanceof Mongos) {
    return connectWithUrl(mongoClient, url, options, connectCallback);
  }

  var useNewUrlParser = options.useNewUrlParser !== false;
  var parseFn = useNewUrlParser ? parse : legacyParse;
  var transform = useNewUrlParser ? transformUrlOptions : legacyTransformUrlOptions;
  parseFn(url, options, function (err, _object) {
    // Do not attempt to connect if parsing error
    if (err) return callback(err); // Flatten

    var object = transform(_object); // Parse the string

    var _finalOptions = createUnifiedOptions(object, options); // Check if we have connection and socket timeout set


    if (_finalOptions.socketTimeoutMS == null) _finalOptions.socketTimeoutMS = 360000;
    if (_finalOptions.connectTimeoutMS == null) _finalOptions.connectTimeoutMS = 30000;
    if (_finalOptions.retryWrites == null) _finalOptions.retryWrites = true;
    if (_finalOptions.useRecoveryToken == null) _finalOptions.useRecoveryToken = true;
    if (_finalOptions.readPreference == null) _finalOptions.readPreference = 'primary';

    if (_finalOptions.db_options && _finalOptions.db_options.auth) {
      delete _finalOptions.db_options.auth;
    } // Store the merged options object


    mongoClient.s.options = _finalOptions; // Failure modes

    if (object.servers.length === 0) {
      return callback(new Error('connection string must contain at least one seed host'));
    }

    if (_finalOptions.auth && !_finalOptions.credentials) {
      try {
        didRequestAuthentication = true;
        _finalOptions.credentials = generateCredentials(mongoClient, _finalOptions.auth.user, _finalOptions.auth.password, _finalOptions);
      } catch (err) {
        return callback(err);
      }
    }

    if (_finalOptions.useUnifiedTopology) {
      return createTopology(mongoClient, 'unified', _finalOptions, connectCallback);
    }

    emitDeprecationForNonUnifiedTopology(); // Do we have a replicaset then skip discovery and go straight to connectivity

    if (_finalOptions.replicaSet || _finalOptions.rs_name) {
      return createTopology(mongoClient, 'replicaset', _finalOptions, connectCallback);
    } else if (object.servers.length > 1) {
      return createTopology(mongoClient, 'mongos', _finalOptions, connectCallback);
    } else {
      return createServer(mongoClient, _finalOptions, connectCallback);
    }
  });

  function connectCallback(err, topology) {
    var warningMessage = "seed list contains no mongos proxies, replicaset connections requires the parameter replicaSet to be supplied in the URI or options object, mongodb://server:port/db?replicaSet=name";

    if (err && err.message === 'no mongos proxies found in seed list') {
      if (logger.isWarn()) {
        logger.warn(warningMessage);
      } // Return a more specific error message for MongoClient.connect


      return callback(new MongoError(warningMessage));
    }

    if (didRequestAuthentication) {
      mongoClient.emit('authenticated', null, true);
    } // Return the error and db instance


    callback(err, topology);
  }
}

function connectWithUrl(mongoClient, url, options, connectCallback) {
  // Set the topology
  assignTopology(mongoClient, url); // Add listeners

  addListeners(mongoClient, url); // Propagate the events to the client

  relayEvents(mongoClient, url);
  var finalOptions = Object.assign({}, options); // If we have a readPreference passed in by the db options, convert it from a string

  if (typeof options.readPreference === 'string' || typeof options.read_preference === 'string') {
    finalOptions.readPreference = new ReadPreference(options.readPreference || options.read_preference);
  }

  var isDoingAuth = finalOptions.user || finalOptions.password || finalOptions.authMechanism;

  if (isDoingAuth && !finalOptions.credentials) {
    try {
      finalOptions.credentials = generateCredentials(mongoClient, finalOptions.user, finalOptions.password, finalOptions);
    } catch (err) {
      return connectCallback(err, url);
    }
  }

  return url.connect(finalOptions, connectCallback);
}

function createListener(mongoClient, event) {
  var eventSet = new Set(['all', 'fullsetup', 'open', 'reconnect']);
  return function (v1, v2) {
    if (eventSet.has(event)) {
      return mongoClient.emit(event, mongoClient);
    }

    mongoClient.emit(event, v1, v2);
  };
}

function createServer(mongoClient, options, callback) {
  // Pass in the promise library
  options.promiseLibrary = mongoClient.s.promiseLibrary; // Set default options

  var servers = translateOptions(options);
  var server = servers[0]; // Propagate the events to the client

  var collectedEvents = collectEvents(mongoClient, server); // Connect to topology

  server.connect(options, function (err, topology) {
    if (err) {
      server.close(true);
      return callback(err);
    } // Clear out all the collected event listeners


    clearAllEvents(server); // Relay all the events

    relayEvents(mongoClient, server); // Add listeners

    addListeners(mongoClient, server); // Check if we are really speaking to a mongos

    var ismaster = topology.lastIsMaster(); // Set the topology

    assignTopology(mongoClient, topology); // Do we actually have a mongos

    if (ismaster && ismaster.msg === 'isdbgrid') {
      // Destroy the current connection
      topology.close(); // Create mongos connection instead

      return createTopology(mongoClient, 'mongos', options, callback);
    } // Fire all the events


    replayEvents(mongoClient, collectedEvents); // Otherwise callback

    callback(err, topology);
  });
}

var DEPRECATED_UNIFIED_EVENTS = new Set(['reconnect', 'reconnectFailed', 'attemptReconnect']);

function registerDeprecatedEventNotifiers(client) {
  client.on('newListener', function (eventName) {
    if (DEPRECATED_UNIFIED_EVENTS.has(eventName)) {
      emitDeprecationWarning("The `".concat(eventName, "` event is no longer supported by the unified topology, please read more by visiting http://bit.ly/2D8WfT6"), 'DeprecationWarning');
    }
  });
}

function createTopology(mongoClient, topologyType, options, callback) {
  // Pass in the promise library
  options.promiseLibrary = mongoClient.s.promiseLibrary;
  var translationOptions = {};
  if (topologyType === 'unified') translationOptions.createServers = false; // Set default options

  var servers = translateOptions(options, translationOptions); // Create the topology

  var topology;

  if (topologyType === 'mongos') {
    topology = new Mongos(servers, options);
  } else if (topologyType === 'replicaset') {
    topology = new ReplSet(servers, options);
  } else if (topologyType === 'unified') {
    topology = new NativeTopology(options.servers, options);
    registerDeprecatedEventNotifiers(mongoClient);
  } // Add listeners


  addListeners(mongoClient, topology); // Propagate the events to the client

  relayEvents(mongoClient, topology); // Open the connection

  assignTopology(mongoClient, topology);
  topology.connect(options, function (err) {
    if (err) {
      topology.close(true);
      return callback(err);
    }

    if (options.autoEncryption == null) {
      callback(null, topology);
      return;
    } // setup for client side encryption


    var AutoEncrypter;

    try {
      require.resolve('mongodb-client-encryption');
    } catch (err) {
      callback(new MongoError('Auto-encryption requested, but the module is not installed. Please add `mongodb-client-encryption` as a dependency of your project'));
      return;
    }

    try {
      var mongodbClientEncryption = require('mongodb-client-encryption');

      if (typeof mongodbClientEncryption.extension !== 'function') {
        throw new MongoError('loaded version of `mongodb-client-encryption` does not have property `extension`. Please make sure you are loading the correct version of `mongodb-client-encryption`');
      }

      AutoEncrypter = mongodbClientEncryption.extension(require('../../index')).AutoEncrypter;
    } catch (err) {
      callback(err);
      return;
    }

    var mongoCryptOptions = Object.assign({}, options.autoEncryption);
    topology.s.options.autoEncrypter = new AutoEncrypter(mongoClient, mongoCryptOptions);
    topology.s.options.autoEncrypter.init(function (err) {
      if (err) return callback(err, null);
      callback(null, topology);
    });
  });
}

function createUnifiedOptions(finalOptions, options) {
  var childOptions = ['mongos', 'server', 'db', 'replset', 'db_options', 'server_options', 'rs_options', 'mongos_options'];
  var noMerge = ['readconcern', 'compression', 'autoencryption'];

  for (var name in options) {
    if (noMerge.indexOf(name.toLowerCase()) !== -1) {
      finalOptions[name] = options[name];
    } else if (childOptions.indexOf(name.toLowerCase()) !== -1) {
      finalOptions = mergeOptions(finalOptions, options[name], false);
    } else {
      if (options[name] && _typeof(options[name]) === 'object' && !Buffer.isBuffer(options[name]) && !Array.isArray(options[name])) {
        finalOptions = mergeOptions(finalOptions, options[name], true);
      } else {
        finalOptions[name] = options[name];
      }
    }
  }

  return finalOptions;
}

function generateCredentials(client, username, password, options) {
  options = Object.assign({}, options); // the default db to authenticate against is 'self'
  // if authententicate is called from a retry context, it may be another one, like admin

  var source = options.authSource || options.authdb || options.dbName; // authMechanism

  var authMechanismRaw = options.authMechanism || 'DEFAULT';
  var authMechanism = authMechanismRaw.toUpperCase();

  if (!VALID_AUTH_MECHANISMS.has(authMechanism)) {
    throw MongoError.create({
      message: "authentication mechanism ".concat(authMechanismRaw, " not supported', options.authMechanism"),
      driver: true
    });
  }

  if (authMechanism === 'GSSAPI') {
    return new MongoCredentials({
      mechanism: process.platform === 'win32' ? 'sspi' : 'gssapi',
      mechanismProperties: options,
      source: source,
      username: username,
      password: password
    });
  }

  return new MongoCredentials({
    mechanism: AUTH_MECHANISM_INTERNAL_MAP[authMechanism],
    source: source,
    username: username,
    password: password
  });
}

function legacyTransformUrlOptions(object) {
  return mergeOptions(createUnifiedOptions({}, object), object, false);
}

function mergeOptions(target, source, flatten) {
  for (var name in source) {
    if (source[name] && _typeof(source[name]) === 'object' && flatten) {
      target = mergeOptions(target, source[name], flatten);
    } else {
      target[name] = source[name];
    }
  }

  return target;
}

function relayEvents(mongoClient, topology) {
  var serverOrCommandEvents = ['serverOpening', 'serverDescriptionChanged', 'serverHeartbeatStarted', 'serverHeartbeatSucceeded', 'serverHeartbeatFailed', 'serverClosed', 'topologyOpening', 'topologyClosed', 'topologyDescriptionChanged', 'commandStarted', 'commandSucceeded', 'commandFailed', 'joined', 'left', 'ping', 'ha'];
  serverOrCommandEvents.forEach(function (event) {
    topology.on(event, function (object1, object2) {
      mongoClient.emit(event, object1, object2);
    });
  });
} //
// Replay any events due to single server connection switching to Mongos
//


function replayEvents(mongoClient, events) {
  for (var i = 0; i < events.length; i++) {
    mongoClient.emit(events[i].event, events[i].object1, events[i].object2);
  }
}

function transformUrlOptions(_object) {
  var object = Object.assign({
    servers: _object.hosts
  }, _object.options);

  for (var name in object) {
    var camelCaseName = LEGACY_OPTIONS_MAP[name];

    if (camelCaseName) {
      object[camelCaseName] = object[name];
    }
  }

  var hasUsername = _object.auth && _object.auth.username;
  var hasAuthMechanism = _object.options && _object.options.authMechanism;

  if (hasUsername || hasAuthMechanism) {
    object.auth = Object.assign({}, _object.auth);

    if (object.auth.db) {
      object.authSource = object.authSource || object.auth.db;
    }

    if (object.auth.username) {
      object.auth.user = object.auth.username;
    }
  }

  if (_object.defaultDatabase) {
    object.dbName = _object.defaultDatabase;
  }

  if (object.maxPoolSize) {
    object.poolSize = object.maxPoolSize;
  }

  if (object.readConcernLevel) {
    object.readConcern = new ReadConcern(object.readConcernLevel);
  }

  if (object.wTimeoutMS) {
    object.wtimeout = object.wTimeoutMS;
  }

  if (_object.srvHost) {
    object.srvHost = _object.srvHost;
  }

  return object;
}

function translateOptions(options, translationOptions) {
  translationOptions = Object.assign({}, {
    createServers: true
  }, translationOptions); // If we have a readPreference passed in by the db options

  if (typeof options.readPreference === 'string' || typeof options.read_preference === 'string') {
    options.readPreference = new ReadPreference(options.readPreference || options.read_preference);
  } // Do we have readPreference tags, add them


  if (options.readPreference && (options.readPreferenceTags || options.read_preference_tags)) {
    options.readPreference.tags = options.readPreferenceTags || options.read_preference_tags;
  } // Do we have maxStalenessSeconds


  if (options.maxStalenessSeconds) {
    options.readPreference.maxStalenessSeconds = options.maxStalenessSeconds;
  } // Set the socket and connection timeouts


  if (options.socketTimeoutMS == null) options.socketTimeoutMS = 360000;
  if (options.connectTimeoutMS == null) options.connectTimeoutMS = 30000;

  if (!translationOptions.createServers) {
    return;
  } // Create server instances


  return options.servers.map(function (serverObj) {
    return serverObj.domain_socket ? new Server(serverObj.domain_socket, 27017, options) : new Server(serverObj.host, serverObj.port, options);
  });
}

module.exports = ConnectOperation;