(function() {

    var utils = require("../TestUtils");

    function prepareObjectStackTrace(obj, stack) {
        return stack
    }

    var limit = Error.stackTraceLimit
    var obj = {}
    var prep = Error.prepareStackTrace
    console.log(prepareObjectStackTrace)
    Error.prepareStackTrace = prepareObjectStackTrace
    Error.stackTraceLimit = Math.max(10, limit)

    // capture the stack
    Error.captureStackTrace(obj);

    try {
        // slice this function off the top
        var stack = obj.stack.slice(1)
    } catch (e) {
        console.log(e.stack.toString().replace(/,/g, "\n"));
        utils.sink(utils.source(1, utils.HIGH_LEVEL));
    }




})();
