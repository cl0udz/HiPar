'use strict';

require("core-js/modules/es.object.assign");

var GetMore = require('../connection/commands').GetMore;

var retrieveBSON = require('../connection/utils').retrieveBSON;

var MongoError = require('../error').MongoError;

var MongoNetworkError = require('../error').MongoNetworkError;

var BSON = retrieveBSON();
var Long = BSON.Long;

var collectionNamespace = require('./shared').collectionNamespace;

var maxWireVersion = require('../utils').maxWireVersion;

var applyCommonQueryOptions = require('./shared').applyCommonQueryOptions;

var command = require('./command');

function getMore(server, ns, cursorState, batchSize, options, callback) {
  options = options || {};
  var wireVersion = maxWireVersion(server);

  function queryCallback(err, result) {
    if (err) return callback(err);
    var response = result.message; // If we have a timed out query or a cursor that was killed

    if (response.cursorNotFound) {
      return callback(new MongoNetworkError('cursor killed or timed out'), null);
    }

    if (wireVersion < 4) {
      var _cursorId = typeof response.cursorId === 'number' ? Long.fromNumber(response.cursorId) : response.cursorId;

      cursorState.documents = response.documents;
      cursorState.cursorId = _cursorId;
      callback(null, null, response.connection);
      return;
    } // We have an error detected


    if (response.documents[0].ok === 0) {
      return callback(new MongoError(response.documents[0]));
    } // Ensure we have a Long valid cursor id


    var cursorId = typeof response.documents[0].cursor.id === 'number' ? Long.fromNumber(response.documents[0].cursor.id) : response.documents[0].cursor.id;
    cursorState.documents = response.documents[0].cursor.nextBatch;
    cursorState.cursorId = cursorId;
    callback(null, response.documents[0], response.connection);
  }

  if (wireVersion < 4) {
    var bson = server.s.bson;
    var getMoreOp = new GetMore(bson, ns, cursorState.cursorId, {
      numberToReturn: batchSize
    });
    var queryOptions = applyCommonQueryOptions({}, cursorState);
    server.s.pool.write(getMoreOp, queryOptions, queryCallback);
    return;
  }

  var getMoreCmd = {
    getMore: cursorState.cursorId,
    collection: collectionNamespace(ns),
    batchSize: Math.abs(batchSize)
  };

  if (cursorState.cmd.tailable && typeof cursorState.cmd.maxAwaitTimeMS === 'number') {
    getMoreCmd.maxTimeMS = cursorState.cmd.maxAwaitTimeMS;
  }

  var commandOptions = Object.assign({
    returnFieldSelector: null,
    documentsReturnedIn: 'nextBatch'
  }, options);

  if (cursorState.session) {
    commandOptions.session = cursorState.session;
  }

  command(server, ns, getMoreCmd, commandOptions, queryCallback);
}

module.exports = getMore;