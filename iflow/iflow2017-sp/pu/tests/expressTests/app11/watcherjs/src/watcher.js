/**
 * Created by jpsoroulas.
 */
/**
 * ### Overview
 * This is the main application module. It provides the factory method for creating an application,
 * the so called __watcher.js__, that can be used to monitor service status.
 * The application architecture is very simple. At regular intervals (_service communication interval_),
 * service specific defined messages, either as http requests or as raw data to sockets (depending on the
 * communication type of the service endpoint), are send to the monitored services, or to be more precise are send
 * to the service endpoints (or simply endpoints), to find out their status (the _service_ and  _endpoint_ notation
 * is used interchangeably, but there is a conceptual difference between them which will be discussed shortly).
 * On the service status resolution, the status is stored internally and is made available either programmatically or
 * via http requests (aka the _status requests_).
 * Actually, __the entire application API is also exposed as REST API__, which, on top of this, a simple but handy
 * __web gui__ is implemented. For the REST API implementation the [express](http://expressjs.com) web framework is used.
 * The REST interface description with references to the respective application API can be found at
 * __{{#crossLinkModule "watcher-http"}}{{/crossLinkModule}}__.
 * Moreover, a [socket.io](http://socket.io/) client can be used for real time event notification from the system. At the moment
 * a client could be notified when the endpoints status has been updated. More information and examples can be found at
 * __{{#crossLink "WatcherEvents"}}{{/crossLink}}__ and the examples source directory.
 *
 *
 * ### Configuration
 * The application configuration requires two kinds of data, as shown below. The one that refers to the
 * express framework that implements the application http interface, and the other that refers to the service
 * endpoints. Note that properties in _[]_ are optional. when not set, the default values are used - those in parentheses.
 *
 *
 * * Embedded http server configuration and service communication interval
 *  * [__host__] ('localhost'), the http server host name.
 *  * [__port__] (7777), the http server port.
 *  * [__interval__] (10000 ms), the regular interval, at ms, that the application attempts to establish
 *  communication with the services to resolve their status (_service communication interval_).
 *  * [__routeExts__], an array of user defined route extensions for building custom responses for the status requests.
 *  A route extension must be a function that accepts the __{{#crossLink "Watcher/registry:property"}}{{/crossLink}}__
 *  as parameter and return a function that conforms to [express route](http://expressjs.com/guide/routing.html) conventions
 *  (a function with parameters: _req_, _res_, _next_, as shown at the examples)
 *  * [__resolutionStrategies__], an array of objects (aka _unbound resolution strategy descriptor_), each of them holds the
 *  information for an _unbound resolution strategy_ (__{{#crossLinkModule "resolvers"}}{{/crossLinkModule}}__) to be registered
 *  at the system. These strategies are not bound to any endpoint, but they can be associated with them by setting the
 *  respective strategy id at the endpoint's _resolutionStrategy_ configuration property (see at endpoint configuration below).
 *  The descriptor is an object as follows:
 *  ```
 *  {
 *      id: <the resolution strategy id>, (should be unique)
 *      desc: <the resolution strategy description>
 *      implementation: <the implementation of resolution strategy> (see at resolvers to see the interface)
 *  }
 *  ```
 *  * [__nfOpts__], the notification options. Holds the information of the sender and the email addresses
 *  to receive email when erroneous service status occurs. The default sender is _admin@watcherjs.com_
 *  (if needed, configure your email account to not filter this sender as a spam). The object structure is:
 *  ```
 *  {
 *      sender: <the sender>, // default value: admin@watcherjs.com
 *      recipients: [<recipient1>, <recipient1>, ...] // the array of recipients email
 *  }
 *  ```
 *  * [__exportDir__] (_<`project directory`>/storage/_), the storage directory of dynamically created endpoints.
 *  * [__dbConnectionURL__] (_<`project directory`>/storage/history.sqlite_), the database connection url for the endpoints
 *  status history storage. Currently two databases can be used: the SQLite (used by default), where no extra installation is required,
 *  and the mongoDB that should be additionally installed by the user. In case of mongoDB, the connection URL should be explicitly
 *  defined (e.g. 'mongodb://localhost:27017/'), whereas for the SQLite, a different location than the default can be set
 *  (e.g. /tmp/enpoints.history). 
 *
 *
 * * Endpoint
 *  * __id__, the unique endpoint/service id. This _id_ is used for the service identification when a service request is made.
 *  * __type__, the endpoint type, the type determines whether the message
 *  exchange is performed via http requests or directly with the socket. It actually dictates the underline
 *  connector used for the specific service (see also at __{{#crossLinkModule "connectors"}}{{/crossLinkModule}}__).
 *  The permitted values are: __'socket'__ and __'http'__ for __{{#crossLink "SocketConnector"}}{{/crossLink}}__
 *  and __{{#crossLink "HttpConnector"}}{{/crossLink}}__ respectively.
 *  * [__desc__] (__id__), the endpoint description.
 *  * [__host__] (localhost), the endpoint hostname when a __{{#crossLink "SocketConnector"}}{{/crossLink}}__ is used.
 *  * [__port__] (9999), the endpoint port when a __{{#crossLink "SocketConnector"}}{{/crossLink}}__ is used.
 *  * [__url__] (http://localhost:8080), the endpoint url when __{{#crossLink "HttpConnector"}}{{/crossLink}}__ is used.
 *  * [__timeout__] (5000), the applied connector's connection timeout (see also at
 *  __{{#crossLink "SocketConnectorFactory/create:method"}}{{/crossLink}}__ and
 *  __{{#crossLink "HttpConnectorFactory/create:method"}}{{/crossLink}}__).
 *  * [__resolutionStrategy__] (__{{#crossLink "OnConnectionResolution"}}{{/crossLink}}__) the applied resolution strategy.
 *  This property can hold either an implementation of a resolution strategy or the id of the an unbound strategy.
 *  * [__active__] (true), used to indicate whether or not the endpoint should be activated
 *  (enables or suspends the communication between the respective connector and the endpoint).
 *  * [__notify__] (false), used to indicate whether or not to receive email notifications for erroneous service status.
 *
 *
 * The _endpoint_ notation is used to emphases that the _service_ can be proxied by another service (_the proxy_) which
 * is that determines the status of the proxied service. In this case, the endpoint belongs to the proxy and not to the
 * monitored service.
 *
 *
 * ### Exported objects
 * * __{{#crossLink "WatcherFactory"}}{{/crossLink}}__
 *
 *
 * ### API Usage samples
 * __Service with route extension and resolution strategy registration__
 *    ```javascript
 * // Here is the configuration of three endpoints. Two of them are accessed via sockets and refer to the services
 * // 'service-1' and 'service-2' hosted at '11.222.333.444' and '11.222.333.555' respectively, whereas the other is
 * // accessed via http and refers to the service 'service-3' that is also hosted at '11.222.333.555' (note that we use
 * // the notation 'service' since the 'endpoint' and the 'service' is the same component).
 * // Fix the module paths
 * var watcher = require('watcher');
 * var constants = require('constants');
 * var resolvers = require('resolvers');
 *
 * var down = constants.serviceStatus.down;
 * var watcherFactory = watcher.watcherFactory;
 * var onConnectionResolutionFactory = resolvers.onConnectionResolutionFactory;
 *
 * var alwaysDownStrategy = {
 *       reset: function reset() {},
 *       resolveOnConnection: function resolveOnConnection(connection) {
 *          //mark as down only for demonstration purposes
 *           return down;
 *       },
 *       resolveOnConversation: function resolveOnConversation(connection, chunk) {},
 *       resolveNow: function resolveNow(connection) {}
 *   };
 *
 * var options = {
 *     port: 7777,
 *     interval: 15000,
 *    routeExts: [{
 *          path: '/custom-route',
 *          route: function service(registry) {
 *              return function (req, res, next) {
 *                  var id = req.query.id;
 *                  var endpoint = registry[id];
 *                  if (endpoint) {
 *                      res.send('Service status: ' + endpoint.status);
 *                  } else {
 *                      res.send('Unknown service: ' + id);
 *                  }
 *              };
 *          }
 *      }],
 *     resolutionStrategies: [
 *           {// Actually the default implementation, added for demonstration purposes
 *               id: 'on-connection',
 *               desc: 'resolution on connection',
 *               implementation: onConnectionResolutionFactory.create()
 *           },
 *           {
 *               id: 'always-down',
 *               desc: 'always down',
 *               implementation: alwaysDownStrategy
 *           }
 *       ],
 *     nfOpts: {
 *          recipients: ['foo@foo.com']
 *      },
 *     endpoints: [
 *          {
 *              id: 'service-1',
 *              desc: 'service 1',
 *              type: 'socket',
 *              host: '11.222.333.444',
 *              port: 1234,
 *              // Apply an implementation of resolution strategy
 *              resolutionStrategy: alwaysDownStrategy,
 *              active: true,
 *              notify: true
 *          },
 *          {
 *              id: 'service-2',
 *              desc: 'service 2',
 *              type: 'socket',
 *              host: '11.222.333.555',
 *              port: 1234,
 *              // Apply the unbound resolution strategy with id 'on-connection'
 *              resolutionStrategy: 'on-connection',
 *              active: true,
 *              notify: true
 *          },
 *          {
 *              id: 'service-3',
 *              desc: 'service 3',
 *              type: 'http',
 *              timeout: 3000,
 *              // The query string could be anything
 *              url: 'http://11.222.333.555:3333/?get-status',
 *              active: true,
 *              notify: true
 *          }
 *      ]
 *  };
 * watcherFactory.create(options).start();
 *
 * After starting the watcher the following status requests could be made in order to
 * retrieve the status for the services with id 'service-1', 'service-2' and 'service-3' respectively
 * http://localhost:7777/endpoints/service-1
 * http://localhost:7777/endpoints/service-2
 * http://localhost:7777/endpoints/service-3
 * Whereas the request http://localhost:7777/custom-route?id=service-1
 * is the user defined route which returns: 'Service status: <status>' where status
 * the status of the 'service-1'.
 *    ```
 * __Proxied services__
 *    ```javascript
 * // Proxied services
 * // Here is the case where a proxy controls the status of two service (e.g. 'proxied-service-1'
 * // and 'proxied-service-2'). The proxy is hosted at '11.222.333.444' and can be accessed via http.
 * // Two http endpoints at the proxy are created, the 'endpoint-1' and 'endpoint-2' each one of them
 * // is connected with the respective monitored proxied services (note that we use the notation 'endpoint' since
 * // the 'endpoint' is not the monitored 'service').
 *
 * // Fix the module paths
 * var watcherFactory = require('watcher').watcherFactory;
 * var options = {
 *     port: 7777,
 *     interval: 15000,
 *     endpoints: [
 *          {
 *              id: 'endpoint-1',
 *              type: 'http',
 *              timeout: 3000,
 *              // request to the proxied service 'proxied-service-1', the query string could be anything
 *              url: 'http://11.222.333.444:3333/?get-status-for=proxied-service-1'
 *          },
 *          {
 *              id: 'endpoint-2',
 *              type: 'http',
 *              timeout: 3000,
 *              // request to the proxied service 'proxied-service-2', the query string could be anything
 *              url: 'http://11.222.333.444:3333/?get-status-for=proxied-service-2'
 *          }
 *      ]
 *  };
 * watcherFactory.create(options).start();
 *
 * After starting the watcher the following status requests could be made in order to
 * retrieve the status for 'proxied-service-1' and 'proxied-service-2' respectively
 * http://localhost:7777/endpoints/endpoint-1
 * http://localhost:7777/endpoints/endpoint-2
 *    ```
 *
 * __Add and remove endpoints dynamically__
 *    ```javascript
 * // Here is an example for dynamically adding and removing endpoints
 *
 * // Fix the module paths
 * var watcherFactory = require('watcher').watcherFactory;
 * var options = {
 *     port: 7777,
 *     interval: 15000,
 *     endpoints: [
 *          {
 *              id: 'service-1',
 *              type: 'socket',
 *              host: '11.222.333.444',
 *              port: 1234
 *          }
 *      ]
 *  };
 * var watcher = watcherFactory.create(options).start();
 *
 * // Add the endpoint 'service-2'
 * setTimeout(function() {
 *        watcher.addEndpoint({
 *          id: 'service-2',
 *          type: 'http',
 *          timeout: 3000,
 *          url: 'http://11.222.333.555:3333/?get-status'
 *      }, false, function() {
 *            if (!_.isEmpty(errors)) {
 *               throw new Error('validation error...');
 *           }
 *      });
 * }, 6000);
 *
 * // Deactivate the endpoint 'service-2'
 * setTimeout(function () {
 *      watcher.setEndpointActivationState('service-2', false);
 * }, 12000);
 *
 * // Activate the endpoint 'service-2'
 * setTimeout(function () {
 *        watcher.setEndpointActivationState('service-2', true);
 *   }, 30000);
 *
 * // Remove the endpoint 'service-2'
 * setTimeout(function() {
 *       watcher.removeEndpoint('service-2');
 * }, 60000);
 *
 * // Shutdown the application
 * setTimeout(function () {
 *      watcher.stop();
 * }, 120000);
 *
 *    ```
 *
 * @module watcher
 */
