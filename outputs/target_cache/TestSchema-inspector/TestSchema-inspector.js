J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(3771585, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestSchema-inspector/TestSchema-inspector.js');
            function test(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(3771465, arguments.callee, this, arguments);
                            arguments = J$.N(3771473, 'arguments', arguments, true, false, false);
                            data = J$.N(3771481, 'data', data, true, false, false);
                            J$.N(3771489, 'sanitization', sanitization, false, false, false);
                            J$.N(3771497, 'validation', validation, false, false, false);
                            J$.N(3771505, 'result', result, false, false, false);
                            var sanitization = J$.W(3771193, 'sanitization', J$.T(3771185, {
                                type: J$.T(3770985, 'object', 21, false),
                                properties: J$.T(3771177, {
                                    firstname: J$.T(3771025, {
                                        type: J$.T(3770993, 'string', 21, false),
                                        rules: J$.T(3771017, [
                                            J$.T(3771001, 'trim', 21, false),
                                            J$.T(3771009, 'title', 21, false)
                                        ], 10, false)
                                    }, 11, false),
                                    lastname: J$.T(3771065, {
                                        type: J$.T(3771033, 'string', 21, false),
                                        rules: J$.T(3771057, [
                                            J$.T(3771041, 'trim', 21, false),
                                            J$.T(3771049, 'title', 21, false)
                                        ], 10, false)
                                    }, 11, false),
                                    jobs: J$.T(3771129, {
                                        type: J$.T(3771073, 'array', 21, false),
                                        splitWith: J$.T(3771081, ',', 21, false),
                                        items: J$.T(3771121, {
                                            type: J$.T(3771089, 'string', 21, false),
                                            rules: J$.T(3771113, [
                                                J$.T(3771097, 'trim', 21, false),
                                                J$.T(3771105, 'title', 21, false)
                                            ], 10, false)
                                        }, 11, false)
                                    }, 11, false),
                                    email: J$.T(3771169, {
                                        type: J$.T(3771137, 'string', 21, false),
                                        rules: J$.T(3771161, [
                                            J$.T(3771145, 'trim', 21, false),
                                            J$.T(3771153, 'lower', 21, false)
                                        ], 10, false)
                                    }, 11, false)
                                }, 11, false)
                            }, 11, false), sanitization, false, false);
                            J$.M(3771225, J$.R(3771201, 'inspector', inspector, false, true), 'sanitize', false)(J$.R(3771209, 'sanitization', sanitization, false, false), J$.R(3771217, 'data', data, false, false));
                            var validation = J$.W(3771369, 'validation', J$.T(3771361, {
                                type: J$.T(3771233, 'object', 21, false),
                                properties: J$.T(3771353, {
                                    firstname: J$.T(3771257, {
                                        type: J$.T(3771241, 'string', 21, false),
                                        minLength: J$.T(3771249, 1, 22, false)
                                    }, 11, false),
                                    lastname: J$.T(3771281, {
                                        type: J$.T(3771265, 'string', 21, false),
                                        minLength: J$.T(3771273, 1, 22, false)
                                    }, 11, false),
                                    jobs: J$.T(3771321, {
                                        type: J$.T(3771289, 'array', 21, false),
                                        items: J$.T(3771313, {
                                            type: J$.T(3771297, 'string', 21, false),
                                            minLength: J$.T(3771305, 1, 22, false)
                                        }, 11, false)
                                    }, 11, false),
                                    email: J$.T(3771345, {
                                        type: J$.T(3771329, 'string', 21, false),
                                        pattern: J$.T(3771337, 'email', 21, false)
                                    }, 11, false)
                                }, 11, false)
                            }, 11, false), validation, false, false);
                            var result = J$.W(3771409, 'result', J$.M(3771401, J$.R(3771377, 'inspector', inspector, false, true), 'validate', false)(J$.R(3771385, 'validation', validation, false, false), J$.R(3771393, 'data', data, false, false)), result, false, false);
                            if (J$.C(202192, J$.U(375986, '!', J$.G(3771425, J$.R(3771417, 'result', result, false, false), 'valid'))))
                                J$.M(3771457, J$.I(typeof console === 'undefined' ? console = J$.R(3771433, 'console', undefined, true, true) : console = J$.R(3771433, 'console', console, true, true)), 'log', false)(J$.M(3771449, J$.R(3771441, 'result', result, false, false), 'format', false)());
                        } catch (J$e) {
                            J$.Ex(3771633, J$e);
                        } finally {
                            if (J$.Fr(3771641))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3771593, 'inspector', inspector, false, false, false);
            J$.N(3771601, 'data', data, false, false, false);
            test = J$.N(3771617, 'test', J$.T(3771609, test, 12, false), true, false, false);
            J$.N(3771625, 'utils', utils, false, false, false);
            var inspector = J$.W(3770929, 'inspector', J$.F(3770921, J$.I(typeof require === 'undefined' ? require = J$.R(3770905, 'require', undefined, true, true) : require = J$.R(3770905, 'require', require, true, true)), false)(J$.T(3770913, 'schema-inspector', 21, false)), inspector, false, true);
            var data = J$.W(3770977, 'data', J$.T(3770969, {
                firstname: J$.T(3770937, 'sterling  ', 21, false),
                lastname: J$.T(3770945, '  archer', 21, false),
                jobs: J$.T(3770953, 'Special agent, cocaine Dealer', 21, false),
                email: J$.T(3770961, 'NEVER!', 21, false)
            }, 11, false), data, false, true);
            var utils = J$.W(3771537, 'utils', J$.F(3771529, J$.I(typeof require === 'undefined' ? require = J$.R(3771513, 'require', undefined, true, true) : require = J$.R(3771513, 'require', require, true, true)), false)(J$.T(3771521, '../TestcaseUtils', 21, false)), utils, false, true);
            J$.M(3771577, J$.R(3771545, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(3771553, 'test', test, false, true), J$.R(3771561, 'data', data, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3771569, '__dirname', undefined, true, true) : __dirname = J$.R(3771569, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(3771649, J$e);
        } finally {
            if (J$.Sr(3771657))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

