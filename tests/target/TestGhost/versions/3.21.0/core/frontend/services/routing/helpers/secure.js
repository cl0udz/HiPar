J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(928977, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/helpers/secure.js');
            function setRequestIsSecure(req, data) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(928921, arguments.callee, this, arguments);
                            arguments = J$.N(928929, 'arguments', arguments, true, false, false);
                            req = J$.N(928937, 'req', req, true, false, false);
                            data = J$.N(928945, 'data', data, true, false, false);
                            J$.M(928913, J$.C(69624, J$.M(928817, J$.I(typeof Array === 'undefined' ? Array = J$.R(928801, 'Array', undefined, true, true) : Array = J$.R(928801, 'Array', Array, true, true)), 'isArray', false)(J$.R(928809, 'data', data, false, false))) ? J$.R(928825, 'data', data, false, false) : J$.T(928841, [J$.R(928833, 'data', data, false, false)], 10, false), 'forEach', false)(J$.T(928905, function forEach(d) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(928881, arguments.callee, this, arguments);
                                            arguments = J$.N(928889, 'arguments', arguments, true, false, false);
                                            d = J$.N(928897, 'd', d, true, false, false);
                                            J$.P(928873, J$.R(928849, 'd', d, false, false), 'secure', J$.G(928865, J$.R(928857, 'req', req, false, false), 'secure'));
                                        } catch (J$e) {
                                            J$.Ex(929001, J$e);
                                        } finally {
                                            if (J$.Fr(929009))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(929017, J$e);
                        } finally {
                            if (J$.Fr(929025))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            setRequestIsSecure = J$.N(928993, 'setRequestIsSecure', J$.T(928985, setRequestIsSecure, 12, false), true, false, false);
            J$.P(928969, J$.I(typeof module === 'undefined' ? module = J$.R(928953, 'module', undefined, true, true) : module = J$.R(928953, 'module', module, true, true)), 'exports', J$.R(928961, 'setRequestIsSecure', setRequestIsSecure, false, true));
        } catch (J$e) {
            J$.Ex(929033, J$e);
        } finally {
            if (J$.Sr(929041))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

