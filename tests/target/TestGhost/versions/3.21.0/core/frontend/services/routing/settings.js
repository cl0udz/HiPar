J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(933753, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/settings.js');
            J$.N(933761, 'moment', moment, false, false, false);
            J$.N(933769, 'fs', fs, false, false, false);
            J$.N(933777, 'path', path, false, false, false);
            J$.N(933785, 'urlService', urlService, false, false, false);
            J$.N(933793, 'errors', errors, false, false, false);
            J$.N(933801, 'config', config, false, false, false);
            J$.N(933809, 'setFromFilePath', setFromFilePath, false, false, false);
            J$.N(933817, 'settingsPath', settingsPath, false, false, false);
            J$.N(933825, 'backupRoutesPath', backupRoutesPath, false, false, false);
            J$.N(933833, 'siteApp', siteApp, false, false, false);
            J$.N(933841, 'bringBackValidRoutes', bringBackValidRoutes, false, false, false);
            J$.N(933849, 'tries', tries, false, false, false);
            isBlogRunning = J$.N(933865, 'isBlogRunning', J$.T(933857, isBlogRunning, 12, false), true, false, false);
            J$.N(933873, 'get', get, false, false, false);
            J$.N(933881, 'routesPath', routesPath, false, false, false);
            const moment = J$.W(932553, 'moment', J$.F(932545, J$.I(typeof require === 'undefined' ? require = J$.R(932529, 'require', undefined, true, true) : require = J$.R(932529, 'require', require, true, true)), false)(J$.T(932537, 'moment-timezone', 21, false)), moment, false, true);
            const fs = J$.W(932585, 'fs', J$.F(932577, J$.I(typeof require === 'undefined' ? require = J$.R(932561, 'require', undefined, true, true) : require = J$.R(932561, 'require', require, true, true)), false)(J$.T(932569, 'fs-extra', 21, false)), fs, false, true);
            const path = J$.W(932617, 'path', J$.F(932609, J$.I(typeof require === 'undefined' ? require = J$.R(932593, 'require', undefined, true, true) : require = J$.R(932593, 'require', require, true, true)), false)(J$.T(932601, 'path', 21, false)), path, false, true);
            const urlService = J$.W(932649, 'urlService', J$.F(932641, J$.I(typeof require === 'undefined' ? require = J$.R(932625, 'require', undefined, true, true) : require = J$.R(932625, 'require', require, true, true)), false)(J$.T(932633, '../url', 21, false)), urlService, false, true);
            const errors = J$.W(932681, 'errors', J$.F(932673, J$.I(typeof require === 'undefined' ? require = J$.R(932657, 'require', undefined, true, true) : require = J$.R(932657, 'require', require, true, true)), false)(J$.T(932665, '@tryghost/errors', 21, false)), errors, false, true);
            const config = J$.W(932713, 'config', J$.F(932705, J$.I(typeof require === 'undefined' ? require = J$.R(932689, 'require', undefined, true, true) : require = J$.R(932689, 'require', require, true, true)), false)(J$.T(932697, '../../../shared/config', 21, false)), config, false, true);
            const setFromFilePath = J$.W(933433, 'setFromFilePath', (J$.I(typeof filePath === 'undefined' ? filePath = J$.R(932721, 'filePath', undefined, true, true) : filePath = J$.R(932721, 'filePath', filePath, true, true))) => {
                const settingsPath = J$.W(932753, 'settingsPath', J$.M(932745, J$.R(932729, 'config', config, false, true), 'getContentPath', false)(J$.T(932737, 'settings', 21, false)), settingsPath, false, true);
                const backupRoutesPath = J$.W(932817, 'backupRoutesPath', J$.M(932809, J$.R(932761, 'path', path, false, true), 'join', false)(J$.R(932769, 'settingsPath', settingsPath, false, true), `routes-${ J$.M(932801, J$.F(932785, J$.R(932777, 'moment', moment, false, true), false)(), 'format', false)(J$.T(932793, 'YYYY-MM-DD-HH-mm-ss', 21, false)) }.yaml`), backupRoutesPath, false, true);
                return J$.Rt(933425, J$.M(933417, J$.M(932937, J$.M(932897, J$.M(932849, J$.R(932825, 'fs', fs, false, true), 'copy', false)(`${ J$.R(932833, 'settingsPath', settingsPath, false, true) }/routes.yaml`, J$.R(932841, 'backupRoutesPath', backupRoutesPath, false, true)), 'then', false)(() => {
                    return J$.Rt(932889, J$.M(932881, J$.R(932857, 'fs', fs, false, true), 'copy', false)(J$.I(typeof filePath === 'undefined' ? filePath = J$.R(932865, 'filePath', undefined, true, true) : filePath = J$.R(932865, 'filePath', filePath, true, true)), `${ J$.R(932873, 'settingsPath', settingsPath, false, true) }/routes.yaml`));
                }), 'then', false)(() => {
                    J$.M(932929, J$.R(932905, 'urlService', urlService, false, true), 'resetGenerators', false)(J$.T(932921, { releaseResourcesOnly: J$.T(932913, true, 23, false) }, 11, false));
                }), 'then', false)(() => {
                    function isBlogRunning() {
                        jalangiLabel0:
                            while (true) {
                                try {
                                    J$.Fe(933321, arguments.callee, this, arguments);
                                    arguments = J$.N(933329, 'arguments', arguments, true, false, false);
                                    return J$.Rt(933313, J$.M(933305, J$.M(933185, J$.I(typeof Promise === 'undefined' ? Promise = J$.R(933169, 'Promise', undefined, true, true) : Promise = J$.R(933169, 'Promise', Promise, true, true)), 'delay', false)(J$.T(933177, 1000, 22, false)), 'then', false)(() => {
                                        if (J$.C(69832, J$.U(90058, '!', J$.M(933201, J$.R(933193, 'urlService', urlService, false, true), 'hasFinished', false)()))) {
                                            if (J$.C(69824, J$.B(90066, '>', J$.R(933209, 'tries', tries, false, true), J$.T(933217, 5, 22, false)))) {
                                                throw J$.M(933249, J$.R(933225, 'errors', errors, false, true), 'InternalServerError', true)(J$.T(933241, { message: J$.T(933233, 'Could not load routes.yaml file.', 21, false) }, 11, false));
                                            }
                                            tries = J$.W(933273, 'tries', J$.B(90074, '+', J$.R(933257, 'tries', tries, false, true), J$.T(933265, 1, 22, false)), tries, false, true);
                                            return J$.Rt(933297, J$.F(933289, J$.R(933281, 'isBlogRunning', isBlogRunning, false, true), false)());
                                        }
                                    }));
                                } catch (J$e) {
                                    J$.Ex(933889, J$e);
                                } finally {
                                    if (J$.Fr(933897))
                                        continue jalangiLabel0;
                                    else
                                        return J$.Ra();
                                }
                            }
                    }
                    const siteApp = J$.W(932969, 'siteApp', J$.F(932961, J$.I(typeof require === 'undefined' ? require = J$.R(932945, 'require', undefined, true, true) : require = J$.R(932945, 'require', require, true, true)), false)(J$.T(932953, '../../../server/web/site/app', 21, false)), siteApp, false, true);
                    const bringBackValidRoutes = J$.W(933081, 'bringBackValidRoutes', () => {
                        J$.M(933001, J$.R(932977, 'urlService', urlService, false, true), 'resetGenerators', false)(J$.T(932993, { releaseResourcesOnly: J$.T(932985, true, 23, false) }, 11, false));
                        return J$.Rt(933073, J$.M(933065, J$.M(933033, J$.R(933009, 'fs', fs, false, true), 'copy', false)(J$.R(933017, 'backupRoutesPath', backupRoutesPath, false, true), `${ J$.R(933025, 'settingsPath', settingsPath, false, true) }/routes.yaml`), 'then', false)(() => {
                            return J$.Rt(933057, J$.M(933049, J$.R(933041, 'siteApp', siteApp, false, true), 'reload', false)());
                        }));
                    }, bringBackValidRoutes, false, true);
                    try {
                        J$.M(933097, J$.R(933089, 'siteApp', siteApp, false, true), 'reload', false)();
                    } catch (err) {
                        J$.N(933145, 'err', err, false, false, true);
                        return J$.Rt(933137, J$.M(933129, J$.F(933113, J$.R(933105, 'bringBackValidRoutes', bringBackValidRoutes, false, true), false)(), 'finally', false)(() => {
                            throw J$.R(933121, 'err', err, false, false);
                        }));
                    }
                    let tries = J$.W(933161, 'tries', J$.T(933153, 0, 22, false), tries, false, true);
                    return J$.Rt(933409, J$.M(933401, J$.F(933345, J$.R(933337, 'isBlogRunning', isBlogRunning, false, true), false)(), 'catch', false)((J$.I(typeof err === 'undefined' ? err = J$.R(933353, 'err', undefined, true, true) : err = J$.R(933353, 'err', err, true, true))) => {
                        return J$.Rt(933393, J$.M(933385, J$.F(933369, J$.R(933361, 'bringBackValidRoutes', bringBackValidRoutes, false, true), false)(), 'finally', false)(() => {
                            throw J$.I(typeof err === 'undefined' ? err = J$.R(933377, 'err', undefined, true, true) : err = J$.R(933377, 'err', err, true, true));
                        }));
                    }));
                }));
            }, setFromFilePath, false, true);
            const get = J$.W(933681, 'get', () => {
                const routesPath = J$.W(933489, 'routesPath', J$.M(933481, J$.R(933441, 'path', path, false, true), 'join', false)(J$.M(933465, J$.R(933449, 'config', config, false, true), 'getContentPath', false)(J$.T(933457, 'settings', 21, false)), J$.T(933473, 'routes.yaml', 21, false)), routesPath, false, true);
                return J$.Rt(933673, J$.M(933665, J$.M(933521, J$.R(933497, 'fs', fs, false, true), 'readFile', false)(J$.R(933505, 'routesPath', routesPath, false, true), J$.T(933513, 'utf-8', 21, false)), 'catch', false)((J$.I(typeof err === 'undefined' ? err = J$.R(933529, 'err', undefined, true, true) : err = J$.R(933529, 'err', err, true, true))) => {
                    if (J$.C(69840, J$.B(90082, '===', J$.G(933545, J$.I(typeof err === 'undefined' ? err = J$.R(933537, 'err', undefined, true, true) : err = J$.R(933537, 'err', err, true, true)), 'code'), J$.T(933553, 'ENOENT', 21, false)))) {
                        return J$.Rt(933585, J$.M(933577, J$.I(typeof Promise === 'undefined' ? Promise = J$.R(933561, 'Promise', undefined, true, true) : Promise = J$.R(933561, 'Promise', Promise, true, true)), 'resolve', false)(J$.T(933569, [], 10, false)));
                    }
                    if (J$.C(69848, J$.M(933617, J$.G(933601, J$.R(933593, 'errors', errors, false, true), 'utils'), 'isIgnitionError', false)(J$.I(typeof err === 'undefined' ? err = J$.R(933609, 'err', undefined, true, true) : err = J$.R(933609, 'err', err, true, true))))) {
                        throw J$.I(typeof err === 'undefined' ? err = J$.R(933625, 'err', undefined, true, true) : err = J$.R(933625, 'err', err, true, true));
                    }
                    throw J$.M(933657, J$.R(933633, 'errors', errors, false, true), 'NotFoundError', true)(J$.T(933649, { err: J$.I(typeof err === 'undefined' ? err = J$.R(933641, 'err', undefined, true, true) : err = J$.R(933641, 'err', err, true, true)) }, 11, false));
                }));
            }, get, false, true);
            J$.P(933713, J$.G(933697, J$.I(typeof module === 'undefined' ? module = J$.R(933689, 'module', undefined, true, true) : module = J$.R(933689, 'module', module, true, true)), 'exports'), 'setFromFilePath', J$.R(933705, 'setFromFilePath', setFromFilePath, false, true));
            J$.P(933745, J$.G(933729, J$.I(typeof module === 'undefined' ? module = J$.R(933721, 'module', undefined, true, true) : module = J$.R(933721, 'module', module, true, true)), 'exports'), 'get', J$.R(933737, 'get', get, false, true));
        } catch (J$e) {
            J$.Ex(933905, J$e);
        } finally {
            if (J$.Sr(933913))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

