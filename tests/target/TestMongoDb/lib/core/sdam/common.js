'use strict'; // shared state names

require("core-js/modules/es.array.for-each");

require("core-js/modules/web.dom-collections.for-each");

var STATE_CLOSING = 'closing';
var STATE_CLOSED = 'closed';
var STATE_CONNECTING = 'connecting';
var STATE_CONNECTED = 'connected'; // An enumeration of topology types we know about

var TopologyType = {
  Single: 'Single',
  ReplicaSetNoPrimary: 'ReplicaSetNoPrimary',
  ReplicaSetWithPrimary: 'ReplicaSetWithPrimary',
  Sharded: 'Sharded',
  Unknown: 'Unknown'
}; // An enumeration of server types we know about

var ServerType = {
  Standalone: 'Standalone',
  Mongos: 'Mongos',
  PossiblePrimary: 'PossiblePrimary',
  RSPrimary: 'RSPrimary',
  RSSecondary: 'RSSecondary',
  RSArbiter: 'RSArbiter',
  RSOther: 'RSOther',
  RSGhost: 'RSGhost',
  Unknown: 'Unknown'
};
var TOPOLOGY_DEFAULTS = {
  useUnifiedTopology: true,
  localThresholdMS: 15,
  serverSelectionTimeoutMS: 30000,
  heartbeatFrequencyMS: 10000,
  minHeartbeatFrequencyMS: 500
};

function drainTimerQueue(queue) {
  queue.forEach(clearTimeout);
  queue.clear();
}

function clearAndRemoveTimerFrom(timer, timers) {
  clearTimeout(timer);
  return timers["delete"](timer);
}

module.exports = {
  STATE_CLOSING: STATE_CLOSING,
  STATE_CLOSED: STATE_CLOSED,
  STATE_CONNECTING: STATE_CONNECTING,
  STATE_CONNECTED: STATE_CONNECTED,
  TOPOLOGY_DEFAULTS: TOPOLOGY_DEFAULTS,
  TopologyType: TopologyType,
  ServerType: ServerType,
  drainTimerQueue: drainTimerQueue,
  clearAndRemoveTimerFrom: clearAndRemoveTimerFrom
};