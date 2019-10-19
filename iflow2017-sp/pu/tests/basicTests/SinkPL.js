(function() {

    var utils = require("../TestUtils");

    function f(x) {
        return x
    }
    utils.addSource(f, utils.HIGH_LEVEL, "test-source");
    utils.addSink(console.log);

    var a = f(13);
    if (a) {
        console.log(23); //VIOLATION
    }

})();
