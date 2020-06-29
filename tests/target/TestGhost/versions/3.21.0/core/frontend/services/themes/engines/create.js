J$.noInstrEval = false;
jalangiLabel0:
    while (true) {
        try {
            J$.Se(938657, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/themes/engines/create.js');
            J$.N(938665, '_', _, false, false, false);
            J$.N(938673, 'semver', semver, false, false, false);
            J$.N(938681, 'config', config, false, false, false);
            J$.N(938689, 'DEFAULTS', DEFAULTS, false, false, false);
            J$.N(938697, 'allowedKeys', allowedKeys, false, false, false);
            J$.N(938705, 'themeEngines', themeEngines, false, false, false);
            J$.N(938713, 'availableApiVersions', availableApiVersions, false, false, false);
            J$.N(938721, 'apiVersion', apiVersion, false, false, false);
            J$.N(938729, 'apiVersionMajor', apiVersionMajor, false, false, false);
            const _ = J$.W(937889, '_', J$.F(937881, J$.I(typeof require === 'undefined' ? require = J$.R(937865, 'require', undefined, true, true) : require = J$.R(937865, 'require', require, true, true)), false)(J$.T(937873, 'lodash', 21, false)), _, false, true);
            const semver = J$.W(937921, 'semver', J$.F(937913, J$.I(typeof require === 'undefined' ? require = J$.R(937897, 'require', undefined, true, true) : require = J$.R(937897, 'require', require, true, true)), false)(J$.T(937905, 'semver', 21, false)), semver, false, true);
            const config = J$.W(937953, 'config', J$.F(937945, J$.I(typeof require === 'undefined' ? require = J$.R(937929, 'require', undefined, true, true) : require = J$.R(937929, 'require', require, true, true)), false)(J$.T(937937, '../../../../shared/config', 21, false)), config, false, true);
            const DEFAULTS = J$.W(937985, 'DEFAULTS', J$.F(937977, J$.I(typeof require === 'undefined' ? require = J$.R(937961, 'require', undefined, true, true) : require = J$.R(937961, 'require', require, true, true)), false)(J$.T(937969, './defaults', 21, false)), DEFAULTS, false, true);
            const allowedKeys = J$.W(938009, 'allowedKeys', J$.T(938001, [J$.T(937993, 'ghost-api', 21, false)], 10, false), allowedKeys, false, true);
            J$.P(938649, J$.I(typeof module === 'undefined' ? module = J$.R(938017, 'module', undefined, true, true) : module = J$.R(938017, 'module', module, true, true)), 'exports', (J$.I(typeof packageJson === 'undefined' ? packageJson = J$.R(938025, 'packageJson', undefined, true, true) : packageJson = J$.R(938025, 'packageJson', packageJson, true, true))) => {
                let themeEngines = J$.W(938057, 'themeEngines', J$.M(938049, J$.R(938033, '_', _, false, true), 'cloneDeep', false)(J$.R(938041, 'DEFAULTS', DEFAULTS, false, true)), themeEngines, false, true);
                if (J$.C(69968, J$.C(69928, J$.I(typeof packageJson === 'undefined' ? packageJson = J$.R(938065, 'packageJson', undefined, true, true) : packageJson = J$.R(938065, 'packageJson', packageJson, true, true))) ? J$.M(938113, J$.G(938089, J$.G(938081, J$.I(typeof Object === 'undefined' ? Object = J$.R(938073, 'Object', undefined, true, true) : Object = J$.R(938073, 'Object', Object, true, true)), 'prototype'), 'hasOwnProperty'), 'call', false)(J$.I(typeof packageJson === 'undefined' ? packageJson = J$.R(938097, 'packageJson', undefined, true, true) : packageJson = J$.R(938097, 'packageJson', packageJson, true, true)), J$.T(938105, 'engines', 21, false)) : J$._())) {
                    if (J$.C(69960, J$.G(938145, J$.G(938129, J$.I(typeof packageJson === 'undefined' ? packageJson = J$.R(938121, 'packageJson', undefined, true, true) : packageJson = J$.R(938121, 'packageJson', packageJson, true, true)), 'engines'), J$.T(938137, 'ghost-api', 21, false)))) {
                        const availableApiVersions = J$.W(938161, 'availableApiVersions', J$.T(938153, {}, 11, false), availableApiVersions, false, true);
                        J$.M(938313, J$.M(938185, J$.R(938169, 'config', config, false, true), 'get', false)(J$.T(938177, 'api:versions:all', 21, false)), 'forEach', false)((J$.I(typeof version === 'undefined' ? version = J$.R(938193, 'version', undefined, true, true) : version = J$.R(938193, 'version', version, true, true))) => {
                            if (J$.C(69936, J$.B(90178, '===', J$.I(typeof version === 'undefined' ? version = J$.R(938201, 'version', undefined, true, true) : version = J$.R(938201, 'version', version, true, true)), J$.T(938209, 'canary', 21, false)))) {
                                J$.P(938233, J$.R(938217, 'availableApiVersions', availableApiVersions, false, true), 'canary', J$.I(typeof version === 'undefined' ? version = J$.R(938225, 'version', undefined, true, true) : version = J$.R(938225, 'version', version, true, true)));
                            } else {
                                J$.P(938305, J$.R(938241, 'availableApiVersions', availableApiVersions, false, true), J$.M(938289, J$.R(938249, 'semver', semver, false, true), 'major', false)(J$.G(938281, J$.M(938273, J$.R(938257, 'semver', semver, false, true), 'coerce', false)(J$.I(typeof version === 'undefined' ? version = J$.R(938265, 'version', undefined, true, true) : version = J$.R(938265, 'version', version, true, true))), 'version')), J$.I(typeof version === 'undefined' ? version = J$.R(938297, 'version', undefined, true, true) : version = J$.R(938297, 'version', version, true, true)));
                            }
                        });
                        const apiVersion = J$.W(938353, 'apiVersion', J$.G(938345, J$.G(938329, J$.I(typeof packageJson === 'undefined' ? packageJson = J$.R(938321, 'packageJson', undefined, true, true) : packageJson = J$.R(938321, 'packageJson', packageJson, true, true)), 'engines'), J$.T(938337, 'ghost-api', 21, false)), apiVersion, false, true);
                        const apiVersionMajor = J$.W(938433, 'apiVersionMajor', J$.C(69944, J$.B(90186, '===', J$.R(938361, 'apiVersion', apiVersion, false, true), J$.T(938369, 'canary', 21, false))) ? J$.T(938377, 'canary', 21, false) : J$.M(938425, J$.R(938385, 'semver', semver, false, true), 'major', false)(J$.G(938417, J$.M(938409, J$.R(938393, 'semver', semver, false, true), 'coerce', false)(J$.R(938401, 'apiVersion', apiVersion, false, true)), 'version')), apiVersionMajor, false, true);
                        if (J$.C(69952, J$.G(938457, J$.R(938441, 'availableApiVersions', availableApiVersions, false, true), J$.R(938449, 'apiVersionMajor', apiVersionMajor, false, true)))) {
                            J$.P(938513, J$.G(938473, J$.I(typeof packageJson === 'undefined' ? packageJson = J$.R(938465, 'packageJson', undefined, true, true) : packageJson = J$.R(938465, 'packageJson', packageJson, true, true)), 'engines'), J$.T(938481, 'ghost-api', 21, false), J$.G(938505, J$.R(938489, 'availableApiVersions', availableApiVersions, false, true), J$.R(938497, 'apiVersionMajor', apiVersionMajor, false, true)));
                        } else {
                            J$.P(938553, J$.G(938529, J$.I(typeof packageJson === 'undefined' ? packageJson = J$.R(938521, 'packageJson', undefined, true, true) : packageJson = J$.R(938521, 'packageJson', packageJson, true, true)), 'engines'), J$.T(938537, 'ghost-api', 21, false), J$.T(938545, 'v3', 21, false));
                        }
                    }
                    themeEngines = J$.W(938625, 'themeEngines', J$.M(938617, J$.R(938561, '_', _, false, true), 'assign', false)(J$.R(938569, 'themeEngines', themeEngines, false, true), J$.M(938609, J$.R(938577, '_', _, false, true), 'pick', false)(J$.G(938593, J$.I(typeof packageJson === 'undefined' ? packageJson = J$.R(938585, 'packageJson', undefined, true, true) : packageJson = J$.R(938585, 'packageJson', packageJson, true, true)), 'engines'), J$.R(938601, 'allowedKeys', allowedKeys, false, true))), themeEngines, false, true);
                }
                return J$.Rt(938641, J$.R(938633, 'themeEngines', themeEngines, false, true));
            });
        } catch (J$e) {
            J$.Ex(938737, J$e);
        } finally {
            if (J$.Sr(938745))
                continue jalangiLabel0;
            else
                break jalangiLabel0;
        }
    }
// JALANGI DO NOT INSTRUMENT

