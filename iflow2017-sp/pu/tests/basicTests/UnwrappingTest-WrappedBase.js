var utils = require("../TestUtils");

var birthday = new Date(1995, 11, 17);
birthday.ownRef = birthday;
birthday.a = 23;

birthday = utils.source(birthday);
if (birthday.getMonth() != 11) {
    utils.sink(birthday)
}

