'use strict';

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.sort");

var buildCountCommand = require('./collection_ops').buildCountCommand;

var formattedOrderClause = require('../utils').formattedOrderClause;

var handleCallback = require('../utils').handleCallback;

var MongoError = require('../core').MongoError;

var push = Array.prototype.push;

var CursorState = require('../core/cursor').CursorState;
/**
 * Get the count of documents for this cursor.
 *
 * @method
 * @param {Cursor} cursor The Cursor instance on which to count.
 * @param {boolean} [applySkipLimit=true] Specifies whether the count command apply limit and skip settings should be applied on the cursor or in the provided options.
 * @param {object} [options] Optional settings. See Cursor.prototype.count for a list of options.
 * @param {Cursor~countResultCallback} [callback] The result callback.
 */


function count(cursor, applySkipLimit, opts, callback) {
  if (applySkipLimit) {
    if (typeof cursor.cursorSkip() === 'number') opts.skip = cursor.cursorSkip();
    if (typeof cursor.cursorLimit() === 'number') opts.limit = cursor.cursorLimit();
  } // Ensure we have the right read preference inheritance


  if (opts.readPreference) {
    cursor.setReadPreference(opts.readPreference);
  }

  if (typeof opts.maxTimeMS !== 'number' && cursor.cmd && typeof cursor.cmd.maxTimeMS === 'number') {
    opts.maxTimeMS = cursor.cmd.maxTimeMS;
  }

  var options = {};
  options.skip = opts.skip;
  options.limit = opts.limit;
  options.hint = opts.hint;
  options.maxTimeMS = opts.maxTimeMS; // Command

  options.collectionName = cursor.namespace.collection;
  var command;

  try {
    command = buildCountCommand(cursor, cursor.cmd.query, options);
  } catch (err) {
    return callback(err);
  } // Set cursor server to the same as the topology


  cursor.server = cursor.topology.s.coreTopology; // Execute the command

  cursor.topology.command(cursor.namespace.withCollection('$cmd'), command, cursor.options, function (err, result) {
    callback(err, result ? result.result.n : null);
  });
}
/**
 * Iterates over all the documents for this cursor. See Cursor.prototype.each for more information.
 *
 * @method
 * @deprecated
 * @param {Cursor} cursor The Cursor instance on which to run.
 * @param {Cursor~resultCallback} callback The result callback.
 */


function each(cursor, callback) {
  if (!callback) throw MongoError.create({
    message: 'callback is mandatory',
    driver: true
  });
  if (cursor.isNotified()) return;

  if (cursor.s.state === CursorState.CLOSED || cursor.isDead()) {
    return handleCallback(callback, MongoError.create({
      message: 'Cursor is closed',
      driver: true
    }));
  }

  if (cursor.s.state === CursorState.INIT) {
    cursor.s.state = CursorState.OPEN;
  } // Define function to avoid global scope escape


  var fn = null; // Trampoline all the entries

  if (cursor.bufferedCount() > 0) {
    while (fn = loop(cursor, callback)) {
      fn(cursor, callback);
    }

    each(cursor, callback);
  } else {
    cursor.next(function (err, item) {
      if (err) return handleCallback(callback, err);

      if (item == null) {
        return cursor.close({
          skipKillCursors: true
        }, function () {
          return handleCallback(callback, null, null);
        });
      }

      if (handleCallback(callback, null, item) === false) return;
      each(cursor, callback);
    });
  }
}
/**
 * Check if there is any document still available in the cursor.
 *
 * @method
 * @param {Cursor} cursor The Cursor instance on which to run.
 * @param {Cursor~resultCallback} [callback] The result callback.
 */


function hasNext(cursor, callback) {
  if (cursor.s.currentDoc) {
    return callback(null, true);
  }

  if (cursor.isNotified()) {
    return callback(null, false);
  }

  nextObject(cursor, function (err, doc) {
    if (err) return callback(err, null);

    if (cursor.s.state === CursorState.CLOSED || cursor.isDead()) {
      return callback(null, false);
    }

    if (!doc) return callback(null, false);
    cursor.s.currentDoc = doc;
    callback(null, true);
  });
} // Trampoline emptying the number of retrieved items
// without incurring a nextTick operation


function loop(cursor, callback) {
  // No more items we are done
  if (cursor.bufferedCount() === 0) return; // Get the next document

  cursor._next(callback); // Loop


  return loop;
}
/**
 * Get the next available document from the cursor. Returns null if no more documents are available.
 *
 * @method
 * @param {Cursor} cursor The Cursor instance from which to get the next document.
 * @param {Cursor~resultCallback} [callback] The result callback.
 */


function next(cursor, callback) {
  // Return the currentDoc if someone called hasNext first
  if (cursor.s.currentDoc) {
    var doc = cursor.s.currentDoc;
    cursor.s.currentDoc = null;
    return callback(null, doc);
  } // Return the next object


  nextObject(cursor, callback);
} // Get the next available document from the cursor, returns null if no more documents are available.


function nextObject(cursor, callback) {
  if (cursor.s.state === CursorState.CLOSED || cursor.isDead && cursor.isDead()) return handleCallback(callback, MongoError.create({
    message: 'Cursor is closed',
    driver: true
  }));

  if (cursor.s.state === CursorState.INIT && cursor.cmd.sort) {
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
/**
 * Returns an array of documents. See Cursor.prototype.toArray for more information.
 *
 * @method
 * @param {Cursor} cursor The Cursor instance from which to get the next document.
 * @param {Cursor~toArrayResultCallback} [callback] The result callback.
 */


function toArray(cursor, callback) {
  var items = []; // Reset cursor

  cursor.rewind();
  cursor.s.state = CursorState.INIT; // Fetch all the documents

  var fetchDocs = function fetchDocs() {
    cursor._next(function (err, doc) {
      if (err) {
        return cursor._endSession ? cursor._endSession(function () {
          return handleCallback(callback, err);
        }) : handleCallback(callback, err);
      }

      if (doc == null) {
        return cursor.close({
          skipKillCursors: true
        }, function () {
          return handleCallback(callback, null, items);
        });
      } // Add doc to items


      items.push(doc); // Get all buffered objects

      if (cursor.bufferedCount() > 0) {
        var docs = cursor.readBufferedDocuments(cursor.bufferedCount()); // Transform the doc if transform method added

        if (cursor.s.transforms && typeof cursor.s.transforms.doc === 'function') {
          docs = docs.map(cursor.s.transforms.doc);
        }

        push.apply(items, docs);
      } // Attempt a fetch


      fetchDocs();
    });
  };

  fetchDocs();
}

module.exports = {
  count: count,
  each: each,
  hasNext: hasNext,
  next: next,
  toArray: toArray
};