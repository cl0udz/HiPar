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

var CommandOperation = require('./command');

var defineAspects = require('./operation').defineAspects;

var handleCallback = require('../utils').handleCallback;

var WriteConcern = require('../write_concern');

var RemoveUserOperation =
/*#__PURE__*/
function (_CommandOperation) {
  _inherits(RemoveUserOperation, _CommandOperation);

  function RemoveUserOperation(db, username, options) {
    var _this;

    _classCallCheck(this, RemoveUserOperation);

    var commandOptions = {};
    var writeConcern = WriteConcern.fromOptions(options);

    if (writeConcern != null) {
      commandOptions.writeConcern = writeConcern;
    }

    if (options.dbName) {
      commandOptions.dbName = options.dbName;
    } // Add maxTimeMS to options if set


    if (typeof options.maxTimeMS === 'number') {
      commandOptions.maxTimeMS = options.maxTimeMS;
    }

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RemoveUserOperation).call(this, db, commandOptions));
    _this.username = username;
    return _this;
  }

  _createClass(RemoveUserOperation, [{
    key: "_buildCommand",
    value: function _buildCommand() {
      var username = this.username; // Build the command to execute

      var command = {
        dropUser: username
      };
      return command;
    }
  }, {
    key: "execute",
    value: function execute(callback) {
      // Attempt to execute command
      _get(_getPrototypeOf(RemoveUserOperation.prototype), "execute", this).call(this, function (err, result) {
        if (err) return handleCallback(callback, err, null);
        handleCallback(callback, err, result.ok ? true : false);
      });
    }
  }]);

  return RemoveUserOperation;
}(CommandOperation);

defineAspects(RemoveUserOperation, [Aspect.WRITE_OPERATION, Aspect.SKIP_SESSIONS]);
module.exports = RemoveUserOperation;