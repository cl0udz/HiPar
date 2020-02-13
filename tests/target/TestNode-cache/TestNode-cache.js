"use strict";

var NodeCache = require("node-cache");

var myCache = new NodeCache();
var obj = {
  my: "Special",
  variable: 42
};

function test(query) {
  var success = myCache.set("myKey", query, 10000);
}

var utils = require('../TestcaseUtils.js');

utils.entry(test, obj);