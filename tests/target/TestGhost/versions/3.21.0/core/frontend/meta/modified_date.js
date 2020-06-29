J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(901113, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/modified_date.js');
            function getModifiedDate(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(901049, arguments.callee, this, arguments);
                            arguments = J$.N(901057, 'arguments', arguments, true, false, false);
                            data = J$.N(901065, 'data', data, true, false, false);
                            J$.N(901073, 'context', context, false, false, false);
                            J$.N(901081, 'modDate', modDate, false, false, false);
                            let context = J$.W(900849, 'context', J$.C(67808, J$.G(900817, J$.R(900809, 'data', data, false, false), 'context')) ? J$.G(900833, J$.R(900825, 'data', data, false, false), 'context') : J$.T(900841, null, 25, false), context, false, false);
                            let modDate;
                            context = J$.W(900905, 'context', J$.C(67816, J$.M(900881, J$.R(900857, '_', _, false, true), 'includes', false)(J$.R(900865, 'context', context, false, false), J$.T(900873, 'amp', 21, false))) ? J$.T(900889, 'post', 21, false) : J$.R(900897, 'context', context, false, false), context, false, false);
                            if (J$.C(67840, J$.G(900929, J$.R(900913, 'data', data, false, false), J$.R(900921, 'context', context, false, false)))) {
                                modDate = J$.W(900977, 'modDate', J$.C(67824, J$.G(900961, J$.G(900953, J$.R(900937, 'data', data, false, false), J$.R(900945, 'context', context, false, false)), 'updated_at')) ? J$._() : J$.T(900969, null, 25, false), modDate, false, false);
                                if (J$.C(67832, J$.R(900985, 'modDate', modDate, false, false))) {
                                    return J$.Rt(901025, J$.M(901017, J$.F(901009, J$.I(typeof Date === 'undefined' ? Date = J$.R(900993, 'Date', undefined, true, true) : Date = J$.R(900993, 'Date', Date, true, true)), true)(J$.R(901001, 'modDate', modDate, false, false)), 'toISOString', false)());
                                }
                            }
                            return J$.Rt(901041, J$.T(901033, null, 25, false));
                        } catch (J$e) {
                            J$.Ex(901145, J$e);
                        } finally {
                            if (J$.Fr(901153))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(901121, '_', _, false, false, false);
            getModifiedDate = J$.N(901137, 'getModifiedDate', J$.T(901129, getModifiedDate, 12, false), true, false, false);
            const _ = J$.W(900801, '_', J$.F(900793, J$.I(typeof require === 'undefined' ? require = J$.R(900777, 'require', undefined, true, true) : require = J$.R(900777, 'require', require, true, true)), false)(J$.T(900785, 'lodash', 21, false)), _, false, true);
            J$.P(901105, J$.I(typeof module === 'undefined' ? module = J$.R(901089, 'module', undefined, true, true) : module = J$.R(901089, 'module', module, true, true)), 'exports', J$.R(901097, 'getModifiedDate', getModifiedDate, false, true));
        } catch (J$e) {
            J$.Ex(901161, J$e);
        } finally {
            if (J$.Sr(901169))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

