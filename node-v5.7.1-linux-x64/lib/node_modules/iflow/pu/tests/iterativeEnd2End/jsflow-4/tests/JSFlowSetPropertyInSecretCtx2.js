(function() {

    var iflow = require("iflow");
    assert = require('assert');
    var a = require('../program/program.js').run(1);
    assert(a === true);
    iflow.sink(a);

})();
