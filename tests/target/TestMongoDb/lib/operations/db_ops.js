'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var applyWriteConcern = require('../utils').applyWriteConcern;

var Code = require('../core').BSON.Code;

var resolveReadPreference = require('../utils').resolveReadPreference;

var crypto = require('crypto');

var debugOptions = require('../utils').debugOptions;

var handleCallback = require('../utils').handleCallback;

var MongoError = require('../core').MongoError;

var parseIndexOptions = require('../utils').parseIndexOptions;

var ReadPreference = require('../core').ReadPreference;

var toError = require('../utils').toError;

var CONSTANTS = require('../constants');

var MongoDBNamespace = require('../utils').MongoDBNamespace;

var count = require('./collection_ops').count;

var findOne = require('./collection_ops').findOne;

var remove = require('./collection_ops').remove;

var updateOne = require('./collection_ops').updateOne;

var collection;

function loadCollection() {
  if (!collection) {
    collection = require('../collection');
  }

  return collection;
}

var db;

function loadDb() {
  if (!db) {
    db = require('../db');
  }

  return db;
}

var debugFields = ['authSource', 'w', 'wtimeout', 'j', 'native_parser', 'forceServerObjectId', 'serializeFunctions', 'raw', 'promoteLongs', 'promoteValues', 'promoteBuffers', 'bufferMaxEntries', 'numberOfRetries', 'retryMiliSeconds', 'readPreference', 'pkFactory', 'parentDb', 'promiseLibrary', 'noListener'];
/**
 * Add a user to the database.
 * @method
 * @param {Db} db The Db instance on which to add a user.
 * @param {string} username The username.
 * @param {string} password The password.
 * @param {object} [options] Optional settings. See Db.prototype.addUser for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback
 */

function addUser(db, username, password, options, callback) {
  var Db = loadDb(); // Did the user destroy the topology

  if (db.serverConfig && db.serverConfig.isDestroyed()) return callback(new MongoError('topology was destroyed')); // Attempt to execute auth command

  executeAuthCreateUserCommand(db, username, password, options, function (err, r) {
    // We need to perform the backward compatible insert operation
    if (err && err.code === -5000) {
      var finalOptions = applyWriteConcern(Object.assign({}, options), {
        db: db
      }, options); // Use node md5 generator

      var md5 = crypto.createHash('md5'); // Generate keys used for authentication

      md5.update(username + ':mongo:' + password);
      var userPassword = md5.digest('hex'); // If we have another db set

      var dbToUse = options.dbName ? new Db(options.dbName, db.s.topology, db.s.options) : db; // Fetch a user collection

      var _collection = dbToUse.collection(CONSTANTS.SYSTEM_USER_COLLECTION); // Check if we are inserting the first user


      count(_collection, {}, finalOptions, function (err, count) {
        // We got an error (f.ex not authorized)
        if (err != null) return handleCallback(callback, err, null); // Check if the user exists and update i

        var findOptions = Object.assign({
          projection: {
            dbName: 1
          }
        }, finalOptions);

        _collection.find({
          user: username
        }, findOptions).toArray(function (err) {
          // We got an error (f.ex not authorized)
          if (err != null) return handleCallback(callback, err, null); // Add command keys

          finalOptions.upsert = true; // We have a user, let's update the password or upsert if not

          updateOne(_collection, {
            user: username
          }, {
            $set: {
              user: username,
              pwd: userPassword
            }
          }, finalOptions, function (err) {
            if (count === 0 && err) return handleCallback(callback, null, [{
              user: username,
              pwd: userPassword
            }]);
            if (err) return handleCallback(callback, err, null);
            handleCallback(callback, null, [{
              user: username,
              pwd: userPassword
            }]);
          });
        });
      });
      return;
    }

    if (err) return handleCallback(callback, err);
    handleCallback(callback, err, r);
  });
}
/**
 * Fetch all collections for the current db.
 *
 * @method
 * @param {Db} db The Db instance on which to fetch collections.
 * @param {object} [options] Optional settings. See Db.prototype.collections for a list of options.
 * @param {Db~collectionsResultCallback} [callback] The results callback
 */


