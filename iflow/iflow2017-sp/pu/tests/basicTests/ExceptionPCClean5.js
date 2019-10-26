var utils = require("../TestUtils");
var x = utils.source(12, utils.HIGH_LEVEL, "x")
var x2 = utils.source(12, utils.HIGH_LEVEL, "x2")
var x3 = utils.source(12, utils.HIGH_LEVEL, "x3")
for (var i = 0; i < x; i++) {
    if (x3) {
        if (x2) {
            console.log(23)
            break;
        }
    }
}
var y = 13;
var z = 23 + y

utils.sink(z) // nothing
