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

var MongoError = require('./core').MongoError;

var Cursor = require('./cursor');

var CursorState = require('./core/cursor').CursorState;

var deprecate = require('util').deprecate;
/**
 * @fileOverview The **AggregationCursor** class is an internal class that embodies an aggregation cursor on MongoDB
 * allowing for iteration over the results returned from the underlying query. It supports
 * one by one document iteration, conversion to an array or can be iterated as a Node 4.X
 * or higher stream
 *
 * **AGGREGATIONCURSOR Cannot directly be instantiated**
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
 *   const col = client.db(dbName).collection('createIndexExample1');
 *   // Insert a bunch of documents
 *   col.insert([{a:1, b:1}
 *     , {a:2, b:2}, {a:3, b:3}
 *     , {a:4, b:4}], {w:1}, function(err, result) {
 *     test.equal(null, err);
 *     // Show that duplicate records got dropped
 *     col.aggregation({}, {cursor: {}}).toArray(function(err, items) {
 *       test.equal(null, err);
 *       test.equal(4, items.length);
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
 * Creates a new Aggregation Cursor instance (INTERNAL TYPE, do not instantiate directly)
 * @class AggregationCursor
 * @extends external:Readable
 * @fires AggregationCursor#data
 * @fires AggregationCursor#end
 * @fires AggregationCursor#close
 * @fires AggregationCursor#readable
 * @return {AggregationCursor} an AggregationCursor instance.
 */


