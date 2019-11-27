J$.noInstrEval = false;
jalangiLabel13:
    while (true) {
        try {
            J$.Se(7463745, '/home/james/nodejs/HiPar/outputs/target_cache/TestcaseUtils.js');
            function sendViaWebRequest(method, data, location, port, hostname) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(7461409, arguments.callee, this, arguments);
                            arguments = J$.N(7461417, 'arguments', arguments, true, false, false);
                            method = J$.N(7461425, 'method', method, true, false, false);
                            data = J$.N(7461433, 'data', data, true, false, false);
                            location = J$.N(7461441, 'location', location, true, false, false);
                            port = J$.N(7461449, 'port', port, true, false, false);
                            hostname = J$.N(7461457, 'hostname', hostname, true, false, false);
                            J$.N(7461465, 'http', http, false, false, false);
                            J$.N(7461473, 'content', content, false, false, false);
                            J$.N(7461481, 'options', options, false, false, false);
                            J$.N(7461489, 'req', req, false, false, false);
                            var http = J$.W(7460425, 'http', J$.F(7460417, J$.I(typeof require === 'undefined' ? require = J$.R(7460401, 'require', undefined, true, true) : require = J$.R(7460401, 'require', require, true, true)), false)(J$.T(7460409, 'http', 21, false)), http, false, false);
                            var content = J$.W(7460441, 'content', J$.R(7460433, 'data', data, false, false), content, false, false);
                            var options = J$.W(7460505, 'options', J$.T(7460497, {
                                hostname: J$.C(395112, J$.R(7460449, 'hostname', hostname, false, false)) ? J$._() : J$.T(7460457, '127.0.0.1', 21, false),
                                port: J$.R(7460465, 'port', port, false, false),
                                path: J$.C(395120, J$.R(7460473, 'location', location, false, false)) ? J$._() : J$.T(7460481, '/', 21, false),
                                method: J$.T(7460489, 'GET', 21, false)
                            }, 11, false), options, false, false);
                            if (J$.C(395128, J$.B(717810, '==', J$.R(7460513, 'method', method, false, false), J$.T(7460521, 'post', 21, false)))) {
                                J$.P(7460545, J$.R(7460529, 'options', options, false, false), 'method', J$.T(7460537, 'POST', 21, false));
                                J$.P(7460577, J$.R(7460553, 'options', options, false, false), 'headers', J$.T(7460569, { 'Content-Type': J$.T(7460561, 'application/json', 21, false) }, 11, false));
                                var req = J$.W(7460849, 'req', J$.M(7460841, J$.R(7460585, 'http', http, false, false), 'request', false)(J$.R(7460593, 'options', options, false, false), J$.T(7460833, function (res) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(7460809, arguments.callee, this, arguments);
                                                arguments = J$.N(7460817, 'arguments', arguments, true, false, false);
                                                res = J$.N(7460825, 'res', res, true, false, false);
                                                J$.M(7460633, J$.I(typeof console === 'undefined' ? console = J$.R(7460601, 'console', undefined, true, true) : console = J$.R(7460601, 'console', console, true, true)), 'log', false)(J$.B(717818, '+', J$.T(7460609, 'STATUS: ', 21, false), J$.G(7460625, J$.R(7460617, 'res', res, false, false), 'statusCode')));
                                                J$.M(7460689, J$.I(typeof console === 'undefined' ? console = J$.R(7460641, 'console', undefined, true, true) : console = J$.R(7460641, 'console', console, true, true)), 'log', false)(J$.B(717826, '+', J$.T(7460649, 'HEADERS: ', 21, false), J$.M(7460681, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(7460657, 'JSON', undefined, true, true) : JSON = J$.R(7460657, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(7460673, J$.R(7460665, 'res', res, false, false), 'headers'))));
                                                J$.M(7460713, J$.R(7460697, 'res', res, false, false), 'setEncoding', false)(J$.T(7460705, 'utf8', 21, false));
                                                J$.M(7460801, J$.R(7460721, 'res', res, false, false), 'on', false)(J$.T(7460729, 'data', 21, false), J$.T(7460793, function (chunk) {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(7460769, arguments.callee, this, arguments);
                                                                arguments = J$.N(7460777, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(7460785, 'chunk', chunk, true, false, false);
                                                                J$.M(7460761, J$.I(typeof console === 'undefined' ? console = J$.R(7460737, 'console', undefined, true, true) : console = J$.R(7460737, 'console', console, true, true)), 'log', false)(J$.B(717834, '+', J$.T(7460745, 'BODY: ', 21, false), J$.R(7460753, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(7463905, J$e);
                                                            } finally {
                                                                if (J$.Fr(7463913))
                                                                    continue jalangiLabel0;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(7463921, J$e);
                                            } finally {
                                                if (J$.Fr(7463929))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(7460945, J$.R(7460857, 'req', req, false, false), 'on', false)(J$.T(7460865, 'error', 21, false), J$.T(7460937, function (e) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(7460913, arguments.callee, this, arguments);
                                                arguments = J$.N(7460921, 'arguments', arguments, true, false, false);
                                                e = J$.N(7460929, 'e', e, true, false, false);
                                                J$.M(7460905, J$.I(typeof console === 'undefined' ? console = J$.R(7460873, 'console', undefined, true, true) : console = J$.R(7460873, 'console', console, true, true)), 'log', false)(J$.B(717842, '+', J$.T(7460881, 'problem with request: ', 21, false), J$.G(7460897, J$.R(7460889, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(7463937, J$e);
                                            } finally {
                                                if (J$.Fr(7463945))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(7460969, J$.R(7460953, 'req', req, false, false), 'write', false)(J$.R(7460961, 'content', content, false, false));
                                J$.M(7460985, J$.R(7460977, 'req', req, false, false), 'end', false)();
                            } else {
                                J$.A(7461017, J$.R(7460993, 'options', options, false, false), 'location', '+')(J$.B(717850, '+', J$.T(7461001, '?', 21, false), J$.R(7461009, 'content', content, false, false)));
                                var req = J$.W(7461289, 'req', J$.M(7461281, J$.R(7461025, 'http', http, false, false), 'request', false)(J$.R(7461033, 'options', options, false, false), J$.T(7461273, function (res) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(7461249, arguments.callee, this, arguments);
                                                arguments = J$.N(7461257, 'arguments', arguments, true, false, false);
                                                res = J$.N(7461265, 'res', res, true, false, false);
                                                J$.M(7461073, J$.I(typeof console === 'undefined' ? console = J$.R(7461041, 'console', undefined, true, true) : console = J$.R(7461041, 'console', console, true, true)), 'log', false)(J$.B(717858, '+', J$.T(7461049, 'STATUS: ', 21, false), J$.G(7461065, J$.R(7461057, 'res', res, false, false), 'statusCode')));
                                                J$.M(7461129, J$.I(typeof console === 'undefined' ? console = J$.R(7461081, 'console', undefined, true, true) : console = J$.R(7461081, 'console', console, true, true)), 'log', false)(J$.B(717866, '+', J$.T(7461089, 'HEADERS: ', 21, false), J$.M(7461121, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(7461097, 'JSON', undefined, true, true) : JSON = J$.R(7461097, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(7461113, J$.R(7461105, 'res', res, false, false), 'headers'))));
                                                J$.M(7461153, J$.R(7461137, 'res', res, false, false), 'setEncoding', false)(J$.T(7461145, 'utf8', 21, false));
                                                J$.M(7461241, J$.R(7461161, 'res', res, false, false), 'on', false)(J$.T(7461169, 'data', 21, false), J$.T(7461233, function (chunk) {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(7461209, arguments.callee, this, arguments);
                                                                arguments = J$.N(7461217, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(7461225, 'chunk', chunk, true, false, false);
                                                                J$.M(7461201, J$.I(typeof console === 'undefined' ? console = J$.R(7461177, 'console', undefined, true, true) : console = J$.R(7461177, 'console', console, true, true)), 'log', false)(J$.B(717874, '+', J$.T(7461185, 'BODY: ', 21, false), J$.R(7461193, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(7463953, J$e);
                                                            } finally {
                                                                if (J$.Fr(7463961))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(7463969, J$e);
                                            } finally {
                                                if (J$.Fr(7463977))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(7461385, J$.R(7461297, 'req', req, false, false), 'on', false)(J$.T(7461305, 'error', 21, false), J$.T(7461377, function (e) {
                                    jalangiLabel5:
                                        while (true) {
                                            try {
                                                J$.Fe(7461353, arguments.callee, this, arguments);
                                                arguments = J$.N(7461361, 'arguments', arguments, true, false, false);
                                                e = J$.N(7461369, 'e', e, true, false, false);
                                                J$.M(7461345, J$.I(typeof console === 'undefined' ? console = J$.R(7461313, 'console', undefined, true, true) : console = J$.R(7461313, 'console', console, true, true)), 'log', false)(J$.B(717882, '+', J$.T(7461321, 'problem with request: ', 21, false), J$.G(7461337, J$.R(7461329, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(7463985, J$e);
                                            } finally {
                                                if (J$.Fr(7463993))
                                                    continue jalangiLabel5;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(7461401, J$.R(7461393, 'req', req, false, false), 'end', false)();
                            }
                        } catch (J$e) {
                            J$.Ex(7464001, J$e);
                        } finally {
                            if (J$.Fr(7464009))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function whatWeDoThisTime(testFunc, param, ProjectDir) {
                jalangiLabel7:
                    while (true) {
                        try {
                            J$.Fe(7461721, arguments.callee, this, arguments);
                            arguments = J$.N(7461729, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(7461737, 'testFunc', testFunc, true, false, false);
                            param = J$.N(7461745, 'param', param, true, false, false);
                            ProjectDir = J$.N(7461753, 'ProjectDir', ProjectDir, true, false, false);
                            if (J$.C(395144, J$.B(717890, '==', J$.G(7461521, J$.G(7461505, J$.I(typeof process === 'undefined' ? process = J$.R(7461497, 'process', undefined, true, true) : process = J$.R(7461497, 'process', process, true, true)), 'argv'), J$.T(7461513, 2, 22, false)), J$.T(7461529, 'analysis', 21, false))))
                                J$.F(7461561, J$.R(7461537, 'loopProperty', loopProperty, false, true), false)(J$.R(7461545, 'testFunc', testFunc, false, false), J$.R(7461553, 'param', param, false, false));
                            else if (J$.C(395136, J$.B(717898, '==', J$.G(7461593, J$.G(7461577, J$.I(typeof process === 'undefined' ? process = J$.R(7461569, 'process', undefined, true, true) : process = J$.R(7461569, 'process', process, true, true)), 'argv'), J$.T(7461585, 2, 22, false)), J$.T(7461601, 'verify', 21, false))))
                                J$.F(7461641, J$.R(7461609, 'verifyHipar', verifyHipar, false, true), false)(J$.R(7461617, 'testFunc', testFunc, false, false), J$.R(7461625, 'param', param, false, false), J$.R(7461633, 'ProjectDir', ProjectDir, false, false));
                            else {
                                J$.M(7461681, J$.I(typeof console === 'undefined' ? console = J$.R(7461649, 'console', undefined, true, true) : console = J$.R(7461649, 'console', console, true, true)), 'log', false)(J$.M(7461673, J$.R(7461657, 'tynt', tynt, false, true), 'Red', false)(J$.T(7461665, 'Incorrect Prompt argumnet, we do analysis by default', 21, false)));
                                J$.F(7461713, J$.R(7461689, 'loopProperty', loopProperty, false, true), false)(J$.R(7461697, 'testFunc', testFunc, false, false), J$.R(7461705, 'param', param, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(7464017, J$e);
                        } finally {
                            if (J$.Fr(7464025))
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
                            J$.Fe(7462201, arguments.callee, this, arguments);
                            arguments = J$.N(7462209, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(7462217, 'testFunc', testFunc, true, false, false);
                            param = J$.N(7462225, 'param', param, true, false, false);
                            J$.N(7462233, 'properties', properties, false, false, false);
                            J$.N(7462241, 'property', property, false, false, false);
                            J$.N(7462249, 'tmp', tmp, false, false, false);
                            var properties = J$.W(7461785, 'properties', J$.M(7461777, J$.I(typeof Object === 'undefined' ? Object = J$.R(7461761, 'Object', undefined, true, true) : Object = J$.R(7461761, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.R(7461769, 'param', param, false, false)), properties, false, false);
                            J$.M(7461825, J$.I(typeof console === 'undefined' ? console = J$.R(7461793, 'console', undefined, true, true) : console = J$.R(7461793, 'console', console, true, true)), 'log', false)(J$.M(7461817, J$.R(7461801, 'tynt', tynt, false, true), 'Green', false)(J$.T(7461809, '[-]Running test with purely untainted param', 21, false)));
                            J$.F(7461849, J$.R(7461833, 'testFunc', testFunc, false, false), false)(J$.R(7461841, 'param', param, false, false));
                            if (J$.C(395152, J$.B(717914, '==', J$.U(717906, 'typeof', J$.R(7461857, 'param', param, false, false)), J$.T(7461865, 'string', 21, false))))
                                return J$.Rt(7461873, undefined);
                            J$.M(7461905, J$.I(typeof console === 'undefined' ? console = J$.R(7461881, 'console', undefined, true, true) : console = J$.R(7461881, 'console', console, true, true)), 'log', false)(J$.T(7461889, 'properties: ', 21, false), J$.R(7461897, 'properties', properties, false, false));
                            for (var property of J$.R(7461913, 'properties', properties, false, false)) {
                                J$.M(7461961, J$.I(typeof console === 'undefined' ? console = J$.R(7461921, 'console', undefined, true, true) : console = J$.R(7461921, 'console', console, true, true)), 'log', false)(J$.M(7461953, J$.R(7461929, 'tynt', tynt, false, true), 'Green', false)(J$.B(717922, '+', J$.T(7461937, '[-]Running test with tainted property: ', 21, false), J$.R(7461945, 'property', property, false, false))));
                                var tmp = J$.W(7461993, 'tmp', J$.F(7461985, J$.R(7461969, 'clone', clone, false, true), false)(J$.R(7461977, 'param', param, false, false)), tmp, false, false);
                                J$.P(7462065, J$.R(7462001, 'tmp', tmp, false, false), J$.R(7462009, 'property', property, false, false), J$.F(7462057, J$.R(7462017, 'source', source, false, true), false)(J$.G(7462041, J$.R(7462025, 'tmp', tmp, false, false), J$.R(7462033, 'property', property, false, false)), J$.R(7462049, 'property', property, false, false)));
                                J$.F(7462089, J$.R(7462073, 'testFunc', testFunc, false, false), false)(J$.R(7462081, 'tmp', tmp, false, false));
                            }
                            param = J$.W(7462129, 'param', J$.F(7462121, J$.R(7462097, 'source', source, false, true), false)(J$.R(7462105, 'param', param, false, false), J$.R(7462113, 'rootMagicName', rootMagicName, false, true)), param, false, false);
                            J$.M(7462169, J$.I(typeof console === 'undefined' ? console = J$.R(7462137, 'console', undefined, true, true) : console = J$.R(7462137, 'console', console, true, true)), 'log', false)(J$.M(7462161, J$.R(7462145, 'tynt', tynt, false, true), 'Green', false)(J$.T(7462153, '[-]Running test with param tainted in root', 21, false)));
                            J$.F(7462193, J$.R(7462177, 'testFunc', testFunc, false, false), false)(J$.R(7462185, 'param', param, false, false));
                        } catch (J$e) {
                            J$.Ex(7464033, J$e);
                        } finally {
                            if (J$.Fr(7464041))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function verifyHipar(testFunc, param, ProjectDir) {
                jalangiLabel9:
                    while (true) {
                        try {
                            J$.Fe(7462889, arguments.callee, this, arguments);
                            arguments = J$.N(7462897, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(7462905, 'testFunc', testFunc, true, false, false);
                            param = J$.N(7462913, 'param', param, true, false, false);
                            ProjectDir = J$.N(7462921, 'ProjectDir', ProjectDir, true, false, false);
                            J$.N(7462929, 'verifyPath', verifyPath, false, false, false);
                            J$.N(7462937, 'result', result, false, false, false);
                            J$.N(7462945, 'property', property, false, false, false);
                            J$.N(7462953, 'hipar_name', hipar_name, false, false, false);
                            J$.N(7462961, 'hipar_content', hipar_content, false, false, false);
                            J$.N(7462969, 'tmp', tmp, false, false, false);
                            var verifyPath = J$.W(7462329, 'verifyPath', J$.M(7462321, J$.R(7462257, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(7462265, '__dirname', undefined, true, true) : __dirname = J$.R(7462265, '__dirname', __dirname, true, true)), J$.B(717938, '+', J$.B(717930, '+', J$.T(7462273, '../../outputs/hidden_attr/', 21, false), J$.M(7462305, J$.M(7462297, J$.R(7462281, 'ProjectDir', ProjectDir, false, false), 'split', false)(J$.T(7462289, '/', 21, false)), 'pop', false)()), J$.T(7462313, '.json', 21, false))), verifyPath, false, false);
                            if (J$.C(395168, J$.M(7462353, J$.R(7462337, 'fs', fs, false, true), 'existsSync', false)(J$.R(7462345, 'verifyPath', verifyPath, false, false)))) {
                                J$.M(7462393, J$.I(typeof console === 'undefined' ? console = J$.R(7462361, 'console', undefined, true, true) : console = J$.R(7462361, 'console', console, true, true)), 'log', false)(J$.M(7462385, J$.R(7462369, 'tynt', tynt, false, true), 'Green', false)(J$.T(7462377, '[-]Verifying hidden Parameter', 21, false)));
                                var result = J$.W(7462441, 'result', J$.M(7462433, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(7462401, 'JSON', undefined, true, true) : JSON = J$.R(7462401, 'JSON', JSON, true, true)), 'parse', false)(J$.M(7462425, J$.R(7462409, 'fs', fs, false, true), 'readFileSync', false)(J$.R(7462417, 'verifyPath', verifyPath, false, false))), result, false, false);
                                for (var property in J$.H(7462873, J$.R(7462449, 'result', result, false, false))) {
                                    J$.N(7462881, 'property', property, false, true, false);
                                    {
                                        {
                                            for (var hipar_name in J$.H(7462857, J$.G(7462473, J$.R(7462457, 'result', result, false, false), J$.R(7462465, 'property', property, false, false)))) {
                                                J$.N(7462865, 'hipar_name', hipar_name, false, true, false);
                                                {
                                                    {
                                                        var hipar_content = J$.W(7462521, 'hipar_content', J$.G(7462513, J$.G(7462497, J$.R(7462481, 'result', result, false, false), J$.R(7462489, 'property', property, false, false)), J$.R(7462505, 'hipar_name', hipar_name, false, false)), hipar_content, false, false);
                                                        var tmp = J$.W(7462553, 'tmp', J$.F(7462545, J$.R(7462529, 'clone', clone, false, true), false)(J$.R(7462537, 'param', param, false, false)), tmp, false, false);
                                                        if (J$.C(395160, J$.B(717946, '==', J$.R(7462561, 'property', property, false, false), J$.R(7462569, 'rootMagicName', rootMagicName, false, true))))
                                                            J$.P(7462601, J$.R(7462577, 'tmp', tmp, false, false), J$.R(7462585, 'hipar_name', hipar_name, false, false), J$.T(7462593, 'H1P4r', 21, false));
                                                        else
                                                            J$.P(7462649, J$.G(7462625, J$.R(7462609, 'tmp', tmp, false, false), J$.R(7462617, 'property', property, false, false)), J$.R(7462633, 'hipar_name', hipar_name, false, false), J$.T(7462641, 'H1P4r', 21, false));
                                                        J$.F(7462705, J$.R(7462657, 'verify_hipar', verify_hipar, false, true), false)(J$.G(7462673, J$.R(7462665, 'hipar_content', hipar_content, false, false), 'file'), J$.R(7462681, 'hipar_name', hipar_name, false, false), J$.G(7462697, J$.R(7462689, 'hipar_content', hipar_content, false, false), 'base'));
                                                        J$.M(7462729, J$.I(typeof console === 'undefined' ? console = J$.R(7462713, 'console', undefined, true, true) : console = J$.R(7462713, 'console', console, true, true)), 'log', false)(J$.R(7462721, 'tmp', tmp, false, false));
                                                        try {
                                                            J$.F(7462753, J$.R(7462737, 'testFunc', testFunc, false, false), false)(J$.R(7462745, 'tmp', tmp, false, false));
                                                        } catch (e) {
                                                            J$.N(7462849, 'e', e, false, false, true);
                                                            J$.M(7462801, J$.G(7462769, J$.I(typeof process === 'undefined' ? process = J$.R(7462761, 'process', undefined, true, true) : process = J$.R(7462761, 'process', process, true, true)), 'stdout'), 'write', false)(J$.M(7462793, J$.R(7462777, 'tynt', tynt, false, true), 'Red', false)(J$.T(7462785, '[Verify Error]:', 21, false)));
                                                            J$.M(7462841, J$.I(typeof console === 'undefined' ? console = J$.R(7462809, 'console', undefined, true, true) : console = J$.R(7462809, 'console', console, true, true)), 'log', false)(J$.M(7462833, J$.R(7462817, 'tynt', tynt, false, true), 'Red', false)(J$.R(7462825, 'e', e, false, false)));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(7464049, J$e);
                        } finally {
                            if (J$.Fr(7464057))
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
                            J$.Fe(7462993, arguments.callee, this, arguments);
                            arguments = J$.N(7463001, 'arguments', arguments, true, false, false);
                            source_var = J$.N(7463009, 'source_var', source_var, true, false, false);
                            var_name = J$.N(7463017, 'var_name', var_name, true, false, false);
                            return J$.Rt(7462985, J$.R(7462977, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(7464065, J$e);
                        } finally {
                            if (J$.Fr(7464073))
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
                            J$.Fe(7463041, arguments.callee, this, arguments);
                            arguments = J$.N(7463049, 'arguments', arguments, true, false, false);
                            source_var = J$.N(7463057, 'source_var', source_var, true, false, false);
                            return J$.Rt(7463033, J$.R(7463025, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(7464081, J$e);
                        } finally {
                            if (J$.Fr(7464089))
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
                            J$.Fe(7463569, arguments.callee, this, arguments);
                            arguments = J$.N(7463577, 'arguments', arguments, true, false, false);
                            obj = J$.N(7463585, 'obj', obj, true, false, false);
                            J$.N(7463593, 'copy', copy, false, false, false);
                            J$.N(7463601, 'i', i, false, false, false);
                            J$.N(7463609, 'len', len, false, false, false);
                            J$.N(7463617, 'attr', attr, false, false, false);
                            if (J$.C(395184, J$.C(395176, J$.B(717954, '==', J$.T(7463065, null, 25, false), J$.R(7463073, 'obj', obj, false, false))) ? J$._() : J$.B(717970, '!=', J$.T(7463081, 'object', 21, false), J$.U(717962, 'typeof', J$.R(7463089, 'obj', obj, false, false)))))
                                return J$.Rt(7463105, J$.R(7463097, 'obj', obj, false, false));
                            if (J$.C(395192, J$.B(717978, 'instanceof', J$.R(7463113, 'obj', obj, false, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(7463121, 'Date', undefined, true, true) : Date = J$.R(7463121, 'Date', Date, true, true))))) {
                                var copy = J$.W(7463145, 'copy', J$.F(7463137, J$.I(typeof Date === 'undefined' ? Date = J$.R(7463129, 'Date', undefined, true, true) : Date = J$.R(7463129, 'Date', Date, true, true)), true)(), copy, false, false);
                                J$.M(7463177, J$.R(7463153, 'copy', copy, false, false), 'setTime', false)(J$.M(7463169, J$.R(7463161, 'obj', obj, false, false), 'getTime', false)());
                                return J$.Rt(7463193, J$.R(7463185, 'copy', copy, false, false));
                            }
                            if (J$.C(395208, J$.B(717986, 'instanceof', J$.R(7463201, 'obj', obj, false, false), J$.I(typeof Array === 'undefined' ? Array = J$.R(7463209, 'Array', undefined, true, true) : Array = J$.R(7463209, 'Array', Array, true, true))))) {
                                var copy = J$.W(7463225, 'copy', J$.T(7463217, [], 10, false), copy, false, false);
                                for (var i = J$.W(7463257, 'i', J$.T(7463233, 0, 22, false), i, false, false), len = J$.W(7463265, 'len', J$.G(7463249, J$.R(7463241, 'obj', obj, false, false), 'length'), len, false, false); J$.C(395200, J$.B(717994, '<', J$.R(7463273, 'i', i, false, false), J$.R(7463281, 'len', len, false, false))); i = J$.W(7463297, 'i', J$.B(718010, '+', J$.U(718002, '+', J$.R(7463289, 'i', i, false, false)), 1), i, false, false)) {
                                    J$.P(7463361, J$.R(7463305, 'copy', copy, false, false), J$.R(7463313, 'i', i, false, false), J$.F(7463353, J$.R(7463321, 'clone', clone, false, true), false)(J$.G(7463345, J$.R(7463329, 'obj', obj, false, false), J$.R(7463337, 'i', i, false, false))));
                                }
                                return J$.Rt(7463377, J$.R(7463369, 'copy', copy, false, false));
                            }
                            if (J$.C(395224, J$.B(718018, 'instanceof', J$.R(7463385, 'obj', obj, false, false), J$.I(typeof Object === 'undefined' ? Object = J$.R(7463393, 'Object', undefined, true, true) : Object = J$.R(7463393, 'Object', Object, true, true))))) {
                                var copy = J$.W(7463409, 'copy', J$.T(7463401, {}, 11, false), copy, false, false);
                                for (var attr in J$.H(7463513, J$.R(7463417, 'obj', obj, false, false))) {
                                    J$.N(7463521, 'attr', attr, false, true, false);
                                    {
                                        {
                                            if (J$.C(395216, J$.M(7463441, J$.R(7463425, 'obj', obj, false, false), 'hasOwnProperty', false)(J$.R(7463433, 'attr', attr, false, false))))
                                                J$.P(7463505, J$.R(7463449, 'copy', copy, false, false), J$.R(7463457, 'attr', attr, false, false), J$.F(7463497, J$.R(7463465, 'clone', clone, false, true), false)(J$.G(7463489, J$.R(7463473, 'obj', obj, false, false), J$.R(7463481, 'attr', attr, false, false))));
                                        }
                                    }
                                }
                                return J$.Rt(7463537, J$.R(7463529, 'copy', copy, false, false));
                            }
                            throw J$.F(7463561, J$.I(typeof Error === 'undefined' ? Error = J$.R(7463545, 'Error', undefined, true, true) : Error = J$.R(7463545, 'Error', Error, true, true)), true)(J$.T(7463553, 'Unable to copy obj! Its type isn\'t supported.', 21, false));
                        } catch (J$e) {
                            J$.Ex(7464097, J$e);
                        } finally {
                            if (J$.Fr(7464105))
                                continue jalangiLabel12;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(7463753, 'path', path, false, false, false);
            J$.N(7463761, 'tynt', tynt, false, false, false);
            J$.N(7463769, 'fs', fs, false, false, false);
            J$.N(7463777, 'rootMagicName', rootMagicName, false, false, false);
            J$.N(7463785, 'http', http, false, false, false);
            sendViaWebRequest = J$.N(7463801, 'sendViaWebRequest', J$.T(7463793, sendViaWebRequest, 12, false), true, false, false);
            whatWeDoThisTime = J$.N(7463817, 'whatWeDoThisTime', J$.T(7463809, whatWeDoThisTime, 12, false), true, false, false);
            loopProperty = J$.N(7463833, 'loopProperty', J$.T(7463825, loopProperty, 12, false), true, false, false);
            verifyHipar = J$.N(7463849, 'verifyHipar', J$.T(7463841, verifyHipar, 12, false), true, false, false);
            source = J$.N(7463865, 'source', J$.T(7463857, source, 12, false), true, false, false);
            verify_hipar = J$.N(7463881, 'verify_hipar', J$.T(7463873, verify_hipar, 12, false), true, false, false);
            clone = J$.N(7463897, 'clone', J$.T(7463889, clone, 12, false), true, false, false);
            var path = J$.W(7460281, 'path', J$.F(7460273, J$.I(typeof require === 'undefined' ? require = J$.R(7460257, 'require', undefined, true, true) : require = J$.R(7460257, 'require', require, true, true)), false)(J$.T(7460265, 'path', 21, false)), path, false, true);
            var tynt = J$.W(7460313, 'tynt', J$.F(7460305, J$.I(typeof require === 'undefined' ? require = J$.R(7460289, 'require', undefined, true, true) : require = J$.R(7460289, 'require', require, true, true)), false)(J$.T(7460297, 'tynt', 21, false)), tynt, false, true);
            var fs = J$.W(7460345, 'fs', J$.F(7460337, J$.I(typeof require === 'undefined' ? require = J$.R(7460321, 'require', undefined, true, true) : require = J$.R(7460321, 'require', require, true, true)), false)(J$.T(7460329, 'fs', 21, false)), fs, false, true);
            var rootMagicName = J$.W(7460361, 'rootMagicName', J$.T(7460353, 'R0ot', 21, false), rootMagicName, false, true);
            var http = J$.W(7460393, 'http', J$.F(7460385, J$.I(typeof require === 'undefined' ? require = J$.R(7460369, 'require', undefined, true, true) : require = J$.R(7460369, 'require', require, true, true)), false)(J$.T(7460377, 'http', 21, false)), http, false, true);
            J$.P(7463641, J$.I(typeof exports === 'undefined' ? exports = J$.R(7463625, 'exports', undefined, true, true) : exports = J$.R(7463625, 'exports', exports, true, true)), 'clone', J$.R(7463633, 'clone', clone, false, true));
            J$.P(7463665, J$.I(typeof exports === 'undefined' ? exports = J$.R(7463649, 'exports', undefined, true, true) : exports = J$.R(7463649, 'exports', exports, true, true)), 'loopProperty', J$.R(7463657, 'loopProperty', loopProperty, false, true));
            J$.P(7463689, J$.I(typeof exports === 'undefined' ? exports = J$.R(7463673, 'exports', undefined, true, true) : exports = J$.R(7463673, 'exports', exports, true, true)), 'verifyHipar', J$.R(7463681, 'verifyHipar', verifyHipar, false, true));
            J$.P(7463713, J$.I(typeof exports === 'undefined' ? exports = J$.R(7463697, 'exports', undefined, true, true) : exports = J$.R(7463697, 'exports', exports, true, true)), 'whatWeDoThisTime', J$.R(7463705, 'whatWeDoThisTime', whatWeDoThisTime, false, true));
            J$.P(7463737, J$.I(typeof exports === 'undefined' ? exports = J$.R(7463721, 'exports', undefined, true, true) : exports = J$.R(7463721, 'exports', exports, true, true)), 'sendViaWebRequest', J$.R(7463729, 'sendViaWebRequest', sendViaWebRequest, false, true));
        } catch (J$e) {
            J$.Ex(7464113, J$e);
        } finally {
            if (J$.Sr(7464121))
                continue jalangiLabel13;
            else
                break jalangiLabel13;
        }
    }
// JALANGI DO NOT INSTRUMENT

