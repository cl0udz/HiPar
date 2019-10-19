(function() {

    exports.run = function(x) {
        var utils = require("iflow");
        var secret = utils.source(x, utils.HIGH_LEVEL, "test-source-x");
        var o = {};
        o.p = 23;
        if (secret === 1) {
            delete o.p;
        }
        return o.hasOwnProperty("p");
    }

})();
