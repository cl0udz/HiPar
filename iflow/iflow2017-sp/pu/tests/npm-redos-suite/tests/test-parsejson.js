var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")
var parsejson = require('parsejson');

/* Coverage improving instructions */
parsejson(utils.source(null, utils.HIGH_LEVEL, "module-interface"))
/* End of coverage improving instructions */

measureTime(function() {
    parsejson("{\"a\":\"" + utils.source(genstr(50000, " "), utils.HIGH_LEVEL, "module-interface") + "\"}");
});
