(function() {

    var iflow = require("iflow");
    assert = require('assert');
    var a = require('../program/program.js').run(1);
    assert(a === false);
    iflow.sink(a);

})();
