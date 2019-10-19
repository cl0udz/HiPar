var utils = require("iflow");
var policy = require("../Policy.js");


var concat = require('concat-stream');

var write = concat(function (str) {
    //console.log(str);
    f(str);
    setTimeout( function() {
        process.exit(0)
    }, 2000);
});

write.write('a');
write.write(1);
write.end();

function f() {}

utils.addSink(f);
