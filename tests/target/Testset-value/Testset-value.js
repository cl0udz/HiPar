"use strict";

var set = require('set-value');

var utils = require('../TestcaseUtils');

var input = {
  a: 'b'
};

function test(input) {
  set(input, 'a.b.c', 'd');
  console.log(input);
}

utils.entry(test, input);