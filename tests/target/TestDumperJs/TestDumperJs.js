var _require = require('dumper.js'),
    dump = _require.dump;

var users = [{
  user: 'barney',
  age: 36,
  active: true,
  createdAt: new Date()
}, {
  user: 'fred',
  age: 40,
  active: false,
  createdAt: new Date()
}, {
  user: 'pebbles',
  age: 1,
  active: true,
  createdAt: new Date()
}];

var utils = require('../TestcaseUtils.js');

utils.entry(dump, users); // Above variable will be printed and the process will continue

console.log('end');