var esprima = require('esprima');
var fs = require('fs');


var attr_lst = [];

function analyze_file(file_loc, domain){
    var content = fs.readFileSync(file_loc, 'utf-8');
    get_all_attr(file_loc, content);
    var taint_lst = cal_taintable_attr(attr_lst, domain);
    console.log(taint_lst);

}
module.exports = analyze_file;


//calculate taintable attributes according to dynamic taint result
function cal_taintable_attr(domain){
    var domain;
    var taint_lst = [];
    for (const attr of attr_lst){
        for (const d of domain){
            if (attr.startsWith(d) && taint_lst.indexOf(attr) === -1){
                taint_lst.push(attr);
            }
        }
    }
    return taint_lst;
}


function get_all_attr(file_loc, text) {
    var file_loc, text;
    try {
        var ast = esprima.parse(text, {comment:true, tokens:true});
    } catch (e) {
        console.log("\n[x] get_all_attr : Error when parsing "+ file_loc +", Will ignore this file.\n" + e);
        return;
    }
    traverse(ast['body'], [], propertyVisitor);
    return;
}


// Executes visitor on the ast tree and its children (recursively).
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


// recursively visit a property 
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



// get a specifcy property referrenced in the file
function read_property(node, path, offset){
    var node, path, path_to_store;
    path.splice(offset, 0, node.property.name);

    if ( node.object.type === "Identifier" ){
        // this is the end
        path.splice(offset, 0, node.object.name);
        path_to_store = path.join('.');
        if (attr_lst.indexOf(path_to_store) === -1 ){
            attr_lst.push(path_to_store);
        }
    } else if (node.object.type === "MemberExpression"){
        read_property(node.object, path, offset);
    }else {
        console.log("[x] read_property error: "+ node.object);
    }
}


analyze_file('test.js',['test.a']);
