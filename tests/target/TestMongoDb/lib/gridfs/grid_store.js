'use strict';
/**
 * @fileOverview GridFS is a tool for MongoDB to store files to the database.
 * Because of the restrictions of the object size the database can hold, a
 * facility to split a file into several chunks is needed. The {@link GridStore}
 * class offers a simplified api to interact with files while managing the
 * chunks of split files behind the scenes. More information about GridFS can be
 * found <a href="http://www.mongodb.org/display/DOCS/GridFS">here</a>.
 *
 * @example
 * const MongoClient = require('mongodb').MongoClient;
 * const GridStore = require('mongodb').GridStore;
 * const ObjectID = require('mongodb').ObjectID;
 * const test = require('assert');
 * // Connection url
 * const url = 'mongodb://localhost:27017';
 * // Database Name
 * const dbName = 'test';
 * // Connect using MongoClient
 * MongoClient.connect(url, function(err, client) {
 *   const db = client.db(dbName);
 *   const gridStore = new GridStore(db, null, "w");
 *   gridStore.open(function(err, gridStore) {
 *     gridStore.write("hello world!", function(err, gridStore) {
 *       gridStore.close(function(err, result) {
 *         // Let's read the file using object Id
 *         GridStore.read(db, result._id, function(err, data) {
 *           test.equal('hello world!', data);
 *           client.close();
 *           test.done();
 *         });
 *       });
 *     });
 *   });
 * });
 */

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.bind");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Chunk = require('./chunk');

var ObjectID = require('../core').BSON.ObjectID;

var ReadPreference = require('../core').ReadPreference;

var Buffer = require('safe-buffer').Buffer;

var fs = require('fs');

var f = require('util').format;

var util = require('util');

var MongoError = require('../core').MongoError;

var inherits = util.inherits;

var Duplex = require('stream').Duplex;

var shallowClone = require('../utils').shallowClone;

var executeLegacyOperation = require('../utils').executeLegacyOperation;

var deprecate = require('util').deprecate;

var REFERENCE_BY_FILENAME = 0,
    REFERENCE_BY_ID = 1;
var deprecationFn = deprecate(function () {}, 'GridStore is deprecated, and will be removed in a future version. Please use GridFSBucket instead');
/**
 * Namespace provided by the core module
 * @external Duplex
 */

/**
 * Create a new GridStore instance
 *
 * Modes
 *  - **"r"** - read only. This is the default mode.
 *  - **"w"** - write in truncate mode. Existing data will be overwritten.
 *
 * @class
 * @param {Db} db A database instance to interact with.
 * @param {object} [id] optional unique id for this file
 * @param {string} [filename] optional filename for this file, no unique constrain on the field
 * @param {string} mode set the mode for this file.
 * @param {object} [options] Optional settings.
 * @param {(number|string)} [options.w] The write concern.
 * @param {number} [options.wtimeout] The write concern timeout.
 * @param {boolean} [options.j=false] Specify a journal write concern.
 * @param {boolean} [options.fsync=false] Specify a file sync write concern.
 * @param {string} [options.root] Root collection to use. Defaults to **{GridStore.DEFAULT_ROOT_COLLECTION}**.
 * @param {string} [options.content_type] MIME type of the file. Defaults to **{GridStore.DEFAULT_CONTENT_TYPE}**.
 * @param {number} [options.chunk_size=261120] Size for the chunk. Defaults to **{Chunk.DEFAULT_CHUNK_SIZE}**.
 * @param {object} [options.metadata] Arbitrary data the user wants to store.
 * @param {object} [options.promiseLibrary] A Promise library class the application wishes to use such as Bluebird, must be ES6 compatible
 * @param {(ReadPreference|string)} [options.readPreference] The preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
 * @property {number} chunkSize Get the gridstore chunk size.
 * @property {number} md5 The md5 checksum for this file.
 * @property {number} chunkNumber The current chunk number the gridstore has materialized into memory
 * @return {GridStore} a GridStore instance.
 * @deprecated Use GridFSBucket API instead
 */

var GridStore = function GridStore(db, id, filename, mode, options) {
  deprecationFn();
  if (!(this instanceof GridStore)) return new GridStore(db, id, filename, mode, options);
  this.db = db; // Handle options

  if (typeof options === 'undefined') options = {}; // Handle mode

  if (typeof mode === 'undefined') {
    mode = filename;
    filename = undefined;
  } else if (_typeof(mode) === 'object') {
    options = mode;
    mode = filename;
    filename = undefined;
  }

  if (id && id._bsontype === 'ObjectID') {
    this.referenceBy = REFERENCE_BY_ID;
    this.fileId = id;
    this.filename = filename;
  } else if (typeof filename === 'undefined') {
    this.referenceBy = REFERENCE_BY_FILENAME;
    this.filename = id;

    if (mode.indexOf('w') != null) {
      this.fileId = new ObjectID();
    }
  } else {
    this.referenceBy = REFERENCE_BY_ID;
    this.fileId = id;
    this.filename = filename;
  } // Set up the rest


  this.mode = mode == null ? 'r' : mode;
  this.options = options || {}; // Opened

  this.isOpen = false; // Set the root if overridden

  this.root = this.options['root'] == null ? GridStore.DEFAULT_ROOT_COLLECTION : this.options['root'];
  this.position = 0;
  this.readPreference = this.options.readPreference || db.options.readPreference || ReadPreference.primary;
  this.writeConcern = _getWriteConcern(db, this.options); // Set default chunk size

  this.internalChunkSize = this.options['chunkSize'] == null ? Chunk.DEFAULT_CHUNK_SIZE : this.options['chunkSize']; // Get the promiseLibrary

  var promiseLibrary = this.options.promiseLibrary || Promise; // Set the promiseLibrary

  this.promiseLibrary = promiseLibrary;
  Object.defineProperty(this, 'chunkSize', {
    enumerable: true,
    get: function get() {
      return this.internalChunkSize;
    },
    set: function set(value) {
      if (!(this.mode[0] === 'w' && this.position === 0 && this.uploadDate == null)) {
        this.internalChunkSize = this.internalChunkSize;
      } else {
        this.internalChunkSize = value;
      }
    }
  });
  Object.defineProperty(this, 'md5', {
    enumerable: true,
    get: function get() {
      return this.internalMd5;
    }
  });
  Object.defineProperty(this, 'chunkNumber', {
    enumerable: true,
    get: function get() {
      return this.currentChunk && this.currentChunk.chunkNumber ? this.currentChunk.chunkNumber : null;
    }
  });
};
/**
 * The callback format for the Gridstore.open method
 * @callback GridStore~openCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 * @param {GridStore} gridStore The GridStore instance if the open method was successful.
 */

