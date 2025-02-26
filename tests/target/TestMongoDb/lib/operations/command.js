'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

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

var applyWriteConcern = require('../utils').applyWriteConcern;

var debugOptions = require('../utils').debugOptions;

var handleCallback = require('../utils').handleCallback;

var MongoError = require('../core').MongoError;

var ReadPreference = require('../core').ReadPreference;

var resolveReadPreference = require('../utils').resolveReadPreference;

var MongoDBNamespace = require('../utils').MongoDBNamespace;

var debugFields = ['authSource', 'w', 'wtimeout', 'j', 'native_parser', 'forceServerObjectId', 'serializeFunctions', 'raw', 'promoteLongs', 'promoteValues', 'promoteBuffers', 'bufferMaxEntries', 'numberOfRetries', 'retryMiliSeconds', 'readPreference', 'pkFactory', 'parentDb', 'promiseLibrary', 'noListener'];

var CommandOperation =
/*#__PURE__*/
function (_OperationBase) {
  _inherits(CommandOperation, _OperationBase);

  function CommandOperation(db, options, collection, command) {
    var _this;

    _classCallCheck(this, CommandOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommandOperation).call(this, options));

    if (!_this.hasAspect(Aspect.WRITE_OPERATION)) {
      if (collection != null) {
        _this.options.readPreference = resolveReadPreference(collection, options);
      } else {
        _this.options.readPreference = resolveReadPreference(db, options);
      }
    } else {
      if (collection != null) {
        applyWriteConcern(_this.options, {
          db: db,
          coll: collection
        }, _this.options);
      } else {
        applyWriteConcern(_this.options, {
          db: db
        }, _this.options);
      }

      _this.options.readPreference = ReadPreference.primary;
    }

    _this.db = db;

    if (command != null) {
      _this.command = command;
    }

    if (collection != null) {
      _this.collection = collection;
    }

    return _this;
  }

  _createClass(CommandOperation, [{
    key: "_buildCommand",
    value: function _buildCommand() {
      if (this.command != null) {
        return this.command;
      }
    }
  }, {
    key: "execute",
    value: function execute(callback) {
      var db = this.db;
      var options = Object.assign({}, this.options); // Did the user destroy the topology

      if (db.serverConfig && db.serverConfig.isDestroyed()) {
        return callback(new MongoError('topology was destroyed'));
      }

      var command;

      try {
        command = this._buildCommand();
      } catch (e) {
        return callback(e);
      } // Get the db name we are executing against


      var dbName = options.dbName || options.authdb || db.databaseName; // Convert the readPreference if its not a write

      if (this.hasAspect(Aspect.WRITE_OPERATION)) {
        if (options.writeConcern && (!options.session || !options.session.inTransaction())) {
          command.writeConcern = options.writeConcern;
        }
      } // Debug information


      if (db.s.logger.isDebug()) {
        db.s.logger.debug("executing command ".concat(JSON.stringify(command), " against ").concat(dbName, ".$cmd with options [").concat(JSON.stringify(debugOptions(debugFields, options)), "]"));
      }

      var namespace = this.namespace != null ? this.namespace : new MongoDBNamespace(dbName, '$cmd'); // Execute command

      db.s.topology.command(namespace, command, options, function (err, result) {
        if (err) return handleCallback(callback, err);
        if (options.full) return handleCallback(callback, null, result);
        handleCallback(callback, null, result.result);
      });
    }
  }]);

  return CommandOperation;
}(OperationBase);

module.exports = CommandOperation;