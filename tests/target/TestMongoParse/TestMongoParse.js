var parser = require('mongo-parse');
var path = require('path')
var utils = require(path.resolve(__dirname,"../TestcaseUtils.js"))
/* Coverage improving instructions */

var query = {
    "username": "admin",
    "password": "adminPass",
    "id": "101"
};



utils.entry(parser.parse,query);
