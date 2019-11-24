J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(7445521, '/home/james/nodejs/HiPar/outputs/target_cache/TestSchema-inspector/TestSchema-inspector.js');
            function test(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(7445473, arguments.callee, this, arguments);
                            arguments = J$.N(7445481, 'arguments', arguments, true, false, false);
                            data = J$.N(7445489, 'data', data, true, false, false);
                            J$.N(7445497, 'sanitization', sanitization, false, false, false);
                            J$.N(7445505, 'validation', validation, false, false, false);
                            J$.N(7445513, 'result', result, false, false, false);
                            var sanitization = J$.W(7445201, 'sanitization', J$.T(7445193, {
                                type: J$.T(7444993, 'object', 21, false),
                                properties: J$.T(7445185, {
                                    firstname: J$.T(7445033, {
                                        type: J$.T(7445001, 'string', 21, false),
                                        rules: J$.T(7445025, [
                                            J$.T(7445009, 'trim', 21, false),
                                            J$.T(7445017, 'title', 21, false)
                                        ], 10, false)
                                    }, 11, false),
                                    lastname: J$.T(7445073, {
                                        type: J$.T(7445041, 'string', 21, false),
                                        rules: J$.T(7445065, [
                                            J$.T(7445049, 'trim', 21, false),
                                            J$.T(7445057, 'title', 21, false)
                                        ], 10, false)
                                    }, 11, false),
                                    jobs: J$.T(7445137, {
                                        type: J$.T(7445081, 'array', 21, false),
                                        splitWith: J$.T(7445089, ',', 21, false),
                                        items: J$.T(7445129, {
                                            type: J$.T(7445097, 'string', 21, false),
                                            rules: J$.T(7445121, [
                                                J$.T(7445105, 'trim', 21, false),
                                                J$.T(7445113, 'title', 21, false)
                                            ], 10, false)
                                        }, 11, false)
                                    }, 11, false),
                                    email: J$.T(7445177, {
                                        type: J$.T(7445145, 'string', 21, false),
                                        rules: J$.T(7445169, [
                                            J$.T(7445153, 'trim', 21, false),
                                            J$.T(7445161, 'lower', 21, false)
                                        ], 10, false)
                                    }, 11, false)
                                }, 11, false)
                            }, 11, false), sanitization, false, false);
                            J$.M(7445233, J$.R(7445209, 'inspector', inspector, false, true), 'sanitize', false)(J$.R(7445217, 'sanitization', sanitization, false, false), J$.R(7445225, 'data', data, false, false));
                            var validation = J$.W(7445377, 'validation', J$.T(7445369, {
                                type: J$.T(7445241, 'object', 21, false),
                                properties: J$.T(7445361, {
                                    firstname: J$.T(7445265, {
                                        type: J$.T(7445249, 'string', 21, false),
                                        minLength: J$.T(7445257, 1, 22, false)
                                    }, 11, false),
                                    lastname: J$.T(7445289, {
                                        type: J$.T(7445273, 'string', 21, false),
                                        minLength: J$.T(7445281, 1, 22, false)
                                    }, 11, false),
                                    jobs: J$.T(7445329, {
                                        type: J$.T(7445297, 'array', 21, false),
                                        items: J$.T(7445321, {
                                            type: J$.T(7445305, 'string', 21, false),
                                            minLength: J$.T(7445313, 1, 22, false)
                                        }, 11, false)
                                    }, 11, false),
                                    email: J$.T(7445353, {
                                        type: J$.T(7445337, 'string', 21, false),
                                        pattern: J$.T(7445345, 'email', 21, false)
                                    }, 11, false)
                                }, 11, false)
                            }, 11, false), validation, false, false);
                            var result = J$.W(7445417, 'result', J$.M(7445409, J$.R(7445385, 'inspector', inspector, false, true), 'validate', false)(J$.R(7445393, 'validation', validation, false, false), J$.R(7445401, 'data', data, false, false)), result, false, false);
                            if (J$.C(394600, J$.U(717002, '!', J$.G(7445433, J$.R(7445425, 'result', result, false, false), 'valid'))))
                                J$.M(7445465, J$.I(typeof console === 'undefined' ? console = J$.R(7445441, 'console', undefined, true, true) : console = J$.R(7445441, 'console', console, true, true)), 'log', false)(J$.M(7445457, J$.R(7445449, 'result', result, false, false), 'format', false)());
                        } catch (J$e) {
                            J$.Ex(7445561, J$e);
                        } finally {
                            if (J$.Fr(7445569))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(7445529, 'inspector', inspector, false, false, false);
            J$.N(7445537, 'data', data, false, false, false);
            test = J$.N(7445553, 'test', J$.T(7445545, test, 12, false), true, false, false);
            var inspector = J$.W(7444897, 'inspector', J$.F(7444889, J$.I(typeof require === 'undefined' ? require = J$.R(7444873, 'require', undefined, true, true) : require = J$.R(7444873, 'require', require, true, true)), false)(J$.T(7444881, 'schema-inspector', 21, false)), inspector, false, true);
            var data = J$.W(7444961, 'data', J$.T(7444953, {
                firstname: J$.T(7444905, 'sterling  ', 21, false),
                lastname: J$.T(7444913, '  archer', 21, false),
                jobs: J$.T(7444937, {
                    'name': J$.T(7444921, 'Special agent, cocaine Dealer', 21, false),
                    'hasOwnProperty': J$.T(7444929, 'jb', 21, false)
                }, 11, false),
                email: J$.T(7444945, 'NEVER!', 21, false)
            }, 11, false), data, false, true);
            J$.F(7444985, J$.R(7444969, 'test', test, false, true), false)(J$.R(7444977, 'data', data, false, true));
        } catch (J$e) {
            J$.Ex(7445577, J$e);
        } finally {
            if (J$.Sr(7445585))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