function collections(db, options, callback) {
  var Collection = loadCollection();
  options = Object.assign({}, options, {
    nameOnly: true
  }); // Let's get the collection names

  db.listCollections({}, options).toArray(function (err, documents) {
    if (err != null) return handleCallback(callback, err, null); // Filter collections removing any illegal ones

    documents = documents.filter(function (doc) {
      return doc.name.indexOf('$') === -1;
    }); // Return the collection objects

    handleCallback(callback, null, documents.map(function (d) {
      return new Collection(db, db.s.topology, db.databaseName, d.name, db.s.pkFactory, db.s.options);
    }));
  });
}
/**
 * Creates an index on the db and collection.
 * @method
 * @param {Db} db The Db instance on which to create an index.
 * @param {string} name Name of the collection to create the index on.
 * @param {(string|object)} fieldOrSpec Defines the index.
 * @param {object} [options] Optional settings. See Db.prototype.createIndex for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback
 */


function createIndex(db, name, fieldOrSpec, options, callback) {
  // Get the write concern options
  var finalOptions = Object.assign({}, {
    readPreference: ReadPreference.PRIMARY
  }, options);
  finalOptions = applyWriteConcern(finalOptions, {
    db: db
  }, options); // Ensure we have a callback

  if (finalOptions.writeConcern && typeof callback !== 'function') {
    throw MongoError.create({
      message: 'Cannot use a writeConcern without a provided callback',
      driver: true
    });
  } // Did the user destroy the topology


  if (db.serverConfig && db.serverConfig.isDestroyed()) return callback(new MongoError('topology was destroyed')); // Attempt to run using createIndexes command

  createIndexUsingCreateIndexes(db, name, fieldOrSpec, finalOptions, function (err, result) {
    if (err == null) return handleCallback(callback, err, result);
    /**
     * The following errors mean that the server recognized `createIndex` as a command so we don't need to fallback to an insert:
     * 67 = 'CannotCreateIndex' (malformed index options)
     * 85 = 'IndexOptionsConflict' (index already exists with different options)
     * 86 = 'IndexKeySpecsConflict' (index already exists with the same name)
     * 11000 = 'DuplicateKey' (couldn't build unique index because of dupes)
     * 11600 = 'InterruptedAtShutdown' (interrupted at shutdown)
     * 197 = 'InvalidIndexSpecificationOption' (`_id` with `background: true`)
     */

    if (err.code === 67 || err.code === 11000 || err.code === 85 || err.code === 86 || err.code === 11600 || err.code === 197) {
      return handleCallback(callback, err, result);
    } // Create command


    var doc = createCreateIndexCommand(db, name, fieldOrSpec, options); // Set no key checking

    finalOptions.checkKeys = false; // Insert document

    db.s.topology.insert(db.s.namespace.withCollection(CONSTANTS.SYSTEM_INDEX_COLLECTION), doc, finalOptions, function (err, result) {
      if (callback == null) return;
      if (err) return handleCallback(callback, err);
      if (result == null) return handleCallback(callback, null, null);
      if (result.result.writeErrors) return handleCallback(callback, MongoError.create(result.result.writeErrors[0]), null);
      handleCallback(callback, null, doc.name);
    });
  });
} // Add listeners to topology


function createListener(db, e, object) {
  function listener(err) {
    if (object.listeners(e).length > 0) {
      object.emit(e, err, db); // Emit on all associated db's if available

      for (var i = 0; i < db.s.children.length; i++) {
        db.s.children[i].emit(e, err, db.s.children[i]);
      }
    }
  }

  return listener;
}
/**
 * Drop a collection from the database, removing it permanently. New accesses will create a new collection.
 *
 * @method
 * @param {Db} db The Db instance on which to drop the collection.
 * @param {string} name Name of collection to drop
 * @param {Object} [options] Optional settings. See Db.prototype.dropCollection for a list of options.
 * @param {Db~resultCallback} [callback] The results callback
 */


function dropCollection(db, name, options, callback) {
  executeCommand(db, name, options, function (err, result) {
    // Did the user destroy the topology
    if (db.serverConfig && db.serverConfig.isDestroyed()) {
      return callback(new MongoError('topology was destroyed'));
    }

    if (err) return handleCallback(callback, err);
    if (result.ok) return handleCallback(callback, null, true);
    handleCallback(callback, null, false);
  });
}
/**
 * Drop a database, removing it permanently from the server.
 *
 * @method
 * @param {Db} db The Db instance to drop.
 * @param {Object} cmd The command document.
 * @param {Object} [options] Optional settings. See Db.prototype.dropDatabase for a list of options.
 * @param {Db~resultCallback} [callback] The results callback
 */


