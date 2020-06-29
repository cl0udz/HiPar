J$.noInstrEval = false;
jalangiLabel19:
    while (true) {
        try {
            J$.Se(15609, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/Gruntfile.js');
            J$.N(15617, 'config', config, false, false, false);
            J$.N(15625, 'urlService', urlService, false, false, false);
            J$.N(15633, '_', _, false, false, false);
            J$.N(15641, 'fs', fs, false, false, false);
            J$.N(15649, 'KnexMigrator', KnexMigrator, false, false, false);
            J$.N(15657, 'knexMigrator', knexMigrator, false, false, false);
            J$.N(15665, 'path', path, false, false, false);
            J$.N(15673, 'escapeChar', escapeChar, false, false, false);
            J$.N(15681, 'cwd', cwd, false, false, false);
            J$.N(15689, 'buildDirectory', buildDirectory, false, false, false);
            J$.N(15697, 'distDirectory', distDirectory, false, false, false);
            J$.N(15705, 'hasBuiltClient', hasBuiltClient, false, false, false);
            J$.N(15713, 'logBuildingClient', logBuildingClient, false, false, false);
            J$.N(15721, 'configureGrunt', configureGrunt, false, false, false);
            J$.F(9841, J$.I(typeof require === 'undefined' ? require = J$.R(9825, 'require', undefined, true, true) : require = J$.R(9825, 'require', require, true, true)), false)(J$.T(9833, './core/server/overrides', 21, false));
            const config = J$.W(9873, 'config', J$.F(9865, J$.I(typeof require === 'undefined' ? require = J$.R(9849, 'require', undefined, true, true) : require = J$.R(9849, 'require', require, true, true)), false)(J$.T(9857, './core/shared/config', 21, false)), config, false, true);
            const urlService = J$.W(9905, 'urlService', J$.F(9897, J$.I(typeof require === 'undefined' ? require = J$.R(9881, 'require', undefined, true, true) : require = J$.R(9881, 'require', require, true, true)), false)(J$.T(9889, './core/frontend/services/url', 21, false)), urlService, false, true);
            const _ = J$.W(9937, '_', J$.F(9929, J$.I(typeof require === 'undefined' ? require = J$.R(9913, 'require', undefined, true, true) : require = J$.R(9913, 'require', require, true, true)), false)(J$.T(9921, 'lodash', 21, false)), _, false, true);
            const fs = J$.W(9969, 'fs', J$.F(9961, J$.I(typeof require === 'undefined' ? require = J$.R(9945, 'require', undefined, true, true) : require = J$.R(9945, 'require', require, true, true)), false)(J$.T(9953, 'fs-extra', 21, false)), fs, false, true);
            const KnexMigrator = J$.W(10001, 'KnexMigrator', J$.F(9993, J$.I(typeof require === 'undefined' ? require = J$.R(9977, 'require', undefined, true, true) : require = J$.R(9977, 'require', require, true, true)), false)(J$.T(9985, 'knex-migrator', 21, false)), KnexMigrator, false, true);
            const knexMigrator = J$.W(10057, 'knexMigrator', J$.F(10049, J$.R(10009, 'KnexMigrator', KnexMigrator, false, true), true)(J$.T(10041, { knexMigratorFilePath: J$.M(10033, J$.R(10017, 'config', config, false, true), 'get', false)(J$.T(10025, 'paths:appRoot', 21, false)) }, 11, false)), knexMigrator, false, true);
            const path = J$.W(10089, 'path', J$.F(10081, J$.I(typeof require === 'undefined' ? require = J$.R(10065, 'require', undefined, true, true) : require = J$.R(10065, 'require', require, true, true)), false)(J$.T(10073, 'path', 21, false)), path, false, true);
            const escapeChar = J$.W(10145, 'escapeChar', J$.C(472, J$.M(10121, J$.G(10105, J$.I(typeof process === 'undefined' ? process = J$.R(10097, 'process', undefined, true, true) : process = J$.R(10097, 'process', process, true, true)), 'platform'), 'match', false)(J$.T(10113, /^win/, 14, false))) ? J$.T(10129, '^', 21, false) : J$.T(10137, '\\', 21, false), escapeChar, false, true);
            const cwd = J$.W(10201, 'cwd', J$.M(10193, J$.M(10161, J$.I(typeof process === 'undefined' ? process = J$.R(10153, 'process', undefined, true, true) : process = J$.R(10153, 'process', process, true, true)), 'cwd', false)(), 'replace', false)(J$.T(10169, /( |\(|\))/g, 14, false), J$.B(586, '+', J$.R(10177, 'escapeChar', escapeChar, false, true), J$.T(10185, '$1', 21, false))), cwd, false, true);
            const buildDirectory = J$.W(10241, 'buildDirectory', J$.M(10233, J$.R(10209, 'path', path, false, true), 'resolve', false)(J$.R(10217, 'cwd', cwd, false, true), J$.T(10225, '.build', 21, false)), buildDirectory, false, true);
            const distDirectory = J$.W(10281, 'distDirectory', J$.M(10273, J$.R(10249, 'path', path, false, true), 'resolve', false)(J$.R(10257, 'cwd', cwd, false, true), J$.T(10265, '.dist', 21, false)), distDirectory, false, true);
            let hasBuiltClient = J$.W(10297, 'hasBuiltClient', J$.T(10289, false, 23, false), hasBuiltClient, false, true);
            const logBuildingClient = J$.W(10417, 'logBuildingClient', J$.T(10409, function (grunt) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(10385, arguments.callee, this, arguments);
                            arguments = J$.N(10393, 'arguments', arguments, true, false, false);
                            grunt = J$.N(10401, 'grunt', grunt, true, false, false);
                            if (J$.C(480, J$.U(594, '!', J$.R(10305, 'hasBuiltClient', hasBuiltClient, false, true)))) {
                                J$.M(10337, J$.G(10321, J$.R(10313, 'grunt', grunt, false, false), 'log'), 'writeln', false)(J$.T(10329, 'Building admin client... (can take ~1min)', 21, false));
                                J$.F(10377, J$.I(typeof setTimeout === 'undefined' ? setTimeout = J$.R(10345, 'setTimeout', undefined, true, true) : setTimeout = J$.R(10345, 'setTimeout', setTimeout, true, true)), false)(J$.R(10353, 'logBuildingClient', logBuildingClient, false, true), J$.T(10361, 5000, 22, false), J$.R(10369, 'grunt', grunt, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(15729, J$e);
                        } finally {
                            if (J$.Fr(15737))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), logBuildingClient, false, true);
            const configureGrunt = J$.W(15577, 'configureGrunt', J$.T(15569, function (grunt) {
                jalangiLabel18:
                    while (true) {
                        try {
                            J$.Fe(15537, arguments.callee, this, arguments);
                            arguments = J$.N(15545, 'arguments', arguments, true, false, false);
                            grunt = J$.N(15553, 'grunt', grunt, true, false, false);
                            J$.N(15561, 'cfg', cfg, false, false, false);
                            J$.M(10441, J$.R(10425, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10433, '@lodder/grunt-postcss', 21, false));
                            J$.M(10465, J$.R(10449, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10457, 'grunt-bg-shell', 21, false));
                            J$.M(10489, J$.R(10473, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10481, 'grunt-contrib-clean', 21, false));
                            J$.M(10513, J$.R(10497, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10505, 'grunt-contrib-compress', 21, false));
                            J$.M(10537, J$.R(10521, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10529, 'grunt-contrib-copy', 21, false));
                            J$.M(10561, J$.R(10545, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10553, 'grunt-contrib-symlink', 21, false));
                            J$.M(10585, J$.R(10569, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10577, 'grunt-contrib-uglify', 21, false));
                            J$.M(10609, J$.R(10593, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10601, 'grunt-contrib-watch', 21, false));
                            J$.M(10633, J$.R(10617, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10625, 'grunt-express-server', 21, false));
                            J$.M(10657, J$.R(10641, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10649, 'grunt-mocha-cli', 21, false));
                            J$.M(10681, J$.R(10665, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10673, 'grunt-shell', 21, false));
                            J$.M(10705, J$.R(10689, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10697, 'grunt-subgrunt', 21, false));
                            J$.M(10729, J$.R(10713, 'grunt', grunt, false, false), 'loadNpmTasks', false)(J$.T(10721, 'grunt-update-submodules', 21, false));
                            const cfg = J$.W(12977, 'cfg', J$.T(12969, {
                                paths: J$.T(10817, {
                                    build: J$.R(10737, 'buildDirectory', buildDirectory, false, true),
                                    releaseBuild: J$.M(10769, J$.R(10745, 'path', path, false, true), 'join', false)(J$.R(10753, 'buildDirectory', buildDirectory, false, true), J$.T(10761, 'release', 21, false)),
                                    dist: J$.R(10777, 'distDirectory', distDirectory, false, true),
                                    releaseDist: J$.M(10809, J$.R(10785, 'path', path, false, true), 'join', false)(J$.R(10793, 'distDirectory', distDirectory, false, true), J$.T(10801, 'release', 21, false))
                                }, 11, false),
                                buildType: J$.T(10825, 'Build', 21, false),
                                pkg: J$.M(10857, J$.G(10841, J$.R(10833, 'grunt', grunt, false, false), 'file'), 'readJSON', false)(J$.T(10849, 'package.json', 21, false)),
                                clientFiles: J$.T(10905, [
                                    J$.T(10865, 'server/web/admin/views/default.html', 21, false),
                                    J$.T(10873, 'built/assets/ghost.js', 21, false),
                                    J$.T(10881, 'built/assets/ghost.css', 21, false),
                                    J$.T(10889, 'built/assets/vendor.js', 21, false),
                                    J$.T(10897, 'built/assets/vendor.css', 21, false)
                                ], 10, false),
                                watch: J$.C(488, J$.M(10929, J$.R(10913, 'grunt', grunt, false, false), 'option', false)(J$.T(10921, 'no-server-watch', 21, false))) ? J$.T(10945, { files: J$.T(10937, [], 10, false) }, 11, false) : J$.T(11129, {
                                    livereload: J$.T(11001, {
                                        files: J$.T(10969, [
                                            J$.T(10953, 'content/themes/casper/assets/css/*.css', 21, false),
                                            J$.T(10961, 'content/themes/casper/assets/js/*.js', 21, false)
                                        ], 10, false),
                                        options: J$.T(10993, {
                                            livereload: J$.T(10977, true, 23, false),
                                            interval: J$.T(10985, 500, 22, false)
                                        }, 11, false)
                                    }, 11, false),
                                    express: J$.T(11121, {
                                        files: J$.T(11065, [
                                            J$.T(11009, 'core/server/**/*.js', 21, false),
                                            J$.T(11017, 'core/shared/**/*.js', 21, false),
                                            J$.T(11025, 'core/frontend/**/*.js', 21, false),
                                            J$.T(11033, 'core/index.js', 21, false),
                                            J$.T(11041, 'index.js', 21, false),
                                            J$.T(11049, 'config.*.json', 21, false),
                                            J$.T(11057, '!config.testing.json', 21, false)
                                        ], 10, false),
                                        tasks: J$.T(11081, [J$.T(11073, 'express:dev', 21, false)], 10, false),
                                        options: J$.T(11113, {
                                            spawn: J$.T(11089, false, 23, false),
                                            livereload: J$.T(11097, true, 23, false),
                                            interval: J$.T(11105, 500, 22, false)
                                        }, 11, false)
                                    }, 11, false)
                                }, 11, false),
                                express: J$.T(11201, {
                                    options: J$.T(11153, {
                                        script: J$.T(11137, 'index.js', 21, false),
                                        output: J$.T(11145, 'Ghost is running', 21, false)
                                    }, 11, false),
                                    dev: J$.T(11169, { options: J$.T(11161, {}, 11, false) }, 11, false),
                                    test: J$.T(11193, { options: J$.T(11185, { node_env: J$.T(11177, 'testing', 21, false) }, 11, false) }, 11, false)
                                }, 11, false),
                                mochacli: J$.T(11385, {
                                    options: J$.T(11289, {
                                        ui: J$.T(11209, 'bdd', 21, false),
                                        reporter: J$.C(496, J$.M(11233, J$.R(11217, 'grunt', grunt, false, false), 'option', false)(J$.T(11225, 'reporter', 21, false))) ? J$._() : J$.T(11241, 'spec', 21, false),
                                        timeout: J$.T(11249, '60000', 21, false),
                                        require: J$.T(11265, [J$.T(11257, 'core/server/overrides', 21, false)], 10, false),
                                        retries: J$.T(11273, '3', 21, false),
                                        exit: J$.T(11281, true, 23, false)
                                    }, 11, false),
                                    unit: J$.T(11313, { src: J$.T(11305, [J$.T(11297, 'test/unit/**/*_spec.js', 21, false)], 10, false) }, 11, false),
                                    acceptance: J$.T(11345, {
                                        src: J$.T(11337, [
                                            J$.T(11321, 'test/api-acceptance/**/*_spec.js', 21, false),
                                            J$.T(11329, 'test/frontend-acceptance/**/*_spec.js', 21, false)
                                        ], 10, false)
                                    }, 11, false),
                                    regression: J$.T(11369, { src: J$.T(11361, [J$.T(11353, 'test/regression/**/*_spec.js', 21, false)], 10, false) }, 11, false),
                                    single: J$.T(11377, {}, 11, false)
                                }, 11, false),
                                bgShell: J$.T(12153, {
                                    client: J$.T(12145, {
                                        cmd: J$.T(11449, function () {
                                            jalangiLabel1:
                                                while (true) {
                                                    try {
                                                        J$.Fe(11433, arguments.callee, this, arguments);
                                                        arguments = J$.N(11441, 'arguments', arguments, true, false, false);
                                                        J$.F(11409, J$.R(11393, 'logBuildingClient', logBuildingClient, false, true), false)(J$.R(11401, 'grunt', grunt, false, false));
                                                        return J$.Rt(11425, J$.T(11417, 'grunt subgrunt:watch', 21, false));
                                                    } catch (J$e) {
                                                        J$.Ex(15745, J$e);
                                                    } finally {
                                                        if (J$.Fr(15753))
                                                            continue jalangiLabel1;
                                                        else
                                                            return J$.Ra();
                                                    }
                                                }
                                        }, 12, false),
                                        bg: J$.C(504, J$.M(11473, J$.R(11457, 'grunt', grunt, false, false), 'option', false)(J$.T(11465, 'client', 21, false))) ? J$.T(11481, false, 23, false) : J$.T(11489, true, 23, false),
                                        stdout: J$.T(11761, function (chunk) {
                                            jalangiLabel3:
                                                while (true) {
                                                    try {
                                                        J$.Fe(11729, arguments.callee, this, arguments);
                                                        arguments = J$.N(11737, 'arguments', arguments, true, false, false);
                                                        chunk = J$.N(11745, 'chunk', chunk, true, false, false);
                                                        J$.N(11753, 'filter', filter, false, false, false);
                                                        const filter = J$.W(11633, 'filter', J$.C(512, J$.M(11513, J$.R(11497, 'grunt', grunt, false, false), 'option', false)(J$.T(11505, 'client', 21, false))) ? J$.T(11521, false, 23, false) : J$.M(11625, J$.T(11553, [
                                                            J$.T(11529, /> ghost-admin/, 14, false),
                                                            J$.T(11537, /^Livereload/, 14, false),
                                                            J$.T(11545, /^Serving on/, 14, false)
                                                        ], 10, false), 'some', false)(J$.T(11617, function (regexp) {
                                                            jalangiLabel2:
                                                                while (true) {
                                                                    try {
                                                                        J$.Fe(11593, arguments.callee, this, arguments);
                                                                        arguments = J$.N(11601, 'arguments', arguments, true, false, false);
                                                                        regexp = J$.N(11609, 'regexp', regexp, true, false, false);
                                                                        return J$.Rt(11585, J$.M(11577, J$.R(11561, 'regexp', regexp, false, false), 'test', false)(J$.R(11569, 'chunk', chunk, false, false)));
                                                                    } catch (J$e) {
                                                                        J$.Ex(15761, J$e);
                                                                    } finally {
                                                                        if (J$.Fr(15769))
                                                                            continue jalangiLabel2;
                                                                        else
                                                                            return J$.Ra();
                                                                    }
                                                                }
                                                        }, 12, false)), filter, false, false);
                                                        if (J$.C(520, J$.U(602, '!', J$.R(11641, 'filter', filter, false, false)))) {
                                                            J$.M(11673, J$.G(11657, J$.R(11649, 'grunt', grunt, false, false), 'log'), 'write', false)(J$.R(11665, 'chunk', chunk, false, false));
                                                        }
                                                        if (J$.C(528, J$.B(618, '!==', J$.M(11697, J$.R(11681, 'chunk', chunk, false, false), 'indexOf', false)(J$.T(11689, 'Slowest Nodes', 21, false)), J$.U(610, '-', J$.T(11705, 1, 22, false))))) {
                                                            hasBuiltClient = J$.W(11721, 'hasBuiltClient', J$.T(11713, true, 23, false), hasBuiltClient, false, true);
                                                        }
                                                    } catch (J$e) {
                                                        J$.Ex(15777, J$e);
                                                    } finally {
                                                        if (J$.Fr(15785))
                                                            continue jalangiLabel3;
                                                        else
                                                            return J$.Ra();
                                                    }
                                                }
                                        }, 12, false),
                                        stderr: J$.T(12137, function (chunk) {
                                            jalangiLabel6:
                                                while (true) {
                                                    try {
                                                        J$.Fe(12097, arguments.callee, this, arguments);
                                                        arguments = J$.N(12105, 'arguments', arguments, true, false, false);
                                                        chunk = J$.N(12113, 'chunk', chunk, true, false, false);
                                                        J$.N(12121, 'skipFilter', skipFilter, false, false, false);
                                                        J$.N(12129, 'errorFilter', errorFilter, false, false, false);
                                                        const skipFilter = J$.W(11889, 'skipFilter', J$.C(536, J$.M(11785, J$.R(11769, 'grunt', grunt, false, false), 'option', false)(J$.T(11777, 'client', 21, false))) ? J$.T(11793, false, 23, false) : J$.M(11881, J$.T(11809, [J$.T(11801, /- building/, 14, false)], 10, false), 'some', false)(J$.T(11873, function (regexp) {
                                                            jalangiLabel4:
                                                                while (true) {
                                                                    try {
                                                                        J$.Fe(11849, arguments.callee, this, arguments);
                                                                        arguments = J$.N(11857, 'arguments', arguments, true, false, false);
                                                                        regexp = J$.N(11865, 'regexp', regexp, true, false, false);
                                                                        return J$.Rt(11841, J$.M(11833, J$.R(11817, 'regexp', regexp, false, false), 'test', false)(J$.R(11825, 'chunk', chunk, false, false)));
                                                                    } catch (J$e) {
                                                                        J$.Ex(15793, J$e);
                                                                    } finally {
                                                                        if (J$.Fr(15801))
                                                                            continue jalangiLabel4;
                                                                        else
                                                                            return J$.Ra();
                                                                    }
                                                                }
                                                        }, 12, false)), skipFilter, false, false);
                                                        const errorFilter = J$.W(12017, 'errorFilter', J$.C(544, J$.M(11913, J$.R(11897, 'grunt', grunt, false, false), 'option', false)(J$.T(11905, 'client', 21, false))) ? J$.T(11921, false, 23, false) : J$.M(12009, J$.T(11937, [J$.T(11929, /^>>/, 14, false)], 10, false), 'some', false)(J$.T(12001, function (regexp) {
                                                            jalangiLabel5:
                                                                while (true) {
                                                                    try {
                                                                        J$.Fe(11977, arguments.callee, this, arguments);
                                                                        arguments = J$.N(11985, 'arguments', arguments, true, false, false);
                                                                        regexp = J$.N(11993, 'regexp', regexp, true, false, false);
                                                                        return J$.Rt(11969, J$.M(11961, J$.R(11945, 'regexp', regexp, false, false), 'test', false)(J$.R(11953, 'chunk', chunk, false, false)));
                                                                    } catch (J$e) {
                                                                        J$.Ex(15809, J$e);
                                                                    } finally {
                                                                        if (J$.Fr(15817))
                                                                            continue jalangiLabel5;
                                                                        else
                                                                            return J$.Ra();
                                                                    }
                                                                }
                                                        }, 12, false)), errorFilter, false, false);
                                                        if (J$.C(560, J$.U(626, '!', J$.R(12025, 'skipFilter', skipFilter, false, false)))) {
                                                            hasBuiltClient = J$.W(12057, 'hasBuiltClient', J$.C(552, J$.R(12033, 'errorFilter', errorFilter, false, false)) ? J$.R(12041, 'hasBuiltClient', hasBuiltClient, false, true) : J$.T(12049, true, 23, false), hasBuiltClient, false, true);
                                                            J$.M(12089, J$.G(12073, J$.R(12065, 'grunt', grunt, false, false), 'log'), 'error', false)(J$.R(12081, 'chunk', chunk, false, false));
                                                        }
                                                    } catch (J$e) {
                                                        J$.Ex(15825, J$e);
                                                    } finally {
                                                        if (J$.Fr(15833))
                                                            continue jalangiLabel6;
                                                        else
                                                            return J$.Ra();
                                                    }
                                                }
                                        }, 12, false)
                                    }, 11, false)
                                }, 11, false),
                                shell: J$.T(12345, {
                                    lint: J$.T(12169, { command: J$.T(12161, 'yarn lint', 21, false) }, 11, false),
                                    master: J$.T(12337, {
                                        command: J$.T(12329, function () {
                                            jalangiLabel7:
                                                while (true) {
                                                    try {
                                                        J$.Fe(12305, arguments.callee, this, arguments);
                                                        arguments = J$.N(12313, 'arguments', arguments, true, false, false);
                                                        J$.N(12321, 'upstream', upstream, false, false, false);
                                                        const upstream = J$.W(12233, 'upstream', J$.C(576, J$.C(568, J$.M(12193, J$.R(12177, 'grunt', grunt, false, false), 'option', false)(J$.T(12185, 'upstream', 21, false))) ? J$._() : J$.G(12217, J$.G(12209, J$.I(typeof process === 'undefined' ? process = J$.R(12201, 'process', undefined, true, true) : process = J$.R(12201, 'process', process, true, true)), 'env'), 'GHOST_UPSTREAM')) ? J$._() : J$.T(12225, 'upstream', 21, false), upstream, false, false);
                                                        J$.M(12273, J$.G(12249, J$.R(12241, 'grunt', grunt, false, false), 'log'), 'writeln', false)(J$.B(634, '+', J$.T(12257, 'Pulling down the latest master from ', 21, false), J$.R(12265, 'upstream', upstream, false, false)));
                                                        return J$.Rt(12297, `
                        git submodule sync
                        git submodule update

                        if ! git diff --exit-code --quiet --ignore-submodules=untracked; then
                            echo "Working directory is not clean, do you have uncommitted changes? Please commit, stash or discard changes to continue."
                            exit 1
                        fi

                        git checkout master
                        git pull ${ J$.R(12281, 'upstream', upstream, false, false) } master
                        yarn
                        git submodule foreach "
                            git checkout master && git pull ${ J$.R(12289, 'upstream', upstream, false, false) } master
                        "
                    `);
                                                    } catch (J$e) {
                                                        J$.Ex(15841, J$e);
                                                    } finally {
                                                        if (J$.Fr(15849))
                                                            continue jalangiLabel7;
                                                        else
                                                            return J$.Ra();
                                                    }
                                                }
                                        }, 12, false)
                                    }, 11, false)
                                }, 11, false),
                                clean: J$.T(12489, {
                                    built: J$.T(12369, { src: J$.T(12361, [J$.T(12353, 'core/built/**', 21, false)], 10, false) }, 11, false),
                                    release: J$.T(12393, { src: J$.T(12385, [J$.T(12377, '<%= paths.releaseBuild %>/**', 21, false)], 10, false) }, 11, false),
                                    test: J$.T(12417, { src: J$.T(12409, [J$.T(12401, 'content/data/ghost-test.db', 21, false)], 10, false) }, 11, false),
                                    tmp: J$.T(12441, { src: J$.T(12433, [J$.T(12425, '.tmp/**', 21, false)], 10, false) }, 11, false),
                                    dependencies: J$.T(12481, {
                                        src: J$.T(12473, [
                                            J$.T(12449, 'node_modules/**', 21, false),
                                            J$.T(12457, 'core/client/bower_components/**', 21, false),
                                            J$.T(12465, 'core/client/node_modules/**', 21, false)
                                        ], 10, false)
                                    }, 11, false)
                                }, 11, false),
                                compress: J$.T(12553, {
                                    release: J$.T(12545, {
                                        options: J$.T(12505, { archive: J$.T(12497, '<%= paths.releaseDist %>/Ghost-<%= pkg.version %>.zip', 21, false) }, 11, false),
                                        expand: J$.T(12513, true, 23, false),
                                        cwd: J$.T(12521, '<%= paths.releaseBuild %>/', 21, false),
                                        src: J$.T(12537, [J$.T(12529, '**', 21, false)], 10, false)
                                    }, 11, false)
                                }, 11, false),
                                update_submodules: J$.T(12585, { pinned: J$.T(12577, { options: J$.T(12569, { params: J$.T(12561, '--init', 21, false) }, 11, false) }, 11, false) }, 11, false),
                                uglify: J$.T(12633, {
                                    prod: J$.T(12625, {
                                        options: J$.T(12601, { sourceMap: J$.T(12593, false, 23, false) }, 11, false),
                                        files: J$.T(12617, { 'core/server/public/members.min.js': J$.T(12609, 'core/server/public/members.js', 21, false) }, 11, false)
                                    }, 11, false)
                                }, 11, false),
                                postcss: J$.T(12713, {
                                    prod: J$.T(12705, {
                                        options: J$.T(12681, { processors: J$.T(12673, [J$.F(12665, J$.F(12657, J$.I(typeof require === 'undefined' ? require = J$.R(12641, 'require', undefined, true, true) : require = J$.R(12641, 'require', require, true, true)), false)(J$.T(12649, 'cssnano', 21, false)), false)()], 10, false) }, 11, false),
                                        files: J$.T(12697, { 'core/server/public/ghost.min.css': J$.T(12689, 'core/server/public/ghost.css', 21, false) }, 11, false)
                                    }, 11, false)
                                }, 11, false),
                                subgrunt: J$.T(12889, {
                                    options: J$.T(12737, {
                                        npmInstall: J$.T(12721, false, 23, false),
                                        npmPath: J$.T(12729, 'yarn', 21, false)
                                    }, 11, false),
                                    init: J$.T(12777, {
                                        options: J$.T(12753, { npmInstall: J$.T(12745, true, 23, false) }, 11, false),
                                        projects: J$.T(12769, { 'core/client': J$.T(12761, 'init', 21, false) }, 11, false)
                                    }, 11, false),
                                    dev: J$.T(12793, { 'core/client': J$.T(12785, 'shell:ember:dev', 21, false) }, 11, false),
                                    prod: J$.T(12809, { 'core/client': J$.T(12801, 'shell:ember:prod', 21, false) }, 11, false),
                                    watch: J$.T(12881, {
                                        projects: J$.T(12873, {
                                            'core/client': J$.T(12865, [
                                                J$.T(12817, 'shell:ember:watch', 21, false),
                                                J$.B(650, '+', J$.B(642, '+', J$.T(12825, '--live-reload-base-url="', 21, false), J$.M(12849, J$.G(12841, J$.R(12833, 'urlService', urlService, false, true), 'utils'), 'getSubdir', false)()), J$.T(12857, '/ghost/"', 21, false))
                                            ], 10, false)
                                        }, 11, false)
                                    }, 11, false)
                                }, 11, false),
                                symlink: J$.T(12961, {
                                    githooks: J$.T(12953, {
                                        overwrite: J$.T(12897, false, 23, false),
                                        force: J$.T(12905, false, 23, false),
                                        expand: J$.T(12913, true, 23, false),
                                        cwd: J$.T(12921, '.github/hooks', 21, false),
                                        src: J$.T(12937, [J$.T(12929, '*', 21, false)], 10, false),
                                        dest: J$.T(12945, '.git/hooks', 21, false)
                                    }, 11, false)
                                }, 11, false)
                            }, 11, false), cfg, false, false);
                            J$.M(13001, J$.R(12985, 'grunt', grunt, false, false), 'initConfig', false)(J$.R(12993, 'cfg', cfg, false, false));
                            J$.M(13089, J$.R(13009, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(13017, 'help', 21, false), J$.T(13025, 'Outputs help information if you type `grunt help` instead of `grunt --help`', 21, false), J$.T(13081, function () {
                                jalangiLabel8:
                                    while (true) {
                                        try {
                                            J$.Fe(13065, arguments.callee, this, arguments);
                                            arguments = J$.N(13073, 'arguments', arguments, true, false, false);
                                            J$.M(13057, J$.G(13041, J$.R(13033, 'grunt', grunt, false, false), 'log'), 'writeln', false)(J$.T(13049, 'Type `grunt --help` to get the details of available grunt tasks.', 21, false));
                                        } catch (J$e) {
                                            J$.Ex(15857, J$e);
                                        } finally {
                                            if (J$.Fr(15865))
                                                continue jalangiLabel8;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            J$.M(13265, J$.R(13097, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(13105, 'setTestEnv', 21, false), J$.T(13113, 'Use "testing" Ghost config; unless we are running on travis (then show queries for debugging)', 21, false), J$.T(13257, function () {
                                jalangiLabel9:
                                    while (true) {
                                        try {
                                            J$.Fe(13241, arguments.callee, this, arguments);
                                            arguments = J$.N(13249, 'arguments', arguments, true, false, false);
                                            J$.P(13169, J$.G(13129, J$.I(typeof process === 'undefined' ? process = J$.R(13121, 'process', undefined, true, true) : process = J$.R(13121, 'process', process, true, true)), 'env'), 'NODE_ENV', J$.C(584, J$.G(13153, J$.G(13145, J$.I(typeof process === 'undefined' ? process = J$.R(13137, 'process', undefined, true, true) : process = J$.R(13137, 'process', process, true, true)), 'env'), 'NODE_ENV')) ? J$._() : J$.T(13161, 'testing', 21, false));
                                            J$.P(13233, J$.G(13201, J$.G(13193, J$.G(13185, J$.R(13177, 'cfg', cfg, false, false), 'express'), 'test'), 'options'), 'node_env', J$.G(13225, J$.G(13217, J$.I(typeof process === 'undefined' ? process = J$.R(13209, 'process', undefined, true, true) : process = J$.R(13209, 'process', process, true, true)), 'env'), 'NODE_ENV'));
                                        } catch (J$e) {
                                            J$.Ex(15873, J$e);
                                        } finally {
                                            if (J$.Fr(15881))
                                                continue jalangiLabel9;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            J$.M(13657, J$.R(13273, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(13281, 'test', 21, false), J$.T(13289, 'Run a particular spec file from the /test/ directory e.g. `grunt test:unit/apps_spec.js`', 21, false), J$.T(13649, function (test) {
                                jalangiLabel10:
                                    while (true) {
                                        try {
                                            J$.Fe(13625, arguments.callee, this, arguments);
                                            arguments = J$.N(13633, 'arguments', arguments, true, false, false);
                                            test = J$.N(13641, 'test', test, true, false, false);
                                            if (J$.C(592, J$.U(658, '!', J$.R(13297, 'test', test, false, false)))) {
                                                J$.M(13329, J$.G(13313, J$.R(13305, 'grunt', grunt, false, false), 'fail'), 'fatal', false)(J$.T(13321, 'No test provided. `grunt test` expects a filename. e.g.: `grunt test:unit/apps_spec.js`. Did you mean `npm test` or `grunt validate`?', 21, false));
                                            }
                                            if (J$.C(608, J$.C(600, J$.U(666, '!', J$.M(13353, J$.R(13337, 'test', test, false, false), 'match', false)(J$.T(13345, /test\//, 14, false)))) ? J$.U(674, '!', J$.M(13377, J$.R(13361, 'test', test, false, false), 'match', false)(J$.T(13369, /core\/server/, 14, false))) : J$._())) {
                                                test = J$.W(13401, 'test', J$.B(682, '+', J$.T(13385, 'test/', 21, false), J$.R(13393, 'test', test, false, false)), test, false, false);
                                            }
                                            if (J$.C(624, J$.U(690, '!', J$.M(13425, J$.R(13409, 'test', test, false, false), 'match', false)(J$.T(13417, /.js/, 14, false))))) {
                                                test = J$.W(13449, 'test', J$.B(698, '+', J$.R(13441, 'test', test, false, false), J$.T(13433, '/**', 21, false)), test, false, false);
                                            } else if (J$.C(616, J$.U(706, '!', J$.M(13473, J$.R(13457, 'fs', fs, false, true), 'existsSync', false)(J$.R(13465, 'test', test, false, false))))) {
                                                J$.M(13505, J$.G(13489, J$.R(13481, 'grunt', grunt, false, false), 'fail'), 'fatal', false)(J$.T(13497, 'This file does not exist!', 21, false));
                                            }
                                            J$.P(13553, J$.G(13529, J$.G(13521, J$.R(13513, 'cfg', cfg, false, false), 'mochacli'), 'single'), 'src', J$.T(13545, [J$.R(13537, 'test', test, false, false)], 10, false));
                                            J$.M(13577, J$.R(13561, 'grunt', grunt, false, false), 'initConfig', false)(J$.R(13569, 'cfg', cfg, false, false));
                                            J$.M(13617, J$.G(13593, J$.R(13585, 'grunt', grunt, false, false), 'task'), 'run', false)(J$.T(13601, 'test-setup', 21, false), J$.T(13609, 'mochacli:single', 21, false));
                                        } catch (J$e) {
                                            J$.Ex(15889, J$e);
                                        } finally {
                                            if (J$.Fr(15897))
                                                continue jalangiLabel10;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            J$.M(13849, J$.R(13665, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(13673, 'stubClientFiles', 21, false), J$.T(13841, function () {
                                jalangiLabel12:
                                    while (true) {
                                        try {
                                            J$.Fe(13825, arguments.callee, this, arguments);
                                            arguments = J$.N(13833, 'arguments', arguments, true, false, false);
                                            J$.M(13817, J$.R(13681, '_', _, false, true), 'each', false)(J$.G(13697, J$.R(13689, 'cfg', cfg, false, false), 'clientFiles'), J$.T(13809, function (file) {
                                                jalangiLabel11:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(13777, arguments.callee, this, arguments);
                                                            arguments = J$.N(13785, 'arguments', arguments, true, false, false);
                                                            file = J$.N(13793, 'file', file, true, false, false);
                                                            J$.N(13801, 'filePath', filePath, false, false, false);
                                                            const filePath = J$.W(13745, 'filePath', J$.M(13737, J$.R(13705, 'path', path, false, true), 'resolve', false)(J$.B(722, '+', J$.B(714, '+', J$.R(13713, 'cwd', cwd, false, true), J$.T(13721, '/core/', 21, false)), J$.R(13729, 'file', file, false, false))), filePath, false, false);
                                                            J$.M(13769, J$.R(13753, 'fs', fs, false, true), 'ensureFileSync', false)(J$.R(13761, 'filePath', filePath, false, false));
                                                        } catch (J$e) {
                                                            J$.Ex(15905, J$e);
                                                        } finally {
                                                            if (J$.Fr(15913))
                                                                continue jalangiLabel11;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false));
                                        } catch (J$e) {
                                            J$.Ex(15921, J$e);
                                        } finally {
                                            if (J$.Fr(15929))
                                                continue jalangiLabel12;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            J$.M(13937, J$.R(13857, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(13865, 'knex-migrator', 21, false), J$.T(13929, function () {
                                jalangiLabel13:
                                    while (true) {
                                        try {
                                            J$.Fe(13913, arguments.callee, this, arguments);
                                            arguments = J$.N(13921, 'arguments', arguments, true, false, false);
                                            return J$.Rt(13905, J$.M(13897, J$.R(13873, 'knexMigrator', knexMigrator, false, true), 'init', false)(J$.T(13889, { noScripts: J$.T(13881, true, 23, false) }, 11, false)));
                                        } catch (J$e) {
                                            J$.Ex(15937, J$e);
                                        } finally {
                                            if (J$.Fr(15945))
                                                continue jalangiLabel13;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            J$.M(14041, J$.R(13945, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(13953, 'validate', 21, false), J$.T(13961, 'Run tests', 21, false), J$.T(14033, function () {
                                jalangiLabel14:
                                    while (true) {
                                        try {
                                            J$.Fe(14017, arguments.callee, this, arguments);
                                            arguments = J$.N(14025, 'arguments', arguments, true, false, false);
                                            J$.M(14009, J$.G(13977, J$.R(13969, 'grunt', grunt, false, false), 'task'), 'run', false)(J$.T(14001, [
                                                J$.T(13985, 'test-acceptance', 21, false),
                                                J$.T(13993, 'test-unit', 21, false)
                                            ], 10, false));
                                        } catch (J$e) {
                                            J$.Ex(15953, J$e);
                                        } finally {
                                            if (J$.Fr(15961))
                                                continue jalangiLabel14;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            J$.M(14105, J$.R(14049, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14057, 'test-all', 21, false), J$.T(14065, 'Run all server tests', 21, false), J$.T(14097, [
                                J$.T(14073, 'test-acceptance', 21, false),
                                J$.T(14081, 'test-unit', 21, false),
                                J$.T(14089, 'test-regression', 21, false)
                            ], 10, false));
                            J$.M(14153, J$.R(14113, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14121, 'lint', 21, false), J$.T(14129, 'Run the code style checks for server & tests', 21, false), J$.T(14145, [J$.T(14137, 'shell:lint', 21, false)], 10, false));
                            J$.M(14225, J$.R(14161, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14169, 'test-setup', 21, false), J$.T(14177, 'Setup ready to run tests', 21, false), J$.T(14217, [
                                J$.T(14185, 'knex-migrator', 21, false),
                                J$.T(14193, 'clean:test', 21, false),
                                J$.T(14201, 'setTestEnv', 21, false),
                                J$.T(14209, 'stubClientFiles', 21, false)
                            ], 10, false));
                            J$.M(14281, J$.R(14233, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14241, 'test-unit', 21, false), J$.T(14249, 'Run unit tests (mocha)', 21, false), J$.T(14273, [
                                J$.T(14257, 'test-setup', 21, false),
                                J$.T(14265, 'mochacli:unit', 21, false)
                            ], 10, false));
                            J$.M(14337, J$.R(14289, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14297, 'test-regression', 21, false), J$.T(14305, 'Run regression tests.', 21, false), J$.T(14329, [
                                J$.T(14313, 'test-setup', 21, false),
                                J$.T(14321, 'mochacli:regression', 21, false)
                            ], 10, false));
                            J$.M(14393, J$.R(14345, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14353, 'test-acceptance', 21, false), J$.T(14361, 'Run acceptance tests', 21, false), J$.T(14385, [
                                J$.T(14369, 'test-setup', 21, false),
                                J$.T(14377, 'mochacli:acceptance', 21, false)
                            ], 10, false));
                            J$.M(14465, J$.R(14401, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14409, 'init', 21, false), J$.T(14417, 'Prepare the project for development', 21, false), J$.T(14457, [
                                J$.T(14425, 'update_submodules:pinned', 21, false),
                                J$.T(14433, 'subgrunt:init', 21, false),
                                J$.T(14441, 'clean:tmp', 21, false),
                                J$.T(14449, 'default', 21, false)
                            ], 10, false));
                            J$.M(14529, J$.R(14473, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14481, 'build', 21, false), J$.T(14489, 'Build client app', 21, false), J$.T(14521, [
                                J$.T(14497, 'subgrunt:init', 21, false),
                                J$.T(14505, 'clean:tmp', 21, false),
                                J$.T(14513, 'default', 21, false)
                            ], 10, false));
                            J$.M(14577, J$.R(14537, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14545, 'default', 21, false), J$.T(14553, 'Build JS & templates for development', 21, false), J$.T(14569, [J$.T(14561, 'subgrunt:dev', 21, false)], 10, false));
                            J$.M(14641, J$.R(14585, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14593, 'prod', 21, false), J$.T(14601, 'Build JS & templates for production', 21, false), J$.T(14633, [
                                J$.T(14609, 'subgrunt:prod', 21, false),
                                J$.T(14617, 'uglify:prod', 21, false),
                                J$.T(14625, 'postcss:prod', 21, false)
                            ], 10, false));
                            J$.M(14905, J$.R(14649, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14657, 'dev', 21, false), J$.T(14665, 'Dev Mode; watch files and restart server on changes', 21, false), J$.T(14897, function () {
                                jalangiLabel15:
                                    while (true) {
                                        try {
                                            J$.Fe(14881, arguments.callee, this, arguments);
                                            arguments = J$.N(14889, 'arguments', arguments, true, false, false);
                                            if (J$.C(640, J$.M(14689, J$.R(14673, 'grunt', grunt, false, false), 'option', false)(J$.T(14681, 'client', 21, false)))) {
                                                J$.M(14737, J$.G(14705, J$.R(14697, 'grunt', grunt, false, false), 'task'), 'run', false)(J$.T(14729, [
                                                    J$.T(14713, 'clean:built', 21, false),
                                                    J$.T(14721, 'bgShell:client', 21, false)
                                                ], 10, false));
                                            } else if (J$.C(632, J$.M(14761, J$.R(14745, 'grunt', grunt, false, false), 'option', false)(J$.T(14753, 'server', 21, false)))) {
                                                J$.M(14809, J$.G(14777, J$.R(14769, 'grunt', grunt, false, false), 'task'), 'run', false)(J$.T(14801, [
                                                    J$.T(14785, 'express:dev', 21, false),
                                                    J$.T(14793, 'watch', 21, false)
                                                ], 10, false));
                                            } else {
                                                J$.M(14873, J$.G(14825, J$.R(14817, 'grunt', grunt, false, false), 'task'), 'run', false)(J$.T(14865, [
                                                    J$.T(14833, 'clean:built', 21, false),
                                                    J$.T(14841, 'bgShell:client', 21, false),
                                                    J$.T(14849, 'express:dev', 21, false),
                                                    J$.T(14857, 'watch', 21, false)
                                                ], 10, false));
                                            }
                                        } catch (J$e) {
                                            J$.Ex(15969, J$e);
                                        } finally {
                                            if (J$.Fr(15977))
                                                continue jalangiLabel15;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            J$.M(14961, J$.R(14913, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14921, 'master', 21, false), J$.T(14929, 'Update your current working folder to latest master.', 21, false), J$.T(14953, [
                                J$.T(14937, 'shell:master', 21, false),
                                J$.T(14945, 'subgrunt:init', 21, false)
                            ], 10, false));
                            J$.M(15529, J$.R(14969, 'grunt', grunt, false, false), 'registerTask', false)(J$.T(14977, 'release', 21, false), J$.B(754, '+', J$.B(746, '+', J$.B(738, '+', J$.B(730, '+', J$.T(14985, 'Release task - creates a final built zip\n', 21, false), J$.T(14993, ' - Do our standard build steps \n', 21, false)), J$.T(15001, ' - Copy files to release-folder/#/#{version} directory\n', 21, false)), J$.T(15009, ' - Clean out unnecessary files (travis, .git*, etc)\n', 21, false)), J$.T(15017, ' - Zip files in release-folder to dist-folder/#{version} directory', 21, false)), J$.T(15521, function () {
                                jalangiLabel17:
                                    while (true) {
                                        try {
                                            J$.Fe(15505, arguments.callee, this, arguments);
                                            arguments = J$.N(15513, 'arguments', arguments, true, false, false);
                                            J$.M(15257, J$.G(15033, J$.R(15025, 'grunt', grunt, false, false), 'config'), 'set', false)(J$.T(15041, 'copy.release', 21, false), J$.T(15249, {
                                                expand: J$.T(15049, true, 23, false),
                                                src: J$.M(15233, J$.M(15113, J$.M(15097, J$.M(15081, J$.R(15057, 'fs', fs, false, true), 'readFileSync', false)(J$.T(15065, '.npmignore', 21, false), J$.T(15073, 'utf8', 21, false)), 'split', false)(J$.T(15089, '\n', 21, false)), 'filter', false)(J$.I(typeof Boolean === 'undefined' ? Boolean = J$.R(15105, 'Boolean', undefined, true, true) : Boolean = J$.R(15105, 'Boolean', Boolean, true, true))), 'map', false)(J$.T(15225, function (pattern) {
                                                    jalangiLabel16:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(15201, arguments.callee, this, arguments);
                                                                arguments = J$.N(15209, 'arguments', arguments, true, false, false);
                                                                pattern = J$.N(15217, 'pattern', pattern, true, false, false);
                                                                return J$.Rt(15193, J$.C(648, J$.B(762, '===', J$.G(15137, J$.R(15121, 'pattern', pattern, false, false), J$.T(15129, 0, 22, false)), J$.T(15145, '!', 21, false))) ? J$.M(15169, J$.R(15153, 'pattern', pattern, false, false), 'substr', false)(J$.T(15161, 1, 22, false)) : J$.B(770, '+', J$.T(15177, '!', 21, false), J$.R(15185, 'pattern', pattern, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(15985, J$e);
                                                            } finally {
                                                                if (J$.Fr(15993))
                                                                    continue jalangiLabel16;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false)),
                                                dest: J$.T(15241, '<%= paths.releaseBuild %>/', 21, false)
                                            }, 11, false));
                                            J$.M(15337, J$.G(15273, J$.R(15265, 'grunt', grunt, false, false), 'config'), 'set', false)(J$.T(15281, 'copy.admin_html', 21, false), J$.T(15329, {
                                                files: J$.T(15321, [J$.T(15313, {
                                                        cwd: J$.T(15289, '.', 21, false),
                                                        src: J$.T(15297, 'core/server/web/admin/views/default-prod.html', 21, false),
                                                        dest: J$.T(15305, 'core/server/web/admin/views/default.html', 21, false)
                                                    }, 11, false)], 10, false)
                                            }, 11, false));
                                            J$.M(15497, J$.M(15481, J$.M(15465, J$.M(15449, J$.M(15433, J$.M(15417, J$.M(15401, J$.M(15385, J$.M(15369, J$.G(15353, J$.R(15345, 'grunt', grunt, false, false), 'task'), 'run', false)(J$.T(15361, 'update_submodules:pinned', 21, false)), 'run', false)(J$.T(15377, 'subgrunt:init', 21, false)), 'run', false)(J$.T(15393, 'clean:built', 21, false)), 'run', false)(J$.T(15409, 'clean:tmp', 21, false)), 'run', false)(J$.T(15425, 'prod', 21, false)), 'run', false)(J$.T(15441, 'clean:release', 21, false)), 'run', false)(J$.T(15457, 'copy:admin_html', 21, false)), 'run', false)(J$.T(15473, 'copy:release', 21, false)), 'run', false)(J$.T(15489, 'compress:release', 21, false));
                                        } catch (J$e) {
                                            J$.Ex(16001, J$e);
                                        } finally {
                                            if (J$.Fr(16009))
                                                continue jalangiLabel17;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(16017, J$e);
                        } finally {
                            if (J$.Fr(16025))
                                continue jalangiLabel18;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), configureGrunt, false, true);
            J$.P(15601, J$.I(typeof module === 'undefined' ? module = J$.R(15585, 'module', undefined, true, true) : module = J$.R(15585, 'module', module, true, true)), 'exports', J$.R(15593, 'configureGrunt', configureGrunt, false, true));
        } catch (J$e) {
            J$.Ex(16033, J$e);
        } finally {
            if (J$.Sr(16041))
                continue jalangiLabel19;
            else
                break jalangiLabel19;
        }
    }
// JALANGI DO NOT INSTRUMENT

