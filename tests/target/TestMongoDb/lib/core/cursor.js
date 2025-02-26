'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.async-iterator");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

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

var Logger = require('./connection/logger');

var retrieveBSON = require('./connection/utils').retrieveBSON;

var MongoError = require('./error').MongoError;

var MongoNetworkError = require('./error').MongoNetworkError;

var mongoErrorContextSymbol = require('./error').mongoErrorContextSymbol;

var collationNotSupported = require('./utils').collationNotSupported;

var ReadPreference = require('./topologies/read_preference');

var isUnifiedTopology = require('./utils').isUnifiedTopology;

var executeOperation = require('../operations/execute_operation');

var Readable = require('stream').Readable;

var SUPPORTS = require('../utils').SUPPORTS;

var MongoDBNamespace = require('../utils').MongoDBNamespace;

var OperationBase = require('../operations/operation').OperationBase;

var BSON = retrieveBSON();
var Long = BSON.Long; // Possible states for a cursor

var CursorState = {
  INIT: 0,
  OPEN: 1,
  CLOSED: 2,
  GET_MORE: 3
}; //
// Handle callback (including any exceptions thrown)

function handleCallback(callback, err, result) {
  try {
    callback(err, result);
  } catch (err) {
    process.nextTick(function () {
      throw err;
    });
  }
}
/**
 * This is a cursor results callback
 *
 * @callback resultCallback
 * @param {error} error An error object. Set to null if no error present
 * @param {object} document
 */

/**
 * @fileOverview The **Cursor** class is an internal class that embodies a cursor on MongoDB
 * allowing for iteration over the results returned from the underlying query.
 *
 * **CURSORS Cannot directly be instantiated**
 */

/**
 * The core cursor class. All cursors in the driver build off of this one.
 *
 * @property {number} cursorBatchSize The current cursorBatchSize for the cursor
 * @property {number} cursorLimit The current cursorLimit for the cursor
 * @property {number} cursorSkip The current cursorSkip for the cursor
 */


