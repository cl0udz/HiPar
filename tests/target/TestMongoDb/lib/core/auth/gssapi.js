'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AuthProvider = require('./auth_provider').AuthProvider;

var retrieveKerberos = require('../utils').retrieveKerberos;

var kerberos;
/**
 * Creates a new GSSAPI authentication mechanism
 * @class
 * @extends AuthProvider
 */

var GSSAPI =
/*#__PURE__*/
function (_AuthProvider) {
  _inherits(GSSAPI, _AuthProvider);

  function GSSAPI() {
    _classCallCheck(this, GSSAPI);

    return _possibleConstructorReturn(this, _getPrototypeOf(GSSAPI).apply(this, arguments));
  }

  _createClass(GSSAPI, [{
    key: "_authenticateSingleConnection",

    /**
     * Implementation of authentication for a single connection
     * @override
     */
    value: function _authenticateSingleConnection(sendAuthCommand, connection, credentials, callback) {
      var source = credentials.source;
      var username = credentials.username;
      var password = credentials.password;
      var mechanismProperties = credentials.mechanismProperties;
      var gssapiServiceName = mechanismProperties['gssapiservicename'] || mechanismProperties['gssapiServiceName'] || 'mongodb';
      GSSAPIInitialize(this, kerberos.processes.MongoAuthProcess, source, username, password, source, gssapiServiceName, sendAuthCommand, connection, mechanismProperties, callback);
    }
    /**
     * Authenticate
     * @override
     * @method
     */

  }, {
    key: "auth",
    value: function auth(sendAuthCommand, connections, credentials, callback) {
      if (kerberos == null) {
        try {
          kerberos = retrieveKerberos();
        } catch (e) {
          return callback(e, null);
        }
      }

      _get(_getPrototypeOf(GSSAPI.prototype), "auth", this).call(this, sendAuthCommand, connections, credentials, callback);
    }
  }]);

  return GSSAPI;
}(AuthProvider); //
// Initialize step


var GSSAPIInitialize = function GSSAPIInitialize(self, MongoAuthProcess, db, username, password, authdb, gssapiServiceName, sendAuthCommand, connection, options, callback) {
  // Create authenticator
  var mongo_auth_process = new MongoAuthProcess(connection.host, connection.port, gssapiServiceName, options); // Perform initialization

  mongo_auth_process.init(username, password, function (err) {
    if (err) return callback(err, false); // Perform the first step

    mongo_auth_process.transition('', function (err, payload) {
      if (err) return callback(err, false); // Call the next db step

      MongoDBGSSAPIFirstStep(self, mongo_auth_process, payload, db, username, password, authdb, sendAuthCommand, connection, callback);
    });
  });
}; //
// Perform first step against mongodb


var MongoDBGSSAPIFirstStep = function MongoDBGSSAPIFirstStep(self, mongo_auth_process, payload, db, username, password, authdb, sendAuthCommand, connection, callback) {
  // Build the sasl start command
  var command = {
    saslStart: 1,
    mechanism: 'GSSAPI',
    payload: payload,
    autoAuthorize: 1
  }; // Write the commmand on the connection

  sendAuthCommand(connection, '$external.$cmd', command, function (err, doc) {
    if (err) return callback(err, false); // Execute mongodb transition

    mongo_auth_process.transition(doc.payload, function (err, payload) {
      if (err) return callback(err, false); // MongoDB API Second Step

      MongoDBGSSAPISecondStep(self, mongo_auth_process, payload, doc, db, username, password, authdb, sendAuthCommand, connection, callback);
    });
  });
}; //
// Perform first step against mongodb


var MongoDBGSSAPISecondStep = function MongoDBGSSAPISecondStep(self, mongo_auth_process, payload, doc, db, username, password, authdb, sendAuthCommand, connection, callback) {
  // Build Authentication command to send to MongoDB
  var command = {
    saslContinue: 1,
    conversationId: doc.conversationId,
    payload: payload
  }; // Execute the command
  // Write the commmand on the connection

  sendAuthCommand(connection, '$external.$cmd', command, function (err, doc) {
    if (err) return callback(err, false); // Call next transition for kerberos

    mongo_auth_process.transition(doc.payload, function (err, payload) {
      if (err) return callback(err, false); // Call the last and third step

      MongoDBGSSAPIThirdStep(self, mongo_auth_process, payload, doc, db, username, password, authdb, sendAuthCommand, connection, callback);
    });
  });
};

var MongoDBGSSAPIThirdStep = function MongoDBGSSAPIThirdStep(self, mongo_auth_process, payload, doc, db, username, password, authdb, sendAuthCommand, connection, callback) {
  // Build final command
  var command = {
    saslContinue: 1,
    conversationId: doc.conversationId,
    payload: payload
  }; // Execute the command

  sendAuthCommand(connection, '$external.$cmd', command, function (err, r) {
    if (err) return callback(err, false);
    mongo_auth_process.transition(null, function (err) {
      if (err) return callback(err, null);
      callback(null, r);
    });
  });
};
/**
 * This is a result from a authentication strategy
 *
 * @callback authResultCallback
 * @param {error} error An error object. Set to null if no error present
 * @param {boolean} result The result of the authentication process
 */


module.exports = GSSAPI;