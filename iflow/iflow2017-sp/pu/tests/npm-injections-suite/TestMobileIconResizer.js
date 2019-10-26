/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();
var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var resize = require('mobile-icon-resizer');
var fs = require("fs");
var i = 0;
attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    var configFile = "./resources/testConf" + i + ".js";
    fs.writeFileSync(configFile, 'var config = { android: { "images" : [{ "size" : "' + payload + '", "folder" : "drawable-mdpi" }]}}; exports = module.exports = config;');
    resize({
        originalIconFilename: "./resources/test.png",
        platformsToBuild: ["android"],
        config:configFile});
    fs.unlink(configFile);
    i++;
}, function(result, filesWithSinks) {
    var benignInput = "benignSize"
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    var configFile = "./resources/testConf" + i + ".js";
    fs.writeFileSync(configFile, 'var config = { android: { "images" : [{ "size" : "' + benignInput + '", "folder" : "drawable-mdpi" }]}}; exports = module.exports = config;');
    resize({
        originalIconFilename: "./resources/test.png",
        platformsToBuild: ["android"],
        config:configFile});
    fs.unlink(configFile);
    attackUtils.printCallStrings();
    result += " " + attackUtils.observedString(benignInput);
    attackUtils.deleteFolderRecursive("./drawable-mdpi");
});
