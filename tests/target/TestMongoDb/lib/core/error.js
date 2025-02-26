'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.bind");

require("core-js/modules/es.function.name");

require("core-js/modules/es.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var mongoErrorContextSymbol = Symbol('mongoErrorContextSymbol');

var maxWireVersion = require('./utils').maxWireVersion;
/**
 * Creates a new MongoError
 *
 * @augments Error
 * @param {Error|string|object} message The error message
 * @property {string} message The error message
 * @property {string} stack The error call stack
 */


var MongoError =
/*#__PURE__*/
function (_Error) {
  _inherits(MongoError, _Error);

  function MongoError(message) {
    var _this;

    _classCallCheck(this, MongoError);

    if (message instanceof Error) {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(MongoError).call(this, message.message));
      _this.stack = message.stack;
    } else {
      if (typeof message === 'string') {
        _this = _possibleConstructorReturn(this, _getPrototypeOf(MongoError).call(this, message));
      } else {
        _this = _possibleConstructorReturn(this, _getPrototypeOf(MongoError).call(this, message.message || message.errmsg || message.$err || 'n/a'));

        for (var name in message) {
          _this[name] = message[name];
        }
      }

      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
    }

    _this.name = 'MongoError';
    _this[mongoErrorContextSymbol] = _this[mongoErrorContextSymbol] || {};
    return _possibleConstructorReturn(_this);
  }
  /**
   * Creates a new MongoError object
   *
   * @param {Error|string|object} options The options used to create the error.
   * @return {MongoError} A MongoError instance
   * @deprecated Use `new MongoError()` instead.
   */


  _createClass(MongoError, [{
    key: "hasErrorLabel",
    value: function hasErrorLabel(label) {
      return this.errorLabels && this.errorLabels.indexOf(label) !== -1;
    }
  }], [{
    key: "create",
    value: function create(options) {
      return new MongoError(options);
    }
  }]);

  return MongoError;
}(_wrapNativeSuper(Error));
/**
 * Creates a new MongoNetworkError
 *
 * @param {Error|string|object} message The error message
 * @property {string} message The error message
 * @property {string} stack The error call stack
 */


var MongoNetworkError =
/*#__PURE__*/
function (_MongoError) {
  _inherits(MongoNetworkError, _MongoError);

  function MongoNetworkError(message) {
    var _this2;

    _classCallCheck(this, MongoNetworkError);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MongoNetworkError).call(this, message));
    _this2.name = 'MongoNetworkError';
    return _this2;
  }

  return MongoNetworkError;
}(MongoError);
/**
 * An error used when attempting to parse a value (like a connection string)
 *
 * @param {Error|string|object} message The error message
 * @property {string} message The error message
 */


var MongoParseError =
/*#__PURE__*/
function (_MongoError2) {
  _inherits(MongoParseError, _MongoError2);

  function MongoParseError(message) {
    var _this3;

    _classCallCheck(this, MongoParseError);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MongoParseError).call(this, message));
    _this3.name = 'MongoParseError';
    return _this3;
  }

  return MongoParseError;
}(MongoError);
/**
 * An error signifying a timeout event
 *
 * @param {Error|string|object} message The error message
 * @param {string|object} [reason] The reason the timeout occured
 * @property {string} message The error message
 * @property {string} [reason] An optional reason context for the timeout, generally an error saved during flow of monitoring and selecting servers
 */


var MongoTimeoutError =
/*#__PURE__*/
function (_MongoError3) {
  _inherits(MongoTimeoutError, _MongoError3);

  function MongoTimeoutError(message, reason) {
    var _this4;

    _classCallCheck(this, MongoTimeoutError);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(MongoTimeoutError).call(this, message));
    _this4.name = 'MongoTimeoutError';

    if (reason != null) {
      _this4.reason = reason;
    }

    return _this4;
  }

  return MongoTimeoutError;
}(MongoError);

