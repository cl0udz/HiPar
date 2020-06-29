J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(912001, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/twitter_image.js');
            function getTwitterImage(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(911929, arguments.callee, this, arguments);
                            arguments = J$.N(911937, 'arguments', arguments, true, false, false);
                            data = J$.N(911945, 'data', data, true, false, false);
                            J$.N(911953, 'context', context, false, false, false);
                            J$.N(911961, 'contextObject', contextObject, false, false, false);
                            J$.N(911969, 'imgUrl', imgUrl, false, false, false);
                            const context = J$.W(911265, 'context', J$.C(68824, J$.G(911233, J$.R(911225, 'data', data, false, false), 'context')) ? J$.G(911249, J$.R(911241, 'data', data, false, false), 'context') : J$.T(911257, null, 25, false), context, false, false);
                            const contextObject = J$.W(911313, 'contextObject', J$.F(911305, J$.R(911273, 'getContextObject', getContextObject, false, true), false)(J$.R(911281, 'data', data, false, false), J$.R(911289, 'context', context, false, false), J$.T(911297, false, 23, false)), contextObject, false, false);
                            if (J$.C(68856, J$.M(911345, J$.R(911321, '_', _, false, true), 'includes', false)(J$.R(911329, 'context', context, false, false), J$.T(911337, 'home', 21, false)))) {
                                const imgUrl = J$.W(911401, 'imgUrl', J$.C(68832, J$.M(911369, J$.R(911353, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(911361, 'twitter_image', 21, false))) ? J$._() : J$.M(911393, J$.R(911377, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(911385, 'cover_image', 21, false)), imgUrl, false, false);
                                return J$.Rt(911449, J$.C(68848, J$.C(68840, J$.R(911409, 'imgUrl', imgUrl, false, false)) ? J$.M(911433, J$.R(911417, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.R(911425, 'imgUrl', imgUrl, false, false)) : J$._()) ? J$._() : J$.T(911441, null, 25, false));
                            }
                            if (J$.C(68896, J$.C(68872, J$.C(68864, J$.M(911481, J$.R(911457, '_', _, false, true), 'includes', false)(J$.R(911465, 'context', context, false, false), J$.T(911473, 'post', 21, false))) ? J$._() : J$.M(911513, J$.R(911489, '_', _, false, true), 'includes', false)(J$.R(911497, 'context', context, false, false), J$.T(911505, 'page', 21, false))) ? J$._() : J$.M(911545, J$.R(911521, '_', _, false, true), 'includes', false)(J$.R(911529, 'context', context, false, false), J$.T(911537, 'amp', 21, false)))) {
                                if (J$.C(68888, J$.G(911561, J$.R(911553, 'contextObject', contextObject, false, false), 'twitter_image'))) {
                                    return J$.Rt(911601, J$.M(911593, J$.R(911569, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.G(911585, J$.R(911577, 'contextObject', contextObject, false, false), 'twitter_image')));
                                } else if (J$.C(68880, J$.G(911617, J$.R(911609, 'contextObject', contextObject, false, false), 'feature_image'))) {
                                    return J$.Rt(911657, J$.M(911649, J$.R(911625, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.G(911641, J$.R(911633, 'contextObject', contextObject, false, false), 'feature_image')));
                                }
                            }
                            if (J$.C(68912, J$.C(68904, J$.M(911689, J$.R(911665, '_', _, false, true), 'includes', false)(J$.R(911673, 'context', context, false, false), J$.T(911681, 'author', 21, false))) ? J$.G(911705, J$.R(911697, 'contextObject', contextObject, false, false), 'cover_image') : J$._())) {
                                return J$.Rt(911745, J$.M(911737, J$.R(911713, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.G(911729, J$.R(911721, 'contextObject', contextObject, false, false), 'cover_image')));
                            }
                            if (J$.C(68936, J$.M(911777, J$.R(911753, '_', _, false, true), 'includes', false)(J$.R(911761, 'context', context, false, false), J$.T(911769, 'tag', 21, false)))) {
                                if (J$.C(68928, J$.G(911793, J$.R(911785, 'contextObject', contextObject, false, false), 'feature_image'))) {
                                    return J$.Rt(911833, J$.M(911825, J$.R(911801, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.G(911817, J$.R(911809, 'contextObject', contextObject, false, false), 'feature_image')));
                                } else if (J$.C(68920, J$.M(911857, J$.R(911841, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(911849, 'cover_image', 21, false)))) {
                                    return J$.Rt(911905, J$.M(911897, J$.R(911865, 'urlUtils', urlUtils, false, true), 'relativeToAbsolute', false)(J$.M(911889, J$.R(911873, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(911881, 'cover_image', 21, false))));
                                }
                            }
                            return J$.Rt(911921, J$.T(911913, null, 25, false));
                        } catch (J$e) {
                            J$.Ex(912057, J$e);
                        } finally {
                            if (J$.Fr(912065))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(912009, '_', _, false, false, false);
            J$.N(912017, 'urlUtils', urlUtils, false, false, false);
            J$.N(912025, 'getContextObject', getContextObject, false, false, false);
            J$.N(912033, 'settingsCache', settingsCache, false, false, false);
            getTwitterImage = J$.N(912049, 'getTwitterImage', J$.T(912041, getTwitterImage, 12, false), true, false, false);
            const _ = J$.W(911121, '_', J$.F(911113, J$.I(typeof require === 'undefined' ? require = J$.R(911097, 'require', undefined, true, true) : require = J$.R(911097, 'require', require, true, true)), false)(J$.T(911105, 'lodash', 21, false)), _, false, true);
            const urlUtils = J$.W(911153, 'urlUtils', J$.F(911145, J$.I(typeof require === 'undefined' ? require = J$.R(911129, 'require', undefined, true, true) : require = J$.R(911129, 'require', require, true, true)), false)(J$.T(911137, '../../shared/url-utils', 21, false)), urlUtils, false, true);
            const getContextObject = J$.W(911185, 'getContextObject', J$.F(911177, J$.I(typeof require === 'undefined' ? require = J$.R(911161, 'require', undefined, true, true) : require = J$.R(911161, 'require', require, true, true)), false)(J$.T(911169, './context_object.js', 21, false)), getContextObject, false, true);
            const settingsCache = J$.W(911217, 'settingsCache', J$.F(911209, J$.I(typeof require === 'undefined' ? require = J$.R(911193, 'require', undefined, true, true) : require = J$.R(911193, 'require', require, true, true)), false)(J$.T(911201, '../../server/services/settings/cache', 21, false)), settingsCache, false, true);
            J$.P(911993, J$.I(typeof module === 'undefined' ? module = J$.R(911977, 'module', undefined, true, true) : module = J$.R(911977, 'module', module, true, true)), 'exports', J$.R(911985, 'getTwitterImage', getTwitterImage, false, true));
        } catch (J$e) {
            J$.Ex(912073, J$e);
        } finally {
            if (J$.Sr(912081))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