/**
 * Opens the file from the database and initialize this object. Also creates a
 * new one if file does not exist.
 *
 * @method
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~openCallback} [callback] this will be called after executing this method
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.open = function (options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {};

  if (this.mode !== 'w' && this.mode !== 'w+' && this.mode !== 'r') {
    throw MongoError.create({
      message: 'Illegal mode ' + this.mode,
      driver: true
    });
  }

  return executeLegacyOperation(this.db.s.topology, open, [this, options, callback], {
    skipSessions: true
  });
};

var open = function open(self, options, callback) {
  // Get the write concern
  var writeConcern = _getWriteConcern(self.db, self.options); // If we are writing we need to ensure we have the right indexes for md5's


  if (self.mode === 'w' || self.mode === 'w+') {
    // Get files collection
    var collection = self.collection(); // Put index on filename

    collection.ensureIndex([['filename', 1]], writeConcern, function () {
      // Get chunk collection
      var chunkCollection = self.chunkCollection(); // Make an unique index for compatibility with mongo-cxx-driver:legacy

      var chunkIndexOptions = shallowClone(writeConcern);
      chunkIndexOptions.unique = true; // Ensure index on chunk collection

      chunkCollection.ensureIndex([['files_id', 1], ['n', 1]], chunkIndexOptions, function () {
        // Open the connection
        _open(self, writeConcern, function (err, r) {
          if (err) return callback(err);
          self.isOpen = true;
          callback(err, r);
        });
      });
    });
  } else {
    // Open the gridstore
    _open(self, writeConcern, function (err, r) {
      if (err) return callback(err);
      self.isOpen = true;
      callback(err, r);
    });
  }
};
/**
 * Verify if the file is at EOF.
 *
 * @method
 * @return {boolean} true if the read/write head is at the end of this file.
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.eof = function () {
  return this.position === this.length ? true : false;
};
/**
 * The callback result format.
 * @callback GridStore~resultCallback
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {MongoError} error An error instance representing the error during the execution.
 * @param {object} result The result from the callback.
 */

/**
 * Retrieves a single character from this file.
 *
 * @method
 * @param {GridStore~resultCallback} [callback] this gets called after this method is executed. Passes null to the first parameter and the character read to the second or null to the second if the read/write head is at the end of the file.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.getc = function (options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {};
  return executeLegacyOperation(this.db.s.topology, getc, [this, options, callback], {
    skipSessions: true
  });
};

var getc = function getc(self, options, callback) {
  if (self.eof()) {
    callback(null, null);
  } else if (self.currentChunk.eof()) {
    nthChunk(self, self.currentChunk.chunkNumber + 1, function (err, chunk) {
      self.currentChunk = chunk;
      self.position = self.position + 1;
      callback(err, self.currentChunk.getc());
    });
  } else {
    self.position = self.position + 1;
    callback(null, self.currentChunk.getc());
  }
};
/**
 * Writes a string to the file with a newline character appended at the end if
 * the given string does not have one.
 *
 * @method
 * @param {string} string the string to write.
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~resultCallback} [callback] this will be called after executing this method. The first parameter will contain null and the second one will contain a reference to this object.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.puts = function (string, options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {};
  var finalString = string.match(/\n$/) == null ? string + '\n' : string;
  return executeLegacyOperation(this.db.s.topology, this.write.bind(this), [finalString, options, callback], {
    skipSessions: true
  });
};
/**
 * Return a modified Readable stream including a possible transform method.
 *
 * @method
 * @return {GridStoreStream}
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.stream = function () {
  return new GridStoreStream(this);
};
/**
 * Writes some data. This method will work properly only if initialized with mode "w" or "w+".
 *
 * @method
 * @param {(string|Buffer)} data the data to write.
 * @param {boolean} [close] closes this file after writing if set to true.
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~resultCallback} [callback] this will be called after executing this method. The first parameter will contain null and the second one will contain a reference to this object.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.write = function write(data, close, options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {};
  return executeLegacyOperation(this.db.s.topology, _writeNormal, [this, data, close, options, callback], {
    skipSessions: true
  });
};
/**
 * Handles the destroy part of a stream
 *
 * @method
 * @result {null}
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.destroy = function destroy() {
  // close and do not emit any more events. queued data is not sent.
  if (!this.writable) return;
  this.readable = false;

  if (this.writable) {
    this.writable = false;
    this._q.length = 0;
    this.emit('close');
  }
};
/**
 * Stores a file from the file system to the GridFS database.
 *
 * @method
 * @param {(string|Buffer|FileHandle)} file the file to store.
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~resultCallback} [callback] this will be called after executing this method. The first parameter will contain null and the second one will contain a reference to this object.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.writeFile = function (file, options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {};
  return executeLegacyOperation(this.db.s.topology, writeFile, [this, file, options, callback], {
    skipSessions: true
  });
};

var writeFile = function writeFile(self, file, options, callback) {
  if (typeof file === 'string') {
    fs.open(file, 'r', function (err, fd) {
      if (err) return callback(err);
      self.writeFile(fd, callback);
    });
    return;
  }

  self.open(function (err, self) {
    if (err) return callback(err, self);
    fs.fstat(file, function (err, stats) {
      if (err) return callback(err, self);
      var offset = 0;
      var index = 0; // Write a chunk

      var writeChunk = function writeChunk() {
        // Allocate the buffer
        var _buffer = Buffer.alloc(self.chunkSize); // Read the file


        fs.read(file, _buffer, 0, _buffer.length, offset, function (err, bytesRead, data) {
          if (err) return callback(err, self);
          offset = offset + bytesRead; // Create a new chunk for the data

          var chunk = new Chunk(self, {
            n: index++
          }, self.writeConcern);
          chunk.write(data.slice(0, bytesRead), function (err, chunk) {
            if (err) return callback(err, self);
            chunk.save({}, function (err) {
              if (err) return callback(err, self);
              self.position = self.position + bytesRead; // Point to current chunk

              self.currentChunk = chunk;

              if (offset >= stats.size) {
                fs.close(file, function (err) {
                  if (err) return callback(err);
                  self.close(function (err) {
                    if (err) return callback(err, self);
                    return callback(null, self);
                  });
                });
              } else {
                return process.nextTick(writeChunk);
              }
            });
          });
        });
      }; // Process the first write


      process.nextTick(writeChunk);
    });
  });
};
/**
 * Saves this file to the database. This will overwrite the old entry if it
 * already exists. This will work properly only if mode was initialized to
 * "w" or "w+".
 *
 * @method
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~resultCallback} [callback] this will be called after executing this method. The first parameter will contain null and the second one will contain a reference to this object.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.close = function (options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {};
  return executeLegacyOperation(this.db.s.topology, close, [this, options, callback], {
    skipSessions: true
  });
};

var close = function close(self, options, callback) {
  if (self.mode[0] === 'w') {
    // Set up options
    options = Object.assign({}, self.writeConcern, options);

    if (self.currentChunk != null && self.currentChunk.position > 0) {
      self.currentChunk.save({}, function (err) {
        if (err && typeof callback === 'function') return callback(err);
        self.collection(function (err, files) {
          if (err && typeof callback === 'function') return callback(err); // Build the mongo object

          if (self.uploadDate != null) {
            buildMongoObject(self, function (err, mongoObject) {
              if (err) {
                if (typeof callback === 'function') return callback(err);else throw err;
              }

              files.save(mongoObject, options, function (err) {
                if (typeof callback === 'function') callback(err, mongoObject);
              });
            });
          } else {
            self.uploadDate = new Date();
            buildMongoObject(self, function (err, mongoObject) {
              if (err) {
                if (typeof callback === 'function') return callback(err);else throw err;
              }

              files.save(mongoObject, options, function (err) {
                if (typeof callback === 'function') callback(err, mongoObject);
              });
            });
          }
        });
      });
    } else {
      self.collection(function (err, files) {
        if (err && typeof callback === 'function') return callback(err);
        self.uploadDate = new Date();
        buildMongoObject(self, function (err, mongoObject) {
          if (err) {
            if (typeof callback === 'function') return callback(err);else throw err;
          }

          files.save(mongoObject, options, function (err) {
            if (typeof callback === 'function') callback(err, mongoObject);
          });
        });
      });
    }
  } else if (self.mode[0] === 'r') {
    if (typeof callback === 'function') callback(null, null);
  } else {
    if (typeof callback === 'function') callback(MongoError.create({
      message: f('Illegal mode %s', self.mode),
      driver: true
    }));
  }
};
/**
 * The collection callback format.
 * @callback GridStore~collectionCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 * @param {Collection} collection The collection from the command execution.
 */

