'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.some");

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.url.to-json");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Long = require('../core').BSON.Long;

var MongoError = require('../core').MongoError;

var ObjectID = require('../core').BSON.ObjectID;

var BSON = require('../core').BSON;

var MongoWriteConcernError = require('../core').MongoWriteConcernError;

var toError = require('../utils').toError;

var handleCallback = require('../utils').handleCallback;

var applyRetryableWrites = require('../utils').applyRetryableWrites;

var applyWriteConcern = require('../utils').applyWriteConcern;

var executeLegacyOperation = require('../utils').executeLegacyOperation;

var isPromiseLike = require('../utils').isPromiseLike; // Error codes


var WRITE_CONCERN_ERROR = 64; // Insert types

var INSERT = 1;
var UPDATE = 2;
var REMOVE = 3;
var bson = new BSON([BSON.Binary, BSON.Code, BSON.DBRef, BSON.Decimal128, BSON.Double, BSON.Int32, BSON.Long, BSON.Map, BSON.MaxKey, BSON.MinKey, BSON.ObjectId, BSON.BSONRegExp, BSON.Symbol, BSON.Timestamp]);
/**
 * Keeps the state of a unordered batch so we can rewrite the results
 * correctly after command execution
 * @ignore
 */

var Batch = function Batch(batchType, originalZeroIndex) {
  _classCallCheck(this, Batch);

  this.originalZeroIndex = originalZeroIndex;
  this.currentIndex = 0;
  this.originalIndexes = [];
  this.batchType = batchType;
  this.operations = [];
  this.size = 0;
  this.sizeBytes = 0;
};
/**
 * @classdesc
 * The result of a bulk write.
 */


var BulkWriteResult =
/*#__PURE__*/
function () {
  /**
   * Create a new BulkWriteResult instance
   *
   * **NOTE:** Internal Type, do not instantiate directly
   */
  function BulkWriteResult(bulkResult) {
    _classCallCheck(this, BulkWriteResult);

    this.result = bulkResult;
  }
  /**
   * Evaluates to true if the bulk operation correctly executes
   * @type {boolean}
   */


  _createClass(BulkWriteResult, [{
    key: "getInsertedIds",

    /**
     * Returns an array of all inserted ids
     *
     * @return {object[]}
     */
    value: function getInsertedIds() {
      return this.result.insertedIds;
    }
    /**
     * Returns an array of all upserted ids
     *
     * @return {object[]}
     */

  }, {
    key: "getUpsertedIds",
    value: function getUpsertedIds() {
      return this.result.upserted;
    }
    /**
     * Returns the upserted id at the given index
     *
     * @param {number} index the number of the upserted id to return, returns undefined if no result for passed in index
     * @return {object}
     */

  }, {
    key: "getUpsertedIdAt",
    value: function getUpsertedIdAt(index) {
      return this.result.upserted[index];
    }
    /**
     * Returns raw internal result
     *
     * @return {object}
     */

  }, {
    key: "getRawResponse",
    value: function getRawResponse() {
      return this.result;
    }
    /**
     * Returns true if the bulk operation contains a write error
     *
     * @return {boolean}
     */

  }, {
    key: "hasWriteErrors",
    value: function hasWriteErrors() {
      return this.result.writeErrors.length > 0;
    }
    /**
     * Returns the number of write errors off the bulk operation
     *
     * @return {number}
     */

  }, {
    key: "getWriteErrorCount",
    value: function getWriteErrorCount() {
      return this.result.writeErrors.length;
    }
    /**
     * Returns a specific write error object
     *
     * @param {number} index of the write error to return, returns null if there is no result for passed in index
     * @return {WriteError}
     */

  }, {
    key: "getWriteErrorAt",
    value: function getWriteErrorAt(index) {
      if (index < this.result.writeErrors.length) {
        return this.result.writeErrors[index];
      }

      return null;
    }
    /**
     * Retrieve all write errors
     *
     * @return {WriteError[]}
     */

  }, {
    key: "getWriteErrors",
    value: function getWriteErrors() {
      return this.result.writeErrors;
    }
    /**
     * Retrieve lastOp if available
     *
     * @return {object}
     */

  }, {
    key: "getLastOp",
    value: function getLastOp() {
      return this.result.lastOp;
    }
    /**
     * Retrieve the write concern error if any
     *
     * @return {WriteConcernError}
     */

  }, {
    key: "getWriteConcernError",
    value: function getWriteConcernError() {
      if (this.result.writeConcernErrors.length === 0) {
        return null;
      } else if (this.result.writeConcernErrors.length === 1) {
        // Return the error
        return this.result.writeConcernErrors[0];
      } else {
        // Combine the errors
        var errmsg = '';

        for (var i = 0; i < this.result.writeConcernErrors.length; i++) {
          var err = this.result.writeConcernErrors[i];
          errmsg = errmsg + err.errmsg; // TODO: Something better

          if (i === 0) errmsg = errmsg + ' and ';
        }

        return new WriteConcernError({
          errmsg: errmsg,
          code: WRITE_CONCERN_ERROR
        });
      }
    }
    /**
     * @return {object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.result;
    }
    /**
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "BulkWriteResult(".concat(this.toJSON(this.result), ")");
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isOk",
    value: function isOk() {
      return this.result.ok === 1;
    }
  }, {
    key: "ok",
    get: function get() {
      return this.result.ok;
    }
    /**
     * The number of inserted documents
     * @type {number}
     */

  }, {
    key: "nInserted",
    get: function get() {
      return this.result.nInserted;
    }
    /**
     * Number of upserted documents
     * @type {number}
     */

  }, {
    key: "nUpserted",
    get: function get() {
      return this.result.nUpserted;
    }
    /**
     * Number of matched documents
     * @type {number}
     */

  }, {
    key: "nMatched",
    get: function get() {
      return this.result.nMatched;
    }
    /**
     * Number of documents updated physically on disk
     * @type {number}
     */

  }, {
    key: "nModified",
    get: function get() {
      return this.result.nModified;
    }
    /**
     * Number of removed documents
     * @type {number}
     */

  }, {
    key: "nRemoved",
    get: function get() {
      return this.result.nRemoved;
    }
  }]);

  return BulkWriteResult;
}();
/**
 * @classdesc An error representing a failure by the server to apply the requested write concern to the bulk operation.
 */


