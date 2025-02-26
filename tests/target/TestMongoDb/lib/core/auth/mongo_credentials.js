'use strict'; // Resolves the default auth mechanism according to
// https://github.com/mongodb/specifications/blob/master/source/auth/auth.rst

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.object.define-property");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function getDefaultAuthMechanism(ismaster) {
  if (ismaster) {
    // If ismaster contains saslSupportedMechs, use scram-sha-256
    // if it is available, else scram-sha-1
    if (Array.isArray(ismaster.saslSupportedMechs)) {
      return ismaster.saslSupportedMechs.indexOf('SCRAM-SHA-256') >= 0 ? 'scram-sha-256' : 'scram-sha-1';
    } // Fallback to legacy selection method. If wire version >= 3, use scram-sha-1


    if (ismaster.maxWireVersion >= 3) {
      return 'scram-sha-1';
    }
  } // Default for wireprotocol < 3


  return 'mongocr';
}
/**
 * A representation of the credentials used by MongoDB
 * @class
 * @property {string} mechanism The method used to authenticate
 * @property {string} [username] The username used for authentication
 * @property {string} [password] The password used for authentication
 * @property {string} [source] The database that the user should authenticate against
 * @property {object} [mechanismProperties] Special properties used by some types of auth mechanisms
 */


var MongoCredentials =
/*#__PURE__*/
function () {
  /**
   * Creates a new MongoCredentials object
   * @param {object} [options]
   * @param {string} [options.username] The username used for authentication
   * @param {string} [options.password] The password used for authentication
   * @param {string} [options.source] The database that the user should authenticate against
   * @param {string} [options.mechanism] The method used to authenticate
   * @param {object} [options.mechanismProperties] Special properties used by some types of auth mechanisms
   */
  function MongoCredentials(options) {
    _classCallCheck(this, MongoCredentials);

    options = options || {};
    this.username = options.username;
    this.password = options.password;
    this.source = options.source || options.db;
    this.mechanism = options.mechanism || 'default';
    this.mechanismProperties = options.mechanismProperties;
  }
  /**
   * Determines if two MongoCredentials objects are equivalent
   * @param {MongoCredentials} other another MongoCredentials object
   * @returns {boolean} true if the two objects are equal.
   */


  _createClass(MongoCredentials, [{
    key: "equals",
    value: function equals(other) {
      return this.mechanism === other.mechanism && this.username === other.username && this.password === other.password && this.source === other.source;
    }
    /**
     * If the authentication mechanism is set to "default", resolves the authMechanism
     * based on the server version and server supported sasl mechanisms.
     *
     * @param {Object} [ismaster] An ismaster response from the server
     */

  }, {
    key: "resolveAuthMechanism",
    value: function resolveAuthMechanism(ismaster) {
      // If the mechanism is not "default", then it does not need to be resolved
      if (this.mechanism.toLowerCase() === 'default') {
        this.mechanism = getDefaultAuthMechanism(ismaster);
      }
    }
  }]);

  return MongoCredentials;
}();

module.exports = {
  MongoCredentials: MongoCredentials
};