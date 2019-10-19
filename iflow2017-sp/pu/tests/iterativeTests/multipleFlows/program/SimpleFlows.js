(function() {
    var utils = require("iflow");

    function flow(a) {
        var res = flowOne(a)
        var third = 1;
        if (res > 1) {
            third = 12
        }
        return third
    }

    function flowOne(a) {
        var result = 10;
        var second = 2;
        if (a == 3) {
            result = 12
            second = 3
        } else {
            result = 2;
        }
        second;
        return result
    }

    var module;
    if (typeof exports !== "undefined") {
        // export to code running in node application
        module = exports;
    } else {
        // export to code running in browser
        window.$CommonUtil = {};
        module = window.$CommonUtil;
    }

    module.flow = flow;
})();
