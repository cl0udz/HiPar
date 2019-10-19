(function() {

    var iflow = require("iflow");
    assert = require('assert');
    var a = require('../program/program.js').run(0);
    assert(a === true);
    iflow.sink(a);

})();
