var fs = require("fs");
var sloc = require("sloc")
var stats = sloc(fs.readFileSync("./TestUtils.js").toString(), "js");
console.log(stats.source);
