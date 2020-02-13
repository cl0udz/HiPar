'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

var _makeStateMachine;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventEmitter = require('events');

var MongoError = require('../error').MongoError;

var Pool = require('../connection/pool');

var relayEvents = require('../utils').relayEvents;

var wireProtocol = require('../wireprotocol');

var BSON = require('../connection/utils').retrieveBSON();

var createClientInfo = require('../topologies/shared').createClientInfo;

var Logger = require('../connection/logger');

var ServerDescription = require('./server_description').ServerDescription;

var ReadPreference = require('../topologies/read_preference');

var monitorServer = require('./monitoring').monitorServer;

var MongoParseError = require('../error').MongoParseError;

var MongoNetworkError = require('../error').MongoNetworkError;

var collationNotSupported = require('../utils').collationNotSupported;

var debugOptions = require('../connection/utils').debugOptions;

var isSDAMUnrecoverableError = require('../error').isSDAMUnrecoverableError;

var makeStateMachine = require('../utils').makeStateMachine;

var common = require('./common'); // Used for filtering out fields for logging


var DEBUG_FIELDS = ['reconnect', 'reconnectTries', 'reconnectInterval', 'emitError', 'cursorFactory', 'host', 'port', 'size', 'keepAlive', 'keepAliveInitialDelay', 'noDelay', 'connectionTimeout', 'checkServerIdentity', 'socketTimeout', 'ssl', 'ca', 'crl', 'cert', 'key', 'rejectUnauthorized', 'promoteLongs', 'promoteValues', 'promoteBuffers', 'servername'];
var STATE_CLOSING = common.STATE_CLOSING;
var STATE_CLOSED = common.STATE_CLOSED;
var STATE_CONNECTING = common.STATE_CONNECTING;
var STATE_CONNECTED = common.STATE_CONNECTED;
var stateTransition = makeStateMachine((_makeStateMachine = {}, _defineProperty(_makeStateMachine, STATE_CLOSED, [STATE_CLOSED, STATE_CONNECTING]), _defineProperty(_makeStateMachine, STATE_CONNECTING, [STATE_CONNECTING, STATE_CLOSING, STATE_CONNECTED, STATE_CLOSED]), _defineProperty(_makeStateMachine, STATE_CONNECTED, [STATE_CONNECTED, STATE_CLOSING, STATE_CLOSED]), _defineProperty(_makeStateMachine, STATE_CLOSING, [STATE_CLOSING, STATE_CLOSED]), _makeStateMachine));
/**
 *
 * @fires Server#serverHeartbeatStarted
 * @fires Server#serverHeartbeatSucceeded
 * @fires Server#serverHeartbeatFailed
 */

