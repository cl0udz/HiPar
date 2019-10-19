(function() {

    var utils = require("../TestUtils");

    var secret = utils.source(null, utils.HIGH_LEVEL, "test-source-null");
    var x = secret;
    utils.sink(x); // VIOLATION


})();
