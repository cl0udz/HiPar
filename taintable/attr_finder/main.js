"use strict";

var esprima = require('esprima');
var fs = require('fs');

exports.analyze_hidden_attr = function analyze_hidden_attr(file_loc, domain){
    var file_loc, domain;
    var content = fs.readFileSync(file_loc, 'utf-8');
    var cmd = {'mode':'getAll', 'res' : []};
    search_all_attr(file_loc, content, cmd);
    var taint_lst = cal_taintable_attr(domain, cmd.res);
    console.log(taint_lst);
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
    console.log(cmd.res[0]);
    return cmd.res[0];
}

//calculate taintable attributes according to dynamic taint result
function cal_taintable_attr(domain, attr_lst){
    var taint_lst = [];
    for (const attr of attr_lst){
    //arrr_lst.forEach(function(attr, index, array){
        for (const d of domain){
	//domain.forEach(function(d, index, array){
            if (attr.startsWith(d) && taint_lst.indexOf(attr) === -1){
                taint_lst.push(attr);
            }
        }
    }
    //);
    
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
    
    // add new scope to the domain  when enter a new function
    if (object.type === 'FunctionDeclaration'){
        domain = [...domain]
        domain.push(object.id.name);
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
        // console.log(node);
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
        }else{
            // it is a attribute indexing expr (a.c)
            path.splice(offset, 0, node.property.name);
        }

        if ( node.object.type === "Identifier" ){
            // this is the end
            path.splice(offset, 0, node.object.name);
            var path_to_store = path.join('.');
            if (cmd.res.indexOf(path_to_store) === -1 ){
                cmd.res.push(path_to_store);
            }
        } else if (node.object.type === "MemberExpression"){
            read_property(node.object, path, offset, cmd);
        }else {
            console.log("[x] read_property error: " + JSON.stringify(node.object));
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
    "file_loc":"test.js",
    "var_loc": {
        "start": {
            "line": 1,
            "column": 4
        },
        "end": {
            "line": 1,
            "column": 5
        }
    }
}

//exports.get_name_by_loc(loc);
// exports.analyze_hidden_attr('test.js',['a']);
