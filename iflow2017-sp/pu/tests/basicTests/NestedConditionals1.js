(function() {

    var utils = require("../TestUtils");

    var secret = "secret";
    secret = utils.source(secret, utils.HIGH_LEVEL, "test-source-secret");

    var public = 42;
    var gotIt = false;
    if (public > 30) {
        if (secret === "secret") {
            gotIt = true;
        }
    }

    utils.sink(gotIt); // PermUpViol

})();
