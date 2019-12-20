"use strict";

var type = require('component-type');
var utils = require("../TestcaseUtils.js");

var json = {
    "key": "OK",
    "_isBuffer":1
};

function test(userJson){
   return type(userJson);
}
utils.entry(test, json);
