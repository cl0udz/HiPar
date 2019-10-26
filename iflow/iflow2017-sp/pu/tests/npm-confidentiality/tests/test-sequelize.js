/**
 * This test assumes postgres is installed. To install it on ubuntu run:
 * sudo apt-get install postgresql-client
 * sudo apt-get install postgresql postgresql-contrib
 *
 * CREATE TABLE pastebins( id serial PRIMARY KEY, title VARCHAR (50) NOT NULL, content bytea NOT NULL, updated_at TIMESTAMP NOT NULL, created_at TIMESTAMP NOT NULL);
 */
var utils = require("iflow");
var policy = require("../Policy.js");
var Sequelize = require('sequelize');
var sequelize = new Sequelize('Pastebin', "user", "password",
    { host: '127.0.0.1',dialect: 'postgres' });

var Task = sequelize.define('pastebin', {
    title: Sequelize.STRING,
    content: Sequelize.BLOB,
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
    },

    updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
    }

});

Task.create({
    title: 'title',
    content: 1,
}).then(function (task) {
    console.log(task.title);
    var res ="";
    for (var i = 0; i < task.content.length; i++) {
        res += String.fromCharCode(task.content[i]); // will print out 100 bytes of previously used memory
        if (i % 200 === 0)
            res += "\n"
    }
    console.log(res);
    setTimeout( function() {
        process.exit(0)
    }, 2000);
});
