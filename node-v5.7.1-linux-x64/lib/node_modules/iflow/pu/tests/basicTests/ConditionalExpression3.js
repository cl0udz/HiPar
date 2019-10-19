(function() {

    var utils = require("../TestUtils");

    var secret = utils.source("secret", utils.HIGH_LEVEL, "test-source-secret");;
    x = 12
    var gotIt = 23 ? secret+"x" : 2;

    utils.sink(gotIt); // VIOLATION

})();
