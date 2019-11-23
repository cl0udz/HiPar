J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(2841633, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestAjv/TestAjv.js');
            function test(validData) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(2841537, arguments.callee, this, arguments);
                            arguments = J$.N(2841545, 'arguments', arguments, true, false, false);
                            validData = J$.N(2841553, 'validData', validData, true, false, false);
                            J$.M(2841529, J$.R(2841505, 'ajv', ajv, false, true), 'validate', false)(J$.R(2841513, 'schema', schema, false, true), J$.R(2841521, 'validData', validData, false, false));
                        } catch (J$e) {
                            J$.Ex(2841697, J$e);
                        } finally {
                            if (J$.Fr(2841705))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(2841641, 'Ajv', Ajv, false, false, false);
            J$.N(2841649, 'ajv', ajv, false, false, false);
            J$.N(2841657, 'schema', schema, false, false, false);
            J$.N(2841665, 'validData', validData, false, false, false);
            test = J$.N(2841681, 'test', J$.T(2841673, test, 12, false), true, false, false);
            J$.N(2841689, 'utils', utils, false, false, false);
            J$.T(2841321, 'use strict', 21, false);
            var Ajv = J$.W(2841353, 'Ajv', J$.F(2841345, J$.I(typeof require === 'undefined' ? require = J$.R(2841329, 'require', undefined, true, true) : require = J$.R(2841329, 'require', require, true, true)), false)(J$.T(2841337, 'ajv', 21, false)), Ajv, false, true);
            var ajv = J$.W(2841393, 'ajv', J$.F(2841385, J$.R(2841361, 'Ajv', Ajv, false, true), true)(J$.T(2841377, { $data: J$.T(2841369, true, 23, false) }, 11, false)), ajv, false, true);
            var schema = J$.W(2841465, 'schema', J$.T(2841457, {
                'properties': J$.T(2841449, {
                    'smaller': J$.T(2841425, {
                        'type': J$.T(2841401, 'number', 21, false),
                        'maximum': J$.T(2841417, { '$data': J$.T(2841409, '1/larger', 21, false) }, 11, false)
                    }, 11, false),
                    'larger': J$.T(2841441, { 'type': J$.T(2841433, 'number', 21, false) }, 11, false)
                }, 11, false)
            }, 11, false), schema, false, true);
            var validData = J$.W(2841497, 'validData', J$.T(2841489, {
                smaller: J$.T(2841473, 5, 22, false),
                larger: J$.T(2841481, 7, 22, false)
            }, 11, false), validData, false, true);
            var utils = J$.W(2841585, 'utils', J$.F(2841577, J$.I(typeof require === 'undefined' ? require = J$.R(2841561, 'require', undefined, true, true) : require = J$.R(2841561, 'require', require, true, true)), false)(J$.T(2841569, '../TestcaseUtils', 21, false)), utils, false, true);
            J$.M(2841625, J$.R(2841593, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(2841601, 'test', test, false, true), J$.R(2841609, 'validData', validData, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(2841617, '__dirname', undefined, true, true) : __dirname = J$.R(2841617, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(2841713, J$e);
        } finally {
            if (J$.Sr(2841721))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

