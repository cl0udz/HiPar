var utils = require("../TestUtils");

var x = utils.source(12, utils.HIGH_LEVEL, "test-source-x");
var y = utils.source(13, utils.HIGH_LEVEL, "test-source-y");
var z = x + y;
utils.sink(z); // VIOLATION
