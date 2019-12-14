"use strict";

var inspect = require('object-inspect');
var utils = require("../TestcaseUtils.js");

var json = {
    "a": {
        url: "http://example.com"
    },
    "b": [3, 4] 
};



function test(userJson){
    return inspect(userJson);
}

console.log(utils.entry(test, json));

