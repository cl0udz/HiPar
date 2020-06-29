J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(902409, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/og_type.js');
            function getOgType(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(902353, arguments.callee, this, arguments);
                            arguments = J$.N(902361, 'arguments', arguments, true, false, false);
                            data = J$.N(902369, 'data', data, true, false, false);
                            J$.N(902377, 'context', context, false, false, false);
                            let context = J$.W(902225, 'context', J$.C(67968, J$.G(902177, J$.R(902169, 'data', data, false, false), 'context')) ? J$.G(902209, J$.G(902193, J$.R(902185, 'data', data, false, false), 'context'), J$.T(902201, 0, 22, false)) : J$.T(902217, null, 25, false), context, false, false);
                            context = J$.W(902265, 'context', J$.C(67976, J$.B(89178, '===', J$.R(902233, 'context', context, false, false), J$.T(902241, 'amp', 21, false))) ? J$.T(902249, 'post', 21, false) : J$.R(902257, 'context', context, false, false), context, false, false);
                            if (J$.C(67984, J$.B(89186, '===', J$.R(902273, 'context', context, false, false), J$.T(902281, 'author', 21, false)))) {
                                return J$.Rt(902297, J$.T(902289, 'profile', 21, false));
                            }
                            if (J$.C(67992, J$.B(89194, '===', J$.R(902305, 'context', context, false, false), J$.T(902313, 'post', 21, false)))) {
                                return J$.Rt(902329, J$.T(902321, 'article', 21, false));
                            }
                            return J$.Rt(902345, J$.T(902337, 'website', 21, false));
                        } catch (J$e) {
                            J$.Ex(902433, J$e);
                        } finally {
                            if (J$.Fr(902441))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            getOgType = J$.N(902425, 'getOgType', J$.T(902417, getOgType, 12, false), true, false, false);
            J$.P(902401, J$.I(typeof module === 'undefined' ? module = J$.R(902385, 'module', undefined, true, true) : module = J$.R(902385, 'module', module, true, true)), 'exports', J$.R(902393, 'getOgType', getOgType, false, true));
        } catch (J$e) {
            J$.Ex(902449, J$e);
        } finally {
            if (J$.Sr(902457))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

