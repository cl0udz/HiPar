'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

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

var EventEmitter = require('events'),
    MongoError = require('../core').MongoError,
    f = require('util').format,
    os = require('os'),
    translateReadPreference = require('../utils').translateReadPreference,
    ClientSession = require('../core').Sessions.ClientSession; // The store of ops


var Store = function Store(topology, storeOptions) {
  var self = this;
  var storedOps = [];
  storeOptions = storeOptions || {
    force: false,
    bufferMaxEntries: -1
  }; // Internal state

  this.s = {
    storedOps: storedOps,
    storeOptions: storeOptions,
    topology: topology
  };
  Object.defineProperty(this, 'length', {
    enumerable: true,
    get: function get() {
      return self.s.storedOps.length;
    }
  });
};

Store.prototype.add = function (opType, ns, ops, options, callback) {
  if (this.s.storeOptions.force) {
    return callback(MongoError.create({
      message: 'db closed by application',
      driver: true
    }));
  }

  if (this.s.storeOptions.bufferMaxEntries === 0) {
    return callback(MongoError.create({
      message: f('no connection available for operation and number of stored operation > %s', this.s.storeOptions.bufferMaxEntries),
      driver: true
    }));
  }

  if (this.s.storeOptions.bufferMaxEntries > 0 && this.s.storedOps.length > this.s.storeOptions.bufferMaxEntries) {
    while (this.s.storedOps.length > 0) {
      var op = this.s.storedOps.shift();
      op.c(MongoError.create({
        message: f('no connection available for operation and number of stored operation > %s', this.s.storeOptions.bufferMaxEntries),
        driver: true
      }));
    }

    return;
  }

  this.s.storedOps.push({
    t: opType,
    n: ns,
    o: ops,
    op: options,
    c: callback
  });
};

Store.prototype.addObjectAndMethod = function (opType, object, method, params, callback) {
  if (this.s.storeOptions.force) {
    return callback(MongoError.create({
      message: 'db closed by application',
      driver: true
    }));
  }

  if (this.s.storeOptions.bufferMaxEntries === 0) {
    return callback(MongoError.create({
      message: f('no connection available for operation and number of stored operation > %s', this.s.storeOptions.bufferMaxEntries),
      driver: true
    }));
  }

  if (this.s.storeOptions.bufferMaxEntries > 0 && this.s.storedOps.length > this.s.storeOptions.bufferMaxEntries) {
    while (this.s.storedOps.length > 0) {
      var op = this.s.storedOps.shift();
      op.c(MongoError.create({
        message: f('no connection available for operation and number of stored operation > %s', this.s.storeOptions.bufferMaxEntries),
        driver: true
      }));
    }

    return;
  }

  this.s.storedOps.push({
    t: opType,
    m: method,
    o: object,
    p: params,
    c: callback
  });
};

Store.prototype.flush = function (err) {
  while (this.s.storedOps.length > 0) {
    this.s.storedOps.shift().c(err || MongoError.create({
      message: f('no connection available for operation'),
      driver: true
    }));
  }
};

var primaryOptions = ['primary', 'primaryPreferred', 'nearest', 'secondaryPreferred'];
var secondaryOptions = ['secondary', 'secondaryPreferred'];

Store.prototype.execute = function (options) {
  options = options || {}; // Get current ops

  var ops = this.s.storedOps; // Reset the ops

  this.s.storedOps = []; // Unpack options

  var executePrimary = typeof options.executePrimary === 'boolean' ? options.executePrimary : true;
  var executeSecondary = typeof options.executeSecondary === 'boolean' ? options.executeSecondary : true; // Execute all the stored ops

  while (ops.length > 0) {
    var op = ops.shift();

    if (op.t === 'cursor') {
      if (executePrimary && executeSecondary) {
        op.o[op.m].apply(op.o, op.p);
      } else if (executePrimary && op.o.options && op.o.options.readPreference && primaryOptions.indexOf(op.o.options.readPreference.mode) !== -1) {
        op.o[op.m].apply(op.o, op.p);
      } else if (!executePrimary && executeSecondary && op.o.options && op.o.options.readPreference && secondaryOptions.indexOf(op.o.options.readPreference.mode) !== -1) {
        op.o[op.m].apply(op.o, op.p);
      }
    } else if (op.t === 'auth') {
      this.s.topology[op.t].apply(this.s.topology, op.o);
    } else {
      if (executePrimary && executeSecondary) {
        this.s.topology[op.t](op.n, op.o, op.op, op.c);
      } else if (executePrimary && op.op && op.op.readPreference && primaryOptions.indexOf(op.op.readPreference.mode) !== -1) {
        this.s.topology[op.t](op.n, op.o, op.op, op.c);
      } else if (!executePrimary && executeSecondary && op.op && op.op.readPreference && secondaryOptions.indexOf(op.op.readPreference.mode) !== -1) {
        this.s.topology[op.t](op.n, op.o, op.op, op.c);
      }
    }
  }
};

