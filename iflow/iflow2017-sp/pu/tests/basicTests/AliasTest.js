(function() {

    var utils = require("../TestUtils");

    var x = utils.source(2);
    var a = { p : "my-awesome-property"}

    if (x === 2) {
        var c = a;
    }

    utils.sink(a); // nothing here

})();
