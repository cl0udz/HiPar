J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(7460177, '/home/james/nodejs/HiPar/outputs/target_cache/TestProperty-Validator/TestProperty-Validator.js');
            function test(user) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(7460081, arguments.callee, this, arguments);
                            arguments = J$.N(7460089, 'arguments', arguments, true, false, false);
                            user = J$.N(7460097, 'user', user, true, false, false);
                            J$.M(7460073, J$.R(7460001, 'property_validator_1', property_validator_1, false, true), 'validate', false)(J$.R(7460009, 'user', user, false, false), J$.T(7460065, [
                                J$.M(7460033, J$.R(7460017, 'property_validator_1', property_validator_1, false, true), 'presence', false)(J$.T(7460025, 'username', 21, false)),
                                J$.M(7460057, J$.R(7460041, 'property_validator_1', property_validator_1, false, true), 'email', false)(J$.T(7460049, 'email_address', 21, false))
                            ], 10, false));
                        } catch (J$e) {
                            J$.Ex(7460225, J$e);
                        } finally {
                            if (J$.Fr(7460233))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(7460185, 'property_validator_1', property_validator_1, false, false, false);
            J$.N(7460193, 'user', user, false, false, false);
            test = J$.N(7460209, 'test', J$.T(7460201, test, 12, false), true, false, false);
            J$.N(7460217, 'utils', utils, false, false, false);
            J$.T(7459905, 'use strict', 21, false);
            J$.P(7459929, J$.I(typeof exports === 'undefined' ? exports = J$.R(7459913, 'exports', undefined, true, true) : exports = J$.R(7459913, 'exports', exports, true, true)), '__esModule', J$.T(7459921, true, 23, false));
            var property_validator_1 = J$.W(7459961, 'property_validator_1', J$.F(7459953, J$.I(typeof require === 'undefined' ? require = J$.R(7459937, 'require', undefined, true, true) : require = J$.R(7459937, 'require', require, true, true)), false)(J$.T(7459945, 'property-validator', 21, false)), property_validator_1, false, true);
            var user = J$.W(7459993, 'user', J$.T(7459985, {
                username: J$.T(7459969, 'nettofarah', 21, false),
                email_address: J$.T(7459977, 'invalid@email', 21, false)
            }, 11, false), user, false, true);
            var utils = J$.W(7460129, 'utils', J$.F(7460121, J$.I(typeof require === 'undefined' ? require = J$.R(7460105, 'require', undefined, true, true) : require = J$.R(7460105, 'require', require, true, true)), false)(J$.T(7460113, '../TestcaseUtils.js', 21, false)), utils, false, true);
            J$.M(7460169, J$.R(7460137, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(7460145, 'test', test, false, true), J$.R(7460153, 'user', user, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(7460161, '__dirname', undefined, true, true) : __dirname = J$.R(7460161, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(7460241, J$e);
        } finally {
            if (J$.Sr(7460249))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

