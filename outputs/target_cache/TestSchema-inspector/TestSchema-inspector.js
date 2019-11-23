J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(3841601, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestSchema-inspector/TestSchema-inspector.js');
            function test(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(3841481, arguments.callee, this, arguments);
                            arguments = J$.N(3841489, 'arguments', arguments, true, false, false);
                            data = J$.N(3841497, 'data', data, true, false, false);
                            J$.N(3841505, 'sanitization', sanitization, false, false, false);
                            J$.N(3841513, 'validation', validation, false, false, false);
                            J$.N(3841521, 'result', result, false, false, false);
                            var sanitization = J$.W(3841209, 'sanitization', J$.T(3841201, {
                                type: J$.T(3841001, 'object', 21, false),
                                properties: J$.T(3841193, {
                                    firstname: J$.T(3841041, {
                                        type: J$.T(3841009, 'string', 21, false),
                                        rules: J$.T(3841033, [
                                            J$.T(3841017, 'trim', 21, false),
                                            J$.T(3841025, 'title', 21, false)
                                        ], 10, false)
                                    }, 11, false),
                                    lastname: J$.T(3841081, {
                                        type: J$.T(3841049, 'string', 21, false),
                                        rules: J$.T(3841073, [
                                            J$.T(3841057, 'trim', 21, false),
                                            J$.T(3841065, 'title', 21, false)
                                        ], 10, false)
                                    }, 11, false),
                                    jobs: J$.T(3841145, {
                                        type: J$.T(3841089, 'array', 21, false),
                                        splitWith: J$.T(3841097, ',', 21, false),
                                        items: J$.T(3841137, {
                                            type: J$.T(3841105, 'string', 21, false),
                                            rules: J$.T(3841129, [
                                                J$.T(3841113, 'trim', 21, false),
                                                J$.T(3841121, 'title', 21, false)
                                            ], 10, false)
                                        }, 11, false)
                                    }, 11, false),
                                    email: J$.T(3841185, {
                                        type: J$.T(3841153, 'string', 21, false),
                                        rules: J$.T(3841177, [
                                            J$.T(3841161, 'trim', 21, false),
                                            J$.T(3841169, 'lower', 21, false)
                                        ], 10, false)
                                    }, 11, false)
                                }, 11, false)
                            }, 11, false), sanitization, false, false);
                            J$.M(3841241, J$.R(3841217, 'inspector', inspector, false, true), 'sanitize', false)(J$.R(3841225, 'sanitization', sanitization, false, false), J$.R(3841233, 'data', data, false, false));
                            var validation = J$.W(3841385, 'validation', J$.T(3841377, {
                                type: J$.T(3841249, 'object', 21, false),
                                properties: J$.T(3841369, {
                                    firstname: J$.T(3841273, {
                                        type: J$.T(3841257, 'string', 21, false),
                                        minLength: J$.T(3841265, 1, 22, false)
                                    }, 11, false),
                                    lastname: J$.T(3841297, {
                                        type: J$.T(3841281, 'string', 21, false),
                                        minLength: J$.T(3841289, 1, 22, false)
                                    }, 11, false),
                                    jobs: J$.T(3841337, {
                                        type: J$.T(3841305, 'array', 21, false),
                                        items: J$.T(3841329, {
                                            type: J$.T(3841313, 'string', 21, false),
                                            minLength: J$.T(3841321, 1, 22, false)
                                        }, 11, false)
                                    }, 11, false),
                                    email: J$.T(3841361, {
                                        type: J$.T(3841345, 'string', 21, false),
                                        pattern: J$.T(3841353, 'email', 21, false)
                                    }, 11, false)
                                }, 11, false)
                            }, 11, false), validation, false, false);
                            var result = J$.W(3841425, 'result', J$.M(3841417, J$.R(3841393, 'inspector', inspector, false, true), 'validate', false)(J$.R(3841401, 'validation', validation, false, false), J$.R(3841409, 'data', data, false, false)), result, false, false);
                            if (J$.C(204144, J$.U(379474, '!', J$.G(3841441, J$.R(3841433, 'result', result, false, false), 'valid'))))
                                J$.M(3841473, J$.I(typeof console === 'undefined' ? console = J$.R(3841449, 'console', undefined, true, true) : console = J$.R(3841449, 'console', console, true, true)), 'log', false)(J$.M(3841465, J$.R(3841457, 'result', result, false, false), 'format', false)());
                        } catch (J$e) {
                            J$.Ex(3841649, J$e);
                        } finally {
                            if (J$.Fr(3841657))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3841609, 'inspector', inspector, false, false, false);
            J$.N(3841617, 'data', data, false, false, false);
            test = J$.N(3841633, 'test', J$.T(3841625, test, 12, false), true, false, false);
            J$.N(3841641, 'utils', utils, false, false, false);
            var inspector = J$.W(3840945, 'inspector', J$.F(3840937, J$.I(typeof require === 'undefined' ? require = J$.R(3840921, 'require', undefined, true, true) : require = J$.R(3840921, 'require', require, true, true)), false)(J$.T(3840929, 'schema-inspector', 21, false)), inspector, false, true);
            var data = J$.W(3840993, 'data', J$.T(3840985, {
                firstname: J$.T(3840953, 'sterling  ', 21, false),
                lastname: J$.T(3840961, '  archer', 21, false),
                jobs: J$.T(3840969, 'Special agent, cocaine Dealer', 21, false),
                email: J$.T(3840977, 'NEVER!', 21, false)
            }, 11, false), data, false, true);
            var utils = J$.W(3841553, 'utils', J$.F(3841545, J$.I(typeof require === 'undefined' ? require = J$.R(3841529, 'require', undefined, true, true) : require = J$.R(3841529, 'require', require, true, true)), false)(J$.T(3841537, '../TestcaseUtils', 21, false)), utils, false, true);
            J$.M(3841593, J$.R(3841561, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(3841569, 'test', test, false, true), J$.R(3841577, 'data', data, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3841585, '__dirname', undefined, true, true) : __dirname = J$.R(3841585, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(3841665, J$e);
        } finally {
            if (J$.Sr(3841673))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

