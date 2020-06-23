J$.iids = {"9":[1,17,1,24],"17":[1,25,1,37],"25":[1,17,1,38],"33":[1,17,1,48],"41":[1,17,1,48],"49":[1,17,1,48],"57":[2,13,2,22],"65":[2,9,2,24],"73":[2,9,2,24],"81":[2,9,2,24],"89":[6,9,6,25],"97":[7,11,7,19],"105":[10,15,10,22],"113":[11,26,11,34],"121":[11,16,11,36],"129":[9,14,11,38],"137":[13,22,13,30],"145":[13,12,13,32],"153":[14,23,14,31],"161":[14,13,14,33],"169":[15,26,15,34],"177":[15,16,15,36],"185":[8,17,15,38],"193":[17,16,17,25],"201":[17,15,17,26],"209":[5,21,17,28],"217":[5,21,17,28],"225":[5,21,17,28],"233":[22,9,22,24],"241":[23,11,23,19],"249":[25,23,25,31],"257":[25,13,25,33],"265":[26,26,26,42],"273":[26,16,26,44],"281":[27,24,27,33],"289":[27,46,27,47],"297":[27,14,27,49],"305":[24,17,27,51],"313":[21,14,27,53],"321":[21,14,27,53],"329":[21,14,27,53],"337":[32,11,32,25],"345":[34,15,34,51],"353":[34,14,34,52],"361":[35,12,35,22],"369":[36,13,36,25],"377":[37,16,37,21],"385":[33,14,37,23],"393":[39,12,39,18],"401":[31,9,39,20],"409":[31,9,39,20],"417":[31,9,39,20],"425":[42,1,42,2],"433":[42,13,42,26],"441":[42,28,42,44],"449":[42,1,42,45],"451":[42,1,42,12],"457":[42,1,42,46],"465":[44,13,44,20],"473":[44,21,44,39],"481":[44,13,44,40],"489":[44,13,44,40],"497":[44,13,44,40],"505":[47,3,47,10],"513":[47,15,47,16],"521":[47,26,47,27],"529":[47,29,47,35],"537":[47,15,47,36],"539":[47,15,47,25],"545":[47,3,47,37],"547":[47,3,47,14],"553":[47,3,47,38],"561":[46,1,48,2],"569":[46,1,48,2],"577":[46,1,48,2],"585":[50,1,50,6],"593":[50,13,50,17],"601":[50,19,50,20],"609":[50,1,50,21],"611":[50,1,50,12],"617":[50,1,50,22],"625":[1,1,50,22],"633":[1,1,50,22],"641":[1,1,50,22],"649":[1,1,50,22],"657":[1,1,50,22],"665":[1,1,50,22],"673":[1,1,50,22],"681":[46,1,48,2],"689":[1,1,50,22],"697":[46,1,48,2],"705":[46,1,48,2],"713":[1,1,50,22],"721":[1,1,50,22],"nBranches":0,"originalCodeFileName":"/home/james/nodejs/HiPar/tests/target/TestJsonschema/TestJsonschema.js","instrumentedCodeFileName":"/home/james/nodejs/HiPar/tests/target/TestJsonschema/TestJsonschema_jalangi_.js","code":"var Validator = require('jsonschema').Validator;\nvar v = new Validator();\n\n// Address, to be embedded on Person\nvar addressSchema = {\n  \"id\": \"/SimpleAddress\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"lines\": {\n      \"type\": \"array\",\n      \"items\": {\"type\": \"string\"}\n    },\n    \"zip\": {\"type\": \"string\"},\n    \"city\": {\"type\": \"string\"},\n    \"country\": {\"type\": \"string\"}\n  },\n  \"required\": [\"country\"]\n};\n\n// Person\nvar schema = {\n  \"id\": \"/SimplePerson\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"name\": {\"type\": \"string\"},\n    \"address\": {\"$ref\": \"/SimpleAddress\"},\n    \"votes\": {\"type\": \"integer\", \"minimum\": 1}\n  }\n};\n\nvar p = {\n  \"name\": \"Barack Obama\",\n  \"address\": {\n    \"lines\": [ \"1600 Pennsylvania Avenue Northwest\" ],\n    \"zip\": \"DC 20500\",\n    \"city\": \"Washington\",\n    \"country\": \"USA\"\n  },\n  \"votes\": \"lots\"\n};\n\nv.addSchema(addressSchema, '/SimpleAddress');\n\nvar utils = require('../TestcaseUtils');\n\nfunction test(p){\n    console.log(v.validate(p, schema));\n}\n\nutils.entry(test,p);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(625, '/home/james/nodejs/HiPar/tests/target/TestJsonschema/TestJsonschema_jalangi_.js', '/home/james/nodejs/HiPar/tests/target/TestJsonschema/TestJsonschema.js');
            function test(p) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(561, arguments.callee, this, arguments);
                            arguments = J$.N(569, 'arguments', arguments, 4);
                            p = J$.N(577, 'p', p, 4);
                            J$.X1(553, J$.M(545, J$.R(505, 'console', console, 2), 'log', 0)(J$.M(537, J$.R(513, 'v', v, 1), 'validate', 0)(J$.R(521, 'p', p, 0), J$.R(529, 'schema', schema, 1))));
                        } catch (J$e) {
                            J$.Ex(697, J$e);
                        } finally {
                            if (J$.Fr(705))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(633, 'Validator', Validator, 0);
            J$.N(641, 'v', v, 0);
            J$.N(649, 'addressSchema', addressSchema, 0);
            J$.N(657, 'schema', schema, 0);
            J$.N(665, 'p', p, 0);
            J$.N(673, 'utils', utils, 0);
            test = J$.N(689, 'test', J$.T(681, test, 12, false, 561), 0);
            var Validator = J$.X1(49, J$.W(41, 'Validator', J$.G(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'jsonschema', 21, false)), 'Validator', 0), Validator, 3));
            var v = J$.X1(81, J$.W(73, 'v', J$.F(65, J$.R(57, 'Validator', Validator, 1), 1)(), v, 3));
            var addressSchema = J$.X1(225, J$.W(217, 'addressSchema', J$.T(209, {
                "id": J$.T(89, "/SimpleAddress", 21, false),
                "type": J$.T(97, "object", 21, false),
                "properties": J$.T(185, {
                    "lines": J$.T(129, {
                        "type": J$.T(105, "array", 21, false),
                        "items": J$.T(121, {
                            "type": J$.T(113, "string", 21, false)
                        }, 11, false)
                    }, 11, false),
                    "zip": J$.T(145, {
                        "type": J$.T(137, "string", 21, false)
                    }, 11, false),
                    "city": J$.T(161, {
                        "type": J$.T(153, "string", 21, false)
                    }, 11, false),
                    "country": J$.T(177, {
                        "type": J$.T(169, "string", 21, false)
                    }, 11, false)
                }, 11, false),
                "required": J$.T(201, [J$.T(193, "country", 21, false)], 10, false)
            }, 11, false), addressSchema, 3));
            var schema = J$.X1(329, J$.W(321, 'schema', J$.T(313, {
                "id": J$.T(233, "/SimplePerson", 21, false),
                "type": J$.T(241, "object", 21, false),
                "properties": J$.T(305, {
                    "name": J$.T(257, {
                        "type": J$.T(249, "string", 21, false)
                    }, 11, false),
                    "address": J$.T(273, {
                        "$ref": J$.T(265, "/SimpleAddress", 21, false)
                    }, 11, false),
                    "votes": J$.T(297, {
                        "type": J$.T(281, "integer", 21, false),
                        "minimum": J$.T(289, 1, 22, false)
                    }, 11, false)
                }, 11, false)
            }, 11, false), schema, 3));
            var p = J$.X1(417, J$.W(409, 'p', J$.T(401, {
                "name": J$.T(337, "Barack Obama", 21, false),
                "address": J$.T(385, {
                    "lines": J$.T(353, [J$.T(345, "1600 Pennsylvania Avenue Northwest", 21, false)], 10, false),
                    "zip": J$.T(361, "DC 20500", 21, false),
                    "city": J$.T(369, "Washington", 21, false),
                    "country": J$.T(377, "USA", 21, false)
                }, 11, false),
                "votes": J$.T(393, "lots", 21, false)
            }, 11, false), p, 3));
            J$.X1(457, J$.M(449, J$.R(425, 'v', v, 1), 'addSchema', 0)(J$.R(433, 'addressSchema', addressSchema, 1), J$.T(441, '/SimpleAddress', 21, false)));
            var utils = J$.X1(497, J$.W(489, 'utils', J$.F(481, J$.R(465, 'require', require, 2), 0)(J$.T(473, '../TestcaseUtils', 21, false)), utils, 3));
            J$.X1(617, J$.M(609, J$.R(585, 'utils', utils, 1), 'entry', 0)(J$.R(593, 'test', test, 1), J$.R(601, 'p', p, 1)));
        } catch (J$e) {
            J$.Ex(713, J$e);
        } finally {
            if (J$.Sr(721)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
