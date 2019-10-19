var utils = require("../TestUtils");
var x = utils.source(12, utils.HIGH_LEVEL, "x")
var y = 13
var z = x + y

z = 23
utils.sink(z) // nothing here

z = x + 1
z = 18 + 23
utils.sink(z) // nothing here

z = x + 1
z = typeof 12
utils.sink(z) // nothing here
