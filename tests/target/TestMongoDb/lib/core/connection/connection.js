'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EventEmitter = require('events').EventEmitter;

var crypto = require('crypto');

var debugOptions = require('./utils').debugOptions;

var parseHeader = require('../wireprotocol/shared').parseHeader;

var decompress = require('../wireprotocol/compression').decompress;

var Response = require('./commands').Response;

var BinMsg = require('./msg').BinMsg;

var MongoNetworkError = require('../error').MongoNetworkError;

var MongoError = require('../error').MongoError;

var Logger = require('./logger');

var OP_COMPRESSED = require('../wireprotocol/shared').opcodes.OP_COMPRESSED;

var OP_MSG = require('../wireprotocol/shared').opcodes.OP_MSG;

var MESSAGE_HEADER_SIZE = require('../wireprotocol/shared').MESSAGE_HEADER_SIZE;

var Buffer = require('safe-buffer').Buffer;

var _id = 0;
var DEFAULT_MAX_BSON_MESSAGE_SIZE = 1024 * 1024 * 16 * 4;
var DEBUG_FIELDS = ['host', 'port', 'size', 'keepAlive', 'keepAliveInitialDelay', 'noDelay', 'connectionTimeout', 'socketTimeout', 'ssl', 'ca', 'crl', 'cert', 'rejectUnauthorized', 'promoteLongs', 'promoteValues', 'promoteBuffers', 'checkServerIdentity'];
var connectionAccountingSpy = undefined;
var connectionAccounting = false;
var _connections = {};
/**
 * A class representing a single connection to a MongoDB server
 *
 * @fires Connection#connect
 * @fires Connection#close
 * @fires Connection#error
 * @fires Connection#timeout
 * @fires Connection#parseError
 * @fires Connection#message
 */

