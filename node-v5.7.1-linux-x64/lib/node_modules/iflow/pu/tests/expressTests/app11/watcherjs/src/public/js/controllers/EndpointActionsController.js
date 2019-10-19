/**
 * Created by jpsoroulas.
 */
define(['./module', 'rx', 'socket.io', 'underscore', 'moment', 'viewHelper', 'highcharts', 'moment-duration-format'],
    function(controllers, Rx, io, _, moment, viewHelper, Highcharts) {
        'use strict';

        controllers.controller('EndpointActionsController', EndpointActionsController);
        EndpointActionsController.$inject = ['$scope', '$http', '$log', '$location', '$modal', 'EndpointService', 'DialogService', 'SharedDataService', 'ServicesConstants'];

        function EndpointActionsController($scope, $http, $log, $location, $modal, endpointService, dialogService, sharedDataService, constants) {
            var _self = this;
            _self.showEndpointInfo = showEndpointInfo;
            _self.showEndpointHistory = showEndpointHistory;
            $scope.endpointsStats = {};
            $scope.isCollapsed = true;
            $scope.consoleStatus = 'disconnected';

            function refreshEndpoints() {
                endpointService.getEndpoints()
                    .subscribe(
                        function(response) {
                            var endpoints = response.data;
                            _.each(endpoints, function(endpoint) {
                                var timestamp = moment(endpoint.timestamp).utc();
                                var since = moment(endpoint.since);
                                endpoint.timestamp = timestamp.format('MMMM Do YYYY, HH:mm:ss');
                                endpoint.since = moment.duration(timestamp.diff(since)).format('d[d],h[h]:m[m]:s[s]');
                            });
                            $scope.endpoints = endpoints;
                            sharedDataService.put(constants.sharedDataKeys.endpoints, $scope.endpoints);
                            updateStats();
                        },
                        function(err) {
                            dialogService.showResponseDialog(err.data, err.status, 'Endpoints retrieval');
                        });
            }

            $scope.$on(constants.events.endpointAdded, function(event, newEndpoint) {
                refreshEndpoints();
            });

            refreshEndpoints();

            Rx.Observable.$createObservableFunction(_self, 'toggleActivation')
                .flatMapLatest(function(endpoint) {
                    return endpointService.changeActivationState(endpoint.id, !endpoint.active)
                        .catch(function(err) {
                            err.endpointId = endpoint.id;
                            return Rx.Observable.just({
                                error: err
                            });
                        });
                })
                .subscribe(
                    function(response) {
                        var err = response.error;
                        if (!err) {
                            var data = response.data;
                            var endpoint = _.findWhere($scope.endpoints, {
                                id: data.id
                            });
                            endpoint.active = data.active;
                            endpoint.status = data.status;
                            endpoint.since = '0s';
                        } else {
                            var desc = 'Change activation state for endpoint ' + err.endpointId;
                            dialogService.showResponseDialog(err.data, err.status, desc);
                        }
                    });

            Rx.Observable.$createObservableFunction(_self, 'toggleNotification')
                .flatMapLatest(function(endpoint) {
                    return endpointService.changeNotificationState(endpoint.id, !endpoint.notify)
                        .catch(function(err) {
                            err.endpointId = endpoint.id;
                            return Rx.Observable.just({
                                error: err
                            });
                        });
                })
                .subscribe(
                    function(response) {
                        var err = response.error;
                        if (!err) {
                            var data = response.data;
                            var endpoint = _.findWhere($scope.endpoints, {
                                id: data.id
                            });
                            endpoint.notify = data.notify;
                        } else {
                            var desc = 'Change notification state for endpoint ' + err.endpointId;
                            dialogService.showResponseDialog(err.data, err.status, desc);
                        }
                    });

            Rx.Observable.$createObservableFunction(_self, 'deleteEndpoint')
                .flatMapLatest(function(endpoint) {
                    return Rx.Observable.fromPromise(dialogService.showDeletionDialog(endpoint))
                        .map(function() { // ok button is pressed
                            return endpoint;
                        }).catch(function(e) { // cancel button is pressed
                            return Rx.Observable.empty().defaultIfEmpty();
                        });
                })
                .flatMap(function(endpoint) {
                    if (endpoint) {
                        return endpointService
                            .deleteEndpoint(endpoint.id)
                            .catch(function(err) {
                                err.endpointId = endpoint.id;
                                return Rx.Observable.just({
                                    error: err
                                });
                            });
                    }
                    return Rx.Observable.empty().defaultIfEmpty();
                })
                .subscribe(
                    function(response) {
                        if (response) {
                            var err = response.error;
                            if (!err) {
                                var endpointId = response.data.id;
                                $scope.endpoints = _.filter($scope.endpoints, function(ep) {
                                    return endpointId !== ep.id;
                                });
                                updateStats();
                                sharedDataService.put(constants.sharedDataKeys.endpoints, $scope.endpoints);
                            } else {
                                var desc = 'Endpoint deletion ' + err.endpointId;
                                dialogService.showResponseDialog(err.data, err.status, desc);
                            }
                        }
                    });

            function showEndpointInfo(endpoint) {
                dialogService.showEndpointInfo(endpoint);
            }

            function showEndpointHistory(endpoint) {
                dialogService.showEndpointHistory(endpoint);
            }

            function updateStats() {
                var endpoints = $scope.endpoints,
                    total = endpoints.length,
                    ups = 0,
                    errs = 0,
                    undets = 0,
                    upRatio = 100,
                    errRatio = 0;
                _.each(endpoints, function(endpoint) {
                    var status = endpoint.status;
                    if ('up' === status) {
                        ups++;
                    } else if ('undetermined' === status) {
                        undets++;
                    } else {
                        errs++;
                    }
                });
                if (total > 0) {
                    upRatio = ((ups / total) * 100).toFixed(1);
                    errRatio = ((errs / total) * 100).toFixed(1);
                }
                _.extend($scope.endpointsStats, {
                    'total': total,
                    'ups': ups,
                    'errs': errs,
                    'undets': undets,
                    'upRatio': upRatio,
                    'errRatio': errRatio
                });
            }

            var socket = io.connect($location.path());
            socket.on('wjs-connected', function(data) {
                $scope.$apply(function() {
                    $scope.consoleStatus = 'connected';
                    $scope.consoleMessage = 'connected';
                });
            });

            socket.on('connect_error', function(error) {
                $scope.$apply(function() {
                    $scope.consoleStatus = 'disconnected';
                    $scope.consoleMessage = 'disconnected, wait to restore the connection';
                });
            });

            socket.on('wjs-endpoints-updated', function(data) {
                refreshEndpoints();
            });
        }
    });