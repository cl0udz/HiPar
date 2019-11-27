'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/web.dom-collections.for-each");

var BSON = require('bson');

var Readable = require('stream').Readable;

var Writable = require('stream').Writable;

var MessageStream = require('../../../lib/core/cmap/message_stream');

var Msg = require('../../../lib/core/connection/msg').Msg;

var expect = require('chai').expect;

function bufferToStream(buffer) {
  var stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

describe('Message Stream', function () {
  describe('reading', function () {
    [{
      description: 'valid OP_REPLY',
      data: Buffer.from('370000000100000001000000010000000000000000000000000000000000000001000000130000001069736d6173746572000100000000', 'hex'),
      documents: [{
        ismaster: 1
      }]
    }, {
      description: 'valid OP_MSG',
      data: Buffer.from('370000000100000000000000dd0700000000000000220000001069736d6173746572000100000002246462000600000061646d696e0000', 'hex'),
      documents: [{
        $db: 'admin',
        ismaster: 1
      }]
    }, {
      description: 'Invalid message size (negative)',
      data: Buffer.from('ffffffff', 'hex'),
      error: 'Invalid message size: -1'
    }, {
      description: 'Invalid message size (exceeds maximum)',
      data: Buffer.from('01000004', 'hex'),
      error: 'Invalid message size: 67108865, max allowed: 67108864'
    }].forEach(function (test) {
      it(test.description, function (done) {
        var bson = new BSON();
        var error = test.error;
        var inputStream = bufferToStream(test.data);
        var messageStream = new MessageStream({
          bson: bson
        });
        messageStream.on('message', function (msg) {
          if (error) {
            done(new Error("expected error: ".concat(error)));
            return;
          }

          msg.parse();

          if (test.documents) {
            expect(msg).to.have.property('documents').that.deep.equals(test.documents);
          }

          done();
        });
        messageStream.on('error', function (err) {
          if (error == null) {
            done(err);
            return;
          }

          expect(err).to.have.property('message').that.equals(error);
          done();
        });
        inputStream.pipe(messageStream);
      });
    });
  });
  describe('writing', function () {
    it('should write a message to the stream', function (done) {
      var readableStream = new Readable({
        read: function read() {}
      });
      var writeableStream = new Writable({
        write: function write(chunk, _, callback) {
          readableStream.push(chunk);
          callback();
        }
      });
      readableStream.on('data', function (data) {
        expect(data.toString('hex')).to.eql('370000000300000000000000dd0700000000000000220000001069736d6173746572000100000002246462000600000061646d696e0000');
        done();
      });
      var bson = new BSON();
      var messageStream = new MessageStream({
        bson: bson
      });
      messageStream.pipe(writeableStream);
      var command = new Msg(bson, 'admin.$cmd', {
        ismaster: 1
      }, {
        requestId: 3
      });
      messageStream.writeCommand(command, null, function (err) {
        done(err);
      });
    });
  });
});