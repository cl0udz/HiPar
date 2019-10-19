/**
 * Created by jpsoroulas.
 */
'use strict';
var rest = require('restler');
var s = require('underscore.string');
var _ = require('underscore');
var Q = require('q');
var assert = require('chai').assert;
var proxyquire = require('proxyquire');

var stubs = {
    './database': {
        createMongoDBOperationsWrapper: function createMongoDBOperationsWrapper() {
            return {
                insertEndpointsHistory: function insertEndpointsHistory(entries, cb) {
                    cb();
                },
                removeEndpointHistory: function removeEndpointHistory(endpointId, cb) {
                    cb();
                },
                findHistoryForEndpoint: function findHistoryForEndpoint(id, from, to, cb) {
                    cb();
                },
                close: function close() {}
            };
        },
        createSQLiteDBOperationsWrapper: function createSQLiteDBOperationsWrapper() {
            return {
                insertEndpointsHistory: function insertEndpointsHistory(entries, cb) {
                    cb();
                },
                removeEndpointHistory: function removeEndpointHistory(endpointId, cb) {
                    cb();
                },
                findHistoryForEndpoint: function findHistoryForEndpoint(id, from, to, cb) {
                    cb();
                },
                close: function close() {}
            };
        },
        '@global': true
    }
};

var app = proxyquire('../../src/watcher', stubs);
var constants = require('../../src/constants');
var logger = require('../../src/logger');
var wjsConfigured = constants.watcherEvents.wjsConfigured;

describe('watcher', function() {
    describe('#REST API:', function() {
        var watcher;
        //this.timeout(15000);
        // beforeEach(function(done) {
        var originalInterval = 300000;
        before(function(done) {
            watcher = app.watcherFactory.create({
                port: 7777,
                interval: originalInterval,
                endpoints: [{
                    id: 'console',
                    type: 'http',
                    timeout: 2000,
                    url: 'http://localhost:7777/console'
                }]
            }).start();
            watcher.addListener(wjsConfigured, done);
        });


        it('get settings from startup', function(done) {
            rest.get('http://localhost:7777/settings')
                .on('complete', function(data, response) {
                    assert.equal(200, response.statusCode);
                    // interval set at startup
                    assert.equal(data.interval, originalInterval);
                    done();
                });
        });

        var updatedInterval = 111111;
        it('update settings', function(done) {
            rest.put('http://localhost:7777/settings', {
                data: {
                    interval: updatedInterval
                }
            }).on('complete', function(data, response) {
                assert.equal(200, response.statusCode);
                assert.equal(updatedInterval, data.interval);
                done();
            });
        });

        it('get updated settings', function(done) {
            rest.get('http://localhost:7777/settings')
                .on('complete', function(data, response) {
                    assert.equal(200, response.statusCode);
                    assert.equal(data.interval, updatedInterval);
                    done();
                });
        });

        it('get endpoints', function(done) {
            rest.get('http://localhost:7777/endpoints')
                .on('complete', function(data, response) {
                    assert.equal(200, response.statusCode);
                    assert.equal(2, data.length);
                    // endpoints: 'console' and 'monitor' (stored at filesystem)
                    assert.equal('console', data[0].id);
                    assert.equal('monitor', data[1].id);
                    done();
                });
        });

        it('get endpoint', function(done) {
            rest.get('http://localhost:7777/endpoints/console')
                .on('complete', function(data, response) {
                    assert.equal(200, response.statusCode);
                    assert.equal('console', data.id);
                    done();
                });
        });

        it('status request for unknown endpoint id', function(done) {
            rest.get('http://localhost:7777/endpoints/unknown')
                .on('complete', function(data, response) {
                    assert.equal(422, response.statusCode);
                    done();
                });
        });

        it('deactivate endpoint', function(done) {
            rest.del('http://localhost:7777/endpoints/console/activate')
                .on('complete', function(data, response) {
                    assert.equal(200, response.statusCode);
                    assert.equal('console', data.id);
                    assert.equal(false, data.active);
                    done();
                });
        });

        it('status request for endpoint with undetermined service status', function(done) {
            rest.get('http://localhost:7777/endpoints/console')
                .on('complete', function(data, response) {
                    assert.equal(200, response.statusCode);
                    assert.equal(data.status, 'undetermined');
                    done();
                });
        });

        it('activate endpoint', function(done) {
            rest.post('http://localhost:7777/endpoints/console/activate')
                .on('complete', function(data, response) {
                    assert.equal(200, response.statusCode);
                    assert.equal('console', data.id);
                    assert.equal(true, data.active);
                    done();
                });
        });

        it('activate unknown endpoint', function(done) {
            rest.post('http://localhost:7777/endpoints/unknown/activate')
                .on('complete', function(data, response) {
                    assert.equal(422, response.statusCode);
                    done();
                });
        });

        it('enable notification endpoint', function(done) {
            rest.post('http://localhost:7777/endpoints/console/notify')
                .on('complete', function(data, response) {
                    assert.equal(200, response.statusCode);
                    assert.equal('console', data.id);
                    assert.equal(true, data.notify);
                    done();
                });
        });

        it('disable notification endpoint', function(done) {
            rest.del('http://localhost:7777/endpoints/console/notify')
                .on('complete', function(data, response) {
                    assert.equal(200, response.statusCode);
                    assert.equal('console', data.id);
                    assert.equal(false, data.notify);
                    done();
                });
        });

        it('enable notification for unknown endpoint', function(done) {
            rest.post('http://localhost:7777/endpoints/unknown/notify')
                .on('complete', function(data, response) {
                    assert.equal(422, response.statusCode);
                    done();
                });
        });

        it('add endpoint', function(done) {
            rest.post('http://localhost:7777/endpoints', {
                data: {
                    id: 'x',
                    type: 'socket'
                }
            }).on('complete', function(data, response) {
                assert.equal(200, response.statusCode);
                assert.equal('x', data.id);
                done();
            });
        });

        it('delete endpoint', function(done) {
            rest.del('http://localhost:7777/endpoints/x')
                .on('complete', function(data, response) {
                    assert.equal(200, response.statusCode);
                    assert.equal('x', data.id);
                    done();
                });
        });

        it('add endpoint with validation errors', function(done) {
            rest.post('http://localhost:7777/endpoints', {
                data: {
                    id: 'x'
                }
            }).on('complete', function(data, response) {
                console.dir(data);
                assert.equal(422, response.statusCode);
                assert.equal(1, data.error.length);
                done();
            });
        });

        after(function() {
            // Mind that this method calls process.exit
            watcher.stop();
        });
    });
});