var Server =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Server, _EventEmitter);

  /**
   * Create a server
   *
   * @param {ServerDescription} description
   * @param {Object} options
   */
  function Server(description, options, topology) {
    var _this;

    _classCallCheck(this, Server);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Server).call(this));
    _this.s = {
      // the server description
      description: description,
      // a saved copy of the incoming options
      options: options,
      // the server logger
      logger: Logger('Server', options),
      // the bson parser
      bson: options.bson || new BSON([BSON.Binary, BSON.Code, BSON.DBRef, BSON.Decimal128, BSON.Double, BSON.Int32, BSON.Long, BSON.Map, BSON.MaxKey, BSON.MinKey, BSON.ObjectId, BSON.BSONRegExp, BSON.Symbol, BSON.Timestamp]),
      // client metadata for the initial handshake
      clientInfo: createClientInfo(options),
      // state variable to determine if there is an active server check in progress
      monitoring: false,
      // the implementation of the monitoring method
      monitorFunction: options.monitorFunction || monitorServer,
      // the connection pool
      pool: null,
      // the server state
      state: STATE_CLOSED,
      credentials: options.credentials,
      topology: topology
    };
    return _this;
  }

  _createClass(Server, [{
    key: "connect",

    /**
     * Initiate server connect
     */
    value: function connect(options) {
      var _this2 = this;

      options = options || {}; // do not allow connect to be called on anything that's not disconnected

      if (this.s.pool && !this.s.pool.isDisconnected() && !this.s.pool.isDestroyed()) {
        throw new MongoError("Server instance in invalid state ".concat(this.s.pool.state));
      } // create a pool


      var addressParts = this.description.address.split(':');
      var poolOptions = Object.assign({
        host: addressParts[0],
        port: parseInt(addressParts[1], 10)
      }, this.s.options, options, {
        bson: this.s.bson
      }); // NOTE: reconnect is explicitly false because of the server selection loop

      poolOptions.reconnect = false;
      poolOptions.legacyCompatMode = false;
      this.s.pool = new Pool(this, poolOptions); // setup listeners

      this.s.pool.on('parseError', parseErrorEventHandler(this));
      this.s.pool.on('drain', function (err) {
        _this2.emit('error', err);
      }); // it is unclear whether consumers should even know about these events
      // this.s.pool.on('timeout', timeoutEventHandler(this));
      // this.s.pool.on('reconnect', reconnectEventHandler(this));
      // this.s.pool.on('reconnectFailed', errorEventHandler(this));
      // relay all command monitoring events

      relayEvents(this.s.pool, this, ['commandStarted', 'commandSucceeded', 'commandFailed']);
      stateTransition(this, STATE_CONNECTING);
      this.s.pool.connect(connectEventHandler(this));
    }
    /**
     * Destroy the server connection
     *
     * @param {Boolean} [options.force=false] Force destroy the pool
     */

  }, {
    key: "destroy",
    value: function destroy(options, callback) {
      var _this3 = this;

      if (typeof options === 'function') callback = options, options = {};
      options = Object.assign({}, {
        force: false
      }, options);

      if (this.s.state === STATE_CLOSED) {
        if (typeof callback === 'function') {
          callback();
        }

        return;
      }

      stateTransition(this, STATE_CLOSING);

      var done = function done(err) {
        stateTransition(_this3, STATE_CLOSED);

        _this3.emit('closed');

        if (typeof callback === 'function') {
          callback(err, null);
        }
      };

      if (!this.s.pool) {
        return done();
      }

      ['close', 'error', 'timeout', 'parseError', 'connect'].forEach(function (event) {
        _this3.s.pool.removeAllListeners(event);
      });

      if (this.s.monitorId) {
        clearTimeout(this.s.monitorId);
      }

      this.s.pool.destroy(options.force, done);
    }
    /**
     * Immediately schedule monitoring of this server. If there already an attempt being made
     * this will be a no-op.
     */

  }, {
    key: "monitor",
    value: function monitor(options) {
      options = options || {};
      if (this.s.state !== STATE_CONNECTED || this.s.monitoring) return;
      if (this.s.monitorId) clearTimeout(this.s.monitorId);
      this.s.monitorFunction(this, options);
    }
    /**
     * Execute a command
     *
     * @param {string} ns The MongoDB fully qualified namespace (ex: db1.collection1)
     * @param {object} cmd The command hash
     * @param {ReadPreference} [options.readPreference] Specify read preference if command supports it
     * @param {Boolean} [options.serializeFunctions=false] Specify if functions on an object should be serialized.
     * @param {Boolean} [options.checkKeys=false] Specify if the bson parser should validate keys.
     * @param {Boolean} [options.ignoreUndefined=false] Specify if the BSON serializer should ignore undefined fields.
     * @param {Boolean} [options.fullResult=false] Return the full envelope instead of just the result document.
     * @param {ClientSession} [options.session=null] Session to use for the operation
     * @param {opResultCallback} callback A callback function
     */

  }, {
    key: "command",
    value: function command(ns, cmd, options, callback) {
      var _this4 = this;

      if (typeof options === 'function') {
        callback = options, options = {}, options = options || {};
      }

      if (this.s.state === STATE_CLOSING || this.s.state === STATE_CLOSED) {
        callback(new MongoError('server is closed'));
        return;
      }

      var error = basicReadValidations(this, options);

      if (error) {
        return callback(error, null);
      } // Clone the options


      options = Object.assign({}, options, {
        wireProtocolCommand: false
      }); // Debug log

      if (this.s.logger.isDebug()) {
        this.s.logger.debug("executing command [".concat(JSON.stringify({
          ns: ns,
          cmd: cmd,
          options: debugOptions(DEBUG_FIELDS, options)
        }), "] against ").concat(this.name));
      } // error if collation not supported


      if (collationNotSupported(this, cmd)) {
        callback(new MongoError("server ".concat(this.name, " does not support collation")));
        return;
      }

      wireProtocol.command(this, ns, cmd, options, function (err, result) {
        if (err) {
          if (options.session && err instanceof MongoNetworkError) {
            options.session.serverSession.isDirty = true;
          }

          if (isSDAMUnrecoverableError(err, _this4)) {
            _this4.emit('error', err);
          }
        }

        callback(err, result);
      });
    }
    /**
     * Execute a query against the server
     *
     * @param {string} ns The MongoDB fully qualified namespace (ex: db1.collection1)
     * @param {object} cmd The command document for the query
     * @param {object} options Optional settings
     * @param {function} callback
     */

  }, {
    key: "query",
    value: function query(ns, cmd, cursorState, options, callback) {
      var _this5 = this;

      if (this.s.state === STATE_CLOSING || this.s.state === STATE_CLOSED) {
        callback(new MongoError('server is closed'));
        return;
      }

      wireProtocol.query(this, ns, cmd, cursorState, options, function (err, result) {
        if (err) {
          if (options.session && err instanceof MongoNetworkError) {
            options.session.serverSession.isDirty = true;
          }

          if (isSDAMUnrecoverableError(err, _this5)) {
            _this5.emit('error', err);
          }
        }

        callback(err, result);
      });
    }
    /**
     * Execute a `getMore` against the server
     *
     * @param {string} ns The MongoDB fully qualified namespace (ex: db1.collection1)
     * @param {object} cursorState State data associated with the cursor calling this method
     * @param {object} options Optional settings
     * @param {function} callback
     */

  }, {
    key: "getMore",
    value: function getMore(ns, cursorState, batchSize, options, callback) {
      var _this6 = this;

      if (this.s.state === STATE_CLOSING || this.s.state === STATE_CLOSED) {
        callback(new MongoError('server is closed'));
        return;
      }

      wireProtocol.getMore(this, ns, cursorState, batchSize, options, function (err, result) {
        if (err) {
          if (options.session && err instanceof MongoNetworkError) {
            options.session.serverSession.isDirty = true;
          }

          if (isSDAMUnrecoverableError(err, _this6)) {
            _this6.emit('error', err);
          }
        }

        callback(err, result);
      });
    }
    /**
     * Execute a `killCursors` command against the server
     *
     * @param {string} ns The MongoDB fully qualified namespace (ex: db1.collection1)
     * @param {object} cursorState State data associated with the cursor calling this method
     * @param {function} callback
     */

  }, {
    key: "killCursors",
    value: function killCursors(ns, cursorState, callback) {
      var _this7 = this;

      if (this.s.state === STATE_CLOSING || this.s.state === STATE_CLOSED) {
        if (typeof callback === 'function') {
          callback(new MongoError('server is closed'));
        }

        return;
      }

      wireProtocol.killCursors(this, ns, cursorState, function (err, result) {
        if (err && isSDAMUnrecoverableError(err, _this7)) {
          _this7.emit('error', err);
        }

        if (typeof callback === 'function') {
          callback(err, result);
        }
      });
    }
    /**
     * Insert one or more documents
     * @method
     * @param {string} ns The MongoDB fully qualified namespace (ex: db1.collection1)
     * @param {array} ops An array of documents to insert
     * @param {boolean} [options.ordered=true] Execute in order or out of order
     * @param {object} [options.writeConcern={}] Write concern for the operation
     * @param {Boolean} [options.serializeFunctions=false] Specify if functions on an object should be serialized.
     * @param {Boolean} [options.ignoreUndefined=false] Specify if the BSON serializer should ignore undefined fields.
     * @param {ClientSession} [options.session=null] Session to use for the operation
     * @param {opResultCallback} callback A callback function
     */

  }, {
    key: "insert",
    value: function insert(ns, ops, options, callback) {
      executeWriteOperation({
        server: this,
        op: 'insert',
        ns: ns,
        ops: ops
      }, options, callback);
    }
    /**
     * Perform one or more update operations
     * @method
     * @param {string} ns The MongoDB fully qualified namespace (ex: db1.collection1)
     * @param {array} ops An array of updates
     * @param {boolean} [options.ordered=true] Execute in order or out of order
     * @param {object} [options.writeConcern={}] Write concern for the operation
     * @param {Boolean} [options.serializeFunctions=false] Specify if functions on an object should be serialized.
     * @param {Boolean} [options.ignoreUndefined=false] Specify if the BSON serializer should ignore undefined fields.
     * @param {ClientSession} [options.session=null] Session to use for the operation
     * @param {opResultCallback} callback A callback function
     */

  }, {
    key: "update",
    value: function update(ns, ops, options, callback) {
      executeWriteOperation({
        server: this,
        op: 'update',
        ns: ns,
        ops: ops
      }, options, callback);
    }
    /**
     * Perform one or more remove operations
     * @method
     * @param {string} ns The MongoDB fully qualified namespace (ex: db1.collection1)
     * @param {array} ops An array of removes
     * @param {boolean} [options.ordered=true] Execute in order or out of order
     * @param {object} [options.writeConcern={}] Write concern for the operation
     * @param {Boolean} [options.serializeFunctions=false] Specify if functions on an object should be serialized.
     * @param {Boolean} [options.ignoreUndefined=false] Specify if the BSON serializer should ignore undefined fields.
     * @param {ClientSession} [options.session=null] Session to use for the operation
     * @param {opResultCallback} callback A callback function
     */

  }, {
    key: "remove",
    value: function remove(ns, ops, options, callback) {
      executeWriteOperation({
        server: this,
        op: 'remove',
        ns: ns,
        ops: ops
      }, options, callback);
    }
  }, {
    key: "description",
    get: function get() {
      return this.s.description;
    }
  }, {
    key: "name",
    get: function get() {
      return this.s.description.address;
    }
  }, {
    key: "autoEncrypter",
    get: function get() {
      if (this.s.options && this.s.options.autoEncrypter) {
        return this.s.options.autoEncrypter;
      }

      return null;
    }
  }]);

  return Server;
}(EventEmitter);