'use strict';
var fs = require('fs-extra');
var events = require('events');
var path = require('path');
var stampit = require('stampit');
var _ = require('underscore');
var s = require('underscore.string');
// var async = require('async');
// var asyncTimeout = require('async-timeout');
var Q = require('q');
var moment = require('moment');
var nodemailer = require('nodemailer');
var directTransport = require('nodemailer-direct-transport');
//var http = require('http');
//var query = require('connect-query');
//var fs = require('fs');
//var connect = require('connect');

var logger = require('./logger');
var validator = require('./validator');
var constants = require('./constants');
var connectors = require('./connectors');
var httpServerFactory = require('./http-server');
var dbConnFactory = require('./database');
//var utils = require('./utils');

var up = constants.serviceStatus.up;

var registrationPhase = constants.lifecyclePhase.registrationPhase;
var activationPhase = constants.lifecyclePhase.activationPhase;
var deactivationPhase = constants.lifecyclePhase.deactivationPhase;
var inProgressPhase = constants.lifecyclePhase.inProgressPhase;
var terminationPhase = constants.lifecyclePhase.terminationPhase;

var socketConnectorFactory = connectors.socketConnectorFactory;
var httpConnectorFactory = connectors.httpConnectorFactory;
var undetermined = constants.serviceStatus.undetermined;
var wjsConfigured = constants.watcherEvents.wjsConfigured;
var wjsReady = constants.watcherEvents.wjsReady;
var endpointsStatusResolved = constants.watcherEvents.endpointsStatusResolved;
var wjsConnected = constants.watcherEvents.wjsConnected;
var wjsEndpointsUpdated = constants.watcherEvents.wjsEndpointsUpdated;
var socketConnectorType = constants.connectorType.socket;
var httpConnectorType = constants.connectorType.http;

