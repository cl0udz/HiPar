'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

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

var Aspect = require('./operation').Aspect;

var defineAspects = require('./operation').defineAspects;

var OperationBase = require('./operation').OperationBase;

var decorateCommand = require('../utils').decorateCommand;

var decorateWithReadConcern = require('../utils').decorateWithReadConcern;

var executeCommand = require('./db_ops').executeCommand;

var handleCallback = require('../utils').handleCallback;

var resolveReadPreference = require('../utils').resolveReadPreference;

var toError = require('../utils').toError;
/**
 * Execute a geo search using a geo haystack index on a collection.
 *
 * @class
 * @property {Collection} a Collection instance.
 * @property {number} x Point to search on the x axis, ensure the indexes are ordered in the same order.
 * @property {number} y Point to search on the y axis, ensure the indexes are ordered in the same order.
 * @property {object} [options] Optional settings. See Collection.prototype.geoHaystackSearch for a list of options.
 */


var GeoHaystackSearchOperation =
/*#__PURE__*/
function (_OperationBase) {
  _inherits(GeoHaystackSearchOperation, _OperationBase);

  /**
   * Construct a GeoHaystackSearch operation.
   *
   * @param {Collection} a Collection instance.
   * @param {number} x Point to search on the x axis, ensure the indexes are ordered in the same order.
   * @param {number} y Point to search on the y axis, ensure the indexes are ordered in the same order.
   * @param {object} [options] Optional settings. See Collection.prototype.geoHaystackSearch for a list of options.
   */
  function GeoHaystackSearchOperation(collection, x, y, options) {
    var _this;

    _classCallCheck(this, GeoHaystackSearchOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GeoHaystackSearchOperation).call(this, options));
    _this.collection = collection;
    _this.x = x;
    _this.y = y;
    return _this;
  }
  /**
   * Execute the operation.
   *
   * @param {Collection~resultCallback} [callback] The command result callback
   */


  _createClass(GeoHaystackSearchOperation, [{
    key: "execute",
    value: function execute(callback) {
      var coll = this.collection;
      var x = this.x;
      var y = this.y;
      var options = this.options; // Build command object

      var commandObject = {
        geoSearch: coll.collectionName,
        near: [x, y]
      }; // Remove read preference from hash if it exists

      commandObject = decorateCommand(commandObject, options, ['readPreference', 'session']);
      options = Object.assign({}, options); // Ensure we have the right read preference inheritance

      options.readPreference = resolveReadPreference(coll, options); // Do we have a readConcern specified

      decorateWithReadConcern(commandObject, coll, options); // Execute the command

      executeCommand(coll.s.db, commandObject, options, function (err, res) {
        if (err) return handleCallback(callback, err);
        if (res.err || res.errmsg) handleCallback(callback, toError(res)); // should we only be returning res.results here? Not sure if the user
        // should see the other return information

        handleCallback(callback, null, res);
      });
    }
  }]);

  return GeoHaystackSearchOperation;
}(OperationBase);

defineAspects(GeoHaystackSearchOperation, Aspect.READ_OPERATION);
module.exports = GeoHaystackSearchOperation;