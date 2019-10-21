var esprima = require('esprima')

function search_hidden_attr(domain, text) {
    var domain, text;
    try {
        var ast = esprima.parse(text, {comment:true, tokens:true});
    } catch (e) {
        console.log("\nsearch_hidden_attr: Error when parsing"+ domain.join() +" Will ignore this func.\n" + e);
        return;
    }
    traverse(ast['body'], domain, propertyVisitor);
    return;
}

module.exports = search_hidden_attr;

// Executes visitor on the object and its children (recursively).
function traverse(object, domain, propertyVisitor) {
    var object, domain, key, child;

    if (propertyVisitor.call(null, object, domain) === false) {
        return;
    }
    //console.log('--------------');
    //console.log(object);
    
    // add new scope to the domain  when enter a new function
    if (object.type === 'FunctionDeclaration'){
        domain = [...domain]
        domain.push(object.id.name);
    }
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            child = object[key];
            if (typeof child === 'object' && child !== null) {
                traverse(child, domain, propertyVisitor);
            }
        }
    }
}

function propertyVisitor(node, domain){
    var node, domain;
    if ( node.type === "MemberExpression"){
        read_property(node, [...domain], domain.length);
        return false;
    }
    if (node.hasOwnProperty("type") || Array.isArray(node)) {
        return true;
    }
    return false;
}


function read_property(node, path, offset){
    var node, path;
    path.splice(offset, 0, node.property.name);

    if ( node.object.type === "Identifier" ){
        // this is the end
        path.splice(offset, 0, node.object.name);
        console.log(path.join());
    } else if (node.object.type === "MemberExpression"){
        read_property(node.object, path, offset);
    }else {
        console.log("read_property error"+ node.object);
    }
}


search_hidden_attr(["text"], "var f; f['x'] = 1; function contextA () { f.q = 1 }; console.log(a.b.c['d']);");
