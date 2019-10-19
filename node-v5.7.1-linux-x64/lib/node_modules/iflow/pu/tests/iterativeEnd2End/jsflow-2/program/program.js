(function() {

    exports.run = function(x) {
        var utils = require("iflow");
        var secret = utils.source(x, utils.HIGH_LEVEL, "test-source-x");
        var l = 1, t = 0;
        if (secret === 1)
            t = 1;
        if (t === 0) {
            console.log("here");
            l = 0;
        }
        utils.sink(l);
    }

})();
