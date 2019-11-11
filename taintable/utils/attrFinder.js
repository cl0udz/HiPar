"use strict";

var esprima = require('esprima');
var fs = require('fs');
var tynt = require('tynt');

exports.analyze_hidden_attr = function analyze_hidden_attr(file_loc, domain){
    var file_loc, domain;
    var content = fs.readFileSync(file_loc, 'utf-8');
    var cmd = {'mode':'getAll', 'res' : []};
    search_all_attr(file_loc, content, cmd);
    console.log(cmd.res);
    var taint_lst = cal_taintable_attr(domain, cmd.res);
    return taint_lst;

}


exports.get_name_by_loc = function get_name_by_loc(loc){
    var content = fs.readFileSync(loc.file_loc, 'utf-8');
    var cmd = {'mode':'findOne', 'loc':loc.var_loc, 'res':[]};
    search_all_attr(loc.file_loc, content, cmd);
    if (cmd.res.length ===  0){
        console.log(tynt.Red("[x] get_name_by_loc error: " + JSON.stringify(loc)+ ' not found'));
        return -1;
    }
    // console.log(cmd.res);
    return cmd.res[0];
}

//calculate taintable attributes according to dynamic taint result
function cal_taintable_attr(domain, attr_lst){
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


function search_all_attr(file_loc, text, cmd) {
    try {
        var ast = esprima.parse(text, {comment:true, tokens:true, loc:true});
    } catch (e) {
        console.log(tynt.Red("\n[x] get_all_attr : Error when parsing "+ file_loc +", Will ignore this file.\n" + e));
        return;
    }
    //console.log(ast);
    traverse(ast['body'], [], propertyVisitor, cmd);
    return;
}


// Executes visitor on the ast tree and its children (recursively).
function traverse(object, domain, Visitor, cmd) {
    var key, child;

    if (Visitor.call(null, object, domain, cmd) === false) {
        return;
    }
    //console.log(object);
    // add new scope to the domain  when enter a new function
    if (object.type === 'FunctionDeclaration'){
        domain = [...domain]
        domain.push(object.id.name);
    } else if (object.type === 'FunctionExpression'){
        domain = [...domain];
        var anonymous_func;
        if (object.id === null){
            anonymous_func = 'anon_'+ object.loc.start.line+'_'+object.loc.start.column+'_'+object.loc.end.line+'_'+object.loc.end.column;
        }else{
            anonymous_func = object.id.name;
        }
        domain.push(anonymous_func);
    }
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            child = object[key];
            if (typeof child === 'object' && child !== null) {
                traverse(child, domain, Visitor, cmd);
            }
        }
    }
}


// recursively visit a property 
function propertyVisitor(node, domain, cmd){
    var node, domain;

    if (node.type === "MemberExpression" || node.type === "Identifier"){
        if (cmd.mode === "findOne"){
            // for the purpose of get_name_by_loc, we just get name for base and standalone var (a in a[b] or b)
            if (loc_in_scope(node.loc, cmd.loc)){
                read_standalone_or_base(node, [...domain], cmd);
                return false; // stop visiting the child 
            }else {
                return true; // continue visiting the child 
            }
        } else if (cmd.mode === "getAll"){
            read_property(node, [...domain], domain.length, cmd);
            return false;
        }
    }
    if (node.hasOwnProperty("type") || Array.isArray(node)) {
        return true;
    }
    return false;
}


//match one property according to the location
function loc_in_scope(node_loc, loc){
    if (  node_loc.start.line == loc.start.line &&
          node_loc.start.column == loc.start.column &&
          node_loc.end.line >= loc.end.line &&
          node_loc.end.column >= loc.end.column){
        return true;
    }
    return false;
}


