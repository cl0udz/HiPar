/**
 * Created by jpsoroulas.
 */
define(['./module'], function (services) {
    'use strict';

    services.service('SharedDataService', SharedDataService);
    SharedDataService.$inject = ['$rootScope'];

    function SharedDataService($rootScope) {
        var _self = this;
        _self.store = {};
        _self.put = put;
        _self.get = get;

        function put(key, value) {
            _self.store[key] = value;
        }

        function get(key) {
            return _self.store[key];
        }
    }
});


