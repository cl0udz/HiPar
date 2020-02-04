"use strict";

var bunyan = require('bunyan');

var log = bunyan.createLogger({
  name: "myapp"
});

function test(query) {
  log.info(query, 'hi');
}

var utils = require('../TestcaseUtils.js');

utils.entry(test, {
  foo: 'bar'
});