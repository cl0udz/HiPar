"use strict";

var EJSON = require('mongodb-extjson');

var Int32 = require('mongodb').Int32;

var stringifyInput = new Int32(10);
var parseInput = stringifyInput;

function testStringify(input) {
  // prints '{"int32":{"$numberInt":"10"}}'
  EJSON.stringify({
    int32: input
  });
}

function testParse(input) {
  var text = EJSON.stringify({
    int32: input
  });
  EJSON.parse(text);
}

var utils = require("../TestcaseUtils.js");

utils.entry(testStringify, stringifyInput);
utils.entry(testParse, parseInput);