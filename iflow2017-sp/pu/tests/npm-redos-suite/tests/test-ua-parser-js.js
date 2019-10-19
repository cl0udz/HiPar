var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")
var parser = require('ua-parser-js');

/* Coverage improving instructions */
parser(utils.source(null, utils.HIGH_LEVEL, "module-interface"));
/* End of coverage improving instructions */

measureTime(function() {
    var input = "iphxos " + utils.source(genstr(25, "x"), utils.HIGH_LEVEL, "module-interface") + " like ma";
    console.log(input.length)
    var agent = parser(input);
});
