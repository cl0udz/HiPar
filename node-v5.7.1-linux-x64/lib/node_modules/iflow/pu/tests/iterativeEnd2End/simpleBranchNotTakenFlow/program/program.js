(function() {

    var utils = require("iflow");

    exports.run = function(takeBranch) {
        var x = utils.source(23, utils.HIGH_LEVEL, "x");
        var y = 5;
        if (takeBranch && x) y = 7;
        y = y + 1;
        if (!takeBranch)
        utils.sink(y);
    }

})();
