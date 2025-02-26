'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.max-safe-integer");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var MongoError = require('./core/error').MongoError;

var ReadPreference = require('./core/topologies/read_preference');

var WriteConcern = require('./write_concern');

var shallowClone = function shallowClone(obj) {
  var copy = {};

  for (var name in obj) {
    copy[name] = obj[name];
  }

  return copy;
}; // Figure out the read preference


var translateReadPreference = function translateReadPreference(options) {
  var r = null;

  if (options.readPreference) {
    r = options.readPreference;
  } else {
    return options;
  }

  if (typeof r === 'string') {
    options.readPreference = new ReadPreference(r);
  } else if (r && !(r instanceof ReadPreference) && _typeof(r) === 'object') {
    var mode = r.mode || r.preference;

    if (mode && typeof mode === 'string') {
      options.readPreference = new ReadPreference(mode, r.tags, {
        maxStalenessSeconds: r.maxStalenessSeconds
      });
    }
  } else if (!(r instanceof ReadPreference)) {
    throw new TypeError('Invalid read preference: ' + r);
  }

  return options;
}; // Set simple property


var getSingleProperty = function getSingleProperty(obj, name, value) {
  Object.defineProperty(obj, name, {
    enumerable: true,
    get: function get() {
      return value;
    }
  });
};

var formatSortValue = exports.formatSortValue = function (sortDirection) {
  var value = ('' + sortDirection).toLowerCase();

  switch (value) {
    case 'ascending':
    case 'asc':
    case '1':
      return 1;

    case 'descending':
    case 'desc':
    case '-1':
      return -1;

    default:
      throw new Error('Illegal sort clause, must be of the form ' + "[['field1', '(ascending|descending)'], " + "['field2', '(ascending|descending)']]");
  }
};

var formattedOrderClause = exports.formattedOrderClause = function (sortValue) {
  var orderBy = {};
  if (sortValue == null) return null;

  if (Array.isArray(sortValue)) {
    if (sortValue.length === 0) {
      return null;
    }

    for (var i = 0; i < sortValue.length; i++) {
      if (sortValue[i].constructor === String) {
        orderBy[sortValue[i]] = 1;
      } else {
        orderBy[sortValue[i][0]] = formatSortValue(sortValue[i][1]);
      }
    }
  } else if (sortValue != null && _typeof(sortValue) === 'object') {
    orderBy = sortValue;
  } else if (typeof sortValue === 'string') {
    orderBy[sortValue] = 1;
  } else {
    throw new Error('Illegal sort clause, must be of the form ' + "[['field1', '(ascending|descending)'], ['field2', '(ascending|descending)']]");
  }

  return orderBy;
};

var checkCollectionName = function checkCollectionName(collectionName) {
  if ('string' !== typeof collectionName) {
    throw new MongoError('collection name must be a String');
  }

  if (!collectionName || collectionName.indexOf('..') !== -1) {
    throw new MongoError('collection names cannot be empty');
  }

  if (collectionName.indexOf('$') !== -1 && collectionName.match(/((^\$cmd)|(oplog\.\$main))/) == null) {
    throw new MongoError("collection names must not contain '$'");
  }

  if (collectionName.match(/^\.|\.$/) != null) {
    throw new MongoError("collection names must not start or end with '.'");
  } // Validate that we are not passing 0x00 in the collection name


  if (collectionName.indexOf('\x00') !== -1) {
    throw new MongoError('collection names cannot contain a null character');
  }
};

var handleCallback = function handleCallback(callback, err, value1, value2) {
  try {
    if (callback == null) return;

    if (callback) {
      return value2 ? callback(err, value1, value2) : callback(err, value1);
    }
  } catch (err) {
    process.nextTick(function () {
      throw err;
    });
    return false;
  }

  return true;
};
/**
 * Wrap a Mongo error document in an Error instance
 * @ignore
 * @api private
 */


var toError = function toError(error) {
  if (error instanceof Error) return error;
  var msg = error.err || error.errmsg || error.errMessage || error;
  var e = MongoError.create({
    message: msg,
    driver: true
  }); // Get all object keys

  var keys = _typeof(error) === 'object' ? Object.keys(error) : [];

  for (var i = 0; i < keys.length; i++) {
    try {
      e[keys[i]] = error[keys[i]];
    } catch (err) {// continue
    }
  }

  return e;
};
/**
 * @ignore
 */


