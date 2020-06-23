J$.iids = {"9":[1,16,1,23],"17":[1,24,1,37],"25":[1,16,1,38],"33":[1,16,1,38],"41":[1,16,1,38],"49":[3,24,3,30],"57":[3,42,3,50],"65":[3,12,3,52],"73":[3,12,3,52],"81":[3,12,3,52],"89":[8,23,8,27],"97":[10,26,10,35],"105":[10,25,10,36],"113":[11,26,11,53],"121":[9,24,11,55],"129":[7,19,11,57],"137":[15,23,15,27],"145":[17,26,17,27],"153":[18,26,18,57],"161":[16,21,18,59],"169":[14,19,18,61],"177":[6,23,18,63],"185":[6,23,18,63],"193":[6,23,18,63],"201":[23,5,23,13],"209":[23,14,23,19],"217":[23,21,23,32],"225":[23,5,23,33],"233":[23,5,23,34],"241":[5,1,42,2],"249":[5,1,42,2],"257":[5,1,42,2],"265":[5,1,42,2],"273":[44,13,44,20],"281":[44,21,44,42],"289":[44,13,44,43],"297":[44,13,44,43],"305":[44,13,44,43],"313":[45,1,45,6],"321":[45,13,45,17],"329":[45,19,45,23],"337":[45,1,45,24],"339":[45,1,45,12],"345":[45,1,45,25],"353":[1,1,45,25],"361":[1,1,45,25],"369":[1,1,45,25],"377":[5,1,42,2],"385":[1,1,45,25],"393":[1,1,45,25],"401":[5,1,42,2],"409":[5,1,42,2],"417":[1,1,45,25],"425":[1,1,45,25],"nBranches":0,"originalCodeFileName":"/home/james/nodejs/HiPar/tests/target/TestValidateJS/TestValidateJS.js","instrumentedCodeFileName":"/home/james/nodejs/HiPar/tests/target/TestValidateJS/TestValidateJS_jalangi_.js","code":"var validate = require(\"validate.js\");\n\nvar data = {username: \"nick\", password: \"better\"};\n\nfunction test(input){\n    var constraints = {\n        username: {\n            presence: true,\n            exclusion: {\n                  within: [\"nicklas\"],\n                  message: \"'%{value}' is not allowed\"\n            }\n        },\n        password: {\n            presence: true,\n            length: {\n                  minimum: 6,\n                  message: \"must be at least 6 characters\"\n            }\n        }\n    };\n\n    validate(input, constraints);\n\n    //validate({password: \"bad\"}, constraints);\n\n    // => {\n    //   \"username\": [\"Username can't be blank\"],\n    //   \"password\": [\"Password must be at least 6 characters\"]\n    // }\n\n    //validate({username: \"nick\", password: \"better\"}, constraints);\n    // => undefined\n\n    //validate({username: \"nicklas\", password: \"better\"}, constraints);\n    // => {\"username\": [\"Username 'nicklas' is not allowed\"]}\n\n    //validate({password: \"better\"}, constraints, {fullMessages: false});\n    // => {\"username\": [\"can't be blank\"]}\n\n    //validate({username: \"nicklas\", password: \"bad\"}, constraints, {format: \"detailed\"});\n}\n\nvar utils = require('../TestcaseUtils.js');\nutils.entry(test, data);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(353, '/home/james/nodejs/HiPar/tests/target/TestValidateJS/TestValidateJS_jalangi_.js', '/home/james/nodejs/HiPar/tests/target/TestValidateJS/TestValidateJS.js');
            function test(input) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            input = J$.N(257, 'input', input, 4);
                            J$.N(265, 'constraints', constraints, 0);
                            var constraints = J$.X1(193, J$.W(185, 'constraints', J$.T(177, {
                                username: J$.T(129, {
                                    presence: J$.T(89, true, 23, false),
                                    exclusion: J$.T(121, {
                                        within: J$.T(105, [J$.T(97, "nicklas", 21, false)], 10, false),
                                        message: J$.T(113, "'%{value}' is not allowed", 21, false)
                                    }, 11, false)
                                }, 11, false),
                                password: J$.T(169, {
                                    presence: J$.T(137, true, 23, false),
                                    length: J$.T(161, {
                                        minimum: J$.T(145, 6, 22, false),
                                        message: J$.T(153, "must be at least 6 characters", 21, false)
                                    }, 11, false)
                                }, 11, false)
                            }, 11, false), constraints, 1));
                            J$.X1(233, J$.F(225, J$.R(201, 'validate', validate, 1), 0)(J$.R(209, 'input', input, 0), J$.R(217, 'constraints', constraints, 0)));
                        } catch (J$e) {
                            J$.Ex(401, J$e);
                        } finally {
                            if (J$.Fr(409))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(361, 'validate', validate, 0);
            J$.N(369, 'data', data, 0);
            test = J$.N(385, 'test', J$.T(377, test, 12, false, 241), 0);
            J$.N(393, 'utils', utils, 0);
            var validate = J$.X1(41, J$.W(33, 'validate', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "validate.js", 21, false)), validate, 3));
            var data = J$.X1(81, J$.W(73, 'data', J$.T(65, {
                username: J$.T(49, "nick", 21, false),
                password: J$.T(57, "better", 21, false)
            }, 11, false), data, 3));
            var utils = J$.X1(305, J$.W(297, 'utils', J$.F(289, J$.R(273, 'require', require, 2), 0)(J$.T(281, '../TestcaseUtils.js', 21, false)), utils, 3));
            J$.X1(345, J$.M(337, J$.R(313, 'utils', utils, 1), 'entry', 0)(J$.R(321, 'test', test, 1), J$.R(329, 'data', data, 1)));
        } catch (J$e) {
            J$.Ex(417, J$e);
        } finally {
            if (J$.Sr(425)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
