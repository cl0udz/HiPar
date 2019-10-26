(function() {

    var utils = require("../TestUtils");

    var events = require('events');
    var eventEmitter = new events.EventEmitter();

    utils.addCallbackSource(eventEmitter.on, 1, 1, utils.HIGH_LEVEL);

    var ringBell = function ringBell(a) {
        utils.sink(a); // nothing here
    };

    eventEmitter.on('doorOpen', ringBell);
    eventEmitter.emit('doorOpen', 23);

})();
