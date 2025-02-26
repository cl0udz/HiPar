'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

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

var CommandOperation = require('./command');

var ValidateCollectionOperation =
/*#__PURE__*/
function (_CommandOperation) {
  _inherits(ValidateCollectionOperation, _CommandOperation);

  function ValidateCollectionOperation(admin, collectionName, options) {
    var _this;

    _classCallCheck(this, ValidateCollectionOperation);

    // Decorate command with extra options
    var command = {
      validate: collectionName
    };
    var keys = Object.keys(options);

    for (var i = 0; i < keys.length; i++) {
      if (options.hasOwnProperty(keys[i]) && keys[i] !== 'session') {
        command[keys[i]] = options[keys[i]];
      }
    }

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ValidateCollectionOperation).call(this, admin.s.db, options, null, command));
    _this.collectionName;
    return _this;
  }

  _createClass(ValidateCollectionOperation, [{
    key: "execute",
    value: function execute(callback) {
      var collectionName = this.collectionName;

      _get(_getPrototypeOf(ValidateCollectionOperation.prototype), "execute", this).call(this, function (err, doc) {
        if (err != null) return callback(err, null);
        if (doc.ok === 0) return callback(new Error('Error with validate command'), null);
        if (doc.result != null && doc.result.constructor !== String) return callback(new Error('Error with validation data'), null);
        if (doc.result != null && doc.result.match(/exception|corrupt/) != null) return callback(new Error('Error: invalid collection ' + collectionName), null);
        if (doc.valid != null && !doc.valid) return callback(new Error('Error: invalid collection ' + collectionName), null);
        return callback(null, doc);
      });
    }
  }]);

  return ValidateCollectionOperation;
}(CommandOperation);

module.exports = ValidateCollectionOperation;