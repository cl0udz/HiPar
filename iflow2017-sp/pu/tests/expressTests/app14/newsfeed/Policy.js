
module.exports = function(dirname, app) {
    var fs = require('fs');
    var path = require("path");
    var configs = JSON.parse(fs.readFileSync(path.resolve(__dirname,'./configs.json'), 'utf8'));

    var iflow = require("iflow");
    try {
        var mongo = require('mongodb');
    } catch (e) {}
    try {
        var mongoose = require('mongoose');
    } catch (e) {}
    try {
        var express = require('express');
    } catch (e) {}

    try {
        var bourne = require('bourne');
    } catch (e) {}

    try {
        var mysql = require('mysql');
    } catch (e) {}

    try {
        var fsextra = require('fs-extra');
    } catch (e) {}

    var cp = require("child_process");
    var response = require(path.resolve(__dirname, "./node_modules/express/lib/response.js"));
    var request = require(path.resolve(__dirname, "./node_modules/express/lib/request.js"));

    /* Sources */
    if (configs.sources.http === true) {
        iflow.addCallbackSource(app.get, 1, 0, iflow.HIGH_LEVEL, "app-get");
        iflow.addCallbackSource(app.post, 1, 0, iflow.HIGH_LEVEL, "app-post");
        iflow.addCallbackSource(app.put, 1, 0, iflow.HIGH_LEVEL, "app-put");
        iflow.addCallbackSource(app.delete, 1, 0, iflow.HIGH_LEVEL, "app-delete");

        if (express && express.Router) {
            var appRouter = express.Router();
            if (appRouter) {
                var dummyRoute = appRouter.route("");

                iflow.addCallbackSource(appRouter.get, 2, 0, iflow.HIGH_LEVEL, "appRouter-get");
                iflow.addCallbackSource(appRouter.post, 2, 0, iflow.HIGH_LEVEL, "appRouter-post");
                iflow.addCallbackSource(appRouter.put, 2, 0, iflow.HIGH_LEVEL, "appRouter-put");
                iflow.addCallbackSource(appRouter.delete, 2, 0, iflow.HIGH_LEVEL, "appRouter-delete");

                iflow.addCallbackSource(appRouter.get, 1, 0, iflow.HIGH_LEVEL, "appRouter-get");
                iflow.addCallbackSource(appRouter.post, 1, 0, iflow.HIGH_LEVEL, "appRouter-post");
                iflow.addCallbackSource(appRouter.put, 1, 0, iflow.HIGH_LEVEL, "appRouter-put");
                iflow.addCallbackSource(appRouter.delete, 1, 0, iflow.HIGH_LEVEL, "appRouter-delete");

                iflow.addCallbackSource(appRouter.param, 1, 0, iflow.HIGH_LEVEL, "appRouter-param");
                iflow.addCallbackSource(dummyRoute.get, 0, 0, iflow.HIGH_LEVEL, "dummyRoute-get");
                iflow.addCallbackSource(dummyRoute.post, 0, 0, iflow.HIGH_LEVEL, "dummyRoute-post");
                iflow.addCallbackSource(dummyRoute.put, 0, 0, iflow.HIGH_LEVEL, "dummyRoute-put");
                iflow.addCallbackSource(dummyRoute.delete, 0, 0, iflow.HIGH_LEVEL, "dummyRoute-delete");
            }
        }
    }

    if (configs.sources.fs === true) {
        //iflow.addSource(fs.stat, iflow.HIGH_LEVEL);
        //iflow.addSource(fs.statSync, iflow.HIGH_LEVEL);
        iflow.addSource(fs.lstat, iflow.HIGH_LEVEL);
        //iflow.addSource(fs.lstatSync, iflow.HIGH_LEVEL);

        iflow.addSource(fs.ftat, iflow.HIGH_LEVEL);
        //iflow.addSource(fs.fstatSync, iflow.HIGH_LEVEL);

        iflow.addSource(fs.readlink, iflow.HIGH_LEVEL);
        iflow.addSource(fs.readlinkSync, iflow.HIGH_LEVEL);

        iflow.addSource(fs.realpath, iflow.HIGH_LEVEL);
        iflow.addSource(fs.realpathSync, iflow.HIGH_LEVEL);

        iflow.addSource(fs.readdir, iflow.HIGH_LEVEL);
        iflow.addSource(fs.readdirSync, iflow.HIGH_LEVEL);

        iflow.addSource(fs.open, iflow.HIGH_LEVEL);
        iflow.addSource(fs.openSync, iflow.HIGH_LEVEL);

        iflow.addSource(fs.read, iflow.HIGH_LEVEL, "fs-read");
        iflow.addSource(fs.readSync, iflow.HIGH_LEVEL, "fs-readSync");

        iflow.addSource(fs.readFile, iflow.HIGH_LEVEL, "fs-readFile");
        iflow.addSource(fs.readFileSync, iflow.HIGH_LEVEL, "fs-readFileSync");

        iflow.addSource(fs.exists, iflow.HIGH_LEVEL);
        iflow.addSource(fs.existsSync, iflow.HIGH_LEVEL);

        if (fsextra) {
            iflow.addSource(fsextra.ensureDir, iflow.HIGH_LEVEL, "fsextra-ensureDir");
            iflow.addSource(fsextra.outputJson, iflow.HIGH_LEVEL, "fsextra-outputJson");
        }
    }

    if (configs.sources.db === true) {
        if (mongo) {
            iflow.addSource(mongo.Collection.prototype.find, iflow.HIGH_LEVEL, "mongo-find");
            iflow.addSource(mongo.Collection.prototype.findOne, iflow.HIGH_LEVEL, "mongo-findOne");
            iflow.addSource(mongo.Collection.prototype.insert, iflow.HIGH_LEVEL, "mongo-insert");
        }

        if (mongoose) {
            var question = mongoose.model("dummy", new mongoose.Schema({title: String}));
            iflow.addSource(mongoose.Model.find, iflow.HIGH_LEVEL, "mongoose-find");
            iflow.addSource(mongoose.Model.create, iflow.HIGH_LEVEL, "mongoose-create");
            iflow.addSource(mongoose.Model.search, iflow.HIGH_LEVEL, "mongoose-search");
            iflow.addSource(mongoose.Model.findById, iflow.HIGH_LEVEL, "mongoose-findById");
            iflow.addSource((new question()).save, iflow.HIGH_LEVEL, "mongoose-save");
            iflow.addSource(question.findOne, iflow.HIGH_LEVEL, "mongoose-schema-findone");
        }

        if (bourne) {
            var bInstance = new bourne("/tmp/a.json");
            iflow.addSource(bInstance.insert, iflow.HIGH_LEVEL, "bourne-insert");
            iflow.addSource(bInstance.find, iflow.HIGH_LEVEL, "bourne-find");
            iflow.addSource(bInstance.findOne, iflow.HIGH_LEVEL, "bourne-findOne");
            iflow.addSource(bInstance.update, iflow.HIGH_LEVEL, "bourne-update");
            iflow.addSource(bInstance.delete, iflow.HIGH_LEVEL, "bourne-delete");
        }
        if (mysql) {
            var connection = mysql.createConnection({
                user: 'root',
                password: 'alexcandru',
                host: '127.0.0.1',
                database: 'blog'
            });
            iflow.addSource(connection.query,  iflow.HIGH_LEVEL, "mysql-query");
            iflow.addSource(connection.q,  iflow.HIGH_LEVEL, "mysql-q");
            iflow.addSource(connection.getRow,  iflow.HIGH_LEVEL, "mysql-getRow");
        }
    }

    /* Sinks */

    if (configs.sinks.exec === true) {
        iflow.addSink(cp.spawn);
        //iflow.addSink(cp.spawnSync);

        iflow.addSink(cp.exec);
        //iflow.addSink(cp.execSync);

        iflow.addSink(cp.execFile);
        //iflow.addSink(cp.execFileSync);

        iflow.addSink(cp.fork);
        //iflow.addSink(cp.forkSync);
    }


    if (configs.sinks.fs === true) {
        iflow.addSink(fs.writeFile);
        iflow.addSink(fs.writeFileSync);

        iflow.addSink(fs.rename);
        iflow.addSink(fs.renameSync);

        iflow.addSink(fs.mkdir);
        iflow.addSink(fs.mkdirSync);

        iflow.addSink(fs.write, "fs-write");
        iflow.addSink(fs.writeSync, "fs-writeSymc");

        iflow.addSink(fs.appendFile, "fs-appendFile");
        iflow.addSink(fs.appendFileSync, "fs-appendFile-sync");

        if (fsextra) {
            iflow.addSink(fsextra.ensureDir, "fsextra-ensureDir");
            iflow.addSink(fsextra.outputJson, "fsextra-outputJson");
        }
    }

    if (configs.sinks.http === true) {
        iflow.addSink(response.send, "express-response");
    }

    if (configs.sinks.db === true) {
        if (mongo) {
            iflow.addSink(mongo.Collection.prototype.find, "mongo-find");
            iflow.addSink(mongo.Collection.prototype.findOne, "mongo-findOne");
            iflow.addSink(mongo.Collection.prototype.insert, "mongo-insert");
        }

        if (mongoose) {
            var d = new Date();
            var n = d.getTime();
            var question = mongoose.model("dummy" + d.getTime(), new mongoose.Schema({title: String}));
            iflow.addSink(mongoose.Model.find, "mongoose-find", true);
            iflow.addSink(mongoose.Model.create, "mongoose-create", true);
            iflow.addSink(mongoose.Model.search, "mongoose-search", true);
            iflow.addSink(mongoose.Model.findById, "mongoose-findById", true);
            iflow.addSink((new question()).save, "mongoose-save", true);
            iflow.addSink(question.findOne, "mongoose-schema-findone", true);
        }

        if (bourne) {
            var bInstance = new bourne("/tmp/a.json");
            iflow.addSink(bInstance.insert, "bourne-insert");
            iflow.addSink(bInstance.find, "bourne-find");
            iflow.addSink(bInstance.findOne, "bourne-findOne");
            iflow.addSink(bInstance.update, "bourne-update");
            iflow.addSink(bInstance.delete, "bourne-delete");
        }
        if (mysql) {
            var connection = mysql.createConnection({
                host     : 'localhost',
                user     : 'me',
                password : 'secret',
                database : 'my_db'
            });
            iflow.addSink(connection.query, "mysql-query");
            iflow.addSink(connection.q, "mysql-q");
            iflow.addSink(connection.getRow, "mysql-getRow");
        }
    }


    console.log("Policy successfuly loaded!");
}
