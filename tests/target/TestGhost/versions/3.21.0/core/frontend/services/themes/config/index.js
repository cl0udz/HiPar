J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(937209, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/themes/config/index.js');
            J$.N(937217, '_', _, false, false, false);
            J$.N(937225, 'defaultConfig', defaultConfig, false, false, false);
            J$.N(937233, 'allowedKeys', allowedKeys, false, false, false);
            const _ = J$.W(936897, '_', J$.F(936889, J$.I(typeof require === 'undefined' ? require = J$.R(936873, 'require', undefined, true, true) : require = J$.R(936873, 'require', require, true, true)), false)(J$.T(936881, 'lodash', 21, false)), _, false, true);
            const defaultConfig = J$.W(936929, 'defaultConfig', J$.F(936921, J$.I(typeof require === 'undefined' ? require = J$.R(936905, 'require', undefined, true, true) : require = J$.R(936905, 'require', require, true, true)), false)(J$.T(936913, './defaults', 21, false)), defaultConfig, false, true);
            const allowedKeys = J$.W(936961, 'allowedKeys', J$.T(936953, [
                J$.T(936937, 'posts_per_page', 21, false),
                J$.T(936945, 'image_sizes', 21, false)
            ], 10, false), allowedKeys, false, true);
            J$.P(937201, J$.G(936977, J$.I(typeof module === 'undefined' ? module = J$.R(936969, 'module', undefined, true, true) : module = J$.R(936969, 'module', module, true, true)), 'exports'), 'create', J$.T(937193, function configLoader(packageJson) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(937161, arguments.callee, this, arguments);
                            arguments = J$.N(937169, 'arguments', arguments, true, false, false);
                            packageJson = J$.N(937177, 'packageJson', packageJson, true, false, false);
                            J$.N(937185, 'config', config, false, false, false);
                            let config = J$.W(937009, 'config', J$.M(937001, J$.R(936985, '_', _, false, true), 'cloneDeep', false)(J$.R(936993, 'defaultConfig', defaultConfig, false, true)), config, false, false);
                            if (J$.C(69904, J$.C(69896, J$.R(937017, 'packageJson', packageJson, false, false)) ? J$.M(937065, J$.G(937041, J$.G(937033, J$.I(typeof Object === 'undefined' ? Object = J$.R(937025, 'Object', undefined, true, true) : Object = J$.R(937025, 'Object', Object, true, true)), 'prototype'), 'hasOwnProperty'), 'call', false)(J$.R(937049, 'packageJson', packageJson, false, false), J$.T(937057, 'config', 21, false)) : J$._())) {
                                config = J$.W(937137, 'config', J$.M(937129, J$.R(937073, '_', _, false, true), 'assign', false)(J$.R(937081, 'config', config, false, false), J$.M(937121, J$.R(937089, '_', _, false, true), 'pick', false)(J$.G(937105, J$.R(937097, 'packageJson', packageJson, false, false), 'config'), J$.R(937113, 'allowedKeys', allowedKeys, false, true))), config, false, false);
                            }
                            return J$.Rt(937153, J$.R(937145, 'config', config, false, false));
                        } catch (J$e) {
                            J$.Ex(937241, J$e);
                        } finally {
                            if (J$.Fr(937249))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(937257, J$e);
        } finally {
            if (J$.Sr(937265))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

