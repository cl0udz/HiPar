var utils = require("iflow");
var NO_LEAKED = 1;

function f() {}

utils.addSink(f);

var x = utils.source(true, utils.HIGH_LEVEL, "module-interface");

var z = hifCopy(x);
f(z);
x = utils.source(false, utils.HIGH_LEVEL, "module-interface");

z = hifCopy(x);
f(z);

function hifCopy(a) {
    var res = false;
    var tmp = false;
    if (x) {
        tmp = true;
    }
    if (!tmp) {
        res = true;
    }
    return res;
}
