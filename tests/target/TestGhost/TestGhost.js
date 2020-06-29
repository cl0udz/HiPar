require("./current/index.js")
var utils = require('../TestcaseUtils.js');
var fs = require("fs")


var reqlist = JSON.parse(fs.readFileSync("~/Download/log_1593260810674.json"))
utils.requestFromLog(reqlist)