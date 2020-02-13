"use strict";

var hash = require('object-hash');

function test(query) {
  hash(query);
}

var utils = require('../TestcaseUtils.js');

utils.entry(test, {
  foo: 'bar'
});