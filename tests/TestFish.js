/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var fish = require("fish");

attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    fish(payload);
}, function(result, filesWithSinks) {
    var benignInput = "benignFolderName";
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    fish(benignInput);
    attackUtils.printCallStrings();
    result += " " + attackUtils.observedString(benignInput);
    console.log(result)
});
