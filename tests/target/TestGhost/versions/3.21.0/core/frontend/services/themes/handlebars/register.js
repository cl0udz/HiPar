J$.noInstrEval = false;
jalangiLabel6:
    while (true) {
        try {
            J$.Se(941577, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/themes/handlebars/register.js');
            function asyncHelperWrapper(hbs, name, fn) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(941337, arguments.callee, this, arguments);
                            arguments = J$.N(941345, 'arguments', arguments, true, false, false);
                            hbs = J$.N(941353, 'hbs', hbs, true, false, false);
                            name = J$.N(941361, 'name', name, true, false, false);
                            fn = J$.N(941369, 'fn', fn, true, false, false);
                            J$.M(941329, J$.R(940825, 'hbs', hbs, false, false), 'registerAsyncHelper', false)(J$.R(940833, 'name', name, false, false), J$.T(941321, function returnAsync(context, options, cb) {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(941281, arguments.callee, this, arguments);
                                            arguments = J$.N(941289, 'arguments', arguments, true, false, false);
                                            context = J$.N(941297, 'context', context, true, false, false);
                                            options = J$.N(941305, 'options', options, true, false, false);
                                            cb = J$.N(941313, 'cb', cb, true, false, false);
                                            if (J$.C(69976, J$.U(90194, '!', J$.R(940841, 'cb', cb, false, false)))) {
                                                cb = J$.W(940857, 'cb', J$.R(940849, 'options', options, false, false), cb, false, false);
                                                options = J$.W(940873, 'options', J$.T(940865, undefined, 24, false), options, false, false);
                                            }
                                            J$.M(941273, J$.M(940993, J$.M(940929, J$.R(940881, 'Promise', Promise, false, true), 'resolve', false)(J$.M(940921, J$.R(940889, 'fn', fn, false, false), 'call', false)(J$.R(940897, 'this', this, false, false), J$.R(940905, 'context', context, false, false), J$.R(940913, 'options', options, false, false))), 'then', false)(J$.T(940985, function asyncHelperSuccess(result) {
                                                jalangiLabel0:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(940961, arguments.callee, this, arguments);
                                                            arguments = J$.N(940969, 'arguments', arguments, true, false, false);
                                                            result = J$.N(940977, 'result', result, true, false, false);
                                                            J$.F(940953, J$.R(940937, 'cb', cb, false, false), false)(J$.R(940945, 'result', result, false, false));
                                                        } catch (J$e) {
                                                            J$.Ex(941641, J$e);
                                                        } finally {
                                                            if (J$.Fr(941649))
                                                                continue jalangiLabel0;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false)), 'catch', false)(J$.T(941265, function asyncHelperError(err) {
                                                jalangiLabel1:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(941225, arguments.callee, this, arguments);
                                                            arguments = J$.N(941233, 'arguments', arguments, true, false, false);
                                                            err = J$.N(941241, 'err', err, true, false, false);
                                                            J$.N(941249, 'wrappedErr', wrappedErr, false, false, false);
                                                            J$.N(941257, 'result', result, false, false, false);
                                                            const wrappedErr = J$.W(941097, 'wrappedErr', J$.C(69984, J$.B(90202, 'instanceof', J$.R(941001, 'err', err, false, false), J$.G(941017, J$.R(941009, 'errors', errors, false, true), 'GhostError'))) ? J$.R(941025, 'err', err, false, false) : J$.M(941089, J$.R(941033, 'errors', errors, false, true), 'IncorrectUsageError', true)(J$.T(941081, {
                                                                err: J$.R(941041, 'err', err, false, false),
                                                                context: J$.B(90210, '+', J$.T(941049, 'registerAsyncThemeHelper: ', 21, false), J$.R(941057, 'name', name, false, false)),
                                                                errorDetails: J$.T(941073, { originalError: J$.R(941065, 'err', err, false, false) }, 11, false)
                                                            }, 11, false)), wrappedErr, false, false);
                                                            const result = J$.W(941153, 'result', J$.C(69992, J$.B(90218, '===', J$.M(941121, J$.R(941105, 'config', config, false, true), 'get', false)(J$.T(941113, 'env', 21, false)), J$.T(941129, 'development', 21, false))) ? J$.R(941137, 'wrappedErr', wrappedErr, false, false) : J$.T(941145, '', 21, false), result, false, false);
                                                            J$.M(941177, J$.R(941161, 'logging', logging, false, true), 'error', false)(J$.R(941169, 'wrappedErr', wrappedErr, false, false));
                                                            J$.F(941217, J$.R(941185, 'cb', cb, false, false), false)(J$.M(941209, J$.R(941193, 'hbs', hbs, false, false), 'SafeString', true)(J$.R(941201, 'result', result, false, false)));
                                                        } catch (J$e) {
                                                            J$.Ex(941657, J$e);
                                                        } finally {
                                                            if (J$.Fr(941665))
                                                                continue jalangiLabel1;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false));
                                        } catch (J$e) {
                                            J$.Ex(941673, J$e);
                                        } finally {
                                            if (J$.Fr(941681))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(941689, J$e);
                        } finally {
                            if (J$.Fr(941697))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(941585, 'Promise', Promise, false, false, false);
            J$.N(941593, 'errors', errors, false, false, false);
            J$.N(941601, 'hbs', hbs, false, false, false);
            J$.N(941609, 'config', config, false, false, false);
            J$.N(941617, 'logging', logging, false, false, false);
            asyncHelperWrapper = J$.N(941633, 'asyncHelperWrapper', J$.T(941625, asyncHelperWrapper, 12, false), true, false, false);
            const Promise = J$.W(940689, 'Promise', J$.F(940681, J$.I(typeof require === 'undefined' ? require = J$.R(940665, 'require', undefined, true, true) : require = J$.R(940665, 'require', require, true, true)), false)(J$.T(940673, 'bluebird', 21, false)), Promise, false, true);
            const errors = J$.W(940721, 'errors', J$.F(940713, J$.I(typeof require === 'undefined' ? require = J$.R(940697, 'require', undefined, true, true) : require = J$.R(940697, 'require', require, true, true)), false)(J$.T(940705, '@tryghost/errors', 21, false)), errors, false, true);
            const hbs = J$.W(940753, 'hbs', J$.F(940745, J$.I(typeof require === 'undefined' ? require = J$.R(940729, 'require', undefined, true, true) : require = J$.R(940729, 'require', require, true, true)), false)(J$.T(940737, '../engine', 21, false)), hbs, false, true);
            const config = J$.W(940785, 'config', J$.F(940777, J$.I(typeof require === 'undefined' ? require = J$.R(940761, 'require', undefined, true, true) : require = J$.R(940761, 'require', require, true, true)), false)(J$.T(940769, '../../../../shared/config', 21, false)), config, false, true);
            const logging = J$.W(940817, 'logging', J$.F(940809, J$.I(typeof require === 'undefined' ? require = J$.R(940793, 'require', undefined, true, true) : require = J$.R(940793, 'require', require, true, true)), false)(J$.T(940801, '../../../../shared/logging', 21, false)), logging, false, true);
            J$.P(941465, J$.G(941385, J$.I(typeof module === 'undefined' ? module = J$.R(941377, 'module', undefined, true, true) : module = J$.R(941377, 'module', module, true, true)), 'exports'), 'registerThemeHelper', J$.T(941457, function registerThemeHelper(name, fn) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(941425, arguments.callee, this, arguments);
                            arguments = J$.N(941433, 'arguments', arguments, true, false, false);
                            name = J$.N(941441, 'name', name, true, false, false);
                            fn = J$.N(941449, 'fn', fn, true, false, false);
                            J$.M(941417, J$.R(941393, 'hbs', hbs, false, true), 'registerHelper', false)(J$.R(941401, 'name', name, false, false), J$.R(941409, 'fn', fn, false, false));
                        } catch (J$e) {
                            J$.Ex(941705, J$e);
                        } finally {
                            if (J$.Fr(941713))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            J$.P(941569, J$.G(941481, J$.I(typeof module === 'undefined' ? module = J$.R(941473, 'module', undefined, true, true) : module = J$.R(941473, 'module', module, true, true)), 'exports'), 'registerAsyncThemeHelper', J$.T(941561, function registerAsyncThemeHelper(name, fn) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(941529, arguments.callee, this, arguments);
                            arguments = J$.N(941537, 'arguments', arguments, true, false, false);
                            name = J$.N(941545, 'name', name, true, false, false);
                            fn = J$.N(941553, 'fn', fn, true, false, false);
                            J$.F(941521, J$.R(941489, 'asyncHelperWrapper', asyncHelperWrapper, false, true), false)(J$.R(941497, 'hbs', hbs, false, true), J$.R(941505, 'name', name, false, false), J$.R(941513, 'fn', fn, false, false));
                        } catch (J$e) {
                            J$.Ex(941721, J$e);
                        } finally {
                            if (J$.Fr(941729))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(941737, J$e);
        } finally {
            if (J$.Sr(941745))
                continue jalangiLabel6;
            else
                break jalangiLabel6;
        }
    }
// JALANGI DO NOT INSTRUMENT