/**
 * Retrieve this file's chunks collection.
 *
 * @method
 * @param {GridStore~collectionCallback} callback the command callback.
 * @return {Collection}
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.chunkCollection = function (callback) {
  if (typeof callback === 'function') return this.db.collection(this.root + '.chunks', callback);
  return this.db.collection(this.root + '.chunks');
};
/**
 * Deletes all the chunks of this file in the database.
 *
 * @method
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~resultCallback} [callback] the command callback.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.unlink = function (options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {};
  return executeLegacyOperation(this.db.s.topology, unlink, [this, options, callback], {
    skipSessions: true
  });
};

var unlink = function unlink(self, options, callback) {
  deleteChunks(self, function (err) {
    if (err !== null) {
      err.message = 'at deleteChunks: ' + err.message;
      return callback(err);
    }

    self.collection(function (err, collection) {
      if (err !== null) {
        err.message = 'at collection: ' + err.message;
        return callback(err);
      }

      collection.remove({
        _id: self.fileId
      }, self.writeConcern, function (err) {
        callback(err, self);
      });
    });
  });
};
/**
 * Retrieves the file collection associated with this object.
 *
 * @method
 * @param {GridStore~collectionCallback} callback the command callback.
 * @return {Collection}
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.collection = function (callback) {
  if (typeof callback === 'function') this.db.collection(this.root + '.files', callback);
  return this.db.collection(this.root + '.files');
};
/**
 * The readlines callback format.
 * @callback GridStore~readlinesCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 * @param {string[]} strings The array of strings returned.
 */

/**
 * Read the entire file as a list of strings splitting by the provided separator.
 *
 * @method
 * @param {string} [separator] The character to be recognized as the newline separator.
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~readlinesCallback} [callback] the command callback.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.readlines = function (separator, options, callback) {
  var args = Array.prototype.slice.call(arguments, 0);
  callback = typeof args[args.length - 1] === 'function' ? args.pop() : undefined;
  separator = args.length ? args.shift() : '\n';
  separator = separator || '\n';
  options = args.length ? args.shift() : {};
  return executeLegacyOperation(this.db.s.topology, readlines, [this, separator, options, callback], {
    skipSessions: true
  });
};

var readlines = function readlines(self, separator, options, callback) {
  self.read(function (err, data) {
    if (err) return callback(err);
    var items = data.toString().split(separator);
    items = items.length > 0 ? items.splice(0, items.length - 1) : [];

    for (var i = 0; i < items.length; i++) {
      items[i] = items[i] + separator;
    }

    callback(null, items);
  });
};
/**
 * Deletes all the chunks of this file in the database if mode was set to "w" or
 * "w+" and resets the read/write head to the initial position.
 *
 * @method
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~resultCallback} [callback] this will be called after executing this method. The first parameter will contain null and the second one will contain a reference to this object.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.rewind = function (options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {};
  return executeLegacyOperation(this.db.s.topology, rewind, [this, options, callback], {
    skipSessions: true
  });
};

var rewind = function rewind(self, options, callback) {
  if (self.currentChunk.chunkNumber !== 0) {
    if (self.mode[0] === 'w') {
      deleteChunks(self, function (err) {
        if (err) return callback(err);
        self.currentChunk = new Chunk(self, {
          n: 0
        }, self.writeConcern);
        self.position = 0;
        callback(null, self);
      });
    } else {
      self.currentChunk(0, function (err, chunk) {
        if (err) return callback(err);
        self.currentChunk = chunk;
        self.currentChunk.rewind();
        self.position = 0;
        callback(null, self);
      });
    }
  } else {
    self.currentChunk.rewind();
    self.position = 0;
    callback(null, self);
  }
};
/**
 * The read callback format.
 * @callback GridStore~readCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 * @param {Buffer} data The data read from the GridStore object
 */

/**
 * Retrieves the contents of this file and advances the read/write head. Works with Buffers only.
 *
 * There are 3 signatures for this method:
 *
 * (callback)
 * (length, callback)
 * (length, buffer, callback)
 *
 * @method
 * @param {number} [length] the number of characters to read. Reads all the characters from the read/write head to the EOF if not specified.
 * @param {(string|Buffer)} [buffer] a string to hold temporary data. This is used for storing the string data read so far when recursively calling this method.
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~readCallback} [callback] the command callback.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.read = function (length, buffer, options, callback) {
  var args = Array.prototype.slice.call(arguments, 0);
  callback = typeof args[args.length - 1] === 'function' ? args.pop() : undefined;
  length = args.length ? args.shift() : null;
  buffer = args.length ? args.shift() : null;
  options = args.length ? args.shift() : {};
  return executeLegacyOperation(this.db.s.topology, read, [this, length, buffer, options, callback], {
    skipSessions: true
  });
};

var read = function read(self, length, buffer, options, callback) {
  // The data is a c-terminated string and thus the length - 1
  var finalLength = length == null ? self.length - self.position : length;
  var finalBuffer = buffer == null ? Buffer.alloc(finalLength) : buffer; // Add a index to buffer to keep track of writing position or apply current index

  finalBuffer._index = buffer != null && buffer._index != null ? buffer._index : 0;

  if (self.currentChunk.length() - self.currentChunk.position + finalBuffer._index >= finalLength) {
    var slice = self.currentChunk.readSlice(finalLength - finalBuffer._index); // Copy content to final buffer

    slice.copy(finalBuffer, finalBuffer._index); // Update internal position

    self.position = self.position + finalBuffer.length; // Check if we don't have a file at all

    if (finalLength === 0 && finalBuffer.length === 0) return callback(MongoError.create({
      message: 'File does not exist',
      driver: true
    }), null); // Else return data

    return callback(null, finalBuffer);
  } // Read the next chunk


  slice = self.currentChunk.readSlice(self.currentChunk.length() - self.currentChunk.position); // Copy content to final buffer

  slice.copy(finalBuffer, finalBuffer._index); // Update index position

  finalBuffer._index += slice.length; // Load next chunk and read more

  nthChunk(self, self.currentChunk.chunkNumber + 1, function (err, chunk) {
    if (err) return callback(err);

    if (chunk.length() > 0) {
      self.currentChunk = chunk;
      self.read(length, finalBuffer, callback);
    } else {
      if (finalBuffer._index > 0) {
        callback(null, finalBuffer);
      } else {
        callback(MongoError.create({
          message: 'no chunks found for file, possibly corrupt',
          driver: true
        }), null);
      }
    }
  });
};
/**
 * The tell callback format.
 * @callback GridStore~tellCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 * @param {number} position The current read position in the GridStore.
 */

