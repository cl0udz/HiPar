(function() {

    var utils = require("../TestUtils");

    var events = require('events');
    var eventEmitter = new events.EventEmitter();

    utils.addCallbackSource(eventEmitter.on, 1, 0, utils.HIGH_LEVEL);

    var ringBell = function ringBell(a) {
        utils.sink(a[0].a.password); // VIOLATION
    };

    eventEmitter.on('doorOpen', ringBell);
    eventEmitter.emit('doorOpen', [{a:{password:"abc"}}]);

})();
