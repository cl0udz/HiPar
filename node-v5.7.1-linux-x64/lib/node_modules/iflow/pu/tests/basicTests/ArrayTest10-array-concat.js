(function() {

    var utils = require("../TestUtils");

    var secret = utils.source(42, utils.HIGH_LEVEL, "test-source-array-element");
    var arr = [1,2,3];
    arr.push(secret);
    var arr2 = [1,2,3,5];
    var res = arr2.concat(arr);
    utils.sink(res); // VIOLATION

})();