/**
 * Retrieves the position of the read/write head of this file.
 *
 * @method
 * @param {number} [length] the number of characters to read. Reads all the characters from the read/write head to the EOF if not specified.
 * @param {(string|Buffer)} [buffer] a string to hold temporary data. This is used for storing the string data read so far when recursively calling this method.
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~tellCallback} [callback] the command callback.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.tell = function (callback) {
  var self = this; // We provided a callback leg

  if (typeof callback === 'function') return callback(null, this.position); // Return promise

  return new self.promiseLibrary(function (resolve) {
    resolve(self.position);
  });
};
/**
 * The tell callback format.
 * @callback GridStore~gridStoreCallback
 * @param {MongoError} error An error instance representing the error during the execution.
 * @param {GridStore} gridStore The gridStore.
 */

/**
 * Moves the read/write head to a new location.
 *
 * There are 3 signatures for this method
 *
 * Seek Location Modes
 *  - **GridStore.IO_SEEK_SET**, **(default)** set the position from the start of the file.
 *  - **GridStore.IO_SEEK_CUR**, set the position from the current position in the file.
 *  - **GridStore.IO_SEEK_END**, set the position from the end of the file.
 *
 * @method
 * @param {number} [position] the position to seek to
 * @param {number} [seekLocation] seek mode. Use one of the Seek Location modes.
 * @param {object} [options] Optional settings
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~gridStoreCallback} [callback] the command callback.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.prototype.seek = function (position, seekLocation, options, callback) {
  var args = Array.prototype.slice.call(arguments, 1);
  callback = typeof args[args.length - 1] === 'function' ? args.pop() : undefined;
  seekLocation = args.length ? args.shift() : null;
  options = args.length ? args.shift() : {};
  return executeLegacyOperation(this.db.s.topology, seek, [this, position, seekLocation, options, callback], {
    skipSessions: true
  });
};

var seek = function seek(self, position, seekLocation, options, callback) {
  // Seek only supports read mode
  if (self.mode !== 'r') {
    return callback(MongoError.create({
      message: 'seek is only supported for mode r',
      driver: true
    }));
  }

  var seekLocationFinal = seekLocation == null ? GridStore.IO_SEEK_SET : seekLocation;
  var finalPosition = position;
  var targetPosition = 0; // Calculate the position

  if (seekLocationFinal === GridStore.IO_SEEK_CUR) {
    targetPosition = self.position + finalPosition;
  } else if (seekLocationFinal === GridStore.IO_SEEK_END) {
    targetPosition = self.length + finalPosition;
  } else {
    targetPosition = finalPosition;
  } // Get the chunk


  var newChunkNumber = Math.floor(targetPosition / self.chunkSize);

  var seekChunk = function seekChunk() {
    nthChunk(self, newChunkNumber, function (err, chunk) {
      if (err) return callback(err, null);
      if (chunk == null) return callback(new Error('no chunk found')); // Set the current chunk

      self.currentChunk = chunk;
      self.position = targetPosition;
      self.currentChunk.position = self.position % self.chunkSize;
      callback(err, self);
    });
  };

  seekChunk();
};
/**
 * @ignore
 */


