'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var crypto = require('crypto');

var AuthProvider = require('./auth_provider').AuthProvider;
/**
 * Creates a new MongoCR authentication mechanism
 *
 * @extends AuthProvider
 */


var MongoCR =
/*#__PURE__*/
function (_AuthProvider) {
  _inherits(MongoCR, _AuthProvider);

  function MongoCR() {
    _classCallCheck(this, MongoCR);

    return _possibleConstructorReturn(this, _getPrototypeOf(MongoCR).apply(this, arguments));
  }

  _createClass(MongoCR, [{
    key: "_authenticateSingleConnection",

    /**
     * Implementation of authentication for a single connection
     * @override
     */
    value: function _authenticateSingleConnection(sendAuthCommand, connection, credentials, callback) {
      var username = credentials.username;
      var password = credentials.password;
      var source = credentials.source;
      sendAuthCommand(connection, "".concat(source, ".$cmd"), {
        getnonce: 1
      }, function (err, r) {
        var nonce = null;
        var key = null; // Get nonce

        if (err == null) {
          nonce = r.nonce; // Use node md5 generator

          var md5 = crypto.createHash('md5'); // Generate keys used for authentication

          md5.update(username + ':mongo:' + password, 'utf8');
          var hash_password = md5.digest('hex'); // Final key

          md5 = crypto.createHash('md5');
          md5.update(nonce + username + hash_password, 'utf8');
          key = md5.digest('hex');
        }

        var authenticateCommand = {
          authenticate: 1,
          user: username,
          nonce: nonce,
          key: key
        };
        sendAuthCommand(connection, "".concat(source, ".$cmd"), authenticateCommand, callback);
      });
    }
  }]);

  return MongoCR;
}(AuthProvider);

module.exports = MongoCR;