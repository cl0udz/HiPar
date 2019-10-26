(function() {

    var utils = require("../TestUtils");
    var x = {password:"abc"}
    var secret = {a:[x],x:x};
    secret = utils.source(secret, utils.HIGH_LEVEL, "test-source-secret");
    if (secret.a[0] !== secret.x)
        utils.sink(secret.x.password);

})();
