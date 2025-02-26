'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

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

var crypto = require('crypto');

var Buffer = require('safe-buffer').Buffer;

var retrieveBSON = require('../connection/utils').retrieveBSON;

var MongoError = require('../error').MongoError;

var AuthProvider = require('./auth_provider').AuthProvider;

var BSON = retrieveBSON();
var Binary = BSON.Binary;
var saslprep;

try {
  saslprep = require('saslprep');
} catch (e) {// don't do anything;
}

var parsePayload = function parsePayload(payload) {
  var dict = {};
  var parts = payload.split(',');

  for (var i = 0; i < parts.length; i++) {
    var valueParts = parts[i].split('=');
    dict[valueParts[0]] = valueParts[1];
  }

  return dict;
};

var passwordDigest = function passwordDigest(username, password) {
  if (typeof username !== 'string') throw new MongoError('username must be a string');
  if (typeof password !== 'string') throw new MongoError('password must be a string');
  if (password.length === 0) throw new MongoError('password cannot be empty'); // Use node md5 generator

  var md5 = crypto.createHash('md5'); // Generate keys used for authentication

  md5.update(username + ':mongo:' + password, 'utf8');
  return md5.digest('hex');
}; // XOR two buffers


function xor(a, b) {
  if (!Buffer.isBuffer(a)) a = Buffer.from(a);
  if (!Buffer.isBuffer(b)) b = Buffer.from(b);
  var length = Math.max(a.length, b.length);
  var res = [];

  for (var i = 0; i < length; i += 1) {
    res.push(a[i] ^ b[i]);
  }

  return Buffer.from(res).toString('base64');
}

function H(method, text) {
  return crypto.createHash(method).update(text).digest();
}

function HMAC(method, key, text) {
  return crypto.createHmac(method, key).update(text).digest();
}

var _hiCache = {};
var _hiCacheCount = 0;

var _hiCachePurge = function _hiCachePurge() {
  _hiCache = {};
  _hiCacheCount = 0;
};

var hiLengthMap = {
  sha256: 32,
  sha1: 20
};

function HI(data, salt, iterations, cryptoMethod) {
  // omit the work if already generated
  var key = [data, salt.toString('base64'), iterations].join('_');

  if (_hiCache[key] !== undefined) {
    return _hiCache[key];
  } // generate the salt


  var saltedData = crypto.pbkdf2Sync(data, salt, iterations, hiLengthMap[cryptoMethod], cryptoMethod); // cache a copy to speed up the next lookup, but prevent unbounded cache growth

  if (_hiCacheCount >= 200) {
    _hiCachePurge();
  }

  _hiCache[key] = saltedData;
  _hiCacheCount += 1;
  return saltedData;
}
/**
 * Creates a new ScramSHA authentication mechanism
 * @class
 * @extends AuthProvider
 */


