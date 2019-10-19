var utils = require("../TestUtils");

var a = utils.source({x:"test"}, utils.HIGH_LEVEL);
if (JSON.stringify(a) != "{\"x\":\"test\"}") {
    utils.sink(a);
}