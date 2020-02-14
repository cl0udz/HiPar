"use strict";

require("core-js/modules/es.function.name");

require("core-js/modules/es.function.name");

require("core-js/modules/es.function.name");

require("core-js/modules/es.function.name");

require("core-js/modules/es.function.name");

require("core-js/modules/es.function.name");

require("core-js/modules/es.function.name");

require("core-js/modules/es.function.name");

require("core-js/modules/es.function.name");
/**
 *Module dependencies
 */


var util = require('util');
/**
 * Initialize a new 'User' with the given 'opts'.
 *
 * @param {Object} opts
 * @api public
 */


var User = function User(opts) {
  this.id = opts.id;
  this.name = opts.name;
  this.from = opts.from || '';
  this.password = opts.password;
  this.loginCount = opts.loginCount;
  this.lastLoginTime = opts.lastLoginTime;
};
/**
 * Expose 'Entity' constructor
 */


module.exports = User;