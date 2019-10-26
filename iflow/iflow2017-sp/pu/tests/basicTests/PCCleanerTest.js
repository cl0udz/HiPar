var utils = require("../TestUtils");
var x = utils.source(12, utils.HIGH_LEVEL, "x")
var y = 13
if (x) {
    y = 10
}
var z = 12
utils.sink(z) // nothing here
