"use strict";

var JsonRecords = require('json-records');

var jr = new JsonRecords('data.json');

function test(query) {
  jr.add(query);
}

var utils = require('../TestcaseUtils.js');

utils.entry(test, {
  a: 1,
  c: 3
});