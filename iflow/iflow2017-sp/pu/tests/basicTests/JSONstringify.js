(function() {

    var utils = require("../TestUtils");

    var secret = utils.source(42, utils.HIGH_LEVEL, "test-source-array-element");
    utils.sink(JSON.stringify(secret)); // VIOLATION


})();
