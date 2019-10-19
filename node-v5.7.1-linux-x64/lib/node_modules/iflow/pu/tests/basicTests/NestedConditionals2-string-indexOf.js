(function() {

    var utils = require("../TestUtils");

    var secret = "secret";
    secret = utils.source(secret, utils.HIGH_LEVEL, "test-source-secret");

    var public = 42;
    var gotIt = false;
    if (public > 30) {
        if (secret.indexOf("secret") !== -1) {
            gotIt = true;
        }
    }

    utils.sink(gotIt); // PermUpViol

})();