Store.prototype.all = function () {
  return this.s.storedOps;
}; // Server capabilities


var ServerCapabilities = function ServerCapabilities(ismaster) {
  var setup_get_property = function setup_get_property(object, name, value) {
    Object.defineProperty(object, name, {
      enumerable: true,
      get: function get() {
        return value;
      }
    });
  }; // Capabilities


  var aggregationCursor = false;
  var writeCommands = false;
  var textSearch = false;
  var authCommands = false;
  var listCollections = false;
  var listIndexes = false;
  var maxNumberOfDocsInBatch = ismaster.maxWriteBatchSize || 1000;
  var commandsTakeWriteConcern = false;
  var commandsTakeCollation = false;

  if (ismaster.minWireVersion >= 0) {
    textSearch = true;
  }

  if (ismaster.maxWireVersion >= 1) {
    aggregationCursor = true;
    authCommands = true;
  }

  if (ismaster.maxWireVersion >= 2) {
    writeCommands = true;
  }

  if (ismaster.maxWireVersion >= 3) {
    listCollections = true;
    listIndexes = true;
  }

  if (ismaster.maxWireVersion >= 5) {
    commandsTakeWriteConcern = true;
    commandsTakeCollation = true;
  } // If no min or max wire version set to 0


  if (ismaster.minWireVersion == null) {
    ismaster.minWireVersion = 0;
  }

  if (ismaster.maxWireVersion == null) {
    ismaster.maxWireVersion = 0;
  } // Map up read only parameters


  setup_get_property(this, 'hasAggregationCursor', aggregationCursor);
  setup_get_property(this, 'hasWriteCommands', writeCommands);
  setup_get_property(this, 'hasTextSearch', textSearch);
  setup_get_property(this, 'hasAuthCommands', authCommands);
  setup_get_property(this, 'hasListCollectionsCommand', listCollections);
  setup_get_property(this, 'hasListIndexesCommand', listIndexes);
  setup_get_property(this, 'minWireVersion', ismaster.minWireVersion);
  setup_get_property(this, 'maxWireVersion', ismaster.maxWireVersion);
  setup_get_property(this, 'maxNumberOfDocsInBatch', maxNumberOfDocsInBatch);
  setup_get_property(this, 'commandsTakeWriteConcern', commandsTakeWriteConcern);
  setup_get_property(this, 'commandsTakeCollation', commandsTakeCollation);
}; // Get package.json variable


var driverVersion = require('../../package.json').version,
    nodejsversion = f('Node.js %s, %s', process.version, os.endianness()),
    type = os.type(),
    name = process.platform,
    architecture = process.arch,
    release = os.release();

