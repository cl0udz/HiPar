/**
 * Created by jpsoroulas.
 */

/**
 * ### Overview
 * Provides the utilities.
 * Exported objects:
 * * __{{#crossLink "EventDispatcherFactory"}}{{/crossLink}}__
 * * __{{#crossLink "EventDispatcher"}}{{/crossLink}}__
 * * __{{#crossLink "TransactionalExecutor"}}{{/crossLink}}__
 *
 * ### API Usage samples
 *    ```javascript
 * //eventDispatcher
 * var dispatcher =  eventDispatcher.create({
 *     emitter: new events.EventEmitter()
 * });
 *    ```
 *
 *    ```javascript
 * //eventDispatcherFactory
 * var dispatcher = eventDispatcherFactory.create();
 *    ```
 * @module utils
 */
'use strict';
var events = require('events');
var _ = require('underscore');
var async = require('async');
var stampit = require('stampit');
//var fs = require('fs');
//var async = require('async');

var eventDispatcher, eventDispatcherFactory, transactionalExecutor;

/**
 * Exposes the event emitter functionality (a delegator).
 *
 * @class EventDispatcher
 */
eventDispatcher = stampit().state({
    emitter: void 0
}).enclose(function () {
    /**
     * Adds a listener to the end of the listeners array for the specified event. No checks are
     * made to see if the listener has already been added.
     *
     * @method on
     * @param {String} event the event.
     * @param {Function} listener the event listener.
     */
    this.on = function on(event, listener) {
        this.emitter.on(event, listener);
    };

    /**
     * Execute each of the listeners in order with the supplied arguments.
     *
     * @method emit
     * @param {String} event the event.
     * @param {Function} [, l1][, l2][, ...] the listeners.
     * @return {boolean} true  if event had listeners, false otherwise.
     */
    this.emit = function emit(event) {
        // if you do not set as context the this.emitter the apply does not work
        return this.emitter.emit.apply(this.emitter, _.toArray(arguments));
        // or simply call
        //return this.emitter.emit.apply(this.emitter, arguments);
    };

    /**
     * Removes all listeners, or those of the specified event.
     *
     *  @method removeAllListeners
     *  @param {String} [event] the event.
     */
    this.removeAllListeners = function removeAllListeners(event) {
        this.emitter.removeAllListeners(event);
    };

});

/**
 * EventDispatcher factory
 * @class EventDispatcherFactory
 * @static
 */
eventDispatcherFactory = {
    /**
     * creates an EventDispatcher instance.
     * For each instance a delegate emitter is created.
     * @static
     * @method create
     * @return {EventDispatcher} the EventDispatcher instance.
     */
    create: function create() {
        return eventDispatcher.create({
            emitter: new events.EventEmitter()
        });
    }
};

/**
 * Enables functions transactional execution
 * @class TransactionalExecutor
 * @static
 */
transactionalExecutor = {
    /**
     * Executes the provided operations transactional.
     * @static
     * @method execute
     * @param {Array} ops the array of functions for execution.
     * @param {Function} [onCompletedCallback] on transaction complete callback.
     * @param {String} [type] the async type model, 'series' or 'waterfall'.
     */
    execute: function execute(ops, onCompletedCallback, type) {
        onCompletedCallback = onCompletedCallback || _.noop;
        type = type || 'series';
        var asyncFun = (type === 'series' ? async.series : async.waterfall);
        var cc = 0;
        var exeOps = _.map(_.pluck(ops, 'execute'), function (exOp) {
            return _.wrap(exOp, function (func, callback) {
                cc++;
                func(callback);
            });
        });
        asyncFun(exeOps, function (errors, results) {
            if (errors) {
                for (var i = 0; i < cc - 1; i++) {
                    ops[i].rollback();
                }
            }
            onCompletedCallback(errors, results);
        });
    }
};

module.exports = {
    eventDispatcher: eventDispatcher,
    eventDispatcherFactory: eventDispatcherFactory,
    transactionalExecutor: transactionalExecutor
};
