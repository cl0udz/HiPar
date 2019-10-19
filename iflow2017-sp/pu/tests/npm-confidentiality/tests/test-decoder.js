var dec = require("string_decoder");
var x = new dec.StringDecoder("utf8");
x.charReceived = 20;
console.log(x.end());
