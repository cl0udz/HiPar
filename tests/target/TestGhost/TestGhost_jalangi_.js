J$.iids = {"9":[1,1,1,8],"17":[1,9,1,29],"25":[1,1,1,30],"33":[1,1,1,31],"41":[2,13,2,20],"49":[2,21,2,42],"57":[2,13,2,43],"65":[2,13,2,43],"73":[2,13,2,43],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[6,15,6,19],"129":[6,26,6,28],"137":[6,42,6,77],"145":[6,26,6,78],"147":[6,26,6,41],"153":[6,15,6,79],"155":[6,15,6,25],"161":[6,15,6,79],"169":[6,15,6,79],"177":[7,1,7,6],"185":[7,22,7,29],"193":[7,1,7,30],"195":[7,1,7,21],"201":[7,1,7,31],"209":[1,1,7,31],"217":[1,1,7,31],"225":[1,1,7,31],"233":[1,1,7,31],"241":[1,1,7,31],"249":[1,1,7,31],"nBranches":0,"originalCodeFileName":"/home/hipar/HiPar/tests/target/TestGhost/TestGhost.js","instrumentedCodeFileName":"/home/hipar/HiPar/tests/target/TestGhost/TestGhost_jalangi_.js","code":"require(\"./current/index.js\")\nvar utils = require('../TestcaseUtils.js');\nvar fs = require(\"fs\")\n\n\nvar reqlist = JSON.parse(fs.readFileSync(\"~/Download/log_1593260810674.json\"))\nutils.requestFromLog(reqlist)"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/home/hipar/HiPar/tests/target/TestGhost/TestGhost_jalangi_.js', '/home/hipar/HiPar/tests/target/TestGhost/TestGhost.js');
            J$.N(217, 'utils', utils, 0);
            J$.N(225, 'fs', fs, 0);
            J$.N(233, 'reqlist', reqlist, 0);
            J$.X1(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "./current/index.js", 21, false)));
            var utils = J$.X1(73, J$.W(65, 'utils', J$.F(57, J$.R(41, 'require', require, 2), 0)(J$.T(49, '../TestcaseUtils.js', 21, false)), utils, 3));
            var fs = J$.X1(113, J$.W(105, 'fs', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, "fs", 21, false)), fs, 3));
            var reqlist = J$.X1(169, J$.W(161, 'reqlist', J$.M(153, J$.R(121, 'JSON', JSON, 2), 'parse', 0)(J$.M(145, J$.R(129, 'fs', fs, 1), 'readFileSync', 0)(J$.T(137, "~/Download/log_1593260810674.json", 21, false))), reqlist, 3));
            J$.X1(201, J$.M(193, J$.R(177, 'utils', utils, 1), 'requestFromLog', 0)(J$.R(185, 'reqlist', reqlist, 1)));
        } catch (J$e) {
            J$.Ex(241, J$e);
        } finally {
            if (J$.Sr(249)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
