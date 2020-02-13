'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.timers");

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EventEmitter = require('events');

var isResumableError = require('./error').isResumableError;

var MongoError = require('./core').MongoError;

var Cursor = require('./cursor');

var relayEvents = require('./core/utils').relayEvents;

var maxWireVersion = require('./core/utils').maxWireVersion;

var AggregateOperation = require('./operations/aggregate');

var CHANGE_STREAM_OPTIONS = ['resumeAfter', 'startAfter', 'startAtOperationTime', 'fullDocument'];
var CURSOR_OPTIONS = ['batchSize', 'maxAwaitTimeMS', 'collation', 'readPreference'].concat(CHANGE_STREAM_OPTIONS);
var CHANGE_DOMAIN_TYPES = {
  COLLECTION: Symbol('Collection'),
  DATABASE: Symbol('Database'),
  CLUSTER: Symbol('Cluster')
};
/**
 * @typedef ResumeToken
 * @description Represents the logical starting point for a new or resuming {@link ChangeStream} on the server.
 * @see https://docs.mongodb.com/master/changeStreams/#change-stream-resume-token
 */

/**
 * @typedef OperationTime
 * @description Represents a specific point in time on a server. Can be retrieved by using {@link Db#command}
 * @see https://docs.mongodb.com/manual/reference/method/db.runCommand/#response
 */

/**
 * @typedef ChangeStreamOptions
 * @description Options that can be passed to a ChangeStream. Note that startAfter, resumeAfter, and startAtOperationTime are all mutually exclusive, and the server will error if more than one is specified.
 * @property {string} [fullDocument='default'] Allowed values: ‘default’, ‘updateLookup’. When set to ‘updateLookup’, the change stream will include both a delta describing the changes to the document, as well as a copy of the entire document that was changed from some time after the change occurred.
 * @property {number} [maxAwaitTimeMS] The maximum amount of time for the server to wait on new documents to satisfy a change stream query.
 * @property {ResumeToken} [resumeAfter] Allows you to start a changeStream after a specified event. See {@link https://docs.mongodb.com/master/changeStreams/#resumeafter-for-change-streams|ChangeStream documentation}.
 * @property {ResumeToken} [startAfter] Similar to resumeAfter, but will allow you to start after an invalidated event. See {@link https://docs.mongodb.com/master/changeStreams/#startafter-for-change-streams|ChangeStream documentation}.
 * @property {OperationTime} [startAtOperationTime] Will start the changeStream after the specified operationTime.
 * @property {number} [batchSize=1000] The number of documents to return per batch. See {@link https://docs.mongodb.com/manual/reference/command/aggregate|aggregation documentation}.
 * @property {object} [collation] Specify collation settings for operation. See {@link https://docs.mongodb.com/manual/reference/command/aggregate|aggregation documentation}.
 * @property {ReadPreference} [readPreference] The read preference. Defaults to the read preference of the database or collection. See {@link https://docs.mongodb.com/manual/reference/read-preference|read preference documentation}.
 */

/**
 * Creates a new Change Stream instance. Normally created using {@link Collection#watch|Collection.watch()}.
 * @class ChangeStream
 * @since 3.0.0
 * @param {(MongoClient|Db|Collection)} parent The parent object that created this change stream
 * @param {Array} pipeline An array of {@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents
 * @param {ChangeStreamOptions} [options] Optional settings
 * @fires ChangeStream#close
 * @fires ChangeStream#change
 * @fires ChangeStream#end
 * @fires ChangeStream#error
 * @fires ChangeStream#resumeTokenChanged
 * @return {ChangeStream} a ChangeStream instance.
 */

