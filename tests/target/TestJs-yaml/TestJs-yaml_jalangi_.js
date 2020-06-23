J$.iids = {"9":[2,12,2,19],"17":[2,20,2,29],"25":[2,12,2,30],"33":[2,12,2,30],"41":[2,12,2,30],"49":[3,13,3,20],"57":[3,21,3,42],"65":[3,13,3,43],"73":[3,13,3,43],"81":[3,13,3,43],"89":[6,11,6,15],"97":[7,12,7,13],"105":[7,15,7,16],"113":[7,18,7,19],"121":[7,11,7,20],"129":[8,18,8,19],"137":[8,11,8,21],"145":[5,12,8,23],"153":[5,12,8,23],"161":[5,12,8,23],"169":[12,5,12,9],"177":[12,19,12,27],"185":[12,5,12,28],"187":[12,5,12,18],"193":[12,5,12,29],"201":[11,1,13,2],"209":[11,1,13,2],"217":[11,1,13,2],"225":[15,1,15,6],"233":[15,13,15,17],"241":[15,19,15,23],"249":[15,1,15,24],"251":[15,1,15,12],"257":[15,1,15,25],"265":[1,1,15,25],"273":[1,1,15,25],"281":[1,1,15,25],"289":[1,1,15,25],"297":[11,1,13,2],"305":[1,1,15,25],"313":[11,1,13,2],"321":[11,1,13,2],"329":[1,1,15,25],"337":[1,1,15,25],"nBranches":0,"originalCodeFileName":"/home/james/nodejs/HiPar/tests/target/TestJs-yaml/TestJs-yaml.js","instrumentedCodeFileName":"/home/james/nodejs/HiPar/tests/target/TestJs-yaml/TestJs-yaml_jalangi_.js","code":"\"use strict\";\n\nvar yaml = require('js-yaml');\nvar utils = require(\"../TestcaseUtils.js\");\n\nvar json = {\n    key4: \"OK\",\n    key6: [1, 2, 3],\n    key7: {\"a\":1}\n};\n\nfunction test(userJson){\n  yaml.safeDump(userJson);\n}\n// console.log(test(json));\nutils.entry(test, json);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(265, '/home/james/nodejs/HiPar/tests/target/TestJs-yaml/TestJs-yaml_jalangi_.js', '/home/james/nodejs/HiPar/tests/target/TestJs-yaml/TestJs-yaml.js');
            function test(userJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(201, arguments.callee, this, arguments);
                            arguments = J$.N(209, 'arguments', arguments, 4);
                            userJson = J$.N(217, 'userJson', userJson, 4);
                            J$.X1(193, J$.M(185, J$.R(169, 'yaml', yaml, 1), 'safeDump', 0)(J$.R(177, 'userJson', userJson, 0)));
                        } catch (J$e) {
                            J$.Ex(313, J$e);
                        } finally {
                            if (J$.Fr(321))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(273, 'yaml', yaml, 0);
            J$.N(281, 'utils', utils, 0);
            J$.N(289, 'json', json, 0);
            test = J$.N(305, 'test', J$.T(297, test, 12, false, 201), 0);
            var yaml = J$.X1(41, J$.W(33, 'yaml', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'js-yaml', 21, false)), yaml, 3));
            var utils = J$.X1(81, J$.W(73, 'utils', J$.F(65, J$.R(49, 'require', require, 2), 0)(J$.T(57, "../TestcaseUtils.js", 21, false)), utils, 3));
            var json = J$.X1(161, J$.W(153, 'json', J$.T(145, {
                key4: J$.T(89, "OK", 21, false),
                key6: J$.T(121, [
                    J$.T(97, 1, 22, false),
                    J$.T(105, 2, 22, false),
                    J$.T(113, 3, 22, false)
                ], 10, false),
                key7: J$.T(137, {
                    "a": J$.T(129, 1, 22, false)
                }, 11, false)
            }, 11, false), json, 3));
            J$.X1(257, J$.M(249, J$.R(225, 'utils', utils, 1), 'entry', 0)(J$.R(233, 'test', test, 1), J$.R(241, 'json', json, 1)));
        } catch (J$e) {
            J$.Ex(329, J$e);
        } finally {
            if (J$.Sr(337)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
