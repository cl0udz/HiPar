(function() {

    exports.run = function(x) {
        var utils = require("iflow");
        var secret = utils.source(x, utils.HIGH_LEVEL, "test-source-x");
        var o = {};
        if (secret === 1) {
            o.p = 23;
        }
        return o.hasOwnProperty("p");
    }

})();