var ChangeStream =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ChangeStream, _EventEmitter);

  function ChangeStream(parent, pipeline, options) {
    var _this;

    _classCallCheck(this, ChangeStream);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChangeStream).call(this));

    var Collection = require('./collection');

    var Db = require('./db');

    var MongoClient = require('./mongo_client');

    _this.pipeline = pipeline || [];
    _this.options = options || {};
    _this.parent = parent;
    _this.namespace = parent.s.namespace;

    if (parent instanceof Collection) {
      _this.type = CHANGE_DOMAIN_TYPES.COLLECTION;
      _this.topology = parent.s.db.serverConfig;
    } else if (parent instanceof Db) {
      _this.type = CHANGE_DOMAIN_TYPES.DATABASE;
      _this.topology = parent.serverConfig;
    } else if (parent instanceof MongoClient) {
      _this.type = CHANGE_DOMAIN_TYPES.CLUSTER;
      _this.topology = parent.topology;
    } else {
      throw new TypeError('parent provided to ChangeStream constructor is not an instance of Collection, Db, or MongoClient');
    }

    _this.promiseLibrary = parent.s.promiseLibrary;

    if (!_this.options.readPreference && parent.s.readPreference) {
      _this.options.readPreference = parent.s.readPreference;
    } // Create contained Change Stream cursor


    _this.cursor = createChangeStreamCursor(_assertThisInitialized(_this), options); // Listen for any `change` listeners being added to ChangeStream

    _this.on('newListener', function (eventName) {
      if (eventName === 'change' && _this.cursor && _this.listenerCount('change') === 0) {
        _this.cursor.on('data', function (change) {
          return processNewChange({
            changeStream: _assertThisInitialized(_this),
            change: change,
            eventEmitter: true
          });
        });
      }
    }); // Listen for all `change` listeners being removed from ChangeStream


    _this.on('removeListener', function (eventName) {
      if (eventName === 'change' && _this.listenerCount('change') === 0 && _this.cursor) {
        _this.cursor.removeAllListeners('data');
      }
    });

    return _this;
  }
  /**
   * @property {ResumeToken} resumeToken
   * The cached resume token that will be used to resume
   * after the most recently returned change.
   */


  _createClass(ChangeStream, [{
    key: "hasNext",

    /**
     * Check if there is any document still available in the Change Stream
     * @function ChangeStream.prototype.hasNext
     * @param {ChangeStream~resultCallback} [callback] The result callback.
     * @throws {MongoError}
     * @return {Promise} returns Promise if no callback passed
     */
    value: function hasNext(callback) {
      return this.cursor.hasNext(callback);
    }
    /**
     * Get the next available document from the Change Stream, returns null if no more documents are available.
     * @function ChangeStream.prototype.next
     * @param {ChangeStream~resultCallback} [callback] The result callback.
     * @throws {MongoError}
     * @return {Promise} returns Promise if no callback passed
     */

  }, {
    key: "next",
    value: function next(callback) {
      var self = this;

      if (this.isClosed()) {
        if (callback) return callback(new Error('Change Stream is not open.'), null);
        return self.promiseLibrary.reject(new Error('Change Stream is not open.'));
      }

      return this.cursor.next().then(function (change) {
        return processNewChange({
          changeStream: self,
          change: change,
          callback: callback
        });
      })["catch"](function (error) {
        return processNewChange({
          changeStream: self,
          error: error,
          callback: callback
        });
      });
    }
    /**
     * Is the cursor closed
     * @method ChangeStream.prototype.isClosed
     * @return {boolean}
     */

  }, {
    key: "isClosed",
    value: function isClosed() {
      if (this.cursor) {
        return this.cursor.isClosed();
      }

      return true;
    }
    /**
     * Close the Change Stream
     * @method ChangeStream.prototype.close
     * @param {ChangeStream~resultCallback} [callback] The result callback.
     * @return {Promise} returns Promise if no callback passed
     */

  }, {
    key: "close",
    value: function close(callback) {
      var _this2 = this;

      if (!this.cursor) {
        if (callback) return callback();
        return this.promiseLibrary.resolve();
      } // Tidy up the existing cursor


      var cursor = this.cursor;

      if (callback) {
        return cursor.close(function (err) {
          ['data', 'close', 'end', 'error'].forEach(function (event) {
            return cursor.removeAllListeners(event);
          });
          delete _this2.cursor;
          return callback(err);
        });
      }

      var PromiseCtor = this.promiseLibrary || Promise;
      return new PromiseCtor(function (resolve, reject) {
        cursor.close(function (err) {
          ['data', 'close', 'end', 'error'].forEach(function (event) {
            return cursor.removeAllListeners(event);
          });
          delete _this2.cursor;
          if (err) return reject(err);
          resolve();
        });
      });
    }
    /**
     * This method pulls all the data out of a readable stream, and writes it to the supplied destination, automatically managing the flow so that the destination is not overwhelmed by a fast readable stream.
     * @method
     * @param {Writable} destination The destination for writing data
     * @param {object} [options] {@link https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options|Pipe options}
     * @return {null}
     */

  }, {
    key: "pipe",
    value: function pipe(destination, options) {
      if (!this.pipeDestinations) {
        this.pipeDestinations = [];
      }

      this.pipeDestinations.push(destination);
      return this.cursor.pipe(destination, options);
    }
    /**
     * This method will remove the hooks set up for a previous pipe() call.
     * @param {Writable} [destination] The destination for writing data
     * @return {null}
     */

  }, {
    key: "unpipe",
    value: function unpipe(destination) {
      if (this.pipeDestinations && this.pipeDestinations.indexOf(destination) > -1) {
        this.pipeDestinations.splice(this.pipeDestinations.indexOf(destination), 1);
      }

      return this.cursor.unpipe(destination);
    }
    /**
     * Return a modified Readable stream including a possible transform method.
     * @method
     * @param {object} [options] Optional settings.
     * @param {function} [options.transform] A transformation method applied to each document emitted by the stream.
     * @return {Cursor}
     */

  }, {
    key: "stream",
    value: function stream(options) {
      this.streamOptions = options;
      return this.cursor.stream(options);
    }
    /**
     * This method will cause a stream in flowing mode to stop emitting data events. Any data that becomes available will remain in the internal buffer.
     * @return {null}
     */

  }, {
    key: "pause",
    value: function pause() {
      return this.cursor.pause();
    }
    /**
     * This method will cause the readable stream to resume emitting data events.
     * @return {null}
     */

  }, {
    key: "resume",
    value: function resume() {
      return this.cursor.resume();
    }
  }, {
    key: "resumeToken",
    get: function get() {
      return this.cursor.resumeToken;
    }
  }]);

  return ChangeStream;
}(EventEmitter);

