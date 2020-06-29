J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(903721, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/published_date.js');
            function getPublishedDate(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(903665, arguments.callee, this, arguments);
                            arguments = J$.N(903673, 'arguments', arguments, true, false, false);
                            data = J$.N(903681, 'data', data, true, false, false);
                            J$.N(903689, 'context', context, false, false, false);
                            let context = J$.W(903481, 'context', J$.C(68096, J$.G(903433, J$.R(903425, 'data', data, false, false), 'context')) ? J$.G(903465, J$.G(903449, J$.R(903441, 'data', data, false, false), 'context'), J$.T(903457, 0, 22, false)) : J$.T(903473, null, 25, false), context, false, false);
                            context = J$.W(903521, 'context', J$.C(68104, J$.B(89266, '===', J$.R(903489, 'context', context, false, false), J$.T(903497, 'amp', 21, false))) ? J$.T(903505, 'post', 21, false) : J$.R(903513, 'context', context, false, false), context, false, false);
                            if (J$.C(68120, J$.C(68112, J$.G(903545, J$.R(903529, 'data', data, false, false), J$.R(903537, 'context', context, false, false))) ? J$.G(903577, J$.G(903569, J$.R(903553, 'data', data, false, false), J$.R(903561, 'context', context, false, false)), 'published_at') : J$._())) {
                                return J$.Rt(903641, J$.M(903633, J$.F(903625, J$.I(typeof Date === 'undefined' ? Date = J$.R(903585, 'Date', undefined, true, true) : Date = J$.R(903585, 'Date', Date, true, true)), true)(J$.G(903617, J$.G(903609, J$.R(903593, 'data', data, false, false), J$.R(903601, 'context', context, false, false)), 'published_at')), 'toISOString', false)());
                            }
                            return J$.Rt(903657, J$.T(903649, null, 25, false));
                        } catch (J$e) {
                            J$.Ex(903745, J$e);
                        } finally {
                            if (J$.Fr(903753))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            getPublishedDate = J$.N(903737, 'getPublishedDate', J$.T(903729, getPublishedDate, 12, false), true, false, false);
            J$.P(903713, J$.I(typeof module === 'undefined' ? module = J$.R(903697, 'module', undefined, true, true) : module = J$.R(903697, 'module', module, true, true)), 'exports', J$.R(903705, 'getPublishedDate', getPublishedDate, false, true));
        } catch (J$e) {
            J$.Ex(903761, J$e);
        } finally {
            if (J$.Sr(903769))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

