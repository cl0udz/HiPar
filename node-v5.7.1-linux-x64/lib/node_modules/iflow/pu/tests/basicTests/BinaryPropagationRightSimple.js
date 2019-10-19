var utils = require("../TestUtils");

var x = utils.source(12, utils.HIGH_LEVEL, "test-source");
var z = 1 + x;
utils.sink(z); // VIOLATION