var ChangeStreamCursor =
/*#__PURE__*/
function (_Cursor) {
  _inherits(ChangeStreamCursor, _Cursor);

  function ChangeStreamCursor(topology, operation, options) {
    var _this3;

    _classCallCheck(this, ChangeStreamCursor);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ChangeStreamCursor).call(this, topology, operation, options));
    options = options || {};
    _this3._resumeToken = null;
    _this3.startAtOperationTime = options.startAtOperationTime;

    if (options.startAfter) {
      _this3.resumeToken = options.startAfter;
    } else if (options.resumeAfter) {
      _this3.resumeToken = options.resumeAfter;
    }

    return _this3;
  }

  _createClass(ChangeStreamCursor, [{
    key: "_initializeCursor",
    value: function _initializeCursor(callback) {
      var _this4 = this;

      _get(_getPrototypeOf(ChangeStreamCursor.prototype), "_initializeCursor", this).call(this, function (err, result) {
        if (err) {
          callback(err, null);
          return;
        }

        var response = result.documents[0];

        if (_this4.startAtOperationTime == null && _this4.resumeAfter == null && _this4.startAfter == null && maxWireVersion(_this4.server) >= 7) {
          _this4.startAtOperationTime = response.operationTime;
        }

        var cursor = response.cursor;

        if (cursor.postBatchResumeToken) {
          _this4.cursorState.postBatchResumeToken = cursor.postBatchResumeToken;

          if (cursor.firstBatch.length === 0) {
            _this4.resumeToken = cursor.postBatchResumeToken;
          }
        }

        _this4.emit('response');

        callback(err, result);
      });
    }
  }, {
    key: "_getMore",
    value: function _getMore(callback) {
      var _this5 = this;

      _get(_getPrototypeOf(ChangeStreamCursor.prototype), "_getMore", this).call(this, function (err, response) {
        if (err) {
          callback(err, null);
          return;
        }

        var cursor = response.cursor;

        if (cursor.postBatchResumeToken) {
          _this5.cursorState.postBatchResumeToken = cursor.postBatchResumeToken;

          if (cursor.nextBatch.length === 0) {
            _this5.resumeToken = cursor.postBatchResumeToken;
          }
        }

        _this5.emit('response');

        callback(err, response);
      });
    }
  }, {
    key: "resumeToken",
    set: function set(token) {
      this._resumeToken = token;
      this.emit('resumeTokenChanged', token);
    },
    get: function get() {
      return this._resumeToken;
    }
  }, {
    key: "resumeOptions",
    get: function get() {
      var result = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = CURSOR_OPTIONS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var optionName = _step.value;
          if (this.options[optionName]) result[optionName] = this.options[optionName];
        }
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

      if (this.resumeToken || this.startAtOperationTime) {
        ['resumeAfter', 'startAfter', 'startAtOperationTime'].forEach(function (key) {
          return delete result[key];
        });

        if (this.resumeToken) {
          result.resumeAfter = this.resumeToken;
        } else if (this.startAtOperationTime && maxWireVersion(this.server) >= 7) {
          result.startAtOperationTime = this.startAtOperationTime;
        }
      }

      return result;
    }
  }]);

  return ChangeStreamCursor;
}(Cursor);
/**
 * @event ChangeStreamCursor#response
 * internal event DO NOT USE
 * @ignore
 */
