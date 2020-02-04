"use strict";

var update = require('immutability-helper');

function test(query) {
  var state1 = ['x'];
  var state2 = update(state1, query);
}

var utils = require('../TestcaseUtils.js');

utils.entry(test, {
  $push: ['y']
});