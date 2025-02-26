'use strict';

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.define-property");

var Binary = require('../core').BSON.Binary,
    ObjectID = require('../core').BSON.ObjectID;

var Buffer = require('safe-buffer').Buffer;
/**
 * Class for representing a single chunk in GridFS.
 *
 * @class
 *
 * @param file {GridStore} The {@link GridStore} object holding this chunk.
 * @param mongoObject {object} The mongo object representation of this chunk.
 *
 * @throws Error when the type of data field for {@link mongoObject} is not
 *     supported. Currently supported types for data field are instances of
 *     {@link String}, {@link Array}, {@link Binary} and {@link Binary}
 *     from the bson module
 *
 * @see Chunk#buildMongoObject
 */


var Chunk = function Chunk(file, mongoObject, writeConcern) {
  if (!(this instanceof Chunk)) return new Chunk(file, mongoObject);
  this.file = file;
  var mongoObjectFinal = mongoObject == null ? {} : mongoObject;
  this.writeConcern = writeConcern || {
    w: 1
  };
  this.objectId = mongoObjectFinal._id == null ? new ObjectID() : mongoObjectFinal._id;
  this.chunkNumber = mongoObjectFinal.n == null ? 0 : mongoObjectFinal.n;
  this.data = new Binary();

  if (typeof mongoObjectFinal.data === 'string') {
    var buffer = Buffer.alloc(mongoObjectFinal.data.length);
    buffer.write(mongoObjectFinal.data, 0, mongoObjectFinal.data.length, 'binary');
    this.data = new Binary(buffer);
  } else if (Array.isArray(mongoObjectFinal.data)) {
    buffer = Buffer.alloc(mongoObjectFinal.data.length);
    var data = mongoObjectFinal.data.join('');
    buffer.write(data, 0, data.length, 'binary');
    this.data = new Binary(buffer);
  } else if (mongoObjectFinal.data && mongoObjectFinal.data._bsontype === 'Binary') {
    this.data = mongoObjectFinal.data;
  } else if (!Buffer.isBuffer(mongoObjectFinal.data) && !(mongoObjectFinal.data == null)) {
    throw Error('Illegal chunk format');
  } // Update position


  this.internalPosition = 0;
};
/**
 * Writes a data to this object and advance the read/write head.
 *
 * @param data {string} the data to write
 * @param callback {function(*, GridStore)} This will be called after executing
 *     this method. The first parameter will contain null and the second one
 *     will contain a reference to this object.
 */


Chunk.prototype.write = function (data, callback) {
  this.data.write(data, this.internalPosition, data.length, 'binary');
  this.internalPosition = this.data.length();
  if (callback != null) return callback(null, this);
  return this;
};
/**
 * Reads data and advances the read/write head.
 *
 * @param length {number} The length of data to read.
 *
 * @return {string} The data read if the given length will not exceed the end of
 *     the chunk. Returns an empty String otherwise.
 */


Chunk.prototype.read = function (length) {
  // Default to full read if no index defined
  length = length == null || length === 0 ? this.length() : length;

  if (this.length() - this.internalPosition + 1 >= length) {
    var data = this.data.read(this.internalPosition, length);
    this.internalPosition = this.internalPosition + length;
    return data;
  } else {
    return '';
  }
};

Chunk.prototype.readSlice = function (length) {
  if (this.length() - this.internalPosition >= length) {
    var data = null;

    if (this.data.buffer != null) {
      //Pure BSON
      data = this.data.buffer.slice(this.internalPosition, this.internalPosition + length);
    } else {
      //Native BSON
      data = Buffer.alloc(length);
      length = this.data.readInto(data, this.internalPosition);
    }

    this.internalPosition = this.internalPosition + length;
    return data;
  } else {
    return null;
  }
};
/**
 * Checks if the read/write head is at the end.
 *
 * @return {boolean} Whether the read/write head has reached the end of this
 *     chunk.
 */


Chunk.prototype.eof = function () {
  return this.internalPosition === this.length() ? true : false;
};
/**
 * Reads one character from the data of this chunk and advances the read/write
 * head.
 *
 * @return {string} a single character data read if the the read/write head is
 *     not at the end of the chunk. Returns an empty String otherwise.
 */


Chunk.prototype.getc = function () {
  return this.read(1);
};
/**
 * Clears the contents of the data in this chunk and resets the read/write head
 * to the initial position.
 */


Chunk.prototype.rewind = function () {
  this.internalPosition = 0;
  this.data = new Binary();
};
/**
 * Saves this chunk to the database. Also overwrites existing entries having the
 * same id as this chunk.
 *
 * @param callback {function(*, GridStore)} This will be called after executing
 *     this method. The first parameter will contain null and the second one
 *     will contain a reference to this object.
 */


Chunk.prototype.save = function (options, callback) {
  var self = this;

  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  self.file.chunkCollection(function (err, collection) {
    if (err) return callback(err); // Merge the options

    var writeOptions = {
      upsert: true
    };

    for (var name in options) {
      writeOptions[name] = options[name];
    }

    for (name in self.writeConcern) {
      writeOptions[name] = self.writeConcern[name];
    }

    if (self.data.length() > 0) {
      self.buildMongoObject(function (mongoObject) {
        var options = {
          forceServerObjectId: true
        };

        for (var name in self.writeConcern) {
          options[name] = self.writeConcern[name];
        }

        collection.replaceOne({
          _id: self.objectId
        }, mongoObject, writeOptions, function (err) {
          callback(err, self);
        });
      });
    } else {
      callback(null, self);
    } // });

  });
};
/**
 * Creates a mongoDB object representation of this chunk.
 *
 * @param callback {function(Object)} This will be called after executing this
 *     method. The object will be passed to the first parameter and will have
 *     the structure:
 *
 *        <pre><code>
 *        {
 *          '_id' : , // {number} id for this chunk
 *          'files_id' : , // {number} foreign key to the file collection
 *          'n' : , // {number} chunk number
 *          'data' : , // {bson#Binary} the chunk data itself
 *        }
 *        </code></pre>
 *
 * @see <a href="http://www.mongodb.org/display/DOCS/GridFS+Specification#GridFSSpecification-{{chunks}}">MongoDB GridFS Chunk Object Structure</a>
 */


Chunk.prototype.buildMongoObject = function (callback) {
  var mongoObject = {
    files_id: this.file.fileId,
    n: this.chunkNumber,
    data: this.data
  }; // If we are saving using a specific ObjectId

  if (this.objectId != null) mongoObject._id = this.objectId;
  callback(mongoObject);
};
/**
 * @return {number} the length of the data
 */


Chunk.prototype.length = function () {
  return this.data.length();
};
/**
 * The position of the read/write head
 * @name position
 * @lends Chunk#
 * @field
 */


Object.defineProperty(Chunk.prototype, 'position', {
  enumerable: true,
  get: function get() {
    return this.internalPosition;
  },
  set: function set(value) {
    this.internalPosition = value;
  }
});
/**
 * The default chunk size
 * @constant
 */

Chunk.DEFAULT_CHUNK_SIZE = 1024 * 255;
module.exports = Chunk;