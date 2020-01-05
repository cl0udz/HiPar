"use strict";
const TAFFY = require('taffy');
var utils = require("../TestcaseUtils.js");

var friends = TAFFY([
        {"id":1,"gender":"M","first":"John","last":"Smith","city":"Seattle, WA","status":"Active"},
        {"id":2,"gender":"F","first":"Kelly","last":"Ruth","city":"Dallas, TX","status":"Active"},
        {"id":3,"gender":"M","first":"Jeff","last":"Stevenson","city":"Washington, D.C.","status":"Active"},
        {"id":4,"gender":"F","first":"Jennifer","last":"Gill","city":"Seattle, WA","status":"Active"}   
    
]);
var json = {city:"Seattle, WA"};

function test(userJson){
    var item1 = friends(userJson);
}
// console.log(test(json));
utils.entry(test, json);
