J$.noInstrEval = false;
jalangiLabel13:
    while (true) {
        try {
            J$.Se(3947897, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestcaseUtils.js');
            function sendViaWebRequest(method, data, location, port, hostname) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(3945513, arguments.callee, this, arguments);
                            arguments = J$.N(3945521, 'arguments', arguments, true, false, false);
                            method = J$.N(3945529, 'method', method, true, false, false);
                            data = J$.N(3945537, 'data', data, true, false, false);
                            location = J$.N(3945545, 'location', location, true, false, false);
                            port = J$.N(3945553, 'port', port, true, false, false);
                            hostname = J$.N(3945561, 'hostname', hostname, true, false, false);
                            J$.N(3945569, 'http', http, false, false, false);
                            J$.N(3945577, 'content', content, false, false, false);
                            J$.N(3945585, 'options', options, false, false, false);
                            J$.N(3945593, 'req', req, false, false, false);
                            var http = J$.W(3944529, 'http', J$.F(3944521, J$.I(typeof require === 'undefined' ? require = J$.R(3944505, 'require', undefined, true, true) : require = J$.R(3944505, 'require', require, true, true)), false)(J$.T(3944513, 'http', 21, false)), http, false, false);
                            var content = J$.W(3944545, 'content', J$.R(3944537, 'data', data, false, false), content, false, false);
                            var options = J$.W(3944609, 'options', J$.T(3944601, {
                                hostname: J$.C(217696, J$.R(3944553, 'hostname', hostname, false, false)) ? J$._() : J$.T(3944561, '127.0.0.1', 21, false),
                                port: J$.R(3944569, 'port', port, false, false),
                                path: J$.C(217704, J$.R(3944577, 'location', location, false, false)) ? J$._() : J$.T(3944585, '/', 21, false),
                                method: J$.T(3944593, 'GET', 21, false)
                            }, 11, false), options, false, false);
                            if (J$.C(217712, J$.B(518730, '==', J$.R(3944617, 'method', method, false, false), J$.T(3944625, 'post', 21, false)))) {
                                J$.P(3944649, J$.R(3944633, 'options', options, false, false), 'method', J$.T(3944641, 'POST', 21, false));
                                J$.P(3944681, J$.R(3944657, 'options', options, false, false), 'headers', J$.T(3944673, { 'Content-Type': J$.T(3944665, 'application/json', 21, false) }, 11, false));
                                var req = J$.W(3944953, 'req', J$.M(3944945, J$.R(3944689, 'http', http, false, false), 'request', false)(J$.R(3944697, 'options', options, false, false), J$.T(3944937, function (res) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(3944913, arguments.callee, this, arguments);
                                                arguments = J$.N(3944921, 'arguments', arguments, true, false, false);
                                                res = J$.N(3944929, 'res', res, true, false, false);
                                                J$.M(3944737, J$.I(typeof console === 'undefined' ? console = J$.R(3944705, 'console', undefined, true, true) : console = J$.R(3944705, 'console', console, true, true)), 'log', false)(J$.B(518738, '+', J$.T(3944713, 'STATUS: ', 21, false), J$.G(3944729, J$.R(3944721, 'res', res, false, false), 'statusCode')));
                                                J$.M(3944793, J$.I(typeof console === 'undefined' ? console = J$.R(3944745, 'console', undefined, true, true) : console = J$.R(3944745, 'console', console, true, true)), 'log', false)(J$.B(518746, '+', J$.T(3944753, 'HEADERS: ', 21, false), J$.M(3944785, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3944761, 'JSON', undefined, true, true) : JSON = J$.R(3944761, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3944777, J$.R(3944769, 'res', res, false, false), 'headers'))));
                                                J$.M(3944817, J$.R(3944801, 'res', res, false, false), 'setEncoding', false)(J$.T(3944809, 'utf8', 21, false));
                                                J$.M(3944905, J$.R(3944825, 'res', res, false, false), 'on', false)(J$.T(3944833, 'data', 21, false), J$.T(3944897, function (chunk) {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3944873, arguments.callee, this, arguments);
                                                                arguments = J$.N(3944881, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3944889, 'chunk', chunk, true, false, false);
                                                                J$.M(3944865, J$.I(typeof console === 'undefined' ? console = J$.R(3944841, 'console', undefined, true, true) : console = J$.R(3944841, 'console', console, true, true)), 'log', false)(J$.B(518754, '+', J$.T(3944849, 'BODY: ', 21, false), J$.R(3944857, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3948057, J$e);
                                                            } finally {
                                                                if (J$.Fr(3948065))
                                                                    continue jalangiLabel0;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3948073, J$e);
                                            } finally {
                                                if (J$.Fr(3948081))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3945049, J$.R(3944961, 'req', req, false, false), 'on', false)(J$.T(3944969, 'error', 21, false), J$.T(3945041, function (e) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(3945017, arguments.callee, this, arguments);
                                                arguments = J$.N(3945025, 'arguments', arguments, true, false, false);
                                                e = J$.N(3945033, 'e', e, true, false, false);
                                                J$.M(3945009, J$.I(typeof console === 'undefined' ? console = J$.R(3944977, 'console', undefined, true, true) : console = J$.R(3944977, 'console', console, true, true)), 'log', false)(J$.B(518762, '+', J$.T(3944985, 'problem with request: ', 21, false), J$.G(3945001, J$.R(3944993, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3948089, J$e);
                                            } finally {
                                                if (J$.Fr(3948097))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3945073, J$.R(3945057, 'req', req, false, false), 'write', false)(J$.R(3945065, 'content', content, false, false));
                                J$.M(3945089, J$.R(3945081, 'req', req, false, false), 'end', false)();
                            } else {
                                J$.A(3945121, J$.R(3945097, 'options', options, false, false), 'location', '+')(J$.B(518770, '+', J$.T(3945105, '?', 21, false), J$.R(3945113, 'content', content, false, false)));
                                var req = J$.W(3945393, 'req', J$.M(3945385, J$.R(3945129, 'http', http, false, false), 'request', false)(J$.R(3945137, 'options', options, false, false), J$.T(3945377, function (res) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(3945353, arguments.callee, this, arguments);
                                                arguments = J$.N(3945361, 'arguments', arguments, true, false, false);
                                                res = J$.N(3945369, 'res', res, true, false, false);
                                                J$.M(3945177, J$.I(typeof console === 'undefined' ? console = J$.R(3945145, 'console', undefined, true, true) : console = J$.R(3945145, 'console', console, true, true)), 'log', false)(J$.B(518778, '+', J$.T(3945153, 'STATUS: ', 21, false), J$.G(3945169, J$.R(3945161, 'res', res, false, false), 'statusCode')));
                                                J$.M(3945233, J$.I(typeof console === 'undefined' ? console = J$.R(3945185, 'console', undefined, true, true) : console = J$.R(3945185, 'console', console, true, true)), 'log', false)(J$.B(518786, '+', J$.T(3945193, 'HEADERS: ', 21, false), J$.M(3945225, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3945201, 'JSON', undefined, true, true) : JSON = J$.R(3945201, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3945217, J$.R(3945209, 'res', res, false, false), 'headers'))));
                                                J$.M(3945257, J$.R(3945241, 'res', res, false, false), 'setEncoding', false)(J$.T(3945249, 'utf8', 21, false));
                                                J$.M(3945345, J$.R(3945265, 'res', res, false, false), 'on', false)(J$.T(3945273, 'data', 21, false), J$.T(3945337, function (chunk) {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3945313, arguments.callee, this, arguments);
                                                                arguments = J$.N(3945321, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3945329, 'chunk', chunk, true, false, false);
                                                                J$.M(3945305, J$.I(typeof console === 'undefined' ? console = J$.R(3945281, 'console', undefined, true, true) : console = J$.R(3945281, 'console', console, true, true)), 'log', false)(J$.B(518794, '+', J$.T(3945289, 'BODY: ', 21, false), J$.R(3945297, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3948105, J$e);
                                                            } finally {
                                                                if (J$.Fr(3948113))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3948121, J$e);
                                            } finally {
                                                if (J$.Fr(3948129))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3945489, J$.R(3945401, 'req', req, false, false), 'on', false)(J$.T(3945409, 'error', 21, false), J$.T(3945481, function (e) {
                                    jalangiLabel5:
                                        while (true) {
                                            try {
                                                J$.Fe(3945457, arguments.callee, this, arguments);
                                                arguments = J$.N(3945465, 'arguments', arguments, true, false, false);
                                                e = J$.N(3945473, 'e', e, true, false, false);
                                                J$.M(3945449, J$.I(typeof console === 'undefined' ? console = J$.R(3945417, 'console', undefined, true, true) : console = J$.R(3945417, 'console', console, true, true)), 'log', false)(J$.B(518802, '+', J$.T(3945425, 'problem with request: ', 21, false), J$.G(3945441, J$.R(3945433, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3948137, J$e);
                                            } finally {
                                                if (J$.Fr(3948145))
                                                    continue jalangiLabel5;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3945505, J$.R(3945497, 'req', req, false, false), 'end', false)();
                            }
                        } catch (J$e) {
                            J$.Ex(3948153, J$e);
                        } finally {
                            if (J$.Fr(3948161))
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
                            J$.Fe(3945825, arguments.callee, this, arguments);
                            arguments = J$.N(3945833, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3945841, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3945849, 'param', param, true, false, false);
                            if (J$.C(217728, J$.B(518810, '==', J$.G(3945625, J$.G(3945609, J$.I(typeof process === 'undefined' ? process = J$.R(3945601, 'process', undefined, true, true) : process = J$.R(3945601, 'process', process, true, true)), 'argv'), J$.T(3945617, 2, 22, false)), J$.T(3945633, 'analysis', 21, false))))
                                J$.F(3945665, J$.R(3945641, 'loopProperty', loopProperty, false, true), false)(J$.R(3945649, 'testFunc', testFunc, false, false), J$.R(3945657, 'param', param, false, false));
                            else if (J$.C(217720, J$.B(518818, '==', J$.G(3945697, J$.G(3945681, J$.I(typeof process === 'undefined' ? process = J$.R(3945673, 'process', undefined, true, true) : process = J$.R(3945673, 'process', process, true, true)), 'argv'), J$.T(3945689, 2, 22, false)), J$.T(3945705, 'verify', 21, false))))
                                J$.F(3945745, J$.R(3945713, 'verifyHipar', verifyHipar, false, true), false)(J$.R(3945721, 'testFunc', testFunc, false, false), J$.R(3945729, 'param', param, false, false), J$.I(typeof ProjectDir === 'undefined' ? ProjectDir = J$.R(3945737, 'ProjectDir', undefined, true, true) : ProjectDir = J$.R(3945737, 'ProjectDir', ProjectDir, true, true)));
                            else {
                                J$.M(3945785, J$.I(typeof console === 'undefined' ? console = J$.R(3945753, 'console', undefined, true, true) : console = J$.R(3945753, 'console', console, true, true)), 'log', false)(J$.M(3945777, J$.R(3945761, 'tynt', tynt, false, true), 'Red', false)(J$.T(3945769, 'Incorrect Prompt argumnet, we do analysis by default', 21, false)));
                                J$.F(3945817, J$.R(3945793, 'loopProperty', loopProperty, false, true), false)(J$.R(3945801, 'testFunc', testFunc, false, false), J$.R(3945809, 'param', param, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(3948169, J$e);
                        } finally {
                            if (J$.Fr(3948177))
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
                            J$.Fe(3946297, arguments.callee, this, arguments);
                            arguments = J$.N(3946305, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3946313, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3946321, 'param', param, true, false, false);
                            J$.N(3946329, 'properties', properties, false, false, false);
                            J$.N(3946337, 'property', property, false, false, false);
                            J$.N(3946345, 'tmp', tmp, false, false, false);
                            var properties = J$.W(3945881, 'properties', J$.M(3945873, J$.I(typeof Object === 'undefined' ? Object = J$.R(3945857, 'Object', undefined, true, true) : Object = J$.R(3945857, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.R(3945865, 'param', param, false, false)), properties, false, false);
                            J$.M(3945921, J$.I(typeof console === 'undefined' ? console = J$.R(3945889, 'console', undefined, true, true) : console = J$.R(3945889, 'console', console, true, true)), 'log', false)(J$.M(3945913, J$.R(3945897, 'tynt', tynt, false, true), 'Green', false)(J$.T(3945905, '[-]Running test with purely untainted param', 21, false)));
                            J$.F(3945945, J$.R(3945929, 'testFunc', testFunc, false, false), false)(J$.R(3945937, 'param', param, false, false));
                            if (J$.C(217736, J$.B(518834, '==', J$.U(518826, 'typeof', J$.R(3945953, 'param', param, false, false)), J$.T(3945961, 'string', 21, false))))
                                return J$.Rt(3945969, undefined);
                            J$.M(3946001, J$.I(typeof console === 'undefined' ? console = J$.R(3945977, 'console', undefined, true, true) : console = J$.R(3945977, 'console', console, true, true)), 'log', false)(J$.T(3945985, 'properties: ', 21, false), J$.R(3945993, 'properties', properties, false, false));
                            for (var property of J$.R(3946009, 'properties', properties, false, false)) {
                                J$.M(3946057, J$.I(typeof console === 'undefined' ? console = J$.R(3946017, 'console', undefined, true, true) : console = J$.R(3946017, 'console', console, true, true)), 'log', false)(J$.M(3946049, J$.R(3946025, 'tynt', tynt, false, true), 'Green', false)(J$.B(518842, '+', J$.T(3946033, '[-]Running test with tainted property: ', 21, false), J$.R(3946041, 'property', property, false, false))));
                                var tmp = J$.W(3946089, 'tmp', J$.F(3946081, J$.R(3946065, 'clone', clone, false, true), false)(J$.R(3946073, 'param', param, false, false)), tmp, false, false);
                                J$.P(3946161, J$.R(3946097, 'tmp', tmp, false, false), J$.R(3946105, 'property', property, false, false), J$.F(3946153, J$.R(3946113, 'source', source, false, true), false)(J$.G(3946137, J$.R(3946121, 'tmp', tmp, false, false), J$.R(3946129, 'property', property, false, false)), J$.R(3946145, 'property', property, false, false)));
                                J$.F(3946185, J$.R(3946169, 'testFunc', testFunc, false, false), false)(J$.R(3946177, 'tmp', tmp, false, false));
                            }
                            param = J$.W(3946225, 'param', J$.F(3946217, J$.R(3946193, 'source', source, false, true), false)(J$.R(3946201, 'param', param, false, false), J$.R(3946209, 'rootMagicName', rootMagicName, false, true)), param, false, false);
                            J$.M(3946265, J$.I(typeof console === 'undefined' ? console = J$.R(3946233, 'console', undefined, true, true) : console = J$.R(3946233, 'console', console, true, true)), 'log', false)(J$.M(3946257, J$.R(3946241, 'tynt', tynt, false, true), 'Green', false)(J$.T(3946249, '[-]Running test with param tainted in root', 21, false)));
                            J$.F(3946289, J$.R(3946273, 'testFunc', testFunc, false, false), false)(J$.R(3946281, 'param', param, false, false));
                        } catch (J$e) {
                            J$.Ex(3948185, J$e);
                        } finally {
                            if (J$.Fr(3948193))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function verifyHipar(testFunc, param) {
                jalangiLabel9:
                    while (true) {
                        try {
                            J$.Fe(3947049, arguments.callee, this, arguments);
                            arguments = J$.N(3947057, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3947065, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3947073, 'param', param, true, false, false);
                            J$.N(3947081, 'verifyPath', verifyPath, false, false, false);
                            J$.N(3947089, 'result', result, false, false, false);
                            J$.N(3947097, 'property', property, false, false, false);
                            J$.N(3947105, 'hipar_name', hipar_name, false, false, false);
                            J$.N(3947113, 'hipar_content', hipar_content, false, false, false);
                            J$.N(3947121, 'tmp', tmp, false, false, false);
                            testFileName = J$.W(3946409, 'testFileName', J$.M(3946401, J$.M(3946393, J$.G(3946377, J$.G(3946361, J$.I(typeof process === 'undefined' ? process = J$.R(3946353, 'process', undefined, true, true) : process = J$.R(3946353, 'process', process, true, true)), 'argv'), J$.T(3946369, 1, 22, false)), 'split', false)(J$.T(3946385, '/', 21, false)), 'pop', false)(), J$.I(typeof testFileName === 'undefined' ? undefined : testFileName), true, true);
                            var verifyPath = J$.W(3946465, 'verifyPath', J$.M(3946457, J$.R(3946417, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3946425, '__dirname', undefined, true, true) : __dirname = J$.R(3946425, '__dirname', __dirname, true, true)), J$.B(518858, '+', J$.B(518850, '+', J$.T(3946433, '../../outputs/hidden_attr/', 21, false), J$.I(typeof testFileName === 'undefined' ? testFileName = J$.R(3946441, 'testFileName', undefined, true, true) : testFileName = J$.R(3946441, 'testFileName', testFileName, true, true))), J$.T(3946449, 'on', 21, false))), verifyPath, false, false);
                            J$.M(3946489, J$.I(typeof console === 'undefined' ? console = J$.R(3946473, 'console', undefined, true, true) : console = J$.R(3946473, 'console', console, true, true)), 'log', false)(J$.R(3946481, 'verifyPath', verifyPath, false, false));
                            if (J$.C(217752, J$.M(3946513, J$.R(3946497, 'fs', fs, false, true), 'existsSync', false)(J$.R(3946505, 'verifyPath', verifyPath, false, false)))) {
                                J$.M(3946553, J$.I(typeof console === 'undefined' ? console = J$.R(3946521, 'console', undefined, true, true) : console = J$.R(3946521, 'console', console, true, true)), 'log', false)(J$.M(3946545, J$.R(3946529, 'tynt', tynt, false, true), 'Green', false)(J$.T(3946537, '[-]Verifying hidden Parameter', 21, false)));
                                var result = J$.W(3946601, 'result', J$.M(3946593, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3946561, 'JSON', undefined, true, true) : JSON = J$.R(3946561, 'JSON', JSON, true, true)), 'parse', false)(J$.M(3946585, J$.R(3946569, 'fs', fs, false, true), 'readFileSync', false)(J$.R(3946577, 'verifyPath', verifyPath, false, false))), result, false, false);
                                for (var property in J$.H(3947033, J$.R(3946609, 'result', result, false, false))) {
                                    J$.N(3947041, 'property', property, false, true, false);
                                    {
                                        {
                                            for (var hipar_name in J$.H(3947017, J$.G(3946633, J$.R(3946617, 'result', result, false, false), J$.R(3946625, 'property', property, false, false)))) {
                                                J$.N(3947025, 'hipar_name', hipar_name, false, true, false);
                                                {
                                                    {
                                                        var hipar_content = J$.W(3946681, 'hipar_content', J$.G(3946673, J$.G(3946657, J$.R(3946641, 'result', result, false, false), J$.R(3946649, 'property', property, false, false)), J$.R(3946665, 'hipar_name', hipar_name, false, false)), hipar_content, false, false);
                                                        var tmp = J$.W(3946713, 'tmp', J$.F(3946705, J$.R(3946689, 'clone', clone, false, true), false)(J$.R(3946697, 'param', param, false, false)), tmp, false, false);
                                                        if (J$.C(217744, J$.B(518866, '==', J$.R(3946721, 'property', property, false, false), J$.R(3946729, 'rootMagicName', rootMagicName, false, true))))
                                                            J$.P(3946761, J$.R(3946737, 'tmp', tmp, false, false), J$.R(3946745, 'hipar_name', hipar_name, false, false), J$.T(3946753, 'H1P4r', 21, false));
                                                        else
                                                            J$.P(3946809, J$.G(3946785, J$.R(3946769, 'tmp', tmp, false, false), J$.R(3946777, 'property', property, false, false)), J$.R(3946793, 'hipar_name', hipar_name, false, false), J$.T(3946801, 'H1P4r', 21, false));
                                                        J$.F(3946865, J$.R(3946817, 'verify_hipar', verify_hipar, false, true), false)(J$.G(3946833, J$.R(3946825, 'hipar_content', hipar_content, false, false), 'file'), J$.R(3946841, 'hipar_name', hipar_name, false, false), J$.G(3946857, J$.R(3946849, 'hipar_content', hipar_content, false, false), 'base'));
                                                        J$.M(3946889, J$.I(typeof console === 'undefined' ? console = J$.R(3946873, 'console', undefined, true, true) : console = J$.R(3946873, 'console', console, true, true)), 'log', false)(J$.R(3946881, 'tmp', tmp, false, false));
                                                        try {
                                                            J$.F(3946913, J$.R(3946897, 'testFunc', testFunc, false, false), false)(J$.R(3946905, 'tmp', tmp, false, false));
                                                        } catch (e) {
                                                            J$.N(3947009, 'e', e, false, false, true);
                                                            J$.M(3946961, J$.G(3946929, J$.I(typeof process === 'undefined' ? process = J$.R(3946921, 'process', undefined, true, true) : process = J$.R(3946921, 'process', process, true, true)), 'stdout'), 'write', false)(J$.M(3946953, J$.R(3946937, 'tynt', tynt, false, true), 'Red', false)(J$.T(3946945, '[Verify Error]:', 21, false)));
                                                            J$.M(3947001, J$.I(typeof console === 'undefined' ? console = J$.R(3946969, 'console', undefined, true, true) : console = J$.R(3946969, 'console', console, true, true)), 'log', false)(J$.M(3946993, J$.R(3946977, 'tynt', tynt, false, true), 'Red', false)(J$.R(3946985, 'e', e, false, false)));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(3948201, J$e);
                        } finally {
                            if (J$.Fr(3948209))
                                continue jalangiLabel9;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function source(source_var, var_name) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(3947145, arguments.callee, this, arguments);
                            arguments = J$.N(3947153, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3947161, 'source_var', source_var, true, false, false);
                            var_name = J$.N(3947169, 'var_name', var_name, true, false, false);
                            return J$.Rt(3947137, J$.R(3947129, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3948217, J$e);
                        } finally {
                            if (J$.Fr(3948225))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function verify_hipar(source_var) {
                jalangiLabel11:
                    while (true) {
                        try {
                            J$.Fe(3947193, arguments.callee, this, arguments);
                            arguments = J$.N(3947201, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3947209, 'source_var', source_var, true, false, false);
                            return J$.Rt(3947185, J$.R(3947177, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3948233, J$e);
                        } finally {
                            if (J$.Fr(3948241))
                                continue jalangiLabel11;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function clone(obj) {
                jalangiLabel12:
                    while (true) {
                        try {
                            J$.Fe(3947721, arguments.callee, this, arguments);
                            arguments = J$.N(3947729, 'arguments', arguments, true, false, false);
                            obj = J$.N(3947737, 'obj', obj, true, false, false);
                            J$.N(3947745, 'copy', copy, false, false, false);
                            J$.N(3947753, 'i', i, false, false, false);
                            J$.N(3947761, 'len', len, false, false, false);
                            J$.N(3947769, 'attr', attr, false, false, false);
                            if (J$.C(217768, J$.C(217760, J$.B(518874, '==', J$.T(3947217, null, 25, false), J$.R(3947225, 'obj', obj, false, false))) ? J$._() : J$.B(518890, '!=', J$.T(3947233, 'object', 21, false), J$.U(518882, 'typeof', J$.R(3947241, 'obj', obj, false, false)))))
                                return J$.Rt(3947257, J$.R(3947249, 'obj', obj, false, false));
                            if (J$.C(217776, J$.B(518898, 'instanceof', J$.R(3947265, 'obj', obj, false, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(3947273, 'Date', undefined, true, true) : Date = J$.R(3947273, 'Date', Date, true, true))))) {
                                var copy = J$.W(3947297, 'copy', J$.F(3947289, J$.I(typeof Date === 'undefined' ? Date = J$.R(3947281, 'Date', undefined, true, true) : Date = J$.R(3947281, 'Date', Date, true, true)), true)(), copy, false, false);
                                J$.M(3947329, J$.R(3947305, 'copy', copy, false, false), 'setTime', false)(J$.M(3947321, J$.R(3947313, 'obj', obj, false, false), 'getTime', false)());
                                return J$.Rt(3947345, J$.R(3947337, 'copy', copy, false, false));
                            }
                            if (J$.C(217792, J$.B(518906, 'instanceof', J$.R(3947353, 'obj', obj, false, false), J$.I(typeof Array === 'undefined' ? Array = J$.R(3947361, 'Array', undefined, true, true) : Array = J$.R(3947361, 'Array', Array, true, true))))) {
                                var copy = J$.W(3947377, 'copy', J$.T(3947369, [], 10, false), copy, false, false);
                                for (var i = J$.W(3947409, 'i', J$.T(3947385, 0, 22, false), i, false, false), len = J$.W(3947417, 'len', J$.G(3947401, J$.R(3947393, 'obj', obj, false, false), 'length'), len, false, false); J$.C(217784, J$.B(518914, '<', J$.R(3947425, 'i', i, false, false), J$.R(3947433, 'len', len, false, false))); i = J$.W(3947449, 'i', J$.B(518930, '+', J$.U(518922, '+', J$.R(3947441, 'i', i, false, false)), 1), i, false, false)) {
                                    J$.P(3947513, J$.R(3947457, 'copy', copy, false, false), J$.R(3947465, 'i', i, false, false), J$.F(3947505, J$.R(3947473, 'clone', clone, false, true), false)(J$.G(3947497, J$.R(3947481, 'obj', obj, false, false), J$.R(3947489, 'i', i, false, false))));
                                }
                                return J$.Rt(3947529, J$.R(3947521, 'copy', copy, false, false));
                            }
                            if (J$.C(217808, J$.B(518938, 'instanceof', J$.R(3947537, 'obj', obj, false, false), J$.I(typeof Object === 'undefined' ? Object = J$.R(3947545, 'Object', undefined, true, true) : Object = J$.R(3947545, 'Object', Object, true, true))))) {
                                var copy = J$.W(3947561, 'copy', J$.T(3947553, {}, 11, false), copy, false, false);
                                for (var attr in J$.H(3947665, J$.R(3947569, 'obj', obj, false, false))) {
                                    J$.N(3947673, 'attr', attr, false, true, false);
                                    {
                                        {
                                            if (J$.C(217800, J$.M(3947593, J$.R(3947577, 'obj', obj, false, false), 'hasOwnProperty', false)(J$.R(3947585, 'attr', attr, false, false))))
                                                J$.P(3947657, J$.R(3947601, 'copy', copy, false, false), J$.R(3947609, 'attr', attr, false, false), J$.F(3947649, J$.R(3947617, 'clone', clone, false, true), false)(J$.G(3947641, J$.R(3947625, 'obj', obj, false, false), J$.R(3947633, 'attr', attr, false, false))));
                                        }
                                    }
                                }
                                return J$.Rt(3947689, J$.R(3947681, 'copy', copy, false, false));
                            }
                            throw J$.F(3947713, J$.I(typeof Error === 'undefined' ? Error = J$.R(3947697, 'Error', undefined, true, true) : Error = J$.R(3947697, 'Error', Error, true, true)), true)(J$.T(3947705, 'Unable to copy obj! Its type isn\'t supported.', 21, false));
                        } catch (J$e) {
                            J$.Ex(3948249, J$e);
                        } finally {
                            if (J$.Fr(3948257))
                                continue jalangiLabel12;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3947905, 'path', path, false, false, false);
            J$.N(3947913, 'tynt', tynt, false, false, false);
            J$.N(3947921, 'fs', fs, false, false, false);
            J$.N(3947929, 'rootMagicName', rootMagicName, false, false, false);
            J$.N(3947937, 'http', http, false, false, false);
            sendViaWebRequest = J$.N(3947953, 'sendViaWebRequest', J$.T(3947945, sendViaWebRequest, 12, false), true, false, false);
            entry = J$.N(3947969, 'entry', J$.T(3947961, entry, 12, false), true, false, false);
            loopProperty = J$.N(3947985, 'loopProperty', J$.T(3947977, loopProperty, 12, false), true, false, false);
            verifyHipar = J$.N(3948001, 'verifyHipar', J$.T(3947993, verifyHipar, 12, false), true, false, false);
            source = J$.N(3948017, 'source', J$.T(3948009, source, 12, false), true, false, false);
            verify_hipar = J$.N(3948033, 'verify_hipar', J$.T(3948025, verify_hipar, 12, false), true, false, false);
            clone = J$.N(3948049, 'clone', J$.T(3948041, clone, 12, false), true, false, false);
            var path = J$.W(3944385, 'path', J$.F(3944377, J$.I(typeof require === 'undefined' ? require = J$.R(3944361, 'require', undefined, true, true) : require = J$.R(3944361, 'require', require, true, true)), false)(J$.T(3944369, 'path', 21, false)), path, false, true);
            var tynt = J$.W(3944417, 'tynt', J$.F(3944409, J$.I(typeof require === 'undefined' ? require = J$.R(3944393, 'require', undefined, true, true) : require = J$.R(3944393, 'require', require, true, true)), false)(J$.T(3944401, 'tynt', 21, false)), tynt, false, true);
            var fs = J$.W(3944449, 'fs', J$.F(3944441, J$.I(typeof require === 'undefined' ? require = J$.R(3944425, 'require', undefined, true, true) : require = J$.R(3944425, 'require', require, true, true)), false)(J$.T(3944433, 'fs', 21, false)), fs, false, true);
            var rootMagicName = J$.W(3944465, 'rootMagicName', J$.T(3944457, 'R0ot', 21, false), rootMagicName, false, true);
            var http = J$.W(3944497, 'http', J$.F(3944489, J$.I(typeof require === 'undefined' ? require = J$.R(3944473, 'require', undefined, true, true) : require = J$.R(3944473, 'require', require, true, true)), false)(J$.T(3944481, 'http', 21, false)), http, false, true);
            J$.P(3947793, J$.I(typeof exports === 'undefined' ? exports = J$.R(3947777, 'exports', undefined, true, true) : exports = J$.R(3947777, 'exports', exports, true, true)), 'clone', J$.R(3947785, 'clone', clone, false, true));
            J$.P(3947817, J$.I(typeof exports === 'undefined' ? exports = J$.R(3947801, 'exports', undefined, true, true) : exports = J$.R(3947801, 'exports', exports, true, true)), 'loopProperty', J$.R(3947809, 'loopProperty', loopProperty, false, true));
            J$.P(3947841, J$.I(typeof exports === 'undefined' ? exports = J$.R(3947825, 'exports', undefined, true, true) : exports = J$.R(3947825, 'exports', exports, true, true)), 'verifyHipar', J$.R(3947833, 'verifyHipar', verifyHipar, false, true));
            J$.P(3947865, J$.I(typeof exports === 'undefined' ? exports = J$.R(3947849, 'exports', undefined, true, true) : exports = J$.R(3947849, 'exports', exports, true, true)), 'entry', J$.R(3947857, 'entry', entry, false, true));
            J$.P(3947889, J$.I(typeof exports === 'undefined' ? exports = J$.R(3947873, 'exports', undefined, true, true) : exports = J$.R(3947873, 'exports', exports, true, true)), 'sendViaWebRequest', J$.R(3947881, 'sendViaWebRequest', sendViaWebRequest, false, true));
        } catch (J$e) {
            J$.Ex(3948265, J$e);
        } finally {
            if (J$.Sr(3948273))
                continue jalangiLabel13;
            else
                break jalangiLabel13;
        }
    }
// JALANGI DO NOT INSTRUMENT

