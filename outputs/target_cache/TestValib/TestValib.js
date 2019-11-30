J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(3085417, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestValib/TestValib.js');
            function test(userJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(3085361, arguments.callee, this, arguments);
                            arguments = J$.N(3085369, 'arguments', arguments, true, false, false);
                            userJson = J$.N(3085377, 'userJson', userJson, true, false, false);
                            J$.M(3085241, J$.G(3085225, J$.R(3085217, 'valib', valib, false, true), 'Object'), 'isEmpty', false)(J$.R(3085233, 'userJson', userJson, false, false));
                            J$.M(3085273, J$.G(3085257, J$.R(3085249, 'valib', valib, false, true), 'Object'), 'countKeys', false)(J$.R(3085265, 'userJson', userJson, false, false));
                            J$.M(3085313, J$.G(3085289, J$.R(3085281, 'valib', valib, false, true), 'Object'), 'hasValue', false)(J$.R(3085297, 'userJson', userJson, false, false), J$.T(3085305, 'Yes', 21, false));
                            J$.M(3085353, J$.G(3085329, J$.R(3085321, 'valib', valib, false, true), 'Object'), 'hasKey', false)(J$.R(3085337, 'userJson', userJson, false, false), J$.T(3085345, 'key3', 21, false));
                        } catch (J$e) {
                            J$.Ex(3085465, J$e);
                        } finally {
                            if (J$.Fr(3085473))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3085425, 'valib', valib, false, false, false);
            J$.N(3085433, 'utils', utils, false, false, false);
            J$.N(3085441, 'json', json, false, false, false);
            test = J$.N(3085457, 'test', J$.T(3085449, test, 12, false), true, false, false);
            J$.T(3085041, 'use strict', 21, false);
            var valib = J$.W(3085073, 'valib', J$.F(3085065, J$.I(typeof require === 'undefined' ? require = J$.R(3085049, 'require', undefined, true, true) : require = J$.R(3085049, 'require', require, true, true)), false)(J$.T(3085057, 'valib', 21, false)), valib, false, true);
            var utils = J$.W(3085105, 'utils', J$.F(3085097, J$.I(typeof require === 'undefined' ? require = J$.R(3085081, 'require', undefined, true, true) : require = J$.R(3085081, 'require', require, true, true)), false)(J$.T(3085089, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var json = J$.W(3085209, 'json', J$.T(3085201, {
                key1: J$.T(3085113, null, 25, false),
                key2: J$.T(3085129, { url: J$.T(3085121, 'http://example.com', 21, false) }, 11, false),
                key3: J$.T(3085137, '17850', 21, false),
                key4: J$.T(3085145, 'OK', 21, false),
                key5: J$.T(3085153, '2012-10-06T04:13:00+00:00', 21, false),
                key6: J$.T(3085185, [
                    J$.T(3085161, 1, 22, false),
                    J$.T(3085169, 2, 22, false),
                    J$.T(3085177, 3, 22, false)
                ], 10, false),
                key7: J$.T(3085193, 'Yes', 21, false)
            }, 11, false), json, false, true);
            J$.M(3085409, J$.R(3085385, 'utils', utils, false, true), 'entry', false)(J$.R(3085393, 'test', test, false, true), J$.R(3085401, 'json', json, false, true));
        } catch (J$e) {
            J$.Ex(3085481, J$e);
        } finally {
            if (J$.Sr(3085489))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

