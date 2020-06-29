J$.noInstrEval = false;
jalangiLabel0:
    while (true) {
        try {
            J$.Se(16225, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/MigratorConfig.js');
            J$.N(16233, 'config', config, false, false, false);
            J$.N(16241, 'ghostVersion', ghostVersion, false, false, false);
            const config = J$.W(16073, 'config', J$.F(16065, J$.I(typeof require === 'undefined' ? require = J$.R(16049, 'require', undefined, true, true) : require = J$.R(16049, 'require', require, true, true)), false)(J$.T(16057, './core/shared/config', 21, false)), config, false, true);
            const ghostVersion = J$.W(16105, 'ghostVersion', J$.F(16097, J$.I(typeof require === 'undefined' ? require = J$.R(16081, 'require', undefined, true, true) : require = J$.R(16081, 'require', require, true, true)), false)(J$.T(16089, './core/server/lib/ghost-version', 21, false)), ghostVersion, false, true);
            J$.F(16129, J$.I(typeof require === 'undefined' ? require = J$.R(16113, 'require', undefined, true, true) : require = J$.R(16113, 'require', require, true, true)), false)(J$.T(16121, './core/server/overrides', 21, false));
            J$.P(16217, J$.I(typeof module === 'undefined' ? module = J$.R(16137, 'module', undefined, true, true) : module = J$.R(16137, 'module', module, true, true)), 'exports', J$.T(16209, {
                currentVersion: J$.G(16153, J$.R(16145, 'ghostVersion', ghostVersion, false, true), 'safe'),
                database: J$.M(16177, J$.R(16161, 'config', config, false, true), 'get', false)(J$.T(16169, 'database', 21, false)),
                migrationPath: J$.M(16201, J$.R(16185, 'config', config, false, true), 'get', false)(J$.T(16193, 'paths:migrationPath', 21, false))
            }, 11, false));
        } catch (J$e) {
            J$.Ex(16249, J$e);
        } finally {
            if (J$.Sr(16257))
                continue jalangiLabel0;
            else
                break jalangiLabel0;
        }
    }
// JALANGI DO NOT INSTRUMENT