// Create a new change stream cursor based on self's configuration


function createChangeStreamCursor(self, options) {
  var changeStreamStageOptions = {
    fullDocument: options.fullDocument || 'default'
  };
  applyKnownOptions(changeStreamStageOptions, options, CHANGE_STREAM_OPTIONS);

  if (self.type === CHANGE_DOMAIN_TYPES.CLUSTER) {
    changeStreamStageOptions.allChangesForCluster = true;
  }

  var pipeline = [{
    $changeStream: changeStreamStageOptions
  }].concat(self.pipeline);
  var cursorOptions = applyKnownOptions({}, options, CURSOR_OPTIONS);
  var changeStreamCursor = new ChangeStreamCursor(self.topology, new AggregateOperation(self.parent, pipeline, options), cursorOptions);
  relayEvents(changeStreamCursor, self, ['resumeTokenChanged', 'end', 'close']);
  /**
   * Fired for each new matching change in the specified namespace. Attaching a `change`
   * event listener to a Change Stream will switch the stream into flowing mode. Data will
   * then be passed as soon as it is available.
   *
   * @event ChangeStream#change
   * @type {object}
   */

  if (self.listenerCount('change') > 0) {
    changeStreamCursor.on('data', function (change) {
      processNewChange({
        changeStream: self,
        change: change,
        eventEmitter: true
      });
    });
  }
  /**
   * Change stream close event
   *
   * @event ChangeStream#close
   * @type {null}
   */

  /**
   * Change stream end event
   *
   * @event ChangeStream#end
   * @type {null}
   */

  /**
   * Emitted each time the change stream stores a new resume token.
   *
   * @event ChangeStream#resumeTokenChanged
   * @type {ResumeToken}
   */

  /**
   * Fired when the stream encounters an error.
   *
   * @event ChangeStream#error
   * @type {Error}
   */


  changeStreamCursor.on('error', function (error) {
    processNewChange({
      changeStream: self,
      error: error,
      eventEmitter: true
    });
  });

  if (self.pipeDestinations) {
    var cursorStream = changeStreamCursor.stream(self.streamOptions);

    for (var pipeDestination in self.pipeDestinations) {
      cursorStream.pipe(pipeDestination);
    }
  }

  return changeStreamCursor;
}

function applyKnownOptions(target, source, optionNames) {
  optionNames.forEach(function (name) {
    if (source[name]) {
      target[name] = source[name];
    }
  });
  return target;
} // This method performs a basic server selection loop, satisfying the requirements of
// ChangeStream resumability until the new SDAM layer can be used.


var SELECTION_TIMEOUT = 30000;

