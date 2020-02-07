"use strict";

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require('./charts/server');

var utils = require('../TestcaseUtils');

var WebSocket = require('ws');

var input = {
  a: "op",
  c: "widgets",
  d: "data",
  v: 34,
  seq: 1,
  op: [{
    p: ["bars", 0, "value"],
    od: 20,
    oi: 19
  }]
};

var send = function send(input) {
  var ws = new WebSocket('ws://localhost:8001/channel');
  ws.on('open', function () {
    console.log('connected');
    ws.send(JSON.stringify(input));
  });
  ws.on('message', function (data) {
    console.log('Message from server', data);
  });
};

function test() {
  utils.entry(send, input, true);
}

setTimeout(test, 10000);
setTimeout(process.exit, 20000);