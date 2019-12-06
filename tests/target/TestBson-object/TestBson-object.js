"use strict";

var ObjectID = require("bson-objectid");
var utils = require("../TestcaseUtils.js");

var json = {
    key: {
        url: "http://example.com"
    },
};

function test(userJson){
   return  ObjectID(userJson);
}
// console.log(test(json));
utils.entry(test, json);
