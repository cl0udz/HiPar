var esprima = require("esprima");
var escodegen = require("escodegen");
var estraverse = require("estraverse");
var fs = require('fs');

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

//rewrite("test.js", "hipar", "value");
