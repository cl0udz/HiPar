'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.regexp.to-string");

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

var Topology = require('../core').Topology;

var ServerCapabilities = require('./topology_base').ServerCapabilities;

var Cursor = require('../cursor');

var translateOptions = require('../utils').translateOptions;

var NativeTopology =
/*#__PURE__*/
function (_Topology) {
  _inherits(NativeTopology, _Topology);

  function NativeTopology(servers, options) {
    var _this;

    _classCallCheck(this, NativeTopology);

    options = options || {};
    var clonedOptions = Object.assign({}, {
      cursorFactory: Cursor,
      reconnect: false,
      emitError: typeof options.emitError === 'boolean' ? options.emitError : true,
      size: typeof options.poolSize === 'number' ? options.poolSize : 5,
      monitorCommands: typeof options.monitorCommands === 'boolean' ? options.monitorCommands : false
    }); // Translate any SSL options and other connectivity options

    clonedOptions = translateOptions(clonedOptions, options); // Socket options

    var socketOptions = options.socketOptions && Object.keys(options.socketOptions).length > 0 ? options.socketOptions : options; // Translate all the options to the core types

    clonedOptions = translateOptions(clonedOptions, socketOptions);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(NativeTopology).call(this, servers, clonedOptions)); // Do we have an application specific string

    if (options.appname) {
      _this.s.clientInfo.application = {
        name: options.appname
      };
    }

    return _this;
  }

  _createClass(NativeTopology, [{
    key: "capabilities",
    value: function capabilities() {
      if (this.s.sCapabilities) return this.s.sCapabilities;
      if (this.lastIsMaster() == null) return null;
      this.s.sCapabilities = new ServerCapabilities(this.lastIsMaster());
      return this.s.sCapabilities;
    } // Command

  }, {
    key: "command",
    value: function command(ns, cmd, options, callback) {
      _get(_getPrototypeOf(NativeTopology.prototype), "command", this).call(this, ns.toString(), cmd, options, callback);
    } // Insert

  }, {
    key: "insert",
    value: function insert(ns, ops, options, callback) {
      _get(_getPrototypeOf(NativeTopology.prototype), "insert", this).call(this, ns.toString(), ops, options, callback);
    } // Update

  }, {
    key: "update",
    value: function update(ns, ops, options, callback) {
      _get(_getPrototypeOf(NativeTopology.prototype), "update", this).call(this, ns.toString(), ops, options, callback);
    } // Remove

  }, {
    key: "remove",
    value: function remove(ns, ops, options, callback) {
      _get(_getPrototypeOf(NativeTopology.prototype), "remove", this).call(this, ns.toString(), ops, options, callback);
    }
  }]);

  return NativeTopology;
}(Topology);

module.exports = NativeTopology;