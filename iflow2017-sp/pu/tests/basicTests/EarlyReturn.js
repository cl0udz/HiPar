var utils = require("../TestUtils");

var secret = utils.source(12, utils.HIGH_LEVEL, "test-source-x");
function f(x) {
    if (x === 12) {
        return 1
    }
    return 0;
};
var y = f(secret);
var z = y;//PermUpViol