var watcher, watcherFactory;

var ddFsOutputJson = Q.denodeify(fs.outputJson);
var ddFsStat = Q.denodeify(fs.stat);
var ddFsRemove = Q.denodeify(fs.remove);
var ddFsReadJson = Q.denodeify(fs.readJson);

function createConnector(endpoint) {
    var connector, type = endpoint.type;
    switch (type) {
        case socketConnectorType:
            connector = socketConnectorFactory.create(endpoint);
            break;
        case httpConnectorType:
            connector = httpConnectorFactory.create(endpoint);
            break;
        default:
            throw new Error('Can not create connector type: ' + type);
    }
    return connector;
}

/**
 * The application that can be used to monitor your services status.
 * An application overview and detailed configuration instructions and examples can be found at
 * __{{#crossLinkModule "watcher"}}{{/crossLinkModule}}__
 *
 * @class Watcher
 */
watcher = stampit().state({
    options: void 0,
    emitter: void 0
}).enclose(function() {
    // listen for terminal signal e.g. kill
    process.on('SIGTERM', _.bind(this.stop, this));

    // listen for interrupt signal e.g. Ctrl-C
    process.on('SIGINT', _.bind(this.stop, this));
    /**
     * Holds the registered endpoints.
     *
     * @private
     * @property _registry
     * @type Object
     */
    this._registry = {};

    this._transporter = nodemailer.createTransport(directTransport({}));

    this._passive = false;

    this._stopped = true;
}).methods({
    /**
     * Returns a promise for registring the endpoint.
     *
     * @private
     * @method _registerEndpoint
     * @param {Object} config the endpoint configuration.
     * @return the promise.
     */
    _registerEndpoint: function _registerEndpoint(config) {
        var deferred = Q.defer();
        var _self = this;
        var now = moment.utc();
        var _endpoint = {
            status: undetermined,
            timestamp: now,
            since: now,
            processed: false,
            active: true,
            notify: false
        };
        config = _.clone(config);
        var connector = createConnector(config);
        var endpoint = _.omit(_.defaults(config, _endpoint), 'resolutionStrategy');
        endpoint.desc = endpoint.desc || endpoint.id;
        endpoint.connector = connector;
        // Register status resolved listener
        var listener = _.bind(_.partial(_self._onStatusResolve, endpoint), _self);
        connector.addStatusResolvedListener(listener);

        _self._storeStatusToHistory({
                id: endpoint.id,
                phase: registrationPhase,
                fStatus: endpoint.status,
                tStatus: undetermined
            })
            .then(function() {
                _self._registry[endpoint.id] = endpoint;
                deferred.resolve(endpoint);
                logger.debug('New endpoint registered: ' + endpoint.id);
            }).fail(function(err) { // if one of the above operations failed resolve this promise as rejected
                deferred.reject(err);
                logger.error('Endpoint ' + endpoint.id + ' registration failed: ' + err);
            });
        return deferred.promise;
    },

    /**
     * Sends notification email if erroneous service status occurs.
     *
     * @private
     * @method _notify
     */
    _notify: function _notify() {
        var toBeNotified;
        var sender = this.options.nfOpts.sender;
        var recipients = this.options.nfOpts.recipients;
        if (!_.isEmpty(recipients)) {
            toBeNotified = _.filter(this._registry, function(endpoint) {
                var status = endpoint.status;
                if (endpoint.active && up !== status && undetermined !== status) {
                    if (endpoint.notify && (status !== endpoint.previousStatus || !endpoint.notified)) {
                        return true;
                    }
                } else {
                    endpoint.notified = false;
                }
                return false;
            });

            if (!_.isEmpty(toBeNotified)) {
                var msg = [];
                _.each(toBeNotified, function(endpoint) {
                    msg.push('Endpoint, \'' + endpoint.id + '\', status: ' + endpoint.status +
                        ', timestamp: ' + endpoint.timestamp.format('MMMM Do YYYY, h:mm:ss'));
                });
                msg = msg.join('');
                this._transporter.sendMail({
                    from: sender,
                    to: recipients.join(','),
                    subject: 'Notification',
                    text: msg
                }, function(error, response) {
                    if (error) {
                        logger.warn('Notification message failed: ' + error);
                    } else {
                        logger.info('Notification message send: ' + msg);
                        _.each(toBeNotified, function(endpoint) {
                            endpoint.notified = true;
                        });
                    }
                });
            }

        }
    },

    //synch method
    _onStatusResolve: function _onStatusResolve(endpoint, status) {
        if (!this._stopped) {
            var now = moment.utc();
            endpoint.timestamp = now;
            if (status !== endpoint.status) {
                endpoint.since = now;
                //store to database
                this._storeStatusToHistory({
                    id: endpoint.id,
                    phase: inProgressPhase,
                    fStatus: endpoint.status,
                    tStatus: status
                });
            }
            endpoint.previousStatus = endpoint.status;
            endpoint.status = status;
            endpoint.processed = true;
            logger.debug('Update registry, id/status: ' + endpoint.id + '/' + status);
            if (_.every(this._registry,
                    function(endpoint) {
                        return (endpoint.processed === true);
                    })) {
                this._notify();
                this.emitter.emit(endpointsStatusResolved);
                setTimeout(_.bind(this._pollEndpoints, this), this.options.interval).unref();
            }
        }
    },

    /**
     * Returns a promise for saving the endpoint status history for an endpoint.
     * SQLite (default) or MongoDb is used as persistence storage, depending on system configuration.
     *
     * @method _storeStatusToHistory
     * @param {Object} epStatus the endpoint history status info.
     * @return the promise.
     */
    _storeStatusToHistory: function _storeStatusToHistory(epStatus) {
        var now = moment.utc();
        var entries = [];
        entries.push({
            endpointId: epStatus.id,
            timestamp: now.valueOf(),
            phase: epStatus.phase,
            statusTransition: {
                from: epStatus.fStatus,
                to: epStatus.tStatus
            }
        });
        // return Q('data saved');
        return Q.nbind(this.db.insertEndpointsHistory, this.db)(entries);
    },

    _pollEndpoints: function _pollEndpoints() {
        var _self = this;
        if (!_self._stopped) {
            var registry = _self._registry;
            _.each(registry, function(endpoint) {
                endpoint.processed = false;
            });
            var passive = this._passive = _.every(registry, function(endpoint) {
                return !(endpoint.active);
            });
            if (passive) {
                logger.debug('No active endpoints, system passivated.');
            } else {
                logger.debug('Poll for services status...');
                _.each(registry, function(endpoint) {
                    if (endpoint.active) {
                        endpoint.connector.start.call(endpoint.connector);
                    } else {
                        endpoint.processed = true;
                    }
                });
            }
        }
    },

    /**
     * Returns a promise for saving the endpoint configuration settings at a file with the specified name
     * (for easy modification, files are used to save endpoints configuration).
     *
     * @private
     * @method _writeEndpointConfigToFile
     * @param {String} fileName the filename.
     * @param {Object} config the endpoint configuration.
     * @return the promise.
     */
    _writeEndpointConfigToFile: function _writeEndpointConfigToFile(fileName, config) {
        return ddFsOutputJson(fileName, config)
            .fail(function(err) {
                logger.error('Endpoint storage \'' + config.id + '\' failed: ' + err);
                err = 'Update endpoint configuration at storage failed (' + err.message + ')';
            });
    },

    /**
     * Activates the system again if it is passivated.
     *
     * @private
     * @method _restartIfPassive
     */
    _restartIfPassive: function _restartIfPassive() {
        if (true === this._passive) {
            logger.debug('Active endpoint found, system activated.');
            setTimeout(_.bind(this._pollEndpoints, this), 0).unref();
        }
    },

    /**
     * Returns a promise for deleting the endpoint with the specified id.
     *
     * @private
     * @method _deleteEndpoint
     * @param {String} id the endpoint id.
     * @return the promise.
     */
    _deleteEndpoint: function _deleteEndpoint(id) {
        var _self = this;
        var fileName = path.join(this.options.exportDir, id + '.json');
        return ddFsStat(fileName)
            .then(function(stats) {
                    return ddFsRemove(fileName)
                        .then(function() {
                            logger.info('Endpoint \'' + id + '\' removed from storage: ' + fileName);
                        });
                },
                function(err) {
                    logger.debug('Endpoint \'' + id + '\' is not persisted at local store, error details: ' + err);
                }
            ).finally(function() {
                delete _self._registry[id];
            });
    },

    /**
     * Returns a promise for updating the endpoint configuration setting of the specified id
     * (the endpoint configuration setting is saved in the file with name pattern <endpoint id>.json)
     *
     * @private
     * @method _updateEndpointConfig
     * @param {String} id the endpoint id.
     * @param {Object} properties updated properties.
     * @return the promise.
     */
    _updateEndpointConfig: function _updateEndpointConfig(id, properties) {
        var _self = this;
        var fileName = path.join(this.options.exportDir, id + '.json');
        return ddFsStat(fileName)
            .then(function(stats) {
                    ddFsReadJson(fileName)
                        .then(function(config) {
                                _.extend(config, properties);
                                return _self._writeEndpointConfigToFile(fileName, config);
                            },
                            function(err) {
                                logger.warn('Unable to update endpoint persistence state, invalid json file: ' + fileName);
                            });
                },
                function(err) {
                    logger.debug('Endpoint \'' + id + '\' not found at local store, not permanent changes.');
                }
            );
    },

    /**
     * Returns the persistent endpoints configuration settings (the settings are saved in files following
     * the name pattern <endpoint id>.json).
     *
     * @private
     * @method _getStoredEndpoints
     * @return {Array} the persistent endpoints.
     */
    _getStoredEndpoints: function _getStoredEndpoints() {
        var storage = this.options.exportDir;
        fs.ensureDirSync(storage);
        logger.debug('Ensuring existence of endpoints storage directory: ' + storage);
        var storedEnpoints = [];
        fs.readdirSync(storage).forEach(function(file) {
            var entry = path.join(storage, file);
            var stats = fs.statSync(entry);
            if (!stats.isDirectory()) {
                if (s(file).endsWith('.json')) {
                    var endpoint = fs.readJsonSync(entry, {
                        throws: false
                    });
                    if (!_.isNull(endpoint)) {
                        storedEnpoints.push(endpoint);
                        logger.info('Get endpoint from storage: ' + entry);
                    } else {
                        logger.warn('Unable to construct endpoint from storage, invalid json file: ' + entry);
                    }
                }
            }
        });
        return storedEnpoints;
    },

    /**
     * Returns a promise for retrieving the endpoint with the specified id.
     *
     * @method getEndpoint
     * @param {String} id the endpoint id.
     * @return the promise.
     */
    getEndpoint: function getEndpoint(id) {
        return Q(this._registry[id]);
    },

    /**
     * Returns a promise for retrieving the endpoints.
     *
     * @method getEndpoints
     * @return the promise.
     */
    getEndpoints: function getEndpoints() {
        return Q(_.values(this._registry));
    },

    /**
     * Returns a promise for adding an endpoint with the specified configuration.
     * For the configuration see at {{#crossLinkModule "watcher"}}{{/crossLinkModule}}
     *
     * @method addEndpoint
     * @param {Object} config the endpoint configuration (see at
     * __{{#crossLink "WatcherFactory/create:method"}}{{/crossLink}}__).
     * @param {Boolean} store used to indicate whether or not to store the endpoint.
     * @return the promise.
     */
    addEndpoint: function addEndpoint(config, store) {
        var _self = this;
        var deferred = Q.defer();
        var endpoint, registry = _self._registry;
        var errors = validator.validateEndpointConfig(
            config, _.keys(registry), _self.options.resolutionStrategies);
        if (_.isEmpty(errors)) {
            _self._registerEndpoint(config)
                .then(function(endpoint) {
                    if (endpoint.active) {
                        _self._restartIfPassive();
                    }
                    if (store) {
                        var fileName = path.join(_self.options.exportDir, config.id + '.json');
                        config = _.clone(config);
                        var strategy = config.resolutionStrategy;
                        if (strategy) {
                            config.resolutionStrategy = strategy.id;
                        }
                        _self._writeEndpointConfigToFile(fileName, config)
                            .then(function() {
                                deferred.resolve(endpoint);
                                // Handles the case when the system is passive
                                _self.emitter.emit(endpointsStatusResolved);
                            }).fail(
                                deferred.reject
                            );
                    } else {
                        deferred.resolve(endpoint);
                        // Handles the case when the system is passive
                        _self.emitter.emit(endpointsStatusResolved);
                    }
                }).fail(function(err) {
                    deferred.reject(err);
                });
        } else {
            errors.validation = true;
            deferred.reject(errors);
        }
        return deferred.promise;
    },

    /**
     * Returns a promise for removing the endpoint with the specified id.
     *
     * @method removeEndpoint
     * @param {String} id the endpoint id.
     * @return the promise.
     */
    removeEndpoint: function removeEndpoint(id) {
        var _self = this;
        var dendpoint;
        return _self.getEndpoint(id)
            .then(function(endpoint) {
                if (endpoint) {
                    dendpoint = endpoint;
                    return _self._deleteEndpoint(id)
                        .then(function() {
                            return Q.nbind(_self.db.removeEndpointHistory, _self.db)(id);
                        }).then(function() {
                            return Q(dendpoint);
                        });
                }
            });
    },

    /**
     * Returns a promise for activating/deactivating the endpoint with the specified id.
     *
     * @method setEndpointActivationState
     * @param {String} id the endpoint id.
     * @param {Boolean} active true or false to activate or deactivate the specific endpoint respectively.
     * @return the promise.
     */
    setEndpointActivationState: function setEndpointActivationState(id, active) {
        var _self = this;
        var deferred = Q.defer();
        var endpoint = _self._registry[id];
        if (endpoint) {
            _self._updateEndpointConfig(id, {
                    active: active
                })
                .then(function() {
                    return _self._storeStatusToHistory({
                        id: endpoint.id,
                        phase: active ? activationPhase : deactivationPhase,
                        fStatus: endpoint.status,
                        tStatus: undetermined
                    });
                }).then(function() {
                    var now = moment().utc();
                    endpoint.active = active;
                    endpoint.status = undetermined;
                    endpoint.timestamp = now;
                    endpoint.since = now;
                    deferred.resolve(endpoint);
                    logger.debug('Endpoint ' + id + ' activation state set to: ' + active);
                    if (active) {
                        _self._restartIfPassive();
                    }
                }).fail( // if one of the above operations failed, resolve this promise as rejected
                    deferred.reject
                );
        } else {
            logger.warn('Unable to set the activation state, endpoint \'' + id + '\' does not exist.');
            deferred.resolve(void 0);
        }
        return deferred.promise;
    },

    /**
     * Returns a prosmise for enabling/disabling the notification on erroneous status for the endpoint with the specified id.
     *
     * @method notifyOnErroneousStatus
     * @param {String} id the endpoint id.
     * @param {Boolean} notify true or false to enable or disable the notification respectively.
     * @return the promise.
     */
    notifyOnErroneousStatus: function notifyOnErroneousStatus(id, notify) {
        var deferred = Q.defer();
        var endpoint = this._registry[id];
        if (endpoint) {
            endpoint.notify = notify;
            this._updateEndpointConfig(id, {
                    notify: notify
                })
                .then(function(config) {
                    deferred.resolve(endpoint);
                    logger.debug('Endpoint \'' + id + '\' notification state set to: ' + notify);
                }).fail(
                    deferred.reject
                );
        } else {
        	deferred.resolve(void 0);
            logger.warn('Unable to set the notification state, endpoint \'' + id + '\' does not exist.');
        }
        return deferred.promise;
    },

    /**
     * Returns a promise for retrieving the resolution strategies
     *
     * @method getResolutionStrategies
     * @return the promise.
     */
    getResolutionStrategies: function getResolutionStrategies() {
    	// return Q.reject('Resolution strategies fatal error');
        return Q(this.options.resolutionStrategies);
    },

    /**
     * Returns a promise for retrieving the endpoint/s history status.
     *
     * @method getHistory
     * @param {Object} qParams the query options.
     * @return the promise.
     * @example __Query options details__.
     * ```
     * //Specify the "endpointId" to return the history of the specific endpoint,
     * //otherwise the history of all endpoints is returned
     * //Specify both 'from' and 'to' properties to return the history status for
     * //the specific time period, otherwise the complete history is returned.
     *
     * {
     *     endpointId:  <endpoint id>
     *     from:        <from time>     //defined in mills
     *     to:          <to time>       //defined in mills
     * }
     * ```
     */
    getHistory: function getHistory(qParams) {
        return Q.nbind(this.db.findHistoryForEndpoint, this.db)(qParams.endpointId, qParams.from, qParams.to);
    },

    /**
     * Returns promise for retrieving the watcher settings that can dynamically updated.
     * Currently only the communication interval can be set.
     *
     * @method getSettings
     * @return the promise.
     */
    getSettings: function getSettings() {
        return Q(_.pick(this.options, ['interval']));
    },

    /**
     * Returns a promise for updating watcherjs settings.
     *
     * @method updateSettings
     * @param {Object} settings the watcher settings (see at
     * __{{#crossLink "WatcherFactory/create:method"}}{{/crossLink}}__).
     * @return the promise.
     */
    updateSettings: function updateSettings(settings) {
        var deferred = Q.defer();
        var options = _.clone(this.options);
        _.extend(options, _.pick(settings, ['interval']));
        var errors = validator.validateServerConfig(options);
        settings = _.pick(options, ['interval']);
        if (_.isEmpty(errors)) {
            this.options = options;
            deferred.resolve(settings);
        } else {
            deferred.reject(errors);
        }
        return deferred.promise;
    },

    /**
     * Setup the Watcher.
     *
     * @private
     * @method _setup
     */
    _setup: function _setup() {
        logger.debug('Setting up watcher engine...');
        var _self = this;
        var options = _self.options,
            registry = _self._registry;

        var serverValErrors = validator.validateServerConfig(options);
        if (_.isEmpty(serverValErrors)) {

            _self.server = httpServerFactory.create({
                port: options.port,
                host: options.host,
                routesCallback: function routesCallback(app) {
                    var routes = require('./routes/watcher-http');
                    app.param('id', function(req, res, next, id) {
                        req.id = id;
                        next();
                    });
                    app.get('/endpoints', routes.endpoints(_self));
                    app.get('/endpoints/:id', routes.endpoint(_self));
                    app.post('/endpoints', routes.addEndpoint(_self));
                    app.delete('/endpoints/:id', routes.removeEndpoint(_self));
                    app.post('/endpoints/:id/activate', routes.endpointActivate(_self));
                    app.delete('/endpoints/:id/activate', routes.endpointDeactivate(_self));
                    app.post('/endpoints/:id/notify', routes.endpointEnableNotification(_self));
                    app.delete('/endpoints/:id/notify', routes.endpointDisableNotification(_self));
                    app.get('/resolution-strategies', routes.resolutionStrategies(_self));
                    app.get('/history/endpoints', routes.history(_self));
                    app.get('/history/endpoints/:id', routes.history(_self));
                    app.get('/history/endpoints/:from/:to', routes.history(_self));
                    app.get('/history/endpoints/:id/:from/:to', routes.history(_self));
                    app.get('/settings', routes.getSettings(_self));
                    app.put('/settings', routes.updateSettings(_self));
                    app.get('/console', function(req, res) {
                        res.render('console');
                    });

                    // put here the route extensions
                    _.each(options.routeExts, function(routeExt) {
                        app.use(routeExt.path, routeExt.route(registry));
                    });
                }
            });

            // Retrieve stored endpoints
            var storedEnpoints = this._getStoredEndpoints();
            // Concat stored and configured endpoints
            var endpoints = options.endpoints.concat(storedEnpoints);
            // create the array of addEndpoint promises
            var addProms = [];
            _.each(endpoints, function(endpoint) {
                addProms.push(_self.addEndpoint(endpoint, false));
            });

            if (!_.isEmpty(addProms)) {
                Q.allSettled(addProms)
                    .then(function(results) {
                        results.forEach(function(result, idx) {
                            if (result.state !== 'fulfilled') {
                                logger.error('Endpoint \'' + endpoints[idx].id + '\' addition failed: ' + result.reason);
                            }
                        });
                        _self.emitter.emit(wjsConfigured);
                        logger.info('Properties are successfully loaded: ' + JSON.stringify(options));
                    });
            } else {
                _self.emitter.emit(wjsConfigured);
            }

        } else {
            logger.error('validation errors:');
            _.each(serverValErrors, function(error) {
                logger.error(error);
            });
            _self.stop();
        }
        return _self;
    },

    /**
     * Starts the Watcher.
     *
     * @method start
     */
    start: function start() {
        var _self = this;
        if (!_self._stopped) {
            return;
        }
        _self._stopped = false;

        var connectionURL = _self.options.dbConnectionURL;
        if (connectionURL.indexOf('mongo') > -1) {
            _self.db = dbConnFactory.createMongoDBOperationsWrapper(connectionURL);
        } else {
            _self.db = dbConnFactory.createSQLiteDBOperationsWrapper(connectionURL);
        }

        _self._stopped = false;
        _self._setup();

        var port = _self.options.port,
            host = _self.options.host,
            interval = _self.options.interval;

        _self.server.start(function() {
            _self.emitter.emit(wjsReady);
            logger.info('Watcher is up and running (host/port/interval): (' +
                host + '/' + port + '/' + interval + ')');
            setTimeout(_.bind(_self._pollEndpoints, _self), 0).unref();
        });

        var io = _self.server.io;
        io.on('connection', function(socket) {
            socket.emit(wjsConnected, {
                message: 'connected with watcher.js'
            });
        });
        _self.emitter.on(endpointsStatusResolved, function() {
            io.emit(wjsEndpointsUpdated, {
                message: 'endpoints data updated!'
            });
        });

        return _self;
    },

    /**
     * Stops the Watcher.
     *
     * @method stop
     */
    stop: function stop() {
        logger.info('Shutting down Watcher app...');
        var _self = this;
        if (_self._stopped) {
            return;
        }
        _self._stopped = true;

        var entries = [];
        var now = moment.utc();
        var dbOpPromise = _self.getEndpoints()
            .then(function(endpoints) {
                _.each(endpoints, function(endpoint) {
                    entries.push({
                        endpointId: endpoint.id,
                        timestamp: now.valueOf(),
                        phase: terminationPhase,
                        statusTransition: {
                            from: endpoint.status,
                            to: undetermined
                        }
                    });
                });
                if (!_.isEmpty(entries)) {
                    return Q.nbind(_self.db.insertEndpointsHistory, _self.db)(entries)
                        .finally(function() {
                            _self.db.close();
                        });
                } else {
                    _self.db.close();
                }
            });

        dbOpPromise
            .then(function() {                
                _self.server.stop();
                logger.info('Give 2 secs for http server to shutdown');
                return Q.delay(2000)
                    .then(function() {
                            logger.info('Shutdown successfully performed');
                        },
                        function(err) {
                            logger.info('Shutdown performed with errors: ' + err);
                        }
                    );
            }).finally(function() {
                process.exit();
            });
    },

    /**
     * Add listener specific events of the Watcher.
     *
     * @method addListener
     * @param {String} event the event.
     * @param {Object} listener the listener.
     */
    addListener: function addListener(event, listener) {
        this.emitter.on(event, listener);
    }

});

