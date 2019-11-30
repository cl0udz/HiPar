J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(3066257, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestJpv/TestJpv.js');
            function test(userJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(3066177, arguments.callee, this, arguments);
                            arguments = J$.N(3066185, 'arguments', arguments, true, false, false);
                            userJson = J$.N(3066193, 'userJson', userJson, true, false, false);
                            J$.M(3066169, J$.R(3066145, 'jpv', jpv, false, true), 'validate', false)(J$.R(3066153, 'userJson', userJson, false, false), J$.R(3066161, 'pattern', pattern, false, true));
                        } catch (J$e) {
                            J$.Ex(3066321, J$e);
                        } finally {
                            if (J$.Fr(3066329))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3066265, 'jpv', jpv, false, false, false);
            J$.N(3066273, 'path', path, false, false, false);
            J$.N(3066281, 'utils', utils, false, false, false);
            J$.N(3066289, 'json', json, false, false, false);
            J$.N(3066297, 'pattern', pattern, false, false, false);
            test = J$.N(3066313, 'test', J$.T(3066305, test, 12, false), true, false, false);
            J$.T(3065865, 'use strict', 21, false);
            var jpv = J$.W(3065897, 'jpv', J$.F(3065889, J$.I(typeof require === 'undefined' ? require = J$.R(3065873, 'require', undefined, true, true) : require = J$.R(3065873, 'require', require, true, true)), false)(J$.T(3065881, 'jpv', 21, false)), jpv, false, true);
            var path = J$.W(3065929, 'path', J$.F(3065921, J$.I(typeof require === 'undefined' ? require = J$.R(3065905, 'require', undefined, true, true) : require = J$.R(3065905, 'require', require, true, true)), false)(J$.T(3065913, 'path', 21, false)), path, false, true);
            var utils = J$.W(3065961, 'utils', J$.F(3065953, J$.I(typeof require === 'undefined' ? require = J$.R(3065937, 'require', undefined, true, true) : require = J$.R(3065937, 'require', require, true, true)), false)(J$.T(3065945, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var json = J$.W(3066065, 'json', J$.T(3066057, {
                key1: J$.T(3065969, null, 25, false),
                key2: J$.T(3065985, { url: J$.T(3065977, 'http://example.com', 21, false) }, 11, false),
                key3: J$.T(3065993, '17850', 21, false),
                key4: J$.T(3066001, 'OK', 21, false),
                key5: J$.T(3066009, '2012-10-06T04:13:00+00:00', 21, false),
                key6: J$.T(3066041, [
                    J$.T(3066017, 1, 22, false),
                    J$.T(3066025, 2, 22, false),
                    J$.T(3066033, 3, 22, false)
                ], 10, false),
                key7: J$.T(3066049, 'Yes', 21, false)
            }, 11, false), json, false, true);
            var pattern = J$.W(3066137, 'pattern', J$.T(3066129, {
                key1: J$.T(3066073, '(null)', 21, false),
                key2: J$.T(3066089, { url: J$.T(3066081, '[url]', 21, false) }, 11, false),
                key3: J$.T(3066097, /[0-9]+/i, 14, false),
                key4: J$.T(3066105, 'OK', 21, false),
                key5: J$.T(3066113, '[datetime]', 21, false),
                key6: J$.T(3066121, '![empty]', 21, false)
            }, 11, false), pattern, false, true);
            J$.M(3066217, J$.I(typeof console === 'undefined' ? console = J$.R(3066201, 'console', undefined, true, true) : console = J$.R(3066201, 'console', console, true, true)), 'log', false)(J$.R(3066209, 'json', json, false, true));
            J$.M(3066249, J$.R(3066225, 'utils', utils, false, true), 'entry', false)(J$.R(3066233, 'test', test, false, true), J$.R(3066241, 'json', json, false, true));
        } catch (J$e) {
            J$.Ex(3066337, J$e);
        } finally {
            if (J$.Sr(3066345))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

