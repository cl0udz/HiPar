'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

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

var ReadPreference = require('./core').ReadPreference;

var MongoError = require('./core').MongoError;

var Cursor = require('./cursor');

var CursorState = require('./core/cursor').CursorState;
/**
 * @fileOverview The **CommandCursor** class is an internal class that embodies a
 * generalized cursor based on a MongoDB command allowing for iteration over the
 * results returned. It supports one by one document iteration, conversion to an
 * array or can be iterated as a Node 0.10.X or higher stream
 *
 * **CommandCursor Cannot directly be instantiated**
 * @example
 * const MongoClient = require('mongodb').MongoClient;
 * const test = require('assert');
 * // Connection url
 * const url = 'mongodb://localhost:27017';
 * // Database Name
 * const dbName = 'test';
 * // Connect using MongoClient
 * MongoClient.connect(url, function(err, client) {
 *   // Create a collection we want to drop later
 *   const col = client.db(dbName).collection('listCollectionsExample1');
 *   // Insert a bunch of documents
 *   col.insert([{a:1, b:1}
 *     , {a:2, b:2}, {a:3, b:3}
 *     , {a:4, b:4}], {w:1}, function(err, result) {
 *     test.equal(null, err);
 *     // List the database collections available
 *     db.listCollections().toArray(function(err, items) {
 *       test.equal(null, err);
 *       client.close();
 *     });
 *   });
 * });
 */

/**
 * Namespace provided by the browser.
 * @external Readable
 */

/**
 * Creates a new Command Cursor instance (INTERNAL TYPE, do not instantiate directly)
 * @class CommandCursor
 * @extends external:Readable
 * @fires CommandCursor#data
 * @fires CommandCursor#end
 * @fires CommandCursor#close
 * @fires CommandCursor#readable
 * @return {CommandCursor} an CommandCursor instance.
 */


var CommandCursor =
/*#__PURE__*/
function (_Cursor) {
  _inherits(CommandCursor, _Cursor);

  function CommandCursor(topology, ns, cmd, options) {
    _classCallCheck(this, CommandCursor);

    return _possibleConstructorReturn(this, _getPrototypeOf(CommandCursor).call(this, topology, ns, cmd, options));
  }
  /**
   * Set the ReadPreference for the cursor.
   * @method
   * @param {(string|ReadPreference)} readPreference The new read preference for the cursor.
   * @throws {MongoError}
   * @return {Cursor}
   */


  _createClass(CommandCursor, [{
    key: "setReadPreference",
    value: function setReadPreference(readPreference) {
      if (this.s.state === CursorState.CLOSED || this.isDead()) {
        throw MongoError.create({
          message: 'Cursor is closed',
          driver: true
        });
      }

      if (this.s.state !== CursorState.INIT) {
        throw MongoError.create({
          message: 'cannot change cursor readPreference after cursor has been accessed',
          driver: true
        });
      }

      if (readPreference instanceof ReadPreference) {
        this.options.readPreference = readPreference;
      } else if (typeof readPreference === 'string') {
        this.options.readPreference = new ReadPreference(readPreference);
      } else {
        throw new TypeError('Invalid read preference: ' + readPreference);
      }

      return this;
    }
    /**
     * Set the batch size for the cursor.
     * @method
     * @param {number} value The number of documents to return per batch. See {@link https://docs.mongodb.com/manual/reference/command/find/|find command documentation}.
     * @throws {MongoError}
     * @return {CommandCursor}
     */

  }, {
    key: "batchSize",
    value: function batchSize(value) {
      if (this.s.state === CursorState.CLOSED || this.isDead()) {
        throw MongoError.create({
          message: 'Cursor is closed',
          driver: true
        });
      }

      if (typeof value !== 'number') {
        throw MongoError.create({
          message: 'batchSize requires an integer',
          driver: true
        });
      }

      if (this.cmd.cursor) {
        this.cmd.cursor.batchSize = value;
      }

      this.setCursorBatchSize(value);
      return this;
    }
    /**
     * Add a maxTimeMS stage to the aggregation pipeline
     * @method
     * @param {number} value The state maxTimeMS value.
     * @return {CommandCursor}
     */

  }, {
    key: "maxTimeMS",
    value: function maxTimeMS(value) {
      if (this.topology.lastIsMaster().minWireVersion > 2) {
        this.cmd.maxTimeMS = value;
      }

      return this;
    }
    /**
     * Return the cursor logger
     * @method
     * @return {Logger} return the cursor logger
     * @ignore
     */

  }, {
    key: "getLogger",
    value: function getLogger() {
      return this.logger;
    }
  }]);

  return CommandCursor;
}(Cursor); // aliases


