J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(3643105, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestJs-yaml/TestJs-yaml.js');
            function test(object) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(3643017, arguments.callee, this, arguments);
                            arguments = J$.N(3643025, 'arguments', arguments, true, false, false);
                            object = J$.N(3643033, 'object', object, true, false, false);
                            J$.M(3643009, J$.R(3642953, 'yaml', yaml, false, true), 'safeDump', false)(J$.R(3642961, 'object', object, false, false), J$.T(3643001, {
                                flowLevel: J$.T(3642969, 3, 22, false),
                                styles: J$.T(3642993, {
                                    '!!int': J$.T(3642977, 'hexadecimal', 21, false),
                                    '!!null': J$.T(3642985, 'camelcase', 21, false)
                                }, 11, false)
                            }, 11, false));
                        } catch (J$e) {
                            J$.Ex(3643153, J$e);
                        } finally {
                            if (J$.Fr(3643161))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3643113, 'yaml', yaml, false, false, false);
            J$.N(3643121, 'input', input, false, false, false);
            test = J$.N(3643137, 'test', J$.T(3643129, test, 12, false), true, false, false);
            J$.N(3643145, 'utils', utils, false, false, false);
            var yaml = J$.W(3642753, 'yaml', J$.F(3642745, J$.I(typeof require === 'undefined' ? require = J$.R(3642729, 'require', undefined, true, true) : require = J$.R(3642729, 'require', require, true, true)), false)(J$.T(3642737, 'js-yaml', 21, false)), yaml, false, true);
            var input = J$.W(3642945, 'input', J$.T(3642937, {
                name: J$.T(3642761, 'Wizzard', 21, false),
                level: J$.T(3642769, 17, 22, false),
                sanity: J$.T(3642777, null, 25, false),
                inventory: J$.T(3642929, [
                    J$.T(3642825, {
                        name: J$.T(3642785, 'Hat', 21, false),
                        features: J$.T(3642809, [
                            J$.T(3642793, 'magic', 21, false),
                            J$.T(3642801, 'pointed', 21, false)
                        ], 10, false),
                        traits: J$.T(3642817, {}, 11, false)
                    }, 11, false),
                    J$.T(3642865, {
                        name: J$.T(3642833, 'Staff', 21, false),
                        features: J$.T(3642841, [], 10, false),
                        traits: J$.T(3642857, { 'damage': J$.T(3642849, 10, 22, false) }, 11, false)
                    }, 11, false),
                    J$.T(3642921, {
                        name: J$.T(3642873, 'Cloak', 21, false),
                        features: J$.T(3642889, [J$.T(3642881, 'old', 21, false)], 10, false),
                        traits: J$.T(3642913, {
                            'defence': J$.T(3642897, 0, 22, false),
                            'comfort': J$.T(3642905, 3, 22, false)
                        }, 11, false)
                    }, 11, false)
                ], 10, false)
            }, 11, false), input, false, true);
            var utils = J$.W(3643065, 'utils', J$.F(3643057, J$.I(typeof require === 'undefined' ? require = J$.R(3643041, 'require', undefined, true, true) : require = J$.R(3643041, 'require', require, true, true)), false)(J$.T(3643049, '../TestcaseUtils.js', 21, false)), utils, false, true);
            J$.M(3643097, J$.R(3643073, 'utils', utils, false, true), 'entry', false)(J$.R(3643081, 'test', test, false, true), J$.R(3643089, 'input', input, false, true));
        } catch (J$e) {
            J$.Ex(3643169, J$e);
        } finally {
            if (J$.Sr(3643177))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

