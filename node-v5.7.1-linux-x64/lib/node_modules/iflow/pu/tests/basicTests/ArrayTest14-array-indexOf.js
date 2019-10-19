(function() {

    var utils = require("../TestUtils");


    var secret = utils.source(13, utils.HIGH_LEVEL, "test-source-array-element");;
    var arr = [6, 7, secret];
    var pos = arr.indexOf(3);
    utils.sink(pos); // VIOLATION

})();