CommandCursor.prototype.get = CommandCursor.prototype.toArray;
/**
 * CommandCursor stream data event, fired for each document in the cursor.
 *
 * @event CommandCursor#data
 * @type {object}
 */

/**
 * CommandCursor stream end event
 *
 * @event CommandCursor#end
 * @type {null}
 */

/**
 * CommandCursor stream close event
 *
 * @event CommandCursor#close
 * @type {null}
 */

/**
 * CommandCursor stream readable event
 *
 * @event CommandCursor#readable
 * @type {null}
 */

/**
 * Get the next available document from the cursor, returns null if no more documents are available.
 * @function CommandCursor.prototype.next
 * @param {CommandCursor~resultCallback} [callback] The result callback.
 * @throws {MongoError}
 * @return {Promise} returns Promise if no callback passed
 */

/**
 * Check if there is any document still available in the cursor
 * @function CommandCursor.prototype.hasNext
 * @param {CommandCursor~resultCallback} [callback] The result callback.
 * @throws {MongoError}
 * @return {Promise} returns Promise if no callback passed
 */

/**
 * The callback format for results
 * @callback CommandCursor~toArrayResultCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 * @param {object[]} documents All the documents the satisfy the cursor.
 */

/**
 * Returns an array of documents. The caller is responsible for making sure that there
 * is enough memory to store the results. Note that the array only contain partial
 * results when this cursor had been previously accessed.
 * @method CommandCursor.prototype.toArray
 * @param {CommandCursor~toArrayResultCallback} [callback] The result callback.
 * @throws {MongoError}
 * @return {Promise} returns Promise if no callback passed
 */

/**
 * The callback format for results
 * @callback CommandCursor~resultCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 * @param {(object|null)} result The result object if the command was executed successfully.
 */

/**
 * Iterates over all the documents for this cursor. As with **{cursor.toArray}**,
 * not all of the elements will be iterated if this cursor had been previously accessed.
 * In that case, **{cursor.rewind}** can be used to reset the cursor. However, unlike
 * **{cursor.toArray}**, the cursor will only hold a maximum of batch size elements
 * at any given time if batch size is specified. Otherwise, the caller is responsible
 * for making sure that the entire result can fit the memory.
 * @method CommandCursor.prototype.each
 * @param {CommandCursor~resultCallback} callback The result callback.
 * @throws {MongoError}
 * @return {null}
 */

/**
 * Close the cursor, sending a KillCursor command and emitting close.
 * @method CommandCursor.prototype.close
 * @param {CommandCursor~resultCallback} [callback] The result callback.
 * @return {Promise} returns Promise if no callback passed
 */

/**
 * Is the cursor closed
 * @method CommandCursor.prototype.isClosed
 * @return {boolean}
 */

/**
 * Clone the cursor
 * @function CommandCursor.prototype.clone
 * @return {CommandCursor}
 */

/**
 * Resets the cursor
 * @function CommandCursor.prototype.rewind
 * @return {CommandCursor}
 */

/**
 * The callback format for the forEach iterator method
 * @callback CommandCursor~iteratorCallback
 * @param {Object} doc An emitted document for the iterator
 */

/**
 * The callback error format for the forEach iterator method
 * @callback CommandCursor~endCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 */

/*
 * Iterates over all the documents for this cursor using the iterator, callback pattern.
 * @method CommandCursor.prototype.forEach
 * @param {CommandCursor~iteratorCallback} iterator The iteration callback.
 * @param {CommandCursor~endCallback} callback The end callback.
 * @throws {MongoError}
 * @return {null}
 */

module.exports = CommandCursor;