"use strict";

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");
"use strict";

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require('./node_modules/strapi/bin/strapi');

var utils = require("../TestcaseUtils.js");

var body = {
  "title": "first blog",
  "content": "the fisrt time.",
  "user": {
    "id": 1,
    "username": "user1",
    "email": "user1@email.com",
    "provider": "local",
    "confirmed": false,
    "blocked": false,
    "role": 1,
    "created_at": "2020-01-09T21:11:31.514Z",
    "updated_at": "2020-01-09T21:11:31.518Z"
  },
  "created_at": "2020-01-09T21:12:25.422Z",
  "updated_at": "2020-01-09T21:12:54.801Z"
};

function send(body) {
  utils.sendViaWebRequest('post', JSON.stringify(body), '/articles', 1337, '127.0.0.1');
}

function test() {
  utils.entry(send, body);
}

setTimeout(test, 5000);
setTimeout(process.exit, 15000);