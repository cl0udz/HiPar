(function() {

    var utils = require("../TestUtils");


    var arr = [1,2];
    arr.push(utils.source(3, utils.HIGH_LEVEL, "test-source-array-foreach"));
    var res = 0;
    arr.forEach(function test(element) {
        res += element;
    });

    utils.sink(res); //VIOLATION

})();
