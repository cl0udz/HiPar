/**
 * Created by jpsoroulas.
 */
define(['./module'], function (services) {
    'use strict';

    services.constant('ServicesConstants', servicesConstants());

    function servicesConstants() {
        return {
            sharedDataKeys: {
                endpoints: 'endpoints'
            },
            events: {
                endpointAdded: 'wc.endpoint.added'
            }
        };
    }
});



