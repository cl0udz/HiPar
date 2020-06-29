J$.noInstrEval = false;
jalangiLabel6:
    while (true) {
        try {
            J$.Se(944041, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/themes/list.js');
            J$.N(944049, '_', _, false, false, false);
            J$.N(944057, 'themeListCache', themeListCache, false, false, false);
            const _ = J$.W(943537, '_', J$.F(943529, J$.I(typeof require === 'undefined' ? require = J$.R(943513, 'require', undefined, true, true) : require = J$.R(943513, 'require', require, true, true)), false)(J$.T(943521, 'lodash', 21, false)), _, false, true);
            let themeListCache = J$.W(943553, 'themeListCache', J$.T(943545, {}, 11, false), themeListCache, false, true);
            J$.P(944033, J$.I(typeof module === 'undefined' ? module = J$.R(943561, 'module', undefined, true, true) : module = J$.R(943561, 'module', module, true, true)), 'exports', J$.T(944025, {
                get: J$.T(943625, function get(key) {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(943601, arguments.callee, this, arguments);
                                arguments = J$.N(943609, 'arguments', arguments, true, false, false);
                                key = J$.N(943617, 'key', key, true, false, false);
                                return J$.Rt(943593, J$.G(943585, J$.R(943569, 'themeListCache', themeListCache, false, true), J$.R(943577, 'key', key, false, false)));
                            } catch (J$e) {
                                J$.Ex(944065, J$e);
                            } finally {
                                if (J$.Fr(944073))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false),
                getAll: J$.T(943665, function getAll() {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(943649, arguments.callee, this, arguments);
                                arguments = J$.N(943657, 'arguments', arguments, true, false, false);
                                return J$.Rt(943641, J$.R(943633, 'themeListCache', themeListCache, false, true));
                            } catch (J$e) {
                                J$.Ex(944081, J$e);
                            } finally {
                                if (J$.Fr(944089))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false),
                set: J$.T(943785, function set(key, theme) {
                    jalangiLabel2:
                        while (true) {
                            try {
                                J$.Fe(943753, arguments.callee, this, arguments);
                                arguments = J$.N(943761, 'arguments', arguments, true, false, false);
                                key = J$.N(943769, 'key', key, true, false, false);
                                theme = J$.N(943777, 'theme', theme, true, false, false);
                                J$.P(943713, J$.R(943673, 'themeListCache', themeListCache, false, true), J$.R(943681, 'key', key, false, false), J$.M(943705, J$.R(943689, '_', _, false, true), 'cloneDeep', false)(J$.R(943697, 'theme', theme, false, false)));
                                return J$.Rt(943745, J$.G(943737, J$.R(943721, 'themeListCache', themeListCache, false, true), J$.R(943729, 'key', key, false, false)));
                            } catch (J$e) {
                                J$.Ex(944097, J$e);
                            } finally {
                                if (J$.Fr(944105))
                                    continue jalangiLabel2;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false),
                del: J$.T(943833, function del(key) {
                    jalangiLabel3:
                        while (true) {
                            try {
                                J$.Fe(943809, arguments.callee, this, arguments);
                                arguments = J$.N(943817, 'arguments', arguments, true, false, false);
                                key = J$.N(943825, 'key', key, true, false, false);
                                J$.B(90290, 'delete', J$.R(943793, 'themeListCache', themeListCache, false, true), J$.R(943801, 'key', key, false, false));
                            } catch (J$e) {
                                J$.Ex(944113, J$e);
                            } finally {
                                if (J$.Fr(944121))
                                    continue jalangiLabel3;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false),
                init: J$.T(944017, function init(themes) {
                    jalangiLabel5:
                        while (true) {
                            try {
                                J$.Fe(943985, arguments.callee, this, arguments);
                                arguments = J$.N(943993, 'arguments', arguments, true, false, false);
                                themes = J$.N(944001, 'themes', themes, true, false, false);
                                J$.N(944009, 'self', self, false, false, false);
                                const self = J$.W(943849, 'self', J$.R(943841, 'this', this, false, false), self, false, false);
                                themeListCache = J$.W(943865, 'themeListCache', J$.T(943857, {}, 11, false), themeListCache, false, true);
                                J$.M(943961, J$.R(943873, '_', _, false, true), 'each', false)(J$.R(943881, 'themes', themes, false, false), J$.T(943953, function (theme, key) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(943921, arguments.callee, this, arguments);
                                                arguments = J$.N(943929, 'arguments', arguments, true, false, false);
                                                theme = J$.N(943937, 'theme', theme, true, false, false);
                                                key = J$.N(943945, 'key', key, true, false, false);
                                                J$.M(943913, J$.R(943889, 'self', self, false, false), 'set', false)(J$.R(943897, 'key', key, false, false), J$.R(943905, 'theme', theme, false, false));
                                            } catch (J$e) {
                                                J$.Ex(944129, J$e);
                                            } finally {
                                                if (J$.Fr(944137))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                return J$.Rt(943977, J$.R(943969, 'themeListCache', themeListCache, false, true));
                            } catch (J$e) {
                                J$.Ex(944145, J$e);
                            } finally {
                                if (J$.Fr(944153))
                                    continue jalangiLabel5;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false)
            }, 11, false));
        } catch (J$e) {
            J$.Ex(944161, J$e);
        } finally {
            if (J$.Sr(944169))
                continue jalangiLabel6;
            else
                break jalangiLabel6;
        }
    }
// JALANGI DO NOT INSTRUMENT

