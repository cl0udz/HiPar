(function() {

    var utils = require("iflow");

    exports.run = function() {
        var x = utils.source(23, utils.HIGH_LEVEL, "password");
        var y = utils.source(23, utils.HIGH_LEVEL, "cookie");
        var z = x + y;
        utils.sink(z);
    }

})();
