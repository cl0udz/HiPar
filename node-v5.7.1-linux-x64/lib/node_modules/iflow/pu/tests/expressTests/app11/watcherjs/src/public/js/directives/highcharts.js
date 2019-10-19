/**
 * Created by jpsoroulas.
 */
define(['./module', 'angular', 'highcharts'], function (directives, ng, Highcharts) {
    'use strict';

    directives.directive('highcharts', highcharts);

    function highcharts() {
        return {
            scope: false,
            link: function (scope, el, attrs) {
                var options = scope.$eval(attrs.highcharts);
                options.chart.renderTo = el[0];
                var chart = new Highcharts.Chart(options);
                scope.chart = chart;
                return chart;
            }
        };
    }

});