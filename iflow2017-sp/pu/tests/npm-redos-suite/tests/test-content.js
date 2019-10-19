var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js");
const content = require("content");

/* Coverage improving instructions */
content.type(utils.source("text/html; charset=utf-8", utils.HIGH_LEVEL, "module-interface"));
content.disposition(utils.source(null, utils.HIGH_LEVEL, "module-interface"));
content.disposition(utils.source('form-datax;', utils.HIGH_LEVEL, "module-interface"));
/* End of coverage improving instructions */

//require("../utils").monkeyPatch();
measureTime(function() {
    content.disposition(utils.source("form-data;x" + genstr(2000, " "), utils.HIGH_LEVEL, "module-interface"));
});

measureTime(function() {
    content.type("x/x;x=" + genstr(40000, " ") + utils.source("=\"x", utils.HIGH_LEVEL, "module-interface"));
});