var normalizeHintField = function normalizeHintField(hint) {
  var finalHint = null;

  if (typeof hint === 'string') {
    finalHint = hint;
  } else if (Array.isArray(hint)) {
    finalHint = {};
    hint.forEach(function (param) {
      finalHint[param] = 1;
    });
  } else if (hint != null && _typeof(hint) === 'object') {
    finalHint = {};

    for (var name in hint) {
      finalHint[name] = hint[name];
    }
  }

  return finalHint;
};
/**
 * Create index name based on field spec
 *
 * @ignore
 * @api private
 */


var parseIndexOptions = function parseIndexOptions(fieldOrSpec) {
  var fieldHash = {};
  var indexes = [];
  var keys; // Get all the fields accordingly

  if ('string' === typeof fieldOrSpec) {
    // 'type'
    indexes.push(fieldOrSpec + '_' + 1);
    fieldHash[fieldOrSpec] = 1;
  } else if (Array.isArray(fieldOrSpec)) {
    fieldOrSpec.forEach(function (f) {
      if ('string' === typeof f) {
        // [{location:'2d'}, 'type']
        indexes.push(f + '_' + 1);
        fieldHash[f] = 1;
      } else if (Array.isArray(f)) {
        // [['location', '2d'],['type', 1]]
        indexes.push(f[0] + '_' + (f[1] || 1));
        fieldHash[f[0]] = f[1] || 1;
      } else if (isObject(f)) {
        // [{location:'2d'}, {type:1}]
        keys = Object.keys(f);
        keys.forEach(function (k) {
          indexes.push(k + '_' + f[k]);
          fieldHash[k] = f[k];
        });
      } else {// undefined (ignore)
      }
    });
  } else if (isObject(fieldOrSpec)) {
    // {location:'2d', type:1}
    keys = Object.keys(fieldOrSpec);
    keys.forEach(function (key) {
      indexes.push(key + '_' + fieldOrSpec[key]);
      fieldHash[key] = fieldOrSpec[key];
    });
  }

  return {
    name: indexes.join('_'),
    keys: keys,
    fieldHash: fieldHash
  };
};

var isObject = exports.isObject = function (arg) {
  return '[object Object]' === Object.prototype.toString.call(arg);
};

var debugOptions = function debugOptions(debugFields, options) {
  var finaloptions = {};
  debugFields.forEach(function (n) {
    finaloptions[n] = options[n];
  });
  return finaloptions;
};

var decorateCommand = function decorateCommand(command, options, exclude) {
  for (var name in options) {
    if (exclude.indexOf(name) === -1) command[name] = options[name];
  }

  return command;
};

var mergeOptions = function mergeOptions(target, source) {
  for (var name in source) {
    target[name] = source[name];
  }

  return target;
}; // Merge options with translation


var translateOptions = function translateOptions(target, source) {
  var translations = {
    // SSL translation options
    sslCA: 'ca',
    sslCRL: 'crl',
    sslValidate: 'rejectUnauthorized',
    sslKey: 'key',
    sslCert: 'cert',
    sslPass: 'passphrase',
    // SocketTimeout translation options
    socketTimeoutMS: 'socketTimeout',
    connectTimeoutMS: 'connectionTimeout',
    // Replicaset options
    replicaSet: 'setName',
    rs_name: 'setName',
    secondaryAcceptableLatencyMS: 'acceptableLatency',
    connectWithNoPrimary: 'secondaryOnlyConnectionAllowed',
    // Mongos options
    acceptableLatencyMS: 'localThresholdMS'
  };

  for (var name in source) {
    if (translations[name]) {
      target[translations[name]] = source[name];
    } else {
      target[name] = source[name];
    }
  }

  return target;
};

var filterOptions = function filterOptions(options, names) {
  var filterOptions = {};

  for (var name in options) {
    if (names.indexOf(name) !== -1) filterOptions[name] = options[name];
  } // Filtered options


  return filterOptions;
}; // Write concern keys


var writeConcernKeys = ['w', 'j', 'wtimeout', 'fsync']; // Merge the write concern options

