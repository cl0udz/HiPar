var _require = require('dumper.js'),
    dump = _require.dump;

var users = [{
  user: 'barney',
  age: 36,
  active: true,
  createdAt: new Date(),
  "constructor":{"name":"Symbol"}
}];

var utils = require('../TestcaseUtils.js');

dump(users); // Above variable will be printed and the process will continue

console.log('end');