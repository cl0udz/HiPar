/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var mongoosify = require('mongoosify');

attackUtils.deliverPayloads(attackUtils.payloadsEval, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    var mySchema = mongoosify({
        "type":"object",
        "properties":{
            "lastName":{"type":"String;" + payload}
        }
    });
}, function(result, filesWithSinks) {
    var benignInput = "benignInput";
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    try {
        var mySchema = mongoosify({
            "type": "object",
            "properties": {
                "lastName": {"type": benignInput}
            }
        });
    } catch (e) {}
    attackUtils.printCallStrings();
    result += " " + attackUtils.observedString("BenignInput");
});
