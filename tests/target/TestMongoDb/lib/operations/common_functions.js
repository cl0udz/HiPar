'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var applyRetryableWrites = require('../utils').applyRetryableWrites;

var applyWriteConcern = require('../utils').applyWriteConcern;

var decorateWithCollation = require('../utils').decorateWithCollation;

var decorateWithReadConcern = require('../utils').decorateWithReadConcern;

var executeCommand = require('./db_ops').executeCommand;

var formattedOrderClause = require('../utils').formattedOrderClause;

var handleCallback = require('../utils').handleCallback;

var MongoError = require('../core').MongoError;

var ReadPreference = require('../core').ReadPreference;

var toError = require('../utils').toError;

var CursorState = require('../core/cursor').CursorState;
/**
 * Build the count command.
 *
 * @method
 * @param {collectionOrCursor} an instance of a collection or cursor
 * @param {object} query The query for the count.
 * @param {object} [options] Optional settings. See Collection.prototype.count and Cursor.prototype.count for a list of options.
 */


function buildCountCommand(collectionOrCursor, query, options) {
  var skip = options.skip;
  var limit = options.limit;
  var hint = options.hint;
  var maxTimeMS = options.maxTimeMS;
  query = query || {}; // Final query

  var cmd = {
    count: options.collectionName,
    query: query
  };

  if (collectionOrCursor.s.numberOfRetries) {
    // collectionOrCursor is a cursor
    if (collectionOrCursor.options.hint) {
      hint = collectionOrCursor.options.hint;
    } else if (collectionOrCursor.cmd.hint) {
      hint = collectionOrCursor.cmd.hint;
    }

    decorateWithCollation(cmd, collectionOrCursor, collectionOrCursor.cmd);
  } else {
    decorateWithCollation(cmd, collectionOrCursor, options);
  } // Add limit, skip and maxTimeMS if defined


  if (typeof skip === 'number') cmd.skip = skip;
  if (typeof limit === 'number') cmd.limit = limit;
  if (typeof maxTimeMS === 'number') cmd.maxTimeMS = maxTimeMS;
  if (hint) cmd.hint = hint; // Do we have a readConcern specified

  decorateWithReadConcern(cmd, collectionOrCursor);
  return cmd;
}

function deleteCallback(err, r, callback) {
  if (callback == null) return;
  if (err && callback) return callback(err);
  if (r == null) return callback(null, {
    result: {
      ok: 1
    }
  });
  r.deletedCount = r.result.n;
  if (callback) callback(null, r);
}
/**
 * Find and update a document.
 *
 * @method
 * @param {Collection} a Collection instance.
 * @param {object} query Query object to locate the object to modify.
 * @param {array} sort If multiple docs match, choose the first one in the specified sort order as the object to manipulate.
 * @param {object} doc The fields/vals to be updated.
 * @param {object} [options] Optional settings. See Collection.prototype.findAndModify for a list of options.
 * @param {Collection~findAndModifyCallback} [callback] The command result callback
 * @deprecated use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead
 */


function findAndModify(coll, query, sort, doc, options, callback) {
  // Create findAndModify command object
  var queryObject = {
    findAndModify: coll.collectionName,
    query: query
  };
  sort = formattedOrderClause(sort);

  if (sort) {
    queryObject.sort = sort;
  }

  queryObject["new"] = options["new"] ? true : false;
  queryObject.remove = options.remove ? true : false;
  queryObject.upsert = options.upsert ? true : false;
  var projection = options.projection || options.fields;

  if (projection) {
    queryObject.fields = projection;
  }

  if (options.arrayFilters) {
    queryObject.arrayFilters = options.arrayFilters;
    delete options.arrayFilters;
  }

  if (doc && !options.remove) {
    queryObject.update = doc;
  }

  if (options.maxTimeMS) queryObject.maxTimeMS = options.maxTimeMS; // Either use override on the function, or go back to default on either the collection
  // level or db

  options.serializeFunctions = options.serializeFunctions || coll.s.serializeFunctions; // No check on the documents

  options.checkKeys = false; // Final options for retryable writes and write concern

  var finalOptions = Object.assign({}, options);
  finalOptions = applyRetryableWrites(finalOptions, coll.s.db);
  finalOptions = applyWriteConcern(finalOptions, {
    db: coll.s.db,
    collection: coll
  }, options); // Decorate the findAndModify command with the write Concern

  if (finalOptions.writeConcern) {
    queryObject.writeConcern = finalOptions.writeConcern;
  } // Have we specified bypassDocumentValidation


  if (finalOptions.bypassDocumentValidation === true) {
    queryObject.bypassDocumentValidation = finalOptions.bypassDocumentValidation;
  }

  finalOptions.readPreference = ReadPreference.primary; // Have we specified collation

  try {
    decorateWithCollation(queryObject, coll, finalOptions);
  } catch (err) {
    return callback(err, null);
  } // Execute the command


  executeCommand(coll.s.db, queryObject, finalOptions, function (err, result) {
    if (err) return handleCallback(callback, err, null);
    return handleCallback(callback, null, result);
  });
}
/**
 * Retrieves this collections index info.
 *
 * @method
 * @param {Db} db The Db instance on which to retrieve the index info.
 * @param {string} name The name of the collection.
 * @param {object} [options] Optional settings. See Db.prototype.indexInformation for a list of options.
 * @param {Db~resultCallback} [callback] The command result callback
 */


