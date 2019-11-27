"use strict";
exports.__esModule = true;
var property_validator_1 = require("property-validator");
var user = {
    username: 'nettofarah',
    email_address: 'invalid@email'
};

function test(user){
    property_validator_1.validate(user, [
        property_validator_1.presence('username'),
        property_validator_1.email('email_address')
    ]);
}

var utils = require('../TestcaseUtils.js');
utils.entry(test,user);
