"use strict";

import JSON from 'json-strictify';
//var JSON = require('json-strictify');

var someObject = {
  code: 42,
  items: [{
    id: 1,
    name: 'foo'
  }, {
    id: 2,
    name: 'bar'
  }]
};

function test(input) {
  JSON.stringify(input);
}

var utils = require('../TestcaseUtils.js');

utils.entry(test, someObject, __dirname);