function dropDatabase(db, cmd, options, callback) {
  executeCommand(db, cmd, options, function (err, result) {
    // Did the user destroy the topology
    if (db.serverConfig && db.serverConfig.isDestroyed()) {
      return callback(new MongoError('topology was destroyed'));
    }

    if (callback == null) return;
    if (err) return handleCallback(callback, err, null);
    handleCallback(callback, null, result.ok ? true : false);
  });
}
/**
 * Ensures that an index exists. If it does not, creates it.
 *
 * @method
 * @param {Db} db The Db instance on which to ensure the index.
 * @param {string} name The index name
 * @param {(string|object)} fieldOrSpec Defines the index.
 * @param {object} [options] Optional settings. See Db.prototype.ensureIndex for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback
 */


function ensureIndex(db, name, fieldOrSpec, options, callback) {
  // Get the write concern options
  var finalOptions = applyWriteConcern({}, {
    db: db
  }, options); // Create command

  var selector = createCreateIndexCommand(db, name, fieldOrSpec, options);
  var index_name = selector.name; // Did the user destroy the topology

  if (db.serverConfig && db.serverConfig.isDestroyed()) return callback(new MongoError('topology was destroyed')); // Merge primary readPreference

  finalOptions.readPreference = ReadPreference.PRIMARY; // Check if the index already exists

  indexInformation(db, name, finalOptions, function (err, indexInformation) {
    if (err != null && err.code !== 26) return handleCallback(callback, err, null); // If the index does not exist, create it

    if (indexInformation == null || !indexInformation[index_name]) {
      createIndex(db, name, fieldOrSpec, options, callback);
    } else {
      if (typeof callback === 'function') return handleCallback(callback, null, index_name);
    }
  });
}
/**
 * Evaluate JavaScript on the server
 *
 * @method
 * @param {Db} db The Db instance.
 * @param {Code} code JavaScript to execute on server.
 * @param {(object|array)} parameters The parameters for the call.
 * @param {object} [options] Optional settings. See Db.prototype.eval for a list of options.
 * @param {Db~resultCallback} [callback] The results callback
 * @deprecated Eval is deprecated on MongoDB 3.2 and forward
 */


function evaluate(db, code, parameters, options, callback) {
  var finalCode = code;
  var finalParameters = []; // Did the user destroy the topology

  if (db.serverConfig && db.serverConfig.isDestroyed()) return callback(new MongoError('topology was destroyed')); // If not a code object translate to one

  if (!(finalCode && finalCode._bsontype === 'Code')) finalCode = new Code(finalCode); // Ensure the parameters are correct

  if (parameters != null && !Array.isArray(parameters) && typeof parameters !== 'function') {
    finalParameters = [parameters];
  } else if (parameters != null && Array.isArray(parameters) && typeof parameters !== 'function') {
    finalParameters = parameters;
  } // Create execution selector


  var cmd = {
    $eval: finalCode,
    args: finalParameters
  }; // Check if the nolock parameter is passed in

  if (options['nolock']) {
    cmd['nolock'] = options['nolock'];
  } // Set primary read preference


  options.readPreference = new ReadPreference(ReadPreference.PRIMARY); // Execute the command

  executeCommand(db, cmd, options, function (err, result) {
    if (err) return handleCallback(callback, err, null);
    if (result && result.ok === 1) return handleCallback(callback, null, result.retval);
    if (result) return handleCallback(callback, MongoError.create({
      message: "eval failed: ".concat(result.errmsg),
      driver: true
    }), null);
    handleCallback(callback, err, result);
  });
}
/**
 * Execute a command
 *
 * @method
 * @param {Db} db The Db instance on which to execute the command.
 * @param {object} command The command hash
 * @param {object} [options] Optional settings. See Db.prototype.command for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback
 */


