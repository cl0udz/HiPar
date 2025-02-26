'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.some");

require("core-js/modules/es.function.bind");

require("core-js/modules/es.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.timers");

var _makeStateMachine;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventEmitter = require('events');

var ServerDescription = require('./server_description').ServerDescription;

var ServerType = require('./common').ServerType;

var TopologyDescription = require('./topology_description').TopologyDescription;

var TopologyType = require('./common').TopologyType;

var monitoring = require('./monitoring');

var Server = require('./server').Server;

var relayEvents = require('../utils').relayEvents;

var ReadPreference = require('../topologies/read_preference');

var isRetryableWritesSupported = require('../topologies/shared').isRetryableWritesSupported;

var CoreCursor = require('../cursor').CoreCursor;

var deprecate = require('util').deprecate;

var BSON = require('../connection/utils').retrieveBSON();

var createCompressionInfo = require('../topologies/shared').createCompressionInfo;

var isRetryableError = require('../error').isRetryableError;

var isSDAMUnrecoverableError = require('../error').isSDAMUnrecoverableError;

var ClientSession = require('../sessions').ClientSession;

var createClientInfo = require('../topologies/shared').createClientInfo;

var MongoError = require('../error').MongoError;

var resolveClusterTime = require('../topologies/shared').resolveClusterTime;

var SrvPoller = require('./srv_polling').SrvPoller;

var getMMAPError = require('../topologies/shared').getMMAPError;

var makeStateMachine = require('../utils').makeStateMachine;

var eachAsync = require('../utils').eachAsync;

var emitDeprecationWarning = require('../../utils').emitDeprecationWarning;

var common = require('./common');

var drainTimerQueue = common.drainTimerQueue;
var clearAndRemoveTimerFrom = common.clearAndRemoveTimerFrom;

var serverSelection = require('./server_selection');

var readPreferenceServerSelector = serverSelection.readPreferenceServerSelector;
var writableServerSelector = serverSelection.writableServerSelector;
var selectServers = serverSelection.selectServers; // Global state

var globalTopologyCounter = 0; // events that we relay to the `Topology`

var SERVER_RELAY_EVENTS = ['serverHeartbeatStarted', 'serverHeartbeatSucceeded', 'serverHeartbeatFailed', 'commandStarted', 'commandSucceeded', 'commandFailed', // NOTE: Legacy events
'monitoring']; // all events we listen to from `Server` instances

var LOCAL_SERVER_EVENTS = SERVER_RELAY_EVENTS.concat(['error', 'connect', 'descriptionReceived', 'close', 'ended']);
var STATE_CLOSING = common.STATE_CLOSING;
var STATE_CLOSED = common.STATE_CLOSED;
var STATE_CONNECTING = common.STATE_CONNECTING;
var STATE_CONNECTED = common.STATE_CONNECTED;
var stateTransition = makeStateMachine((_makeStateMachine = {}, _defineProperty(_makeStateMachine, STATE_CLOSED, [STATE_CLOSED, STATE_CONNECTING]), _defineProperty(_makeStateMachine, STATE_CONNECTING, [STATE_CONNECTING, STATE_CLOSING, STATE_CONNECTED, STATE_CLOSED]), _defineProperty(_makeStateMachine, STATE_CONNECTED, [STATE_CONNECTED, STATE_CLOSING, STATE_CLOSED]), _defineProperty(_makeStateMachine, STATE_CLOSING, [STATE_CLOSING, STATE_CLOSED]), _makeStateMachine));
var DEPRECATED_OPTIONS = new Set(['autoReconnect', 'reconnectTries', 'reconnectInterval', 'bufferMaxEntries']);
/**
 * A container of server instances representing a connection to a MongoDB topology.
 *
 * @fires Topology#serverOpening
 * @fires Topology#serverClosed
 * @fires Topology#serverDescriptionChanged
 * @fires Topology#topologyOpening
 * @fires Topology#topologyClosed
 * @fires Topology#topologyDescriptionChanged
 * @fires Topology#serverHeartbeatStarted
 * @fires Topology#serverHeartbeatSucceeded
 * @fires Topology#serverHeartbeatFailed
 */

