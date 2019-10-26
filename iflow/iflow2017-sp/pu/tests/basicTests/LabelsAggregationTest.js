var utils = require("../TestUtils");

var x = utils.source(12, utils.LOW_LEVEL, "test-source");
var y = utils.source(13, utils.HIGH_LEVEL, "test-source");
var x = x + y;
utils.sink(x); // VIOLATION
