J$.noInstrEval = false;
jalangiLabel3:
    while (true) {
        try {
            J$.Se(6015521, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestCouchNode/TestCouchNode.js');
            function testUpsert(query) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(6015401, arguments.callee, this, arguments);
                            arguments = J$.N(6015409, 'arguments', arguments, true, false, false);
                            query = J$.N(6015417, 'query', query, true, false, false);
                            J$.N(6015425, 'couchbase', couchbase, false, false, false);
                            J$.N(6015433, 'cluster', cluster, false, false, false);
                            J$.N(6015441, 'bucket', bucket, false, false, false);
                            var couchbase = J$.W(6015145, 'couchbase', J$.G(6015137, J$.F(6015129, J$.I(typeof require === 'undefined' ? require = J$.R(6015113, 'require', undefined, true, true) : require = J$.R(6015113, 'require', require, true, true)), false)(J$.T(6015121, 'couchbase', 21, false)), 'Mock'), couchbase, false, false);
                            var cluster = J$.W(6015169, 'cluster', J$.M(6015161, J$.R(6015153, 'couchbase', couchbase, false, false), 'Cluster', true)(), cluster, false, false);
                            var bucket = J$.W(6015193, 'bucket', J$.M(6015185, J$.R(6015177, 'cluster', cluster, false, false), 'openBucket', false)(), bucket, false, false);
                            J$.M(6015393, J$.R(6015201, 'bucket', bucket, false, false), 'upsert', false)(J$.T(6015209, 'testdoc', 21, false), J$.R(6015217, 'query', query, false, false), J$.T(6015385, function (err, result) {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(6015353, arguments.callee, this, arguments);
                                            arguments = J$.N(6015361, 'arguments', arguments, true, false, false);
                                            err = J$.N(6015369, 'err', err, true, false, false);
                                            result = J$.N(6015377, 'result', result, true, false, false);
                                            if (J$.C(312176, J$.R(6015225, 'err', err, false, false)))
                                                throw J$.R(6015233, 'err', err, false, false);
                                            J$.M(6015345, J$.R(6015241, 'bucket', bucket, false, false), 'get', false)(J$.T(6015249, 'testdoc', 21, false), J$.T(6015337, function (err, result) {
                                                jalangiLabel0:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(6015305, arguments.callee, this, arguments);
                                                            arguments = J$.N(6015313, 'arguments', arguments, true, false, false);
                                                            err = J$.N(6015321, 'err', err, true, false, false);
                                                            result = J$.N(6015329, 'result', result, true, false, false);
                                                            if (J$.C(312184, J$.R(6015257, 'err', err, false, false)))
                                                                throw J$.R(6015265, 'err', err, false, false);
                                                            J$.M(6015297, J$.I(typeof console === 'undefined' ? console = J$.R(6015273, 'console', undefined, true, true) : console = J$.R(6015273, 'console', console, true, true)), 'log', false)(J$.G(6015289, J$.R(6015281, 'result', result, false, false), 'value'));
                                                        } catch (J$e) {
                                                            J$.Ex(6015561, J$e);
                                                        } finally {
                                                            if (J$.Fr(6015569))
                                                                continue jalangiLabel0;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false));
                                        } catch (J$e) {
                                            J$.Ex(6015577, J$e);
                                        } finally {
                                            if (J$.Fr(6015585))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6015593, J$e);
                        } finally {
                            if (J$.Fr(6015601))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(6015529, 'couchbase', couchbase, false, false, false);
            testUpsert = J$.N(6015545, 'testUpsert', J$.T(6015537, testUpsert, 12, false), true, false, false);
            J$.N(6015553, 'utils', utils, false, false, false);
            var couchbase = J$.W(6015105, 'couchbase', J$.F(6015097, J$.I(typeof require === 'undefined' ? require = J$.R(6015081, 'require', undefined, true, true) : require = J$.R(6015081, 'require', require, true, true)), false)(J$.T(6015089, 'couchbase', 21, false)), couchbase, false, true);
            var utils = J$.W(6015473, 'utils', J$.F(6015465, J$.I(typeof require === 'undefined' ? require = J$.R(6015449, 'require', undefined, true, true) : require = J$.R(6015449, 'require', require, true, true)), false)(J$.T(6015457, '../TestcaseUtils.js', 21, false)), utils, false, true);
            J$.M(6015513, J$.R(6015481, 'utils', utils, false, true), 'entry', false)(J$.R(6015489, 'testUpsert', testUpsert, false, true), J$.T(6015505, { name: J$.T(6015497, 'Frank', 21, false) }, 11, false));
        } catch (J$e) {
            J$.Ex(6015609, J$e);
        } finally {
            if (J$.Sr(6015617))
                continue jalangiLabel3;
            else
                break jalangiLabel3;
        }
    }
// JALANGI DO NOT INSTRUMENT

