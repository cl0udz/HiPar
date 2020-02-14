'use strict';
/**
 * Creates a new CommandResult instance
 * @class
 * @param {object} result CommandResult object
 * @param {Connection} connection A connection instance associated with this result
 * @return {CommandResult} A cursor instance
 */

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/web.url.to-json");

var CommandResult = function CommandResult(result, connection, message) {
  this.result = result;
  this.connection = connection;
  this.message = message;
};
/**
 * Convert CommandResult to JSON
 * @method
 * @return {object}
 */


CommandResult.prototype.toJSON = function () {
  var result = Object.assign({}, this, this.result);
  delete result.message;
  return result;
};
/**
 * Convert CommandResult to String representation
 * @method
 * @return {string}
 */


CommandResult.prototype.toString = function () {
  return JSON.stringify(this.toJSON());
};

module.exports = CommandResult;