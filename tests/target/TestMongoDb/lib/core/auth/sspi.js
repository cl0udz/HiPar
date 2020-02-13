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
 * Creates a new SSPI authentication mechanism
 * @class
 * @extends AuthProvider
 */

var SSPI =
/*#__PURE__*/
function (_AuthProvider) {
  _inherits(SSPI, _AuthProvider);

  function SSPI() {
    _classCallCheck(this, SSPI);

    return _possibleConstructorReturn(this, _getPrototypeOf(SSPI).apply(this, arguments));
  }

  _createClass(SSPI, [{
    key: "_authenticateSingleConnection",

    /**
     * Implementation of authentication for a single connection
     * @override
     */
    value: function _authenticateSingleConnection(sendAuthCommand, connection, credentials, callback) {
      // TODO: Destructure this
      var username = credentials.username;
      var password = credentials.password;
      var mechanismProperties = credentials.mechanismProperties;
      var gssapiServiceName = mechanismProperties['gssapiservicename'] || mechanismProperties['gssapiServiceName'] || 'mongodb';
      SSIPAuthenticate(this, kerberos.processes.MongoAuthProcess, username, password, gssapiServiceName, sendAuthCommand, connection, mechanismProperties, callback);
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

      _get(_getPrototypeOf(SSPI.prototype), "auth", this).call(this, sendAuthCommand, connections, credentials, callback);
    }
  }]);

  return SSPI;
}(AuthProvider);

function SSIPAuthenticate(self, MongoAuthProcess, username, password, gssapiServiceName, sendAuthCommand, connection, options, callback) {
  var authProcess = new MongoAuthProcess(connection.host, connection.port, gssapiServiceName, options);

  function authCommand(command, authCb) {
    sendAuthCommand(connection, '$external.$cmd', command, authCb);
  }

  authProcess.init(username, password, function (err) {
    if (err) return callback(err, false);
    authProcess.transition('', function (err, payload) {
      if (err) return callback(err, false);
      var command = {
        saslStart: 1,
        mechanism: 'GSSAPI',
        payload: payload,
        autoAuthorize: 1
      };
      authCommand(command, function (err, doc) {
        if (err) return callback(err, false);
        authProcess.transition(doc.payload, function (err, payload) {
          if (err) return callback(err, false);
          var command = {
            saslContinue: 1,
            conversationId: doc.conversationId,
            payload: payload
          };
          authCommand(command, function (err, doc) {
            if (err) return callback(err, false);
            authProcess.transition(doc.payload, function (err, payload) {
              if (err) return callback(err, false);
              var command = {
                saslContinue: 1,
                conversationId: doc.conversationId,
                payload: payload
              };
              authCommand(command, function (err, response) {
                if (err) return callback(err, false);
                authProcess.transition(null, function (err) {
                  if (err) return callback(err, null);
                  callback(null, response);
                });
              });
            });
          });
        });
      });
    });
  });
}

module.exports = SSPI;