var mergeOptionsAndWriteConcern = function mergeOptionsAndWriteConcern(targetOptions, sourceOptions, keys, mergeWriteConcern) {
  // Mix in any allowed options
  for (var i = 0; i < keys.length; i++) {
    if (!targetOptions[keys[i]] && sourceOptions[keys[i]] !== undefined) {
      targetOptions[keys[i]] = sourceOptions[keys[i]];
    }
  } // No merging of write concern


  if (!mergeWriteConcern) return targetOptions; // Found no write Concern options

  var found = false;

  for (i = 0; i < writeConcernKeys.length; i++) {
    if (targetOptions[writeConcernKeys[i]]) {
      found = true;
      break;
    }
  }

  if (!found) {
    for (i = 0; i < writeConcernKeys.length; i++) {
      if (sourceOptions[writeConcernKeys[i]]) {
        targetOptions[writeConcernKeys[i]] = sourceOptions[writeConcernKeys[i]];
      }
    }
  }

  return targetOptions;
};
/**
 * Executes the given operation with provided arguments.
 *
 * This method reduces large amounts of duplication in the entire codebase by providing
 * a single point for determining whether callbacks or promises should be used. Additionally
 * it allows for a single point of entry to provide features such as implicit sessions, which
 * are required by the Driver Sessions specification in the event that a ClientSession is
 * not provided
 *
 * @param {object} topology The topology to execute this operation on
 * @param {function} operation The operation to execute
 * @param {array} args Arguments to apply the provided operation
 * @param {object} [options] Options that modify the behavior of the method
 */


var executeLegacyOperation = function executeLegacyOperation(topology, operation, args, options) {
  if (topology == null) {
    throw new TypeError('This method requires a valid topology instance');
  }

  if (!Array.isArray(args)) {
    throw new TypeError('This method requires an array of arguments to apply');
  }

  options = options || {};
  var Promise = topology.s.promiseLibrary;
  var callback = args[args.length - 1]; // The driver sessions spec mandates that we implicitly create sessions for operations
  // that are not explicitly provided with a session.

  var session, opOptions, owner;

  if (!options.skipSessions && topology.hasSessionSupport()) {
    opOptions = args[args.length - 2];

    if (opOptions == null || opOptions.session == null) {
      owner = Symbol();
      session = topology.startSession({
        owner: owner
      });
      var optionsIndex = args.length - 2;
      args[optionsIndex] = Object.assign({}, args[optionsIndex], {
        session: session
      });
    } else if (opOptions.session && opOptions.session.hasEnded) {
      throw new MongoError('Use of expired sessions is not permitted');
    }
  }

  var makeExecuteCallback = function makeExecuteCallback(resolve, reject) {
    return function executeCallback(err, result) {
      if (session && session.owner === owner && !options.returnsCursor) {
        session.endSession(function () {
          delete opOptions.session;
          if (err) return reject(err);
          resolve(result);
        });
      } else {
        if (err) return reject(err);
        resolve(result);
      }
    };
  }; // Execute using callback


  if (typeof callback === 'function') {
    callback = args.pop();
    var handler = makeExecuteCallback(function (result) {
      return callback(null, result);
    }, function (err) {
      return callback(err, null);
    });
    args.push(handler);

    try {
      return operation.apply(null, args);
    } catch (e) {
      handler(e);
      throw e;
    }
  } // Return a Promise


  if (args[args.length - 1] != null) {
    throw new TypeError('final argument to `executeLegacyOperation` must be a callback');
  }

  return new Promise(function (resolve, reject) {
    var handler = makeExecuteCallback(resolve, reject);
    args[args.length - 1] = handler;

    try {
      return operation.apply(null, args);
    } catch (e) {
      handler(e);
    }
  });
};
/**
 * Applies retryWrites: true to a command if retryWrites is set on the command's database.
 *
 * @param {object} target The target command to which we will apply retryWrites.
 * @param {object} db The database from which we can inherit a retryWrites value.
 */


function applyRetryableWrites(target, db) {
  if (db && db.s.options.retryWrites) {
    target.retryWrites = true;
  }

  return target;
}
/**
 * Applies a write concern to a command based on well defined inheritance rules, optionally
 * detecting support for the write concern in the first place.
 *
 * @param {Object} target the target command we will be applying the write concern to
 * @param {Object} sources sources where we can inherit default write concerns from
 * @param {Object} [options] optional settings passed into a command for write concern overrides
 * @returns {Object} the (now) decorated target
 */


