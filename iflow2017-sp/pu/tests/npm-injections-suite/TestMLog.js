/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

attackUtils.deliverPayloads(attackUtils.payloadsEval, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    colors = {setTheme: function(){}}
    var logger = require('m-log');
    logger.setColorTheme({c1: ["\"]};" + payload + "//"]});
}, function(result, filesWithSinks) {
    var benignInput = "benignColor";
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    colors = {setTheme: function(){}}
    var logger = require('m-log');
    logger.setColorTheme({c1: [benignInput]});
    attackUtils.printCallStrings();
    result += " " + attackUtils.observedString(benignInput);
});
