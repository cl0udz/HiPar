var mysql      = require('mysql');
var path = require('path')
var utils = require(path.resolve(__dirname,"../Utils.js"))

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});



query= 'SELECT 1 + 1 AS solution';

function test(query){
    connection.connect();

    connection.query(query, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    });

    connection.end();
}

utils.loopProperty(test,query,__dirname);
