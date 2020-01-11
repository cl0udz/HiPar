"use strict";

var Keyv = require('keyv');

var utils = require("../TestcaseUtils.js");

var keyv = new Keyv();
var json = {
  key4: "OK",
  key7: {
    "a": 1
  }
};

function test(userJson) {
  keyv.set('foo', userJson);
} // console.log(test(json));


utils.entry(test, json);