'use strict';

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayStrictEqual = require('../utils').arrayStrictEqual;

var tagsStrictEqual = require('../utils').tagsStrictEqual;

var ServerType = require('./common').ServerType;

var WRITABLE_SERVER_TYPES = new Set([ServerType.RSPrimary, ServerType.Standalone, ServerType.Mongos]);
var DATA_BEARING_SERVER_TYPES = new Set([ServerType.RSPrimary, ServerType.RSSecondary, ServerType.Mongos, ServerType.Standalone]);
var ISMASTER_FIELDS = ['minWireVersion', 'maxWireVersion', 'maxBsonObjectSize', 'maxMessageSizeBytes', 'maxWriteBatchSize', 'compression', 'me', 'hosts', 'passives', 'arbiters', 'tags', 'setName', 'setVersion', 'electionId', 'primary', 'logicalSessionTimeoutMinutes', 'saslSupportedMechs', '__nodejs_mock_server__', '$clusterTime'];
/**
 * The client's view of a single server, based on the most recent ismaster outcome.
 *
 * Internal type, not meant to be directly instantiated
 */

var ServerDescription =
/*#__PURE__*/
function () {
  /**
   * Create a ServerDescription
   * @param {String} address The address of the server
   * @param {Object} [ismaster] An optional ismaster response for this server
   * @param {Object} [options] Optional settings
   * @param {Number} [options.roundTripTime] The round trip time to ping this server (in ms)
   */
  function ServerDescription(address, ismaster, options) {
    var _this = this;

    _classCallCheck(this, ServerDescription);

    options = options || {};
    ismaster = Object.assign({
      minWireVersion: 0,
      maxWireVersion: 0,
      hosts: [],
      passives: [],
      arbiters: [],
      tags: []
    }, ismaster);
    this.address = address;
    this.error = options.error || null;
    this.roundTripTime = options.roundTripTime || 0;
    this.lastUpdateTime = Date.now();
    this.lastWriteDate = ismaster.lastWrite ? ismaster.lastWrite.lastWriteDate : null;
    this.opTime = ismaster.lastWrite ? ismaster.lastWrite.opTime : null;
    this.type = parseServerType(ismaster); // direct mappings

    ISMASTER_FIELDS.forEach(function (field) {
      if (typeof ismaster[field] !== 'undefined') _this[field] = ismaster[field];
    }); // normalize case for hosts

    if (this.me) this.me = this.me.toLowerCase();
    this.hosts = this.hosts.map(function (host) {
      return host.toLowerCase();
    });
    this.passives = this.passives.map(function (host) {
      return host.toLowerCase();
    });
    this.arbiters = this.arbiters.map(function (host) {
      return host.toLowerCase();
    });
  }

  _createClass(ServerDescription, [{
    key: "equals",

    /**
     * Determines if another `ServerDescription` is equal to this one per the rules defined
     * in the {@link https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst#serverdescription|SDAM spec}
     *
     * @param {ServerDescription} other
     * @return {Boolean}
     */
    value: function equals(other) {
      return other != null && this.error === other.error && this.type === other.type && this.minWireVersion === other.minWireVersion && this.me === other.me && arrayStrictEqual(this.hosts, other.hosts) && tagsStrictEqual(this.tags, other.tags) && this.setName === other.setName && this.setVersion === other.setVersion && (this.electionId ? other.electionId && this.electionId.equals(other.electionId) : this.electionId === other.electionId) && this.primary === other.primary && this.logicalSessionTimeoutMinutes === other.logicalSessionTimeoutMinutes;
    }
  }, {
    key: "allHosts",
    get: function get() {
      return this.hosts.concat(this.arbiters).concat(this.passives);
    }
    /**
     * @return {Boolean} Is this server available for reads
     */

  }, {
    key: "isReadable",
    get: function get() {
      return this.type === ServerType.RSSecondary || this.isWritable;
    }
    /**
     * @return {Boolean} Is this server data bearing
     */

  }, {
    key: "isDataBearing",
    get: function get() {
      return DATA_BEARING_SERVER_TYPES.has(this.type);
    }
    /**
     * @return {Boolean} Is this server available for writes
     */

  }, {
    key: "isWritable",
    get: function get() {
      return WRITABLE_SERVER_TYPES.has(this.type);
    }
  }]);

  return ServerDescription;
}();
/**
 * Parses an `ismaster` message and determines the server type
 *
 * @param {Object} ismaster The `ismaster` message to parse
 * @return {ServerType}
 */


function parseServerType(ismaster) {
  if (!ismaster || !ismaster.ok) {
    return ServerType.Unknown;
  }

  if (ismaster.isreplicaset) {
    return ServerType.RSGhost;
  }

  if (ismaster.msg && ismaster.msg === 'isdbgrid') {
    return ServerType.Mongos;
  }

  if (ismaster.setName) {
    if (ismaster.hidden) {
      return ServerType.RSOther;
    } else if (ismaster.ismaster) {
      return ServerType.RSPrimary;
    } else if (ismaster.secondary) {
      return ServerType.RSSecondary;
    } else if (ismaster.arbiterOnly) {
      return ServerType.RSArbiter;
    } else {
      return ServerType.RSOther;
    }
  }

  return ServerType.Standalone;
}

module.exports = {
  ServerDescription: ServerDescription
};