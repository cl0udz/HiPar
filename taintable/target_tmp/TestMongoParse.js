J$.noInstrEval = false;
jalangiLabel4:
    while (true) {
        try {
            J$.Se(1881, '../target_tmp/TestMongoParse.js');
            function g(x) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(1137, arguments.callee, this, arguments);
                            arguments = J$.N(1145, 'arguments', arguments, true, false, false);
                            x = J$.N(1153, 'x', x, true, false, false);
                            J$.M(1129, J$.I(typeof console === 'undefined' ? console = J$.R(1113, 'console', undefined, true, true) : console = J$.R(1113, 'console', console, true, true)), 'log', false)(J$.T(1121, 'Myfct', 21, false));
                        } catch (J$e) {
                            J$.Ex(1945, J$e);
                        } finally {
                            if (J$.Fr(1953))
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
                            J$.Fe(1841, arguments.callee, this, arguments);
                            arguments = J$.N(1849, 'arguments', arguments, true, false, false);
                            source_var = J$.N(1857, 'source_var', source_var, true, false, false);
                            level = J$.N(1865, 'level', level, true, false, false);
                            catagory = J$.N(1873, 'catagory', catagory, true, false, false);
                            return J$.Rt(1833, J$.R(1825, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(1993, J$e);
                        } finally {
                            if (J$.Fr(2001))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(1889, 'attackUtils', attackUtils, false, false, false);
            J$.N(1897, 'parser', parser, false, false, false);
            g = J$.N(1913, 'g', J$.T(1905, g, 12, false), true, false, false);
            J$.N(1921, 'query', query, false, false, false);
            source = J$.N(1937, 'source', J$.T(1929, source, 12, false), true, false, false);
            var attackUtils = J$.W(1041, 'attackUtils', J$.F(1033, J$.I(typeof require === 'undefined' ? require = J$.R(1017, 'require', undefined, true, true) : require = J$.R(1017, 'require', require, true, true)), false)(J$.T(1025, './AttackUtils.js', 21, false)), attackUtils, false, true);
            J$.M(1057, J$.R(1049, 'attackUtils', attackUtils, false, true), 'setup', false)();
            HIGH_LEVEL = J$.W(1073, 'HIGH_LEVEL', J$.T(1065, 2, 22, false), J$.I(typeof HIGH_LEVEL === 'undefined' ? undefined : HIGH_LEVEL), true, true);
            var parser = J$.W(1105, 'parser', J$.F(1097, J$.I(typeof require === 'undefined' ? require = J$.R(1081, 'require', undefined, true, true) : require = J$.R(1081, 'require', require, true, true)), false)(J$.T(1089, 'mongo-parse', 21, false)), parser, false, true);
            g = J$.W(1201, 'g', J$.F(1193, J$.R(1161, 'source', source, false, true), false)(J$.R(1169, 'g', g, false, true), J$.I(typeof HIGH_LEVEL === 'undefined' ? HIGH_LEVEL = J$.R(1177, 'HIGH_LEVEL', undefined, true, true) : HIGH_LEVEL = J$.R(1177, 'HIGH_LEVEL', HIGH_LEVEL, true, true)), J$.T(1185, 'module-interface', 21, false)), g, false, true);
            var query = J$.W(1233, 'query', J$.M(1225, J$.R(1209, 'parser', parser, false, true), 'parse', false)(J$.R(1217, 'g', g, false, true)), query, false, true);
            var query = J$.W(1297, 'query', J$.M(1289, J$.R(1241, 'parser', parser, false, true), 'parse', false)(J$.F(1281, J$.R(1249, 'source', source, false, true), false)(J$.T(1257, 23, 22, false), J$.I(typeof HIGH_LEVEL === 'undefined' ? HIGH_LEVEL = J$.R(1265, 'HIGH_LEVEL', undefined, true, true) : HIGH_LEVEL = J$.R(1265, 'HIGH_LEVEL', HIGH_LEVEL, true, true)), J$.T(1273, 'module-interface', 21, false))), query, false, true);
            J$.M(1817, J$.R(1305, 'attackUtils', attackUtils, false, true), 'deliverPayloads', false)(J$.G(1321, J$.R(1313, 'attackUtils', attackUtils, false, true), 'payloadsEval'), J$.T(1489, function (payload) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(1457, arguments.callee, this, arguments);
                            arguments = J$.N(1465, 'arguments', arguments, true, false, false);
                            payload = J$.N(1473, 'payload', payload, true, false, false);
                            J$.N(1481, 'query', query, false, false, false);
                            payload = J$.W(1369, 'payload', J$.F(1361, J$.R(1329, 'source', source, false, true), false)(J$.R(1337, 'payload', payload, false, false), J$.I(typeof HIGH_LEVEL === 'undefined' ? HIGH_LEVEL = J$.R(1345, 'HIGH_LEVEL', undefined, true, true) : HIGH_LEVEL = J$.R(1345, 'HIGH_LEVEL', HIGH_LEVEL, true, true)), J$.T(1353, 'module-interface', 21, false)), payload, false, false);
                            J$.M(1401, J$.I(typeof console === 'undefined' ? console = J$.R(1377, 'console', undefined, true, true) : console = J$.R(1377, 'console', console, true, true)), 'log', false)(J$.B(74, '+', J$.T(1385, 'Here I am + payload: ', 21, false), J$.R(1393, 'payload', payload, false, false)));
                            var query = J$.W(1449, 'query', J$.M(1441, J$.R(1409, 'parser', parser, false, true), 'parse', false)(J$.B(90, '+', J$.B(82, '+', J$.T(1417, '}); ', 21, false), J$.R(1425, 'payload', payload, false, false)), J$.T(1433, '//', 21, false))), query, false, false);
                        } catch (J$e) {
                            J$.Ex(1961, J$e);
                        } finally {
                            if (J$.Fr(1969))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), J$.T(1809, function (result, filesWithSinks) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(1761, arguments.callee, this, arguments);
                            arguments = J$.N(1769, 'arguments', arguments, true, false, false);
                            result = J$.N(1777, 'result', result, true, false, false);
                            filesWithSinks = J$.N(1785, 'filesWithSinks', filesWithSinks, true, false, false);
                            J$.N(1793, 'benignInput', benignInput, false, false, false);
                            J$.N(1801, 'query', query, false, false, false);
                            var benignInput = J$.W(1505, 'benignInput', J$.T(1497, '{ myQueryField: x}', 21, false), benignInput, false, false);
                            benignInput = J$.W(1553, 'benignInput', J$.F(1545, J$.R(1513, 'source', source, false, true), false)(J$.R(1521, 'benignInput', benignInput, false, false), J$.I(typeof HIGH_LEVEL === 'undefined' ? HIGH_LEVEL = J$.R(1529, 'HIGH_LEVEL', undefined, true, true) : HIGH_LEVEL = J$.R(1529, 'HIGH_LEVEL', HIGH_LEVEL, true, true)), J$.T(1537, 'module-interface', 21, false)), benignInput, false, false);
                            J$.M(1585, J$.I(typeof console === 'undefined' ? console = J$.R(1561, 'console', undefined, true, true) : console = J$.R(1561, 'console', console, true, true)), 'log', false)(J$.B(106, '+', J$.T(1569, 'typeof : ', 21, false), J$.U(98, 'typeof', J$.R(1577, 'benignInput', benignInput, false, false))));
                            if (J$.C(32, J$.C(24, J$.M(1609, J$.R(1593, 'benignInput', benignInput, false, false), 'hasOwnProperty', false)(J$.T(1601, 'tainted', 21, false))) ? J$.B(114, '==', J$.G(1625, J$.R(1617, 'benignInput', benignInput, false, false), 'tainted'), J$.T(1633, true, 23, false)) : J$._()))
                                J$.M(1657, J$.I(typeof console === 'undefined' ? console = J$.R(1641, 'console', undefined, true, true) : console = J$.R(1641, 'console', console, true, true)), 'log', false)(J$.T(1649, 'It works.', 21, false));
                            var query = J$.W(1689, 'query', J$.M(1681, J$.R(1665, 'parser', parser, false, true), 'parse', false)(J$.R(1673, 'benignInput', benignInput, false, false)), query, false, false);
                            J$.M(1705, J$.R(1697, 'attackUtils', attackUtils, false, true), 'printCallStrings', false)();
                            result = J$.W(1753, 'result', J$.B(130, '+', J$.R(1745, 'result', result, false, false), J$.B(122, '+', J$.T(1713, ' ', 21, false), J$.M(1737, J$.R(1721, 'attackUtils', attackUtils, false, true), 'observedString', false)(J$.R(1729, 'benignInput', benignInput, false, false)))), result, false, false);
                        } catch (J$e) {
                            J$.Ex(1977, J$e);
                        } finally {
                            if (J$.Fr(1985))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(2009, J$e);
        } finally {
            if (J$.Sr(2017))
                continue jalangiLabel4;
            else
                break jalangiLabel4;
        }
    }
// JALANGI DO NOT INSTRUMENT

