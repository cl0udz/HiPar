J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(2833241, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestIsMyJsonValid/TestIsMyJsonValid.js');
            function test(myJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(2833177, arguments.callee, this, arguments);
                            arguments = J$.N(2833185, 'arguments', arguments, true, false, false);
                            myJson = J$.N(2833193, 'myJson', myJson, true, false, false);
                            J$.M(2833089, J$.I(typeof console === 'undefined' ? console = J$.R(2833049, 'console', undefined, true, true) : console = J$.R(2833049, 'console', console, true, true)), 'log', false)(J$.T(2833057, 'should be valid', 21, false), J$.F(2833081, J$.R(2833065, 'validate', validate, false, true), false)(J$.R(2833073, 'myJson', myJson, false, false)));
                            J$.M(2833137, J$.I(typeof console === 'undefined' ? console = J$.R(2833097, 'console', undefined, true, true) : console = J$.R(2833097, 'console', console, true, true)), 'log', false)(J$.T(2833105, 'should not be valid', 21, false), J$.F(2833129, J$.R(2833113, 'validate', validate, false, true), false)(J$.T(2833121, {}, 11, false)));
                            J$.M(2833169, J$.I(typeof console === 'undefined' ? console = J$.R(2833145, 'console', undefined, true, true) : console = J$.R(2833145, 'console', console, true, true)), 'log', false)(J$.G(2833161, J$.R(2833153, 'validate', validate, false, true), 'errors'));
                        } catch (J$e) {
                            J$.Ex(2833297, J$e);
                        } finally {
                            if (J$.Fr(2833305))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(2833249, 'validator', validator, false, false, false);
            J$.N(2833257, 'utils', utils, false, false, false);
            J$.N(2833265, 'validate', validate, false, false, false);
            J$.N(2833273, 'myJson', myJson, false, false, false);
            test = J$.N(2833289, 'test', J$.T(2833281, test, 12, false), true, false, false);
            J$.T(2832873, 'use strict', 21, false);
            var validator = J$.W(2832905, 'validator', J$.F(2832897, J$.I(typeof require === 'undefined' ? require = J$.R(2832881, 'require', undefined, true, true) : require = J$.R(2832881, 'require', require, true, true)), false)(J$.T(2832889, 'is-my-json-valid', 21, false)), validator, false, true);
            var utils = J$.W(2832937, 'utils', J$.F(2832929, J$.I(typeof require === 'undefined' ? require = J$.R(2832913, 'require', undefined, true, true) : require = J$.R(2832913, 'require', require, true, true)), false)(J$.T(2832921, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var validate = J$.W(2833017, 'validate', J$.F(2833009, J$.R(2832945, 'validator', validator, false, true), false)(J$.T(2833001, {
                required: J$.T(2832953, true, 23, false),
                type: J$.T(2832961, 'object', 21, false),
                properties: J$.T(2832993, {
                    hello: J$.T(2832985, {
                        required: J$.T(2832969, true, 23, false),
                        type: J$.T(2832977, 'string', 21, false)
                    }, 11, false)
                }, 11, false)
            }, 11, false)), validate, false, true);
            var myJson = J$.W(2833041, 'myJson', J$.T(2833033, { hello: J$.T(2833025, 'world', 21, false) }, 11, false), myJson, false, true);
            J$.M(2833233, J$.R(2833201, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(2833209, 'test', test, false, true), J$.R(2833217, 'myJson', myJson, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(2833225, '__dirname', undefined, true, true) : __dirname = J$.R(2833225, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(2833313, J$e);
        } finally {
            if (J$.Sr(2833321))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

