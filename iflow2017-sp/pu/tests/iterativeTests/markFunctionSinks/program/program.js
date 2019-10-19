(function() {

    var utils = require("iflow");

    exports.run = function() {
        utils.addSource(f, utils.HIGH_LEVEL, "func");
        utils.addSink(g);
        var x = f(23);
        var y = x;
        g(y);
    }

    function f(x) {
        return x;
    }

    function g(x) {
        return x;
    }

})();
