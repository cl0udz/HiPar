var jsonSql = require('json-sql')();

function testselect(query) {
    var sql = jsonSql.build({
        type: 'select',
        table: 'users',
        fields: ['name', 'age'],
        condition: query
    });
    console.log(sql);
}

function testinsert(query){
    var sql = jsonSql.build({
        type: 'insert',
        table: 'users',
        values: query
    });
}

function testupdate1(query){
    var sql = jsonSql.build({
        type: 'update',
        table: 'users',
        condition: query,
        modifier: {
            role: 'admin',
            age: 33
        }
    });
}

function testupdate2(query){
    var sql = jsonSql.build({
        type: 'update',
        table: 'users',
        condition: {
            id: 5
        },
        modifier: query
    });
}

function testdelete(query){
    var sql = jsonSql.build({
        type: 'remove',
        table: 'users',
        condition: query
    });
}

var utils = require('../TestcaseUtils.js');

function main(){
    utils.entry(testdelete, {
        id: 5
    });
    utils.entry(testinsert,{
        name: 'John',
        lastname: 'Snow',
        age: 24,
        gender: 'male'
    } );
    utils.entry(testupdate1,{
        id: 5
    });
    utils.entry(testupdate2,{
        role: 'admin',
        age: 33
    });
    utils.entry(testselect,{name: 'Max', id: 5});

}
main();
