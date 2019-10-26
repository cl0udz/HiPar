var utils = require("../TestUtils");

var x = utils.source({a: 23, b:23}, utils.HIGH_LEVEL, "test-source-x");
var count = 0;
for (var i in x) {
    console.log("One prop is " + i);
    count++;
}
console.log("The count is "+  count);
if (count != 2)
    utils.sink(x);