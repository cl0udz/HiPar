(function() {

    var utils = require("../TestUtils");

    function Shape() {
        this.x = 0;
        this.y = 0;
    }

    var x = utils.source(new Shape(23, 25));
    var s = Object.create(x);

    utils.sink(s); // VIOLATION


})();
