J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(3766929, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestJsonschema/TestJsonschema.js');
            function test(p) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(3766865, arguments.callee, this, arguments);
                            arguments = J$.N(3766873, 'arguments', arguments, true, false, false);
                            p = J$.N(3766881, 'p', p, true, false, false);
                            J$.M(3766857, J$.I(typeof console === 'undefined' ? console = J$.R(3766817, 'console', undefined, true, true) : console = J$.R(3766817, 'console', console, true, true)), 'log', false)(J$.M(3766849, J$.R(3766825, 'v', v, false, true), 'validate', false)(J$.R(3766833, 'p', p, false, false), J$.R(3766841, 'schema', schema, false, true)));
                        } catch (J$e) {
                            J$.Ex(3767001, J$e);
                        } finally {
                            if (J$.Fr(3767009))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3766937, 'Validator', Validator, false, false, false);
            J$.N(3766945, 'v', v, false, false, false);
            J$.N(3766953, 'addressSchema', addressSchema, false, false, false);
            J$.N(3766961, 'schema', schema, false, false, false);
            J$.N(3766969, 'p', p, false, false, false);
            J$.N(3766977, 'utils', utils, false, false, false);
            test = J$.N(3766993, 'test', J$.T(3766985, test, 12, false), true, false, false);
            var Validator = J$.W(3766409, 'Validator', J$.G(3766401, J$.F(3766393, J$.I(typeof require === 'undefined' ? require = J$.R(3766377, 'require', undefined, true, true) : require = J$.R(3766377, 'require', require, true, true)), false)(J$.T(3766385, 'jsonschema', 21, false)), 'Validator'), Validator, false, true);
            var v = J$.W(3766433, 'v', J$.F(3766425, J$.R(3766417, 'Validator', Validator, false, true), true)(), v, false, true);
            var addressSchema = J$.W(3766569, 'addressSchema', J$.T(3766561, {
                'id': J$.T(3766441, '/SimpleAddress', 21, false),
                'type': J$.T(3766449, 'object', 21, false),
                'properties': J$.T(3766537, {
                    'lines': J$.T(3766481, {
                        'type': J$.T(3766457, 'array', 21, false),
                        'items': J$.T(3766473, { 'type': J$.T(3766465, 'string', 21, false) }, 11, false)
                    }, 11, false),
                    'zip': J$.T(3766497, { 'type': J$.T(3766489, 'string', 21, false) }, 11, false),
                    'city': J$.T(3766513, { 'type': J$.T(3766505, 'string', 21, false) }, 11, false),
                    'country': J$.T(3766529, { 'type': J$.T(3766521, 'string', 21, false) }, 11, false)
                }, 11, false),
                'required': J$.T(3766553, [J$.T(3766545, 'country', 21, false)], 10, false)
            }, 11, false), addressSchema, false, true);
            var schema = J$.W(3766665, 'schema', J$.T(3766657, {
                'id': J$.T(3766577, '/SimplePerson', 21, false),
                'type': J$.T(3766585, 'object', 21, false),
                'properties': J$.T(3766649, {
                    'name': J$.T(3766601, { 'type': J$.T(3766593, 'string', 21, false) }, 11, false),
                    'address': J$.T(3766617, { '$ref': J$.T(3766609, '/SimpleAddress', 21, false) }, 11, false),
                    'votes': J$.T(3766641, {
                        'type': J$.T(3766625, 'integer', 21, false),
                        'minimum': J$.T(3766633, 1, 22, false)
                    }, 11, false)
                }, 11, false)
            }, 11, false), schema, false, true);
            var p = J$.W(3766745, 'p', J$.T(3766737, {
                'name': J$.T(3766673, 'Barack Obama', 21, false),
                'address': J$.T(3766721, {
                    'lines': J$.T(3766689, [J$.T(3766681, '1600 Pennsylvania Avenue Northwest', 21, false)], 10, false),
                    'zip': J$.T(3766697, 'DC 20500', 21, false),
                    'city': J$.T(3766705, 'Washington', 21, false),
                    'country': J$.T(3766713, 'USA', 21, false)
                }, 11, false),
                'votes': J$.T(3766729, 'lots', 21, false)
            }, 11, false), p, false, true);
            J$.M(3766777, J$.R(3766753, 'v', v, false, true), 'addSchema', false)(J$.R(3766761, 'addressSchema', addressSchema, false, true), J$.T(3766769, '/SimpleAddress', 21, false));
            var utils = J$.W(3766809, 'utils', J$.F(3766801, J$.I(typeof require === 'undefined' ? require = J$.R(3766785, 'require', undefined, true, true) : require = J$.R(3766785, 'require', require, true, true)), false)(J$.T(3766793, '../TestcaseUtils', 21, false)), utils, false, true);
            J$.M(3766921, J$.R(3766889, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(3766897, 'test', test, false, true), J$.R(3766905, 'p', p, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3766913, '__dirname', undefined, true, true) : __dirname = J$.R(3766913, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(3767017, J$e);
        } finally {
            if (J$.Sr(3767025))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

