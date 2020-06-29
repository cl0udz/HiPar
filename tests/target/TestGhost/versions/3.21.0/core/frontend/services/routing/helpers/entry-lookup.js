J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(923441, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/helpers/entry-lookup.js');
            function entryLookup(postUrl, routerOptions, locals) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(923321, arguments.callee, this, arguments);
                            arguments = J$.N(923329, 'arguments', arguments, true, false, false);
                            postUrl = J$.N(923337, 'postUrl', postUrl, true, false, false);
                            routerOptions = J$.N(923345, 'routerOptions', routerOptions, true, false, false);
                            locals = J$.N(923353, 'locals', locals, true, false, false);
                            J$.N(923361, 'api', api, false, false, false);
                            J$.N(923369, 'targetPath', targetPath, false, false, false);
                            J$.N(923377, 'permalinks', permalinks, false, false, false);
                            J$.N(923385, 'isEditURL', isEditURL, false, false, false);
                            J$.N(923393, 'matchFunc', matchFunc, false, false, false);
                            J$.N(923401, 'params', params, false, false, false);
                            J$.N(923409, 'options', options, false, false, false);
                            J$.F(922473, J$.R(922457, 'debug', debug, false, true), false)(J$.R(922465, 'postUrl', postUrl, false, false));
                            const api = J$.W(922529, 'api', J$.G(922521, J$.F(922497, J$.I(typeof require === 'undefined' ? require = J$.R(922481, 'require', undefined, true, true) : require = J$.R(922481, 'require', require, true, true)), false)(J$.T(922489, '../../../../server/api', 21, false)), J$.G(922513, J$.R(922505, 'locals', locals, false, false), 'apiVersion')), api, false, false);
                            const targetPath = J$.W(922569, 'targetPath', J$.G(922561, J$.M(922553, J$.R(922537, 'url', url, false, true), 'parse', false)(J$.R(922545, 'postUrl', postUrl, false, false)), 'path'), targetPath, false, false);
                            const permalinks = J$.W(922593, 'permalinks', J$.G(922585, J$.R(922577, 'routerOptions', routerOptions, false, false), 'permalinks'), permalinks, false, false);
                            let isEditURL = J$.W(922609, 'isEditURL', J$.T(922601, false, 23, false), isEditURL, false, false);
                            const matchFunc = J$.W(922641, 'matchFunc', J$.F(922633, J$.R(922617, 'routeMatch', routeMatch, false, true), false)(J$.R(922625, 'permalinks', permalinks, false, false)), matchFunc, false, false);
                            const params = J$.W(922673, 'params', J$.F(922665, J$.R(922649, 'matchFunc', matchFunc, false, false), false)(J$.R(922657, 'targetPath', targetPath, false, false)), params, false, false);
                            J$.F(922697, J$.R(922681, 'debug', debug, false, true), false)(J$.R(922689, 'targetPath', targetPath, false, false));
                            J$.F(922721, J$.R(922705, 'debug', debug, false, true), false)(J$.R(922713, 'params', params, false, false));
                            J$.F(922745, J$.R(922729, 'debug', debug, false, true), false)(J$.R(922737, 'permalinks', permalinks, false, false));
                            if (J$.C(69424, J$.C(69416, J$.B(89754, '===', J$.R(922753, 'params', params, false, false), J$.T(922761, false, 23, false))) ? J$._() : J$.U(89762, '!', J$.G(922793, J$.M(922785, J$.I(typeof Object === 'undefined' ? Object = J$.R(922769, 'Object', undefined, true, true) : Object = J$.R(922769, 'Object', Object, true, true)), 'keys', false)(J$.R(922777, 'params', params, false, false)), 'length')))) {
                                return J$.Rt(922817, J$.M(922809, J$.R(922801, 'Promise', Promise, false, true), 'resolve', false)());
                            }
                            if (J$.C(69440, J$.C(69432, J$.G(922833, J$.R(922825, 'params', params, false, false), 'options')) ? J$.B(89770, '===', J$.M(922857, J$.G(922849, J$.R(922841, 'params', params, false, false), 'options'), 'toLowerCase', false)(), J$.T(922865, 'edit', 21, false)) : J$._())) {
                                isEditURL = J$.W(922881, 'isEditURL', J$.T(922873, true, 23, false), isEditURL, false, false);
                            }
                            let options = J$.W(922905, 'options', J$.T(922897, { include: J$.T(922889, 'authors,tags', 21, false) }, 11, false), options, false, false);
                            J$.P(922945, J$.R(922913, 'options', options, false, false), 'context', J$.T(922937, { member: J$.G(922929, J$.R(922921, 'locals', locals, false, false), 'member') }, 11, false));
                            return J$.Rt(923313, J$.M(923305, J$.M(923097, J$.C(69448, J$.G(922985, J$.R(922953, 'api', api, false, false), J$.G(922977, J$.G(922969, J$.R(922961, 'routerOptions', routerOptions, false, false), 'query'), 'controller'))) ? J$._() : J$.G(923025, J$.R(922993, 'api', api, false, false), J$.G(923017, J$.G(923009, J$.R(923001, 'routerOptions', routerOptions, false, false), 'query'), 'resource')), 'read', false)(J$.M(923089, J$.R(923033, '_', _, false, true), 'extend', false)(J$.M(923073, J$.R(923041, '_', _, false, true), 'pick', false)(J$.R(923049, 'params', params, false, false), J$.T(923057, 'slug', 21, false), J$.T(923065, 'id', 21, false)), J$.R(923081, 'options', options, false, false))), 'then', false)(J$.T(923297, function then(result) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(923265, arguments.callee, this, arguments);
                                            arguments = J$.N(923273, 'arguments', arguments, true, false, false);
                                            result = J$.N(923281, 'result', result, true, false, false);
                                            J$.N(923289, 'entry', entry, false, false, false);
                                            const entry = J$.W(923161, 'entry', J$.G(923153, J$.G(923137, J$.R(923105, 'result', result, false, false), J$.G(923129, J$.G(923121, J$.R(923113, 'routerOptions', routerOptions, false, false), 'query'), 'resource')), J$.T(923145, 0, 22, false)), entry, false, false);
                                            if (J$.C(69456, J$.U(89778, '!', J$.R(923169, 'entry', entry, false, false)))) {
                                                return J$.Rt(923193, J$.M(923185, J$.R(923177, 'Promise', Promise, false, true), 'resolve', false)());
                                            }
                                            return J$.Rt(923257, J$.T(923249, {
                                                entry: J$.R(923201, 'entry', entry, false, false),
                                                isEditURL: J$.R(923209, 'isEditURL', isEditURL, false, false),
                                                isUnknownOption: J$.C(69464, J$.R(923217, 'isEditURL', isEditURL, false, false)) ? J$.T(923225, false, 23, false) : J$.U(89794, '!', J$.U(89786, '!', J$.G(923241, J$.R(923233, 'params', params, false, false), 'options')))
                                            }, 11, false));
                                        } catch (J$e) {
                                            J$.Ex(923505, J$e);
                                        } finally {
                                            if (J$.Fr(923513))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false)));
                        } catch (J$e) {
                            J$.Ex(923521, J$e);
                        } finally {
                            if (J$.Fr(923529))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(923449, '_', _, false, false, false);
            J$.N(923457, 'Promise', Promise, false, false, false);
            J$.N(923465, 'url', url, false, false, false);
            J$.N(923473, 'debug', debug, false, false, false);
            J$.N(923481, 'routeMatch', routeMatch, false, false, false);
            entryLookup = J$.N(923497, 'entryLookup', J$.T(923489, entryLookup, 12, false), true, false, false);
            const _ = J$.W(922297, '_', J$.F(922289, J$.I(typeof require === 'undefined' ? require = J$.R(922273, 'require', undefined, true, true) : require = J$.R(922273, 'require', require, true, true)), false)(J$.T(922281, 'lodash', 21, false)), _, false, true);
            const Promise = J$.W(922329, 'Promise', J$.F(922321, J$.I(typeof require === 'undefined' ? require = J$.R(922305, 'require', undefined, true, true) : require = J$.R(922305, 'require', require, true, true)), false)(J$.T(922313, 'bluebird', 21, false)), Promise, false, true);
            const url = J$.W(922361, 'url', J$.F(922353, J$.I(typeof require === 'undefined' ? require = J$.R(922337, 'require', undefined, true, true) : require = J$.R(922337, 'require', require, true, true)), false)(J$.T(922345, 'url', 21, false)), url, false, true);
            const debug = J$.W(922409, 'debug', J$.M(922401, J$.F(922385, J$.I(typeof require === 'undefined' ? require = J$.R(922369, 'require', undefined, true, true) : require = J$.R(922369, 'require', require, true, true)), false)(J$.T(922377, 'ghost-ignition', 21, false)), 'debug', false)(J$.T(922393, 'services:routing:helpers:entry-lookup', 21, false)), debug, false, true);
            const routeMatch = J$.W(922449, 'routeMatch', J$.F(922441, J$.F(922433, J$.I(typeof require === 'undefined' ? require = J$.R(922417, 'require', undefined, true, true) : require = J$.R(922417, 'require', require, true, true)), false)(J$.T(922425, 'path-match', 21, false)), false)(), routeMatch, false, true);
            J$.P(923433, J$.I(typeof module === 'undefined' ? module = J$.R(923417, 'module', undefined, true, true) : module = J$.R(923417, 'module', module, true, true)), 'exports', J$.R(923425, 'entryLookup', entryLookup, false, true));
        } catch (J$e) {
            J$.Ex(923537, J$e);
        } finally {
            if (J$.Sr(923545))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

