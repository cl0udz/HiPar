/**
 * Created by jpsoroulas.
 */
define(['./module', 'angular', 'underscore'], function (directives, ng, _) {
    'use strict';

    directives.directive('endpointsDuplication', endpointsDuplication);
    endpointsDuplication.$inject = ['SharedDataService'];

    function endpointsDuplication(sharedDataService) {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                ngModel.$validators.myValidator = function () {
                    var endpoints = sharedDataService.get('endpoints');
                    var endpointId = ng.element(element).val();
                    return _.isEmpty(_.findWhere(endpoints, {id: endpointId}));
                };
            }
        };
    }

});