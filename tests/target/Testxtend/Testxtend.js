var extend = require("xtend")
var utils = require('../TestcaseUtils')



var input = {
    a:{
        a: "a",
        b: "c"
    }, 
    b:{
        b: "b"
    }
}

// extend returns a new object. Does not mutate arguments
function test(input){
    var combination = extend(input.a,input.b)
    console.log(combination)
}

utils.entry(test,input)
