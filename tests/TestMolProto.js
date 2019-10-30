/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var molProto = require('mol-proto');

attackUtils.deliverPayloads(attackUtils.payloadsEval, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    molProto.makeFunction("test(){}; " + payload + " function x", "console.log(23);");
}, function(result, filesWithSinks) {
    var benignInput = "benignFunctionName";
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    molProto.makeFunction(benignInput, "console.log(23)");
    attackUtils.printCallStrings();
    result += " " + attackUtils.observedString(benignInput);
});
