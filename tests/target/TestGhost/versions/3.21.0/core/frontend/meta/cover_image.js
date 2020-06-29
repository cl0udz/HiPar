J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(894393, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/cover_image.js');
            function getCoverImage(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(894329, arguments.callee, this, arguments);
                            arguments = J$.N(894337, 'arguments', arguments, true, false, false);
                            data = J$.N(894345, 'data', data, true, false, false);
                            J$.N(894353, 'context', context, false, false, false);
                            J$.N(894361, 'contextObject', contextObject, false, false, false);
                            const context = J$.W(894041, 'context', J$.C(67144, J$.G(894009, J$.R(894001, 'data', data, false, false), 'context')) ? J$.G(894025, J$.R(894017, 'data', data, false, false), 'context') : J$.T(894033, null, 25, false), context, false, false);
                            const contextObject = J$.W(894081, 'contextObject', J$.F(894073, J$.R(894049, 'getContextObject', getContextObject, false, true), false)(J$.R(894057, 'data', data, false, false), J$.R(894065, 'context', context, false, false)), contextObject, false, false);
                            if (J$.C(67176, J$.C(67152, J$.M(894113, J$.R(894089, '_', _, false, true), 'includes', false)(J$.R(894097, 'context', context, false, false), J$.T(894105, 'home', 21, false))) ? J$._() : J$.M(894145, J$.R(894121, '_', _, false, true), 'includes', false)(J$.R(894129, 'context', context, false, false), J$.T(894137, 'author', 21, false)))) {
                                if (J$.C(67160, J$.G(894161, J$.R(894153, 'contextObject', contextObject, false, false), 'cover_image'))) {
                                    return J$.Rt(894225, J$.M(894217, J$.R(894169, 'urlUtils', urlUtils, false, true), 'urlFor', false)(J$.T(894177, 'image', 21, false), J$.T(894201, { image: J$.G(894193, J$.R(894185, 'contextObject', contextObject, false, false), 'cover_image') }, 11, false), J$.T(894209, true, 23, false)));
                                }
                            } else {
                                if (J$.C(67168, J$.G(894241, J$.R(894233, 'contextObject', contextObject, false, false), 'feature_image'))) {
                                    return J$.Rt(894305, J$.M(894297, J$.R(894249, 'urlUtils', urlUtils, false, true), 'urlFor', false)(J$.T(894257, 'image', 21, false), J$.T(894281, { image: J$.G(894273, J$.R(894265, 'contextObject', contextObject, false, false), 'feature_image') }, 11, false), J$.T(894289, true, 23, false)));
                                }
                            }
                            return J$.Rt(894321, J$.T(894313, null, 25, false));
                        } catch (J$e) {
                            J$.Ex(894441, J$e);
                        } finally {
                            if (J$.Fr(894449))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(894401, 'urlUtils', urlUtils, false, false, false);
            J$.N(894409, 'getContextObject', getContextObject, false, false, false);
            J$.N(894417, '_', _, false, false, false);
            getCoverImage = J$.N(894433, 'getCoverImage', J$.T(894425, getCoverImage, 12, false), true, false, false);
            const urlUtils = J$.W(893929, 'urlUtils', J$.F(893921, J$.I(typeof require === 'undefined' ? require = J$.R(893905, 'require', undefined, true, true) : require = J$.R(893905, 'require', require, true, true)), false)(J$.T(893913, '../../shared/url-utils', 21, false)), urlUtils, false, true);
            const getContextObject = J$.W(893961, 'getContextObject', J$.F(893953, J$.I(typeof require === 'undefined' ? require = J$.R(893937, 'require', undefined, true, true) : require = J$.R(893937, 'require', require, true, true)), false)(J$.T(893945, './context_object.js', 21, false)), getContextObject, false, true);
            const _ = J$.W(893993, '_', J$.F(893985, J$.I(typeof require === 'undefined' ? require = J$.R(893969, 'require', undefined, true, true) : require = J$.R(893969, 'require', require, true, true)), false)(J$.T(893977, 'lodash', 21, false)), _, false, true);
            J$.P(894385, J$.I(typeof module === 'undefined' ? module = J$.R(894369, 'module', undefined, true, true) : module = J$.R(894369, 'module', module, true, true)), 'exports', J$.R(894377, 'getCoverImage', getCoverImage, false, true));
        } catch (J$e) {
            J$.Ex(894457, J$e);
        } finally {
            if (J$.Sr(894465))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

