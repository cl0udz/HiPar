'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var common = require('./common');

var BulkOperationBase = common.BulkOperationBase;
var Batch = common.Batch;
var bson = common.bson;

var utils = require('../utils');

var toError = utils.toError;
/**
 * Add to internal list of Operations
 *
 * @ignore
 * @param {OrderedBulkOperation} bulkOperation
 * @param {number} docType number indicating the document type
 * @param {object} document
 * @return {OrderedBulkOperation}
 */

function addToOperationsList(bulkOperation, docType, document) {
  // Get the bsonSize
  var bsonSize = bson.calculateObjectSize(document, {
    checkKeys: false,
    // Since we don't know what the user selected for BSON options here,
    // err on the safe side, and check the size with ignoreUndefined: false.
    ignoreUndefined: false
  }); // Throw error if the doc is bigger than the max BSON size

  if (bsonSize >= bulkOperation.s.maxBsonObjectSize) throw toError('document is larger than the maximum size ' + bulkOperation.s.maxBsonObjectSize); // Create a new batch object if we don't have a current one

  if (bulkOperation.s.currentBatch == null) bulkOperation.s.currentBatch = new Batch(docType, bulkOperation.s.currentIndex);
  var maxKeySize = bulkOperation.s.maxKeySize; // Check if we need to create a new batch

  if ( // New batch if we exceed the max batch op size
  bulkOperation.s.currentBatchSize + 1 >= bulkOperation.s.maxWriteBatchSize || // New batch if we exceed the maxBatchSizeBytes. Only matters if batch already has a doc,
  // since we can't sent an empty batch
  bulkOperation.s.currentBatchSize > 0 && bulkOperation.s.currentBatchSizeBytes + maxKeySize + bsonSize >= bulkOperation.s.maxBatchSizeBytes || // New batch if the new op does not have the same op type as the current batch
  bulkOperation.s.currentBatch.batchType !== docType) {
    // Save the batch to the execution stack
    bulkOperation.s.batches.push(bulkOperation.s.currentBatch); // Create a new batch

    bulkOperation.s.currentBatch = new Batch(docType, bulkOperation.s.currentIndex); // Reset the current size trackers

    bulkOperation.s.currentBatchSize = 0;
    bulkOperation.s.currentBatchSizeBytes = 0;
  }

  if (docType === common.INSERT) {
    bulkOperation.s.bulkResult.insertedIds.push({
      index: bulkOperation.s.currentIndex,
      _id: document._id
    });
  } // We have an array of documents


  if (Array.isArray(document)) {
    throw toError('operation passed in cannot be an Array');
  }

  bulkOperation.s.currentBatch.originalIndexes.push(bulkOperation.s.currentIndex);
  bulkOperation.s.currentBatch.operations.push(document);
  bulkOperation.s.currentBatchSize += 1;
  bulkOperation.s.currentBatchSizeBytes += maxKeySize + bsonSize;
  bulkOperation.s.currentIndex += 1; // Return bulkOperation

  return bulkOperation;
}
/**
 * Create a new OrderedBulkOperation instance (INTERNAL TYPE, do not instantiate directly)
 * @class
 * @extends BulkOperationBase
 * @property {number} length Get the number of operations in the bulk.
 * @return {OrderedBulkOperation} a OrderedBulkOperation instance.
 */


var OrderedBulkOperation =
/*#__PURE__*/
function (_BulkOperationBase) {
  _inherits(OrderedBulkOperation, _BulkOperationBase);

  function OrderedBulkOperation(topology, collection, options) {
    _classCallCheck(this, OrderedBulkOperation);

    options = options || {};
    options = Object.assign(options, {
      addToOperationsList: addToOperationsList
    });
    return _possibleConstructorReturn(this, _getPrototypeOf(OrderedBulkOperation).call(this, topology, collection, options, true));
  }

  return OrderedBulkOperation;
}(BulkOperationBase);
/**
 * Returns an unordered batch object
 * @ignore
 */


function initializeOrderedBulkOp(topology, collection, options) {
  return new OrderedBulkOperation(topology, collection, options);
}

initializeOrderedBulkOp.OrderedBulkOperation = OrderedBulkOperation;
module.exports = initializeOrderedBulkOp;
module.exports.Bulk = OrderedBulkOperation;