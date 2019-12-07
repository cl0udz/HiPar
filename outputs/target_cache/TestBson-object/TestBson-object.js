J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(316473, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestBson-object/TestBson-object.js');
            function test(userJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(316417, arguments.callee, this, arguments);
                            arguments = J$.N(316425, 'arguments', arguments, true, false, false);
                            userJson = J$.N(316433, 'userJson', userJson, true, false, false);
                            return J$.Rt(316409, J$.F(316401, J$.R(316385, 'ObjectID', ObjectID, false, true), false)(J$.R(316393, 'userJson', userJson, false, false)));
                        } catch (J$e) {
                            J$.Ex(316521, J$e);
                        } finally {
                            if (J$.Fr(316529))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(316481, 'ObjectID', ObjectID, false, false, false);
            J$.N(316489, 'utils', utils, false, false, false);
            J$.N(316497, 'json', json, false, false, false);
            test = J$.N(316513, 'test', J$.T(316505, test, 12, false), true, false, false);
            J$.T(316281, 'use strict', 21, false);
            var ObjectID = J$.W(316313, 'ObjectID', J$.F(316305, J$.I(typeof require === 'undefined' ? require = J$.R(316289, 'require', undefined, true, true) : require = J$.R(316289, 'require', require, true, true)), false)(J$.T(316297, 'bson-objectid', 21, false)), ObjectID, false, true);
            var utils = J$.W(316345, 'utils', J$.F(316337, J$.I(typeof require === 'undefined' ? require = J$.R(316321, 'require', undefined, true, true) : require = J$.R(316321, 'require', require, true, true)), false)(J$.T(316329, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var json = J$.W(316377, 'json', J$.T(316369, { key: J$.T(316361, { url: J$.T(316353, 'http://example.com', 21, false) }, 11, false) }, 11, false), json, false, true);
            J$.M(316465, J$.R(316441, 'utils', utils, false, true), 'entry', false)(J$.R(316449, 'test', test, false, true), J$.R(316457, 'json', json, false, true));
        } catch (J$e) {
            J$.Ex(316537, J$e);
        } finally {
            if (J$.Sr(316545))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

