var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")

var fresh = require('fresh');

/* Coverage improving instructions */
// can't do anything because of (req.headers['x-forwarded-for'] || '')
var testObj = utils.source({'if-none-match': false}, utils.HIGH_LEVEL, "module-interface");
fresh(testObj)
var testObj = utils.source({'if-none-match': "*"}, utils.HIGH_LEVEL, "module-interface");
fresh(testObj)
testObj = utils.source({'if-none-match': "a"}, utils.HIGH_LEVEL, "module-interface");
fresh(testObj,{etag:utils.source("a", utils.HIGH_LEVEL, "module-interface")})
testObj = utils.source({'if-none-match': "W/a"}, utils.HIGH_LEVEL, "module-interface");
fresh(testObj,{etag:utils.source("a", utils.HIGH_LEVEL, "module-interface")})
testObj = utils.source({'if-none-match': "a"}, utils.HIGH_LEVEL, "module-interface");
fresh(testObj,{etag:utils.source("W/a", utils.HIGH_LEVEL, "module-interface")})
testObj = utils.source({'if-none-match': "x"}, utils.HIGH_LEVEL, "module-interface");
fresh(testObj,{etag:utils.source("W/a", utils.HIGH_LEVEL, "module-interface")})
//fix the changing semantics for noneMatch.split(TOKEN_LIST_REGEXP).every(...)
/* End of coverage improving instructions */

measureTime(function() {
    var obj = {};
    var str =  genstr(60000, ' ') + "x"; //progblematic regex: / *, */, in fresh/index.js
    str = utils.source(str, utils.HIGH_LEVEL, "module-interface");
    obj["if-none-match"] =  str;

    console.log("LENGTH: " + str.length);
    fresh(obj, {
        "etag" : 23
    })
});
