var utils = require("../TestUtils");

var secret = utils.source(12, utils.HIGH_LEVEL, "test-source-x");
var f;
if (secret) {f = function g(x) { return 1}}
    else { f = function g(x){ return 0}};
y = f(); //PermUpViol
