var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")
var moment = require('moment');

measureTime(function() {
    var str =  utils.source(genstr(50000, '1') + "", utils.HIGH_LEVEL, "module-interface"); //progblematic regex: / *, */, in fresh/index.js
    console.log("LENGTH: " + str.length);
    moment(str, "MMM");
});
