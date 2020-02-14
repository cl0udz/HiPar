"use strict";

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

var utils = require('../../../util/utils');

var instancePool = require('../../../domain/area/instancePool');

var logger = require('pomelo-logger').getLogger(__filename);

var exp = module.exports;

exp.create = function (params, cb) {
  var start = Date.now();
  var result = instancePool.create(params);
  var end = Date.now();
  logger.info('create instance use time : %j', end - start);
  utils.invokeCallback(cb, null, result);
};

exp.close = function (params, cb) {
  var id = params.id;
  var result = instancePool.close(id);
  utils.invokeCallback(cb, null, result);
};