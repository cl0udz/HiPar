var stringify = require('fast-stringify')
var utils = require('../TestcaseUtils');
var object = {
  foo: 'bar',
  deeply: {
    recursive: {
      object: {},
    },
  },
};



function test(object){
    console.log(stringify(object));
}

utils.entry(test,object)