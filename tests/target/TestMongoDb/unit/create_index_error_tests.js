'use strict';

require("core-js/modules/es.object.assign");

var expect = require('chai').expect;

var mock = require('mongodb-mock-server');

describe('CreateIndexError', function () {
  var test = {};
  beforeEach(function () {
    return mock.createServer().then(function (_server) {
      return test.server = _server;
    });
  });
  afterEach(function () {
    return mock.cleanup();
  });
  it('should error when createIndex fails', function (done) {
    var ERROR_RESPONSE = {
      ok: 0,
      errmsg: 'WiredTigerIndex::insert: key too large to index, failing  1470 { : "56f37cb8e4b089e98d52ab0e", : "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa..." }',
      code: 17280
    };
    test.server.setMessageHandler(function (request) {
      var doc = request.document;

      if (doc.ismaster) {
        return request.reply(Object.assign({}, mock.DEFAULT_ISMASTER));
      }

      if (doc.createIndexes) {
        return request.reply(ERROR_RESPONSE);
      }

      if (doc.insert === 'system.indexes') {
        return request.reply(ERROR_RESPONSE);
      }
    });
    var client = this.configuration.newClient("mongodb://".concat(test.server.uri()));

    var close = function close(e) {
      return client.close().then(function () {
        return done(e);
      });
    };

    client.connect().then(function () {
      return client.db('foo').collection('bar');
    }).then(function (coll) {
      return coll.createIndex({
        a: 1
      });
    }).then(function () {
      return close('Expected createIndex to fail, but it succeeded');
    }, function (e) {
      try {
        expect(e).to.have.property('ok', ERROR_RESPONSE.ok);
        expect(e).to.have.property('errmsg', ERROR_RESPONSE.errmsg);
        expect(e).to.have.property('code', ERROR_RESPONSE.code);
        close();
      } catch (err) {
        close(err);
      }
    });
  });
});