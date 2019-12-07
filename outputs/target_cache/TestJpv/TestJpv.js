J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(289385, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestJpv/TestJpv.js');
            function test(userJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(289329, arguments.callee, this, arguments);
                            arguments = J$.N(289337, 'arguments', arguments, true, false, false);
                            userJson = J$.N(289345, 'userJson', userJson, true, false, false);
                            return J$.Rt(289321, J$.M(289313, J$.R(289289, 'jpv', jpv, false, true), 'validate', false)(J$.R(289297, 'userJson', userJson, false, false), J$.R(289305, 'pattern', pattern, false, true)));
                        } catch (J$e) {
                            J$.Ex(289449, J$e);
                        } finally {
                            if (J$.Fr(289457))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(289393, 'jpv', jpv, false, false, false);
            J$.N(289401, 'path', path, false, false, false);
            J$.N(289409, 'utils', utils, false, false, false);
            J$.N(289417, 'json', json, false, false, false);
            J$.N(289425, 'pattern', pattern, false, false, false);
            test = J$.N(289441, 'test', J$.T(289433, test, 12, false), true, false, false);
            J$.T(288993, 'use strict', 21, false);
            var jpv = J$.W(289025, 'jpv', J$.F(289017, J$.I(typeof require === 'undefined' ? require = J$.R(289001, 'require', undefined, true, true) : require = J$.R(289001, 'require', require, true, true)), false)(J$.T(289009, 'jpv', 21, false)), jpv, false, true);
            var path = J$.W(289057, 'path', J$.F(289049, J$.I(typeof require === 'undefined' ? require = J$.R(289033, 'require', undefined, true, true) : require = J$.R(289033, 'require', require, true, true)), false)(J$.T(289041, 'path', 21, false)), path, false, true);
            var utils = J$.W(289089, 'utils', J$.F(289081, J$.I(typeof require === 'undefined' ? require = J$.R(289065, 'require', undefined, true, true) : require = J$.R(289065, 'require', require, true, true)), false)(J$.T(289073, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var json = J$.W(289201, 'json', J$.T(289193, {
                key1: J$.T(289097, null, 25, false),
                key2: J$.T(289113, { url: J$.T(289105, 'http://example.com', 21, false) }, 11, false),
                key3: J$.T(289121, '17850', 21, false),
                key4: J$.T(289129, 'OK', 21, false),
                key5: J$.T(289137, '2012-10-06T04:13:00+00:00', 21, false),
                key6: J$.T(289169, [
                    J$.T(289145, 1, 22, false),
                    J$.T(289153, 2, 22, false),
                    J$.T(289161, 3, 22, false)
                ], 10, false),
                key7: J$.T(289185, { 'a': J$.T(289177, 1, 22, false) }, 11, false)
            }, 11, false), json, false, true);
            var pattern = J$.W(289281, 'pattern', J$.T(289273, {
                key1: J$.T(289209, '(null)', 21, false),
                key2: J$.T(289225, { url: J$.T(289217, '[url]', 21, false) }, 11, false),
                key3: J$.T(289233, /[0-9]+/i, 14, false),
                key4: J$.T(289241, 'OK', 21, false),
                key5: J$.T(289249, '[datetime]', 21, false),
                key6: J$.T(289257, '![empty]', 21, false),
                key7: J$.T(289265, '(object)', 21, false)
            }, 11, false), pattern, false, true);
            J$.M(289377, J$.R(289353, 'utils', utils, false, true), 'entry', false)(J$.R(289361, 'test', test, false, true), J$.R(289369, 'json', json, false, true));
        } catch (J$e) {
            J$.Ex(289465, J$e);
        } finally {
            if (J$.Sr(289473))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

