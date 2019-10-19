var token = 'password!ASD';

var step = 0;
function inspect() {
    var buf = (new Buffer(100)).toString('ascii');
    if (buf.indexOf(token) !== -1) {
        console.log('Found at step ' + step);
    }
}

for (step = 0; step < 100000; step++) {
    inspect();
}
