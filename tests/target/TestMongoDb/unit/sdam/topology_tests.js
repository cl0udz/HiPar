'use strict';

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var Topology = require('../../../lib/core/sdam/topology').Topology;

var Server = require('../../../lib/core/sdam/server').Server;

var ServerDescription = require('../../../lib/core/sdam/server_description').ServerDescription;

var expect = require('chai').expect;

var sinon = require('sinon');

describe('Topology (unit)', function () {
  describe('shouldCheckForSessionSupport', function () {
    beforeEach(function () {
      this.sinon = sinon.sandbox.create(); // these are mocks we want across all tests

      this.sinon.stub(Server.prototype, 'monitor');
      this.sinon.stub(Topology.prototype, 'selectServer').callsFake(function (selector, options, callback) {
        var server = Array.from(this.s.servers.values())[0];
        callback(null, server);
      });
    });
    afterEach(function () {
      this.sinon.restore();
    });
    it('should check for sessions if connected to a single server and has no known servers', function (done) {
      var topology = new Topology('someserver:27019');
      this.sinon.stub(Server.prototype, 'connect').callsFake(function () {
        this.emit('connect');
      });
      topology.connect(function () {
        expect(topology.shouldCheckForSessionSupport()).to.be["true"];
        topology.close(done);
      });
    });
    it('should not check for sessions if connected to a single server', function (done) {
      var topology = new Topology('someserver:27019');
      this.sinon.stub(Server.prototype, 'connect').callsFake(function () {
        this.emit('descriptionReceived', new ServerDescription('someserver:27019', {
          ok: 1,
          maxWireVersion: 5
        }));
        this.emit('connect');
      });
      topology.connect(function () {
        expect(topology.shouldCheckForSessionSupport()).to.be["false"];
        topology.close(done);
      });
    });
    it('should check for sessions if there are no data-bearing nodes', function (done) {
      var topology = new Topology('mongos:27019,mongos:27018,mongos:27017');
      this.sinon.stub(Server.prototype, 'connect').callsFake(function () {
        this.emit('descriptionReceived', new ServerDescription(this.name, {
          ok: 1,
          msg: 'isdbgrid',
          maxWireVersion: 5
        }));
        this.emit('connect');
      });
      topology.connect(function () {
        expect(topology.shouldCheckForSessionSupport()).to.be["false"];
        topology.close(done);
      });
    });
  });
});