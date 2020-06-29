J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(888473, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/apps/amp/lib/helpers/index.js');
            function registerAmpHelpers(ghost) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(888425, arguments.callee, this, arguments);
                            arguments = J$.N(888433, 'arguments', arguments, true, false, false);
                            ghost = J$.N(888441, 'ghost', ghost, true, false, false);
                            J$.M(888321, J$.G(888281, J$.R(888273, 'ghost', ghost, false, false), 'helpers'), 'registerAsync', false)(J$.T(888289, 'amp_content', 21, false), J$.F(888313, J$.I(typeof require === 'undefined' ? require = J$.R(888297, 'require', undefined, true, true) : require = J$.R(888297, 'require', require, true, true)), false)(J$.T(888305, './amp_content', 21, false)));
                            J$.M(888377, J$.G(888337, J$.R(888329, 'ghost', ghost, false, false), 'helpers'), 'register', false)(J$.T(888345, 'amp_components', 21, false), J$.F(888369, J$.I(typeof require === 'undefined' ? require = J$.R(888353, 'require', undefined, true, true) : require = J$.R(888353, 'require', require, true, true)), false)(J$.T(888361, './amp_components', 21, false)));
                            J$.M(888417, J$.G(888393, J$.R(888385, 'ghost', ghost, false, false), 'helpers'), 'registerAsync', false)(J$.T(888401, 'amp_ghost_head', 21, false), J$.R(888409, 'ghostHead', ghostHead, false, true));
                        } catch (J$e) {
                            J$.Ex(888505, J$e);
                        } finally {
                            if (J$.Fr(888513))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(888481, 'ghostHead', ghostHead, false, false, false);
            registerAmpHelpers = J$.N(888497, 'registerAmpHelpers', J$.T(888489, registerAmpHelpers, 12, false), true, false, false);
            const ghostHead = J$.W(888265, 'ghostHead', J$.F(888257, J$.I(typeof require === 'undefined' ? require = J$.R(888241, 'require', undefined, true, true) : require = J$.R(888241, 'require', require, true, true)), false)(J$.T(888249, '../../../../helpers/ghost_head', 21, false)), ghostHead, false, true);
            J$.P(888465, J$.I(typeof module === 'undefined' ? module = J$.R(888449, 'module', undefined, true, true) : module = J$.R(888449, 'module', module, true, true)), 'exports', J$.R(888457, 'registerAmpHelpers', registerAmpHelpers, false, true));
        } catch (J$e) {
            J$.Ex(888521, J$e);
        } finally {
            if (J$.Sr(888529))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

