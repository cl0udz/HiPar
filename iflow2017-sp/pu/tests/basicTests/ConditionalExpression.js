(function() {

    var utils = require("../TestUtils");

    var secret = utils.source("secret", utils.HIGH_LEVEL, "test-source-secret");;
    x = 12
    var gotIt = (secret) ? 1 : 2;

    utils.sink(gotIt); // PermUpViol

})();
