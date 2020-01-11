"use strict";

var jpv = require('jpv');
var path = require('path');
var utils = require("../TestcaseUtils.js");

var json = {
    key1: null,
    key2: {
        url: "http://example.com"
    },
    key3: "17850",
    key4: "OK",
    key5: "2012-10-06T04:13:00+00:00",
    key6: [1, 2, 3],
    key7: {"a":1}
};
var pattern = {
    key1: '(null)',
    key2: {
        url: "[url]"
    },
    key3: /[0-9]+/i,
    key4: "OK",
    key5: '[datetime]',
    key6: '![empty]',
    key7: '(object)'
};

function test(userJson){
   return  jpv.validate(userJson, pattern);
}
// console.log(test(json));
utils.entry(test, json);
