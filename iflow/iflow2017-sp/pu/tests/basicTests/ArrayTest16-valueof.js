(function() {

    var utils = require("../TestUtils");

    var arr = utils.source([2], utils.HIGH_LEVEL, "test-source-array-element");;
    arr.push(2);
    arr.push(4);
    utils.sink(arr.valueOf()); // VIOLATION


})();
