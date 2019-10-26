(function() {

    var utils = require("iflow");
    utils.addSource(f, utils.HIGH_LEVEL, "func");
    utils.addSink(g);

    exports.run = function() {
        var x = f(23)
        y = {};
        z = [];
        y.field = 0
        z[0] = 5
        if (x) {
            y.field = 7;
            z[0] = 12
        }
        g(y.field);
    }

    function f(x){ return x;}
    function g(){}

})();
