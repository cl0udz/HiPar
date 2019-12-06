J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(298281, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestValib/TestValib.js');
            function test(userJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(298225, arguments.callee, this, arguments);
                            arguments = J$.N(298233, 'arguments', arguments, true, false, false);
                            userJson = J$.N(298241, 'userJson', userJson, true, false, false);
                            J$.M(298105, J$.G(298089, J$.R(298081, 'valib', valib, false, true), 'Object'), 'isEmpty', false)(J$.R(298097, 'userJson', userJson, false, false));
                            J$.M(298137, J$.G(298121, J$.R(298113, 'valib', valib, false, true), 'Object'), 'countKeys', false)(J$.R(298129, 'userJson', userJson, false, false));
                            J$.M(298177, J$.G(298153, J$.R(298145, 'valib', valib, false, true), 'Object'), 'hasValue', false)(J$.R(298161, 'userJson', userJson, false, false), J$.T(298169, 'Yes', 21, false));
                            J$.M(298217, J$.G(298193, J$.R(298185, 'valib', valib, false, true), 'Object'), 'hasKey', false)(J$.R(298201, 'userJson', userJson, false, false), J$.T(298209, 'key3', 21, false));
                        } catch (J$e) {
                            J$.Ex(298329, J$e);
                        } finally {
                            if (J$.Fr(298337))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(298289, 'valib', valib, false, false, false);
            J$.N(298297, 'utils', utils, false, false, false);
            J$.N(298305, 'json', json, false, false, false);
            test = J$.N(298321, 'test', J$.T(298313, test, 12, false), true, false, false);
            J$.T(297905, 'use strict', 21, false);
            var valib = J$.W(297937, 'valib', J$.F(297929, J$.I(typeof require === 'undefined' ? require = J$.R(297913, 'require', undefined, true, true) : require = J$.R(297913, 'require', require, true, true)), false)(J$.T(297921, 'valib', 21, false)), valib, false, true);
            var utils = J$.W(297969, 'utils', J$.F(297961, J$.I(typeof require === 'undefined' ? require = J$.R(297945, 'require', undefined, true, true) : require = J$.R(297945, 'require', require, true, true)), false)(J$.T(297953, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var json = J$.W(298073, 'json', J$.T(298065, {
                key1: J$.T(297977, null, 25, false),
                key2: J$.T(297993, { url: J$.T(297985, 'http://example.com', 21, false) }, 11, false),
                key3: J$.T(298001, '17850', 21, false),
                key4: J$.T(298009, 'OK', 21, false),
                key5: J$.T(298017, '2012-10-06T04:13:00+00:00', 21, false),
                key6: J$.T(298049, [
                    J$.T(298025, 1, 22, false),
                    J$.T(298033, 2, 22, false),
                    J$.T(298041, 3, 22, false)
                ], 10, false),
                key7: J$.T(298057, 'Yes', 21, false)
            }, 11, false), json, false, true);
            J$.M(298273, J$.R(298249, 'utils', utils, false, true), 'entry', false)(J$.R(298257, 'test', test, false, true), J$.R(298265, 'json', json, false, true));
        } catch (J$e) {
            J$.Ex(298345, J$e);
        } finally {
            if (J$.Sr(298353))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

