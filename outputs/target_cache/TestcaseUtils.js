J$.noInstrEval = false;
jalangiLabel13:
    while (true) {
        try {
            J$.Se(320241, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestcaseUtils.js');
            function sendViaWebRequest(method, data, location, port, hostname) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(317705, arguments.callee, this, arguments);
                            arguments = J$.N(317713, 'arguments', arguments, true, false, false);
                            method = J$.N(317721, 'method', method, true, false, false);
                            data = J$.N(317729, 'data', data, true, false, false);
                            location = J$.N(317737, 'location', location, true, false, false);
                            port = J$.N(317745, 'port', port, true, false, false);
                            hostname = J$.N(317753, 'hostname', hostname, true, false, false);
                            J$.N(317761, 'http', http, false, false, false);
                            J$.N(317769, 'content', content, false, false, false);
                            J$.N(317777, 'options', options, false, false, false);
                            J$.N(317785, 'req', req, false, false, false);
                            var http = J$.W(316721, 'http', J$.F(316713, J$.I(typeof require === 'undefined' ? require = J$.R(316697, 'require', undefined, true, true) : require = J$.R(316697, 'require', require, true, true)), false)(J$.T(316705, 'http', 21, false)), http, false, false);
                            var content = J$.W(316737, 'content', J$.R(316729, 'data', data, false, false), content, false, false);
                            var options = J$.W(316801, 'options', J$.T(316793, {
                                hostname: J$.C(11088, J$.R(316745, 'hostname', hostname, false, false)) ? J$._() : J$.T(316753, '127.0.0.1', 21, false),
                                port: J$.R(316761, 'port', port, false, false),
                                path: J$.C(11096, J$.R(316769, 'location', location, false, false)) ? J$._() : J$.T(316777, '/', 21, false),
                                method: J$.T(316785, 'GET', 21, false)
                            }, 11, false), options, false, false);
                            if (J$.C(11104, J$.B(28178, '==', J$.R(316809, 'method', method, false, false), J$.T(316817, 'post', 21, false)))) {
                                J$.P(316841, J$.R(316825, 'options', options, false, false), 'method', J$.T(316833, 'POST', 21, false));
                                J$.P(316873, J$.R(316849, 'options', options, false, false), 'headers', J$.T(316865, { 'Content-Type': J$.T(316857, 'application/json', 21, false) }, 11, false));
                                var req = J$.W(317145, 'req', J$.M(317137, J$.R(316881, 'http', http, false, false), 'request', false)(J$.R(316889, 'options', options, false, false), J$.T(317129, function (res) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(317105, arguments.callee, this, arguments);
                                                arguments = J$.N(317113, 'arguments', arguments, true, false, false);
                                                res = J$.N(317121, 'res', res, true, false, false);
                                                J$.M(316929, J$.I(typeof console === 'undefined' ? console = J$.R(316897, 'console', undefined, true, true) : console = J$.R(316897, 'console', console, true, true)), 'log', false)(J$.B(28186, '+', J$.T(316905, 'STATUS: ', 21, false), J$.G(316921, J$.R(316913, 'res', res, false, false), 'statusCode')));
                                                J$.M(316985, J$.I(typeof console === 'undefined' ? console = J$.R(316937, 'console', undefined, true, true) : console = J$.R(316937, 'console', console, true, true)), 'log', false)(J$.B(28194, '+', J$.T(316945, 'HEADERS: ', 21, false), J$.M(316977, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(316953, 'JSON', undefined, true, true) : JSON = J$.R(316953, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(316969, J$.R(316961, 'res', res, false, false), 'headers'))));
                                                J$.M(317009, J$.R(316993, 'res', res, false, false), 'setEncoding', false)(J$.T(317001, 'utf8', 21, false));
                                                J$.M(317097, J$.R(317017, 'res', res, false, false), 'on', false)(J$.T(317025, 'data', 21, false), J$.T(317089, function (chunk) {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(317065, arguments.callee, this, arguments);
                                                                arguments = J$.N(317073, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(317081, 'chunk', chunk, true, false, false);
                                                                J$.M(317057, J$.I(typeof console === 'undefined' ? console = J$.R(317033, 'console', undefined, true, true) : console = J$.R(317033, 'console', console, true, true)), 'log', false)(J$.B(28202, '+', J$.T(317041, 'BODY: ', 21, false), J$.R(317049, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(320401, J$e);
                                                            } finally {
                                                                if (J$.Fr(320409))
                                                                    continue jalangiLabel0;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(320417, J$e);
                                            } finally {
                                                if (J$.Fr(320425))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(317241, J$.R(317153, 'req', req, false, false), 'on', false)(J$.T(317161, 'error', 21, false), J$.T(317233, function (e) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(317209, arguments.callee, this, arguments);
                                                arguments = J$.N(317217, 'arguments', arguments, true, false, false);
                                                e = J$.N(317225, 'e', e, true, false, false);
                                                J$.M(317201, J$.I(typeof console === 'undefined' ? console = J$.R(317169, 'console', undefined, true, true) : console = J$.R(317169, 'console', console, true, true)), 'log', false)(J$.B(28210, '+', J$.T(317177, 'problem with request: ', 21, false), J$.G(317193, J$.R(317185, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(320433, J$e);
                                            } finally {
                                                if (J$.Fr(320441))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(317265, J$.R(317249, 'req', req, false, false), 'write', false)(J$.R(317257, 'content', content, false, false));
                                J$.M(317281, J$.R(317273, 'req', req, false, false), 'end', false)();
                            } else {
                                J$.A(317313, J$.R(317289, 'options', options, false, false), 'location', '+')(J$.B(28218, '+', J$.T(317297, '?', 21, false), J$.R(317305, 'content', content, false, false)));
                                var req = J$.W(317585, 'req', J$.M(317577, J$.R(317321, 'http', http, false, false), 'request', false)(J$.R(317329, 'options', options, false, false), J$.T(317569, function (res) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(317545, arguments.callee, this, arguments);
                                                arguments = J$.N(317553, 'arguments', arguments, true, false, false);
                                                res = J$.N(317561, 'res', res, true, false, false);
                                                J$.M(317369, J$.I(typeof console === 'undefined' ? console = J$.R(317337, 'console', undefined, true, true) : console = J$.R(317337, 'console', console, true, true)), 'log', false)(J$.B(28226, '+', J$.T(317345, 'STATUS: ', 21, false), J$.G(317361, J$.R(317353, 'res', res, false, false), 'statusCode')));
                                                J$.M(317425, J$.I(typeof console === 'undefined' ? console = J$.R(317377, 'console', undefined, true, true) : console = J$.R(317377, 'console', console, true, true)), 'log', false)(J$.B(28234, '+', J$.T(317385, 'HEADERS: ', 21, false), J$.M(317417, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(317393, 'JSON', undefined, true, true) : JSON = J$.R(317393, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(317409, J$.R(317401, 'res', res, false, false), 'headers'))));
                                                J$.M(317449, J$.R(317433, 'res', res, false, false), 'setEncoding', false)(J$.T(317441, 'utf8', 21, false));
                                                J$.M(317537, J$.R(317457, 'res', res, false, false), 'on', false)(J$.T(317465, 'data', 21, false), J$.T(317529, function (chunk) {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(317505, arguments.callee, this, arguments);
                                                                arguments = J$.N(317513, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(317521, 'chunk', chunk, true, false, false);
                                                                J$.M(317497, J$.I(typeof console === 'undefined' ? console = J$.R(317473, 'console', undefined, true, true) : console = J$.R(317473, 'console', console, true, true)), 'log', false)(J$.B(28242, '+', J$.T(317481, 'BODY: ', 21, false), J$.R(317489, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(320449, J$e);
                                                            } finally {
                                                                if (J$.Fr(320457))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(320465, J$e);
                                            } finally {
                                                if (J$.Fr(320473))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(317681, J$.R(317593, 'req', req, false, false), 'on', false)(J$.T(317601, 'error', 21, false), J$.T(317673, function (e) {
                                    jalangiLabel5:
                                        while (true) {
                                            try {
                                                J$.Fe(317649, arguments.callee, this, arguments);
                                                arguments = J$.N(317657, 'arguments', arguments, true, false, false);
                                                e = J$.N(317665, 'e', e, true, false, false);
                                                J$.M(317641, J$.I(typeof console === 'undefined' ? console = J$.R(317609, 'console', undefined, true, true) : console = J$.R(317609, 'console', console, true, true)), 'log', false)(J$.B(28250, '+', J$.T(317617, 'problem with request: ', 21, false), J$.G(317633, J$.R(317625, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(320481, J$e);
                                            } finally {
                                                if (J$.Fr(320489))
                                                    continue jalangiLabel5;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(317697, J$.R(317689, 'req', req, false, false), 'end', false)();
                            }
                        } catch (J$e) {
                            J$.Ex(320497, J$e);
                        } finally {
                            if (J$.Fr(320505))
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
                            J$.Fe(318017, arguments.callee, this, arguments);
                            arguments = J$.N(318025, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(318033, 'testFunc', testFunc, true, false, false);
                            param = J$.N(318041, 'param', param, true, false, false);
                            if (J$.C(11120, J$.B(28258, '==', J$.G(317817, J$.G(317801, J$.I(typeof process === 'undefined' ? process = J$.R(317793, 'process', undefined, true, true) : process = J$.R(317793, 'process', process, true, true)), 'argv'), J$.T(317809, 2, 22, false)), J$.T(317825, 'analysis', 21, false))))
                                J$.F(317857, J$.R(317833, 'loopProperty', loopProperty, false, true), false)(J$.R(317841, 'testFunc', testFunc, false, false), J$.R(317849, 'param', param, false, false));
                            else if (J$.C(11112, J$.B(28266, '==', J$.G(317889, J$.G(317873, J$.I(typeof process === 'undefined' ? process = J$.R(317865, 'process', undefined, true, true) : process = J$.R(317865, 'process', process, true, true)), 'argv'), J$.T(317881, 2, 22, false)), J$.T(317897, 'verify', 21, false))))
                                J$.F(317937, J$.R(317905, 'verifyHipar', verifyHipar, false, true), false)(J$.R(317913, 'testFunc', testFunc, false, false), J$.R(317921, 'param', param, false, false), J$.I(typeof ProjectDir === 'undefined' ? ProjectDir = J$.R(317929, 'ProjectDir', undefined, true, true) : ProjectDir = J$.R(317929, 'ProjectDir', ProjectDir, true, true)));
                            else {
                                J$.M(317977, J$.I(typeof console === 'undefined' ? console = J$.R(317945, 'console', undefined, true, true) : console = J$.R(317945, 'console', console, true, true)), 'log', false)(J$.M(317969, J$.R(317953, 'tynt', tynt, false, true), 'Red', false)(J$.T(317961, 'Incorrect Prompt argumnet, we do analysis by default', 21, false)));
                                J$.F(318009, J$.R(317985, 'loopProperty', loopProperty, false, true), false)(J$.R(317993, 'testFunc', testFunc, false, false), J$.R(318001, 'param', param, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(320513, J$e);
                        } finally {
                            if (J$.Fr(320521))
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
                            J$.Fe(318489, arguments.callee, this, arguments);
                            arguments = J$.N(318497, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(318505, 'testFunc', testFunc, true, false, false);
                            param = J$.N(318513, 'param', param, true, false, false);
                            J$.N(318521, 'properties', properties, false, false, false);
                            J$.N(318529, 'property', property, false, false, false);
                            J$.N(318537, 'tmp', tmp, false, false, false);
                            var properties = J$.W(318073, 'properties', J$.M(318065, J$.I(typeof Object === 'undefined' ? Object = J$.R(318049, 'Object', undefined, true, true) : Object = J$.R(318049, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.R(318057, 'param', param, false, false)), properties, false, false);
                            J$.M(318113, J$.I(typeof console === 'undefined' ? console = J$.R(318081, 'console', undefined, true, true) : console = J$.R(318081, 'console', console, true, true)), 'log', false)(J$.M(318105, J$.R(318089, 'tynt', tynt, false, true), 'Green', false)(J$.T(318097, '[-]Running test with purely untainted param', 21, false)));
                            J$.F(318137, J$.R(318121, 'testFunc', testFunc, false, false), false)(J$.R(318129, 'param', param, false, false));
                            if (J$.C(11128, J$.B(28282, '==', J$.U(28274, 'typeof', J$.R(318145, 'param', param, false, false)), J$.T(318153, 'string', 21, false))))
                                return J$.Rt(318161, undefined);
                            J$.M(318193, J$.I(typeof console === 'undefined' ? console = J$.R(318169, 'console', undefined, true, true) : console = J$.R(318169, 'console', console, true, true)), 'log', false)(J$.T(318177, 'properties: ', 21, false), J$.R(318185, 'properties', properties, false, false));
                            for (var property of J$.R(318201, 'properties', properties, false, false)) {
                                J$.M(318249, J$.I(typeof console === 'undefined' ? console = J$.R(318209, 'console', undefined, true, true) : console = J$.R(318209, 'console', console, true, true)), 'log', false)(J$.M(318241, J$.R(318217, 'tynt', tynt, false, true), 'Green', false)(J$.B(28290, '+', J$.T(318225, '[-]Running test with tainted property: ', 21, false), J$.R(318233, 'property', property, false, false))));
                                var tmp = J$.W(318281, 'tmp', J$.F(318273, J$.R(318257, 'clone', clone, false, true), false)(J$.R(318265, 'param', param, false, false)), tmp, false, false);
                                J$.P(318353, J$.R(318289, 'tmp', tmp, false, false), J$.R(318297, 'property', property, false, false), J$.F(318345, J$.R(318305, 'source', source, false, true), false)(J$.G(318329, J$.R(318313, 'tmp', tmp, false, false), J$.R(318321, 'property', property, false, false)), J$.R(318337, 'property', property, false, false)));
                                J$.F(318377, J$.R(318361, 'testFunc', testFunc, false, false), false)(J$.R(318369, 'tmp', tmp, false, false));
                            }
                            param = J$.W(318417, 'param', J$.F(318409, J$.R(318385, 'source', source, false, true), false)(J$.R(318393, 'param', param, false, false), J$.R(318401, 'rootMagicName', rootMagicName, false, true)), param, false, false);
                            J$.M(318457, J$.I(typeof console === 'undefined' ? console = J$.R(318425, 'console', undefined, true, true) : console = J$.R(318425, 'console', console, true, true)), 'log', false)(J$.M(318449, J$.R(318433, 'tynt', tynt, false, true), 'Green', false)(J$.T(318441, '[-]Running test with param tainted in root', 21, false)));
                            J$.F(318481, J$.R(318465, 'testFunc', testFunc, false, false), false)(J$.R(318473, 'param', param, false, false));
                        } catch (J$e) {
                            J$.Ex(320529, J$e);
                        } finally {
                            if (J$.Fr(320537))
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
                            J$.Fe(319393, arguments.callee, this, arguments);
                            arguments = J$.N(319401, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(319409, 'testFunc', testFunc, true, false, false);
                            param = J$.N(319417, 'param', param, true, false, false);
                            J$.N(319425, 'verifyPath', verifyPath, false, false, false);
                            J$.N(319433, 'result', result, false, false, false);
                            J$.N(319441, 'property', property, false, false, false);
                            J$.N(319449, 'hipar_name', hipar_name, false, false, false);
                            J$.N(319457, 'hipar_content', hipar_content, false, false, false);
                            J$.N(319465, 'tmp', tmp, false, false, false);
                            testFileName = J$.W(318601, 'testFileName', J$.M(318593, J$.M(318585, J$.G(318569, J$.G(318553, J$.I(typeof process === 'undefined' ? process = J$.R(318545, 'process', undefined, true, true) : process = J$.R(318545, 'process', process, true, true)), 'argv'), J$.T(318561, 1, 22, false)), 'split', false)(J$.T(318577, '/', 21, false)), 'pop', false)(), J$.I(typeof testFileName === 'undefined' ? undefined : testFileName), true, true);
                            var verifyPath = J$.W(318657, 'verifyPath', J$.M(318649, J$.R(318609, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(318617, '__dirname', undefined, true, true) : __dirname = J$.R(318617, '__dirname', __dirname, true, true)), J$.B(28306, '+', J$.B(28298, '+', J$.T(318625, '../../outputs/hidden_attr/', 21, false), J$.I(typeof testFileName === 'undefined' ? testFileName = J$.R(318633, 'testFileName', undefined, true, true) : testFileName = J$.R(318633, 'testFileName', testFileName, true, true))), J$.T(318641, 'on', 21, false))), verifyPath, false, false);
                            J$.M(318681, J$.I(typeof console === 'undefined' ? console = J$.R(318665, 'console', undefined, true, true) : console = J$.R(318665, 'console', console, true, true)), 'log', false)(J$.R(318673, 'verifyPath', verifyPath, false, false));
                            if (J$.C(11152, J$.M(318705, J$.R(318689, 'fs', fs, false, true), 'existsSync', false)(J$.R(318697, 'verifyPath', verifyPath, false, false)))) {
                                J$.M(318745, J$.I(typeof console === 'undefined' ? console = J$.R(318713, 'console', undefined, true, true) : console = J$.R(318713, 'console', console, true, true)), 'log', false)(J$.M(318737, J$.R(318721, 'tynt', tynt, false, true), 'Green', false)(J$.T(318729, '[-]Verifying hidden Parameter', 21, false)));
                                var result = J$.W(318793, 'result', J$.M(318785, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(318753, 'JSON', undefined, true, true) : JSON = J$.R(318753, 'JSON', JSON, true, true)), 'parse', false)(J$.M(318777, J$.R(318761, 'fs', fs, false, true), 'readFileSync', false)(J$.R(318769, 'verifyPath', verifyPath, false, false))), result, false, false);
                                for (var property in J$.H(319377, J$.R(318801, 'result', result, false, false))) {
                                    J$.N(319385, 'property', property, false, true, false);
                                    {
                                        {
                                            for (var hipar_name in J$.H(319361, J$.G(318825, J$.R(318809, 'result', result, false, false), J$.R(318817, 'property', property, false, false)))) {
                                                J$.N(319369, 'hipar_name', hipar_name, false, true, false);
                                                {
                                                    {
                                                        var hipar_content = J$.W(318873, 'hipar_content', J$.G(318865, J$.G(318849, J$.R(318833, 'result', result, false, false), J$.R(318841, 'property', property, false, false)), J$.R(318857, 'hipar_name', hipar_name, false, false)), hipar_content, false, false);
                                                        var tmp = J$.W(318905, 'tmp', J$.F(318897, J$.R(318881, 'clone', clone, false, true), false)(J$.R(318889, 'param', param, false, false)), tmp, false, false);
                                                        hipar_multi_names = J$.W(318937, 'hipar_multi_names', J$.M(318929, J$.R(318913, 'hipar_name', hipar_name, false, false), 'split', false)(J$.T(318921, '.', 21, false)), J$.I(typeof hipar_multi_names === 'undefined' ? undefined : hipar_multi_names), true, true);
                                                        if (J$.C(11136, J$.B(28314, '!=', J$.R(318945, 'property', property, false, false), J$.R(318953, 'rootMagicName', rootMagicName, false, true))))
                                                            tmp = J$.W(318985, 'tmp', J$.G(318977, J$.R(318961, 'tmp', tmp, false, false), J$.R(318969, 'property', property, false, false)), tmp, false, false);
                                                        while (J$.C(11144, J$.B(28322, '>', J$.G(319001, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(318993, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(318993, 'hipar_multi_names', hipar_multi_names, true, true)), 'length'), J$.T(319009, 1, 22, false)))) {
                                                            name = J$.W(319033, 'name', J$.M(319025, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(319017, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(319017, 'hipar_multi_names', hipar_multi_names, true, true)), 'shift', false)(), J$.I(typeof name === 'undefined' ? undefined : name), true, true);
                                                            J$.P(319065, J$.R(319041, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(319049, 'name', undefined, true, true) : name = J$.R(319049, 'name', name, true, true)), J$.T(319057, {}, 11, false));
                                                            tmp = J$.W(319097, 'tmp', J$.G(319089, J$.R(319073, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(319081, 'name', undefined, true, true) : name = J$.R(319081, 'name', name, true, true))), tmp, false, false);
                                                        }
                                                        name = J$.W(319121, 'name', J$.M(319113, J$.I(typeof hipar_multi_names === 'undefined' ? hipar_multi_names = J$.R(319105, 'hipar_multi_names', undefined, true, true) : hipar_multi_names = J$.R(319105, 'hipar_multi_names', hipar_multi_names, true, true)), 'shift', false)(), J$.I(typeof name === 'undefined' ? undefined : name), true, true);
                                                        J$.P(319153, J$.R(319129, 'tmp', tmp, false, false), J$.I(typeof name === 'undefined' ? name = J$.R(319137, 'name', undefined, true, true) : name = J$.R(319137, 'name', name, true, true)), J$.T(319145, 'H1P4r', 21, false));
                                                        J$.F(319209, J$.R(319161, 'verify_hipar', verify_hipar, false, true), false)(J$.G(319177, J$.R(319169, 'hipar_content', hipar_content, false, false), 'file'), J$.R(319185, 'hipar_name', hipar_name, false, false), J$.G(319201, J$.R(319193, 'hipar_content', hipar_content, false, false), 'base'));
                                                        J$.M(319233, J$.I(typeof console === 'undefined' ? console = J$.R(319217, 'console', undefined, true, true) : console = J$.R(319217, 'console', console, true, true)), 'log', false)(J$.R(319225, 'tmp', tmp, false, false));
                                                        try {
                                                            J$.F(319257, J$.R(319241, 'testFunc', testFunc, false, false), false)(J$.R(319249, 'tmp', tmp, false, false));
                                                        } catch (e) {
                                                            J$.N(319353, 'e', e, false, false, true);
                                                            J$.M(319305, J$.G(319273, J$.I(typeof process === 'undefined' ? process = J$.R(319265, 'process', undefined, true, true) : process = J$.R(319265, 'process', process, true, true)), 'stdout'), 'write', false)(J$.M(319297, J$.R(319281, 'tynt', tynt, false, true), 'Red', false)(J$.T(319289, '[Verify Error]:', 21, false)));
                                                            J$.M(319345, J$.I(typeof console === 'undefined' ? console = J$.R(319313, 'console', undefined, true, true) : console = J$.R(319313, 'console', console, true, true)), 'log', false)(J$.M(319337, J$.R(319321, 'tynt', tynt, false, true), 'Red', false)(J$.R(319329, 'e', e, false, false)));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(320545, J$e);
                        } finally {
                            if (J$.Fr(320553))
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
                            J$.Fe(319489, arguments.callee, this, arguments);
                            arguments = J$.N(319497, 'arguments', arguments, true, false, false);
                            source_var = J$.N(319505, 'source_var', source_var, true, false, false);
                            var_name = J$.N(319513, 'var_name', var_name, true, false, false);
                            return J$.Rt(319481, J$.R(319473, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(320561, J$e);
                        } finally {
                            if (J$.Fr(320569))
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
                            J$.Fe(319537, arguments.callee, this, arguments);
                            arguments = J$.N(319545, 'arguments', arguments, true, false, false);
                            source_var = J$.N(319553, 'source_var', source_var, true, false, false);
                            return J$.Rt(319529, J$.R(319521, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(320577, J$e);
                        } finally {
                            if (J$.Fr(320585))
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
                            J$.Fe(320065, arguments.callee, this, arguments);
                            arguments = J$.N(320073, 'arguments', arguments, true, false, false);
                            obj = J$.N(320081, 'obj', obj, true, false, false);
                            J$.N(320089, 'copy', copy, false, false, false);
                            J$.N(320097, 'i', i, false, false, false);
                            J$.N(320105, 'len', len, false, false, false);
                            J$.N(320113, 'attr', attr, false, false, false);
                            if (J$.C(11168, J$.C(11160, J$.B(28330, '==', J$.T(319561, null, 25, false), J$.R(319569, 'obj', obj, false, false))) ? J$._() : J$.B(28346, '!=', J$.T(319577, 'object', 21, false), J$.U(28338, 'typeof', J$.R(319585, 'obj', obj, false, false)))))
                                return J$.Rt(319601, J$.R(319593, 'obj', obj, false, false));
                            if (J$.C(11176, J$.B(28354, 'instanceof', J$.R(319609, 'obj', obj, false, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(319617, 'Date', undefined, true, true) : Date = J$.R(319617, 'Date', Date, true, true))))) {
                                var copy = J$.W(319641, 'copy', J$.F(319633, J$.I(typeof Date === 'undefined' ? Date = J$.R(319625, 'Date', undefined, true, true) : Date = J$.R(319625, 'Date', Date, true, true)), true)(), copy, false, false);
                                J$.M(319673, J$.R(319649, 'copy', copy, false, false), 'setTime', false)(J$.M(319665, J$.R(319657, 'obj', obj, false, false), 'getTime', false)());
                                return J$.Rt(319689, J$.R(319681, 'copy', copy, false, false));
                            }
                            if (J$.C(11192, J$.B(28362, 'instanceof', J$.R(319697, 'obj', obj, false, false), J$.I(typeof Array === 'undefined' ? Array = J$.R(319705, 'Array', undefined, true, true) : Array = J$.R(319705, 'Array', Array, true, true))))) {
                                var copy = J$.W(319721, 'copy', J$.T(319713, [], 10, false), copy, false, false);
                                for (var i = J$.W(319753, 'i', J$.T(319729, 0, 22, false), i, false, false), len = J$.W(319761, 'len', J$.G(319745, J$.R(319737, 'obj', obj, false, false), 'length'), len, false, false); J$.C(11184, J$.B(28370, '<', J$.R(319769, 'i', i, false, false), J$.R(319777, 'len', len, false, false))); i = J$.W(319793, 'i', J$.B(28386, '+', J$.U(28378, '+', J$.R(319785, 'i', i, false, false)), 1), i, false, false)) {
                                    J$.P(319857, J$.R(319801, 'copy', copy, false, false), J$.R(319809, 'i', i, false, false), J$.F(319849, J$.R(319817, 'clone', clone, false, true), false)(J$.G(319841, J$.R(319825, 'obj', obj, false, false), J$.R(319833, 'i', i, false, false))));
                                }
                                return J$.Rt(319873, J$.R(319865, 'copy', copy, false, false));
                            }
                            if (J$.C(11208, J$.B(28394, 'instanceof', J$.R(319881, 'obj', obj, false, false), J$.I(typeof Object === 'undefined' ? Object = J$.R(319889, 'Object', undefined, true, true) : Object = J$.R(319889, 'Object', Object, true, true))))) {
                                var copy = J$.W(319905, 'copy', J$.T(319897, {}, 11, false), copy, false, false);
                                for (var attr in J$.H(320009, J$.R(319913, 'obj', obj, false, false))) {
                                    J$.N(320017, 'attr', attr, false, true, false);
                                    {
                                        {
                                            if (J$.C(11200, J$.M(319937, J$.R(319921, 'obj', obj, false, false), 'hasOwnProperty', false)(J$.R(319929, 'attr', attr, false, false))))
                                                J$.P(320001, J$.R(319945, 'copy', copy, false, false), J$.R(319953, 'attr', attr, false, false), J$.F(319993, J$.R(319961, 'clone', clone, false, true), false)(J$.G(319985, J$.R(319969, 'obj', obj, false, false), J$.R(319977, 'attr', attr, false, false))));
                                        }
                                    }
                                }
                                return J$.Rt(320033, J$.R(320025, 'copy', copy, false, false));
                            }
                            throw J$.F(320057, J$.I(typeof Error === 'undefined' ? Error = J$.R(320041, 'Error', undefined, true, true) : Error = J$.R(320041, 'Error', Error, true, true)), true)(J$.T(320049, 'Unable to copy obj! Its type isn\'t supported.', 21, false));
                        } catch (J$e) {
                            J$.Ex(320593, J$e);
                        } finally {
                            if (J$.Fr(320601))
                                continue jalangiLabel12;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(320249, 'path', path, false, false, false);
            J$.N(320257, 'tynt', tynt, false, false, false);
            J$.N(320265, 'fs', fs, false, false, false);
            J$.N(320273, 'rootMagicName', rootMagicName, false, false, false);
            J$.N(320281, 'http', http, false, false, false);
            sendViaWebRequest = J$.N(320297, 'sendViaWebRequest', J$.T(320289, sendViaWebRequest, 12, false), true, false, false);
            entry = J$.N(320313, 'entry', J$.T(320305, entry, 12, false), true, false, false);
            loopProperty = J$.N(320329, 'loopProperty', J$.T(320321, loopProperty, 12, false), true, false, false);
            verifyHipar = J$.N(320345, 'verifyHipar', J$.T(320337, verifyHipar, 12, false), true, false, false);
            source = J$.N(320361, 'source', J$.T(320353, source, 12, false), true, false, false);
            verify_hipar = J$.N(320377, 'verify_hipar', J$.T(320369, verify_hipar, 12, false), true, false, false);
            clone = J$.N(320393, 'clone', J$.T(320385, clone, 12, false), true, false, false);
            var path = J$.W(316577, 'path', J$.F(316569, J$.I(typeof require === 'undefined' ? require = J$.R(316553, 'require', undefined, true, true) : require = J$.R(316553, 'require', require, true, true)), false)(J$.T(316561, 'path', 21, false)), path, false, true);
            var tynt = J$.W(316609, 'tynt', J$.F(316601, J$.I(typeof require === 'undefined' ? require = J$.R(316585, 'require', undefined, true, true) : require = J$.R(316585, 'require', require, true, true)), false)(J$.T(316593, 'tynt', 21, false)), tynt, false, true);
            var fs = J$.W(316641, 'fs', J$.F(316633, J$.I(typeof require === 'undefined' ? require = J$.R(316617, 'require', undefined, true, true) : require = J$.R(316617, 'require', require, true, true)), false)(J$.T(316625, 'fs', 21, false)), fs, false, true);
            var rootMagicName = J$.W(316657, 'rootMagicName', J$.T(316649, 'R0ot', 21, false), rootMagicName, false, true);
            var http = J$.W(316689, 'http', J$.F(316681, J$.I(typeof require === 'undefined' ? require = J$.R(316665, 'require', undefined, true, true) : require = J$.R(316665, 'require', require, true, true)), false)(J$.T(316673, 'http', 21, false)), http, false, true);
            J$.P(320137, J$.I(typeof exports === 'undefined' ? exports = J$.R(320121, 'exports', undefined, true, true) : exports = J$.R(320121, 'exports', exports, true, true)), 'clone', J$.R(320129, 'clone', clone, false, true));
            J$.P(320161, J$.I(typeof exports === 'undefined' ? exports = J$.R(320145, 'exports', undefined, true, true) : exports = J$.R(320145, 'exports', exports, true, true)), 'loopProperty', J$.R(320153, 'loopProperty', loopProperty, false, true));
            J$.P(320185, J$.I(typeof exports === 'undefined' ? exports = J$.R(320169, 'exports', undefined, true, true) : exports = J$.R(320169, 'exports', exports, true, true)), 'verifyHipar', J$.R(320177, 'verifyHipar', verifyHipar, false, true));
            J$.P(320209, J$.I(typeof exports === 'undefined' ? exports = J$.R(320193, 'exports', undefined, true, true) : exports = J$.R(320193, 'exports', exports, true, true)), 'entry', J$.R(320201, 'entry', entry, false, true));
            J$.P(320233, J$.I(typeof exports === 'undefined' ? exports = J$.R(320217, 'exports', undefined, true, true) : exports = J$.R(320217, 'exports', exports, true, true)), 'sendViaWebRequest', J$.R(320225, 'sendViaWebRequest', sendViaWebRequest, false, true));
        } catch (J$e) {
            J$.Ex(320609, J$e);
        } finally {
            if (J$.Sr(320617))
                continue jalangiLabel13;
            else
                break jalangiLabel13;
        }
    }
// JALANGI DO NOT INSTRUMENT

