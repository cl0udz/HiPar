J$.noInstrEval = false;
jalangiLabel13:
    while (true) {
        try {
            J$.Se(3783497, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestcaseUtils.js');
            function sendViaWebRequest(method, data, location, port, hostname) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(3781161, arguments.callee, this, arguments);
                            arguments = J$.N(3781169, 'arguments', arguments, true, false, false);
                            method = J$.N(3781177, 'method', method, true, false, false);
                            data = J$.N(3781185, 'data', data, true, false, false);
                            location = J$.N(3781193, 'location', location, true, false, false);
                            port = J$.N(3781201, 'port', port, true, false, false);
                            hostname = J$.N(3781209, 'hostname', hostname, true, false, false);
                            J$.N(3781217, 'http', http, false, false, false);
                            J$.N(3781225, 'content', content, false, false, false);
                            J$.N(3781233, 'options', options, false, false, false);
                            J$.N(3781241, 'req', req, false, false, false);
                            var http = J$.W(3780177, 'http', J$.F(3780169, J$.I(typeof require === 'undefined' ? require = J$.R(3780153, 'require', undefined, true, true) : require = J$.R(3780153, 'require', require, true, true)), false)(J$.T(3780161, 'http', 21, false)), http, false, false);
                            var content = J$.W(3780193, 'content', J$.R(3780185, 'data', data, false, false), content, false, false);
                            var options = J$.W(3780257, 'options', J$.T(3780249, {
                                hostname: J$.C(202440, J$.R(3780201, 'hostname', hostname, false, false)) ? J$._() : J$.T(3780209, '127.0.0.1', 21, false),
                                port: J$.R(3780217, 'port', port, false, false),
                                path: J$.C(202448, J$.R(3780225, 'location', location, false, false)) ? J$._() : J$.T(3780233, '/', 21, false),
                                method: J$.T(3780241, 'GET', 21, false)
                            }, 11, false), options, false, false);
                            if (J$.C(202456, J$.B(376426, '==', J$.R(3780265, 'method', method, false, false), J$.T(3780273, 'post', 21, false)))) {
                                J$.P(3780297, J$.R(3780281, 'options', options, false, false), 'method', J$.T(3780289, 'POST', 21, false));
                                J$.P(3780329, J$.R(3780305, 'options', options, false, false), 'headers', J$.T(3780321, { 'Content-Type': J$.T(3780313, 'application/json', 21, false) }, 11, false));
                                var req = J$.W(3780601, 'req', J$.M(3780593, J$.R(3780337, 'http', http, false, false), 'request', false)(J$.R(3780345, 'options', options, false, false), J$.T(3780585, function (res) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(3780561, arguments.callee, this, arguments);
                                                arguments = J$.N(3780569, 'arguments', arguments, true, false, false);
                                                res = J$.N(3780577, 'res', res, true, false, false);
                                                J$.M(3780385, J$.I(typeof console === 'undefined' ? console = J$.R(3780353, 'console', undefined, true, true) : console = J$.R(3780353, 'console', console, true, true)), 'log', false)(J$.B(376434, '+', J$.T(3780361, 'STATUS: ', 21, false), J$.G(3780377, J$.R(3780369, 'res', res, false, false), 'statusCode')));
                                                J$.M(3780441, J$.I(typeof console === 'undefined' ? console = J$.R(3780393, 'console', undefined, true, true) : console = J$.R(3780393, 'console', console, true, true)), 'log', false)(J$.B(376442, '+', J$.T(3780401, 'HEADERS: ', 21, false), J$.M(3780433, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3780409, 'JSON', undefined, true, true) : JSON = J$.R(3780409, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3780425, J$.R(3780417, 'res', res, false, false), 'headers'))));
                                                J$.M(3780465, J$.R(3780449, 'res', res, false, false), 'setEncoding', false)(J$.T(3780457, 'utf8', 21, false));
                                                J$.M(3780553, J$.R(3780473, 'res', res, false, false), 'on', false)(J$.T(3780481, 'data', 21, false), J$.T(3780545, function (chunk) {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3780521, arguments.callee, this, arguments);
                                                                arguments = J$.N(3780529, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3780537, 'chunk', chunk, true, false, false);
                                                                J$.M(3780513, J$.I(typeof console === 'undefined' ? console = J$.R(3780489, 'console', undefined, true, true) : console = J$.R(3780489, 'console', console, true, true)), 'log', false)(J$.B(376450, '+', J$.T(3780497, 'BODY: ', 21, false), J$.R(3780505, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3783657, J$e);
                                                            } finally {
                                                                if (J$.Fr(3783665))
                                                                    continue jalangiLabel0;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3783673, J$e);
                                            } finally {
                                                if (J$.Fr(3783681))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3780697, J$.R(3780609, 'req', req, false, false), 'on', false)(J$.T(3780617, 'error', 21, false), J$.T(3780689, function (e) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(3780665, arguments.callee, this, arguments);
                                                arguments = J$.N(3780673, 'arguments', arguments, true, false, false);
                                                e = J$.N(3780681, 'e', e, true, false, false);
                                                J$.M(3780657, J$.I(typeof console === 'undefined' ? console = J$.R(3780625, 'console', undefined, true, true) : console = J$.R(3780625, 'console', console, true, true)), 'log', false)(J$.B(376458, '+', J$.T(3780633, 'problem with request: ', 21, false), J$.G(3780649, J$.R(3780641, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3783689, J$e);
                                            } finally {
                                                if (J$.Fr(3783697))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3780721, J$.R(3780705, 'req', req, false, false), 'write', false)(J$.R(3780713, 'content', content, false, false));
                                J$.M(3780737, J$.R(3780729, 'req', req, false, false), 'end', false)();
                            } else {
                                J$.A(3780769, J$.R(3780745, 'options', options, false, false), 'location', '+')(J$.B(376466, '+', J$.T(3780753, '?', 21, false), J$.R(3780761, 'content', content, false, false)));
                                var req = J$.W(3781041, 'req', J$.M(3781033, J$.R(3780777, 'http', http, false, false), 'request', false)(J$.R(3780785, 'options', options, false, false), J$.T(3781025, function (res) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(3781001, arguments.callee, this, arguments);
                                                arguments = J$.N(3781009, 'arguments', arguments, true, false, false);
                                                res = J$.N(3781017, 'res', res, true, false, false);
                                                J$.M(3780825, J$.I(typeof console === 'undefined' ? console = J$.R(3780793, 'console', undefined, true, true) : console = J$.R(3780793, 'console', console, true, true)), 'log', false)(J$.B(376474, '+', J$.T(3780801, 'STATUS: ', 21, false), J$.G(3780817, J$.R(3780809, 'res', res, false, false), 'statusCode')));
                                                J$.M(3780881, J$.I(typeof console === 'undefined' ? console = J$.R(3780833, 'console', undefined, true, true) : console = J$.R(3780833, 'console', console, true, true)), 'log', false)(J$.B(376482, '+', J$.T(3780841, 'HEADERS: ', 21, false), J$.M(3780873, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3780849, 'JSON', undefined, true, true) : JSON = J$.R(3780849, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3780865, J$.R(3780857, 'res', res, false, false), 'headers'))));
                                                J$.M(3780905, J$.R(3780889, 'res', res, false, false), 'setEncoding', false)(J$.T(3780897, 'utf8', 21, false));
                                                J$.M(3780993, J$.R(3780913, 'res', res, false, false), 'on', false)(J$.T(3780921, 'data', 21, false), J$.T(3780985, function (chunk) {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3780961, arguments.callee, this, arguments);
                                                                arguments = J$.N(3780969, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3780977, 'chunk', chunk, true, false, false);
                                                                J$.M(3780953, J$.I(typeof console === 'undefined' ? console = J$.R(3780929, 'console', undefined, true, true) : console = J$.R(3780929, 'console', console, true, true)), 'log', false)(J$.B(376490, '+', J$.T(3780937, 'BODY: ', 21, false), J$.R(3780945, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3783705, J$e);
                                                            } finally {
                                                                if (J$.Fr(3783713))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3783721, J$e);
                                            } finally {
                                                if (J$.Fr(3783729))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3781137, J$.R(3781049, 'req', req, false, false), 'on', false)(J$.T(3781057, 'error', 21, false), J$.T(3781129, function (e) {
                                    jalangiLabel5:
                                        while (true) {
                                            try {
                                                J$.Fe(3781105, arguments.callee, this, arguments);
                                                arguments = J$.N(3781113, 'arguments', arguments, true, false, false);
                                                e = J$.N(3781121, 'e', e, true, false, false);
                                                J$.M(3781097, J$.I(typeof console === 'undefined' ? console = J$.R(3781065, 'console', undefined, true, true) : console = J$.R(3781065, 'console', console, true, true)), 'log', false)(J$.B(376498, '+', J$.T(3781073, 'problem with request: ', 21, false), J$.G(3781089, J$.R(3781081, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3783737, J$e);
                                            } finally {
                                                if (J$.Fr(3783745))
                                                    continue jalangiLabel5;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3781153, J$.R(3781145, 'req', req, false, false), 'end', false)();
                            }
                        } catch (J$e) {
                            J$.Ex(3783753, J$e);
                        } finally {
                            if (J$.Fr(3783761))
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
                            J$.Fe(3781473, arguments.callee, this, arguments);
                            arguments = J$.N(3781481, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3781489, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3781497, 'param', param, true, false, false);
                            ProjectDir = J$.N(3781505, 'ProjectDir', ProjectDir, true, false, false);
                            if (J$.C(202472, J$.B(376506, '==', J$.G(3781273, J$.G(3781257, J$.I(typeof process === 'undefined' ? process = J$.R(3781249, 'process', undefined, true, true) : process = J$.R(3781249, 'process', process, true, true)), 'argv'), J$.T(3781265, 2, 22, false)), J$.T(3781281, 'analysis', 21, false))))
                                J$.F(3781313, J$.R(3781289, 'loopProperty', loopProperty, false, true), false)(J$.R(3781297, 'testFunc', testFunc, false, false), J$.R(3781305, 'param', param, false, false));
                            else if (J$.C(202464, J$.B(376514, '==', J$.G(3781345, J$.G(3781329, J$.I(typeof process === 'undefined' ? process = J$.R(3781321, 'process', undefined, true, true) : process = J$.R(3781321, 'process', process, true, true)), 'argv'), J$.T(3781337, 2, 22, false)), J$.T(3781353, 'verify', 21, false))))
                                J$.F(3781393, J$.R(3781361, 'verifyHipar', verifyHipar, false, true), false)(J$.R(3781369, 'testFunc', testFunc, false, false), J$.R(3781377, 'param', param, false, false), J$.R(3781385, 'ProjectDir', ProjectDir, false, false));
                            else {
                                J$.M(3781433, J$.I(typeof console === 'undefined' ? console = J$.R(3781401, 'console', undefined, true, true) : console = J$.R(3781401, 'console', console, true, true)), 'log', false)(J$.M(3781425, J$.R(3781409, 'tynt', tynt, false, true), 'Red', false)(J$.T(3781417, 'Incorrect Prompt argumnet, we do analysis by default', 21, false)));
                                J$.F(3781465, J$.R(3781441, 'loopProperty', loopProperty, false, true), false)(J$.R(3781449, 'testFunc', testFunc, false, false), J$.R(3781457, 'param', param, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(3783769, J$e);
                        } finally {
                            if (J$.Fr(3783777))
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
                            J$.Fe(3781953, arguments.callee, this, arguments);
                            arguments = J$.N(3781961, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3781969, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3781977, 'param', param, true, false, false);
                            J$.N(3781985, 'properties', properties, false, false, false);
                            J$.N(3781993, 'property', property, false, false, false);
                            J$.N(3782001, 'tmp', tmp, false, false, false);
                            var properties = J$.W(3781537, 'properties', J$.M(3781529, J$.I(typeof Object === 'undefined' ? Object = J$.R(3781513, 'Object', undefined, true, true) : Object = J$.R(3781513, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.R(3781521, 'param', param, false, false)), properties, false, false);
                            J$.M(3781577, J$.I(typeof console === 'undefined' ? console = J$.R(3781545, 'console', undefined, true, true) : console = J$.R(3781545, 'console', console, true, true)), 'log', false)(J$.M(3781569, J$.R(3781553, 'tynt', tynt, false, true), 'Green', false)(J$.T(3781561, '[-]Running test with purely untainted param', 21, false)));
                            J$.F(3781601, J$.R(3781585, 'testFunc', testFunc, false, false), false)(J$.R(3781593, 'param', param, false, false));
                            if (J$.C(202480, J$.B(376530, '==', J$.U(376522, 'typeof', J$.R(3781609, 'param', param, false, false)), J$.T(3781617, 'string', 21, false))))
                                return J$.Rt(3781625, undefined);
                            J$.M(3781657, J$.I(typeof console === 'undefined' ? console = J$.R(3781633, 'console', undefined, true, true) : console = J$.R(3781633, 'console', console, true, true)), 'log', false)(J$.T(3781641, 'properties: ', 21, false), J$.R(3781649, 'properties', properties, false, false));
                            for (var property of J$.R(3781665, 'properties', properties, false, false)) {
                                J$.M(3781713, J$.I(typeof console === 'undefined' ? console = J$.R(3781673, 'console', undefined, true, true) : console = J$.R(3781673, 'console', console, true, true)), 'log', false)(J$.M(3781705, J$.R(3781681, 'tynt', tynt, false, true), 'Green', false)(J$.B(376538, '+', J$.T(3781689, '[-]Running test with tainted property: ', 21, false), J$.R(3781697, 'property', property, false, false))));
                                var tmp = J$.W(3781745, 'tmp', J$.F(3781737, J$.R(3781721, 'clone', clone, false, true), false)(J$.R(3781729, 'param', param, false, false)), tmp, false, false);
                                J$.P(3781817, J$.R(3781753, 'tmp', tmp, false, false), J$.R(3781761, 'property', property, false, false), J$.F(3781809, J$.R(3781769, 'source', source, false, true), false)(J$.G(3781793, J$.R(3781777, 'tmp', tmp, false, false), J$.R(3781785, 'property', property, false, false)), J$.R(3781801, 'property', property, false, false)));
                                J$.F(3781841, J$.R(3781825, 'testFunc', testFunc, false, false), false)(J$.R(3781833, 'tmp', tmp, false, false));
                            }
                            param = J$.W(3781881, 'param', J$.F(3781873, J$.R(3781849, 'source', source, false, true), false)(J$.R(3781857, 'param', param, false, false), J$.R(3781865, 'rootMagicName', rootMagicName, false, true)), param, false, false);
                            J$.M(3781921, J$.I(typeof console === 'undefined' ? console = J$.R(3781889, 'console', undefined, true, true) : console = J$.R(3781889, 'console', console, true, true)), 'log', false)(J$.M(3781913, J$.R(3781897, 'tynt', tynt, false, true), 'Green', false)(J$.T(3781905, '[-]Running test with param tainted in root', 21, false)));
                            J$.F(3781945, J$.R(3781929, 'testFunc', testFunc, false, false), false)(J$.R(3781937, 'param', param, false, false));
                        } catch (J$e) {
                            J$.Ex(3783785, J$e);
                        } finally {
                            if (J$.Fr(3783793))
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
                            J$.Fe(3782641, arguments.callee, this, arguments);
                            arguments = J$.N(3782649, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3782657, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3782665, 'param', param, true, false, false);
                            ProjectDir = J$.N(3782673, 'ProjectDir', ProjectDir, true, false, false);
                            J$.N(3782681, 'verifyPath', verifyPath, false, false, false);
                            J$.N(3782689, 'result', result, false, false, false);
                            J$.N(3782697, 'property', property, false, false, false);
                            J$.N(3782705, 'hipar_name', hipar_name, false, false, false);
                            J$.N(3782713, 'hipar_content', hipar_content, false, false, false);
                            J$.N(3782721, 'tmp', tmp, false, false, false);
                            var verifyPath = J$.W(3782081, 'verifyPath', J$.M(3782073, J$.R(3782009, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3782017, '__dirname', undefined, true, true) : __dirname = J$.R(3782017, '__dirname', __dirname, true, true)), J$.B(376554, '+', J$.B(376546, '+', J$.T(3782025, '../../outputs/hidden_attr/', 21, false), J$.M(3782057, J$.M(3782049, J$.R(3782033, 'ProjectDir', ProjectDir, false, false), 'split', false)(J$.T(3782041, '/', 21, false)), 'pop', false)()), J$.T(3782065, '.json', 21, false))), verifyPath, false, false);
                            if (J$.C(202496, J$.M(3782105, J$.R(3782089, 'fs', fs, false, true), 'existsSync', false)(J$.R(3782097, 'verifyPath', verifyPath, false, false)))) {
                                J$.M(3782145, J$.I(typeof console === 'undefined' ? console = J$.R(3782113, 'console', undefined, true, true) : console = J$.R(3782113, 'console', console, true, true)), 'log', false)(J$.M(3782137, J$.R(3782121, 'tynt', tynt, false, true), 'Green', false)(J$.T(3782129, '[-]Verifying hidden Parameter', 21, false)));
                                var result = J$.W(3782193, 'result', J$.M(3782185, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3782153, 'JSON', undefined, true, true) : JSON = J$.R(3782153, 'JSON', JSON, true, true)), 'parse', false)(J$.M(3782177, J$.R(3782161, 'fs', fs, false, true), 'readFileSync', false)(J$.R(3782169, 'verifyPath', verifyPath, false, false))), result, false, false);
                                for (var property in J$.H(3782625, J$.R(3782201, 'result', result, false, false))) {
                                    J$.N(3782633, 'property', property, false, true, false);
                                    {
                                        {
                                            for (var hipar_name in J$.H(3782609, J$.G(3782225, J$.R(3782209, 'result', result, false, false), J$.R(3782217, 'property', property, false, false)))) {
                                                J$.N(3782617, 'hipar_name', hipar_name, false, true, false);
                                                {
                                                    {
                                                        var hipar_content = J$.W(3782273, 'hipar_content', J$.G(3782265, J$.G(3782249, J$.R(3782233, 'result', result, false, false), J$.R(3782241, 'property', property, false, false)), J$.R(3782257, 'hipar_name', hipar_name, false, false)), hipar_content, false, false);
                                                        var tmp = J$.W(3782305, 'tmp', J$.F(3782297, J$.R(3782281, 'clone', clone, false, true), false)(J$.R(3782289, 'param', param, false, false)), tmp, false, false);
                                                        if (J$.C(202488, J$.B(376562, '==', J$.R(3782313, 'property', property, false, false), J$.R(3782321, 'rootMagicName', rootMagicName, false, true))))
                                                            J$.P(3782353, J$.R(3782329, 'tmp', tmp, false, false), J$.R(3782337, 'hipar_name', hipar_name, false, false), J$.T(3782345, 'H1P4r', 21, false));
                                                        else
                                                            J$.P(3782401, J$.G(3782377, J$.R(3782361, 'tmp', tmp, false, false), J$.R(3782369, 'property', property, false, false)), J$.R(3782385, 'hipar_name', hipar_name, false, false), J$.T(3782393, 'H1P4r', 21, false));
                                                        J$.F(3782457, J$.R(3782409, 'verify_hipar', verify_hipar, false, true), false)(J$.G(3782425, J$.R(3782417, 'hipar_content', hipar_content, false, false), 'file'), J$.R(3782433, 'hipar_name', hipar_name, false, false), J$.G(3782449, J$.R(3782441, 'hipar_content', hipar_content, false, false), 'base'));
                                                        J$.M(3782481, J$.I(typeof console === 'undefined' ? console = J$.R(3782465, 'console', undefined, true, true) : console = J$.R(3782465, 'console', console, true, true)), 'log', false)(J$.R(3782473, 'tmp', tmp, false, false));
                                                        try {
                                                            J$.F(3782505, J$.R(3782489, 'testFunc', testFunc, false, false), false)(J$.R(3782497, 'tmp', tmp, false, false));
                                                        } catch (e) {
                                                            J$.N(3782601, 'e', e, false, false, true);
                                                            J$.M(3782553, J$.G(3782521, J$.I(typeof process === 'undefined' ? process = J$.R(3782513, 'process', undefined, true, true) : process = J$.R(3782513, 'process', process, true, true)), 'stdout'), 'write', false)(J$.M(3782545, J$.R(3782529, 'tynt', tynt, false, true), 'Red', false)(J$.T(3782537, '[Verify Error]:', 21, false)));
                                                            J$.M(3782593, J$.I(typeof console === 'undefined' ? console = J$.R(3782561, 'console', undefined, true, true) : console = J$.R(3782561, 'console', console, true, true)), 'log', false)(J$.M(3782585, J$.R(3782569, 'tynt', tynt, false, true), 'Red', false)(J$.R(3782577, 'e', e, false, false)));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(3783801, J$e);
                        } finally {
                            if (J$.Fr(3783809))
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
                            J$.Fe(3782745, arguments.callee, this, arguments);
                            arguments = J$.N(3782753, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3782761, 'source_var', source_var, true, false, false);
                            var_name = J$.N(3782769, 'var_name', var_name, true, false, false);
                            return J$.Rt(3782737, J$.R(3782729, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3783817, J$e);
                        } finally {
                            if (J$.Fr(3783825))
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
                            J$.Fe(3782793, arguments.callee, this, arguments);
                            arguments = J$.N(3782801, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3782809, 'source_var', source_var, true, false, false);
                            return J$.Rt(3782785, J$.R(3782777, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3783833, J$e);
                        } finally {
                            if (J$.Fr(3783841))
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
                            J$.Fe(3783321, arguments.callee, this, arguments);
                            arguments = J$.N(3783329, 'arguments', arguments, true, false, false);
                            obj = J$.N(3783337, 'obj', obj, true, false, false);
                            J$.N(3783345, 'copy', copy, false, false, false);
                            J$.N(3783353, 'i', i, false, false, false);
                            J$.N(3783361, 'len', len, false, false, false);
                            J$.N(3783369, 'attr', attr, false, false, false);
                            if (J$.C(202512, J$.C(202504, J$.B(376570, '==', J$.T(3782817, null, 25, false), J$.R(3782825, 'obj', obj, false, false))) ? J$._() : J$.B(376586, '!=', J$.T(3782833, 'object', 21, false), J$.U(376578, 'typeof', J$.R(3782841, 'obj', obj, false, false)))))
                                return J$.Rt(3782857, J$.R(3782849, 'obj', obj, false, false));
                            if (J$.C(202520, J$.B(376594, 'instanceof', J$.R(3782865, 'obj', obj, false, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(3782873, 'Date', undefined, true, true) : Date = J$.R(3782873, 'Date', Date, true, true))))) {
                                var copy = J$.W(3782897, 'copy', J$.F(3782889, J$.I(typeof Date === 'undefined' ? Date = J$.R(3782881, 'Date', undefined, true, true) : Date = J$.R(3782881, 'Date', Date, true, true)), true)(), copy, false, false);
                                J$.M(3782929, J$.R(3782905, 'copy', copy, false, false), 'setTime', false)(J$.M(3782921, J$.R(3782913, 'obj', obj, false, false), 'getTime', false)());
                                return J$.Rt(3782945, J$.R(3782937, 'copy', copy, false, false));
                            }
                            if (J$.C(202536, J$.B(376602, 'instanceof', J$.R(3782953, 'obj', obj, false, false), J$.I(typeof Array === 'undefined' ? Array = J$.R(3782961, 'Array', undefined, true, true) : Array = J$.R(3782961, 'Array', Array, true, true))))) {
                                var copy = J$.W(3782977, 'copy', J$.T(3782969, [], 10, false), copy, false, false);
                                for (var i = J$.W(3783009, 'i', J$.T(3782985, 0, 22, false), i, false, false), len = J$.W(3783017, 'len', J$.G(3783001, J$.R(3782993, 'obj', obj, false, false), 'length'), len, false, false); J$.C(202528, J$.B(376610, '<', J$.R(3783025, 'i', i, false, false), J$.R(3783033, 'len', len, false, false))); i = J$.W(3783049, 'i', J$.B(376626, '+', J$.U(376618, '+', J$.R(3783041, 'i', i, false, false)), 1), i, false, false)) {
                                    J$.P(3783113, J$.R(3783057, 'copy', copy, false, false), J$.R(3783065, 'i', i, false, false), J$.F(3783105, J$.R(3783073, 'clone', clone, false, true), false)(J$.G(3783097, J$.R(3783081, 'obj', obj, false, false), J$.R(3783089, 'i', i, false, false))));
                                }
                                return J$.Rt(3783129, J$.R(3783121, 'copy', copy, false, false));
                            }
                            if (J$.C(202552, J$.B(376634, 'instanceof', J$.R(3783137, 'obj', obj, false, false), J$.I(typeof Object === 'undefined' ? Object = J$.R(3783145, 'Object', undefined, true, true) : Object = J$.R(3783145, 'Object', Object, true, true))))) {
                                var copy = J$.W(3783161, 'copy', J$.T(3783153, {}, 11, false), copy, false, false);
                                for (var attr in J$.H(3783265, J$.R(3783169, 'obj', obj, false, false))) {
                                    J$.N(3783273, 'attr', attr, false, true, false);
                                    {
                                        {
                                            if (J$.C(202544, J$.M(3783193, J$.R(3783177, 'obj', obj, false, false), 'hasOwnProperty', false)(J$.R(3783185, 'attr', attr, false, false))))
                                                J$.P(3783257, J$.R(3783201, 'copy', copy, false, false), J$.R(3783209, 'attr', attr, false, false), J$.F(3783249, J$.R(3783217, 'clone', clone, false, true), false)(J$.G(3783241, J$.R(3783225, 'obj', obj, false, false), J$.R(3783233, 'attr', attr, false, false))));
                                        }
                                    }
                                }
                                return J$.Rt(3783289, J$.R(3783281, 'copy', copy, false, false));
                            }
                            throw J$.F(3783313, J$.I(typeof Error === 'undefined' ? Error = J$.R(3783297, 'Error', undefined, true, true) : Error = J$.R(3783297, 'Error', Error, true, true)), true)(J$.T(3783305, 'Unable to copy obj! Its type isn\'t supported.', 21, false));
                        } catch (J$e) {
                            J$.Ex(3783849, J$e);
                        } finally {
                            if (J$.Fr(3783857))
                                continue jalangiLabel12;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3783505, 'path', path, false, false, false);
            J$.N(3783513, 'tynt', tynt, false, false, false);
            J$.N(3783521, 'fs', fs, false, false, false);
            J$.N(3783529, 'rootMagicName', rootMagicName, false, false, false);
            J$.N(3783537, 'http', http, false, false, false);
            sendViaWebRequest = J$.N(3783553, 'sendViaWebRequest', J$.T(3783545, sendViaWebRequest, 12, false), true, false, false);
            whatWeDoThisTime = J$.N(3783569, 'whatWeDoThisTime', J$.T(3783561, whatWeDoThisTime, 12, false), true, false, false);
            loopProperty = J$.N(3783585, 'loopProperty', J$.T(3783577, loopProperty, 12, false), true, false, false);
            verifyHipar = J$.N(3783601, 'verifyHipar', J$.T(3783593, verifyHipar, 12, false), true, false, false);
            source = J$.N(3783617, 'source', J$.T(3783609, source, 12, false), true, false, false);
            verify_hipar = J$.N(3783633, 'verify_hipar', J$.T(3783625, verify_hipar, 12, false), true, false, false);
            clone = J$.N(3783649, 'clone', J$.T(3783641, clone, 12, false), true, false, false);
            var path = J$.W(3780033, 'path', J$.F(3780025, J$.I(typeof require === 'undefined' ? require = J$.R(3780009, 'require', undefined, true, true) : require = J$.R(3780009, 'require', require, true, true)), false)(J$.T(3780017, 'path', 21, false)), path, false, true);
            var tynt = J$.W(3780065, 'tynt', J$.F(3780057, J$.I(typeof require === 'undefined' ? require = J$.R(3780041, 'require', undefined, true, true) : require = J$.R(3780041, 'require', require, true, true)), false)(J$.T(3780049, 'tynt', 21, false)), tynt, false, true);
            var fs = J$.W(3780097, 'fs', J$.F(3780089, J$.I(typeof require === 'undefined' ? require = J$.R(3780073, 'require', undefined, true, true) : require = J$.R(3780073, 'require', require, true, true)), false)(J$.T(3780081, 'fs', 21, false)), fs, false, true);
            var rootMagicName = J$.W(3780113, 'rootMagicName', J$.T(3780105, 'R0ot', 21, false), rootMagicName, false, true);
            var http = J$.W(3780145, 'http', J$.F(3780137, J$.I(typeof require === 'undefined' ? require = J$.R(3780121, 'require', undefined, true, true) : require = J$.R(3780121, 'require', require, true, true)), false)(J$.T(3780129, 'http', 21, false)), http, false, true);
            J$.P(3783393, J$.I(typeof exports === 'undefined' ? exports = J$.R(3783377, 'exports', undefined, true, true) : exports = J$.R(3783377, 'exports', exports, true, true)), 'clone', J$.R(3783385, 'clone', clone, false, true));
            J$.P(3783417, J$.I(typeof exports === 'undefined' ? exports = J$.R(3783401, 'exports', undefined, true, true) : exports = J$.R(3783401, 'exports', exports, true, true)), 'loopProperty', J$.R(3783409, 'loopProperty', loopProperty, false, true));
            J$.P(3783441, J$.I(typeof exports === 'undefined' ? exports = J$.R(3783425, 'exports', undefined, true, true) : exports = J$.R(3783425, 'exports', exports, true, true)), 'verifyHipar', J$.R(3783433, 'verifyHipar', verifyHipar, false, true));
            J$.P(3783465, J$.I(typeof exports === 'undefined' ? exports = J$.R(3783449, 'exports', undefined, true, true) : exports = J$.R(3783449, 'exports', exports, true, true)), 'whatWeDoThisTime', J$.R(3783457, 'whatWeDoThisTime', whatWeDoThisTime, false, true));
            J$.P(3783489, J$.I(typeof exports === 'undefined' ? exports = J$.R(3783473, 'exports', undefined, true, true) : exports = J$.R(3783473, 'exports', exports, true, true)), 'sendViaWebRequest', J$.R(3783481, 'sendViaWebRequest', sendViaWebRequest, false, true));
        } catch (J$e) {
            J$.Ex(3783865, J$e);
        } finally {
            if (J$.Sr(3783873))
                continue jalangiLabel13;
            else
                break jalangiLabel13;
        }
    }
// JALANGI DO NOT INSTRUMENT

