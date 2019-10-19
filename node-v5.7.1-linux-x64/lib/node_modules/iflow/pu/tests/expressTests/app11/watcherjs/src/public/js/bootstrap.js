/**
 * Created by john on 7/15/15.
 */
// Base on: https://github.com/StarterSquad/startersquad.com/tree/master/examples/angularjs-requirejs-2
/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require',
    'angular',
    'rx',
    'ui.bootstrap',
    'app'
], function(require, ng, Rx) {
    'use strict';

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */

    // https://github.com/Reactive-Extensions/rx.angular.js/blob/v0.0.14/dist/rx.angular.js
    // https://xgrommx.github.io/rx-book/content/how_do_it/angular_with_rxjs.html
    Rx.Observable.$watch = function(scope, watchExpression, objectEquality) {
        return Rx.Observable.create(function(observer) {
            // Create function to handle old and new Value
            function listener(newValue, oldValue) {
                observer.onNext({
                    oldValue: oldValue,
                    newValue: newValue
                });
            }

            // Returns function which disconnects the $watch expression
            return scope.$watch(watchExpression, listener, objectEquality);
        });
    };

    // Creates an observable from a given function.
    Rx.Observable.$createObservableFunction = function(controller, fnName, listener) {
        return Rx.Observable.create(function(observer) {
            controller[fnName] = function() {
                if (listener) {
                    observer.onNext(listener.apply(this, arguments));
                } else if (arguments.length === 1) {
                    observer.onNext(arguments[0]);
                } else {
                    observer.onNext(arguments);
                }
            };

            return function() {
                // Remove our listener function from the controller.
                delete controller[fnName];
            };
        }).publish().refCount();
    };

    require(['domReady!'], function(document) {
        ng.bootstrap(document, ['app']);
    });
});