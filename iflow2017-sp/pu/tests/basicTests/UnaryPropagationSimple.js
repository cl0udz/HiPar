var utils = require("../TestUtils");

var x = utils.source(12, utils.HIGH_LEVEL, "test-source");
var z = !x;
utils.sink(z); // VIOLATION