var ScramSHA =
/*#__PURE__*/
function (_AuthProvider) {
  _inherits(ScramSHA, _AuthProvider);

  function ScramSHA(bson, cryptoMethod) {
    var _this;

    _classCallCheck(this, ScramSHA);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScramSHA).call(this, bson));
    _this.cryptoMethod = cryptoMethod || 'sha1';
    return _this;
  }

  _createClass(ScramSHA, [{
    key: "_executeScram",

    /**
     * @ignore
     */
    value: function _executeScram(sendAuthCommand, connection, credentials, nonce, callback) {
      var username = credentials.username;
      var password = credentials.password;
      var db = credentials.source;
      var cryptoMethod = this.cryptoMethod;
      var mechanism = 'SCRAM-SHA-1';
      var processedPassword;

      if (cryptoMethod === 'sha256') {
        mechanism = 'SCRAM-SHA-256';
        processedPassword = saslprep ? saslprep(password) : password;
      } else {
        try {
          processedPassword = passwordDigest(username, password);
        } catch (e) {
          return callback(e);
        }
      } // Clean up the user


      username = username.replace('=', '=3D').replace(',', '=2C'); // NOTE: This is done b/c Javascript uses UTF-16, but the server is hashing in UTF-8.
      // Since the username is not sasl-prep-d, we need to do this here.

      var firstBare = Buffer.concat([Buffer.from('n=', 'utf8'), Buffer.from(username, 'utf8'), Buffer.from(',r=', 'utf8'), Buffer.from(nonce, 'utf8')]); // Build command structure

      var saslStartCmd = {
        saslStart: 1,
        mechanism: mechanism,
        payload: new Binary(Buffer.concat([Buffer.from('n,,', 'utf8'), firstBare])),
        autoAuthorize: 1
      }; // Write the commmand on the connection

      sendAuthCommand(connection, "".concat(db, ".$cmd"), saslStartCmd, function (err, r) {
        var tmpError = ScramSHA._getError(err, r);

        if (tmpError) {
          return callback(tmpError, null);
        }

        var payload = Buffer.isBuffer(r.payload) ? new Binary(r.payload) : r.payload;
        var dict = parsePayload(payload.value());
        var iterations = parseInt(dict.i, 10);
        var salt = dict.s;
        var rnonce = dict.r; // Set up start of proof

        var withoutProof = "c=biws,r=".concat(rnonce);
        var saltedPassword = HI(processedPassword, Buffer.from(salt, 'base64'), iterations, cryptoMethod);

        if (iterations && iterations < 4096) {
          var error = new MongoError("Server returned an invalid iteration count ".concat(iterations));
          return callback(error, false);
        }

        var clientKey = HMAC(cryptoMethod, saltedPassword, 'Client Key');
        var storedKey = H(cryptoMethod, clientKey);
        var authMessage = [firstBare, payload.value().toString('base64'), withoutProof].join(',');
        var clientSignature = HMAC(cryptoMethod, storedKey, authMessage);
        var clientProof = "p=".concat(xor(clientKey, clientSignature));
        var clientFinal = [withoutProof, clientProof].join(',');
        var saslContinueCmd = {
          saslContinue: 1,
          conversationId: r.conversationId,
          payload: new Binary(Buffer.from(clientFinal))
        };
        sendAuthCommand(connection, "".concat(db, ".$cmd"), saslContinueCmd, function (err, r) {
          if (!r || r.done !== false) {
            return callback(err, r);
          }

          var retrySaslContinueCmd = {
            saslContinue: 1,
            conversationId: r.conversationId,
            payload: Buffer.alloc(0)
          };
          sendAuthCommand(connection, "".concat(db, ".$cmd"), retrySaslContinueCmd, callback);
        });
      });
    }
    /**
     * Implementation of authentication for a single connection
     * @override
     */

  }, {
    key: "_authenticateSingleConnection",
    value: function _authenticateSingleConnection(sendAuthCommand, connection, credentials, callback) {
      var _this2 = this;

      // Create a random nonce
      crypto.randomBytes(24, function (err, buff) {
        if (err) {
          return callback(err, null);
        }

        return _this2._executeScram(sendAuthCommand, connection, credentials, buff.toString('base64'), callback);
      });
    }
    /**
     * Authenticate
     * @override
     * @method
     */

  }, {
    key: "auth",
    value: function auth(sendAuthCommand, connections, credentials, callback) {
      this._checkSaslprep();

      _get(_getPrototypeOf(ScramSHA.prototype), "auth", this).call(this, sendAuthCommand, connections, credentials, callback);
    }
  }, {
    key: "_checkSaslprep",
    value: function _checkSaslprep() {
      var cryptoMethod = this.cryptoMethod;

      if (cryptoMethod === 'sha256') {
        if (!saslprep) {
          console.warn('Warning: no saslprep library specified. Passwords will not be sanitized');
        }
      }
    }
  }], [{
    key: "_getError",
    value: function _getError(err, r) {
      if (err) {
        return err;
      }

      if (r.$err || r.errmsg) {
        return new MongoError(r);
      }
    }
  }]);

  return ScramSHA;
}(AuthProvider);
/**
 * Creates a new ScramSHA1 authentication mechanism
 * @class
 * @extends ScramSHA
 */


var ScramSHA1 =
/*#__PURE__*/
function (_ScramSHA) {
  _inherits(ScramSHA1, _ScramSHA);

  function ScramSHA1(bson) {
    _classCallCheck(this, ScramSHA1);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScramSHA1).call(this, bson, 'sha1'));
  }

  return ScramSHA1;
}(ScramSHA);
/**
 * Creates a new ScramSHA256 authentication mechanism
 * @class
 * @extends ScramSHA
 */


var ScramSHA256 =
/*#__PURE__*/
function (_ScramSHA2) {
  _inherits(ScramSHA256, _ScramSHA2);

  function ScramSHA256(bson) {
    _classCallCheck(this, ScramSHA256);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScramSHA256).call(this, bson, 'sha256'));
  }

  return ScramSHA256;
}(ScramSHA);

module.exports = {
  ScramSHA1: ScramSHA1,
  ScramSHA256: ScramSHA256
};