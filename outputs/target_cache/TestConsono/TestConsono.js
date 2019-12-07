J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(419889, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestConsono/TestConsono.js');
            function test(userJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(419833, arguments.callee, this, arguments);
                            arguments = J$.N(419841, 'arguments', arguments, true, false, false);
                            userJson = J$.N(419849, 'userJson', userJson, true, false, false);
                            return J$.Rt(419825, J$.F(419817, J$.R(419801, 'consono', consono, false, true), false)(J$.R(419809, 'userJson', userJson, false, false)));
                        } catch (J$e) {
                            J$.Ex(419945, J$e);
                        } finally {
                            if (J$.Fr(419953))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(419897, '_require', _require, false, false, false);
            J$.N(419905, 'consono', consono, false, false, false);
            J$.N(419913, 'utils', utils, false, false, false);
            J$.N(419921, 'json', json, false, false, false);
            test = J$.N(419937, 'test', J$.T(419929, test, 12, false), true, false, false);
            J$.T(419641, 'use strict', 21, false);
            var _require = J$.W(419689, '_require', J$.F(419665, J$.I(typeof require === 'undefined' ? require = J$.R(419649, 'require', undefined, true, true) : require = J$.R(419649, 'require', require, true, true)), false)(J$.T(419657, 'consono', 21, false)), _require, false, true), consono = J$.W(419697, 'consono', J$.G(419681, J$.R(419673, '_require', _require, false, true), 'consono'), consono, false, true);
            var utils = J$.W(419729, 'utils', J$.F(419721, J$.I(typeof require === 'undefined' ? require = J$.R(419705, 'require', undefined, true, true) : require = J$.R(419705, 'require', require, true, true)), false)(J$.T(419713, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var json = J$.W(419793, 'json', J$.T(419785, {
                key1: J$.T(419745, { 'a': J$.T(419737, 1, 22, false) }, 11, false),
                key2: J$.T(419777, [
                    J$.T(419753, 2, 22, false),
                    J$.T(419761, 3, 22, false),
                    J$.T(419769, 4, 22, false)
                ], 10, false)
            }, 11, false), json, false, true);
            J$.M(419881, J$.R(419857, 'utils', utils, false, true), 'entry', false)(J$.R(419865, 'test', test, false, true), J$.R(419873, 'json', json, false, true));
        } catch (J$e) {
            J$.Ex(419961, J$e);
        } finally {
            if (J$.Sr(419969))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

