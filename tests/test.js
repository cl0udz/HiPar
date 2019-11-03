var tmp = require('tmp');
var path = require('path')
var projTmpDir = tmp.dirSync({"dir":path.resolve(__dirname,"target_tmp")});
console.log(path.resolve(__dirname,"target_tmp"),projTmpDir.name)