/**
 * Created by jpsoroulas.
 */
define(['./module', 'underscore', 'viewHelper'], function(controllers, _, viewHelper) {
    'use strict';

    controllers.controller('MenuController', MenuController);
    MenuController.$inject = ['$modal', '$http', '$log', 'DialogService', 'EndpointService'];

    controllers.controller('AddEndpointController', AddEndpointController);
    AddEndpointController.$inject = ['$timeout', '$http', '$log', 'DialogService', 'EndpointService', 'ServicesConstants', '$rootScope', '$scope', '$modalInstance', 'resolutionStrategies'];

    controllers.controller('ShowSettingsController', ShowSettingsController);
    ShowSettingsController.$inject = ['$http', 'DialogService', 'EndpointService', '$scope', '$modalInstance', 'settings'];

    // Menu controller
    function MenuController($modal, $http, $log, dialogService, endpointService) {
        var _self = this;
        _self.addEndpoint = addEndpoint;
        _self.showSettings = showSettings;

        function addEndpoint() {
            $modal.open({
                animation: true,
                templateUrl: '/views/partials/endpoint-form.html',
                windowClass: 'small-modal window-endpoint-form',
                backdrop: false,
                resolve: {
                    // 'resolutionStrategies': ['$http', function ($http) {
                    'resolutionStrategies': function() {
                        return endpointService.getResolutionStrategies()
                            .then(function(response) {
                                    // response: data, status, headers, config
                                    return response.data;
                                },
                                function(err) {
                                    // error: data, status, headers, config
                                    dialogService.showErrorDialog(err.data, err.status, 'Resolution strategies retrieval');
                                    return false;
                                }
                            );
                    }
                },
                controller: AddEndpointController
            });
        }

        function showSettings() {
            $modal.open({
                animation: true,
                templateUrl: '/views/partials/settings.html',
                windowClass: 'small-modal window-settings',
                backdrop: false,
                resolve: {
                    // 'settings': ['$http', function($http) {
                    'settings': function() {
                        return endpointService.getSettings()
                            .then(function(response) {
                                    return response.data;
                                },
                                function(err) {
                                    dialogService.showErrorDialog(err.data, err.status, 'Settings retrieval');
                                    return false;
                                }
                            );
                    }
                },
                controller: ShowSettingsController
            });
        }
    }

    // Menu > Add new endpoint modal controller
    function AddEndpointController($timeout, $http, $log, dialogService, endpointService, constants, $rootScope, $scope, $modalInstance, resolutionStrategies) {
        var _self = this;
        $scope.addEndpointVm = _self;
        _self.submit = submit;
        _self.cancel = cancel;
        _self.resolutionStrategies = resolutionStrategies;
        _self.newEndpoint = {
            active: false,
            notify: false,
            type: 'socket'
        };

        //If an error is occurred
        if (!resolutionStrategies) {
            $timeout(function() {
                $modalInstance.dismiss('error');
            }, 0);
        }

        function submit(valid) {
            if (!valid) {
                return;
            }
            var newEndpoint = _self.newEndpoint;
            endpointService.addEndpoint(newEndpoint)
                .then(function(response) {
                        $modalInstance.close();
                        $rootScope.$broadcast(constants.events.endpointAdded, newEndpoint);
                    },
                    function(err) {
                        $modalInstance.close(err.status);
                        dialogService.showErrorDialog(err.data, err.status, 'Endpoint persistence');
                    });
        }

        function cancel(result) {
            $modalInstance.dismiss(result);
        }
    }

    // Menu > Settings controller
    function ShowSettingsController($http, dialogService, endpointService, $scope, $modalInstance, settings) {
        var _self = this;
        $scope.settingsVm = _self;
        _self.settings = settings;
        _self.settingsOriginal = _.clone(settings);
        _self.submit = submit;
        _self.cancel = cancel;

        function submit(valid) {
            var settings = _self.settings;
            if ((_self.settingsOriginal.interval === settings.interval) || !valid) {
                $modalInstance.close();
                return;
            }
            endpointService.updateSettings(settings)
                .then(function(response) {
                        $modalInstance.close();
                    },
                    function(err) {
                        $modalInstance.close(err.status);
                        dialogService.showErrorDialog(err.data, err.status, 'Settings persistence');
                    });
        }

        function cancel(result) {
            $modalInstance.dismiss(result);
        }
    }

});