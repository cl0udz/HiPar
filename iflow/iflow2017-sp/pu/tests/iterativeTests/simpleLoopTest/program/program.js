(function() {

    var utils = require("iflow");

    exports.run = function() {
        var x = utils.source(23, utils.HIGH_LEVEL, "test");
        var y = 0;
        for (;x < 33; x=x+1) {
            y = y+1;
        }
        utils.sink(y);
    }

})();
