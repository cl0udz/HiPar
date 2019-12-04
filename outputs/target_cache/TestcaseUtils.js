J$.noInstrEval = false;
jalangiLabel13:
    while (true) {
        try {
            J$.Se(6043489, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestcaseUtils.js');
            function sendViaWebRequest(method, data, location, port, hostname) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(6041105, arguments.callee, this, arguments);
                            arguments = J$.N(6041113, 'arguments', arguments, true, false, false);
                            method = J$.N(6041121, 'method', method, true, false, false);
                            data = J$.N(6041129, 'data', data, true, false, false);
                            location = J$.N(6041137, 'location', location, true, false, false);
                            port = J$.N(6041145, 'port', port, true, false, false);
                            hostname = J$.N(6041153, 'hostname', hostname, true, false, false);
                            J$.N(6041161, 'http', http, false, false, false);
                            J$.N(6041169, 'content', content, false, false, false);
                            J$.N(6041177, 'options', options, false, false, false);
                            J$.N(6041185, 'req', req, false, false, false);
                            var http = J$.W(6040121, 'http', J$.F(6040113, J$.I(typeof require === 'undefined' ? require = J$.R(6040097, 'require', undefined, true, true) : require = J$.R(6040097, 'require', require, true, true)), false)(J$.T(6040105, 'http', 21, false)), http, false, false);
                            var content = J$.W(6040137, 'content', J$.R(6040129, 'data', data, false, false), content, false, false);
                            var options = J$.W(6040201, 'options', J$.T(6040193, {
                                hostname: J$.C(312840, J$.R(6040145, 'hostname', hostname, false, false)) ? J$._() : J$.T(6040153, '127.0.0.1', 21, false),
                                port: J$.R(6040161, 'port', port, false, false),
                                path: J$.C(312848, J$.R(6040169, 'location', location, false, false)) ? J$._() : J$.T(6040177, '/', 21, false),
                                method: J$.T(6040185, 'GET', 21, false)
                            }, 11, false), options, false, false);
                            if (J$.C(312856, J$.B(706490, '==', J$.R(6040209, 'method', method, false, false), J$.T(6040217, 'post', 21, false)))) {
                                J$.P(6040241, J$.R(6040225, 'options', options, false, false), 'method', J$.T(6040233, 'POST', 21, false));
                                J$.P(6040273, J$.R(6040249, 'options', options, false, false), 'headers', J$.T(6040265, { 'Content-Type': J$.T(6040257, 'application/json', 21, false) }, 11, false));
                                var req = J$.W(6040545, 'req', J$.M(6040537, J$.R(6040281, 'http', http, false, false), 'request', false)(J$.R(6040289, 'options', options, false, false), J$.T(6040529, function (res) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(6040505, arguments.callee, this, arguments);
                                                arguments = J$.N(6040513, 'arguments', arguments, true, false, false);
                                                res = J$.N(6040521, 'res', res, true, false, false);
                                                J$.M(6040329, J$.I(typeof console === 'undefined' ? console = J$.R(6040297, 'console', undefined, true, true) : console = J$.R(6040297, 'console', console, true, true)), 'log', false)(J$.B(706498, '+', J$.T(6040305, 'STATUS: ', 21, false), J$.G(6040321, J$.R(6040313, 'res', res, false, false), 'statusCode')));
                                                J$.M(6040385, J$.I(typeof console === 'undefined' ? console = J$.R(6040337, 'console', undefined, true, true) : console = J$.R(6040337, 'console', console, true, true)), 'log', false)(J$.B(706506, '+', J$.T(6040345, 'HEADERS: ', 21, false), J$.M(6040377, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(6040353, 'JSON', undefined, true, true) : JSON = J$.R(6040353, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(6040369, J$.R(6040361, 'res', res, false, false), 'headers'))));
                                                J$.M(6040409, J$.R(6040393, 'res', res, false, false), 'setEncoding', false)(J$.T(6040401, 'utf8', 21, false));
                                                J$.M(6040497, J$.R(6040417, 'res', res, false, false), 'on', false)(J$.T(6040425, 'data', 21, false), J$.T(6040489, function (chunk) {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(6040465, arguments.callee, this, arguments);
                                                                arguments = J$.N(6040473, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(6040481, 'chunk', chunk, true, false, false);
                                                                J$.M(6040457, J$.I(typeof console === 'undefined' ? console = J$.R(6040433, 'console', undefined, true, true) : console = J$.R(6040433, 'console', console, true, true)), 'log', false)(J$.B(706514, '+', J$.T(6040441, 'BODY: ', 21, false), J$.R(6040449, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(6043649, J$e);
                                                            } finally {
                                                                if (J$.Fr(6043657))
                                                                    continue jalangiLabel0;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(6043665, J$e);
                                            } finally {
                                                if (J$.Fr(6043673))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(6040641, J$.R(6040553, 'req', req, false, false), 'on', false)(J$.T(6040561, 'error', 21, false), J$.T(6040633, function (e) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(6040609, arguments.callee, this, arguments);
                                                arguments = J$.N(6040617, 'arguments', arguments, true, false, false);
                                                e = J$.N(6040625, 'e', e, true, false, false);
                                                J$.M(6040601, J$.I(typeof console === 'undefined' ? console = J$.R(6040569, 'console', undefined, true, true) : console = J$.R(6040569, 'console', console, true, true)), 'log', false)(J$.B(706522, '+', J$.T(6040577, 'problem with request: ', 21, false), J$.G(6040593, J$.R(6040585, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(6043681, J$e);
                                            } finally {
                                                if (J$.Fr(6043689))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(6040665, J$.R(6040649, 'req', req, false, false), 'write', false)(J$.R(6040657, 'content', content, false, false));
                                J$.M(6040681, J$.R(6040673, 'req', req, false, false), 'end', false)();
                            } else {
                                J$.A(6040713, J$.R(6040689, 'options', options, false, false), 'location', '+')(J$.B(706530, '+', J$.T(6040697, '?', 21, false), J$.R(6040705, 'content', content, false, false)));
                                var req = J$.W(6040985, 'req', J$.M(6040977, J$.R(6040721, 'http', http, false, false), 'request', false)(J$.R(6040729, 'options', options, false, false), J$.T(6040969, function (res) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(6040945, arguments.callee, this, arguments);
                                                arguments = J$.N(6040953, 'arguments', arguments, true, false, false);
                                                res = J$.N(6040961, 'res', res, true, false, false);
                                                J$.M(6040769, J$.I(typeof console === 'undefined' ? console = J$.R(6040737, 'console', undefined, true, true) : console = J$.R(6040737, 'console', console, true, true)), 'log', false)(J$.B(706538, '+', J$.T(6040745, 'STATUS: ', 21, false), J$.G(6040761, J$.R(6040753, 'res', res, false, false), 'statusCode')));
                                                J$.M(6040825, J$.I(typeof console === 'undefined' ? console = J$.R(6040777, 'console', undefined, true, true) : console = J$.R(6040777, 'console', console, true, true)), 'log', false)(J$.B(706546, '+', J$.T(6040785, 'HEADERS: ', 21, false), J$.M(6040817, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(6040793, 'JSON', undefined, true, true) : JSON = J$.R(6040793, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(6040809, J$.R(6040801, 'res', res, false, false), 'headers'))));
                                                J$.M(6040849, J$.R(6040833, 'res', res, false, false), 'setEncoding', false)(J$.T(6040841, 'utf8', 21, false));
                                                J$.M(6040937, J$.R(6040857, 'res', res, false, false), 'on', false)(J$.T(6040865, 'data', 21, false), J$.T(6040929, function (chunk) {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(6040905, arguments.callee, this, arguments);
                                                                arguments = J$.N(6040913, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(6040921, 'chunk', chunk, true, false, false);
                                                                J$.M(6040897, J$.I(typeof console === 'undefined' ? console = J$.R(6040873, 'console', undefined, true, true) : console = J$.R(6040873, 'console', console, true, true)), 'log', false)(J$.B(706554, '+', J$.T(6040881, 'BODY: ', 21, false), J$.R(6040889, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(6043697, J$e);
                                                            } finally {
                                                                if (J$.Fr(6043705))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(6043713, J$e);
                                            } finally {
                                                if (J$.Fr(6043721))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(6041081, J$.R(6040993, 'req', req, false, false), 'on', false)(J$.T(6041001, 'error', 21, false), J$.T(6041073, function (e) {
                                    jalangiLabel5:
                                        while (true) {
                                            try {
                                                J$.Fe(6041049, arguments.callee, this, arguments);
                                                arguments = J$.N(6041057, 'arguments', arguments, true, false, false);
                                                e = J$.N(6041065, 'e', e, true, false, false);
                                                J$.M(6041041, J$.I(typeof console === 'undefined' ? console = J$.R(6041009, 'console', undefined, true, true) : console = J$.R(6041009, 'console', console, true, true)), 'log', false)(J$.B(706562, '+', J$.T(6041017, 'problem with request: ', 21, false), J$.G(6041033, J$.R(6041025, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(6043729, J$e);
                                            } finally {
                                                if (J$.Fr(6043737))
                                                    continue jalangiLabel5;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(6041097, J$.R(6041089, 'req', req, false, false), 'end', false)();
                            }
                        } catch (J$e) {
                            J$.Ex(6043745, J$e);
                        } finally {
                            if (J$.Fr(6043753))
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
                            J$.Fe(6041417, arguments.callee, this, arguments);
                            arguments = J$.N(6041425, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(6041433, 'testFunc', testFunc, true, false, false);
                            param = J$.N(6041441, 'param', param, true, false, false);
                            if (J$.C(312872, J$.B(706570, '==', J$.G(6041217, J$.G(6041201, J$.I(typeof process === 'undefined' ? process = J$.R(6041193, 'process', undefined, true, true) : process = J$.R(6041193, 'process', process, true, true)), 'argv'), J$.T(6041209, 2, 22, false)), J$.T(6041225, 'analysis', 21, false))))
                                J$.F(6041257, J$.R(6041233, 'loopProperty', loopProperty, false, true), false)(J$.R(6041241, 'testFunc', testFunc, false, false), J$.R(6041249, 'param', param, false, false));
                            else if (J$.C(312864, J$.B(706578, '==', J$.G(6041289, J$.G(6041273, J$.I(typeof process === 'undefined' ? process = J$.R(6041265, 'process', undefined, true, true) : process = J$.R(6041265, 'process', process, true, true)), 'argv'), J$.T(6041281, 2, 22, false)), J$.T(6041297, 'verify', 21, false))))
                                J$.F(6041337, J$.R(6041305, 'verifyHipar', verifyHipar, false, true), false)(J$.R(6041313, 'testFunc', testFunc, false, false), J$.R(6041321, 'param', param, false, false), J$.I(typeof ProjectDir === 'undefined' ? ProjectDir = J$.R(6041329, 'ProjectDir', undefined, true, true) : ProjectDir = J$.R(6041329, 'ProjectDir', ProjectDir, true, true)));
                            else {
                                J$.M(6041377, J$.I(typeof console === 'undefined' ? console = J$.R(6041345, 'console', undefined, true, true) : console = J$.R(6041345, 'console', console, true, true)), 'log', false)(J$.M(6041369, J$.R(6041353, 'tynt', tynt, false, true), 'Red', false)(J$.T(6041361, 'Incorrect Prompt argumnet, we do analysis by default', 21, false)));
                                J$.F(6041409, J$.R(6041385, 'loopProperty', loopProperty, false, true), false)(J$.R(6041393, 'testFunc', testFunc, false, false), J$.R(6041401, 'param', param, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(6043761, J$e);
                        } finally {
                            if (J$.Fr(6043769))
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
                            J$.Fe(6041889, arguments.callee, this, arguments);
                            arguments = J$.N(6041897, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(6041905, 'testFunc', testFunc, true, false, false);
                            param = J$.N(6041913, 'param', param, true, false, false);
                            J$.N(6041921, 'properties', properties, false, false, false);
                            J$.N(6041929, 'property', property, false, false, false);
                            J$.N(6041937, 'tmp', tmp, false, false, false);
                            var properties = J$.W(6041473, 'properties', J$.M(6041465, J$.I(typeof Object === 'undefined' ? Object = J$.R(6041449, 'Object', undefined, true, true) : Object = J$.R(6041449, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.R(6041457, 'param', param, false, false)), properties, false, false);
                            J$.M(6041513, J$.I(typeof console === 'undefined' ? console = J$.R(6041481, 'console', undefined, true, true) : console = J$.R(6041481, 'console', console, true, true)), 'log', false)(J$.M(6041505, J$.R(6041489, 'tynt', tynt, false, true), 'Green', false)(J$.T(6041497, '[-]Running test with purely untainted param', 21, false)));
                            J$.F(6041537, J$.R(6041521, 'testFunc', testFunc, false, false), false)(J$.R(6041529, 'param', param, false, false));
                            if (J$.C(312880, J$.B(706594, '==', J$.U(706586, 'typeof', J$.R(6041545, 'param', param, false, false)), J$.T(6041553, 'string', 21, false))))
                                return J$.Rt(6041561, undefined);
                            J$.M(6041593, J$.I(typeof console === 'undefined' ? console = J$.R(6041569, 'console', undefined, true, true) : console = J$.R(6041569, 'console', console, true, true)), 'log', false)(J$.T(6041577, 'properties: ', 21, false), J$.R(6041585, 'properties', properties, false, false));
                            for (var property of J$.R(6041601, 'properties', properties, false, false)) {
                                J$.M(6041649, J$.I(typeof console === 'undefined' ? console = J$.R(6041609, 'console', undefined, true, true) : console = J$.R(6041609, 'console', console, true, true)), 'log', false)(J$.M(6041641, J$.R(6041617, 'tynt', tynt, false, true), 'Green', false)(J$.B(706602, '+', J$.T(6041625, '[-]Running test with tainted property: ', 21, false), J$.R(6041633, 'property', property, false, false))));
                                var tmp = J$.W(6041681, 'tmp', J$.F(6041673, J$.R(6041657, 'clone', clone, false, true), false)(J$.R(6041665, 'param', param, false, false)), tmp, false, false);
                                J$.P(6041753, J$.R(6041689, 'tmp', tmp, false, false), J$.R(6041697, 'property', property, false, false), J$.F(6041745, J$.R(6041705, 'source', source, false, true), false)(J$.G(6041729, J$.R(6041713, 'tmp', tmp, false, false), J$.R(6041721, 'property', property, false, false)), J$.R(6041737, 'property', property, false, false)));
                                J$.F(6041777, J$.R(6041761, 'testFunc', testFunc, false, false), false)(J$.R(6041769, 'tmp', tmp, false, false));
                            }
                            param = J$.W(6041817, 'param', J$.F(6041809, J$.R(6041785, 'source', source, false, true), false)(J$.R(6041793, 'param', param, false, false), J$.R(6041801, 'rootMagicName', rootMagicName, false, true)), param, false, false);
                            J$.M(6041857, J$.I(typeof console === 'undefined' ? console = J$.R(6041825, 'console', undefined, true, true) : console = J$.R(6041825, 'console', console, true, true)), 'log', false)(J$.M(6041849, J$.R(6041833, 'tynt', tynt, false, true), 'Green', false)(J$.T(6041841, '[-]Running test with param tainted in root', 21, false)));
                            J$.F(6041881, J$.R(6041865, 'testFunc', testFunc, false, false), false)(J$.R(6041873, 'param', param, false, false));
                        } catch (J$e) {
                            J$.Ex(6043777, J$e);
                        } finally {
                            if (J$.Fr(6043785))
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
                            J$.Fe(6042641, arguments.callee, this, arguments);
                            arguments = J$.N(6042649, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(6042657, 'testFunc', testFunc, true, false, false);
                            param = J$.N(6042665, 'param', param, true, false, false);
                            J$.N(6042673, 'verifyPath', verifyPath, false, false, false);
                            J$.N(6042681, 'result', result, false, false, false);
                            J$.N(6042689, 'property', property, false, false, false);
                            J$.N(6042697, 'hipar_name', hipar_name, false, false, false);
                            J$.N(6042705, 'hipar_content', hipar_content, false, false, false);
                            J$.N(6042713, 'tmp', tmp, false, false, false);
                            testFileName = J$.W(6042001, 'testFileName', J$.M(6041993, J$.M(6041985, J$.G(6041969, J$.G(6041953, J$.I(typeof process === 'undefined' ? process = J$.R(6041945, 'process', undefined, true, true) : process = J$.R(6041945, 'process', process, true, true)), 'argv'), J$.T(6041961, 1, 22, false)), 'split', false)(J$.T(6041977, '/', 21, false)), 'pop', false)(), J$.I(typeof testFileName === 'undefined' ? undefined : testFileName), true, true);
                            var verifyPath = J$.W(6042057, 'verifyPath', J$.M(6042049, J$.R(6042009, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(6042017, '__dirname', undefined, true, true) : __dirname = J$.R(6042017, '__dirname', __dirname, true, true)), J$.B(706618, '+', J$.B(706610, '+', J$.T(6042025, '../../outputs/hidden_attr/', 21, false), J$.I(typeof testFileName === 'undefined' ? testFileName = J$.R(6042033, 'testFileName', undefined, true, true) : testFileName = J$.R(6042033, 'testFileName', testFileName, true, true))), J$.T(6042041, 'on', 21, false))), verifyPath, false, false);
                            J$.M(6042081, J$.I(typeof console === 'undefined' ? console = J$.R(6042065, 'console', undefined, true, true) : console = J$.R(6042065, 'console', console, true, true)), 'log', false)(J$.R(6042073, 'verifyPath', verifyPath, false, false));
                            if (J$.C(312896, J$.M(6042105, J$.R(6042089, 'fs', fs, false, true), 'existsSync', false)(J$.R(6042097, 'verifyPath', verifyPath, false, false)))) {
                                J$.M(6042145, J$.I(typeof console === 'undefined' ? console = J$.R(6042113, 'console', undefined, true, true) : console = J$.R(6042113, 'console', console, true, true)), 'log', false)(J$.M(6042137, J$.R(6042121, 'tynt', tynt, false, true), 'Green', false)(J$.T(6042129, '[-]Verifying hidden Parameter', 21, false)));
                                var result = J$.W(6042193, 'result', J$.M(6042185, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(6042153, 'JSON', undefined, true, true) : JSON = J$.R(6042153, 'JSON', JSON, true, true)), 'parse', false)(J$.M(6042177, J$.R(6042161, 'fs', fs, false, true), 'readFileSync', false)(J$.R(6042169, 'verifyPath', verifyPath, false, false))), result, false, false);
                                for (var property in J$.H(6042625, J$.R(6042201, 'result', result, false, false))) {
                                    J$.N(6042633, 'property', property, false, true, false);
                                    {
                                        {
                                            for (var hipar_name in J$.H(6042609, J$.G(6042225, J$.R(6042209, 'result', result, false, false), J$.R(6042217, 'property', property, false, false)))) {
                                                J$.N(6042617, 'hipar_name', hipar_name, false, true, false);
                                                {
                                                    {
                                                        var hipar_content = J$.W(6042273, 'hipar_content', J$.G(6042265, J$.G(6042249, J$.R(6042233, 'result', result, false, false), J$.R(6042241, 'property', property, false, false)), J$.R(6042257, 'hipar_name', hipar_name, false, false)), hipar_content, false, false);
                                                        var tmp = J$.W(6042305, 'tmp', J$.F(6042297, J$.R(6042281, 'clone', clone, false, true), false)(J$.R(6042289, 'param', param, false, false)), tmp, false, false);
                                                        if (J$.C(312888, J$.B(706626, '==', J$.R(6042313, 'property', property, false, false), J$.R(6042321, 'rootMagicName', rootMagicName, false, true))))
                                                            J$.P(6042353, J$.R(6042329, 'tmp', tmp, false, false), J$.R(6042337, 'hipar_name', hipar_name, false, false), J$.T(6042345, 'H1P4r', 21, false));
                                                        else
                                                            J$.P(6042401, J$.G(6042377, J$.R(6042361, 'tmp', tmp, false, false), J$.R(6042369, 'property', property, false, false)), J$.R(6042385, 'hipar_name', hipar_name, false, false), J$.T(6042393, 'H1P4r', 21, false));
                                                        J$.F(6042457, J$.R(6042409, 'verify_hipar', verify_hipar, false, true), false)(J$.G(6042425, J$.R(6042417, 'hipar_content', hipar_content, false, false), 'file'), J$.R(6042433, 'hipar_name', hipar_name, false, false), J$.G(6042449, J$.R(6042441, 'hipar_content', hipar_content, false, false), 'base'));
                                                        J$.M(6042481, J$.I(typeof console === 'undefined' ? console = J$.R(6042465, 'console', undefined, true, true) : console = J$.R(6042465, 'console', console, true, true)), 'log', false)(J$.R(6042473, 'tmp', tmp, false, false));
                                                        try {
                                                            J$.F(6042505, J$.R(6042489, 'testFunc', testFunc, false, false), false)(J$.R(6042497, 'tmp', tmp, false, false));
                                                        } catch (e) {
                                                            J$.N(6042601, 'e', e, false, false, true);
                                                            J$.M(6042553, J$.G(6042521, J$.I(typeof process === 'undefined' ? process = J$.R(6042513, 'process', undefined, true, true) : process = J$.R(6042513, 'process', process, true, true)), 'stdout'), 'write', false)(J$.M(6042545, J$.R(6042529, 'tynt', tynt, false, true), 'Red', false)(J$.T(6042537, '[Verify Error]:', 21, false)));
                                                            J$.M(6042593, J$.I(typeof console === 'undefined' ? console = J$.R(6042561, 'console', undefined, true, true) : console = J$.R(6042561, 'console', console, true, true)), 'log', false)(J$.M(6042585, J$.R(6042569, 'tynt', tynt, false, true), 'Red', false)(J$.R(6042577, 'e', e, false, false)));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(6043793, J$e);
                        } finally {
                            if (J$.Fr(6043801))
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
                            J$.Fe(6042737, arguments.callee, this, arguments);
                            arguments = J$.N(6042745, 'arguments', arguments, true, false, false);
                            source_var = J$.N(6042753, 'source_var', source_var, true, false, false);
                            var_name = J$.N(6042761, 'var_name', var_name, true, false, false);
                            return J$.Rt(6042729, J$.R(6042721, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(6043809, J$e);
                        } finally {
                            if (J$.Fr(6043817))
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
                            J$.Fe(6042785, arguments.callee, this, arguments);
                            arguments = J$.N(6042793, 'arguments', arguments, true, false, false);
                            source_var = J$.N(6042801, 'source_var', source_var, true, false, false);
                            return J$.Rt(6042777, J$.R(6042769, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(6043825, J$e);
                        } finally {
                            if (J$.Fr(6043833))
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
                            J$.Fe(6043313, arguments.callee, this, arguments);
                            arguments = J$.N(6043321, 'arguments', arguments, true, false, false);
                            obj = J$.N(6043329, 'obj', obj, true, false, false);
                            J$.N(6043337, 'copy', copy, false, false, false);
                            J$.N(6043345, 'i', i, false, false, false);
                            J$.N(6043353, 'len', len, false, false, false);
                            J$.N(6043361, 'attr', attr, false, false, false);
                            if (J$.C(312912, J$.C(312904, J$.B(706634, '==', J$.T(6042809, null, 25, false), J$.R(6042817, 'obj', obj, false, false))) ? J$._() : J$.B(706650, '!=', J$.T(6042825, 'object', 21, false), J$.U(706642, 'typeof', J$.R(6042833, 'obj', obj, false, false)))))
                                return J$.Rt(6042849, J$.R(6042841, 'obj', obj, false, false));
                            if (J$.C(312920, J$.B(706658, 'instanceof', J$.R(6042857, 'obj', obj, false, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(6042865, 'Date', undefined, true, true) : Date = J$.R(6042865, 'Date', Date, true, true))))) {
                                var copy = J$.W(6042889, 'copy', J$.F(6042881, J$.I(typeof Date === 'undefined' ? Date = J$.R(6042873, 'Date', undefined, true, true) : Date = J$.R(6042873, 'Date', Date, true, true)), true)(), copy, false, false);
                                J$.M(6042921, J$.R(6042897, 'copy', copy, false, false), 'setTime', false)(J$.M(6042913, J$.R(6042905, 'obj', obj, false, false), 'getTime', false)());
                                return J$.Rt(6042937, J$.R(6042929, 'copy', copy, false, false));
                            }
                            if (J$.C(312936, J$.B(706666, 'instanceof', J$.R(6042945, 'obj', obj, false, false), J$.I(typeof Array === 'undefined' ? Array = J$.R(6042953, 'Array', undefined, true, true) : Array = J$.R(6042953, 'Array', Array, true, true))))) {
                                var copy = J$.W(6042969, 'copy', J$.T(6042961, [], 10, false), copy, false, false);
                                for (var i = J$.W(6043001, 'i', J$.T(6042977, 0, 22, false), i, false, false), len = J$.W(6043009, 'len', J$.G(6042993, J$.R(6042985, 'obj', obj, false, false), 'length'), len, false, false); J$.C(312928, J$.B(706674, '<', J$.R(6043017, 'i', i, false, false), J$.R(6043025, 'len', len, false, false))); i = J$.W(6043041, 'i', J$.B(706690, '+', J$.U(706682, '+', J$.R(6043033, 'i', i, false, false)), 1), i, false, false)) {
                                    J$.P(6043105, J$.R(6043049, 'copy', copy, false, false), J$.R(6043057, 'i', i, false, false), J$.F(6043097, J$.R(6043065, 'clone', clone, false, true), false)(J$.G(6043089, J$.R(6043073, 'obj', obj, false, false), J$.R(6043081, 'i', i, false, false))));
                                }
                                return J$.Rt(6043121, J$.R(6043113, 'copy', copy, false, false));
                            }
                            if (J$.C(312952, J$.B(706698, 'instanceof', J$.R(6043129, 'obj', obj, false, false), J$.I(typeof Object === 'undefined' ? Object = J$.R(6043137, 'Object', undefined, true, true) : Object = J$.R(6043137, 'Object', Object, true, true))))) {
                                var copy = J$.W(6043153, 'copy', J$.T(6043145, {}, 11, false), copy, false, false);
                                for (var attr in J$.H(6043257, J$.R(6043161, 'obj', obj, false, false))) {
                                    J$.N(6043265, 'attr', attr, false, true, false);
                                    {
                                        {
                                            if (J$.C(312944, J$.M(6043185, J$.R(6043169, 'obj', obj, false, false), 'hasOwnProperty', false)(J$.R(6043177, 'attr', attr, false, false))))
                                                J$.P(6043249, J$.R(6043193, 'copy', copy, false, false), J$.R(6043201, 'attr', attr, false, false), J$.F(6043241, J$.R(6043209, 'clone', clone, false, true), false)(J$.G(6043233, J$.R(6043217, 'obj', obj, false, false), J$.R(6043225, 'attr', attr, false, false))));
                                        }
                                    }
                                }
                                return J$.Rt(6043281, J$.R(6043273, 'copy', copy, false, false));
                            }
                            throw J$.F(6043305, J$.I(typeof Error === 'undefined' ? Error = J$.R(6043289, 'Error', undefined, true, true) : Error = J$.R(6043289, 'Error', Error, true, true)), true)(J$.T(6043297, 'Unable to copy obj! Its type isn\'t supported.', 21, false));
                        } catch (J$e) {
                            J$.Ex(6043841, J$e);
                        } finally {
                            if (J$.Fr(6043849))
                                continue jalangiLabel12;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(6043497, 'path', path, false, false, false);
            J$.N(6043505, 'tynt', tynt, false, false, false);
            J$.N(6043513, 'fs', fs, false, false, false);
            J$.N(6043521, 'rootMagicName', rootMagicName, false, false, false);
            J$.N(6043529, 'http', http, false, false, false);
            sendViaWebRequest = J$.N(6043545, 'sendViaWebRequest', J$.T(6043537, sendViaWebRequest, 12, false), true, false, false);
            entry = J$.N(6043561, 'entry', J$.T(6043553, entry, 12, false), true, false, false);
            loopProperty = J$.N(6043577, 'loopProperty', J$.T(6043569, loopProperty, 12, false), true, false, false);
            verifyHipar = J$.N(6043593, 'verifyHipar', J$.T(6043585, verifyHipar, 12, false), true, false, false);
            source = J$.N(6043609, 'source', J$.T(6043601, source, 12, false), true, false, false);
            verify_hipar = J$.N(6043625, 'verify_hipar', J$.T(6043617, verify_hipar, 12, false), true, false, false);
            clone = J$.N(6043641, 'clone', J$.T(6043633, clone, 12, false), true, false, false);
            var path = J$.W(6039977, 'path', J$.F(6039969, J$.I(typeof require === 'undefined' ? require = J$.R(6039953, 'require', undefined, true, true) : require = J$.R(6039953, 'require', require, true, true)), false)(J$.T(6039961, 'path', 21, false)), path, false, true);
            var tynt = J$.W(6040009, 'tynt', J$.F(6040001, J$.I(typeof require === 'undefined' ? require = J$.R(6039985, 'require', undefined, true, true) : require = J$.R(6039985, 'require', require, true, true)), false)(J$.T(6039993, 'tynt', 21, false)), tynt, false, true);
            var fs = J$.W(6040041, 'fs', J$.F(6040033, J$.I(typeof require === 'undefined' ? require = J$.R(6040017, 'require', undefined, true, true) : require = J$.R(6040017, 'require', require, true, true)), false)(J$.T(6040025, 'fs', 21, false)), fs, false, true);
            var rootMagicName = J$.W(6040057, 'rootMagicName', J$.T(6040049, 'R0ot', 21, false), rootMagicName, false, true);
            var http = J$.W(6040089, 'http', J$.F(6040081, J$.I(typeof require === 'undefined' ? require = J$.R(6040065, 'require', undefined, true, true) : require = J$.R(6040065, 'require', require, true, true)), false)(J$.T(6040073, 'http', 21, false)), http, false, true);
            J$.P(6043385, J$.I(typeof exports === 'undefined' ? exports = J$.R(6043369, 'exports', undefined, true, true) : exports = J$.R(6043369, 'exports', exports, true, true)), 'clone', J$.R(6043377, 'clone', clone, false, true));
            J$.P(6043409, J$.I(typeof exports === 'undefined' ? exports = J$.R(6043393, 'exports', undefined, true, true) : exports = J$.R(6043393, 'exports', exports, true, true)), 'loopProperty', J$.R(6043401, 'loopProperty', loopProperty, false, true));
            J$.P(6043433, J$.I(typeof exports === 'undefined' ? exports = J$.R(6043417, 'exports', undefined, true, true) : exports = J$.R(6043417, 'exports', exports, true, true)), 'verifyHipar', J$.R(6043425, 'verifyHipar', verifyHipar, false, true));
            J$.P(6043457, J$.I(typeof exports === 'undefined' ? exports = J$.R(6043441, 'exports', undefined, true, true) : exports = J$.R(6043441, 'exports', exports, true, true)), 'entry', J$.R(6043449, 'entry', entry, false, true));
            J$.P(6043481, J$.I(typeof exports === 'undefined' ? exports = J$.R(6043465, 'exports', undefined, true, true) : exports = J$.R(6043465, 'exports', exports, true, true)), 'sendViaWebRequest', J$.R(6043473, 'sendViaWebRequest', sendViaWebRequest, false, true));
        } catch (J$e) {
            J$.Ex(6043857, J$e);
        } finally {
            if (J$.Sr(6043865))
                continue jalangiLabel13;
            else
                break jalangiLabel13;
        }
    }
// JALANGI DO NOT INSTRUMENT

