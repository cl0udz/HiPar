(function() {

    var utils = require("../TestUtils");

    function f(x) {
        return x
    }
    function g(x) {
        return x;
    }
    utils.addSource(f, utils.HIGH_LEVEL, "test-source");
    utils.addSink(g);

    var a = f();
    g.call(null, a); //VIOLATION

})();
