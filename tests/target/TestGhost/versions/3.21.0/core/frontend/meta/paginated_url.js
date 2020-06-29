J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(903353, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/paginated_url.js');
            function getPaginatedUrl(page, data, absolute) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(903249, arguments.callee, this, arguments);
                            arguments = J$.N(903257, 'arguments', arguments, true, false, false);
                            page = J$.N(903265, 'page', page, true, false, false);
                            data = J$.N(903273, 'data', data, true, false, false);
                            absolute = J$.N(903281, 'absolute', absolute, true, false, false);
                            J$.N(903289, 'pagePath', pagePath, false, false, false);
                            J$.N(903297, 'baseUrlPattern', baseUrlPattern, false, false, false);
                            J$.N(903305, 'baseUrlMatch', baseUrlMatch, false, false, false);
                            J$.N(903313, 'baseUrl', baseUrl, false, false, false);
                            J$.N(903321, 'newRelativeUrl', newRelativeUrl, false, false, false);
                            if (J$.C(68016, J$.C(68008, J$.C(68000, J$.U(89202, '!', J$.R(902529, 'data', data, false, false))) ? J$._() : J$.U(89210, '!', J$.G(902545, J$.R(902537, 'data', data, false, false), 'relativeUrl'))) ? J$._() : J$.U(89218, '!', J$.G(902561, J$.R(902553, 'data', data, false, false), 'pagination')))) {
                                return J$.Rt(902577, J$.T(902569, null, 25, false));
                            }
                            const pagePath = J$.W(902609, 'pagePath', J$.M(902601, J$.R(902585, 'urlUtils', urlUtils, false, true), 'urlJoin', false)(J$.T(902593, '/page/', 21, false)), pagePath, false, false);
                            const baseUrlPattern = J$.W(902641, 'baseUrlPattern', J$.F(902633, J$.I(typeof RegExp === 'undefined' ? RegExp = J$.R(902617, 'RegExp', undefined, true, true) : RegExp = J$.R(902617, 'RegExp', RegExp, true, true)), true)(J$.T(902625, '(.+)?(/page/\\d+/)', 21, false)), baseUrlPattern, false, false);
                            const baseUrlMatch = J$.W(902681, 'baseUrlMatch', J$.M(902673, J$.G(902657, J$.R(902649, 'data', data, false, false), 'relativeUrl'), 'match', false)(J$.R(902665, 'baseUrlPattern', baseUrlPattern, false, false)), baseUrlMatch, false, false);
                            const baseUrl = J$.W(902761, 'baseUrl', J$.C(68024, J$.R(902689, 'baseUrlMatch', baseUrlMatch, false, false)) ? J$.G(902713, J$.R(902697, 'baseUrlMatch', baseUrlMatch, false, false), J$.T(902705, 1, 22, false)) : J$.M(902753, J$.G(902729, J$.R(902721, 'data', data, false, false), 'relativeUrl'), 'slice', false)(J$.T(902737, 0, 22, false), J$.U(89226, '-', J$.T(902745, 1, 22, false))), baseUrl, false, false);
                            let newRelativeUrl;
                            if (J$.C(68080, J$.C(68032, J$.B(89234, '===', J$.R(902769, 'page', page, false, false), J$.T(902777, 'next', 21, false))) ? J$.G(902801, J$.G(902793, J$.R(902785, 'data', data, false, false), 'pagination'), 'next') : J$._())) {
                                newRelativeUrl = J$.W(902865, 'newRelativeUrl', J$.M(902857, J$.R(902809, 'urlUtils', urlUtils, false, true), 'urlJoin', false)(J$.R(902817, 'pagePath', pagePath, false, false), J$.G(902841, J$.G(902833, J$.R(902825, 'data', data, false, false), 'pagination'), 'next'), J$.T(902849, '/', 21, false)), newRelativeUrl, false, false);
                            } else if (J$.C(68072, J$.C(68040, J$.B(89242, '===', J$.R(902873, 'page', page, false, false), J$.T(902881, 'prev', 21, false))) ? J$.G(902905, J$.G(902897, J$.R(902889, 'data', data, false, false), 'pagination'), 'prev') : J$._())) {
                                newRelativeUrl = J$.W(903009, 'newRelativeUrl', J$.C(68048, J$.B(89250, '>', J$.G(902929, J$.G(902921, J$.R(902913, 'data', data, false, false), 'pagination'), 'prev'), J$.T(902937, 1, 22, false))) ? J$.M(902993, J$.R(902945, 'urlUtils', urlUtils, false, true), 'urlJoin', false)(J$.R(902953, 'pagePath', pagePath, false, false), J$.G(902977, J$.G(902969, J$.R(902961, 'data', data, false, false), 'pagination'), 'prev'), J$.T(902985, '/', 21, false)) : J$.T(903001, '/', 21, false), newRelativeUrl, false, false);
                            } else if (J$.C(68064, J$.M(903033, J$.R(903017, '_', _, false, true), 'isNumber', false)(J$.R(903025, 'page', page, false, false)))) {
                                newRelativeUrl = J$.W(903105, 'newRelativeUrl', J$.C(68056, J$.B(89258, '>', J$.R(903041, 'page', page, false, false), J$.T(903049, 1, 22, false))) ? J$.M(903089, J$.R(903057, 'urlUtils', urlUtils, false, true), 'urlJoin', false)(J$.R(903065, 'pagePath', pagePath, false, false), J$.R(903073, 'page', page, false, false), J$.T(903081, '/', 21, false)) : J$.T(903097, '/', 21, false), newRelativeUrl, false, false);
                            } else {
                                return J$.Rt(903121, J$.T(903113, null, 25, false));
                            }
                            newRelativeUrl = J$.W(903177, 'newRelativeUrl', J$.C(68088, J$.R(903129, 'baseUrl', baseUrl, false, false)) ? J$.M(903161, J$.R(903137, 'urlUtils', urlUtils, false, true), 'urlJoin', false)(J$.R(903145, 'baseUrl', baseUrl, false, false), J$.R(903153, 'newRelativeUrl', newRelativeUrl, false, false)) : J$.R(903169, 'newRelativeUrl', newRelativeUrl, false, false), newRelativeUrl, false, false);
                            return J$.Rt(903241, J$.M(903233, J$.R(903185, 'urlUtils', urlUtils, false, true), 'urlFor', false)(J$.T(903217, {
                                relativeUrl: J$.R(903193, 'newRelativeUrl', newRelativeUrl, false, false),
                                secure: J$.G(903209, J$.R(903201, 'data', data, false, false), 'secure')
                            }, 11, false), J$.R(903225, 'absolute', absolute, false, false)));
                        } catch (J$e) {
                            J$.Ex(903393, J$e);
                        } finally {
                            if (J$.Fr(903401))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(903361, '_', _, false, false, false);
            J$.N(903369, 'urlUtils', urlUtils, false, false, false);
            getPaginatedUrl = J$.N(903385, 'getPaginatedUrl', J$.T(903377, getPaginatedUrl, 12, false), true, false, false);
            const _ = J$.W(902489, '_', J$.F(902481, J$.I(typeof require === 'undefined' ? require = J$.R(902465, 'require', undefined, true, true) : require = J$.R(902465, 'require', require, true, true)), false)(J$.T(902473, 'lodash', 21, false)), _, false, true);
            const urlUtils = J$.W(902521, 'urlUtils', J$.F(902513, J$.I(typeof require === 'undefined' ? require = J$.R(902497, 'require', undefined, true, true) : require = J$.R(902497, 'require', require, true, true)), false)(J$.T(902505, '../../shared/url-utils', 21, false)), urlUtils, false, true);
            J$.P(903345, J$.I(typeof module === 'undefined' ? module = J$.R(903329, 'module', undefined, true, true) : module = J$.R(903329, 'module', module, true, true)), 'exports', J$.R(903337, 'getPaginatedUrl', getPaginatedUrl, false, true));
        } catch (J$e) {
            J$.Ex(903409, J$e);
        } finally {
            if (J$.Sr(903417))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

