var utils = require("../TestUtils");

function f(x) {
    return x
}
function g(x) {
    return x;
}
utils.addSource(f, utils.HIGH_LEVEL, "test-source");
utils.addSink(g);
var x = f(12);
if (x === 12 && !x === false) {
    g(x); // VIOLATION
}