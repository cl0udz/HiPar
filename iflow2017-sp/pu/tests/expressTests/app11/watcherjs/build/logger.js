/*
watcher.js 2.5.3- app watcher
Built on 2015-10-20
*/
"use strict";var winston=require("winston"),logger;winston.setLevels(winston.config.npm.levels),winston.addColors(winston.config.npm.colors),logger=new winston.Logger({transports:[new winston.transports.Console({level:"debug",colorize:!0})]}),module.exports=logger;