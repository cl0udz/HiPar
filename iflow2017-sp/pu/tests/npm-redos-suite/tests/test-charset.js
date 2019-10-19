/**
 * This thing is used by helmet
 */

var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js");
var charset = require('charset');

//require("../utils").monkeyPatch();
/* Coverage improving instructions */
try {
    var agent = charset(utils.source({XXX: 25}, utils.HIGH_LEVEL, "module-interface"));
} catch(e) {}
try {
    var agent = charset(utils.source(null, utils.HIGH_LEVEL, "module-interface"));
} catch(e) {}
/* End of coverage improving instructions */

measureTime(function() {
    var agent = charset(utils.source("encoding=" + genstr(30000, " "), utils.HIGH_LEVEL, "module-interface"));
});
