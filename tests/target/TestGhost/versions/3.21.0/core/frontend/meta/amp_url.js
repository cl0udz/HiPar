J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(890881, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/amp_url.js');
            function getAmplUrl(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(890825, arguments.callee, this, arguments);
                            arguments = J$.N(890833, 'arguments', arguments, true, false, false);
                            data = J$.N(890841, 'data', data, true, false, false);
                            J$.N(890849, 'context', context, false, false, false);
                            const context = J$.W(890641, 'context', J$.C(66840, J$.G(890609, J$.R(890601, 'data', data, false, false), 'context')) ? J$.G(890625, J$.R(890617, 'data', data, false, false), 'context') : J$.T(890633, null, 25, false), context, false, false);
                            if (J$.C(66856, J$.C(66848, J$.M(890673, J$.R(890649, '_', _, false, true), 'includes', false)(J$.R(890657, 'context', context, false, false), J$.T(890665, 'post', 21, false))) ? J$.U(89114, '!', J$.M(890705, J$.R(890681, '_', _, false, true), 'includes', false)(J$.R(890689, 'context', context, false, false), J$.T(890697, 'amp', 21, false))) : J$._())) {
                                return J$.Rt(890801, J$.M(890793, J$.R(890713, 'urlUtils', urlUtils, false, true), 'urlJoin', false)(J$.M(890745, J$.R(890721, 'urlUtils', urlUtils, false, true), 'urlFor', false)(J$.T(890729, 'home', 21, false), J$.T(890737, true, 23, false)), J$.F(890777, J$.R(890753, 'getUrl', getUrl, false, true), false)(J$.R(890761, 'data', data, false, false), J$.T(890769, false, 23, false)), J$.T(890785, 'amp/', 21, false)));
                            }
                            return J$.Rt(890817, J$.T(890809, null, 25, false));
                        } catch (J$e) {
                            J$.Ex(890929, J$e);
                        } finally {
                            if (J$.Fr(890937))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(890889, 'urlUtils', urlUtils, false, false, false);
            J$.N(890897, 'getUrl', getUrl, false, false, false);
            J$.N(890905, '_', _, false, false, false);
            getAmplUrl = J$.N(890921, 'getAmplUrl', J$.T(890913, getAmplUrl, 12, false), true, false, false);
            const urlUtils = J$.W(890529, 'urlUtils', J$.F(890521, J$.I(typeof require === 'undefined' ? require = J$.R(890505, 'require', undefined, true, true) : require = J$.R(890505, 'require', require, true, true)), false)(J$.T(890513, '../../shared/url-utils', 21, false)), urlUtils, false, true);
            const getUrl = J$.W(890561, 'getUrl', J$.F(890553, J$.I(typeof require === 'undefined' ? require = J$.R(890537, 'require', undefined, true, true) : require = J$.R(890537, 'require', require, true, true)), false)(J$.T(890545, './url', 21, false)), getUrl, false, true);
            const _ = J$.W(890593, '_', J$.F(890585, J$.I(typeof require === 'undefined' ? require = J$.R(890569, 'require', undefined, true, true) : require = J$.R(890569, 'require', require, true, true)), false)(J$.T(890577, 'lodash', 21, false)), _, false, true);
            J$.P(890873, J$.I(typeof module === 'undefined' ? module = J$.R(890857, 'module', undefined, true, true) : module = J$.R(890857, 'module', module, true, true)), 'exports', J$.R(890865, 'getAmplUrl', getAmplUrl, false, true));
        } catch (J$e) {
            J$.Ex(890945, J$e);
        } finally {
            if (J$.Sr(890953))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

