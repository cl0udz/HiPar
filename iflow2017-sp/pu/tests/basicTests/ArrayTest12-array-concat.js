(function() {

    var utils = require("../TestUtils");


    var arr = utils.source([], utils.HIGH_LEVEL, "test-source-array-element");;
    arr.push(6);
    arr.push(7);
    var arr2 = [1,2,3,5];
    var res = arr2.concat(arr);
    utils.sink(arr); // VIOLATION

})();
