var fs = require("fs");
var x = JSON.parse(fs.readFileSync("/home/cstaicu/Desktop/redos-results/8-11-2017/ajv-intf/jalangi_sourcemap.json"))
console.log(x[0][4913])
// console.log(x[0][1634])
// console.log(Object.keys(x))

// var x = fs.readFileSync("file:///home/cstaicu/").toString();
// console.log(x);
