"use strict";

var valib = require('valib');
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
    key7: "Yes"
};

function test(userJson){
    valib.Object.isEmpty(userJson);
    valib.Object.countKeys(userJson);
    valib.Object.hasValue(userJson, "Yes");
    valib.Object.hasKey(userJson, 'key3');
}
utils.entry(test, json);
