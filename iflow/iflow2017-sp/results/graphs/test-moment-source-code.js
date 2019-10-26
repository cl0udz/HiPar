var str =  utils.source(genstr(50000, '1') + "", utils.HIGH_LEVEL, "module-interface"); 
//So(0) => (/tmp/tmp-6205rCRT6fqg8dOw/tests/test-moment.js:8:16:8:91)
//Wr(0) => (/tmp/tmp-6205rCRT6fqg8dOw/tests/test-moment.js:8:16:8:91)

/* start not captured */
moment(str, "MMM");
/* end not captured */

//Wr(0) => (/tmp/tmp-6205rCRT6fqg8dOw/node_modules/moment/moment.js:2580:5:2580:17)
//Wr(0) => (/tmp/tmp-6205rCRT6fqg8dOw/node_modules/moment/moment.js:2508:17:2508:26)
//Op(11) => undefined
//Op(12) => undefined
//Pu(12) => (/tmp/tmp-6205rCRT6fqg8dOw/node_modules/moment/moment.js:2517:9:2517:34)
//Wr(0) => (/tmp/tmp-6205rCRT6fqg8dOw/node_modules/moment/moment.js:2518:29:2518:59)
//Wr(13) => (/tmp/tmp-6205rCRT6fqg8dOw/node_modules/moment/moment.js:2518:9:2518:59)
//Op(17) => undefined
//Op(18) => undefined
//Pu(18) => (/tmp/tmp-6205rCRT6fqg8dOw/node_modules/moment/moment.js:2523:16:2523:29)
//Op(25) => undefined
//Wr(25) => (/tmp/tmp-6205rCRT6fqg8dOw/node_modules/moment/moment.js:2355:18:2355:32)
//Si(25) => (/tmp/tmp-6205rCRT6fqg8dOw/Policy.js:71:17:71:31)

