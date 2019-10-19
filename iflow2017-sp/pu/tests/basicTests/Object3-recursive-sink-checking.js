(function() {

    var utils = require("../TestUtils");

    var secret = {password:"abc"};
    secret = utils.source(secret, utils.HIGH_LEVEL, "test-source-secret");
    var x = {};
    x.password = secret;
    utils.sink(x); // VIOLATION


})();