Object.defineProperty(Server.prototype, 'clusterTime', {
  get: function get() {
    return this.s.topology.clusterTime;
  },
  set: function set(clusterTime) {
    this.s.topology.clusterTime = clusterTime;
  }
});

function basicWriteValidations(server) {
  if (!server.s.pool) {
    return new MongoError('server instance is not connected');
  }

  if (server.s.pool.isDestroyed()) {
    return new MongoError('server instance pool was destroyed');
  }

  return null;
}

function basicReadValidations(server, options) {
  var error = basicWriteValidations(server, options);

  if (error) {
    return error;
  }

  if (options.readPreference && !(options.readPreference instanceof ReadPreference)) {
    return new MongoError('readPreference must be an instance of ReadPreference');
  }
}

function executeWriteOperation(args, options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {}; // TODO: once we drop Node 4, use destructuring either here or in arguments.

  var server = args.server;
  var op = args.op;
  var ns = args.ns;
  var ops = Array.isArray(args.ops) ? args.ops : [args.ops];

  if (server.s.state === STATE_CLOSING || server.s.state === STATE_CLOSED) {
    callback(new MongoError('server is closed'));
    return;
  }

  var error = basicWriteValidations(server, options);

  if (error) {
    callback(error, null);
    return;
  }

  if (collationNotSupported(server, options)) {
    callback(new MongoError("server ".concat(server.name, " does not support collation")));
    return;
  }

  return wireProtocol[op](server, ns, ops, options, function (err, result) {
    if (err) {
      if (options.session && err instanceof MongoNetworkError) {
        options.session.serverSession.isDirty = true;
      }

      if (isSDAMUnrecoverableError(err, server)) {
        server.emit('error', err);
      }
    }

    callback(err, result);
  });
}

