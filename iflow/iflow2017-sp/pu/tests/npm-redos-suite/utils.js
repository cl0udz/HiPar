function genstr(len, chr) {
    var result = "";
    for (i=0; i<=len; i++) {
        result = result + chr;
    }
    return result;
}

function measureTime(f, print) {
    var start = process.hrtime();
    f();
    var end = process.hrtime(start);
    if (print === false) {

    } else {
        //console.log(end);
        console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
    }
    return end;
}

function monkeyPatch() {
    var oldReplace = String.prototype.replace;
    String.prototype.replace = function() {
        var start = process.hrtime();
        var res = oldReplace.apply(this, arguments);
        var end = process.hrtime(start);
        if (this instanceof String) {
            console.info("Execution time (hr): " + end[0] + "s " + (end[1] / 1000000) + "ms");
            console.info(_getCallerFile() + " replace " + arguments[0] + " " + limit(this));
        }
        return res;
    };

    var oldMatch = String.prototype.match;
    String.prototype.match = function() {
        var start = process.hrtime();
        var res = oldMatch.apply(this, arguments);
        var end = process.hrtime(start);
        if (this instanceof String) {
            console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
            console.log(_getCallerFile() + " match " + arguments[0] + " " + limit(this));
        }
        return res;
    };

    var oldSplit = String.prototype.split;
    String.prototype.split = function() {
        var start = process.hrtime();
        var res = oldSplit.apply(this, arguments);
        var end = process.hrtime(start);
        if (this instanceof String) {
            console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
            console.log(_getCallerFile() + " split " + arguments[0] + " " + limit(this));
        }
        return res;
    };

    var oldSearch = String.prototype.search;
    String.prototype.search = function() {
        var start = process.hrtime();
        var res = oldSearch.apply(this, arguments);
        var end = process.hrtime(start);
        if (this instanceof String) {
            console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
            console.log(_getCallerFile() + " search " + arguments[0] + " " + limit(this));
        }
        return res;
    };

    var oldExec = RegExp.prototype.exec;
    RegExp.prototype.exec = function() {
        var start = process.hrtime();
        var res = oldExec.apply(this, arguments);
        var end = process.hrtime(start);
        if (console.log) {
            console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
            console.log(_getCallerFile() + " exec " + limit(arguments[0]) + " " + this);
        }
        return res
    };

    var oldTest = RegExp.prototype.test;
    RegExp.prototype.test = function() {
        var start = process.hrtime();
        var res = oldTest.apply(this, arguments);
        var end = process.hrtime(start);
        if (console.log) {
            console.info("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
            console.log(_getCallerFile() + " test " + limit(arguments[0]) + " " + this);
        }
        return res
    };

    var http = require("http")

    function limit(a) {
        if (a.length && a.length < 50)
            return a;
        else if (a.indexOf && a.indexOf("cannary") != -1)
            return a;
        return "TOO_LONG";
    }


    function _getCallerFile() {
        try {
            var err = new Error();
            var callerfile;
            var currentfile;

            Error.prepareStackTrace = function (err, stack) { return stack; };

            currentfile = err.stack.shift().getFileName();

            while (err.stack.length) {
                callerfile = err.stack.shift().getFileName();
                if(currentfile !== callerfile) return callerfile;
            }
        } catch (err) {}
        return undefined;
    }
    var http = require("http")

    function limit(a) {
        if (a && a.length && a.length < 50)
            return a;
        else if (a && a.indexOf && a.indexOf("cannary") != -1)
            return a;
        return "TOO_LONG";
    }


    function _getCallerFile() {
        try {
            var err = new Error();
            var callerfile;
            var currentfile;

            Error.prepareStackTrace = function (err, stack) { return stack; };

            currentfile = err.stack.shift().getFileName();

            while (err.stack.length) {
                callerfile = err.stack.shift().getFileName();
                if(currentfile !== callerfile) return callerfile;
            }
        } catch (err) {}
        return undefined;
    }
}

//only use printable ASCII characters 32 -> 126. In total = 95 characters
function randomChars(noChars) {
    var res = "";
    for (var i = 0; i < noChars; i++) {
        res += String.fromCharCode(Math.floor(Math.random() * 95) + 32);
    }
    return res;
}

function checkError(a,b) {
    return a || !b || !b.body //|| b.body.indexOf("nginx") != -1
        || b.body.indexOf("400 Bad Request") != -1
        || b.body.indexOf("Bad Request") != -1
        || b.body.indexOf("Bad request") != -1
        //|| b.body.indexOf("Invalid") != -1
        || b.statusCode != 200;
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

// t table (from Student's t distribution)
var degreesOfFreedomToT = {
    "1": 12.71,
    "2": 4.303,
    "3": 3.182,
    "4": 2.776,
    "5": 2.571,
    "6": 2.447,
    "7": 2.365,
    "8": 2.306,
    "9": 2.262,
    "10": 2.228,
    "11": 2.201,
    "12": 2.179,
    "13": 2.160,
    "14": 2.145,
    "15": 2.131,
    "16": 2.120,
    "17": 2.110,
    "18": 2.101,
    "19": 2.093,
    "20": 2.2086,
    "21": 2.080,
    "22": 2.074,
    "23": 2.069,
    "24": 2.064,
    "25": 2.060,
    "26": 2.056,
    "27": 2.052,
    "28": 2.048,
    "29": 2.045,
    "30": 2.042
};


var listSum = function(lst) {
    return lst.reduce(function(a, b){ return a+b; });
};

function confidenceMichael(numbers) {
    // use z* value for large samples and t value for small samples
    var z_or_t = numbers.length > 30 ? 1.959964 : degreesOfFreedomToT[numbers.length - 1];
    var sum = listSum(numbers);
    var mean = sum/numbers.length;
    var sqerrs = numbers.map(function(n){ return (n - mean)*(n - mean); });
    var std = Math.sqrt(listSum(sqerrs)/numbers.length);
    var interval = z_or_t * std / Math.sqrt(numbers.length);
    return {
        mean: mean,
        std: std,
        interval: interval
    };
};


module.exports.genstr = genstr;
module.exports.measureTime = measureTime;
module.exports.monkeyPatch = monkeyPatch;
module.exports.randomChars = randomChars;
module.exports.checkError = checkError;
module.exports.numberWithCommas = numberWithCommas;
module.exports.confidenceMichael = confidenceMichael;
