var Analytics = require('analytics-node');
var analytics = new Analytics('YOUR_WRITE_KEY');


var input = {
    userId: '019mr8mf4r',
    traits: {
      name: 'Michael Bolton',
      email: 'mbolton@initech.com',
      plan: 'Enterprise',
      friends: 42
    }
  };

function test(input){
    analytics.identify(input);
}
var utils = require('../TestcaseUtils.js');
utils.entry(test,input);