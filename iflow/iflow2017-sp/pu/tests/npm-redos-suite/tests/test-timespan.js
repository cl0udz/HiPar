var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js");
var timespan = require('timespan');

/* Coverage improving instructions */
new timespan.parseDate( utils.source(2, utils.HIGH_LEVEL, "module-interface"))
/* End of coverage improving instructions */
// require("../utils").monkeyPatch();
measureTime(function() {
    var ts = new timespan.parseDate( utils.source("NOW-" + genstr(50000, "1"), utils.HIGH_LEVEL, "module-interface") + "milli");
});
