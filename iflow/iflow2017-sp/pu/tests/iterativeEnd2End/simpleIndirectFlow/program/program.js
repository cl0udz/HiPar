(function() {

    var utils = require("iflow");

    exports.run = function() {
        var x = utils.source(23, utils.HIGH_LEVEL, "x");
        var y = 5;
        if (x) y = 7;
        utils.sink(y);
    }

})();
