(function() {

    var utils = require("../TestUtils");

    var secret = utils.source(undefined, utils.HIGH_LEVEL, "test-source-undefined");
    var x=5;
    if (typeof secret === 'undefined') {
        x=7;
    }
    utils.sink(x); // PermUpViol


})();
