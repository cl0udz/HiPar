(function() {

    var util = require("../../../TestUtils");
    var message = util.source("test");
    var growl = require('growl');
    var ex = require('child_process').exec;
    util.addSink(ex);
    util.addSink(eval);
    growl(message);

})();
