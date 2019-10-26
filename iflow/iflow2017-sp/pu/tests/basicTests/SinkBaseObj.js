(function() {

    var bObjSink = function(x) { return x;}
    var utils = require("../TestUtils");
    utils.addSink(bObjSink, "base-obj-sink", true);

    var obj = { a: "test"};
    var secret = utils.source(obj, utils.HIGH_LEVEL, "test-source-null");
    secret.f = bObjSink;
    secret.f(); // VIOLATION

})();
