"use strict";

var mapObject = require('map-obj');

var utils = require('../TestcaseUtils');

var input = {
  foo: 'bar'
};

function test(input) {
  var newObject = mapObject(input, function (key, value) {
    return [value, key];
  });
  console.log(newObject);
}

utils.entry(test, input);