require.config({
    baseUrl: 'js',
    paths: {
        'angular': 'lib/angular.min', //v1.4.2
        'angular-route': 'lib/angular-route.min', //v1.4.2
        'rx': 'lib/rx.all.min', //v3.1.2, note that the name should be 'rx'
        'domReady': 'lib/domReady', //https://github.com/requirejs/domReady
        'ui.bootstrap': 'lib/ui-bootstrap-tpls.min', //v0.13.0
        //'jquery': 'lib/jquery.min', //1.10.2
        //'jquery': 'lib/jquery-2.1.4.min', //2.1.4
        'hcadapter': 'lib/standalone-framework', //v4.1.5
        'highcharts': 'lib/highcharts', //v4.1.5
        'underscore': 'lib/underscore-min', //v1.8.2
        'moment': 'lib/moment.min', //v2.10.2
        'moment-duration-format': 'lib/moment-duration-format',
        'socket.io': 'lib/socket.io.min', //v1.3.5
        'viewHelper': 'various/view-helper'
    },
    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'ui.bootstrap': {
            deps: ['angular']
        },
        'underscore': {
            exports: '_'
        },
        'hcadapter': {
            exports: 'HighchartsAdapter'
        },
        'highcharts': {
            deps: ['hcadapter'],
            exports: 'Highcharts'
        },
        'moment-duration-format': ['moment']
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});