var Connection =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Connection, _EventEmitter);

  /**
   * Creates a new Connection instance
   *
   * **NOTE**: Internal class, do not instantiate directly
   *
   * @param {Socket} socket The socket this connection wraps
   * @param {Object} options Various settings
   * @param {object} options.bson An implementation of bson serialize and deserialize
   * @param {string} [options.host='localhost'] The host the socket is connected to
   * @param {number} [options.port=27017] The port used for the socket connection
   * @param {boolean} [options.keepAlive=true] TCP Connection keep alive enabled
   * @param {number} [options.keepAliveInitialDelay=300000] Initial delay before TCP keep alive enabled
   * @param {number} [options.connectionTimeout=30000] TCP Connection timeout setting
   * @param {number} [options.socketTimeout=360000] TCP Socket timeout setting
   * @param {boolean} [options.promoteLongs] Convert Long values from the db into Numbers if they fit into 53 bits
   * @param {boolean} [options.promoteValues] Promotes BSON values to native types where possible, set to false to only receive wrapper types.
   * @param {boolean} [options.promoteBuffers] Promotes Binary BSON values to native Node Buffers.
   * @param {number} [options.maxBsonMessageSize=0x4000000] Largest possible size of a BSON message (for legacy purposes)
   */
  function Connection(socket, options) {
    var _this;

    _classCallCheck(this, Connection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Connection).call(this));
    options = options || {};

    if (!options.bson) {
      throw new TypeError('must pass in valid bson parser');
    }

    _this.id = _id++;
    _this.options = options;
    _this.logger = Logger('Connection', options);
    _this.bson = options.bson;
    _this.tag = options.tag;
    _this.maxBsonMessageSize = options.maxBsonMessageSize || DEFAULT_MAX_BSON_MESSAGE_SIZE;
    _this.port = options.port || 27017;
    _this.host = options.host || 'localhost';
    _this.socketTimeout = typeof options.socketTimeout === 'number' ? options.socketTimeout : 360000; // These values are inspected directly in tests, but maybe not necessary to keep around

    _this.keepAlive = typeof options.keepAlive === 'boolean' ? options.keepAlive : true;
    _this.keepAliveInitialDelay = typeof options.keepAliveInitialDelay === 'number' ? options.keepAliveInitialDelay : 300000;
    _this.connectionTimeout = typeof options.connectionTimeout === 'number' ? options.connectionTimeout : 30000;

    if (_this.keepAliveInitialDelay > _this.socketTimeout) {
      _this.keepAliveInitialDelay = Math.round(_this.socketTimeout / 2);
    } // Debug information


    if (_this.logger.isDebug()) {
      _this.logger.debug("creating connection ".concat(_this.id, " with options [").concat(JSON.stringify(debugOptions(DEBUG_FIELDS, options)), "]"));
    } // Response options


    _this.responseOptions = {
      promoteLongs: typeof options.promoteLongs === 'boolean' ? options.promoteLongs : true,
      promoteValues: typeof options.promoteValues === 'boolean' ? options.promoteValues : true,
      promoteBuffers: typeof options.promoteBuffers === 'boolean' ? options.promoteBuffers : false
    }; // Flushing

    _this.flushing = false;
    _this.queue = []; // Internal state

    _this.writeStream = null;
    _this.destroyed = false; // Create hash method

    var hash = crypto.createHash('sha1');
    hash.update(_this.address);
    _this.hashedName = hash.digest('hex'); // All operations in flight on the connection

    _this.workItems = []; // setup socket

    _this.socket = socket;

    _this.socket.once('error', errorHandler(_assertThisInitialized(_this)));

    _this.socket.once('timeout', timeoutHandler(_assertThisInitialized(_this)));

    _this.socket.once('close', closeHandler(_assertThisInitialized(_this)));

    _this.socket.on('data', dataHandler(_assertThisInitialized(_this)));

    if (connectionAccounting) {
      addConnection(_this.id, _assertThisInitialized(_this));
    }

    return _this;
  }

  _createClass(Connection, [{
    key: "setSocketTimeout",
    value: function setSocketTimeout(value) {
      if (this.socket) {
        this.socket.setTimeout(value);
      }
    }
  }, {
    key: "resetSocketTimeout",
    value: function resetSocketTimeout() {
      if (this.socket) {
        this.socket.setTimeout(this.socketTimeout);
      }
    }
  }, {
    key: "unref",

    /**
     * Unref this connection
     * @method
     * @return {boolean}
     */
    value: function unref() {
      var _this2 = this;

      if (this.socket == null) {
        this.once('connect', function () {
          return _this2.socket.unref();
        });
        return;
      }

      this.socket.unref();
    }
    /**
     * Destroy connection
     * @method
     */

  }, {
    key: "destroy",
    value: function destroy(options, callback) {
      var _this3 = this;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      options = Object.assign({
        force: false
      }, options);

      if (connectionAccounting) {
        deleteConnection(this.id);
      }

      if (this.socket == null) {
        this.destroyed = true;
        return;
      }

      if (options.force) {
        this.socket.destroy();
        this.destroyed = true;
        if (typeof callback === 'function') callback(null, null);
        return;
      }

      this.socket.end(function (err) {
        _this3.destroyed = true;
        if (typeof callback === 'function') callback(err, null);
      });
    }
    /**
     * Write to connection
     * @method
     * @param {Command} command Command to write out need to implement toBin and toBinUnified
     */

  }, {
    key: "write",
    value: function write(buffer) {
      // Debug Log
      if (this.logger.isDebug()) {
        if (!Array.isArray(buffer)) {
          this.logger.debug("writing buffer [".concat(buffer.toString('hex'), "] to ").concat(this.address));
        } else {
          for (var i = 0; i < buffer.length; i++) {
            this.logger.debug("writing buffer [".concat(buffer[i].toString('hex'), "] to ").concat(this.address));
          }
        }
      } // Double check that the connection is not destroyed


      if (this.socket.destroyed === false) {
        // Write out the command
        if (!Array.isArray(buffer)) {
          this.socket.write(buffer, 'binary');
          return true;
        } // Iterate over all buffers and write them in order to the socket


        for (var _i = 0; _i < buffer.length; _i++) {
          this.socket.write(buffer[_i], 'binary');
        }

        return true;
      } // Connection is destroyed return write failed


      return false;
    }
    /**
     * Return id of connection as a string
     * @method
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return '' + this.id;
    }
    /**
     * Return json object of connection
     * @method
     * @return {object}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        id: this.id,
        host: this.host,
        port: this.port
      };
    }
    /**
     * Is the connection connected
     * @method
     * @return {boolean}
     */

  }, {
    key: "isConnected",
    value: function isConnected() {
      if (this.destroyed) return false;
      return !this.socket.destroyed && this.socket.writable;
    }
  }, {
    key: "address",
    get: function get() {
      return "".concat(this.host, ":").concat(this.port);
    }
  }], [{
    key: "enableConnectionAccounting",
    value: function enableConnectionAccounting(spy) {
      if (spy) {
        connectionAccountingSpy = spy;
      }

      connectionAccounting = true;
      _connections = {};
    }
  }, {
    key: "disableConnectionAccounting",
    value: function disableConnectionAccounting() {
      connectionAccounting = false;
      connectionAccountingSpy = undefined;
    }
  }, {
    key: "connections",
    value: function connections() {
      return _connections;
    }
  }]);

  return Connection;
}(EventEmitter);

