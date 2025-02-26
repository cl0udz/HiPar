'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

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

var CommandOperationV2 = require('./command_v2');

var MongoError = require('../core').MongoError;

var maxWireVersion = require('../core/utils').maxWireVersion;

var ReadPreference = require('../core').ReadPreference;

var Aspect = require('./operation').Aspect;

var defineAspects = require('./operation').defineAspects;

var DB_AGGREGATE_COLLECTION = 1;
var MIN_WIRE_VERSION_$OUT_READ_CONCERN_SUPPORT = 8;

var AggregateOperation =
/*#__PURE__*/
function (_CommandOperationV) {
  _inherits(AggregateOperation, _CommandOperationV);

  function AggregateOperation(parent, pipeline, options) {
    var _this;

    _classCallCheck(this, AggregateOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AggregateOperation).call(this, parent, options, {
      fullResponse: true
    }));
    _this.target = parent.s.namespace && parent.s.namespace.collection ? parent.s.namespace.collection : DB_AGGREGATE_COLLECTION;
    _this.pipeline = pipeline; // determine if we have a write stage, override read preference if so

    _this.hasWriteStage = false;

    if (typeof options.out === 'string') {
      _this.pipeline = _this.pipeline.concat({
        $out: options.out
      });
      _this.hasWriteStage = true;
    } else if (pipeline.length > 0) {
      var finalStage = pipeline[pipeline.length - 1];

      if (finalStage.$out || finalStage.$merge) {
        _this.hasWriteStage = true;
      }
    }

    if (_this.hasWriteStage) {
      _this.readPreference = ReadPreference.primary;
    }

    if (options.explain && (_this.readConcern || _this.writeConcern)) {
      throw new MongoError('"explain" cannot be used on an aggregate call with readConcern/writeConcern');
    }

    if (options.cursor != null && _typeof(options.cursor) !== 'object') {
      throw new MongoError('cursor options must be an object');
    }

    return _this;
  }

  _createClass(AggregateOperation, [{
    key: "addToPipeline",
    value: function addToPipeline(stage) {
      this.pipeline.push(stage);
    }
  }, {
    key: "execute",
    value: function execute(server, callback) {
      var options = this.options;
      var serverWireVersion = maxWireVersion(server);
      var command = {
        aggregate: this.target,
        pipeline: this.pipeline
      };

      if (this.hasWriteStage && serverWireVersion < MIN_WIRE_VERSION_$OUT_READ_CONCERN_SUPPORT) {
        this.readConcern = null;
      }

      if (serverWireVersion >= 5) {
        if (this.hasWriteStage && this.writeConcern) {
          Object.assign(command, {
            writeConcern: this.writeConcern
          });
        }
      }

      if (options.bypassDocumentValidation === true) {
        command.bypassDocumentValidation = options.bypassDocumentValidation;
      }

      if (typeof options.allowDiskUse === 'boolean') {
        command.allowDiskUse = options.allowDiskUse;
      }

      if (options.hint) {
        command.hint = options.hint;
      }

      if (options.explain) {
        options.full = false;
        command.explain = options.explain;
      }

      command.cursor = options.cursor || {};

      if (options.batchSize && !this.hasWriteStage) {
        command.cursor.batchSize = options.batchSize;
      }

      _get(_getPrototypeOf(AggregateOperation.prototype), "executeCommand", this).call(this, server, command, callback);
    }
  }, {
    key: "canRetryRead",
    get: function get() {
      return !this.hasWriteStage;
    }
  }]);

  return AggregateOperation;
}(CommandOperationV2);

defineAspects(AggregateOperation, [Aspect.READ_OPERATION, Aspect.RETRYABLE, Aspect.EXECUTE_WITH_SELECTION]);
module.exports = AggregateOperation;