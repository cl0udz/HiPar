J$.noInstrEval = false;
jalangiLabel17:
    while (true) {
        try {
            J$.Se(6039553, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestCouchDb/TestCouchDb.js');
            function testInsert(query) {
                jalangiLabel7:
                    while (true) {
                        try {
                            J$.Fe(6038881, arguments.callee, this, arguments);
                            arguments = J$.N(6038889, 'arguments', arguments, true, false, false);
                            query = J$.N(6038897, 'query', query, true, false, false);
                            J$.M(6038873, J$.R(6038849, 'alice', alice, false, true), 'insert', false)(J$.R(6038857, 'query', query, false, false), J$.T(6038865, 'test', 21, false));
                        } catch (J$e) {
                            J$.Ex(6039777, J$e);
                        } finally {
                            if (J$.Fr(6039785))
                                continue jalangiLabel7;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function testBulk(query) {
                jalangiLabel9:
                    while (true) {
                        try {
                            J$.Fe(6039049, arguments.callee, this, arguments);
                            arguments = J$.N(6039057, 'arguments', arguments, true, false, false);
                            query = J$.N(6039065, 'query', query, true, false, false);
                            J$.N(6039073, 'documents', documents, false, false, false);
                            var documents = J$.W(6038945, 'documents', J$.T(6038937, [
                                J$.R(6038905, 'query', query, false, false),
                                J$.T(6038929, {
                                    _id: J$.T(6038913, 'tiger', 21, false),
                                    striped: J$.T(6038921, true, 23, false)
                                }, 11, false)
                            ], 10, false), documents, false, false);
                            J$.M(6039041, J$.M(6038977, J$.R(6038953, 'alice', alice, false, true), 'bulk', false)(J$.T(6038969, { docs: J$.R(6038961, 'documents', documents, false, false) }, 11, false)), 'then', false)(J$.T(6039033, function (body) {
                                jalangiLabel8:
                                    while (true) {
                                        try {
                                            J$.Fe(6039009, arguments.callee, this, arguments);
                                            arguments = J$.N(6039017, 'arguments', arguments, true, false, false);
                                            body = J$.N(6039025, 'body', body, true, false, false);
                                            J$.M(6039001, J$.I(typeof console === 'undefined' ? console = J$.R(6038985, 'console', undefined, true, true) : console = J$.R(6038985, 'console', console, true, true)), 'log', false)(J$.R(6038993, 'body', body, false, false));
                                        } catch (J$e) {
                                            J$.Ex(6039793, J$e);
                                        } finally {
                                            if (J$.Fr(6039801))
                                                continue jalangiLabel8;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6039809, J$e);
                        } finally {
                            if (J$.Fr(6039817))
                                continue jalangiLabel9;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function testIndex(query) {
                jalangiLabel11:
                    while (true) {
                        try {
                            J$.Fe(6039201, arguments.callee, this, arguments);
                            arguments = J$.N(6039209, 'arguments', arguments, true, false, false);
                            query = J$.N(6039217, 'query', query, true, false, false);
                            J$.N(6039225, 'indexDef', indexDef, false, false, false);
                            var indexDef = J$.W(6039105, 'indexDef', J$.T(6039097, {
                                index: J$.R(6039081, 'query', query, false, false),
                                name: J$.T(6039089, 'fooindex', 21, false)
                            }, 11, false), indexDef, false, false);
                            J$.M(6039193, J$.M(6039129, J$.R(6039113, 'alice', alice, false, true), 'createIndex', false)(J$.R(6039121, 'indexDef', indexDef, false, false)), 'then', false)(J$.T(6039185, function (result) {
                                jalangiLabel10:
                                    while (true) {
                                        try {
                                            J$.Fe(6039161, arguments.callee, this, arguments);
                                            arguments = J$.N(6039169, 'arguments', arguments, true, false, false);
                                            result = J$.N(6039177, 'result', result, true, false, false);
                                            J$.M(6039153, J$.I(typeof console === 'undefined' ? console = J$.R(6039137, 'console', undefined, true, true) : console = J$.R(6039137, 'console', console, true, true)), 'log', false)(J$.R(6039145, 'result', result, false, false));
                                        } catch (J$e) {
                                            J$.Ex(6039825, J$e);
                                        } finally {
                                            if (J$.Fr(6039833))
                                                continue jalangiLabel10;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6039841, J$e);
                        } finally {
                            if (J$.Fr(6039849))
                                continue jalangiLabel11;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function testSearch(query) {
                jalangiLabel13:
                    while (true) {
                        try {
                            J$.Fe(6039337, arguments.callee, this, arguments);
                            arguments = J$.N(6039345, 'arguments', arguments, true, false, false);
                            query = J$.N(6039353, 'query', query, true, false, false);
                            J$.M(6039329, J$.M(6039265, J$.R(6039233, 'alice', alice, false, true), 'search', false)(J$.T(6039241, 'characters', 21, false), J$.T(6039249, 'happy_ones', 21, false), J$.R(6039257, 'query', query, false, false)), 'then', false)(J$.T(6039321, function (doc) {
                                jalangiLabel12:
                                    while (true) {
                                        try {
                                            J$.Fe(6039297, arguments.callee, this, arguments);
                                            arguments = J$.N(6039305, 'arguments', arguments, true, false, false);
                                            doc = J$.N(6039313, 'doc', doc, true, false, false);
                                            J$.M(6039289, J$.I(typeof console === 'undefined' ? console = J$.R(6039273, 'console', undefined, true, true) : console = J$.R(6039273, 'console', console, true, true)), 'log', false)(J$.R(6039281, 'doc', doc, false, false));
                                        } catch (J$e) {
                                            J$.Ex(6039857, J$e);
                                        } finally {
                                            if (J$.Fr(6039865))
                                                continue jalangiLabel12;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6039873, J$e);
                        } finally {
                            if (J$.Fr(6039881))
                                continue jalangiLabel13;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function testView(query) {
                jalangiLabel16:
                    while (true) {
                        try {
                            J$.Fe(6039529, arguments.callee, this, arguments);
                            arguments = J$.N(6039537, 'arguments', arguments, true, false, false);
                            query = J$.N(6039545, 'query', query, true, false, false);
                            J$.M(6039521, J$.M(6039393, J$.R(6039361, 'alice', alice, false, true), 'view', false)(J$.T(6039369, 'characters', 21, false), J$.T(6039377, 'soldiers', 21, false), J$.R(6039385, 'query', query, false, false)), 'then', false)(J$.T(6039513, function (body) {
                                jalangiLabel15:
                                    while (true) {
                                        try {
                                            J$.Fe(6039489, arguments.callee, this, arguments);
                                            arguments = J$.N(6039497, 'arguments', arguments, true, false, false);
                                            body = J$.N(6039505, 'body', body, true, false, false);
                                            J$.M(6039481, J$.G(6039409, J$.R(6039401, 'body', body, false, false), 'rows'), 'forEach', false)(J$.T(6039473, function (doc) {
                                                jalangiLabel14:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(6039449, arguments.callee, this, arguments);
                                                            arguments = J$.N(6039457, 'arguments', arguments, true, false, false);
                                                            doc = J$.N(6039465, 'doc', doc, true, false, false);
                                                            J$.M(6039441, J$.I(typeof console === 'undefined' ? console = J$.R(6039417, 'console', undefined, true, true) : console = J$.R(6039417, 'console', console, true, true)), 'log', false)(J$.G(6039433, J$.R(6039425, 'doc', doc, false, false), 'value'));
                                                        } catch (J$e) {
                                                            J$.Ex(6039889, J$e);
                                                        } finally {
                                                            if (J$.Fr(6039897))
                                                                continue jalangiLabel14;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false));
                                        } catch (J$e) {
                                            J$.Ex(6039905, J$e);
                                        } finally {
                                            if (J$.Fr(6039913))
                                                continue jalangiLabel15;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6039921, J$e);
                        } finally {
                            if (J$.Fr(6039929))
                                continue jalangiLabel16;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(6039561, 'nano', nano, false, false, false);
            J$.N(6039569, 'utils', utils, false, false, false);
            J$.N(6039577, 'alice', alice, false, false, false);
            testInsert = J$.N(6039593, 'testInsert', J$.T(6039585, testInsert, 12, false), true, false, false);
            testBulk = J$.N(6039609, 'testBulk', J$.T(6039601, testBulk, 12, false), true, false, false);
            testIndex = J$.N(6039625, 'testIndex', J$.T(6039617, testIndex, 12, false), true, false, false);
            testSearch = J$.N(6039641, 'testSearch', J$.T(6039633, testSearch, 12, false), true, false, false);
            testView = J$.N(6039657, 'testView', J$.T(6039649, testView, 12, false), true, false, false);
            J$.T(6037833, 'use strict', 21, false);
            J$.F(6037857, J$.I(typeof require === 'undefined' ? require = J$.R(6037841, 'require', undefined, true, true) : require = J$.R(6037841, 'require', require, true, true)), false)(J$.T(6037849, 'core-js/modules/es.array.for-each', 21, false));
            J$.F(6037881, J$.I(typeof require === 'undefined' ? require = J$.R(6037865, 'require', undefined, true, true) : require = J$.R(6037865, 'require', require, true, true)), false)(J$.T(6037873, 'core-js/modules/es.regexp.exec', 21, false));
            J$.F(6037905, J$.I(typeof require === 'undefined' ? require = J$.R(6037889, 'require', undefined, true, true) : require = J$.R(6037889, 'require', require, true, true)), false)(J$.T(6037897, 'core-js/modules/es.string.search', 21, false));
            J$.F(6037929, J$.I(typeof require === 'undefined' ? require = J$.R(6037913, 'require', undefined, true, true) : require = J$.R(6037913, 'require', require, true, true)), false)(J$.T(6037921, 'core-js/modules/web.dom-collections.for-each', 21, false));
            var nano = J$.W(6037977, 'nano', J$.F(6037969, J$.F(6037953, J$.I(typeof require === 'undefined' ? require = J$.R(6037937, 'require', undefined, true, true) : require = J$.R(6037937, 'require', require, true, true)), false)(J$.T(6037945, 'nano', 21, false)), false)(J$.T(6037961, 'http://localhost:5984', 21, false)), nano, false, true);
            var utils = J$.W(6038009, 'utils', J$.F(6038001, J$.I(typeof require === 'undefined' ? require = J$.R(6037985, 'require', undefined, true, true) : require = J$.R(6037985, 'require', require, true, true)), false)(J$.T(6037993, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var alice;
            J$.M(6038841, J$.M(6038769, J$.M(6038697, J$.M(6038625, J$.M(6038305, J$.M(6038233, J$.M(6038113, J$.M(6038041, J$.G(6038025, J$.R(6038017, 'nano', nano, false, true), 'db'), 'create', false)(J$.T(6038033, 'alice', 21, false)), J$.T(6038049, 'catch', 21, false), false)(J$.T(6038105, function (err) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(6038081, arguments.callee, this, arguments);
                            arguments = J$.N(6038089, 'arguments', arguments, true, false, false);
                            err = J$.N(6038097, 'err', err, true, false, false);
                            J$.M(6038073, J$.I(typeof console === 'undefined' ? console = J$.R(6038057, 'console', undefined, true, true) : console = J$.R(6038057, 'console', console, true, true)), 'log', false)(J$.R(6038065, 'err', err, false, false));
                        } catch (J$e) {
                            J$.Ex(6039665, J$e);
                        } finally {
                            if (J$.Fr(6039673))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false)), 'then', false)(J$.T(6038225, function (response) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(6038201, arguments.callee, this, arguments);
                            arguments = J$.N(6038209, 'arguments', arguments, true, false, false);
                            response = J$.N(6038217, 'response', response, true, false, false);
                            alice = J$.W(6038145, 'alice', J$.M(6038137, J$.R(6038121, 'nano', nano, false, true), 'use', false)(J$.T(6038129, 'alice', 21, false)), alice, false, true);
                            return J$.Rt(6038193, J$.M(6038185, J$.R(6038153, 'alice', alice, false, true), 'insert', false)(J$.T(6038169, { happy: J$.T(6038161, true, 23, false) }, 11, false), J$.T(6038177, 'rabbit', 21, false)));
                        } catch (J$e) {
                            J$.Ex(6039681, J$e);
                        } finally {
                            if (J$.Fr(6039689))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false)), J$.T(6038241, 'catch', 21, false), false)(J$.T(6038297, function (err) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(6038273, arguments.callee, this, arguments);
                            arguments = J$.N(6038281, 'arguments', arguments, true, false, false);
                            err = J$.N(6038289, 'err', err, true, false, false);
                            J$.M(6038265, J$.I(typeof console === 'undefined' ? console = J$.R(6038249, 'console', undefined, true, true) : console = J$.R(6038249, 'console', console, true, true)), 'log', false)(J$.R(6038257, 'err', err, false, false));
                        } catch (J$e) {
                            J$.Ex(6039697, J$e);
                        } finally {
                            if (J$.Fr(6039705))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false)), 'then', false)(J$.T(6038617, function (response) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(6038593, arguments.callee, this, arguments);
                            arguments = J$.N(6038601, 'arguments', arguments, true, false, false);
                            response = J$.N(6038609, 'response', response, true, false, false);
                            J$.M(6038329, J$.I(typeof console === 'undefined' ? console = J$.R(6038313, 'console', undefined, true, true) : console = J$.R(6038313, 'console', console, true, true)), 'log', false)(J$.T(6038321, 'you have inserted a document with an _id of rabbit', 21, false));
                            J$.M(6038353, J$.I(typeof console === 'undefined' ? console = J$.R(6038337, 'console', undefined, true, true) : console = J$.R(6038337, 'console', console, true, true)), 'log', false)(J$.R(6038345, 'response', response, false, false));
                            J$.M(6038393, J$.R(6038361, 'utils', utils, false, true), 'entry', false)(J$.R(6038369, 'testInsert', testInsert, false, true), J$.T(6038385, { happy: J$.T(6038377, true, 23, false) }, 11, false));
                            J$.M(6038441, J$.R(6038401, 'utils', utils, false, true), 'entry', false)(J$.R(6038409, 'testBulk', testBulk, false, true), J$.T(6038433, {
                                a: J$.T(6038417, 1, 22, false),
                                b: J$.T(6038425, 2, 22, false)
                            }, 11, false));
                            J$.M(6038489, J$.R(6038449, 'utils', utils, false, true), 'entry', false)(J$.R(6038457, 'testIndex', testIndex, false, true), J$.T(6038481, { fields: J$.T(6038473, [J$.T(6038465, 'foo', 21, false)], 10, false) }, 11, false));
                            J$.M(6038529, J$.R(6038497, 'utils', utils, false, true), 'entry', false)(J$.R(6038505, 'testSearch', testSearch, false, true), J$.T(6038521, { q: J$.T(6038513, 'cat', 21, false) }, 11, false));
                            J$.M(6038585, J$.R(6038537, 'utils', utils, false, true), 'entry', false)(J$.R(6038545, 'testView', testView, false, true), J$.T(6038577, {
                                'keys': J$.T(6038569, [
                                    J$.T(6038553, 'Hearts', 21, false),
                                    J$.T(6038561, 'Clubs', 21, false)
                                ], 10, false)
                            }, 11, false));
                        } catch (J$e) {
                            J$.Ex(6039713, J$e);
                        } finally {
                            if (J$.Fr(6039721))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false)), J$.T(6038633, 'catch', 21, false), false)(J$.T(6038689, function (err) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(6038665, arguments.callee, this, arguments);
                            arguments = J$.N(6038673, 'arguments', arguments, true, false, false);
                            err = J$.N(6038681, 'err', err, true, false, false);
                            J$.M(6038657, J$.I(typeof console === 'undefined' ? console = J$.R(6038641, 'console', undefined, true, true) : console = J$.R(6038641, 'console', console, true, true)), 'log', false)(J$.R(6038649, 'err', err, false, false));
                        } catch (J$e) {
                            J$.Ex(6039729, J$e);
                        } finally {
                            if (J$.Fr(6039737))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false)), 'then', false)(J$.T(6038761, function (response) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(6038737, arguments.callee, this, arguments);
                            arguments = J$.N(6038745, 'arguments', arguments, true, false, false);
                            response = J$.N(6038753, 'response', response, true, false, false);
                            J$.M(6038729, J$.G(6038713, J$.R(6038705, 'nano', nano, false, true), 'db'), 'destroy', false)(J$.T(6038721, 'alice', 21, false));
                        } catch (J$e) {
                            J$.Ex(6039745, J$e);
                        } finally {
                            if (J$.Fr(6039753))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false)), J$.T(6038777, 'catch', 21, false), false)(J$.T(6038833, function (err) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(6038809, arguments.callee, this, arguments);
                            arguments = J$.N(6038817, 'arguments', arguments, true, false, false);
                            err = J$.N(6038825, 'err', err, true, false, false);
                            J$.M(6038801, J$.I(typeof console === 'undefined' ? console = J$.R(6038785, 'console', undefined, true, true) : console = J$.R(6038785, 'console', console, true, true)), 'log', false)(J$.R(6038793, 'err', err, false, false));
                        } catch (J$e) {
                            J$.Ex(6039761, J$e);
                        } finally {
                            if (J$.Fr(6039769))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(6039937, J$e);
        } finally {
            if (J$.Sr(6039945))
                continue jalangiLabel17;
            else
                break jalangiLabel17;
        }
    }
// JALANGI DO NOT INSTRUMENT