// get the name of the a variable (base or standalone)
function read_standalone_or_base(node, path, cmd){
    // find the exact match of the loc 
    if (node.hasOwnProperty("property")){
        // this is a member expr 
        // check if object match
        if (node.object.type === "Identifier"){
            path.push( node.object.name );
        }else if (node.object.type === "MemberExpression"){
            while (node.object.type === "MemberExpression") node = node.object;
            if (node.object.type === "ThisExpression"){
                path.push("this");
            } else if (node.object.type === "Identifier"){
                path.push(node.object.name);
            }else{
                console.log(tynt.Red("[x] read_standalone_or_base error: unknown object type" + JSON.stringify(node.object.object)));
                return;
            }
        } else{
            if (node.object.type === "CallExpression") {
                cmd.res.push(-1);
                return;
            }
            if (node.object.type === "Literal") {
                cmd.res.push(-1);
                return;
            }
            console.log(tynt.Red("[x] read_standalone_or_base error: unknown object type" + JSON.stringify(node.object)));
        }
        cmd.res.push(path.join("."));
        return;
    }else{
        // this is a standalone var
        if (JSON.stringify(node.loc) === JSON.stringify(cmd.loc)){
            path.push(node.name)
            cmd.res.push(path.join(".")); 
            return;
        }else{
            console.log(tynt.Red("[x] read_standalone_or_base error: not a standalone object iid" + JSON.stringify(node)));
        }
    }

}

// get a specifcy property referrenced in the file
function read_property(node, path, offset, cmd){
    if (node.hasOwnProperty('property')) {
       // it is a member expr 
        if (node.property.type === "Literal"){
            // it is a array indexing expr (a['c'])
            path.splice(offset, 0, node.property.value);
        }else if (node.property.type === "Identifier" && !node.computed){
            // it is a attribute indexing expr (a.c)
            path.splice(offset, 0, node.property.name);
        }else if (node.property.type === "MemberExpression"){
            // it is a nested indexing expr (a[b[c]]),we just igore a and read b[c]
            read_property(node.property, path, offset, cmd);
            return; 
        }else if (node.property.type != "Literal" && node.computed){
            // for query[key], we just record query
            // so we pop anything after key
            while (path.length > offset) path.pop();
        }else {
            console.log(tynt.Red("[x] read_property error: unknown attribute indexing type " + JSON.stringify(node.property.type)));
            return;
        }

        if ( node.object.type === "Identifier" ){
            // this is the end
            path.splice(offset, 0, node.object.name);
            var path_to_store = path.join('.');
            if (cmd.res.indexOf(path_to_store) === -1 ){
                cmd.res.push(path_to_store);
            }
        } else if (node.object.type === "MemberExpression"){
            // the object attr is still a nested member expr 
            read_property(node.object, path, offset, cmd);
        } else if (node.object.type === "ThisExpression" ){
            // the object attr is 'this' keyword 
            path.splice(offset, 0, "this");
            var path_to_store = path.join('.');
            if (cmd.res.indexOf(path_to_store) === -1 ){
                cmd.res.push(path_to_store);
            }
        } else {
            // this is statement like func('aaa').b, just ignore
            if ( node.object.type === "CallExpression" ) return;
            // this is statement like "i love".concat("china"), just ignore
            if ( node.object.type === "Literal" ) return;
            console.log("[x] read_property error: unknown object tpye " + JSON.stringify(node.object));
        }
        
    } else{
        // it is a standalone variable
        path.splice(offset, 0, node.name);
        var path_to_store = path.join('.');
        if (cmd.res.indexOf(path_to_store) === -1 ){
            cmd.res.push(path_to_store);
        }
    }
}

var loc = {
    "file_loc": "../../tests/target/TestMongoDb/node_modules/bson/lib/bson/parser/serializer.js",
    "var_loc": {
        "start": {
            "line": 26,
            "column": 9
        },
        "end": {
            "line": 26,
            "column": 39 
        }
    }
}
exports.analyze_hidden_attr("test.js", []);

// exports.get_name_by_loc(loc);
// exports.analyze_hidden_attr('../../tests/target/TestMongoDb/node_modules/bson/lib/bson/parser/serializer.js',['']);
