var esprima = require('esprima')

function search_hidden_attr(func_name, content) {
    try {
        var ast = esprima.parse(content, {loc:true, comment:true, tokens:true});
    } catch (e) {
        console.log("\nsearch_hidden_attr: Error when parsing"+ func_name +" Will ignore this func.\n" + e);
        return;
    }
    traverse(ast, nodeVisitor);
    return;
}

module.exports = search_hidden_attr;

// Executes visitor on the object and its children (recursively).
function traverse(object, nodeVisitor) {
    var key, child;

    if (nodeVisitor.call(null, object) === false) {
        return;
    }
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            child = object[key];
            if (typeof child === 'object' && child !== null) {
                traverse(child, nodeVisitor);
            }
        }
    }
}

function nodeVisitor(node){
    console.log("===============");
    console.log(node);
}


search_hidden_attr("test", "var answer = {'a':2,'b':3};answer[a] = 1;console.log(answer.b);");