function waitForTopologyConnected(topology, options, callback) {
  setTimeout(function () {
    if (options && options.start == null) options.start = process.hrtime();
    var start = options.start || process.hrtime();
    var timeout = options.timeout || SELECTION_TIMEOUT;
    var readPreference = options.readPreference;
    if (topology.isConnected({
      readPreference: readPreference
    })) return callback(null, null);
    var hrElapsed = process.hrtime(start);
    var elapsed = (hrElapsed[0] * 1e9 + hrElapsed[1]) / 1e6;
    if (elapsed > timeout) return callback(new MongoError('Timed out waiting for connection'));
    waitForTopologyConnected(topology, options, callback);
  }, 3000); // this is an arbitrary wait time to allow SDAM to transition
} // Handle new change events. This method brings together the routes from the callback, event emitter, and promise ways of using ChangeStream.


function processNewChange(args) {
  var changeStream = args.changeStream;
  var error = args.error;
  var change = args.change;
  var callback = args.callback;
  var eventEmitter = args.eventEmitter || false; // If the changeStream is closed, then it should not process a change.

  if (changeStream.isClosed()) {
    // We do not error in the eventEmitter case.
    if (eventEmitter) {
      return;
    }

    var _error = new MongoError('ChangeStream is closed');

    return typeof callback === 'function' ? callback(_error, null) : changeStream.promiseLibrary.reject(_error);
  }

  var cursor = changeStream.cursor;
  var topology = changeStream.topology;
  var options = changeStream.cursor.options;

  if (error) {
    if (isResumableError(error) && !changeStream.attemptingResume) {
      changeStream.attemptingResume = true; // stop listening to all events from old cursor

      ['data', 'close', 'end', 'error'].forEach(function (event) {
        return changeStream.cursor.removeAllListeners(event);
      }); // close internal cursor, ignore errors

      changeStream.cursor.close(); // attempt recreating the cursor

      if (eventEmitter) {
        waitForTopologyConnected(topology, {
          readPreference: options.readPreference
        }, function (err) {
          if (err) {
            changeStream.emit('error', err);
            changeStream.emit('close');
            return;
          }

          changeStream.cursor = createChangeStreamCursor(changeStream, cursor.resumeOptions);
        });
        return;
      }

      if (callback) {
        waitForTopologyConnected(topology, {
          readPreference: options.readPreference
        }, function (err) {
          if (err) return callback(err, null);
          changeStream.cursor = createChangeStreamCursor(changeStream, cursor.resumeOptions);
          changeStream.next(callback);
        });
        return;
      }

      return new Promise(function (resolve, reject) {
        waitForTopologyConnected(topology, {
          readPreference: options.readPreference
        }, function (err) {
          if (err) return reject(err);
          resolve();
        });
      }).then(function () {
        return changeStream.cursor = createChangeStreamCursor(changeStream, cursor.resumeOptions);
      }).then(function () {
        return changeStream.next();
      });
    }

    if (eventEmitter) return changeStream.emit('error', error);
    if (typeof callback === 'function') return callback(error, null);
    return changeStream.promiseLibrary.reject(error);
  }

  changeStream.attemptingResume = false;

  if (change && !change._id) {
    var noResumeTokenError = new Error('A change stream document has been received that lacks a resume token (_id).');
    if (eventEmitter) return changeStream.emit('error', noResumeTokenError);
    if (typeof callback === 'function') return callback(noResumeTokenError, null);
    return changeStream.promiseLibrary.reject(noResumeTokenError);
  } // cache the resume token


  if (cursor.bufferedCount() === 0 && cursor.cursorState.postBatchResumeToken) {
    cursor.resumeToken = cursor.cursorState.postBatchResumeToken;
  } else {
    cursor.resumeToken = change._id;
  } // wipe the startAtOperationTime if there was one so that there won't be a conflict
  // between resumeToken and startAtOperationTime if we need to reconnect the cursor


  changeStream.options.startAtOperationTime = undefined; // Return the change

  if (eventEmitter) return changeStream.emit('change', change);
  if (typeof callback === 'function') return callback(error, change);
  return changeStream.promiseLibrary.resolve(change);
}
/**
 * The callback format for results
 * @callback ChangeStream~resultCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 * @param {(object|null)} result The result object if the command was executed successfully.
 */


module.exports = ChangeStream;