var WriteConcernError =
/*#__PURE__*/
function () {
  /**
   * Create a new WriteConcernError instance
   *
   * **NOTE:** Internal Type, do not instantiate directly
   */
  function WriteConcernError(err) {
    _classCallCheck(this, WriteConcernError);

    this.err = err;
  }
  /**
   * Write concern error code.
   * @type {number}
   */


  _createClass(WriteConcernError, [{
    key: "toJSON",

    /**
     * @return {object}
     */
    value: function toJSON() {
      return {
        code: this.err.code,
        errmsg: this.err.errmsg
      };
    }
    /**
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "WriteConcernError(".concat(this.err.errmsg, ")");
    }
  }, {
    key: "code",
    get: function get() {
      return this.err.code;
    }
    /**
     * Write concern error message.
     * @type {string}
     */

  }, {
    key: "errmsg",
    get: function get() {
      return this.err.errmsg;
    }
  }]);

  return WriteConcernError;
}();
/**
 * @classdesc An error that occurred during a BulkWrite on the server.
 */


var WriteError =
/*#__PURE__*/
function () {
  /**
   * Create a new WriteError instance
   *
   * **NOTE:** Internal Type, do not instantiate directly
   */
  function WriteError(err) {
    _classCallCheck(this, WriteError);

    this.err = err;
  }
  /**
   * WriteError code.
   * @type {number}
   */


  _createClass(WriteError, [{
    key: "getOperation",

    /**
     * Returns the underlying operation that caused the error
     * @return {object}
     */
    value: function getOperation() {
      return this.err.op;
    }
    /**
     * @return {object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        code: this.err.code,
        index: this.err.index,
        errmsg: this.err.errmsg,
        op: this.err.op
      };
    }
    /**
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "WriteError(".concat(JSON.stringify(this.toJSON()), ")");
    }
  }, {
    key: "code",
    get: function get() {
      return this.err.code;
    }
    /**
     * WriteError original bulk operation index.
     * @type {number}
     */

  }, {
    key: "index",
    get: function get() {
      return this.err.index;
    }
    /**
     * WriteError message.
     * @type {string}
     */

  }, {
    key: "errmsg",
    get: function get() {
      return this.err.errmsg;
    }
  }]);

  return WriteError;
}();
/**
 * Merges results into shared data structure
 * @ignore
 */


