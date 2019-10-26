var utils = require("../TestUtils");

var x = utils.source(12, utils.HIGH_LEVEL, "test-source-x");
var y = 0;
for (; x < 20; x++) y++;
utils.sink(y); // PermUpViol
