"use strict";

var esprima = require('esprima');
var fs = require('fs');
var tynt = require('tynt');

exports.analyze_hidden_attr = function analyze_hidden_attr(file_loc, domain){
    var file_loc, domain;
    var content = fs.readFileSync(file_loc, 'utf-8');
    var cmd = {'mode':'getAll', 'res' : []};
    search_all_attr(file_loc, content, cmd);
    var taint_lst = cal_taintable_attr(domain, cmd.res);
    console.log(tynt.Red(taint_lst));
    return taint_lst;

}


exports.get_name_by_loc = function get_name_by_loc(loc){
    var content = fs.readFileSync(loc.file_loc, 'utf-8');
    var cmd = {'mode':'findOne', 'loc':loc.var_loc, 'res':[]};
    search_all_attr(loc.file_loc, content, cmd);
    if (cmd.res.length ===  0){
        console.log("[x] get_name_by_loc error: " + JSON.stringify(loc)+ ' not found');
        return -1;
    }
    console.log(tynt.Red(cmd.res[0]));
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
        console.log("\n[x] get_all_attr : Error when parsing "+ file_loc +", Will ignore this file.\n" + e);
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
         //console.log(node);
         //console.log('----');
        if (cmd.mode === "findOne" && match_property(node, cmd.loc)){
            read_property(node, [...domain], domain.length, cmd);
        } else if (cmd.mode === "getAll"){
            read_property(node, [...domain], domain.length, cmd);
        }
        return false;
    }
    if (node.hasOwnProperty("type") || Array.isArray(node)) {
        return true;
    }
    return false;
}


//match one property according to the location
function match_property(node, loc){
    return JSON.stringify(node.loc) === JSON.stringify(loc);
}


// get a specifcy property referrenced in the file
function read_property(node, path, offset, cmd){
    if (node.hasOwnProperty('property')) {
       // it is a member expr 
        if (node.property.type === "Literal"){
            // it is a array indexing expr (a['c'])
            path.splice(offset,0, node.property.value);
        }else if (node.property.type === "Identifier"){
            // it is a attribute indexing expr (a.c)
            path.splice(offset, 0, node.property.name);
        }else{
            console.log("[x] read_property error: unknow attribute indexing type" + JSON.stringify(node.object));
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
            read_property(node.property, path, offset, cmd);
        } else {
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
    "file_loc":"../target/node_modules/mongo-parse/mongoParse.js",
    "var_loc": {
        "start": {
            "line": 23,
            "column": 21
        },
        "end": {
            "line": 23,
            "column": 31 
        }
    }
}

exports.get_name_by_loc(loc);
// exports.analyze_hidden_attr('test.js',['']);
