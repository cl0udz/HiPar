var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")
var tough = require('tough-cookie');

/* Coverage improving instructions */
var str = utils.source("x23;y", utils.HIGH_LEVEL, "module-interface");
var Cookie = tough.Cookie;
var cookie = Cookie.parse(str);
/* End of coverage improving instructions */

measureTime(function() {
    var str =  utils.source("x" + genstr(50000, ' ') + "x", utils.HIGH_LEVEL, "module-interface"); //progblematic regex: / *, */, in fresh/index.js
    var Cookie = tough.Cookie;
    var cookie = Cookie.parse(str);
    console.log(cookie)
});
