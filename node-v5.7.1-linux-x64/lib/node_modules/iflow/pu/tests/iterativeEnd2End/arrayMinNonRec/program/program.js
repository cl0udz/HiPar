(function() {

    var utils = require("iflow");

    exports.run = function() {
        utils.addSource(f, utils.HIGH_LEVEL, "func");
        utils.addSink(g);
        var x = [19, 14, 82, 23, 91, utils.source(12, utils.HIGH_LEVEL, "test-source-x"), 283]
        var min = Number.MAX_VALUE;
        for (var i = 0; i < 7; i++) {
            if (x[i] < min) {
                min = x[i];
            }
        }
        g(min);
    }

    function f(x) {
        return x;
}

    function g(x) {
        return x;
    }

})();
