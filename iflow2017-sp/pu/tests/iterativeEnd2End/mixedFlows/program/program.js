(function() {

    var utils = require("iflow");

    var decisions = [false, true, false];

    exports.run = function() {
        utils.addSource(mySource, utils.HIGH_LEVEL, "func");
        utils.addSink(mySink);
        var secret = mySource();
        var x = false;
        var res = "";
        decisions.forEach(function(decision) {
            if (decision && secret > 5) {
                x = true;
            }
            var y = x + "abc";
            res += y;
        });
        mySink(res);
    };

    function mySource() {
        return 12;
    }

    function mySink(x) {
    }

})();
