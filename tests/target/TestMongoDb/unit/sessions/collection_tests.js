'use strict';

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.to-string");

require("core-js/modules/web.dom-collections.iterator");

var Timestamp = require('bson').Timestamp;

var expect = require('chai').expect;

var mock = require('mongodb-mock-server');

var _test = {};
describe('Sessions', function () {
  describe('Collection', function () {
    afterEach(function () {
      return mock.cleanup();
    });
    beforeEach(function () {
      return mock.createServer().then(function (server) {
        _test.server = server;
      });
    });
    it('should include `afterClusterTime` in read command with causal consistency', {
      metadata: {
        requires: {
          topology: 'single'
        }
      },
      test: function test() {
        var findCommand;
        var insertOperationTime = Timestamp.fromNumber(Date.now());

        _test.server.setMessageHandler(function (request) {
          var doc = request.document;

          if (doc.ismaster) {
            request.reply(mock.DEFAULT_ISMASTER_36);
          } else if (doc.insert) {
            request.reply({
              ok: 1,
              operationTime: insertOperationTime
            });
          } else if (doc.find) {
            findCommand = doc;
            request.reply({
              ok: 1
            });
          } else if (doc.endSessions) {
            request.reply({
              ok: 1
            });
          }
        });

        var client = this.configuration.newClient("mongodb://".concat(_test.server.uri(), "/test"));
        return client.connect().then(function (client) {
          var session = client.startSession({
            causalConsistency: true
          });
          var coll = client.db('foo').collection('bar');
          return coll.insert({
            a: 42
          }, {
            session: session
          }).then(function () {
            return coll.findOne({}, {
              session: session,
              readConcern: {
                level: 'majority'
              }
            });
          }).then(function () {
            expect(findCommand.readConcern).to.have.keys(['level', 'afterClusterTime']);
            expect(findCommand.readConcern.afterClusterTime).to.eql(insertOperationTime);
            session.endSession({
              skipCommand: true
            });
            return client.close();
          });
        });
      }
    });
    it('does not mutate command options', {
      metadata: {
        requires: {
          topology: 'single'
        }
      },
      test: function test() {
        var options = Object.freeze({});

        _test.server.setMessageHandler(function (request) {
          var doc = request.document;

          if (doc.ismaster) {
            request.reply(mock.DEFAULT_ISMASTER_36);
          } else if (doc.count || doc.endSessions) {
            request.reply({
              ok: 1
            });
          }
        });

        var client = this.configuration.newClient("mongodb://".concat(_test.server.uri(), "/test"));
        return client.connect().then(function (client) {
          var coll = client.db('foo').collection('bar');
          return coll.count({}, options).then(function () {
            expect(options).to.deep.equal({});
            return client.close();
          });
        });
      }
    });
  });
});