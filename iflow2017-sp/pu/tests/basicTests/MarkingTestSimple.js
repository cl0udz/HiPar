var utils = require("../TestUtils");
var x = utils.source(new Number(12), utils.HIGH_LEVEL, "test-source");
utils.sink(x); // VIOLATION