var CoreCursor =
/*#__PURE__*/
function (_Readable) {
  _inherits(CoreCursor, _Readable);

  /**
   * Create a new core `Cursor` instance.
   * **NOTE** Not to be instantiated directly
   *
   * @param {object} topology The server topology instance.
   * @param {string} ns The MongoDB fully qualified namespace (ex: db1.collection1)
   * @param {{object}|Long} cmd The selector (can be a command or a cursorId)
   * @param {object} [options=null] Optional settings.
   * @param {object} [options.batchSize=1000] The number of documents to return per batch. See {@link https://docs.mongodb.com/manual/reference/command/find/| find command documentation} and {@link https://docs.mongodb.com/manual/reference/command/aggregate|aggregation documentation}.
   * @param {array} [options.documents=[]] Initial documents list for cursor
   * @param {object} [options.transforms=null] Transform methods for the cursor results
   * @param {function} [options.transforms.query] Transform the value returned from the initial query
   * @param {function} [options.transforms.doc] Transform each document returned from Cursor.prototype._next
   */
  function CoreCursor(topology, ns, cmd, options) {
    var _this;

    _classCallCheck(this, CoreCursor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CoreCursor).call(this, {
      objectMode: true
    }));
    options = options || {};

    if (ns instanceof OperationBase) {
      _this.operation = ns;
      ns = _this.operation.ns.toString();
      options = _this.operation.options;
      cmd = _this.operation.cmd ? _this.operation.cmd : {};
    } // Cursor pool


    _this.pool = null; // Cursor server

    _this.server = null; // Do we have a not connected handler

    _this.disconnectHandler = options.disconnectHandler; // Set local values

    _this.bson = topology.s.bson;
    _this.ns = ns;
    _this.namespace = MongoDBNamespace.fromString(ns);
    _this.cmd = cmd;
    _this.options = options;
    _this.topology = topology; // All internal state

    _this.cursorState = {
      cursorId: null,
      cmd: cmd,
      documents: options.documents || [],
      cursorIndex: 0,
      dead: false,
      killed: false,
      init: false,
      notified: false,
      limit: options.limit || cmd.limit || 0,
      skip: options.skip || cmd.skip || 0,
      batchSize: options.batchSize || cmd.batchSize || 1000,
      currentLimit: 0,
      // Result field name if not a cursor (contains the array of results)
      transforms: options.transforms,
      raw: options.raw || cmd && cmd.raw
    };

    if (_typeof(options.session) === 'object') {
      _this.cursorState.session = options.session;
    } // Add promoteLong to cursor state


    var topologyOptions = topology.s.options;

    if (typeof topologyOptions.promoteLongs === 'boolean') {
      _this.cursorState.promoteLongs = topologyOptions.promoteLongs;
    } else if (typeof options.promoteLongs === 'boolean') {
      _this.cursorState.promoteLongs = options.promoteLongs;
    } // Add promoteValues to cursor state


    if (typeof topologyOptions.promoteValues === 'boolean') {
      _this.cursorState.promoteValues = topologyOptions.promoteValues;
    } else if (typeof options.promoteValues === 'boolean') {
      _this.cursorState.promoteValues = options.promoteValues;
    } // Add promoteBuffers to cursor state


    if (typeof topologyOptions.promoteBuffers === 'boolean') {
      _this.cursorState.promoteBuffers = topologyOptions.promoteBuffers;
    } else if (typeof options.promoteBuffers === 'boolean') {
      _this.cursorState.promoteBuffers = options.promoteBuffers;
    }

    if (topologyOptions.reconnect) {
      _this.cursorState.reconnect = topologyOptions.reconnect;
    } // Logger


    _this.logger = Logger('Cursor', topologyOptions); //
    // Did we pass in a cursor id

    if (typeof cmd === 'number') {
      _this.cursorState.cursorId = Long.fromNumber(cmd);
      _this.cursorState.lastCursorId = _this.cursorState.cursorId;
    } else if (cmd instanceof Long) {
      _this.cursorState.cursorId = cmd;
      _this.cursorState.lastCursorId = cmd;
    } // TODO: remove as part of NODE-2104


    if (_this.operation) {
      _this.operation.cursorState = _this.cursorState;
    }

    return _this;
  }

  _createClass(CoreCursor, [{
    key: "setCursorBatchSize",
    value: function setCursorBatchSize(value) {
      this.cursorState.batchSize = value;
    }
  }, {
    key: "cursorBatchSize",
    value: function cursorBatchSize() {
      return this.cursorState.batchSize;
    }
  }, {
    key: "setCursorLimit",
    value: function setCursorLimit(value) {
      this.cursorState.limit = value;
    }
  }, {
    key: "cursorLimit",
    value: function cursorLimit() {
      return this.cursorState.limit;
    }
  }, {
    key: "setCursorSkip",
    value: function setCursorSkip(value) {
      this.cursorState.skip = value;
    }
  }, {
    key: "cursorSkip",
    value: function cursorSkip() {
      return this.cursorState.skip;
    }
    /**
     * Retrieve the next document from the cursor
     * @method
     * @param {resultCallback} callback A callback function
     */

  }, {
    key: "_next",
    value: function _next(callback) {
      nextFunction(this, callback);
    }
    /**
     * Clone the cursor
     * @method
     * @return {Cursor}
     */

  }, {
    key: "clone",
    value: function clone() {
      return this.topology.cursor(this.ns, this.cmd, this.options);
    }
    /**
     * Checks if the cursor is dead
     * @method
     * @return {boolean} A boolean signifying if the cursor is dead or not
     */

  }, {
    key: "isDead",
    value: function isDead() {
      return this.cursorState.dead === true;
    }
    /**
     * Checks if the cursor was killed by the application
     * @method
     * @return {boolean} A boolean signifying if the cursor was killed by the application
     */

  }, {
    key: "isKilled",
    value: function isKilled() {
      return this.cursorState.killed === true;
    }
    /**
     * Checks if the cursor notified it's caller about it's death
     * @method
     * @return {boolean} A boolean signifying if the cursor notified the callback
     */

  }, {
    key: "isNotified",
    value: function isNotified() {
      return this.cursorState.notified === true;
    }
    /**
     * Returns current buffered documents length
     * @method
     * @return {number} The number of items in the buffered documents
     */

  }, {
    key: "bufferedCount",
    value: function bufferedCount() {
      return this.cursorState.documents.length - this.cursorState.cursorIndex;
    }
    /**
     * Returns current buffered documents
     * @method
     * @return {Array} An array of buffered documents
     */

  }, {
    key: "readBufferedDocuments",
    value: function readBufferedDocuments(number) {
      var unreadDocumentsLength = this.cursorState.documents.length - this.cursorState.cursorIndex;
      var length = number < unreadDocumentsLength ? number : unreadDocumentsLength;
      var elements = this.cursorState.documents.slice(this.cursorState.cursorIndex, this.cursorState.cursorIndex + length); // Transform the doc with passed in transformation method if provided

      if (this.cursorState.transforms && typeof this.cursorState.transforms.doc === 'function') {
        // Transform all the elements
        for (var i = 0; i < elements.length; i++) {
          elements[i] = this.cursorState.transforms.doc(elements[i]);
        }
      } // Ensure we do not return any more documents than the limit imposed
      // Just return the number of elements up to the limit


      if (this.cursorState.limit > 0 && this.cursorState.currentLimit + elements.length > this.cursorState.limit) {
        elements = elements.slice(0, this.cursorState.limit - this.cursorState.currentLimit);
        this.kill();
      } // Adjust current limit


      this.cursorState.currentLimit = this.cursorState.currentLimit + elements.length;
      this.cursorState.cursorIndex = this.cursorState.cursorIndex + elements.length; // Return elements

      return elements;
    }
    /**
     * Resets local state for this cursor instance, and issues a `killCursors` command to the server
     *
     * @param {resultCallback} callback A callback function
     */

  }, {
    key: "kill",
    value: function kill(callback) {
      // Set cursor to dead
      this.cursorState.dead = true;
      this.cursorState.killed = true; // Remove documents

      this.cursorState.documents = []; // If no cursor id just return

      if (this.cursorState.cursorId == null || this.cursorState.cursorId.isZero() || this.cursorState.init === false) {
        if (callback) callback(null, null);
        return;
      }

      this.server.killCursors(this.ns, this.cursorState, callback);
    }
    /**
     * Resets the cursor
     */

  }, {
    key: "rewind",
    value: function rewind() {
      if (this.cursorState.init) {
        if (!this.cursorState.dead) {
          this.kill();
        }

        this.cursorState.currentLimit = 0;
        this.cursorState.init = false;
        this.cursorState.dead = false;
        this.cursorState.killed = false;
        this.cursorState.notified = false;
        this.cursorState.documents = [];
        this.cursorState.cursorId = null;
        this.cursorState.cursorIndex = 0;
      }
    } // Internal methods

  }, {
    key: "_read",
    value: function _read() {
      var _this2 = this;

      if (this.s && this.s.state === CursorState.CLOSED || this.isDead()) {
        return this.push(null);
      } // Get the next item


      this._next(function (err, result) {
        if (err) {
          if (_this2.listeners('error') && _this2.listeners('error').length > 0) {
            _this2.emit('error', err);
          }

          if (!_this2.isDead()) _this2.close(); // Emit end event

          _this2.emit('end');

          return _this2.emit('finish');
        } // If we provided a transformation method


        if (_this2.cursorState.streamOptions && typeof _this2.cursorState.streamOptions.transform === 'function' && result != null) {
          return _this2.push(_this2.cursorState.streamOptions.transform(result));
        } // If we provided a map function


        if (_this2.cursorState.transforms && typeof _this2.cursorState.transforms.doc === 'function' && result != null) {
          return _this2.push(_this2.cursorState.transforms.doc(result));
        } // Return the result


        _this2.push(result);

        if (result === null && _this2.isDead()) {
          _this2.once('end', function () {
            _this2.close();

            _this2.emit('finish');
          });
        }
      });
    }
  }, {
    key: "_endSession",
    value: function _endSession(options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      options = options || {};
      var session = this.cursorState.session;

      if (session && (options.force || session.owner === this)) {
        this.cursorState.session = undefined;

        if (this.operation) {
          this.operation.clearSession();
        }

        session.endSession(callback);
        return true;
      }

      if (callback) {
        callback();
      }

      return false;
    }
  }, {
    key: "_getMore",
    value: function _getMore(callback) {
      if (this.logger.isDebug()) {
        this.logger.debug("schedule getMore call for query [".concat(JSON.stringify(this.query), "]"));
      } // Set the current batchSize


      var batchSize = this.cursorState.batchSize;

      if (this.cursorState.limit > 0 && this.cursorState.currentLimit + batchSize > this.cursorState.limit) {
        batchSize = this.cursorState.limit - this.cursorState.currentLimit;
      }

      this.server.getMore(this.ns, this.cursorState, batchSize, this.options, callback);
    }
  }, {
    key: "_initializeCursor",
    value: function _initializeCursor(callback) {
      var _this3 = this;

      var cursor = this; // NOTE: this goes away once cursors use `executeOperation`

      if (isUnifiedTopology(cursor.topology) && cursor.topology.shouldCheckForSessionSupport()) {
        cursor.topology.selectServer(ReadPreference.primaryPreferred, function (err) {
          if (err) {
            callback(err);
            return;
          }

          _this3._initializeCursor(callback);
        });
        return;
      }

      function done(err, result) {
        if (cursor.cursorState.cursorId && cursor.cursorState.cursorId.isZero() && cursor._endSession) {
          cursor._endSession();
        }

        if (cursor.cursorState.documents.length === 0 && cursor.cursorState.cursorId && cursor.cursorState.cursorId.isZero() && !cursor.cmd.tailable && !cursor.cmd.awaitData) {
          return setCursorNotified(cursor, callback);
        }

        callback(err, result);
      }

      var queryCallback = function queryCallback(err, r) {
        if (err) {
          return done(err);
        }

        var result = r.message;

        if (result.queryFailure) {
          return done(new MongoError(result.documents[0]), null);
        } // Check if we have a command cursor


        if (Array.isArray(result.documents) && result.documents.length === 1 && (!cursor.cmd.find || cursor.cmd.find && cursor.cmd.virtual === false) && (typeof result.documents[0].cursor !== 'string' || result.documents[0]['$err'] || result.documents[0]['errmsg'] || Array.isArray(result.documents[0].result))) {
          // We have an error document, return the error
          if (result.documents[0]['$err'] || result.documents[0]['errmsg']) {
            return done(new MongoError(result.documents[0]), null);
          } // We have a cursor document


          if (result.documents[0].cursor != null && typeof result.documents[0].cursor !== 'string') {
            var id = result.documents[0].cursor.id; // If we have a namespace change set the new namespace for getmores

            if (result.documents[0].cursor.ns) {
              cursor.ns = result.documents[0].cursor.ns;
            } // Promote id to long if needed


            cursor.cursorState.cursorId = typeof id === 'number' ? Long.fromNumber(id) : id;
            cursor.cursorState.lastCursorId = cursor.cursorState.cursorId;
            cursor.cursorState.operationTime = result.documents[0].operationTime; // If we have a firstBatch set it

            if (Array.isArray(result.documents[0].cursor.firstBatch)) {
              cursor.cursorState.documents = result.documents[0].cursor.firstBatch; //.reverse();
            } // Return after processing command cursor


            return done(null, result);
          }

          if (Array.isArray(result.documents[0].result)) {
            cursor.cursorState.documents = result.documents[0].result;
            cursor.cursorState.cursorId = Long.ZERO;
            return done(null, result);
          }
        } // Otherwise fall back to regular find path


        var cursorId = result.cursorId || 0;
        cursor.cursorState.cursorId = cursorId instanceof Long ? cursorId : Long.fromNumber(cursorId);
        cursor.cursorState.documents = result.documents;
        cursor.cursorState.lastCursorId = result.cursorId; // Transform the results with passed in transformation method if provided

        if (cursor.cursorState.transforms && typeof cursor.cursorState.transforms.query === 'function') {
          cursor.cursorState.documents = cursor.cursorState.transforms.query(result);
        }

        done(null, result);
      };

      if (cursor.operation) {
        if (cursor.logger.isDebug()) {
          cursor.logger.debug("issue initial query [".concat(JSON.stringify(cursor.cmd), "] with flags [").concat(JSON.stringify(cursor.query), "]"));
        }

        executeOperation(cursor.topology, cursor.operation, function (err, result) {
          if (err) {
            done(err);
            return;
          }

          cursor.server = cursor.operation.server;
          cursor.cursorState.init = true; // NOTE: this is a special internal method for cloning a cursor, consider removing

          if (cursor.cursorState.cursorId != null) {
            return done();
          }

          queryCallback(err, result);
        });
        return;
      } // Very explicitly choose what is passed to selectServer


      var serverSelectOptions = {};

      if (cursor.cursorState.session) {
        serverSelectOptions.session = cursor.cursorState.session;
      }

      if (cursor.operation) {
        serverSelectOptions.readPreference = cursor.operation.readPreference;
      } else if (cursor.options.readPreference) {
        serverSelectOptions.readPreference = cursor.options.readPreference;
      }

      return cursor.topology.selectServer(serverSelectOptions, function (err, server) {
        if (err) {
          var disconnectHandler = cursor.disconnectHandler;

          if (disconnectHandler != null) {
            return disconnectHandler.addObjectAndMethod('cursor', cursor, 'next', [callback], callback);
          }

          return callback(err);
        }

        cursor.server = server;
        cursor.cursorState.init = true;

        if (collationNotSupported(cursor.server, cursor.cmd)) {
          return callback(new MongoError("server ".concat(cursor.server.name, " does not support collation")));
        } // NOTE: this is a special internal method for cloning a cursor, consider removing


        if (cursor.cursorState.cursorId != null) {
          return done();
        }

        if (cursor.logger.isDebug()) {
          cursor.logger.debug("issue initial query [".concat(JSON.stringify(cursor.cmd), "] with flags [").concat(JSON.stringify(cursor.query), "]"));
        }

        if (cursor.cmd.find != null) {
          server.query(cursor.ns, cursor.cmd, cursor.cursorState, cursor.options, queryCallback);
          return;
        }

        var commandOptions = Object.assign({
          session: cursor.cursorState.session
        }, cursor.options);
        server.command(cursor.ns, cursor.cmd, commandOptions, queryCallback);
      });
    }
  }]);

  return CoreCursor;
}(Readable);

