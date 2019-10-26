/**
 * This thing is used by helmet
 */
var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js");
var platform = require('platform');

require("../utils").monkeyPatch();

measureTime(function() {
    var agent = platform.parse('Windows' + utils.source(genstr(50000, " "), utils.HIGH_LEVEL, "module-interface") + "x");//200ms
    //var agent = platform.parse("iPad" + genstr(30000, " ") + "x");
    setTimeout(function() {}, 2000)
});
