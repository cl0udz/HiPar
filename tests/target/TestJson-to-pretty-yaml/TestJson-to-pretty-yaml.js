"use strict";

var YAML = require('json-to-pretty-yaml');

var data = {
  "a": 1,
  "b": 2,
  "c": [{
    "d": "cool",
    "e": "new"
  }, {
    "f": "free",
    "g": "soon"
  }]
};

function test(query) {
  YAML.stringify(query);
}

var utils = require('../TestcaseUtils.js');

utils.entry(test, data);