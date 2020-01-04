"use strict";

var utils = require("../TestcaseUtils.js");
const { Validator, Rule  } = require('@cesium133/forgjs');

const emailRule = new Rule({
                           type: 'email',
                           user: user => user === 'dedede',
                           domain: domain => ['outlook', 'gmail', 'yahoo'].indexOf(domain) !== -1,

}, null);

const passwordRule = new Rule({
                              type: 'password',
                              minLength: 8,
                              uppercase: 1,
                              numbers: 1,
                              matchesOneOf: ['@', '_', '-', '.', '!'],

}, null);

const vComplex = new Validator({
                               age: new Rule({ type: 'int', min: 18, max: 99  }),
                               dateOfBirth: new Rule({ type: 'date'  }),
                               array: new Rule({ type: 'array', of: new Rule({ type: 'string'  })  }),
                               email: emailRule,
                               password: passwordRule

});

vComplex.test({
              age: 26,
              dateOfBirth: new Date(1995, 10, 3),
              array: ['1'],
              email: 'dedede@yahoo.fr;',
              password: 'ad1_A@@Axs',

}); 

var json = {
    age: 26,
    dateOfBirth: new Date(1995, 10, 3),
    array: ['1'],
    email: 'dedede@yahoo.fr;',
    password: 'ad1_A@@Axs',

}

function test(userJson){
    vComplex.test(userJson);
}
// console.log(test(json));
utils.entry(test, json);
