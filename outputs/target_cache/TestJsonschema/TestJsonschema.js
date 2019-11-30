J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(2828897, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestJsonschema/TestJsonschema.js');
            function test(p) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(2828833, arguments.callee, this, arguments);
                            arguments = J$.N(2828841, 'arguments', arguments, true, false, false);
                            p = J$.N(2828849, 'p', p, true, false, false);
                            J$.M(2828825, J$.I(typeof console === 'undefined' ? console = J$.R(2828785, 'console', undefined, true, true) : console = J$.R(2828785, 'console', console, true, true)), 'log', false)(J$.M(2828817, J$.R(2828793, 'v', v, false, true), 'validate', false)(J$.R(2828801, 'p', p, false, false), J$.R(2828809, 'schema', schema, false, true)));
                        } catch (J$e) {
                            J$.Ex(2828969, J$e);
                        } finally {
                            if (J$.Fr(2828977))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(2828905, 'Validator', Validator, false, false, false);
            J$.N(2828913, 'v', v, false, false, false);
            J$.N(2828921, 'addressSchema', addressSchema, false, false, false);
            J$.N(2828929, 'schema', schema, false, false, false);
            J$.N(2828937, 'p', p, false, false, false);
            J$.N(2828945, 'utils', utils, false, false, false);
            test = J$.N(2828961, 'test', J$.T(2828953, test, 12, false), true, false, false);
            var Validator = J$.W(2828377, 'Validator', J$.G(2828369, J$.F(2828361, J$.I(typeof require === 'undefined' ? require = J$.R(2828345, 'require', undefined, true, true) : require = J$.R(2828345, 'require', require, true, true)), false)(J$.T(2828353, 'jsonschema', 21, false)), 'Validator'), Validator, false, true);
            var v = J$.W(2828401, 'v', J$.F(2828393, J$.R(2828385, 'Validator', Validator, false, true), true)(), v, false, true);
            var addressSchema = J$.W(2828537, 'addressSchema', J$.T(2828529, {
                'id': J$.T(2828409, '/SimpleAddress', 21, false),
                'type': J$.T(2828417, 'object', 21, false),
                'properties': J$.T(2828505, {
                    'lines': J$.T(2828449, {
                        'type': J$.T(2828425, 'array', 21, false),
                        'items': J$.T(2828441, { 'type': J$.T(2828433, 'string', 21, false) }, 11, false)
                    }, 11, false),
                    'zip': J$.T(2828465, { 'type': J$.T(2828457, 'string', 21, false) }, 11, false),
                    'city': J$.T(2828481, { 'type': J$.T(2828473, 'string', 21, false) }, 11, false),
                    'country': J$.T(2828497, { 'type': J$.T(2828489, 'string', 21, false) }, 11, false)
                }, 11, false),
                'required': J$.T(2828521, [J$.T(2828513, 'country', 21, false)], 10, false)
            }, 11, false), addressSchema, false, true);
            var schema = J$.W(2828633, 'schema', J$.T(2828625, {
                'id': J$.T(2828545, '/SimplePerson', 21, false),
                'type': J$.T(2828553, 'object', 21, false),
                'properties': J$.T(2828617, {
                    'name': J$.T(2828569, { 'type': J$.T(2828561, 'string', 21, false) }, 11, false),
                    'address': J$.T(2828585, { '$ref': J$.T(2828577, '/SimpleAddress', 21, false) }, 11, false),
                    'votes': J$.T(2828609, {
                        'type': J$.T(2828593, 'integer', 21, false),
                        'minimum': J$.T(2828601, 1, 22, false)
                    }, 11, false)
                }, 11, false)
            }, 11, false), schema, false, true);
            var p = J$.W(2828713, 'p', J$.T(2828705, {
                'name': J$.T(2828641, 'Barack Obama', 21, false),
                'address': J$.T(2828689, {
                    'lines': J$.T(2828657, [J$.T(2828649, '1600 Pennsylvania Avenue Northwest', 21, false)], 10, false),
                    'zip': J$.T(2828665, 'DC 20500', 21, false),
                    'city': J$.T(2828673, 'Washington', 21, false),
                    'country': J$.T(2828681, 'USA', 21, false)
                }, 11, false),
                'votes': J$.T(2828697, 'lots', 21, false)
            }, 11, false), p, false, true);
            J$.M(2828745, J$.R(2828721, 'v', v, false, true), 'addSchema', false)(J$.R(2828729, 'addressSchema', addressSchema, false, true), J$.T(2828737, '/SimpleAddress', 21, false));
            var utils = J$.W(2828777, 'utils', J$.F(2828769, J$.I(typeof require === 'undefined' ? require = J$.R(2828753, 'require', undefined, true, true) : require = J$.R(2828753, 'require', require, true, true)), false)(J$.T(2828761, '../TestcaseUtils', 21, false)), utils, false, true);
            J$.M(2828889, J$.R(2828857, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(2828865, 'test', test, false, true), J$.R(2828873, 'p', p, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(2828881, '__dirname', undefined, true, true) : __dirname = J$.R(2828881, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(2828985, J$e);
        } finally {
            if (J$.Sr(2828993))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

