var utils = require("iflow");
var policy = require("../Policy.js");
// var x = [];
// for (var i = 0; i < 1000000; i++)
//     x[i + ""] = "ana are mere" + i;
// for (var i = 0; i < 1000000; i++) {
//     x[i + ""] = Buffer.from('hello world', 'ascii');
//     x[i + "a"] = 'anaaremere';
// }

var ip = require('ip');

/* Coverage improving instructions */
ip.mask('192.160.0.0', "2001:558:6033:c4:1dab:fa57:5447:4229")
ip.mask('192.160.0.0', "0.0.0.0")
ip.toBuffer("192.168.0.1", utils.source([], utils.HIGH_LEVEL, "module-interface"), 0)
ip.toString(new Buffer(12))
try {
    ip.toBuffer("19216801", utils.source(null, utils.HIGH_LEVEL, "module-interface"), 0)
}catch(e){console.log(e)}
/* End of coverage improving instructions */

// var res = "";
// for (var k = 0; k < 10000; k++) {
//     var str = ip.mask('2001:558:6033:c4:1dab:fa57:5447:4229', "0.0.0.0");
//     var arr = str.split(":");
//     for (var i = 2; i < arr.length ;i++) {
//         if (arr[i].length > 1)
//         for (var j = 0; j < arr[i].length; j+=2) {
//             var char = transf(arr[i].charAt(j))*16+ transf(arr[i].charAt(j+1));
//             if (char != 0)
//                 res += String.fromCharCode(char)
//         }
//     }
//     if (k % 30 === 0)
//         res += "\n"
// }
// console.log(res);

function f(a) { console.log(a)}

utils.addSink(f);

f(ip.mask('2001:558:6033:c4:1dab:fa57:5447:4229', "0.0.0.0"));



function transf(c) {
    if (c >= '0' && c <='9')
        return c - '0'
    else
        return c - 'a'
}
setTimeout( function() {
    process.exit(0)
}, 2000);
