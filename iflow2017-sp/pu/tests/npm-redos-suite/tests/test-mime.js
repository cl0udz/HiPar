var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")
var mime = require('mime');

measureTime(function() {
    var str =  utils.source(genstr(81750, '5') + "", utils.HIGH_LEVEL, "module-interface"); //progblematic regex: /.*[\.\/\\]/, in mime.js
    console.log("LENGTH: " + str.length);
    mime.lookup(str);
});
