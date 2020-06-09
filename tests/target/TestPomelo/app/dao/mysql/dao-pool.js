"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

var _poolModule = require('generic-pool');

var mysql = require('mysql');
/* 
 * Create mysql connection pool. 
 */


var createMysqlPool = function createMysqlPool(app) {
  var mysqlConfig = app.get('mysql');
  console.log(mysqlConfig);
  var factory = {
    create: function create() {
      return new Promise(function (resolve) {
        var client = mysql.createConnection({
          host: mysqlConfig.host,
          user: mysqlConfig.user,
          password: mysqlConfig.password,
          database: mysqlConfig.database,
          port: mysqlConfig.port
        });
        client.on('error', function () {
          client.connect();
        });
        client.connect(function (error) {
          if (error) {
            console.log('mysql connect error', error);
          }

          resolve(client);
        });
      });
    },
    destroy: function destroy(client) {
      return new Promise(function (resolve) {
        client.on('end', function () {
          resolve();
        });
        client.end();
      });
    }
  };
  var opts = {
    min: 2,
    max: 10,
    idleTimeoutMillis: 30000,
    log: true
  };
  return _poolModule.createPool(factory, opts);
};

exports.createMysqlPool = createMysqlPool;