if (SUPPORTS.ASYNC_ITERATOR) {
  CoreCursor.prototype[Symbol.asyncIterator] = require('../async/async_iterator').asyncIterator;
}
/**
 * Validate if the pool is dead and return error
 */


function isConnectionDead(self, callback) {
  if (self.pool && self.pool.isDestroyed()) {
    self.cursorState.killed = true;
    var err = new MongoNetworkError("connection to host ".concat(self.pool.host, ":").concat(self.pool.port, " was destroyed"));

    _setCursorNotifiedImpl(self, function () {
      return callback(err);
    });

    return true;
  }

  return false;
}
/**
 * Validate if the cursor is dead but was not explicitly killed by user
 */


function isCursorDeadButNotkilled(self, callback) {
  // Cursor is dead but not marked killed, return null
  if (self.cursorState.dead && !self.cursorState.killed) {
    self.cursorState.killed = true;
    setCursorNotified(self, callback);
    return true;
  }

  return false;
}
/**
 * Validate if the cursor is dead and was killed by user
 */


function isCursorDeadAndKilled(self, callback) {
  if (self.cursorState.dead && self.cursorState.killed) {
    handleCallback(callback, new MongoError('cursor is dead'));
    return true;
  }

  return false;
}
/**
 * Validate if the cursor was killed by the user
 */


