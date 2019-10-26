var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")
var us = require('underscore.string');

/* Coverage improving instructions */
var helper = require("../node_modules/underscore.string/helper/makeString.js")
helper(utils.source(null, utils.HIGH_LEVEL, "module-interface"));
/* End of coverage improving instructions */

measureTime(function() {
    var agent = us.unescapeHTML(utils.source(genstr(50000, "&"), utils.HIGH_LEVEL, "module-interface"));
});