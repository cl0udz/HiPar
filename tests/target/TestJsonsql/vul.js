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

<<<<<<< HEAD
//console.log("[*] result of hipar : cast\n");
//testselect({"name":"wupco","id":{"cast":"aaa'\"bbb"}});
//console.log("\n[*] result of hipar : alias\n");
//testselect({"name":"wupco","id":{"alias":"aaa'\"bbb"}});

testselect({"name":"wupco","id":{"a":"b"}});
=======
console.log("[*] result of hipar : cast\n");
testselect({"name":"jack","id":{"cast":"aaa'\"bbb"}});
console.log("\n[*] result of hipar : alias\n");
testselect({"name":"jack","id":{"alias":"aaa'\"bbb"}});
/*
>>>>>>> 9921ed0cb9fba265570eb434fd83f6d3133ccb6b

[*] result of hipar : cast

{
  query: `select "name", "age" from "users" where "name" = $p1 and cast("id" as aaa'"bbb);`,
  values: { p1: 'wupco' },
  prefixValues: [Function: prefixValues],
  getValuesArray: [Function: getValuesArray],
  getValuesObject: [Function: getValuesObject]
}

[*] result of hipar : alias

{
  query: `select "name", "age" from "users" where "name" = $p1 and "id" as "aaa'"bbb";`,
  values: { p1: 'wupco' },
  prefixValues: [Function: prefixValues],
  getValuesArray: [Function: getValuesArray],
  getValuesObject: [Function: getValuesObject]
}


*/

