var utils = require("../TestUtils");
var x = utils.source("myString", utils.HIGH_LEVEL, "test-source");
utils.sink(x[2]); // VIOLATION