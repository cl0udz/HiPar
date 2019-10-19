var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")

var fresh = require('forwarded');

/* Coverage improving instructions */
// can't do anything because of (req.headers['x-forwarded-for'] || '')
/* End of coverage improving instructions */

measureTime(function() {
    var str = utils.source("x" + genstr(60000, ' ') + "x", utils.HIGH_LEVEL, "module-interface"); //progblematic regex: / *, */, in forwarded/index.js
    console.log("LENGTH: " + str.length);
    fresh({
        "headers": {
            "x-forwarded-for": str,
        },
        "connection": {
            "remoteAddress": "0.0.0.0"
        }
    })
});
