'use strict';

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

var loadCursor = require('../dynamic_loaders').loadCursor;

var OperationBase = require('./operation').OperationBase;

var nextObject = require('./common_functions').nextObject;

var HasNextOperation =
/*#__PURE__*/
function (_OperationBase) {
  _inherits(HasNextOperation, _OperationBase);

  function HasNextOperation(cursor) {
    var _this;

    _classCallCheck(this, HasNextOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HasNextOperation).call(this));
    _this.cursor = cursor;
    return _this;
  }

  _createClass(HasNextOperation, [{
    key: "execute",
    value: function execute(callback) {
      var cursor = this.cursor;
      var Cursor = loadCursor();

      if (cursor.s.currentDoc) {
        return callback(null, true);
      }

      if (cursor.isNotified()) {
        return callback(null, false);
      }

      nextObject(cursor, function (err, doc) {
        if (err) return callback(err, null);
        if (cursor.s.state === Cursor.CLOSED || cursor.isDead()) return callback(null, false);
        if (!doc) return callback(null, false);
        cursor.s.currentDoc = doc;
        callback(null, true);
      });
    }
  }]);

  return HasNextOperation;
}(OperationBase);

defineAspects(HasNextOperation, Aspect.SKIP_SESSION);
module.exports = HasNextOperation;