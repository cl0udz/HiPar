var path = require('path');
var fs = require('fs');
files = [
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/TestStrapi.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/web.timers.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_global.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_export.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_core.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_hide.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_object-dp.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_an-object.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_is-object.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_ie8-dom-define.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_descriptors.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_fails.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_to-primitive.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_property-desc.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_redefine.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_has.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_uid.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_function-to-string.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_shared.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_library.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_ctx.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_a-function.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/core-js/modules/_user-agent.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/strapi/bin/strapi.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/lodash/lodash.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/resolve-cwd/index.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/resolve-from/index.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/chalk/index.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/escape-string-regexp/index.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/ansi-styles/index.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/color-convert/index.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/color-convert/conversions.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/color-name/index.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/color-convert/route.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/supports-color/index.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/has-flag/index.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/chalk/templates.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/strapi/node_modules/commander/index.js',
  '/Users/ex1t/Desktop/node-analysis/HiPar/tests/target/TestStrapi/node_modules/strapi/lib/commands/new.js'
];

for (var i=0;i<files.length;i++){
    var file = files[i];
    var new_file = file.replace(/target/,'target/tmp')
    var dirname = path.dirname(new_file);
    if(!fs.existsSync(dirname)) fs.mkdirSync(dirname,{recursive:true});
    fs.copyFileSync(file,new_file);
}