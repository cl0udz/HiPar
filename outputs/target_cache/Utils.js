J$.noInstrEval = false;
jalangiLabel4:
    while (true) {
        try {
            J$.Se(1713, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/Utils.js');
            function loopProperty(testFunc, param) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(905, arguments.callee, this, arguments);
                            arguments = J$.N(913, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(921, 'testFunc', testFunc, true, false, false);
                            param = J$.N(929, 'param', param, true, false, false);
                            J$.N(937, 'properties', properties, false, false, false);
                            J$.N(945, 'property', property, false, false, false);
                            J$.N(953, 'tmp', tmp, false, false, false);
                            J$.N(961, 'varName', varName, false, false, false);
                            var properties = J$.W(409, 'properties', J$.M(401, J$.I(typeof Object === 'undefined' ? Object = J$.R(385, 'Object', undefined, true, true) : Object = J$.R(385, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.R(393, 'param', param, false, false)), properties, false, false);
                            J$.M(441, J$.I(typeof console === 'undefined' ? console = J$.R(417, 'console', undefined, true, true) : console = J$.R(417, 'console', console, true, true)), 'log', false)(J$.T(425, 'properties: ', 21, false), J$.R(433, 'properties', properties, false, false));
                            J$.M(481, J$.I(typeof console === 'undefined' ? console = J$.R(449, 'console', undefined, true, true) : console = J$.R(449, 'console', console, true, true)), 'log', false)(J$.M(473, J$.R(457, 'tynt', tynt, false, true), 'Green', false)(J$.T(465, '[-]Running test with purely untainted param', 21, false)));
                            J$.F(505, J$.R(489, 'testFunc', testFunc, false, false), false)(J$.R(497, 'param', param, false, false));
                            J$.M(529, J$.R(513, 'traceCmp', traceCmp, false, true), 'log_trace_and_cmp', false)(J$.U(10, '-', J$.T(521, 1, 22, false)));
                            for (var property of J$.R(537, 'properties', properties, false, false)) {
                                J$.M(585, J$.I(typeof console === 'undefined' ? console = J$.R(545, 'console', undefined, true, true) : console = J$.R(545, 'console', console, true, true)), 'log', false)(J$.M(577, J$.R(553, 'tynt', tynt, false, true), 'Green', false)(J$.B(18, '+', J$.T(561, '[-]Running test with tainted property: ', 21, false), J$.R(569, 'property', property, false, false))));
                                var tmp = J$.W(617, 'tmp', J$.F(609, J$.R(593, 'clone', clone, false, true), false)(J$.R(601, 'param', param, false, false)), tmp, false, false);
                                J$.P(689, J$.R(625, 'tmp', tmp, false, false), J$.R(633, 'property', property, false, false), J$.F(681, J$.R(641, 'source', source, false, true), false)(J$.G(665, J$.R(649, 'tmp', tmp, false, false), J$.R(657, 'property', property, false, false)), J$.R(673, 'property', property, false, false)));
                                J$.F(713, J$.R(697, 'testFunc', testFunc, false, false), false)(J$.R(705, 'tmp', tmp, false, false));
                                J$.M(737, J$.R(721, 'traceCmp', traceCmp, false, true), 'log_trace_and_cmp', false)(J$.R(729, 'property', property, false, false));
                            }
                            var varName = J$.W(769, 'varName', J$.F(761, J$.R(745, 'varToString', varToString, false, true), false)(J$.R(753, 'param', param, false, false)), varName, false, false);
                            param = J$.W(809, 'param', J$.F(801, J$.R(777, 'source', source, false, true), false)(J$.R(785, 'param', param, false, false), J$.R(793, 'varName', varName, false, false)), param, false, false);
                            J$.M(849, J$.I(typeof console === 'undefined' ? console = J$.R(817, 'console', undefined, true, true) : console = J$.R(817, 'console', console, true, true)), 'log', false)(J$.M(841, J$.R(825, 'tynt', tynt, false, true), 'Green', false)(J$.T(833, '[-]Running test with param tainted in root', 21, false)));
                            J$.F(873, J$.R(857, 'testFunc', testFunc, false, false), false)(J$.R(865, 'param', param, false, false));
                            J$.M(897, J$.R(881, 'traceCmp', traceCmp, false, true), 'log_trace_and_cmp', false)(J$.R(889, 'varName', varName, false, false));
                        } catch (J$e) {
                            J$.Ex(1809, J$e);
                        } finally {
                            if (J$.Fr(1817))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function source(source_var) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(985, arguments.callee, this, arguments);
                            arguments = J$.N(993, 'arguments', arguments, true, false, false);
                            source_var = J$.N(1001, 'source_var', source_var, true, false, false);
                            return J$.Rt(977, J$.R(969, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(1825, J$e);
                        } finally {
                            if (J$.Fr(1833))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function clone(obj) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(1513, arguments.callee, this, arguments);
                            arguments = J$.N(1521, 'arguments', arguments, true, false, false);
                            obj = J$.N(1529, 'obj', obj, true, false, false);
                            J$.N(1537, 'copy', copy, false, false, false);
                            J$.N(1545, 'i', i, false, false, false);
                            J$.N(1553, 'len', len, false, false, false);
                            J$.N(1561, 'attr', attr, false, false, false);
                            if (J$.C(16, J$.C(8, J$.B(26, '==', J$.T(1009, null, 25, false), J$.R(1017, 'obj', obj, false, false))) ? J$._() : J$.B(42, '!=', J$.T(1025, 'object', 21, false), J$.U(34, 'typeof', J$.R(1033, 'obj', obj, false, false)))))
                                return J$.Rt(1049, J$.R(1041, 'obj', obj, false, false));
                            if (J$.C(24, J$.B(50, 'instanceof', J$.R(1057, 'obj', obj, false, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(1065, 'Date', undefined, true, true) : Date = J$.R(1065, 'Date', Date, true, true))))) {
                                var copy = J$.W(1089, 'copy', J$.F(1081, J$.I(typeof Date === 'undefined' ? Date = J$.R(1073, 'Date', undefined, true, true) : Date = J$.R(1073, 'Date', Date, true, true)), true)(), copy, false, false);
                                J$.M(1121, J$.R(1097, 'copy', copy, false, false), 'setTime', false)(J$.M(1113, J$.R(1105, 'obj', obj, false, false), 'getTime', false)());
                                return J$.Rt(1137, J$.R(1129, 'copy', copy, false, false));
                            }
                            if (J$.C(40, J$.B(58, 'instanceof', J$.R(1145, 'obj', obj, false, false), J$.I(typeof Array === 'undefined' ? Array = J$.R(1153, 'Array', undefined, true, true) : Array = J$.R(1153, 'Array', Array, true, true))))) {
                                var copy = J$.W(1169, 'copy', J$.T(1161, [], 10, false), copy, false, false);
                                for (var i = J$.W(1201, 'i', J$.T(1177, 0, 22, false), i, false, false), len = J$.W(1209, 'len', J$.G(1193, J$.R(1185, 'obj', obj, false, false), 'length'), len, false, false); J$.C(32, J$.B(66, '<', J$.R(1217, 'i', i, false, false), J$.R(1225, 'len', len, false, false))); i = J$.W(1241, 'i', J$.B(82, '+', J$.U(74, '+', J$.R(1233, 'i', i, false, false)), 1), i, false, false)) {
                                    J$.P(1305, J$.R(1249, 'copy', copy, false, false), J$.R(1257, 'i', i, false, false), J$.F(1297, J$.R(1265, 'clone', clone, false, true), false)(J$.G(1289, J$.R(1273, 'obj', obj, false, false), J$.R(1281, 'i', i, false, false))));
                                }
                                return J$.Rt(1321, J$.R(1313, 'copy', copy, false, false));
                            }
                            if (J$.C(56, J$.B(90, 'instanceof', J$.R(1329, 'obj', obj, false, false), J$.I(typeof Object === 'undefined' ? Object = J$.R(1337, 'Object', undefined, true, true) : Object = J$.R(1337, 'Object', Object, true, true))))) {
                                var copy = J$.W(1353, 'copy', J$.T(1345, {}, 11, false), copy, false, false);
                                for (var attr in J$.H(1457, J$.R(1361, 'obj', obj, false, false))) {
                                    J$.N(1465, 'attr', attr, false, true, false);
                                    {
                                        {
                                            if (J$.C(48, J$.M(1385, J$.R(1369, 'obj', obj, false, false), 'hasOwnProperty', false)(J$.R(1377, 'attr', attr, false, false))))
                                                J$.P(1449, J$.R(1393, 'copy', copy, false, false), J$.R(1401, 'attr', attr, false, false), J$.F(1441, J$.R(1409, 'clone', clone, false, true), false)(J$.G(1433, J$.R(1417, 'obj', obj, false, false), J$.R(1425, 'attr', attr, false, false))));
                                        }
                                    }
                                }
                                return J$.Rt(1481, J$.R(1473, 'copy', copy, false, false));
                            }
                            throw J$.F(1505, J$.I(typeof Error === 'undefined' ? Error = J$.R(1489, 'Error', undefined, true, true) : Error = J$.R(1489, 'Error', Error, true, true)), true)(J$.T(1497, 'Unable to copy obj! Its type isn\'t supported.', 21, false));
                        } catch (J$e) {
                            J$.Ex(1841, J$e);
                        } finally {
                            if (J$.Fr(1849))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function varToString(varObj) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(1617, arguments.callee, this, arguments);
                            arguments = J$.N(1625, 'arguments', arguments, true, false, false);
                            varObj = J$.N(1633, 'varObj', varObj, true, false, false);
                            return J$.Rt(1609, J$.G(1601, J$.M(1585, J$.I(typeof Object === 'undefined' ? Object = J$.R(1569, 'Object', undefined, true, true) : Object = J$.R(1569, 'Object', Object, true, true)), 'keys', false)(J$.R(1577, 'varObj', varObj, false, false)), J$.T(1593, 0, 22, false)));
                        } catch (J$e) {
                            J$.Ex(1857, J$e);
                        } finally {
                            if (J$.Fr(1865))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(1721, 'path', path, false, false, false);
            J$.N(1729, 'tynt', tynt, false, false, false);
            J$.N(1737, 'traceCmp', traceCmp, false, false, false);
            loopProperty = J$.N(1753, 'loopProperty', J$.T(1745, loopProperty, 12, false), true, false, false);
            source = J$.N(1769, 'source', J$.T(1761, source, 12, false), true, false, false);
            clone = J$.N(1785, 'clone', J$.T(1777, clone, 12, false), true, false, false);
            varToString = J$.N(1801, 'varToString', J$.T(1793, varToString, 12, false), true, false, false);
            var path = J$.W(289, 'path', J$.F(281, J$.I(typeof require === 'undefined' ? require = J$.R(265, 'require', undefined, true, true) : require = J$.R(265, 'require', require, true, true)), false)(J$.T(273, 'path', 21, false)), path, false, true);
            var tynt = J$.W(321, 'tynt', J$.F(313, J$.I(typeof require === 'undefined' ? require = J$.R(297, 'require', undefined, true, true) : require = J$.R(297, 'require', require, true, true)), false)(J$.T(305, 'tynt', 21, false)), tynt, false, true);
            var traceCmp = J$.W(377, 'traceCmp', J$.F(369, J$.I(typeof require === 'undefined' ? require = J$.R(329, 'require', undefined, true, true) : require = J$.R(329, 'require', require, true, true)), false)(J$.M(361, J$.R(337, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(345, '__dirname', undefined, true, true) : __dirname = J$.R(345, '__dirname', __dirname, true, true)), J$.T(353, '../../taintable/utils/traceCmp.js', 21, false))), traceCmp, false, true);
            J$.P(1657, J$.I(typeof exports === 'undefined' ? exports = J$.R(1641, 'exports', undefined, true, true) : exports = J$.R(1641, 'exports', exports, true, true)), 'clone', J$.R(1649, 'clone', clone, false, true));
            J$.P(1681, J$.I(typeof exports === 'undefined' ? exports = J$.R(1665, 'exports', undefined, true, true) : exports = J$.R(1665, 'exports', exports, true, true)), 'varToString', J$.R(1673, 'varToString', varToString, false, true));
            J$.P(1705, J$.I(typeof exports === 'undefined' ? exports = J$.R(1689, 'exports', undefined, true, true) : exports = J$.R(1689, 'exports', exports, true, true)), 'loopProperty', J$.R(1697, 'loopProperty', loopProperty, false, true));
        } catch (J$e) {
            J$.Ex(1873, J$e);
        } finally {
            if (J$.Sr(1881))
                continue jalangiLabel4;
            else
                break jalangiLabel4;
        }
    }
// JALANGI DO NOT INSTRUMENT

