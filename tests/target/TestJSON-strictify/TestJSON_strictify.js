"use strict";

var JSON = require('json-strictify').JSON;

someObject = {
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

var util = require('../TestUtils.js');

utils.entry(test, someObject, __dirname);