'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.every");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

var crypto = require('crypto');

var requireOptional = require('require_optional');
/**
 * Generate a UUIDv4
 */


var uuidV4 = function uuidV4() {
  var result = crypto.randomBytes(16);
  result[6] = result[6] & 0x0f | 0x40;
  result[8] = result[8] & 0x3f | 0x80;
  return result;
};
/**
 * Returns the duration calculated from two high resolution timers in milliseconds
 *
 * @param {Object} started A high resolution timestamp created from `process.hrtime()`
 * @returns {Number} The duration in milliseconds
 */


var calculateDurationInMs = function calculateDurationInMs(started) {
  var hrtime = process.hrtime(started);
  return (hrtime[0] * 1e9 + hrtime[1]) / 1e6;
};
/**
 * Relays events for a given listener and emitter
 *
 * @param {EventEmitter} listener the EventEmitter to listen to the events from
 * @param {EventEmitter} emitter the EventEmitter to relay the events to
 */


function relayEvents(listener, emitter, events) {
  events.forEach(function (eventName) {
    return listener.on(eventName, function (event) {
      return emitter.emit(eventName, event);
    });
  });
}

function retrieveKerberos() {
  var kerberos;

  try {
    kerberos = requireOptional('kerberos');
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      throw new Error('The `kerberos` module was not found. Please install it and try again.');
    }

    throw err;
  }

  return kerberos;
} // Throw an error if an attempt to use EJSON is made when it is not installed


var noEJSONError = function noEJSONError() {
  throw new Error('The `mongodb-extjson` module was not found. Please install it and try again.');
}; // Facilitate loading EJSON optionally


function retrieveEJSON() {
  var EJSON = null;

  try {
    EJSON = requireOptional('mongodb-extjson');
  } catch (error) {} // eslint-disable-line


  if (!EJSON) {
    EJSON = {
      parse: noEJSONError,
      deserialize: noEJSONError,
      serialize: noEJSONError,
      stringify: noEJSONError,
      setBSONModule: noEJSONError,
      BSON: noEJSONError
    };
  }

  return EJSON;
}
/**
 * A helper function for determining `maxWireVersion` between legacy and new topology
 * instances
 *
 * @private
 * @param {(Topology|Server)} topologyOrServer
 */


function maxWireVersion(topologyOrServer) {
  if (topologyOrServer.ismaster) {
    return topologyOrServer.ismaster.maxWireVersion;
  }

  if (typeof topologyOrServer.lastIsMaster === 'function') {
    var lastIsMaster = topologyOrServer.lastIsMaster();

    if (lastIsMaster) {
      return lastIsMaster.maxWireVersion;
    }
  }

  if (topologyOrServer.description) {
    return topologyOrServer.description.maxWireVersion;
  }

  return null;
}
/*
 * Checks that collation is supported by server.
 *
 * @param {Server} [server] to check against
 * @param {object} [cmd] object where collation may be specified
 * @param {function} [callback] callback function
 * @return true if server does not support collation
 */


function collationNotSupported(server, cmd) {
  return cmd && cmd.collation && maxWireVersion(server) < 5;
}
/**
 * Checks if a given value is a Promise
 *
 * @param {*} maybePromise
 * @return true if the provided value is a Promise
 */


function isPromiseLike(maybePromise) {
  return maybePromise && typeof maybePromise.then === 'function';
}
/**
 * Applies the function `eachFn` to each item in `arr`, in parallel.
 *
 * @param {array} arr an array of items to asynchronusly iterate over
 * @param {function} eachFn A function to call on each item of the array. The callback signature is `(item, callback)`, where the callback indicates iteration is complete.
 * @param {function} callback The callback called after every item has been iterated
 */


function eachAsync(arr, eachFn, callback) {
  if (arr.length === 0) {
    callback(null);
    return;
  }

  var length = arr.length;
  var completed = 0;

  function eachCallback(err) {
    if (err) {
      callback(err, null);
      return;
    }

    if (++completed === length) {
      callback(null);
    }
  }

  for (var idx = 0; idx < length; ++idx) {
    try {
      eachFn(arr[idx], eachCallback);
    } catch (err) {
      callback(err);
      return;
    }
  }
}

function isUnifiedTopology(topology) {
  return topology.description != null;
}

function arrayStrictEqual(arr, arr2) {
  if (!Array.isArray(arr) || !Array.isArray(arr2)) {
    return false;
  }

  return arr.length === arr2.length && arr.every(function (elt, idx) {
    return elt === arr2[idx];
  });
}

function tagsStrictEqual(tags, tags2) {
  var tagsKeys = Object.keys(tags);
  var tags2Keys = Object.keys(tags2);
  return tagsKeys.length === tags2Keys.length && tagsKeys.every(function (key) {
    return tags2[key] === tags[key];
  });
}

function makeStateMachine(stateTable) {
  return function stateTransition(target, newState) {
    var legalStates = stateTable[target.s.state];

    if (legalStates && legalStates.indexOf(newState) < 0) {
      throw new TypeError("illegal state transition from [".concat(target.s.state, "] => [").concat(newState, "], allowed: [").concat(legalStates, "]"));
    }

    target.emit('stateChanged', target.s.state, newState);
    target.s.state = newState;
  };
}

module.exports = {
  uuidV4: uuidV4,
  calculateDurationInMs: calculateDurationInMs,
  relayEvents: relayEvents,
  collationNotSupported: collationNotSupported,
  retrieveEJSON: retrieveEJSON,
  retrieveKerberos: retrieveKerberos,
  maxWireVersion: maxWireVersion,
  isPromiseLike: isPromiseLike,
  eachAsync: eachAsync,
  isUnifiedTopology: isUnifiedTopology,
  arrayStrictEqual: arrayStrictEqual,
  tagsStrictEqual: tagsStrictEqual,
  makeStateMachine: makeStateMachine
};