J$.iids = {"9":[2,17,2,24],"17":[2,25,2,38],"25":[2,17,2,39],"33":[2,17,2,39],"41":[2,17,2,39],"49":[6,11,6,17],"57":[8,12,8,14],"65":[10,18,10,37],"73":[11,20,11,38],"81":[9,18,11,40],"89":[7,10,11,42],"97":[5,11,11,44],"105":[5,10,11,45],"113":[4,12,11,47],"121":[4,12,11,47],"129":[4,12,11,47],"137":[17,19,17,29],"145":[18,22,18,30],"153":[19,36,19,44],"161":[20,38,20,46],"169":[16,13,20,48],"177":[16,13,20,48],"185":[16,13,20,48],"193":[24,24,24,33],"201":[24,34,24,39],"209":[24,41,24,46],"217":[24,20,24,47],"225":[24,20,24,47],"233":[24,20,24,47],"241":[25,3,25,13],"249":[25,3,25,21],"251":[25,3,25,19],"257":[25,3,25,22],"265":[26,3,26,13],"273":[26,3,26,22],"275":[26,3,26,20],"281":[26,3,26,23],"289":[23,1,27,2],"297":[23,1,27,2],"305":[23,1,27,2],"313":[23,1,27,2],"321":[29,13,29,20],"329":[29,21,29,42],"337":[29,13,29,43],"345":[29,13,29,43],"353":[29,13,29,43],"361":[31,1,31,6],"369":[31,13,31,17],"377":[31,19,31,23],"385":[31,1,31,24],"387":[31,1,31,12],"393":[31,1,31,25],"401":[1,1,31,25],"409":[1,1,31,25],"417":[1,1,31,25],"425":[1,1,31,25],"433":[23,1,27,2],"441":[1,1,31,25],"449":[1,1,31,25],"457":[23,1,27,2],"465":[23,1,27,2],"473":[1,1,31,25],"481":[1,1,31,25],"nBranches":0,"originalCodeFileName":"/home/james/nodejs/HiPar/tests/target/TestValidatorJS/TestValidatorJS.js","instrumentedCodeFileName":"/home/james/nodejs/HiPar/tests/target/TestValidatorJS/TestValidatorJS_jalangi_.js","code":"\"use strict\";\n\nvar Validator = require('validatorjs');\n\nvar data = {\n  users: [{\n    name: 'John',\n    bio: {\n      age: 28,\n      education: {\n        primary: 'Elementary School',\n        secondary: 'Secondary School'\n      }\n    }\n  }]\n};\nvar rules = {\n  'users.*.name': 'required',\n  'users.*.bio.age': 'min:18',\n  'users.*.bio.education.primary': 'string',\n  'users.*.bio.education.secondary': 'string'\n}; //let validation = new Validator(data, rules);\n\nfunction test(input) {\n  var validation = new Validator(input, rules);\n  validation.fails();\n  validation.passes();\n}\n\nvar utils = require(\"../TestcaseUtils.js\");\n\nutils.entry(test, data);"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(401, '/home/james/nodejs/HiPar/tests/target/TestValidatorJS/TestValidatorJS_jalangi_.js', '/home/james/nodejs/HiPar/tests/target/TestValidatorJS/TestValidatorJS.js');
            function test(input) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(289, arguments.callee, this, arguments);
                            arguments = J$.N(297, 'arguments', arguments, 4);
                            input = J$.N(305, 'input', input, 4);
                            J$.N(313, 'validation', validation, 0);
                            var validation = J$.X1(233, J$.W(225, 'validation', J$.F(217, J$.R(193, 'Validator', Validator, 1), 1)(J$.R(201, 'input', input, 0), J$.R(209, 'rules', rules, 1)), validation, 1));
                            J$.X1(257, J$.M(249, J$.R(241, 'validation', validation, 0), 'fails', 0)());
                            J$.X1(281, J$.M(273, J$.R(265, 'validation', validation, 0), 'passes', 0)());
                        } catch (J$e) {
                            J$.Ex(457, J$e);
                        } finally {
                            if (J$.Fr(465))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(409, 'Validator', Validator, 0);
            J$.N(417, 'data', data, 0);
            J$.N(425, 'rules', rules, 0);
            test = J$.N(441, 'test', J$.T(433, test, 12, false, 289), 0);
            J$.N(449, 'utils', utils, 0);
            var Validator = J$.X1(41, J$.W(33, 'Validator', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'validatorjs', 21, false)), Validator, 3));
            var data = J$.X1(129, J$.W(121, 'data', J$.T(113, {
                users: J$.T(105, [J$.T(97, {
                        name: J$.T(49, 'John', 21, false),
                        bio: J$.T(89, {
                            age: J$.T(57, 28, 22, false),
                            education: J$.T(81, {
                                primary: J$.T(65, 'Elementary School', 21, false),
                                secondary: J$.T(73, 'Secondary School', 21, false)
                            }, 11, false)
                        }, 11, false)
                    }, 11, false)], 10, false)
            }, 11, false), data, 3));
            var rules = J$.X1(185, J$.W(177, 'rules', J$.T(169, {
                'users.*.name': J$.T(137, 'required', 21, false),
                'users.*.bio.age': J$.T(145, 'min:18', 21, false),
                'users.*.bio.education.primary': J$.T(153, 'string', 21, false),
                'users.*.bio.education.secondary': J$.T(161, 'string', 21, false)
            }, 11, false), rules, 3));
            var utils = J$.X1(353, J$.W(345, 'utils', J$.F(337, J$.R(321, 'require', require, 2), 0)(J$.T(329, "../TestcaseUtils.js", 21, false)), utils, 3));
            J$.X1(393, J$.M(385, J$.R(361, 'utils', utils, 1), 'entry', 0)(J$.R(369, 'test', test, 1), J$.R(377, 'data', data, 1)));
        } catch (J$e) {
            J$.Ex(473, J$e);
        } finally {
            if (J$.Sr(481)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
