J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(913329, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/apps/proxy.js');
            J$.N(913337, 'helpers', helpers, false, false, false);
            J$.N(913345, 'routingService', routingService, false, false, false);
            const helpers = J$.W(913065, 'helpers', J$.F(913057, J$.I(typeof require === 'undefined' ? require = J$.R(913041, 'require', undefined, true, true) : require = J$.R(913041, 'require', require, true, true)), false)(J$.T(913049, '../../services/themes/handlebars/register', 21, false)), helpers, false, true);
            const routingService = J$.W(913097, 'routingService', J$.F(913089, J$.I(typeof require === 'undefined' ? require = J$.R(913073, 'require', undefined, true, true) : require = J$.R(913073, 'require', require, true, true)), false)(J$.T(913081, '../../services/routing', 21, false)), routingService, false, true);
            J$.P(913321, J$.G(913113, J$.I(typeof module === 'undefined' ? module = J$.R(913105, 'module', undefined, true, true) : module = J$.R(913105, 'module', module, true, true)), 'exports'), 'getInstance', J$.T(913313, function getInstance() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(913289, arguments.callee, this, arguments);
                            arguments = J$.N(913297, 'arguments', arguments, true, false, false);
                            J$.N(913305, 'appRouter', appRouter, false, false, false);
                            const appRouter = J$.W(913153, 'appRouter', J$.M(913145, J$.G(913129, J$.R(913121, 'routingService', routingService, false, true), 'registry'), 'getRouter', false)(J$.T(913137, 'appRouter', 21, false)), appRouter, false, false);
                            return J$.Rt(913281, J$.T(913273, {
                                helpers: J$.T(913225, {
                                    register: J$.M(913185, J$.G(913169, J$.R(913161, 'helpers', helpers, false, true), 'registerThemeHelper'), 'bind', false)(J$.R(913177, 'helpers', helpers, false, true)),
                                    registerAsync: J$.M(913217, J$.G(913201, J$.R(913193, 'helpers', helpers, false, true), 'registerAsyncThemeHelper'), 'bind', false)(J$.R(913209, 'helpers', helpers, false, true))
                                }, 11, false),
                                routeService: J$.T(913265, { registerRouter: J$.M(913257, J$.G(913241, J$.R(913233, 'appRouter', appRouter, false, false), 'mountRouter'), 'bind', false)(J$.R(913249, 'appRouter', appRouter, false, false)) }, 11, false)
                            }, 11, false));
                        } catch (J$e) {
                            J$.Ex(913353, J$e);
                        } finally {
                            if (J$.Fr(913361))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(913369, J$e);
        } finally {
            if (J$.Sr(913377))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

