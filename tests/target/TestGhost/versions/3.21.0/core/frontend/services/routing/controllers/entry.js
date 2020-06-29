J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(916089, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/controllers/entry.js');
            J$.N(916097, 'debug', debug, false, false, false);
            J$.N(916105, 'url', url, false, false, false);
            J$.N(916113, 'config', config, false, false, false);
            J$.N(916121, 'urlService', urlService, false, false, false);
            J$.N(916129, 'urlUtils', urlUtils, false, false, false);
            J$.N(916137, 'helpers', helpers, false, false, false);
            const debug = J$.W(914729, 'debug', J$.M(914721, J$.F(914705, J$.I(typeof require === 'undefined' ? require = J$.R(914689, 'require', undefined, true, true) : require = J$.R(914689, 'require', require, true, true)), false)(J$.T(914697, 'ghost-ignition', 21, false)), 'debug', false)(J$.T(914713, 'services:routing:controllers:entry', 21, false)), debug, false, true);
            const url = J$.W(914761, 'url', J$.F(914753, J$.I(typeof require === 'undefined' ? require = J$.R(914737, 'require', undefined, true, true) : require = J$.R(914737, 'require', require, true, true)), false)(J$.T(914745, 'url', 21, false)), url, false, true);
            const config = J$.W(914793, 'config', J$.F(914785, J$.I(typeof require === 'undefined' ? require = J$.R(914769, 'require', undefined, true, true) : require = J$.R(914769, 'require', require, true, true)), false)(J$.T(914777, '../../../../shared/config', 21, false)), config, false, true);
            const urlService = J$.W(914825, 'urlService', J$.F(914817, J$.I(typeof require === 'undefined' ? require = J$.R(914801, 'require', undefined, true, true) : require = J$.R(914801, 'require', require, true, true)), false)(J$.T(914809, '../../../services/url', 21, false)), urlService, false, true);
            const urlUtils = J$.W(914857, 'urlUtils', J$.F(914849, J$.I(typeof require === 'undefined' ? require = J$.R(914833, 'require', undefined, true, true) : require = J$.R(914833, 'require', require, true, true)), false)(J$.T(914841, '../../../../shared/url-utils', 21, false)), urlUtils, false, true);
            const helpers = J$.W(914889, 'helpers', J$.F(914881, J$.I(typeof require === 'undefined' ? require = J$.R(914865, 'require', undefined, true, true) : require = J$.R(914865, 'require', require, true, true)), false)(J$.T(914873, '../helpers', 21, false)), helpers, false, true);
            J$.P(916081, J$.I(typeof module === 'undefined' ? module = J$.R(914897, 'module', undefined, true, true) : module = J$.R(914897, 'module', module, true, true)), 'exports', J$.T(916073, function entryController(req, res, next) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(916033, arguments.callee, this, arguments);
                            arguments = J$.N(916041, 'arguments', arguments, true, false, false);
                            req = J$.N(916049, 'req', req, true, false, false);
                            res = J$.N(916057, 'res', res, true, false, false);
                            next = J$.N(916065, 'next', next, true, false, false);
                            J$.F(914937, J$.R(914905, 'debug', debug, false, true), false)(J$.T(914913, 'entryController', 21, false), J$.G(914929, J$.R(914921, 'res', res, false, false), 'routerOptions'));
                            return J$.Rt(916025, J$.M(916017, J$.M(915985, J$.M(915001, J$.R(914945, 'helpers', helpers, false, true), 'entryLookup', false)(J$.G(914961, J$.R(914953, 'req', req, false, false), 'path'), J$.G(914977, J$.R(914969, 'res', res, false, false), 'routerOptions'), J$.G(914993, J$.R(914985, 'res', res, false, false), 'locals')), 'then', false)(J$.T(915977, function then(lookup) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(915929, arguments.callee, this, arguments);
                                            arguments = J$.N(915937, 'arguments', arguments, true, false, false);
                                            lookup = J$.N(915945, 'lookup', lookup, true, false, false);
                                            J$.N(915953, 'entry', entry, false, false, false);
                                            J$.N(915961, 'resourceType', resourceType, false, false, false);
                                            J$.N(915969, 'renderer', renderer, false, false, false);
                                            const entry = J$.W(915041, 'entry', J$.C(69000, J$.R(915009, 'lookup', lookup, false, false)) ? J$.G(915025, J$.R(915017, 'lookup', lookup, false, false), 'entry') : J$.T(915033, false, 23, false), entry, false, false);
                                            if (J$.C(69008, J$.U(89522, '!', J$.R(915049, 'entry', entry, false, false)))) {
                                                J$.F(915073, J$.R(915057, 'debug', debug, false, true), false)(J$.T(915065, 'no entry', 21, false));
                                                return J$.Rt(915097, J$.F(915089, J$.R(915081, 'next', next, false, false), false)());
                                            }
                                            if (J$.C(69016, J$.G(915113, J$.R(915105, 'lookup', lookup, false, false), 'isUnknownOption'))) {
                                                J$.F(915137, J$.R(915121, 'debug', debug, false, true), false)(J$.T(915129, 'isUnknownOption', 21, false));
                                                return J$.Rt(915161, J$.F(915153, J$.R(915145, 'next', next, false, false), false)());
                                            }
                                            if (J$.C(69040, J$.G(915177, J$.R(915169, 'lookup', lookup, false, false), 'isEditURL'))) {
                                                if (J$.C(69024, J$.U(89530, '!', J$.M(915201, J$.R(915185, 'config', config, false, true), 'get', false)(J$.T(915193, 'admin:redirects', 21, false))))) {
                                                    J$.F(915225, J$.R(915209, 'debug', debug, false, true), false)(J$.T(915217, 'is edit url but admin redirects are disabled', 21, false));
                                                    return J$.Rt(915249, J$.F(915241, J$.R(915233, 'next', next, false, false), false)());
                                                }
                                                J$.F(915273, J$.R(915257, 'debug', debug, false, true), false)(J$.T(915265, 'redirect. is edit url', 21, false));
                                                const resourceType = J$.W(915313, 'resourceType', J$.C(69032, J$.G(915289, J$.R(915281, 'entry', entry, false, false), 'page')) ? J$.T(915297, 'page', 21, false) : J$.T(915305, 'post', 21, false), resourceType, false, false);
                                                return J$.Rt(915377, J$.M(915369, J$.R(915321, 'urlUtils', urlUtils, false, true), 'redirectToAdmin', false)(J$.T(915329, 302, 22, false), J$.R(915337, 'res', res, false, false), `/#/editor/${ J$.R(915345, 'resourceType', resourceType, false, false) }/${ J$.G(915361, J$.R(915353, 'entry', entry, false, false), 'id') }`));
                                            }
                                            if (J$.C(69048, J$.B(89538, '!==', J$.G(915425, J$.G(915417, J$.M(915409, J$.R(915385, 'urlService', urlService, false, true), 'getResourceById', false)(J$.G(915401, J$.R(915393, 'entry', entry, false, false), 'id')), 'config'), 'type'), J$.G(915449, J$.G(915441, J$.R(915433, 'res', res, false, false), 'routerOptions'), 'resourceType')))) {
                                                J$.F(915473, J$.R(915457, 'debug', debug, false, true), false)(J$.T(915465, 'not my resource type', 21, false));
                                                return J$.Rt(915497, J$.F(915489, J$.R(915481, 'next', next, false, false), false)());
                                            }
                                            if (J$.C(69056, J$.B(89546, '!==', J$.M(915545, J$.R(915505, 'urlUtils', urlUtils, false, true), 'absoluteToRelative', false)(J$.G(915521, J$.R(915513, 'entry', entry, false, false), 'url'), J$.T(915537, { withoutSubdirectory: J$.T(915529, true, 23, false) }, 11, false)), J$.G(915561, J$.R(915553, 'req', req, false, false), 'path')))) {
                                                J$.F(915585, J$.R(915569, 'debug', debug, false, true), false)(J$.T(915577, 'redirect', 21, false));
                                                return J$.Rt(915721, J$.M(915713, J$.R(915593, 'urlUtils', urlUtils, false, true), 'redirect301', false)(J$.R(915601, 'res', res, false, false), J$.M(915705, J$.R(915609, 'url', url, false, true), 'format', false)(J$.T(915697, {
                                                    pathname: J$.G(915649, J$.M(915641, J$.R(915617, 'url', url, false, true), 'parse', false)(J$.G(915633, J$.R(915625, 'entry', entry, false, false), 'url')), 'pathname'),
                                                    search: J$.G(915689, J$.M(915681, J$.R(915657, 'url', url, false, true), 'parse', false)(J$.G(915673, J$.R(915665, 'req', req, false, false), 'originalUrl')), 'search')
                                                }, 11, false))));
                                            }
                                            if (J$.C(69072, J$.C(69064, J$.B(89554, '!==', J$.G(915745, J$.G(915737, J$.R(915729, 'res', res, false, false), 'locals'), 'apiVersion'), J$.T(915753, 'v0.1', 21, false))) ? J$.B(89562, '!==', J$.G(915777, J$.G(915769, J$.R(915761, 'res', res, false, false), 'locals'), 'apiVersion'), J$.T(915785, 'v2', 21, false)) : J$._())) {
                                                J$.P(915817, J$.R(915793, 'entry', entry, false, false), 'access', J$.U(89578, '!', J$.U(89570, '!', J$.G(915809, J$.R(915801, 'entry', entry, false, false), 'html'))));
                                            }
                                            J$.M(915849, J$.R(915825, 'helpers', helpers, false, true), 'secure', false)(J$.R(915833, 'req', req, false, false), J$.R(915841, 'entry', entry, false, false));
                                            const renderer = J$.W(915889, 'renderer', J$.M(915881, J$.R(915857, 'helpers', helpers, false, true), 'renderEntry', false)(J$.R(915865, 'req', req, false, false), J$.R(915873, 'res', res, false, false)), renderer, false, false);
                                            return J$.Rt(915921, J$.F(915913, J$.R(915897, 'renderer', renderer, false, false), false)(J$.R(915905, 'entry', entry, false, false)));
                                        } catch (J$e) {
                                            J$.Ex(916145, J$e);
                                        } finally {
                                            if (J$.Fr(916153))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false)), 'catch', false)(J$.M(916009, J$.R(915993, 'helpers', helpers, false, true), 'handleError', false)(J$.R(916001, 'next', next, false, false))));
                        } catch (J$e) {
                            J$.Ex(916161, J$e);
                        } finally {
                            if (J$.Fr(916169))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(916177, J$e);
        } finally {
            if (J$.Sr(916185))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

