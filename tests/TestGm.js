/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var fs = require('fs')
    , gm = require('gm');

attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    gm.compare('./resources/german.jpg', './resources/german.jpg' + payload, function () {
    });
}, function(result, filesWithSinks) {
    var benignInput = './resources/benign.jpg';
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    gm.compare(benignInput, benignInput, function () {
    });
    attackUtils.printCallStrings();
    result += " " + attackUtils.observedString(benignInput);
});
