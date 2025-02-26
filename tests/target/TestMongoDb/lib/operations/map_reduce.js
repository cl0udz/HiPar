'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

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

var applyWriteConcern = require('../utils').applyWriteConcern;

var Code = require('../core').BSON.Code;

var decorateWithCollation = require('../utils').decorateWithCollation;

var decorateWithReadConcern = require('../utils').decorateWithReadConcern;

var executeCommand = require('./db_ops').executeCommand;

var handleCallback = require('../utils').handleCallback;

var isObject = require('../utils').isObject;

var loadDb = require('../dynamic_loaders').loadDb;

var OperationBase = require('./operation').OperationBase;

var resolveReadPreference = require('../utils').resolveReadPreference;

var toError = require('../utils').toError;

var exclusionList = ['readPreference', 'session', 'bypassDocumentValidation', 'w', 'wtimeout', 'j', 'writeConcern'];
/**
 * Run Map Reduce across a collection. Be aware that the inline option for out will return an array of results not a collection.
 *
 * @class
 * @property {Collection} a Collection instance.
 * @property {(function|string)} map The mapping function.
 * @property {(function|string)} reduce The reduce function.
 * @property {object} [options] Optional settings. See Collection.prototype.mapReduce for a list of options.
 */

var MapReduceOperation =
/*#__PURE__*/
function (_OperationBase) {
  _inherits(MapReduceOperation, _OperationBase);

  /**
   * Constructs a MapReduce operation.
   *
   * @param {Collection} a Collection instance.
   * @param {(function|string)} map The mapping function.
   * @param {(function|string)} reduce The reduce function.
   * @param {object} [options] Optional settings. See Collection.prototype.mapReduce for a list of options.
   */
  function MapReduceOperation(collection, map, reduce, options) {
    var _this;

    _classCallCheck(this, MapReduceOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MapReduceOperation).call(this, options));
    _this.collection = collection;
    _this.map = map;
    _this.reduce = reduce;
    return _this;
  }
  /**
   * Execute the operation.
   *
   * @param {Collection~resultCallback} [callback] The command result callback
   */


  _createClass(MapReduceOperation, [{
    key: "execute",
    value: function execute(callback) {
      var coll = this.collection;
      var map = this.map;
      var reduce = this.reduce;
      var options = this.options;
      var mapCommandHash = {
        mapreduce: coll.collectionName,
        map: map,
        reduce: reduce
      }; // Add any other options passed in

      for (var n in options) {
        if ('scope' === n) {
          mapCommandHash[n] = processScope(options[n]);
        } else {
          // Only include if not in exclusion list
          if (exclusionList.indexOf(n) === -1) {
            mapCommandHash[n] = options[n];
          }
        }
      }

      options = Object.assign({}, options); // Ensure we have the right read preference inheritance

      options.readPreference = resolveReadPreference(coll, options); // If we have a read preference and inline is not set as output fail hard

      if (options.readPreference !== false && options.readPreference !== 'primary' && options['out'] && options['out'].inline !== 1 && options['out'] !== 'inline') {
        // Force readPreference to primary
        options.readPreference = 'primary'; // Decorate command with writeConcern if supported

        applyWriteConcern(mapCommandHash, {
          db: coll.s.db,
          collection: coll
        }, options);
      } else {
        decorateWithReadConcern(mapCommandHash, coll, options);
      } // Is bypassDocumentValidation specified


      if (options.bypassDocumentValidation === true) {
        mapCommandHash.bypassDocumentValidation = options.bypassDocumentValidation;
      } // Have we specified collation


      try {
        decorateWithCollation(mapCommandHash, coll, options);
      } catch (err) {
        return callback(err, null);
      } // Execute command


      executeCommand(coll.s.db, mapCommandHash, options, function (err, result) {
        if (err) return handleCallback(callback, err); // Check if we have an error

        if (1 !== result.ok || result.err || result.errmsg) {
          return handleCallback(callback, toError(result));
        } // Create statistics value


        var stats = {};
        if (result.timeMillis) stats['processtime'] = result.timeMillis;
        if (result.counts) stats['counts'] = result.counts;
        if (result.timing) stats['timing'] = result.timing; // invoked with inline?

        if (result.results) {
          // If we wish for no verbosity
          if (options['verbose'] == null || !options['verbose']) {
            return handleCallback(callback, null, result.results);
          }

          return handleCallback(callback, null, {
            results: result.results,
            stats: stats
          });
        } // The returned collection


        var collection = null; // If we have an object it's a different db

        if (result.result != null && _typeof(result.result) === 'object') {
          var doc = result.result; // Return a collection from another db

          var Db = loadDb();
          collection = new Db(doc.db, coll.s.db.s.topology, coll.s.db.s.options).collection(doc.collection);
        } else {
          // Create a collection object that wraps the result collection
          collection = coll.s.db.collection(result.result);
        } // If we wish for no verbosity


        if (options['verbose'] == null || !options['verbose']) {
          return handleCallback(callback, err, collection);
        } // Return stats as third set of values


        handleCallback(callback, err, {
          collection: collection,
          stats: stats
        });
      });
    }
  }]);

  return MapReduceOperation;
}(OperationBase);
/**
 * Functions that are passed as scope args must
 * be converted to Code instances.
 * @ignore
 */


function processScope(scope) {
  if (!isObject(scope) || scope._bsontype === 'ObjectID') {
    return scope;
  }

  var keys = Object.keys(scope);
  var key;
  var new_scope = {};

  for (var i = keys.length - 1; i >= 0; i--) {
    key = keys[i];

    if ('function' === typeof scope[key]) {
      new_scope[key] = new Code(String(scope[key]));
    } else {
      new_scope[key] = processScope(scope[key]);
    }
  }

  return new_scope;
}

module.exports = MapReduceOperation;