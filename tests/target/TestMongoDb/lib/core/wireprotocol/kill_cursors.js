'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var KillCursor = require('../connection/commands').KillCursor;

var MongoError = require('../error').MongoError;

var MongoNetworkError = require('../error').MongoNetworkError;

var collectionNamespace = require('./shared').collectionNamespace;

var maxWireVersion = require('../utils').maxWireVersion;

var command = require('./command');

function killCursors(server, ns, cursorState, callback) {
  callback = typeof callback === 'function' ? callback : function () {};
  var cursorId = cursorState.cursorId;

  if (maxWireVersion(server) < 4) {
    var bson = server.s.bson;
    var pool = server.s.pool;
    var killCursor = new KillCursor(bson, ns, [cursorId]);
    var _options = {
      immediateRelease: true,
      noResponse: true
    };

    if (_typeof(cursorState.session) === 'object') {
      _options.session = cursorState.session;
    }

    if (pool && pool.isConnected()) {
      try {
        pool.write(killCursor, _options, callback);
      } catch (err) {
        if (typeof callback === 'function') {
          callback(err, null);
        } else {
          console.warn(err);
        }
      }
    }

    return;
  }

  var killCursorCmd = {
    killCursors: collectionNamespace(ns),
    cursors: [cursorId]
  };
  var options = {};
  if (_typeof(cursorState.session) === 'object') options.session = cursorState.session;
  command(server, ns, killCursorCmd, options, function (err, result) {
    if (err) {
      return callback(err);
    }

    var response = result.message;

    if (response.cursorNotFound) {
      return callback(new MongoNetworkError('cursor killed or timed out'), null);
    }

    if (!Array.isArray(response.documents) || response.documents.length === 0) {
      return callback(new MongoError("invalid killCursors result returned for cursor id ".concat(cursorId)));
    }

    callback(null, response.documents[0]);
  });
}

module.exports = killCursors;