(function() {

    var utils = require("../TestUtils");

    var arr = [1,2,utils.source(3, utils.HIGH_LEVEL, "test-source-array-element")];
    var x = arr.length;
    utils.sink(x); // VIOLATION (MP: not sure whether there is a flow or not) CS: It is!


})();
