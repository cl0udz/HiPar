'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.timers");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ServerType = require('./common').ServerType;

var TopologyType = require('./common').TopologyType;

var ReadPreference = require('../topologies/read_preference');

var MongoError = require('../error').MongoError;

var calculateDurationInMs = require('../utils').calculateDurationInMs;

var MongoTimeoutError = require('../error').MongoTimeoutError;

var common = require('./common');

var STATE_CLOSED = common.STATE_CLOSED;
var clearAndRemoveTimerFrom = common.clearAndRemoveTimerFrom; // max staleness constants

var IDLE_WRITE_PERIOD = 10000;
var SMALLEST_MAX_STALENESS_SECONDS = 90;
/**
 * Returns a server selector that selects for writable servers
 */

function writableServerSelector() {
  return function (topologyDescription, servers) {
    return latencyWindowReducer(topologyDescription, servers.filter(function (s) {
      return s.isWritable;
    }));
  };
}
/**
 * Reduces the passed in array of servers by the rules of the "Max Staleness" specification
 * found here: https://github.com/mongodb/specifications/blob/master/source/max-staleness/max-staleness.rst
 *
 * @param {ReadPreference} readPreference The read preference providing max staleness guidance
 * @param {topologyDescription} topologyDescription The topology description
 * @param {ServerDescription[]} servers The list of server descriptions to be reduced
 * @return {ServerDescription[]} The list of servers that satisfy the requirements of max staleness
 */


function maxStalenessReducer(readPreference, topologyDescription, servers) {
  if (readPreference.maxStalenessSeconds == null || readPreference.maxStalenessSeconds < 0) {
    return servers;
  }

  var maxStaleness = readPreference.maxStalenessSeconds;
  var maxStalenessVariance = (topologyDescription.heartbeatFrequencyMS + IDLE_WRITE_PERIOD) / 1000;

  if (maxStaleness < maxStalenessVariance) {
    throw new MongoError("maxStalenessSeconds must be at least ".concat(maxStalenessVariance, " seconds"));
  }

  if (maxStaleness < SMALLEST_MAX_STALENESS_SECONDS) {
    throw new MongoError("maxStalenessSeconds must be at least ".concat(SMALLEST_MAX_STALENESS_SECONDS, " seconds"));
  }

  if (topologyDescription.type === TopologyType.ReplicaSetWithPrimary) {
    var primary = servers.filter(primaryFilter)[0];
    return servers.reduce(function (result, server) {
      var stalenessMS = server.lastUpdateTime - server.lastWriteDate - (primary.lastUpdateTime - primary.lastWriteDate) + topologyDescription.heartbeatFrequencyMS;
      var staleness = stalenessMS / 1000;
      if (staleness <= readPreference.maxStalenessSeconds) result.push(server);
      return result;
    }, []);
  } else if (topologyDescription.type === TopologyType.ReplicaSetNoPrimary) {
    var sMax = servers.reduce(function (max, s) {
      return s.lastWriteDate > max.lastWriteDate ? s : max;
    });
    return servers.reduce(function (result, server) {
      var stalenessMS = sMax.lastWriteDate - server.lastWriteDate + topologyDescription.heartbeatFrequencyMS;
      var staleness = stalenessMS / 1000;
      if (staleness <= readPreference.maxStalenessSeconds) result.push(server);
      return result;
    }, []);
  }

  return servers;
}
/**
 * Determines whether a server's tags match a given set of tags
 *
 * @param {String[]} tagSet The requested tag set to match
 * @param {String[]} serverTags The server's tags
 */


function tagSetMatch(tagSet, serverTags) {
  var keys = Object.keys(tagSet);
  var serverTagKeys = Object.keys(serverTags);

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];

    if (serverTagKeys.indexOf(key) === -1 || serverTags[key] !== tagSet[key]) {
      return false;
    }
  }

  return true;
}
/**
 * Reduces a set of server descriptions based on tags requested by the read preference
 *
 * @param {ReadPreference} readPreference The read preference providing the requested tags
 * @param {ServerDescription[]} servers The list of server descriptions to reduce
 * @return {ServerDescription[]} The list of servers matching the requested tags
 */


function tagSetReducer(readPreference, servers) {
  if (readPreference.tags == null || Array.isArray(readPreference.tags) && readPreference.tags.length === 0) {
    return servers;
  }

  var _loop = function _loop(i) {
    var tagSet = readPreference.tags[i];
    var serversMatchingTagset = servers.reduce(function (matched, server) {
      if (tagSetMatch(tagSet, server.tags)) matched.push(server);
      return matched;
    }, []);

    if (serversMatchingTagset.length) {
      return {
        v: serversMatchingTagset
      };
    }
  };

  for (var i = 0; i < readPreference.tags.length; ++i) {
    var _ret = _loop(i);

    if (_typeof(_ret) === "object") return _ret.v;
  }

  return [];
}
/**
 * Reduces a list of servers to ensure they fall within an acceptable latency window. This is
 * further specified in the "Server Selection" specification, found here:
 * https://github.com/mongodb/specifications/blob/master/source/server-selection/server-selection.rst
 *
 * @param {topologyDescription} topologyDescription The topology description
 * @param {ServerDescription[]} servers The list of servers to reduce
 * @returns {ServerDescription[]} The servers which fall within an acceptable latency window
 */


