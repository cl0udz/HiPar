var utils = require("../TestUtils");

var x = utils.source(12, utils.HIGH_LEVEL, "test-source");
eval("var z = x + 1");
utils.sink(z); // VIOLATION
