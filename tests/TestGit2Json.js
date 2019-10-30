/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var converter = require("git2json");

attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    converter.logger.retrieve(payload, function(a,b) {
        //console.log(a);
        //console.log(b);
    });
}, function(result, filesWithSinks) {
    var benignInput = 23;
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    converter.logger.retrieve(benignInput, function(a,b) {
        attackUtils.printCallStrings();
        result += " " + attackUtils.observedString(benignInput);
        process.exit(0);
    });
});
