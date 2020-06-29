J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(893041, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/canonical_url.js');
            function getCanonicalUrl(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(892985, arguments.callee, this, arguments);
                            arguments = J$.N(892993, 'arguments', arguments, true, false, false);
                            data = J$.N(893001, 'data', data, true, false, false);
                            J$.N(893009, 'url', url, false, false, false);
                            if (J$.C(67024, J$.C(67016, J$.C(67008, J$.C(67000, J$.M(892697, J$.R(892665, '_', _, false, true), 'includes', false)(J$.G(892681, J$.R(892673, 'data', data, false, false), 'context'), J$.T(892689, 'post', 21, false))) ? J$._() : J$.M(892737, J$.R(892705, '_', _, false, true), 'includes', false)(J$.G(892721, J$.R(892713, 'data', data, false, false), 'context'), J$.T(892729, 'page', 21, false))) ? J$.G(892753, J$.R(892745, 'data', data, false, false), 'post') : J$._()) ? J$.G(892777, J$.G(892769, J$.R(892761, 'data', data, false, false), 'post'), 'canonical_url') : J$._())) {
                                return J$.Rt(892809, J$.G(892801, J$.G(892793, J$.R(892785, 'data', data, false, false), 'post'), 'canonical_url'));
                            }
                            let url = J$.W(892897, 'url', J$.M(892889, J$.R(892817, 'urlUtils', urlUtils, false, true), 'urlJoin', false)(J$.M(892849, J$.R(892825, 'urlUtils', urlUtils, false, true), 'urlFor', false)(J$.T(892833, 'home', 21, false), J$.T(892841, true, 23, false)), J$.F(892881, J$.R(892857, 'getUrl', getUrl, false, true), false)(J$.R(892865, 'data', data, false, false), J$.T(892873, false, 23, false))), url, false, false);
                            if (J$.C(67032, J$.M(892921, J$.R(892905, 'url', url, false, false), 'indexOf', false)(J$.T(892913, '/amp/', 21, false)))) {
                                url = J$.W(892961, 'url', J$.M(892953, J$.R(892929, 'url', url, false, false), 'replace', false)(J$.T(892937, /\/amp\/$/i, 14, false), J$.T(892945, '/', 21, false)), url, false, false);
                            }
                            return J$.Rt(892977, J$.R(892969, 'url', url, false, false));
                        } catch (J$e) {
                            J$.Ex(893089, J$e);
                        } finally {
                            if (J$.Fr(893097))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(893049, '_', _, false, false, false);
            J$.N(893057, 'urlUtils', urlUtils, false, false, false);
            J$.N(893065, 'getUrl', getUrl, false, false, false);
            getCanonicalUrl = J$.N(893081, 'getCanonicalUrl', J$.T(893073, getCanonicalUrl, 12, false), true, false, false);
            const _ = J$.W(892593, '_', J$.F(892585, J$.I(typeof require === 'undefined' ? require = J$.R(892569, 'require', undefined, true, true) : require = J$.R(892569, 'require', require, true, true)), false)(J$.T(892577, 'lodash', 21, false)), _, false, true);
            const urlUtils = J$.W(892625, 'urlUtils', J$.F(892617, J$.I(typeof require === 'undefined' ? require = J$.R(892601, 'require', undefined, true, true) : require = J$.R(892601, 'require', require, true, true)), false)(J$.T(892609, '../../shared/url-utils', 21, false)), urlUtils, false, true);
            const getUrl = J$.W(892657, 'getUrl', J$.F(892649, J$.I(typeof require === 'undefined' ? require = J$.R(892633, 'require', undefined, true, true) : require = J$.R(892633, 'require', require, true, true)), false)(J$.T(892641, './url', 21, false)), getUrl, false, true);
            J$.P(893033, J$.I(typeof module === 'undefined' ? module = J$.R(893017, 'module', undefined, true, true) : module = J$.R(893017, 'module', module, true, true)), 'exports', J$.R(893025, 'getCanonicalUrl', getCanonicalUrl, false, true));
        } catch (J$e) {
            J$.Ex(893105, J$e);
        } finally {
            if (J$.Sr(893113))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