function indexInformation(db, name, options, callback) {
  // If we specified full information
  var full = options['full'] == null ? false : options['full']; // Did the user destroy the topology

  if (db.serverConfig && db.serverConfig.isDestroyed()) return callback(new MongoError('topology was destroyed')); // Process all the results from the index command and collection

  function processResults(indexes) {
    // Contains all the information
    var info = {}; // Process all the indexes

    for (var i = 0; i < indexes.length; i++) {
      var index = indexes[i]; // Let's unpack the object

      info[index.name] = [];

      for (var _name in index.key) {
        info[index.name].push([_name, index.key[_name]]);
      }
    }

    return info;
  } // Get the list of indexes of the specified collection


  db.collection(name).listIndexes(options).toArray(function (err, indexes) {
    if (err) return callback(toError(err));
    if (!Array.isArray(indexes)) return handleCallback(callback, null, []);
    if (full) return handleCallback(callback, null, indexes);
    handleCallback(callback, null, processResults(indexes));
  });
}

function prepareDocs(coll, docs, options) {
  var forceServerObjectId = typeof options.forceServerObjectId === 'boolean' ? options.forceServerObjectId : coll.s.db.options.forceServerObjectId; // no need to modify the docs if server sets the ObjectId

  if (forceServerObjectId === true) {
    return docs;
  }

  return docs.map(function (doc) {
    if (forceServerObjectId !== true && doc._id == null) {
      doc._id = coll.s.pkFactory.createPk();
    }

    return doc;
  });
} // Get the next available document from the cursor, returns null if no more documents are available.


function nextObject(cursor, callback) {
  if (cursor.s.state === CursorState.CLOSED || cursor.isDead && cursor.isDead()) {
    return handleCallback(callback, MongoError.create({
      message: 'Cursor is closed',
      driver: true
    }));
  }

  if (cursor.s.state === CursorState.INIT && cursor.cmd && cursor.cmd.sort) {
    try {
      cursor.cmd.sort = formattedOrderClause(cursor.cmd.sort);
    } catch (err) {
      return handleCallback(callback, err);
    }
  } // Get the next object


  cursor._next(function (err, doc) {
    cursor.s.state = CursorState.OPEN;
    if (err) return handleCallback(callback, err);
    handleCallback(callback, null, doc);
  });
}

function insertDocuments(coll, docs, options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = options || {}; // Ensure we are operating on an array op docs

  docs = Array.isArray(docs) ? docs : [docs]; // Final options for retryable writes and write concern

  var finalOptions = Object.assign({}, options);
  finalOptions = applyRetryableWrites(finalOptions, coll.s.db);
  finalOptions = applyWriteConcern(finalOptions, {
    db: coll.s.db,
    collection: coll
  }, options); // If keep going set unordered

  if (finalOptions.keepGoing === true) finalOptions.ordered = false;
  finalOptions.serializeFunctions = options.serializeFunctions || coll.s.serializeFunctions;
  docs = prepareDocs(coll, docs, options); // File inserts

  coll.s.topology.insert(coll.s.namespace, docs, finalOptions, function (err, result) {
    if (callback == null) return;
    if (err) return handleCallback(callback, err);
    if (result == null) return handleCallback(callback, null, null);
    if (result.result.code) return handleCallback(callback, toError(result.result));
    if (result.result.writeErrors) return handleCallback(callback, toError(result.result.writeErrors[0])); // Add docs to the list

    result.ops = docs; // Return the results

    handleCallback(callback, null, result);
  });
}