function deleteConnection(id) {
  // console.log("=== deleted connection " + id + " :: " + (connections[id] ? connections[id].port : ''))
  delete _connections[id];

  if (connectionAccountingSpy) {
    connectionAccountingSpy.deleteConnection(id);
  }
}

function addConnection(id, connection) {
  // console.log("=== added connection " + id + " :: " + connection.port)
  _connections[id] = connection;

  if (connectionAccountingSpy) {
    connectionAccountingSpy.addConnection(id, connection);
  }
} //
// Connection handlers


function errorHandler(conn) {
  return function (err) {
    if (connectionAccounting) deleteConnection(conn.id); // Debug information

    if (conn.logger.isDebug()) {
      conn.logger.debug("connection ".concat(conn.id, " for [").concat(conn.address, "] errored out with [").concat(JSON.stringify(err), "]"));
    }

    conn.emit('error', new MongoNetworkError(err), conn);
  };
}

function timeoutHandler(conn) {
  return function () {
    if (connectionAccounting) deleteConnection(conn.id);

    if (conn.logger.isDebug()) {
      conn.logger.debug("connection ".concat(conn.id, " for [").concat(conn.address, "] timed out"));
    }

    conn.emit('timeout', new MongoNetworkError("connection ".concat(conn.id, " to ").concat(conn.address, " timed out")), conn);
  };
}

function closeHandler(conn) {
  return function (hadError) {
    if (connectionAccounting) deleteConnection(conn.id);

    if (conn.logger.isDebug()) {
      conn.logger.debug("connection ".concat(conn.id, " with for [").concat(conn.address, "] closed"));
    }

    if (!hadError) {
      conn.emit('close', new MongoNetworkError("connection ".concat(conn.id, " to ").concat(conn.address, " closed")), conn);
    }
  };
} // Handle a message once it is received


function processMessage(conn, message) {
  var msgHeader = parseHeader(message);

  if (msgHeader.opCode !== OP_COMPRESSED) {
    var ResponseConstructor = msgHeader.opCode === OP_MSG ? BinMsg : Response;
    conn.emit('message', new ResponseConstructor(conn.bson, message, msgHeader, message.slice(MESSAGE_HEADER_SIZE), conn.responseOptions), conn);
    return;
  }

  msgHeader.fromCompressed = true;
  var index = MESSAGE_HEADER_SIZE;
  msgHeader.opCode = message.readInt32LE(index);
  index += 4;
  msgHeader.length = message.readInt32LE(index);
  index += 4;
  var compressorID = message[index];
  index++;
  decompress(compressorID, message.slice(index), function (err, decompressedMsgBody) {
    if (err) {
      conn.emit('error', err);
      return;
    }

    if (decompressedMsgBody.length !== msgHeader.length) {
      conn.emit('error', new MongoError('Decompressing a compressed message from the server failed. The message is corrupt.'));
      return;
    }

    var ResponseConstructor = msgHeader.opCode === OP_MSG ? BinMsg : Response;
    conn.emit('message', new ResponseConstructor(conn.bson, message, msgHeader, decompressedMsgBody, conn.responseOptions), conn);
  });
}

