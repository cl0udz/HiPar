'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.set");

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

var MongoError = require('../core').MongoError;

var parseIndexOptions = require('../utils').parseIndexOptions;

var keysToOmit = new Set(['name', 'key', 'writeConcern', 'w', 'wtimeout', 'j', 'fsync', 'readPreference', 'session']);

var CreateIndexOperation =
/*#__PURE__*/
function (_CommandOperation) {
  _inherits(CreateIndexOperation, _CommandOperation);

  function CreateIndexOperation(db, name, fieldOrSpec, options) {
    var _this;

    _classCallCheck(this, CreateIndexOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateIndexOperation).call(this, db, options)); // Build the index

    var indexParameters = parseIndexOptions(fieldOrSpec); // Generate the index name

    var indexName = typeof options.name === 'string' ? options.name : indexParameters.name; // Set up the index

    var indexesObject = {
      name: indexName,
      key: indexParameters.fieldHash
    };
    _this.name = name;
    _this.fieldOrSpec = fieldOrSpec;
    _this.indexes = indexesObject;
    return _this;
  }

  _createClass(CreateIndexOperation, [{
    key: "_buildCommand",
    value: function _buildCommand() {
      var options = this.options;
      var name = this.name;
      var indexes = this.indexes; // merge all the options

      for (var optionName in options) {
        if (!keysToOmit.has(optionName)) {
          indexes[optionName] = options[optionName];
        }
      } // Create command, apply write concern to command


      var cmd = {
        createIndexes: name,
        indexes: [indexes]
      };
      return cmd;
    }
  }, {
    key: "execute",
    value: function execute(callback) {
      var db = this.db;
      var options = this.options;
      var indexes = this.indexes; // Get capabilities

      var capabilities = db.s.topology.capabilities(); // Did the user pass in a collation, check if our write server supports it

      if (options.collation && capabilities && !capabilities.commandsTakeCollation) {
        // Create a new error
        var error = new MongoError('server/primary/mongos does not support collation');
        error.code = 67; // Return the error

        return callback(error);
      } // Ensure we have a callback


      if (options.writeConcern && typeof callback !== 'function') {
        throw MongoError.create({
          message: 'Cannot use a writeConcern without a provided callback',
          driver: true
        });
      } // Attempt to run using createIndexes command


      _get(_getPrototypeOf(CreateIndexOperation.prototype), "execute", this).call(this, function (err, result) {
        if (err == null) return handleCallback(callback, err, indexes.name);
        return handleCallback(callback, err, result);
      });
    }
  }]);

  return CreateIndexOperation;
}(CommandOperation);

defineAspects(CreateIndexOperation, Aspect.WRITE_OPERATION);
module.exports = CreateIndexOperation;