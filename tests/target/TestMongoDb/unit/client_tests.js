'use strict';

require("core-js/modules/es.object.assign");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.match");

var expect = require('chai').expect;

var mock = require('mongodb-mock-server');

describe('Client (unit)', function () {
  var server;
  afterEach(function () {
    return mock.cleanup();
  });
  beforeEach(function () {
    return mock.createServer().then(function (_server) {
      return server = _server;
    });
  });
  it('should let wrapping libraries amend the client metadata', function () {
    var _this = this;

    var handshake;
    server.setMessageHandler(function (request) {
      var doc = request.document;

      if (doc.ismaster) {
        handshake = doc;
        request.reply(Object.assign({}, mock.DEFAULT_ISMASTER));
      } else if (doc.endSessions) {
        request.reply({
          ok: 1
        });
      }
    });
    var client = this.configuration.newClient("mongodb://".concat(server.uri(), "/"), {
      useUnifiedTopology: true,
      driverInfo: {
        name: 'mongoose',
        version: '5.7.10',
        platform: 'llama edition'
      }
    });
    return client.connect().then(function () {
      _this.defer(function () {
        return client.close();
      });

      expect(handshake).to.have.nested.property('client.driver');
      expect(handshake).nested.property('client.driver.name').to.equal('nodejs|mongoose');
      expect(handshake).nested.property('client.driver.version').to.match(/|5.7.10/);
      expect(handshake).nested.property('client.platform').to.match(/llama edition/);
    });
  });
});