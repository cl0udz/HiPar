/**
 * Created by jpsoroulas.
 */
/**
 * Exports the mongodb database objected used to store the endpoint status history.
 *
 * ### Exported objects
 * __{{#crossLink "DBConnectionFactory"}}{{/crossLink}}__
 *
 * @module database
 */
'use strict';
var mongojs = require('mongojs');
var sqlite3 = require('sqlite3').verbose();
var stampit = require('stampit');
var _ = require('underscore');
var logger = require('./logger');


var mongoDBWrapper;
var sqliteWrapper;


mongoDBWrapper = stampit().state({
    connection: void 0
}).methods({
    init: function init(connectionURL) {
        connectionURL = connectionURL || 'mongodb://localhost:27017/';
        this.connection = mongojs(connectionURL + 'watcherjs', ['history']);
    },

    insertEndpointsHistory: function insertEndpointsHistory(entries, cb) {
        cb = cb || _.noop;
        this.connection.history.insert(entries, function(err, recs) {
            if (err) {
                logger.warn('Unable to update the persistent state of \'' + entries + '\', ' + err);
            }
            cb(err, recs);
        });
    },

    removeEndpointHistory: function removeEndpointHistory(endpointId, cb) {
        cb = cb || _.noop;
        this.connection.history.remove({
            endpointId: endpointId
        }, function(err, result) {
            if (err) {
                logger.warn('Unable to remove \'' + endpointId + '\', ' + err);
            } else {
                logger.debug('History for endpoint \'' + endpointId + '\' has been removed from database!');
            }
            cb(err, result);
        });
    },

    findHistoryForEndpoint: function findHistoryForEndpoint(id, from, to, cb) {
        cb = cb || _.noop;
        var query = {};
        if (from && to) {
            query.timestamp = {
                $gte: parseFloat(from),
                $lte: parseFloat(to)
            };
        }
        if (id) {
            query.endpointId = id;
        }
        this.connection.history.find({
            $query: query,
            $orderby: {
                timestamp: 1
            }
        }, function(err, recs) {
            if (err) {
                logger.error('Unable to get history, err: ' + err + ', query: ' + query);
            }
            cb(err, recs);
        });
    },

    close: function close() {
        this.connection.close();
    }
});



var createTableSQL = 'CREATE TABLE if not exists history (id TEXT, timestamp INTEGER, phase TEXT, ' +
    'sfrom TEXT, sto TEXT)';

sqliteWrapper = stampit().state({
    connection: void 0
}).methods({
    init: function init(connectionURL) {
        connectionURL = connectionURL || 'storage/history.sqlite';
        this.connection = new sqlite3.Database(connectionURL);
        this.connection.run(createTableSQL);
    },

    insertEndpointsHistory: function insertEndpointsHistory(entries, cb) {
        cb = cb || _.noop;
        var con = this.connection;
        con.serialize(function() {
            con.run('begin transaction');

            var stmt = con.prepare('INSERT INTO history VALUES (?, ?, ?, ?, ?)');
            _.each(entries, function(entry) {
                stmt.run(entry.endpointId, entry.timestamp, entry.phase,
                    entry.statusTransition.from, entry.statusTransition.to);
            });

            stmt.finalize();
            con.run('commit', cb);
        });
    },

    removeEndpointHistory: function removeEndpointHistory(id, cb) {
        cb = cb || _.noop;
        var con = this.connection;
        var stmt = con.prepare('DELETE from history where id = ?');
        stmt.run(id, cb);
        stmt.finalize();
    },

    findHistoryForEndpoint: function findHistoryForEndpoint(id, from, to, cb) {
        cb = cb || _.noop;
        var con = this.connection;
        var recs = [];

        var scb = function(err, rows) {
            if (!err) {
                _.each(rows, function(row) {
                    recs.push({
                        endpointId: row.id,
                        timestamp: row.timestamp,
                        phase: row.phase,
                        statusTransition: {
                            from: row.sfrom,
                            to: row.sto
                        }
                    });
                });
            }
            cb(err, recs);
        };

        var stmt;
        if (id && from && to) {
            stmt = con.prepare('SELECT * FROM history WHERE id = ? AND (timestamp >= ? AND timestamp <= ?)');
            stmt.all(id, from, to, scb);
        } else if (id && (!from || !to)) {
            stmt = con.prepare('SELECT * FROM history WHERE id = ?');
            stmt.all(id, scb);
        } else {
            stmt = con.prepare('SELECT * FROM history');
            stmt.all([], scb);
        }
        stmt.finalize();
    },

    close: function close() {
        // do nothing ???
        // this.connection.close();
    }
});

// var db = new sqlite3.Database(file);
// db.serialize(function() {
//   if(!exists) {
//     db.run("CREATE TABLE Stuff (thing TEXT)");
//   }
// });

/**
 * Creates mongodb database object, used to store the endpoint status history.
 *
 * @class DBConnectionFactory
 * @static
 */
module.exports = {
    /**
     * Creates a mongoDB database connection.
     * @static
     * @method createMongoDBOperationsWrapper
     * @param {String} [connectionURL] the mongoDB connection url. If empty the default connection url
     * 'mongodb://localhost:27017/' is used.
     *
     * @return the mongoDB connection.
     */
    createMongoDBOperationsWrapper: function createMongoDBOperationsWrapper(connectionURL) {
        var wrapper = mongoDBWrapper.create();
        wrapper.init(connectionURL);
        return wrapper;
    },

    /**
     * Creates a SQLite database connection.
     * @static
     * @method createSQLiteDBOperationsWrapper
     * @param {String} [connectionURL] the SQLite connection url. If empty the default connection url
     * './storage/history.sqlite' is used.
     *
     * @return the SQLite connection.
     */
    createSQLiteDBOperationsWrapper: function createSQLiteDBOperationsWrapper(connectionURL) {
        var wrapper = sqliteWrapper.create();
        wrapper.init(connectionURL);
        return wrapper;
    }
};