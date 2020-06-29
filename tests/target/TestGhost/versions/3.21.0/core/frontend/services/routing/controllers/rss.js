J$.noInstrEval = false;
jalangiLabel4:
    while (true) {
        try {
            J$.Se(919121, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/controllers/rss.js');
            function getTitle(relatedData) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(918449, arguments.callee, this, arguments);
                            arguments = J$.N(918457, 'arguments', arguments, true, false, false);
                            relatedData = J$.N(918465, 'relatedData', relatedData, true, false, false);
                            J$.N(918473, 'titleStart', titleStart, false, false, false);
                            relatedData = J$.W(918281, 'relatedData', J$.C(69152, J$.R(918265, 'relatedData', relatedData, false, false)) ? J$._() : J$.T(918273, {}, 11, false), relatedData, false, false);
                            let titleStart = J$.W(918361, 'titleStart', J$.C(69168, J$.C(69160, J$.M(918313, J$.R(918289, '_', _, false, true), 'get', false)(J$.R(918297, 'relatedData', relatedData, false, false), J$.T(918305, 'author[0].name', 21, false))) ? J$._() : J$.M(918345, J$.R(918321, '_', _, false, true), 'get', false)(J$.R(918329, 'relatedData', relatedData, false, false), J$.T(918337, 'tag[0].name', 21, false))) ? J$._() : J$.T(918353, '', 21, false), titleStart, false, false);
                            titleStart = J$.W(918401, 'titleStart', J$.B(89650, '+', J$.R(918393, 'titleStart', titleStart, false, false), J$.C(69176, J$.R(918369, 'titleStart', titleStart, false, false)) ? J$.T(918377, ' - ', 21, false) : J$.T(918385, '', 21, false)), titleStart, false, false);
                            return J$.Rt(918441, J$.B(89658, '+', J$.R(918409, 'titleStart', titleStart, false, false), J$.M(918433, J$.R(918417, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(918425, 'title', 21, false))));
                        } catch (J$e) {
                            J$.Ex(919201, J$e);
                        } finally {
                            if (J$.Fr(919209))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(919129, '_', _, false, false, false);
            J$.N(919137, 'debug', debug, false, false, false);
            J$.N(919145, 'url', url, false, false, false);
            J$.N(919153, 'security', security, false, false, false);
            J$.N(919161, 'settingsCache', settingsCache, false, false, false);
            J$.N(919169, 'rssService', rssService, false, false, false);
            J$.N(919177, 'helpers', helpers, false, false, false);
            getTitle = J$.N(919193, 'getTitle', J$.T(919185, getTitle, 12, false), true, false, false);
            const _ = J$.W(918049, '_', J$.F(918041, J$.I(typeof require === 'undefined' ? require = J$.R(918025, 'require', undefined, true, true) : require = J$.R(918025, 'require', require, true, true)), false)(J$.T(918033, 'lodash', 21, false)), _, false, true);
            const debug = J$.W(918097, 'debug', J$.M(918089, J$.F(918073, J$.I(typeof require === 'undefined' ? require = J$.R(918057, 'require', undefined, true, true) : require = J$.R(918057, 'require', require, true, true)), false)(J$.T(918065, 'ghost-ignition', 21, false)), 'debug', false)(J$.T(918081, 'services:routing:controllers:rss', 21, false)), debug, false, true);
            const url = J$.W(918129, 'url', J$.F(918121, J$.I(typeof require === 'undefined' ? require = J$.R(918105, 'require', undefined, true, true) : require = J$.R(918105, 'require', require, true, true)), false)(J$.T(918113, 'url', 21, false)), url, false, true);
            const security = J$.W(918161, 'security', J$.F(918153, J$.I(typeof require === 'undefined' ? require = J$.R(918137, 'require', undefined, true, true) : require = J$.R(918137, 'require', require, true, true)), false)(J$.T(918145, '../../../../server/lib/security', 21, false)), security, false, true);
            const settingsCache = J$.W(918193, 'settingsCache', J$.F(918185, J$.I(typeof require === 'undefined' ? require = J$.R(918169, 'require', undefined, true, true) : require = J$.R(918169, 'require', require, true, true)), false)(J$.T(918177, '../../../../server/services/settings/cache', 21, false)), settingsCache, false, true);
            const rssService = J$.W(918225, 'rssService', J$.F(918217, J$.I(typeof require === 'undefined' ? require = J$.R(918201, 'require', undefined, true, true) : require = J$.R(918201, 'require', require, true, true)), false)(J$.T(918209, '../../rss', 21, false)), rssService, false, true);
            const helpers = J$.W(918257, 'helpers', J$.F(918249, J$.I(typeof require === 'undefined' ? require = J$.R(918233, 'require', undefined, true, true) : require = J$.R(918233, 'require', require, true, true)), false)(J$.T(918241, '../helpers', 21, false)), helpers, false, true);
            J$.P(919113, J$.I(typeof module === 'undefined' ? module = J$.R(918481, 'module', undefined, true, true) : module = J$.R(918481, 'module', module, true, true)), 'exports', J$.T(919105, function rssController(req, res, next) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(919049, arguments.callee, this, arguments);
                            arguments = J$.N(919057, 'arguments', arguments, true, false, false);
                            req = J$.N(919065, 'req', req, true, false, false);
                            res = J$.N(919073, 'res', res, true, false, false);
                            next = J$.N(919081, 'next', next, true, false, false);
                            J$.N(919089, 'pathOptions', pathOptions, false, false, false);
                            J$.N(919097, 'baseUrl', baseUrl, false, false, false);
                            J$.F(918505, J$.R(918489, 'debug', debug, false, true), false)(J$.T(918497, 'rssController', 21, false));
                            const pathOptions = J$.W(918609, 'pathOptions', J$.T(918601, {
                                page: J$.T(918513, 1, 22, false),
                                slug: J$.C(69184, J$.G(918537, J$.G(918529, J$.R(918521, 'req', req, false, false), 'params'), 'slug')) ? J$.M(918585, J$.G(918553, J$.R(918545, 'security', security, false, true), 'string'), 'safe', false)(J$.G(918577, J$.G(918569, J$.R(918561, 'req', req, false, false), 'params'), 'slug')) : J$.T(918593, undefined, 24, false)
                            }, 11, false), pathOptions, false, false);
                            const baseUrl = J$.W(918657, 'baseUrl', J$.G(918649, J$.M(918641, J$.R(918617, 'url', url, false, true), 'parse', false)(J$.G(918633, J$.R(918625, 'req', req, false, false), 'originalUrl')), 'pathname'), baseUrl, false, false);
                            J$.M(919041, J$.M(919009, J$.M(918921, J$.M(918713, J$.R(918665, 'helpers', helpers, false, true), 'fetchData', false)(J$.R(918673, 'pathOptions', pathOptions, false, false), J$.G(918689, J$.R(918681, 'res', res, false, false), 'routerOptions'), J$.G(918705, J$.R(918697, 'res', res, false, false), 'locals')), 'then', false)(J$.T(918913, function formatResult(result) {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(918881, arguments.callee, this, arguments);
                                            arguments = J$.N(918889, 'arguments', arguments, true, false, false);
                                            result = J$.N(918897, 'result', result, true, false, false);
                                            J$.N(918905, 'response', response, false, false, false);
                                            const response = J$.W(918769, 'response', J$.M(918761, J$.R(918721, '_', _, false, true), 'pick', false)(J$.R(918729, 'result', result, false, false), J$.T(918753, [
                                                J$.T(918737, 'posts', 21, false),
                                                J$.T(918745, 'meta', 21, false)
                                            ], 10, false)), response, false, false);
                                            J$.P(918817, J$.R(918777, 'response', response, false, false), 'title', J$.F(918809, J$.R(918785, 'getTitle', getTitle, false, true), false)(J$.G(918801, J$.R(918793, 'result', result, false, false), 'data')));
                                            J$.P(918857, J$.R(918825, 'response', response, false, false), 'description', J$.M(918849, J$.R(918833, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(918841, 'description', 21, false)));
                                            return J$.Rt(918873, J$.R(918865, 'response', response, false, false));
                                        } catch (J$e) {
                                            J$.Ex(919217, J$e);
                                        } finally {
                                            if (J$.Fr(919225))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false)), 'then', false)(J$.T(919001, function (data) {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(918977, arguments.callee, this, arguments);
                                            arguments = J$.N(918985, 'arguments', arguments, true, false, false);
                                            data = J$.N(918993, 'data', data, true, false, false);
                                            return J$.Rt(918969, J$.M(918961, J$.R(918929, 'rssService', rssService, false, true), 'render', false)(J$.R(918937, 'res', res, false, false), J$.R(918945, 'baseUrl', baseUrl, false, false), J$.R(918953, 'data', data, false, false)));
                                        } catch (J$e) {
                                            J$.Ex(919233, J$e);
                                        } finally {
                                            if (J$.Fr(919241))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false)), 'catch', false)(J$.M(919033, J$.R(919017, 'helpers', helpers, false, true), 'handleError', false)(J$.R(919025, 'next', next, false, false)));
                        } catch (J$e) {
                            J$.Ex(919249, J$e);
                        } finally {
                            if (J$.Fr(919257))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(919265, J$e);
        } finally {
            if (J$.Sr(919273))
                continue jalangiLabel4;
            else
                break jalangiLabel4;
        }
    }
// JALANGI DO NOT INSTRUMENT

