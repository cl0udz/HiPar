"use strict";

var Inspector = require('data-inspector');

var data = {
  name: 'Squirtle',
  description: 'A small Pokémon.',
  type: 'water',
  another: {
    nested: {
      field: 'should be a number'
    }
  }
};
var rules = {
  name: {
    type: 'string',
    alpha: true,
    minLength: 5
  },
  description: {
    type: 'string',
    minLength: 20
  },
  type: {
    type: 'string',
    pattern: /^(fire|water|grass)$/
  },
  'another.nested.field': {
    type: 'number'
  }
};
var messages = {
  description: {
    type: 'The Pokémon description must be a text.',
    minLength: 'The Pokémon description must have at least length of 20.'
  }
};

function test(messages) {
  console.log(Inspector.verify(data, rules, messages));
}

var utils = require('../TestcaseUtils.js');

utils.entry(test, messages);