"use strict"; //require("core-js/modules/web.timers");
//require("core-js/modules/web.timers");
//require("core-js/modules/web.timers");
//require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require('./app.js');

var utils = require('../TestcaseUtils');

var pomelo_client = require('pomelo-node-client-websocket');

var pomelo = pomelo_client.create();
var route = 'gate.gateHandler.queryEntry';
var data = {
  uid: 1
};

function send(data) {
  pomelo.init({
    host: "127.0.0.1",
    port: 3014,
    log: true
  }, function () {
    pomelo.request(route, data, function (data) {
      pomelo.disconnect();
    });
  });
}

function test() {
  utils.entry(send, data, true);
}

setTimeout(test, 30000);
setTimeout(process.exit, 40000);