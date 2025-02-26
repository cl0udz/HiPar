'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.set");

require("core-js/modules/es.string.ends-with");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.timers");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger = require('../connection/logger');

var EventEmitter = require('events').EventEmitter;

var dns = require('dns');
/**
 * Determines whether a provided address matches the provided parent domain in order
 * to avoid certain attack vectors.
 *
 * @param {String} srvAddress The address to check against a domain
 * @param {String} parentDomain The domain to check the provided address against
 * @return {Boolean} Whether the provided address matches the parent domain
 */


function matchesParentDomain(srvAddress, parentDomain) {
  var regex = /^.*?\./;
  var srv = ".".concat(srvAddress.replace(regex, ''));
  var parent = ".".concat(parentDomain.replace(regex, ''));
  return srv.endsWith(parent);
}

var SrvPollingEvent =
/*#__PURE__*/
function () {
  function SrvPollingEvent(srvRecords) {
    _classCallCheck(this, SrvPollingEvent);

    this.srvRecords = srvRecords;
  }

  _createClass(SrvPollingEvent, [{
    key: "addresses",
    value: function addresses() {
      return new Set(this.srvRecords.map(function (record) {
        return "".concat(record.name, ":").concat(record.port);
      }));
    }
  }]);

  return SrvPollingEvent;
}();

var SrvPoller =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(SrvPoller, _EventEmitter);

  /**
   * @param {object} options
   * @param {string} options.srvHost
   * @param {number} [options.heartbeatFrequencyMS]
   * @param {function} [options.logger]
   * @param {string} [options.loggerLevel]
   */
  function SrvPoller(options) {
    var _this;

    _classCallCheck(this, SrvPoller);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SrvPoller).call(this));

    if (!options || !options.srvHost) {
      throw new TypeError('options for SrvPoller must exist and include srvHost');
    }

    _this.srvHost = options.srvHost;
    _this.rescanSrvIntervalMS = 60000;
    _this.heartbeatFrequencyMS = options.heartbeatFrequencyMS || 10000;
    _this.logger = Logger('srvPoller', options);
    _this.haMode = false;
    _this.generation = 0;
    _this._timeout = null;
    return _this;
  }

  _createClass(SrvPoller, [{
    key: "start",
    value: function start() {
      if (!this._timeout) {
        this.schedule();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this._timeout) {
        clearTimeout(this._timeout);
        this.generation += 1;
        this._timeout = null;
      }
    }
  }, {
    key: "schedule",
    value: function schedule() {
      var _this2 = this;

      clearTimeout(this._timeout);
      this._timeout = setTimeout(function () {
        return _this2._poll();
      }, this.intervalMS);
    }
  }, {
    key: "success",
    value: function success(srvRecords) {
      this.haMode = false;
      this.schedule();
      this.emit('srvRecordDiscovery', new SrvPollingEvent(srvRecords));
    }
  }, {
    key: "failure",
    value: function failure(message, obj) {
      this.logger.warn(message, obj);
      this.haMode = true;
      this.schedule();
    }
  }, {
    key: "parentDomainMismatch",
    value: function parentDomainMismatch(srvRecord) {
      this.logger.warn("parent domain mismatch on SRV record (".concat(srvRecord.name, ":").concat(srvRecord.port, ")"), srvRecord);
    }
  }, {
    key: "_poll",
    value: function _poll() {
      var _this3 = this;

      var generation = this.generation;
      dns.resolveSrv(this.srvAddress, function (err, srvRecords) {
        if (generation !== _this3.generation) {
          return;
        }

        if (err) {
          _this3.failure('DNS error', err);

          return;
        }

        var finalAddresses = [];
        srvRecords.forEach(function (record) {
          if (matchesParentDomain(record.name, _this3.srvHost)) {
            finalAddresses.push(record);
          } else {
            _this3.parentDomainMismatch(record);
          }
        });

        if (!finalAddresses.length) {
          _this3.failure('No valid addresses found at host');

          return;
        }

        _this3.success(finalAddresses);
      });
    }
  }, {
    key: "srvAddress",
    get: function get() {
      return "_mongodb._tcp.".concat(this.srvHost);
    }
  }, {
    key: "intervalMS",
    get: function get() {
      return this.haMode ? this.heartbeatFrequencyMS : this.rescanSrvIntervalMs;
    }
  }]);

  return SrvPoller;
}(EventEmitter);

module.exports.SrvPollingEvent = SrvPollingEvent;
module.exports.SrvPoller = SrvPoller;