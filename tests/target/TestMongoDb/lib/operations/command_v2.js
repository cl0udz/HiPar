'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

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

var OperationBase = require('./operation').OperationBase;

var resolveReadPreference = require('../utils').resolveReadPreference;

var ReadConcern = require('../read_concern');

var WriteConcern = require('../write_concern');

var maxWireVersion = require('../core/utils').maxWireVersion;

var commandSupportsReadConcern = require('../core/sessions').commandSupportsReadConcern;

var MongoError = require('../error').MongoError;

var SUPPORTS_WRITE_CONCERN_AND_COLLATION = 5;

var CommandOperationV2 =
/*#__PURE__*/
function (_OperationBase) {
  _inherits(CommandOperationV2, _OperationBase);

  function CommandOperationV2(parent, options, operationOptions) {
    var _this;

    _classCallCheck(this, CommandOperationV2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommandOperationV2).call(this, options));
    _this.ns = parent.s.namespace.withCollection('$cmd');
    _this.readPreference = resolveReadPreference(parent, _this.options);
    _this.readConcern = resolveReadConcern(parent, _this.options);
    _this.writeConcern = resolveWriteConcern(parent, _this.options);
    _this.explain = false;

    if (operationOptions && typeof operationOptions.fullResponse === 'boolean') {
      _this.fullResponse = true;
    } // TODO: A lot of our code depends on having the read preference in the options. This should
    //       go away, but also requires massive test rewrites.


    _this.options.readPreference = _this.readPreference; // TODO(NODE-2056): make logger another "inheritable" property

    if (parent.s.logger) {
      _this.logger = parent.s.logger;
    } else if (parent.s.db && parent.s.db.logger) {
      _this.logger = parent.s.db.logger;
    }

    return _this;
  }

  _createClass(CommandOperationV2, [{
    key: "executeCommand",
    value: function executeCommand(server, cmd, callback) {
      var _this2 = this;

      // TODO: consider making this a non-enumerable property
      this.server = server;
      var options = this.options;
      var serverWireVersion = maxWireVersion(server);
      var inTransaction = this.session && this.session.inTransaction();

      if (this.readConcern && commandSupportsReadConcern(cmd) && !inTransaction) {
        Object.assign(cmd, {
          readConcern: this.readConcern
        });
      }

      if (options.collation && serverWireVersion < SUPPORTS_WRITE_CONCERN_AND_COLLATION) {
        callback(new MongoError("Server ".concat(server.name, ", which reports wire version ").concat(serverWireVersion, ", does not support collation")));
        return;
      }

      if (serverWireVersion >= SUPPORTS_WRITE_CONCERN_AND_COLLATION) {
        if (this.writeConcern && this.hasAspect(Aspect.WRITE_OPERATION)) {
          Object.assign(cmd, {
            writeConcern: this.writeConcern
          });
        }

        if (options.collation && _typeof(options.collation) === 'object') {
          Object.assign(cmd, {
            collation: options.collation
          });
        }
      }

      if (typeof options.maxTimeMS === 'number') {
        cmd.maxTimeMS = options.maxTimeMS;
      }

      if (typeof options.comment === 'string') {
        cmd.comment = options.comment;
      }

      if (this.logger && this.logger.isDebug()) {
        this.logger.debug("executing command ".concat(JSON.stringify(cmd), " against ").concat(this.ns));
      }

      server.command(this.ns.toString(), cmd, this.options, function (err, result) {
        if (err) {
          callback(err, null);
          return;
        }

        if (_this2.fullResponse) {
          callback(null, result);
          return;
        }

        callback(null, result.result);
      });
    }
  }]);

  return CommandOperationV2;
}(OperationBase);

function resolveWriteConcern(parent, options) {
  return WriteConcern.fromOptions(options) || parent.writeConcern;
}

function resolveReadConcern(parent, options) {
  return ReadConcern.fromOptions(options) || parent.readConcern;
}

module.exports = CommandOperationV2;