function executeCommand(db, command, options, callback) {
  // Did the user destroy the topology
  if (db.serverConfig && db.serverConfig.isDestroyed()) return callback(new MongoError('topology was destroyed')); // Get the db name we are executing against

  var dbName = options.dbName || options.authdb || db.databaseName; // Convert the readPreference if its not a write

  options.readPreference = resolveReadPreference(db, options); // Debug information

  if (db.s.logger.isDebug()) db.s.logger.debug("executing command ".concat(JSON.stringify(command), " against ").concat(dbName, ".$cmd with options [").concat(JSON.stringify(debugOptions(debugFields, options)), "]")); // Execute command

  db.s.topology.command(db.s.namespace.withCollection('$cmd'), command, options, function (err, result) {
    if (err) return handleCallback(callback, err);
    if (options.full) return handleCallback(callback, null, result);
    handleCallback(callback, null, result.result);
  });
}
/**
 * Runs a command on the database as admin.
 *
 * @method
 * @param {Db} db The Db instance on which to execute the command.
 * @param {object} command The command hash
 * @param {object} [options] Optional settings. See Db.prototype.executeDbAdminCommand for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback
 */


function executeDbAdminCommand(db, command, options, callback) {
  var namespace = new MongoDBNamespace('admin', '$cmd');
  db.s.topology.command(namespace, command, options, function (err, result) {
    // Did the user destroy the topology
    if (db.serverConfig && db.serverConfig.isDestroyed()) {
      return callback(new MongoError('topology was destroyed'));
    }

    if (err) return handleCallback(callback, err);
    handleCallback(callback, null, result.result);
  });
}
/**
 * Retrieves this collections index info.
 *
 * @method
 * @param {Db} db The Db instance on which to retrieve the index info.
 * @param {string} name The name of the collection.
 * @param {object} [options] Optional settings. See Db.prototype.indexInformation for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback
 */


function indexInformation(db, name, options, callback) {
  // If we specified full information
  var full = options['full'] == null ? false : options['full']; // Did the user destroy the topology

  if (db.serverConfig && db.serverConfig.isDestroyed()) return callback(new MongoError('topology was destroyed')); // Process all the results from the index command and collection

  function processResults(indexes) {
    // Contains all the information
    var info = {}; // Process all the indexes

    for (var i = 0; i < indexes.length; i++) {
      var index = indexes[i]; // Let's unpack the object

      info[index.name] = [];

      for (var _name in index.key) {
        info[index.name].push([_name, index.key[_name]]);
      }
    }

    return info;
  } // Get the list of indexes of the specified collection


  db.collection(name).listIndexes(options).toArray(function (err, indexes) {
    if (err) return callback(toError(err));
    if (!Array.isArray(indexes)) return handleCallback(callback, null, []);
    if (full) return handleCallback(callback, null, indexes);
    handleCallback(callback, null, processResults(indexes));
  });
}
/**
 * Retrieve the current profiling information for MongoDB
 *
 * @method
 * @param {Db} db The Db instance on which to retrieve the profiling info.
 * @param {Object} [options] Optional settings. See Db.protoype.profilingInfo for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback.
 * @deprecated Query the system.profile collection directly.
 */


function profilingInfo(db, options, callback) {
  try {
    db.collection('system.profile').find({}, options).toArray(callback);
  } catch (err) {
    return callback(err, null);
  }
}
/**
 * Remove a user from a database
 *
 * @method
 * @param {Db} db The Db instance on which to remove the user.
 * @param {string} username The username.
 * @param {object} [options] Optional settings. See Db.prototype.removeUser for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback
 */


function removeUser(db, username, options, callback) {
  var Db = loadDb(); // Attempt to execute command

  executeAuthRemoveUserCommand(db, username, options, function (err, result) {
    if (err && err.code === -5000) {
      var finalOptions = applyWriteConcern(Object.assign({}, options), {
        db: _db
      }, options); // If we have another db set

      var _db = options.dbName ? new Db(options.dbName, _db.s.topology, _db.s.options) : _db; // Fetch a user collection


      var _collection2 = _db.collection(CONSTANTS.SYSTEM_USER_COLLECTION); // Locate the user


      findOne(_collection2, {
        user: username
      }, finalOptions, function (err, user) {
        if (user == null) return handleCallback(callback, err, false);
        remove(_collection2, {
          user: username
        }, finalOptions, function (err) {
          handleCallback(callback, err, true);
        });
      });
      return;
    }

    if (err) return handleCallback(callback, err);
    handleCallback(callback, err, result);
  });
} // Validate the database name


