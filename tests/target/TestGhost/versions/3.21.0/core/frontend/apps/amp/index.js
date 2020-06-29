J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(882073, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/apps/amp/index.js');
            function ampRouter(req, res) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(881889, arguments.callee, this, arguments);
                            arguments = J$.N(881897, 'arguments', arguments, true, false, false);
                            req = J$.N(881905, 'req', req, true, false, false);
                            res = J$.N(881913, 'res', res, true, false, false);
                            J$.N(881921, 'redirectUrl', redirectUrl, false, false, false);
                            if (J$.C(66664, J$.B(89018, '===', J$.M(881753, J$.R(881737, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(881745, 'amp', 21, false)), J$.T(881761, true, 23, false)))) {
                                return J$.Rt(881801, J$.M(881793, J$.R(881769, 'router', router, false, true), 'apply', false)(J$.R(881777, 'this', this, false, false), J$.I(typeof arguments === 'undefined' ? arguments = J$.R(881785, 'arguments', undefined, true, true) : arguments = J$.R(881785, 'arguments', arguments, true, true))));
                            } else {
                                let redirectUrl = J$.W(881849, 'redirectUrl', J$.M(881841, J$.G(881817, J$.R(881809, 'req', req, false, false), 'originalUrl'), 'replace', false)(J$.T(881825, /\/amp\//, 14, false), J$.T(881833, '/', 21, false)), redirectUrl, false, false);
                                J$.M(881881, J$.R(881857, 'urlUtils', urlUtils, false, true), 'redirect301', false)(J$.R(881865, 'res', res, false, false), J$.R(881873, 'redirectUrl', redirectUrl, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(882129, J$e);
                        } finally {
                            if (J$.Fr(882137))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(882081, 'router', router, false, false, false);
            J$.N(882089, 'registerHelpers', registerHelpers, false, false, false);
            J$.N(882097, 'urlUtils', urlUtils, false, false, false);
            J$.N(882105, 'settingsCache', settingsCache, false, false, false);
            ampRouter = J$.N(882121, 'ampRouter', J$.T(882113, ampRouter, 12, false), true, false, false);
            const router = J$.W(881633, 'router', J$.F(881625, J$.I(typeof require === 'undefined' ? require = J$.R(881609, 'require', undefined, true, true) : require = J$.R(881609, 'require', require, true, true)), false)(J$.T(881617, './lib/router', 21, false)), router, false, true);
            const registerHelpers = J$.W(881665, 'registerHelpers', J$.F(881657, J$.I(typeof require === 'undefined' ? require = J$.R(881641, 'require', undefined, true, true) : require = J$.R(881641, 'require', require, true, true)), false)(J$.T(881649, './lib/helpers', 21, false)), registerHelpers, false, true);
            const urlUtils = J$.W(881697, 'urlUtils', J$.F(881689, J$.I(typeof require === 'undefined' ? require = J$.R(881673, 'require', undefined, true, true) : require = J$.R(881673, 'require', require, true, true)), false)(J$.T(881681, '../../../shared/url-utils', 21, false)), urlUtils, false, true);
            const settingsCache = J$.W(881729, 'settingsCache', J$.F(881721, J$.I(typeof require === 'undefined' ? require = J$.R(881705, 'require', undefined, true, true) : require = J$.R(881705, 'require', require, true, true)), false)(J$.T(881713, '../../../server/services/settings/cache', 21, false)), settingsCache, false, true);
            J$.P(882065, J$.I(typeof module === 'undefined' ? module = J$.R(881929, 'module', undefined, true, true) : module = J$.R(881929, 'module', module, true, true)), 'exports', J$.T(882057, {
                activate: J$.T(882049, function activate(ghost) {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(882017, arguments.callee, this, arguments);
                                arguments = J$.N(882025, 'arguments', arguments, true, false, false);
                                ghost = J$.N(882033, 'ghost', ghost, true, false, false);
                                J$.N(882041, 'ampRoute', ampRoute, false, false, false);
                                let ampRoute = J$.W(881945, 'ampRoute', J$.T(881937, '*/amp/', 21, false), ampRoute, false, false);
                                J$.M(881985, J$.G(881961, J$.R(881953, 'ghost', ghost, false, false), 'routeService'), 'registerRouter', false)(J$.R(881969, 'ampRoute', ampRoute, false, false), J$.R(881977, 'ampRouter', ampRouter, false, true));
                                J$.F(882009, J$.R(881993, 'registerHelpers', registerHelpers, false, true), false)(J$.R(882001, 'ghost', ghost, false, false));
                            } catch (J$e) {
                                J$.Ex(882145, J$e);
                            } finally {
                                if (J$.Fr(882153))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false)
            }, 11, false));
        } catch (J$e) {
            J$.Ex(882161, J$e);
        } finally {
            if (J$.Sr(882169))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