function latencyWindowReducer(topologyDescription, servers) {
  var low = servers.reduce(function (min, server) {
    return min === -1 ? server.roundTripTime : Math.min(server.roundTripTime, min);
  }, -1);
  var high = low + topologyDescription.localThresholdMS;
  return servers.reduce(function (result, server) {
    if (server.roundTripTime <= high && server.roundTripTime >= low) result.push(server);
    return result;
  }, []);
} // filters


function primaryFilter(server) {
  return server.type === ServerType.RSPrimary;
}

function secondaryFilter(server) {
  return server.type === ServerType.RSSecondary;
}

function nearestFilter(server) {
  return server.type === ServerType.RSSecondary || server.type === ServerType.RSPrimary;
}

function knownFilter(server) {
  return server.type !== ServerType.Unknown;
}
/**
 * Returns a function which selects servers based on a provided read preference
 *
 * @param {ReadPreference} readPreference The read preference to select with
 */


function readPreferenceServerSelector(readPreference) {
  if (!readPreference.isValid()) {
    throw new TypeError('Invalid read preference specified');
  }

  return function (topologyDescription, servers) {
    var commonWireVersion = topologyDescription.commonWireVersion;

    if (commonWireVersion && readPreference.minWireVersion && readPreference.minWireVersion > commonWireVersion) {
      throw new MongoError("Minimum wire version '".concat(readPreference.minWireVersion, "' required, but found '").concat(commonWireVersion, "'"));
    }

    if (topologyDescription.type === TopologyType.Single || topologyDescription.type === TopologyType.Sharded) {
      return latencyWindowReducer(topologyDescription, servers.filter(knownFilter));
    }

    if (readPreference.mode === ReadPreference.PRIMARY) {
      return servers.filter(primaryFilter);
    }

    if (readPreference.mode === ReadPreference.SECONDARY) {
      return latencyWindowReducer(topologyDescription, tagSetReducer(readPreference, maxStalenessReducer(readPreference, topologyDescription, servers))).filter(secondaryFilter);
    } else if (readPreference.mode === ReadPreference.NEAREST) {
      return latencyWindowReducer(topologyDescription, tagSetReducer(readPreference, maxStalenessReducer(readPreference, topologyDescription, servers))).filter(nearestFilter);
    } else if (readPreference.mode === ReadPreference.SECONDARY_PREFERRED) {
      var result = latencyWindowReducer(topologyDescription, tagSetReducer(readPreference, maxStalenessReducer(readPreference, topologyDescription, servers))).filter(secondaryFilter);
      return result.length === 0 ? servers.filter(primaryFilter) : result;
    } else if (readPreference.mode === ReadPreference.PRIMARY_PREFERRED) {
      var _result = servers.filter(primaryFilter);

      if (_result.length) {
        return _result;
      }

      return latencyWindowReducer(topologyDescription, tagSetReducer(readPreference, maxStalenessReducer(readPreference, topologyDescription, servers))).filter(secondaryFilter);
    }
  };
}
/**
 * Selects servers using the provided selector
 *
 * @private
 * @param {Topology} topology The topology to select servers from
 * @param {function} selector The predicate used for selecting servers
 * @param {Number} timeout The max time we are willing wait for selection
 * @param {Number} start A high precision timestamp for the start of the selection process
 * @param {function} callback The callback used to convey errors or the resultant servers
 */


function selectServers(topology, selector, timeout, start, callback) {
  var duration = calculateDurationInMs(start);

  if (duration >= timeout) {
    return callback(new MongoTimeoutError("Server selection timed out after ".concat(timeout, " ms")), topology.description.error);
  } // explicitly disallow selection if client is closed


  if (topology.s.state === STATE_CLOSED) {
    callback(new MongoError('Topology is closed, please connect'));
    return;
  } // otherwise, attempt server selection


  var serverDescriptions = Array.from(topology.description.servers.values());
  var descriptions; // support server selection by options with readPreference

  if (_typeof(selector) === 'object') {
    var readPreference = selector.readPreference ? selector.readPreference : ReadPreference.primary;
    selector = readPreferenceServerSelector(readPreference);
  }

  try {
    descriptions = selector ? selector(topology.description, serverDescriptions) : serverDescriptions;
  } catch (e) {
    return callback(e, null);
  }

  if (descriptions.length) {
    var servers = descriptions.map(function (description) {
      return topology.s.servers.get(description.address);
    });
    return callback(null, servers);
  }

  var retrySelection = function retrySelection() {
    // ensure all server monitors attempt monitoring soon
    topology.s.servers.forEach(function (server) {
      return server.monitor({
        heartbeatFrequencyMS: topology.description.heartbeatFrequencyMS
      });
    });
    var iterationTimer = setTimeout(function () {
      topology.removeListener('topologyDescriptionChanged', descriptionChangedHandler);
      callback(new MongoTimeoutError("Server selection timed out after ".concat(timeout, " ms"), topology.description.error));
    }, timeout - duration);

    var descriptionChangedHandler = function descriptionChangedHandler() {
      // successful iteration, clear the check timer
      clearAndRemoveTimerFrom(iterationTimer, topology.s.iterationTimers); // topology description has changed due to monitoring, reattempt server selection

      selectServers(topology, selector, timeout, start, callback);
    }; // track this timer in case we need to clean it up outside this loop


    topology.s.iterationTimers.add(iterationTimer);
    topology.once('topologyDescriptionChanged', descriptionChangedHandler);
  };

  retrySelection();
}

module.exports = {
  selectServers: selectServers,
  writableServerSelector: writableServerSelector,
  readPreferenceServerSelector: readPreferenceServerSelector
};