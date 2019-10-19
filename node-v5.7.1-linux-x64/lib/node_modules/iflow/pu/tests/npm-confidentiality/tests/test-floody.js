var utils = require("iflow");
var policy = require("../Policy.js");

var f = require('floody')(process.stdout);

/* Coverage improving instructions */
f.shouldWrite();
f.write(utils.source(new Buffer(0), utils.HIGH_LEVEL, "coverage-buff"));
// f.write(utils.source(new Buffer(20000), utils.HIGH_LEVEL, "coverage-buff"));
f.shouldWrite();
try {
    f.write(utils.source(23, utils.HIGH_LEVEL, "coverage-buff"));
} catch (e){};

/* End of coverage improving instructions */
f.write(12);
f.write(12000);

setTimeout(function() {
    process.exit(0)
}, 1000);
