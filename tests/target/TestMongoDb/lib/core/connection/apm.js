'use strict';

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Msg = require('../connection/msg').Msg;

var KillCursor = require('../connection/commands').KillCursor;

var GetMore = require('../connection/commands').GetMore;

var calculateDurationInMs = require('../utils').calculateDurationInMs;
/** Commands that we want to redact because of the sensitive nature of their contents */


var SENSITIVE_COMMANDS = new Set(['authenticate', 'saslStart', 'saslContinue', 'getnonce', 'createUser', 'updateUser', 'copydbgetnonce', 'copydbsaslstart', 'copydb']); // helper methods

var extractCommandName = function extractCommandName(commandDoc) {
  return Object.keys(commandDoc)[0];
};

var namespace = function namespace(command) {
  return command.ns;
};

var databaseName = function databaseName(command) {
  return command.ns.split('.')[0];
};

var collectionName = function collectionName(command) {
  return command.ns.split('.')[1];
};

var generateConnectionId = function generateConnectionId(pool) {
  return pool.options ? "".concat(pool.options.host, ":").concat(pool.options.port) : pool.id;
};

var maybeRedact = function maybeRedact(commandName, result) {
  return SENSITIVE_COMMANDS.has(commandName) ? {} : result;
};

var LEGACY_FIND_QUERY_MAP = {
  $query: 'filter',
  $orderby: 'sort',
  $hint: 'hint',
  $comment: 'comment',
  $maxScan: 'maxScan',
  $max: 'max',
  $min: 'min',
  $returnKey: 'returnKey',
  $showDiskLoc: 'showRecordId',
  $maxTimeMS: 'maxTimeMS',
  $snapshot: 'snapshot'
};
var LEGACY_FIND_OPTIONS_MAP = {
  numberToSkip: 'skip',
  numberToReturn: 'batchSize',
  returnFieldsSelector: 'projection'
};
var OP_QUERY_KEYS = ['tailable', 'oplogReplay', 'noCursorTimeout', 'awaitData', 'partial', 'exhaust'];
/**
 * Extract the actual command from the query, possibly upconverting if it's a legacy
 * format
 *
 * @param {Object} command the command
 */

var extractCommand = function extractCommand(command) {
  if (command instanceof GetMore) {
    return {
      getMore: command.cursorId,
      collection: collectionName(command),
      batchSize: command.numberToReturn
    };
  }

  if (command instanceof KillCursor) {
    return {
      killCursors: collectionName(command),
      cursors: command.cursorIds
    };
  }

  if (command instanceof Msg) {
    return command.command;
  }

  if (command.query && command.query.$query) {
    var result;

    if (command.ns === 'admin.$cmd') {
      // upconvert legacy command
      result = Object.assign({}, command.query.$query);
    } else {
      // upconvert legacy find command
      result = {
        find: collectionName(command)
      };
      Object.keys(LEGACY_FIND_QUERY_MAP).forEach(function (key) {
        if (typeof command.query[key] !== 'undefined') result[LEGACY_FIND_QUERY_MAP[key]] = command.query[key];
      });
    }

    Object.keys(LEGACY_FIND_OPTIONS_MAP).forEach(function (key) {
      if (typeof command[key] !== 'undefined') result[LEGACY_FIND_OPTIONS_MAP[key]] = command[key];
    });
    OP_QUERY_KEYS.forEach(function (key) {
      if (command[key]) result[key] = command[key];
    });

    if (typeof command.pre32Limit !== 'undefined') {
      result.limit = command.pre32Limit;
    }

    if (command.query.$explain) {
      return {
        explain: result
      };
    }

    return result;
  }

  return command.query ? command.query : command;
};

var extractReply = function extractReply(command, reply) {
  if (command instanceof GetMore) {
    return {
      ok: 1,
      cursor: {
        id: reply.message.cursorId,
        ns: namespace(command),
        nextBatch: reply.message.documents
      }
    };
  }

  if (command instanceof KillCursor) {
    return {
      ok: 1,
      cursorsUnknown: command.cursorIds
    };
  } // is this a legacy find command?


  if (command.query && typeof command.query.$query !== 'undefined') {
    return {
      ok: 1,
      cursor: {
        id: reply.message.cursorId,
        ns: namespace(command),
        firstBatch: reply.message.documents
      }
    };
  }

  return reply && reply.result ? reply.result : reply;
};
/** An event indicating the start of a given command */


var CommandStartedEvent =
/**
 * Create a started event
 *
 * @param {Pool} pool the pool that originated the command
 * @param {Object} command the command
 */
function CommandStartedEvent(pool, command) {
  _classCallCheck(this, CommandStartedEvent);

  var cmd = extractCommand(command);
  var commandName = extractCommandName(cmd); // NOTE: remove in major revision, this is not spec behavior

  if (SENSITIVE_COMMANDS.has(commandName)) {
    this.commandObj = {};
    this.commandObj[commandName] = true;
  }

  Object.assign(this, {
    connectionId: generateConnectionId(pool),
    requestId: command.requestId,
    databaseName: databaseName(command),
    commandName: commandName,
    command: cmd
  });
};
/** An event indicating the success of a given command */


var CommandSucceededEvent =
/**
 * Create a succeeded event
 *
 * @param {Pool} pool the pool that originated the command
 * @param {Object} command the command
 * @param {Object} reply the reply for this command from the server
 * @param {Array} started a high resolution tuple timestamp of when the command was first sent, to calculate duration
 */
function CommandSucceededEvent(pool, command, reply, started) {
  _classCallCheck(this, CommandSucceededEvent);

  var cmd = extractCommand(command);
  var commandName = extractCommandName(cmd);
  Object.assign(this, {
    connectionId: generateConnectionId(pool),
    requestId: command.requestId,
    commandName: commandName,
    duration: calculateDurationInMs(started),
    reply: maybeRedact(commandName, extractReply(command, reply))
  });
};
/** An event indicating the failure of a given command */


var CommandFailedEvent =
/**
 * Create a failure event
 *
 * @param {Pool} pool the pool that originated the command
 * @param {Object} command the command
 * @param {MongoError|Object} error the generated error or a server error response
 * @param {Array} started a high resolution tuple timestamp of when the command was first sent, to calculate duration
 */
function CommandFailedEvent(pool, command, error, started) {
  _classCallCheck(this, CommandFailedEvent);

  var cmd = extractCommand(command);
  var commandName = extractCommandName(cmd);
  Object.assign(this, {
    connectionId: generateConnectionId(pool),
    requestId: command.requestId,
    commandName: commandName,
    duration: calculateDurationInMs(started),
    failure: maybeRedact(commandName, error)
  });
};

module.exports = {
  CommandStartedEvent: CommandStartedEvent,
  CommandSucceededEvent: CommandSucceededEvent,
  CommandFailedEvent: CommandFailedEvent
};