J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(7449777, '/home/james/nodejs/HiPar/outputs/target_cache/TestAjv/TestAjv.js');
            function test(validData) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(7449681, arguments.callee, this, arguments);
                            arguments = J$.N(7449689, 'arguments', arguments, true, false, false);
                            validData = J$.N(7449697, 'validData', validData, true, false, false);
                            J$.M(7449673, J$.R(7449649, 'ajv', ajv, false, true), 'validate', false)(J$.R(7449657, 'schema', schema, false, true), J$.R(7449665, 'validData', validData, false, false));
                        } catch (J$e) {
                            J$.Ex(7449841, J$e);
                        } finally {
                            if (J$.Fr(7449849))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(7449785, 'Ajv', Ajv, false, false, false);
            J$.N(7449793, 'ajv', ajv, false, false, false);
            J$.N(7449801, 'schema', schema, false, false, false);
            J$.N(7449809, 'validData', validData, false, false, false);
            test = J$.N(7449825, 'test', J$.T(7449817, test, 12, false), true, false, false);
            J$.N(7449833, 'utils', utils, false, false, false);
            J$.T(7449465, 'use strict', 21, false);
            var Ajv = J$.W(7449497, 'Ajv', J$.F(7449489, J$.I(typeof require === 'undefined' ? require = J$.R(7449473, 'require', undefined, true, true) : require = J$.R(7449473, 'require', require, true, true)), false)(J$.T(7449481, 'ajv', 21, false)), Ajv, false, true);
            var ajv = J$.W(7449537, 'ajv', J$.F(7449529, J$.R(7449505, 'Ajv', Ajv, false, true), true)(J$.T(7449521, { $data: J$.T(7449513, true, 23, false) }, 11, false)), ajv, false, true);
            var schema = J$.W(7449609, 'schema', J$.T(7449601, {
                'properties': J$.T(7449593, {
                    'smaller': J$.T(7449569, {
                        'type': J$.T(7449545, 'number', 21, false),
                        'maximum': J$.T(7449561, { '$data': J$.T(7449553, '1/larger', 21, false) }, 11, false)
                    }, 11, false),
                    'larger': J$.T(7449585, { 'type': J$.T(7449577, 'number', 21, false) }, 11, false)
                }, 11, false)
            }, 11, false), schema, false, true);
            var validData = J$.W(7449641, 'validData', J$.T(7449633, {
                smaller: J$.T(7449617, 5, 22, false),
                larger: J$.T(7449625, 7, 22, false)
            }, 11, false), validData, false, true);
            var utils = J$.W(7449729, 'utils', J$.F(7449721, J$.I(typeof require === 'undefined' ? require = J$.R(7449705, 'require', undefined, true, true) : require = J$.R(7449705, 'require', require, true, true)), false)(J$.T(7449713, '../TestcaseUtils', 21, false)), utils, false, true);
            J$.M(7449769, J$.R(7449737, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(7449745, 'test', test, false, true), J$.R(7449753, 'validData', validData, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(7449761, '__dirname', undefined, true, true) : __dirname = J$.R(7449761, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(7449857, J$e);
        } finally {
            if (J$.Sr(7449865))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

