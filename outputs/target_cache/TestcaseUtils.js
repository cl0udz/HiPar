J$.noInstrEval = false;
jalangiLabel14:
    while (true) {
        try {
            J$.Se(3647121, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestcaseUtils.js');
            function sendViaWebRequest(method, data, location, port, hostname) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(3644337, arguments.callee, this, arguments);
                            arguments = J$.N(3644345, 'arguments', arguments, true, false, false);
                            method = J$.N(3644353, 'method', method, true, false, false);
                            data = J$.N(3644361, 'data', data, true, false, false);
                            location = J$.N(3644369, 'location', location, true, false, false);
                            port = J$.N(3644377, 'port', port, true, false, false);
                            hostname = J$.N(3644385, 'hostname', hostname, true, false, false);
                            J$.N(3644393, 'http', http, false, false, false);
                            J$.N(3644401, 'content', content, false, false, false);
                            J$.N(3644409, 'options', options, false, false, false);
                            J$.N(3644417, 'req', req, false, false, false);
                            var http = J$.W(3643353, 'http', J$.F(3643345, J$.I(typeof require === 'undefined' ? require = J$.R(3643329, 'require', undefined, true, true) : require = J$.R(3643329, 'require', require, true, true)), false)(J$.T(3643337, 'http', 21, false)), http, false, false);
                            var content = J$.W(3643369, 'content', J$.R(3643361, 'data', data, false, false), content, false, false);
                            var options = J$.W(3643433, 'options', J$.T(3643425, {
                                hostname: J$.C(191816, J$.R(3643377, 'hostname', hostname, false, false)) ? J$._() : J$.T(3643385, '127.0.0.1', 21, false),
                                port: J$.R(3643393, 'port', port, false, false),
                                path: J$.C(191824, J$.R(3643401, 'location', location, false, false)) ? J$._() : J$.T(3643409, '/', 21, false),
                                method: J$.T(3643417, 'GET', 21, false)
                            }, 11, false), options, false, false);
                            if (J$.C(191832, J$.B(399562, '==', J$.R(3643441, 'method', method, false, false), J$.T(3643449, 'post', 21, false)))) {
                                J$.P(3643473, J$.R(3643457, 'options', options, false, false), 'method', J$.T(3643465, 'POST', 21, false));
                                J$.P(3643505, J$.R(3643481, 'options', options, false, false), 'headers', J$.T(3643497, { 'Content-Type': J$.T(3643489, 'application/json', 21, false) }, 11, false));
                                var req = J$.W(3643777, 'req', J$.M(3643769, J$.R(3643513, 'http', http, false, false), 'request', false)(J$.R(3643521, 'options', options, false, false), J$.T(3643761, function (res) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(3643737, arguments.callee, this, arguments);
                                                arguments = J$.N(3643745, 'arguments', arguments, true, false, false);
                                                res = J$.N(3643753, 'res', res, true, false, false);
                                                J$.M(3643561, J$.I(typeof console === 'undefined' ? console = J$.R(3643529, 'console', undefined, true, true) : console = J$.R(3643529, 'console', console, true, true)), 'log', false)(J$.B(399570, '+', J$.T(3643537, 'STATUS: ', 21, false), J$.G(3643553, J$.R(3643545, 'res', res, false, false), 'statusCode')));
                                                J$.M(3643617, J$.I(typeof console === 'undefined' ? console = J$.R(3643569, 'console', undefined, true, true) : console = J$.R(3643569, 'console', console, true, true)), 'log', false)(J$.B(399578, '+', J$.T(3643577, 'HEADERS: ', 21, false), J$.M(3643609, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3643585, 'JSON', undefined, true, true) : JSON = J$.R(3643585, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3643601, J$.R(3643593, 'res', res, false, false), 'headers'))));
                                                J$.M(3643641, J$.R(3643625, 'res', res, false, false), 'setEncoding', false)(J$.T(3643633, 'utf8', 21, false));
                                                J$.M(3643729, J$.R(3643649, 'res', res, false, false), 'on', false)(J$.T(3643657, 'data', 21, false), J$.T(3643721, function (chunk) {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3643697, arguments.callee, this, arguments);
                                                                arguments = J$.N(3643705, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3643713, 'chunk', chunk, true, false, false);
                                                                J$.M(3643689, J$.I(typeof console === 'undefined' ? console = J$.R(3643665, 'console', undefined, true, true) : console = J$.R(3643665, 'console', console, true, true)), 'log', false)(J$.B(399586, '+', J$.T(3643673, 'BODY: ', 21, false), J$.R(3643681, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3647297, J$e);
                                                            } finally {
                                                                if (J$.Fr(3647305))
                                                                    continue jalangiLabel0;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3647313, J$e);
                                            } finally {
                                                if (J$.Fr(3647321))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3643873, J$.R(3643785, 'req', req, false, false), 'on', false)(J$.T(3643793, 'error', 21, false), J$.T(3643865, function (e) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(3643841, arguments.callee, this, arguments);
                                                arguments = J$.N(3643849, 'arguments', arguments, true, false, false);
                                                e = J$.N(3643857, 'e', e, true, false, false);
                                                J$.M(3643833, J$.I(typeof console === 'undefined' ? console = J$.R(3643801, 'console', undefined, true, true) : console = J$.R(3643801, 'console', console, true, true)), 'log', false)(J$.B(399594, '+', J$.T(3643809, 'problem with request: ', 21, false), J$.G(3643825, J$.R(3643817, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3647329, J$e);
                                            } finally {
                                                if (J$.Fr(3647337))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3643897, J$.R(3643881, 'req', req, false, false), 'write', false)(J$.R(3643889, 'content', content, false, false));
                                J$.M(3643913, J$.R(3643905, 'req', req, false, false), 'end', false)();
                            } else {
                                J$.A(3643945, J$.R(3643921, 'options', options, false, false), 'location', '+')(J$.B(399602, '+', J$.T(3643929, '?', 21, false), J$.R(3643937, 'content', content, false, false)));
                                var req = J$.W(3644217, 'req', J$.M(3644209, J$.R(3643953, 'http', http, false, false), 'request', false)(J$.R(3643961, 'options', options, false, false), J$.T(3644201, function (res) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(3644177, arguments.callee, this, arguments);
                                                arguments = J$.N(3644185, 'arguments', arguments, true, false, false);
                                                res = J$.N(3644193, 'res', res, true, false, false);
                                                J$.M(3644001, J$.I(typeof console === 'undefined' ? console = J$.R(3643969, 'console', undefined, true, true) : console = J$.R(3643969, 'console', console, true, true)), 'log', false)(J$.B(399610, '+', J$.T(3643977, 'STATUS: ', 21, false), J$.G(3643993, J$.R(3643985, 'res', res, false, false), 'statusCode')));
                                                J$.M(3644057, J$.I(typeof console === 'undefined' ? console = J$.R(3644009, 'console', undefined, true, true) : console = J$.R(3644009, 'console', console, true, true)), 'log', false)(J$.B(399618, '+', J$.T(3644017, 'HEADERS: ', 21, false), J$.M(3644049, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3644025, 'JSON', undefined, true, true) : JSON = J$.R(3644025, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3644041, J$.R(3644033, 'res', res, false, false), 'headers'))));
                                                J$.M(3644081, J$.R(3644065, 'res', res, false, false), 'setEncoding', false)(J$.T(3644073, 'utf8', 21, false));
                                                J$.M(3644169, J$.R(3644089, 'res', res, false, false), 'on', false)(J$.T(3644097, 'data', 21, false), J$.T(3644161, function (chunk) {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3644137, arguments.callee, this, arguments);
                                                                arguments = J$.N(3644145, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3644153, 'chunk', chunk, true, false, false);
                                                                J$.M(3644129, J$.I(typeof console === 'undefined' ? console = J$.R(3644105, 'console', undefined, true, true) : console = J$.R(3644105, 'console', console, true, true)), 'log', false)(J$.B(399626, '+', J$.T(3644113, 'BODY: ', 21, false), J$.R(3644121, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3647345, J$e);
                                                            } finally {
                                                                if (J$.Fr(3647353))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3647361, J$e);
                                            } finally {
                                                if (J$.Fr(3647369))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3644313, J$.R(3644225, 'req', req, false, false), 'on', false)(J$.T(3644233, 'error', 21, false), J$.T(3644305, function (e) {
                                    jalangiLabel5:
                                        while (true) {
                                            try {
                                                J$.Fe(3644281, arguments.callee, this, arguments);
                                                arguments = J$.N(3644289, 'arguments', arguments, true, false, false);
                                                e = J$.N(3644297, 'e', e, true, false, false);
                                                J$.M(3644273, J$.I(typeof console === 'undefined' ? console = J$.R(3644241, 'console', undefined, true, true) : console = J$.R(3644241, 'console', console, true, true)), 'log', false)(J$.B(399634, '+', J$.T(3644249, 'problem with request: ', 21, false), J$.G(3644265, J$.R(3644257, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3647377, J$e);
                                            } finally {
                                                if (J$.Fr(3647385))
                                                    continue jalangiLabel5;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3644329, J$.R(3644321, 'req', req, false, false), 'end', false)();
                            }
                        } catch (J$e) {
                            J$.Ex(3647393, J$e);
                        } finally {
                            if (J$.Fr(3647401))
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
                            J$.Fe(3644649, arguments.callee, this, arguments);
                            arguments = J$.N(3644657, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3644665, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3644673, 'param', param, true, false, false);
                            if (J$.C(191848, J$.B(399642, '==', J$.G(3644449, J$.G(3644433, J$.I(typeof process === 'undefined' ? process = J$.R(3644425, 'process', undefined, true, true) : process = J$.R(3644425, 'process', process, true, true)), 'argv'), J$.T(3644441, 2, 22, false)), J$.T(3644457, 'analysis', 21, false))))
                                J$.F(3644489, J$.R(3644465, 'loopProperty', loopProperty, false, true), false)(J$.R(3644473, 'testFunc', testFunc, false, false), J$.R(3644481, 'param', param, false, false));
                            else if (J$.C(191840, J$.B(399650, '==', J$.G(3644521, J$.G(3644505, J$.I(typeof process === 'undefined' ? process = J$.R(3644497, 'process', undefined, true, true) : process = J$.R(3644497, 'process', process, true, true)), 'argv'), J$.T(3644513, 2, 22, false)), J$.T(3644529, 'verify', 21, false))))
                                J$.F(3644569, J$.R(3644537, 'verifyHipar', verifyHipar, false, true), false)(J$.R(3644545, 'testFunc', testFunc, false, false), J$.R(3644553, 'param', param, false, false), J$.I(typeof ProjectDir === 'undefined' ? ProjectDir = J$.R(3644561, 'ProjectDir', undefined, true, true) : ProjectDir = J$.R(3644561, 'ProjectDir', ProjectDir, true, true)));
                            else {
                                J$.M(3644609, J$.I(typeof console === 'undefined' ? console = J$.R(3644577, 'console', undefined, true, true) : console = J$.R(3644577, 'console', console, true, true)), 'log', false)(J$.M(3644601, J$.R(3644585, 'tynt', tynt, false, true), 'Red', false)(J$.T(3644593, 'Incorrect Prompt argumnet, we do analysis by default', 21, false)));
                                J$.F(3644641, J$.R(3644617, 'loopProperty', loopProperty, false, true), false)(J$.R(3644625, 'testFunc', testFunc, false, false), J$.R(3644633, 'param', param, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(3647409, J$e);
                        } finally {
                            if (J$.Fr(3647417))
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
                            J$.Fe(3645521, arguments.callee, this, arguments);
                            arguments = J$.N(3645529, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3645537, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3645545, 'param', param, true, false, false);
                            J$.N(3645553, 'stack', stack, false, false, false);
                            J$.N(3645561, 'tmp', tmp, false, false, false);
                            J$.N(3645569, 'i', i, false, false, false);
                            J$.N(3645577, 'nameChain', nameChain, false, false, false);
                            J$.N(3645585, 'properties', properties, false, false, false);
                            J$.N(3645593, 'property', property, false, false, false);
                            var stack = J$.W(3644713, 'stack', J$.T(3644705, [J$.T(3644697, {
                                    param: J$.R(3644681, 'param', param, false, false),
                                    nameChain: J$.T(3644689, [], 10, false)
                                }, 11, false)], 10, false), stack, false, false);
                            var tmp = J$.W(3644745, 'tmp', J$.F(3644737, J$.R(3644721, 'clone', clone, false, true), false)(J$.R(3644729, 'param', param, false, false)), tmp, false, false);
                            tmp = J$.W(3644785, 'tmp', J$.F(3644777, J$.R(3644753, 'source', source, false, true), false)(J$.R(3644761, 'tmp', tmp, false, false), J$.R(3644769, 'rootMagicName', rootMagicName, false, true)), tmp, false, false);
                            J$.F(3644809, J$.R(3644793, 'testFunc', testFunc, false, false), false)(J$.R(3644801, 'tmp', tmp, false, false));
                            while (J$.C(191896, J$.B(399658, '>', J$.G(3644825, J$.R(3644817, 'stack', stack, false, false), 'length'), J$.T(3644833, 0, 22, false)))) {
                                s = J$.W(3644857, 's', J$.M(3644849, J$.R(3644841, 'stack', stack, false, false), 'shift', false)(), J$.I(typeof s === 'undefined' ? undefined : s), true, true);
                                if (J$.C(191872, J$.C(191864, J$.C(191856, J$.B(399674, '==', J$.U(399666, 'typeof', J$.G(3644873, J$.I(typeof s === 'undefined' ? s = J$.R(3644865, 's', undefined, true, true) : s = J$.R(3644865, 's', s, true, true)), 'param')), J$.T(3644881, 'string', 21, false))) ? J$._() : J$.B(399682, '==', J$.G(3644897, J$.I(typeof s === 'undefined' ? s = J$.R(3644889, 's', undefined, true, true) : s = J$.R(3644889, 's', s, true, true)), 'param'), J$.T(3644905, null, 25, false))) ? J$._() : J$.B(399690, '==', J$.G(3644921, J$.I(typeof s === 'undefined' ? s = J$.R(3644913, 's', undefined, true, true) : s = J$.R(3644913, 's', s, true, true)), 'param'), J$.T(3644929, undefined, 24, false))))
                                    continue;
                                if (J$.C(191888, J$.M(3644961, J$.I(typeof Array === 'undefined' ? Array = J$.R(3644937, 'Array', undefined, true, true) : Array = J$.R(3644937, 'Array', Array, true, true)), 'isArray', false)(J$.G(3644953, J$.I(typeof s === 'undefined' ? s = J$.R(3644945, 's', undefined, true, true) : s = J$.R(3644945, 's', s, true, true)), 'param')))) {
                                    J$.M(3644993, J$.I(typeof console === 'undefined' ? console = J$.R(3644969, 'console', undefined, true, true) : console = J$.R(3644969, 'console', console, true, true)), 'log', false)(J$.G(3644985, J$.I(typeof s === 'undefined' ? s = J$.R(3644977, 's', undefined, true, true) : s = J$.R(3644977, 's', s, true, true)), 'param'));
                                    for (var i = J$.W(3645009, 'i', J$.T(3645001, 0, 22, false), i, false, false); J$.C(191880, J$.B(399698, '<', J$.R(3645017, 'i', i, false, false), J$.G(3645041, J$.G(3645033, J$.I(typeof s === 'undefined' ? s = J$.R(3645025, 's', undefined, true, true) : s = J$.R(3645025, 's', s, true, true)), 'param'), 'length'))); J$.B(399722, '-', i = J$.W(3645057, 'i', J$.B(399714, '+', J$.U(399706, '+', J$.R(3645049, 'i', i, false, false)), 1), i, false, false), 1)) {
                                        var nameChain = J$.W(3645097, 'nameChain', J$.M(3645089, J$.G(3645073, J$.I(typeof s === 'undefined' ? s = J$.R(3645065, 's', undefined, true, true) : s = J$.R(3645065, 's', s, true, true)), 'nameChain'), 'concat', false)(J$.R(3645081, 'i', i, false, false)), nameChain, false, false);
                                        J$.M(3645161, J$.R(3645105, 'stack', stack, false, false), 'push', false)(J$.T(3645153, {
                                            param: J$.G(3645137, J$.G(3645121, J$.I(typeof s === 'undefined' ? s = J$.R(3645113, 's', undefined, true, true) : s = J$.R(3645113, 's', s, true, true)), 'param'), J$.R(3645129, 'i', i, false, false)),
                                            nameChain: J$.R(3645145, 'nameChain', nameChain, false, false)
                                        }, 11, false));
                                    }
                                    continue;
                                }
                                J$.M(3645193, J$.I(typeof console === 'undefined' ? console = J$.R(3645169, 'console', undefined, true, true) : console = J$.R(3645169, 'console', console, true, true)), 'log', false)(J$.G(3645185, J$.I(typeof s === 'undefined' ? s = J$.R(3645177, 's', undefined, true, true) : s = J$.R(3645177, 's', s, true, true)), 'param'));
                                var properties = J$.W(3645233, 'properties', J$.M(3645225, J$.I(typeof Object === 'undefined' ? Object = J$.R(3645201, 'Object', undefined, true, true) : Object = J$.R(3645201, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.G(3645217, J$.I(typeof s === 'undefined' ? s = J$.R(3645209, 's', undefined, true, true) : s = J$.R(3645209, 's', s, true, true)), 'param')), properties, false, false);
                                for (var property of J$.R(3645241, 'properties', properties, false, false)) {
                                    var nameChain = J$.W(3645281, 'nameChain', J$.M(3645273, J$.G(3645257, J$.I(typeof s === 'undefined' ? s = J$.R(3645249, 's', undefined, true, true) : s = J$.R(3645249, 's', s, true, true)), 'nameChain'), 'concat', false)(J$.R(3645265, 'property', property, false, false)), nameChain, false, false);
                                    J$.M(3645345, J$.R(3645289, 'stack', stack, false, false), 'push', false)(J$.T(3645337, {
                                        param: J$.G(3645321, J$.G(3645305, J$.I(typeof s === 'undefined' ? s = J$.R(3645297, 's', undefined, true, true) : s = J$.R(3645297, 's', s, true, true)), 'param'), J$.R(3645313, 'property', property, false, false)),
                                        nameChain: J$.R(3645329, 'nameChain', nameChain, false, false)
                                    }, 11, false));
                                    var tmp = J$.W(3645377, 'tmp', J$.F(3645369, J$.R(3645353, 'clone', clone, false, true), false)(J$.R(3645361, 'param', param, false, false)), tmp, false, false);
                                    try {
                                        J$.F(3645417, J$.R(3645385, 'addSource', addSource, false, true), false)(J$.R(3645393, 'tmp', tmp, false, false), J$.M(3645409, J$.R(3645401, 'nameChain', nameChain, false, false), 'slice', false)());
                                    } catch (e) {
                                        J$.N(3645489, 'e', e, false, false, true);
                                        J$.M(3645457, J$.I(typeof console === 'undefined' ? console = J$.R(3645425, 'console', undefined, true, true) : console = J$.R(3645425, 'console', console, true, true)), 'log', false)(J$.M(3645449, J$.R(3645433, 'tynt', tynt, false, true), 'Red', false)(J$.R(3645441, 'e', e, false, false)));
                                        J$.M(3645481, J$.I(typeof console === 'undefined' ? console = J$.R(3645465, 'console', undefined, true, true) : console = J$.R(3645465, 'console', console, true, true)), 'log', false)(J$.R(3645473, 'nameChain', nameChain, false, false));
                                    }
                                    J$.F(3645513, J$.R(3645497, 'testFunc', testFunc, false, false), false)(J$.R(3645505, 'tmp', tmp, false, false));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(3647425, J$e);
                        } finally {
                            if (J$.Fr(3647433))
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
                            J$.Fe(3645833, arguments.callee, this, arguments);
                            arguments = J$.N(3645841, 'arguments', arguments, true, false, false);
                            obj = J$.N(3645849, 'obj', obj, true, false, false);
                            hiparNames = J$.N(3645857, 'hiparNames', hiparNames, true, false, false);
                            J$.N(3645865, 'nextProperty', nextProperty, false, false, false);
                            if (J$.C(191904, J$.B(399730, '==', J$.G(3645609, J$.R(3645601, 'hiparNames', hiparNames, false, false), 'length'), J$.T(3645617, 1, 22, false)))) {
                                J$.P(3645737, J$.R(3645625, 'obj', obj, false, false), J$.G(3645649, J$.R(3645633, 'hiparNames', hiparNames, false, false), J$.T(3645641, 0, 22, false)), J$.F(3645729, J$.R(3645657, 'source', source, false, true), false)(J$.G(3645697, J$.R(3645665, 'obj', obj, false, false), J$.G(3645689, J$.R(3645673, 'hiparNames', hiparNames, false, false), J$.T(3645681, 0, 22, false))), J$.G(3645721, J$.R(3645705, 'hiparNames', hiparNames, false, false), J$.T(3645713, 0, 22, false))));
                                return J$.Rt(3645745, undefined);
                            }
                            var nextProperty = J$.W(3645769, 'nextProperty', J$.M(3645761, J$.R(3645753, 'hiparNames', hiparNames, false, false), 'shift', false)(), nextProperty, false, false);
                            return J$.Rt(3645825, J$.F(3645817, J$.R(3645777, 'addSource', addSource, false, true), false)(J$.G(3645801, J$.R(3645785, 'obj', obj, false, false), J$.R(3645793, 'nextProperty', nextProperty, false, false)), J$.R(3645809, 'hiparNames', hiparNames, false, false)));
                        } catch (J$e) {
                            J$.Ex(3647441, J$e);
                        } finally {
                            if (J$.Fr(3647449))
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
                            J$.Fe(3646721, arguments.callee, this, arguments);
                            arguments = J$.N(3646729, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3646737, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3646745, 'param', param, true, false, false);
                            J$.N(3646753, 'verifyPath', verifyPath, false, false, false);
                            J$.N(3646761, 'result', result, false, false, false);
                            J$.N(3646769, 'property', property, false, false, false);
                            J$.N(3646777, 'hipar_name', hipar_name, false, false, false);
                            J$.N(3646785, 'hipar_content', hipar_content, false, false, false);
                            J$.N(3646793, 'tmp', tmp, false, false, false);
                            testFileName = J$.W(3645929, 'testFileName', J$.M(3645921, J$.M(3645913, J$.G(3645897, J$.G(3645881, J$.I(typeof process === 'undefined' ? process = J$.R(3645873, 'process', undefined, true, true) : process = J$.R(3645873, 'process', process, true, true)), 'argv'), J$.T(3645889, 1, 22, false)), 'split', false)(J$.T(3645905, '/', 21, false)), 'pop', false)(), J$.I(typeof testFileName === 'undefined' ? undefined : testFileName), true, true);
                            var verifyPath = J$.W(3645985, 'verifyPath', J$.M(3645977, J$.R(3645937, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3645945, '__dirname', undefined, true, true) : __dirname = J$.R(3645945, '__dirname', __dirname, true, true)), J$.B(399746, '+', J$.B(399738, '+', J$.T(3645953, '../../outputs/hidden_attr/', 21, false), J$.I(typeof testFileName === 'undefined' ? testFileName = J$.R(3645961, 'testFileName', undefined, true, true) : testFileName = J$.R(3645961, 'testFileName', testFileName, true, true))), J$.T(3645969, 'on', 21, false))), verifyPath, false, false);
                            J$.M(3646009, J$.I(typeof console === 'undefined' ? console = J$.R(3645993, 'console', undefined, true, true) : console = J$.R(3645993, 'console', console, true, true)), 'log', false)(J$.R(3646001, 'verifyPath', verifyPath, false, false));
                            if (J$.C(191928, J$.M(3646033, J$.R(3646017, 'fs', fs, false, true), 'existsSync', false)(J$.R(3646025, 'verifyPath', verifyPath, false, false)))) {
                                J$.M(3646073, J$.I(typeof console === 'undefined' ? console = J$.R(3646041, 'console', undefined, true, true) : console = J$.R(3646041, 'console', console, true, true)), 'log', false)(J$.M(3646065, J$.R(3646049, 'tynt', tynt, false, true), 'Green', false)(J$.T(3646057, '[-]Verifying hidden Parameter', 21, false)));
                                var result = J$.W(3646121, 'result', J$.M(3646113, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3646081, 'JSON', undefined, true, true) : JSON = J$.R(3646081, 'JSON', JSON, true, true)), 'parse', false)(J$.M(3646105, J$.R(3646089, 'fs', fs, false, true), 'readFileSync', false)(J$.R(3646097, 'verifyPath', verifyPath, false, false))), result, false, false);
                                for (var property in J$.H(3646705, J$.R(3646129, 'result', result, false, false))) {
                                    J$.N(3646713, 'property', property, false, true, false);
                                    {
                                        {
                                            for (var hipar_name in J$.H(3646689, J$.G(3646153, J$.R(3646137, 'result', result, false, false), J$.R(3646145, 'property', property, false, false)))) {
                                                J$.N(3646697, 'hipar_name', hipar_name, false, true, false);
                                                {
                                                    {
                                                        var hipar_content = J$.W(3646201, 'hipar_content', J$.G(3646193, J$.G(3646177, J$.R(3646161, 'result', result, false, false), J$.R(3646169, 'property', property, false, false)), J$.R(3646185, 'hipar_name', hipar_name, false, false)), hipar_content, false, false);
                                                        var tmp = J$.W(3646233, 'tmp', J$.F(3646225, J$.R(3646209, 'clone', clone, false, true), false)(J$.R(3646217, 'param', param, false, false)), tmp, false, false);
                                                        hipar_multi_names = J$.W(3646265, 'hipar_multi_names', J$.M(3646257, J$.R(3646241, 'hipar_name', hipar_name, false, false), 'split', false)(J$.T(3646249, '.', 21, false)), J$.I(typeof hipar_multi_names === 'undefined' ? undefined : hipar_multi_names), true, true);
                                                        if (J$.C(191912, J$.B(399754, '!=', J$.R(3646273, 'property', property, false, false), J$.R(3646281, 'rootMagicName', rootMagicName, false, true))))
                                                            tmp = J$.W(3646313, 'tmp', J$.G(3646305, J$.R(3646289, 'tmp', tmp, false, false), J$.R(3646297, 'property', property, false, false)), tmp, false, false);
                                                        while (J$.C(191920, J$.B(399762, '>', J$.G(3646329, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(3646321, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(3646321, 'hipar_multi_names', hipar_multi_names, true, true)), 'length'), J$.T(3646337, 1, 22, false)))) {
                                                            name = J$.W(3646361, 'name', J$.M(3646353, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(3646345, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(3646345, 'hipar_multi_names', hipar_multi_names, true, true)), 'shift', false)(), J$.I(typeof name === 'undefined' ? undefined : name), true, true);
                                                            J$.P(3646393, J$.R(3646369, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(3646377, 'name', undefined, true, true) : name = J$.R(3646377, 'name', name, true, true)), J$.T(3646385, {}, 11, false));
                                                            tmp = J$.W(3646425, 'tmp', J$.G(3646417, J$.R(3646401, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(3646409, 'name', undefined, true, true) : name = J$.R(3646409, 'name', name, true, true))), tmp, false, false);
                                                        }
                                                        name = J$.W(3646449, 'name', J$.M(3646441, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(3646433, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(3646433, 'hipar_multi_names', hipar_multi_names, true, true)), 'shift', false)(), J$.I(typeof name === 'undefined' ? undefined : name), true, true);
                                                        J$.P(3646481, J$.R(3646457, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(3646465, 'name', undefined, true, true) : name = J$.R(3646465, 'name', name, true, true)), J$.T(3646473, 'H1P4r', 21, false));
                                                        J$.F(3646537, J$.R(3646489, 'verify_hipar', verify_hipar, false, true), false)(J$.G(3646505, J$.R(3646497, 'hipar_content', hipar_content, false, false), 'file'), J$.R(3646513, 'hipar_name', hipar_name, false, false), J$.G(3646529, J$.R(3646521, 'hipar_content', hipar_content, false, false), 'base'));
                                                        J$.M(3646561, J$.I(typeof console === 'undefined' ? console = J$.R(3646545, 'console', undefined, true, true) : console = J$.R(3646545, 'console', console, true, true)), 'log', false)(J$.R(3646553, 'tmp', tmp, false, false));
                                                        try {
                                                            J$.F(3646585, J$.R(3646569, 'testFunc', testFunc, false, false), false)(J$.R(3646577, 'tmp', tmp, false, false));
                                                        } catch (e) {
                                                            J$.N(3646681, 'e', e, false, false, true);
                                                            J$.M(3646633, J$.G(3646601, J$.I(typeof process === 'undefined' ? process = J$.R(3646593, 'process', undefined, true, true) : process = J$.R(3646593, 'process', process, true, true)), 'stdout'), 'write', false)(J$.M(3646625, J$.R(3646609, 'tynt', tynt, false, true), 'Red', false)(J$.T(3646617, '[Verify Error]:', 21, false)));
                                                            J$.M(3646673, J$.I(typeof console === 'undefined' ? console = J$.R(3646641, 'console', undefined, true, true) : console = J$.R(3646641, 'console', console, true, true)), 'log', false)(J$.M(3646665, J$.R(3646649, 'tynt', tynt, false, true), 'Red', false)(J$.R(3646657, 'e', e, false, false)));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(3647457, J$e);
                        } finally {
                            if (J$.Fr(3647465))
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
                            J$.Fe(3646857, arguments.callee, this, arguments);
                            arguments = J$.N(3646865, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3646873, 'source_var', source_var, true, false, false);
                            var_name = J$.N(3646881, 'var_name', var_name, true, false, false);
                            J$.M(3646833, J$.I(typeof console === 'undefined' ? console = J$.R(3646801, 'console', undefined, true, true) : console = J$.R(3646801, 'console', console, true, true)), 'log', false)(J$.M(3646825, J$.R(3646809, 'tynt', tynt, false, true), 'Green', false)(J$.R(3646817, 'var_name', var_name, false, false)));
                            return J$.Rt(3646849, J$.R(3646841, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3647473, J$e);
                        } finally {
                            if (J$.Fr(3647481))
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
                            J$.Fe(3646905, arguments.callee, this, arguments);
                            arguments = J$.N(3646913, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3646921, 'source_var', source_var, true, false, false);
                            return J$.Rt(3646897, J$.R(3646889, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3647489, J$e);
                        } finally {
                            if (J$.Fr(3647497))
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
                            J$.Fe(3646977, arguments.callee, this, arguments);
                            arguments = J$.N(3646985, 'arguments', arguments, true, false, false);
                            a = J$.N(3646993, 'a', a, true, false, false);
                            return J$.Rt(3646969, J$.M(3646961, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3646929, 'JSON', undefined, true, true) : JSON = J$.R(3646929, 'JSON', JSON, true, true)), 'parse', false)(J$.M(3646953, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3646937, 'JSON', undefined, true, true) : JSON = J$.R(3646937, 'JSON', JSON, true, true)), 'stringify', false)(J$.R(3646945, 'a', a, false, false))));
                        } catch (J$e) {
                            J$.Ex(3647505, J$e);
                        } finally {
                            if (J$.Fr(3647513))
                                continue jalangiLabel13;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3647129, 'path', path, false, false, false);
            J$.N(3647137, 'tynt', tynt, false, false, false);
            J$.N(3647145, 'fs', fs, false, false, false);
            J$.N(3647153, 'rootMagicName', rootMagicName, false, false, false);
            J$.N(3647161, 'http', http, false, false, false);
            sendViaWebRequest = J$.N(3647177, 'sendViaWebRequest', J$.T(3647169, sendViaWebRequest, 12, false), true, false, false);
            entry = J$.N(3647193, 'entry', J$.T(3647185, entry, 12, false), true, false, false);
            loopProperty = J$.N(3647209, 'loopProperty', J$.T(3647201, loopProperty, 12, false), true, false, false);
            addSource = J$.N(3647225, 'addSource', J$.T(3647217, addSource, 12, false), true, false, false);
            verifyHipar = J$.N(3647241, 'verifyHipar', J$.T(3647233, verifyHipar, 12, false), true, false, false);
            source = J$.N(3647257, 'source', J$.T(3647249, source, 12, false), true, false, false);
            verify_hipar = J$.N(3647273, 'verify_hipar', J$.T(3647265, verify_hipar, 12, false), true, false, false);
            clone = J$.N(3647289, 'clone', J$.T(3647281, clone, 12, false), true, false, false);
            var path = J$.W(3643209, 'path', J$.F(3643201, J$.I(typeof require === 'undefined' ? require = J$.R(3643185, 'require', undefined, true, true) : require = J$.R(3643185, 'require', require, true, true)), false)(J$.T(3643193, 'path', 21, false)), path, false, true);
            var tynt = J$.W(3643241, 'tynt', J$.F(3643233, J$.I(typeof require === 'undefined' ? require = J$.R(3643217, 'require', undefined, true, true) : require = J$.R(3643217, 'require', require, true, true)), false)(J$.T(3643225, 'tynt', 21, false)), tynt, false, true);
            var fs = J$.W(3643273, 'fs', J$.F(3643265, J$.I(typeof require === 'undefined' ? require = J$.R(3643249, 'require', undefined, true, true) : require = J$.R(3643249, 'require', require, true, true)), false)(J$.T(3643257, 'fs', 21, false)), fs, false, true);
            var rootMagicName = J$.W(3643289, 'rootMagicName', J$.T(3643281, 'R0ot', 21, false), rootMagicName, false, true);
            var http = J$.W(3643321, 'http', J$.F(3643313, J$.I(typeof require === 'undefined' ? require = J$.R(3643297, 'require', undefined, true, true) : require = J$.R(3643297, 'require', require, true, true)), false)(J$.T(3643305, 'http', 21, false)), http, false, true);
            J$.P(3647017, J$.I(typeof exports === 'undefined' ? exports = J$.R(3647001, 'exports', undefined, true, true) : exports = J$.R(3647001, 'exports', exports, true, true)), 'clone', J$.R(3647009, 'clone', clone, false, true));
            J$.P(3647041, J$.I(typeof exports === 'undefined' ? exports = J$.R(3647025, 'exports', undefined, true, true) : exports = J$.R(3647025, 'exports', exports, true, true)), 'loopProperty', J$.R(3647033, 'loopProperty', loopProperty, false, true));
            J$.P(3647065, J$.I(typeof exports === 'undefined' ? exports = J$.R(3647049, 'exports', undefined, true, true) : exports = J$.R(3647049, 'exports', exports, true, true)), 'verifyHipar', J$.R(3647057, 'verifyHipar', verifyHipar, false, true));
            J$.P(3647089, J$.I(typeof exports === 'undefined' ? exports = J$.R(3647073, 'exports', undefined, true, true) : exports = J$.R(3647073, 'exports', exports, true, true)), 'entry', J$.R(3647081, 'entry', entry, false, true));
            J$.P(3647113, J$.I(typeof exports === 'undefined' ? exports = J$.R(3647097, 'exports', undefined, true, true) : exports = J$.R(3647097, 'exports', exports, true, true)), 'sendViaWebRequest', J$.R(3647105, 'sendViaWebRequest', sendViaWebRequest, false, true));
        } catch (J$e) {
            J$.Ex(3647521, J$e);
        } finally {
            if (J$.Sr(3647529))
                continue jalangiLabel14;
            else
                break jalangiLabel14;
        }
    }
// JALANGI DO NOT INSTRUMENT

