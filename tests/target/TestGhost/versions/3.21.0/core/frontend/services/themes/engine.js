J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(937785, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/themes/engine.js');
            J$.N(937793, 'hbs', hbs, false, false, false);
            J$.N(937801, 'config', config, false, false, false);
            J$.N(937809, 'instance', instance, false, false, false);
            const hbs = J$.W(937297, 'hbs', J$.F(937289, J$.I(typeof require === 'undefined' ? require = J$.R(937273, 'require', undefined, true, true) : require = J$.R(937273, 'require', require, true, true)), false)(J$.T(937281, 'express-hbs', 21, false)), hbs, false, true);
            const config = J$.W(937329, 'config', J$.F(937321, J$.I(typeof require === 'undefined' ? require = J$.R(937305, 'require', undefined, true, true) : require = J$.R(937305, 'require', require, true, true)), false)(J$.T(937313, '../../../shared/config', 21, false)), config, false, true);
            const instance = J$.W(937353, 'instance', J$.M(937345, J$.R(937337, 'hbs', hbs, false, true), 'create', false)(), instance, false, true);
            if (J$.C(69912, J$.B(90170, '!==', J$.M(937377, J$.R(937361, 'config', config, false, true), 'get', false)(J$.T(937369, 'env', 21, false)), J$.T(937385, 'production', 21, false)))) {
                J$.P(937425, J$.G(937409, J$.G(937401, J$.R(937393, 'instance', instance, false, true), 'handlebars'), 'logger'), 'level', J$.T(937417, 0, 22, false));
            }
            J$.P(937473, J$.R(937433, 'instance', instance, false, true), 'escapeExpression', J$.G(937465, J$.G(937457, J$.G(937449, J$.R(937441, 'instance', instance, false, true), 'handlebars'), 'Utils'), 'escapeExpression'));
            J$.P(937753, J$.R(937481, 'instance', instance, false, true), 'configure', J$.T(937745, function configure(partialsPath) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(937713, arguments.callee, this, arguments);
                            arguments = J$.N(937721, 'arguments', arguments, true, false, false);
                            partialsPath = J$.N(937729, 'partialsPath', partialsPath, true, false, false);
                            J$.N(937737, 'hbsOptions', hbsOptions, false, false, false);
                            const hbsOptions = J$.W(937633, 'hbsOptions', J$.T(937625, {
                                partialsDir: J$.T(937521, [J$.G(937513, J$.M(937505, J$.R(937489, 'config', config, false, true), 'get', false)(J$.T(937497, 'paths', 21, false)), 'helperTemplates')], 10, false),
                                onCompile: J$.T(937617, function onCompile(exhbs, source) {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(937585, arguments.callee, this, arguments);
                                                arguments = J$.N(937593, 'arguments', arguments, true, false, false);
                                                exhbs = J$.N(937601, 'exhbs', exhbs, true, false, false);
                                                source = J$.N(937609, 'source', source, true, false, false);
                                                return J$.Rt(937577, J$.M(937569, J$.G(937537, J$.R(937529, 'exhbs', exhbs, false, false), 'handlebars'), 'compile', false)(J$.R(937545, 'source', source, false, false), J$.T(937561, { preventIndent: J$.T(937553, true, 23, false) }, 11, false)));
                                            } catch (J$e) {
                                                J$.Ex(937817, J$e);
                                            } finally {
                                                if (J$.Fr(937825))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)
                            }, 11, false), hbsOptions, false, false);
                            if (J$.C(69920, J$.R(937641, 'partialsPath', partialsPath, false, false))) {
                                J$.M(937673, J$.G(937657, J$.R(937649, 'hbsOptions', hbsOptions, false, false), 'partialsDir'), 'push', false)(J$.R(937665, 'partialsPath', partialsPath, false, false));
                            }
                            return J$.Rt(937705, J$.M(937697, J$.R(937681, 'instance', instance, false, true), 'express4', false)(J$.R(937689, 'hbsOptions', hbsOptions, false, false)));
                        } catch (J$e) {
                            J$.Ex(937833, J$e);
                        } finally {
                            if (J$.Fr(937841))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            J$.P(937777, J$.I(typeof module === 'undefined' ? module = J$.R(937761, 'module', undefined, true, true) : module = J$.R(937761, 'module', module, true, true)), 'exports', J$.R(937769, 'instance', instance, false, true));
        } catch (J$e) {
            J$.Ex(937849, J$e);
        } finally {
            if (J$.Sr(937857))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

