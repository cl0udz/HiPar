J$.iids = {"9":[1,1,1,13],"17":[1,1,1,14],"25":[3,12,3,19],"33":[3,20,3,29],"41":[3,12,3,30],"49":[3,12,3,30],"57":[3,12,3,30],"65":[4,13,4,20],"73":[4,21,4,42],"81":[4,13,4,43],"89":[4,13,4,43],"97":[4,13,4,43],"105":[7,11,7,15],"113":[8,12,8,13],"121":[8,15,8,16],"129":[8,18,8,19],"137":[8,11,8,20],"145":[9,16,9,17],"153":[9,11,9,18],"161":[6,12,10,2],"169":[6,12,10,2],"177":[6,12,10,2],"185":[13,3,13,7],"193":[13,17,13,25],"201":[13,3,13,26],"203":[13,3,13,16],"209":[13,3,13,27],"217":[12,1,14,2],"225":[12,1,14,2],"233":[12,1,14,2],"241":[16,1,16,6],"249":[16,13,16,17],"257":[16,19,16,23],"265":[16,1,16,24],"267":[16,1,16,12],"273":[16,1,16,25],"281":[1,1,17,1],"289":[1,1,17,1],"297":[1,1,17,1],"305":[1,1,17,1],"313":[12,1,14,2],"321":[1,1,17,1],"329":[12,1,14,2],"337":[12,1,14,2],"345":[1,1,17,1],"353":[1,1,17,1],"nBranches":0,"originalCodeFileName":"/home/james/nodejs/HiPar/tests/target/TestJs-yaml/TestJs-yaml.js","instrumentedCodeFileName":"/home/james/nodejs/HiPar/tests/target/TestJs-yaml/TestJs-yaml_jalangi_.js","code":"\"use strict\";\n\nvar yaml = require('js-yaml');\nvar utils = require(\"../TestcaseUtils.js\");\n\nvar json = {\n    key4: \"OK\",\n    key6: [1, 2, 3],\n    key7: {\"a\":1}\n};\n\nfunction test(userJson){\n  yaml.safeDump(userJson);\n}\n// console.log(test(json));\nutils.entry(test, json);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(281, '/home/james/nodejs/HiPar/tests/target/TestJs-yaml/TestJs-yaml_jalangi_.js', '/home/james/nodejs/HiPar/tests/target/TestJs-yaml/TestJs-yaml.js');
            function test(userJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            userJson = J$.N(233, 'userJson', userJson, 4);
                            J$.X1(209, J$.M(201, J$.R(185, 'yaml', yaml, 1), 'safeDump', 0)(J$.R(193, 'userJson', userJson, 0)));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(289, 'yaml', yaml, 0);
            J$.N(297, 'utils', utils, 0);
            J$.N(305, 'json', json, 0);
            test = J$.N(321, 'test', J$.T(313, test, 12, false, 217), 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var yaml = J$.X1(57, J$.W(49, 'yaml', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'js-yaml', 21, false)), yaml, 3));
            var utils = J$.X1(97, J$.W(89, 'utils', J$.F(81, J$.R(65, 'require', require, 2), 0)(J$.T(73, "../TestcaseUtils.js", 21, false)), utils, 3));
            var json = J$.X1(177, J$.W(169, 'json', J$.T(161, {
                key4: J$.T(105, "OK", 21, false),
                key6: J$.T(137, [
                    J$.T(113, 1, 22, false),
                    J$.T(121, 2, 22, false),
                    J$.T(129, 3, 22, false)
                ], 10, false),
                key7: J$.T(153, {
                    "a": J$.T(145, 1, 22, false)
                }, 11, false)
            }, 11, false), json, 3));
            J$.X1(273, J$.M(265, J$.R(241, 'utils', utils, 1), 'entry', 0)(J$.R(249, 'test', test, 1), J$.R(257, 'json', json, 1)));
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
