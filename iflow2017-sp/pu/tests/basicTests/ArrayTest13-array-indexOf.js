(function() {

    var utils = require("../TestUtils");


    var arr = utils.source([], utils.HIGH_LEVEL, "test-source-array-element");;
    arr.push(6);
    arr.push(7);
    var pos = arr.indexOf(3);
    utils.sink(pos); //VIOLATION

})();
