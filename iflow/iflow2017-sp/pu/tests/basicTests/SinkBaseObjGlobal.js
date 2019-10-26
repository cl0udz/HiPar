(function() {

    var bObjSink = function(x) { return x;}
    var utils = require("../TestUtils");
    utils.addSink(bObjSink, "base-obj-sink", true);

    bObjSink(); // NOTHING

})();
