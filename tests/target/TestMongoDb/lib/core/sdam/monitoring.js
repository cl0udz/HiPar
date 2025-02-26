'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/web.timers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServerDescription = require('./server_description').ServerDescription;

var calculateDurationInMs = require('../utils').calculateDurationInMs; // pulled from `Server` implementation


var STATE_CLOSED = 'closed';
var STATE_CLOSING = 'closing';
/**
 * Published when server description changes, but does NOT include changes to the RTT.
 *
 * @property {Object} topologyId A unique identifier for the topology
 * @property {ServerAddress} address The address (host/port pair) of the server
 * @property {ServerDescription} previousDescription The previous server description
 * @property {ServerDescription} newDescription The new server description
 */

var ServerDescriptionChangedEvent = function ServerDescriptionChangedEvent(topologyId, address, previousDescription, newDescription) {
  _classCallCheck(this, ServerDescriptionChangedEvent);

  Object.assign(this, {
    topologyId: topologyId,
    address: address,
    previousDescription: previousDescription,
    newDescription: newDescription
  });
};
/**
 * Published when server is initialized.
 *
 * @property {Object} topologyId A unique identifier for the topology
 * @property {ServerAddress} address The address (host/port pair) of the server
 */


var ServerOpeningEvent = function ServerOpeningEvent(topologyId, address) {
  _classCallCheck(this, ServerOpeningEvent);

  Object.assign(this, {
    topologyId: topologyId,
    address: address
  });
};
/**
 * Published when server is closed.
 *
 * @property {ServerAddress} address The address (host/port pair) of the server
 * @property {Object} topologyId A unique identifier for the topology
 */


var ServerClosedEvent = function ServerClosedEvent(topologyId, address) {
  _classCallCheck(this, ServerClosedEvent);

  Object.assign(this, {
    topologyId: topologyId,
    address: address
  });
};
/**
 * Published when topology description changes.
 *
 * @property {Object} topologyId
 * @property {TopologyDescription} previousDescription The old topology description
 * @property {TopologyDescription} newDescription The new topology description
 */


var TopologyDescriptionChangedEvent = function TopologyDescriptionChangedEvent(topologyId, previousDescription, newDescription) {
  _classCallCheck(this, TopologyDescriptionChangedEvent);

  Object.assign(this, {
    topologyId: topologyId,
    previousDescription: previousDescription,
    newDescription: newDescription
  });
};
/**
 * Published when topology is initialized.
 *
 * @param {Object} topologyId A unique identifier for the topology
 */


var TopologyOpeningEvent = function TopologyOpeningEvent(topologyId) {
  _classCallCheck(this, TopologyOpeningEvent);

  Object.assign(this, {
    topologyId: topologyId
  });
};
/**
 * Published when topology is closed.
 *
 * @param {Object} topologyId A unique identifier for the topology
 */


var TopologyClosedEvent = function TopologyClosedEvent(topologyId) {
  _classCallCheck(this, TopologyClosedEvent);

  Object.assign(this, {
    topologyId: topologyId
  });
};
/**
 * Fired when the server monitor’s ismaster command is started - immediately before
 * the ismaster command is serialized into raw BSON and written to the socket.
 *
 * @property {Object} connectionId The connection id for the command
 */


var ServerHeartbeatStartedEvent = function ServerHeartbeatStartedEvent(connectionId) {
  _classCallCheck(this, ServerHeartbeatStartedEvent);

  Object.assign(this, {
    connectionId: connectionId
  });
};
/**
 * Fired when the server monitor’s ismaster succeeds.
 *
 * @param {Number} duration The execution time of the event in ms
 * @param {Object} reply The command reply
 * @param {Object} connectionId The connection id for the command
 */


var ServerHeartbeatSucceededEvent = function ServerHeartbeatSucceededEvent(duration, reply, connectionId) {
  _classCallCheck(this, ServerHeartbeatSucceededEvent);

  Object.assign(this, {
    duration: duration,
    reply: reply,
    connectionId: connectionId
  });
};
/**
 * Fired when the server monitor’s ismaster fails, either with an “ok: 0” or a socket exception.
 *
 * @param {Number} duration The execution time of the event in ms
 * @param {MongoError|Object} failure The command failure
 * @param {Object} connectionId The connection id for the command
 */


