J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(903929, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/rss_url.js');
            function getRssUrl(data, absolute) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(903873, arguments.callee, this, arguments);
                            arguments = J$.N(903881, 'arguments', arguments, true, false, false);
                            data = J$.N(903889, 'data', data, true, false, false);
                            absolute = J$.N(903897, 'absolute', absolute, true, false, false);
                            return J$.Rt(903865, J$.M(903857, J$.G(903817, J$.R(903809, 'routingService', routingService, false, true), 'registry'), 'getRssUrl', false)(J$.T(903849, {
                                secure: J$.G(903833, J$.R(903825, 'data', data, false, false), 'secure'),
                                absolute: J$.R(903841, 'absolute', absolute, false, false)
                            }, 11, false)));
                        } catch (J$e) {
                            J$.Ex(903961, J$e);
                        } finally {
                            if (J$.Fr(903969))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(903937, 'routingService', routingService, false, false, false);
            getRssUrl = J$.N(903953, 'getRssUrl', J$.T(903945, getRssUrl, 12, false), true, false, false);
            const routingService = J$.W(903801, 'routingService', J$.F(903793, J$.I(typeof require === 'undefined' ? require = J$.R(903777, 'require', undefined, true, true) : require = J$.R(903777, 'require', require, true, true)), false)(J$.T(903785, '../services/routing', 21, false)), routingService, false, true);
            J$.P(903921, J$.I(typeof module === 'undefined' ? module = J$.R(903905, 'module', undefined, true, true) : module = J$.R(903905, 'module', module, true, true)), 'exports', J$.R(903913, 'getRssUrl', getRssUrl, false, true));
        } catch (J$e) {
            J$.Ex(903977, J$e);
        } finally {
            if (J$.Sr(903985))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

