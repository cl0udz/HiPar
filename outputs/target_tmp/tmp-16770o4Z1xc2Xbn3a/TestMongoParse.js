J$.noInstrEval = false;
jalangiLabel3:
    while (true) {
        try {
            J$.Se(1385, '/mnt/data/fxiao/Goldie/outputs/target_tmp/tmp-16770o4Z1xc2Xbn3a/TestMongoParse.js');
            function varToString(varObj) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            arguments = J$.N(185, 'arguments', arguments, true, false, false);
                            varObj = J$.N(193, 'varObj', varObj, true, false, false);
                            return J$.Rt(169, J$.G(161, J$.M(145, J$.I(typeof Object === 'undefined' ? Object = J$.R(129, 'Object', undefined, true, true) : Object = J$.R(129, 'Object', Object, true, true)), 'keys', false)(J$.R(137, 'varObj', varObj, false, false)), J$.T(153, 0, 22, false)));
                        } catch (J$e) {
                            J$.Ex(1505, J$e);
                        } finally {
                            if (J$.Fr(1513))
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
                            J$.Fe(801, arguments.callee, this, arguments);
                            arguments = J$.N(809, 'arguments', arguments, true, false, false);
                            source_var = J$.N(817, 'source_var', source_var, true, false, false);
                            return J$.Rt(793, J$.R(785, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(1521, J$e);
                        } finally {
                            if (J$.Fr(1529))
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
                            J$.Fe(1329, arguments.callee, this, arguments);
                            arguments = J$.N(1337, 'arguments', arguments, true, false, false);
                            obj = J$.N(1345, 'obj', obj, true, false, false);
                            J$.N(1353, 'copy', copy, false, false, false);
                            J$.N(1361, 'i', i, false, false, false);
                            J$.N(1369, 'len', len, false, false, false);
                            J$.N(1377, 'attr', attr, false, false, false);
                            if (J$.C(16, J$.C(8, J$.B(26, '==', J$.T(825, null, 25, false), J$.R(833, 'obj', obj, false, false))) ? J$._() : J$.B(42, '!=', J$.T(841, 'object', 21, false), J$.U(34, 'typeof', J$.R(849, 'obj', obj, false, false)))))
                                return J$.Rt(865, J$.R(857, 'obj', obj, false, false));
                            if (J$.C(24, J$.B(50, 'instanceof', J$.R(873, 'obj', obj, false, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(881, 'Date', undefined, true, true) : Date = J$.R(881, 'Date', Date, true, true))))) {
                                var copy = J$.W(905, 'copy', J$.F(897, J$.I(typeof Date === 'undefined' ? Date = J$.R(889, 'Date', undefined, true, true) : Date = J$.R(889, 'Date', Date, true, true)), true)(), copy, false, false);
                                J$.M(937, J$.R(913, 'copy', copy, false, false), 'setTime', false)(J$.M(929, J$.R(921, 'obj', obj, false, false), 'getTime', false)());
                                return J$.Rt(953, J$.R(945, 'copy', copy, false, false));
                            }
                            if (J$.C(40, J$.B(58, 'instanceof', J$.R(961, 'obj', obj, false, false), J$.I(typeof Array === 'undefined' ? Array = J$.R(969, 'Array', undefined, true, true) : Array = J$.R(969, 'Array', Array, true, true))))) {
                                var copy = J$.W(985, 'copy', J$.T(977, [], 10, false), copy, false, false);
                                for (var i = J$.W(1017, 'i', J$.T(993, 0, 22, false), i, false, false), len = J$.W(1025, 'len', J$.G(1009, J$.R(1001, 'obj', obj, false, false), 'length'), len, false, false); J$.C(32, J$.B(66, '<', J$.R(1033, 'i', i, false, false), J$.R(1041, 'len', len, false, false))); i = J$.W(1057, 'i', J$.B(82, '+', J$.U(74, '+', J$.R(1049, 'i', i, false, false)), 1), i, false, false)) {
                                    J$.P(1121, J$.R(1065, 'copy', copy, false, false), J$.R(1073, 'i', i, false, false), J$.F(1113, J$.R(1081, 'clone', clone, false, true), false)(J$.G(1105, J$.R(1089, 'obj', obj, false, false), J$.R(1097, 'i', i, false, false))));
                                }
                                return J$.Rt(1137, J$.R(1129, 'copy', copy, false, false));
                            }
                            if (J$.C(56, J$.B(90, 'instanceof', J$.R(1145, 'obj', obj, false, false), J$.I(typeof Object === 'undefined' ? Object = J$.R(1153, 'Object', undefined, true, true) : Object = J$.R(1153, 'Object', Object, true, true))))) {
                                var copy = J$.W(1169, 'copy', J$.T(1161, {}, 11, false), copy, false, false);
                                for (var attr in J$.H(1273, J$.R(1177, 'obj', obj, false, false))) {
                                    J$.N(1281, 'attr', attr, false, true, false);
                                    {
                                        {
                                            if (J$.C(48, J$.M(1201, J$.R(1185, 'obj', obj, false, false), 'hasOwnProperty', false)(J$.R(1193, 'attr', attr, false, false))))
                                                J$.P(1265, J$.R(1209, 'copy', copy, false, false), J$.R(1217, 'attr', attr, false, false), J$.F(1257, J$.R(1225, 'clone', clone, false, true), false)(J$.G(1249, J$.R(1233, 'obj', obj, false, false), J$.R(1241, 'attr', attr, false, false))));
                                        }
                                    }
                                }
                                return J$.Rt(1297, J$.R(1289, 'copy', copy, false, false));
                            }
                            throw J$.F(1321, J$.I(typeof Error === 'undefined' ? Error = J$.R(1305, 'Error', undefined, true, true) : Error = J$.R(1305, 'Error', Error, true, true)), true)(J$.T(1313, 'Unable to copy obj! Its type isn\'t supported.', 21, false));
                        } catch (J$e) {
                            J$.Ex(1537, J$e);
                        } finally {
                            if (J$.Fr(1545))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(1393, 'parser', parser, false, false, false);
            J$.N(1401, 'path', path, false, false, false);
            J$.N(1409, 'traceCmp', traceCmp, false, false, false);
            varToString = J$.N(1425, 'varToString', J$.T(1417, varToString, 12, false), true, false, false);
            J$.N(1433, 'query', query, false, false, false);
            J$.N(1441, 'properties', properties, false, false, false);
            J$.N(1449, 'res', res, false, false, false);
            J$.N(1457, 'a', a, false, false, false);
            J$.N(1465, 'tmp', tmp, false, false, false);
            source = J$.N(1481, 'source', J$.T(1473, source, 12, false), true, false, false);
            clone = J$.N(1497, 'clone', J$.T(1489, clone, 12, false), true, false, false);
            var parser = J$.W(33, 'parser', J$.F(25, J$.I(typeof require === 'undefined' ? require = J$.R(9, 'require', undefined, true, true) : require = J$.R(9, 'require', require, true, true)), false)(J$.T(17, 'mongo-parse', 21, false)), parser, false, true);
            var path = J$.W(65, 'path', J$.F(57, J$.I(typeof require === 'undefined' ? require = J$.R(41, 'require', undefined, true, true) : require = J$.R(41, 'require', require, true, true)), false)(J$.T(49, 'path', 21, false)), path, false, true);
            var traceCmp = J$.W(121, 'traceCmp', J$.F(113, J$.I(typeof require === 'undefined' ? require = J$.R(73, 'require', undefined, true, true) : require = J$.R(73, 'require', require, true, true)), false)(J$.M(105, J$.R(81, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(89, '__dirname', undefined, true, true) : __dirname = J$.R(89, '__dirname', __dirname, true, true)), J$.T(97, '../../../taintable/utils/traceCmp.js', 21, false))), traceCmp, false, true);
            var query = J$.W(233, 'query', J$.T(225, {
                'username': J$.T(201, 'admin', 21, false),
                'password': J$.T(209, 'adminPass', 21, false),
                'id': J$.T(217, '101', 21, false)
            }, 11, false), query, false, true);
            var properties = J$.W(265, 'properties', J$.M(257, J$.I(typeof Object === 'undefined' ? Object = J$.R(241, 'Object', undefined, true, true) : Object = J$.R(241, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.R(249, 'query', query, false, true)), properties, false, true);
            J$.M(297, J$.I(typeof console === 'undefined' ? console = J$.R(273, 'console', undefined, true, true) : console = J$.R(273, 'console', console, true, true)), 'log', false)(J$.T(281, 'properties: ', 21, false), J$.R(289, 'properties', properties, false, true));
            var res = J$.W(313, 'res', J$.T(305, [], 10, false), res, false, true);
            J$.M(337, J$.I(typeof console === 'undefined' ? console = J$.R(321, 'console', undefined, true, true) : console = J$.R(321, 'console', console, true, true)), 'log', false)(J$.T(329, 'source: NOTHING', 21, false));
            J$.M(377, J$.R(345, 'res', res, false, true), 'push', false)(J$.M(369, J$.R(353, 'parser', parser, false, true), 'parse', false)(J$.R(361, 'query', query, false, true)));
            J$.M(401, J$.R(385, 'traceCmp', traceCmp, false, true), 'cmp_trace', false)(J$.U(10, '-', J$.T(393, 1, 22, false)));
            for (var a of J$.R(409, 'properties', properties, false, true)) {
                J$.M(441, J$.I(typeof console === 'undefined' ? console = J$.R(417, 'console', undefined, true, true) : console = J$.R(417, 'console', console, true, true)), 'log', false)(J$.B(18, '+', J$.T(425, 'source: ', 21, false), J$.R(433, 'a', a, false, true)));
                var tmp = J$.W(473, 'tmp', J$.F(465, J$.R(449, 'clone', clone, false, true), false)(J$.R(457, 'query', query, false, true)), tmp, false, true);
                J$.P(545, J$.R(481, 'tmp', tmp, false, true), J$.R(489, 'a', a, false, true), J$.F(537, J$.R(497, 'source', source, false, true), false)(J$.G(521, J$.R(505, 'tmp', tmp, false, true), J$.R(513, 'a', a, false, true)), J$.R(529, 'a', a, false, true)));
                J$.M(585, J$.R(553, 'res', res, false, true), 'push', false)(J$.M(577, J$.R(561, 'parser', parser, false, true), 'parse', false)(J$.R(569, 'tmp', tmp, false, true)));
                J$.M(609, J$.R(593, 'traceCmp', traceCmp, false, true), 'cmp_trace', false)(J$.R(601, 'a', a, false, true));
            }
            J$.M(633, J$.I(typeof console === 'undefined' ? console = J$.R(617, 'console', undefined, true, true) : console = J$.R(617, 'console', console, true, true)), 'log', false)(J$.T(625, 'source: THE ROOT', 21, false));
            varName = J$.W(673, 'varName', J$.F(665, J$.R(641, 'varToString', varToString, false, true), false)(J$.T(657, { query }, 11, false)), J$.I(typeof varName === 'undefined' ? undefined : varName), true, true);
            query = J$.W(713, 'query', J$.F(705, J$.R(681, 'source', source, false, true), false)(J$.R(689, 'query', query, false, true), J$.I(typeof varName === 'undefined' ? varName = J$.R(697, 'varName', undefined, true, true) : varName = J$.R(697, 'varName', varName, true, true))), query, false, true);
            J$.M(753, J$.R(721, 'res', res, false, true), 'push', false)(J$.M(745, J$.R(729, 'parser', parser, false, true), 'parse', false)(J$.R(737, 'query', query, false, true)));
            J$.M(777, J$.R(761, 'traceCmp', traceCmp, false, true), 'cmp_trace', false)(J$.I(typeof varName === 'undefined' ? varName = J$.R(769, 'varName', undefined, true, true) : varName = J$.R(769, 'varName', varName, true, true)));
        } catch (J$e) {
            J$.Ex(1553, J$e);
        } finally {
            if (J$.Sr(1561))
                continue jalangiLabel3;
            else
                break jalangiLabel3;
        }
    }
// JALANGI DO NOT INSTRUMENT

