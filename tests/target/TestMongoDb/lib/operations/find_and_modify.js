'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.sort");

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

var OperationBase = require('./operation').OperationBase;

var applyRetryableWrites = require('../utils').applyRetryableWrites;

var applyWriteConcern = require('../utils').applyWriteConcern;

var decorateWithCollation = require('../utils').decorateWithCollation;

var executeCommand = require('./db_ops').executeCommand;

var formattedOrderClause = require('../utils').formattedOrderClause;

var handleCallback = require('../utils').handleCallback;

var ReadPreference = require('../core').ReadPreference;

var FindAndModifyOperation =
/*#__PURE__*/
function (_OperationBase) {
  _inherits(FindAndModifyOperation, _OperationBase);

  function FindAndModifyOperation(collection, query, sort, doc, options) {
    var _this;

    _classCallCheck(this, FindAndModifyOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FindAndModifyOperation).call(this, options));
    _this.collection = collection;
    _this.query = query;
    _this.sort = sort;
    _this.doc = doc;
    return _this;
  }

  _createClass(FindAndModifyOperation, [{
    key: "execute",
    value: function execute(callback) {
      var coll = this.collection;
      var query = this.query;
      var sort = formattedOrderClause(this.sort);
      var doc = this.doc;
      var options = this.options; // Create findAndModify command object

      var queryObject = {
        findAndModify: coll.collectionName,
        query: query
      };

      if (sort) {
        queryObject.sort = sort;
      }

      queryObject["new"] = options["new"] ? true : false;
      queryObject.remove = options.remove ? true : false;
      queryObject.upsert = options.upsert ? true : false;
      var projection = options.projection || options.fields;

      if (projection) {
        queryObject.fields = projection;
      }

      if (options.arrayFilters) {
        queryObject.arrayFilters = options.arrayFilters;
      }

      if (doc && !options.remove) {
        queryObject.update = doc;
      }

      if (options.maxTimeMS) queryObject.maxTimeMS = options.maxTimeMS; // Either use override on the function, or go back to default on either the collection
      // level or db

      options.serializeFunctions = options.serializeFunctions || coll.s.serializeFunctions; // No check on the documents

      options.checkKeys = false; // Final options for retryable writes and write concern

      options = applyRetryableWrites(options, coll.s.db);
      options = applyWriteConcern(options, {
        db: coll.s.db,
        collection: coll
      }, options); // Decorate the findAndModify command with the write Concern

      if (options.writeConcern) {
        queryObject.writeConcern = options.writeConcern;
      } // Have we specified bypassDocumentValidation


      if (options.bypassDocumentValidation === true) {
        queryObject.bypassDocumentValidation = options.bypassDocumentValidation;
      }

      options.readPreference = ReadPreference.primary; // Have we specified collation

      try {
        decorateWithCollation(queryObject, coll, options);
      } catch (err) {
        return callback(err, null);
      } // Execute the command


      executeCommand(coll.s.db, queryObject, options, function (err, result) {
        if (err) return handleCallback(callback, err, null);
        return handleCallback(callback, null, result);
      });
    }
  }]);

  return FindAndModifyOperation;
}(OperationBase);

module.exports = FindAndModifyOperation;