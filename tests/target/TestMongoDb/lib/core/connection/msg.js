'use strict'; // Implementation of OP_MSG spec:
// https://github.com/mongodb/specifications/blob/master/source/message/OP_MSG.rst
//
// struct Section {
//   uint8 payloadType;
//   union payload {
//       document  document; // payloadType == 0
//       struct sequence { // payloadType == 1
//           int32      size;
//           cstring    identifier;
//           document*  documents;
//       };
//   };
// };
// struct OP_MSG {
//   struct MsgHeader {
//       int32  messageLength;
//       int32  requestID;
//       int32  responseTo;
//       int32  opCode = 2013;
//   };
//   uint32      flagBits;
//   Section+    sections;
//   [uint32     checksum;]
// };

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.object.define-property");

require("core-js/modules/web.url.to-json");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Buffer = require('safe-buffer').Buffer;

var opcodes = require('../wireprotocol/shared').opcodes;

var databaseNamespace = require('../wireprotocol/shared').databaseNamespace;

var ReadPreference = require('../topologies/read_preference'); // Incrementing request id


var _requestId = 0; // Msg Flags

var OPTS_CHECKSUM_PRESENT = 1;
var OPTS_MORE_TO_COME = 2;
var OPTS_EXHAUST_ALLOWED = 1 << 16;

var Msg =
/*#__PURE__*/
function () {
  function Msg(bson, ns, command, options) {
    _classCallCheck(this, Msg);

    // Basic options needed to be passed in
    if (command == null) throw new Error('query must be specified for query'); // Basic options

    this.bson = bson;
    this.ns = ns;
    this.command = command;
    this.command.$db = databaseNamespace(ns);

    if (options.readPreference && options.readPreference.mode !== ReadPreference.PRIMARY) {
      this.command.$readPreference = options.readPreference.toJSON();
    } // Ensure empty options


    this.options = options || {}; // Additional options

    this.requestId = options.requestId ? options.requestId : Msg.getRequestId(); // Serialization option

    this.serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    this.ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : false;
    this.checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
    this.maxBsonSize = options.maxBsonSize || 1024 * 1024 * 16; // flags

    this.checksumPresent = false;
    this.moreToCome = options.moreToCome || false;
    this.exhaustAllowed = false;
  }

  _createClass(Msg, [{
    key: "toBin",
    value: function toBin() {
      var buffers = [];
      var flags = 0;

      if (this.checksumPresent) {
        flags |= OPTS_CHECKSUM_PRESENT;
      }

      if (this.moreToCome) {
        flags |= OPTS_MORE_TO_COME;
      }

      if (this.exhaustAllowed) {
        flags |= OPTS_EXHAUST_ALLOWED;
      }

      var header = Buffer.alloc(4 * 4 + // Header
      4 // Flags
      );
      buffers.push(header);
      var totalLength = header.length;
      var command = this.command;
      totalLength += this.makeDocumentSegment(buffers, command);
      header.writeInt32LE(totalLength, 0); // messageLength

      header.writeInt32LE(this.requestId, 4); // requestID

      header.writeInt32LE(0, 8); // responseTo

      header.writeInt32LE(opcodes.OP_MSG, 12); // opCode

      header.writeUInt32LE(flags, 16); // flags

      return buffers;
    }
  }, {
    key: "makeDocumentSegment",
    value: function makeDocumentSegment(buffers, document) {
      var payloadTypeBuffer = Buffer.alloc(1);
      payloadTypeBuffer[0] = 0;
      var documentBuffer = this.serializeBson(document);
      buffers.push(payloadTypeBuffer);
      buffers.push(documentBuffer);
      return payloadTypeBuffer.length + documentBuffer.length;
    }
  }, {
    key: "serializeBson",
    value: function serializeBson(document) {
      return this.bson.serialize(document, {
        checkKeys: this.checkKeys,
        serializeFunctions: this.serializeFunctions,
        ignoreUndefined: this.ignoreUndefined
      });
    }
  }]);

  return Msg;
}();

Msg.getRequestId = function () {
  _requestId = _requestId + 1 & 0x7fffffff;
  return _requestId;
};

var BinMsg =
/*#__PURE__*/
function () {
  function BinMsg(bson, message, msgHeader, msgBody, opts) {
    _classCallCheck(this, BinMsg);

    opts = opts || {
      promoteLongs: true,
      promoteValues: true,
      promoteBuffers: false
    };
    this.parsed = false;
    this.raw = message;
    this.data = msgBody;
    this.bson = bson;
    this.opts = opts; // Read the message header

    this.length = msgHeader.length;
    this.requestId = msgHeader.requestId;
    this.responseTo = msgHeader.responseTo;
    this.opCode = msgHeader.opCode;
    this.fromCompressed = msgHeader.fromCompressed; // Read response flags

    this.responseFlags = msgBody.readInt32LE(0);
    this.checksumPresent = (this.responseFlags & OPTS_CHECKSUM_PRESENT) !== 0;
    this.moreToCome = (this.responseFlags & OPTS_MORE_TO_COME) !== 0;
    this.exhaustAllowed = (this.responseFlags & OPTS_EXHAUST_ALLOWED) !== 0;
    this.promoteLongs = typeof opts.promoteLongs === 'boolean' ? opts.promoteLongs : true;
    this.promoteValues = typeof opts.promoteValues === 'boolean' ? opts.promoteValues : true;
    this.promoteBuffers = typeof opts.promoteBuffers === 'boolean' ? opts.promoteBuffers : false;
    this.documents = [];
  }

  _createClass(BinMsg, [{
    key: "isParsed",
    value: function isParsed() {
      return this.parsed;
    }
  }, {
    key: "parse",
    value: function parse(options) {
      // Don't parse again if not needed
      if (this.parsed) return;
      options = options || {};
      this.index = 4; // Allow the return of raw documents instead of parsing

      var raw = options.raw || false;
      var documentsReturnedIn = options.documentsReturnedIn || null;
      var promoteLongs = typeof options.promoteLongs === 'boolean' ? options.promoteLongs : this.opts.promoteLongs;
      var promoteValues = typeof options.promoteValues === 'boolean' ? options.promoteValues : this.opts.promoteValues;
      var promoteBuffers = typeof options.promoteBuffers === 'boolean' ? options.promoteBuffers : this.opts.promoteBuffers; // Set up the options

      var _options = {
        promoteLongs: promoteLongs,
        promoteValues: promoteValues,
        promoteBuffers: promoteBuffers
      };

      while (this.index < this.data.length) {
        var payloadType = this.data.readUInt8(this.index++);

        if (payloadType === 1) {
          console.error('TYPE 1');
        } else if (payloadType === 0) {
          var bsonSize = this.data.readUInt32LE(this.index);
          var bin = this.data.slice(this.index, this.index + bsonSize);
          this.documents.push(raw ? bin : this.bson.deserialize(bin, _options));
          this.index += bsonSize;
        }
      }

      if (this.documents.length === 1 && documentsReturnedIn != null && raw) {
        var fieldsAsRaw = {};
        fieldsAsRaw[documentsReturnedIn] = true;
        _options.fieldsAsRaw = fieldsAsRaw;
        var doc = this.bson.deserialize(this.documents[0], _options);
        this.documents = [doc];
      }

      this.parsed = true;
    }
  }]);

  return BinMsg;
}();

module.exports = {
  Msg: Msg,
  BinMsg: BinMsg
};