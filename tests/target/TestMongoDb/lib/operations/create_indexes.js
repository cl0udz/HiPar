'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.function.name");

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

var defineAspects = require('./operation').defineAspects;

var OperationBase = require('./operation').OperationBase;

var executeCommand = require('./db_ops').executeCommand;

var MongoError = require('../core').MongoError;

var ReadPreference = require('../core').ReadPreference;

var CreateIndexesOperation =
/*#__PURE__*/
function (_OperationBase) {
  _inherits(CreateIndexesOperation, _OperationBase);

  function CreateIndexesOperation(collection, indexSpecs, options) {
    var _this;

    _classCallCheck(this, CreateIndexesOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateIndexesOperation).call(this, options));
    _this.collection = collection;
    _this.indexSpecs = indexSpecs;
    return _this;
  }

  _createClass(CreateIndexesOperation, [{
    key: "execute",
    value: function execute(callback) {
      var coll = this.collection;
      var indexSpecs = this.indexSpecs;
      var options = this.options;
      var capabilities = coll.s.topology.capabilities(); // Ensure we generate the correct name if the parameter is not set

      for (var i = 0; i < indexSpecs.length; i++) {
        if (indexSpecs[i].name == null) {
          var keys = []; // Did the user pass in a collation, check if our write server supports it

          if (indexSpecs[i].collation && capabilities && !capabilities.commandsTakeCollation) {
            return callback(new MongoError('server/primary/mongos does not support collation'));
          }

          for (var name in indexSpecs[i].key) {
            keys.push("".concat(name, "_").concat(indexSpecs[i].key[name]));
          } // Set the name


          indexSpecs[i].name = keys.join('_');
        }
      }

      options = Object.assign({}, options, {
        readPreference: ReadPreference.PRIMARY
      }); // Execute the index

      executeCommand(coll.s.db, {
        createIndexes: coll.collectionName,
        indexes: indexSpecs
      }, options, callback);
    }
  }]);

  return CreateIndexesOperation;
}(OperationBase);

defineAspects(CreateIndexesOperation, Aspect.WRITE_OPERATION);
module.exports = CreateIndexesOperation;