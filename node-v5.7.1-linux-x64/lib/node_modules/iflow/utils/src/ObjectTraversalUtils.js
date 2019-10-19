var stream = require('stream');
var path = require('path');

function traverse(object, callback) {
    var seen = [];
    var index = 0;
    var traverseRec = function(parent, object, callback) {
        if (!isPrimitive(object)) {
            seen[index++] = object;
            var properties = getAllProperties(object);
            for (var i = 0; i < properties.length; i++) {
                var val = properties[i];
                var nextObject = accessProperty(object, val);
                if ( !isSpecialProp(val) && val !== "__proto__") {
                    var pos = indexOf(seen, nextObject);
                    if (nextObject && pos === -1 || isPrimitive(nextObject)) {
                        callback(object, val, nextObject);
                        if (!(nextObject instanceof stream.Stream) && !(nextObject instanceof Buffer)) {
                            traverseRec(object, nextObject, callback);
                        }
                    }
                }
            };
        }
    };
    return traverseRec(null, object, callback)
}


function isWritable(object, key) {
    var desc = Object.getOwnPropertyDescriptor(object, key);
    if (!desc || (!desc.writable || !desc.configurable))
        return false;
    return true;
}

function accessProperty(object, key) {
    var desc = Object.getOwnPropertyDescriptor(object, key);
    if (desc && desc.get) {
        return desc.get;
    }
    if ((desc && desc.value && desc.value.name === 'deprecated') || object.name === 'deprecated')
        return null;
    try {
        return object[key];
    } catch (e) {
        //this check is needed for a strange error "Cannot read property of undefined" and deprecated props
        return null;
    }
}

function indexOf(arr, el) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el)
            return i;
    }
    return -1;
}

function isPrimitive(obj) {
    if (!obj)
        return true;
    var type = typeof obj;
    if (type === "function")
        return true;
    if (type === "number")
        return true;
    if (type === "boolean")
        return true;
    if (type === "string")
        return true;
    return false
}

/**
 * Get all properties, hidden or not from all the prototypes of the object.
 */
function getAllProperties(obj){
    var allProps = Object.create(null), curr = obj;
    do{
        var props = Object.getOwnPropertyNames(curr);
        for (var i = 0; i < props.length;i++) {
            var desc = Object.getOwnPropertyDescriptor(curr, props[i]);
            if (desc && (desc.get || desc.set)) {
                // skip to avoid side effects due to getters
            } else {
                allProps[props[i]] = 1;
            }
        }
    } while(curr = Object.getPrototypeOf(curr));
    return Object.keys(allProps);
}

/* Check if the property name given as parameter is a special property introduced by jalangi */
function isSpecialProp(name) {
    return skippedProps.indexOf(name) != -1;
}

module.exports = function() {
    var instance = new Object();
    skippedProps = [];
    for (arg in arguments)
        skippedProps.push(arguments[arg]); //TODO check why we can not set this on instance
    instance.traverse = traverse;
    instance.isPrimitive = isPrimitive;
    instance.isSpecialProp = isSpecialProp;
    instance.accessProperty = accessProperty;
    return instance;
};
