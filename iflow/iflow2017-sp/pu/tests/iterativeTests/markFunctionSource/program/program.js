(function() {

    var utils = require("iflow");

    exports.run = function() {
        utils.addSource(f, utils.HIGH_LEVEL, "func");
        var x = f(23);
        var y = x
        utils.sink(y);
    }

    function f(x) {
        return x;
    }

})();
