J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(3845825, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestProperty-Validator/TestProperty-Validator.js');
            function test(user) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(3845729, arguments.callee, this, arguments);
                            arguments = J$.N(3845737, 'arguments', arguments, true, false, false);
                            user = J$.N(3845745, 'user', user, true, false, false);
                            J$.M(3845721, J$.R(3845649, 'property_validator_1', property_validator_1, false, true), 'validate', false)(J$.R(3845657, 'user', user, false, false), J$.T(3845713, [
                                J$.M(3845681, J$.R(3845665, 'property_validator_1', property_validator_1, false, true), 'presence', false)(J$.T(3845673, 'username', 21, false)),
                                J$.M(3845705, J$.R(3845689, 'property_validator_1', property_validator_1, false, true), 'email', false)(J$.T(3845697, 'email_address', 21, false))
                            ], 10, false));
                        } catch (J$e) {
                            J$.Ex(3845873, J$e);
                        } finally {
                            if (J$.Fr(3845881))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3845833, 'property_validator_1', property_validator_1, false, false, false);
            J$.N(3845841, 'user', user, false, false, false);
            test = J$.N(3845857, 'test', J$.T(3845849, test, 12, false), true, false, false);
            J$.N(3845865, 'utils', utils, false, false, false);
            J$.T(3845553, 'use strict', 21, false);
            J$.P(3845577, J$.I(typeof exports === 'undefined' ? exports = J$.R(3845561, 'exports', undefined, true, true) : exports = J$.R(3845561, 'exports', exports, true, true)), '__esModule', J$.T(3845569, true, 23, false));
            var property_validator_1 = J$.W(3845609, 'property_validator_1', J$.F(3845601, J$.I(typeof require === 'undefined' ? require = J$.R(3845585, 'require', undefined, true, true) : require = J$.R(3845585, 'require', require, true, true)), false)(J$.T(3845593, 'property-validator', 21, false)), property_validator_1, false, true);
            var user = J$.W(3845641, 'user', J$.T(3845633, {
                username: J$.T(3845617, 'nettofarah', 21, false),
                email_address: J$.T(3845625, 'invalid@email', 21, false)
            }, 11, false), user, false, true);
            var utils = J$.W(3845777, 'utils', J$.F(3845769, J$.I(typeof require === 'undefined' ? require = J$.R(3845753, 'require', undefined, true, true) : require = J$.R(3845753, 'require', require, true, true)), false)(J$.T(3845761, '../TestcaseUtils.js', 21, false)), utils, false, true);
            J$.M(3845817, J$.R(3845785, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(3845793, 'test', test, false, true), J$.R(3845801, 'user', user, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3845809, '__dirname', undefined, true, true) : __dirname = J$.R(3845809, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(3845889, J$e);
        } finally {
            if (J$.Sr(3845897))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

