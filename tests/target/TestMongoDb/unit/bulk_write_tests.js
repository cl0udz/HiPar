'use strict';

require("core-js/modules/es.array.fill");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

var expect = require('chai').expect;

var mock = require('mongodb-mock-server');

describe('Bulk Writes', function () {
  var test = {};
  var documents;
  before(function () {
    documents = new Array(20000).fill('').map(function () {
      return {
        arr: new Array(19).fill('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      };
    });
  });
  beforeEach(function () {
    return mock.createServer().then(function (server) {
      test.server = server;
    });
  });
  afterEach(function () {
    return mock.cleanup();
  });
  it('should propagate errors', function (done) {
    var client = this.configuration.newClient("mongodb://".concat(test.server.uri(), "/test"));

    var _close = function close(e) {
      _close = function close() {};

      client.close(function () {
        return done(e);
      });
    };

    var hasErrored = false;
    test.server.setMessageHandler(function (request) {
      var doc = request.document;

      if (doc.ismaster) {
        request.reply(Object.assign({}, mock.DEFAULT_ISMASTER));
      } else if (doc.endSessions) {
        request.reply({
          ok: 1
        });
      } else if (doc.insert) {
        if (hasErrored) {
          return request.reply({
            ok: 1
          });
        }

        hasErrored = true;
        return request.reply({
          ok: 0
        });
      } else {
        _close("Received unknown command ".concat(doc));
      }
    });
    client.connect(function (err) {
      expect(err).to.be["null"];
      var coll = client.db('foo').collection('bar');
      coll.insert(documents, {
        ordered: false
      }, function (err) {
        try {
          expect(err).to.be.an.instanceOf(Error);

          _close();
        } catch (e) {
          _close(e);
        }
      });
    });
  });
});