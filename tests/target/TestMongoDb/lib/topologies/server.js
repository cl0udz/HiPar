'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CServer = require('../core').Server;

var Cursor = require('../cursor');

var TopologyBase = require('./topology_base').TopologyBase;

var Store = require('./topology_base').Store;

var MongoError = require('../core').MongoError;

var MAX_JS_INT = require('../utils').MAX_JS_INT;

var translateOptions = require('../utils').translateOptions;

var filterOptions = require('../utils').filterOptions;

var mergeOptions = require('../utils').mergeOptions;
/**
 * @fileOverview The **Server** class is a class that represents a single server topology and is
 * used to construct connections.
 *
 * **Server Should not be used, use MongoClient.connect**
 */
// Allowed parameters


var legalOptionNames = ['ha', 'haInterval', 'acceptableLatencyMS', 'poolSize', 'ssl', 'checkServerIdentity', 'sslValidate', 'sslCA', 'sslCRL', 'sslCert', 'ciphers', 'ecdhCurve', 'sslKey', 'sslPass', 'socketOptions', 'bufferMaxEntries', 'store', 'auto_reconnect', 'autoReconnect', 'emitError', 'keepAlive', 'keepAliveInitialDelay', 'noDelay', 'connectTimeoutMS', 'socketTimeoutMS', 'family', 'loggerLevel', 'logger', 'reconnectTries', 'reconnectInterval', 'monitoring', 'appname', 'domainsEnabled', 'servername', 'promoteLongs', 'promoteValues', 'promoteBuffers', 'compression', 'promiseLibrary', 'monitorCommands'];
/**
 * Creates a new Server instance
 * @class
 * @deprecated
 * @param {string} host The host for the server, can be either an IP4, IP6 or domain socket style host.
 * @param {number} [port] The server port if IP4.
 * @param {object} [options] Optional settings.
 * @param {number} [options.poolSize=5] Number of connections in the connection pool for each server instance, set to 5 as default for legacy reasons.
 * @param {boolean} [options.ssl=false] Use ssl connection (needs to have a mongod server with ssl support)
 * @param {boolean} [options.sslValidate=false] Validate mongod server certificate against ca (needs to have a mongod server with ssl support, 2.4 or higher)
 * @param {boolean|function} [options.checkServerIdentity=true] Ensure we check server identify during SSL, set to false to disable checking. Only works for Node 0.12.x or higher. You can pass in a boolean or your own checkServerIdentity override function.
 * @param {array} [options.sslCA] Array of valid certificates either as Buffers or Strings (needs to have a mongod server with ssl support, 2.4 or higher)
 * @param {array} [options.sslCRL] Array of revocation certificates either as Buffers or Strings (needs to have a mongod server with ssl support, 2.4 or higher)
 * @param {(Buffer|string)} [options.sslCert] String or buffer containing the certificate we wish to present (needs to have a mongod server with ssl support, 2.4 or higher)
 * @param {string} [options.ciphers] Passed directly through to tls.createSecureContext. See https://nodejs.org/dist/latest-v9.x/docs/api/tls.html#tls_tls_createsecurecontext_options for more info.
 * @param {string} [options.ecdhCurve] Passed directly through to tls.createSecureContext. See https://nodejs.org/dist/latest-v9.x/docs/api/tls.html#tls_tls_createsecurecontext_options for more info.
 * @param {(Buffer|string)} [options.sslKey] String or buffer containing the certificate private key we wish to present (needs to have a mongod server with ssl support, 2.4 or higher)
 * @param {(Buffer|string)} [options.sslPass] String or buffer containing the certificate password (needs to have a mongod server with ssl support, 2.4 or higher)
 * @param {string} [options.servername] String containing the server name requested via TLS SNI.
 * @param {object} [options.socketOptions] Socket options
 * @param {boolean} [options.socketOptions.autoReconnect=true] Reconnect on error.
 * @param {boolean} [options.socketOptions.noDelay=true] TCP Socket NoDelay option.
 * @param {boolean} [options.socketOptions.keepAlive=true] TCP Connection keep alive enabled
 * @param {number} [options.socketOptions.keepAliveInitialDelay=30000] The number of milliseconds to wait before initiating keepAlive on the TCP socket
 * @param {number} [options.socketOptions.connectTimeoutMS=0] TCP Connection timeout setting
 * @param {number} [options.socketOptions.socketTimeoutMS=0] TCP Socket timeout setting
 * @param {number} [options.reconnectTries=30] Server attempt to reconnect #times
 * @param {number} [options.reconnectInterval=1000] Server will wait # milliseconds between retries
 * @param {boolean} [options.monitoring=true] Triggers the server instance to call ismaster
 * @param {number} [options.haInterval=10000] The interval of calling ismaster when monitoring is enabled.
 * @param {boolean} [options.domainsEnabled=false] Enable the wrapping of the callback in the current domain, disabled by default to avoid perf hit.
 * @param {boolean} [options.monitorCommands=false] Enable command monitoring for this topology
 * @fires Server#connect
 * @fires Server#close
 * @fires Server#error
 * @fires Server#timeout
 * @fires Server#parseError
 * @fires Server#reconnect
 * @fires Server#commandStarted
 * @fires Server#commandSucceeded
 * @fires Server#commandFailed
 * @property {string} parserType the parser type used (c++ or js).
 * @return {Server} a Server instance.
 */

