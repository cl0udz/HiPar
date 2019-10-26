var SELF_PROPERTY = "self23$^42";
var MAPPING_PROPERTY = "mapping23$^42";

function storeMeta(object, property, meta) {
    var mapping = object[MAPPING_PROPERTY];
    if (!mapping) {
        mapping = createMappingProperty(object);
    }
    mapping[property] = meta;
}

function removeMeta(object, property, meta) {
    var mapping = object[MAPPING_PROPERTY];
    if (mapping)
        delete mapping[property];
}

function readMeta(object, property) {
    var metaReference = this.defaultMeta;
    var mappingRefObj = object[MAPPING_PROPERTY];
    if (mappingRefObj && mappingRefObj[property]) {
        metaReference = mappingRefObj[property];
    }
    return metaReference;
}

function createMappingProperty(object) {
    Object.defineProperty(object, MAPPING_PROPERTY, {
        enumerable: false,
        writable: true
    });
    object[MAPPING_PROPERTY] = Object.create(null);
    return object[MAPPING_PROPERTY];
}

//this may be imported
function isPrimitive(obj) {
    var type = typeof obj;
    if (!obj)
        return true;
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

//module.exports = function(defaultMeta, combineMeta) {
module.exports = function(defaultMeta) {
    var instance = new Object();
    instance.removeMeta = removeMeta;
    instance.storeMeta = storeMeta;
    instance.readMeta = readMeta;
    instance.defaultMeta = defaultMeta;
    instance.MAPPING_PROPERTY = MAPPING_PROPERTY;
    return instance;
};



