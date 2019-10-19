(function() {

    var utils = require("iflow");

    exports.run = function() {
        utils.addSource(f, utils.HIGH_LEVEL, "func");
        utils.addSink(g);
        var step = utils.source(12, utils.HIGH_LEVEL, "test-source-x");
        var x = [19, 14, 82, 23, 91,283]
        var min = Number.MAX_VALUE;
        for (var i = 0; i < 6; i++) {
            x[i] += step;
        }
        g(x[3]);
    }

    function f(x) {
        return x;
}

    function g(x) {
        return x;
    }

})();
