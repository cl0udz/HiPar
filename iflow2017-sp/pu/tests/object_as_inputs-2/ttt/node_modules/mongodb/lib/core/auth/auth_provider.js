'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MongoError = require('../error').MongoError;
/**
 * Creates a new AuthProvider, which dictates how to authenticate for a given
 * mechanism.
 * @class
 */


var AuthProvider =
/*#__PURE__*/
function () {
  function AuthProvider(bson) {
    _classCallCheck(this, AuthProvider);

    this.bson = bson;
    this.authStore = [];
  }
  /**
   * Authenticate
   * @method
   * @param {SendAuthCommand} sendAuthCommand Writes an auth command directly to a specific connection
   * @param {Connection[]} connections Connections to authenticate using this authenticator
   * @param {MongoCredentials} credentials Authentication credentials
   * @param {authResultCallback} callback The callback to return the result from the authentication
   */


  _createClass(AuthProvider, [{
    key: "auth",
    value: function auth(sendAuthCommand, connections, credentials, callback) {
      var _this = this;

      // Total connections
      var count = connections.length;

      if (count === 0) {
        callback(null, null);
        return;
      } // Valid connections


      var numberOfValidConnections = 0;
      var errorObject = null;

      var execute = function execute(connection) {
        _this._authenticateSingleConnection(sendAuthCommand, connection, credentials, function (err, r) {
          // Adjust count
          count = count - 1; // If we have an error

          if (err) {
            errorObject = new MongoError(err);
          } else if (r && (r.$err || r.errmsg)) {
            errorObject = new MongoError(r);
          } else {
            numberOfValidConnections = numberOfValidConnections + 1;
          } // Still authenticating against other connections.


          if (count !== 0) {
            return;
          } // We have authenticated all connections


          if (numberOfValidConnections > 0) {
            // Store the auth details
            _this.addCredentials(credentials); // Return correct authentication


            callback(null, true);
          } else {
            if (errorObject == null) {
              errorObject = new MongoError("failed to authenticate using ".concat(credentials.mechanism));
            }

            callback(errorObject, false);
          }
        });
      };

      var executeInNextTick = function executeInNextTick(_connection) {
        return process.nextTick(function () {
          return execute(_connection);
        });
      }; // For each connection we need to authenticate


      while (connections.length > 0) {
        executeInNextTick(connections.shift());
      }
    }
    /**
     * Implementation of a single connection authenticating. Is meant to be overridden.
     * Will error if called directly
     * @ignore
     */

  }, {
    key: "_authenticateSingleConnection",
    value: function _authenticateSingleConnection()
    /*sendAuthCommand, connection, credentials, callback*/
    {
      throw new Error('_authenticateSingleConnection must be overridden');
    }
    /**
     * Adds credentials to store only if it does not exist
     * @param {MongoCredentials} credentials credentials to add to store
     */

  }, {
    key: "addCredentials",
    value: function addCredentials(credentials) {
      var found = this.authStore.some(function (cred) {
        return cred.equals(credentials);
      });

      if (!found) {
        this.authStore.push(credentials);
      }
    }
    /**
     * Re authenticate pool
     * @method
     * @param {SendAuthCommand} sendAuthCommand Writes an auth command directly to a specific connection
     * @param {Connection[]} connections Connections to authenticate using this authenticator
     * @param {authResultCallback} callback The callback to return the result from the authentication
     */

  }, {
    key: "reauthenticate",
    value: function reauthenticate(sendAuthCommand, connections, callback) {
      var authStore = this.authStore.slice(0);
      var count = authStore.length;

      if (count === 0) {
        return callback(null, null);
      }

      for (var i = 0; i < authStore.length; i++) {
        this.auth(sendAuthCommand, connections, authStore[i], function (err) {
          count = count - 1;

          if (count === 0) {
            callback(err, null);
          }
        });
      }
    }
    /**
     * Remove credentials that have been previously stored in the auth provider
     * @method
     * @param {string} source Name of database we are removing authStore details about
     * @return {object}
     */

  }, {
    key: "logout",
    value: function logout(source) {
      this.authStore = this.authStore.filter(function (credentials) {
        return credentials.source !== source;
      });
    }
  }]);

  return AuthProvider;
}();
/**
 * A function that writes authentication commands to a specific connection
 * @callback SendAuthCommand
 * @param {Connection} connection The connection to write to
 * @param {Command} command A command with a toBin method that can be written to a connection
 * @param {AuthWriteCallback} callback Callback called when command response is received
 */

/**
 * A callback for a specific auth command
 * @callback AuthWriteCallback
 * @param {Error} err If command failed, an error from the server
 * @param {object} r The response from the server
 */

/**
 * This is a result from an authentication strategy
 *
 * @callback authResultCallback
 * @param {error} error An error object. Set to null if no error present
 * @param {boolean} result The result of the authentication process
 */


module.exports = {
  AuthProvider: AuthProvider
};