J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(927745, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/helpers/render-entries.js');
            J$.N(927753, 'debug', debug, false, false, false);
            J$.N(927761, 'formatResponse', formatResponse, false, false, false);
            J$.N(927769, 'renderer', renderer, false, false, false);
            const debug = J$.W(927489, 'debug', J$.M(927481, J$.F(927465, J$.I(typeof require === 'undefined' ? require = J$.R(927449, 'require', undefined, true, true) : require = J$.R(927449, 'require', require, true, true)), false)(J$.T(927457, 'ghost-ignition', 21, false)), 'debug', false)(J$.T(927473, 'services:routing:helpers:render-entries', 21, false)), debug, false, true);
            const formatResponse = J$.W(927521, 'formatResponse', J$.F(927513, J$.I(typeof require === 'undefined' ? require = J$.R(927497, 'require', undefined, true, true) : require = J$.R(927497, 'require', require, true, true)), false)(J$.T(927505, './format-response', 21, false)), formatResponse, false, true);
            const renderer = J$.W(927553, 'renderer', J$.F(927545, J$.I(typeof require === 'undefined' ? require = J$.R(927529, 'require', undefined, true, true) : require = J$.R(927529, 'require', require, true, true)), false)(J$.T(927537, './renderer', 21, false)), renderer, false, true);
            J$.P(927737, J$.I(typeof module === 'undefined' ? module = J$.R(927561, 'module', undefined, true, true) : module = J$.R(927561, 'module', module, true, true)), 'exports', J$.T(927729, function renderEntries(req, res) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(927697, arguments.callee, this, arguments);
                            arguments = J$.N(927705, 'arguments', arguments, true, false, false);
                            req = J$.N(927713, 'req', req, true, false, false);
                            res = J$.N(927721, 'res', res, true, false, false);
                            J$.F(927585, J$.R(927569, 'debug', debug, false, true), false)(J$.T(927577, 'renderEntries called', 21, false));
                            return J$.Rt(927689, J$.T(927681, function renderEntries(result) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(927657, arguments.callee, this, arguments);
                                            arguments = J$.N(927665, 'arguments', arguments, true, false, false);
                                            result = J$.N(927673, 'result', result, true, false, false);
                                            return J$.Rt(927649, J$.F(927641, J$.R(927593, 'renderer', renderer, false, true), false)(J$.R(927601, 'req', req, false, false), J$.R(927609, 'res', res, false, false), J$.M(927633, J$.R(927617, 'formatResponse', formatResponse, false, true), 'entries', false)(J$.R(927625, 'result', result, false, false))));
                                        } catch (J$e) {
                                            J$.Ex(927777, J$e);
                                        } finally {
                                            if (J$.Fr(927785))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(927793, J$e);
                        } finally {
                            if (J$.Fr(927801))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(927809, J$e);
        } finally {
            if (J$.Sr(927817))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

