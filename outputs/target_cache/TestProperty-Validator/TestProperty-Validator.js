J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(3775809, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestProperty-Validator/TestProperty-Validator.js');
            function test(user) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(3775713, arguments.callee, this, arguments);
                            arguments = J$.N(3775721, 'arguments', arguments, true, false, false);
                            user = J$.N(3775729, 'user', user, true, false, false);
                            J$.M(3775705, J$.R(3775633, 'property_validator_1', property_validator_1, false, true), 'validate', false)(J$.R(3775641, 'user', user, false, false), J$.T(3775697, [
                                J$.M(3775665, J$.R(3775649, 'property_validator_1', property_validator_1, false, true), 'presence', false)(J$.T(3775657, 'username', 21, false)),
                                J$.M(3775689, J$.R(3775673, 'property_validator_1', property_validator_1, false, true), 'email', false)(J$.T(3775681, 'email_address', 21, false))
                            ], 10, false));
                        } catch (J$e) {
                            J$.Ex(3775857, J$e);
                        } finally {
                            if (J$.Fr(3775865))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3775817, 'property_validator_1', property_validator_1, false, false, false);
            J$.N(3775825, 'user', user, false, false, false);
            test = J$.N(3775841, 'test', J$.T(3775833, test, 12, false), true, false, false);
            J$.N(3775849, 'utils', utils, false, false, false);
            J$.T(3775537, 'use strict', 21, false);
            J$.P(3775561, J$.I(typeof exports === 'undefined' ? exports = J$.R(3775545, 'exports', undefined, true, true) : exports = J$.R(3775545, 'exports', exports, true, true)), '__esModule', J$.T(3775553, true, 23, false));
            var property_validator_1 = J$.W(3775593, 'property_validator_1', J$.F(3775585, J$.I(typeof require === 'undefined' ? require = J$.R(3775569, 'require', undefined, true, true) : require = J$.R(3775569, 'require', require, true, true)), false)(J$.T(3775577, 'property-validator', 21, false)), property_validator_1, false, true);
            var user = J$.W(3775625, 'user', J$.T(3775617, {
                username: J$.T(3775601, 'nettofarah', 21, false),
                email_address: J$.T(3775609, 'invalid@email', 21, false)
            }, 11, false), user, false, true);
            var utils = J$.W(3775761, 'utils', J$.F(3775753, J$.I(typeof require === 'undefined' ? require = J$.R(3775737, 'require', undefined, true, true) : require = J$.R(3775737, 'require', require, true, true)), false)(J$.T(3775745, '../TestcaseUtils.js', 21, false)), utils, false, true);
            J$.M(3775801, J$.R(3775769, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(3775777, 'test', test, false, true), J$.R(3775785, 'user', user, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3775793, '__dirname', undefined, true, true) : __dirname = J$.R(3775793, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(3775873, J$e);
        } finally {
            if (J$.Sr(3775881))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

