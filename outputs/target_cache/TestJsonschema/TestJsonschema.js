J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(7436569, '/home/james/nodejs/HiPar/outputs/target_cache/TestJsonschema/TestJsonschema.js');
            function test(p) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(7436505, arguments.callee, this, arguments);
                            arguments = J$.N(7436513, 'arguments', arguments, true, false, false);
                            p = J$.N(7436521, 'p', p, true, false, false);
                            J$.M(7436497, J$.I(typeof console === 'undefined' ? console = J$.R(7436457, 'console', undefined, true, true) : console = J$.R(7436457, 'console', console, true, true)), 'log', false)(J$.M(7436489, J$.R(7436465, 'v', v, false, true), 'validate', false)(J$.R(7436473, 'p', p, false, false), J$.R(7436481, 'schema', schema, false, true)));
                        } catch (J$e) {
                            J$.Ex(7436641, J$e);
                        } finally {
                            if (J$.Fr(7436649))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(7436577, 'Validator', Validator, false, false, false);
            J$.N(7436585, 'v', v, false, false, false);
            J$.N(7436593, 'addressSchema', addressSchema, false, false, false);
            J$.N(7436601, 'schema', schema, false, false, false);
            J$.N(7436609, 'p', p, false, false, false);
            J$.N(7436617, 'utils', utils, false, false, false);
            test = J$.N(7436633, 'test', J$.T(7436625, test, 12, false), true, false, false);
            var Validator = J$.W(7436049, 'Validator', J$.G(7436041, J$.F(7436033, J$.I(typeof require === 'undefined' ? require = J$.R(7436017, 'require', undefined, true, true) : require = J$.R(7436017, 'require', require, true, true)), false)(J$.T(7436025, 'jsonschema', 21, false)), 'Validator'), Validator, false, true);
            var v = J$.W(7436073, 'v', J$.F(7436065, J$.R(7436057, 'Validator', Validator, false, true), true)(), v, false, true);
            var addressSchema = J$.W(7436209, 'addressSchema', J$.T(7436201, {
                'id': J$.T(7436081, '/SimpleAddress', 21, false),
                'type': J$.T(7436089, 'object', 21, false),
                'properties': J$.T(7436177, {
                    'lines': J$.T(7436121, {
                        'type': J$.T(7436097, 'array', 21, false),
                        'items': J$.T(7436113, { 'type': J$.T(7436105, 'string', 21, false) }, 11, false)
                    }, 11, false),
                    'zip': J$.T(7436137, { 'type': J$.T(7436129, 'string', 21, false) }, 11, false),
                    'city': J$.T(7436153, { 'type': J$.T(7436145, 'string', 21, false) }, 11, false),
                    'country': J$.T(7436169, { 'type': J$.T(7436161, 'string', 21, false) }, 11, false)
                }, 11, false),
                'required': J$.T(7436193, [J$.T(7436185, 'country', 21, false)], 10, false)
            }, 11, false), addressSchema, false, true);
            var schema = J$.W(7436305, 'schema', J$.T(7436297, {
                'id': J$.T(7436217, '/SimplePerson', 21, false),
                'type': J$.T(7436225, 'object', 21, false),
                'properties': J$.T(7436289, {
                    'name': J$.T(7436241, { 'type': J$.T(7436233, 'string', 21, false) }, 11, false),
                    'address': J$.T(7436257, { '$ref': J$.T(7436249, '/SimpleAddress', 21, false) }, 11, false),
                    'votes': J$.T(7436281, {
                        'type': J$.T(7436265, 'integer', 21, false),
                        'minimum': J$.T(7436273, 1, 22, false)
                    }, 11, false)
                }, 11, false)
            }, 11, false), schema, false, true);
            var p = J$.W(7436385, 'p', J$.T(7436377, {
                'name': J$.T(7436313, 'Barack Obama', 21, false),
                'address': J$.T(7436361, {
                    'lines': J$.T(7436329, [J$.T(7436321, '1600 Pennsylvania Avenue Northwest', 21, false)], 10, false),
                    'zip': J$.T(7436337, 'DC 20500', 21, false),
                    'city': J$.T(7436345, 'Washington', 21, false),
                    'country': J$.T(7436353, 'USA', 21, false)
                }, 11, false),
                'votes': J$.T(7436369, 'lots', 21, false)
            }, 11, false), p, false, true);
            J$.M(7436417, J$.R(7436393, 'v', v, false, true), 'addSchema', false)(J$.R(7436401, 'addressSchema', addressSchema, false, true), J$.T(7436409, '/SimpleAddress', 21, false));
            var utils = J$.W(7436449, 'utils', J$.F(7436441, J$.I(typeof require === 'undefined' ? require = J$.R(7436425, 'require', undefined, true, true) : require = J$.R(7436425, 'require', require, true, true)), false)(J$.T(7436433, '../TestcaseUtils', 21, false)), utils, false, true);
            J$.M(7436561, J$.R(7436529, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(7436537, 'test', test, false, true), J$.R(7436545, 'p', p, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(7436553, '__dirname', undefined, true, true) : __dirname = J$.R(7436553, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(7436657, J$e);
        } finally {
            if (J$.Sr(7436665))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

