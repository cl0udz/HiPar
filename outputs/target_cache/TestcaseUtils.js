J$.noInstrEval = false;
jalangiLabel14:
    while (true) {
        try {
            J$.Se(3989457, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestcaseUtils.js');
            function sendViaWebRequest(method, data, location, port, hostname) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(3986793, arguments.callee, this, arguments);
                            arguments = J$.N(3986801, 'arguments', arguments, true, false, false);
                            method = J$.N(3986809, 'method', method, true, false, false);
                            data = J$.N(3986817, 'data', data, true, false, false);
                            location = J$.N(3986825, 'location', location, true, false, false);
                            port = J$.N(3986833, 'port', port, true, false, false);
                            hostname = J$.N(3986841, 'hostname', hostname, true, false, false);
                            J$.N(3986849, 'http', http, false, false, false);
                            J$.N(3986857, 'content', content, false, false, false);
                            J$.N(3986865, 'options', options, false, false, false);
                            J$.N(3986873, 'req', req, false, false, false);
                            var http = J$.W(3985809, 'http', J$.F(3985801, J$.I(typeof require === 'undefined' ? require = J$.R(3985785, 'require', undefined, true, true) : require = J$.R(3985785, 'require', require, true, true)), false)(J$.T(3985793, 'http', 21, false)), http, false, false);
                            var content = J$.W(3985825, 'content', J$.R(3985817, 'data', data, false, false), content, false, false);
                            var options = J$.W(3985889, 'options', J$.T(3985881, {
                                hostname: J$.C(178488, J$.R(3985833, 'hostname', hostname, false, false)) ? J$._() : J$.T(3985841, '127.0.0.1', 21, false),
                                port: J$.R(3985849, 'port', port, false, false),
                                path: J$.C(178496, J$.R(3985857, 'location', location, false, false)) ? J$._() : J$.T(3985865, '/', 21, false),
                                method: J$.T(3985873, 'GET', 21, false)
                            }, 11, false), options, false, false);
                            if (J$.C(178504, J$.B(547514, '==', J$.R(3985897, 'method', method, false, false), J$.T(3985905, 'post', 21, false)))) {
                                J$.P(3985929, J$.R(3985913, 'options', options, false, false), 'method', J$.T(3985921, 'POST', 21, false));
                                J$.P(3985961, J$.R(3985937, 'options', options, false, false), 'headers', J$.T(3985953, { 'Content-Type': J$.T(3985945, 'application/json', 21, false) }, 11, false));
                                var req = J$.W(3986233, 'req', J$.M(3986225, J$.R(3985969, 'http', http, false, false), 'request', false)(J$.R(3985977, 'options', options, false, false), J$.T(3986217, function (res) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(3986193, arguments.callee, this, arguments);
                                                arguments = J$.N(3986201, 'arguments', arguments, true, false, false);
                                                res = J$.N(3986209, 'res', res, true, false, false);
                                                J$.M(3986017, J$.I(typeof console === 'undefined' ? console = J$.R(3985985, 'console', undefined, true, true) : console = J$.R(3985985, 'console', console, true, true)), 'log', false)(J$.B(547522, '+', J$.T(3985993, 'STATUS: ', 21, false), J$.G(3986009, J$.R(3986001, 'res', res, false, false), 'statusCode')));
                                                J$.M(3986073, J$.I(typeof console === 'undefined' ? console = J$.R(3986025, 'console', undefined, true, true) : console = J$.R(3986025, 'console', console, true, true)), 'log', false)(J$.B(547530, '+', J$.T(3986033, 'HEADERS: ', 21, false), J$.M(3986065, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3986041, 'JSON', undefined, true, true) : JSON = J$.R(3986041, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3986057, J$.R(3986049, 'res', res, false, false), 'headers'))));
                                                J$.M(3986097, J$.R(3986081, 'res', res, false, false), 'setEncoding', false)(J$.T(3986089, 'utf8', 21, false));
                                                J$.M(3986185, J$.R(3986105, 'res', res, false, false), 'on', false)(J$.T(3986113, 'data', 21, false), J$.T(3986177, function (chunk) {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3986153, arguments.callee, this, arguments);
                                                                arguments = J$.N(3986161, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3986169, 'chunk', chunk, true, false, false);
                                                                J$.M(3986145, J$.I(typeof console === 'undefined' ? console = J$.R(3986121, 'console', undefined, true, true) : console = J$.R(3986121, 'console', console, true, true)), 'log', false)(J$.B(547538, '+', J$.T(3986129, 'BODY: ', 21, false), J$.R(3986137, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3989633, J$e);
                                                            } finally {
                                                                if (J$.Fr(3989641))
                                                                    continue jalangiLabel0;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3989649, J$e);
                                            } finally {
                                                if (J$.Fr(3989657))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3986329, J$.R(3986241, 'req', req, false, false), 'on', false)(J$.T(3986249, 'error', 21, false), J$.T(3986321, function (e) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(3986297, arguments.callee, this, arguments);
                                                arguments = J$.N(3986305, 'arguments', arguments, true, false, false);
                                                e = J$.N(3986313, 'e', e, true, false, false);
                                                J$.M(3986289, J$.I(typeof console === 'undefined' ? console = J$.R(3986257, 'console', undefined, true, true) : console = J$.R(3986257, 'console', console, true, true)), 'log', false)(J$.B(547546, '+', J$.T(3986265, 'problem with request: ', 21, false), J$.G(3986281, J$.R(3986273, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3989665, J$e);
                                            } finally {
                                                if (J$.Fr(3989673))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3986353, J$.R(3986337, 'req', req, false, false), 'write', false)(J$.R(3986345, 'content', content, false, false));
                                J$.M(3986369, J$.R(3986361, 'req', req, false, false), 'end', false)();
                            } else {
                                J$.A(3986401, J$.R(3986377, 'options', options, false, false), 'location', '+')(J$.B(547554, '+', J$.T(3986385, '?', 21, false), J$.R(3986393, 'content', content, false, false)));
                                var req = J$.W(3986673, 'req', J$.M(3986665, J$.R(3986409, 'http', http, false, false), 'request', false)(J$.R(3986417, 'options', options, false, false), J$.T(3986657, function (res) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(3986633, arguments.callee, this, arguments);
                                                arguments = J$.N(3986641, 'arguments', arguments, true, false, false);
                                                res = J$.N(3986649, 'res', res, true, false, false);
                                                J$.M(3986457, J$.I(typeof console === 'undefined' ? console = J$.R(3986425, 'console', undefined, true, true) : console = J$.R(3986425, 'console', console, true, true)), 'log', false)(J$.B(547562, '+', J$.T(3986433, 'STATUS: ', 21, false), J$.G(3986449, J$.R(3986441, 'res', res, false, false), 'statusCode')));
                                                J$.M(3986513, J$.I(typeof console === 'undefined' ? console = J$.R(3986465, 'console', undefined, true, true) : console = J$.R(3986465, 'console', console, true, true)), 'log', false)(J$.B(547570, '+', J$.T(3986473, 'HEADERS: ', 21, false), J$.M(3986505, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3986481, 'JSON', undefined, true, true) : JSON = J$.R(3986481, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3986497, J$.R(3986489, 'res', res, false, false), 'headers'))));
                                                J$.M(3986537, J$.R(3986521, 'res', res, false, false), 'setEncoding', false)(J$.T(3986529, 'utf8', 21, false));
                                                J$.M(3986625, J$.R(3986545, 'res', res, false, false), 'on', false)(J$.T(3986553, 'data', 21, false), J$.T(3986617, function (chunk) {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3986593, arguments.callee, this, arguments);
                                                                arguments = J$.N(3986601, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3986609, 'chunk', chunk, true, false, false);
                                                                J$.M(3986585, J$.I(typeof console === 'undefined' ? console = J$.R(3986561, 'console', undefined, true, true) : console = J$.R(3986561, 'console', console, true, true)), 'log', false)(J$.B(547578, '+', J$.T(3986569, 'BODY: ', 21, false), J$.R(3986577, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3989681, J$e);
                                                            } finally {
                                                                if (J$.Fr(3989689))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3989697, J$e);
                                            } finally {
                                                if (J$.Fr(3989705))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3986769, J$.R(3986681, 'req', req, false, false), 'on', false)(J$.T(3986689, 'error', 21, false), J$.T(3986761, function (e) {
                                    jalangiLabel5:
                                        while (true) {
                                            try {
                                                J$.Fe(3986737, arguments.callee, this, arguments);
                                                arguments = J$.N(3986745, 'arguments', arguments, true, false, false);
                                                e = J$.N(3986753, 'e', e, true, false, false);
                                                J$.M(3986729, J$.I(typeof console === 'undefined' ? console = J$.R(3986697, 'console', undefined, true, true) : console = J$.R(3986697, 'console', console, true, true)), 'log', false)(J$.B(547586, '+', J$.T(3986705, 'problem with request: ', 21, false), J$.G(3986721, J$.R(3986713, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3989713, J$e);
                                            } finally {
                                                if (J$.Fr(3989721))
                                                    continue jalangiLabel5;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3986785, J$.R(3986777, 'req', req, false, false), 'end', false)();
                            }
                        } catch (J$e) {
                            J$.Ex(3989729, J$e);
                        } finally {
                            if (J$.Fr(3989737))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function entry(testFunc, param) {
                jalangiLabel7:
                    while (true) {
                        try {
                            J$.Fe(3987105, arguments.callee, this, arguments);
                            arguments = J$.N(3987113, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3987121, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3987129, 'param', param, true, false, false);
                            if (J$.C(178520, J$.B(547594, '==', J$.G(3986905, J$.G(3986889, J$.I(typeof process === 'undefined' ? process = J$.R(3986881, 'process', undefined, true, true) : process = J$.R(3986881, 'process', process, true, true)), 'argv'), J$.T(3986897, 2, 22, false)), J$.T(3986913, 'analysis', 21, false))))
                                J$.F(3986945, J$.R(3986921, 'loopProperty', loopProperty, false, true), false)(J$.R(3986929, 'testFunc', testFunc, false, false), J$.R(3986937, 'param', param, false, false));
                            else if (J$.C(178512, J$.B(547602, '==', J$.G(3986977, J$.G(3986961, J$.I(typeof process === 'undefined' ? process = J$.R(3986953, 'process', undefined, true, true) : process = J$.R(3986953, 'process', process, true, true)), 'argv'), J$.T(3986969, 2, 22, false)), J$.T(3986985, 'verify', 21, false))))
                                J$.F(3987025, J$.R(3986993, 'verifyHipar', verifyHipar, false, true), false)(J$.R(3987001, 'testFunc', testFunc, false, false), J$.R(3987009, 'param', param, false, false), J$.I(typeof ProjectDir === 'undefined' ? ProjectDir = J$.R(3987017, 'ProjectDir', undefined, true, true) : ProjectDir = J$.R(3987017, 'ProjectDir', ProjectDir, true, true)));
                            else {
                                J$.M(3987065, J$.I(typeof console === 'undefined' ? console = J$.R(3987033, 'console', undefined, true, true) : console = J$.R(3987033, 'console', console, true, true)), 'log', false)(J$.M(3987057, J$.R(3987041, 'tynt', tynt, false, true), 'Red', false)(J$.T(3987049, 'Incorrect Prompt argumnet, we do analysis by default', 21, false)));
                                J$.F(3987097, J$.R(3987073, 'loopProperty', loopProperty, false, true), false)(J$.R(3987081, 'testFunc', testFunc, false, false), J$.R(3987089, 'param', param, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(3989745, J$e);
                        } finally {
                            if (J$.Fr(3989753))
                                continue jalangiLabel7;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function loopProperty(testFunc, param) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(3987857, arguments.callee, this, arguments);
                            arguments = J$.N(3987865, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3987873, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3987881, 'param', param, true, false, false);
                            J$.N(3987889, 'stack', stack, false, false, false);
                            J$.N(3987897, 'tmp', tmp, false, false, false);
                            J$.N(3987905, 'i', i, false, false, false);
                            J$.N(3987913, 'nameChain', nameChain, false, false, false);
                            J$.N(3987921, 'properties', properties, false, false, false);
                            J$.N(3987929, 'property', property, false, false, false);
                            var stack = J$.W(3987169, 'stack', J$.T(3987161, [J$.T(3987153, {
                                    param: J$.R(3987137, 'param', param, false, false),
                                    nameChain: J$.T(3987145, [], 10, false)
                                }, 11, false)], 10, false), stack, false, false);
                            var tmp = J$.W(3987201, 'tmp', J$.F(3987193, J$.R(3987177, 'clone', clone, false, true), false)(J$.R(3987185, 'param', param, false, false)), tmp, false, false);
                            tmp = J$.W(3987241, 'tmp', J$.F(3987233, J$.R(3987209, 'source', source, false, true), false)(J$.R(3987217, 'tmp', tmp, false, false), J$.R(3987225, 'rootMagicName', rootMagicName, false, true)), tmp, false, false);
                            J$.F(3987265, J$.R(3987249, 'testFunc', testFunc, false, false), false)(J$.R(3987257, 'tmp', tmp, false, false));
                            while (J$.C(178568, J$.B(547610, '>', J$.G(3987281, J$.R(3987273, 'stack', stack, false, false), 'length'), J$.T(3987289, 0, 22, false)))) {
                                s = J$.W(3987313, 's', J$.M(3987305, J$.R(3987297, 'stack', stack, false, false), 'shift', false)(), J$.I(typeof s === 'undefined' ? undefined : s), true, true);
                                if (J$.C(178544, J$.C(178536, J$.C(178528, J$.B(547626, '==', J$.U(547618, 'typeof', J$.G(3987329, J$.I(typeof s === 'undefined' ? s = J$.R(3987321, 's', undefined, true, true) : s = J$.R(3987321, 's', s, true, true)), 'param')), J$.T(3987337, 'string', 21, false))) ? J$._() : J$.B(547642, '==', J$.U(547634, 'typeof', J$.G(3987353, J$.I(typeof s === 'undefined' ? s = J$.R(3987345, 's', undefined, true, true) : s = J$.R(3987345, 's', s, true, true)), 'param')), J$.T(3987361, 'null', 21, false))) ? J$._() : J$.B(547658, '==', J$.U(547650, 'typeof', J$.G(3987377, J$.I(typeof s === 'undefined' ? s = J$.R(3987369, 's', undefined, true, true) : s = J$.R(3987369, 's', s, true, true)), 'param')), J$.T(3987385, 'undefined', 21, false))))
                                    continue;
                                if (J$.C(178560, J$.M(3987417, J$.I(typeof Array === 'undefined' ? Array = J$.R(3987393, 'Array', undefined, true, true) : Array = J$.R(3987393, 'Array', Array, true, true)), 'isArray', false)(J$.G(3987409, J$.I(typeof s === 'undefined' ? s = J$.R(3987401, 's', undefined, true, true) : s = J$.R(3987401, 's', s, true, true)), 'param')))) {
                                    for (var i = J$.W(3987433, 'i', J$.T(3987425, 0, 22, false), i, false, false); J$.C(178552, J$.B(547666, '<', J$.R(3987441, 'i', i, false, false), J$.G(3987465, J$.G(3987457, J$.I(typeof s === 'undefined' ? s = J$.R(3987449, 's', undefined, true, true) : s = J$.R(3987449, 's', s, true, true)), 'param'), 'length'))); J$.B(547690, '-', i = J$.W(3987481, 'i', J$.B(547682, '+', J$.U(547674, '+', J$.R(3987473, 'i', i, false, false)), 1), i, false, false), 1)) {
                                        var nameChain = J$.W(3987521, 'nameChain', J$.M(3987513, J$.G(3987497, J$.I(typeof s === 'undefined' ? s = J$.R(3987489, 's', undefined, true, true) : s = J$.R(3987489, 's', s, true, true)), 'nameChain'), 'concat', false)(J$.R(3987505, 'i', i, false, false)), nameChain, false, false);
                                        J$.M(3987577, J$.R(3987529, 'stack', stack, false, false), 'push', false)(J$.T(3987569, {
                                            param: J$.G(3987553, J$.R(3987537, 'param', param, false, false), J$.R(3987545, 'i', i, false, false)),
                                            nameChain: J$.R(3987561, 'nameChain', nameChain, false, false)
                                        }, 11, false));
                                    }
                                    continue;
                                }
                                J$.M(3987609, J$.I(typeof console === 'undefined' ? console = J$.R(3987585, 'console', undefined, true, true) : console = J$.R(3987585, 'console', console, true, true)), 'log', false)(J$.G(3987601, J$.I(typeof s === 'undefined' ? s = J$.R(3987593, 's', undefined, true, true) : s = J$.R(3987593, 's', s, true, true)), 'param'));
                                var properties = J$.W(3987649, 'properties', J$.M(3987641, J$.I(typeof Object === 'undefined' ? Object = J$.R(3987617, 'Object', undefined, true, true) : Object = J$.R(3987617, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.G(3987633, J$.I(typeof s === 'undefined' ? s = J$.R(3987625, 's', undefined, true, true) : s = J$.R(3987625, 's', s, true, true)), 'param')), properties, false, false);
                                for (var property of J$.R(3987657, 'properties', properties, false, false)) {
                                    var nameChain = J$.W(3987697, 'nameChain', J$.M(3987689, J$.G(3987673, J$.I(typeof s === 'undefined' ? s = J$.R(3987665, 's', undefined, true, true) : s = J$.R(3987665, 's', s, true, true)), 'nameChain'), 'concat', false)(J$.R(3987681, 'property', property, false, false)), nameChain, false, false);
                                    J$.M(3987761, J$.R(3987705, 'stack', stack, false, false), 'push', false)(J$.T(3987753, {
                                        param: J$.G(3987737, J$.G(3987721, J$.I(typeof s === 'undefined' ? s = J$.R(3987713, 's', undefined, true, true) : s = J$.R(3987713, 's', s, true, true)), 'param'), J$.R(3987729, 'property', property, false, false)),
                                        nameChain: J$.R(3987745, 'nameChain', nameChain, false, false)
                                    }, 11, false));
                                    var tmp = J$.W(3987793, 'tmp', J$.F(3987785, J$.R(3987769, 'clone', clone, false, true), false)(J$.R(3987777, 'param', param, false, false)), tmp, false, false);
                                    J$.F(3987825, J$.R(3987801, 'addSource', addSource, false, true), false)(J$.R(3987809, 'tmp', tmp, false, false), J$.R(3987817, 'nameChain', nameChain, false, false));
                                    J$.F(3987849, J$.R(3987833, 'testFunc', testFunc, false, false), false)(J$.R(3987841, 'tmp', tmp, false, false));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(3989761, J$e);
                        } finally {
                            if (J$.Fr(3989769))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function addSource(obj, hiparNames) {
                jalangiLabel9:
                    while (true) {
                        try {
                            J$.Fe(3988169, arguments.callee, this, arguments);
                            arguments = J$.N(3988177, 'arguments', arguments, true, false, false);
                            obj = J$.N(3988185, 'obj', obj, true, false, false);
                            hiparNames = J$.N(3988193, 'hiparNames', hiparNames, true, false, false);
                            J$.N(3988201, 'nextProperty', nextProperty, false, false, false);
                            if (J$.C(178576, J$.B(547698, '==', J$.G(3987945, J$.R(3987937, 'hiparNames', hiparNames, false, false), 'length'), J$.T(3987953, 1, 22, false)))) {
                                J$.P(3988073, J$.R(3987961, 'obj', obj, false, false), J$.G(3987985, J$.R(3987969, 'hiparNames', hiparNames, false, false), J$.T(3987977, 0, 22, false)), J$.F(3988065, J$.R(3987993, 'source', source, false, true), false)(J$.G(3988033, J$.R(3988001, 'obj', obj, false, false), J$.G(3988025, J$.R(3988009, 'hiparNames', hiparNames, false, false), J$.T(3988017, 0, 22, false))), J$.G(3988057, J$.R(3988041, 'hiparNames', hiparNames, false, false), J$.T(3988049, 0, 22, false))));
                                return J$.Rt(3988081, undefined);
                            }
                            var nextProperty = J$.W(3988105, 'nextProperty', J$.M(3988097, J$.R(3988089, 'hiparNames', hiparNames, false, false), 'shift', false)(), nextProperty, false, false);
                            return J$.Rt(3988161, J$.F(3988153, J$.R(3988113, 'addSource', addSource, false, true), false)(J$.G(3988137, J$.R(3988121, 'obj', obj, false, false), J$.R(3988129, 'nextProperty', nextProperty, false, false)), J$.R(3988145, 'hiparNames', hiparNames, false, false)));
                        } catch (J$e) {
                            J$.Ex(3989777, J$e);
                        } finally {
                            if (J$.Fr(3989785))
                                continue jalangiLabel9;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function verifyHipar(testFunc, param) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(3989057, arguments.callee, this, arguments);
                            arguments = J$.N(3989065, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3989073, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3989081, 'param', param, true, false, false);
                            J$.N(3989089, 'verifyPath', verifyPath, false, false, false);
                            J$.N(3989097, 'result', result, false, false, false);
                            J$.N(3989105, 'property', property, false, false, false);
                            J$.N(3989113, 'hipar_name', hipar_name, false, false, false);
                            J$.N(3989121, 'hipar_content', hipar_content, false, false, false);
                            J$.N(3989129, 'tmp', tmp, false, false, false);
                            testFileName = J$.W(3988265, 'testFileName', J$.M(3988257, J$.M(3988249, J$.G(3988233, J$.G(3988217, J$.I(typeof process === 'undefined' ? process = J$.R(3988209, 'process', undefined, true, true) : process = J$.R(3988209, 'process', process, true, true)), 'argv'), J$.T(3988225, 1, 22, false)), 'split', false)(J$.T(3988241, '/', 21, false)), 'pop', false)(), J$.I(typeof testFileName === 'undefined' ? undefined : testFileName), true, true);
                            var verifyPath = J$.W(3988321, 'verifyPath', J$.M(3988313, J$.R(3988273, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3988281, '__dirname', undefined, true, true) : __dirname = J$.R(3988281, '__dirname', __dirname, true, true)), J$.B(547714, '+', J$.B(547706, '+', J$.T(3988289, '../../outputs/hidden_attr/', 21, false), J$.I(typeof testFileName === 'undefined' ? testFileName = J$.R(3988297, 'testFileName', undefined, true, true) : testFileName = J$.R(3988297, 'testFileName', testFileName, true, true))), J$.T(3988305, 'on', 21, false))), verifyPath, false, false);
                            J$.M(3988345, J$.I(typeof console === 'undefined' ? console = J$.R(3988329, 'console', undefined, true, true) : console = J$.R(3988329, 'console', console, true, true)), 'log', false)(J$.R(3988337, 'verifyPath', verifyPath, false, false));
                            if (J$.C(178600, J$.M(3988369, J$.R(3988353, 'fs', fs, false, true), 'existsSync', false)(J$.R(3988361, 'verifyPath', verifyPath, false, false)))) {
                                J$.M(3988409, J$.I(typeof console === 'undefined' ? console = J$.R(3988377, 'console', undefined, true, true) : console = J$.R(3988377, 'console', console, true, true)), 'log', false)(J$.M(3988401, J$.R(3988385, 'tynt', tynt, false, true), 'Green', false)(J$.T(3988393, '[-]Verifying hidden Parameter', 21, false)));
                                var result = J$.W(3988457, 'result', J$.M(3988449, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3988417, 'JSON', undefined, true, true) : JSON = J$.R(3988417, 'JSON', JSON, true, true)), 'parse', false)(J$.M(3988441, J$.R(3988425, 'fs', fs, false, true), 'readFileSync', false)(J$.R(3988433, 'verifyPath', verifyPath, false, false))), result, false, false);
                                for (var property in J$.H(3989041, J$.R(3988465, 'result', result, false, false))) {
                                    J$.N(3989049, 'property', property, false, true, false);
                                    {
                                        {
                                            for (var hipar_name in J$.H(3989025, J$.G(3988489, J$.R(3988473, 'result', result, false, false), J$.R(3988481, 'property', property, false, false)))) {
                                                J$.N(3989033, 'hipar_name', hipar_name, false, true, false);
                                                {
                                                    {
                                                        var hipar_content = J$.W(3988537, 'hipar_content', J$.G(3988529, J$.G(3988513, J$.R(3988497, 'result', result, false, false), J$.R(3988505, 'property', property, false, false)), J$.R(3988521, 'hipar_name', hipar_name, false, false)), hipar_content, false, false);
                                                        var tmp = J$.W(3988569, 'tmp', J$.F(3988561, J$.R(3988545, 'clone', clone, false, true), false)(J$.R(3988553, 'param', param, false, false)), tmp, false, false);
                                                        hipar_multi_names = J$.W(3988601, 'hipar_multi_names', J$.M(3988593, J$.R(3988577, 'hipar_name', hipar_name, false, false), 'split', false)(J$.T(3988585, '.', 21, false)), J$.I(typeof hipar_multi_names === 'undefined' ? undefined : hipar_multi_names), true, true);
                                                        if (J$.C(178584, J$.B(547722, '!=', J$.R(3988609, 'property', property, false, false), J$.R(3988617, 'rootMagicName', rootMagicName, false, true))))
                                                            tmp = J$.W(3988649, 'tmp', J$.G(3988641, J$.R(3988625, 'tmp', tmp, false, false), J$.R(3988633, 'property', property, false, false)), tmp, false, false);
                                                        while (J$.C(178592, J$.B(547730, '>', J$.G(3988665, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(3988657, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(3988657, 'hipar_multi_names', hipar_multi_names, true, true)), 'length'), J$.T(3988673, 1, 22, false)))) {
                                                            name = J$.W(3988697, 'name', J$.M(3988689, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(3988681, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(3988681, 'hipar_multi_names', hipar_multi_names, true, true)), 'shift', false)(), J$.I(typeof name === 'undefined' ? undefined : name), true, true);
                                                            J$.P(3988729, J$.R(3988705, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(3988713, 'name', undefined, true, true) : name = J$.R(3988713, 'name', name, true, true)), J$.T(3988721, {}, 11, false));
                                                            tmp = J$.W(3988761, 'tmp', J$.G(3988753, J$.R(3988737, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(3988745, 'name', undefined, true, true) : name = J$.R(3988745, 'name', name, true, true))), tmp, false, false);
                                                        }
                                                        name = J$.W(3988785, 'name', J$.M(3988777, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(3988769, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(3988769, 'hipar_multi_names', hipar_multi_names, true, true)), 'shift', false)(), J$.I(typeof name === 'undefined' ? undefined : name), true, true);
                                                        J$.P(3988817, J$.R(3988793, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(3988801, 'name', undefined, true, true) : name = J$.R(3988801, 'name', name, true, true)), J$.T(3988809, 'H1P4r', 21, false));
                                                        J$.F(3988873, J$.R(3988825, 'verify_hipar', verify_hipar, false, true), false)(J$.G(3988841, J$.R(3988833, 'hipar_content', hipar_content, false, false), 'file'), J$.R(3988849, 'hipar_name', hipar_name, false, false), J$.G(3988865, J$.R(3988857, 'hipar_content', hipar_content, false, false), 'base'));
                                                        J$.M(3988897, J$.I(typeof console === 'undefined' ? console = J$.R(3988881, 'console', undefined, true, true) : console = J$.R(3988881, 'console', console, true, true)), 'log', false)(J$.R(3988889, 'tmp', tmp, false, false));
                                                        try {
                                                            J$.F(3988921, J$.R(3988905, 'testFunc', testFunc, false, false), false)(J$.R(3988913, 'tmp', tmp, false, false));
                                                        } catch (e) {
                                                            J$.N(3989017, 'e', e, false, false, true);
                                                            J$.M(3988969, J$.G(3988937, J$.I(typeof process === 'undefined' ? process = J$.R(3988929, 'process', undefined, true, true) : process = J$.R(3988929, 'process', process, true, true)), 'stdout'), 'write', false)(J$.M(3988961, J$.R(3988945, 'tynt', tynt, false, true), 'Red', false)(J$.T(3988953, '[Verify Error]:', 21, false)));
                                                            J$.M(3989009, J$.I(typeof console === 'undefined' ? console = J$.R(3988977, 'console', undefined, true, true) : console = J$.R(3988977, 'console', console, true, true)), 'log', false)(J$.M(3989001, J$.R(3988985, 'tynt', tynt, false, true), 'Red', false)(J$.R(3988993, 'e', e, false, false)));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(3989793, J$e);
                        } finally {
                            if (J$.Fr(3989801))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function source(source_var, var_name) {
                jalangiLabel11:
                    while (true) {
                        try {
                            J$.Fe(3989193, arguments.callee, this, arguments);
                            arguments = J$.N(3989201, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3989209, 'source_var', source_var, true, false, false);
                            var_name = J$.N(3989217, 'var_name', var_name, true, false, false);
                            J$.M(3989169, J$.I(typeof console === 'undefined' ? console = J$.R(3989137, 'console', undefined, true, true) : console = J$.R(3989137, 'console', console, true, true)), 'log', false)(J$.M(3989161, J$.R(3989145, 'tynt', tynt, false, true), 'Green', false)(J$.R(3989153, 'var_name', var_name, false, false)));
                            return J$.Rt(3989185, J$.R(3989177, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3989809, J$e);
                        } finally {
                            if (J$.Fr(3989817))
                                continue jalangiLabel11;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function verify_hipar(source_var) {
                jalangiLabel12:
                    while (true) {
                        try {
                            J$.Fe(3989241, arguments.callee, this, arguments);
                            arguments = J$.N(3989249, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3989257, 'source_var', source_var, true, false, false);
                            return J$.Rt(3989233, J$.R(3989225, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3989825, J$e);
                        } finally {
                            if (J$.Fr(3989833))
                                continue jalangiLabel12;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function clone(a) {
                jalangiLabel13:
                    while (true) {
                        try {
                            J$.Fe(3989313, arguments.callee, this, arguments);
                            arguments = J$.N(3989321, 'arguments', arguments, true, false, false);
                            a = J$.N(3989329, 'a', a, true, false, false);
                            return J$.Rt(3989305, J$.M(3989297, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3989265, 'JSON', undefined, true, true) : JSON = J$.R(3989265, 'JSON', JSON, true, true)), 'parse', false)(J$.M(3989289, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3989273, 'JSON', undefined, true, true) : JSON = J$.R(3989273, 'JSON', JSON, true, true)), 'stringify', false)(J$.R(3989281, 'a', a, false, false))));
                        } catch (J$e) {
                            J$.Ex(3989841, J$e);
                        } finally {
                            if (J$.Fr(3989849))
                                continue jalangiLabel13;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3989465, 'path', path, false, false, false);
            J$.N(3989473, 'tynt', tynt, false, false, false);
            J$.N(3989481, 'fs', fs, false, false, false);
            J$.N(3989489, 'rootMagicName', rootMagicName, false, false, false);
            J$.N(3989497, 'http', http, false, false, false);
            sendViaWebRequest = J$.N(3989513, 'sendViaWebRequest', J$.T(3989505, sendViaWebRequest, 12, false), true, false, false);
            entry = J$.N(3989529, 'entry', J$.T(3989521, entry, 12, false), true, false, false);
            loopProperty = J$.N(3989545, 'loopProperty', J$.T(3989537, loopProperty, 12, false), true, false, false);
            addSource = J$.N(3989561, 'addSource', J$.T(3989553, addSource, 12, false), true, false, false);
            verifyHipar = J$.N(3989577, 'verifyHipar', J$.T(3989569, verifyHipar, 12, false), true, false, false);
            source = J$.N(3989593, 'source', J$.T(3989585, source, 12, false), true, false, false);
            verify_hipar = J$.N(3989609, 'verify_hipar', J$.T(3989601, verify_hipar, 12, false), true, false, false);
            clone = J$.N(3989625, 'clone', J$.T(3989617, clone, 12, false), true, false, false);
            var path = J$.W(3985665, 'path', J$.F(3985657, J$.I(typeof require === 'undefined' ? require = J$.R(3985641, 'require', undefined, true, true) : require = J$.R(3985641, 'require', require, true, true)), false)(J$.T(3985649, 'path', 21, false)), path, false, true);
            var tynt = J$.W(3985697, 'tynt', J$.F(3985689, J$.I(typeof require === 'undefined' ? require = J$.R(3985673, 'require', undefined, true, true) : require = J$.R(3985673, 'require', require, true, true)), false)(J$.T(3985681, 'tynt', 21, false)), tynt, false, true);
            var fs = J$.W(3985729, 'fs', J$.F(3985721, J$.I(typeof require === 'undefined' ? require = J$.R(3985705, 'require', undefined, true, true) : require = J$.R(3985705, 'require', require, true, true)), false)(J$.T(3985713, 'fs', 21, false)), fs, false, true);
            var rootMagicName = J$.W(3985745, 'rootMagicName', J$.T(3985737, 'R0ot', 21, false), rootMagicName, false, true);
            var http = J$.W(3985777, 'http', J$.F(3985769, J$.I(typeof require === 'undefined' ? require = J$.R(3985753, 'require', undefined, true, true) : require = J$.R(3985753, 'require', require, true, true)), false)(J$.T(3985761, 'http', 21, false)), http, false, true);
            J$.P(3989353, J$.I(typeof exports === 'undefined' ? exports = J$.R(3989337, 'exports', undefined, true, true) : exports = J$.R(3989337, 'exports', exports, true, true)), 'clone', J$.R(3989345, 'clone', clone, false, true));
            J$.P(3989377, J$.I(typeof exports === 'undefined' ? exports = J$.R(3989361, 'exports', undefined, true, true) : exports = J$.R(3989361, 'exports', exports, true, true)), 'loopProperty', J$.R(3989369, 'loopProperty', loopProperty, false, true));
            J$.P(3989401, J$.I(typeof exports === 'undefined' ? exports = J$.R(3989385, 'exports', undefined, true, true) : exports = J$.R(3989385, 'exports', exports, true, true)), 'verifyHipar', J$.R(3989393, 'verifyHipar', verifyHipar, false, true));
            J$.P(3989425, J$.I(typeof exports === 'undefined' ? exports = J$.R(3989409, 'exports', undefined, true, true) : exports = J$.R(3989409, 'exports', exports, true, true)), 'entry', J$.R(3989417, 'entry', entry, false, true));
            J$.P(3989449, J$.I(typeof exports === 'undefined' ? exports = J$.R(3989433, 'exports', undefined, true, true) : exports = J$.R(3989433, 'exports', exports, true, true)), 'sendViaWebRequest', J$.R(3989441, 'sendViaWebRequest', sendViaWebRequest, false, true));
        } catch (J$e) {
            J$.Ex(3989857, J$e);
        } finally {
            if (J$.Sr(3989865))
                continue jalangiLabel14;
            else
                break jalangiLabel14;
        }
    }
// JALANGI DO NOT INSTRUMENT

