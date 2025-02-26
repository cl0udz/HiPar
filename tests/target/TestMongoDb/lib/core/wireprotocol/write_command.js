'use strict';

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

var MongoError = require('../error').MongoError;

var collectionNamespace = require('./shared').collectionNamespace;

var command = require('./command');

function writeCommand(server, type, opsField, ns, ops, options, callback) {
  if (ops.length === 0) throw new MongoError("".concat(type, " must contain at least one document"));

  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  options = options || {};
  var ordered = typeof options.ordered === 'boolean' ? options.ordered : true;
  var writeConcern = options.writeConcern;
  var writeCommand = {};
  writeCommand[type] = collectionNamespace(ns);
  writeCommand[opsField] = ops;
  writeCommand.ordered = ordered;

  if (writeConcern && Object.keys(writeConcern).length > 0) {
    writeCommand.writeConcern = writeConcern;
  }

  if (options.collation) {
    for (var i = 0; i < writeCommand[opsField].length; i++) {
      if (!writeCommand[opsField][i].collation) {
        writeCommand[opsField][i].collation = options.collation;
      }
    }
  }

  if (options.bypassDocumentValidation === true) {
    writeCommand.bypassDocumentValidation = options.bypassDocumentValidation;
  }

  var commandOptions = Object.assign({
    checkKeys: type === 'insert',
    numberToReturn: 1
  }, options);
  command(server, ns, writeCommand, commandOptions, callback);
}

module.exports = writeCommand;