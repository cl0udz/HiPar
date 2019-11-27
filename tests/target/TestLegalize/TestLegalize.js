"use strict";

var Legalize = require('legalize');
var path = require('path');
var utils = require(path.resolve(__dirname, "../TestcaseUtils.js"));

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
console.log(Legalize.validate(user_input, personSchema));
console.log(1111);
utils.whatWeDoThisTime(Legalize.validate, user_input, personSchema, __dirname);
