var utils = require("../TestUtils");
var x = utils.source(12, utils.HIGH_LEVEL, "x")
var x2 = utils.source(12, utils.HIGH_LEVEL, "x")
try {
    if (x) {
        if (x2) {
            throw "Error";
            y = 23
        }
    }
} catch (e) {
   x++;
}
var y = 13
var z = 23 + y

utils.sink(z) // nothing
