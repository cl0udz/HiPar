"use strict";

var ignition = require('ghost-ignition');

var utils = require("../TestcaseUtils.js");

var json = {
  domain: 'example.com',
  env: 'production',
  mode: 'long',
  level: 'info',
  transports: ['file'],
  rotation: {
    enabled: true,
    period: '1d',
    count: 10
  },
  path: '/var/log'
};

function test(userJson) {
  var logging = ignition.logging(userJson);
} // console.log(test(json));


utils.entry(test, json);