var Server =
/*#__PURE__*/
function (_TopologyBase) {
  _inherits(Server, _TopologyBase);

  function Server(host, port, options) {
    var _this;

    _classCallCheck(this, Server);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Server).call(this));

    var self = _assertThisInitialized(_this); // Filter the options


    options = filterOptions(options, legalOptionNames); // Promise library

    var promiseLibrary = options.promiseLibrary; // Stored options

    var storeOptions = {
      force: false,
      bufferMaxEntries: typeof options.bufferMaxEntries === 'number' ? options.bufferMaxEntries : MAX_JS_INT
    }; // Shared global store

    var store = options.store || new Store(self, storeOptions); // Detect if we have a socket connection

    if (host.indexOf('/') !== -1) {
      if (port != null && _typeof(port) === 'object') {
        options = port;
        port = null;
      }
    } else if (port == null) {
      throw MongoError.create({
        message: 'port must be specified',
        driver: true
      });
    } // Get the reconnect option


    var reconnect = typeof options.auto_reconnect === 'boolean' ? options.auto_reconnect : true;
    reconnect = typeof options.autoReconnect === 'boolean' ? options.autoReconnect : reconnect; // Clone options

    var clonedOptions = mergeOptions({}, {
      host: host,
      port: port,
      disconnectHandler: store,
      cursorFactory: Cursor,
      reconnect: reconnect,
      emitError: typeof options.emitError === 'boolean' ? options.emitError : true,
      size: typeof options.poolSize === 'number' ? options.poolSize : 5,
      monitorCommands: typeof options.monitorCommands === 'boolean' ? options.monitorCommands : false
    }); // Translate any SSL options and other connectivity options

    clonedOptions = translateOptions(clonedOptions, options); // Socket options

    var socketOptions = options.socketOptions && Object.keys(options.socketOptions).length > 0 ? options.socketOptions : options; // Translate all the options to the core types

    clonedOptions = translateOptions(clonedOptions, socketOptions); // Build default client information

    clonedOptions.clientInfo = _this.clientInfo; // Do we have an application specific string

    if (options.appname) {
      clonedOptions.clientInfo.application = {
        name: options.appname
      };
    } // Define the internal properties


    _this.s = {
      // Create an instance of a server instance from core module
      coreTopology: new CServer(clonedOptions),
      // Server capabilities
      sCapabilities: null,
      // Cloned options
      clonedOptions: clonedOptions,
      // Reconnect
      reconnect: clonedOptions.reconnect,
      // Emit error
      emitError: clonedOptions.emitError,
      // Pool size
      poolSize: clonedOptions.size,
      // Store Options
      storeOptions: storeOptions,
      // Store
      store: store,
      // Host
      host: host,
      // Port
      port: port,
      // Options
      options: options,
      // Server Session Pool
      sessionPool: null,
      // Active client sessions
      sessions: new Set(),
      // Promise library
      promiseLibrary: promiseLibrary || Promise
    };
    return _this;
  } // Connect


  _createClass(Server, [{
    key: "connect",
    value: function connect(_options, callback) {
      var self = this;
      if ('function' === typeof _options) callback = _options, _options = {};
      if (_options == null) _options = this.s.clonedOptions;
      if (!('function' === typeof callback)) callback = null;
      _options = Object.assign({}, this.s.clonedOptions, _options);
      self.s.options = _options; // Update bufferMaxEntries

      self.s.storeOptions.bufferMaxEntries = typeof _options.bufferMaxEntries === 'number' ? _options.bufferMaxEntries : -1; // Error handler

      var connectErrorHandler = function connectErrorHandler() {
        return function (err) {
          // Remove all event handlers
          var events = ['timeout', 'error', 'close'];
          events.forEach(function (e) {
            self.s.coreTopology.removeListener(e, connectHandlers[e]);
          });
          self.s.coreTopology.removeListener('connect', connectErrorHandler); // Try to callback

          try {
            callback(err);
          } catch (err) {
            process.nextTick(function () {
              throw err;
            });
          }
        };
      }; // Actual handler


      var errorHandler = function errorHandler(event) {
        return function (err) {
          if (event !== 'error') {
            self.emit(event, err);
          }
        };
      }; // Error handler


      var reconnectHandler = function reconnectHandler() {
        self.emit('reconnect', self);
        self.s.store.execute();
      }; // Reconnect failed


      var reconnectFailedHandler = function reconnectFailedHandler(err) {
        self.emit('reconnectFailed', err);
        self.s.store.flush(err);
      }; // Destroy called on topology, perform cleanup


      var destroyHandler = function destroyHandler() {
        self.s.store.flush();
      }; // relay the event


      var relay = function relay(event) {
        return function (t, server) {
          self.emit(event, t, server);
        };
      }; // Connect handler


      var connectHandler = function connectHandler() {
        // Clear out all the current handlers left over
        ['timeout', 'error', 'close', 'destroy'].forEach(function (e) {
          self.s.coreTopology.removeAllListeners(e);
        }); // Set up listeners

        self.s.coreTopology.on('timeout', errorHandler('timeout'));
        self.s.coreTopology.once('error', errorHandler('error'));
        self.s.coreTopology.on('close', errorHandler('close')); // Only called on destroy

        self.s.coreTopology.on('destroy', destroyHandler); // Emit open event

        self.emit('open', null, self); // Return correctly

        try {
          callback(null, self);
        } catch (err) {
          process.nextTick(function () {
            throw err;
          });
        }
      }; // Set up listeners


      var connectHandlers = {
        timeout: connectErrorHandler('timeout'),
        error: connectErrorHandler('error'),
        close: connectErrorHandler('close')
      }; // Clear out all the current handlers left over

      ['timeout', 'error', 'close', 'serverOpening', 'serverDescriptionChanged', 'serverHeartbeatStarted', 'serverHeartbeatSucceeded', 'serverHeartbeatFailed', 'serverClosed', 'topologyOpening', 'topologyClosed', 'topologyDescriptionChanged', 'commandStarted', 'commandSucceeded', 'commandFailed'].forEach(function (e) {
        self.s.coreTopology.removeAllListeners(e);
      }); // Add the event handlers

      self.s.coreTopology.once('timeout', connectHandlers.timeout);
      self.s.coreTopology.once('error', connectHandlers.error);
      self.s.coreTopology.once('close', connectHandlers.close);
      self.s.coreTopology.once('connect', connectHandler); // Reconnect server

      self.s.coreTopology.on('reconnect', reconnectHandler);
      self.s.coreTopology.on('reconnectFailed', reconnectFailedHandler); // Set up SDAM listeners

      self.s.coreTopology.on('serverDescriptionChanged', relay('serverDescriptionChanged'));
      self.s.coreTopology.on('serverHeartbeatStarted', relay('serverHeartbeatStarted'));
      self.s.coreTopology.on('serverHeartbeatSucceeded', relay('serverHeartbeatSucceeded'));
      self.s.coreTopology.on('serverHeartbeatFailed', relay('serverHeartbeatFailed'));
      self.s.coreTopology.on('serverOpening', relay('serverOpening'));
      self.s.coreTopology.on('serverClosed', relay('serverClosed'));
      self.s.coreTopology.on('topologyOpening', relay('topologyOpening'));
      self.s.coreTopology.on('topologyClosed', relay('topologyClosed'));
      self.s.coreTopology.on('topologyDescriptionChanged', relay('topologyDescriptionChanged'));
      self.s.coreTopology.on('commandStarted', relay('commandStarted'));
      self.s.coreTopology.on('commandSucceeded', relay('commandSucceeded'));
      self.s.coreTopology.on('commandFailed', relay('commandFailed'));
      self.s.coreTopology.on('attemptReconnect', relay('attemptReconnect'));
      self.s.coreTopology.on('monitoring', relay('monitoring')); // Start connection

      self.s.coreTopology.connect(_options);
    }
  }]);

  return Server;
}(TopologyBase);

