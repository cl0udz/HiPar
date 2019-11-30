J$.noInstrEval = false;
jalangiLabel13:
    while (true) {
        try {
            J$.Se(3089033, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestcaseUtils.js');
            function sendViaWebRequest(method, data, location, port, hostname) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(3086649, arguments.callee, this, arguments);
                            arguments = J$.N(3086657, 'arguments', arguments, true, false, false);
                            method = J$.N(3086665, 'method', method, true, false, false);
                            data = J$.N(3086673, 'data', data, true, false, false);
                            location = J$.N(3086681, 'location', location, true, false, false);
                            port = J$.N(3086689, 'port', port, true, false, false);
                            hostname = J$.N(3086697, 'hostname', hostname, true, false, false);
                            J$.N(3086705, 'http', http, false, false, false);
                            J$.N(3086713, 'content', content, false, false, false);
                            J$.N(3086721, 'options', options, false, false, false);
                            J$.N(3086729, 'req', req, false, false, false);
                            var http = J$.W(3085665, 'http', J$.F(3085657, J$.I(typeof require === 'undefined' ? require = J$.R(3085641, 'require', undefined, true, true) : require = J$.R(3085641, 'require', require, true, true)), false)(J$.T(3085649, 'http', 21, false)), http, false, false);
                            var content = J$.W(3085681, 'content', J$.R(3085673, 'data', data, false, false), content, false, false);
                            var options = J$.W(3085745, 'options', J$.T(3085737, {
                                hostname: J$.C(152816, J$.R(3085689, 'hostname', hostname, false, false)) ? J$._() : J$.T(3085697, '127.0.0.1', 21, false),
                                port: J$.R(3085705, 'port', port, false, false),
                                path: J$.C(152824, J$.R(3085713, 'location', location, false, false)) ? J$._() : J$.T(3085721, '/', 21, false),
                                method: J$.T(3085729, 'GET', 21, false)
                            }, 11, false), options, false, false);
                            if (J$.C(152832, J$.B(214594, '==', J$.R(3085753, 'method', method, false, false), J$.T(3085761, 'post', 21, false)))) {
                                J$.P(3085785, J$.R(3085769, 'options', options, false, false), 'method', J$.T(3085777, 'POST', 21, false));
                                J$.P(3085817, J$.R(3085793, 'options', options, false, false), 'headers', J$.T(3085809, { 'Content-Type': J$.T(3085801, 'application/json', 21, false) }, 11, false));
                                var req = J$.W(3086089, 'req', J$.M(3086081, J$.R(3085825, 'http', http, false, false), 'request', false)(J$.R(3085833, 'options', options, false, false), J$.T(3086073, function (res) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(3086049, arguments.callee, this, arguments);
                                                arguments = J$.N(3086057, 'arguments', arguments, true, false, false);
                                                res = J$.N(3086065, 'res', res, true, false, false);
                                                J$.M(3085873, J$.I(typeof console === 'undefined' ? console = J$.R(3085841, 'console', undefined, true, true) : console = J$.R(3085841, 'console', console, true, true)), 'log', false)(J$.B(214602, '+', J$.T(3085849, 'STATUS: ', 21, false), J$.G(3085865, J$.R(3085857, 'res', res, false, false), 'statusCode')));
                                                J$.M(3085929, J$.I(typeof console === 'undefined' ? console = J$.R(3085881, 'console', undefined, true, true) : console = J$.R(3085881, 'console', console, true, true)), 'log', false)(J$.B(214610, '+', J$.T(3085889, 'HEADERS: ', 21, false), J$.M(3085921, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3085897, 'JSON', undefined, true, true) : JSON = J$.R(3085897, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3085913, J$.R(3085905, 'res', res, false, false), 'headers'))));
                                                J$.M(3085953, J$.R(3085937, 'res', res, false, false), 'setEncoding', false)(J$.T(3085945, 'utf8', 21, false));
                                                J$.M(3086041, J$.R(3085961, 'res', res, false, false), 'on', false)(J$.T(3085969, 'data', 21, false), J$.T(3086033, function (chunk) {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3086009, arguments.callee, this, arguments);
                                                                arguments = J$.N(3086017, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3086025, 'chunk', chunk, true, false, false);
                                                                J$.M(3086001, J$.I(typeof console === 'undefined' ? console = J$.R(3085977, 'console', undefined, true, true) : console = J$.R(3085977, 'console', console, true, true)), 'log', false)(J$.B(214618, '+', J$.T(3085985, 'BODY: ', 21, false), J$.R(3085993, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3089193, J$e);
                                                            } finally {
                                                                if (J$.Fr(3089201))
                                                                    continue jalangiLabel0;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3089209, J$e);
                                            } finally {
                                                if (J$.Fr(3089217))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3086185, J$.R(3086097, 'req', req, false, false), 'on', false)(J$.T(3086105, 'error', 21, false), J$.T(3086177, function (e) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(3086153, arguments.callee, this, arguments);
                                                arguments = J$.N(3086161, 'arguments', arguments, true, false, false);
                                                e = J$.N(3086169, 'e', e, true, false, false);
                                                J$.M(3086145, J$.I(typeof console === 'undefined' ? console = J$.R(3086113, 'console', undefined, true, true) : console = J$.R(3086113, 'console', console, true, true)), 'log', false)(J$.B(214626, '+', J$.T(3086121, 'problem with request: ', 21, false), J$.G(3086137, J$.R(3086129, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3089225, J$e);
                                            } finally {
                                                if (J$.Fr(3089233))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3086209, J$.R(3086193, 'req', req, false, false), 'write', false)(J$.R(3086201, 'content', content, false, false));
                                J$.M(3086225, J$.R(3086217, 'req', req, false, false), 'end', false)();
                            } else {
                                J$.A(3086257, J$.R(3086233, 'options', options, false, false), 'location', '+')(J$.B(214634, '+', J$.T(3086241, '?', 21, false), J$.R(3086249, 'content', content, false, false)));
                                var req = J$.W(3086529, 'req', J$.M(3086521, J$.R(3086265, 'http', http, false, false), 'request', false)(J$.R(3086273, 'options', options, false, false), J$.T(3086513, function (res) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(3086489, arguments.callee, this, arguments);
                                                arguments = J$.N(3086497, 'arguments', arguments, true, false, false);
                                                res = J$.N(3086505, 'res', res, true, false, false);
                                                J$.M(3086313, J$.I(typeof console === 'undefined' ? console = J$.R(3086281, 'console', undefined, true, true) : console = J$.R(3086281, 'console', console, true, true)), 'log', false)(J$.B(214642, '+', J$.T(3086289, 'STATUS: ', 21, false), J$.G(3086305, J$.R(3086297, 'res', res, false, false), 'statusCode')));
                                                J$.M(3086369, J$.I(typeof console === 'undefined' ? console = J$.R(3086321, 'console', undefined, true, true) : console = J$.R(3086321, 'console', console, true, true)), 'log', false)(J$.B(214650, '+', J$.T(3086329, 'HEADERS: ', 21, false), J$.M(3086361, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3086337, 'JSON', undefined, true, true) : JSON = J$.R(3086337, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3086353, J$.R(3086345, 'res', res, false, false), 'headers'))));
                                                J$.M(3086393, J$.R(3086377, 'res', res, false, false), 'setEncoding', false)(J$.T(3086385, 'utf8', 21, false));
                                                J$.M(3086481, J$.R(3086401, 'res', res, false, false), 'on', false)(J$.T(3086409, 'data', 21, false), J$.T(3086473, function (chunk) {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3086449, arguments.callee, this, arguments);
                                                                arguments = J$.N(3086457, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3086465, 'chunk', chunk, true, false, false);
                                                                J$.M(3086441, J$.I(typeof console === 'undefined' ? console = J$.R(3086417, 'console', undefined, true, true) : console = J$.R(3086417, 'console', console, true, true)), 'log', false)(J$.B(214658, '+', J$.T(3086425, 'BODY: ', 21, false), J$.R(3086433, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3089241, J$e);
                                                            } finally {
                                                                if (J$.Fr(3089249))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3089257, J$e);
                                            } finally {
                                                if (J$.Fr(3089265))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3086625, J$.R(3086537, 'req', req, false, false), 'on', false)(J$.T(3086545, 'error', 21, false), J$.T(3086617, function (e) {
                                    jalangiLabel5:
                                        while (true) {
                                            try {
                                                J$.Fe(3086593, arguments.callee, this, arguments);
                                                arguments = J$.N(3086601, 'arguments', arguments, true, false, false);
                                                e = J$.N(3086609, 'e', e, true, false, false);
                                                J$.M(3086585, J$.I(typeof console === 'undefined' ? console = J$.R(3086553, 'console', undefined, true, true) : console = J$.R(3086553, 'console', console, true, true)), 'log', false)(J$.B(214666, '+', J$.T(3086561, 'problem with request: ', 21, false), J$.G(3086577, J$.R(3086569, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3089273, J$e);
                                            } finally {
                                                if (J$.Fr(3089281))
                                                    continue jalangiLabel5;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3086641, J$.R(3086633, 'req', req, false, false), 'end', false)();
                            }
                        } catch (J$e) {
                            J$.Ex(3089289, J$e);
                        } finally {
                            if (J$.Fr(3089297))
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
                            J$.Fe(3086961, arguments.callee, this, arguments);
                            arguments = J$.N(3086969, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3086977, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3086985, 'param', param, true, false, false);
                            if (J$.C(152848, J$.B(214674, '==', J$.G(3086761, J$.G(3086745, J$.I(typeof process === 'undefined' ? process = J$.R(3086737, 'process', undefined, true, true) : process = J$.R(3086737, 'process', process, true, true)), 'argv'), J$.T(3086753, 2, 22, false)), J$.T(3086769, 'analysis', 21, false))))
                                J$.F(3086801, J$.R(3086777, 'loopProperty', loopProperty, false, true), false)(J$.R(3086785, 'testFunc', testFunc, false, false), J$.R(3086793, 'param', param, false, false));
                            else if (J$.C(152840, J$.B(214682, '==', J$.G(3086833, J$.G(3086817, J$.I(typeof process === 'undefined' ? process = J$.R(3086809, 'process', undefined, true, true) : process = J$.R(3086809, 'process', process, true, true)), 'argv'), J$.T(3086825, 2, 22, false)), J$.T(3086841, 'verify', 21, false))))
                                J$.F(3086881, J$.R(3086849, 'verifyHipar', verifyHipar, false, true), false)(J$.R(3086857, 'testFunc', testFunc, false, false), J$.R(3086865, 'param', param, false, false), J$.I(typeof ProjectDir === 'undefined' ? ProjectDir = J$.R(3086873, 'ProjectDir', undefined, true, true) : ProjectDir = J$.R(3086873, 'ProjectDir', ProjectDir, true, true)));
                            else {
                                J$.M(3086921, J$.I(typeof console === 'undefined' ? console = J$.R(3086889, 'console', undefined, true, true) : console = J$.R(3086889, 'console', console, true, true)), 'log', false)(J$.M(3086913, J$.R(3086897, 'tynt', tynt, false, true), 'Red', false)(J$.T(3086905, 'Incorrect Prompt argumnet, we do analysis by default', 21, false)));
                                J$.F(3086953, J$.R(3086929, 'loopProperty', loopProperty, false, true), false)(J$.R(3086937, 'testFunc', testFunc, false, false), J$.R(3086945, 'param', param, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(3089305, J$e);
                        } finally {
                            if (J$.Fr(3089313))
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
                            J$.Fe(3087433, arguments.callee, this, arguments);
                            arguments = J$.N(3087441, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3087449, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3087457, 'param', param, true, false, false);
                            J$.N(3087465, 'properties', properties, false, false, false);
                            J$.N(3087473, 'property', property, false, false, false);
                            J$.N(3087481, 'tmp', tmp, false, false, false);
                            var properties = J$.W(3087017, 'properties', J$.M(3087009, J$.I(typeof Object === 'undefined' ? Object = J$.R(3086993, 'Object', undefined, true, true) : Object = J$.R(3086993, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.R(3087001, 'param', param, false, false)), properties, false, false);
                            J$.M(3087057, J$.I(typeof console === 'undefined' ? console = J$.R(3087025, 'console', undefined, true, true) : console = J$.R(3087025, 'console', console, true, true)), 'log', false)(J$.M(3087049, J$.R(3087033, 'tynt', tynt, false, true), 'Green', false)(J$.T(3087041, '[-]Running test with purely untainted param', 21, false)));
                            J$.F(3087081, J$.R(3087065, 'testFunc', testFunc, false, false), false)(J$.R(3087073, 'param', param, false, false));
                            if (J$.C(152856, J$.B(214698, '==', J$.U(214690, 'typeof', J$.R(3087089, 'param', param, false, false)), J$.T(3087097, 'string', 21, false))))
                                return J$.Rt(3087105, undefined);
                            J$.M(3087137, J$.I(typeof console === 'undefined' ? console = J$.R(3087113, 'console', undefined, true, true) : console = J$.R(3087113, 'console', console, true, true)), 'log', false)(J$.T(3087121, 'properties: ', 21, false), J$.R(3087129, 'properties', properties, false, false));
                            for (var property of J$.R(3087145, 'properties', properties, false, false)) {
                                J$.M(3087193, J$.I(typeof console === 'undefined' ? console = J$.R(3087153, 'console', undefined, true, true) : console = J$.R(3087153, 'console', console, true, true)), 'log', false)(J$.M(3087185, J$.R(3087161, 'tynt', tynt, false, true), 'Green', false)(J$.B(214706, '+', J$.T(3087169, '[-]Running test with tainted property: ', 21, false), J$.R(3087177, 'property', property, false, false))));
                                var tmp = J$.W(3087225, 'tmp', J$.F(3087217, J$.R(3087201, 'clone', clone, false, true), false)(J$.R(3087209, 'param', param, false, false)), tmp, false, false);
                                J$.P(3087297, J$.R(3087233, 'tmp', tmp, false, false), J$.R(3087241, 'property', property, false, false), J$.F(3087289, J$.R(3087249, 'source', source, false, true), false)(J$.G(3087273, J$.R(3087257, 'tmp', tmp, false, false), J$.R(3087265, 'property', property, false, false)), J$.R(3087281, 'property', property, false, false)));
                                J$.F(3087321, J$.R(3087305, 'testFunc', testFunc, false, false), false)(J$.R(3087313, 'tmp', tmp, false, false));
                            }
                            param = J$.W(3087361, 'param', J$.F(3087353, J$.R(3087329, 'source', source, false, true), false)(J$.R(3087337, 'param', param, false, false), J$.R(3087345, 'rootMagicName', rootMagicName, false, true)), param, false, false);
                            J$.M(3087401, J$.I(typeof console === 'undefined' ? console = J$.R(3087369, 'console', undefined, true, true) : console = J$.R(3087369, 'console', console, true, true)), 'log', false)(J$.M(3087393, J$.R(3087377, 'tynt', tynt, false, true), 'Green', false)(J$.T(3087385, '[-]Running test with param tainted in root', 21, false)));
                            J$.F(3087425, J$.R(3087409, 'testFunc', testFunc, false, false), false)(J$.R(3087417, 'param', param, false, false));
                        } catch (J$e) {
                            J$.Ex(3089321, J$e);
                        } finally {
                            if (J$.Fr(3089329))
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
                            J$.Fe(3088185, arguments.callee, this, arguments);
                            arguments = J$.N(3088193, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3088201, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3088209, 'param', param, true, false, false);
                            J$.N(3088217, 'verifyPath', verifyPath, false, false, false);
                            J$.N(3088225, 'result', result, false, false, false);
                            J$.N(3088233, 'property', property, false, false, false);
                            J$.N(3088241, 'hipar_name', hipar_name, false, false, false);
                            J$.N(3088249, 'hipar_content', hipar_content, false, false, false);
                            J$.N(3088257, 'tmp', tmp, false, false, false);
                            testFileName = J$.W(3087545, 'testFileName', J$.M(3087537, J$.M(3087529, J$.G(3087513, J$.G(3087497, J$.I(typeof process === 'undefined' ? process = J$.R(3087489, 'process', undefined, true, true) : process = J$.R(3087489, 'process', process, true, true)), 'argv'), J$.T(3087505, 1, 22, false)), 'split', false)(J$.T(3087521, '/', 21, false)), 'pop', false)(), J$.I(typeof testFileName === 'undefined' ? undefined : testFileName), true, true);
                            var verifyPath = J$.W(3087601, 'verifyPath', J$.M(3087593, J$.R(3087553, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3087561, '__dirname', undefined, true, true) : __dirname = J$.R(3087561, '__dirname', __dirname, true, true)), J$.B(214722, '+', J$.B(214714, '+', J$.T(3087569, '../../outputs/hidden_attr/', 21, false), J$.I(typeof testFileName === 'undefined' ? testFileName = J$.R(3087577, 'testFileName', undefined, true, true) : testFileName = J$.R(3087577, 'testFileName', testFileName, true, true))), J$.T(3087585, 'on', 21, false))), verifyPath, false, false);
                            J$.M(3087625, J$.I(typeof console === 'undefined' ? console = J$.R(3087609, 'console', undefined, true, true) : console = J$.R(3087609, 'console', console, true, true)), 'log', false)(J$.R(3087617, 'verifyPath', verifyPath, false, false));
                            if (J$.C(152872, J$.M(3087649, J$.R(3087633, 'fs', fs, false, true), 'existsSync', false)(J$.R(3087641, 'verifyPath', verifyPath, false, false)))) {
                                J$.M(3087689, J$.I(typeof console === 'undefined' ? console = J$.R(3087657, 'console', undefined, true, true) : console = J$.R(3087657, 'console', console, true, true)), 'log', false)(J$.M(3087681, J$.R(3087665, 'tynt', tynt, false, true), 'Green', false)(J$.T(3087673, '[-]Verifying hidden Parameter', 21, false)));
                                var result = J$.W(3087737, 'result', J$.M(3087729, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3087697, 'JSON', undefined, true, true) : JSON = J$.R(3087697, 'JSON', JSON, true, true)), 'parse', false)(J$.M(3087721, J$.R(3087705, 'fs', fs, false, true), 'readFileSync', false)(J$.R(3087713, 'verifyPath', verifyPath, false, false))), result, false, false);
                                for (var property in J$.H(3088169, J$.R(3087745, 'result', result, false, false))) {
                                    J$.N(3088177, 'property', property, false, true, false);
                                    {
                                        {
                                            for (var hipar_name in J$.H(3088153, J$.G(3087769, J$.R(3087753, 'result', result, false, false), J$.R(3087761, 'property', property, false, false)))) {
                                                J$.N(3088161, 'hipar_name', hipar_name, false, true, false);
                                                {
                                                    {
                                                        var hipar_content = J$.W(3087817, 'hipar_content', J$.G(3087809, J$.G(3087793, J$.R(3087777, 'result', result, false, false), J$.R(3087785, 'property', property, false, false)), J$.R(3087801, 'hipar_name', hipar_name, false, false)), hipar_content, false, false);
                                                        var tmp = J$.W(3087849, 'tmp', J$.F(3087841, J$.R(3087825, 'clone', clone, false, true), false)(J$.R(3087833, 'param', param, false, false)), tmp, false, false);
                                                        if (J$.C(152864, J$.B(214730, '==', J$.R(3087857, 'property', property, false, false), J$.R(3087865, 'rootMagicName', rootMagicName, false, true))))
                                                            J$.P(3087897, J$.R(3087873, 'tmp', tmp, false, false), J$.R(3087881, 'hipar_name', hipar_name, false, false), J$.T(3087889, 'H1P4r', 21, false));
                                                        else
                                                            J$.P(3087945, J$.G(3087921, J$.R(3087905, 'tmp', tmp, false, false), J$.R(3087913, 'property', property, false, false)), J$.R(3087929, 'hipar_name', hipar_name, false, false), J$.T(3087937, 'H1P4r', 21, false));
                                                        J$.F(3088001, J$.R(3087953, 'verify_hipar', verify_hipar, false, true), false)(J$.G(3087969, J$.R(3087961, 'hipar_content', hipar_content, false, false), 'file'), J$.R(3087977, 'hipar_name', hipar_name, false, false), J$.G(3087993, J$.R(3087985, 'hipar_content', hipar_content, false, false), 'base'));
                                                        J$.M(3088025, J$.I(typeof console === 'undefined' ? console = J$.R(3088009, 'console', undefined, true, true) : console = J$.R(3088009, 'console', console, true, true)), 'log', false)(J$.R(3088017, 'tmp', tmp, false, false));
                                                        try {
                                                            J$.F(3088049, J$.R(3088033, 'testFunc', testFunc, false, false), false)(J$.R(3088041, 'tmp', tmp, false, false));
                                                        } catch (e) {
                                                            J$.N(3088145, 'e', e, false, false, true);
                                                            J$.M(3088097, J$.G(3088065, J$.I(typeof process === 'undefined' ? process = J$.R(3088057, 'process', undefined, true, true) : process = J$.R(3088057, 'process', process, true, true)), 'stdout'), 'write', false)(J$.M(3088089, J$.R(3088073, 'tynt', tynt, false, true), 'Red', false)(J$.T(3088081, '[Verify Error]:', 21, false)));
                                                            J$.M(3088137, J$.I(typeof console === 'undefined' ? console = J$.R(3088105, 'console', undefined, true, true) : console = J$.R(3088105, 'console', console, true, true)), 'log', false)(J$.M(3088129, J$.R(3088113, 'tynt', tynt, false, true), 'Red', false)(J$.R(3088121, 'e', e, false, false)));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(3089337, J$e);
                        } finally {
                            if (J$.Fr(3089345))
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
                            J$.Fe(3088281, arguments.callee, this, arguments);
                            arguments = J$.N(3088289, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3088297, 'source_var', source_var, true, false, false);
                            var_name = J$.N(3088305, 'var_name', var_name, true, false, false);
                            return J$.Rt(3088273, J$.R(3088265, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3089353, J$e);
                        } finally {
                            if (J$.Fr(3089361))
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
                            J$.Fe(3088329, arguments.callee, this, arguments);
                            arguments = J$.N(3088337, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3088345, 'source_var', source_var, true, false, false);
                            return J$.Rt(3088321, J$.R(3088313, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3089369, J$e);
                        } finally {
                            if (J$.Fr(3089377))
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
                            J$.Fe(3088857, arguments.callee, this, arguments);
                            arguments = J$.N(3088865, 'arguments', arguments, true, false, false);
                            obj = J$.N(3088873, 'obj', obj, true, false, false);
                            J$.N(3088881, 'copy', copy, false, false, false);
                            J$.N(3088889, 'i', i, false, false, false);
                            J$.N(3088897, 'len', len, false, false, false);
                            J$.N(3088905, 'attr', attr, false, false, false);
                            if (J$.C(152888, J$.C(152880, J$.B(214738, '==', J$.T(3088353, null, 25, false), J$.R(3088361, 'obj', obj, false, false))) ? J$._() : J$.B(214754, '!=', J$.T(3088369, 'object', 21, false), J$.U(214746, 'typeof', J$.R(3088377, 'obj', obj, false, false)))))
                                return J$.Rt(3088393, J$.R(3088385, 'obj', obj, false, false));
                            if (J$.C(152896, J$.B(214762, 'instanceof', J$.R(3088401, 'obj', obj, false, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(3088409, 'Date', undefined, true, true) : Date = J$.R(3088409, 'Date', Date, true, true))))) {
                                var copy = J$.W(3088433, 'copy', J$.F(3088425, J$.I(typeof Date === 'undefined' ? Date = J$.R(3088417, 'Date', undefined, true, true) : Date = J$.R(3088417, 'Date', Date, true, true)), true)(), copy, false, false);
                                J$.M(3088465, J$.R(3088441, 'copy', copy, false, false), 'setTime', false)(J$.M(3088457, J$.R(3088449, 'obj', obj, false, false), 'getTime', false)());
                                return J$.Rt(3088481, J$.R(3088473, 'copy', copy, false, false));
                            }
                            if (J$.C(152912, J$.B(214770, 'instanceof', J$.R(3088489, 'obj', obj, false, false), J$.I(typeof Array === 'undefined' ? Array = J$.R(3088497, 'Array', undefined, true, true) : Array = J$.R(3088497, 'Array', Array, true, true))))) {
                                var copy = J$.W(3088513, 'copy', J$.T(3088505, [], 10, false), copy, false, false);
                                for (var i = J$.W(3088545, 'i', J$.T(3088521, 0, 22, false), i, false, false), len = J$.W(3088553, 'len', J$.G(3088537, J$.R(3088529, 'obj', obj, false, false), 'length'), len, false, false); J$.C(152904, J$.B(214778, '<', J$.R(3088561, 'i', i, false, false), J$.R(3088569, 'len', len, false, false))); i = J$.W(3088585, 'i', J$.B(214794, '+', J$.U(214786, '+', J$.R(3088577, 'i', i, false, false)), 1), i, false, false)) {
                                    J$.P(3088649, J$.R(3088593, 'copy', copy, false, false), J$.R(3088601, 'i', i, false, false), J$.F(3088641, J$.R(3088609, 'clone', clone, false, true), false)(J$.G(3088633, J$.R(3088617, 'obj', obj, false, false), J$.R(3088625, 'i', i, false, false))));
                                }
                                return J$.Rt(3088665, J$.R(3088657, 'copy', copy, false, false));
                            }
                            if (J$.C(152928, J$.B(214802, 'instanceof', J$.R(3088673, 'obj', obj, false, false), J$.I(typeof Object === 'undefined' ? Object = J$.R(3088681, 'Object', undefined, true, true) : Object = J$.R(3088681, 'Object', Object, true, true))))) {
                                var copy = J$.W(3088697, 'copy', J$.T(3088689, {}, 11, false), copy, false, false);
                                for (var attr in J$.H(3088801, J$.R(3088705, 'obj', obj, false, false))) {
                                    J$.N(3088809, 'attr', attr, false, true, false);
                                    {
                                        {
                                            if (J$.C(152920, J$.M(3088729, J$.R(3088713, 'obj', obj, false, false), 'hasOwnProperty', false)(J$.R(3088721, 'attr', attr, false, false))))
                                                J$.P(3088793, J$.R(3088737, 'copy', copy, false, false), J$.R(3088745, 'attr', attr, false, false), J$.F(3088785, J$.R(3088753, 'clone', clone, false, true), false)(J$.G(3088777, J$.R(3088761, 'obj', obj, false, false), J$.R(3088769, 'attr', attr, false, false))));
                                        }
                                    }
                                }
                                return J$.Rt(3088825, J$.R(3088817, 'copy', copy, false, false));
                            }
                            throw J$.F(3088849, J$.I(typeof Error === 'undefined' ? Error = J$.R(3088833, 'Error', undefined, true, true) : Error = J$.R(3088833, 'Error', Error, true, true)), true)(J$.T(3088841, 'Unable to copy obj! Its type isn\'t supported.', 21, false));
                        } catch (J$e) {
                            J$.Ex(3089385, J$e);
                        } finally {
                            if (J$.Fr(3089393))
                                continue jalangiLabel12;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3089041, 'path', path, false, false, false);
            J$.N(3089049, 'tynt', tynt, false, false, false);
            J$.N(3089057, 'fs', fs, false, false, false);
            J$.N(3089065, 'rootMagicName', rootMagicName, false, false, false);
            J$.N(3089073, 'http', http, false, false, false);
            sendViaWebRequest = J$.N(3089089, 'sendViaWebRequest', J$.T(3089081, sendViaWebRequest, 12, false), true, false, false);
            entry = J$.N(3089105, 'entry', J$.T(3089097, entry, 12, false), true, false, false);
            loopProperty = J$.N(3089121, 'loopProperty', J$.T(3089113, loopProperty, 12, false), true, false, false);
            verifyHipar = J$.N(3089137, 'verifyHipar', J$.T(3089129, verifyHipar, 12, false), true, false, false);
            source = J$.N(3089153, 'source', J$.T(3089145, source, 12, false), true, false, false);
            verify_hipar = J$.N(3089169, 'verify_hipar', J$.T(3089161, verify_hipar, 12, false), true, false, false);
            clone = J$.N(3089185, 'clone', J$.T(3089177, clone, 12, false), true, false, false);
            var path = J$.W(3085521, 'path', J$.F(3085513, J$.I(typeof require === 'undefined' ? require = J$.R(3085497, 'require', undefined, true, true) : require = J$.R(3085497, 'require', require, true, true)), false)(J$.T(3085505, 'path', 21, false)), path, false, true);
            var tynt = J$.W(3085553, 'tynt', J$.F(3085545, J$.I(typeof require === 'undefined' ? require = J$.R(3085529, 'require', undefined, true, true) : require = J$.R(3085529, 'require', require, true, true)), false)(J$.T(3085537, 'tynt', 21, false)), tynt, false, true);
            var fs = J$.W(3085585, 'fs', J$.F(3085577, J$.I(typeof require === 'undefined' ? require = J$.R(3085561, 'require', undefined, true, true) : require = J$.R(3085561, 'require', require, true, true)), false)(J$.T(3085569, 'fs', 21, false)), fs, false, true);
            var rootMagicName = J$.W(3085601, 'rootMagicName', J$.T(3085593, 'R0ot', 21, false), rootMagicName, false, true);
            var http = J$.W(3085633, 'http', J$.F(3085625, J$.I(typeof require === 'undefined' ? require = J$.R(3085609, 'require', undefined, true, true) : require = J$.R(3085609, 'require', require, true, true)), false)(J$.T(3085617, 'http', 21, false)), http, false, true);
            J$.P(3088929, J$.I(typeof exports === 'undefined' ? exports = J$.R(3088913, 'exports', undefined, true, true) : exports = J$.R(3088913, 'exports', exports, true, true)), 'clone', J$.R(3088921, 'clone', clone, false, true));
            J$.P(3088953, J$.I(typeof exports === 'undefined' ? exports = J$.R(3088937, 'exports', undefined, true, true) : exports = J$.R(3088937, 'exports', exports, true, true)), 'loopProperty', J$.R(3088945, 'loopProperty', loopProperty, false, true));
            J$.P(3088977, J$.I(typeof exports === 'undefined' ? exports = J$.R(3088961, 'exports', undefined, true, true) : exports = J$.R(3088961, 'exports', exports, true, true)), 'verifyHipar', J$.R(3088969, 'verifyHipar', verifyHipar, false, true));
            J$.P(3089001, J$.I(typeof exports === 'undefined' ? exports = J$.R(3088985, 'exports', undefined, true, true) : exports = J$.R(3088985, 'exports', exports, true, true)), 'entry', J$.R(3088993, 'entry', entry, false, true));
            J$.P(3089025, J$.I(typeof exports === 'undefined' ? exports = J$.R(3089009, 'exports', undefined, true, true) : exports = J$.R(3089009, 'exports', exports, true, true)), 'sendViaWebRequest', J$.R(3089017, 'sendViaWebRequest', sendViaWebRequest, false, true));
        } catch (J$e) {
            J$.Ex(3089401, J$e);
        } finally {
            if (J$.Sr(3089409))
                continue jalangiLabel13;
            else
                break jalangiLabel13;
        }
    }
// JALANGI DO NOT INSTRUMENT

