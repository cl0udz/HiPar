/**
 * This is an injection vulnerability
 */
var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js");
var dns = require('dns-sync');
//require("../utils").monkeyPatch();
measureTime(function() {
    //dns.resolve("tst`sleep 10`x");
    //dns.resolve(genstr(40, "a") + "-");
    dns.resolve(utils.source("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-", utils.HIGH_LEVEL, "module-interface"))
});