function connectEventHandler(server) {
  return function (err, conn) {
    if (server.s.state === STATE_CLOSING || server.s.state === STATE_CLOSED) {
      return;
    }

    if (err) {
      server.emit('error', new MongoNetworkError(err));
      stateTransition(server, STATE_CLOSED);
      server.emit('close');
      return;
    }

    var ismaster = conn.ismaster;
    server.s.lastIsMasterMS = conn.lastIsMasterMS;

    if (conn.agreedCompressor) {
      server.s.pool.options.agreedCompressor = conn.agreedCompressor;
    }

    if (conn.zlibCompressionLevel) {
      server.s.pool.options.zlibCompressionLevel = conn.zlibCompressionLevel;
    }

    if (conn.ismaster.$clusterTime) {
      var $clusterTime = conn.ismaster.$clusterTime;
      server.s.sclusterTime = $clusterTime;
    } // log the connection event if requested


    if (server.s.logger.isInfo()) {
      server.s.logger.info("server ".concat(server.name, " connected with ismaster [").concat(JSON.stringify(ismaster), "]"));
    } // we are connected and handshaked (guaranteed by the pool)


    stateTransition(server, STATE_CONNECTED);
    server.emit('connect', server); // emit an event indicating that our description has changed

    server.emit('descriptionReceived', new ServerDescription(server.description.address, ismaster));
  };
}

function parseErrorEventHandler(server) {
  return function (err) {
    stateTransition(this, STATE_CLOSED);
    server.emit('error', new MongoParseError(err));
  };
}

module.exports = {
  Server: Server
};