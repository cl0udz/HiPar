J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(3985545, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestRequest/TestRequest.js');
            function test(input) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(3985457, arguments.callee, this, arguments);
                            arguments = J$.N(3985465, 'arguments', arguments, true, false, false);
                            input = J$.N(3985473, 'input', input, true, false, false);
                            J$.M(3985449, J$.R(3985385, 'request', request, false, true), 'get', false)(J$.R(3985393, 'input', input, false, false), J$.T(3985441, function (error, response, body) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(3985401, arguments.callee, this, arguments);
                                            arguments = J$.N(3985409, 'arguments', arguments, true, false, false);
                                            error = J$.N(3985417, 'error', error, true, false, false);
                                            response = J$.N(3985425, 'response', response, true, false, false);
                                            body = J$.N(3985433, 'body', body, true, false, false);
                                        } catch (J$e) {
                                            J$.Ex(3985593, J$e);
                                        } finally {
                                            if (J$.Fr(3985601))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(3985609, J$e);
                        } finally {
                            if (J$.Fr(3985617))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3985553, 'request', request, false, false, false);
            J$.N(3985561, 'data', data, false, false, false);
            test = J$.N(3985577, 'test', J$.T(3985569, test, 12, false), true, false, false);
            J$.N(3985585, 'utils', utils, false, false, false);
            J$.T(3985305, 'use strict', 21, false);
            var request = J$.W(3985337, 'request', J$.F(3985329, J$.I(typeof require === 'undefined' ? require = J$.R(3985313, 'require', undefined, true, true) : require = J$.R(3985313, 'require', require, true, true)), false)(J$.T(3985321, 'request', 21, false)), request, false, true);
            var data = J$.W(3985377, 'data', J$.T(3985369, {
                uri: J$.T(3985345, 'http://www.wupco.cn', 21, false),
                har: J$.T(3985361, { 'method': J$.T(3985353, 'post', 21, false) }, 11, false)
            }, 11, false), data, false, true);
            var utils = J$.W(3985505, 'utils', J$.F(3985497, J$.I(typeof require === 'undefined' ? require = J$.R(3985481, 'require', undefined, true, true) : require = J$.R(3985481, 'require', require, true, true)), false)(J$.T(3985489, '../TestcaseUtils.js', 21, false)), utils, false, true);
            J$.M(3985537, J$.R(3985513, 'utils', utils, false, true), 'entry', false)(J$.R(3985521, 'test', test, false, true), J$.R(3985529, 'data', data, false, true));
        } catch (J$e) {
            J$.Ex(3985625, J$e);
        } finally {
            if (J$.Sr(3985633))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

