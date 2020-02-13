'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.assign");

require("core-js/modules/web.dom-collections.for-each");

var mock = require('mongodb-mock-server');

var expect = require('chai').expect;

describe('db.listCollections', function () {
  var testHarness = {};
  afterEach(function () {
    return mock.cleanup();
  });
  beforeEach(function () {
    return mock.createServer().then(function (server) {
      server.setMessageHandler(function (request) {
        var doc = request.document;

        if (doc.ismaster) {
          return request.reply(Object.assign({}, mock.DEFAULT_ISMASTER));
        }

        if (doc.listCollections) {
          return request.reply({
            ok: 1,
            cursor: {
              id: 0,
              ns: 'test.$cmd.listCollections',
              firstBatch: [{
                name: 'test',
                type: 'collection'
              }]
            }
          });
        }
      });
      testHarness.server = server;
    });
  });
  [{
    description: 'should always send nameOnly option, defaulting to false',
    command: function command(db) {
      return db.listCollections().toArray(function () {});
    },
    listCollectionsValue: false
  }, {
    description: 'should propagate the nameOnly option',
    command: function command(db) {
      return db.listCollections({}, {
        nameOnly: true
      }).toArray(function () {});
    },
    listCollectionsValue: true
  }, {
    description: 'should send nameOnly: true for db.createCollection',
    command: function command(db) {
      return db.createCollection('foo', function () {});
    },
    listCollectionsValue: true
  }, {
    description: 'should send nameOnly: true for db.collections',
    command: function command(db) {
      return db.collections(function () {});
    },
    listCollectionsValue: true
  }, {
    description: 'should send nameOnly: true for db.collection',
    command: function command(db) {
      return db.collection('foo', {
        strict: true
      }, function () {});
    },
    listCollectionsValue: true
  }].forEach(function (config) {
    function testFn(done) {
      var configuration = this.configuration;
      var client = configuration.newClient("mongodb://".concat(testHarness.server.uri(), "/test"), {
        monitorCommands: true
      });
      client.connect(function (err, client) {
        var db = client.db('foo');
        client.on('commandStarted', function (e) {
          if (e.commandName === 'listCollections') {
            try {
              expect(e).to.have.nested.property('command.nameOnly', config.listCollectionsValue);
              client.close(done);
            } catch (err) {
              client.close(function () {
                return done(err);
              });
            }
          }
        });
        config.command(db);
      });
    }

    it(config.description, {
      test: testFn,
      metadata: {
        requires: {
          mongodb: '>=2.7.6'
        }
      }
    });
  });
});