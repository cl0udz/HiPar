"use strict";

var yaml = require('js-yaml');
var utils = require("../TestcaseUtils.js");

var json = {
    key4: "OK",
    key6: [1, 2, 3],
    key7: {"a":1}
};

function test(userJson){
  yaml.safeDump(userJson);
}
// console.log(test(json));
utils.entry(test, json);
