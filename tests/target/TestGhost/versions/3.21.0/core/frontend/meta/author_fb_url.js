J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(891401, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/author_fb_url.js');
            function getAuthorFacebookUrl(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(891337, arguments.callee, this, arguments);
                            arguments = J$.N(891345, 'arguments', arguments, true, false, false);
                            data = J$.N(891353, 'data', data, true, false, false);
                            J$.N(891361, 'context', context, false, false, false);
                            J$.N(891369, 'contextObject', contextObject, false, false, false);
                            const context = J$.W(891065, 'context', J$.C(66864, J$.G(891033, J$.R(891025, 'data', data, false, false), 'context')) ? J$.G(891049, J$.R(891041, 'data', data, false, false), 'context') : J$.T(891057, null, 25, false), context, false, false);
                            const contextObject = J$.W(891105, 'contextObject', J$.F(891097, J$.R(891073, 'getContextObject', getContextObject, false, true), false)(J$.R(891081, 'data', data, false, false), J$.R(891089, 'context', context, false, false)), contextObject, false, false);
                            if (J$.C(66912, J$.C(66888, J$.C(66880, J$.C(66872, J$.M(891137, J$.R(891113, '_', _, false, true), 'includes', false)(J$.R(891121, 'context', context, false, false), J$.T(891129, 'post', 21, false))) ? J$._() : J$.M(891169, J$.R(891145, '_', _, false, true), 'includes', false)(J$.R(891153, 'context', context, false, false), J$.T(891161, 'page', 21, false))) ? J$.G(891185, J$.R(891177, 'contextObject', contextObject, false, false), 'primary_author') : J$._()) ? J$.G(891209, J$.G(891201, J$.R(891193, 'contextObject', contextObject, false, false), 'primary_author'), 'facebook') : J$._())) {
                                return J$.Rt(891241, J$.G(891233, J$.G(891225, J$.R(891217, 'contextObject', contextObject, false, false), 'primary_author'), 'facebook'));
                            } else if (J$.C(66904, J$.C(66896, J$.M(891273, J$.R(891249, '_', _, false, true), 'includes', false)(J$.R(891257, 'context', context, false, false), J$.T(891265, 'author', 21, false))) ? J$.G(891289, J$.R(891281, 'contextObject', contextObject, false, false), 'facebook') : J$._())) {
                                return J$.Rt(891313, J$.G(891305, J$.R(891297, 'contextObject', contextObject, false, false), 'facebook'));
                            }
                            return J$.Rt(891329, J$.T(891321, null, 25, false));
                        } catch (J$e) {
                            J$.Ex(891441, J$e);
                        } finally {
                            if (J$.Fr(891449))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(891409, 'getContextObject', getContextObject, false, false, false);
            J$.N(891417, '_', _, false, false, false);
            getAuthorFacebookUrl = J$.N(891433, 'getAuthorFacebookUrl', J$.T(891425, getAuthorFacebookUrl, 12, false), true, false, false);
            const getContextObject = J$.W(890985, 'getContextObject', J$.F(890977, J$.I(typeof require === 'undefined' ? require = J$.R(890961, 'require', undefined, true, true) : require = J$.R(890961, 'require', require, true, true)), false)(J$.T(890969, './context_object.js', 21, false)), getContextObject, false, true);
            const _ = J$.W(891017, '_', J$.F(891009, J$.I(typeof require === 'undefined' ? require = J$.R(890993, 'require', undefined, true, true) : require = J$.R(890993, 'require', require, true, true)), false)(J$.T(891001, 'lodash', 21, false)), _, false, true);
            J$.P(891393, J$.I(typeof module === 'undefined' ? module = J$.R(891377, 'module', undefined, true, true) : module = J$.R(891377, 'module', module, true, true)), 'exports', J$.R(891385, 'getAuthorFacebookUrl', getAuthorFacebookUrl, false, true));
        } catch (J$e) {
            J$.Ex(891457, J$e);
        } finally {
            if (J$.Sr(891465))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

