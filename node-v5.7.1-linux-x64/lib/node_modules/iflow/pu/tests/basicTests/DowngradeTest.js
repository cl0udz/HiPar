(function() {

    var utils = require("../TestUtils");

    var x = utils.source("test", utils.HIGH_LEVEL);
    x = utils.downgrade(x);
    utils.sink(x); // NOTHING here

})();
