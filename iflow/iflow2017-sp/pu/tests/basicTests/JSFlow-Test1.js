var utils = require("../TestUtils");

var x = new Object();
x.f = 0;
y = x;
y.f = utils.source(12, utils.HIGH_LEVEL, "test-source-x");

utils.sink(x); // VIOLATION