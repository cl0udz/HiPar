'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.bind");

require("core-js/modules/es.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EventEmitter = require('events');

var MessageStream = require('./message_stream');

var MongoError = require('../error').MongoError;

var MongoWriteConcernError = require('../error').MongoWriteConcernError;

var wp = require('../wireprotocol');

var apm = require('../connection/apm');

var updateSessionFromResponse = require('../sessions').updateSessionFromResponse;

var uuidV4 = require('../utils').uuidV4;

var kStream = Symbol('stream');
var kQueue = Symbol('queue');
var kMessageStream = Symbol('messageStream');

var Connection =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Connection, _EventEmitter);

  function Connection(stream, options) {
    var _this;

    _classCallCheck(this, Connection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Connection).call(this, options));
    _this.id = streamIdentifier(stream);
    _this.bson = options.bson;
    _this.description = null;
    _this.socketTimeout = typeof options.socketTimeout === 'number' ? options.socketTimeout : 360000;
    _this.monitorCommands = typeof options.monitorCommands === 'boolean' ? options.monitorCommands : false; // setup parser stream and message handling

    _this[kQueue] = new Map();
    _this[kMessageStream] = new MessageStream(options);

    _this[kMessageStream].on('message', messageHandler(_assertThisInitialized(_this)));

    _this[kStream] = stream;
    stream.on('error', function () {
      /* ignore errors, listen to `close` instead */
    });
    stream.on('close', function () {
      _this[kQueue].forEach(function (op) {
        return op.callback(new MongoError('Connection closed'));
      });

      _this[kQueue].clear();

      _this.emit('close');
    }); // hook the message stream up to the passed in stream

    stream.pipe(_this[kMessageStream]);

    _this[kMessageStream].pipe(stream);

    return _this;
  } // the `connect` method stores the result of the handshake ismaster on the connection


  _createClass(Connection, [{
    key: "destroy",
    value: function destroy(options, callback) {
      var _this2 = this;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      options = Object.assign({
        force: false
      }, options);

      if (this[kStream] == null || this.destroyed) {
        this.destroyed = true;
        return;
      }

      if (options.force) {
        this[kStream].destroy();
        this.destroyed = true;

        if (typeof callback === 'function') {
          callback(null, null);
        }

        return;
      }

      this[kStream].end(function (err) {
        _this2.destroyed = true;

        if (typeof callback === 'function') {
          callback(err, null);
        }
      });
    }
  }, {
    key: "command",
    value: function command(ns, cmd, options, callback) {
      // NOTE: The wire protocol methods will eventually be migrated to this class, but for now
      //       we need to pretend we _are_ a server.
      var server = {
        description: this.description,
        s: {
          bson: this.bson,
          pool: {
            write: write.bind(this)
          }
        }
      };
      wp.command(server, ns, cmd, options, callback);
    }
  }, {
    key: "ismaster",
    set: function set(response) {
      this.description = response;
    }
  }]);

  return Connection;
}(EventEmitter);

function messageHandler(conn) {
  return function (message) {
    // always emit the message, in case we are streaming
    conn.emit('message', message);

    if (!conn[kQueue].has(message.responseTo)) {
      return;
    }

    var operationDescription = conn[kQueue].get(message.responseTo);
    conn[kQueue]["delete"](message.responseTo);
    var callback = operationDescription.cb;

    if (operationDescription.socketTimeoutOverride) {
      this[kStream].setSocketTimeout(this.socketTimeout);
    }

    try {
      // Pass in the entire description because it has BSON parsing options
      message.parse(operationDescription);
    } catch (err) {
      callback(new MongoError(err));
      return;
    }

    if (message.documents[0]) {
      var document = message.documents[0];
      var session = operationDescription.session;

      if (session) {
        updateSessionFromResponse(session, document);
      }

      if (document.$clusterTime) {
        this.emit('clusterTimeReceived', document.$clusterTime);
      }

      if (document.writeConcernError) {
        callback(new MongoWriteConcernError(document.writeConcernError, document));
        return;
      }

      if (document.ok === 0 || document.$err || document.errmsg || document.code) {
        callback(new MongoError(document));
        return;
      }
    }

    callback(null, operationDescription.fullResult ? message : message.documents[0]);
  };
}

function streamIdentifier(stream) {
  if (typeof stream.address === 'function') {
    return "".concat(stream.address().address, ":").concat(stream.address().port);
  }

  return uuidV4().toString('hex');
} // Not meant to be called directly, the wire protocol methods call this assuming it is a `Pool` instance


function write(command, options, callback) {
  var _this3 = this;

  if (typeof options === 'function') {
    callback = options;
  }

  options = options || {};
  var operationDescription = {
    requestId: command.requestId,
    cb: callback,
    fullResult: typeof options.fullResult === 'boolean' ? options.fullResult : false,
    session: options.session,
    // For BSON parsing
    promoteLongs: typeof options.promoteLongs === 'boolean' ? options.promoteLongs : true,
    promoteValues: typeof options.promoteValues === 'boolean' ? options.promoteValues : true,
    promoteBuffers: typeof options.promoteBuffers === 'boolean' ? options.promoteBuffers : false,
    raw: typeof options.raw === 'boolean' ? options.raw : false,
    // NOTE: This property is set on the connection as part of `connect`, but should
    //       eventually live in the `StreamDescription` attached to this connection.
    agreedCompressor: this.agreedCompressor
  };

  if (typeof options.socketTimeout === 'number') {
    operationDescription.socketTimeoutOverride = true;
    this[kStream].setSocketTimeout(options.socketTimeout);
  } // if command monitoring is enabled we need to modify the callback here


  if (this.monitorCommands) {
    this.emit('commandStarted', new apm.CommandStartedEvent(this, command));
    operationDescription.started = process.hrtime();

    operationDescription.cb = function (err, reply) {
      if (err) {
        _this3.emit('commandFailed', new apm.CommandFailedEvent(_this3, command, err, operationDescription.started));
      } else {
        if (reply && reply.result && (reply.result.ok === 0 || reply.result.$err)) {
          _this3.emit('commandFailed', new apm.CommandFailedEvent(_this3, command, reply.result, operationDescription.started));
        } else {
          _this3.emit('commandSucceeded', new apm.CommandSucceededEvent(_this3, command, reply, operationDescription.started));
        }
      }

      if (typeof callback === 'function') {
        callback(err, reply);
      }
    };
  }

  this[kQueue].set(operationDescription.requestId, operationDescription);
  this[kMessageStream].writeCommand(command, operationDescription);
}

module.exports = Connection;