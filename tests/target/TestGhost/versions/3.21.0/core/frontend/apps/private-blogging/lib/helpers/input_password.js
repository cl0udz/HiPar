J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(889137, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/apps/private-blogging/lib/helpers/input_password.js');
            J$.N(889145, 'proxy', proxy, false, false, false);
            J$.N(889153, 'SafeString', SafeString, false, false, false);
            J$.N(889161, 'templates', templates, false, false, false);
            const proxy = J$.W(888705, 'proxy', J$.F(888697, J$.I(typeof require === 'undefined' ? require = J$.R(888681, 'require', undefined, true, true) : require = J$.R(888681, 'require', require, true, true)), false)(J$.T(888689, '../../../../services/proxy', 21, false)), proxy, false, true);
            const SafeString = J$.W(888729, 'SafeString', J$.G(888721, J$.R(888713, 'proxy', proxy, false, true), 'SafeString'), SafeString, false, true);
            const templates = J$.W(888753, 'templates', J$.G(888745, J$.R(888737, 'proxy', proxy, false, true), 'templates'), templates, false, true);
            J$.P(889129, J$.I(typeof module === 'undefined' ? module = J$.R(888761, 'module', undefined, true, true) : module = J$.R(888761, 'module', module, true, true)), 'exports', J$.T(889121, function input_password(options) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(889073, arguments.callee, this, arguments);
                            arguments = J$.N(889081, 'arguments', arguments, true, false, false);
                            options = J$.N(889089, 'options', options, true, false, false);
                            J$.N(889097, 'className', className, false, false, false);
                            J$.N(889105, 'extras', extras, false, false, false);
                            J$.N(889113, 'output', output, false, false, false);
                            options = J$.W(888785, 'options', J$.C(66800, J$.R(888769, 'options', options, false, false)) ? J$._() : J$.T(888777, {}, 11, false), options, false, false);
                            J$.P(888825, J$.R(888793, 'options', options, false, false), 'hash', J$.C(66808, J$.G(888809, J$.R(888801, 'options', options, false, false), 'hash')) ? J$._() : J$.T(888817, {}, 11, false));
                            const className = J$.W(888889, 'className', J$.C(66816, J$.G(888849, J$.G(888841, J$.R(888833, 'options', options, false, false), 'hash'), 'class')) ? J$.G(888873, J$.G(888865, J$.R(888857, 'options', options, false, false), 'hash'), 'class') : J$.T(888881, 'private-login-password', 21, false), className, false, false);
                            let extras = J$.W(888905, 'extras', J$.T(888897, 'autofocus="autofocus"', 21, false), extras, false, false);
                            if (J$.C(66824, J$.G(888929, J$.G(888921, J$.R(888913, 'options', options, false, false), 'hash'), 'placeholder'))) {
                                extras = J$.W(888969, 'extras', J$.B(89106, '+', J$.R(888961, 'extras', extras, false, false), ` placeholder="${ J$.G(888953, J$.G(888945, J$.R(888937, 'options', options, false, false), 'hash'), 'placeholder') }"`), extras, false, false);
                            }
                            const output = J$.W(889033, 'output', J$.M(889025, J$.R(888977, 'templates', templates, false, true), 'input', false)(J$.T(889017, {
                                type: J$.T(888985, 'password', 21, false),
                                name: J$.T(888993, 'password', 21, false),
                                className,
                                extras
                            }, 11, false)), output, false, false);
                            return J$.Rt(889065, J$.F(889057, J$.R(889041, 'SafeString', SafeString, false, true), true)(J$.R(889049, 'output', output, false, false)));
                        } catch (J$e) {
                            J$.Ex(889169, J$e);
                        } finally {
                            if (J$.Fr(889177))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(889185, J$e);
        } finally {
            if (J$.Sr(889193))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

