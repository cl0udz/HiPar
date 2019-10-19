var utils = require("../TestUtils");

function f(x) {
    return x
}
function g(x) {
    return x;
}
utils.addSource(f, utils.HIGH_LEVEL, "test-source");
utils.addSink(g);
var x = f(new Number());
g(x); // VIOLATION
