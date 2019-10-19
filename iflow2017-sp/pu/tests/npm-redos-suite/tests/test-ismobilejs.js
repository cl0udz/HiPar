var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js");
var ismobilejs = require('ismobilejs');
//require("../utils").monkeyPatch();

/* Coverage improving instructions */
navigator={}
try {
    var agent = ismobilejs(utils.source(false, utils.HIGH_LEVEL, "module-interface"));
} catch(e){}
/* End of coverage improving instructions */

measureTime(function() {
    //var agent = ismobilejs(genstr(3000, "MobileFirefox"));
    var agent = ismobilejs(utils.source(genstr(20000, "X"), utils.HIGH_LEVEL, "module-interface")); //1.5 seconds
});
