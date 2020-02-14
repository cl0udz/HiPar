'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.split");

require("core-js/modules/es.string.starts-with");

require("core-js/modules/web.dom-collections.for-each");

var path = require('path');

var fs = require('fs');

var core = require('../../../../lib/core');

var Topology = core.Topology;
var MongoTimeoutError = core.MongoTimeoutError;
var ReadPreference = core.ReadPreference; // TODO: these should be from `core` when legacy topologies are removed

var Server = require('../../../../lib/core/sdam/server').Server;

var ServerType = require('../../../../lib/core/sdam/common').ServerType;

var ServerDescription = require('../../../../lib/core/sdam/server_description').ServerDescription;

var ServerSelectors = require('../../../../lib/core/sdam/server_selection');

var EJSON = require('mongodb-extjson');

var sinon = require('sinon');

var chai = require('chai');

var expect = chai.expect;
chai.use(require('chai-subset'));
var selectionSpecDir = path.join(__dirname, '../../../spec/server-selection/server_selection');

function collectSelectionTests(specDir) {
  var testTypes = fs.readdirSync(specDir).filter(function (d) {
    return fs.statSync(path.join(specDir, d)).isDirectory();
  });
  var tests = {};
  testTypes.forEach(function (testType) {
    tests[testType] = fs.readdirSync(path.join(specDir, testType)).filter(function (d) {
      return fs.statSync(path.join(specDir, testType, d)).isDirectory();
    }).reduce(function (result, subType) {
      result[subType] = fs.readdirSync(path.join(specDir, testType, subType)).filter(function (f) {
        return path.extname(f) === '.json';
      }).map(function (f) {
        var subTypeData = EJSON.parse(fs.readFileSync(path.join(specDir, testType, subType, f)), {
          relaxed: true
        });
        subTypeData.name = path.basename(f, '.json');
        subTypeData.type = testType;
        subTypeData.subType = subType;
        return subTypeData;
      });
      return result;
    }, {});
  });
  return tests;
}

describe('Server Selection (spec)', function () {
  var serverConnect;
  before(function () {
    serverConnect = sinon.stub(Server.prototype, 'connect');
  });
  after(function () {
    serverConnect.restore();
  });
  var specTests = collectSelectionTests(selectionSpecDir);
  Object.keys(specTests).forEach(function (topologyType) {
    describe(topologyType, function () {
      Object.keys(specTests[topologyType]).forEach(function (subType) {
        describe(subType, function () {
          specTests[topologyType][subType].forEach(function (test) {
            // NOTE: node does not support PossiblePrimary
            var maybeIt = test.name.match(/Possible/) ? it.skip : it;
            maybeIt(test.name, function (done) {
              executeServerSelectionTest(test, {
                checkLatencyWindow: false
              }, done);
            });
          });
        });
        describe(subType + ' (within latency window)', function () {
          specTests[topologyType][subType].forEach(function (test) {
            // NOTE: node does not support PossiblePrimary
            var maybeIt = test.name.match(/Possible/) ? it.skip : it;
            maybeIt(test.name, function (done) {
              executeServerSelectionTest(test, {
                checkLatencyWindow: true
              }, done);
            });
          });
        });
      });
    });
  });
});
var maxStalenessDir = path.join(__dirname, '../../../spec/max-staleness');

function collectStalenessTests(specDir) {
  var testTypes = fs.readdirSync(specDir).filter(function (d) {
    return fs.statSync(path.join(specDir, d)).isDirectory();
  });
  var tests = {};
  testTypes.forEach(function (testType) {
    tests[testType] = fs.readdirSync(path.join(specDir, testType)).filter(function (f) {
      return path.extname(f) === '.json';
    }).map(function (f) {
      var result = EJSON.parse(fs.readFileSync(path.join(specDir, testType, f)), {
        relaxed: true
      });
      result.description = path.basename(f, '.json');
      result.type = testType;
      return result;
    });
  });
  return tests;
}

describe('Max Staleness (spec)', function () {
  var serverConnect;
  before(function () {
    serverConnect = sinon.stub(Server.prototype, 'connect');
  });
  after(function () {
    serverConnect.restore();
  });
  var specTests = collectStalenessTests(maxStalenessDir);
  Object.keys(specTests).forEach(function (specTestName) {
    describe(specTestName, function () {
      specTests[specTestName].forEach(function (testData) {
        it(testData.description, {
          metadata: {
            requires: {
              topology: 'single'
            }
          },
          test: function test(done) {
            executeServerSelectionTest(testData, {
              checkLatencyWindow: false
            }, done);
          }
        });
      });
    });
  });
});

function normalizeSeed(seed) {
  var host = seed;
  var port = 27017; // is this a host + port combo?

  if (seed.indexOf(':') !== -1) {
    host = seed.split(':')[0];
    port = parseInt(seed.split(':')[1], 10);
  } // support IPv6


  if (host.startsWith('[')) {
    host = host.slice(1, host.length - 1);
  }

  return {
    host: host,
    port: port
  };
}

