J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(891921, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/author_image.js');
            function getAuthorImage(data, absolute) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(891849, arguments.callee, this, arguments);
                            arguments = J$.N(891857, 'arguments', arguments, true, false, false);
                            data = J$.N(891865, 'data', data, true, false, false);
                            absolute = J$.N(891873, 'absolute', absolute, true, false, false);
                            J$.N(891881, 'context', context, false, false, false);
                            J$.N(891889, 'contextObject', contextObject, false, false, false);
                            const context = J$.W(891609, 'context', J$.C(66920, J$.G(891577, J$.R(891569, 'data', data, false, false), 'context')) ? J$.G(891593, J$.R(891585, 'data', data, false, false), 'context') : J$.T(891601, null, 25, false), context, false, false);
                            const contextObject = J$.W(891649, 'contextObject', J$.F(891641, J$.R(891617, 'getContextObject', getContextObject, false, true), false)(J$.R(891625, 'data', data, false, false), J$.R(891633, 'context', context, false, false)), contextObject, false, false);
                            if (J$.C(66952, J$.C(66944, J$.C(66936, J$.C(66928, J$.M(891681, J$.R(891657, '_', _, false, true), 'includes', false)(J$.R(891665, 'context', context, false, false), J$.T(891673, 'post', 21, false))) ? J$._() : J$.M(891713, J$.R(891689, '_', _, false, true), 'includes', false)(J$.R(891697, 'context', context, false, false), J$.T(891705, 'page', 21, false))) ? J$.G(891729, J$.R(891721, 'contextObject', contextObject, false, false), 'primary_author') : J$._()) ? J$.G(891753, J$.G(891745, J$.R(891737, 'contextObject', contextObject, false, false), 'primary_author'), 'profile_image') : J$._())) {
                                return J$.Rt(891825, J$.M(891817, J$.R(891761, 'urlUtils', urlUtils, false, true), 'urlFor', false)(J$.T(891769, 'image', 21, false), J$.T(891801, { image: J$.G(891793, J$.G(891785, J$.R(891777, 'contextObject', contextObject, false, false), 'primary_author'), 'profile_image') }, 11, false), J$.R(891809, 'absolute', absolute, false, false)));
                            }
                            return J$.Rt(891841, J$.T(891833, null, 25, false));
                        } catch (J$e) {
                            J$.Ex(891969, J$e);
                        } finally {
                            if (J$.Fr(891977))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(891929, 'urlUtils', urlUtils, false, false, false);
            J$.N(891937, 'getContextObject', getContextObject, false, false, false);
            J$.N(891945, '_', _, false, false, false);
            getAuthorImage = J$.N(891961, 'getAuthorImage', J$.T(891953, getAuthorImage, 12, false), true, false, false);
            const urlUtils = J$.W(891497, 'urlUtils', J$.F(891489, J$.I(typeof require === 'undefined' ? require = J$.R(891473, 'require', undefined, true, true) : require = J$.R(891473, 'require', require, true, true)), false)(J$.T(891481, '../../shared/url-utils', 21, false)), urlUtils, false, true);
            const getContextObject = J$.W(891529, 'getContextObject', J$.F(891521, J$.I(typeof require === 'undefined' ? require = J$.R(891505, 'require', undefined, true, true) : require = J$.R(891505, 'require', require, true, true)), false)(J$.T(891513, './context_object.js', 21, false)), getContextObject, false, true);
            const _ = J$.W(891561, '_', J$.F(891553, J$.I(typeof require === 'undefined' ? require = J$.R(891537, 'require', undefined, true, true) : require = J$.R(891537, 'require', require, true, true)), false)(J$.T(891545, 'lodash', 21, false)), _, false, true);
            J$.P(891913, J$.I(typeof module === 'undefined' ? module = J$.R(891897, 'module', undefined, true, true) : module = J$.R(891897, 'module', module, true, true)), 'exports', J$.R(891905, 'getAuthorImage', getAuthorImage, false, true));
        } catch (J$e) {
            J$.Ex(891985, J$e);
        } finally {
            if (J$.Sr(891993))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

