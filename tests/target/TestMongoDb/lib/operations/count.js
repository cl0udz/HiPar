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

var Aspect = require('./operation').Aspect;

var buildCountCommand = require('./common_functions').buildCountCommand;

var defineAspects = require('./operation').defineAspects;

var OperationBase = require('./operation').OperationBase;

var CountOperation =
/*#__PURE__*/
function (_OperationBase) {
  _inherits(CountOperation, _OperationBase);

  function CountOperation(cursor, applySkipLimit, options) {
    var _this;

    _classCallCheck(this, CountOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CountOperation).call(this, options));
    _this.cursor = cursor;
    _this.applySkipLimit = applySkipLimit;
    return _this;
  }

  _createClass(CountOperation, [{
    key: "execute",
    value: function execute(callback) {
      var cursor = this.cursor;
      var applySkipLimit = this.applySkipLimit;
      var options = this.options;

      if (applySkipLimit) {
        if (typeof cursor.cursorSkip() === 'number') options.skip = cursor.cursorSkip();
        if (typeof cursor.cursorLimit() === 'number') options.limit = cursor.cursorLimit();
      } // Ensure we have the right read preference inheritance


      if (options.readPreference) {
        cursor.setReadPreference(options.readPreference);
      }

      if (typeof options.maxTimeMS !== 'number' && cursor.cmd && typeof cursor.cmd.maxTimeMS === 'number') {
        options.maxTimeMS = cursor.cmd.maxTimeMS;
      }

      var finalOptions = {};
      finalOptions.skip = options.skip;
      finalOptions.limit = options.limit;
      finalOptions.hint = options.hint;
      finalOptions.maxTimeMS = options.maxTimeMS; // Command

      finalOptions.collectionName = cursor.namespace.collection;
      var command;

      try {
        command = buildCountCommand(cursor, cursor.cmd.query, finalOptions);
      } catch (err) {
        return callback(err);
      } // Set cursor server to the same as the topology


      cursor.server = cursor.topology.s.coreTopology; // Execute the command

      cursor.topology.command(cursor.namespace.withCollection('$cmd'), command, cursor.options, function (err, result) {
        callback(err, result ? result.result.n : null);
      });
    }
  }]);

  return CountOperation;
}(OperationBase);

defineAspects(CountOperation, Aspect.SKIP_SESSION);
module.exports = CountOperation;