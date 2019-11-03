

var parser = require('mongo-parse');

/* Coverage improving instructions */
function g(x) {
    console.log("Myfct");
}
g = source(g);
var query = parser.parse(g);

/* End of coverage improving instructions */

function source(source_var){
    return source_var;
}
