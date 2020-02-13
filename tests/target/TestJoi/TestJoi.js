"use strict";

var Joi = require('@hapi/joi');

var schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
  repeat_password: Joi.ref('password'),
  access_token: [Joi.string(), Joi.number()],
  birth_year: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net']
    }
  })
})["with"]('username', 'birth_year').xor('password', 'access_token')["with"]('password', 'repeat_password');


function test(tt){
schema.validate(tt); // -> { value: { username: 'abc', birth_year: 1994 } }

}

var json = {
  username: 'abc',
  birth_year: 1994
};


var utils = require('../TestcaseUtils');

utils.entry(test, json);
