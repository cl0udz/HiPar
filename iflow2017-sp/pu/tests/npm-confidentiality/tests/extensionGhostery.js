
// https://popmyads.com/
// Check for Ghostery extension via web accessible resources. If not installed, it loads an image
// Source: s.src, sink: node.innerHTML 
Math.random = require("./DeterministicRandom.js")(23);
var utils = require("iflow");
utils.addSink(console.log);
 var document = {}

 function printMsg() {
//        var node = document.getElementById("write");
	document.write = {};
	var node = document.write;
//        node.innerHTML = "<img src='https://whos.amung.us/swidget/popmydex.png'/>";
	node.innerHTML = "<img src='https://whos.amung.us/swidget/popmydex.png'/>";
        console.log(node.innerHTML);
    };


    function Ext_Detect_NotInstalled(ExtName,ExtID) {
   console.log(ExtName + ' Not Installed');
    printMsg();

  }

  function Ext_Detect_Installed(ExtName,ExtID) {
    console.log(ExtName + ' Installed');
  }

  var Ext_Detect = function(ExtName,ExtID) {
//    var s = document.createElement('script');
    document.script = {};
    var s = document.script;
    s.src = utils.source('chrome-extension://' + ExtID + '/data/images/click2play/allow_once.png', utils.HIGH_LEVEL, "s.src");

//    s.onload = function(){Ext_Detect_Installed(ExtName,ExtID);};
//    s.onerror = function(){Ext_Detect_NotInstalled(ExtName,ExtID);};
    if (s.src.includes('chrome') && (Math.random() >= 0.5)){
	Ext_Detect_Installed(ExtName,ExtID);
    }
    else {
	Ext_Detect_NotInstalled(ExtName,ExtID)
    }
//    document.body.appendChild(s);
    document.body = s
  }

// var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
   var is_chrome = Math.random() >= 0.5;

 if (is_chrome==true)
 {
//  window.onload = function() { Ext_Detect('Ghostery','mlomiejdfkolichcflejclcbmpeaniij');};
 Ext_Detect('Ghostery','mlomiejdfkolichcflejclcbmpeaniij');
 }

 if (is_chrome==false)
 {
printMsg();
 }

