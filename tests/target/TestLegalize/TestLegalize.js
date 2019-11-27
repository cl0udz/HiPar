"use strict";

var Legalize = require('legalize');

var personSchema = {
    firstName:
    Legalize.string().minLength(1).maxLength(30).required(),
    lastName:
    Legalize.string().minLength(1).maxLength(30).required(),
    age:
    Legalize.number().integer().min(18),
    sex:
    Legalize.string().sanitizeBefore(function (value) {
        value.toLowerCase();

    }).valid("male", "female").optional(),

};

var user_input = {
    firstName: "Alexander",
    lastName: "Carnicero",
    age: 27,
    sex: "Male"
}


var utils = require("../TestcaseUtils.js");

function test(userJson){
    Legalize.validate(userJson, personSchema);
}
utils.entry(test, user_input);

