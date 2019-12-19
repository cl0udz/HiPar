var kindOf = require('kind-of');
var path = require('path');
var utils = require("../TestcaseUtils.js");


var json = {
  user: 'barney',
  age: 36,
  active: true,
};


function test(userJson){
       kindOf(userJson);
    
}
utils.entry(test, json);

