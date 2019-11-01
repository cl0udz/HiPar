J$.noInstrEval = false;
jalangiLabel4:
    while (true) {
        try {
            J$.Se(873, '../target_tmp/TestMongoParse.js');
            function g(x) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(129, arguments.callee, this, arguments);
                            arguments = J$.N(137, 'arguments', arguments, true, false, false);
                            x = J$.N(145, 'x', x, true, false, false);
                            J$.M(121, J$.I(typeof console === 'undefined' ? console = J$.R(105, 'console', undefined, true, true) : console = J$.R(105, 'console', console, true, true)), 'log', false)(J$.T(113, 'Myfct', 21, false));
                        } catch (J$e) {
                            J$.Ex(937, J$e);
                        } finally {
                            if (J$.Fr(945))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function source(source_var, level, catagory) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(833, arguments.callee, this, arguments);
                            arguments = J$.N(841, 'arguments', arguments, true, false, false);
                            source_var = J$.N(849, 'source_var', source_var, true, false, false);
                            level = J$.N(857, 'level', level, true, false, false);
                            catagory = J$.N(865, 'catagory', catagory, true, false, false);
                            return J$.Rt(825, J$.R(817, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(985, J$e);
                        } finally {
                            if (J$.Fr(993))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(881, 'attackUtils', attackUtils, false, false, false);
            J$.N(889, 'parser', parser, false, false, false);
            g = J$.N(905, 'g', J$.T(897, g, 12, false), true, false, false);
            J$.N(913, 'query', query, false, false, false);
            source = J$.N(929, 'source', J$.T(921, source, 12, false), true, false, false);
            var attackUtils = J$.W(33, 'attackUtils', J$.F(25, J$.I(typeof require === 'undefined' ? require = J$.R(9, 'require', undefined, true, true) : require = J$.R(9, 'require', require, true, true)), false)(J$.T(17, './AttackUtils.js', 21, false)), attackUtils, false, true);
            J$.M(49, J$.R(41, 'attackUtils', attackUtils, false, true), 'setup', false)();
            HIGH_LEVEL = J$.W(65, 'HIGH_LEVEL', J$.T(57, 2, 22, false), J$.I(typeof HIGH_LEVEL === 'undefined' ? undefined : HIGH_LEVEL), true, true);
            var parser = J$.W(97, 'parser', J$.F(89, J$.I(typeof require === 'undefined' ? require = J$.R(73, 'require', undefined, true, true) : require = J$.R(73, 'require', require, true, true)), false)(J$.T(81, 'mongo-parse', 21, false)), parser, false, true);
            g = J$.W(193, 'g', J$.F(185, J$.R(153, 'source', source, false, true), false)(J$.R(161, 'g', g, false, true), J$.I(typeof HIGH_LEVEL === 'undefined' ? HIGH_LEVEL = J$.R(169, 'HIGH_LEVEL', undefined, true, true) : HIGH_LEVEL = J$.R(169, 'HIGH_LEVEL', HIGH_LEVEL, true, true)), J$.T(177, 'module-interface', 21, false)), g, false, true);
            var query = J$.W(225, 'query', J$.M(217, J$.R(201, 'parser', parser, false, true), 'parse', false)(J$.R(209, 'g', g, false, true)), query, false, true);
            var query = J$.W(289, 'query', J$.M(281, J$.R(233, 'parser', parser, false, true), 'parse', false)(J$.F(273, J$.R(241, 'source', source, false, true), false)(J$.T(249, 23, 22, false), J$.I(typeof HIGH_LEVEL === 'undefined' ? HIGH_LEVEL = J$.R(257, 'HIGH_LEVEL', undefined, true, true) : HIGH_LEVEL = J$.R(257, 'HIGH_LEVEL', HIGH_LEVEL, true, true)), J$.T(265, 'module-interface', 21, false))), query, false, true);
            J$.M(809, J$.R(297, 'attackUtils', attackUtils, false, true), 'deliverPayloads', false)(J$.G(313, J$.R(305, 'attackUtils', attackUtils, false, true), 'payloadsEval'), J$.T(481, function (payload) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(449, arguments.callee, this, arguments);
                            arguments = J$.N(457, 'arguments', arguments, true, false, false);
                            payload = J$.N(465, 'payload', payload, true, false, false);
                            J$.N(473, 'query', query, false, false, false);
                            payload = J$.W(361, 'payload', J$.F(353, J$.R(321, 'source', source, false, true), false)(J$.R(329, 'payload', payload, false, false), J$.I(typeof HIGH_LEVEL === 'undefined' ? HIGH_LEVEL = J$.R(337, 'HIGH_LEVEL', undefined, true, true) : HIGH_LEVEL = J$.R(337, 'HIGH_LEVEL', HIGH_LEVEL, true, true)), J$.T(345, 'module-interface', 21, false)), payload, false, false);
                            J$.M(393, J$.I(typeof console === 'undefined' ? console = J$.R(369, 'console', undefined, true, true) : console = J$.R(369, 'console', console, true, true)), 'log', false)(J$.B(10, '+', J$.T(377, 'Here I am + payload: ', 21, false), J$.R(385, 'payload', payload, false, false)));
                            var query = J$.W(441, 'query', J$.M(433, J$.R(401, 'parser', parser, false, true), 'parse', false)(J$.B(26, '+', J$.B(18, '+', J$.T(409, '}); ', 21, false), J$.R(417, 'payload', payload, false, false)), J$.T(425, '//', 21, false))), query, false, false);
                        } catch (J$e) {
                            J$.Ex(953, J$e);
                        } finally {
                            if (J$.Fr(961))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), J$.T(801, function (result, filesWithSinks) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(753, arguments.callee, this, arguments);
                            arguments = J$.N(761, 'arguments', arguments, true, false, false);
                            result = J$.N(769, 'result', result, true, false, false);
                            filesWithSinks = J$.N(777, 'filesWithSinks', filesWithSinks, true, false, false);
                            J$.N(785, 'benignInput', benignInput, false, false, false);
                            J$.N(793, 'query', query, false, false, false);
                            var benignInput = J$.W(497, 'benignInput', J$.T(489, '{ myQueryField: x}', 21, false), benignInput, false, false);
                            benignInput = J$.W(545, 'benignInput', J$.F(537, J$.R(505, 'source', source, false, true), false)(J$.R(513, 'benignInput', benignInput, false, false), J$.I(typeof HIGH_LEVEL === 'undefined' ? HIGH_LEVEL = J$.R(521, 'HIGH_LEVEL', undefined, true, true) : HIGH_LEVEL = J$.R(521, 'HIGH_LEVEL', HIGH_LEVEL, true, true)), J$.T(529, 'module-interface', 21, false)), benignInput, false, false);
                            J$.M(577, J$.I(typeof console === 'undefined' ? console = J$.R(553, 'console', undefined, true, true) : console = J$.R(553, 'console', console, true, true)), 'log', false)(J$.B(42, '+', J$.T(561, 'typeof : ', 21, false), J$.U(34, 'typeof', J$.R(569, 'benignInput', benignInput, false, false))));
                            if (J$.C(16, J$.C(8, J$.M(601, J$.R(585, 'benignInput', benignInput, false, false), 'hasOwnProperty', false)(J$.T(593, 'tainted', 21, false))) ? J$.B(50, '==', J$.G(617, J$.R(609, 'benignInput', benignInput, false, false), 'tainted'), J$.T(625, true, 23, false)) : J$._()))
                                J$.M(649, J$.I(typeof console === 'undefined' ? console = J$.R(633, 'console', undefined, true, true) : console = J$.R(633, 'console', console, true, true)), 'log', false)(J$.T(641, 'It works.', 21, false));
                            var query = J$.W(681, 'query', J$.M(673, J$.R(657, 'parser', parser, false, true), 'parse', false)(J$.R(665, 'benignInput', benignInput, false, false)), query, false, false);
                            J$.M(697, J$.R(689, 'attackUtils', attackUtils, false, true), 'printCallStrings', false)();
                            result = J$.W(745, 'result', J$.B(66, '+', J$.R(737, 'result', result, false, false), J$.B(58, '+', J$.T(705, ' ', 21, false), J$.M(729, J$.R(713, 'attackUtils', attackUtils, false, true), 'observedString', false)(J$.R(721, 'benignInput', benignInput, false, false)))), result, false, false);
                        } catch (J$e) {
                            J$.Ex(969, J$e);
                        } finally {
                            if (J$.Fr(977))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(1001, J$e);
        } finally {
            if (J$.Sr(1009))
                continue jalangiLabel4;
            else
                break jalangiLabel4;
        }
    }
// JALANGI DO NOT INSTRUMENT

