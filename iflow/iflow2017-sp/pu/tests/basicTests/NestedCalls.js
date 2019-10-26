(function() {

    var utils = require("../TestUtils");

    var secret = "secret";
    secret = utils.source(secret, utils.HIGH_LEVEL, "test-source-secret");
    var z = secret.substr(1).toString();
    utils.sink(z); // VIOLATION

})();