var Topology =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Topology, _EventEmitter);

  /**
   * Create a topology
   *
   * @param {Array|String} [seedlist] a string list, or array of Server instances to connect to
   * @param {Object} [options] Optional settings
   * @param {Number} [options.localThresholdMS=15] The size of the latency window for selecting among multiple suitable servers
   * @param {Number} [options.serverSelectionTimeoutMS=30000] How long to block for server selection before throwing an error
   * @param {Number} [options.heartbeatFrequencyMS=10000] The frequency with which topology updates are scheduled
   */
  function Topology(seedlist, options) {
    var _this;

    _classCallCheck(this, Topology);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Topology).call(this));

    if (typeof options === 'undefined' && typeof seedlist !== 'string') {
      options = seedlist;
      seedlist = []; // this is for legacy single server constructor support

      if (options.host) {
        seedlist.push({
          host: options.host,
          port: options.port
        });
      }
    }

    seedlist = seedlist || [];

    if (typeof seedlist === 'string') {
      seedlist = parseStringSeedlist(seedlist);
    }

    options = Object.assign({}, common.TOPOLOGY_DEFAULTS, options);
    DEPRECATED_OPTIONS.forEach(function (optionName) {
      if (options[optionName]) {
        emitDeprecationWarning("The option `".concat(optionName, "` is incompatible with the unified topology, please read more by visiting http://bit.ly/2D8WfT6"), 'DeprecationWarning');
      }
    });
    var topologyType = topologyTypeFromSeedlist(seedlist, options);
    var topologyId = globalTopologyCounter++;
    var serverDescriptions = seedlist.reduce(function (result, seed) {
      if (seed.domain_socket) seed.host = seed.domain_socket;
      var address = seed.port ? "".concat(seed.host, ":").concat(seed.port) : "".concat(seed.host, ":27017");
      result.set(address, new ServerDescription(address));
      return result;
    }, new Map());
    _this.s = {
      // the id of this topology
      id: topologyId,
      // passed in options
      options: options,
      // initial seedlist of servers to connect to
      seedlist: seedlist,
      // initial state
      state: STATE_CLOSED,
      // the topology description
      description: new TopologyDescription(topologyType, serverDescriptions, options.replicaSet, null, null, null, options),
      serverSelectionTimeoutMS: options.serverSelectionTimeoutMS,
      heartbeatFrequencyMS: options.heartbeatFrequencyMS,
      minHeartbeatFrequencyMS: options.minHeartbeatFrequencyMS,
      // allow users to override the cursor factory
      Cursor: options.cursorFactory || CoreCursor,
      // the bson parser
      bson: options.bson || new BSON([BSON.Binary, BSON.Code, BSON.DBRef, BSON.Decimal128, BSON.Double, BSON.Int32, BSON.Long, BSON.Map, BSON.MaxKey, BSON.MinKey, BSON.ObjectId, BSON.BSONRegExp, BSON.Symbol, BSON.Timestamp]),
      // a map of server instances to normalized addresses
      servers: new Map(),
      // Server Session Pool
      sessionPool: null,
      // Active client sessions
      sessions: new Set(),
      // Promise library
      promiseLibrary: options.promiseLibrary || Promise,
      credentials: options.credentials,
      clusterTime: null,
      // timer management
      iterationTimers: new Set(),
      connectionTimers: new Set()
    }; // amend options for server instance creation

    _this.s.options.compression = {
      compressors: createCompressionInfo(options)
    }; // add client info

    _this.s.clientInfo = createClientInfo(options);

    if (options.srvHost) {
      _this.s.srvPoller = options.srvPoller || new SrvPoller({
        heartbeatFrequencyMS: _this.s.heartbeatFrequencyMS,
        srvHost: options.srvHost,
        // TODO: GET THIS
        logger: options.logger,
        loggerLevel: options.loggerLevel
      });

      _this.s.detectTopologyDescriptionChange = function (ev) {
        var previousType = ev.previousDescription.type;
        var newType = ev.newDescription.type;

        if (previousType !== TopologyType.Sharded && newType === TopologyType.Sharded) {
          _this.s.handleSrvPolling = srvPollingHandler(_assertThisInitialized(_this));

          _this.s.srvPoller.on('srvRecordDiscovery', _this.s.handleSrvPolling);

          _this.s.srvPoller.start();
        }
      };

      _this.on('topologyDescriptionChanged', _this.s.detectTopologyDescriptionChange);
    } // NOTE: remove this when NODE-1709 is resolved


    _this.setMaxListeners(Infinity);

    return _this;
  }
  /**
   * @return A `TopologyDescription` for this topology
   */


  _createClass(Topology, [{
    key: "connections",

    /**
     * All raw connections
     * @method
     * @return {Connection[]}
     */
    value: function connections() {
      return Array.from(this.s.servers.values()).reduce(function (result, server) {
        return result.concat(server.s.pool.allConnections());
      }, []);
    }
    /**
     * Initiate server connect
     *
     * @param {Object} [options] Optional settings
     * @param {Array} [options.auth=null] Array of auth options to apply on connect
     * @param {function} [callback] An optional callback called once on the first connected server
     */

  }, {
    key: "connect",
    value: function connect(options, callback) {
      var _this2 = this;

      if (typeof options === 'function') callback = options, options = {};
      options = options || {};

      if (this.s.state === STATE_CONNECTED) {
        if (typeof callback === 'function') {
          callback();
        }

        return;
      }

      stateTransition(this, STATE_CONNECTING); // emit SDAM monitoring events

      this.emit('topologyOpening', new monitoring.TopologyOpeningEvent(this.s.id)); // emit an event for the topology change

      this.emit('topologyDescriptionChanged', new monitoring.TopologyDescriptionChangedEvent(this.s.id, new TopologyDescription(TopologyType.Unknown), // initial is always Unknown
      this.s.description)); // connect all known servers, then attempt server selection to connect

      connectServers(this, Array.from(this.s.description.servers.values()));
      translateReadPreference(options);
      var readPreference = options.readPreference || ReadPreference.primary;
      this.selectServer(readPreferenceServerSelector(readPreference), options, function (err, server) {
        if (err) {
          stateTransition(_this2, STATE_CLOSED);

          if (typeof callback === 'function') {
            callback(err, null);
          } else {
            _this2.emit('error', err);
          }

          return;
        }

        var errorHandler = function errorHandler(err) {
          stateTransition(_this2, STATE_CLOSED);
          server.removeListener('connect', connectHandler);
          if (typeof callback === 'function') callback(err, null);
        };

        var connectHandler = function connectHandler(_, err) {
          stateTransition(_this2, STATE_CONNECTED);
          server.removeListener('error', errorHandler);

          _this2.emit('open', err, _this2);

          _this2.emit('connect', _this2);

          if (typeof callback === 'function') callback(err, _this2);
        };

        var STATE_CONNECTING = 1;

        if (server.s.state === STATE_CONNECTING) {
          server.once('error', errorHandler);
          server.once('connect', connectHandler);
          return;
        }

        connectHandler();
      });
    }
    /**
     * Close this topology
     */

  }, {
    key: "close",
    value: function close(options, callback) {
      var _this3 = this;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (typeof options === 'boolean') {
        options = {
          force: options
        };
      }

      options = options || {};

      if (this.s.state === STATE_CLOSED) {
        if (typeof callback === 'function') {
          callback();
        }

        return;
      } // clear all existing monitor timers


      drainTimerQueue(this.s.iterationTimers);
      drainTimerQueue(this.s.connectionTimers);

      if (this.s.sessionPool) {
        this.s.sessions.forEach(function (session) {
          return session.endSession();
        });
        this.s.sessionPool.endAllPooledSessions();
      }

      if (this.s.srvPoller) {
        this.s.srvPoller.stop();

        if (this.s.handleSrvPolling) {
          this.s.srvPoller.removeListener('srvRecordDiscovery', this.s.handleSrvPolling);
          delete this.s.handleSrvPolling;
        }
      }

      if (this.s.detectTopologyDescriptionChange) {
        this.removeListener('topologyDescriptionChanged', this.s.detectTopologyDescriptionChange);
        delete this.s.detectTopologyDescriptionChange;
      } // defer state transition because we may need to send an `endSessions` command above


      stateTransition(this, STATE_CLOSING);
      eachAsync(Array.from(this.s.servers.values()), function (server, cb) {
        return destroyServer(server, _this3, options, cb);
      }, function () {
        _this3.s.servers.clear(); // emit an event for close


        _this3.emit('topologyClosed', new monitoring.TopologyClosedEvent(_this3.s.id));

        stateTransition(_this3, STATE_CLOSED);

        _this3.emit('close');

        if (typeof callback === 'function') {
          callback();
        }
      });
    }
    /**
     * Selects a server according to the selection predicate provided
     *
     * @param {function} [selector] An optional selector to select servers by, defaults to a random selection within a latency window
     * @param {object} [options] Optional settings related to server selection
     * @param {number} [options.serverSelectionTimeoutMS] How long to block for server selection before throwing an error
     * @param {function} callback The callback used to indicate success or failure
     * @return {Server} An instance of a `Server` meeting the criteria of the predicate provided
     */

  }, {
    key: "selectServer",
    value: function selectServer(selector, options, callback) {
      if (typeof options === 'function') {
        callback = options;

        if (typeof selector !== 'function') {
          options = selector;
          var readPreference;

          if (selector instanceof ReadPreference) {
            readPreference = selector;
          } else {
            translateReadPreference(options);
            readPreference = options.readPreference || ReadPreference.primary;
          }

          selector = readPreferenceServerSelector(readPreference);
        } else {
          options = {};
        }
      }

      options = Object.assign({}, {
        serverSelectionTimeoutMS: this.s.serverSelectionTimeoutMS
      }, options);
      var isSharded = this.description.type === TopologyType.Sharded;
      var session = options.session;
      var transaction = session && session.transaction;

      if (isSharded && transaction && transaction.server) {
        callback(null, transaction.server);
        return;
      }

      selectServers(this, selector, options.serverSelectionTimeoutMS, process.hrtime(), function (err, servers) {
        if (err) return callback(err);
        var selectedServer = randomSelection(servers);

        if (isSharded && transaction && transaction.isActive) {
          transaction.pinServer(selectedServer);
        }

        callback(null, selectedServer);
      });
    } // Sessions related methods

    /**
     * @return Whether the topology should initiate selection to determine session support
     */

  }, {
    key: "shouldCheckForSessionSupport",
    value: function shouldCheckForSessionSupport() {
      if (this.description.type === TopologyType.Single) {
        return !this.description.hasKnownServers;
      }

      return !this.description.hasDataBearingServers;
    }
    /**
     * @return Whether sessions are supported on the current topology
     */

  }, {
    key: "hasSessionSupport",
    value: function hasSessionSupport() {
      return this.description.logicalSessionTimeoutMinutes != null;
    }
    /**
     * Start a logical session
     */

  }, {
    key: "startSession",
    value: function startSession(options, clientOptions) {
      var _this4 = this;

      var session = new ClientSession(this, this.s.sessionPool, options, clientOptions);
      session.once('ended', function () {
        _this4.s.sessions["delete"](session);
      });
      this.s.sessions.add(session);
      return session;
    }
    /**
     * Send endSessions command(s) with the given session ids
     *
     * @param {Array} sessions The sessions to end
     * @param {function} [callback]
     */

  }, {
    key: "endSessions",
    value: function endSessions(sessions, callback) {
      if (!Array.isArray(sessions)) {
        sessions = [sessions];
      }

      this.command('admin.$cmd', {
        endSessions: sessions
      }, {
        readPreference: ReadPreference.primaryPreferred,
        noResponse: true
      }, function () {
        // intentionally ignored, per spec
        if (typeof callback === 'function') callback();
      });
    }
    /**
     * Update the internal TopologyDescription with a ServerDescription
     *
     * @param {object} serverDescription The server to update in the internal list of server descriptions
     */

  }, {
    key: "serverUpdateHandler",
    value: function serverUpdateHandler(serverDescription) {
      if (!this.s.description.hasServer(serverDescription.address)) {
        return;
      } // these will be used for monitoring events later


      var previousTopologyDescription = this.s.description;
      var previousServerDescription = this.s.description.servers.get(serverDescription.address); // Driver Sessions Spec: "Whenever a driver receives a cluster time from
      // a server it MUST compare it to the current highest seen cluster time
      // for the deployment. If the new cluster time is higher than the
      // highest seen cluster time it MUST become the new highest seen cluster
      // time. Two cluster times are compared using only the BsonTimestamp
      // value of the clusterTime embedded field."

      var clusterTime = serverDescription.$clusterTime;

      if (clusterTime) {
        resolveClusterTime(this, clusterTime);
      } // If we already know all the information contained in this updated description, then
      // we don't need to update anything or emit SDAM events


      if (previousServerDescription && previousServerDescription.equals(serverDescription)) {
        return;
      } // first update the TopologyDescription


      this.s.description = this.s.description.update(serverDescription);

      if (this.s.description.compatibilityError) {
        this.emit('error', new MongoError(this.s.description.compatibilityError));
        return;
      } // emit monitoring events for this change


      this.emit('serverDescriptionChanged', new monitoring.ServerDescriptionChangedEvent(this.s.id, serverDescription.address, previousServerDescription, this.s.description.servers.get(serverDescription.address))); // update server list from updated descriptions

      updateServers(this, serverDescription);
      this.emit('topologyDescriptionChanged', new monitoring.TopologyDescriptionChangedEvent(this.s.id, previousTopologyDescription, this.s.description));
    }
  }, {
    key: "auth",
    value: function auth(credentials, callback) {
      if (typeof credentials === 'function') callback = credentials, credentials = null;
      if (typeof callback === 'function') callback(null, true);
    }
  }, {
    key: "logout",
    value: function logout(callback) {
      if (typeof callback === 'function') callback(null, true);
    } // Basic operation support. Eventually this should be moved into command construction
    // during the command refactor.

    /**
     * Insert one or more documents
     *
     * @param {String} ns The full qualified namespace for this operation
     * @param {Array} ops An array of documents to insert
     * @param {Boolean} [options.ordered=true] Execute in order or out of order
     * @param {Object} [options.writeConcern] Write concern for the operation
     * @param {Boolean} [options.serializeFunctions=false] Specify if functions on an object should be serialized
     * @param {Boolean} [options.ignoreUndefined=false] Specify if the BSON serializer should ignore undefined fields
     * @param {ClientSession} [options.session] Session to use for the operation
     * @param {boolean} [options.retryWrites] Enable retryable writes for this operation
     * @param {opResultCallback} callback A callback function
     */

  }, {
    key: "insert",
    value: function insert(ns, ops, options, callback) {
      executeWriteOperation({
        topology: this,
        op: 'insert',
        ns: ns,
        ops: ops
      }, options, callback);
    }
    /**
     * Perform one or more update operations
     *
     * @param {string} ns The fully qualified namespace for this operation
     * @param {array} ops An array of updates
     * @param {boolean} [options.ordered=true] Execute in order or out of order
     * @param {object} [options.writeConcern] Write concern for the operation
     * @param {Boolean} [options.serializeFunctions=false] Specify if functions on an object should be serialized
     * @param {Boolean} [options.ignoreUndefined=false] Specify if the BSON serializer should ignore undefined fields
     * @param {ClientSession} [options.session] Session to use for the operation
     * @param {boolean} [options.retryWrites] Enable retryable writes for this operation
     * @param {opResultCallback} callback A callback function
     */

  }, {
    key: "update",
    value: function update(ns, ops, options, callback) {
      executeWriteOperation({
        topology: this,
        op: 'update',
        ns: ns,
        ops: ops
      }, options, callback);
    }
    /**
     * Perform one or more remove operations
     *
     * @param {string} ns The MongoDB fully qualified namespace (ex: db1.collection1)
     * @param {array} ops An array of removes
     * @param {boolean} [options.ordered=true] Execute in order or out of order
     * @param {object} [options.writeConcern={}] Write concern for the operation
     * @param {Boolean} [options.serializeFunctions=false] Specify if functions on an object should be serialized.
     * @param {Boolean} [options.ignoreUndefined=false] Specify if the BSON serializer should ignore undefined fields.
     * @param {ClientSession} [options.session=null] Session to use for the operation
     * @param {boolean} [options.retryWrites] Enable retryable writes for this operation
     * @param {opResultCallback} callback A callback function
     */

  }, {
    key: "remove",
    value: function remove(ns, ops, options, callback) {
      executeWriteOperation({
        topology: this,
        op: 'remove',
        ns: ns,
        ops: ops
      }, options, callback);
    }
    /**
     * Execute a command
     *
     * @method
     * @param {string} ns The MongoDB fully qualified namespace (ex: db1.collection1)
     * @param {object} cmd The command hash
     * @param {ReadPreference} [options.readPreference] Specify read preference if command supports it
     * @param {Connection} [options.connection] Specify connection object to execute command against
     * @param {Boolean} [options.serializeFunctions=false] Specify if functions on an object should be serialized.
     * @param {Boolean} [options.ignoreUndefined=false] Specify if the BSON serializer should ignore undefined fields.
     * @param {ClientSession} [options.session=null] Session to use for the operation
     * @param {opResultCallback} callback A callback function
     */

  }, {
    key: "command",
    value: function command(ns, cmd, options, callback) {
      var _this5 = this;

      if (typeof options === 'function') {
        callback = options, options = {}, options = options || {};
      }

      translateReadPreference(options);
      var readPreference = options.readPreference || ReadPreference.primary;
      this.selectServer(readPreferenceServerSelector(readPreference), options, function (err, server) {
        if (err) {
          callback(err);
          return;
        }

        var willRetryWrite = !options.retrying && !!options.retryWrites && options.session && isRetryableWritesSupported(_this5) && !options.session.inTransaction() && isWriteCommand(cmd);

        var cb = function cb(err, result) {
          if (!err) return callback(null, result);

          if (!isRetryableError(err)) {
            return callback(err);
          }

          if (willRetryWrite) {
            var newOptions = Object.assign({}, options, {
              retrying: true
            });
            return _this5.command(ns, cmd, newOptions, callback);
          }

          return callback(err);
        }; // increment and assign txnNumber


        if (willRetryWrite) {
          options.session.incrementTransactionNumber();
          options.willRetryWrite = willRetryWrite;
        }

        server.command(ns, cmd, options, cb);
      });
    }
    /**
     * Create a new cursor
     *
     * @method
     * @param {string} ns The MongoDB fully qualified namespace (ex: db1.collection1)
     * @param {object|Long} cmd Can be either a command returning a cursor or a cursorId
     * @param {object} [options] Options for the cursor
     * @param {object} [options.batchSize=0] Batchsize for the operation
     * @param {array} [options.documents=[]] Initial documents list for cursor
     * @param {ReadPreference} [options.readPreference] Specify read preference if command supports it
     * @param {Boolean} [options.serializeFunctions=false] Specify if functions on an object should be serialized.
     * @param {Boolean} [options.ignoreUndefined=false] Specify if the BSON serializer should ignore undefined fields.
     * @param {ClientSession} [options.session=null] Session to use for the operation
     * @param {object} [options.topology] The internal topology of the created cursor
     * @returns {Cursor}
     */

  }, {
    key: "cursor",
    value: function cursor(ns, cmd, options) {
      options = options || {};
      var topology = options.topology || this;
      var CursorClass = options.cursorFactory || this.s.Cursor;
      translateReadPreference(options);
      return new CursorClass(topology, ns, cmd, options);
    }
  }, {
    key: "isConnected",
    value: function isConnected() {
      return this.s.state === STATE_CONNECTED;
    }
  }, {
    key: "isDestroyed",
    value: function isDestroyed() {
      return this.s.state === STATE_CLOSED;
    }
  }, {
    key: "unref",
    value: function unref() {
      console.log('not implemented: `unref`');
    } // NOTE: There are many places in code where we explicitly check the last isMaster
    //       to do feature support detection. This should be done any other way, but for
    //       now we will just return the first isMaster seen, which should suffice.

  }, {
    key: "lastIsMaster",
    value: function lastIsMaster() {
      var serverDescriptions = Array.from(this.description.servers.values());
      if (serverDescriptions.length === 0) return {};
      var sd = serverDescriptions.filter(function (sd) {
        return sd.type !== ServerType.Unknown;
      })[0];
      var result = sd || {
        maxWireVersion: this.description.commonWireVersion
      };
      return result;
    }
  }, {
    key: "description",
    get: function get() {
      return this.s.description;
    }
  }, {
    key: "parserType",
    get: function get() {
      return BSON["native"] ? 'c++' : 'js';
    }
  }, {
    key: "clientInfo",
    get: function get() {
      return this.s.clientInfo;
    }
  }, {
    key: "logicalSessionTimeoutMinutes",
    get: function get() {
      return this.description.logicalSessionTimeoutMinutes;
    }
  }, {
    key: "bson",
    get: function get() {
      return this.s.bson;
    }
  }]);

  return Topology;
}(EventEmitter);