function mergeBatchResults(batch, bulkResult, err, result) {
  // If we have an error set the result to be the err object
  if (err) {
    result = err;
  } else if (result && result.result) {
    result = result.result;
  } else if (result == null) {
    return;
  } // Do we have a top level error stop processing and return


  if (result.ok === 0 && bulkResult.ok === 1) {
    bulkResult.ok = 0;
    var writeError = {
      index: 0,
      code: result.code || 0,
      errmsg: result.message,
      op: batch.operations[0]
    };
    bulkResult.writeErrors.push(new WriteError(writeError));
    return;
  } else if (result.ok === 0 && bulkResult.ok === 0) {
    return;
  } // Deal with opTime if available


  if (result.opTime || result.lastOp) {
    var opTime = result.lastOp || result.opTime;
    var lastOpTS = null;
    var lastOpT = null; // We have a time stamp

    if (opTime && opTime._bsontype === 'Timestamp') {
      if (bulkResult.lastOp == null) {
        bulkResult.lastOp = opTime;
      } else if (opTime.greaterThan(bulkResult.lastOp)) {
        bulkResult.lastOp = opTime;
      }
    } else {
      // Existing TS
      if (bulkResult.lastOp) {
        lastOpTS = typeof bulkResult.lastOp.ts === 'number' ? Long.fromNumber(bulkResult.lastOp.ts) : bulkResult.lastOp.ts;
        lastOpT = typeof bulkResult.lastOp.t === 'number' ? Long.fromNumber(bulkResult.lastOp.t) : bulkResult.lastOp.t;
      } // Current OpTime TS


      var opTimeTS = typeof opTime.ts === 'number' ? Long.fromNumber(opTime.ts) : opTime.ts;
      var opTimeT = typeof opTime.t === 'number' ? Long.fromNumber(opTime.t) : opTime.t; // Compare the opTime's

      if (bulkResult.lastOp == null) {
        bulkResult.lastOp = opTime;
      } else if (opTimeTS.greaterThan(lastOpTS)) {
        bulkResult.lastOp = opTime;
      } else if (opTimeTS.equals(lastOpTS)) {
        if (opTimeT.greaterThan(lastOpT)) {
          bulkResult.lastOp = opTime;
        }
      }
    }
  } // If we have an insert Batch type


  if (batch.batchType === INSERT && result.n) {
    bulkResult.nInserted = bulkResult.nInserted + result.n;
  } // If we have an insert Batch type


  if (batch.batchType === REMOVE && result.n) {
    bulkResult.nRemoved = bulkResult.nRemoved + result.n;
  }

  var nUpserted = 0; // We have an array of upserted values, we need to rewrite the indexes

  if (Array.isArray(result.upserted)) {
    nUpserted = result.upserted.length;

    for (var i = 0; i < result.upserted.length; i++) {
      bulkResult.upserted.push({
        index: result.upserted[i].index + batch.originalZeroIndex,
        _id: result.upserted[i]._id
      });
    }
  } else if (result.upserted) {
    nUpserted = 1;
    bulkResult.upserted.push({
      index: batch.originalZeroIndex,
      _id: result.upserted
    });
  } // If we have an update Batch type


  if (batch.batchType === UPDATE && result.n) {
    var nModified = result.nModified;
    bulkResult.nUpserted = bulkResult.nUpserted + nUpserted;
    bulkResult.nMatched = bulkResult.nMatched + (result.n - nUpserted);

    if (typeof nModified === 'number') {
      bulkResult.nModified = bulkResult.nModified + nModified;
    } else {
      bulkResult.nModified = null;
    }
  }

  if (Array.isArray(result.writeErrors)) {
    for (var _i = 0; _i < result.writeErrors.length; _i++) {
      var _writeError = {
        index: batch.originalIndexes[_i],
        code: result.writeErrors[_i].code,
        errmsg: result.writeErrors[_i].errmsg,
        op: batch.operations[result.writeErrors[_i].index]
      };
      bulkResult.writeErrors.push(new WriteError(_writeError));
    }
  }

  if (result.writeConcernError) {
    bulkResult.writeConcernErrors.push(new WriteConcernError(result.writeConcernError));
  }
}

function executeCommands(bulkOperation, options, callback) {
  if (bulkOperation.s.batches.length === 0) {
    return handleCallback(callback, null, new BulkWriteResult(bulkOperation.s.bulkResult));
  }

  var batch = bulkOperation.s.batches.shift();

  function resultHandler(err, result) {
    // Error is a driver related error not a bulk op error, terminate
    if ((err && err.driver || err && err.message) && !(err instanceof MongoWriteConcernError)) {
      return handleCallback(callback, err);
    } // If we have and error


    if (err) err.ok = 0;

    if (err instanceof MongoWriteConcernError) {
      return handleMongoWriteConcernError(batch, bulkOperation.s.bulkResult, err, callback);
    } // Merge the results together


    var writeResult = new BulkWriteResult(bulkOperation.s.bulkResult);
    var mergeResult = mergeBatchResults(batch, bulkOperation.s.bulkResult, err, result);

    if (mergeResult != null) {
      return handleCallback(callback, null, writeResult);
    }

    if (bulkOperation.handleWriteError(callback, writeResult)) return; // Execute the next command in line

    executeCommands(bulkOperation, options, callback);
  }

  bulkOperation.finalOptionsHandler({
    options: options,
    batch: batch,
    resultHandler: resultHandler
  }, callback);
}
/**
 * handles write concern error
 *
 * @ignore
 * @param {object} batch
 * @param {object} bulkResult
 * @param {boolean} ordered
 * @param {WriteConcernError} err
 * @param {function} callback
 */


