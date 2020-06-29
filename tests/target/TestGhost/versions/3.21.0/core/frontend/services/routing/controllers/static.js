J$.noInstrEval = false;
jalangiLabel6:
    while (true) {
        try {
            J$.Se(920793, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/controllers/static.js');
            function processQuery(query, locals) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(919785, arguments.callee, this, arguments);
                            arguments = J$.N(919793, 'arguments', arguments, true, false, false);
                            query = J$.N(919801, 'query', query, true, false, false);
                            locals = J$.N(919809, 'locals', locals, true, false, false);
                            J$.N(919817, 'api', api, false, false, false);
                            const api = J$.W(919473, 'api', J$.G(919465, J$.F(919441, J$.I(typeof require === 'undefined' ? require = J$.R(919425, 'require', undefined, true, true) : require = J$.R(919425, 'require', require, true, true)), false)(J$.T(919433, '../../../../server/api', 21, false)), J$.G(919457, J$.R(919449, 'locals', locals, false, false), 'apiVersion')), api, false, false);
                            query = J$.W(919505, 'query', J$.M(919497, J$.R(919481, '_', _, false, true), 'cloneDeep', false)(J$.R(919489, 'query', query, false, false)), query, false, false);
                            if (J$.C(69200, J$.C(69192, J$.B(89666, '===', J$.M(919537, J$.R(919513, '_', _, false, true), 'get', false)(J$.R(919521, 'query', query, false, false), J$.T(919529, 'resource', 21, false)), J$.T(919545, 'posts', 21, false))) ? J$._() : J$.B(89674, '===', J$.M(919577, J$.R(919553, '_', _, false, true), 'get', false)(J$.R(919561, 'query', query, false, false), J$.T(919569, 'resource', 21, false)), J$.T(919585, 'pages', 21, false)))) {
                                J$.M(919633, J$.R(919593, '_', _, false, true), 'extend', false)(J$.G(919609, J$.R(919601, 'query', query, false, false), 'options'), J$.T(919625, { include: J$.T(919617, 'authors,tags', 21, false) }, 11, false));
                            }
                            J$.M(919697, J$.I(typeof Object === 'undefined' ? Object = J$.R(919641, 'Object', undefined, true, true) : Object = J$.R(919641, 'Object', Object, true, true)), 'assign', false)(J$.G(919657, J$.R(919649, 'query', query, false, false), 'options'), J$.T(919689, { context: J$.T(919681, { members: J$.G(919673, J$.R(919665, 'locals', locals, false, false), 'member') }, 11, false) }, 11, false));
                            return J$.Rt(919777, J$.M(919769, J$.G(919729, J$.R(919705, 'api', api, false, false), J$.G(919721, J$.R(919713, 'query', query, false, false), 'controller')), J$.G(919745, J$.R(919737, 'query', query, false, false), 'type'), false)(J$.G(919761, J$.R(919753, 'query', query, false, false), 'options')));
                        } catch (J$e) {
                            J$.Ex(920849, J$e);
                        } finally {
                            if (J$.Fr(920857))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(920801, '_', _, false, false, false);
            J$.N(920809, 'Promise', Promise, false, false, false);
            J$.N(920817, 'debug', debug, false, false, false);
            J$.N(920825, 'helpers', helpers, false, false, false);
            processQuery = J$.N(920841, 'processQuery', J$.T(920833, processQuery, 12, false), true, false, false);
            const _ = J$.W(919305, '_', J$.F(919297, J$.I(typeof require === 'undefined' ? require = J$.R(919281, 'require', undefined, true, true) : require = J$.R(919281, 'require', require, true, true)), false)(J$.T(919289, 'lodash', 21, false)), _, false, true);
            const Promise = J$.W(919337, 'Promise', J$.F(919329, J$.I(typeof require === 'undefined' ? require = J$.R(919313, 'require', undefined, true, true) : require = J$.R(919313, 'require', require, true, true)), false)(J$.T(919321, 'bluebird', 21, false)), Promise, false, true);
            const debug = J$.W(919385, 'debug', J$.M(919377, J$.F(919361, J$.I(typeof require === 'undefined' ? require = J$.R(919345, 'require', undefined, true, true) : require = J$.R(919345, 'require', require, true, true)), false)(J$.T(919353, 'ghost-ignition', 21, false)), 'debug', false)(J$.T(919369, 'services:routing:controllers:static', 21, false)), debug, false, true);
            const helpers = J$.W(919417, 'helpers', J$.F(919409, J$.I(typeof require === 'undefined' ? require = J$.R(919393, 'require', undefined, true, true) : require = J$.R(919393, 'require', require, true, true)), false)(J$.T(919401, '../helpers', 21, false)), helpers, false, true);
            J$.P(920785, J$.I(typeof module === 'undefined' ? module = J$.R(919825, 'module', undefined, true, true) : module = J$.R(919825, 'module', module, true, true)), 'exports', J$.T(920777, function staticController(req, res, next) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(920729, arguments.callee, this, arguments);
                            arguments = J$.N(920737, 'arguments', arguments, true, false, false);
                            req = J$.N(920745, 'req', req, true, false, false);
                            res = J$.N(920753, 'res', res, true, false, false);
                            next = J$.N(920761, 'next', next, true, false, false);
                            J$.N(920769, 'props', props, false, false, false);
                            J$.F(919865, J$.R(919833, 'debug', debug, false, true), false)(J$.T(919841, 'staticController', 21, false), J$.G(919857, J$.R(919849, 'res', res, false, false), 'routerOptions'));
                            let props = J$.W(919881, 'props', J$.T(919873, {}, 11, false), props, false, false);
                            J$.M(920025, J$.R(919889, '_', _, false, true), 'each', false)(J$.G(919913, J$.G(919905, J$.R(919897, 'res', res, false, false), 'routerOptions'), 'data'), J$.T(920017, function (query, name) {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(919985, arguments.callee, this, arguments);
                                            arguments = J$.N(919993, 'arguments', arguments, true, false, false);
                                            query = J$.N(920001, 'query', query, true, false, false);
                                            name = J$.N(920009, 'name', name, true, false, false);
                                            J$.P(919977, J$.R(919921, 'props', props, false, false), J$.R(919929, 'name', name, false, false), J$.F(919969, J$.R(919937, 'processQuery', processQuery, false, true), false)(J$.R(919945, 'query', query, false, false), J$.G(919961, J$.R(919953, 'res', res, false, false), 'locals')));
                                        } catch (J$e) {
                                            J$.Ex(920865, J$e);
                                        } finally {
                                            if (J$.Fr(920873))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            return J$.Rt(920721, J$.M(920713, J$.M(920681, J$.M(920049, J$.R(920033, 'Promise', Promise, false, true), 'props', false)(J$.R(920041, 'props', props, false, false)), 'then', false)(J$.T(920673, function handleResult(result) {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(920641, arguments.callee, this, arguments);
                                            arguments = J$.N(920649, 'arguments', arguments, true, false, false);
                                            result = J$.N(920657, 'result', result, true, false, false);
                                            J$.N(920665, 'response', response, false, false, false);
                                            let response = J$.W(920065, 'response', J$.T(920057, {}, 11, false), response, false, false);
                                            if (J$.C(69216, J$.G(920089, J$.G(920081, J$.R(920073, 'res', res, false, false), 'routerOptions'), 'data'))) {
                                                J$.P(920113, J$.R(920097, 'response', response, false, false), 'data', J$.T(920105, {}, 11, false));
                                                J$.M(920473, J$.R(920121, '_', _, false, true), 'each', false)(J$.G(920145, J$.G(920137, J$.R(920129, 'res', res, false, false), 'routerOptions'), 'data'), J$.T(920465, function (config, name) {
                                                    jalangiLabel2:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(920433, arguments.callee, this, arguments);
                                                                arguments = J$.N(920441, 'arguments', arguments, true, false, false);
                                                                config = J$.N(920449, 'config', config, true, false, false);
                                                                name = J$.N(920457, 'name', name, true, false, false);
                                                                J$.P(920225, J$.G(920161, J$.R(920153, 'response', response, false, false), 'data'), J$.R(920169, 'name', name, false, false), J$.G(920217, J$.G(920193, J$.R(920177, 'result', result, false, false), J$.R(920185, 'name', name, false, false)), J$.G(920209, J$.R(920201, 'config', config, false, false), 'resource')));
                                                                if (J$.C(69208, J$.B(89682, '===', J$.G(920241, J$.R(920233, 'config', config, false, false), 'type'), J$.T(920249, 'browse', 21, false)))) {
                                                                    J$.P(920321, J$.G(920281, J$.G(920265, J$.R(920257, 'response', response, false, false), 'data'), J$.R(920273, 'name', name, false, false)), 'meta', J$.G(920313, J$.G(920305, J$.R(920289, 'result', result, false, false), J$.R(920297, 'name', name, false, false)), 'meta'));
                                                                    J$.P(920425, J$.G(920353, J$.G(920337, J$.R(920329, 'response', response, false, false), 'data'), J$.R(920345, 'name', name, false, false)), J$.G(920369, J$.R(920361, 'config', config, false, false), 'resource'), J$.G(920417, J$.G(920393, J$.R(920377, 'result', result, false, false), J$.R(920385, 'name', name, false, false)), J$.G(920409, J$.R(920401, 'config', config, false, false), 'resource')));
                                                                }
                                                            } catch (J$e) {
                                                                J$.Ex(920881, J$e);
                                                            } finally {
                                                                if (J$.Fr(920889))
                                                                    continue jalangiLabel2;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            }
                                            J$.M(920569, J$.R(920481, '_', _, false, true), 'each', false)(J$.G(920497, J$.R(920489, 'response', response, false, false), 'data'), J$.T(920561, function (data) {
                                                jalangiLabel3:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(920537, arguments.callee, this, arguments);
                                                            arguments = J$.N(920545, 'arguments', arguments, true, false, false);
                                                            data = J$.N(920553, 'data', data, true, false, false);
                                                            J$.M(920529, J$.R(920505, 'helpers', helpers, false, true), 'secure', false)(J$.R(920513, 'req', req, false, false), J$.R(920521, 'data', data, false, false));
                                                        } catch (J$e) {
                                                            J$.Ex(920897, J$e);
                                                        } finally {
                                                            if (J$.Fr(920905))
                                                                continue jalangiLabel3;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false));
                                            J$.M(920633, J$.R(920577, 'helpers', helpers, false, true), 'renderer', false)(J$.R(920585, 'req', req, false, false), J$.R(920593, 'res', res, false, false), J$.M(920625, J$.G(920609, J$.R(920601, 'helpers', helpers, false, true), 'formatResponse'), 'entries', false)(J$.R(920617, 'response', response, false, false)));
                                        } catch (J$e) {
                                            J$.Ex(920913, J$e);
                                        } finally {
                                            if (J$.Fr(920921))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false)), 'catch', false)(J$.M(920705, J$.R(920689, 'helpers', helpers, false, true), 'handleError', false)(J$.R(920697, 'next', next, false, false))));
                        } catch (J$e) {
                            J$.Ex(920929, J$e);
                        } finally {
                            if (J$.Fr(920937))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(920945, J$e);
        } finally {
            if (J$.Sr(920953))
                continue jalangiLabel6;
            else
                break jalangiLabel6;
        }
    }
// JALANGI DO NOT INSTRUMENT

