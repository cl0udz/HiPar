var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")

process.env.DEBUG= "*";

var debug = require('debug');
var error = debug('app:error');
error.log = function() {}

/* Coverage improving instructions */
error('x %o %o', utils.source({x:23}, utils.HIGH_LEVEL, "module-interface"), {x:24});
/* End of coverage improving instructions */

measureTime(function() {
    var str =  genstr(40000, ' ') + ""; //progblematic regex: /\s*\n\s*/g, in debug/src/node.js
    console.log("LENGTH: " + str.length);
    error('x %o', {"test": utils.source(str, utils.HIGH_LEVEL, "module-interface")});
});