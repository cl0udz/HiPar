var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")
var useragent = require('useragent');

/* Coverage improving instructions */
useragent.parse(utils.source("000000000000aAZz-12`" + genstr(101, "0"), utils.HIGH_LEVEL, "module-interface"));
useragent.parse(utils.source(null, utils.HIGH_LEVEL, "module-interface"));
useragent.Agent('x', 'x', 'x', 'x',utils.source(null, utils.HIGH_LEVEL, "module-interface"))
/* End of coverage improving instructions */

measureTime(function() {
    //var agent = useragent.parse(genstr(3000, "X")); // <--------- this is much slower
    //var agent = useragent.parse(genstr(40920, "; "));
    var agent = useragent.parse(utils.source(genstr(10, "X"), utils.HIGH_LEVEL, "module-interface")); //13 hours
    //var device = agent.device.toString();
});