Object.defineProperty(Topology.prototype, 'clusterTime', {
  enumerable: true,
  get: function get() {
    return this.s.clusterTime;
  },
  set: function set(clusterTime) {
    this.s.clusterTime = clusterTime;
  }
}); // legacy aliases

Topology.prototype.destroy = deprecate(Topology.prototype.close, 'destroy() is deprecated, please use close() instead');
var RETRYABLE_WRITE_OPERATIONS = ['findAndModify', 'insert', 'update', 'delete'];

function isWriteCommand(command) {
  return RETRYABLE_WRITE_OPERATIONS.some(function (op) {
    return command[op];
  });
}
/**
 * Destroys a server, and removes all event listeners from the instance
 *
 * @param {Server} server
 */


function destroyServer(server, topology, options, callback) {
  options = options || {};
  LOCAL_SERVER_EVENTS.forEach(function (event) {
    return server.removeAllListeners(event);
  });
  server.destroy(options, function () {
    topology.emit('serverClosed', new monitoring.ServerClosedEvent(topology.s.id, server.description.address));
    if (typeof callback === 'function') callback(null, null);
  });
}
/**
 * Parses a basic seedlist in string form
 *
 * @param {string} seedlist The seedlist to parse
 */


function parseStringSeedlist(seedlist) {
  return seedlist.split(',').map(function (seed) {
    return {
      host: seed.split(':')[0],
      port: seed.split(':')[1] || 27017
    };
  });
}

