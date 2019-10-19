(function() {

    var utils = require("../../../TestUtils");

    exports.run = function() {
        var x = utils.source(23, utils.HIGH_LEVEL, "x");
        var y = 5, a = 0, b = 12, c = 8, d = 10, e = 11, f = 23, g = 42;
        if (x) {
            y = 7;
            a = 1;
            b = 1;
            c = 1;
            d = 1;
            e = 1;
            f = 1;
            g = 1;
        }
        utils.sink(y);
    }

})();
