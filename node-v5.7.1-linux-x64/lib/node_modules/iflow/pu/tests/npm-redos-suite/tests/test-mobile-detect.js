var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js");
var MobileDetect = require('mobile-detect');

/* Coverage improving instructions */
var md = new MobileDetect(utils.source(null, utils.HIGH_LEVEL, "module-interface"));
/* End of coverage improving instructions */

//require("../utils").monkeyPatch()
measureTime(function() {
    var md = new MobileDetect(utils.source(genstr(12500, "Dell"), utils.HIGH_LEVEL, "module-interface"));
    md.phone();
});