var _open = function _open(self, options, callback) {
  var collection = self.collection(); // Create the query

  var query = self.referenceBy === REFERENCE_BY_ID ? {
    _id: self.fileId
  } : {
    filename: self.filename
  };
  query = null == self.fileId && self.filename == null ? null : query;
  options.readPreference = self.readPreference; // Fetch the chunks

  if (query != null) {
    collection.findOne(query, options, function (err, doc) {
      if (err) {
        return error(err);
      } // Check if the collection for the files exists otherwise prepare the new one


      if (doc != null) {
        self.fileId = doc._id; // Prefer a new filename over the existing one if this is a write

        self.filename = self.mode === 'r' || self.filename === undefined ? doc.filename : self.filename;
        self.contentType = doc.contentType;
        self.internalChunkSize = doc.chunkSize;
        self.uploadDate = doc.uploadDate;
        self.aliases = doc.aliases;
        self.length = doc.length;
        self.metadata = doc.metadata;
        self.internalMd5 = doc.md5;
      } else if (self.mode !== 'r') {
        self.fileId = self.fileId == null ? new ObjectID() : self.fileId;
        self.contentType = GridStore.DEFAULT_CONTENT_TYPE;
        self.internalChunkSize = self.internalChunkSize == null ? Chunk.DEFAULT_CHUNK_SIZE : self.internalChunkSize;
        self.length = 0;
      } else {
        self.length = 0;
        var txtId = self.fileId._bsontype === 'ObjectID' ? self.fileId.toHexString() : self.fileId;
        return error(MongoError.create({
          message: f('file with id %s not opened for writing', self.referenceBy === REFERENCE_BY_ID ? txtId : self.filename),
          driver: true
        }), self);
      } // Process the mode of the object


      if (self.mode === 'r') {
        nthChunk(self, 0, options, function (err, chunk) {
          if (err) return error(err);
          self.currentChunk = chunk;
          self.position = 0;
          callback(null, self);
        });
      } else if (self.mode === 'w' && doc) {
        // Delete any existing chunks
        deleteChunks(self, options, function (err) {
          if (err) return error(err);
          self.currentChunk = new Chunk(self, {
            n: 0
          }, self.writeConcern);
          self.contentType = self.options['content_type'] == null ? self.contentType : self.options['content_type'];
          self.internalChunkSize = self.options['chunk_size'] == null ? self.internalChunkSize : self.options['chunk_size'];
          self.metadata = self.options['metadata'] == null ? self.metadata : self.options['metadata'];
          self.aliases = self.options['aliases'] == null ? self.aliases : self.options['aliases'];
          self.position = 0;
          callback(null, self);
        });
      } else if (self.mode === 'w') {
        self.currentChunk = new Chunk(self, {
          n: 0
        }, self.writeConcern);
        self.contentType = self.options['content_type'] == null ? self.contentType : self.options['content_type'];
        self.internalChunkSize = self.options['chunk_size'] == null ? self.internalChunkSize : self.options['chunk_size'];
        self.metadata = self.options['metadata'] == null ? self.metadata : self.options['metadata'];
        self.aliases = self.options['aliases'] == null ? self.aliases : self.options['aliases'];
        self.position = 0;
        callback(null, self);
      } else if (self.mode === 'w+') {
        nthChunk(self, lastChunkNumber(self), options, function (err, chunk) {
          if (err) return error(err); // Set the current chunk

          self.currentChunk = chunk == null ? new Chunk(self, {
            n: 0
          }, self.writeConcern) : chunk;
          self.currentChunk.position = self.currentChunk.data.length();
          self.metadata = self.options['metadata'] == null ? self.metadata : self.options['metadata'];
          self.aliases = self.options['aliases'] == null ? self.aliases : self.options['aliases'];
          self.position = self.length;
          callback(null, self);
        });
      }
    });
  } else {
    // Write only mode
    self.fileId = null == self.fileId ? new ObjectID() : self.fileId;
    self.contentType = GridStore.DEFAULT_CONTENT_TYPE;
    self.internalChunkSize = self.internalChunkSize == null ? Chunk.DEFAULT_CHUNK_SIZE : self.internalChunkSize;
    self.length = 0; // No file exists set up write mode

    if (self.mode === 'w') {
      // Delete any existing chunks
      deleteChunks(self, options, function (err) {
        if (err) return error(err);
        self.currentChunk = new Chunk(self, {
          n: 0
        }, self.writeConcern);
        self.contentType = self.options['content_type'] == null ? self.contentType : self.options['content_type'];
        self.internalChunkSize = self.options['chunk_size'] == null ? self.internalChunkSize : self.options['chunk_size'];
        self.metadata = self.options['metadata'] == null ? self.metadata : self.options['metadata'];
        self.aliases = self.options['aliases'] == null ? self.aliases : self.options['aliases'];
        self.position = 0;
        callback(null, self);
      });
    } else if (self.mode === 'w+') {
      nthChunk(self, lastChunkNumber(self), options, function (err, chunk) {
        if (err) return error(err); // Set the current chunk

        self.currentChunk = chunk == null ? new Chunk(self, {
          n: 0
        }, self.writeConcern) : chunk;
        self.currentChunk.position = self.currentChunk.data.length();
        self.metadata = self.options['metadata'] == null ? self.metadata : self.options['metadata'];
        self.aliases = self.options['aliases'] == null ? self.aliases : self.options['aliases'];
        self.position = self.length;
        callback(null, self);
      });
    }
  } // only pass error to callback once


  function error(err) {
    if (error.err) return;
    callback(error.err = err);
  }
};
/**
 * @ignore
 */


var writeBuffer = function writeBuffer(self, buffer, close, callback) {
  if (typeof close === 'function') {
    callback = close;
    close = null;
  }

  var finalClose = typeof close === 'boolean' ? close : false;

  if (self.mode !== 'w') {
    callback(MongoError.create({
      message: f('file with id %s not opened for writing', self.referenceBy === REFERENCE_BY_ID ? self.referenceBy : self.filename),
      driver: true
    }), null);
  } else {
    if (self.currentChunk.position + buffer.length >= self.chunkSize) {
      // Write out the current Chunk and then keep writing until we have less data left than a chunkSize left
      // to a new chunk (recursively)
      var previousChunkNumber = self.currentChunk.chunkNumber;
      var leftOverDataSize = self.chunkSize - self.currentChunk.position;
      var firstChunkData = buffer.slice(0, leftOverDataSize);
      var leftOverData = buffer.slice(leftOverDataSize); // A list of chunks to write out

      var chunksToWrite = [self.currentChunk.write(firstChunkData)]; // If we have more data left than the chunk size let's keep writing new chunks

      while (leftOverData.length >= self.chunkSize) {
        // Create a new chunk and write to it
        var newChunk = new Chunk(self, {
          n: previousChunkNumber + 1
        }, self.writeConcern);
        firstChunkData = leftOverData.slice(0, self.chunkSize);
        leftOverData = leftOverData.slice(self.chunkSize); // Update chunk number

        previousChunkNumber = previousChunkNumber + 1; // Write data

        newChunk.write(firstChunkData); // Push chunk to save list

        chunksToWrite.push(newChunk);
      } // Set current chunk with remaining data


      self.currentChunk = new Chunk(self, {
        n: previousChunkNumber + 1
      }, self.writeConcern); // If we have left over data write it

      if (leftOverData.length > 0) self.currentChunk.write(leftOverData); // Update the position for the gridstore

      self.position = self.position + buffer.length; // Total number of chunks to write

      var numberOfChunksToWrite = chunksToWrite.length;

      for (var i = 0; i < chunksToWrite.length; i++) {
        chunksToWrite[i].save({}, function (err) {
          if (err) return callback(err);
          numberOfChunksToWrite = numberOfChunksToWrite - 1;

          if (numberOfChunksToWrite <= 0) {
            // We care closing the file before returning
            if (finalClose) {
              return self.close(function (err) {
                callback(err, self);
              });
            } // Return normally


            return callback(null, self);
          }
        });
      }
    } else {
      // Update the position for the gridstore
      self.position = self.position + buffer.length; // We have less data than the chunk size just write it and callback

      self.currentChunk.write(buffer); // We care closing the file before returning

      if (finalClose) {
        return self.close(function (err) {
          callback(err, self);
        });
      } // Return normally


      return callback(null, self);
    }
  }
};
/**
 * Creates a mongoDB object representation of this object.
 *
 *        <pre><code>
 *        {
 *          '_id' : , // {number} id for this file
 *          'filename' : , // {string} name for this file
 *          'contentType' : , // {string} mime type for this file
 *          'length' : , // {number} size of this file?
 *          'chunksize' : , // {number} chunk size used by this file
 *          'uploadDate' : , // {Date}
 *          'aliases' : , // {array of string}
 *          'metadata' : , // {string}
 *        }
 *        </code></pre>
 *
 * @ignore
 */


var buildMongoObject = function buildMongoObject(self, callback) {
  // Calcuate the length
  var mongoObject = {
    _id: self.fileId,
    filename: self.filename,
    contentType: self.contentType,
    length: self.position ? self.position : 0,
    chunkSize: self.chunkSize,
    uploadDate: self.uploadDate,
    aliases: self.aliases,
    metadata: self.metadata
  };
  var md5Command = {
    filemd5: self.fileId,
    root: self.root
  };
  self.db.command(md5Command, function (err, results) {
    if (err) return callback(err);
    mongoObject.md5 = results.md5;
    callback(null, mongoObject);
  });
};
/**
 * Gets the nth chunk of this file.
 * @ignore
 */


