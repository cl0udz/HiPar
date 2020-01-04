var Promise = require("bluebird");

var fs = Promise.promisifyAll(require("fs"));



function test(input){
    fs.readFileAsync("myfile.txt", "utf8").then(function(contents) {
        console.log(contents);
    }).catch(function(e) {
        console.error(e.stack);
    });
}

var utils = require("../TestcaseUtils.js");
utils.entry(test, data, __dirname);

