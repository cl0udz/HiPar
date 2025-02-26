"use strict";

require("core-js/modules/es.object.is.js");

Object.is = require("object-is");

var utils = require("../TestcaseUtils.js");

var json = {
  key: {
    url: "http://example.com"
  }
};

function test(userJson) {
  return Object.is(Object, userJson);
}

console.log(utils.entry(test, json));