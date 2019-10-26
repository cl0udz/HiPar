(function() {

    var utils = require("../TestUtils");

    var secret = utils.source(null, utils.HIGH_LEVEL, "test-source-null");
    if (typeof secret === 'object') {
        x=23;
    }
    utils.sink(x); // PermUpViol


})();