function removeDocuments(coll, selector, options, callback) {
  if (typeof options === 'function') {
    callback = options, options = {};
  } else if (typeof selector === 'function') {
    callback = selector;
    options = {};
    selector = {};
  } // Create an empty options object if the provided one is null


  options = options || {}; // Final options for retryable writes and write concern

  var finalOptions = Object.assign({}, options);
  finalOptions = applyRetryableWrites(finalOptions, coll.s.db);
  finalOptions = applyWriteConcern(finalOptions, {
    db: coll.s.db,
    collection: coll
  }, options); // If selector is null set empty

  if (selector == null) selector = {}; // Build the op

  var op = {
    q: selector,
    limit: 0
  };

  if (options.single) {
    op.limit = 1;
  } else if (finalOptions.retryWrites) {
    finalOptions.retryWrites = false;
  } // Have we specified collation


  try {
    decorateWithCollation(finalOptions, coll, options);
  } catch (err) {
    return callback(err, null);
  } // Execute the remove


  coll.s.topology.remove(coll.s.namespace, [op], finalOptions, function (err, result) {
    if (callback == null) return;
    if (err) return handleCallback(callback, err, null);
    if (result == null) return handleCallback(callback, null, null);
    if (result.result.code) return handleCallback(callback, toError(result.result));

    if (result.result.writeErrors) {
      return handleCallback(callback, toError(result.result.writeErrors[0]));
    } // Return the results


    handleCallback(callback, null, result);
  });
}

function updateDocuments(coll, selector, document, options, callback) {
  if ('function' === typeof options) callback = options, options = null;
  if (options == null) options = {};
  if (!('function' === typeof callback)) callback = null; // If we are not providing a selector or document throw

  if (selector == null || _typeof(selector) !== 'object') return callback(toError('selector must be a valid JavaScript object'));
  if (document == null || _typeof(document) !== 'object') return callback(toError('document must be a valid JavaScript object')); // Final options for retryable writes and write concern

  var finalOptions = Object.assign({}, options);
  finalOptions = applyRetryableWrites(finalOptions, coll.s.db);
  finalOptions = applyWriteConcern(finalOptions, {
    db: coll.s.db,
    collection: coll
  }, options); // Do we return the actual result document
  // Either use override on the function, or go back to default on either the collection
  // level or db

  finalOptions.serializeFunctions = options.serializeFunctions || coll.s.serializeFunctions; // Execute the operation

  var op = {
    q: selector,
    u: document
  };
  op.upsert = options.upsert !== void 0 ? !!options.upsert : false;
  op.multi = options.multi !== void 0 ? !!options.multi : false;

  if (options.hint) {
    op.hint = options.hint;
  }

  if (finalOptions.arrayFilters) {
    op.arrayFilters = finalOptions.arrayFilters;
    delete finalOptions.arrayFilters;
  }

  if (finalOptions.retryWrites && op.multi) {
    finalOptions.retryWrites = false;
  } // Have we specified collation


  try {
    decorateWithCollation(finalOptions, coll, options);
  } catch (err) {
    return callback(err, null);
  } // Update options


  coll.s.topology.update(coll.s.namespace, [op], finalOptions, function (err, result) {
    if (callback == null) return;
    if (err) return handleCallback(callback, err, null);
    if (result == null) return handleCallback(callback, null, null);
    if (result.result.code) return handleCallback(callback, toError(result.result));
    if (result.result.writeErrors) return handleCallback(callback, toError(result.result.writeErrors[0])); // Return the results

    handleCallback(callback, null, result);
  });
}

function updateCallback(err, r, callback) {
  if (callback == null) return;
  if (err) return callback(err);
  if (r == null) return callback(null, {
    result: {
      ok: 1
    }
  });
  r.modifiedCount = r.result.nModified != null ? r.result.nModified : r.result.n;
  r.upsertedId = Array.isArray(r.result.upserted) && r.result.upserted.length > 0 ? r.result.upserted[0] // FIXME(major): should be `r.result.upserted[0]._id`
  : null;
  r.upsertedCount = Array.isArray(r.result.upserted) && r.result.upserted.length ? r.result.upserted.length : 0;
  r.matchedCount = Array.isArray(r.result.upserted) && r.result.upserted.length > 0 ? 0 : r.result.n;
  callback(null, r);
}

module.exports = {
  buildCountCommand: buildCountCommand,
  deleteCallback: deleteCallback,
  findAndModify: findAndModify,
  indexInformation: indexInformation,
  nextObject: nextObject,
  prepareDocs: prepareDocs,
  insertDocuments: insertDocuments,
  removeDocuments: removeDocuments,
  updateDocuments: updateDocuments,
  updateCallback: updateCallback
};