var nthChunk = function nthChunk(self, chunkNumber, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  options = options || self.writeConcern;
  options.readPreference = self.readPreference; // Get the nth chunk

  self.chunkCollection().findOne({
    files_id: self.fileId,
    n: chunkNumber
  }, options, function (err, chunk) {
    if (err) return callback(err);
    var finalChunk = chunk == null ? {} : chunk;
    callback(null, new Chunk(self, finalChunk, self.writeConcern));
  });
};
/**
 * @ignore
 */


var lastChunkNumber = function lastChunkNumber(self) {
  return Math.floor((self.length ? self.length - 1 : 0) / self.chunkSize);
};
/**
 * Deletes all the chunks of this file in the database.
 *
 * @ignore
 */


var deleteChunks = function deleteChunks(self, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  options = options || self.writeConcern;

  if (self.fileId != null) {
    self.chunkCollection().remove({
      files_id: self.fileId
    }, options, function (err) {
      if (err) return callback(err, false);
      callback(null, true);
    });
  } else {
    callback(null, true);
  }
};
/**
 * The collection to be used for holding the files and chunks collection.
 *
 * @classconstant DEFAULT_ROOT_COLLECTION
 */


GridStore.DEFAULT_ROOT_COLLECTION = 'fs';
/**
 * Default file mime type
 *
 * @classconstant DEFAULT_CONTENT_TYPE
 */

GridStore.DEFAULT_CONTENT_TYPE = 'binary/octet-stream';
/**
 * Seek mode where the given length is absolute.
 *
 * @classconstant IO_SEEK_SET
 */

GridStore.IO_SEEK_SET = 0;
/**
 * Seek mode where the given length is an offset to the current read/write head.
 *
 * @classconstant IO_SEEK_CUR
 */

GridStore.IO_SEEK_CUR = 1;
/**
 * Seek mode where the given length is an offset to the end of the file.
 *
 * @classconstant IO_SEEK_END
 */

GridStore.IO_SEEK_END = 2;
/**
 * Checks if a file exists in the database.
 *
 * @method
 * @static
 * @param {Db} db the database to query.
 * @param {string} name The name of the file to look for.
 * @param {string} [rootCollection] The root collection that holds the files and chunks collection. Defaults to **{GridStore.DEFAULT_ROOT_COLLECTION}**.
 * @param {object} [options] Optional settings.
 * @param {(ReadPreference|string)} [options.readPreference] The preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
 * @param {object} [options.promiseLibrary] A Promise library class the application wishes to use such as Bluebird, must be ES6 compatible
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~resultCallback} [callback] result from exists.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */

GridStore.exist = function (db, fileIdObject, rootCollection, options, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  callback = typeof args[args.length - 1] === 'function' ? args.pop() : undefined;
  rootCollection = args.length ? args.shift() : null;
  options = args.length ? args.shift() : {};
  options = options || {};
  return executeLegacyOperation(db.s.topology, exists, [db, fileIdObject, rootCollection, options, callback], {
    skipSessions: true
  });
};

var exists = function exists(db, fileIdObject, rootCollection, options, callback) {
  // Establish read preference
  var readPreference = options.readPreference || ReadPreference.PRIMARY; // Fetch collection

  var rootCollectionFinal = rootCollection != null ? rootCollection : GridStore.DEFAULT_ROOT_COLLECTION;
  db.collection(rootCollectionFinal + '.files', function (err, collection) {
    if (err) return callback(err); // Build query

    var query = typeof fileIdObject === 'string' || Object.prototype.toString.call(fileIdObject) === '[object RegExp]' ? {
      filename: fileIdObject
    } : {
      _id: fileIdObject
    }; // Attempt to locate file
    // We have a specific query

    if (fileIdObject != null && _typeof(fileIdObject) === 'object' && Object.prototype.toString.call(fileIdObject) !== '[object RegExp]') {
      query = fileIdObject;
    } // Check if the entry exists


    collection.findOne(query, {
      readPreference: readPreference
    }, function (err, item) {
      if (err) return callback(err);
      callback(null, item == null ? false : true);
    });
  });
};
/**
 * Gets the list of files stored in the GridFS.
 *
 * @method
 * @static
 * @param {Db} db the database to query.
 * @param {string} [rootCollection] The root collection that holds the files and chunks collection. Defaults to **{GridStore.DEFAULT_ROOT_COLLECTION}**.
 * @param {object} [options] Optional settings.
 * @param {(ReadPreference|string)} [options.readPreference] The preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
 * @param {object} [options.promiseLibrary] A Promise library class the application wishes to use such as Bluebird, must be ES6 compatible
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~resultCallback} [callback] result from exists.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.list = function (db, rootCollection, options, callback) {
  var args = Array.prototype.slice.call(arguments, 1);
  callback = typeof args[args.length - 1] === 'function' ? args.pop() : undefined;
  rootCollection = args.length ? args.shift() : null;
  options = args.length ? args.shift() : {};
  options = options || {};
  return executeLegacyOperation(db.s.topology, list, [db, rootCollection, options, callback], {
    skipSessions: true
  });
};

var list = function list(db, rootCollection, options, callback) {
  // Ensure we have correct values
  if (rootCollection != null && _typeof(rootCollection) === 'object') {
    options = rootCollection;
    rootCollection = null;
  } // Establish read preference


  var readPreference = options.readPreference || ReadPreference.primary; // Check if we are returning by id not filename

  var byId = options['id'] != null ? options['id'] : false; // Fetch item

  var rootCollectionFinal = rootCollection != null ? rootCollection : GridStore.DEFAULT_ROOT_COLLECTION;
  var items = [];
  db.collection(rootCollectionFinal + '.files', function (err, collection) {
    if (err) return callback(err);
    collection.find({}, {
      readPreference: readPreference
    }, function (err, cursor) {
      if (err) return callback(err);
      cursor.each(function (err, item) {
        if (item != null) {
          items.push(byId ? item._id : item.filename);
        } else {
          callback(err, items);
        }
      });
    });
  });
};
/**
 * Reads the contents of a file.
 *
 * This method has the following signatures
 *
 * (db, name, callback)
 * (db, name, length, callback)
 * (db, name, length, offset, callback)
 * (db, name, length, offset, options, callback)
 *
 * @method
 * @static
 * @param {Db} db the database to query.
 * @param {string} name The name of the file.
 * @param {number} [length] The size of data to read.
 * @param {number} [offset] The offset from the head of the file of which to start reading from.
 * @param {object} [options] Optional settings.
 * @param {(ReadPreference|string)} [options.readPreference] The preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
 * @param {object} [options.promiseLibrary] A Promise library class the application wishes to use such as Bluebird, must be ES6 compatible
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~readCallback} [callback] the command callback.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.read = function (db, name, length, offset, options, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  callback = typeof args[args.length - 1] === 'function' ? args.pop() : undefined;
  length = args.length ? args.shift() : null;
  offset = args.length ? args.shift() : null;
  options = args.length ? args.shift() : null;
  options = options || {};
  return executeLegacyOperation(db.s.topology, readStatic, [db, name, length, offset, options, callback], {
    skipSessions: true
  });
};

var readStatic = function readStatic(db, name, length, offset, options, callback) {
  new GridStore(db, name, 'r', options).open(function (err, gridStore) {
    if (err) return callback(err); // Make sure we are not reading out of bounds

    if (offset && offset >= gridStore.length) return callback('offset larger than size of file', null);
    if (length && length > gridStore.length) return callback('length is larger than the size of the file', null);
    if (offset && length && offset + length > gridStore.length) return callback('offset and length is larger than the size of the file', null);

    if (offset != null) {
      gridStore.seek(offset, function (err, gridStore) {
        if (err) return callback(err);
        gridStore.read(length, callback);
      });
    } else {
      gridStore.read(length, callback);
    }
  });
};
/**
 * Read the entire file as a list of strings splitting by the provided separator.
 *
 * @method
 * @static
 * @param {Db} db the database to query.
 * @param {(String|object)} name the name of the file.
 * @param {string} [separator] The character to be recognized as the newline separator.
 * @param {object} [options] Optional settings.
 * @param {(ReadPreference|string)} [options.readPreference] The preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
 * @param {object} [options.promiseLibrary] A Promise library class the application wishes to use such as Bluebird, must be ES6 compatible
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~readlinesCallback} [callback] the command callback.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.readlines = function (db, name, separator, options, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  callback = typeof args[args.length - 1] === 'function' ? args.pop() : undefined;
  separator = args.length ? args.shift() : null;
  options = args.length ? args.shift() : null;
  options = options || {};
  return executeLegacyOperation(db.s.topology, readlinesStatic, [db, name, separator, options, callback], {
    skipSessions: true
  });
};

var readlinesStatic = function readlinesStatic(db, name, separator, options, callback) {
  var finalSeperator = separator == null ? '\n' : separator;
  new GridStore(db, name, 'r', options).open(function (err, gridStore) {
    if (err) return callback(err);
    gridStore.readlines(finalSeperator, callback);
  });
};
/**
 * Deletes the chunks and metadata information of a file from GridFS.
 *
 * @method
 * @static
 * @param {Db} db The database to query.
 * @param {(string|array)} names The name/names of the files to delete.
 * @param {object} [options] Optional settings.
 * @param {object} [options.promiseLibrary] A Promise library class the application wishes to use such as Bluebird, must be ES6 compatible
 * @param {ClientSession} [options.session] optional session to use for this operation
 * @param {GridStore~resultCallback} [callback] the command callback.
 * @return {Promise} returns Promise if no callback passed
 * @deprecated Use GridFSBucket API instead
 */


