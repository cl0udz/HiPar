var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js");
var slug = require('slug');

/* Coverage improving instructions */
console.log(slug(utils.source('ana', utils.HIGH_LEVEL, "module-interface"), {multicharmap:{"ana": "__"}}))
/* End of coverage improving instructions */

//require("../utils").monkeyPatch()
measureTime(function() {
    console.log(slug(utils.source('♥' + genstr(5, ' ') + '♥', utils.HIGH_LEVEL, "module-interface")));
});
