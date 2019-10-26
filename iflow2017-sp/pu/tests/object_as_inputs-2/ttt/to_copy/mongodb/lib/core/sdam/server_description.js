'use strict'; // An enumeration of server types we know about

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  ServerDescription: ServerDescription,
  ServerType: ServerType
};