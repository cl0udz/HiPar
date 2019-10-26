(function() {

    var utils = require("../TestUtils");

    var secret = utils.source(3, utils.HIGH_LEVEL, "test-source-array-element");;
    var arr = [secret];
    arr.push(2);
    arr.push(4);
    utils.sink(arr.valueOf()); // VIOLATION


})();
