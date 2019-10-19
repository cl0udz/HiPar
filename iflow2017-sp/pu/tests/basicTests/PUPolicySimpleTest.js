var utils = require("../TestUtils");

var x = utils.source(12, utils.HIGH_LEVEL, "test-source-x");
f(x);
var y = z; // PermUpViol

function f(x) {
    z = 10;
    if (x) {
        z = 12
    }
}