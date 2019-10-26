var utils = require("iflow");
var Flow = require("./../program/SimpleFlows.js")

utils.sink(Flow.flow(utils.source(3, utils.HIGH_LEVEL, "x"))) //VIOLATION
