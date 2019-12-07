J$.noInstrEval = false;
jalangiLabel14:
    while (true) {
        try {
            J$.Se(423809, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestcaseUtils.js');
            function sendViaWebRequest(method, data, location, port, hostname) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(421129, arguments.callee, this, arguments);
                            arguments = J$.N(421137, 'arguments', arguments, true, false, false);
                            method = J$.N(421145, 'method', method, true, false, false);
                            data = J$.N(421153, 'data', data, true, false, false);
                            location = J$.N(421161, 'location', location, true, false, false);
                            port = J$.N(421169, 'port', port, true, false, false);
                            hostname = J$.N(421177, 'hostname', hostname, true, false, false);
                            J$.N(421185, 'http', http, false, false, false);
                            J$.N(421193, 'content', content, false, false, false);
                            J$.N(421201, 'options', options, false, false, false);
                            J$.N(421209, 'req', req, false, false, false);
                            var http = J$.W(420145, 'http', J$.F(420137, J$.I(typeof require === 'undefined' ? require = J$.R(420121, 'require', undefined, true, true) : require = J$.R(420121, 'require', require, true, true)), false)(J$.T(420129, 'http', 21, false)), http, false, false);
                            var content = J$.W(420161, 'content', J$.R(420153, 'data', data, false, false), content, false, false);
                            var options = J$.W(420225, 'options', J$.T(420217, {
                                hostname: J$.C(15424, J$.R(420169, 'hostname', hostname, false, false)) ? J$._() : J$.T(420177, '127.0.0.1', 21, false),
                                port: J$.R(420185, 'port', port, false, false),
                                path: J$.C(15432, J$.R(420193, 'location', location, false, false)) ? J$._() : J$.T(420201, '/', 21, false),
                                method: J$.T(420209, 'GET', 21, false)
                            }, 11, false), options, false, false);
                            if (J$.C(15440, J$.B(37050, '==', J$.R(420233, 'method', method, false, false), J$.T(420241, 'post', 21, false)))) {
                                J$.P(420265, J$.R(420249, 'options', options, false, false), 'method', J$.T(420257, 'POST', 21, false));
                                J$.P(420297, J$.R(420273, 'options', options, false, false), 'headers', J$.T(420289, { 'Content-Type': J$.T(420281, 'application/json', 21, false) }, 11, false));
                                var req = J$.W(420569, 'req', J$.M(420561, J$.R(420305, 'http', http, false, false), 'request', false)(J$.R(420313, 'options', options, false, false), J$.T(420553, function (res) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(420529, arguments.callee, this, arguments);
                                                arguments = J$.N(420537, 'arguments', arguments, true, false, false);
                                                res = J$.N(420545, 'res', res, true, false, false);
                                                J$.M(420353, J$.I(typeof console === 'undefined' ? console = J$.R(420321, 'console', undefined, true, true) : console = J$.R(420321, 'console', console, true, true)), 'log', false)(J$.B(37058, '+', J$.T(420329, 'STATUS: ', 21, false), J$.G(420345, J$.R(420337, 'res', res, false, false), 'statusCode')));
                                                J$.M(420409, J$.I(typeof console === 'undefined' ? console = J$.R(420361, 'console', undefined, true, true) : console = J$.R(420361, 'console', console, true, true)), 'log', false)(J$.B(37066, '+', J$.T(420369, 'HEADERS: ', 21, false), J$.M(420401, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(420377, 'JSON', undefined, true, true) : JSON = J$.R(420377, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(420393, J$.R(420385, 'res', res, false, false), 'headers'))));
                                                J$.M(420433, J$.R(420417, 'res', res, false, false), 'setEncoding', false)(J$.T(420425, 'utf8', 21, false));
                                                J$.M(420521, J$.R(420441, 'res', res, false, false), 'on', false)(J$.T(420449, 'data', 21, false), J$.T(420513, function (chunk) {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(420489, arguments.callee, this, arguments);
                                                                arguments = J$.N(420497, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(420505, 'chunk', chunk, true, false, false);
                                                                J$.M(420481, J$.I(typeof console === 'undefined' ? console = J$.R(420457, 'console', undefined, true, true) : console = J$.R(420457, 'console', console, true, true)), 'log', false)(J$.B(37074, '+', J$.T(420465, 'BODY: ', 21, false), J$.R(420473, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(423985, J$e);
                                                            } finally {
                                                                if (J$.Fr(423993))
                                                                    continue jalangiLabel0;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(424001, J$e);
                                            } finally {
                                                if (J$.Fr(424009))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(420665, J$.R(420577, 'req', req, false, false), 'on', false)(J$.T(420585, 'error', 21, false), J$.T(420657, function (e) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(420633, arguments.callee, this, arguments);
                                                arguments = J$.N(420641, 'arguments', arguments, true, false, false);
                                                e = J$.N(420649, 'e', e, true, false, false);
                                                J$.M(420625, J$.I(typeof console === 'undefined' ? console = J$.R(420593, 'console', undefined, true, true) : console = J$.R(420593, 'console', console, true, true)), 'log', false)(J$.B(37082, '+', J$.T(420601, 'problem with request: ', 21, false), J$.G(420617, J$.R(420609, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(424017, J$e);
                                            } finally {
                                                if (J$.Fr(424025))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(420689, J$.R(420673, 'req', req, false, false), 'write', false)(J$.R(420681, 'content', content, false, false));
                                J$.M(420705, J$.R(420697, 'req', req, false, false), 'end', false)();
                            } else {
                                J$.A(420737, J$.R(420713, 'options', options, false, false), 'location', '+')(J$.B(37090, '+', J$.T(420721, '?', 21, false), J$.R(420729, 'content', content, false, false)));
                                var req = J$.W(421009, 'req', J$.M(421001, J$.R(420745, 'http', http, false, false), 'request', false)(J$.R(420753, 'options', options, false, false), J$.T(420993, function (res) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(420969, arguments.callee, this, arguments);
                                                arguments = J$.N(420977, 'arguments', arguments, true, false, false);
                                                res = J$.N(420985, 'res', res, true, false, false);
                                                J$.M(420793, J$.I(typeof console === 'undefined' ? console = J$.R(420761, 'console', undefined, true, true) : console = J$.R(420761, 'console', console, true, true)), 'log', false)(J$.B(37098, '+', J$.T(420769, 'STATUS: ', 21, false), J$.G(420785, J$.R(420777, 'res', res, false, false), 'statusCode')));
                                                J$.M(420849, J$.I(typeof console === 'undefined' ? console = J$.R(420801, 'console', undefined, true, true) : console = J$.R(420801, 'console', console, true, true)), 'log', false)(J$.B(37106, '+', J$.T(420809, 'HEADERS: ', 21, false), J$.M(420841, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(420817, 'JSON', undefined, true, true) : JSON = J$.R(420817, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(420833, J$.R(420825, 'res', res, false, false), 'headers'))));
                                                J$.M(420873, J$.R(420857, 'res', res, false, false), 'setEncoding', false)(J$.T(420865, 'utf8', 21, false));
                                                J$.M(420961, J$.R(420881, 'res', res, false, false), 'on', false)(J$.T(420889, 'data', 21, false), J$.T(420953, function (chunk) {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(420929, arguments.callee, this, arguments);
                                                                arguments = J$.N(420937, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(420945, 'chunk', chunk, true, false, false);
                                                                J$.M(420921, J$.I(typeof console === 'undefined' ? console = J$.R(420897, 'console', undefined, true, true) : console = J$.R(420897, 'console', console, true, true)), 'log', false)(J$.B(37114, '+', J$.T(420905, 'BODY: ', 21, false), J$.R(420913, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(424033, J$e);
                                                            } finally {
                                                                if (J$.Fr(424041))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(424049, J$e);
                                            } finally {
                                                if (J$.Fr(424057))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(421105, J$.R(421017, 'req', req, false, false), 'on', false)(J$.T(421025, 'error', 21, false), J$.T(421097, function (e) {
                                    jalangiLabel5:
                                        while (true) {
                                            try {
                                                J$.Fe(421073, arguments.callee, this, arguments);
                                                arguments = J$.N(421081, 'arguments', arguments, true, false, false);
                                                e = J$.N(421089, 'e', e, true, false, false);
                                                J$.M(421065, J$.I(typeof console === 'undefined' ? console = J$.R(421033, 'console', undefined, true, true) : console = J$.R(421033, 'console', console, true, true)), 'log', false)(J$.B(37122, '+', J$.T(421041, 'problem with request: ', 21, false), J$.G(421057, J$.R(421049, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(424065, J$e);
                                            } finally {
                                                if (J$.Fr(424073))
                                                    continue jalangiLabel5;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(421121, J$.R(421113, 'req', req, false, false), 'end', false)();
                            }
                        } catch (J$e) {
                            J$.Ex(424081, J$e);
                        } finally {
                            if (J$.Fr(424089))
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
                            J$.Fe(421441, arguments.callee, this, arguments);
                            arguments = J$.N(421449, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(421457, 'testFunc', testFunc, true, false, false);
                            param = J$.N(421465, 'param', param, true, false, false);
                            if (J$.C(15456, J$.B(37130, '==', J$.G(421241, J$.G(421225, J$.I(typeof process === 'undefined' ? process = J$.R(421217, 'process', undefined, true, true) : process = J$.R(421217, 'process', process, true, true)), 'argv'), J$.T(421233, 2, 22, false)), J$.T(421249, 'analysis', 21, false))))
                                J$.F(421281, J$.R(421257, 'loopProperty', loopProperty, false, true), false)(J$.R(421265, 'testFunc', testFunc, false, false), J$.R(421273, 'param', param, false, false));
                            else if (J$.C(15448, J$.B(37138, '==', J$.G(421313, J$.G(421297, J$.I(typeof process === 'undefined' ? process = J$.R(421289, 'process', undefined, true, true) : process = J$.R(421289, 'process', process, true, true)), 'argv'), J$.T(421305, 2, 22, false)), J$.T(421321, 'verify', 21, false))))
                                J$.F(421361, J$.R(421329, 'verifyHipar', verifyHipar, false, true), false)(J$.R(421337, 'testFunc', testFunc, false, false), J$.R(421345, 'param', param, false, false), J$.I(typeof ProjectDir === 'undefined' ? ProjectDir = J$.R(421353, 'ProjectDir', undefined, true, true) : ProjectDir = J$.R(421353, 'ProjectDir', ProjectDir, true, true)));
                            else {
                                J$.M(421401, J$.I(typeof console === 'undefined' ? console = J$.R(421369, 'console', undefined, true, true) : console = J$.R(421369, 'console', console, true, true)), 'log', false)(J$.M(421393, J$.R(421377, 'tynt', tynt, false, true), 'Red', false)(J$.T(421385, 'Incorrect Prompt argumnet, we do analysis by default', 21, false)));
                                J$.F(421433, J$.R(421409, 'loopProperty', loopProperty, false, true), false)(J$.R(421417, 'testFunc', testFunc, false, false), J$.R(421425, 'param', param, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(424097, J$e);
                        } finally {
                            if (J$.Fr(424105))
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
                            J$.Fe(422193, arguments.callee, this, arguments);
                            arguments = J$.N(422201, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(422209, 'testFunc', testFunc, true, false, false);
                            param = J$.N(422217, 'param', param, true, false, false);
                            J$.N(422225, 'stack', stack, false, false, false);
                            J$.N(422233, 'tmp', tmp, false, false, false);
                            J$.N(422241, 'i', i, false, false, false);
                            J$.N(422249, 'nameChain', nameChain, false, false, false);
                            J$.N(422257, 'properties', properties, false, false, false);
                            J$.N(422265, 'property', property, false, false, false);
                            var stack = J$.W(421505, 'stack', J$.T(421497, [J$.T(421489, {
                                    param: J$.R(421473, 'param', param, false, false),
                                    nameChain: J$.T(421481, [], 10, false)
                                }, 11, false)], 10, false), stack, false, false);
                            var tmp = J$.W(421537, 'tmp', J$.F(421529, J$.R(421513, 'clone', clone, false, true), false)(J$.R(421521, 'param', param, false, false)), tmp, false, false);
                            tmp = J$.W(421577, 'tmp', J$.F(421569, J$.R(421545, 'source', source, false, true), false)(J$.R(421553, 'tmp', tmp, false, false), J$.R(421561, 'rootMagicName', rootMagicName, false, true)), tmp, false, false);
                            J$.F(421601, J$.R(421585, 'testFunc', testFunc, false, false), false)(J$.R(421593, 'tmp', tmp, false, false));
                            while (J$.C(15504, J$.B(37146, '>', J$.G(421617, J$.R(421609, 'stack', stack, false, false), 'length'), J$.T(421625, 0, 22, false)))) {
                                s = J$.W(421649, 's', J$.M(421641, J$.R(421633, 'stack', stack, false, false), 'shift', false)(), J$.I(typeof s === 'undefined' ? undefined : s), true, true);
                                if (J$.C(15480, J$.C(15472, J$.C(15464, J$.B(37162, '==', J$.U(37154, 'typeof', J$.G(421665, J$.I(typeof s === 'undefined' ? s = J$.R(421657, 's', undefined, true, true) : s = J$.R(421657, 's', s, true, true)), 'param')), J$.T(421673, 'string', 21, false))) ? J$._() : J$.B(37178, '==', J$.U(37170, 'typeof', J$.G(421689, J$.I(typeof s === 'undefined' ? s = J$.R(421681, 's', undefined, true, true) : s = J$.R(421681, 's', s, true, true)), 'param')), J$.T(421697, 'null', 21, false))) ? J$._() : J$.B(37194, '==', J$.U(37186, 'typeof', J$.G(421713, J$.I(typeof s === 'undefined' ? s = J$.R(421705, 's', undefined, true, true) : s = J$.R(421705, 's', s, true, true)), 'param')), J$.T(421721, 'undefined', 21, false))))
                                    continue;
                                if (J$.C(15496, J$.M(421753, J$.I(typeof Array === 'undefined' ? Array = J$.R(421729, 'Array', undefined, true, true) : Array = J$.R(421729, 'Array', Array, true, true)), 'isArray', false)(J$.G(421745, J$.I(typeof s === 'undefined' ? s = J$.R(421737, 's', undefined, true, true) : s = J$.R(421737, 's', s, true, true)), 'param')))) {
                                    for (var i = J$.W(421769, 'i', J$.T(421761, 0, 22, false), i, false, false); J$.C(15488, J$.B(37202, '<', J$.R(421777, 'i', i, false, false), J$.G(421801, J$.G(421793, J$.I(typeof s === 'undefined' ? s = J$.R(421785, 's', undefined, true, true) : s = J$.R(421785, 's', s, true, true)), 'param'), 'length'))); J$.B(37226, '-', i = J$.W(421817, 'i', J$.B(37218, '+', J$.U(37210, '+', J$.R(421809, 'i', i, false, false)), 1), i, false, false), 1)) {
                                        var nameChain = J$.W(421857, 'nameChain', J$.M(421849, J$.G(421833, J$.I(typeof s === 'undefined' ? s = J$.R(421825, 's', undefined, true, true) : s = J$.R(421825, 's', s, true, true)), 'nameChain'), 'concat', false)(J$.R(421841, 'i', i, false, false)), nameChain, false, false);
                                        J$.M(421913, J$.R(421865, 'stack', stack, false, false), 'push', false)(J$.T(421905, {
                                            param: J$.G(421889, J$.R(421873, 'param', param, false, false), J$.R(421881, 'i', i, false, false)),
                                            nameChain: J$.R(421897, 'nameChain', nameChain, false, false)
                                        }, 11, false));
                                    }
                                    continue;
                                }
                                J$.M(421945, J$.I(typeof console === 'undefined' ? console = J$.R(421921, 'console', undefined, true, true) : console = J$.R(421921, 'console', console, true, true)), 'log', false)(J$.G(421937, J$.I(typeof s === 'undefined' ? s = J$.R(421929, 's', undefined, true, true) : s = J$.R(421929, 's', s, true, true)), 'param'));
                                var properties = J$.W(421985, 'properties', J$.M(421977, J$.I(typeof Object === 'undefined' ? Object = J$.R(421953, 'Object', undefined, true, true) : Object = J$.R(421953, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.G(421969, J$.I(typeof s === 'undefined' ? s = J$.R(421961, 's', undefined, true, true) : s = J$.R(421961, 's', s, true, true)), 'param')), properties, false, false);
                                for (var property of J$.R(421993, 'properties', properties, false, false)) {
                                    var nameChain = J$.W(422033, 'nameChain', J$.M(422025, J$.G(422009, J$.I(typeof s === 'undefined' ? s = J$.R(422001, 's', undefined, true, true) : s = J$.R(422001, 's', s, true, true)), 'nameChain'), 'concat', false)(J$.R(422017, 'property', property, false, false)), nameChain, false, false);
                                    J$.M(422097, J$.R(422041, 'stack', stack, false, false), 'push', false)(J$.T(422089, {
                                        param: J$.G(422073, J$.G(422057, J$.I(typeof s === 'undefined' ? s = J$.R(422049, 's', undefined, true, true) : s = J$.R(422049, 's', s, true, true)), 'param'), J$.R(422065, 'property', property, false, false)),
                                        nameChain: J$.R(422081, 'nameChain', nameChain, false, false)
                                    }, 11, false));
                                    var tmp = J$.W(422129, 'tmp', J$.F(422121, J$.R(422105, 'clone', clone, false, true), false)(J$.R(422113, 'param', param, false, false)), tmp, false, false);
                                    J$.F(422161, J$.R(422137, 'addSource', addSource, false, true), false)(J$.R(422145, 'tmp', tmp, false, false), J$.R(422153, 'nameChain', nameChain, false, false));
                                    J$.F(422185, J$.R(422169, 'testFunc', testFunc, false, false), false)(J$.R(422177, 'tmp', tmp, false, false));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(424113, J$e);
                        } finally {
                            if (J$.Fr(424121))
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
                            J$.Fe(422505, arguments.callee, this, arguments);
                            arguments = J$.N(422513, 'arguments', arguments, true, false, false);
                            obj = J$.N(422521, 'obj', obj, true, false, false);
                            hiparNames = J$.N(422529, 'hiparNames', hiparNames, true, false, false);
                            J$.N(422537, 'nextProperty', nextProperty, false, false, false);
                            if (J$.C(15512, J$.B(37234, '==', J$.G(422281, J$.R(422273, 'hiparNames', hiparNames, false, false), 'length'), J$.T(422289, 1, 22, false)))) {
                                J$.P(422409, J$.R(422297, 'obj', obj, false, false), J$.G(422321, J$.R(422305, 'hiparNames', hiparNames, false, false), J$.T(422313, 0, 22, false)), J$.F(422401, J$.R(422329, 'source', source, false, true), false)(J$.G(422369, J$.R(422337, 'obj', obj, false, false), J$.G(422361, J$.R(422345, 'hiparNames', hiparNames, false, false), J$.T(422353, 0, 22, false))), J$.G(422393, J$.R(422377, 'hiparNames', hiparNames, false, false), J$.T(422385, 0, 22, false))));
                                return J$.Rt(422417, undefined);
                            }
                            var nextProperty = J$.W(422441, 'nextProperty', J$.M(422433, J$.R(422425, 'hiparNames', hiparNames, false, false), 'shift', false)(), nextProperty, false, false);
                            return J$.Rt(422497, J$.F(422489, J$.R(422449, 'addSource', addSource, false, true), false)(J$.G(422473, J$.R(422457, 'obj', obj, false, false), J$.R(422465, 'nextProperty', nextProperty, false, false)), J$.R(422481, 'hiparNames', hiparNames, false, false)));
                        } catch (J$e) {
                            J$.Ex(424129, J$e);
                        } finally {
                            if (J$.Fr(424137))
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
                            J$.Fe(423393, arguments.callee, this, arguments);
                            arguments = J$.N(423401, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(423409, 'testFunc', testFunc, true, false, false);
                            param = J$.N(423417, 'param', param, true, false, false);
                            J$.N(423425, 'verifyPath', verifyPath, false, false, false);
                            J$.N(423433, 'result', result, false, false, false);
                            J$.N(423441, 'property', property, false, false, false);
                            J$.N(423449, 'hipar_name', hipar_name, false, false, false);
                            J$.N(423457, 'hipar_content', hipar_content, false, false, false);
                            J$.N(423465, 'tmp', tmp, false, false, false);
                            testFileName = J$.W(422601, 'testFileName', J$.M(422593, J$.M(422585, J$.G(422569, J$.G(422553, J$.I(typeof process === 'undefined' ? process = J$.R(422545, 'process', undefined, true, true) : process = J$.R(422545, 'process', process, true, true)), 'argv'), J$.T(422561, 1, 22, false)), 'split', false)(J$.T(422577, '/', 21, false)), 'pop', false)(), J$.I(typeof testFileName === 'undefined' ? undefined : testFileName), true, true);
                            var verifyPath = J$.W(422657, 'verifyPath', J$.M(422649, J$.R(422609, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(422617, '__dirname', undefined, true, true) : __dirname = J$.R(422617, '__dirname', __dirname, true, true)), J$.B(37250, '+', J$.B(37242, '+', J$.T(422625, '../../outputs/hidden_attr/', 21, false), J$.I(typeof testFileName === 'undefined' ? testFileName = J$.R(422633, 'testFileName', undefined, true, true) : testFileName = J$.R(422633, 'testFileName', testFileName, true, true))), J$.T(422641, 'on', 21, false))), verifyPath, false, false);
                            J$.M(422681, J$.I(typeof console === 'undefined' ? console = J$.R(422665, 'console', undefined, true, true) : console = J$.R(422665, 'console', console, true, true)), 'log', false)(J$.R(422673, 'verifyPath', verifyPath, false, false));
                            if (J$.C(15536, J$.M(422705, J$.R(422689, 'fs', fs, false, true), 'existsSync', false)(J$.R(422697, 'verifyPath', verifyPath, false, false)))) {
                                J$.M(422745, J$.I(typeof console === 'undefined' ? console = J$.R(422713, 'console', undefined, true, true) : console = J$.R(422713, 'console', console, true, true)), 'log', false)(J$.M(422737, J$.R(422721, 'tynt', tynt, false, true), 'Green', false)(J$.T(422729, '[-]Verifying hidden Parameter', 21, false)));
                                var result = J$.W(422793, 'result', J$.M(422785, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(422753, 'JSON', undefined, true, true) : JSON = J$.R(422753, 'JSON', JSON, true, true)), 'parse', false)(J$.M(422777, J$.R(422761, 'fs', fs, false, true), 'readFileSync', false)(J$.R(422769, 'verifyPath', verifyPath, false, false))), result, false, false);
                                for (var property in J$.H(423377, J$.R(422801, 'result', result, false, false))) {
                                    J$.N(423385, 'property', property, false, true, false);
                                    {
                                        {
                                            for (var hipar_name in J$.H(423361, J$.G(422825, J$.R(422809, 'result', result, false, false), J$.R(422817, 'property', property, false, false)))) {
                                                J$.N(423369, 'hipar_name', hipar_name, false, true, false);
                                                {
                                                    {
                                                        var hipar_content = J$.W(422873, 'hipar_content', J$.G(422865, J$.G(422849, J$.R(422833, 'result', result, false, false), J$.R(422841, 'property', property, false, false)), J$.R(422857, 'hipar_name', hipar_name, false, false)), hipar_content, false, false);
                                                        var tmp = J$.W(422905, 'tmp', J$.F(422897, J$.R(422881, 'clone', clone, false, true), false)(J$.R(422889, 'param', param, false, false)), tmp, false, false);
                                                        hipar_multi_names = J$.W(422937, 'hipar_multi_names', J$.M(422929, J$.R(422913, 'hipar_name', hipar_name, false, false), 'split', false)(J$.T(422921, '.', 21, false)), J$.I(typeof hipar_multi_names === 'undefined' ? undefined : hipar_multi_names), true, true);
                                                        if (J$.C(15520, J$.B(37258, '!=', J$.R(422945, 'property', property, false, false), J$.R(422953, 'rootMagicName', rootMagicName, false, true))))
                                                            tmp = J$.W(422985, 'tmp', J$.G(422977, J$.R(422961, 'tmp', tmp, false, false), J$.R(422969, 'property', property, false, false)), tmp, false, false);
                                                        while (J$.C(15528, J$.B(37266, '>', J$.G(423001, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(422993, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(422993, 'hipar_multi_names', hipar_multi_names, true, true)), 'length'), J$.T(423009, 1, 22, false)))) {
                                                            name = J$.W(423033, 'name', J$.M(423025, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(423017, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(423017, 'hipar_multi_names', hipar_multi_names, true, true)), 'shift', false)(), J$.I(typeof name === 'undefined' ? undefined : name), true, true);
                                                            J$.P(423065, J$.R(423041, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(423049, 'name', undefined, true, true) : name = J$.R(423049, 'name', name, true, true)), J$.T(423057, {}, 11, false));
                                                            tmp = J$.W(423097, 'tmp', J$.G(423089, J$.R(423073, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(423081, 'name', undefined, true, true) : name = J$.R(423081, 'name', name, true, true))), tmp, false, false);
                                                        }
                                                        name = J$.W(423121, 'name', J$.M(423113, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(423105, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(423105, 'hipar_multi_names', hipar_multi_names, true, true)), 'shift', false)(), J$.I(typeof name === 'undefined' ? undefined : name), true, true);
                                                        J$.P(423153, J$.R(423129, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(423137, 'name', undefined, true, true) : name = J$.R(423137, 'name', name, true, true)), J$.T(423145, 'H1P4r', 21, false));
                                                        J$.F(423209, J$.R(423161, 'verify_hipar', verify_hipar, false, true), false)(J$.G(423177, J$.R(423169, 'hipar_content', hipar_content, false, false), 'file'), J$.R(423185, 'hipar_name', hipar_name, false, false), J$.G(423201, J$.R(423193, 'hipar_content', hipar_content, false, false), 'base'));
                                                        J$.M(423233, J$.I(typeof console === 'undefined' ? console = J$.R(423217, 'console', undefined, true, true) : console = J$.R(423217, 'console', console, true, true)), 'log', false)(J$.R(423225, 'tmp', tmp, false, false));
                                                        try {
                                                            J$.F(423257, J$.R(423241, 'testFunc', testFunc, false, false), false)(J$.R(423249, 'tmp', tmp, false, false));
                                                        } catch (e) {
                                                            J$.N(423353, 'e', e, false, false, true);
                                                            J$.M(423305, J$.G(423273, J$.I(typeof process === 'undefined' ? process = J$.R(423265, 'process', undefined, true, true) : process = J$.R(423265, 'process', process, true, true)), 'stdout'), 'write', false)(J$.M(423297, J$.R(423281, 'tynt', tynt, false, true), 'Red', false)(J$.T(423289, '[Verify Error]:', 21, false)));
                                                            J$.M(423345, J$.I(typeof console === 'undefined' ? console = J$.R(423313, 'console', undefined, true, true) : console = J$.R(423313, 'console', console, true, true)), 'log', false)(J$.M(423337, J$.R(423321, 'tynt', tynt, false, true), 'Red', false)(J$.R(423329, 'e', e, false, false)));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(424145, J$e);
                        } finally {
                            if (J$.Fr(424153))
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
                            J$.Fe(423545, arguments.callee, this, arguments);
                            arguments = J$.N(423553, 'arguments', arguments, true, false, false);
                            source_var = J$.N(423561, 'source_var', source_var, true, false, false);
                            var_name = J$.N(423569, 'var_name', var_name, true, false, false);
                            J$.M(423505, J$.I(typeof console === 'undefined' ? console = J$.R(423473, 'console', undefined, true, true) : console = J$.R(423473, 'console', console, true, true)), 'log', false)(J$.M(423497, J$.R(423481, 'tynt', tynt, false, true), 'Green', false)(J$.R(423489, 'var_name', var_name, false, false)));
                            source_var = J$.W(423521, 'source_var', J$.T(423513, 'hipar', 21, false), source_var, false, false);
                            return J$.Rt(423537, J$.R(423529, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(424161, J$e);
                        } finally {
                            if (J$.Fr(424169))
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
                            J$.Fe(423593, arguments.callee, this, arguments);
                            arguments = J$.N(423601, 'arguments', arguments, true, false, false);
                            source_var = J$.N(423609, 'source_var', source_var, true, false, false);
                            return J$.Rt(423585, J$.R(423577, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(424177, J$e);
                        } finally {
                            if (J$.Fr(424185))
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
                            J$.Fe(423665, arguments.callee, this, arguments);
                            arguments = J$.N(423673, 'arguments', arguments, true, false, false);
                            a = J$.N(423681, 'a', a, true, false, false);
                            return J$.Rt(423657, J$.M(423649, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(423617, 'JSON', undefined, true, true) : JSON = J$.R(423617, 'JSON', JSON, true, true)), 'parse', false)(J$.M(423641, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(423625, 'JSON', undefined, true, true) : JSON = J$.R(423625, 'JSON', JSON, true, true)), 'stringify', false)(J$.R(423633, 'a', a, false, false))));
                        } catch (J$e) {
                            J$.Ex(424193, J$e);
                        } finally {
                            if (J$.Fr(424201))
                                continue jalangiLabel13;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(423817, 'path', path, false, false, false);
            J$.N(423825, 'tynt', tynt, false, false, false);
            J$.N(423833, 'fs', fs, false, false, false);
            J$.N(423841, 'rootMagicName', rootMagicName, false, false, false);
            J$.N(423849, 'http', http, false, false, false);
            sendViaWebRequest = J$.N(423865, 'sendViaWebRequest', J$.T(423857, sendViaWebRequest, 12, false), true, false, false);
            entry = J$.N(423881, 'entry', J$.T(423873, entry, 12, false), true, false, false);
            loopProperty = J$.N(423897, 'loopProperty', J$.T(423889, loopProperty, 12, false), true, false, false);
            addSource = J$.N(423913, 'addSource', J$.T(423905, addSource, 12, false), true, false, false);
            verifyHipar = J$.N(423929, 'verifyHipar', J$.T(423921, verifyHipar, 12, false), true, false, false);
            source = J$.N(423945, 'source', J$.T(423937, source, 12, false), true, false, false);
            verify_hipar = J$.N(423961, 'verify_hipar', J$.T(423953, verify_hipar, 12, false), true, false, false);
            clone = J$.N(423977, 'clone', J$.T(423969, clone, 12, false), true, false, false);
            var path = J$.W(420001, 'path', J$.F(419993, J$.I(typeof require === 'undefined' ? require = J$.R(419977, 'require', undefined, true, true) : require = J$.R(419977, 'require', require, true, true)), false)(J$.T(419985, 'path', 21, false)), path, false, true);
            var tynt = J$.W(420033, 'tynt', J$.F(420025, J$.I(typeof require === 'undefined' ? require = J$.R(420009, 'require', undefined, true, true) : require = J$.R(420009, 'require', require, true, true)), false)(J$.T(420017, 'tynt', 21, false)), tynt, false, true);
            var fs = J$.W(420065, 'fs', J$.F(420057, J$.I(typeof require === 'undefined' ? require = J$.R(420041, 'require', undefined, true, true) : require = J$.R(420041, 'require', require, true, true)), false)(J$.T(420049, 'fs', 21, false)), fs, false, true);
            var rootMagicName = J$.W(420081, 'rootMagicName', J$.T(420073, 'R0ot', 21, false), rootMagicName, false, true);
            var http = J$.W(420113, 'http', J$.F(420105, J$.I(typeof require === 'undefined' ? require = J$.R(420089, 'require', undefined, true, true) : require = J$.R(420089, 'require', require, true, true)), false)(J$.T(420097, 'http', 21, false)), http, false, true);
            J$.P(423705, J$.I(typeof exports === 'undefined' ? exports = J$.R(423689, 'exports', undefined, true, true) : exports = J$.R(423689, 'exports', exports, true, true)), 'clone', J$.R(423697, 'clone', clone, false, true));
            J$.P(423729, J$.I(typeof exports === 'undefined' ? exports = J$.R(423713, 'exports', undefined, true, true) : exports = J$.R(423713, 'exports', exports, true, true)), 'loopProperty', J$.R(423721, 'loopProperty', loopProperty, false, true));
            J$.P(423753, J$.I(typeof exports === 'undefined' ? exports = J$.R(423737, 'exports', undefined, true, true) : exports = J$.R(423737, 'exports', exports, true, true)), 'verifyHipar', J$.R(423745, 'verifyHipar', verifyHipar, false, true));
            J$.P(423777, J$.I(typeof exports === 'undefined' ? exports = J$.R(423761, 'exports', undefined, true, true) : exports = J$.R(423761, 'exports', exports, true, true)), 'entry', J$.R(423769, 'entry', entry, false, true));
            J$.P(423801, J$.I(typeof exports === 'undefined' ? exports = J$.R(423785, 'exports', undefined, true, true) : exports = J$.R(423785, 'exports', exports, true, true)), 'sendViaWebRequest', J$.R(423793, 'sendViaWebRequest', sendViaWebRequest, false, true));
        } catch (J$e) {
            J$.Ex(424209, J$e);
        } finally {
            if (J$.Sr(424217))
                continue jalangiLabel14;
            else
                break jalangiLabel14;
        }
    }
// JALANGI DO NOT INSTRUMENT

