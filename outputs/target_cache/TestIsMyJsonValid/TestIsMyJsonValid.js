J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(7440913, '/home/james/nodejs/HiPar/outputs/target_cache/TestIsMyJsonValid/TestIsMyJsonValid.js');
            function test(myJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(7440849, arguments.callee, this, arguments);
                            arguments = J$.N(7440857, 'arguments', arguments, true, false, false);
                            myJson = J$.N(7440865, 'myJson', myJson, true, false, false);
                            J$.M(7440761, J$.I(typeof console === 'undefined' ? console = J$.R(7440721, 'console', undefined, true, true) : console = J$.R(7440721, 'console', console, true, true)), 'log', false)(J$.T(7440729, 'should be valid', 21, false), J$.F(7440753, J$.R(7440737, 'validate', validate, false, true), false)(J$.R(7440745, 'myJson', myJson, false, false)));
                            J$.M(7440809, J$.I(typeof console === 'undefined' ? console = J$.R(7440769, 'console', undefined, true, true) : console = J$.R(7440769, 'console', console, true, true)), 'log', false)(J$.T(7440777, 'should not be valid', 21, false), J$.F(7440801, J$.R(7440785, 'validate', validate, false, true), false)(J$.T(7440793, {}, 11, false)));
                            J$.M(7440841, J$.I(typeof console === 'undefined' ? console = J$.R(7440817, 'console', undefined, true, true) : console = J$.R(7440817, 'console', console, true, true)), 'log', false)(J$.G(7440833, J$.R(7440825, 'validate', validate, false, true), 'errors'));
                        } catch (J$e) {
                            J$.Ex(7440969, J$e);
                        } finally {
                            if (J$.Fr(7440977))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(7440921, 'validator', validator, false, false, false);
            J$.N(7440929, 'utils', utils, false, false, false);
            J$.N(7440937, 'validate', validate, false, false, false);
            J$.N(7440945, 'myJson', myJson, false, false, false);
            test = J$.N(7440961, 'test', J$.T(7440953, test, 12, false), true, false, false);
            J$.T(7440545, 'use strict', 21, false);
            var validator = J$.W(7440577, 'validator', J$.F(7440569, J$.I(typeof require === 'undefined' ? require = J$.R(7440553, 'require', undefined, true, true) : require = J$.R(7440553, 'require', require, true, true)), false)(J$.T(7440561, 'is-my-json-valid', 21, false)), validator, false, true);
            var utils = J$.W(7440609, 'utils', J$.F(7440601, J$.I(typeof require === 'undefined' ? require = J$.R(7440585, 'require', undefined, true, true) : require = J$.R(7440585, 'require', require, true, true)), false)(J$.T(7440593, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var validate = J$.W(7440689, 'validate', J$.F(7440681, J$.R(7440617, 'validator', validator, false, true), false)(J$.T(7440673, {
                required: J$.T(7440625, true, 23, false),
                type: J$.T(7440633, 'object', 21, false),
                properties: J$.T(7440665, {
                    hello: J$.T(7440657, {
                        required: J$.T(7440641, true, 23, false),
                        type: J$.T(7440649, 'string', 21, false)
                    }, 11, false)
                }, 11, false)
            }, 11, false)), validate, false, true);
            var myJson = J$.W(7440713, 'myJson', J$.T(7440705, { hello: J$.T(7440697, 'world', 21, false) }, 11, false), myJson, false, true);
            J$.M(7440905, J$.R(7440873, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(7440881, 'test', test, false, true), J$.R(7440889, 'myJson', myJson, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(7440897, '__dirname', undefined, true, true) : __dirname = J$.R(7440897, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(7440985, J$e);
        } finally {
            if (J$.Sr(7440993))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

