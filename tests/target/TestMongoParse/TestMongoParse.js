var parser = require('mongo-parse');
var path = require('path')
var utils = require(path.resolve(__dirname,"../Utils.js"))
/* Coverage improving instructions */

var query = {
    "username": "admin",
    "password": "adminPass",
    "id": "101"
};



utils.whatWeDoThisTime(parser.parse,query,__dirname);
