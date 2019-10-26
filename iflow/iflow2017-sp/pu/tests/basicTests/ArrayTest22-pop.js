(function() {

    var utils = require("../TestUtils");


    var arr = [1,2];
    arr.push(utils.source(3, utils.HIGH_LEVEL, "test-source-array-element"));
    arr.pop();

    utils.sink(arr.hasOwnProperty(2)); //nothing here

})();
