var utils = require("../TestUtils");

var i = 0;
label : while (i < 10) {
    if (i == 3) {
        i+=2;
        continue label;
    }
    i++;
}

console.log(i);

