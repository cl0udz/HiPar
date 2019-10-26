(function() {

    var utils = require("../TestUtils");


    var arr = [1,2];
    arr.push(utils.source(3, utils.HIGH_LEVEL, "test-source-array-element"));
    arr.push(4);
    arr.splice(2,1);

    utils.sink(arr.splice(2,1)); // VIOLATION

})();
