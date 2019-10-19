(function() {

    var utils = require("iflow");

    exports.run = function() {
        var x = 23;
        var y = 5;
        if (x) y = 7 + x;
        utils.sink(y);
    }

})();