function makeWriteConcernResultObject(input) {
  var output = Object.assign({}, input);

  if (output.ok === 0) {
    output.ok = 1;
    delete output.errmsg;
    delete output.code;
    delete output.codeName;
  }

  return output;
}
/**
 * An error thrown when the server reports a writeConcernError
 *
 * @param {Error|string|object} message The error message
 * @param {object} result The result document (provided if ok: 1)
 * @property {string} message The error message
 * @property {object} [result] The result document (provided if ok: 1)
 */


var MongoWriteConcernError =
/*#__PURE__*/
function (_MongoError4) {
  _inherits(MongoWriteConcernError, _MongoError4);

  function MongoWriteConcernError(message, result) {
    var _this5;

    _classCallCheck(this, MongoWriteConcernError);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(MongoWriteConcernError).call(this, message));
    _this5.name = 'MongoWriteConcernError';

    if (result != null) {
      _this5.result = makeWriteConcernResultObject(result);
    }

    return _this5;
  }

  return MongoWriteConcernError;
}(MongoError); // see: https://github.com/mongodb/specifications/blob/master/source/retryable-writes/retryable-writes.rst#terms


var RETRYABLE_ERROR_CODES = new Set([6, // HostUnreachable
7, // HostNotFound
89, // NetworkTimeout
91, // ShutdownInProgress
189, // PrimarySteppedDown
9001, // SocketException
10107, // NotMaster
11600, // InterruptedAtShutdown
11602, // InterruptedDueToReplStateChange
13435, // NotMasterNoSlaveOk
13436 // NotMasterOrSecondary
]);
/**
 * Determines whether an error is something the driver should attempt to retry
 *
 * @param {MongoError|Error} error
 */

function isRetryableError(error) {
  return RETRYABLE_ERROR_CODES.has(error.code) || error instanceof MongoNetworkError || error.message.match(/not master/) || error.message.match(/node is recovering/);
}

var SDAM_RECOVERING_CODES = new Set([91, // ShutdownInProgress
189, // PrimarySteppedDown
11600, // InterruptedAtShutdown
11602, // InterruptedDueToReplStateChange
13436 // NotMasterOrSecondary
]);
var SDAM_NOTMASTER_CODES = new Set([10107, // NotMaster
13435 // NotMasterNoSlaveOk
]);
var SDAM_NODE_SHUTTING_DOWN_ERROR_CODES = new Set([11600, // InterruptedAtShutdown
91 // ShutdownInProgress
]);

function isRecoveringError(err) {
  if (err.code && SDAM_RECOVERING_CODES.has(err.code)) {
    return true;
  }

  return err.message.match(/not master or secondary/) || err.message.match(/node is recovering/);
}

function isNotMasterError(err) {
  if (err.code && SDAM_NOTMASTER_CODES.has(err.code)) {
    return true;
  }

  if (isRecoveringError(err)) {
    return false;
  }

  return err.message.match(/not master/);
}

function isNodeShuttingDownError(err) {
  return err.code && SDAM_NODE_SHUTTING_DOWN_ERROR_CODES.has(err.code);
}
/**
 * Determines whether SDAM can recover from a given error. If it cannot
 * then the pool will be cleared, and server state will completely reset
 * locally.
 *
 * @see https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst#not-master-and-node-is-recovering
 * @param {MongoError|Error} error
 * @param {Server} server
 */


function isSDAMUnrecoverableError(error, server) {
  // NOTE: null check is here for a strictly pre-CMAP world, a timeout or
  //       close event are considered unrecoverable
  if (error instanceof MongoParseError || error == null) {
    return true;
  }

  if (isRecoveringError(error) || isNotMasterError(error)) {
    if (maxWireVersion(server) >= 8 && !isNodeShuttingDownError(error)) {
      return false;
    }

    return true;
  }

  return false;
}

module.exports = {
  MongoError: MongoError,
  MongoNetworkError: MongoNetworkError,
  MongoParseError: MongoParseError,
  MongoTimeoutError: MongoTimeoutError,
  MongoWriteConcernError: MongoWriteConcernError,
  mongoErrorContextSymbol: mongoErrorContextSymbol,
  isRetryableError: isRetryableError,
  isSDAMUnrecoverableError: isSDAMUnrecoverableError
};