var utils = require("../TestUtils");
var x = {}
x.x = "test";
x.ownRef = x;
var a = utils.source(x, utils.HIGH_LEVEL);

try {
    JSON.stringify(a) != "{\"x\":\"test\"}"
    console.log(a);
    console.log(JSON.stringify(a));
    utils.sink(a);
} catch (e) {
    //NOTHING here:  Converting circular structure to JSON
}