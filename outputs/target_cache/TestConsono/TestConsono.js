J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(302529, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestConsono/TestConsono.js');
            function test(userJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(302473, arguments.callee, this, arguments);
                            arguments = J$.N(302481, 'arguments', arguments, true, false, false);
                            userJson = J$.N(302489, 'userJson', userJson, true, false, false);
                            return J$.Rt(302465, J$.F(302457, J$.R(302441, 'consono', consono, false, true), false)(J$.R(302449, 'userJson', userJson, false, false)));
                        } catch (J$e) {
                            J$.Ex(302585, J$e);
                        } finally {
                            if (J$.Fr(302593))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(302537, '_require', _require, false, false, false);
            J$.N(302545, 'consono', consono, false, false, false);
            J$.N(302553, 'utils', utils, false, false, false);
            J$.N(302561, 'json', json, false, false, false);
            test = J$.N(302577, 'test', J$.T(302569, test, 12, false), true, false, false);
            J$.T(302281, 'use strict', 21, false);
            var _require = J$.W(302329, '_require', J$.F(302305, J$.I(typeof require === 'undefined' ? require = J$.R(302289, 'require', undefined, true, true) : require = J$.R(302289, 'require', require, true, true)), false)(J$.T(302297, 'consono', 21, false)), _require, false, true), consono = J$.W(302337, 'consono', J$.G(302321, J$.R(302313, '_require', _require, false, true), 'consono'), consono, false, true);
            var utils = J$.W(302369, 'utils', J$.F(302361, J$.I(typeof require === 'undefined' ? require = J$.R(302345, 'require', undefined, true, true) : require = J$.R(302345, 'require', require, true, true)), false)(J$.T(302353, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var json = J$.W(302433, 'json', J$.T(302425, {
                key1: J$.T(302385, { 'a': J$.T(302377, 1, 22, false) }, 11, false),
                key2: J$.T(302417, [
                    J$.T(302393, 2, 22, false),
                    J$.T(302401, 3, 22, false),
                    J$.T(302409, 4, 22, false)
                ], 10, false)
            }, 11, false), json, false, true);
            J$.M(302521, J$.R(302497, 'utils', utils, false, true), 'entry', false)(J$.R(302505, 'test', test, false, true), J$.R(302513, 'json', json, false, true));
        } catch (J$e) {
            J$.Ex(302601, J$e);
        } finally {
            if (J$.Sr(302609))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

