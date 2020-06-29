J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(892505, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/author_url.js');
            function getAuthorUrl(data, absolute) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(892441, arguments.callee, this, arguments);
                            arguments = J$.N(892449, 'arguments', arguments, true, false, false);
                            data = J$.N(892457, 'data', data, true, false, false);
                            absolute = J$.N(892465, 'absolute', absolute, true, false, false);
                            J$.N(892473, 'context', context, false, false, false);
                            let context = J$.W(892089, 'context', J$.C(66960, J$.G(892041, J$.R(892033, 'data', data, false, false), 'context')) ? J$.G(892073, J$.G(892057, J$.R(892049, 'data', data, false, false), 'context'), J$.T(892065, 0, 22, false)) : J$.T(892081, null, 25, false), context, false, false);
                            context = J$.W(892129, 'context', J$.C(66968, J$.B(89122, '===', J$.R(892097, 'context', context, false, false), J$.T(892105, 'amp', 21, false))) ? J$.T(892113, 'post', 21, false) : J$.R(892121, 'context', context, false, false), context, false, false);
                            if (J$.C(66976, J$.G(892145, J$.R(892137, 'data', data, false, false), 'author'))) {
                                return J$.Rt(892241, J$.M(892233, J$.R(892153, 'urlService', urlService, false, true), 'getUrlByResourceId', false)(J$.G(892177, J$.G(892169, J$.R(892161, 'data', data, false, false), 'author'), 'id'), J$.T(892225, {
                                    absolute: J$.R(892185, 'absolute', absolute, false, false),
                                    secure: J$.G(892209, J$.G(892201, J$.R(892193, 'data', data, false, false), 'author'), 'secure'),
                                    withSubdirectory: J$.T(892217, true, 23, false)
                                }, 11, false)));
                            }
                            if (J$.C(66992, J$.C(66984, J$.G(892265, J$.R(892249, 'data', data, false, false), J$.R(892257, 'context', context, false, false))) ? J$.G(892297, J$.G(892289, J$.R(892273, 'data', data, false, false), J$.R(892281, 'context', context, false, false)), 'primary_author') : J$._())) {
                                return J$.Rt(892417, J$.M(892409, J$.R(892305, 'urlService', urlService, false, true), 'getUrlByResourceId', false)(J$.G(892345, J$.G(892337, J$.G(892329, J$.R(892313, 'data', data, false, false), J$.R(892321, 'context', context, false, false)), 'primary_author'), 'id'), J$.T(892401, {
                                    absolute: J$.R(892353, 'absolute', absolute, false, false),
                                    secure: J$.G(892385, J$.G(892377, J$.R(892361, 'data', data, false, false), J$.R(892369, 'context', context, false, false)), 'secure'),
                                    withSubdirectory: J$.T(892393, true, 23, false)
                                }, 11, false)));
                            }
                            return J$.Rt(892433, J$.T(892425, null, 25, false));
                        } catch (J$e) {
                            J$.Ex(892537, J$e);
                        } finally {
                            if (J$.Fr(892545))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(892513, 'urlService', urlService, false, false, false);
            getAuthorUrl = J$.N(892529, 'getAuthorUrl', J$.T(892521, getAuthorUrl, 12, false), true, false, false);
            const urlService = J$.W(892025, 'urlService', J$.F(892017, J$.I(typeof require === 'undefined' ? require = J$.R(892001, 'require', undefined, true, true) : require = J$.R(892001, 'require', require, true, true)), false)(J$.T(892009, '../services/url', 21, false)), urlService, false, true);
            J$.P(892497, J$.I(typeof module === 'undefined' ? module = J$.R(892481, 'module', undefined, true, true) : module = J$.R(892481, 'module', module, true, true)), 'exports', J$.R(892489, 'getAuthorUrl', getAuthorUrl, false, true));
        } catch (J$e) {
            J$.Ex(892553, J$e);
        } finally {
            if (J$.Sr(892561))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

