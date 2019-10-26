(function() {

    var utils = require("../TestUtils");

    var arr = [1,2,utils.source(3, utils.HIGH_LEVEL, "test-source-array-element")];
    var x = arr[2];
    utils.sink(x); // VIOLATION


})();