var TopologyBase =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(TopologyBase, _EventEmitter);

  function TopologyBase() {
    var _this;

    _classCallCheck(this, TopologyBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopologyBase).call(this)); // Build default client information

    _this.clientInfo = {
      driver: {
        name: 'nodejs',
        version: driverVersion
      },
      os: {
        type: type,
        name: name,
        architecture: architecture,
        version: release
      },
      platform: nodejsversion
    };

    _this.setMaxListeners(Infinity);

    return _this;
  } // Sessions related methods


  _createClass(TopologyBase, [{
    key: "hasSessionSupport",
    value: function hasSessionSupport() {
      return this.logicalSessionTimeoutMinutes != null;
    }
  }, {
    key: "startSession",
    value: function startSession(options, clientOptions) {
      var _this2 = this;

      var session = new ClientSession(this, this.s.sessionPool, options, clientOptions);
      session.once('ended', function () {
        _this2.s.sessions["delete"](session);
      });
      this.s.sessions.add(session);
      return session;
    }
  }, {
    key: "endSessions",
    value: function endSessions(sessions, callback) {
      return this.s.coreTopology.endSessions(sessions, callback);
    } // Server capabilities

  }, {
    key: "capabilities",
    value: function capabilities() {
      if (this.s.sCapabilities) return this.s.sCapabilities;
      if (this.s.coreTopology.lastIsMaster() == null) return null;
      this.s.sCapabilities = new ServerCapabilities(this.s.coreTopology.lastIsMaster());
      return this.s.sCapabilities;
    } // Command

  }, {
    key: "command",
    value: function command(ns, cmd, options, callback) {
      this.s.coreTopology.command(ns.toString(), cmd, translateReadPreference(options), callback);
    } // Insert

  }, {
    key: "insert",
    value: function insert(ns, ops, options, callback) {
      this.s.coreTopology.insert(ns.toString(), ops, options, callback);
    } // Update

  }, {
    key: "update",
    value: function update(ns, ops, options, callback) {
      this.s.coreTopology.update(ns.toString(), ops, options, callback);
    } // Remove

  }, {
    key: "remove",
    value: function remove(ns, ops, options, callback) {
      this.s.coreTopology.remove(ns.toString(), ops, options, callback);
    } // IsConnected

  }, {
    key: "isConnected",
    value: function isConnected(options) {
      options = options || {};
      options = translateReadPreference(options);
      return this.s.coreTopology.isConnected(options);
    } // IsDestroyed

  }, {
    key: "isDestroyed",
    value: function isDestroyed() {
      return this.s.coreTopology.isDestroyed();
    } // Cursor

  }, {
    key: "cursor",
    value: function cursor(ns, cmd, options) {
      options = options || {};
      options = translateReadPreference(options);
      options.disconnectHandler = this.s.store;
      options.topology = this;
      return this.s.coreTopology.cursor(ns, cmd, options);
    }
  }, {
    key: "lastIsMaster",
    value: function lastIsMaster() {
      return this.s.coreTopology.lastIsMaster();
    }
  }, {
    key: "selectServer",
    value: function selectServer(selector, options, callback) {
      return this.s.coreTopology.selectServer(selector, options, callback);
    }
    /**
     * Unref all sockets
     * @method
     */

  }, {
    key: "unref",
    value: function unref() {
      return this.s.coreTopology.unref();
    }
    /**
     * All raw connections
     * @method
     * @return {array}
     */

  }, {
    key: "connections",
    value: function connections() {
      return this.s.coreTopology.connections();
    }
  }, {
    key: "close",
    value: function close(forceClosed, callback) {
      // If we have sessions, we want to individually move them to the session pool,
      // and then send a single endSessions call.
      this.s.sessions.forEach(function (session) {
        return session.endSession();
      });

      if (this.s.sessionPool) {
        this.s.sessionPool.endAllPooledSessions();
      } // We need to wash out all stored processes


      if (forceClosed === true) {
        this.s.storeOptions.force = forceClosed;
        this.s.store.flush();
      }

      this.s.coreTopology.destroy({
        force: typeof forceClosed === 'boolean' ? forceClosed : false
      }, callback);
    }
  }]);

  return TopologyBase;
}(EventEmitter); // Properties


Object.defineProperty(TopologyBase.prototype, 'bson', {
  enumerable: true,
  get: function get() {
    return this.s.coreTopology.s.bson;
  }
});
Object.defineProperty(TopologyBase.prototype, 'parserType', {
  enumerable: true,
  get: function get() {
    return this.s.coreTopology.parserType;
  }
});
Object.defineProperty(TopologyBase.prototype, 'logicalSessionTimeoutMinutes', {
  enumerable: true,
  get: function get() {
    return this.s.coreTopology.logicalSessionTimeoutMinutes;
  }
});
Object.defineProperty(TopologyBase.prototype, 'type', {
  enumerable: true,
  get: function get() {
    return this.s.coreTopology.type;
  }
});
exports.Store = Store;
exports.ServerCapabilities = ServerCapabilities;
exports.TopologyBase = TopologyBase;