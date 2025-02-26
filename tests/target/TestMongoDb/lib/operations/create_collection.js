'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

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

var Aspect = require('./operation').Aspect;

var defineAspects = require('./operation').defineAspects;

var CommandOperation = require('./command');

var applyWriteConcern = require('../utils').applyWriteConcern;

var handleCallback = require('../utils').handleCallback;

var loadCollection = require('../dynamic_loaders').loadCollection;

var MongoError = require('../core').MongoError;

var ReadPreference = require('../core').ReadPreference; // Filter out any write concern options


var illegalCommandFields = ['w', 'wtimeout', 'j', 'fsync', 'autoIndexId', 'strict', 'serializeFunctions', 'pkFactory', 'raw', 'readPreference', 'session', 'readConcern', 'writeConcern'];

var CreateCollectionOperation =
/*#__PURE__*/
function (_CommandOperation) {
  _inherits(CreateCollectionOperation, _CommandOperation);

  function CreateCollectionOperation(db, name, options) {
    var _this;

    _classCallCheck(this, CreateCollectionOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateCollectionOperation).call(this, db, options));
    _this.name = name;
    return _this;
  }

  _createClass(CreateCollectionOperation, [{
    key: "_buildCommand",
    value: function _buildCommand() {
      var name = this.name;
      var options = this.options; // Create collection command

      var cmd = {
        create: name
      }; // Add all optional parameters

      for (var n in options) {
        if (options[n] != null && typeof options[n] !== 'function' && illegalCommandFields.indexOf(n) === -1) {
          cmd[n] = options[n];
        }
      }

      return cmd;
    }
  }, {
    key: "execute",
    value: function execute(callback) {
      var _this2 = this;

      var db = this.db;
      var name = this.name;
      var options = this.options;
      var Collection = loadCollection(); // Did the user destroy the topology

      if (db.serverConfig && db.serverConfig.isDestroyed()) {
        return callback(new MongoError('topology was destroyed'));
      }

      var listCollectionOptions = Object.assign({}, options, {
        nameOnly: true
      });
      listCollectionOptions = applyWriteConcern(listCollectionOptions, {
        db: db
      }, listCollectionOptions); // Check if we have the name

      db.listCollections({
        name: name
      }, listCollectionOptions).setReadPreference(ReadPreference.PRIMARY).toArray(function (err, collections) {
        if (err != null) return handleCallback(callback, err, null);

        if (collections.length > 0 && listCollectionOptions.strict) {
          return handleCallback(callback, MongoError.create({
            message: "Collection ".concat(name, " already exists. Currently in strict mode."),
            driver: true
          }), null);
        } else if (collections.length > 0) {
          try {
            return handleCallback(callback, null, new Collection(db, db.s.topology, db.databaseName, name, db.s.pkFactory, options));
          } catch (err) {
            return handleCallback(callback, err);
          }
        } // Execute command


        _get(_getPrototypeOf(CreateCollectionOperation.prototype), "execute", _this2).call(_this2, function (err) {
          if (err) return handleCallback(callback, err);

          try {
            return handleCallback(callback, null, new Collection(db, db.s.topology, db.databaseName, name, db.s.pkFactory, options));
          } catch (err) {
            return handleCallback(callback, err);
          }
        });
      });
    }
  }]);

  return CreateCollectionOperation;
}(CommandOperation);

defineAspects(CreateCollectionOperation, Aspect.WRITE_OPERATION);
module.exports = CreateCollectionOperation;