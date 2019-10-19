//taken from: https://browserleaks.com/firefox#more
// High source: read local resources, i.e. e.src
// Low sink: console.log()

/**
*  OS Detection using firefox.js
*
*  (c) 2015 https://browserleaks.com/firefox
*  License: CC-BY-NC-ND
*/

Math.random = require("./DeterministicRandom.js")(23);
var utils = require("iflow");
utils.addSink(console.log);
var keyVal = [["browser.gesture.pinch.out", "cmd_fullZoomEnlarge"], 
	      ["browser.backspace_action" , "2"], 
              ["browser.gesture.pinch.threshold" , "150"],
	      ["other" , "other"]	
];

keyVal = utils.source(keyVal, utils.HIGH_LEVEL, "browser-values")

var document = {};

var include = function(load, err) {
    document.script = {};	
 //   var el = document.createElement("script");
    var el = document.script;
    el.type = "text/javascript";
    el.onload = load;
    el.onerror = err;
//    document.head.appendChild(el);
    document.head = el;
    el.src = utils.source("resource:///defaults/preferences/firefox.js", utils.HIGH_LEVEL, "res-inclusion");
    if (el.src.includes("resource") && (Math.random() >= 0.5)){
	el.onload();
    }
    else {
	el.onerror();
    }	
}
 
var pref,
    sticky_pref,
    os;
 
pref = sticky_pref = function(key, val) {
    if (!os)
        if (key == "browser.gesture.pinch.out" && val == "cmd_fullZoomEnlarge")
            os = "Windows";
        else if (key == "browser.backspace_action" && val == "2")
            os = "Linux";
        else if (key == "browser.gesture.pinch.threshold" && val == "150")
            os = "Mac";
}

var i = (Math.floor((Math.random() * 1000) +1) % 4);
pref(keyVal[i][0], keyVal[i][1]);
 
include(function() {
    console.log( "OS: " + (os ? os : "unknown") );
},function() {
    console.log( "OS: n/a (not a Firefox)" );
});

