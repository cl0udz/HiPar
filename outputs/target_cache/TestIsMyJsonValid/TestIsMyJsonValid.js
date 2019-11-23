J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(2832729, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestIsMyJsonValid/TestIsMyJsonValid.js');
            function test(myJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(2832665, arguments.callee, this, arguments);
                            arguments = J$.N(2832673, 'arguments', arguments, true, false, false);
                            myJson = J$.N(2832681, 'myJson', myJson, true, false, false);
                            J$.M(2832577, J$.I(typeof console === 'undefined' ? console = J$.R(2832537, 'console', undefined, true, true) : console = J$.R(2832537, 'console', console, true, true)), 'log', false)(J$.T(2832545, 'should be valid', 21, false), J$.F(2832569, J$.R(2832553, 'validate', validate, false, true), false)(J$.R(2832561, 'myJson', myJson, false, false)));
                            J$.M(2832625, J$.I(typeof console === 'undefined' ? console = J$.R(2832585, 'console', undefined, true, true) : console = J$.R(2832585, 'console', console, true, true)), 'log', false)(J$.T(2832593, 'should not be valid', 21, false), J$.F(2832617, J$.R(2832601, 'validate', validate, false, true), false)(J$.T(2832609, {}, 11, false)));
                            J$.M(2832657, J$.I(typeof console === 'undefined' ? console = J$.R(2832633, 'console', undefined, true, true) : console = J$.R(2832633, 'console', console, true, true)), 'log', false)(J$.G(2832649, J$.R(2832641, 'validate', validate, false, true), 'errors'));
                        } catch (J$e) {
                            J$.Ex(2832785, J$e);
                        } finally {
                            if (J$.Fr(2832793))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(2832737, 'validator', validator, false, false, false);
            J$.N(2832745, 'utils', utils, false, false, false);
            J$.N(2832753, 'validate', validate, false, false, false);
            J$.N(2832761, 'myJson', myJson, false, false, false);
            test = J$.N(2832777, 'test', J$.T(2832769, test, 12, false), true, false, false);
            J$.T(2832361, 'use strict', 21, false);
            var validator = J$.W(2832393, 'validator', J$.F(2832385, J$.I(typeof require === 'undefined' ? require = J$.R(2832369, 'require', undefined, true, true) : require = J$.R(2832369, 'require', require, true, true)), false)(J$.T(2832377, 'is-my-json-valid', 21, false)), validator, false, true);
            var utils = J$.W(2832425, 'utils', J$.F(2832417, J$.I(typeof require === 'undefined' ? require = J$.R(2832401, 'require', undefined, true, true) : require = J$.R(2832401, 'require', require, true, true)), false)(J$.T(2832409, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var validate = J$.W(2832505, 'validate', J$.F(2832497, J$.R(2832433, 'validator', validator, false, true), false)(J$.T(2832489, {
                required: J$.T(2832441, true, 23, false),
                type: J$.T(2832449, 'object', 21, false),
                properties: J$.T(2832481, {
                    hello: J$.T(2832473, {
                        required: J$.T(2832457, true, 23, false),
                        type: J$.T(2832465, 'string', 21, false)
                    }, 11, false)
                }, 11, false)
            }, 11, false)), validate, false, true);
            var myJson = J$.W(2832529, 'myJson', J$.T(2832521, { hello: J$.T(2832513, 'world', 21, false) }, 11, false), myJson, false, true);
            J$.M(2832721, J$.R(2832689, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(2832697, 'test', test, false, true), J$.R(2832705, 'myJson', myJson, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(2832713, '__dirname', undefined, true, true) : __dirname = J$.R(2832713, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(2832801, J$e);
        } finally {
            if (J$.Sr(2832809))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

