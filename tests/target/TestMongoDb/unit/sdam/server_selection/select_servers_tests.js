'use strict';

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/web.dom-collections.iterator");

var ReadPreference = require('../../../../lib/core/topologies/read_preference');

var Topology = require('../../../../lib/core/sdam/topology').Topology;

var Server = require('../../../../lib/core/sdam/server').Server;

var serverSelection = require('../../../../lib/core/sdam/server_selection');

var selectServers = serverSelection.selectServers;

var sc = require('../../../../lib/core/sdam/common');

var expect = require('chai').expect;

var sinon = require('sinon');

describe('selectServers', function () {
  beforeEach(function () {
    this.sinon = sinon.sandbox.create();
  });
  afterEach(function () {
    this.sinon.restore();
  });
  it('should error immediately if timeout exceeds start time', function (done) {
    var topology = new Topology('invalid:27019');
    var start = process.hrtime();
    start[0] = start[0] - 1;
    selectServers(topology, ReadPreference.primary, 1000, start, function (err) {
      expect(err).to.exist;
      done();
    });
  });
  it('should timeout if no servers are found within `serverSelectionTimeoutMS`', function (done) {
    var topology = new Topology('someserver:27019');
    topology.s.state = sc.STATE_CONNECTED; // fake that we are already connected

    selectServers(topology, ReadPreference.primary, 500, process.hrtime(), function (err) {
      expect(err).to.exist;
      expect(err).to.match(/Server selection timed out/);
      expect(err).to.not.have.property('reason');
      done();
    });
  });
  it('should schedule monitoring if no suitable server is found', function (done) {
    var topology = new Topology('someserver:27019');
    var serverMonitor = this.sinon.stub(Server.prototype, 'monitor');
    this.sinon.stub(Topology.prototype, 'selectServer').callsFake(function (selector, options, callback) {
      var server = Array.from(this.s.servers.values())[0];
      callback(null, server);
    });
    this.sinon.stub(Server.prototype, 'connect').callsFake(function () {
      this.emit('connect');
    });
    topology.connect(function () {
      selectServers(topology, ReadPreference.primary, 1000, process.hrtime(), function (err) {
        expect(err).to.exist;
        expect(err).to.match(/Server selection timed out/);
        expect(err).to.not.have.property('reason'); // expect a call to monitor for initial server creation, and another for the server selection

        expect(serverMonitor).property('callCount').to.equal(2);
        topology.close(done);
      });
    });
  });
  it('should disallow selection when the topology is explicitly closed', function (done) {
    var topology = new Topology('someserver:27019');
    this.sinon.stub(Server.prototype, 'connect').callsFake(function () {
      this.emit('connect');
    });
    topology.close(function () {
      selectServers(topology, ReadPreference.primary, 2000, process.hrtime(), function (err) {
        expect(err).to.exist;
        expect(err).to.match(/Topology is closed/);
        done();
      });
    });
  });
});