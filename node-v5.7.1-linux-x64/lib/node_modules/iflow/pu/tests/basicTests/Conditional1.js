(function() {

    var utils = require("../TestUtils");

    var secret = utils.source("secret", utils.HIGH_LEVEL, "test-source-secret");;

    var gotIt = false;
    if (secret === "secret") {
        gotIt = true;
    }

    utils.sink(gotIt); // PermUpViol

})();
