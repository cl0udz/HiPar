(function() {

    var utils = require("iflow");

    exports.run = function() {
        var x = utils.source(23, utils.HIGH_LEVEL, "x");
        var y = 5;
        var z = 12;
        if (x) {
            y = 7;
            if (y) {
                z = 2
            }
        }
        utils.sink(z);
    }

})();
