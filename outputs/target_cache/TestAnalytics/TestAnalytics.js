J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(2387665, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestAnalytics/TestAnalytics.js');
            function test(input) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(2387577, arguments.callee, this, arguments);
                            arguments = J$.N(2387585, 'arguments', arguments, true, false, false);
                            input = J$.N(2387593, 'input', input, true, false, false);
                            J$.M(2387569, J$.R(2387553, 'analytics', analytics, false, true), 'identify', false)(J$.R(2387561, 'input', input, false, false));
                        } catch (J$e) {
                            J$.Ex(2387721, J$e);
                        } finally {
                            if (J$.Fr(2387729))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(2387673, 'Analytics', Analytics, false, false, false);
            J$.N(2387681, 'analytics', analytics, false, false, false);
            J$.N(2387689, 'input', input, false, false, false);
            test = J$.N(2387705, 'test', J$.T(2387697, test, 12, false), true, false, false);
            J$.N(2387713, 'utils', utils, false, false, false);
            var Analytics = J$.W(2387449, 'Analytics', J$.F(2387441, J$.I(typeof require === 'undefined' ? require = J$.R(2387425, 'require', undefined, true, true) : require = J$.R(2387425, 'require', require, true, true)), false)(J$.T(2387433, 'analytics-node', 21, false)), Analytics, false, true);
            var analytics = J$.W(2387481, 'analytics', J$.F(2387473, J$.R(2387457, 'Analytics', Analytics, false, true), true)(J$.T(2387465, 'YOUR_WRITE_KEY', 21, false)), analytics, false, true);
            var input = J$.W(2387545, 'input', J$.T(2387537, {
                userId: J$.T(2387489, '019mr8mf4r', 21, false),
                traits: J$.T(2387529, {
                    name: J$.T(2387497, 'Michael Bolton', 21, false),
                    email: J$.T(2387505, 'mbolton@initech.com', 21, false),
                    plan: J$.T(2387513, 'Enterprise', 21, false),
                    friends: J$.T(2387521, 42, 22, false)
                }, 11, false)
            }, 11, false), input, false, true);
            var utils = J$.W(2387625, 'utils', J$.F(2387617, J$.I(typeof require === 'undefined' ? require = J$.R(2387601, 'require', undefined, true, true) : require = J$.R(2387601, 'require', require, true, true)), false)(J$.T(2387609, '../TestcaseUtils.js', 21, false)), utils, false, true);
            J$.M(2387657, J$.R(2387633, 'utils', utils, false, true), 'entry', false)(J$.R(2387641, 'test', test, false, true), J$.R(2387649, 'input', input, false, true));
        } catch (J$e) {
            J$.Ex(2387737, J$e);
        } finally {
            if (J$.Sr(2387745))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

