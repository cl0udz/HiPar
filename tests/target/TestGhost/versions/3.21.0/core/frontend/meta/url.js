J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(912929, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/url.js');
            function sanitizeAmpUrl(url) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(912281, arguments.callee, this, arguments);
                            arguments = J$.N(912289, 'arguments', arguments, true, false, false);
                            url = J$.N(912297, 'url', url, true, false, false);
                            if (J$.C(68944, J$.B(89498, '!==', J$.M(912209, J$.R(912193, 'url', url, false, false), 'indexOf', false)(J$.T(912201, '/amp/', 21, false)), J$.U(89490, '-', J$.T(912217, 1, 22, false))))) {
                                url = J$.W(912257, 'url', J$.M(912249, J$.R(912225, 'url', url, false, false), 'replace', false)(J$.T(912233, /\/amp\/$/i, 14, false), J$.T(912241, '/', 21, false)), url, false, false);
                            }
                            return J$.Rt(912273, J$.R(912265, 'url', url, false, false));
                        } catch (J$e) {
                            J$.Ex(912993, J$e);
                        } finally {
                            if (J$.Fr(913001))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function getUrl(data, absolute) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(912873, arguments.callee, this, arguments);
                            arguments = J$.N(912881, 'arguments', arguments, true, false, false);
                            data = J$.N(912889, 'data', data, true, false, false);
                            absolute = J$.N(912897, 'absolute', absolute, true, false, false);
                            if (J$.C(68968, J$.M(912321, J$.R(912305, 'schema', schema, false, true), 'isPost', false)(J$.R(912313, 'data', data, false, false)))) {
                                if (J$.C(68960, J$.C(68952, J$.B(89506, '!==', J$.G(912337, J$.R(912329, 'data', data, false, false), 'status'), J$.T(912345, 'published', 21, false))) ? J$.B(89514, '===', J$.M(912377, J$.R(912353, 'urlService', urlService, false, true), 'getUrlByResourceId', false)(J$.G(912369, J$.R(912361, 'data', data, false, false), 'id')), J$.T(912385, '/404/', 21, false)) : J$._())) {
                                    return J$.Rt(912497, J$.M(912489, J$.R(912393, 'urlUtils', urlUtils, false, true), 'urlFor', false)(J$.T(912465, {
                                        relativeUrl: J$.M(912441, J$.R(912401, 'urlUtils', urlUtils, false, true), 'urlJoin', false)(J$.T(912409, '/p', 21, false), J$.G(912425, J$.R(912417, 'data', data, false, false), 'uuid'), J$.T(912433, '/', 21, false)),
                                        secure: J$.G(912457, J$.R(912449, 'data', data, false, false), 'secure')
                                    }, 11, false), J$.T(912473, null, 25, false), J$.R(912481, 'absolute', absolute, false, false)));
                                }
                                return J$.Rt(912577, J$.M(912569, J$.R(912505, 'urlService', urlService, false, true), 'getUrlByResourceId', false)(J$.G(912521, J$.R(912513, 'data', data, false, false), 'id'), J$.T(912561, {
                                    secure: J$.G(912537, J$.R(912529, 'data', data, false, false), 'secure'),
                                    absolute: J$.R(912545, 'absolute', absolute, false, false),
                                    withSubdirectory: J$.T(912553, true, 23, false)
                                }, 11, false)));
                            }
                            if (J$.C(68984, J$.C(68976, J$.M(912601, J$.R(912585, 'schema', schema, false, true), 'isTag', false)(J$.R(912593, 'data', data, false, false))) ? J$._() : J$.M(912625, J$.R(912609, 'schema', schema, false, true), 'isUser', false)(J$.R(912617, 'data', data, false, false)))) {
                                return J$.Rt(912705, J$.M(912697, J$.R(912633, 'urlService', urlService, false, true), 'getUrlByResourceId', false)(J$.G(912649, J$.R(912641, 'data', data, false, false), 'id'), J$.T(912689, {
                                    secure: J$.G(912665, J$.R(912657, 'data', data, false, false), 'secure'),
                                    absolute: J$.R(912673, 'absolute', absolute, false, false),
                                    withSubdirectory: J$.T(912681, true, 23, false)
                                }, 11, false)));
                            }
                            if (J$.C(68992, J$.M(912729, J$.R(912713, 'schema', schema, false, true), 'isNav', false)(J$.R(912721, 'data', data, false, false)))) {
                                return J$.Rt(912801, J$.M(912793, J$.R(912737, 'urlUtils', urlUtils, false, true), 'urlFor', false)(J$.T(912745, 'nav', 21, false), J$.T(912777, {
                                    nav: J$.R(912753, 'data', data, false, false),
                                    secure: J$.G(912769, J$.R(912761, 'data', data, false, false), 'secure')
                                }, 11, false), J$.R(912785, 'absolute', absolute, false, false)));
                            }
                            return J$.Rt(912865, J$.F(912857, J$.R(912809, 'sanitizeAmpUrl', sanitizeAmpUrl, false, true), false)(J$.M(912849, J$.R(912817, 'urlUtils', urlUtils, false, true), 'urlFor', false)(J$.R(912825, 'data', data, false, false), J$.T(912833, {}, 11, false), J$.R(912841, 'absolute', absolute, false, false))));
                        } catch (J$e) {
                            J$.Ex(913009, J$e);
                        } finally {
                            if (J$.Fr(913017))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(912937, 'schema', schema, false, false, false);
            J$.N(912945, 'urlUtils', urlUtils, false, false, false);
            J$.N(912953, 'urlService', urlService, false, false, false);
            sanitizeAmpUrl = J$.N(912969, 'sanitizeAmpUrl', J$.T(912961, sanitizeAmpUrl, 12, false), true, false, false);
            getUrl = J$.N(912985, 'getUrl', J$.T(912977, getUrl, 12, false), true, false, false);
            const schema = J$.W(912121, 'schema', J$.G(912113, J$.F(912105, J$.I(typeof require === 'undefined' ? require = J$.R(912089, 'require', undefined, true, true) : require = J$.R(912089, 'require', require, true, true)), false)(J$.T(912097, '../../server/data/schema', 21, false)), 'checks'), schema, false, true);
            const urlUtils = J$.W(912153, 'urlUtils', J$.F(912145, J$.I(typeof require === 'undefined' ? require = J$.R(912129, 'require', undefined, true, true) : require = J$.R(912129, 'require', require, true, true)), false)(J$.T(912137, '../../shared/url-utils', 21, false)), urlUtils, false, true);
            const urlService = J$.W(912185, 'urlService', J$.F(912177, J$.I(typeof require === 'undefined' ? require = J$.R(912161, 'require', undefined, true, true) : require = J$.R(912161, 'require', require, true, true)), false)(J$.T(912169, '../services/url', 21, false)), urlService, false, true);
            J$.P(912921, J$.I(typeof module === 'undefined' ? module = J$.R(912905, 'module', undefined, true, true) : module = J$.R(912905, 'module', module, true, true)), 'exports', J$.R(912913, 'getUrl', getUrl, false, true));
        } catch (J$e) {
            J$.Ex(913025, J$e);
        } finally {
            if (J$.Sr(913033))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

