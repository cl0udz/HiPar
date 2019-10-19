(function() {

    var utils = require("iflow");

    exports.run = function() {
        utils.addSource(f, utils.HIGH_LEVEL, "func");
        utils.addSink(g);
        var x = utils.source(12, utils.HIGH_LEVEL, "test-source-x");
        var y = 0;
        for (; x < 20; x = x + 1)
            y = y + 1;
        g(y);
    }

    function f(x) {
        return x;
    }

    function g(x) {
        return x;
    }

})();