function dataHandler(conn) {
  return function (data) {
    // Parse until we are done with the data
    while (data.length > 0) {
      // If we still have bytes to read on the current message
      if (conn.bytesRead > 0 && conn.sizeOfMessage > 0) {
        // Calculate the amount of remaining bytes
        var remainingBytesToRead = conn.sizeOfMessage - conn.bytesRead; // Check if the current chunk contains the rest of the message

        if (remainingBytesToRead > data.length) {
          // Copy the new data into the exiting buffer (should have been allocated when we know the message size)
          data.copy(conn.buffer, conn.bytesRead); // Adjust the number of bytes read so it point to the correct index in the buffer

          conn.bytesRead = conn.bytesRead + data.length; // Reset state of buffer

          data = Buffer.alloc(0);
        } else {
          // Copy the missing part of the data into our current buffer
          data.copy(conn.buffer, conn.bytesRead, 0, remainingBytesToRead); // Slice the overflow into a new buffer that we will then re-parse

          data = data.slice(remainingBytesToRead); // Emit current complete message

          var emitBuffer = conn.buffer; // Reset state of buffer

          conn.buffer = null;
          conn.sizeOfMessage = 0;
          conn.bytesRead = 0;
          conn.stubBuffer = null;
          processMessage(conn, emitBuffer);
        }
      } else {
        // Stub buffer is kept in case we don't get enough bytes to determine the
        // size of the message (< 4 bytes)
        if (conn.stubBuffer != null && conn.stubBuffer.length > 0) {
          // If we have enough bytes to determine the message size let's do it
          if (conn.stubBuffer.length + data.length > 4) {
            // Prepad the data
            var newData = Buffer.alloc(conn.stubBuffer.length + data.length);
            conn.stubBuffer.copy(newData, 0);
            data.copy(newData, conn.stubBuffer.length); // Reassign for parsing

            data = newData; // Reset state of buffer

            conn.buffer = null;
            conn.sizeOfMessage = 0;
            conn.bytesRead = 0;
            conn.stubBuffer = null;
          } else {
            // Add the the bytes to the stub buffer
            var newStubBuffer = Buffer.alloc(conn.stubBuffer.length + data.length); // Copy existing stub buffer

            conn.stubBuffer.copy(newStubBuffer, 0); // Copy missing part of the data

            data.copy(newStubBuffer, conn.stubBuffer.length); // Exit parsing loop

            data = Buffer.alloc(0);
          }
        } else {
          if (data.length > 4) {
            // Retrieve the message size
            var sizeOfMessage = data[0] | data[1] << 8 | data[2] << 16 | data[3] << 24; // If we have a negative sizeOfMessage emit error and return

            if (sizeOfMessage < 0 || sizeOfMessage > conn.maxBsonMessageSize) {
              var errorObject = {
                err: 'socketHandler',
                trace: '',
                bin: conn.buffer,
                parseState: {
                  sizeOfMessage: sizeOfMessage,
                  bytesRead: conn.bytesRead,
                  stubBuffer: conn.stubBuffer
                }
              }; // We got a parse Error fire it off then keep going

              conn.emit('parseError', errorObject, conn);
              return;
            } // Ensure that the size of message is larger than 0 and less than the max allowed


            if (sizeOfMessage > 4 && sizeOfMessage < conn.maxBsonMessageSize && sizeOfMessage > data.length) {
              conn.buffer = Buffer.alloc(sizeOfMessage); // Copy all the data into the buffer

              data.copy(conn.buffer, 0); // Update bytes read

              conn.bytesRead = data.length; // Update sizeOfMessage

              conn.sizeOfMessage = sizeOfMessage; // Ensure stub buffer is null

              conn.stubBuffer = null; // Exit parsing loop

              data = Buffer.alloc(0);
            } else if (sizeOfMessage > 4 && sizeOfMessage < conn.maxBsonMessageSize && sizeOfMessage === data.length) {
              var _emitBuffer = data; // Reset state of buffer

              conn.buffer = null;
              conn.sizeOfMessage = 0;
              conn.bytesRead = 0;
              conn.stubBuffer = null; // Exit parsing loop

              data = Buffer.alloc(0); // Emit the message

              processMessage(conn, _emitBuffer);
            } else if (sizeOfMessage <= 4 || sizeOfMessage > conn.maxBsonMessageSize) {
              var _errorObject = {
                err: 'socketHandler',
                trace: null,
                bin: data,
                parseState: {
                  sizeOfMessage: sizeOfMessage,
                  bytesRead: 0,
                  buffer: null,
                  stubBuffer: null
                }
              }; // We got a parse Error fire it off then keep going

              conn.emit('parseError', _errorObject, conn); // Clear out the state of the parser

              conn.buffer = null;
              conn.sizeOfMessage = 0;
              conn.bytesRead = 0;
              conn.stubBuffer = null; // Exit parsing loop

              data = Buffer.alloc(0);
            } else {
              var _emitBuffer2 = data.slice(0, sizeOfMessage); // Reset state of buffer


              conn.buffer = null;
              conn.sizeOfMessage = 0;
              conn.bytesRead = 0;
              conn.stubBuffer = null; // Copy rest of message

              data = data.slice(sizeOfMessage); // Emit the message

              processMessage(conn, _emitBuffer2);
            }
          } else {
            // Create a buffer that contains the space for the non-complete message
            conn.stubBuffer = Buffer.alloc(data.length); // Copy the data to the stub buffer

            data.copy(conn.stubBuffer, 0); // Exit parsing loop

            data = Buffer.alloc(0);
          }
        }
      }
    }
  };
}
/**
 * A server connect event, used to verify that the connection is up and running
 *
 * @event Connection#connect
 * @type {Connection}
 */

/**
 * The server connection closed, all pool connections closed
 *
 * @event Connection#close
 * @type {Connection}
 */

/**
 * The server connection caused an error, all pool connections closed
 *
 * @event Connection#error
 * @type {Connection}
 */

/**
 * The server connection timed out, all pool connections closed
 *
 * @event Connection#timeout
 * @type {Connection}
 */

/**
 * The driver experienced an invalid message, all pool connections closed
 *
 * @event Connection#parseError
 * @type {Connection}
 */

/**
 * An event emitted each time the connection receives a parsed message from the wire
 *
 * @event Connection#message
 * @type {Connection}
 */


module.exports = Connection;