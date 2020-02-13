'use strict';

require("core-js/modules/es.object.assign");

var expect = require('chai').expect;

var mock = require('mongodb-mock-server');

var _test = {};
describe('Sessions', function () {
  describe('Client', function () {
    afterEach(function () {
      return mock.cleanup();
    });
    beforeEach(function () {
      return mock.createServer().then(function (server) {
        _test.server = server;
      });
    });
    it('should throw an exception if sessions are not supported', {
      metadata: {
        requires: {
          topology: 'single'
        }
      },
      test: function test(done) {
        _test.server.setMessageHandler(function (request) {
          var doc = request.document;

          if (doc.ismaster) {
            request.reply(Object.assign({}, mock.DEFAULT_ISMASTER));
          } else if (doc.endSessions) {
            request.reply({
              ok: 1
            });
          }
        });

        var client = this.configuration.newClient("mongodb://".concat(_test.server.uri(), "/test"));
        client.connect(function (err, client) {
          expect(err).to.not.exist;
          expect(function () {
            client.startSession();
          }).to["throw"](/Current topology does not support sessions/);
          client.close(done);
        });
      }
    });
    it('should return a client session when requested if the topology supports it', {
      metadata: {
        requires: {
          topology: 'single'
        }
      },
      test: function test(done) {
        _test.server.setMessageHandler(function (request) {
          var doc = request.document;

          if (doc.ismaster) {
            request.reply(Object.assign({}, mock.DEFAULT_ISMASTER, {
              logicalSessionTimeoutMinutes: 10
            }));
          } else if (doc.endSessions) {
            request.reply({
              ok: 1
            });
          }
        });

        var client = this.configuration.newClient("mongodb://".concat(_test.server.uri(), "/test"));
        client.connect(function (err, client) {
          expect(err).to.not.exist;
          var session = client.startSession();
          expect(session).to.exist;
          session.endSession({
            skipCommand: true
          });
          client.close(done);
        });
      }
    });
  });
});