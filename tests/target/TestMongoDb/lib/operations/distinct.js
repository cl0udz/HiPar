'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Aspect = require('./operation').Aspect;

var defineAspects = require('./operation').defineAspects;

var CommandOperationV2 = require('./command_v2');

var decorateWithCollation = require('../utils').decorateWithCollation;

var decorateWithReadConcern = require('../utils').decorateWithReadConcern;
/**
 * Return a list of distinct values for the given key across a collection.
 *
 * @class
 * @property {Collection} a Collection instance.
 * @property {string} key Field of the document to find distinct values for.
 * @property {object} query The query for filtering the set of documents to which we apply the distinct filter.
 * @property {object} [options] Optional settings. See Collection.prototype.distinct for a list of options.
 */


var DistinctOperation =
/*#__PURE__*/
function (_CommandOperationV) {
  _inherits(DistinctOperation, _CommandOperationV);

  /**
   * Construct a Distinct operation.
   *
   * @param {Collection} a Collection instance.
   * @param {string} key Field of the document to find distinct values for.
   * @param {object} query The query for filtering the set of documents to which we apply the distinct filter.
   * @param {object} [options] Optional settings. See Collection.prototype.distinct for a list of options.
   */
  function DistinctOperation(collection, key, query, options) {
    var _this;

    _classCallCheck(this, DistinctOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DistinctOperation).call(this, collection, options));
    _this.collection = collection;
    _this.key = key;
    _this.query = query;
    return _this;
  }
  /**
   * Execute the operation.
   *
   * @param {Collection~resultCallback} [callback] The command result callback
   */


  _createClass(DistinctOperation, [{
    key: "execute",
    value: function execute(server, callback) {
      var _this2 = this;

      var coll = this.collection;
      var key = this.key;
      var query = this.query;
      var options = this.options; // Distinct command

      var cmd = {
        distinct: coll.collectionName,
        key: key,
        query: query
      }; // Add maxTimeMS if defined

      if (typeof options.maxTimeMS === 'number') {
        cmd.maxTimeMS = options.maxTimeMS;
      } // Do we have a readConcern specified


      decorateWithReadConcern(cmd, coll, options); // Have we specified collation

      try {
        decorateWithCollation(cmd, coll, options);
      } catch (err) {
        return callback(err, null);
      }

      _get(_getPrototypeOf(DistinctOperation.prototype), "executeCommand", this).call(this, server, cmd, function (err, result) {
        if (err) {
          callback(err);
          return;
        }

        callback(null, _this2.options.full ? result : result.values);
      });
    }
  }]);

  return DistinctOperation;
}(CommandOperationV2);

defineAspects(DistinctOperation, [Aspect.READ_OPERATION, Aspect.RETRYABLE, Aspect.EXECUTE_WITH_SELECTION]);
module.exports = DistinctOperation;