var ServerHeartbeatFailedEvent = function ServerHeartbeatFailedEvent(duration, failure, connectionId) {
  _classCallCheck(this, ServerHeartbeatFailedEvent);

  Object.assign(this, {
    duration: duration,
    failure: failure,
    connectionId: connectionId
  });
};
/**
 * Performs a server check as described by the SDAM spec.
 *
 * NOTE: This method automatically reschedules itself, so that there is always an active
 * monitoring process
 *
 * @param {Server} server The server to monitor
 */


function monitorServer(server, options) {
  options = options || {};
  var heartbeatFrequencyMS = options.heartbeatFrequencyMS || 10000;

  if (options.initial === true) {
    server.s.monitorId = setTimeout(function () {
      return monitorServer(server);
    }, heartbeatFrequencyMS);
    return;
  }

  var rescheduleMonitoring = function rescheduleMonitoring() {
    server.s.monitoring = false;
    server.s.monitorId = setTimeout(function () {
      server.s.monitorId = undefined;
      server.monitor();
    }, heartbeatFrequencyMS);
  }; // executes a single check of a server


  var checkServer = function checkServer(callback) {
    var start = process.hrtime(); // emit a signal indicating we have started the heartbeat

    server.emit('serverHeartbeatStarted', new ServerHeartbeatStartedEvent(server.name)); // NOTE: legacy monitoring event

    process.nextTick(function () {
      return server.emit('monitoring', server);
    });
    server.command('admin.$cmd', {
      ismaster: true
    }, {
      monitoring: true,
      socketTimeout: server.s.options.connectionTimeout || 2000
    }, function (err, result) {
      var duration = calculateDurationInMs(start);

      if (err) {
        server.emit('serverHeartbeatFailed', new ServerHeartbeatFailedEvent(duration, err, server.name));
        return callback(err, null);
      }

      var isMaster = result.result;
      server.emit('serverHeartbeatSucceeded', new ServerHeartbeatSucceededEvent(duration, isMaster, server.name));
      return callback(null, isMaster);
    });
  };

  var successHandler = function successHandler(isMaster) {
    // emit an event indicating that our description has changed
    server.emit('descriptionReceived', new ServerDescription(server.description.address, isMaster));

    if (server.s.state === STATE_CLOSED || server.s.state === STATE_CLOSING) {
      return;
    }

    rescheduleMonitoring();
  }; // run the actual monitoring loop


  server.s.monitoring = true;
  checkServer(function (err, isMaster) {
    if (!err) {
      successHandler(isMaster);
      return;
    } // According to the SDAM specification's "Network error during server check" section, if
    // an ismaster call fails we reset the server's pool. If a server was once connected,
    // change its type to `Unknown` only after retrying once.


    server.s.pool.reset(function () {
      // otherwise re-attempt monitoring once
      checkServer(function (error, isMaster) {
        if (error) {
          // we revert to an `Unknown` by emitting a default description with no isMaster
          server.emit('descriptionReceived', new ServerDescription(server.description.address, null, {
            error: error
          }));
          rescheduleMonitoring();
          return;
        }

        successHandler(isMaster);
      });
    });
  });
}

module.exports = {
  ServerDescriptionChangedEvent: ServerDescriptionChangedEvent,
  ServerOpeningEvent: ServerOpeningEvent,
  ServerClosedEvent: ServerClosedEvent,
  TopologyDescriptionChangedEvent: TopologyDescriptionChangedEvent,
  TopologyOpeningEvent: TopologyOpeningEvent,
  TopologyClosedEvent: TopologyClosedEvent,
  ServerHeartbeatStartedEvent: ServerHeartbeatStartedEvent,
  ServerHeartbeatSucceededEvent: ServerHeartbeatSucceededEvent,
  ServerHeartbeatFailedEvent: ServerHeartbeatFailedEvent,
  monitorServer: monitorServer
};