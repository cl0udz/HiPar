(function() {

    var utils = require("iflow");
    var password;

    exports.run = function() {
        utils.addSource(getPassword, utils.HIGH_LEVEL, "test");
        utils.addSink(httpGet);
        var easy = 1, hard = 0;
        var password = getPassword();
        var hidden = "1" + password + "1";
        if (hidden !== "1pass\u0077ord1") {
            easy = 0;
            hard = 1;
        }
        httpGet(hard);
    }

    function getPassword() {
        return password;
    }

    exports.setPassword = function(pas) {
        password = pas
    }

    function httpGet() {

    }

})();
