/**
 * This test assumes postgres is installed. To install it on ubuntu run:
 * sudo apt-get install postgresql-client
 * sudo apt-get install postgresql postgresql-contrib
 *
 * CREATE TABLE pastebins( id serial PRIMARY KEY, title VARCHAR (50) NOT NULL, content bytea NOT NULL, updated_at TIMESTAMP NOT NULL, created_at TIMESTAMP NOT NULL);
 */
// var utils = require("iflow");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bufftest');


// data: Buffer is not uncommon, taken straight from the docs: http://mongoosejs.com/docs/schematypes.html
mongoose.model('Item', new mongoose.Schema({
    id: String,
    data: Buffer
}));
var Item = mongoose.model('Item');

var sample = new Item();
sample.id = 'item1';

var policy = require("../Policy.js");
// This will create an uninitialized buffer of size 100
sample.data = 100;

sample.save(function () {

    Item.findOne(function (err, result) {
// Print out the data (exposed memory)
        console.log(result.data.toString('ascii'))
        mongoose.connection.db.dropDatabase(); // Clean up everything
        process.exit();
    });
});
