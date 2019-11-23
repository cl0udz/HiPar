J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(3836945, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestJsonschema/TestJsonschema.js');
            function test(p) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(3836881, arguments.callee, this, arguments);
                            arguments = J$.N(3836889, 'arguments', arguments, true, false, false);
                            p = J$.N(3836897, 'p', p, true, false, false);
                            J$.M(3836873, J$.I(typeof console === 'undefined' ? console = J$.R(3836833, 'console', undefined, true, true) : console = J$.R(3836833, 'console', console, true, true)), 'log', false)(J$.M(3836865, J$.R(3836841, 'v', v, false, true), 'validate', false)(J$.R(3836849, 'p', p, false, false), J$.R(3836857, 'schema', schema, false, true)));
                        } catch (J$e) {
                            J$.Ex(3837017, J$e);
                        } finally {
                            if (J$.Fr(3837025))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3836953, 'Validator', Validator, false, false, false);
            J$.N(3836961, 'v', v, false, false, false);
            J$.N(3836969, 'addressSchema', addressSchema, false, false, false);
            J$.N(3836977, 'schema', schema, false, false, false);
            J$.N(3836985, 'p', p, false, false, false);
            J$.N(3836993, 'utils', utils, false, false, false);
            test = J$.N(3837009, 'test', J$.T(3837001, test, 12, false), true, false, false);
            var Validator = J$.W(3836425, 'Validator', J$.G(3836417, J$.F(3836409, J$.I(typeof require === 'undefined' ? require = J$.R(3836393, 'require', undefined, true, true) : require = J$.R(3836393, 'require', require, true, true)), false)(J$.T(3836401, 'jsonschema', 21, false)), 'Validator'), Validator, false, true);
            var v = J$.W(3836449, 'v', J$.F(3836441, J$.R(3836433, 'Validator', Validator, false, true), true)(), v, false, true);
            var addressSchema = J$.W(3836585, 'addressSchema', J$.T(3836577, {
                'id': J$.T(3836457, '/SimpleAddress', 21, false),
                'type': J$.T(3836465, 'object', 21, false),
                'properties': J$.T(3836553, {
                    'lines': J$.T(3836497, {
                        'type': J$.T(3836473, 'array', 21, false),
                        'items': J$.T(3836489, { 'type': J$.T(3836481, 'string', 21, false) }, 11, false)
                    }, 11, false),
                    'zip': J$.T(3836513, { 'type': J$.T(3836505, 'string', 21, false) }, 11, false),
                    'city': J$.T(3836529, { 'type': J$.T(3836521, 'string', 21, false) }, 11, false),
                    'country': J$.T(3836545, { 'type': J$.T(3836537, 'string', 21, false) }, 11, false)
                }, 11, false),
                'required': J$.T(3836569, [J$.T(3836561, 'country', 21, false)], 10, false)
            }, 11, false), addressSchema, false, true);
            var schema = J$.W(3836681, 'schema', J$.T(3836673, {
                'id': J$.T(3836593, '/SimplePerson', 21, false),
                'type': J$.T(3836601, 'object', 21, false),
                'properties': J$.T(3836665, {
                    'name': J$.T(3836617, { 'type': J$.T(3836609, 'string', 21, false) }, 11, false),
                    'address': J$.T(3836633, { '$ref': J$.T(3836625, '/SimpleAddress', 21, false) }, 11, false),
                    'votes': J$.T(3836657, {
                        'type': J$.T(3836641, 'integer', 21, false),
                        'minimum': J$.T(3836649, 1, 22, false)
                    }, 11, false)
                }, 11, false)
            }, 11, false), schema, false, true);
            var p = J$.W(3836761, 'p', J$.T(3836753, {
                'name': J$.T(3836689, 'Barack Obama', 21, false),
                'address': J$.T(3836737, {
                    'lines': J$.T(3836705, [J$.T(3836697, '1600 Pennsylvania Avenue Northwest', 21, false)], 10, false),
                    'zip': J$.T(3836713, 'DC 20500', 21, false),
                    'city': J$.T(3836721, 'Washington', 21, false),
                    'country': J$.T(3836729, 'USA', 21, false)
                }, 11, false),
                'votes': J$.T(3836745, 'lots', 21, false)
            }, 11, false), p, false, true);
            J$.M(3836793, J$.R(3836769, 'v', v, false, true), 'addSchema', false)(J$.R(3836777, 'addressSchema', addressSchema, false, true), J$.T(3836785, '/SimpleAddress', 21, false));
            var utils = J$.W(3836825, 'utils', J$.F(3836817, J$.I(typeof require === 'undefined' ? require = J$.R(3836801, 'require', undefined, true, true) : require = J$.R(3836801, 'require', require, true, true)), false)(J$.T(3836809, '../TestcaseUtils', 21, false)), utils, false, true);
            J$.M(3836937, J$.R(3836905, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(3836913, 'test', test, false, true), J$.R(3836921, 'p', p, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3836929, '__dirname', undefined, true, true) : __dirname = J$.R(3836929, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(3837033, J$e);
        } finally {
            if (J$.Sr(3837041))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

