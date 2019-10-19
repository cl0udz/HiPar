(function() {

    var utils = require("../TestUtils");

    var arr = utils.source([], utils.HIGH_LEVEL, "test-source-array-element");
    utils.sink(arr); // VIOLATION


})();
