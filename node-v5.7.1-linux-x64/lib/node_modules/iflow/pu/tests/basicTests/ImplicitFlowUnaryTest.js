var utils = require("../TestUtils");

var x = utils.source(12, utils.HIGH_LEVEL, "test-source-x");
var y = 12;
var z = 10;
if (x + y) {
    z = typeof y;
}
utils.sink(z); // PermUpViol
