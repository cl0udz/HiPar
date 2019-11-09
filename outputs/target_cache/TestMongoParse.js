J$.noInstrEval = false;
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestMongoParse.js');
            J$.N(217, 'parser', parser, false, false, false);
            J$.N(225, 'path', path, false, false, false);
            J$.N(233, 'utils', utils, false, false, false);
            J$.N(241, 'query', query, false, false, false);
            var parser = J$.W(33, 'parser', J$.F(25, J$.I(typeof require === 'undefined' ? require = J$.R(9, 'require', undefined, true, true) : require = J$.R(9, 'require', require, true, true)), false)(J$.T(17, 'mongo-parse', 21, false)), parser, false, true);
            var path = J$.W(65, 'path', J$.F(57, J$.I(typeof require === 'undefined' ? require = J$.R(41, 'require', undefined, true, true) : require = J$.R(41, 'require', require, true, true)), false)(J$.T(49, 'path', 21, false)), path, false, true);
            var utils = J$.W(121, 'utils', J$.F(113, J$.I(typeof require === 'undefined' ? require = J$.R(73, 'require', undefined, true, true) : require = J$.R(73, 'require', require, true, true)), false)(J$.M(105, J$.R(81, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(89, '__dirname', undefined, true, true) : __dirname = J$.R(89, '__dirname', __dirname, true, true)), J$.T(97, 'Utils.js', 21, false))), utils, false, true);
            var query = J$.W(161, 'query', J$.T(153, {
                'username': J$.T(129, 'admin', 21, false),
                'password': J$.T(137, 'adminPass', 21, false),
                'id': J$.T(145, '101', 21, false)
            }, 11, false), query, false, true);
            J$.M(201, J$.R(169, 'utils', utils, false, true), 'loopProperty', false)(J$.G(185, J$.R(177, 'parser', parser, false, true), 'parse'), J$.R(193, 'query', query, false, true));
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257))
                continue jalangiLabel0;
            else
                break jalangiLabel0;
        }
    }
// JALANGI DO NOT INSTRUMENT