function serverDescriptionFromDefinition(definition, hosts) {
  hosts = hosts || [];
  var serverType = definition.type;

  if (serverType === ServerType.Unknown) {
    return new ServerDescription(definition.address);
  }

  var fakeIsMaster = {
    ok: 1,
    hosts: hosts
  };

  if (serverType !== ServerType.Standalone && serverType !== ServerType.Mongos) {
    fakeIsMaster.setName = 'rs';
  }

  if (serverType === ServerType.RSPrimary) {
    fakeIsMaster.ismaster = true;
  } else if (serverType === ServerType.RSSecondary) {
    fakeIsMaster.secondary = true;
  } else if (serverType === ServerType.Mongos) {
    fakeIsMaster.msg = 'isdbgrid';
  }

  ['maxWireVersion', 'tags', 'idleWritePeriodMillis'].forEach(function (field) {
    if (definition[field]) {
      fakeIsMaster[field] = definition[field];
    }
  });
  fakeIsMaster.lastWrite = definition.lastWrite; // default max wire version is `6`

  fakeIsMaster.maxWireVersion = fakeIsMaster.maxWireVersion || 6;
  var serverDescription = new ServerDescription(definition.address, fakeIsMaster, {
    roundTripTime: definition.avg_rtt_ms
  }); // source of flakiness, if we don't need it then remove it

  if (typeof definition.lastUpdateTime !== 'undefined') {
    serverDescription.lastUpdateTime = definition.lastUpdateTime;
  } else {
    delete serverDescription.lastUpdateTime;
  }

  return serverDescription;
}

function readPreferenceFromDefinition(definition) {
  var mode = definition.mode ? definition.mode.charAt(0).toLowerCase() + definition.mode.slice(1) : 'primary';
  var options = {};
  if (typeof definition.maxStalenessSeconds !== 'undefined') options.maxStalenessSeconds = definition.maxStalenessSeconds;
  var tags = definition.tag_sets || [];
  return new ReadPreference(mode, tags, options);
}

function executeServerSelectionTest(testDefinition, options, testDone) {
  var topologyDescription = testDefinition.topology_description;
  var seedData = topologyDescription.servers.reduce(function (result, seed) {
    result.seedlist.push(normalizeSeed(seed.address));
    result.hosts.push(seed.address);
    return result;
  }, {
    seedlist: [],
    hosts: []
  });
  var topologyOptions = {
    heartbeatFrequencyMS: testDefinition.heartbeatFrequencyMS,
    monitorFunction: function monitorFunction() {}
  };
  var topology = new Topology(seedData.seedlist, topologyOptions);
  topology.connect();

  function done(err) {
    topology.close(function (e) {
      return testDone(e || err);
    });
  } // Update topologies with server descriptions.


  topologyDescription.servers.forEach(function (server) {
    var serverDescription = serverDescriptionFromDefinition(server, seedData.hosts);
    topology.serverUpdateHandler(serverDescription);
  });
  var selector;

  if (testDefinition.operation === 'write') {
    selector = ServerSelectors.writableServerSelector();
  } else if (testDefinition.operation === 'read' || testDefinition.read_preference) {
    try {
      var readPreference = readPreferenceFromDefinition(testDefinition.read_preference);
      selector = ServerSelectors.readPreferenceServerSelector(readPreference);
    } catch (e) {
      if (testDefinition.error) return done();
      return done(e);
    }
  } // expectations


  var expectedServers;

  if (!testDefinition.error) {
    if (options.checkLatencyWindow) {
      expectedServers = testDefinition.in_latency_window.map(function (s) {
        return serverDescriptionFromDefinition(s);
      });
    } else {
      expectedServers = testDefinition.suitable_servers.map(function (s) {
        return serverDescriptionFromDefinition(s);
      });
    }
  } // default to serverSelectionTimeoutMS of `100` for unit tests


  topology.selectServer(selector, {
    serverSelectionTimeoutMS: 100
  }, function (err, server) {
    // are we expecting an error?
    if (testDefinition.error) {
      if (!err) {
        return done(new Error('Expected an error, but found none!'));
      }

      return done();
    }

    if (err) {
      // this is another expected error case
      if (expectedServers.length === 0 && err instanceof MongoTimeoutError) return done();
      return done(err);
    }

    if (expectedServers.length === 0 && server !== null) {
      return done(new Error('Found server, but expected none!'));
    }

    var selectedServerDescription = server.description;

    try {
      var expectedServerArray = expectedServers.filter(function (s) {
        return s.address === selectedServerDescription.address;
      });

      if (!expectedServerArray.length) {
        return done(new Error('No suitable servers found!'));
      }

      expect(selectedServerDescription).to.include.containSubset(expectedServerArray[0]);
      done();
    } catch (e) {
      done(e);
    }
  });
}