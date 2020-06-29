J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(902081, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/og_image.js');
            function getOgImage(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(902009, arguments.callee, this, arguments);
                            arguments = J$.N(902017, 'arguments', arguments, true, false, false);
                            data = J$.N(902025, 'data', data, true, false, false);
                            J$.N(902033, 'context', context, false, false, false);
                            J$.N(902041, 'contextObject', contextObject, false, false, false);
                            J$.N(902049, 'imgUrl', imgUrl, false, false, false);
                            const context = J$.W(901345, 'context', J$.C(67848, J$.G(901313, J$.R(901305, 'data', data, false, false), 'context')) ? J$.G(901329, J$.R(901321, 'data', data, false, false), 'context') : J$.T(901337, null, 25, false), context, false, false);
                            const contextObject = J$.W(901393, 'contextObject', J$.F(901385, J$.R(901353, 'getContextObject', getContextObject, false, true), false)(J$.R(901361, 'data', data, false, false), J$.R(901369, 'context', context, false, false), J$.T(901377, false, 23, false)), contextObject, false, false);
                            if (J$.C(67880, J$.M(901425, J$.R(901401, '_', _, false, true), 'includes', false)(J$.R(901409, 'context', context, false, false), J$.T(901417, 'home', 21, false)))) {
                                const imgUrl = J$.W(901481, 'imgUrl', J$.C(67856, J$.M(901449, J$.R(901433, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(901441, 'og_image', 21, false))) ? J$._() : J$.M(901473, J$.R(901457, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(901465, 'cover_image', 21, false)), imgUrl, false, false);
                                return J$.Rt(901529, J$.C(67872, J$.C(67864, J$.R(901489, 'imgUrl', imgUrl, false, false)) ? J$.M(901513, J$.R(901497, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.R(901505, 'imgUrl', imgUrl, false, false)) : J$._()) ? J$._() : J$.T(901521, null, 25, false));
                            }
                            if (J$.C(67920, J$.C(67896, J$.C(67888, J$.M(901561, J$.R(901537, '_', _, false, true), 'includes', false)(J$.R(901545, 'context', context, false, false), J$.T(901553, 'post', 21, false))) ? J$._() : J$.M(901593, J$.R(901569, '_', _, false, true), 'includes', false)(J$.R(901577, 'context', context, false, false), J$.T(901585, 'page', 21, false))) ? J$._() : J$.M(901625, J$.R(901601, '_', _, false, true), 'includes', false)(J$.R(901609, 'context', context, false, false), J$.T(901617, 'amp', 21, false)))) {
                                if (J$.C(67912, J$.G(901641, J$.R(901633, 'contextObject', contextObject, false, false), 'og_image'))) {
                                    return J$.Rt(901681, J$.M(901673, J$.R(901649, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.G(901665, J$.R(901657, 'contextObject', contextObject, false, false), 'og_image')));
                                } else if (J$.C(67904, J$.G(901697, J$.R(901689, 'contextObject', contextObject, false, false), 'feature_image'))) {
                                    return J$.Rt(901737, J$.M(901729, J$.R(901705, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.G(901721, J$.R(901713, 'contextObject', contextObject, false, false), 'feature_image')));
                                }
                            }
                            if (J$.C(67936, J$.C(67928, J$.M(901769, J$.R(901745, '_', _, false, true), 'includes', false)(J$.R(901753, 'context', context, false, false), J$.T(901761, 'author', 21, false))) ? J$.G(901785, J$.R(901777, 'contextObject', contextObject, false, false), 'cover_image') : J$._())) {
                                return J$.Rt(901825, J$.M(901817, J$.R(901793, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.G(901809, J$.R(901801, 'contextObject', contextObject, false, false), 'cover_image')));
                            }
                            if (J$.C(67960, J$.M(901857, J$.R(901833, '_', _, false, true), 'includes', false)(J$.R(901841, 'context', context, false, false), J$.T(901849, 'tag', 21, false)))) {
                                if (J$.C(67952, J$.G(901873, J$.R(901865, 'contextObject', contextObject, false, false), 'feature_image'))) {
                                    return J$.Rt(901913, J$.M(901905, J$.R(901881, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.G(901897, J$.R(901889, 'contextObject', contextObject, false, false), 'feature_image')));
                                } else if (J$.C(67944, J$.M(901937, J$.R(901921, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(901929, 'cover_image', 21, false)))) {
                                    return J$.Rt(901985, J$.M(901977, J$.R(901945, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.M(901969, J$.R(901953, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(901961, 'cover_image', 21, false))));
                                }
                            }
                            return J$.Rt(902001, J$.T(901993, null, 25, false));
                        } catch (J$e) {
                            J$.Ex(902137, J$e);
                        } finally {
                            if (J$.Fr(902145))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(902089, '_', _, false, false, false);
            J$.N(902097, 'getContextObject', getContextObject, false, false, false);
            J$.N(902105, 'urlUtils', urlUtils, false, false, false);
            J$.N(902113, 'settingsCache', settingsCache, false, false, false);
            getOgImage = J$.N(902129, 'getOgImage', J$.T(902121, getOgImage, 12, false), true, false, false);
            const _ = J$.W(901201, '_', J$.F(901193, J$.I(typeof require === 'undefined' ? require = J$.R(901177, 'require', undefined, true, true) : require = J$.R(901177, 'require', require, true, true)), false)(J$.T(901185, 'lodash', 21, false)), _, false, true);
            const getContextObject = J$.W(901233, 'getContextObject', J$.F(901225, J$.I(typeof require === 'undefined' ? require = J$.R(901209, 'require', undefined, true, true) : require = J$.R(901209, 'require', require, true, true)), false)(J$.T(901217, './context_object.js', 21, false)), getContextObject, false, true);
            const urlUtils = J$.W(901265, 'urlUtils', J$.F(901257, J$.I(typeof require === 'undefined' ? require = J$.R(901241, 'require', undefined, true, true) : require = J$.R(901241, 'require', require, true, true)), false)(J$.T(901249, '../../shared/url-utils', 21, false)), urlUtils, false, true);
            const settingsCache = J$.W(901297, 'settingsCache', J$.F(901289, J$.I(typeof require === 'undefined' ? require = J$.R(901273, 'require', undefined, true, true) : require = J$.R(901273, 'require', require, true, true)), false)(J$.T(901281, '../../server/services/settings/cache', 21, false)), settingsCache, false, true);
            J$.P(902073, J$.I(typeof module === 'undefined' ? module = J$.R(902057, 'module', undefined, true, true) : module = J$.R(902057, 'module', module, true, true)), 'exports', J$.R(902065, 'getOgImage', getOgImage, false, true));
        } catch (J$e) {
            J$.Ex(902153, J$e);
        } finally {
            if (J$.Sr(902161))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

