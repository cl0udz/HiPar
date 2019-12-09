/*
copy output to excel
*/
var result = {
  R0ot: {
    constructor: {
      base: 'obj',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestLokiJS/node_modules/lokijs/src/lokijs.js'
    }
  },
  name: {},
  age: {
    constructor: {
      base: 'obj',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestLokiJS/node_modules/lokijs/src/lokijs.js'
    },
    toString: {
      base: 'prop1',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestLokiJS/node_modules/lokijs/src/lokijs.js'
    }
  },
  '$lte': {
    '0': {
      base: 'value',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestLokiJS/node_modules/lokijs/src/lokijs.js'
    },
    '1': {
      base: 'value',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestLokiJS/node_modules/lokijs/src/lokijs.js'
    },
    constructor: {
      base: 'obj',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestLokiJS/node_modules/lokijs/src/lokijs.js'
    },
    toString: {
      base: 'prop2',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestLokiJS/node_modules/lokijs/src/lokijs.js'
    }
  }
}

var properties = Object.getOwnPropertyNames(result);
for (var property of properties){
    for(var hipar of Object.getOwnPropertyNames(result[property])){
        var hiparObj = result[property];
        var name = hiparObj[hipar]['base']+'.'+hipar
        var location = 'https://github.com/cl0udz/HiPar/blob/master/tests' + hiparObj[hipar]['file'].split('/HiPar/tests')[1]
        console.log(name,'\t','\t','\t','\t',location);
    }
}

