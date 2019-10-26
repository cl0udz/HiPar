//So(0) => (/tmp/tmp-23063YpM2xAFkhbO/tests/test-string.js:12:22:12:92)
var str = string(utils.source(genstr(50000, "9"), utils.HIGH_LEVEL, "module-interface"));

/* START */
//the string constructor is resolved to the following:
function S(s) {
     initialize(this, s);
}
//which in turn call the initialize method: 
/* END */

function initialize (object, s) {
     //Op(2) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:34:23:34:38)
     //Pu(2) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:34:9:34:38)
     if (s !== null ...) {         
          //Op(3) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:35:11:35:19)
          //Op(4) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:35:11:35:32)
          //Pu(4) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:35:11:35:32)
          if (typeof s === 'string')
               //Wr(0) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:36:9:36:21)
               object.s = s;
     }
     //Wr(0) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:43:5:43:20)
     object.orig = s;
}

/* START */
//because of the following call in test-string.js
str.underscore();
// the control flow moves to the underscore method below
underscore: function() {
      var s = this.trim().s.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/([A-Z\d]+)([A-Z][a-z])/g,'$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
      return new this.constructor(s);
    },
//which in turn calls the trim method
/* END */

trim: function() {
     //Op(8) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:506:13:506:26)
     //Wr(8) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:506:13:506:26)
     s = this.s.trim()

     /* START */
     // on the next line of the trim method a new object is created
     return new this.constructor(s);
     // and the flow is again dispatched to the initialize method
     /* END */
}

function initialize (object, s) {
     //Op(10) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:34:23:34:38)
     //Pu(10) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:34:9:34:38)
     if (s !== null ...) {         
          //Op(11) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:35:11:35:19)
          //Op(12) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:35:11:35:32)
          //Pu(12) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/     string.js:35:11:35:32)
          if (typeof s === 'string')
               //Wr(8) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:36:9:36:21)
               object.s = s;
     }
     //Wr(8) => (/tmp/tmp-23063YpM2xAFkhbO/node_modules/string/lib/string.js:43:5:43:20)
     object.orig = s;
}

/* START */
// because of calling the replace method on the tainted string
var s = this.trim().s.replace(/([a-z\d])([A-Z]+)/g, '$1_$2')
// the replace sink is hit in the policy: 
/* END */

sinkCall(this);
//Op(16) => (/tmp/tmp-23063YpM2xAFkhbO/Policy.js:76:16:76:45)
//Si(16) => (/tmp/tmp-23063YpM2xAFkhbO/Policy.js:71:17:71:31)