function validateDatabaseName(databaseName) {
  if (typeof databaseName !== 'string') throw MongoError.create({
    message: 'database name must be a string',
    driver: true
  });
  if (databaseName.length === 0) throw MongoError.create({
    message: 'database name cannot be the empty string',
    driver: true
  });
  if (databaseName === '$external') return;
  var invalidChars = [' ', '.', '$', '/', '\\'];

  for (var i = 0; i < invalidChars.length; i++) {
    if (databaseName.indexOf(invalidChars[i]) !== -1) throw MongoError.create({
      message: "database names cannot contain the character '" + invalidChars[i] + "'",
      driver: true
    });
  }
}
/**
 * Create the command object for Db.prototype.createIndex.
 *
 * @param {Db} db The Db instance on which to create the command.
 * @param {string} name Name of the collection to create the index on.
 * @param {(string|object)} fieldOrSpec Defines the index.
 * @param {Object} [options] Optional settings. See Db.prototype.createIndex for a list of options.
 * @return {Object} The insert command object.
 */


function createCreateIndexCommand(db, name, fieldOrSpec, options) {
  var indexParameters = parseIndexOptions(fieldOrSpec);
  var fieldHash = indexParameters.fieldHash; // Generate the index name

  var indexName = typeof options.name === 'string' ? options.name : indexParameters.name;
  var selector = {
    ns: db.s.namespace.withCollection(name).toString(),
    key: fieldHash,
    name: indexName
  }; // Ensure we have a correct finalUnique

  var finalUnique = options == null || 'object' === _typeof(options) ? false : options; // Set up options

  options = options == null || typeof options === 'boolean' ? {} : options; // Add all the options

  var keysToOmit = Object.keys(selector);

  for (var optionName in options) {
    if (keysToOmit.indexOf(optionName) === -1) {
      selector[optionName] = options[optionName];
    }
  }

  if (selector['unique'] == null) selector['unique'] = finalUnique; // Remove any write concern operations

  var removeKeys = ['w', 'wtimeout', 'j', 'fsync', 'readPreference', 'session'];

  for (var i = 0; i < removeKeys.length; i++) {
    delete selector[removeKeys[i]];
  } // Return the command creation selector


  return selector;
}
/**
 * Create index using the createIndexes command.
 *
 * @param {Db} db The Db instance on which to execute the command.
 * @param {string} name Name of the collection to create the index on.
 * @param {(string|object)} fieldOrSpec Defines the index.
 * @param {Object} [options] Optional settings. See Db.prototype.createIndex for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback.
 */


function createIndexUsingCreateIndexes(db, name, fieldOrSpec, options, callback) {
  // Build the index
  var indexParameters = parseIndexOptions(fieldOrSpec); // Generate the index name

  var indexName = typeof options.name === 'string' ? options.name : indexParameters.name; // Set up the index

  var indexes = [{
    name: indexName,
    key: indexParameters.fieldHash
  }]; // merge all the options

  var keysToOmit = Object.keys(indexes[0]).concat(['writeConcern', 'w', 'wtimeout', 'j', 'fsync', 'readPreference', 'session']);

  for (var optionName in options) {
    if (keysToOmit.indexOf(optionName) === -1) {
      indexes[0][optionName] = options[optionName];
    }
  } // Get capabilities


  var capabilities = db.s.topology.capabilities(); // Did the user pass in a collation, check if our write server supports it

  if (indexes[0].collation && capabilities && !capabilities.commandsTakeCollation) {
    // Create a new error
    var error = new MongoError('server/primary/mongos does not support collation');
    error.code = 67; // Return the error

    return callback(error);
  } // Create command, apply write concern to command


  var cmd = applyWriteConcern({
    createIndexes: name,
    indexes: indexes
  }, {
    db: db
  }, options); // ReadPreference primary

  options.readPreference = ReadPreference.PRIMARY; // Build the command

  executeCommand(db, cmd, options, function (err, result) {
    if (err) return handleCallback(callback, err, null);
    if (result.ok === 0) return handleCallback(callback, toError(result), null); // Return the indexName for backward compatibility

    handleCallback(callback, null, indexName);
  });
}
/**
 * Run the createUser command.
 *
 * @param {Db} db The Db instance on which to execute the command.
 * @param {string} username The username of the user to add.
 * @param {string} password The password of the user to add.
 * @param {object} [options] Optional settings. See Db.prototype.addUser for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback
 */


