/**
 * Created by jpsoroulas.
 */
define(['./module', 'underscore', 'rx'], function(services, _, Rx) {
    'use strict';

    services.service('EndpointService', EndpointService);
    EndpointService.$inject = ['$http', '$log'];

    function EndpointService($http, $log) {
        var _self = this;
        _self.getEndpoints = getEndpoints;
        _self.changeActivationState = changeActivationState;
        _self.deleteEndpoint = deleteEndpoint;
        _self.getEndpointHistory = getEndpointHistory;
        _self.changeNotificationState = changeNotificationState;
        _self.getResolutionStrategies = getResolutionStrategies;
        _self.getSettings = getSettings;
        _self.addEndpoint = addEndpoint;
        _self.updateSettings = updateSettings;

        function getEndpoints() {
            return Rx.Observable.fromPromise($http.get('/endpoints/'));
        }

        function changeActivationState(endpointId, active) {
            if (active) {
                return Rx.Observable.fromPromise($http.post('/endpoints/' + endpointId + '/activate'));
            }
            return Rx.Observable.fromPromise($http.delete('/endpoints/' + endpointId + '/activate'));
        }

        function changeNotificationState(endpointId, notify) {
            if (notify) {
                return Rx.Observable.fromPromise($http.post('/endpoints/' + endpointId + '/notify'));
            }
            return Rx.Observable.fromPromise($http.delete('/endpoints/' + endpointId + '/notify'));
        }

        function deleteEndpoint(endpointId) {
            return Rx.Observable.fromPromise($http.delete('/endpoints/' + endpointId));
        }

        function getEndpointHistory(endpointId, from, to) {
            return Rx.Observable.fromPromise($http.get('/history/endpoints/' + endpointId + '/' + from + '/' + to));
        }

        function getResolutionStrategies() {
            return $http.get('/resolution-strategies');
        }

        function getSettings() {
            return $http.get('/settings');
        }

        function addEndpoint(endpoint) {
            return $http.post('/endpoints', endpoint);
        }

        function updateSettings(settings) {
            return $http.put('/settings', settings);
        }
    }
});