function topologyTypeFromSeedlist(seedlist, options) {
  var replicaSet = options.replicaSet || options.setName || options.rs_name;
  if (seedlist.length === 1 && !replicaSet) return TopologyType.Single;
  if (replicaSet) return TopologyType.ReplicaSetNoPrimary;
  return TopologyType.Unknown;
}

function randomSelection(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createAndConnectServer(topology, serverDescription, connectDelay) {
  topology.emit('serverOpening', new monitoring.ServerOpeningEvent(topology.s.id, serverDescription.address));
  var server = new Server(serverDescription, topology.s.options, topology);
  relayEvents(server, topology, SERVER_RELAY_EVENTS);
  server.once('connect', serverConnectEventHandler(server, topology));
  server.on('descriptionReceived', topology.serverUpdateHandler.bind(topology));
  server.on('error', serverErrorEventHandler(server, topology));

  if (connectDelay) {
    var connectTimer = setTimeout(function () {
      clearAndRemoveTimerFrom(connectTimer, topology.s.connectionTimers);
      server.connect();
    }, connectDelay);
    topology.s.connectionTimers.add(connectTimer);
    return server;
  }

  server.connect();
  return server;
}

function resetServer(topology, serverDescription) {
  if (!topology.s.servers.has(serverDescription.address)) {
    return;
  } // first remove the old server


  var server = topology.s.servers.get(serverDescription.address);
  destroyServer(server, topology); // add the new server, and attempt connection after a delay

  var newServer = createAndConnectServer(topology, serverDescription, topology.s.minHeartbeatFrequencyMS);
  topology.s.servers.set(serverDescription.address, newServer);
}
/**
 * Create `Server` instances for all initially known servers, connect them, and assign
 * them to the passed in `Topology`.
 *
 * @param {Topology} topology The topology responsible for the servers
 * @param {ServerDescription[]} serverDescriptions A list of server descriptions to connect
 */


function connectServers(topology, serverDescriptions) {
  topology.s.servers = serverDescriptions.reduce(function (servers, serverDescription) {
    var server = createAndConnectServer(topology, serverDescription);
    servers.set(serverDescription.address, server);
    return servers;
  }, new Map());
}

function updateServers(topology, incomingServerDescription) {
  // if the server was reset internally because of an error, we need to replace the
  // `Server` instance for it so we can attempt reconnect.
  //
  // TODO: this logical can change once CMAP is put in place
  if (incomingServerDescription && incomingServerDescription.error) {
    resetServer(topology, incomingServerDescription);
    return;
  } // update the internal server's description


  if (incomingServerDescription && topology.s.servers.has(incomingServerDescription.address)) {
    var server = topology.s.servers.get(incomingServerDescription.address);
    server.s.description = incomingServerDescription;
  } // add new servers for all descriptions we currently don't know about locally


  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = topology.description.servers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var serverDescription = _step.value;

      if (!topology.s.servers.has(serverDescription.address)) {
        var _server = createAndConnectServer(topology, serverDescription);

        topology.s.servers.set(serverDescription.address, _server);
      }
    } // for all servers no longer known, remove their descriptions and destroy their instances

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = topology.s.servers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var entry = _step2.value;
      var serverAddress = entry[0];

      if (topology.description.hasServer(serverAddress)) {
        continue;
      }

      var _server2 = topology.s.servers.get(serverAddress);

      topology.s.servers["delete"](serverAddress); // prepare server for garbage collection

      destroyServer(_server2, topology);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function serverConnectEventHandler(server, topology) {
  return function ()
  /* isMaster, err */
  {
    server.monitor({
      initial: true,
      heartbeatFrequencyMS: topology.description.heartbeatFrequencyMS
    });
  };
}

function serverErrorEventHandler(server, topology) {
  return function (err) {
    if (topology.s.state === STATE_CLOSING || topology.s.state === STATE_CLOSED) {
      return;
    }

    if (isSDAMUnrecoverableError(err, server)) {
      // NOTE: this must be commented out until we switch to the new CMAP pool because
      //       we presently _always_ clear the pool on error.
      resetServerState(server, err
      /*, { clearPool: true } */
      );
      return;
    }

    resetServerState(server, err);
  };
}

function executeWriteOperation(args, options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {}; // TODO: once we drop Node 4, use destructuring either here or in arguments.

  var topology = args.topology;
  var op = args.op;
  var ns = args.ns;
  var ops = args.ops;
  var willRetryWrite = !args.retrying && !!options.retryWrites && options.session && isRetryableWritesSupported(topology) && !options.session.inTransaction();
  topology.selectServer(writableServerSelector(), options, function (err, server) {
    if (err) {
      callback(err, null);
      return;
    }

    var handler = function handler(err, result) {
      if (!err) return callback(null, result);

      if (!isRetryableError(err)) {
        err = getMMAPError(err);
        return callback(err);
      }

      if (willRetryWrite) {
        var newArgs = Object.assign({}, args, {
          retrying: true
        });
        return executeWriteOperation(newArgs, options, callback);
      }

      return callback(err);
    };

    if (callback.operationId) {
      handler.operationId = callback.operationId;
    } // increment and assign txnNumber


    if (willRetryWrite) {
      options.session.incrementTransactionNumber();
      options.willRetryWrite = willRetryWrite;
    } // execute the write operation


    server[op](ns, ops, options, handler);
  });
}
/**
 * Resets the internal state of this server to `Unknown` by simulating an empty ismaster
 *
 * @private
 * @param {Server} server
 * @param {MongoError} error The error that caused the state reset
 * @param {object} [options] Optional settings
 * @param {boolean} [options.clearPool=false] Pool should be cleared out on state reset
 */


function resetServerState(server, error, options) {
  options = Object.assign({}, {
    clearPool: false
  }, options);

  function resetState() {
    server.emit('descriptionReceived', new ServerDescription(server.description.address, null, {
      error: error
    }));
    process.nextTick(function () {
      return server.monitor();
    });
  }

  if (options.clearPool && server.s.pool) {
    server.s.pool.reset(function () {
      return resetState();
    });
    return;
  }

  resetState();
}

function translateReadPreference(options) {
  if (options.readPreference == null) {
    return;
  }

  var r = options.readPreference;

  if (typeof r === 'string') {
    options.readPreference = new ReadPreference(r);
  } else if (r && !(r instanceof ReadPreference) && _typeof(r) === 'object') {
    var mode = r.mode || r.preference;

    if (mode && typeof mode === 'string') {
      options.readPreference = new ReadPreference(mode, r.tags, {
        maxStalenessSeconds: r.maxStalenessSeconds
      });
    }
  } else if (!(r instanceof ReadPreference)) {
    throw new TypeError('Invalid read preference: ' + r);
  }

  return options;
}

function srvPollingHandler(topology) {
  return function handleSrvPolling(ev) {
    var previousTopologyDescription = topology.s.description;
    topology.s.description = topology.s.description.updateFromSrvPollingEvent(ev);

    if (topology.s.description === previousTopologyDescription) {
      // Nothing changed, so return
      return;
    }

    updateServers(topology);
    topology.emit('topologyDescriptionChanged', new monitoring.TopologyDescriptionChangedEvent(topology.s.id, previousTopologyDescription, topology.s.description));
  };
}
/**
 * A server opening SDAM monitoring event
 *
 * @event Topology#serverOpening
 * @type {ServerOpeningEvent}
 */

/**
 * A server closed SDAM monitoring event
 *
 * @event Topology#serverClosed
 * @type {ServerClosedEvent}
 */

/**
 * A server description SDAM change monitoring event
 *
 * @event Topology#serverDescriptionChanged
 * @type {ServerDescriptionChangedEvent}
 */

/**
 * A topology open SDAM event
 *
 * @event Topology#topologyOpening
 * @type {TopologyOpeningEvent}
 */

/**
 * A topology closed SDAM event
 *
 * @event Topology#topologyClosed
 * @type {TopologyClosedEvent}
 */

/**
 * A topology structure SDAM change event
 *
 * @event Topology#topologyDescriptionChanged
 * @type {TopologyDescriptionChangedEvent}
 */

/**
 * A topology serverHeartbeatStarted SDAM event
 *
 * @event Topology#serverHeartbeatStarted
 * @type {ServerHeartbeatStartedEvent}
 */

/**
 * A topology serverHeartbeatFailed SDAM event
 *
 * @event Topology#serverHeartbeatFailed
 * @type {ServerHearbeatFailedEvent}
 */

/**
 * A topology serverHeartbeatSucceeded SDAM change event
 *
 * @event Topology#serverHeartbeatSucceeded
 * @type {ServerHeartbeatSucceededEvent}
 */

/**
 * An event emitted indicating a command was started, if command monitoring is enabled
 *
 * @event Topology#commandStarted
 * @type {object}
 */

/**
 * An event emitted indicating a command succeeded, if command monitoring is enabled
 *
 * @event Topology#commandSucceeded
 * @type {object}
 */

/**
 * An event emitted indicating a command failed, if command monitoring is enabled
 *
 * @event Topology#commandFailed
 * @type {object}
 */


module.exports = {
  Topology: Topology
};