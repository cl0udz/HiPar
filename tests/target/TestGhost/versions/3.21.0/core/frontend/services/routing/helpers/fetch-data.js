J$.noInstrEval = false;
jalangiLabel6:
    while (true) {
        try {
            J$.Se(925889, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/helpers/fetch-data.js');
            function processQuery(query, slugParam, locals) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(924577, arguments.callee, this, arguments);
                            arguments = J$.N(924585, 'arguments', arguments, true, false, false);
                            query = J$.N(924593, 'query', query, true, false, false);
                            slugParam = J$.N(924601, 'slugParam', slugParam, true, false, false);
                            locals = J$.N(924609, 'locals', locals, true, false, false);
                            J$.N(924617, 'api', api, false, false, false);
                            const api = J$.W(924177, 'api', J$.G(924169, J$.F(924145, J$.I(typeof require === 'undefined' ? require = J$.R(924129, 'require', undefined, true, true) : require = J$.R(924129, 'require', require, true, true)), false)(J$.T(924137, '../../../../server/api', 21, false)), J$.G(924161, J$.R(924153, 'locals', locals, false, false), 'apiVersion')), api, false, false);
                            query = J$.W(924209, 'query', J$.M(924201, J$.R(924185, '_', _, false, true), 'cloneDeep', false)(J$.R(924193, 'query', query, false, false)), query, false, false);
                            J$.M(924241, J$.R(924217, '_', _, false, true), 'defaultsDeep', false)(J$.R(924225, 'query', query, false, false), J$.R(924233, 'queryDefaults', queryDefaults, false, true));
                            J$.M(924409, J$.R(924249, '_', _, false, true), 'each', false)(J$.G(924265, J$.R(924257, 'query', query, false, false), 'options'), J$.T(924401, function (option, name) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(924369, arguments.callee, this, arguments);
                                            arguments = J$.N(924377, 'arguments', arguments, true, false, false);
                                            option = J$.N(924385, 'option', option, true, false, false);
                                            name = J$.N(924393, 'name', name, true, false, false);
                                            J$.P(924361, J$.G(924281, J$.R(924273, 'query', query, false, false), 'options'), J$.R(924289, 'name', name, false, false), J$.C(69488, J$.M(924313, J$.R(924297, '_', _, false, true), 'isString', false)(J$.R(924305, 'option', option, false, false))) ? J$.M(924345, J$.R(924321, 'option', option, false, false), 'replace', false)(J$.T(924329, /%s/g, 14, false), J$.R(924337, 'slugParam', slugParam, false, false)) : J$.R(924353, 'option', option, false, false));
                                        } catch (J$e) {
                                            J$.Ex(925977, J$e);
                                        } finally {
                                            if (J$.Fr(925985))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            J$.P(924457, J$.G(924425, J$.R(924417, 'query', query, false, false), 'options'), 'context', J$.T(924449, { member: J$.G(924441, J$.R(924433, 'locals', locals, false, false), 'member') }, 11, false));
                            return J$.Rt(924569, J$.M(924561, J$.C(69496, J$.G(924489, J$.R(924465, 'api', api, false, false), J$.G(924481, J$.R(924473, 'query', query, false, false), 'controller'))) ? J$._() : J$.G(924521, J$.R(924497, 'api', api, false, false), J$.G(924513, J$.R(924505, 'query', query, false, false), 'resource')), J$.G(924537, J$.R(924529, 'query', query, false, false), 'type'), false)(J$.G(924553, J$.R(924545, 'query', query, false, false), 'options')));
                        } catch (J$e) {
                            J$.Ex(925993, J$e);
                        } finally {
                            if (J$.Fr(926001))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function fetchData(pathOptions, routerOptions, locals) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(925809, arguments.callee, this, arguments);
                            arguments = J$.N(925817, 'arguments', arguments, true, false, false);
                            pathOptions = J$.N(925825, 'pathOptions', pathOptions, true, false, false);
                            routerOptions = J$.N(925833, 'routerOptions', routerOptions, true, false, false);
                            locals = J$.N(925841, 'locals', locals, true, false, false);
                            J$.N(925849, 'postQuery', postQuery, false, false, false);
                            J$.N(925857, 'props', props, false, false, false);
                            pathOptions = J$.W(924641, 'pathOptions', J$.C(69504, J$.R(924625, 'pathOptions', pathOptions, false, false)) ? J$._() : J$.T(924633, {}, 11, false), pathOptions, false, false);
                            routerOptions = J$.W(924665, 'routerOptions', J$.C(69512, J$.R(924649, 'routerOptions', routerOptions, false, false)) ? J$._() : J$.T(924657, {}, 11, false), routerOptions, false, false);
                            let postQuery = J$.W(924697, 'postQuery', J$.M(924689, J$.R(924673, '_', _, false, true), 'cloneDeep', false)(J$.R(924681, 'defaultPostQuery', defaultPostQuery, false, true)), postQuery, false, false);
                            let props = J$.W(924713, 'props', J$.T(924705, {}, 11, false), props, false, false);
                            if (J$.C(69520, J$.G(924729, J$.R(924721, 'routerOptions', routerOptions, false, false), 'filter'))) {
                                J$.P(924769, J$.G(924745, J$.R(924737, 'postQuery', postQuery, false, false), 'options'), 'filter', J$.G(924761, J$.R(924753, 'routerOptions', routerOptions, false, false), 'filter'));
                            }
                            if (J$.C(69528, J$.G(924785, J$.R(924777, 'routerOptions', routerOptions, false, false), 'order'))) {
                                J$.P(924825, J$.G(924801, J$.R(924793, 'postQuery', postQuery, false, false), 'options'), 'order', J$.G(924817, J$.R(924809, 'routerOptions', routerOptions, false, false), 'order'));
                            }
                            if (J$.C(69536, J$.M(924873, J$.G(924849, J$.G(924841, J$.I(typeof Object === 'undefined' ? Object = J$.R(924833, 'Object', undefined, true, true) : Object = J$.R(924833, 'Object', Object, true, true)), 'prototype'), 'hasOwnProperty'), 'call', false)(J$.R(924857, 'pathOptions', pathOptions, false, false), J$.T(924865, 'page', 21, false)))) {
                                J$.P(924913, J$.G(924889, J$.R(924881, 'postQuery', postQuery, false, false), 'options'), 'page', J$.G(924905, J$.R(924897, 'pathOptions', pathOptions, false, false), 'page'));
                            }
                            if (J$.C(69544, J$.M(924961, J$.G(924937, J$.G(924929, J$.I(typeof Object === 'undefined' ? Object = J$.R(924921, 'Object', undefined, true, true) : Object = J$.R(924921, 'Object', Object, true, true)), 'prototype'), 'hasOwnProperty'), 'call', false)(J$.R(924945, 'pathOptions', pathOptions, false, false), J$.T(924953, 'limit', 21, false)))) {
                                J$.P(925001, J$.G(924977, J$.R(924969, 'postQuery', postQuery, false, false), 'options'), 'limit', J$.G(924993, J$.R(924985, 'pathOptions', pathOptions, false, false), 'limit'));
                            }
                            J$.P(925065, J$.R(925009, 'props', props, false, false), 'posts', J$.F(925057, J$.R(925017, 'processQuery', processQuery, false, true), false)(J$.R(925025, 'postQuery', postQuery, false, false), J$.G(925041, J$.R(925033, 'pathOptions', pathOptions, false, false), 'slug'), J$.R(925049, 'locals', locals, false, false)));
                            J$.M(925273, J$.R(925073, '_', _, false, true), 'each', false)(J$.G(925089, J$.R(925081, 'routerOptions', routerOptions, false, false), 'data'), J$.T(925265, function (query, name) {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(925225, arguments.callee, this, arguments);
                                            arguments = J$.N(925233, 'arguments', arguments, true, false, false);
                                            query = J$.N(925241, 'query', query, true, false, false);
                                            name = J$.N(925249, 'name', name, true, false, false);
                                            J$.N(925257, 'dataQueryOptions', dataQueryOptions, false, false, false);
                                            const dataQueryOptions = J$.W(925145, 'dataQueryOptions', J$.M(925137, J$.R(925097, '_', _, false, true), 'merge', false)(J$.R(925105, 'query', query, false, false), J$.G(925129, J$.R(925113, 'defaultDataQueryOptions', defaultDataQueryOptions, false, true), J$.R(925121, 'name', name, false, false))), dataQueryOptions, false, false);
                                            J$.P(925217, J$.R(925153, 'props', props, false, false), J$.R(925161, 'name', name, false, false), J$.F(925209, J$.R(925169, 'processQuery', processQuery, false, true), false)(J$.R(925177, 'dataQueryOptions', dataQueryOptions, false, false), J$.G(925193, J$.R(925185, 'pathOptions', pathOptions, false, false), 'slug'), J$.R(925201, 'locals', locals, false, false)));
                                        } catch (J$e) {
                                            J$.Ex(926009, J$e);
                                        } finally {
                                            if (J$.Fr(926017))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            return J$.Rt(925801, J$.M(925793, J$.M(925297, J$.R(925281, 'Promise', Promise, false, true), 'props', false)(J$.R(925289, 'props', props, false, false)), 'then', false)(J$.T(925785, function formatResponse(results) {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(925753, arguments.callee, this, arguments);
                                            arguments = J$.N(925761, 'arguments', arguments, true, false, false);
                                            results = J$.N(925769, 'results', results, true, false, false);
                                            J$.N(925777, 'response', response, false, false, false);
                                            const response = J$.W(925337, 'response', J$.M(925329, J$.R(925305, '_', _, false, true), 'cloneDeep', false)(J$.G(925321, J$.R(925313, 'results', results, false, false), 'posts')), response, false, false);
                                            if (J$.C(69560, J$.G(925353, J$.R(925345, 'routerOptions', routerOptions, false, false), 'data'))) {
                                                J$.P(925377, J$.R(925361, 'response', response, false, false), 'data', J$.T(925369, {}, 11, false));
                                                J$.M(925729, J$.R(925385, '_', _, false, true), 'each', false)(J$.G(925401, J$.R(925393, 'routerOptions', routerOptions, false, false), 'data'), J$.T(925721, function (config, name) {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(925689, arguments.callee, this, arguments);
                                                                arguments = J$.N(925697, 'arguments', arguments, true, false, false);
                                                                config = J$.N(925705, 'config', config, true, false, false);
                                                                name = J$.N(925713, 'name', name, true, false, false);
                                                                J$.P(925481, J$.G(925417, J$.R(925409, 'response', response, false, false), 'data'), J$.R(925425, 'name', name, false, false), J$.G(925473, J$.G(925449, J$.R(925433, 'results', results, false, false), J$.R(925441, 'name', name, false, false)), J$.G(925465, J$.R(925457, 'config', config, false, false), 'resource')));
                                                                if (J$.C(69552, J$.B(89818, '===', J$.G(925497, J$.R(925489, 'config', config, false, false), 'type'), J$.T(925505, 'browse', 21, false)))) {
                                                                    J$.P(925577, J$.G(925537, J$.G(925521, J$.R(925513, 'response', response, false, false), 'data'), J$.R(925529, 'name', name, false, false)), 'meta', J$.G(925569, J$.G(925561, J$.R(925545, 'results', results, false, false), J$.R(925553, 'name', name, false, false)), 'meta'));
                                                                    J$.P(925681, J$.G(925609, J$.G(925593, J$.R(925585, 'response', response, false, false), 'data'), J$.R(925601, 'name', name, false, false)), J$.G(925625, J$.R(925617, 'config', config, false, false), 'resource'), J$.G(925673, J$.G(925649, J$.R(925633, 'results', results, false, false), J$.R(925641, 'name', name, false, false)), J$.G(925665, J$.R(925657, 'config', config, false, false), 'resource')));
                                                                }
                                                            } catch (J$e) {
                                                                J$.Ex(926025, J$e);
                                                            } finally {
                                                                if (J$.Fr(926033))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            }
                                            return J$.Rt(925745, J$.R(925737, 'response', response, false, false));
                                        } catch (J$e) {
                                            J$.Ex(926041, J$e);
                                        } finally {
                                            if (J$.Fr(926049))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false)));
                        } catch (J$e) {
                            J$.Ex(926057, J$e);
                        } finally {
                            if (J$.Fr(926065))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(925897, '_', _, false, false, false);
            J$.N(925905, 'Promise', Promise, false, false, false);
            J$.N(925913, 'queryDefaults', queryDefaults, false, false, false);
            J$.N(925921, 'defaultQueryOptions', defaultQueryOptions, false, false, false);
            J$.N(925929, 'defaultDataQueryOptions', defaultDataQueryOptions, false, false, false);
            J$.N(925937, 'defaultPostQuery', defaultPostQuery, false, false, false);
            processQuery = J$.N(925953, 'processQuery', J$.T(925945, processQuery, 12, false), true, false, false);
            fetchData = J$.N(925969, 'fetchData', J$.T(925961, fetchData, 12, false), true, false, false);
            const _ = J$.W(923865, '_', J$.F(923857, J$.I(typeof require === 'undefined' ? require = J$.R(923841, 'require', undefined, true, true) : require = J$.R(923841, 'require', require, true, true)), false)(J$.T(923849, 'lodash', 21, false)), _, false, true);
            const Promise = J$.W(923897, 'Promise', J$.F(923889, J$.I(typeof require === 'undefined' ? require = J$.R(923873, 'require', undefined, true, true) : require = J$.R(923873, 'require', require, true, true)), false)(J$.T(923881, 'bluebird', 21, false)), Promise, false, true);
            const queryDefaults = J$.W(923945, 'queryDefaults', J$.T(923937, {
                type: J$.T(923905, 'browse', 21, false),
                resource: J$.T(923913, 'posts', 21, false),
                controller: J$.T(923921, 'postsPublic', 21, false),
                options: J$.T(923929, {}, 11, false)
            }, 11, false), queryDefaults, false, true);
            const defaultQueryOptions = J$.W(923977, 'defaultQueryOptions', J$.T(923969, { options: J$.T(923961, { include: J$.T(923953, 'authors,tags', 21, false) }, 11, false) }, 11, false), defaultQueryOptions, false, true);
            const defaultDataQueryOptions = J$.W(924057, 'defaultDataQueryOptions', J$.T(924049, {
                post: J$.M(924001, J$.R(923985, '_', _, false, true), 'cloneDeep', false)(J$.R(923993, 'defaultQueryOptions', defaultQueryOptions, false, true)),
                page: J$.M(924025, J$.R(924009, '_', _, false, true), 'cloneDeep', false)(J$.R(924017, 'defaultQueryOptions', defaultQueryOptions, false, true)),
                tag: J$.T(924033, null, 25, false),
                author: J$.T(924041, null, 25, false)
            }, 11, false), defaultDataQueryOptions, false, true);
            const defaultPostQuery = J$.W(924089, 'defaultPostQuery', J$.M(924081, J$.R(924065, '_', _, false, true), 'cloneDeep', false)(J$.R(924073, 'queryDefaults', queryDefaults, false, true)), defaultPostQuery, false, true);
            J$.P(924121, J$.R(924097, 'defaultPostQuery', defaultPostQuery, false, true), 'options', J$.G(924113, J$.R(924105, 'defaultQueryOptions', defaultQueryOptions, false, true), 'options'));
            J$.P(925881, J$.I(typeof module === 'undefined' ? module = J$.R(925865, 'module', undefined, true, true) : module = J$.R(925865, 'module', module, true, true)), 'exports', J$.R(925873, 'fetchData', fetchData, false, true));
        } catch (J$e) {
            J$.Ex(926073, J$e);
        } finally {
            if (J$.Sr(926081))
                continue jalangiLabel6;
            else
                break jalangiLabel6;
        }
    }
// JALANGI DO NOT INSTRUMENT

