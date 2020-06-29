J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(917929, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/controllers/preview.js');
            J$.N(917937, 'debug', debug, false, false, false);
            J$.N(917945, 'config', config, false, false, false);
            J$.N(917953, 'urlService', urlService, false, false, false);
            J$.N(917961, 'urlUtils', urlUtils, false, false, false);
            J$.N(917969, 'helpers', helpers, false, false, false);
            const debug = J$.W(916729, 'debug', J$.M(916721, J$.F(916705, J$.I(typeof require === 'undefined' ? require = J$.R(916689, 'require', undefined, true, true) : require = J$.R(916689, 'require', require, true, true)), false)(J$.T(916697, 'ghost-ignition', 21, false)), 'debug', false)(J$.T(916713, 'services:routing:controllers:preview', 21, false)), debug, false, true);
            const config = J$.W(916761, 'config', J$.F(916753, J$.I(typeof require === 'undefined' ? require = J$.R(916737, 'require', undefined, true, true) : require = J$.R(916737, 'require', require, true, true)), false)(J$.T(916745, '../../../../shared/config', 21, false)), config, false, true);
            const urlService = J$.W(916793, 'urlService', J$.F(916785, J$.I(typeof require === 'undefined' ? require = J$.R(916769, 'require', undefined, true, true) : require = J$.R(916769, 'require', require, true, true)), false)(J$.T(916777, '../../url', 21, false)), urlService, false, true);
            const urlUtils = J$.W(916825, 'urlUtils', J$.F(916817, J$.I(typeof require === 'undefined' ? require = J$.R(916801, 'require', undefined, true, true) : require = J$.R(916801, 'require', require, true, true)), false)(J$.T(916809, '../../../../shared/url-utils', 21, false)), urlUtils, false, true);
            const helpers = J$.W(916857, 'helpers', J$.F(916849, J$.I(typeof require === 'undefined' ? require = J$.R(916833, 'require', undefined, true, true) : require = J$.R(916833, 'require', require, true, true)), false)(J$.T(916841, '../helpers', 21, false)), helpers, false, true);
            J$.P(917921, J$.I(typeof module === 'undefined' ? module = J$.R(916865, 'module', undefined, true, true) : module = J$.R(916865, 'module', module, true, true)), 'exports', J$.T(917913, function previewController(req, res, next) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(917857, arguments.callee, this, arguments);
                            arguments = J$.N(917865, 'arguments', arguments, true, false, false);
                            req = J$.N(917873, 'req', req, true, false, false);
                            res = J$.N(917881, 'res', res, true, false, false);
                            next = J$.N(917889, 'next', next, true, false, false);
                            J$.N(917897, 'api', api, false, false, false);
                            J$.N(917905, 'params', params, false, false, false);
                            J$.F(916889, J$.R(916873, 'debug', debug, false, true), false)(J$.T(916881, 'previewController', 21, false));
                            const api = J$.W(916953, 'api', J$.G(916945, J$.F(916913, J$.I(typeof require === 'undefined' ? require = J$.R(916897, 'require', undefined, true, true) : require = J$.R(916897, 'require', require, true, true)), false)(J$.T(916905, '../../../../server/api', 21, false)), J$.G(916937, J$.G(916929, J$.R(916921, 'res', res, false, false), 'locals'), 'apiVersion')), api, false, false);
                            const params = J$.W(917009, 'params', J$.T(917001, {
                                uuid: J$.G(916977, J$.G(916969, J$.R(916961, 'req', req, false, false), 'params'), 'uuid'),
                                status: J$.T(916985, 'all', 21, false),
                                include: J$.T(916993, 'authors,tags', 21, false)
                            }, 11, false), params, false, false);
                            return J$.Rt(917849, J$.M(917841, J$.M(917809, J$.M(917073, J$.G(917057, J$.R(917017, 'api', api, false, false), J$.G(917049, J$.G(917041, J$.G(917033, J$.R(917025, 'res', res, false, false), 'routerOptions'), 'query'), 'controller')), 'read', false)(J$.R(917065, 'params', params, false, false)), 'then', false)(J$.T(917801, function then(result) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(917753, arguments.callee, this, arguments);
                                            arguments = J$.N(917761, 'arguments', arguments, true, false, false);
                                            result = J$.N(917769, 'result', result, true, false, false);
                                            J$.N(917777, 'post', post, false, false, false);
                                            J$.N(917785, 'resourceType', resourceType, false, false, false);
                                            J$.N(917793, 'renderer', renderer, false, false, false);
                                            const post = J$.W(917145, 'post', J$.G(917137, J$.G(917121, J$.R(917081, 'result', result, false, false), J$.G(917113, J$.G(917105, J$.G(917097, J$.R(917089, 'res', res, false, false), 'routerOptions'), 'query'), 'resource')), J$.T(917129, 0, 22, false)), post, false, false);
                                            if (J$.C(69080, J$.U(89586, '!', J$.R(917153, 'post', post, false, false)))) {
                                                return J$.Rt(917177, J$.F(917169, J$.R(917161, 'next', next, false, false), false)());
                                            }
                                            if (J$.C(69120, J$.C(69088, J$.G(917201, J$.G(917193, J$.R(917185, 'req', req, false, false), 'params'), 'options')) ? J$.B(89594, '===', J$.M(917233, J$.G(917225, J$.G(917217, J$.R(917209, 'req', req, false, false), 'params'), 'options'), 'toLowerCase', false)(), J$.T(917241, 'edit', 21, false)) : J$._())) {
                                                if (J$.C(69096, J$.U(89602, '!', J$.M(917265, J$.R(917249, 'config', config, false, true), 'get', false)(J$.T(917257, 'admin:redirects', 21, false))))) {
                                                    return J$.Rt(917289, J$.F(917281, J$.R(917273, 'next', next, false, false), false)());
                                                }
                                                const resourceType = J$.W(917329, 'resourceType', J$.C(69104, J$.G(917305, J$.R(917297, 'post', post, false, false), 'page')) ? J$.T(917313, 'page', 21, false) : J$.T(917321, 'post', 21, false), resourceType, false, false);
                                                return J$.Rt(917393, J$.M(917385, J$.R(917337, 'urlUtils', urlUtils, false, true), 'redirectToAdmin', false)(J$.T(917345, 302, 22, false), J$.R(917353, 'res', res, false, false), `/#/editor/${ J$.R(917361, 'resourceType', resourceType, false, false) }/${ J$.G(917377, J$.R(917369, 'post', post, false, false), 'id') }`));
                                            } else if (J$.C(69112, J$.G(917417, J$.G(917409, J$.R(917401, 'req', req, false, false), 'params'), 'options'))) {
                                                return J$.Rt(917441, J$.F(917433, J$.R(917425, 'next', next, false, false), false)());
                                            }
                                            if (J$.C(69128, J$.B(89610, '===', J$.G(917457, J$.R(917449, 'post', post, false, false), 'status'), J$.T(917465, 'published', 21, false)))) {
                                                return J$.Rt(917545, J$.M(917537, J$.R(917473, 'urlUtils', urlUtils, false, true), 'redirect301', false)(J$.R(917481, 'res', res, false, false), J$.M(917529, J$.R(917489, 'urlService', urlService, false, true), 'getUrlByResourceId', false)(J$.G(917505, J$.R(917497, 'post', post, false, false), 'id'), J$.T(917521, { withSubdirectory: J$.T(917513, true, 23, false) }, 11, false))));
                                            }
                                            if (J$.C(69144, J$.C(69136, J$.B(89618, '!==', J$.G(917569, J$.G(917561, J$.R(917553, 'res', res, false, false), 'locals'), 'apiVersion'), J$.T(917577, 'v0.1', 21, false))) ? J$.B(89626, '!==', J$.G(917601, J$.G(917593, J$.R(917585, 'res', res, false, false), 'locals'), 'apiVersion'), J$.T(917609, 'v2', 21, false)) : J$._())) {
                                                J$.P(917641, J$.R(917617, 'post', post, false, false), 'access', J$.U(89642, '!', J$.U(89634, '!', J$.G(917633, J$.R(917625, 'post', post, false, false), 'html'))));
                                            }
                                            J$.M(917673, J$.R(917649, 'helpers', helpers, false, true), 'secure', false)(J$.R(917657, 'req', req, false, false), J$.R(917665, 'post', post, false, false));
                                            const renderer = J$.W(917713, 'renderer', J$.M(917705, J$.R(917681, 'helpers', helpers, false, true), 'renderEntry', false)(J$.R(917689, 'req', req, false, false), J$.R(917697, 'res', res, false, false)), renderer, false, false);
                                            return J$.Rt(917745, J$.F(917737, J$.R(917721, 'renderer', renderer, false, false), false)(J$.R(917729, 'post', post, false, false)));
                                        } catch (J$e) {
                                            J$.Ex(917977, J$e);
                                        } finally {
                                            if (J$.Fr(917985))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false)), 'catch', false)(J$.M(917833, J$.R(917817, 'helpers', helpers, false, true), 'handleError', false)(J$.R(917825, 'next', next, false, false))));
                        } catch (J$e) {
                            J$.Ex(917993, J$e);
                        } finally {
                            if (J$.Fr(918001))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(918009, J$e);
        } finally {
            if (J$.Sr(918017))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