GridStore.unlink = function (db, names, options, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  callback = typeof args[args.length - 1] === 'function' ? args.pop() : undefined;
  options = args.length ? args.shift() : {};
  options = options || {};
  return executeLegacyOperation(db.s.topology, unlinkStatic, [this, db, names, options, callback], {
    skipSessions: true
  });
};

var unlinkStatic = function unlinkStatic(self, db, names, options, callback) {
  // Get the write concern
  var writeConcern = _getWriteConcern(db, options); // List of names


  if (names.constructor === Array) {
    var tc = 0;

    for (var i = 0; i < names.length; i++) {
      ++tc;
      GridStore.unlink(db, names[i], options, function () {
        if (--tc === 0) {
          callback(null, self);
        }
      });
    }
  } else {
    new GridStore(db, names, 'w', options).open(function (err, gridStore) {
      if (err) return callback(err);
      deleteChunks(gridStore, function (err) {
        if (err) return callback(err);
        gridStore.collection(function (err, collection) {
          if (err) return callback(err);
          collection.remove({
            _id: gridStore.fileId
          }, writeConcern, function (err) {
            callback(err, self);
          });
        });
      });
    });
  }
};
/**
 *  @ignore
 */


var _writeNormal = function _writeNormal(self, data, close, options, callback) {
  // If we have a buffer write it using the writeBuffer method
  if (Buffer.isBuffer(data)) {
    return writeBuffer(self, data, close, callback);
  } else {
    return writeBuffer(self, Buffer.from(data, 'binary'), close, callback);
  }
};
/**
 * @ignore
 */


var _setWriteConcernHash = function _setWriteConcernHash(options) {
  var finalOptions = {};
  if (options.w != null) finalOptions.w = options.w;
  if (options.journal === true) finalOptions.j = options.journal;
  if (options.j === true) finalOptions.j = options.j;
  if (options.fsync === true) finalOptions.fsync = options.fsync;
  if (options.wtimeout != null) finalOptions.wtimeout = options.wtimeout;
  return finalOptions;
};
/**
 * @ignore
 */


var _getWriteConcern = function _getWriteConcern(self, options) {
  // Final options
  var finalOptions = {
    w: 1
  };
  options = options || {}; // Local options verification

  if (options.w != null || typeof options.j === 'boolean' || typeof options.journal === 'boolean' || typeof options.fsync === 'boolean') {
    finalOptions = _setWriteConcernHash(options);
  } else if (options.safe != null && _typeof(options.safe) === 'object') {
    finalOptions = _setWriteConcernHash(options.safe);
  } else if (typeof options.safe === 'boolean') {
    finalOptions = {
      w: options.safe ? 1 : 0
    };
  } else if (self.options.w != null || typeof self.options.j === 'boolean' || typeof self.options.journal === 'boolean' || typeof self.options.fsync === 'boolean') {
    finalOptions = _setWriteConcernHash(self.options);
  } else if (self.safe && (self.safe.w != null || typeof self.safe.j === 'boolean' || typeof self.safe.journal === 'boolean' || typeof self.safe.fsync === 'boolean')) {
    finalOptions = _setWriteConcernHash(self.safe);
  } else if (typeof self.safe === 'boolean') {
    finalOptions = {
      w: self.safe ? 1 : 0
    };
  } // Ensure we don't have an invalid combination of write concerns


  if (finalOptions.w < 1 && (finalOptions.journal === true || finalOptions.j === true || finalOptions.fsync === true)) throw MongoError.create({
    message: 'No acknowledgement using w < 1 cannot be combined with journal:true or fsync:true',
    driver: true
  }); // Return the options

  return finalOptions;
};
/**
 * Create a new GridStoreStream instance (INTERNAL TYPE, do not instantiate directly)
 *
 * @class
 * @extends external:Duplex
 * @return {GridStoreStream} a GridStoreStream instance.
 * @deprecated Use GridFSBucket API instead
 */


var GridStoreStream = function GridStoreStream(gs) {
  // Initialize the duplex stream
  Duplex.call(this); // Get the gridstore

  this.gs = gs; // End called

  this.endCalled = false; // If we have a seek

  this.totalBytesToRead = this.gs.length - this.gs.position;
  this.seekPosition = this.gs.position;
}; //
// Inherit duplex


