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

var defineAspects = require('./operation').defineAspects;

var OperationBase = require('./operation').OperationBase;

var NativeTopology = require('../topologies/native_topology');

var CloseOperation =
/*#__PURE__*/
function (_OperationBase) {
  _inherits(CloseOperation, _OperationBase);

  function CloseOperation(client, force) {
    var _this;

    _classCallCheck(this, CloseOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CloseOperation).call(this));
    _this.client = client;
    _this.force = force;
    return _this;
  }

  _createClass(CloseOperation, [{
    key: "execute",
    value: function execute(callback) {
      var client = this.client;
      var force = this.force;

      var completeClose = function completeClose(err) {
        client.emit('close', client);

        if (!(client.topology instanceof NativeTopology)) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = client.s.dbCache[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              item[1].emit('close', client);
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
        }

        client.removeAllListeners('close');
        callback(err, null);
      };

      if (client.topology == null) {
        completeClose();
        return;
      }

      client.topology.close(force, function (err) {
        var autoEncrypter = client.topology.s.options.autoEncrypter;

        if (!autoEncrypter) {
          completeClose(err);
          return;
        }

        autoEncrypter.teardown(force, function (err2) {
          return completeClose(err || err2);
        });
      });
    }
  }]);

  return CloseOperation;
}(OperationBase);

defineAspects(CloseOperation, [Aspect.SKIP_SESSION]);
module.exports = CloseOperation;