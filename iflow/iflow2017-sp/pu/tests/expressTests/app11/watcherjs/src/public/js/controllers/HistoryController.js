/**
 * Created by jpsoroulas.
 */
define(['./module', 'rx', 'underscore', 'moment', 'viewHelper', 'highcharts'],
    function(controllers, Rx, _, moment, viewHelper, Highcharts) {
        'use strict';

        controllers.controller('HistoryController', HistoryController);
        HistoryController.$inject = ['$scope', '$modalInstance', 'endpoint', 'EndpointService', 'DialogService', '$timeout', '$log'];

        function HistoryController($scope, $modalInstance, endpoint, endpointService, dialogService, $timeout, $log) {
            var dayInMills = 86400000;
            var _self = $scope.historyController = this;
            _self.openFromDatepicker = openFromDatepicker;
            _self.openToDatepicker = openToDatepicker;
            _self.onFromDateChange = onFromDateChange;
            _self.onToDateChange = onToDateChange;
            _self.onTimeStepChanged = onTimeStepChanged;
            _self.historyForward = historyForward;
            _self.historyBackward = historyBackward;
            _self.resetTimeRange = resetTimeRange;
            _self.jumpToSelectedRange = jumpToSelectedRange;
            _self.close = close;

            Highcharts.setOptions({
                global: {
                    useUTC: true
                }
            });

            //$scope.chartOptions = ...
            $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            $scope.format = $scope.formats[3];
            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1,
                'show-weeks': false
            };
            $scope.timeSteps = [{
                id: dayInMills,
                desc: '1 day'
            }, {
                id: 7 * dayInMills,
                desc: '7 days'
            }, {
                id: 30 * dayInMills,
                desc: '30 days'
            }];
            $scope.timeStep = dayInMills;

            initChart();

            // draw after the directive highcharts initialization
            $timeout(function() {
                redrawChart();
            }, 0);

            function initChart() {
                $scope.chartOptions = viewHelper.buildHistoryChartOptions({
                    title: 'Endpoint ' + '\'' + endpoint.id + '\''
                });
                calculateTimeRange($scope.timeStep);
            }

            function calculateTimeRange(offset) {
                var now = moment.utc().valueOf();
                $scope.fromDate = now - offset;
                $scope.toDate = now;
            }

            function resetTimeRange() {
                calculateTimeRange($scope.timeStep);
                redrawChart();
            }

            function openFromDatepicker($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.fromDatepickerOpened = true;
            }

            function openToDatepicker($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.toDatepickerOpened = true;
            }

            function onFromDateChange() {
                $scope.fromDate = $scope.fromDate.getTime();
            }

            function onToDateChange() {
                $scope.toDate = $scope.toDate.getTime();
            }

            function jumpToSelectedRange() {
                var now = moment.utc().valueOf();
                var from = moment($scope.fromDate).utc().startOf('day').valueOf();
                // var to  = moment($scope.toDate).add(1, 'd').utc().startOf('day').valueOf();
                var to = moment($scope.toDate).utc().endOf('day').valueOf();

                from = (from < now) ? from : now;
                to = (to < now) ? to : now;

                if (from > to) {
                    $scope.fromDate = to;
                    $scope.toDate = from;
                } else {
                    $scope.fromDate = from;
                    $scope.toDate = to;
                }
                $scope.timeStep = to - from;
                redrawChart();
            }

            function onTimeStepChanged($event) {
                calculateTimeRange($scope.timeStep);
                redrawChart();
            }

            function historyForward(event) {
                var offset = $scope.timeStep;
                $scope.fromDate = $scope.fromDate + offset;
                $scope.toDate = $scope.toDate + offset;
                redrawChart();
            }

            function historyBackward(event) {
                var offset = $scope.timeStep;
                $scope.fromDate = $scope.fromDate - offset;
                $scope.toDate = $scope.toDate - offset;
                redrawChart();
            }


            function onHistorySuccess(min, max, rawData) {
                var chart = $scope.chart;
                _.extend(chart.options.xAxis[0], {
                    min: min,
                    max: max
                });
                var data = viewHelper.buildHistoryChartData(rawData, min, max);
                _.each(data, function(value, key) {
                    var series = chart.get(key);
                    if (!series) {
                        chart.addSeries(value);
                        series = chart.get(key);
                    }
                    series.setData(value.data, false, false, false);
                });
                chart.xAxis[0].update();
                chart.redraw();
            }

            function redrawChart() {
                var min = $scope.fromDate;
                var max = $scope.toDate;
                var lowerLimit = min - 3 * 30 * dayInMills;
                var upperLimit = max + 3 * 30 * dayInMills;
                endpointService.getEndpointHistory(endpoint.id, lowerLimit, upperLimit)
                    .subscribe(function(response) {
                            onHistorySuccess(min, max, response.data);
                        },
                        function(error) {
                            dialogService.showResponseDialog(error.data, error.status, 'Endpoint history retrieval');
                        });
            }

            function close() {
                $modalInstance.close();
            }
        }
    });