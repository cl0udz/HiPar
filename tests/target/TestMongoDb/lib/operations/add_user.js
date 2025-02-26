'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.is-array");

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

var crypto = require('crypto');

var handleCallback = require('../utils').handleCallback;

var toError = require('../utils').toError;

var AddUserOperation =
/*#__PURE__*/
function (_CommandOperation) {
  _inherits(AddUserOperation, _CommandOperation);

  function AddUserOperation(db, username, password, options) {
    var _this;

    _classCallCheck(this, AddUserOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddUserOperation).call(this, db, options));
    _this.username = username;
    _this.password = password;
    return _this;
  }

  _createClass(AddUserOperation, [{
    key: "_buildCommand",
    value: function _buildCommand() {
      var db = this.db;
      var username = this.username;
      var password = this.password;
      var options = this.options; // Get additional values

      var roles = Array.isArray(options.roles) ? options.roles : []; // If not roles defined print deprecated message
      // TODO: handle deprecation properly

      if (roles.length === 0) {
        console.log('Creating a user without roles is deprecated in MongoDB >= 2.6');
      } // Check the db name and add roles if needed


      if ((db.databaseName.toLowerCase() === 'admin' || options.dbName === 'admin') && !Array.isArray(options.roles)) {
        roles = ['root'];
      } else if (!Array.isArray(options.roles)) {
        roles = ['dbOwner'];
      }

      var digestPassword = db.s.topology.lastIsMaster().maxWireVersion >= 7;
      var userPassword = password;

      if (!digestPassword) {
        // Use node md5 generator
        var md5 = crypto.createHash('md5'); // Generate keys used for authentication

        md5.update(username + ':mongo:' + password);
        userPassword = md5.digest('hex');
      } // Build the command to execute


      var command = {
        createUser: username,
        customData: options.customData || {},
        roles: roles,
        digestPassword: digestPassword
      }; // No password

      if (typeof password === 'string') {
        command.pwd = userPassword;
      }

      return command;
    }
  }, {
    key: "execute",
    value: function execute(callback) {
      var options = this.options; // Error out if digestPassword set

      if (options.digestPassword != null) {
        return callback(toError("The digestPassword option is not supported via add_user. Please use db.command('createUser', ...) instead for this option."));
      } // Attempt to execute auth command


      _get(_getPrototypeOf(AddUserOperation.prototype), "execute", this).call(this, function (err, r) {
        if (!err) {
          return handleCallback(callback, err, r);
        }

        return handleCallback(callback, err, null);
      });
    }
  }]);

  return AddUserOperation;
}(CommandOperation);

defineAspects(AddUserOperation, Aspect.WRITE_OPERATION);
module.exports = AddUserOperation;