function executeAuthCreateUserCommand(db, username, password, options, callback) {
  // Special case where there is no password ($external users)
  if (typeof username === 'string' && password != null && _typeof(password) === 'object') {
    options = password;
    password = null;
  } // Unpack all options


  if (typeof options === 'function') {
    callback = options;
    options = {};
  } // Error out if we digestPassword set


  if (options.digestPassword != null) {
    return callback(toError("The digestPassword option is not supported via add_user. Please use db.command('createUser', ...) instead for this option."));
  } // Get additional values


  var customData = options.customData != null ? options.customData : {};
  var roles = Array.isArray(options.roles) ? options.roles : [];
  var maxTimeMS = typeof options.maxTimeMS === 'number' ? options.maxTimeMS : null; // If not roles defined print deprecated message

  if (roles.length === 0) {
    console.log('Creating a user without roles is deprecated in MongoDB >= 2.6');
  } // Get the error options


  var commandOptions = {
    writeCommand: true
  };
  if (options['dbName']) commandOptions.dbName = options['dbName']; // Add maxTimeMS to options if set

  if (maxTimeMS != null) commandOptions.maxTimeMS = maxTimeMS; // Check the db name and add roles if needed

  if ((db.databaseName.toLowerCase() === 'admin' || options.dbName === 'admin') && !Array.isArray(options.roles)) {
    roles = ['root'];
  } else if (!Array.isArray(options.roles)) {
    roles = ['dbOwner'];
  }

  var digestPassword = db.s.topology.lastIsMaster().maxWireVersion >= 7; // Build the command to execute

  var command = {
    createUser: username,
    customData: customData,
    roles: roles,
    digestPassword: digestPassword
  }; // Apply write concern to command

  command = applyWriteConcern(command, {
    db: db
  }, options);
  var userPassword = password;

  if (!digestPassword) {
    // Use node md5 generator
    var md5 = crypto.createHash('md5'); // Generate keys used for authentication

    md5.update(username + ':mongo:' + password);
    userPassword = md5.digest('hex');
  } // No password


  if (typeof password === 'string') {
    command.pwd = userPassword;
  } // Force write using primary


  commandOptions.readPreference = ReadPreference.primary; // Execute the command

  executeCommand(db, command, commandOptions, function (err, result) {
    if (err && err.ok === 0 && err.code === undefined) return handleCallback(callback, {
      code: -5000
    }, null);
    if (err) return handleCallback(callback, err, null);
    handleCallback(callback, !result.ok ? toError(result) : null, result.ok ? [{
      user: username,
      pwd: ''
    }] : null);
  });
}
/**
 * Run the dropUser command.
 *
 * @param {Db} db The Db instance on which to execute the command.
 * @param {string} username The username of the user to remove.
 * @param {object} [options] Optional settings. See Db.prototype.removeUser for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback
 */


function executeAuthRemoveUserCommand(db, username, options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {}; // Did the user destroy the topology

  if (db.serverConfig && db.serverConfig.isDestroyed()) return callback(new MongoError('topology was destroyed')); // Get the error options

  var commandOptions = {
    writeCommand: true
  };
  if (options['dbName']) commandOptions.dbName = options['dbName']; // Get additional values

  var maxTimeMS = typeof options.maxTimeMS === 'number' ? options.maxTimeMS : null; // Add maxTimeMS to options if set

  if (maxTimeMS != null) commandOptions.maxTimeMS = maxTimeMS; // Build the command to execute

  var command = {
    dropUser: username
  }; // Apply write concern to command

  command = applyWriteConcern(command, {
    db: db
  }, options); // Force write using primary

  commandOptions.readPreference = ReadPreference.primary; // Execute the command

  executeCommand(db, command, commandOptions, function (err, result) {
    if (err && !err.ok && err.code === undefined) return handleCallback(callback, {
      code: -5000
    });
    if (err) return handleCallback(callback, err, null);
    handleCallback(callback, null, result.ok ? true : false);
  });
}

module.exports = {
  addUser: addUser,
  collections: collections,
  createListener: createListener,
  createIndex: createIndex,
  dropCollection: dropCollection,
  dropDatabase: dropDatabase,
  ensureIndex: ensureIndex,
  evaluate: evaluate,
  executeCommand: executeCommand,
  executeDbAdminCommand: executeDbAdminCommand,
  indexInformation: indexInformation,
  profilingInfo: profilingInfo,
  removeUser: removeUser,
  validateDatabaseName: validateDatabaseName
};