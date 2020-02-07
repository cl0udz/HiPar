"use strict";

var jsonfile = require('jsonfile');

var file = './data.json';

function testwrite(query) {
  jsonfile.writeFile(file, query);
}

function testwritesync(query) {
  jsonfile.writeFileSync(file, query);
}

var utils = require('../TestcaseUtils.js');

function main() {
  utils.entry(testwrite, {
    'a': 3
  });
  utils.entry(testwritesync, {
    'a': 2
  });
}

main();