function handleMongoWriteConcernError(batch, bulkResult, err, callback) {
  mergeBatchResults(batch, bulkResult, null, err.result);
  var wrappedWriteConcernError = new WriteConcernError({
    errmsg: err.result.writeConcernError.errmsg,
    code: err.result.writeConcernError.result
  });
  return handleCallback(callback, new BulkWriteError(toError(wrappedWriteConcernError), new BulkWriteResult(bulkResult)), null);
}
/**
 * @classdesc An error indicating an unsuccessful Bulk Write
 */


var BulkWriteError =
/*#__PURE__*/
function (_MongoError) {
  _inherits(BulkWriteError, _MongoError);

  /**
   * Creates a new BulkWriteError
   *
   * @param {Error|string|object} message The error message
   * @param {BulkWriteResult} result The result of the bulk write operation
   * @extends {MongoError}
   */
  function BulkWriteError(error, result) {
    var _this;

    _classCallCheck(this, BulkWriteError);

    var message = error.err || error.errmsg || error.errMessage || error;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(BulkWriteError).call(this, message));
    Object.assign(_assertThisInitialized(_this), error);
    _this.name = 'BulkWriteError';
    _this.result = result;
    return _this;
  }

  return BulkWriteError;
}(MongoError);
/**
 * @classdesc A builder object that is returned from {@link BulkOperationBase#find}.
 * Is used to build a write operation that involves a query filter.
 */


var FindOperators =
/*#__PURE__*/
function () {
  /**
   * Creates a new FindOperators object.
   *
   * **NOTE:** Internal Type, do not instantiate directly
   * @param {OrderedBulkOperation|UnorderedBulkOperation} bulkOperation
   */
  function FindOperators(bulkOperation) {
    _classCallCheck(this, FindOperators);

    this.s = bulkOperation.s;
  }
  /**
   * Add a multiple update operation to the bulk operation
   *
   * @method
   * @param {object} updateDocument An update field for an update operation. See {@link https://docs.mongodb.com/manual/reference/command/update/#update-command-u u documentation}
   * @param {object} [options.hint] An optional hint for query optimization. See the {@link https://docs.mongodb.com/manual/reference/command/update/#update-command-hint|update command} reference for more information.
   * @throws {MongoError} If operation cannot be added to bulk write
   * @return {OrderedBulkOperation|UnorderedBulkOperation} A reference to the parent BulkOperation
   */


  _createClass(FindOperators, [{
    key: "update",
    value: function update(updateDocument) {
      // Perform upsert
      var upsert = typeof this.s.currentOp.upsert === 'boolean' ? this.s.currentOp.upsert : false; // Establish the update command

      var document = {
        q: this.s.currentOp.selector,
        u: updateDocument,
        multi: true,
        upsert: upsert
      };

      if (updateDocument.hint) {
        document.hint = updateDocument.hint;
      } // Clear out current Op


      this.s.currentOp = null;
      return this.s.options.addToOperationsList(this, UPDATE, document);
    }
    /**
     * Add a single update operation to the bulk operation
     *
     * @method
     * @param {object} updateDocument An update field for an update operation. See {@link https://docs.mongodb.com/manual/reference/command/update/#update-command-u u documentation}
     * @param {object} [options.hint] An optional hint for query optimization. See the {@link https://docs.mongodb.com/manual/reference/command/update/#update-command-hint|update command} reference for more information.
     * @throws {MongoError} If operation cannot be added to bulk write
     * @return {OrderedBulkOperation|UnorderedBulkOperation} A reference to the parent BulkOperation
     */

  }, {
    key: "updateOne",
    value: function updateOne(updateDocument) {
      // Perform upsert
      var upsert = typeof this.s.currentOp.upsert === 'boolean' ? this.s.currentOp.upsert : false; // Establish the update command

      var document = {
        q: this.s.currentOp.selector,
        u: updateDocument,
        multi: false,
        upsert: upsert
      };

      if (updateDocument.hint) {
        document.hint = updateDocument.hint;
      } // Clear out current Op


      this.s.currentOp = null;
      return this.s.options.addToOperationsList(this, UPDATE, document);
    }
    /**
     * Add a replace one operation to the bulk operation
     *
     * @method
     * @param {object} updateDocument the new document to replace the existing one with
     * @throws {MongoError} If operation cannot be added to bulk write
     * @return {OrderedBulkOperation|UnorderedBulkOperation} A reference to the parent BulkOperation
     */

  }, {
    key: "replaceOne",
    value: function replaceOne(updateDocument) {
      this.updateOne(updateDocument);
    }
    /**
     * Upsert modifier for update bulk operation, noting that this operation is an upsert.
     *
     * @method
     * @throws {MongoError} If operation cannot be added to bulk write
     * @return {FindOperators} reference to self
     */

  }, {
    key: "upsert",
    value: function upsert() {
      this.s.currentOp.upsert = true;
      return this;
    }
    /**
     * Add a delete one operation to the bulk operation
     *
     * @method
     * @throws {MongoError} If operation cannot be added to bulk write
     * @return {OrderedBulkOperation|UnorderedBulkOperation} A reference to the parent BulkOperation
     */

  }, {
    key: "deleteOne",
    value: function deleteOne() {
      // Establish the update command
      var document = {
        q: this.s.currentOp.selector,
        limit: 1
      }; // Clear out current Op

      this.s.currentOp = null;
      return this.s.options.addToOperationsList(this, REMOVE, document);
    }
    /**
     * Add a delete many operation to the bulk operation
     *
     * @method
     * @throws {MongoError} If operation cannot be added to bulk write
     * @return {OrderedBulkOperation|UnorderedBulkOperation} A reference to the parent BulkOperation
     */

  }, {
    key: "delete",
    value: function _delete() {
      // Establish the update command
      var document = {
        q: this.s.currentOp.selector,
        limit: 0
      }; // Clear out current Op

      this.s.currentOp = null;
      return this.s.options.addToOperationsList(this, REMOVE, document);
    }
    /**
     * backwards compatability for deleteOne
     */

  }, {
    key: "removeOne",
    value: function removeOne() {
      return this.deleteOne();
    }
    /**
     * backwards compatability for delete
     */

  }, {
    key: "remove",
    value: function remove() {
      return this["delete"]();
    }
  }]);

  return FindOperators;
}();
/**
 * @classdesc Parent class to OrderedBulkOperation and UnorderedBulkOperation
 *
 * **NOTE:** Internal Type, do not instantiate directly
 */


