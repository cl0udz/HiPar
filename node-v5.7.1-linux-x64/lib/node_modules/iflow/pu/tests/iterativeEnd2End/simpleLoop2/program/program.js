(function() {

    var utils = require("iflow");

    exports.run = function() {
        utils.addSource(f, utils.HIGH_LEVEL, "func");
        utils.addSink(g);
        var x = f();
        var y = 0;
        for (; x < 20; x = x + 1)
            y = y + 1;
        g(y);
    }

    function f(x) {
        return 12;
    }

    function g(x) {
        return x;
    }

})();
