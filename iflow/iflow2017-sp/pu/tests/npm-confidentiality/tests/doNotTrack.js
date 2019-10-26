// Check wether doNotTrack field is activated in the browser.
// Source: testSource, sink: console.log(c)

// Deobfuscated code
//$(function() {
Math.random = require("./DeterministicRandom.js")(23);
var utils = require("iflow");
utils.addSink(console.log);

 var navigator = {};
 var window = {};

  var testSource = {
        navigator_doNotTrack: ((Math.random() >= 0.25) ? true : false),
        window_doNotTrack: ((Math.random() >= 0.25) ? true : false),
        navigator_msDoNotTrack: ((Math.random() >= 0.25) ? true : false)
  };
  testSource = utils.source(testSource, utils.HIGH_LEVEL, "testSource")
  var name;
  for (name in testSource) {
    /** @type {boolean} */
    var c = false;
    if (!!testSource[name]) {
      if (!(1 != testSource[name] && "yes" != testSource[name])) {
        /** @type {boolean} */
        c = true;
      }
    }
   console.log(c);
  }
//    $("#" + name).html((c ? Tru '<span class="true">&#10004;</span>e ' : '<span class="false">&#215;</span> False') + " (<i>" + testSource[name] + "</i>)");

//});

//Original code

/* https://browserleaks.com/js/donottrack.js */

