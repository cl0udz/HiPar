'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.some");

require("core-js/modules/es.map");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ServerType = require('./common').ServerType;

var ServerDescription = require('./server_description').ServerDescription;

var WIRE_CONSTANTS = require('../wireprotocol/constants');

var TopologyType = require('./common').TopologyType; // contstants related to compatability checks


var MIN_SUPPORTED_SERVER_VERSION = WIRE_CONSTANTS.MIN_SUPPORTED_SERVER_VERSION;
var MAX_SUPPORTED_SERVER_VERSION = WIRE_CONSTANTS.MAX_SUPPORTED_SERVER_VERSION;
var MIN_SUPPORTED_WIRE_VERSION = WIRE_CONSTANTS.MIN_SUPPORTED_WIRE_VERSION;
var MAX_SUPPORTED_WIRE_VERSION = WIRE_CONSTANTS.MAX_SUPPORTED_WIRE_VERSION; // Representation of a deployment of servers

var TopologyDescription =
/*#__PURE__*/
function () {
  /**
   * Create a TopologyDescription
   *
   * @param {string} topologyType
   * @param {Map<string, ServerDescription>} serverDescriptions the a map of address to ServerDescription
   * @param {string} setName
   * @param {number} maxSetVersion
   * @param {ObjectId} maxElectionId
   */
  function TopologyDescription(topologyType, serverDescriptions, setName, maxSetVersion, maxElectionId, commonWireVersion, options, error) {
    _classCallCheck(this, TopologyDescription);

    options = options || {}; // TODO: consider assigning all these values to a temporary value `s` which
    //       we use `Object.freeze` on, ensuring the internal state of this type
    //       is immutable.

    this.type = topologyType || TopologyType.Unknown;
    this.setName = setName || null;
    this.maxSetVersion = maxSetVersion || null;
    this.maxElectionId = maxElectionId || null;
    this.servers = serverDescriptions || new Map();
    this.stale = false;
    this.compatible = true;
    this.compatibilityError = null;
    this.logicalSessionTimeoutMinutes = null;
    this.heartbeatFrequencyMS = options.heartbeatFrequencyMS || 0;
    this.localThresholdMS = options.localThresholdMS || 0;
    this.error = error;
    this.commonWireVersion = commonWireVersion || null; // save this locally, but don't display when printing the instance out

    Object.defineProperty(this, 'options', {
      value: options,
      enumberable: false
    }); // determine server compatibility

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.servers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var serverDescription = _step.value;
        if (serverDescription.type === ServerType.Unknown) continue;

        if (serverDescription.minWireVersion > MAX_SUPPORTED_WIRE_VERSION) {
          this.compatible = false;
          this.compatibilityError = "Server at ".concat(serverDescription.address, " requires wire version ").concat(serverDescription.minWireVersion, ", but this version of the driver only supports up to ").concat(MAX_SUPPORTED_WIRE_VERSION, " (MongoDB ").concat(MAX_SUPPORTED_SERVER_VERSION, ")");
        }

        if (serverDescription.maxWireVersion < MIN_SUPPORTED_WIRE_VERSION) {
          this.compatible = false;
          this.compatibilityError = "Server at ".concat(serverDescription.address, " reports wire version ").concat(serverDescription.maxWireVersion, ", but this version of the driver requires at least ").concat(MIN_SUPPORTED_WIRE_VERSION, " (MongoDB ").concat(MIN_SUPPORTED_SERVER_VERSION, ").");
          break;
        }
      } // Whenever a client updates the TopologyDescription from an ismaster response, it MUST set
      // TopologyDescription.logicalSessionTimeoutMinutes to the smallest logicalSessionTimeoutMinutes
      // value among ServerDescriptions of all data-bearing server types. If any have a null
      // logicalSessionTimeoutMinutes, then TopologyDescription.logicalSessionTimeoutMinutes MUST be
      // set to null.

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var readableServers = Array.from(this.servers.values()).filter(function (s) {
      return s.isReadable;
    });
    this.logicalSessionTimeoutMinutes = readableServers.reduce(function (result, server) {
      if (server.logicalSessionTimeoutMinutes == null) return null;
      if (result == null) return server.logicalSessionTimeoutMinutes;
      return Math.min(result, server.logicalSessionTimeoutMinutes);
    }, null);
  }
  /**
   * Returns a new TopologyDescription based on the SrvPollingEvent
   * @param {SrvPollingEvent} ev The event
   */


  _createClass(TopologyDescription, [{
    key: "updateFromSrvPollingEvent",
    value: function updateFromSrvPollingEvent(ev) {
      var newAddresses = ev.addresses();
      var serverDescriptions = new Map(this.servers);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.servers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var server = _step2.value;

          if (newAddresses.has(server[0])) {
            newAddresses["delete"](server[0]);
          } else {
            serverDescriptions["delete"](server[0]);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (serverDescriptions.size === this.servers.size && newAddresses.size === 0) {
        return this;
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = newAddresses[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var address = _step3.value;
          serverDescriptions.set(address, new ServerDescription(address));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return new TopologyDescription(this.type, serverDescriptions, this.setName, this.maxSetVersion, this.maxElectionId, this.commonWireVersion, this.options, null);
    }
    /**
     * Returns a copy of this description updated with a given ServerDescription
     *
     * @param {ServerDescription} serverDescription
     */

  }, {
    key: "update",
    value: function update(serverDescription) {
      var address = serverDescription.address; // NOTE: there are a number of prime targets for refactoring here
      //       once we support destructuring assignments
      // potentially mutated values

      var topologyType = this.type;
      var setName = this.setName;
      var maxSetVersion = this.maxSetVersion;
      var maxElectionId = this.maxElectionId;
      var commonWireVersion = this.commonWireVersion;
      var error = serverDescription.error || this.error;
      var serverType = serverDescription.type;
      var serverDescriptions = new Map(this.servers); // update common wire version

      if (serverDescription.maxWireVersion !== 0) {
        if (commonWireVersion == null) {
          commonWireVersion = serverDescription.maxWireVersion;
        } else {
          commonWireVersion = Math.min(commonWireVersion, serverDescription.maxWireVersion);
        }
      } // update the actual server description


      serverDescriptions.set(address, serverDescription);

      if (topologyType === TopologyType.Single) {
        // once we are defined as single, that never changes
        return new TopologyDescription(TopologyType.Single, serverDescriptions, setName, maxSetVersion, maxElectionId, commonWireVersion, this.options, error);
      }

      if (topologyType === TopologyType.Unknown) {
        if (serverType === ServerType.Standalone) {
          serverDescriptions["delete"](address);
        } else {
          topologyType = topologyTypeForServerType(serverType);
        }
      }

      if (topologyType === TopologyType.Sharded) {
        if ([ServerType.Mongos, ServerType.Unknown].indexOf(serverType) === -1) {
          serverDescriptions["delete"](address);
        }
      }

      if (topologyType === TopologyType.ReplicaSetNoPrimary) {
        if ([ServerType.Standalone, ServerType.Mongos].indexOf(serverType) >= 0) {
          serverDescriptions["delete"](address);
        }

        if (serverType === ServerType.RSPrimary) {
          var result = updateRsFromPrimary(serverDescriptions, setName, serverDescription, maxSetVersion, maxElectionId);
          topologyType = result[0], setName = result[1], maxSetVersion = result[2], maxElectionId = result[3];
        } else if ([ServerType.RSSecondary, ServerType.RSArbiter, ServerType.RSOther].indexOf(serverType) >= 0) {
          var _result = updateRsNoPrimaryFromMember(serverDescriptions, setName, serverDescription);

          topologyType = _result[0], setName = _result[1];
        }
      }

      if (topologyType === TopologyType.ReplicaSetWithPrimary) {
        if ([ServerType.Standalone, ServerType.Mongos].indexOf(serverType) >= 0) {
          serverDescriptions["delete"](address);
          topologyType = checkHasPrimary(serverDescriptions);
        } else if (serverType === ServerType.RSPrimary) {
          var _result2 = updateRsFromPrimary(serverDescriptions, setName, serverDescription, maxSetVersion, maxElectionId);

          topologyType = _result2[0], setName = _result2[1], maxSetVersion = _result2[2], maxElectionId = _result2[3];
        } else if ([ServerType.RSSecondary, ServerType.RSArbiter, ServerType.RSOther].indexOf(serverType) >= 0) {
          topologyType = updateRsWithPrimaryFromMember(serverDescriptions, setName, serverDescription);
        } else {
          topologyType = checkHasPrimary(serverDescriptions);
        }
      }

      return new TopologyDescription(topologyType, serverDescriptions, setName, maxSetVersion, maxElectionId, commonWireVersion, this.options, error);
    }
    /**
     * Determines if the topology description has any known servers
     */

  }, {
    key: "hasServer",

    /**
     * Determines if the topology has a definition for the provided address
     *
     * @param {String} address
     * @return {Boolean} Whether the topology knows about this server
     */
    value: function hasServer(address) {
      return this.servers.has(address);
    }
  }, {
    key: "hasKnownServers",
    get: function get() {
      return Array.from(this.servers.values()).some(function (sd) {
        return sd.type !== ServerType.Unknown;
      });
    }
    /**
     * Determines if this topology description has a data-bearing server available.
     */

  }, {
    key: "hasDataBearingServers",
    get: function get() {
      return Array.from(this.servers.values()).some(function (sd) {
        return sd.isDataBearing;
      });
    }
  }]);

  return TopologyDescription;
}();

function topologyTypeForServerType(serverType) {
  if (serverType === ServerType.Mongos) return TopologyType.Sharded;
  if (serverType === ServerType.RSPrimary) return TopologyType.ReplicaSetWithPrimary;
  return TopologyType.ReplicaSetNoPrimary;
}

function updateRsFromPrimary(serverDescriptions, setName, serverDescription, maxSetVersion, maxElectionId) {
  setName = setName || serverDescription.setName;

  if (setName !== serverDescription.setName) {
    serverDescriptions["delete"](serverDescription.address);
    return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
  }

  var electionIdOID = serverDescription.electionId ? serverDescription.electionId.$oid : null;
  var maxElectionIdOID = maxElectionId ? maxElectionId.$oid : null;

  if (serverDescription.setVersion != null && electionIdOID != null) {
    if (maxSetVersion != null && maxElectionIdOID != null) {
      if (maxSetVersion > serverDescription.setVersion || maxElectionIdOID > electionIdOID) {
        // this primary is stale, we must remove it
        serverDescriptions.set(serverDescription.address, new ServerDescription(serverDescription.address));
        return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
      }
    }

    maxElectionId = serverDescription.electionId;
  }

  if (serverDescription.setVersion != null && (maxSetVersion == null || serverDescription.setVersion > maxSetVersion)) {
    maxSetVersion = serverDescription.setVersion;
  } // We've heard from the primary. Is it the same primary as before?


  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = serverDescriptions.keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var address = _step4.value;
      var server = serverDescriptions.get(address);

      if (server.type === ServerType.RSPrimary && server.address !== serverDescription.address) {
        // Reset old primary's type to Unknown.
        serverDescriptions.set(address, new ServerDescription(server.address)); // There can only be one primary

        break;
      }
    } // Discover new hosts from this primary's response.

  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  serverDescription.allHosts.forEach(function (address) {
    if (!serverDescriptions.has(address)) {
      serverDescriptions.set(address, new ServerDescription(address));
    }
  }); // Remove hosts not in the response.

  var currentAddresses = Array.from(serverDescriptions.keys());
  var responseAddresses = serverDescription.allHosts;
  currentAddresses.filter(function (addr) {
    return responseAddresses.indexOf(addr) === -1;
  }).forEach(function (address) {
    serverDescriptions["delete"](address);
  });
  return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
}

function updateRsWithPrimaryFromMember(serverDescriptions, setName, serverDescription) {
  if (setName == null) {
    throw new TypeError('setName is required');
  }

  if (setName !== serverDescription.setName || serverDescription.me && serverDescription.address !== serverDescription.me) {
    serverDescriptions["delete"](serverDescription.address);
  }

  return checkHasPrimary(serverDescriptions);
}

function updateRsNoPrimaryFromMember(serverDescriptions, setName, serverDescription) {
  var topologyType = TopologyType.ReplicaSetNoPrimary;
  setName = setName || serverDescription.setName;

  if (setName !== serverDescription.setName) {
    serverDescriptions["delete"](serverDescription.address);
    return [topologyType, setName];
  }

  serverDescription.allHosts.forEach(function (address) {
    if (!serverDescriptions.has(address)) {
      serverDescriptions.set(address, new ServerDescription(address));
    }
  });

  if (serverDescription.me && serverDescription.address !== serverDescription.me) {
    serverDescriptions["delete"](serverDescription.address);
  }

  return [topologyType, setName];
}

function checkHasPrimary(serverDescriptions) {
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = serverDescriptions.keys()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var addr = _step5.value;

      if (serverDescriptions.get(addr).type === ServerType.RSPrimary) {
        return TopologyType.ReplicaSetWithPrimary;
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return TopologyType.ReplicaSetNoPrimary;
}

module.exports = {
  TopologyDescription: TopologyDescription
};