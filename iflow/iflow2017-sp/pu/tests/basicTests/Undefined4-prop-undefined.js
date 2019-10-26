(function() {

    var utils = require("../TestUtils");

    var secret = utils.source({a:{x:null}, b:{x:undefined}}, utils.HIGH_LEVEL, "test-source-undefined");
    var x=5;
    utils.sink(secret.a.x); // VIOLATION


})();
