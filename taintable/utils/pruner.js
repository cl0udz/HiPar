"use strict";
var fs = require('fs');
var esprima = require('esprima');


// return the domain that where its elements are dopar
function analyze_dopar(file_loc, domain_lst, par_lst){
    var cmd = {'res' : [], "loc":file_loc};
    var content = fs.readFileSync(file_loc, 'utf-8');
    search_all_attr(file_loc, content, cmd);
    var do_lst = infer_dopar(domain_lst, par_lst, cmd.res);
    return do_lst;
}

//infer documented par  
function infer_dopar(domain_lst, par_lst, attr_lst){
    var lst = [];
    var tree = build_tree(attr_lst);
    
    // detect if there is a domain (with multiple hipar) under one or several IFCON
    for (const domain of domain_lst) {
        if (detect_cluster_hipar(tree, domain)) lst.push(domain);
    }
    for (const par of par_lst) {
        //if (detect_cluster_hipar(tree, domain)) lst.push(domain);
    }
    console.log(lst);
    return lst;
}

function detect_cluster_hipar(tree, domain){
    var flag = false;
    var cnt = 0;
    // preprocess domain 
    domain = domain.split(".");
    for (let i = 0; i < domain.length; i++){
        var child = tree.getChild(domain[i]);
        if (child == -1){
            child = tree.getChild("IFCON");
            if (child != -1) {
                flag = true;
                i -= 1;
            }
        }
        tree = child;
    }
    // if under IFCON, count the hipars
    if (flag){
        for (const v of tree.children){
            if (v.isNode) cnt += 1;
        }
    }
    if (cnt >= 2) {
        return true;
    }else{
        return false;
    }
}

function build_tree(nodes){
    // preprocessing
    for (let i = 0; i < nodes.length; ++i) {
        nodes[i] = nodes[i].split(".");
    }
    // build tree
    var rootNode = new TrieNode(null);
    for (let i = 0; i < nodes.length; ++i) {
        insert_node(rootNode, nodes[i]);
    }
    // print_tree(rootNode, rootNode);
    return rootNode;
}

function print_tree(prev, tree){
    console.log(prev.key, "->", tree.key);
    for (const v of tree.children) {
        print_tree(tree, v);
    }
}

function insert_node(root, node){
    for (let i = 0; i < node.length; ++i) {
        var child = root.getChild(node[i]);
        if (child == -1) {
            child = new TrieNode(node[i]);
            root.children.push(child);
        }
        root = child;
    }
    root.isNode = true;
}


function TrieNode(key) {
    this.key = key; 
    this.children = []; 
    this.isNode = false;
    this.getChild = function (name){
        for (let i = 0; i < this.children.length; i++){
            if (this.children[i].key == name) return this.children[i];
        }
        return -1;
    }
}

function search_all_attr(file_loc, text, cmd) {
    var ast;
    try {
        var ast = esprima.parse(text, {comment:true, tokens:true, loc:true});
    } catch (e) {
        console.log(tynt.Red("\n[x] search_all_attr : Error when parsing "+ file_loc +", Will ignore this file.\n" + e));
        return;
    }
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
    // add new scope to the domain  when enter a new function or conidtional branch
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

    if (object.type === 'IfStatement'){
        domain = [...domain]
        domain.push("IFCON");//+object.loc.start.line+'_'+object.loc.start.column);
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
        read_property(node, [...domain], domain.length, cmd);
        return false;
    }

    if (node.hasOwnProperty("type") || Array.isArray(node)) {
        return true;
    }
    return false;
}


// get a specifcy property referrenced in the file
function read_property(node, path, offset, cmd){
    if (node.hasOwnProperty('property')) {
        // it is a member expr
        //[1] handle property here
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
            console.log(cmd.loc);
            return;
        }



        //[2] handle object here
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
            // here we handle special cases

            // this is statement like func('aaa').b, just ignore
            if ( node.object.type === "CallExpression" ) {
                if (node.object.callee.type === "MemberExpression"){
                    read_property(node.object.callee, path.splice(0,offset), offset, cmd);
                }
                return;
            }
            // this is statement like "i love".concat("china"), just ignore
            if ( node.object.type === "Literal" ) return;

            // this is statement like new String(aaa),we want to get aaa
            if (node.object.type === "NewExpression") {
                const args = node.object.arguments;
                for (const id in args) read_property(args[id], path.splice(0,offset), offset, cmd);
                return;
            }

            // this is statement like (a?b:c).aaa, we want a, b, c
            if (node.object.type === "ConditionalExpression"){
                const args = node.object;
                for (const id in args) read_property(args[id], path.splice(0,offset), offset, cmd);
                return;
            }

            // this is statement like (a||b).aaa, we want a, b
            if (node.object.type === "LogicalExpression"){
                var args = node.object;
                // read right
                while (args.left.type === "LogicalExpression") {
                    read_property(args.right, path.splice(0,offset), offset, cmd);
                    args = args.left;
                }
                read_property(args.right, path.splice(0,offset), offset, cmd);
                // read left
                read_property(args.left, path.splice(0,offset), offset, cmd);
                return;
            }


            // this is statement like (a + b + c).aaa, we want a, b, c
            if (node.object.type === "BinaryExpression"){
                var args = node.object;
                // read right
                while (args.left.type === "BinaryExpression") {
                    read_property(args.right, path.splice(0,offset), offset, cmd);
                    args = args.left;
                }
                read_property(args.right, path.splice(0,offset), offset, cmd);
                // read left
                read_property(args.left, path.splice(0,offset), offset, cmd);
                return;
            }

            // this is statement like [a,b].concat(), we want a,b
            if (node.object.type === "ArrayExpression"){
                const args = node.object.elements;
                for (const id in args) read_property(args[id], path.splice(0,offset), offset, cmd);
                return;
            }

            console.log("[x] read_property error: unknown object tpye " + JSON.stringify(node.object));
            console.log(cmd.loc);
            return;
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



analyze_dopar('testp.js',['cfg.a'], ['username']);
