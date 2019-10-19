var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")
var cc = require("no-case");

/* Coverage improving instructions */
cc(utils.source(null, utils.HIGH_LEVEL, "module-interface"))
/* End of coverage improving instructions */

measureTime(function() {
    console.log(cc(utils.source(genstr(50000, "X"), utils.HIGH_LEVEL, "module-interface")));
});
