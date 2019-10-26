var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);
var reporter = require("chook-growl-reporter");
var obj = reporter.individualFailureOrError();
var events = require('events');
var eventEmitter = new events.EventEmitter();
obj.reporter(eventEmitter);

attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    eventEmitter.emit('fail', {suiteName: "My suite", name: "awesome", error:{name: "error", message: payload}});
}, function(result, filesWithSinks) {
    var benignInput = "My benign message";
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    eventEmitter.emit('fail', {suiteName: "My suite", name: "awesome", error:{name: "error", message: benignInput}});
    attackUtils.printCallStrings();
    result += " " + attackUtils.observedString(benignInput);
});
