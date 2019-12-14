/*
copy output to excel
*/
var result = {
  R0ot: {
    length: {
      base: 'object',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/dumper.js'
    }
  },
  name: {
    charCodeAt: {
      base: 'data',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/type/int.js'
    },
    length: {
      base: 'data',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/type/int.js'
    },
    replace: {
      base: 'string',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/dumper.js'
    },
    slice: {
      base: 'data',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/type/int.js'
    }
  },
  level: {
    length: {
      base: 'object',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/dumper.js'
    },
    toString: {
      base: 'obj',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/type/int.js'
    }
  },
  inventory: {
    length: {
      base: 'object',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/dumper.js'
    }
  },
  features: {
    length: {
      base: 'object',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/dumper.js'
    }
  },
  traits: {
    length: {
      base: 'object',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/dumper.js'
    }
  },
  damage: {
    length: {
      base: 'object',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/dumper.js'
    },
    toString: {
      base: 'obj',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/type/int.js'
    }
  },
  defence: {
    length: {
      base: 'object',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/dumper.js'
    },
    toString: {
      base: 'obj',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/type/int.js'
    }
  },
  comfort: {
    length: {
      base: 'object',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/dumper.js'
    },
    toString: {
      base: 'obj',
      file: '/Users/ex1t/Desktop/nodeAnalysis/HiPar/tests/target/TestJs-yaml/node_modules/js-yaml/lib/js-yaml/type/int.js'
    }
  }
};

var properties = Object.getOwnPropertyNames(result);
for (var property of properties){
    for(var hipar of Object.getOwnPropertyNames(result[property])){
        var hiparObj = result[property];
        var name = hiparObj[hipar]['base']+'.'+hipar
        var location = 'https://github.com/cl0udz/HiPar/blob/master/tests' + hiparObj[hipar]['file'].split('/HiPar/tests')[1]
        console.log(name,'\t','\t','\t','\t',location);
    }
}