var BulkOperationBase =
/*#__PURE__*/
function () {
  /**
   * Create a new OrderedBulkOperation or UnorderedBulkOperation instance
   * @property {number} length Get the number of operations in the bulk.
   */
  function BulkOperationBase(topology, collection, options, isOrdered) {
    _classCallCheck(this, BulkOperationBase);

    // determine whether bulkOperation is ordered or unordered
    this.isOrdered = isOrdered;
    options = options == null ? {} : options; // TODO Bring from driver information in isMaster
    // Get the namespace for the write operations

    var namespace = collection.s.namespace; // Used to mark operation as executed

    var executed = false; // Current item

    var currentOp = null; // Handle to the bson serializer, used to calculate running sizes

    var bson = topology.bson; // Set max byte size

    var isMaster = topology.lastIsMaster(); // If we have autoEncryption on, batch-splitting must be done on 2mb chunks, but single documents
    // over 2mb are still allowed

    var usingAutoEncryption = !!(topology.s.options && topology.s.options.autoEncrypter);
    var maxBsonObjectSize = isMaster && isMaster.maxBsonObjectSize ? isMaster.maxBsonObjectSize : 1024 * 1024 * 16;
    var maxBatchSizeBytes = usingAutoEncryption ? 1024 * 1024 * 2 : maxBsonObjectSize;
    var maxWriteBatchSize = isMaster && isMaster.maxWriteBatchSize ? isMaster.maxWriteBatchSize : 1000; // Calculates the largest possible size of an Array key, represented as a BSON string
    // element. This calculation:
    //     1 byte for BSON type
    //     # of bytes = length of (string representation of (maxWriteBatchSize - 1))
    //   + 1 bytes for null terminator

    var maxKeySize = (maxWriteBatchSize - 1).toString(10).length + 2; // Final options for retryable writes and write concern

    var finalOptions = Object.assign({}, options);
    finalOptions = applyRetryableWrites(finalOptions, collection.s.db);
    finalOptions = applyWriteConcern(finalOptions, {
      collection: collection
    }, options);
    var writeConcern = finalOptions.writeConcern; // Get the promiseLibrary

    var promiseLibrary = options.promiseLibrary || Promise; // Final results

    var bulkResult = {
      ok: 1,
      writeErrors: [],
      writeConcernErrors: [],
      insertedIds: [],
      nInserted: 0,
      nUpserted: 0,
      nMatched: 0,
      nModified: 0,
      nRemoved: 0,
      upserted: []
    }; // Internal state

    this.s = {
      // Final result
      bulkResult: bulkResult,
      // Current batch state
      currentBatch: null,
      currentIndex: 0,
      // ordered specific
      currentBatchSize: 0,
      currentBatchSizeBytes: 0,
      // unordered specific
      currentInsertBatch: null,
      currentUpdateBatch: null,
      currentRemoveBatch: null,
      batches: [],
      // Write concern
      writeConcern: writeConcern,
      // Max batch size options
      maxBsonObjectSize: maxBsonObjectSize,
      maxBatchSizeBytes: maxBatchSizeBytes,
      maxWriteBatchSize: maxWriteBatchSize,
      maxKeySize: maxKeySize,
      // Namespace
      namespace: namespace,
      // BSON
      bson: bson,
      // Topology
      topology: topology,
      // Options
      options: finalOptions,
      // Current operation
      currentOp: currentOp,
      // Executed
      executed: executed,
      // Collection
      collection: collection,
      // Promise Library
      promiseLibrary: promiseLibrary,
      // Fundamental error
      err: null,
      // check keys
      checkKeys: typeof options.checkKeys === 'boolean' ? options.checkKeys : true
    }; // bypass Validation

    if (options.bypassDocumentValidation === true) {
      this.s.bypassDocumentValidation = true;
    }
  }
  /**
   * Add a single insert document to the bulk operation
   *
   * @param {object} document the document to insert
   * @throws {MongoError}
   * @return {BulkOperationBase} A reference to self
   *
   * @example
   * const bulkOp = collection.initializeOrderedBulkOp();
   * // Adds three inserts to the bulkOp.
   * bulkOp
   *   .insert({ a: 1 })
   *   .insert({ b: 2 })
   *   .insert({ c: 3 });
   * await bulkOp.execute();
   */


  _createClass(BulkOperationBase, [{
    key: "insert",
    value: function insert(document) {
      if (this.s.collection.s.db.options.forceServerObjectId !== true && document._id == null) document._id = new ObjectID();
      return this.s.options.addToOperationsList(this, INSERT, document);
    }
    /**
     * Builds a find operation for an update/updateOne/delete/deleteOne/replaceOne.
     * Returns a builder object used to complete the definition of the operation.
     *
     * @method
     * @param {object} selector The selector for the bulk operation. See {@link https://docs.mongodb.com/manual/reference/command/update/#update-command-q q documentation}
     * @throws {MongoError} if a selector is not specified
     * @return {FindOperators} A helper object with which the write operation can be defined.
     *
     * @example
     * const bulkOp = collection.initializeOrderedBulkOp();
     *
     * // Add an updateOne to the bulkOp
     * bulkOp.find({ a: 1 }).updateOne({ $set: { b: 2 } });
     *
     * // Add an updateMany to the bulkOp
     * bulkOp.find({ c: 3 }).update({ $set: { d: 4 } });
     *
     * // Add an upsert
     * bulkOp.find({ e: 5 }).upsert().updateOne({ $set: { f: 6 } });
     *
     * // Add a deletion
     * bulkOp.find({ g: 7 }).deleteOne();
     *
     * // Add a multi deletion
     * bulkOp.find({ h: 8 }).delete();
     *
     * // Add a replaceOne
     * bulkOp.find({ i: 9 }).replaceOne({ j: 10 });
     *
     * // Update using a pipeline (requires Mongodb 4.2 or higher)
     * bulk.find({ k: 11, y: { $exists: true }, z: { $exists: true } }).updateOne([
     *   { $set: { total: { $sum: [ '$y', '$z' ] } } }
     * ]);
     *
     * // All of the ops will now be executed
     * await bulkOp.execute();
     */

  }, {
    key: "find",
    value: function find(selector) {
      if (!selector) {
        throw toError('Bulk find operation must specify a selector');
      } // Save a current selector


      this.s.currentOp = {
        selector: selector
      };
      return new FindOperators(this);
    }
    /**
     * Specifies a raw operation to perform in the bulk write.
     *
     * @method
     * @param {object} op The raw operation to perform.
     * @param {object} [options.hint] An optional hint for query optimization. See the {@link https://docs.mongodb.com/manual/reference/command/update/#update-command-hint|update command} reference for more information.
     * @return {BulkOperationBase} A reference to self
     */

  }, {
    key: "raw",
    value: function raw(op) {
      var key = Object.keys(op)[0]; // Set up the force server object id

      var forceServerObjectId = typeof this.s.options.forceServerObjectId === 'boolean' ? this.s.options.forceServerObjectId : this.s.collection.s.db.options.forceServerObjectId; // Update operations

      if (op.updateOne && op.updateOne.q || op.updateMany && op.updateMany.q || op.replaceOne && op.replaceOne.q) {
        op[key].multi = op.updateOne || op.replaceOne ? false : true;
        return this.s.options.addToOperationsList(this, UPDATE, op[key]);
      } // Crud spec update format


      if (op.updateOne || op.updateMany || op.replaceOne) {
        var multi = op.updateOne || op.replaceOne ? false : true;
        var operation = {
          q: op[key].filter,
          u: op[key].update || op[key].replacement,
          multi: multi
        };

        if (op[key].hint) {
          operation.hint = op[key].hint;
        }

        if (this.isOrdered) {
          operation.upsert = op[key].upsert ? true : false;
          if (op.collation) operation.collation = op.collation;
        } else {
          if (op[key].upsert) operation.upsert = true;
        }

        if (op[key].arrayFilters) operation.arrayFilters = op[key].arrayFilters;
        return this.s.options.addToOperationsList(this, UPDATE, operation);
      } // Remove operations


      if (op.removeOne || op.removeMany || op.deleteOne && op.deleteOne.q || op.deleteMany && op.deleteMany.q) {
        op[key].limit = op.removeOne ? 1 : 0;
        return this.s.options.addToOperationsList(this, REMOVE, op[key]);
      } // Crud spec delete operations, less efficient


      if (op.deleteOne || op.deleteMany) {
        var limit = op.deleteOne ? 1 : 0;
        var _operation = {
          q: op[key].filter,
          limit: limit
        };

        if (this.isOrdered) {
          if (op.collation) _operation.collation = op.collation;
        }

        return this.s.options.addToOperationsList(this, REMOVE, _operation);
      } // Insert operations


      if (op.insertOne && op.insertOne.document == null) {
        if (forceServerObjectId !== true && op.insertOne._id == null) op.insertOne._id = new ObjectID();
        return this.s.options.addToOperationsList(this, INSERT, op.insertOne);
      } else if (op.insertOne && op.insertOne.document) {
        if (forceServerObjectId !== true && op.insertOne.document._id == null) op.insertOne.document._id = new ObjectID();
        return this.s.options.addToOperationsList(this, INSERT, op.insertOne.document);
      }

      if (op.insertMany) {
        for (var i = 0; i < op.insertMany.length; i++) {
          if (forceServerObjectId !== true && op.insertMany[i]._id == null) op.insertMany[i]._id = new ObjectID();
          this.s.options.addToOperationsList(this, INSERT, op.insertMany[i]);
        }

        return;
      } // No valid type of operation


      throw toError('bulkWrite only supports insertOne, insertMany, updateOne, updateMany, removeOne, removeMany, deleteOne, deleteMany');
    }
    /**
     * helper function to assist with promiseOrCallback behavior
     * @ignore
     * @param {*} err
     * @param {*} callback
     */

  }, {
    key: "_handleEarlyError",
    value: function _handleEarlyError(err, callback) {
      if (typeof callback === 'function') {
        callback(err, null);
        return;
      }

      return this.s.promiseLibrary.reject(err);
    }
    /**
     * An internal helper method. Do not invoke directly. Will be going away in the future
     *
     * @ignore
     * @method
     * @param {class} bulk either OrderedBulkOperation or UnorderdBulkOperation
     * @param {object} writeConcern
     * @param {object} options
     * @param {function} callback
     */

  }, {
    key: "bulkExecute",
    value: function bulkExecute(_writeConcern, options, callback) {
      if (typeof options === 'function') callback = options, options = {};
      options = options || {};

      if (typeof _writeConcern === 'function') {
        callback = _writeConcern;
      } else if (_writeConcern && _typeof(_writeConcern) === 'object') {
        this.s.writeConcern = _writeConcern;
      }

      if (this.s.executed) {
        var executedError = toError('batch cannot be re-executed');
        return this._handleEarlyError(executedError, callback);
      } // If we have current batch


      if (this.isOrdered) {
        if (this.s.currentBatch) this.s.batches.push(this.s.currentBatch);
      } else {
        if (this.s.currentInsertBatch) this.s.batches.push(this.s.currentInsertBatch);
        if (this.s.currentUpdateBatch) this.s.batches.push(this.s.currentUpdateBatch);
        if (this.s.currentRemoveBatch) this.s.batches.push(this.s.currentRemoveBatch);
      } // If we have no operations in the bulk raise an error


      if (this.s.batches.length === 0) {
        var emptyBatchError = toError('Invalid Operation, no operations specified');
        return this._handleEarlyError(emptyBatchError, callback);
      }

      return {
        options: options,
        callback: callback
      };
    }
    /**
     * The callback format for results
     * @callback BulkOperationBase~resultCallback
     * @param {MongoError} error An error instance representing the error during the execution.
     * @param {BulkWriteResult} result The bulk write result.
     */

    /**
     * Execute the bulk operation
     *
     * @method
     * @param {WriteConcern} [_writeConcern] Optional write concern. Can also be specified through options.
     * @param {object} [options] Optional settings.
     * @param {(number|string)} [options.w] The write concern.
     * @param {number} [options.wtimeout] The write concern timeout.
     * @param {boolean} [options.j=false] Specify a journal write concern.
     * @param {boolean} [options.fsync=false] Specify a file sync write concern.
     * @param {BulkOperationBase~resultCallback} [callback] A callback that will be invoked when bulkWrite finishes/errors
     * @throws {MongoError} Throws error if the bulk object has already been executed
     * @throws {MongoError} Throws error if the bulk object does not have any operations
     * @return {Promise|void} returns Promise if no callback passed
     */

  }, {
    key: "execute",
    value: function execute(_writeConcern, options, callback) {
      var ret = this.bulkExecute(_writeConcern, options, callback);

      if (!ret || isPromiseLike(ret)) {
        return ret;
      }

      options = ret.options;
      callback = ret.callback;
      return executeLegacyOperation(this.s.topology, executeCommands, [this, options, callback]);
    }
    /**
     * Handles final options before executing command
     *
     * An internal method. Do not invoke. Will not be accessible in the future
     *
     * @ignore
     * @param {object} config
     * @param {object} config.options
     * @param {number} config.batch
     * @param {function} config.resultHandler
     * @param {function} callback
     */

  }, {
    key: "finalOptionsHandler",
    value: function finalOptionsHandler(config, callback) {
      var finalOptions = Object.assign({
        ordered: this.isOrdered
      }, config.options);

      if (this.s.writeConcern != null) {
        finalOptions.writeConcern = this.s.writeConcern;
      }

      if (finalOptions.bypassDocumentValidation !== true) {
        delete finalOptions.bypassDocumentValidation;
      } // Set an operationIf if provided


      if (this.operationId) {
        config.resultHandler.operationId = this.operationId;
      } // Serialize functions


      if (this.s.options.serializeFunctions) {
        finalOptions.serializeFunctions = true;
      } // Ignore undefined


      if (this.s.options.ignoreUndefined) {
        finalOptions.ignoreUndefined = true;
      } // Is the bypassDocumentValidation options specific


      if (this.s.bypassDocumentValidation === true) {
        finalOptions.bypassDocumentValidation = true;
      } // Is the checkKeys option disabled


      if (this.s.checkKeys === false) {
        finalOptions.checkKeys = false;
      }

      if (finalOptions.retryWrites) {
        if (config.batch.batchType === UPDATE) {
          finalOptions.retryWrites = finalOptions.retryWrites && !config.batch.operations.some(function (op) {
            return op.multi;
          });
        }

        if (config.batch.batchType === REMOVE) {
          finalOptions.retryWrites = finalOptions.retryWrites && !config.batch.operations.some(function (op) {
            return op.limit === 0;
          });
        }
      }

      try {
        if (config.batch.batchType === INSERT) {
          this.s.topology.insert(this.s.namespace, config.batch.operations, finalOptions, config.resultHandler);
        } else if (config.batch.batchType === UPDATE) {
          this.s.topology.update(this.s.namespace, config.batch.operations, finalOptions, config.resultHandler);
        } else if (config.batch.batchType === REMOVE) {
          this.s.topology.remove(this.s.namespace, config.batch.operations, finalOptions, config.resultHandler);
        }
      } catch (err) {
        // Force top level error
        err.ok = 0; // Merge top level error and return

        handleCallback(callback, null, mergeBatchResults(config.batch, this.s.bulkResult, err, null));
      }
    }
    /**
     * Handles the write error before executing commands
     *
     * An internal helper method. Do not invoke directly. Will be going away in the future
     *
     * @ignore
     * @param {function} callback
     * @param {BulkWriteResult} writeResult
     * @param {class} self either OrderedBulkOperation or UnorderdBulkOperation
     */

  }, {
    key: "handleWriteError",
    value: function handleWriteError(callback, writeResult) {
      if (this.s.bulkResult.writeErrors.length > 0) {
        if (this.s.bulkResult.writeErrors.length === 1) {
          handleCallback(callback, new BulkWriteError(toError(this.s.bulkResult.writeErrors[0]), writeResult), null);
          return true;
        }

        var msg = this.s.bulkResult.writeErrors[0].errmsg ? this.s.bulkResult.writeErrors[0].errmsg : 'write operation failed';
        handleCallback(callback, new BulkWriteError(toError({
          message: msg,
          code: this.s.bulkResult.writeErrors[0].code,
          writeErrors: this.s.bulkResult.writeErrors
        }), writeResult), null);
        return true;
      } else if (writeResult.getWriteConcernError()) {
        handleCallback(callback, new BulkWriteError(toError(writeResult.getWriteConcernError()), writeResult), null);
        return true;
      }
    }
  }]);

  return BulkOperationBase;
}();

Object.defineProperty(BulkOperationBase.prototype, 'length', {
  enumerable: true,
  get: function get() {
    return this.s.currentIndex;
  }
}); // Exports symbols

module.exports = {
  Batch: Batch,
  BulkOperationBase: BulkOperationBase,
  bson: bson,
  INSERT: INSERT,
  UPDATE: UPDATE,
  REMOVE: REMOVE,
  BulkWriteError: BulkWriteError
};