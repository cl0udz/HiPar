"use strict";

var inspect = require('object-inspect');
var utils = require("../TestcaseUtils.js");

var json = {
    "a": {
        url: "http://example.com",
        "inspect": "a"
    },
    "b": {"22":12}
};



function test(userJson){
    return inspect(userJson);
}
console.log(inspect(json));
// console.log(utils.entry(test, json));

