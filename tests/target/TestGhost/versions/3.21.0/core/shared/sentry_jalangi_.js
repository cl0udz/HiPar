J$.iids = {"8":[9,5,9,43],"9":[1,14,1,21],"10":[9,21,9,43],"16":[25,21,25,57],"17":[1,22,1,32],"18":[15,18,15,36],"24":[9,5,9,43],"25":[1,14,1,33],"26":[25,21,25,57],"33":[1,14,1,33],"34":[31,24,31,48],"41":[1,14,1,33],"49":[2,20,2,26],"57":[2,31,2,39],"65":[2,20,2,40],"67":[2,20,2,30],"73":[2,20,2,40],"81":[2,20,2,40],"89":[3,14,3,21],"97":[3,22,3,40],"105":[3,14,3,41],"113":[3,14,3,41],"121":[3,14,3,41],"129":[6,5,6,9],"137":[6,5,6,11],"145":[6,5,6,12],"153":[5,19,7,2],"161":[5,19,7,2],"169":[5,19,7,2],"177":[5,19,7,2],"185":[5,19,7,2],"193":[5,19,7,2],"201":[5,19,7,2],"209":[5,19,7,2],"217":[5,19,7,2],"225":[9,5,9,17],"233":[9,22,9,34],"241":[9,22,9,43],"249":[10,18,10,25],"257":[10,26,10,40],"265":[10,18,10,41],"273":[10,18,10,41],"281":[10,18,10,41],"289":[11,19,11,26],"297":[11,27,11,56],"305":[11,19,11,57],"313":[11,19,11,62],"321":[11,19,11,62],"329":[11,19,11,62],"337":[12,23,12,29],"345":[12,34,12,39],"353":[12,23,12,40],"355":[12,23,12,33],"361":[12,23,12,40],"369":[12,23,12,40],"377":[13,5,13,11],"385":[14,14,14,26],"393":[14,14,14,30],"401":[15,18,15,26],"409":[15,29,15,36],"417":[16,22,16,33],"425":[13,17,16,35],"433":[13,5,16,36],"435":[13,5,13,16],"441":[13,5,16,37],"449":[19,5,19,11],"457":[20,25,20,31],"465":[20,25,20,40],"473":[20,25,20,57],"475":[20,25,20,55],"481":[21,23,21,29],"489":[21,23,21,38],"497":[25,22,25,28],"505":[25,22,25,34],"513":[25,51,25,56],"521":[25,22,25,57],"523":[25,22,25,50],"529":[26,28,26,32],"537":[26,28,26,32],"545":[26,21,26,33],"553":[31,24,31,29],"561":[31,24,31,40],"569":[31,45,31,48],"577":[31,24,31,48],"585":[31,17,31,49],"593":[22,32,32,14],"601":[22,32,32,14],"609":[22,32,32,14],"617":[22,32,32,14],"625":[22,32,32,14],"633":[21,52,32,16],"641":[21,23,32,17],"643":[21,23,21,51],"649":[34,27,34,33],"657":[34,27,34,50],"665":[19,22,34,52],"673":[19,5,34,52],"681":[19,5,34,53],"689":[37,5,37,11],"697":[38,25,38,36],"705":[39,23,39,34],"713":[40,27,40,57],"721":[40,27,40,57],"729":[40,27,40,57],"737":[40,27,40,57],"745":[37,22,40,59],"753":[37,5,40,59],"761":[37,5,40,60],"769":[1,1,42,2],"777":[1,1,42,2],"785":[1,1,42,2],"793":[1,1,42,2],"801":[1,1,42,2],"809":[1,1,42,2],"817":[1,1,42,2],"825":[1,1,42,2],"833":[5,19,7,2],"841":[5,19,7,2],"849":[25,17,27,18],"857":[22,32,32,14],"865":[22,32,32,14],"873":[40,27,40,57],"881":[40,27,40,57],"889":[9,1,42,2],"897":[1,1,42,2],"905":[1,1,42,2],"nBranches":6,"originalCodeFileName":"/home/hipar/HiPar/tests/target/TestGhost/versions/3.21.0/core/shared/sentry.js","instrumentedCodeFileName":"/home/hipar/HiPar/tests/target/TestGhost/versions/3.21.0/core/shared/sentry_jalangi_.js","code":"const config = require('./config');\nconst sentryConfig = config.get('sentry');\nconst errors = require('@tryghost/errors');\n\nconst expressNoop = function (req, res, next) {\n    next();\n};\n\nif (sentryConfig && !sentryConfig.disabled) {\n    const Sentry = require('@sentry/node');\n    const version = require('../server/lib/ghost-version').full;\n    const environment = config.get('env');\n    Sentry.init({\n        dsn: sentryConfig.dsn,\n        release: 'ghost@' + version,\n        environment: environment\n    });\n\n    module.exports = {\n        requestHandler: Sentry.Handlers.requestHandler(),\n        errorHandler: Sentry.Handlers.errorHandler({\n            shouldHandleError(error) {\n                // Sometimes non-Ghost issues will come into here but they won't\n                // have a statusCode so we should always handle them\n                if (!errors.utils.isIgnitionError(error)) {\n                    return true;\n                }\n\n                // Only handle 500 errors for now\n                // This is because the only other 5XX error should be 503, which are deliberate maintenance/boot errors\n                return (error.statusCode === 500);\n            }\n        }),\n        captureException: Sentry.captureException\n    };\n} else {\n    module.exports = {\n        requestHandler: expressNoop,\n        errorHandler: expressNoop,\n        captureException: () => {}\n    };\n}\n"};
jalangiLabel71:
    while (true) {
        try {
            J$.Se(769, '/home/hipar/HiPar/tests/target/TestGhost/versions/3.21.0/core/shared/sentry_jalangi_.js', '/home/hipar/HiPar/tests/target/TestGhost/versions/3.21.0/core/shared/sentry.js');
            J$.N(777, 'config', config, 0);
            J$.N(785, 'sentryConfig', sentryConfig, 0);
            J$.N(793, 'errors', errors, 0);
            J$.N(801, 'expressNoop', expressNoop, 0);
            J$.N(809, 'Sentry', Sentry, 0);
            J$.N(817, 'version', version, 0);
            J$.N(825, 'environment', environment, 0);
            var config = J$.X1(41, J$.W(33, 'config', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, './config', 21, false)), config, 3));
            var sentryConfig = J$.X1(81, J$.W(73, 'sentryConfig', J$.M(65, J$.R(49, 'config', config, 1), 'get', 0)(J$.T(57, 'sentry', 21, false)), sentryConfig, 3));
            var errors = J$.X1(121, J$.W(113, 'errors', J$.F(105, J$.R(89, 'require', require, 2), 0)(J$.T(97, '@tryghost/errors', 21, false)), errors, 3));
            var expressNoop = J$.X1(217, J$.W(209, 'expressNoop', J$.T(201, function expressNoop(req, res, next) {
                jalangiLabel68:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            expressNoop = J$.N(169, 'expressNoop', expressNoop, 0);
                            req = J$.N(177, 'req', req, 4);
                            res = J$.N(185, 'res', res, 4);
                            next = J$.N(193, 'next', next, 4);
                            J$.X1(145, J$.F(137, J$.R(129, 'next', next, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(833, J$e);
                        } finally {
                            if (J$.Fr(841))
                                continue jalangiLabel68;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 153), expressNoop, 3));
            if (J$.X1(889, J$.C(24, J$.C(8, J$.R(225, 'sentryConfig', sentryConfig, 1)) ? J$.U(10, '!', J$.G(241, J$.R(233, 'sentryConfig', sentryConfig, 1), 'disabled', 0)) : J$._()))) {
                var Sentry = J$.X1(281, J$.W(273, 'Sentry', J$.F(265, J$.R(249, 'require', require, 2), 0)(J$.T(257, '@sentry/node', 21, false)), Sentry, 3));
                var version = J$.X1(329, J$.W(321, 'version', J$.G(313, J$.F(305, J$.R(289, 'require', require, 2), 0)(J$.T(297, '../server/lib/ghost-version', 21, false)), 'full', 0), version, 3));
                var environment = J$.X1(369, J$.W(361, 'environment', J$.M(353, J$.R(337, 'config', config, 1), 'get', 0)(J$.T(345, 'env', 21, false)), environment, 3));
                J$.X1(441, J$.M(433, J$.R(377, 'Sentry', Sentry, 1), 'init', 0)(J$.T(425, {
                    dsn: J$.G(393, J$.R(385, 'sentryConfig', sentryConfig, 1), 'dsn', 0),
                    release: J$.B(18, '+', J$.T(401, 'ghost@', 21, false), J$.R(409, 'version', version, 1), 0),
                    environment: J$.R(417, 'environment', environment, 1)
                }, 11, false)));
                J$.X1(681, J$.P(673, J$.R(449, 'module', module, 2), 'exports', J$.T(665, {
                    requestHandler: J$.M(473, J$.G(465, J$.R(457, 'Sentry', Sentry, 1), 'Handlers', 0), 'requestHandler', 0)(),
                    errorHandler: J$.M(641, J$.G(489, J$.R(481, 'Sentry', Sentry, 1), 'Handlers', 0), 'errorHandler', 0)(J$.T(633, {
                        shouldHandleError: J$.T(625, function shouldHandleError(error) {
                            jalangiLabel69:
                                while (true) {
                                    try {
                                        J$.Fe(593, arguments.callee, this, arguments);
                                        arguments = J$.N(601, 'arguments', arguments, 4);
                                        shouldHandleError = J$.N(609, 'shouldHandleError', shouldHandleError, 0);
                                        error = J$.N(617, 'error', error, 4);
                                        if (J$.X1(849, J$.C(16, J$.U(26, '!', J$.M(521, J$.G(505, J$.R(497, 'errors', errors, 1), 'utils', 0), 'isIgnitionError', 0)(J$.R(513, 'error', error, 0)))))) {
                                            return J$.X1(545, J$.Rt(537, J$.T(529, true, 23, false)));
                                        }
                                        return J$.X1(585, J$.Rt(577, J$.B(34, '===', J$.G(561, J$.R(553, 'error', error, 0), 'statusCode', 0), J$.T(569, 500, 22, false), 0)));
                                    } catch (J$e) {
                                        J$.Ex(857, J$e);
                                    } finally {
                                        if (J$.Fr(865))
                                            continue jalangiLabel69;
                                        else
                                            return J$.Ra();
                                    }
                                }
                        }, 12, false, 593)
                    }, 11, false)),
                    captureException: J$.G(657, J$.R(649, 'Sentry', Sentry, 1), 'captureException', 0)
                }, 11, false), 0));
            } else {
                J$.X1(761, J$.P(753, J$.R(689, 'module', module, 2), 'exports', J$.T(745, {
                    requestHandler: J$.R(697, 'expressNoop', expressNoop, 1),
                    errorHandler: J$.R(705, 'expressNoop', expressNoop, 1),
                    captureException: J$.T(737, function captureException() {
                        jalangiLabel70:
                            while (true) {
                                try {
                                    J$.Fe(713, arguments.callee, this, arguments);
                                    arguments = J$.N(721, 'arguments', arguments, 4);
                                    captureException = J$.N(729, 'captureException', captureException, 0);
                                } catch (J$e) {
                                    J$.Ex(873, J$e);
                                } finally {
                                    if (J$.Fr(881))
                                        continue jalangiLabel70;
                                    else
                                        return J$.Ra();
                                }
                            }
                    }, 12, false, 713)
                }, 11, false), 0));
            }
        } catch (J$e) {
            J$.Ex(897, J$e);
        } finally {
            if (J$.Sr(905)) {
                J$.L();
                continue jalangiLabel71;
            } else {
                J$.L();
                break jalangiLabel71;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
