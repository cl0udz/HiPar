var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")
const contentTypeParser = require("content-type-parser");

/* Coverage improving instructions */
contentTypeParser(utils.source(null, utils.HIGH_LEVEL, "module-interface"))
/* End of coverage improving instructions */


//require("../utils").monkeyPatch()
measureTime(function() {
    console.log(contentTypeParser(utils.source(genstr(30000, "/"), utils.HIGH_LEVEL, "module-interface") + "\r\n"));
});
