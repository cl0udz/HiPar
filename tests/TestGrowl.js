var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var growl = require("growl");

attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    growl(payload);
}, function(result, filesWithSinks) {
    var benignInput = "My benign message";
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    growl(benignInput);
    attackUtils.printCallStrings();
    result += " " + attackUtils.observedString(benignInput);
});
