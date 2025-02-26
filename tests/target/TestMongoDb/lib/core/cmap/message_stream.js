'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

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

var Duplex = require('stream').Duplex;

var BufferList = require('bl');

var MongoParseError = require('../error').MongoParseError;

var decompress = require('../wireprotocol/compression').decompress;

var Response = require('../connection/commands').Response;

var BinMsg = require('../connection/msg').BinMsg;

var MongoError = require('../error').MongoError;

var OP_COMPRESSED = require('../wireprotocol/shared').opcodes.OP_COMPRESSED;

var OP_MSG = require('../wireprotocol/shared').opcodes.OP_MSG;

var MESSAGE_HEADER_SIZE = require('../wireprotocol/shared').MESSAGE_HEADER_SIZE;

var COMPRESSION_DETAILS_SIZE = require('../wireprotocol/shared').COMPRESSION_DETAILS_SIZE;

var opcodes = require('../wireprotocol/shared').opcodes;

var compress = require('../wireprotocol/compression').compress;

var compressorIDs = require('../wireprotocol/compression').compressorIDs;

var uncompressibleCommands = require('../wireprotocol/compression').uncompressibleCommands;

var Msg = require('../connection/msg').Msg;

var kDefaultMaxBsonMessageSize = 1024 * 1024 * 16 * 4;
var kBuffer = Symbol('buffer');
/**
 * A duplex stream that is capable of reading and writing raw wire protocol messages, with
 * support for optional compression
 */

var MessageStream =
/*#__PURE__*/
function (_Duplex) {
  _inherits(MessageStream, _Duplex);

  function MessageStream(options) {
    var _this;

    _classCallCheck(this, MessageStream);

    options = options || {};
    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageStream).call(this, options));
    _this.bson = options.bson;
    _this.maxBsonMessageSize = options.maxBsonMessageSize || kDefaultMaxBsonMessageSize;
    _this[kBuffer] = new BufferList();
    return _this;
  }

  _createClass(MessageStream, [{
    key: "_write",
    value: function _write(chunk, _, callback) {
      var buffer = this[kBuffer];
      buffer.append(chunk);

      while (buffer.length >= 4) {
        var sizeOfMessage = buffer.readInt32LE(0);

        if (sizeOfMessage < 0) {
          callback(new MongoParseError("Invalid message size: ".concat(sizeOfMessage)));
          return;
        }

        if (sizeOfMessage > this.maxBsonMessageSize) {
          callback(new MongoParseError("Invalid message size: ".concat(sizeOfMessage, ", max allowed: ").concat(this.maxBsonMessageSize)));
          return;
        }

        if (sizeOfMessage > buffer.length) {
          callback();
          return;
        }

        var messageBuffer = buffer.slice(0, sizeOfMessage);
        processMessage(this, messageBuffer, callback);
        buffer.consume(sizeOfMessage);
      }
    }
  }, {
    key: "_read",
    value: function _read()
    /* size */
    {
      // NOTE: This implementation is empty because we explicitly push data to be read
      //       when `writeMessage` is called.
      return;
    }
  }, {
    key: "writeCommand",
    value: function writeCommand(command, operationDescription) {
      var _this2 = this;

      // TODO: agreed compressor should live in `StreamDescription`
      var shouldCompress = operationDescription && !!operationDescription.agreedCompressor;

      if (!shouldCompress || !canCompress(command)) {
        this.push(Buffer.concat(command.toBin()));
        return;
      } // otherwise, compress the message


      var concatenatedOriginalCommandBuffer = Buffer.concat(command.toBin());
      var messageToBeCompressed = concatenatedOriginalCommandBuffer.slice(MESSAGE_HEADER_SIZE); // Extract information needed for OP_COMPRESSED from the uncompressed message

      var originalCommandOpCode = concatenatedOriginalCommandBuffer.readInt32LE(12); // Compress the message body

      compress({
        options: operationDescription
      }, messageToBeCompressed, function (err, compressedMessage) {
        if (err) {
          operationDescription.cb(err, null);
          return;
        } // Create the msgHeader of OP_COMPRESSED


        var msgHeader = Buffer.alloc(MESSAGE_HEADER_SIZE);
        msgHeader.writeInt32LE(MESSAGE_HEADER_SIZE + COMPRESSION_DETAILS_SIZE + compressedMessage.length, 0); // messageLength

        msgHeader.writeInt32LE(command.requestId, 4); // requestID

        msgHeader.writeInt32LE(0, 8); // responseTo (zero)

        msgHeader.writeInt32LE(opcodes.OP_COMPRESSED, 12); // opCode
        // Create the compression details of OP_COMPRESSED

        var compressionDetails = Buffer.alloc(COMPRESSION_DETAILS_SIZE);
        compressionDetails.writeInt32LE(originalCommandOpCode, 0); // originalOpcode

        compressionDetails.writeInt32LE(messageToBeCompressed.length, 4); // Size of the uncompressed compressedMessage, excluding the MsgHeader

        compressionDetails.writeUInt8(compressorIDs[operationDescription.agreedCompressor], 8); // compressorID

        _this2.push(Buffer.concat([msgHeader, compressionDetails, compressedMessage]));
      });
    }
  }]);

  return MessageStream;
}(Duplex); // Return whether a command contains an uncompressible command term
// Will return true if command contains no uncompressible command terms


function canCompress(command) {
  var commandDoc = command instanceof Msg ? command.command : command.query;
  var commandName = Object.keys(commandDoc)[0];
  return !uncompressibleCommands.has(commandName);
}

function processMessage(stream, message, callback) {
  var messageHeader = {
    messageLength: message.readInt32LE(0),
    requestId: message.readInt32LE(4),
    responseTo: message.readInt32LE(8),
    opCode: message.readInt32LE(12)
  };
  var ResponseType = messageHeader.opCode === OP_MSG ? BinMsg : Response;
  var responseOptions = stream.responseOptions;

  if (messageHeader.opCode !== OP_COMPRESSED) {
    var messageBody = message.slice(MESSAGE_HEADER_SIZE);
    stream.emit('message', new ResponseType(stream.bson, message, messageHeader, messageBody, responseOptions));
    callback();
    return;
  }

  messageHeader.fromCompressed = true;
  messageHeader.opCode = message.readInt32LE(MESSAGE_HEADER_SIZE);
  messageHeader.length = message.readInt32LE(MESSAGE_HEADER_SIZE + 4);
  var compressorID = message[MESSAGE_HEADER_SIZE + 8];
  var compressedBuffer = message.slice(MESSAGE_HEADER_SIZE + 9); // recalculate based on wrapped opcode

  ResponseType = messageHeader.opCode === OP_MSG ? BinMsg : Response;
  decompress(compressorID, compressedBuffer, function (err, messageBody) {
    if (err) {
      callback(err);
      return;
    }

    if (messageBody.length !== messageHeader.length) {
      callback(new MongoError('Decompressing a compressed message from the server failed. The message is corrupt.'));
      return;
    }

    stream.emit('message', new ResponseType(stream.bson, message, messageHeader, messageBody, responseOptions));
    callback();
  });
}

module.exports = MessageStream;