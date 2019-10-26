var utils = require("../TestUtils");

var x = utils.source(12, utils.HIGH_LEVEL, "test-source-x");
f(x);
z = 3
var y = z; // nothing here

function f(x) {
    z = 10;
    if (x) {
        z = 12
    }
}