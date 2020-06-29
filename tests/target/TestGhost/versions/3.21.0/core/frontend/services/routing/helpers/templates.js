J$.noInstrEval = false;
jalangiLabel9:
    while (true) {
        try {
            J$.Se(931769, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/helpers/templates.js');
            J$.N(931777, '_', _, false, false, false);
            J$.N(931785, 'path', path, false, false, false);
            J$.N(931793, 'url', url, false, false, false);
            J$.N(931801, 'config', config, false, false, false);
            J$.N(931809, 'themes', themes, false, false, false);
            J$.N(931817, '_private', _private, false, false, false);
            const _ = J$.W(929073, '_', J$.F(929065, J$.I(typeof require === 'undefined' ? require = J$.R(929049, 'require', undefined, true, true) : require = J$.R(929049, 'require', require, true, true)), false)(J$.T(929057, 'lodash', 21, false)), _, false, true);
            const path = J$.W(929105, 'path', J$.F(929097, J$.I(typeof require === 'undefined' ? require = J$.R(929081, 'require', undefined, true, true) : require = J$.R(929081, 'require', require, true, true)), false)(J$.T(929089, 'path', 21, false)), path, false, true);
            const url = J$.W(929137, 'url', J$.F(929129, J$.I(typeof require === 'undefined' ? require = J$.R(929113, 'require', undefined, true, true) : require = J$.R(929113, 'require', require, true, true)), false)(J$.T(929121, 'url', 21, false)), url, false, true);
            const config = J$.W(929169, 'config', J$.F(929161, J$.I(typeof require === 'undefined' ? require = J$.R(929145, 'require', undefined, true, true) : require = J$.R(929145, 'require', require, true, true)), false)(J$.T(929153, '../../../../shared/config', 21, false)), config, false, true);
            const themes = J$.W(929201, 'themes', J$.F(929193, J$.I(typeof require === 'undefined' ? require = J$.R(929177, 'require', undefined, true, true) : require = J$.R(929177, 'require', require, true, true)), false)(J$.T(929185, '../../themes', 21, false)), themes, false, true);
            const _private = J$.W(929217, '_private', J$.T(929209, {}, 11, false), _private, false, true);
            J$.P(929441, J$.R(929225, '_private', _private, false, true), 'getErrorTemplateHierarchy', J$.T(929433, function getErrorTemplateHierarchy(statusCode) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(929393, arguments.callee, this, arguments);
                            arguments = J$.N(929401, 'arguments', arguments, true, false, false);
                            statusCode = J$.N(929409, 'statusCode', statusCode, true, false, false);
                            J$.N(929417, 'errorCode', errorCode, false, false, false);
                            J$.N(929425, 'templateList', templateList, false, false, false);
                            const errorCode = J$.W(929257, 'errorCode', J$.M(929249, J$.R(929233, '_', _, false, true), 'toString', false)(J$.R(929241, 'statusCode', statusCode, false, false)), errorCode, false, false);
                            const templateList = J$.W(929281, 'templateList', J$.T(929273, [J$.T(929265, 'error', 21, false)], 10, false), templateList, false, false);
                            J$.M(929337, J$.R(929289, 'templateList', templateList, false, false), 'unshift', false)(J$.B(89882, '+', J$.B(89874, '+', J$.T(929297, 'error-', 21, false), J$.G(929321, J$.R(929305, 'errorCode', errorCode, false, false), J$.T(929313, 0, 22, false))), J$.T(929329, 'xx', 21, false)));
                            J$.M(929369, J$.R(929345, 'templateList', templateList, false, false), 'unshift', false)(J$.B(89890, '+', J$.T(929353, 'error-', 21, false), J$.R(929361, 'errorCode', errorCode, false, false)));
                            return J$.Rt(929385, J$.R(929377, 'templateList', templateList, false, false));
                        } catch (J$e) {
                            J$.Ex(931825, J$e);
                        } finally {
                            if (J$.Fr(931833))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            J$.P(929921, J$.R(929449, '_private', _private, false, true), 'getEntriesTemplateHierarchy', J$.T(929913, function getEntriesTemplateHierarchy(routerOptions, requestOptions) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(929873, arguments.callee, this, arguments);
                            arguments = J$.N(929881, 'arguments', arguments, true, false, false);
                            routerOptions = J$.N(929889, 'routerOptions', routerOptions, true, false, false);
                            requestOptions = J$.N(929897, 'requestOptions', requestOptions, true, false, false);
                            J$.N(929905, 'templateList', templateList, false, false, false);
                            const templateList = J$.W(929473, 'templateList', J$.T(929465, [J$.T(929457, 'index', 21, false)], 10, false), templateList, false, false);
                            if (J$.C(69656, J$.C(69632, J$.G(929489, J$.R(929481, 'routerOptions', routerOptions, false, false), 'name')) ? J$.B(89898, '!==', J$.G(929505, J$.R(929497, 'routerOptions', routerOptions, false, false), 'name'), J$.T(929513, 'index', 21, false)) : J$._())) {
                                J$.M(929545, J$.R(929521, 'templateList', templateList, false, false), 'unshift', false)(J$.G(929537, J$.R(929529, 'routerOptions', routerOptions, false, false), 'name'));
                                if (J$.C(69648, J$.C(69640, J$.G(929561, J$.R(929553, 'routerOptions', routerOptions, false, false), 'slugTemplate')) ? J$.G(929577, J$.R(929569, 'requestOptions', requestOptions, false, false), 'slugParam') : J$._())) {
                                    J$.M(929633, J$.R(929585, 'templateList', templateList, false, false), 'unshift', false)(J$.B(89914, '+', J$.B(89906, '+', J$.G(929601, J$.R(929593, 'routerOptions', routerOptions, false, false), 'name'), J$.T(929609, '-', 21, false)), J$.G(929625, J$.R(929617, 'requestOptions', requestOptions, false, false), 'slugParam')));
                                }
                            }
                            if (J$.C(69672, J$.C(69664, J$.G(929649, J$.R(929641, 'routerOptions', routerOptions, false, false), 'templates')) ? J$.G(929673, J$.G(929665, J$.R(929657, 'routerOptions', routerOptions, false, false), 'templates'), 'length') : J$._())) {
                                J$.M(929729, J$.G(929689, J$.R(929681, 'routerOptions', routerOptions, false, false), 'templates'), 'forEach', false)((J$.I(typeof template === 'undefined' ? template = J$.R(929697, 'template', undefined, true, true) : template = J$.R(929697, 'template', template, true, true))) => {
                                    J$.M(929721, J$.R(929705, 'templateList', templateList, false, false), 'unshift', false)(J$.I(typeof template === 'undefined' ? template = J$.R(929713, 'template', undefined, true, true) : template = J$.R(929713, 'template', template, true, true)));
                                });
                            }
                            if (J$.C(69704, J$.C(69696, J$.G(929745, J$.R(929737, 'routerOptions', routerOptions, false, false), 'frontPageTemplate')) ? J$.C(69688, J$.B(89922, '===', J$.G(929761, J$.R(929753, 'requestOptions', requestOptions, false, false), 'path'), J$.T(929769, '/', 21, false))) ? J$._() : J$.C(69680, J$.B(89930, '===', J$.G(929785, J$.R(929777, 'requestOptions', requestOptions, false, false), 'path'), J$.T(929793, '/', 21, false))) ? J$.B(89938, '===', J$.G(929809, J$.R(929801, 'requestOptions', requestOptions, false, false), 'page'), J$.T(929817, 1, 22, false)) : J$._() : J$._())) {
                                J$.M(929849, J$.R(929825, 'templateList', templateList, false, false), 'unshift', false)(J$.G(929841, J$.R(929833, 'routerOptions', routerOptions, false, false), 'frontPageTemplate'));
                            }
                            return J$.Rt(929865, J$.R(929857, 'templateList', templateList, false, false));
                        } catch (J$e) {
                            J$.Ex(931841, J$e);
                        } finally {
                            if (J$.Fr(931849))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            J$.P(930201, J$.R(929929, '_private', _private, false, true), 'getEntryTemplateHierarchy', J$.T(930193, function getEntryTemplateHierarchy(postObject) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(930153, arguments.callee, this, arguments);
                            arguments = J$.N(930161, 'arguments', arguments, true, false, false);
                            postObject = J$.N(930169, 'postObject', postObject, true, false, false);
                            J$.N(930177, 'templateList', templateList, false, false, false);
                            J$.N(930185, 'slugTemplate', slugTemplate, false, false, false);
                            const templateList = J$.W(929953, 'templateList', J$.T(929945, [J$.T(929937, 'post', 21, false)], 10, false), templateList, false, false);
                            let slugTemplate = J$.W(929985, 'slugTemplate', J$.B(89946, '+', J$.T(929961, 'post-', 21, false), J$.G(929977, J$.R(929969, 'postObject', postObject, false, false), 'slug')), slugTemplate, false, false);
                            if (J$.C(69712, J$.G(930001, J$.R(929993, 'postObject', postObject, false, false), 'page'))) {
                                J$.M(930025, J$.R(930009, 'templateList', templateList, false, false), 'unshift', false)(J$.T(930017, 'page', 21, false));
                                slugTemplate = J$.W(930057, 'slugTemplate', J$.B(89954, '+', J$.T(930033, 'page-', 21, false), J$.G(930049, J$.R(930041, 'postObject', postObject, false, false), 'slug')), slugTemplate, false, false);
                            }
                            if (J$.C(69720, J$.G(930073, J$.R(930065, 'postObject', postObject, false, false), 'custom_template'))) {
                                J$.M(930105, J$.R(930081, 'templateList', templateList, false, false), 'unshift', false)(J$.G(930097, J$.R(930089, 'postObject', postObject, false, false), 'custom_template'));
                            }
                            J$.M(930129, J$.R(930113, 'templateList', templateList, false, false), 'unshift', false)(J$.R(930121, 'slugTemplate', slugTemplate, false, false));
                            return J$.Rt(930145, J$.R(930137, 'templateList', templateList, false, false));
                        } catch (J$e) {
                            J$.Ex(931857, J$e);
                        } finally {
                            if (J$.Fr(931865))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            J$.P(930569, J$.R(930209, '_private', _private, false, true), 'pickTemplate', J$.T(930561, function pickTemplate(templateList, fallback) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(930521, arguments.callee, this, arguments);
                            arguments = J$.N(930529, 'arguments', arguments, true, false, false);
                            templateList = J$.N(930537, 'templateList', templateList, true, false, false);
                            fallback = J$.N(930545, 'fallback', fallback, true, false, false);
                            J$.N(930553, 'template', template, false, false, false);
                            let template;
                            if (J$.C(69728, J$.U(89962, '!', J$.M(930233, J$.R(930217, '_', _, false, true), 'isArray', false)(J$.R(930225, 'templateList', templateList, false, false))))) {
                                templateList = J$.W(930257, 'templateList', J$.T(930249, [J$.R(930241, 'templateList', templateList, false, false)], 10, false), templateList, false, false);
                            }
                            if (J$.C(69744, J$.U(89970, '!', J$.M(930273, J$.R(930265, 'themes', themes, false, true), 'getActive', false)()))) {
                                template = J$.W(930289, 'template', J$.R(930281, 'fallback', fallback, false, false), template, false, false);
                            } else {
                                template = J$.W(930409, 'template', J$.M(930401, J$.R(930297, '_', _, false, true), 'find', false)(J$.R(930305, 'templateList', templateList, false, false), J$.T(930393, function (template) {
                                    jalangiLabel3:
                                        while (true) {
                                            try {
                                                J$.Fe(930369, arguments.callee, this, arguments);
                                                arguments = J$.N(930377, 'arguments', arguments, true, false, false);
                                                template = J$.N(930385, 'template', template, true, false, false);
                                                if (J$.C(69736, J$.U(89978, '!', J$.R(930313, 'template', template, false, false)))) {
                                                    return J$.Rt(930321, undefined);
                                                }
                                                return J$.Rt(930361, J$.M(930353, J$.M(930337, J$.R(930329, 'themes', themes, false, true), 'getActive', false)(), 'hasTemplate', false)(J$.R(930345, 'template', template, false, false)));
                                            } catch (J$e) {
                                                J$.Ex(931873, J$e);
                                            } finally {
                                                if (J$.Fr(931881))
                                                    continue jalangiLabel3;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), template, false, false);
                            }
                            if (J$.C(69768, J$.U(89986, '!', J$.R(930417, 'template', template, false, false)))) {
                                if (J$.C(69760, J$.U(89994, '!', J$.R(930425, 'fallback', fallback, false, false)))) {
                                    template = J$.W(930441, 'template', J$.T(930433, 'index', 21, false), template, false, false);
                                } else if (J$.C(69752, J$.M(930465, J$.R(930449, '_', _, false, true), 'isFunction', false)(J$.R(930457, 'fallback', fallback, false, false)))) {
                                    J$.F(930481, J$.R(930473, 'fallback', fallback, false, false), false)();
                                } else {
                                    template = J$.W(930497, 'template', J$.R(930489, 'fallback', fallback, false, false), template, false, false);
                                }
                            }
                            return J$.Rt(930513, J$.R(930505, 'template', template, false, false));
                        } catch (J$e) {
                            J$.Ex(931889, J$e);
                        } finally {
                            if (J$.Fr(931897))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            J$.P(930753, J$.R(930577, '_private', _private, false, true), 'getTemplateForEntry', J$.T(930745, function getTemplateForEntry(postObject) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(930705, arguments.callee, this, arguments);
                            arguments = J$.N(930713, 'arguments', arguments, true, false, false);
                            postObject = J$.N(930721, 'postObject', postObject, true, false, false);
                            J$.N(930729, 'templateList', templateList, false, false, false);
                            J$.N(930737, 'fallback', fallback, false, false, false);
                            const templateList = J$.W(930609, 'templateList', J$.M(930601, J$.R(930585, '_private', _private, false, true), 'getEntryTemplateHierarchy', false)(J$.R(930593, 'postObject', postObject, false, false)), templateList, false, false);
                            const fallback = J$.W(930657, 'fallback', J$.G(930649, J$.R(930617, 'templateList', templateList, false, false), J$.B(90002, '-', J$.G(930633, J$.R(930625, 'templateList', templateList, false, false), 'length'), J$.T(930641, 1, 22, false))), fallback, false, false);
                            return J$.Rt(930697, J$.M(930689, J$.R(930665, '_private', _private, false, true), 'pickTemplate', false)(J$.R(930673, 'templateList', templateList, false, false), J$.R(930681, 'fallback', fallback, false, false)));
                        } catch (J$e) {
                            J$.Ex(931905, J$e);
                        } finally {
                            if (J$.Fr(931913))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            J$.P(930953, J$.R(930761, '_private', _private, false, true), 'getTemplateForEntries', J$.T(930945, function getTemplateForEntries(routerOptions, requestOptions) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(930897, arguments.callee, this, arguments);
                            arguments = J$.N(930905, 'arguments', arguments, true, false, false);
                            routerOptions = J$.N(930913, 'routerOptions', routerOptions, true, false, false);
                            requestOptions = J$.N(930921, 'requestOptions', requestOptions, true, false, false);
                            J$.N(930929, 'templateList', templateList, false, false, false);
                            J$.N(930937, 'fallback', fallback, false, false, false);
                            const templateList = J$.W(930801, 'templateList', J$.M(930793, J$.R(930769, '_private', _private, false, true), 'getEntriesTemplateHierarchy', false)(J$.R(930777, 'routerOptions', routerOptions, false, false), J$.R(930785, 'requestOptions', requestOptions, false, false)), templateList, false, false);
                            const fallback = J$.W(930849, 'fallback', J$.G(930841, J$.R(930809, 'templateList', templateList, false, false), J$.B(90010, '-', J$.G(930825, J$.R(930817, 'templateList', templateList, false, false), 'length'), J$.T(930833, 1, 22, false))), fallback, false, false);
                            return J$.Rt(930889, J$.M(930881, J$.R(930857, '_private', _private, false, true), 'pickTemplate', false)(J$.R(930865, 'templateList', templateList, false, false), J$.R(930873, 'fallback', fallback, false, false)));
                        } catch (J$e) {
                            J$.Ex(931921, J$e);
                        } finally {
                            if (J$.Fr(931929))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            J$.P(931153, J$.R(930961, '_private', _private, false, true), 'getTemplateForError', J$.T(931145, function getTemplateForError(statusCode) {
                jalangiLabel7:
                    while (true) {
                        try {
                            J$.Fe(931105, arguments.callee, this, arguments);
                            arguments = J$.N(931113, 'arguments', arguments, true, false, false);
                            statusCode = J$.N(931121, 'statusCode', statusCode, true, false, false);
                            J$.N(931129, 'templateList', templateList, false, false, false);
                            J$.N(931137, 'fallback', fallback, false, false, false);
                            const templateList = J$.W(930993, 'templateList', J$.M(930985, J$.R(930969, '_private', _private, false, true), 'getErrorTemplateHierarchy', false)(J$.R(930977, 'statusCode', statusCode, false, false)), templateList, false, false);
                            const fallback = J$.W(931057, 'fallback', J$.M(931049, J$.R(931001, 'path', path, false, true), 'resolve', false)(J$.G(931033, J$.M(931025, J$.R(931009, 'config', config, false, true), 'get', false)(J$.T(931017, 'paths', 21, false)), 'defaultViews'), J$.T(931041, 'error.hbs', 21, false)), fallback, false, false);
                            return J$.Rt(931097, J$.M(931089, J$.R(931065, '_private', _private, false, true), 'pickTemplate', false)(J$.R(931073, 'templateList', templateList, false, false), J$.R(931081, 'fallback', fallback, false, false)));
                        } catch (J$e) {
                            J$.Ex(931937, J$e);
                        } finally {
                            if (J$.Fr(931945))
                                continue jalangiLabel7;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            J$.P(931761, J$.G(931169, J$.I(typeof module === 'undefined' ? module = J$.R(931161, 'module', undefined, true, true) : module = J$.R(931161, 'module', module, true, true)), 'exports'), 'setTemplate', J$.T(931753, function setTemplate(req, res, data) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(931713, arguments.callee, this, arguments);
                            arguments = J$.N(931721, 'arguments', arguments, true, false, false);
                            req = J$.N(931729, 'req', req, true, false, false);
                            res = J$.N(931737, 'res', res, true, false, false);
                            data = J$.N(931745, 'data', data, true, false, false);
                            if (J$.C(69784, J$.C(69776, J$.G(931185, J$.R(931177, 'res', res, false, false), '_template')) ? J$.U(90018, '!', J$.G(931201, J$.R(931193, 'req', req, false, false), 'err')) : J$._())) {
                                return J$.Rt(931209, undefined);
                            }
                            if (J$.C(69792, J$.G(931225, J$.R(931217, 'req', req, false, false), 'err'))) {
                                J$.P(931273, J$.R(931233, 'res', res, false, false), '_template', J$.M(931265, J$.R(931241, '_private', _private, false, true), 'getTemplateForError', false)(J$.G(931257, J$.R(931249, 'res', res, false, false), 'statusCode')));
                                return J$.Rt(931281, undefined);
                            }
                            if (J$.C(69816, J$.B(90034, '!==', J$.M(931337, J$.T(931305, [
                                    J$.T(931289, 'channel', 21, false),
                                    J$.T(931297, 'collection', 21, false)
                                ], 10, false), 'indexOf', false)(J$.G(931329, J$.G(931321, J$.R(931313, 'res', res, false, false), 'routerOptions'), 'type')), J$.U(90026, '-', J$.T(931345, 1, 22, false))))) {
                                J$.P(931489, J$.R(931353, 'res', res, false, false), '_template', J$.M(931481, J$.R(931361, '_private', _private, false, true), 'getTemplateForEntries', false)(J$.G(931377, J$.R(931369, 'res', res, false, false), 'routerOptions'), J$.T(931473, {
                                    path: J$.G(931417, J$.M(931409, J$.R(931385, 'url', url, false, true), 'parse', false)(J$.G(931401, J$.R(931393, 'req', req, false, false), 'url')), 'pathname'),
                                    page: J$.G(931441, J$.G(931433, J$.R(931425, 'req', req, false, false), 'params'), 'page'),
                                    slugParam: J$.G(931465, J$.G(931457, J$.R(931449, 'req', req, false, false), 'params'), 'slug')
                                }, 11, false)));
                            } else if (J$.C(69808, J$.B(90042, '===', J$.G(931513, J$.G(931505, J$.R(931497, 'res', res, false, false), 'routerOptions'), 'type'), J$.T(931521, 'custom', 21, false)))) {
                                J$.P(931601, J$.R(931529, 'res', res, false, false), '_template', J$.M(931593, J$.R(931537, '_private', _private, false, true), 'pickTemplate', false)(J$.G(931561, J$.G(931553, J$.R(931545, 'res', res, false, false), 'routerOptions'), 'templates'), J$.G(931585, J$.G(931577, J$.R(931569, 'res', res, false, false), 'routerOptions'), 'defaultTemplate')));
                            } else if (J$.C(69800, J$.B(90050, '===', J$.G(931625, J$.G(931617, J$.R(931609, 'res', res, false, false), 'routerOptions'), 'type'), J$.T(931633, 'entry', 21, false)))) {
                                J$.P(931681, J$.R(931641, 'res', res, false, false), '_template', J$.M(931673, J$.R(931649, '_private', _private, false, true), 'getTemplateForEntry', false)(J$.G(931665, J$.R(931657, 'data', data, false, false), 'post')));
                            } else {
                                J$.P(931705, J$.R(931689, 'res', res, false, false), '_template', J$.T(931697, 'index', 21, false));
                            }
                        } catch (J$e) {
                            J$.Ex(931953, J$e);
                        } finally {
                            if (J$.Fr(931961))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(931969, J$e);
        } finally {
            if (J$.Sr(931977))
                continue jalangiLabel9;
            else
                break jalangiLabel9;
        }
    }
// JALANGI DO NOT INSTRUMENT