function isCursorKilled(self, callback) {
  if (self.cursorState.killed) {
    setCursorNotified(self, callback);
    return true;
  }

  return false;
}
/**
 * Mark cursor as being dead and notified
 */


function setCursorDeadAndNotified(self, callback) {
  self.cursorState.dead = true;
  setCursorNotified(self, callback);
}
/**
 * Mark cursor as being notified
 */


function setCursorNotified(self, callback) {
  _setCursorNotifiedImpl(self, function () {
    return handleCallback(callback, null, null);
  });
}

function _setCursorNotifiedImpl(self, callback) {
  self.cursorState.notified = true;
  self.cursorState.documents = [];
  self.cursorState.cursorIndex = 0;

  if (self._endSession) {
    self._endSession(undefined, function () {
      return callback();
    });

    return;
  }

  return callback();
}

function nextFunction(self, callback) {
  // We have notified about it
  if (self.cursorState.notified) {
    return callback(new Error('cursor is exhausted'));
  } // Cursor is killed return null


  if (isCursorKilled(self, callback)) return; // Cursor is dead but not marked killed, return null

  if (isCursorDeadButNotkilled(self, callback)) return; // We have a dead and killed cursor, attempting to call next should error

  if (isCursorDeadAndKilled(self, callback)) return; // We have just started the cursor

  if (!self.cursorState.init) {
    // Topology is not connected, save the call in the provided store to be
    // Executed at some point when the handler deems it's reconnected
    if (!self.topology.isConnected(self.options)) {
      // Only need this for single server, because repl sets and mongos
      // will always continue trying to reconnect
      if (self.topology._type === 'server' && !self.topology.s.options.reconnect) {
        // Reconnect is disabled, so we'll never reconnect
        return callback(new MongoError('no connection available'));
      }

      if (self.disconnectHandler != null) {
        if (self.topology.isDestroyed()) {
          // Topology was destroyed, so don't try to wait for it to reconnect
          return callback(new MongoError('Topology was destroyed'));
        }

        self.disconnectHandler.addObjectAndMethod('cursor', self, 'next', [callback], callback);
        return;
      }
    }

    self._initializeCursor(function (err, result) {
      if (err || result === null) {
        callback(err, result);
        return;
      }

      nextFunction(self, callback);
    });

    return;
  }

  if (self.cursorState.limit > 0 && self.cursorState.currentLimit >= self.cursorState.limit) {
    // Ensure we kill the cursor on the server
    self.kill(); // Set cursor in dead and notified state

    return setCursorDeadAndNotified(self, callback);
  } else if (self.cursorState.cursorIndex === self.cursorState.documents.length && !Long.ZERO.equals(self.cursorState.cursorId)) {
    // Ensure an empty cursor state
    self.cursorState.documents = [];
    self.cursorState.cursorIndex = 0; // Check if topology is destroyed

    if (self.topology.isDestroyed()) return callback(new MongoNetworkError('connection destroyed, not possible to instantiate cursor')); // Check if connection is dead and return if not possible to
    // execute a getMore on this connection

    if (isConnectionDead(self, callback)) return; // Execute the next get more

    self._getMore(function (err, doc, connection) {
      if (err) {
        if (err instanceof MongoError) {
          err[mongoErrorContextSymbol].isGetMore = true;
        }

        return handleCallback(callback, err);
      }

      if (self.cursorState.cursorId && self.cursorState.cursorId.isZero() && self._endSession) {
        self._endSession();
      } // Save the returned connection to ensure all getMore's fire over the same connection


      self.connection = connection; // Tailable cursor getMore result, notify owner about it
      // No attempt is made here to retry, this is left to the user of the
      // core module to handle to keep core simple

      if (self.cursorState.documents.length === 0 && self.cmd.tailable && Long.ZERO.equals(self.cursorState.cursorId)) {
        // No more documents in the tailed cursor
        return handleCallback(callback, new MongoError({
          message: 'No more documents in tailed cursor',
          tailable: self.cmd.tailable,
          awaitData: self.cmd.awaitData
        }));
      } else if (self.cursorState.documents.length === 0 && self.cmd.tailable && !Long.ZERO.equals(self.cursorState.cursorId)) {
        return nextFunction(self, callback);
      }

      if (self.cursorState.limit > 0 && self.cursorState.currentLimit >= self.cursorState.limit) {
        return setCursorDeadAndNotified(self, callback);
      }

      nextFunction(self, callback);
    });
  } else if (self.cursorState.documents.length === self.cursorState.cursorIndex && self.cmd.tailable && Long.ZERO.equals(self.cursorState.cursorId)) {
    return handleCallback(callback, new MongoError({
      message: 'No more documents in tailed cursor',
      tailable: self.cmd.tailable,
      awaitData: self.cmd.awaitData
    }));
  } else if (self.cursorState.documents.length === self.cursorState.cursorIndex && Long.ZERO.equals(self.cursorState.cursorId)) {
    setCursorDeadAndNotified(self, callback);
  } else {
    if (self.cursorState.limit > 0 && self.cursorState.currentLimit >= self.cursorState.limit) {
      // Ensure we kill the cursor on the server
      self.kill(); // Set cursor in dead and notified state

      return setCursorDeadAndNotified(self, callback);
    } // Increment the current cursor limit


    self.cursorState.currentLimit += 1; // Get the document

    var doc = self.cursorState.documents[self.cursorState.cursorIndex++]; // Doc overflow

    if (!doc || doc.$err) {
      // Ensure we kill the cursor on the server
      self.kill(); // Set cursor in dead and notified state

      return setCursorDeadAndNotified(self, function () {
        handleCallback(callback, new MongoError(doc ? doc.$err : undefined));
      });
    } // Transform the doc with passed in transformation method if provided


    if (self.cursorState.transforms && typeof self.cursorState.transforms.doc === 'function') {
      doc = self.cursorState.transforms.doc(doc);
    } // Return the document


    handleCallback(callback, null, doc);
  }
}

module.exports = {
  CursorState: CursorState,
  CoreCursor: CoreCursor
};