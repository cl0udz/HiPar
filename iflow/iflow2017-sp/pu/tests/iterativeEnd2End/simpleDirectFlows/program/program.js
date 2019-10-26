(function() {

    var utils = require("iflow");

    exports.run = function() {
        var x = utils.source(23, utils.HIGH_LEVEL, "test");
        var y = x;
        var z = y;
        var x = z;
        var y = x;
        utils.sink(y);
    }

})();
