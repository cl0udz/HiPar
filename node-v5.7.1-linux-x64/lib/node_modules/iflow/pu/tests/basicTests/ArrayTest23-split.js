(function() {

    var utils = require("../TestUtils");


    var str = utils.source("x,y", utils.HIGH_LEVEL, "test-source-split");
    var arr = str.split(",")

    utils.sink(arr[0]); //VIOLATION

})();
