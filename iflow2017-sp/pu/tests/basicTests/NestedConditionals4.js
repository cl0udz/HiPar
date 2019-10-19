(function() {

    var utils = require("../TestUtils");

    var secret = "secret";
    secret = utils.source(secret, utils.HIGH_LEVEL, "test-source-secret");

    var public = 42;
    var gotIt = false;
    if (secret === "secret") {
        if (public > 30) {
            gotIt = true;
        }
    }

    utils.sink(gotIt); // PermUpViol

})();