var AggregationCursor =
/*#__PURE__*/
function (_Cursor) {
  _inherits(AggregationCursor, _Cursor);

  function AggregationCursor(topology, operation, options) {
    _classCallCheck(this, AggregationCursor);

    return _possibleConstructorReturn(this, _getPrototypeOf(AggregationCursor).call(this, topology, operation, options));
  }
  /**
   * Set the batch size for the cursor.
   * @method
   * @param {number} value The number of documents to return per batch. See {@link https://docs.mongodb.com/manual/reference/command/aggregate|aggregation documentation}.
   * @throws {MongoError}
   * @return {AggregationCursor}
   */


  _createClass(AggregationCursor, [{
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

      this.operation.options.batchSize = value;
      this.setCursorBatchSize(value);
      return this;
    }
    /**
     * Add a geoNear stage to the aggregation pipeline
     * @method
     * @param {object} document The geoNear stage document.
     * @return {AggregationCursor}
     */

  }, {
    key: "geoNear",
    value: function geoNear(document) {
      this.operation.addToPipeline({
        $geoNear: document
      });
      return this;
    }
    /**
     * Add a group stage to the aggregation pipeline
     * @method
     * @param {object} document The group stage document.
     * @return {AggregationCursor}
     */

  }, {
    key: "group",
    value: function group(document) {
      this.operation.addToPipeline({
        $group: document
      });
      return this;
    }
    /**
     * Add a limit stage to the aggregation pipeline
     * @method
     * @param {number} value The state limit value.
     * @return {AggregationCursor}
     */

  }, {
    key: "limit",
    value: function limit(value) {
      this.operation.addToPipeline({
        $limit: value
      });
      return this;
    }
    /**
     * Add a match stage to the aggregation pipeline
     * @method
     * @param {object} document The match stage document.
     * @return {AggregationCursor}
     */

  }, {
    key: "match",
    value: function match(document) {
      this.operation.addToPipeline({
        $match: document
      });
      return this;
    }
    /**
     * Add a maxTimeMS stage to the aggregation pipeline
     * @method
     * @param {number} value The state maxTimeMS value.
     * @return {AggregationCursor}
     */

  }, {
    key: "maxTimeMS",
    value: function maxTimeMS(value) {
      this.operation.options.maxTimeMS = value;
      return this;
    }
    /**
     * Add a out stage to the aggregation pipeline
     * @method
     * @param {number} destination The destination name.
     * @return {AggregationCursor}
     */

  }, {
    key: "out",
    value: function out(destination) {
      this.operation.addToPipeline({
        $out: destination
      });
      return this;
    }
    /**
     * Add a project stage to the aggregation pipeline
     * @method
     * @param {object} document The project stage document.
     * @return {AggregationCursor}
     */

  }, {
    key: "project",
    value: function project(document) {
      this.operation.addToPipeline({
        $project: document
      });
      return this;
    }
    /**
     * Add a lookup stage to the aggregation pipeline
     * @method
     * @param {object} document The lookup stage document.
     * @return {AggregationCursor}
     */

  }, {
    key: "lookup",
    value: function lookup(document) {
      this.operation.addToPipeline({
        $lookup: document
      });
      return this;
    }
    /**
     * Add a redact stage to the aggregation pipeline
     * @method
     * @param {object} document The redact stage document.
     * @return {AggregationCursor}
     */

  }, {
    key: "redact",
    value: function redact(document) {
      this.operation.addToPipeline({
        $redact: document
      });
      return this;
    }
    /**
     * Add a skip stage to the aggregation pipeline
     * @method
     * @param {number} value The state skip value.
     * @return {AggregationCursor}
     */

  }, {
    key: "skip",
    value: function skip(value) {
      this.operation.addToPipeline({
        $skip: value
      });
      return this;
    }
    /**
     * Add a sort stage to the aggregation pipeline
     * @method
     * @param {object} document The sort stage document.
     * @return {AggregationCursor}
     */

  }, {
    key: "sort",
    value: function sort(document) {
      this.operation.addToPipeline({
        $sort: document
      });
      return this;
    }
    /**
     * Add a unwind stage to the aggregation pipeline
     * @method
     * @param {number} field The unwind field name.
     * @return {AggregationCursor}
     */

  }, {
    key: "unwind",
    value: function unwind(field) {
      this.operation.addToPipeline({
        $unwind: field
      });
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

  return AggregationCursor;
}(Cursor); // aliases


AggregationCursor.prototype.get = AggregationCursor.prototype.toArray; // deprecated methods

deprecate(AggregationCursor.prototype.geoNear, 'The `$geoNear` stage is deprecated in MongoDB 4.0, and removed in version 4.2.');
/**
 * AggregationCursor stream data event, fired for each document in the cursor.
 *
 * @event AggregationCursor#data
 * @type {object}
 */

/**
 * AggregationCursor stream end event
 *
 * @event AggregationCursor#end
 * @type {null}
 */

/**
 * AggregationCursor stream close event
 *
 * @event AggregationCursor#close
 * @type {null}
 */

/**
 * AggregationCursor stream readable event
 *
 * @event AggregationCursor#readable
 * @type {null}
 */

/**
 * Get the next available document from the cursor, returns null if no more documents are available.
 * @function AggregationCursor.prototype.next
 * @param {AggregationCursor~resultCallback} [callback] The result callback.
 * @throws {MongoError}
 * @return {Promise} returns Promise if no callback passed
 */

/**
 * Check if there is any document still available in the cursor
 * @function AggregationCursor.prototype.hasNext
 * @param {AggregationCursor~resultCallback} [callback] The result callback.
 * @throws {MongoError}
 * @return {Promise} returns Promise if no callback passed
 */

/**
 * The callback format for results
 * @callback AggregationCursor~toArrayResultCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 * @param {object[]} documents All the documents the satisfy the cursor.
 */

/**
 * Returns an array of documents. The caller is responsible for making sure that there
 * is enough memory to store the results. Note that the array only contain partial
 * results when this cursor had been previously accessed. In that case,
 * cursor.rewind() can be used to reset the cursor.
 * @method AggregationCursor.prototype.toArray
 * @param {AggregationCursor~toArrayResultCallback} [callback] The result callback.
 * @throws {MongoError}
 * @return {Promise} returns Promise if no callback passed
 */

/**
 * The callback format for results
 * @callback AggregationCursor~resultCallback
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
 * @method AggregationCursor.prototype.each
 * @deprecated
 * @param {AggregationCursor~resultCallback} callback The result callback.
 * @throws {MongoError}
 * @return {null}
 */

/**
 * Close the cursor, sending a AggregationCursor command and emitting close.
 * @method AggregationCursor.prototype.close
 * @param {AggregationCursor~resultCallback} [callback] The result callback.
 * @return {Promise} returns Promise if no callback passed
 */

/**
 * Is the cursor closed
 * @method AggregationCursor.prototype.isClosed
 * @return {boolean}
 */

/**
 * Execute the explain for the cursor
 * @method AggregationCursor.prototype.explain
 * @param {AggregationCursor~resultCallback} [callback] The result callback.
 * @return {Promise} returns Promise if no callback passed
 */

/**
 * Clone the cursor
 * @function AggregationCursor.prototype.clone
 * @return {AggregationCursor}
 */

/**
 * Resets the cursor
 * @function AggregationCursor.prototype.rewind
 * @return {AggregationCursor}
 */

/**
 * The callback format for the forEach iterator method
 * @callback AggregationCursor~iteratorCallback
 * @param {Object} doc An emitted document for the iterator
 */

/**
 * The callback error format for the forEach iterator method
 * @callback AggregationCursor~endCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 */

/**
 * Iterates over all the documents for this cursor using the iterator, callback pattern.
 * @method AggregationCursor.prototype.forEach
 * @param {AggregationCursor~iteratorCallback} iterator The iteration callback.
 * @param {AggregationCursor~endCallback} callback The end callback.
 * @throws {MongoError}
 * @return {null}
 */

module.exports = AggregationCursor;