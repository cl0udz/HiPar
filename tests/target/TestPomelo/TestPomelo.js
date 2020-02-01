"use strict";

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

// require("./web-server/app.js");
var pomelo = require('./pomelo-jsclient-socket.io/lib/pomelo-client');
var config={GATE_HOST: "127.0.0.1", GATE_PORT: 3014}
var data = {code: 200,
            token: "c4e116aae2d20aafc2ab51851e2a047c",
            uid: 1}
function entry(host, port, token, callback) {
    // init socketClient
    // TODO for development
    if(host === '127.0.0.1') {
      host = config.GATE_HlOST;
    }
    pomelo.init({host: host, port: port, log: true}, function() {
        console.log(1)
      pomelo.request('connector.entryHandler.entry', {token: token}, function(data) {
        var player = data.player;
        console.log(data)
        if (callback) {
          callback(data.code);
        }

        if (data.code == 1001) {
          alert('Login fail!');
          return;
        } else if (data.code == 1003) {
          alert('Username not exists!');
          return;
        }

        if (data.code != 200) {
          alert('Login Fail!');
          return;
        }

        // init handler
        loginMsgHandler.init();
        gameMsgHandler.init();

        if (!player || player.id <= 0) {
          switchManager.selectView("heroSelectPanel");
        } else {
          afterLogin(data);
        }
      });
    });
  }

function queryEntry(uid, callback) {
      pomelo.init({host: config.GATE_HOST, port: config.GATE_PORT, log: true}, function() {
        pomelo.request('gate.gateHandler.queryEntry', { uid: uid}, function(data) {
          pomelo.disconnect();
          console.log(data);
          if(data.code === 2001) {
            alert('Servers error!');
            return;
          }

          callback(data.host, data.port);
        });
      });
    }
function authEntry(uid, token, callback) {
    queryEntry(uid, function(host, port) {
        entry(host, port, token, callback);
    });
    }

authEntry(data.uid, data.token, function() {
    loading = false;
  });
// setTimeout(process.exit, 20000);