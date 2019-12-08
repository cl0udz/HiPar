"use strict";

var ObjectID = require("bson-objectid");
var utils = require("../TestcaseUtils.js");

var json = {
    key: {
        url: "http://example.com"
    }
};


function test(userJson){
    //  ObjectID(new Buffer([ 84, 73, 90, 217, 76, 147, 71, 33, 237, 231, 109, 144]));
    ObjectID(userJson);
}


utils.entry(test, "sss");
