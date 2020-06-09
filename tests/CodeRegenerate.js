var fs = require('fs');
var path = require('path');
var utils = require(path.resolve(__dirname, "Utils"));
var configs = require(path.resolve(__dirname, "configs.json"))


var cacheRoot = path.resolve(__dirname,'../outputs/target_cache/');
if(!fs.existsSync(cacheRoot))
    fs.mkdirSync(cacheRoot);

//generate tasks with absolute path
var tasks = [];
var useCache = true;

for (var i = 0; i < configs.length; i++) {
    configs[i].projPath = path.resolve(__dirname, configs[i].projPath)
    if (configs[i].enable)
        tasks.push(configs[i]);
}


var esprima = require("esprima");
var escodegen = require("escodegen");
var estraverse = require("estraverse");
var fs = require('fs');

function generate_testcase(task){
    var json_path = path.resolve(__dirname, '../outputs/hidden_attr/' + task.testName + ".json");
    var hipar_list = require(json_path);

    console.log(hipar_list);

    var testcase_path = 
    for(var i = 0; i < hipar_list.length; i++){
        if(hipar_list[i] == "R0ot")
            rewrite(testcase_path, hipar_list[i][j], "");
        for(var j = 0; j < hipar_list[i].lengt; j++){
            rewrite(testcase_path, hipar_list[i] + "." + hipar_list[i][j], "");
        }
    }
    
    if(tasks.length > 0)
        generate_testcase(tasks.shift());
}

var rewrite = function(file_path, hipar_key, hipar_value){
    var content = fs.readFileSync(file_path, 'utf-8');
    var ast = esprima.parse(content, {loc:true});

    ast.body.unshift(esprima.parse("var S$ = require(\"S$\")"));
    var hipar_code = esprima.parse("var hipar = S$.symbol(" + hipar_key + ", " + hipar_value+ ");\n"
                                   + "input." + hipar_key + "=hipar;");
    
    estraverse.replace(ast, {
        leave: function(node, parent){
            if(node.type === 'ExpressionStatement' && node.expression.type == "CallExpression" && node.expression.callee.name == "replace_me"){
                console.log(JSON.stringify(node, null, 4));
                return hipar_code;
            }       
        }
    });

    var new_code = escodegen.generate(ast);
    fs.writeFileSync(file_path.substring(0, file_path.length-3)+"_"+hipar_key+".js", new_code);
}

generate_testcase(tasks.shift());
