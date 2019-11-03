J$.noInstrEval = false;
jalangiLabel3:
    while (true) {
        try {
            J$.Se(1361, '/mnt/d/BearWork/nodeExploit/Goldie/outputs/target_tmp/tmp-3020e8qRvZfEem1A/TestMongoParse.js');
            function varToString(varObj) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            arguments = J$.N(185, 'arguments', arguments, true, false, false);
                            varObj = J$.N(193, 'varObj', varObj, true, false, false);
                            return J$.Rt(169, J$.G(161, J$.M(145, J$.I(typeof Object === 'undefined' ? Object = J$.R(129, 'Object', undefined, true, true) : Object = J$.R(129, 'Object', Object, true, true)), 'keys', false)(J$.R(137, 'varObj', varObj, false, false)), J$.T(153, 0, 22, false)));
                        } catch (J$e) {
                            J$.Ex(1481, J$e);
                        } finally {
                            if (J$.Fr(1489))
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
                            J$.Fe(777, arguments.callee, this, arguments);
                            arguments = J$.N(785, 'arguments', arguments, true, false, false);
                            source_var = J$.N(793, 'source_var', source_var, true, false, false);
                            return J$.Rt(769, J$.R(761, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(1497, J$e);
                        } finally {
                            if (J$.Fr(1505))
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
                            J$.Fe(1305, arguments.callee, this, arguments);
                            arguments = J$.N(1313, 'arguments', arguments, true, false, false);
                            obj = J$.N(1321, 'obj', obj, true, false, false);
                            J$.N(1329, 'copy', copy, false, false, false);
                            J$.N(1337, 'i', i, false, false, false);
                            J$.N(1345, 'len', len, false, false, false);
                            J$.N(1353, 'attr', attr, false, false, false);
                            if (J$.C(16, J$.C(8, J$.B(18, '==', J$.T(801, null, 25, false), J$.R(809, 'obj', obj, false, false))) ? J$._() : J$.B(34, '!=', J$.T(817, 'object', 21, false), J$.U(26, 'typeof', J$.R(825, 'obj', obj, false, false)))))
                                return J$.Rt(841, J$.R(833, 'obj', obj, false, false));
                            if (J$.C(24, J$.B(42, 'instanceof', J$.R(849, 'obj', obj, false, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(857, 'Date', undefined, true, true) : Date = J$.R(857, 'Date', Date, true, true))))) {
                                var copy = J$.W(881, 'copy', J$.F(873, J$.I(typeof Date === 'undefined' ? Date = J$.R(865, 'Date', undefined, true, true) : Date = J$.R(865, 'Date', Date, true, true)), true)(), copy, false, false);
                                J$.M(913, J$.R(889, 'copy', copy, false, false), 'setTime', false)(J$.M(905, J$.R(897, 'obj', obj, false, false), 'getTime', false)());
                                return J$.Rt(929, J$.R(921, 'copy', copy, false, false));
                            }
                            if (J$.C(40, J$.B(50, 'instanceof', J$.R(937, 'obj', obj, false, false), J$.I(typeof Array === 'undefined' ? Array = J$.R(945, 'Array', undefined, true, true) : Array = J$.R(945, 'Array', Array, true, true))))) {
                                var copy = J$.W(961, 'copy', J$.T(953, [], 10, false), copy, false, false);
                                for (var i = J$.W(993, 'i', J$.T(969, 0, 22, false), i, false, false), len = J$.W(1001, 'len', J$.G(985, J$.R(977, 'obj', obj, false, false), 'length'), len, false, false); J$.C(32, J$.B(58, '<', J$.R(1009, 'i', i, false, false), J$.R(1017, 'len', len, false, false))); i = J$.W(1033, 'i', J$.B(74, '+', J$.U(66, '+', J$.R(1025, 'i', i, false, false)), 1), i, false, false)) {
                                    J$.P(1097, J$.R(1041, 'copy', copy, false, false), J$.R(1049, 'i', i, false, false), J$.F(1089, J$.R(1057, 'clone', clone, false, true), false)(J$.G(1081, J$.R(1065, 'obj', obj, false, false), J$.R(1073, 'i', i, false, false))));
                                }
                                return J$.Rt(1113, J$.R(1105, 'copy', copy, false, false));
                            }
                            if (J$.C(56, J$.B(82, 'instanceof', J$.R(1121, 'obj', obj, false, false), J$.I(typeof Object === 'undefined' ? Object = J$.R(1129, 'Object', undefined, true, true) : Object = J$.R(1129, 'Object', Object, true, true))))) {
                                var copy = J$.W(1145, 'copy', J$.T(1137, {}, 11, false), copy, false, false);
                                for (var attr in J$.H(1249, J$.R(1153, 'obj', obj, false, false))) {
                                    J$.N(1257, 'attr', attr, false, true, false);
                                    {
                                        {
                                            if (J$.C(48, J$.M(1177, J$.R(1161, 'obj', obj, false, false), 'hasOwnProperty', false)(J$.R(1169, 'attr', attr, false, false))))
                                                J$.P(1241, J$.R(1185, 'copy', copy, false, false), J$.R(1193, 'attr', attr, false, false), J$.F(1233, J$.R(1201, 'clone', clone, false, true), false)(J$.G(1225, J$.R(1209, 'obj', obj, false, false), J$.R(1217, 'attr', attr, false, false))));
                                        }
                                    }
                                }
                                return J$.Rt(1273, J$.R(1265, 'copy', copy, false, false));
                            }
                            throw J$.F(1297, J$.I(typeof Error === 'undefined' ? Error = J$.R(1281, 'Error', undefined, true, true) : Error = J$.R(1281, 'Error', Error, true, true)), true)(J$.T(1289, 'Unable to copy obj! Its type isn\'t supported.', 21, false));
                        } catch (J$e) {
                            J$.Ex(1513, J$e);
                        } finally {
                            if (J$.Fr(1521))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(1369, 'parser', parser, false, false, false);
            J$.N(1377, 'path', path, false, false, false);
            J$.N(1385, 'traceCmp', traceCmp, false, false, false);
            varToString = J$.N(1401, 'varToString', J$.T(1393, varToString, 12, false), true, false, false);
            J$.N(1409, 'query', query, false, false, false);
            J$.N(1417, 'properties', properties, false, false, false);
            J$.N(1425, 'res', res, false, false, false);
            J$.N(1433, 'a', a, false, false, false);
            J$.N(1441, 'tmp', tmp, false, false, false);
            source = J$.N(1457, 'source', J$.T(1449, source, 12, false), true, false, false);
            clone = J$.N(1473, 'clone', J$.T(1465, clone, 12, false), true, false, false);
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
            for (var a of J$.R(385, 'properties', properties, false, true)) {
                J$.M(417, J$.I(typeof console === 'undefined' ? console = J$.R(393, 'console', undefined, true, true) : console = J$.R(393, 'console', console, true, true)), 'log', false)(J$.B(10, '+', J$.T(401, 'source: ', 21, false), J$.R(409, 'a', a, false, true)));
                var tmp = J$.W(449, 'tmp', J$.F(441, J$.R(425, 'clone', clone, false, true), false)(J$.R(433, 'query', query, false, true)), tmp, false, true);
                J$.P(521, J$.R(457, 'tmp', tmp, false, true), J$.R(465, 'a', a, false, true), J$.F(513, J$.R(473, 'source', source, false, true), false)(J$.G(497, J$.R(481, 'tmp', tmp, false, true), J$.R(489, 'a', a, false, true)), J$.R(505, 'a', a, false, true)));
                J$.M(561, J$.R(529, 'res', res, false, true), 'push', false)(J$.M(553, J$.R(537, 'parser', parser, false, true), 'parse', false)(J$.R(545, 'tmp', tmp, false, true)));
                J$.M(585, J$.R(569, 'traceCmp', traceCmp, false, true), 'cmp_trace', false)(J$.R(577, 'a', a, false, true));
            }
            J$.M(609, J$.I(typeof console === 'undefined' ? console = J$.R(593, 'console', undefined, true, true) : console = J$.R(593, 'console', console, true, true)), 'log', false)(J$.T(601, 'source: THE ROOT', 21, false));
            varName = J$.W(649, 'varName', J$.F(641, J$.R(617, 'varToString', varToString, false, true), false)(J$.T(633, { query }, 11, false)), J$.I(typeof varName === 'undefined' ? undefined : varName), true, true);
            query = J$.W(689, 'query', J$.F(681, J$.R(657, 'source', source, false, true), false)(J$.R(665, 'query', query, false, true), J$.I(typeof varName === 'undefined' ? varName = J$.R(673, 'varName', undefined, true, true) : varName = J$.R(673, 'varName', varName, true, true))), query, false, true);
            J$.M(729, J$.R(697, 'res', res, false, true), 'push', false)(J$.M(721, J$.R(705, 'parser', parser, false, true), 'parse', false)(J$.R(713, 'query', query, false, true)));
            J$.M(753, J$.R(737, 'traceCmp', traceCmp, false, true), 'cmp_trace', false)(J$.I(typeof varName === 'undefined' ? varName = J$.R(745, 'varName', undefined, true, true) : varName = J$.R(745, 'varName', varName, true, true)));
        } catch (J$e) {
            J$.Ex(1529, J$e);
        } finally {
            if (J$.Sr(1537))
                continue jalangiLabel3;
            else
                break jalangiLabel3;
        }
    }
// JALANGI DO NOT INSTRUMENT

