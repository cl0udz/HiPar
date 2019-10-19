/**
 * Created by jpsoroulas.
 */
define(['./module', 'underscore', 'viewHelper'], function(services, _, viewHelper) {
    'use strict';

    services.service('DialogService', DialogService);
    DialogService.$inject = ['$modal', '$log'];

    function DialogService($modal, $log) {
        var _self = this;
        _self.showResponseDialog = showResponseDialog;
        _self.showDeletionDialog = showDeletionDialog;
        _self.showEndpointInfo = showEndpointInfo;
        _self.showEndpointHistory = showEndpointHistory;
        _self.showErrorDialog = showErrorDialog;

        var _defOptions = {
            animation: true,
            templateUrl: '/views/partials/dialog.html',
            windowClass: 'small-modal',
            backdrop: false,
            isConfirmation: true,
            title: 'Confirm action',
            message: 'Please confirm the action',
            confirmedTxt: 'OK',
            cancelTxt: 'CANCEL'
        };

        function _showDialog(dialogOptions) {
            var options = _.extend({}, _defOptions, dialogOptions);
            if (_.isUndefined(options.controller)) {
                options.controller = function($scope, $modalInstance) {
                    $scope.dialogOptions = options;
                    $scope.ok = function(result) {
                        $modalInstance.close(result);
                    };
                    if (options.isConfirmation) {
                        $scope.cancel = function(reason) {
                            $modalInstance.dismiss(reason);
                        };
                    }
                };
            }
            return $modal.open(options).result;
        }

        function showResponseDialog(data, status, desc) {
            var message;
            if (status.toString().startsWith('2')) {
                message = desc + ' succeeded.';
            } else {
                message = viewHelper.generateErrorMessage(data, status, desc);
            }
            _showDialog({
                message: message,
                isConfirmation: false,
                title: 'info'
            });
        }

        function showErrorDialog(data, status, desc) {
            _showDialog({
                message: viewHelper.generateErrorMessage(data, status, desc),
                isConfirmation: false,
                title: 'info'
            });
        }

        function showEndpointInfo(endpoint) {
            $modal.open({
                animation: true,
                templateUrl: '/views/partials/endpoint-info.html',
                windowClass: 'small-modal',
                backdrop: false,
                controller: function($scope, $modalInstance) {
                    $scope.endpoint = endpoint;
                    $scope.ok = function(result) {
                        $modalInstance.close(result);
                    };
                }
            });
        }

        function showEndpointHistory(endpoint) {
            $modal.open({
                animation: true,
                templateUrl: '/views/partials/endpoint-history.html',
                windowClass: 'large-modal window-endpoint-history',
                backdrop: false,
                controller: 'HistoryController',
                resolve: {
                    'endpoint': function() {
                        return endpoint;
                    }
                }
            });
        }

        function showDeletionDialog(endpoint) {
            return _showDialog({
                message: 'Delete endpoint \'' + endpoint.id + '\' ?',
                title: 'Confirm deletion'
            });
        }

    }
});