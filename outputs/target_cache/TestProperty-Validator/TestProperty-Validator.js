J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(2848225, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestProperty-Validator/TestProperty-Validator.js');
            function test(user) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(2848129, arguments.callee, this, arguments);
                            arguments = J$.N(2848137, 'arguments', arguments, true, false, false);
                            user = J$.N(2848145, 'user', user, true, false, false);
                            J$.M(2848121, J$.R(2848049, 'property_validator_1', property_validator_1, false, true), 'validate', false)(J$.R(2848057, 'user', user, false, false), J$.T(2848113, [
                                J$.M(2848081, J$.R(2848065, 'property_validator_1', property_validator_1, false, true), 'presence', false)(J$.T(2848073, 'username', 21, false)),
                                J$.M(2848105, J$.R(2848089, 'property_validator_1', property_validator_1, false, true), 'email', false)(J$.T(2848097, 'email_address', 21, false))
                            ], 10, false));
                        } catch (J$e) {
                            J$.Ex(2848273, J$e);
                        } finally {
                            if (J$.Fr(2848281))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(2848233, 'property_validator_1', property_validator_1, false, false, false);
            J$.N(2848241, 'user', user, false, false, false);
            test = J$.N(2848257, 'test', J$.T(2848249, test, 12, false), true, false, false);
            J$.N(2848265, 'utils', utils, false, false, false);
            J$.T(2847953, 'use strict', 21, false);
            J$.P(2847977, J$.I(typeof exports === 'undefined' ? exports = J$.R(2847961, 'exports', undefined, true, true) : exports = J$.R(2847961, 'exports', exports, true, true)), '__esModule', J$.T(2847969, true, 23, false));
            var property_validator_1 = J$.W(2848009, 'property_validator_1', J$.F(2848001, J$.I(typeof require === 'undefined' ? require = J$.R(2847985, 'require', undefined, true, true) : require = J$.R(2847985, 'require', require, true, true)), false)(J$.T(2847993, 'property-validator', 21, false)), property_validator_1, false, true);
            var user = J$.W(2848041, 'user', J$.T(2848033, {
                username: J$.T(2848017, 'nettofarah', 21, false),
                email_address: J$.T(2848025, 'invalid@email', 21, false)
            }, 11, false), user, false, true);
            var utils = J$.W(2848177, 'utils', J$.F(2848169, J$.I(typeof require === 'undefined' ? require = J$.R(2848153, 'require', undefined, true, true) : require = J$.R(2848153, 'require', require, true, true)), false)(J$.T(2848161, '../TestcaseUtils.js', 21, false)), utils, false, true);
            J$.M(2848217, J$.R(2848185, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(2848193, 'test', test, false, true), J$.R(2848201, 'user', user, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(2848209, '__dirname', undefined, true, true) : __dirname = J$.R(2848209, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(2848289, J$e);
        } finally {
            if (J$.Sr(2848297))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

