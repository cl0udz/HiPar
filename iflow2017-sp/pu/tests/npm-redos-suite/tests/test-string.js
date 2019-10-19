var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js");
var string = require('string');

/* Coverage improving instructions */
var str = string(utils.source(null, utils.HIGH_LEVEL, "module-interface"));
var str = string(utils.source({toString: function() {return "23"}}, utils.HIGH_LEVEL, "module-interface"));
/* End of coverage improving instructions */

//require("../utils").monkeyPatch();
measureTime(function() {
    var str = string(utils.source(genstr(50000, "9"), utils.HIGH_LEVEL, "module-interface"));
    str.underscore();
});


measureTime(function() {
    string(utils.source(genstr(50000, "&"), utils.HIGH_LEVEL, "module-interface")).unescapeHTML();
});
