J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(2837849, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestSchema-inspector/TestSchema-inspector.js');
            function test(data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(2837801, arguments.callee, this, arguments);
                            arguments = J$.N(2837809, 'arguments', arguments, true, false, false);
                            data = J$.N(2837817, 'data', data, true, false, false);
                            J$.N(2837825, 'sanitization', sanitization, false, false, false);
                            J$.N(2837833, 'validation', validation, false, false, false);
                            J$.N(2837841, 'result', result, false, false, false);
                            var sanitization = J$.W(2837529, 'sanitization', J$.T(2837521, {
                                type: J$.T(2837321, 'object', 21, false),
                                properties: J$.T(2837513, {
                                    firstname: J$.T(2837361, {
                                        type: J$.T(2837329, 'string', 21, false),
                                        rules: J$.T(2837353, [
                                            J$.T(2837337, 'trim', 21, false),
                                            J$.T(2837345, 'title', 21, false)
                                        ], 10, false)
                                    }, 11, false),
                                    lastname: J$.T(2837401, {
                                        type: J$.T(2837369, 'string', 21, false),
                                        rules: J$.T(2837393, [
                                            J$.T(2837377, 'trim', 21, false),
                                            J$.T(2837385, 'title', 21, false)
                                        ], 10, false)
                                    }, 11, false),
                                    jobs: J$.T(2837465, {
                                        type: J$.T(2837409, 'array', 21, false),
                                        splitWith: J$.T(2837417, ',', 21, false),
                                        items: J$.T(2837457, {
                                            type: J$.T(2837425, 'string', 21, false),
                                            rules: J$.T(2837449, [
                                                J$.T(2837433, 'trim', 21, false),
                                                J$.T(2837441, 'title', 21, false)
                                            ], 10, false)
                                        }, 11, false)
                                    }, 11, false),
                                    email: J$.T(2837505, {
                                        type: J$.T(2837473, 'string', 21, false),
                                        rules: J$.T(2837497, [
                                            J$.T(2837481, 'trim', 21, false),
                                            J$.T(2837489, 'lower', 21, false)
                                        ], 10, false)
                                    }, 11, false)
                                }, 11, false)
                            }, 11, false), sanitization, false, false);
                            J$.M(2837561, J$.R(2837537, 'inspector', inspector, false, true), 'sanitize', false)(J$.R(2837545, 'sanitization', sanitization, false, false), J$.R(2837553, 'data', data, false, false));
                            var validation = J$.W(2837705, 'validation', J$.T(2837697, {
                                type: J$.T(2837569, 'object', 21, false),
                                properties: J$.T(2837689, {
                                    firstname: J$.T(2837593, {
                                        type: J$.T(2837577, 'string', 21, false),
                                        minLength: J$.T(2837585, 1, 22, false)
                                    }, 11, false),
                                    lastname: J$.T(2837617, {
                                        type: J$.T(2837601, 'string', 21, false),
                                        minLength: J$.T(2837609, 1, 22, false)
                                    }, 11, false),
                                    jobs: J$.T(2837657, {
                                        type: J$.T(2837625, 'array', 21, false),
                                        items: J$.T(2837649, {
                                            type: J$.T(2837633, 'string', 21, false),
                                            minLength: J$.T(2837641, 1, 22, false)
                                        }, 11, false)
                                    }, 11, false),
                                    email: J$.T(2837681, {
                                        type: J$.T(2837665, 'string', 21, false),
                                        pattern: J$.T(2837673, 'email', 21, false)
                                    }, 11, false)
                                }, 11, false)
                            }, 11, false), validation, false, false);
                            var result = J$.W(2837745, 'result', J$.M(2837737, J$.R(2837713, 'inspector', inspector, false, true), 'validate', false)(J$.R(2837721, 'validation', validation, false, false), J$.R(2837729, 'data', data, false, false)), result, false, false);
                            if (J$.C(145080, J$.U(202146, '!', J$.G(2837761, J$.R(2837753, 'result', result, false, false), 'valid'))))
                                J$.M(2837793, J$.I(typeof console === 'undefined' ? console = J$.R(2837769, 'console', undefined, true, true) : console = J$.R(2837769, 'console', console, true, true)), 'log', false)(J$.M(2837785, J$.R(2837777, 'result', result, false, false), 'format', false)());
                        } catch (J$e) {
                            J$.Ex(2837889, J$e);
                        } finally {
                            if (J$.Fr(2837897))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(2837857, 'inspector', inspector, false, false, false);
            J$.N(2837865, 'data', data, false, false, false);
            test = J$.N(2837881, 'test', J$.T(2837873, test, 12, false), true, false, false);
            var inspector = J$.W(2837225, 'inspector', J$.F(2837217, J$.I(typeof require === 'undefined' ? require = J$.R(2837201, 'require', undefined, true, true) : require = J$.R(2837201, 'require', require, true, true)), false)(J$.T(2837209, 'schema-inspector', 21, false)), inspector, false, true);
            var data = J$.W(2837289, 'data', J$.T(2837281, {
                firstname: J$.T(2837233, 'sterling  ', 21, false),
                lastname: J$.T(2837241, '  archer', 21, false),
                jobs: J$.T(2837265, {
                    'name': J$.T(2837249, 'Special agent, cocaine Dealer', 21, false),
                    'hasOwnProperty': J$.T(2837257, 'jb', 21, false)
                }, 11, false),
                email: J$.T(2837273, 'NEVER!', 21, false)
            }, 11, false), data, false, true);
            J$.F(2837313, J$.R(2837297, 'test', test, false, true), false)(J$.R(2837305, 'data', data, false, true));
        } catch (J$e) {
            J$.Ex(2837905, J$e);
        } finally {
            if (J$.Sr(2837913))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

