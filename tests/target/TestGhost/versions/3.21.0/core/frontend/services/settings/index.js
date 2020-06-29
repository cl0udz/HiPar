J$.noInstrEval = false;
jalangiLabel5:
    while (true) {
        try {
            J$.Se(935617, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/settings/index.js');
            J$.N(935625, '_', _, false, false, false);
            J$.N(935633, 'debug', debug, false, false, false);
            J$.N(935641, 'SettingsLoader', SettingsLoader, false, false, false);
            J$.N(935649, 'ensureSettingsFiles', ensureSettingsFiles, false, false, false);
            J$.N(935657, 'errors', errors, false, false, false);
            const _ = J$.W(934889, '_', J$.F(934881, J$.I(typeof require === 'undefined' ? require = J$.R(934865, 'require', undefined, true, true) : require = J$.R(934865, 'require', require, true, true)), false)(J$.T(934873, 'lodash', 21, false)), _, false, true);
            const debug = J$.W(934937, 'debug', J$.M(934929, J$.F(934913, J$.I(typeof require === 'undefined' ? require = J$.R(934897, 'require', undefined, true, true) : require = J$.R(934897, 'require', require, true, true)), false)(J$.T(934905, 'ghost-ignition', 21, false)), 'debug', false)(J$.T(934921, 'frontend:services:settings:index', 21, false)), debug, false, true);
            const SettingsLoader = J$.W(934969, 'SettingsLoader', J$.F(934961, J$.I(typeof require === 'undefined' ? require = J$.R(934945, 'require', undefined, true, true) : require = J$.R(934945, 'require', require, true, true)), false)(J$.T(934953, './loader', 21, false)), SettingsLoader, false, true);
            const ensureSettingsFiles = J$.W(935001, 'ensureSettingsFiles', J$.F(934993, J$.I(typeof require === 'undefined' ? require = J$.R(934977, 'require', undefined, true, true) : require = J$.R(934977, 'require', require, true, true)), false)(J$.T(934985, './ensure-settings', 21, false)), ensureSettingsFiles, false, true);
            const errors = J$.W(935033, 'errors', J$.F(935025, J$.I(typeof require === 'undefined' ? require = J$.R(935009, 'require', undefined, true, true) : require = J$.R(935009, 'require', require, true, true)), false)(J$.T(935017, '@tryghost/errors', 21, false)), errors, false, true);
            J$.P(935609, J$.I(typeof module === 'undefined' ? module = J$.R(935041, 'module', undefined, true, true) : module = J$.R(935041, 'module', module, true, true)), 'exports', J$.T(935601, {
                init: J$.T(935161, function () {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(935137, arguments.callee, this, arguments);
                                arguments = J$.N(935145, 'arguments', arguments, true, false, false);
                                J$.N(935153, 'knownSettings', knownSettings, false, false, false);
                                const knownSettings = J$.W(935065, 'knownSettings', J$.M(935057, J$.R(935049, 'this', this, false, false), 'knownSettings', false)(), knownSettings, false, false);
                                J$.F(935097, J$.R(935073, 'debug', debug, false, true), false)(J$.T(935081, 'init settings service for:', 21, false), J$.R(935089, 'knownSettings', knownSettings, false, false));
                                return J$.Rt(935129, J$.F(935121, J$.R(935105, 'ensureSettingsFiles', ensureSettingsFiles, false, true), false)(J$.R(935113, 'knownSettings', knownSettings, false, false)));
                            } catch (J$e) {
                                J$.Ex(935665, J$e);
                            } finally {
                                if (J$.Fr(935673))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false),
                knownSettings: J$.T(935209, function knownSettings() {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(935193, arguments.callee, this, arguments);
                                arguments = J$.N(935201, 'arguments', arguments, true, false, false);
                                return J$.Rt(935185, J$.T(935177, [J$.T(935169, 'routes', 21, false)], 10, false));
                            } catch (J$e) {
                                J$.Ex(935681, J$e);
                            } finally {
                                if (J$.Fr(935689))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false),
                get: J$.T(935393, function get(setting) {
                    jalangiLabel2:
                        while (true) {
                            try {
                                J$.Fe(935361, arguments.callee, this, arguments);
                                arguments = J$.N(935369, 'arguments', arguments, true, false, false);
                                setting = J$.N(935377, 'setting', setting, true, false, false);
                                J$.N(935385, 'knownSettings', knownSettings, false, false, false);
                                const knownSettings = J$.W(935233, 'knownSettings', J$.M(935225, J$.R(935217, 'this', this, false, false), 'knownSettings', false)(), knownSettings, false, false);
                                if (J$.C(69880, J$.C(69872, J$.U(90106, '!', J$.R(935241, 'setting', setting, false, false))) ? J$._() : J$.B(90114, '<', J$.M(935273, J$.R(935249, '_', _, false, true), 'indexOf', false)(J$.R(935257, 'knownSettings', knownSettings, false, false), J$.R(935265, 'setting', setting, false, false)), J$.T(935281, 0, 22, false)))) {
                                    throw J$.M(935321, J$.R(935289, 'errors', errors, false, true), 'IncorrectUsageError', true)(J$.T(935313, {
                                        message: `Requested setting is not supported: '${ J$.R(935297, 'setting', setting, false, false) }'.`,
                                        help: `Please use only the supported settings: ${ J$.R(935305, 'knownSettings', knownSettings, false, false) }.`
                                    }, 11, false));
                                }
                                return J$.Rt(935353, J$.F(935345, J$.R(935329, 'SettingsLoader', SettingsLoader, false, true), false)(J$.R(935337, 'setting', setting, false, false)));
                            } catch (J$e) {
                                J$.Ex(935697, J$e);
                            } finally {
                                if (J$.Fr(935705))
                                    continue jalangiLabel2;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false),
                getAll: J$.T(935593, function getAll() {
                    jalangiLabel4:
                        while (true) {
                            try {
                                J$.Fe(935561, arguments.callee, this, arguments);
                                arguments = J$.N(935569, 'arguments', arguments, true, false, false);
                                J$.N(935577, 'knownSettings', knownSettings, false, false, false);
                                J$.N(935585, 'settingsToReturn', settingsToReturn, false, false, false);
                                const knownSettings = J$.W(935417, 'knownSettings', J$.M(935409, J$.R(935401, 'this', this, false, false), 'knownSettings', false)(), knownSettings, false, false);
                                const settingsToReturn = J$.W(935433, 'settingsToReturn', J$.T(935425, {}, 11, false), settingsToReturn, false, false);
                                J$.M(935537, J$.R(935441, '_', _, false, true), 'each', false)(J$.R(935449, 'knownSettings', knownSettings, false, false), J$.T(935529, function (setting) {
                                    jalangiLabel3:
                                        while (true) {
                                            try {
                                                J$.Fe(935505, arguments.callee, this, arguments);
                                                arguments = J$.N(935513, 'arguments', arguments, true, false, false);
                                                setting = J$.N(935521, 'setting', setting, true, false, false);
                                                J$.P(935497, J$.R(935457, 'settingsToReturn', settingsToReturn, false, false), J$.R(935465, 'setting', setting, false, false), J$.F(935489, J$.R(935473, 'SettingsLoader', SettingsLoader, false, true), false)(J$.R(935481, 'setting', setting, false, false)));
                                            } catch (J$e) {
                                                J$.Ex(935713, J$e);
                                            } finally {
                                                if (J$.Fr(935721))
                                                    continue jalangiLabel3;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                return J$.Rt(935553, J$.R(935545, 'settingsToReturn', settingsToReturn, false, false));
                            } catch (J$e) {
                                J$.Ex(935729, J$e);
                            } finally {
                                if (J$.Fr(935737))
                                    continue jalangiLabel4;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false)
            }, 11, false));
        } catch (J$e) {
            J$.Ex(935745, J$e);
        } finally {
            if (J$.Sr(935753))
                continue jalangiLabel5;
            else
                break jalangiLabel5;
        }
    }
// JALANGI DO NOT INSTRUMENT

