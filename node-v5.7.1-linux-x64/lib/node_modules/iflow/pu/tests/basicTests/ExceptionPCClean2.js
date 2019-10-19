var utils = require("../TestUtils");
var x = utils.source(12, utils.HIGH_LEVEL, "x")
try {
    test()
} catch (e) {
   x++;
}
var y = 13
var z = 23 + y

utils.sink(z) // nothing

function test() {
    if (x) {
        y = 23
        throw "Error";
    }

}