function applyWriteConcern(target, sources, options) {
  options = options || {};
  var db = sources.db;
  var coll = sources.collection;

  if (options.session && options.session.inTransaction()) {
    // writeConcern is not allowed within a multi-statement transaction
    if (target.writeConcern) {
      delete target.writeConcern;
    }

    return target;
  }

  var writeConcern = WriteConcern.fromOptions(options);

  if (writeConcern) {
    return Object.assign(target, {
      writeConcern: writeConcern
    });
  }

  if (coll && coll.writeConcern) {
    return Object.assign(target, {
      writeConcern: Object.assign({}, coll.writeConcern)
    });
  }

  if (db && db.writeConcern) {
    return Object.assign(target, {
      writeConcern: Object.assign({}, db.writeConcern)
    });
  }

  return target;
}
/**
 * Resolves a read preference based on well-defined inheritance rules. This method will not only
 * determine the read preference (if there is one), but will also ensure the returned value is a
 * properly constructed instance of `ReadPreference`.
 *
 * @param {Collection|Db|MongoClient} parent The parent of the operation on which to determine the read
 * preference, used for determining the inherited read preference.
 * @param {Object} options The options passed into the method, potentially containing a read preference
 * @returns {(ReadPreference|null)} The resolved read preference
 */


function resolveReadPreference(parent, options) {
  options = options || {};
  var session = options.session;
  var inheritedReadPreference = parent.readPreference;
  var readPreference;

  if (options.readPreference) {
    readPreference = ReadPreference.fromOptions(options);
  } else if (session && session.inTransaction() && session.transaction.options.readPreference) {
    // The transaction’s read preference MUST override all other user configurable read preferences.
    readPreference = session.transaction.options.readPreference;
  } else if (inheritedReadPreference != null) {
    readPreference = inheritedReadPreference;
  } else {
    throw new Error('No readPreference was provided or inherited.');
  }

  return typeof readPreference === 'string' ? new ReadPreference(readPreference) : readPreference;
}
/**
 * Checks if a given value is a Promise
 *
 * @param {*} maybePromise
 * @return true if the provided value is a Promise
 */


function isPromiseLike(maybePromise) {
  return maybePromise && typeof maybePromise.then === 'function';
}
/**
 * Applies collation to a given command.
 *
 * @param {object} [command] the command on which to apply collation
 * @param {(Cursor|Collection)} [target] target of command
 * @param {object} [options] options containing collation settings
 */


function decorateWithCollation(command, target, options) {
  var topology = target.s && target.s.topology || target.topology;

  if (!topology) {
    throw new TypeError('parameter "target" is missing a topology');
  }

  var capabilities = topology.capabilities();

  if (options.collation && _typeof(options.collation) === 'object') {
    if (capabilities && capabilities.commandsTakeCollation) {
      command.collation = options.collation;
    } else {
      throw new MongoError("Current topology does not support collation");
    }
  }
}
/**
 * Applies a read concern to a given command.
 *
 * @param {object} command the command on which to apply the read concern
 * @param {Collection} coll the parent collection of the operation calling this method
 */


function decorateWithReadConcern(command, coll, options) {
  if (options && options.session && options.session.inTransaction()) {
    return;
  }

  var readConcern = Object.assign({}, command.readConcern || {});

  if (coll.s.readConcern) {
    Object.assign(readConcern, coll.s.readConcern);
  }

  if (Object.keys(readConcern).length > 0) {
    Object.assign(command, {
      readConcern: readConcern
    });
  }
}

var emitProcessWarning = function emitProcessWarning(msg) {
  return process.emitWarning(msg, 'DeprecationWarning');
};

var emitConsoleWarning = function emitConsoleWarning(msg) {
  return console.error(msg);
};

var emitDeprecationWarning = process.emitWarning ? emitProcessWarning : emitConsoleWarning;
/**
 * Default message handler for generating deprecation warnings.
 *
 * @param {string} name function name
 * @param {string} option option name
 * @return {string} warning message
 * @ignore
 * @api private
 */

function defaultMsgHandler(name, option) {
  return "".concat(name, " option [").concat(option, "] is deprecated and will be removed in a later version.");
}
/**
 * Deprecates a given function's options.
 *
 * @param {object} config configuration for deprecation
 * @param {string} config.name function name
 * @param {Array} config.deprecatedOptions options to deprecate
 * @param {number} config.optionsIndex index of options object in function arguments array
 * @param {function} [config.msgHandler] optional custom message handler to generate warnings
 * @param {function} fn the target function of deprecation
 * @return {function} modified function that warns once per deprecated option, and executes original function
 * @ignore
 * @api private
 */