Object.defineProperty(Server.prototype, 'poolSize', {
  enumerable: true,
  get: function get() {
    return this.s.coreTopology.connections().length;
  }
});
Object.defineProperty(Server.prototype, 'autoReconnect', {
  enumerable: true,
  get: function get() {
    return this.s.reconnect;
  }
});
Object.defineProperty(Server.prototype, 'host', {
  enumerable: true,
  get: function get() {
    return this.s.host;
  }
});
Object.defineProperty(Server.prototype, 'port', {
  enumerable: true,
  get: function get() {
    return this.s.port;
  }
});
/**
 * Server connect event
 *
 * @event Server#connect
 * @type {object}
 */

/**
 * Server close event
 *
 * @event Server#close
 * @type {object}
 */

/**
 * Server reconnect event
 *
 * @event Server#reconnect
 * @type {object}
 */

/**
 * Server error event
 *
 * @event Server#error
 * @type {MongoError}
 */

/**
 * Server timeout event
 *
 * @event Server#timeout
 * @type {object}
 */

/**
 * Server parseError event
 *
 * @event Server#parseError
 * @type {object}
 */

/**
 * An event emitted indicating a command was started, if command monitoring is enabled
 *
 * @event Server#commandStarted
 * @type {object}
 */

/**
 * An event emitted indicating a command succeeded, if command monitoring is enabled
 *
 * @event Server#commandSucceeded
 * @type {object}
 */

/**
 * An event emitted indicating a command failed, if command monitoring is enabled
 *
 * @event Server#commandFailed
 * @type {object}
 */

module.exports = Server;