(function() {

    var utils = require("../TestUtils");

    function g(x) {
        console.log("You should not be here!");
        return x;
    }
    Math.max = utils.source(Math.max, utils.HIGH_LEVEL, "test-source");
    var x = utils.source(23, utils.HIGH_LEVEL, "test-source");
    var y = utils.source(25, utils.HIGH_LEVEL, "test-source");
    utils.addSink(g);
    if (Math.max.call(null, x, y) != 25)
        g(x); //nothing
    if (Math.max.apply(null, [x, y]) != 25)
        g(x); //nothing

})();
