(function() {

    var utils = require("../TestUtils");

    var secret = {a: utils.source(42, utils.HIGH_LEVEL, "test-source-array-element")};
    utils.sink(Math.pow(10, 11, secret)); // VIOLATION


})();
