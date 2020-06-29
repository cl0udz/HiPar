J$.noInstrEval = false;
jalangiLabel0:
    while (true) {
        try {
            J$.Se(890321, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/helpers/index.js');
            J$.N(890329, 'glob', glob, false, false, false);
            J$.N(890337, 'path', path, false, false, false);
            J$.N(890345, 'helpers', helpers, false, false, false);
            J$.N(890353, 'helperFiles', helperFiles, false, false, false);
            J$.N(890361, 'name', name, false, false, false);
            const glob = J$.W(890057, 'glob', J$.F(890049, J$.I(typeof require === 'undefined' ? require = J$.R(890033, 'require', undefined, true, true) : require = J$.R(890033, 'require', require, true, true)), false)(J$.T(890041, 'glob', 21, false)), glob, false, true);
            const path = J$.W(890089, 'path', J$.F(890081, J$.I(typeof require === 'undefined' ? require = J$.R(890065, 'require', undefined, true, true) : require = J$.R(890065, 'require', require, true, true)), false)(J$.T(890073, 'path', 21, false)), path, false, true);
            const helpers = J$.W(890105, 'helpers', J$.T(890097, {}, 11, false), helpers, false, true);
            let helperFiles = J$.W(890153, 'helperFiles', J$.M(890145, J$.R(890113, 'glob', glob, false, true), 'sync', false)(J$.T(890121, '!(index).js', 21, false), J$.T(890137, { cwd: J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(890129, '__dirname', undefined, true, true) : __dirname = J$.R(890129, '__dirname', __dirname, true, true)) }, 11, false)), helperFiles, false, true);
            J$.M(890289, J$.R(890161, 'helperFiles', helperFiles, false, true), 'forEach', false)((J$.I(typeof helper === 'undefined' ? helper = J$.R(890169, 'helper', undefined, true, true) : helper = J$.R(890169, 'helper', helper, true, true))) => {
                let name = J$.W(890209, 'name', J$.M(890201, J$.I(typeof helper === 'undefined' ? helper = J$.R(890177, 'helper', undefined, true, true) : helper = J$.R(890177, 'helper', helper, true, true)), 'replace', false)(J$.T(890185, /.js$/, 14, false), J$.T(890193, '', 21, false)), name, false, true);
                J$.P(890281, J$.R(890217, 'helpers', helpers, false, true), J$.R(890225, 'name', name, false, true), J$.F(890273, J$.I(typeof require === 'undefined' ? require = J$.R(890233, 'require', undefined, true, true) : require = J$.R(890233, 'require', require, true, true)), false)(J$.M(890265, J$.R(890241, 'path', path, false, true), 'join', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(890249, '__dirname', undefined, true, true) : __dirname = J$.R(890249, '__dirname', __dirname, true, true)), J$.I(typeof helper === 'undefined' ? helper = J$.R(890257, 'helper', undefined, true, true) : helper = J$.R(890257, 'helper', helper, true, true)))));
            });
            J$.P(890313, J$.I(typeof module === 'undefined' ? module = J$.R(890297, 'module', undefined, true, true) : module = J$.R(890297, 'module', module, true, true)), 'exports', J$.R(890305, 'helpers', helpers, false, true));
        } catch (J$e) {
            J$.Ex(890369, J$e);
        } finally {
            if (J$.Sr(890377))
                continue jalangiLabel0;
            else
                break jalangiLabel0;
        }
    }
// JALANGI DO NOT INSTRUMENT

