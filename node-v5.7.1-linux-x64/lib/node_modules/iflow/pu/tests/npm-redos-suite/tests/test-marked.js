var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")
var marked = require('marked');


measureTime(function() {
    //var agent = marked(genstr(2001, "`") + genstr(5000, " ") +genstr(2002, "`")); // more than 4 days
    var str = genstr(8, "`") + utils.source(genstr(1500, " "), utils.HIGH_LEVEL, "module-interface") + genstr(11, "`")
    var agent = marked(str); // more than 4 days
    //console.log(str);
});