inherits(GridStoreStream, Duplex);
GridStoreStream.prototype._pipe = GridStoreStream.prototype.pipe; // Set up override

GridStoreStream.prototype.pipe = function (destination) {
  var self = this; // Only open gridstore if not already open

  if (!self.gs.isOpen) {
    self.gs.open(function (err) {
      if (err) return self.emit('error', err);
      self.totalBytesToRead = self.gs.length - self.gs.position;

      self._pipe.apply(self, [destination]);
    });
  } else {
    self.totalBytesToRead = self.gs.length - self.gs.position;

    self._pipe.apply(self, [destination]);
  }

  return destination;
}; // Called by stream


GridStoreStream.prototype._read = function () {
  var self = this;

  var read = function read() {
    // Read data
    self.gs.read(length, function (err, buffer) {
      if (err && !self.endCalled) return self.emit('error', err); // Stream is closed

      if (self.endCalled || buffer == null) return self.push(null); // Remove bytes read

      if (buffer.length <= self.totalBytesToRead) {
        self.totalBytesToRead = self.totalBytesToRead - buffer.length;
        self.push(buffer);
      } else if (buffer.length > self.totalBytesToRead) {
        self.totalBytesToRead = self.totalBytesToRead - buffer._index;
        self.push(buffer.slice(0, buffer._index));
      } // Finished reading


      if (self.totalBytesToRead <= 0) {
        self.endCalled = true;
      }
    });
  }; // Set read length


  var length = self.gs.length < self.gs.chunkSize ? self.gs.length - self.seekPosition : self.gs.chunkSize;

  if (!self.gs.isOpen) {
    self.gs.open(function (err) {
      self.totalBytesToRead = self.gs.length - self.gs.position;
      if (err) return self.emit('error', err);
      read();
    });
  } else {
    read();
  }
};

GridStoreStream.prototype.destroy = function () {
  this.pause();
  this.endCalled = true;
  this.gs.close();
  this.emit('end');
};

GridStoreStream.prototype.write = function (chunk) {
  var self = this;
  if (self.endCalled) return self.emit('error', MongoError.create({
    message: 'attempting to write to stream after end called',
    driver: true
  })); // Do we have to open the gridstore

  if (!self.gs.isOpen) {
    self.gs.open(function () {
      self.gs.isOpen = true;
      self.gs.write(chunk, function () {
        process.nextTick(function () {
          self.emit('drain');
        });
      });
    });
    return false;
  } else {
    self.gs.write(chunk, function () {
      self.emit('drain');
    });
    return true;
  }
};

GridStoreStream.prototype.end = function (chunk, encoding, callback) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 0);
  callback = typeof args[args.length - 1] === 'function' ? args.pop() : undefined;
  chunk = args.length ? args.shift() : null;
  encoding = args.length ? args.shift() : null;
  self.endCalled = true;

  if (chunk) {
    self.gs.write(chunk, function () {
      self.gs.close(function () {
        if (typeof callback === 'function') callback();
        self.emit('end');
      });
    });
  }

  self.gs.close(function () {
    if (typeof callback === 'function') callback();
    self.emit('end');
  });
};
/**
 * The read() method pulls some data out of the internal buffer and returns it. If there is no data available, then it will return null.
 * @function external:Duplex#read
 * @param {number} size Optional argument to specify how much data to read.
 * @return {(String | Buffer | null)}
 */

/**
 * Call this function to cause the stream to return strings of the specified encoding instead of Buffer objects.
 * @function external:Duplex#setEncoding
 * @param {string} encoding The encoding to use.
 * @return {null}
 */

/**
 * This method will cause the readable stream to resume emitting data events.
 * @function external:Duplex#resume
 * @return {null}
 */

/**
 * This method will cause a stream in flowing-mode to stop emitting data events. Any data that becomes available will remain in the internal buffer.
 * @function external:Duplex#pause
 * @return {null}
 */

/**
 * This method pulls all the data out of a readable stream, and writes it to the supplied destination, automatically managing the flow so that the destination is not overwhelmed by a fast readable stream.
 * @function external:Duplex#pipe
 * @param {Writable} destination The destination for writing data
 * @param {object} [options] Pipe options
 * @return {null}
 */

/**
 * This method will remove the hooks set up for a previous pipe() call.
 * @function external:Duplex#unpipe
 * @param {Writable} [destination] The destination for writing data
 * @return {null}
 */

/**
 * This is useful in certain cases where a stream is being consumed by a parser, which needs to "un-consume" some data that it has optimistically pulled out of the source, so that the stream can be passed on to some other party.
 * @function external:Duplex#unshift
 * @param {(Buffer|string)} chunk Chunk of data to unshift onto the read queue.
 * @return {null}
 */

/**
 * Versions of Node prior to v0.10 had streams that did not implement the entire Streams API as it is today. (See "Compatibility" below for more information.)
 * @function external:Duplex#wrap
 * @param {Stream} stream An "old style" readable stream.
 * @return {null}
 */

/**
 * This method writes some data to the underlying system, and calls the supplied callback once the data has been fully handled.
 * @function external:Duplex#write
 * @param {(string|Buffer)} chunk The data to write
 * @param {string} encoding The encoding, if chunk is a String
 * @param {function} callback Callback for when this chunk of data is flushed
 * @return {boolean}
 */

/**
 * Call this method when no more data will be written to the stream. If supplied, the callback is attached as a listener on the finish event.
 * @function external:Duplex#end
 * @param {(string|Buffer)} chunk The data to write
 * @param {string} encoding The encoding, if chunk is a String
 * @param {function} callback Callback for when this chunk of data is flushed
 * @return {null}
 */

/**
 * GridStoreStream stream data event, fired for each document in the cursor.
 *
 * @event GridStoreStream#data
 * @type {object}
 */

/**
 * GridStoreStream stream end event
 *
 * @event GridStoreStream#end
 * @type {null}
 */

/**
 * GridStoreStream stream close event
 *
 * @event GridStoreStream#close
 * @type {null}
 */

/**
 * GridStoreStream stream readable event
 *
 * @event GridStoreStream#readable
 * @type {null}
 */

/**
 * GridStoreStream stream drain event
 *
 * @event GridStoreStream#drain
 * @type {null}
 */

/**
 * GridStoreStream stream finish event
 *
 * @event GridStoreStream#finish
 * @type {null}
 */

/**
 * GridStoreStream stream pipe event
 *
 * @event GridStoreStream#pipe
 * @type {null}
 */

/**
 * GridStoreStream stream unpipe event
 *
 * @event GridStoreStream#unpipe
 * @type {null}
 */

/**
 * GridStoreStream stream error event
 *
 * @event GridStoreStream#error
 * @type {null}
 */

/**
 * @ignore
 */


module.exports = GridStore;