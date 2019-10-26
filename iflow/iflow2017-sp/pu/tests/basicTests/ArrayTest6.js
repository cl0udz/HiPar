(function() {

    var utils = require("../TestUtils");

    var secret = utils.source(3, utils.HIGH_LEVEL, "test-source-array-element");
    var arr = [1,2,3];
    var x = arr[2];
    utils.sink(x); // nothing
    arr[3] = secret;
    x = arr[3];
    utils.sink(x); // VIOLATION


})();
