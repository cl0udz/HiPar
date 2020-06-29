J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(922193, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/helpers/context.js');
            function setResponseContext(req, res, data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(922121, arguments.callee, this, arguments);
                            arguments = J$.N(922129, 'arguments', arguments, true, false, false);
                            req = J$.N(922137, 'req', req, true, false, false);
                            res = J$.N(922145, 'res', res, true, false, false);
                            data = J$.N(922153, 'data', data, true, false, false);
                            J$.N(922161, 'pageParam', pageParam, false, false, false);
                            const pageParam = J$.W(921161, 'pageParam', J$.C(69232, J$.C(69224, J$.G(921065, J$.R(921057, 'req', req, false, false), 'params')) ? J$.B(89690, '!==', J$.G(921089, J$.G(921081, J$.R(921073, 'req', req, false, false), 'params'), 'page'), J$.T(921097, undefined, 24, false)) : J$._()) ? J$.F(921145, J$.I(typeof parseInt === 'undefined' ? parseInt = J$.R(921105, 'parseInt', undefined, true, true) : parseInt = J$.R(921105, 'parseInt', parseInt, true, true)), false)(J$.G(921129, J$.G(921121, J$.R(921113, 'req', req, false, false), 'params'), 'page'), J$.T(921137, 10, 22, false)) : J$.T(921153, 1, 22, false), pageParam, false, false);
                            J$.P(921201, J$.R(921169, 'res', res, false, false), 'locals', J$.C(69240, J$.G(921185, J$.R(921177, 'res', res, false, false), 'locals')) ? J$._() : J$.T(921193, {}, 11, false));
                            J$.P(921233, J$.G(921217, J$.R(921209, 'res', res, false, false), 'locals'), 'context', J$.T(921225, [], 10, false));
                            if (J$.C(69248, J$.U(89698, '!', J$.G(921257, J$.G(921249, J$.R(921241, 'res', res, false, false), 'locals'), 'relativeUrl')))) {
                                return J$.Rt(921265, undefined);
                            }
                            if (J$.C(69264, J$.C(69256, J$.U(89706, '!', J$.F(921289, J$.I(typeof isNaN === 'undefined' ? isNaN = J$.R(921273, 'isNaN', undefined, true, true) : isNaN = J$.R(921273, 'isNaN', isNaN, true, true)), false)(J$.R(921281, 'pageParam', pageParam, false, false)))) ? J$.B(89714, '>', J$.R(921297, 'pageParam', pageParam, false, false), J$.T(921305, 1, 22, false)) : J$._())) {
                                J$.M(921345, J$.G(921329, J$.G(921321, J$.R(921313, 'res', res, false, false), 'locals'), 'context'), 'push', false)(J$.T(921337, 'paged', 21, false));
                            }
                            if (J$.C(69272, J$.M(921385, J$.R(921353, 'homePattern', homePattern, false, true), 'test', false)(J$.G(921377, J$.G(921369, J$.R(921361, 'res', res, false, false), 'locals'), 'relativeUrl')))) {
                                J$.M(921425, J$.G(921409, J$.G(921401, J$.R(921393, 'res', res, false, false), 'locals'), 'context'), 'push', false)(J$.T(921417, 'home', 21, false));
                            }
                            if (J$.C(69296, J$.C(69288, J$.M(921465, J$.R(921433, 'ampPattern', ampPattern, false, true), 'test', false)(J$.G(921457, J$.G(921449, J$.R(921441, 'res', res, false, false), 'locals'), 'relativeUrl'))) ? J$.C(69280, J$.G(921481, J$.R(921473, 'data', data, false, false), 'post')) ? J$._() : J$.G(921497, J$.R(921489, 'data', data, false, false), 'page') : J$._())) {
                                J$.M(921537, J$.G(921521, J$.G(921513, J$.R(921505, 'res', res, false, false), 'locals'), 'context'), 'push', false)(J$.T(921529, 'amp', 21, false));
                            }
                            if (J$.C(69312, J$.C(69304, J$.G(921553, J$.R(921545, 'res', res, false, false), 'routerOptions')) ? J$.G(921577, J$.G(921569, J$.R(921561, 'res', res, false, false), 'routerOptions'), 'context') : J$._())) {
                                J$.P(921657, J$.G(921593, J$.R(921585, 'res', res, false, false), 'locals'), 'context', J$.M(921649, J$.G(921617, J$.G(921609, J$.R(921601, 'res', res, false, false), 'locals'), 'context'), 'concat', false)(J$.G(921641, J$.G(921633, J$.R(921625, 'res', res, false, false), 'routerOptions'), 'context')));
                            }
                            if (J$.C(69328, J$.M(921697, J$.R(921665, 'privatePattern', privatePattern, false, true), 'test', false)(J$.G(921689, J$.G(921681, J$.R(921673, 'res', res, false, false), 'locals'), 'relativeUrl')))) {
                                if (J$.C(69320, J$.U(89722, '!', J$.M(921737, J$.G(921721, J$.G(921713, J$.R(921705, 'res', res, false, false), 'locals'), 'context'), 'includes', false)(J$.T(921729, 'private', 21, false))))) {
                                    J$.M(921777, J$.G(921761, J$.G(921753, J$.R(921745, 'res', res, false, false), 'locals'), 'context'), 'push', false)(J$.T(921769, 'private', 21, false));
                                }
                            }
                            if (J$.C(69408, J$.C(69344, J$.C(69336, J$.R(921785, 'data', data, false, false)) ? J$.G(921801, J$.R(921793, 'data', data, false, false), 'post') : J$._()) ? J$.G(921825, J$.G(921817, J$.R(921809, 'data', data, false, false), 'post'), 'page') : J$._())) {
                                if (J$.C(69352, J$.U(89730, '!', J$.M(921865, J$.G(921849, J$.G(921841, J$.R(921833, 'res', res, false, false), 'locals'), 'context'), 'includes', false)(J$.T(921857, 'page', 21, false))))) {
                                    J$.M(921905, J$.G(921889, J$.G(921881, J$.R(921873, 'res', res, false, false), 'locals'), 'context'), 'push', false)(J$.T(921897, 'page', 21, false));
                                }
                            } else if (J$.C(69400, J$.C(69360, J$.R(921913, 'data', data, false, false)) ? J$.G(921929, J$.R(921921, 'data', data, false, false), 'post') : J$._())) {
                                if (J$.C(69368, J$.U(89738, '!', J$.M(921969, J$.G(921953, J$.G(921945, J$.R(921937, 'res', res, false, false), 'locals'), 'context'), 'includes', false)(J$.T(921961, 'post', 21, false))))) {
                                    J$.M(922009, J$.G(921993, J$.G(921985, J$.R(921977, 'res', res, false, false), 'locals'), 'context'), 'push', false)(J$.T(922001, 'post', 21, false));
                                }
                            } else if (J$.C(69392, J$.C(69376, J$.R(922017, 'data', data, false, false)) ? J$.G(922033, J$.R(922025, 'data', data, false, false), 'page') : J$._())) {
                                if (J$.C(69384, J$.U(89746, '!', J$.M(922073, J$.G(922057, J$.G(922049, J$.R(922041, 'res', res, false, false), 'locals'), 'context'), 'includes', false)(J$.T(922065, 'page', 21, false))))) {
                                    J$.M(922113, J$.G(922097, J$.G(922089, J$.R(922081, 'res', res, false, false), 'locals'), 'context'), 'push', false)(J$.T(922105, 'page', 21, false));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(922241, J$e);
                        } finally {
                            if (J$.Fr(922249))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(922201, 'privatePattern', privatePattern, false, false, false);
            J$.N(922209, 'ampPattern', ampPattern, false, false, false);
            J$.N(922217, 'homePattern', homePattern, false, false, false);
            setResponseContext = J$.N(922233, 'setResponseContext', J$.T(922225, setResponseContext, 12, false), true, false, false);
            const privatePattern = J$.W(920985, 'privatePattern', J$.F(920977, J$.I(typeof RegExp === 'undefined' ? RegExp = J$.R(920961, 'RegExp', undefined, true, true) : RegExp = J$.R(920961, 'RegExp', RegExp, true, true)), true)(J$.T(920969, '^\\/private\\/', 21, false)), privatePattern, false, true);
            const ampPattern = J$.W(921017, 'ampPattern', J$.F(921009, J$.I(typeof RegExp === 'undefined' ? RegExp = J$.R(920993, 'RegExp', undefined, true, true) : RegExp = J$.R(920993, 'RegExp', RegExp, true, true)), true)(J$.T(921001, '\\/amp\\/$', 21, false)), ampPattern, false, true);
            const homePattern = J$.W(921049, 'homePattern', J$.F(921041, J$.I(typeof RegExp === 'undefined' ? RegExp = J$.R(921025, 'RegExp', undefined, true, true) : RegExp = J$.R(921025, 'RegExp', RegExp, true, true)), true)(J$.T(921033, '^\\/$', 21, false)), homePattern, false, true);
            J$.P(922185, J$.I(typeof module === 'undefined' ? module = J$.R(922169, 'module', undefined, true, true) : module = J$.R(922169, 'module', module, true, true)), 'exports', J$.R(922177, 'setResponseContext', setResponseContext, false, true));
        } catch (J$e) {
            J$.Ex(922257, J$e);
        } finally {
            if (J$.Sr(922265))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

