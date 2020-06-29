J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(923769, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/helpers/error.js');
            function handleError(next) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(923721, arguments.callee, this, arguments);
                            arguments = J$.N(923729, 'arguments', arguments, true, false, false);
                            next = J$.N(923737, 'next', next, true, false, false);
                            return J$.Rt(923713, J$.T(923705, function handleError(err) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(923681, arguments.callee, this, arguments);
                                            arguments = J$.N(923689, 'arguments', arguments, true, false, false);
                                            err = J$.N(923697, 'err', err, true, false, false);
                                            if (J$.C(69472, J$.B(89802, '===', J$.G(923561, J$.R(923553, 'err', err, false, false), 'errorType'), J$.T(923569, 'NotFoundError', 21, false)))) {
                                                return J$.Rt(923593, J$.F(923585, J$.R(923577, 'next', next, false, false), false)());
                                            }
                                            if (J$.C(69480, J$.B(89810, '===', J$.G(923609, J$.R(923601, 'err', err, false, false), 'errorType'), J$.T(923617, 'ValidationError', 21, false)))) {
                                                return J$.Rt(923641, J$.F(923633, J$.R(923625, 'next', next, false, false), false)());
                                            }
                                            return J$.Rt(923673, J$.F(923665, J$.R(923649, 'next', next, false, false), false)(J$.R(923657, 'err', err, false, false)));
                                        } catch (J$e) {
                                            J$.Ex(923793, J$e);
                                        } finally {
                                            if (J$.Fr(923801))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(923809, J$e);
                        } finally {
                            if (J$.Fr(923817))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            handleError = J$.N(923785, 'handleError', J$.T(923777, handleError, 12, false), true, false, false);
            J$.P(923761, J$.I(typeof module === 'undefined' ? module = J$.R(923745, 'module', undefined, true, true) : module = J$.R(923745, 'module', module, true, true)), 'exports', J$.R(923753, 'handleError', handleError, false, true));
        } catch (J$e) {
            J$.Ex(923825, J$e);
        } finally {
            if (J$.Sr(923833))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

