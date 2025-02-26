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

var EventEmitter = require('events').EventEmitter;

var Instrumentation =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Instrumentation, _EventEmitter);

  function Instrumentation() {
    _classCallCheck(this, Instrumentation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Instrumentation).call(this));
  }

  _createClass(Instrumentation, [{
    key: "instrument",
    value: function instrument(MongoClient, callback) {
      // store a reference to the original functions
      this.$MongoClient = MongoClient;
      var $prototypeConnect = this.$prototypeConnect = MongoClient.prototype.connect;
      var instrumentation = this;

      MongoClient.prototype.connect = function (callback) {
        this.s.options.monitorCommands = true;
        this.on('commandStarted', function (event) {
          return instrumentation.emit('started', event);
        });
        this.on('commandSucceeded', function (event) {
          return instrumentation.emit('succeeded', event);
        });
        this.on('commandFailed', function (event) {
          return instrumentation.emit('failed', event);
        });
        return $prototypeConnect.call(this, callback);
      };

      if (typeof callback === 'function') callback(null, this);
    }
  }, {
    key: "uninstrument",
    value: function uninstrument() {
      this.$MongoClient.prototype.connect = this.$prototypeConnect;
    }
  }]);

  return Instrumentation;
}(EventEmitter);

module.exports = Instrumentation;