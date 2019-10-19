
(function (sandbox) {

    function MetaTrackingAnalysis() {

        var path = require('path');
        var helper = require(path.resolve(__dirname, "./MetaHelper.js"))("");
        var smemory = sandbox.smemory;
        var lastReadParent;
        var lastName;

        this.invokeFun = function(iid, f, base, args, val, isConstructor) {
            if (f.name === "setMeta") {
                helper.storeMeta(lastReadParent, lastName, args[1]);
            } else if (f.name == "getMeta") {
                return helper.readMeta(lastReadParent, lastName, args[0]);
            } else if (f.name === "deleteMeta") {
                helper.removeMeta(lastReadParent, lastName);
            }
            return val;
        };

        this.readPre = function(iid, name, val, isGlobal) {
            lastReadParent = smemory.getFrame(name);
            lastName = name;
            return val;
        };


        this.getField = function(iid, base, offset, val) {
            if ((typeof val) !== "function") {
                lastReadParent = base;
                lastName = offset;
            }
            return val;
        };


        this.write = function (iid, name, val, oldValue) {
            helper.storeMeta(smemory.getFrame(name), name, "");
            return val;
        };

        this.putField = function (iid, base, offset, val) {
            helper.storeMeta(base, offset, "");
            return val;
        };

    }

    sandbox.analysis = new MetaTrackingAnalysis();
}(J$));