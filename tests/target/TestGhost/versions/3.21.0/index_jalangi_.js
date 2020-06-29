J$.iids = {"9":[4,17,4,21],"10":[35,37,35,59],"17":[4,17,4,27],"18":[35,36,35,67],"19":[4,17,4,25],"25":[4,17,4,27],"26":[35,36,35,73],"33":[4,17,4,27],"34":[40,22,40,24],"41":[5,13,5,20],"49":[5,21,5,37],"57":[5,13,5,38],"65":[5,45,5,57],"73":[5,13,5,58],"75":[5,13,5,44],"81":[5,13,5,58],"89":[5,13,5,58],"97":[7,14,7,21],"105":[7,22,7,44],"113":[7,14,7,45],"121":[7,14,7,45],"129":[7,14,7,45],"137":[9,1,9,6],"145":[9,7,9,26],"153":[9,1,9,27],"161":[9,1,9,28],"169":[11,13,11,20],"177":[11,21,11,29],"185":[11,13,11,30],"193":[11,13,11,30],"201":[11,13,11,30],"209":[13,1,13,6],"217":[13,7,13,23],"225":[13,1,13,24],"233":[13,1,13,25],"241":[15,15,15,22],"249":[15,23,15,46],"257":[15,15,15,47],"265":[15,15,15,47],"273":[15,15,15,47],"281":[16,15,16,22],"289":[16,23,16,46],"297":[16,15,16,47],"305":[16,15,16,47],"313":[16,15,16,47],"321":[17,18,17,25],"329":[17,26,17,56],"337":[17,18,17,57],"345":[17,18,17,57],"353":[17,18,17,57],"361":[19,16,19,23],"369":[19,24,19,31],"377":[19,16,19,32],"385":[19,16,19,32],"393":[19,16,19,32],"401":[23,1,23,9],"409":[23,14,23,20],"417":[23,14,23,35],"425":[23,1,23,36],"427":[23,1,23,13],"433":[23,1,23,37],"441":[25,1,25,6],"449":[25,7,25,27],"457":[25,1,25,28],"465":[25,1,25,29],"473":[27,1,27,6],"481":[27,1,27,8],"489":[29,5,29,13],"497":[29,18,29,28],"505":[29,18,29,34],"513":[29,18,29,46],"515":[29,18,29,44],"521":[29,48,29,59],"529":[29,48,29,67],"537":[29,5,29,68],"539":[29,5,29,17],"545":[29,5,29,69],"553":[31,5,31,10],"561":[31,11,31,27],"569":[31,5,31,28],"577":[31,5,31,29],"585":[33,12,33,23],"593":[33,30,33,38],"601":[33,12,33,39],"603":[33,12,33,29],"609":[35,9,35,16],"617":[35,22,35,34],"625":[35,37,35,41],"633":[35,37,35,47],"635":[35,37,35,45],"641":[35,50,35,59],"649":[35,63,35,67],"657":[35,70,35,73],"665":[35,9,35,74],"667":[35,9,35,21],"673":[35,9,35,75],"681":[34,10,36,6],"689":[34,10,36,6],"697":[34,10,36,6],"705":[34,10,36,6],"713":[33,12,36,7],"715":[33,12,34,9],"721":[33,12,36,7],"729":[33,5,36,8],"737":[27,14,37,2],"745":[27,14,37,2],"753":[27,14,37,2],"761":[27,14,37,2],"769":[27,1,37,3],"771":[27,1,27,13],"777":[38,5,38,12],"785":[38,19,38,22],"793":[38,5,38,23],"795":[38,5,38,18],"801":[38,5,38,24],"809":[39,5,39,15],"817":[40,9,40,16],"825":[40,23,40,24],"833":[40,9,40,25],"835":[40,9,40,21],"841":[40,9,40,26],"849":[39,16,41,6],"857":[39,16,41,6],"865":[39,16,41,6],"873":[41,8,41,11],"881":[39,5,41,12],"889":[39,5,41,13],"897":[37,10,42,2],"905":[37,10,42,2],"913":[37,10,42,2],"921":[37,10,42,2],"929":[27,1,42,3],"931":[27,1,37,9],"937":[27,1,42,4],"945":[1,1,42,4],"953":[1,1,42,4],"961":[1,1,42,4],"969":[1,1,42,4],"977":[1,1,42,4],"985":[1,1,42,4],"993":[1,1,42,4],"1001":[1,1,42,4],"1009":[1,1,42,4],"1017":[34,10,36,6],"1025":[34,10,36,6],"1033":[27,14,37,2],"1041":[27,14,37,2],"1049":[39,16,41,6],"1057":[39,16,41,6],"1065":[37,10,42,2],"1073":[37,10,42,2],"1081":[1,1,42,4],"1089":[1,1,42,4],"nBranches":0,"originalCodeFileName":"/home/hipar/HiPar/tests/target/TestGhost/versions/3.21.0/index.js","instrumentedCodeFileName":"/home/hipar/HiPar/tests/target/TestGhost/versions/3.21.0/index_jalangi_.js","code":"// # Ghost Startup\n// Orchestrates the startup of Ghost when run from command line.\n\nconst startTime = Date.now();\nconst debug = require('ghost-ignition').debug('boot:index');\n// Sentry must be initialised early on\nconst sentry = require('./core/shared/sentry');\n\ndebug('First requires...');\n\nconst ghost = require('./core');\n\ndebug('Required ghost');\n\nconst express = require('./core/shared/express');\nconst logging = require('./core/shared/logging');\nconst urlService = require('./core/frontend/services/url');\n// This is what listen gets called on, it needs to be a full Express App\nconst ghostApp = express('ghost');\n\n// Use the request handler at the top level\n// @TODO: decide if this should be here or in parent App - should it come after request id mw?\nghostApp.use(sentry.requestHandler);\n\ndebug('Initialising Ghost');\n\nghost().then(function (ghostServer) {\n    // Mount our Ghost instance on our desired subdirectory path if it exists.\n    ghostApp.use(urlService.utils.getSubdir(), ghostServer.rootApp);\n\n    debug('Starting Ghost');\n    // Let Ghost handle starting our server instance.\n    return ghostServer.start(ghostApp)\n        .then(function afterStart() {\n            logging.info('Ghost boot', (Date.now() - startTime) / 1000 + 's');\n        });\n}).catch(function (err) {\n    logging.error(err);\n    setTimeout(() => {\n        process.exit(-1);\n    }, 100);\n});\n"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(945, '/home/hipar/HiPar/tests/target/TestGhost/versions/3.21.0/index_jalangi_.js', '/home/hipar/HiPar/tests/target/TestGhost/versions/3.21.0/index.js');
            J$.N(953, 'startTime', startTime, 0);
            J$.N(961, 'debug', debug, 0);
            J$.N(969, 'sentry', sentry, 0);
            J$.N(977, 'ghost', ghost, 0);
            J$.N(985, 'express', express, 0);
            J$.N(993, 'logging', logging, 0);
            J$.N(1001, 'urlService', urlService, 0);
            J$.N(1009, 'ghostApp', ghostApp, 0);
            var startTime = J$.X1(33, J$.W(25, 'startTime', J$.M(17, J$.R(9, 'Date', Date, 2), 'now', 0)(), startTime, 3));
            var debug = J$.X1(89, J$.W(81, 'debug', J$.M(73, J$.F(57, J$.R(41, 'require', require, 2), 0)(J$.T(49, 'ghost-ignition', 21, false)), 'debug', 0)(J$.T(65, 'boot:index', 21, false)), debug, 3));
            var sentry = J$.X1(129, J$.W(121, 'sentry', J$.F(113, J$.R(97, 'require', require, 2), 0)(J$.T(105, './core/shared/sentry', 21, false)), sentry, 3));
            J$.X1(161, J$.F(153, J$.R(137, 'debug', debug, 1), 0)(J$.T(145, 'First requires...', 21, false)));
            var ghost = J$.X1(201, J$.W(193, 'ghost', J$.F(185, J$.R(169, 'require', require, 2), 0)(J$.T(177, './core', 21, false)), ghost, 3));
            J$.X1(233, J$.F(225, J$.R(209, 'debug', debug, 1), 0)(J$.T(217, 'Required ghost', 21, false)));
            var express = J$.X1(273, J$.W(265, 'express', J$.F(257, J$.R(241, 'require', require, 2), 0)(J$.T(249, './core/shared/express', 21, false)), express, 3));
            var logging = J$.X1(313, J$.W(305, 'logging', J$.F(297, J$.R(281, 'require', require, 2), 0)(J$.T(289, './core/shared/logging', 21, false)), logging, 3));
            var urlService = J$.X1(353, J$.W(345, 'urlService', J$.F(337, J$.R(321, 'require', require, 2), 0)(J$.T(329, './core/frontend/services/url', 21, false)), urlService, 3));
            var ghostApp = J$.X1(393, J$.W(385, 'ghostApp', J$.F(377, J$.R(361, 'express', express, 1), 0)(J$.T(369, 'ghost', 21, false)), ghostApp, 3));
            J$.X1(433, J$.M(425, J$.R(401, 'ghostApp', ghostApp, 1), 'use', 0)(J$.G(417, J$.R(409, 'sentry', sentry, 1), 'requestHandler', 0)));
            J$.X1(465, J$.F(457, J$.R(441, 'debug', debug, 1), 0)(J$.T(449, 'Initialising Ghost', 21, false)));
            J$.X1(937, J$.M(929, J$.M(769, J$.F(481, J$.R(473, 'ghost', ghost, 1), 0)(), 'then', 0)(J$.T(761, function (ghostServer) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(737, arguments.callee, this, arguments);
                            arguments = J$.N(745, 'arguments', arguments, 4);
                            ghostServer = J$.N(753, 'ghostServer', ghostServer, 4);
                            J$.X1(545, J$.M(537, J$.R(489, 'ghostApp', ghostApp, 1), 'use', 0)(J$.M(513, J$.G(505, J$.R(497, 'urlService', urlService, 1), 'utils', 0), 'getSubdir', 0)(), J$.G(529, J$.R(521, 'ghostServer', ghostServer, 0), 'rootApp', 0)));
                            J$.X1(577, J$.F(569, J$.R(553, 'debug', debug, 1), 0)(J$.T(561, 'Starting Ghost', 21, false)));
                            return J$.X1(729, J$.Rt(721, J$.M(713, J$.M(601, J$.R(585, 'ghostServer', ghostServer, 0), 'start', 0)(J$.R(593, 'ghostApp', ghostApp, 1)), 'then', 0)(J$.T(705, function afterStart() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(681, arguments.callee, this, arguments);
                                            arguments = J$.N(689, 'arguments', arguments, 4);
                                            afterStart = J$.N(697, 'afterStart', afterStart, 0);
                                            J$.X1(673, J$.M(665, J$.R(609, 'logging', logging, 1), 'info', 0)(J$.T(617, 'Ghost boot', 21, false), J$.B(26, '+', J$.B(18, '/', J$.B(10, '-', J$.M(633, J$.R(625, 'Date', Date, 2), 'now', 0)(), J$.R(641, 'startTime', startTime, 1), 0), J$.T(649, 1000, 22, false), 0), J$.T(657, 's', 21, false), 0)));
                                        } catch (J$e) {
                                            J$.Ex(1017, J$e);
                                        } finally {
                                            if (J$.Fr(1025))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 681))));
                        } catch (J$e) {
                            J$.Ex(1033, J$e);
                        } finally {
                            if (J$.Fr(1041))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 737)), 'catch', 0)(J$.T(921, function (err) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(897, arguments.callee, this, arguments);
                            arguments = J$.N(905, 'arguments', arguments, 4);
                            err = J$.N(913, 'err', err, 4);
                            J$.X1(801, J$.M(793, J$.R(777, 'logging', logging, 1), 'error', 0)(J$.R(785, 'err', err, 0)));
                            J$.X1(889, J$.F(881, J$.R(809, 'setTimeout', setTimeout, 2), 0)(J$.T(865, function () {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(849, arguments.callee, this, arguments);
                                            arguments = J$.N(857, 'arguments', arguments, 4);
                                            J$.X1(841, J$.M(833, J$.R(817, 'process', process, 2), 'exit', 0)(J$.U(34, '-', J$.T(825, 1, 22, false))));
                                        } catch (J$e) {
                                            J$.Ex(1049, J$e);
                                        } finally {
                                            if (J$.Fr(1057))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 849), J$.T(873, 100, 22, false)));
                        } catch (J$e) {
                            J$.Ex(1065, J$e);
                        } finally {
                            if (J$.Fr(1073))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 897)));
        } catch (J$e) {
            J$.Ex(1081, J$e);
        } finally {
            if (J$.Sr(1089)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
