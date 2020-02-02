"use strict";
var Papa = require("./node_modules/papaparse");


var message = [{a: null, b: ' '}, {}, {a: '1', b: '2'}]
function test(message) {
    Papa.unparse(message);
}

var utils = require('../TestcaseUtils.js');

utils.entry(test, message);
