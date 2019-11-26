"use strict";

var jpv = require('jpv');
var path = require('path');
var utils = require(path.resolve(__dirname, "../TestcaseUtils.js"));


var json = {
    key1 : null,
    key2 : {
        url : "http://example.com"
    },
    key3 : "17850",
    key4 : "OK",
    key5 : "2012-10-06T04:13:00+00:00",
    key6 : [1,2,3],
    key7 : "Yes"
};

var pattern = {
    key1 : '(null)',
    key2 : {
        url : "[url]"
    },
    key3 : /[0-9]+/i,
    key4 : "OK",
    key5 : '[datetime]',
    key6 : '![empty]',
};
console.log(jpv.validate(json, pattern));
utils.whatWeDoThisTime(jpv.validate, json, pattern, __dirname);