/**
 * Watcher factory.
 * @class WatcherFactory
 * @static
 */
watcherFactory = {
    /**
     * Creates a Watcher instance.
     * @static
     * @method create
     * @param {Object} [options] the Watcher configuration.
     * @example __Options configuration details__.
     * Properties in _[]_ are optional. when not set, the default values are used - those in parentheses.
     * * Embedded http server configuration and service communication interval
     *  * [__host__] ('localhost'), the http server host name.
     *  * [__port__] (7777), the http server port.
     *  * [__interval__] (10000 ms), the service communication interval, at ms.
     *  * [__routeExts__], an array of user defined route extensions for building custom responses for the status requests.
     *  * [__resolutionStrategies__], an array of _unbound resolution strategy descriptors_.
     *  The descriptor is an object as follows:
     *  ```
     *  {
     *      id: <the resolution strategy id>, (must be unique)
     *      desc: <the resolution strategy description>
     *      implementation: <the implementation of resolution strategy> (see at resolvers to see the interface)
     *  }
     *  ```
     *  * [__nfOpts__], the notification options. Holds the information of the sender and the email addresses
     *  to receive email when erroneous service status occurs. The default sender is _admin@watcherjs.com_
     *  (if needed, configure your email account to not filter this sender as a spam). The object structure is:
     *  ```
     *  {
     *      sender: <the sender>, // default value: admin@watcherjs.com
     *      recipients: [<recipient1>, <recipient1>, ...] // the array of recipients email
     *  }
     *  ```
     *  * [__exportDir__] (_<`project directory`>/storage/_), the storage directory of dynamically created endpoints.
     *  * [__dbConnectionURL__] (_<`project directory`>/storage/history.sqlite_), the database connection url for the endpoints
     *  status history storage. Currently two databases can be used: the SQLite (used by default), where no extra installation is required,
     *  and the mongoDB that must be additionally installed by the user. In case of mongoDB, the connection URL must be explicitly
     *  defined (e.g. 'mongodb://localhost:27017/'), whereas for the SQLite, a different location than the default can be set
     *  (e.g. /tmp/enpoints.history). 
     *
     *
     * * Endpoint
     *  * __id__, the unique endpoint id.
     *  * __type__, the endpoint type.
     *  * [__host__] (localhost), the endpoint hostname, applied for __{{#crossLink "SocketConnector"}}{{/crossLink}}__.
     *  * [__port__] (9999), the endpoint port, applied for __{{#crossLink "SocketConnector"}}{{/crossLink}}__.
     *  * [__url__] (http://localhost:8080), the endpoint url, applied for __{{#crossLink "HttpConnector"}}{{/crossLink}}__.
     *  * [__timeout__](5000), the applied connector's connection timeout.
     *  * [__resolutionStrategy__] (__{{#crossLink "OnConnectionResolution"}}{{/crossLink}}__) the applied resolution
     *  strategy, either as an implementation of a resolution strategy or as a reference id of an unbound strategy.
     *  * [__active__] (true), whether or not the endpoint should be activated (enables or suspends
     *  the communication between the respective connector and the endpoint).
     *  * [__notify__] (false), used to indicate whether or not to receive email notifications for
     *  erroneous service status.
     *
     * More details at __{{#crossLinkModule "watcher"}}{{/crossLinkModule}}__.
     *
     * @return {Watcher} the Watcher instance.
     */
    create: function create(options) {
        var _options = {
            port: 7777,
            host: 'localhost',
            interval: 10000,
            routeExts: [],
            resolutionStrategies: [],
            nfOpts: {},
            exportDir: __dirname + '/../storage',
            // dbConnectionURL: 'mongodb://localhost:27017/',
            dbConnectionURL: './storage/history.sqlite',
            endpoints: []
        };
        options = options || {};
        _.defaults(options, _options);
        options.nfOpts.sender = options.nfOpts.sender || 'admin@watcherjs.com';
        options.exportDir = path.normalize(options.exportDir);
        return watcher.create({
            options: options,
            emitter: new events.EventEmitter()
        });
    }
};

/**
 * Exported module object
 */
module.exports = {
    watcherFactory: watcherFactory
};