function deprecateOptions(config, fn) {
  if (process.noDeprecation === true) {
    return fn;
  }

  var msgHandler = config.msgHandler ? config.msgHandler : defaultMsgHandler;
  var optionsWarned = new Set();

  function deprecated() {
    var _this = this;

    var options = arguments[config.optionsIndex]; // ensure options is a valid, non-empty object, otherwise short-circuit

    if (!isObject(options) || Object.keys(options).length === 0) {
      return fn.apply(this, arguments);
    }

    config.deprecatedOptions.forEach(function (deprecatedOption) {
      if (options.hasOwnProperty(deprecatedOption) && !optionsWarned.has(deprecatedOption)) {
        optionsWarned.add(deprecatedOption);
        var msg = msgHandler(config.name, deprecatedOption);
        emitDeprecationWarning(msg);

        if (_this && _this.getLogger) {
          var logger = _this.getLogger();

          if (logger) {
            logger.warn(msg);
          }
        }
      }
    });
    return fn.apply(this, arguments);
  } // These lines copied from https://github.com/nodejs/node/blob/25e5ae41688676a5fd29b2e2e7602168eee4ceb5/lib/internal/util.js#L73-L80
  // The wrapper will keep the same prototype as fn to maintain prototype chain


  Object.setPrototypeOf(deprecated, fn);

  if (fn.prototype) {
    // Setting this (rather than using Object.setPrototype, as above) ensures
    // that calling the unwrapped constructor gives an instanceof the wrapped
    // constructor.
    deprecated.prototype = fn.prototype;
  }

  return deprecated;
}

var SUPPORTS = {}; // Test asyncIterator support

try {
  require('./async/async_iterator');

  SUPPORTS.ASYNC_ITERATOR = true;
} catch (e) {
  SUPPORTS.ASYNC_ITERATOR = false;
}

var MongoDBNamespace =
/*#__PURE__*/
function () {
  function MongoDBNamespace(db, collection) {
    _classCallCheck(this, MongoDBNamespace);

    this.db = db;
    this.collection = collection;
  }

  _createClass(MongoDBNamespace, [{
    key: "toString",
    value: function toString() {
      return this.collection ? "".concat(this.db, ".").concat(this.collection) : this.db;
    }
  }, {
    key: "withCollection",
    value: function withCollection(collection) {
      return new MongoDBNamespace(this.db, collection);
    }
  }], [{
    key: "fromString",
    value: function fromString(namespace) {
      if (!namespace) {
        throw new Error("Cannot parse namespace from \"".concat(namespace, "\""));
      }

      var index = namespace.indexOf('.');
      return new MongoDBNamespace(namespace.substring(0, index), namespace.substring(index + 1));
    }
  }]);

  return MongoDBNamespace;
}();

module.exports = {
  filterOptions: filterOptions,
  mergeOptions: mergeOptions,
  translateOptions: translateOptions,
  shallowClone: shallowClone,
  getSingleProperty: getSingleProperty,
  checkCollectionName: checkCollectionName,
  toError: toError,
  formattedOrderClause: formattedOrderClause,
  parseIndexOptions: parseIndexOptions,
  normalizeHintField: normalizeHintField,
  handleCallback: handleCallback,
  decorateCommand: decorateCommand,
  isObject: isObject,
  debugOptions: debugOptions,
  MAX_JS_INT: Number.MAX_SAFE_INTEGER + 1,
  mergeOptionsAndWriteConcern: mergeOptionsAndWriteConcern,
  translateReadPreference: translateReadPreference,
  executeLegacyOperation: executeLegacyOperation,
  applyRetryableWrites: applyRetryableWrites,
  applyWriteConcern: applyWriteConcern,
  isPromiseLike: isPromiseLike,
  decorateWithCollation: decorateWithCollation,
  decorateWithReadConcern: decorateWithReadConcern,
  deprecateOptions: deprecateOptions,
  SUPPORTS: SUPPORTS,
  MongoDBNamespace: MongoDBNamespace,
  resolveReadPreference: resolveReadPreference,
  emitDeprecationWarning: emitDeprecationWarning
};