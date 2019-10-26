(function() {
    exports.run = function(x) {
        var utils = require("iflow");

        var secret = utils.source(x, utils.HIGH_LEVEL, "test-source-x");
        var f = function g(x) { return 0};
        if (secret === 1) {
            f = function g(x) {
                return 1;
            }
        }
        y = f();

        utils.sink(y); // VIOLATION
    }

})();
