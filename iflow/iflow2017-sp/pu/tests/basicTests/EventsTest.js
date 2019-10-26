(function() {

    var utils = require("../TestUtils");
    var events = require('events');

    var eventEmitter = new events.EventEmitter();

    var ringBell = function ringBell(a) {
        console.log(a);
        utils.sink(a); // VIOLATION
    };

    eventEmitter.on('doorOpen', ringBell);
    eventEmitter.emit('doorOpen', utils.source("test", utils.HIGH_LEVEL));

})();
