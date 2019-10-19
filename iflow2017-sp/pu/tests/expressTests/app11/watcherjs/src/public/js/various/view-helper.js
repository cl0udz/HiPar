/**
 * Created by jpsoroulas.
 */
define(['underscore', 'moment'], function(_, moment) {
    'use strict';

    function generateErrorMessage(response, status, operation) {
        var details = '';
        var error = response.error;
        if (_.isArray(error)) {
            _.each(error, function(err) {
                details += (err + ' ');
            });
        } else {
            details = error;
        }
        return operation + ' failed! ' + 'Status: ' + status + ', error: ' + details;
    }

    function buildHistoryChartOptions(options) {
        var hoursInMills = 3600000;
        options = options || {};
        return {
            chart: {
                type: 'area',
                renderTo: 'history-chart-container',
                zoomType: 'xy'
            },
            title: {
                text: options.title || 'Endpoint history',
                style: {
                    color: '#1796e6',
                    fontWeight: 'bold'
                }
            },
            xAxis: [_.extend({
                title: {
                    text: 'time'
                },
                //gridLineWidth: 0,
                type: 'datetime',
                tickInterval: hoursInMills,
                minTickInterval: hoursInMills,
                labels: {
                    formatter: function() {
                        var timestamp = moment(this.value).utc();
                        if (timestamp.hours() === 0) {
                            return '<span style="color: red; font-weight: bold;">' + timestamp.format('MM/DD') + '</span>';
                        } else {
                            return timestamp.format('HH:mm');
                        }
                    }
                }
            }, options.xAxis)],
            yAxis: [{
                title: {
                    text: 'Status'
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                min: 0,
                max: 10
            }],
            tooltip: {
                formatter: function() {
                    return 'Time: <b>' + moment(this.x).utc().format('HH:mm') +
                        '</b>, status: <b>' + this.series.name + '</b>';
                    //return 'Time: <b>' + moment(this.x).utc().format('HH:mm') + '</b>';
                }
            },
            plotOptions: {
                column: {
                    pointRange: hoursInMills
                },
                series: {
                    animation: false,
                    pointStart: hoursInMills,
                    pointInterval: hoursInMills
                },
                area: {
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            }
        };
    }

    function buildHistoryChartData(rawData, min, max) {
        var yValues = {
            up: 8,
            down: 6,
            unreachable: 5,
            undetermined: 1
        };

        var seriesData = {
            up: {
                id: 'up',
                name: 'up',
                //color: '#008B45',
                color: 'green',
                data: []
            },
            down: {
                id: 'down',
                name: 'down',
                color: '#ffa69e',
                data: []
            },
            unreachable: {
                id: 'unreachable',
                name: 'unreachable',
                color: '#ff433f',
                //color: 'red',
                data: []
            },
            undetermined: {
                id: 'undetermined',
                name: 'undetermined',
                color: '#b6ddef',
                data: []
            }
        };

        var fdata;
        if (!_.isEmpty(rawData)) {
            fdata = _.filter(rawData, function(rec) {
                return rec.timestamp >= min && rec.timestamp <= max;
            });

            var lel = _.last(fdata);
            if (lel) {
                var lIdx = _.findIndex(rawData, function(rec) {
                    return lel.timestamp === rec.timestamp;
                });
                if (lIdx && (lIdx < (_.size(rawData) - 1))) {
                    fdata.push(rawData[lIdx + 1]);
                }
            }

            var fel = _.first(fdata);
            if (fel) {
                var fIdx = _.findIndex(rawData, function(rec) {
                    return fel.timestamp === rec.timestamp;
                });
                if (fIdx > 0) {
                    fdata.unshift(rawData[fIdx - 1]);
                }
            }
        }


        var previousRec;

        _.each(fdata, function(rec) {
            var fStatus = rec.statusTransition.from;
            var tStatus = rec.statusTransition.to;
            var erroneous = false;
            if (inRegistration(rec)) {
                seriesData[fStatus].data.push({
                    x: null,
                    y: null
                });
            }

            erroneous = false;
            if (inDeactivation(rec)) {
                if (previousRec) {
                    if (!inProgress(previousRec) && !inRegistration(previousRec)) { // handle error case
                        seriesData[fStatus].data.push({
                            x: null,
                            y: null
                        });
                        erroneous = true;
                    }
                }
                if (!erroneous) { // normal
                    seriesData[fStatus].data.push({
                        x: rec.timestamp,
                        y: yValues[fStatus]
                    });
                    seriesData[fStatus].data.push({
                        x: null,
                        y: null
                    });
                }
            }

            erroneous = false;
            if (inActivation(rec)) {
                if (previousRec) {
                    if (!inDeactivation(previousRec) && !inRegistration(previousRec)) { //handle error case
                        seriesData[fStatus].data.push({
                            x: null,
                            y: null
                        });
                        erroneous = true;
                    }
                }
                if (!erroneous) { // normal
                    seriesData[tStatus].data.push({
                        x: rec.timestamp,
                        y: yValues[tStatus]
                    });
                }
            }

            erroneous = false;
            if (inProgress(rec)) {
                if (previousRec) {
                    if (inTermination(previousRec) || inDeactivation(previousRec)) { //handle error case
                        seriesData[fStatus].data.push({
                            x: null,
                            y: null
                        });
                        erroneous = true;
                    }
                }
                if (!erroneous) {
                    seriesData[fStatus].data.push({
                        x: rec.timestamp,
                        y: yValues[fStatus]
                    });
                    seriesData[fStatus].data.push({
                        x: null,
                        y: null
                    });
                    seriesData[tStatus].data.push({
                        x: rec.timestamp,
                        y: yValues[tStatus]
                    });
                }
            }

            if (inTermination(rec)) {
                // normal
                seriesData[fStatus].data.push({
                    x: rec.timestamp,
                    y: yValues[fStatus]
                });
                seriesData[fStatus].data.push({
                    x: null,
                    y: null
                });
                seriesData[tStatus].data.push({
                    x: rec.timestamp,
                    y: yValues[tStatus]
                });
            }
            previousRec = rec;
        });

        //complete the graph between the last point of the series and the max of the time range
        var recToStatus;
        if (previousRec) {
            if (!inTermination(previousRec) && !inDeactivation(previousRec)) {
                recToStatus = previousRec.statusTransition.to;
                seriesData[recToStatus].data.push({
                    x: max,
                    y: yValues[recToStatus]
                });
            }
        }

        return seriesData;
    }

    function inRegistration(rec) {
        return rec.phase === 'registrationPhase';
    }

    function inActivation(rec) {
        return rec.phase === 'activationPhase';
    }

    function inDeactivation(rec) {
        return rec.phase === 'deactivationPhase';
    }

    function inProgress(rec) {
        return rec.phase === 'inProgressPhase';
    }

    function inTermination(rec) {
        return rec.phase === 'terminationPhase';
    }


    return {
        generateErrorMessage: generateErrorMessage,
        // createDialogInfoCallback: createDialogInfoCallback,
        buildHistoryChartOptions: buildHistoryChartOptions,
        buildHistoryChartData: buildHistoryChartData
    };
});