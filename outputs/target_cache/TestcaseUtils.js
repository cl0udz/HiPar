J$.noInstrEval = false;
jalangiLabel13:
    while (true) {
        try {
            J$.Se(3915257, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestcaseUtils.js');
            function sendViaWebRequest(method, data, location, port, hostname) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(3912921, arguments.callee, this, arguments);
                            arguments = J$.N(3912929, 'arguments', arguments, true, false, false);
                            method = J$.N(3912937, 'method', method, true, false, false);
                            data = J$.N(3912945, 'data', data, true, false, false);
                            location = J$.N(3912953, 'location', location, true, false, false);
                            port = J$.N(3912961, 'port', port, true, false, false);
                            hostname = J$.N(3912969, 'hostname', hostname, true, false, false);
                            J$.N(3912977, 'http', http, false, false, false);
                            J$.N(3912985, 'content', content, false, false, false);
                            J$.N(3912993, 'options', options, false, false, false);
                            J$.N(3913001, 'req', req, false, false, false);
                            var http = J$.W(3911937, 'http', J$.F(3911929, J$.I(typeof require === 'undefined' ? require = J$.R(3911913, 'require', undefined, true, true) : require = J$.R(3911913, 'require', require, true, true)), false)(J$.T(3911921, 'http', 21, false)), http, false, false);
                            var content = J$.W(3911953, 'content', J$.R(3911945, 'data', data, false, false), content, false, false);
                            var options = J$.W(3912017, 'options', J$.T(3912009, {
                                hostname: J$.C(206016, J$.R(3911961, 'hostname', hostname, false, false)) ? J$._() : J$.T(3911969, '127.0.0.1', 21, false),
                                port: J$.R(3911977, 'port', port, false, false),
                                path: J$.C(206024, J$.R(3911985, 'location', location, false, false)) ? J$._() : J$.T(3911993, '/', 21, false),
                                method: J$.T(3912001, 'GET', 21, false)
                            }, 11, false), options, false, false);
                            if (J$.C(206032, J$.B(382722, '==', J$.R(3912025, 'method', method, false, false), J$.T(3912033, 'post', 21, false)))) {
                                J$.P(3912057, J$.R(3912041, 'options', options, false, false), 'method', J$.T(3912049, 'POST', 21, false));
                                J$.P(3912089, J$.R(3912065, 'options', options, false, false), 'headers', J$.T(3912081, { 'Content-Type': J$.T(3912073, 'application/json', 21, false) }, 11, false));
                                var req = J$.W(3912361, 'req', J$.M(3912353, J$.R(3912097, 'http', http, false, false), 'request', false)(J$.R(3912105, 'options', options, false, false), J$.T(3912345, function (res) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(3912321, arguments.callee, this, arguments);
                                                arguments = J$.N(3912329, 'arguments', arguments, true, false, false);
                                                res = J$.N(3912337, 'res', res, true, false, false);
                                                J$.M(3912145, J$.I(typeof console === 'undefined' ? console = J$.R(3912113, 'console', undefined, true, true) : console = J$.R(3912113, 'console', console, true, true)), 'log', false)(J$.B(382730, '+', J$.T(3912121, 'STATUS: ', 21, false), J$.G(3912137, J$.R(3912129, 'res', res, false, false), 'statusCode')));
                                                J$.M(3912201, J$.I(typeof console === 'undefined' ? console = J$.R(3912153, 'console', undefined, true, true) : console = J$.R(3912153, 'console', console, true, true)), 'log', false)(J$.B(382738, '+', J$.T(3912161, 'HEADERS: ', 21, false), J$.M(3912193, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3912169, 'JSON', undefined, true, true) : JSON = J$.R(3912169, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3912185, J$.R(3912177, 'res', res, false, false), 'headers'))));
                                                J$.M(3912225, J$.R(3912209, 'res', res, false, false), 'setEncoding', false)(J$.T(3912217, 'utf8', 21, false));
                                                J$.M(3912313, J$.R(3912233, 'res', res, false, false), 'on', false)(J$.T(3912241, 'data', 21, false), J$.T(3912305, function (chunk) {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3912281, arguments.callee, this, arguments);
                                                                arguments = J$.N(3912289, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3912297, 'chunk', chunk, true, false, false);
                                                                J$.M(3912273, J$.I(typeof console === 'undefined' ? console = J$.R(3912249, 'console', undefined, true, true) : console = J$.R(3912249, 'console', console, true, true)), 'log', false)(J$.B(382746, '+', J$.T(3912257, 'BODY: ', 21, false), J$.R(3912265, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3915417, J$e);
                                                            } finally {
                                                                if (J$.Fr(3915425))
                                                                    continue jalangiLabel0;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3915433, J$e);
                                            } finally {
                                                if (J$.Fr(3915441))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3912457, J$.R(3912369, 'req', req, false, false), 'on', false)(J$.T(3912377, 'error', 21, false), J$.T(3912449, function (e) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(3912425, arguments.callee, this, arguments);
                                                arguments = J$.N(3912433, 'arguments', arguments, true, false, false);
                                                e = J$.N(3912441, 'e', e, true, false, false);
                                                J$.M(3912417, J$.I(typeof console === 'undefined' ? console = J$.R(3912385, 'console', undefined, true, true) : console = J$.R(3912385, 'console', console, true, true)), 'log', false)(J$.B(382754, '+', J$.T(3912393, 'problem with request: ', 21, false), J$.G(3912409, J$.R(3912401, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3915449, J$e);
                                            } finally {
                                                if (J$.Fr(3915457))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3912481, J$.R(3912465, 'req', req, false, false), 'write', false)(J$.R(3912473, 'content', content, false, false));
                                J$.M(3912497, J$.R(3912489, 'req', req, false, false), 'end', false)();
                            } else {
                                J$.A(3912529, J$.R(3912505, 'options', options, false, false), 'location', '+')(J$.B(382762, '+', J$.T(3912513, '?', 21, false), J$.R(3912521, 'content', content, false, false)));
                                var req = J$.W(3912801, 'req', J$.M(3912793, J$.R(3912537, 'http', http, false, false), 'request', false)(J$.R(3912545, 'options', options, false, false), J$.T(3912785, function (res) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(3912761, arguments.callee, this, arguments);
                                                arguments = J$.N(3912769, 'arguments', arguments, true, false, false);
                                                res = J$.N(3912777, 'res', res, true, false, false);
                                                J$.M(3912585, J$.I(typeof console === 'undefined' ? console = J$.R(3912553, 'console', undefined, true, true) : console = J$.R(3912553, 'console', console, true, true)), 'log', false)(J$.B(382770, '+', J$.T(3912561, 'STATUS: ', 21, false), J$.G(3912577, J$.R(3912569, 'res', res, false, false), 'statusCode')));
                                                J$.M(3912641, J$.I(typeof console === 'undefined' ? console = J$.R(3912593, 'console', undefined, true, true) : console = J$.R(3912593, 'console', console, true, true)), 'log', false)(J$.B(382778, '+', J$.T(3912601, 'HEADERS: ', 21, false), J$.M(3912633, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3912609, 'JSON', undefined, true, true) : JSON = J$.R(3912609, 'JSON', JSON, true, true)), 'stringify', false)(J$.G(3912625, J$.R(3912617, 'res', res, false, false), 'headers'))));
                                                J$.M(3912665, J$.R(3912649, 'res', res, false, false), 'setEncoding', false)(J$.T(3912657, 'utf8', 21, false));
                                                J$.M(3912753, J$.R(3912673, 'res', res, false, false), 'on', false)(J$.T(3912681, 'data', 21, false), J$.T(3912745, function (chunk) {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(3912721, arguments.callee, this, arguments);
                                                                arguments = J$.N(3912729, 'arguments', arguments, true, false, false);
                                                                chunk = J$.N(3912737, 'chunk', chunk, true, false, false);
                                                                J$.M(3912713, J$.I(typeof console === 'undefined' ? console = J$.R(3912689, 'console', undefined, true, true) : console = J$.R(3912689, 'console', console, true, true)), 'log', false)(J$.B(382786, '+', J$.T(3912697, 'BODY: ', 21, false), J$.R(3912705, 'chunk', chunk, false, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(3915465, J$e);
                                                            } finally {
                                                                if (J$.Fr(3915473))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false));
                                            } catch (J$e) {
                                                J$.Ex(3915481, J$e);
                                            } finally {
                                                if (J$.Fr(3915489))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false)), req, false, false);
                                J$.M(3912897, J$.R(3912809, 'req', req, false, false), 'on', false)(J$.T(3912817, 'error', 21, false), J$.T(3912889, function (e) {
                                    jalangiLabel5:
                                        while (true) {
                                            try {
                                                J$.Fe(3912865, arguments.callee, this, arguments);
                                                arguments = J$.N(3912873, 'arguments', arguments, true, false, false);
                                                e = J$.N(3912881, 'e', e, true, false, false);
                                                J$.M(3912857, J$.I(typeof console === 'undefined' ? console = J$.R(3912825, 'console', undefined, true, true) : console = J$.R(3912825, 'console', console, true, true)), 'log', false)(J$.B(382794, '+', J$.T(3912833, 'problem with request: ', 21, false), J$.G(3912849, J$.R(3912841, 'e', e, false, false), 'message')));
                                            } catch (J$e) {
                                                J$.Ex(3915497, J$e);
                                            } finally {
                                                if (J$.Fr(3915505))
                                                    continue jalangiLabel5;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false));
                                J$.M(3912913, J$.R(3912905, 'req', req, false, false), 'end', false)();
                            }
                        } catch (J$e) {
                            J$.Ex(3915513, J$e);
                        } finally {
                            if (J$.Fr(3915521))
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
                            J$.Fe(3913233, arguments.callee, this, arguments);
                            arguments = J$.N(3913241, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3913249, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3913257, 'param', param, true, false, false);
                            ProjectDir = J$.N(3913265, 'ProjectDir', ProjectDir, true, false, false);
                            if (J$.C(206048, J$.B(382802, '==', J$.G(3913033, J$.G(3913017, J$.I(typeof process === 'undefined' ? process = J$.R(3913009, 'process', undefined, true, true) : process = J$.R(3913009, 'process', process, true, true)), 'argv'), J$.T(3913025, 2, 22, false)), J$.T(3913041, 'analysis', 21, false))))
                                J$.F(3913073, J$.R(3913049, 'loopProperty', loopProperty, false, true), false)(J$.R(3913057, 'testFunc', testFunc, false, false), J$.R(3913065, 'param', param, false, false));
                            else if (J$.C(206040, J$.B(382810, '==', J$.G(3913105, J$.G(3913089, J$.I(typeof process === 'undefined' ? process = J$.R(3913081, 'process', undefined, true, true) : process = J$.R(3913081, 'process', process, true, true)), 'argv'), J$.T(3913097, 2, 22, false)), J$.T(3913113, 'verify', 21, false))))
                                J$.F(3913153, J$.R(3913121, 'verifyHipar', verifyHipar, false, true), false)(J$.R(3913129, 'testFunc', testFunc, false, false), J$.R(3913137, 'param', param, false, false), J$.R(3913145, 'ProjectDir', ProjectDir, false, false));
                            else {
                                J$.M(3913193, J$.I(typeof console === 'undefined' ? console = J$.R(3913161, 'console', undefined, true, true) : console = J$.R(3913161, 'console', console, true, true)), 'log', false)(J$.M(3913185, J$.R(3913169, 'tynt', tynt, false, true), 'Red', false)(J$.T(3913177, 'Incorrect Prompt argumnet, we do analysis by default', 21, false)));
                                J$.F(3913225, J$.R(3913201, 'loopProperty', loopProperty, false, true), false)(J$.R(3913209, 'testFunc', testFunc, false, false), J$.R(3913217, 'param', param, false, false));
                            }
                        } catch (J$e) {
                            J$.Ex(3915529, J$e);
                        } finally {
                            if (J$.Fr(3915537))
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
                            J$.Fe(3913713, arguments.callee, this, arguments);
                            arguments = J$.N(3913721, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3913729, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3913737, 'param', param, true, false, false);
                            J$.N(3913745, 'properties', properties, false, false, false);
                            J$.N(3913753, 'property', property, false, false, false);
                            J$.N(3913761, 'tmp', tmp, false, false, false);
                            var properties = J$.W(3913297, 'properties', J$.M(3913289, J$.I(typeof Object === 'undefined' ? Object = J$.R(3913273, 'Object', undefined, true, true) : Object = J$.R(3913273, 'Object', Object, true, true)), 'getOwnPropertyNames', false)(J$.R(3913281, 'param', param, false, false)), properties, false, false);
                            J$.M(3913337, J$.I(typeof console === 'undefined' ? console = J$.R(3913305, 'console', undefined, true, true) : console = J$.R(3913305, 'console', console, true, true)), 'log', false)(J$.M(3913329, J$.R(3913313, 'tynt', tynt, false, true), 'Green', false)(J$.T(3913321, '[-]Running test with purely untainted param', 21, false)));
                            J$.F(3913361, J$.R(3913345, 'testFunc', testFunc, false, false), false)(J$.R(3913353, 'param', param, false, false));
                            if (J$.C(206056, J$.B(382826, '==', J$.U(382818, 'typeof', J$.R(3913369, 'param', param, false, false)), J$.T(3913377, 'string', 21, false))))
                                return J$.Rt(3913385, undefined);
                            J$.M(3913417, J$.I(typeof console === 'undefined' ? console = J$.R(3913393, 'console', undefined, true, true) : console = J$.R(3913393, 'console', console, true, true)), 'log', false)(J$.T(3913401, 'properties: ', 21, false), J$.R(3913409, 'properties', properties, false, false));
                            for (var property of J$.R(3913425, 'properties', properties, false, false)) {
                                J$.M(3913473, J$.I(typeof console === 'undefined' ? console = J$.R(3913433, 'console', undefined, true, true) : console = J$.R(3913433, 'console', console, true, true)), 'log', false)(J$.M(3913465, J$.R(3913441, 'tynt', tynt, false, true), 'Green', false)(J$.B(382834, '+', J$.T(3913449, '[-]Running test with tainted property: ', 21, false), J$.R(3913457, 'property', property, false, false))));
                                var tmp = J$.W(3913505, 'tmp', J$.F(3913497, J$.R(3913481, 'clone', clone, false, true), false)(J$.R(3913489, 'param', param, false, false)), tmp, false, false);
                                J$.P(3913577, J$.R(3913513, 'tmp', tmp, false, false), J$.R(3913521, 'property', property, false, false), J$.F(3913569, J$.R(3913529, 'source', source, false, true), false)(J$.G(3913553, J$.R(3913537, 'tmp', tmp, false, false), J$.R(3913545, 'property', property, false, false)), J$.R(3913561, 'property', property, false, false)));
                                J$.F(3913601, J$.R(3913585, 'testFunc', testFunc, false, false), false)(J$.R(3913593, 'tmp', tmp, false, false));
                            }
                            param = J$.W(3913641, 'param', J$.F(3913633, J$.R(3913609, 'source', source, false, true), false)(J$.R(3913617, 'param', param, false, false), J$.R(3913625, 'rootMagicName', rootMagicName, false, true)), param, false, false);
                            J$.M(3913681, J$.I(typeof console === 'undefined' ? console = J$.R(3913649, 'console', undefined, true, true) : console = J$.R(3913649, 'console', console, true, true)), 'log', false)(J$.M(3913673, J$.R(3913657, 'tynt', tynt, false, true), 'Green', false)(J$.T(3913665, '[-]Running test with param tainted in root', 21, false)));
                            J$.F(3913705, J$.R(3913689, 'testFunc', testFunc, false, false), false)(J$.R(3913697, 'param', param, false, false));
                        } catch (J$e) {
                            J$.Ex(3915545, J$e);
                        } finally {
                            if (J$.Fr(3915553))
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
                            J$.Fe(3914401, arguments.callee, this, arguments);
                            arguments = J$.N(3914409, 'arguments', arguments, true, false, false);
                            testFunc = J$.N(3914417, 'testFunc', testFunc, true, false, false);
                            param = J$.N(3914425, 'param', param, true, false, false);
                            ProjectDir = J$.N(3914433, 'ProjectDir', ProjectDir, true, false, false);
                            J$.N(3914441, 'verifyPath', verifyPath, false, false, false);
                            J$.N(3914449, 'result', result, false, false, false);
                            J$.N(3914457, 'property', property, false, false, false);
                            J$.N(3914465, 'hipar_name', hipar_name, false, false, false);
                            J$.N(3914473, 'hipar_content', hipar_content, false, false, false);
                            J$.N(3914481, 'tmp', tmp, false, false, false);
                            var verifyPath = J$.W(3913841, 'verifyPath', J$.M(3913833, J$.R(3913769, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(3913777, '__dirname', undefined, true, true) : __dirname = J$.R(3913777, '__dirname', __dirname, true, true)), J$.B(382850, '+', J$.B(382842, '+', J$.T(3913785, '../../outputs/hidden_attr/', 21, false), J$.M(3913817, J$.M(3913809, J$.R(3913793, 'ProjectDir', ProjectDir, false, false), 'split', false)(J$.T(3913801, '/', 21, false)), 'pop', false)()), J$.T(3913825, '.json', 21, false))), verifyPath, false, false);
                            if (J$.C(206072, J$.M(3913865, J$.R(3913849, 'fs', fs, false, true), 'existsSync', false)(J$.R(3913857, 'verifyPath', verifyPath, false, false)))) {
                                J$.M(3913905, J$.I(typeof console === 'undefined' ? console = J$.R(3913873, 'console', undefined, true, true) : console = J$.R(3913873, 'console', console, true, true)), 'log', false)(J$.M(3913897, J$.R(3913881, 'tynt', tynt, false, true), 'Green', false)(J$.T(3913889, '[-]Verifying hidden Parameter', 21, false)));
                                var result = J$.W(3913953, 'result', J$.M(3913945, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(3913913, 'JSON', undefined, true, true) : JSON = J$.R(3913913, 'JSON', JSON, true, true)), 'parse', false)(J$.M(3913937, J$.R(3913921, 'fs', fs, false, true), 'readFileSync', false)(J$.R(3913929, 'verifyPath', verifyPath, false, false))), result, false, false);
                                for (var property in J$.H(3914385, J$.R(3913961, 'result', result, false, false))) {
                                    J$.N(3914393, 'property', property, false, true, false);
                                    {
                                        {
                                            for (var hipar_name in J$.H(3914369, J$.G(3913985, J$.R(3913969, 'result', result, false, false), J$.R(3913977, 'property', property, false, false)))) {
                                                J$.N(3914377, 'hipar_name', hipar_name, false, true, false);
                                                {
                                                    {
                                                        var hipar_content = J$.W(3914033, 'hipar_content', J$.G(3914025, J$.G(3914009, J$.R(3913993, 'result', result, false, false), J$.R(3914001, 'property', property, false, false)), J$.R(3914017, 'hipar_name', hipar_name, false, false)), hipar_content, false, false);
                                                        var tmp = J$.W(3914065, 'tmp', J$.F(3914057, J$.R(3914041, 'clone', clone, false, true), false)(J$.R(3914049, 'param', param, false, false)), tmp, false, false);
                                                        if (J$.C(206064, J$.B(382858, '==', J$.R(3914073, 'property', property, false, false), J$.R(3914081, 'rootMagicName', rootMagicName, false, true))))
                                                            J$.P(3914113, J$.R(3914089, 'tmp', tmp, false, false), J$.R(3914097, 'hipar_name', hipar_name, false, false), J$.T(3914105, 'H1P4r', 21, false));
                                                        else
                                                            J$.P(3914161, J$.G(3914137, J$.R(3914121, 'tmp', tmp, false, false), J$.R(3914129, 'property', property, false, false)), J$.R(3914145, 'hipar_name', hipar_name, false, false), J$.T(3914153, 'H1P4r', 21, false));
                                                        J$.F(3914217, J$.R(3914169, 'verify_hipar', verify_hipar, false, true), false)(J$.G(3914185, J$.R(3914177, 'hipar_content', hipar_content, false, false), 'file'), J$.R(3914193, 'hipar_name', hipar_name, false, false), J$.G(3914209, J$.R(3914201, 'hipar_content', hipar_content, false, false), 'base'));
                                                        J$.M(3914241, J$.I(typeof console === 'undefined' ? console = J$.R(3914225, 'console', undefined, true, true) : console = J$.R(3914225, 'console', console, true, true)), 'log', false)(J$.R(3914233, 'tmp', tmp, false, false));
                                                        try {
                                                            J$.F(3914265, J$.R(3914249, 'testFunc', testFunc, false, false), false)(J$.R(3914257, 'tmp', tmp, false, false));
                                                        } catch (e) {
                                                            J$.N(3914361, 'e', e, false, false, true);
                                                            J$.M(3914313, J$.G(3914281, J$.I(typeof process === 'undefined' ? process = J$.R(3914273, 'process', undefined, true, true) : process = J$.R(3914273, 'process', process, true, true)), 'stdout'), 'write', false)(J$.M(3914305, J$.R(3914289, 'tynt', tynt, false, true), 'Red', false)(J$.T(3914297, '[Verify Error]:', 21, false)));
                                                            J$.M(3914353, J$.I(typeof console === 'undefined' ? console = J$.R(3914321, 'console', undefined, true, true) : console = J$.R(3914321, 'console', console, true, true)), 'log', false)(J$.M(3914345, J$.R(3914329, 'tynt', tynt, false, true), 'Red', false)(J$.R(3914337, 'e', e, false, false)));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(3915561, J$e);
                        } finally {
                            if (J$.Fr(3915569))
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
                            J$.Fe(3914505, arguments.callee, this, arguments);
                            arguments = J$.N(3914513, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3914521, 'source_var', source_var, true, false, false);
                            var_name = J$.N(3914529, 'var_name', var_name, true, false, false);
                            return J$.Rt(3914497, J$.R(3914489, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3915577, J$e);
                        } finally {
                            if (J$.Fr(3915585))
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
                            J$.Fe(3914553, arguments.callee, this, arguments);
                            arguments = J$.N(3914561, 'arguments', arguments, true, false, false);
                            source_var = J$.N(3914569, 'source_var', source_var, true, false, false);
                            return J$.Rt(3914545, J$.R(3914537, 'source_var', source_var, false, false));
                        } catch (J$e) {
                            J$.Ex(3915593, J$e);
                        } finally {
                            if (J$.Fr(3915601))
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
                            J$.Fe(3915081, arguments.callee, this, arguments);
                            arguments = J$.N(3915089, 'arguments', arguments, true, false, false);
                            obj = J$.N(3915097, 'obj', obj, true, false, false);
                            J$.N(3915105, 'copy', copy, false, false, false);
                            J$.N(3915113, 'i', i, false, false, false);
                            J$.N(3915121, 'len', len, false, false, false);
                            J$.N(3915129, 'attr', attr, false, false, false);
                            if (J$.C(206088, J$.C(206080, J$.B(382866, '==', J$.T(3914577, null, 25, false), J$.R(3914585, 'obj', obj, false, false))) ? J$._() : J$.B(382882, '!=', J$.T(3914593, 'object', 21, false), J$.U(382874, 'typeof', J$.R(3914601, 'obj', obj, false, false)))))
                                return J$.Rt(3914617, J$.R(3914609, 'obj', obj, false, false));
                            if (J$.C(206096, J$.B(382890, 'instanceof', J$.R(3914625, 'obj', obj, false, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(3914633, 'Date', undefined, true, true) : Date = J$.R(3914633, 'Date', Date, true, true))))) {
                                var copy = J$.W(3914657, 'copy', J$.F(3914649, J$.I(typeof Date === 'undefined' ? Date = J$.R(3914641, 'Date', undefined, true, true) : Date = J$.R(3914641, 'Date', Date, true, true)), true)(), copy, false, false);
                                J$.M(3914689, J$.R(3914665, 'copy', copy, false, false), 'setTime', false)(J$.M(3914681, J$.R(3914673, 'obj', obj, false, false), 'getTime', false)());
                                return J$.Rt(3914705, J$.R(3914697, 'copy', copy, false, false));
                            }
                            if (J$.C(206112, J$.B(382898, 'instanceof', J$.R(3914713, 'obj', obj, false, false), J$.I(typeof Array === 'undefined' ? Array = J$.R(3914721, 'Array', undefined, true, true) : Array = J$.R(3914721, 'Array', Array, true, true))))) {
                                var copy = J$.W(3914737, 'copy', J$.T(3914729, [], 10, false), copy, false, false);
                                for (var i = J$.W(3914769, 'i', J$.T(3914745, 0, 22, false), i, false, false), len = J$.W(3914777, 'len', J$.G(3914761, J$.R(3914753, 'obj', obj, false, false), 'length'), len, false, false); J$.C(206104, J$.B(382906, '<', J$.R(3914785, 'i', i, false, false), J$.R(3914793, 'len', len, false, false))); i = J$.W(3914809, 'i', J$.B(382922, '+', J$.U(382914, '+', J$.R(3914801, 'i', i, false, false)), 1), i, false, false)) {
                                    J$.P(3914873, J$.R(3914817, 'copy', copy, false, false), J$.R(3914825, 'i', i, false, false), J$.F(3914865, J$.R(3914833, 'clone', clone, false, true), false)(J$.G(3914857, J$.R(3914841, 'obj', obj, false, false), J$.R(3914849, 'i', i, false, false))));
                                }
                                return J$.Rt(3914889, J$.R(3914881, 'copy', copy, false, false));
                            }
                            if (J$.C(206128, J$.B(382930, 'instanceof', J$.R(3914897, 'obj', obj, false, false), J$.I(typeof Object === 'undefined' ? Object = J$.R(3914905, 'Object', undefined, true, true) : Object = J$.R(3914905, 'Object', Object, true, true))))) {
                                var copy = J$.W(3914921, 'copy', J$.T(3914913, {}, 11, false), copy, false, false);
                                for (var attr in J$.H(3915025, J$.R(3914929, 'obj', obj, false, false))) {
                                    J$.N(3915033, 'attr', attr, false, true, false);
                                    {
                                        {
                                            if (J$.C(206120, J$.M(3914953, J$.R(3914937, 'obj', obj, false, false), 'hasOwnProperty', false)(J$.R(3914945, 'attr', attr, false, false))))
                                                J$.P(3915017, J$.R(3914961, 'copy', copy, false, false), J$.R(3914969, 'attr', attr, false, false), J$.F(3915009, J$.R(3914977, 'clone', clone, false, true), false)(J$.G(3915001, J$.R(3914985, 'obj', obj, false, false), J$.R(3914993, 'attr', attr, false, false))));
                                        }
                                    }
                                }
                                return J$.Rt(3915049, J$.R(3915041, 'copy', copy, false, false));
                            }
                            throw J$.F(3915073, J$.I(typeof Error === 'undefined' ? Error = J$.R(3915057, 'Error', undefined, true, true) : Error = J$.R(3915057, 'Error', Error, true, true)), true)(J$.T(3915065, 'Unable to copy obj! Its type isn\'t supported.', 21, false));
                        } catch (J$e) {
                            J$.Ex(3915609, J$e);
                        } finally {
                            if (J$.Fr(3915617))
                                continue jalangiLabel12;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3915265, 'path', path, false, false, false);
            J$.N(3915273, 'tynt', tynt, false, false, false);
            J$.N(3915281, 'fs', fs, false, false, false);
            J$.N(3915289, 'rootMagicName', rootMagicName, false, false, false);
            J$.N(3915297, 'http', http, false, false, false);
            sendViaWebRequest = J$.N(3915313, 'sendViaWebRequest', J$.T(3915305, sendViaWebRequest, 12, false), true, false, false);
            whatWeDoThisTime = J$.N(3915329, 'whatWeDoThisTime', J$.T(3915321, whatWeDoThisTime, 12, false), true, false, false);
            loopProperty = J$.N(3915345, 'loopProperty', J$.T(3915337, loopProperty, 12, false), true, false, false);
            verifyHipar = J$.N(3915361, 'verifyHipar', J$.T(3915353, verifyHipar, 12, false), true, false, false);
            source = J$.N(3915377, 'source', J$.T(3915369, source, 12, false), true, false, false);
            verify_hipar = J$.N(3915393, 'verify_hipar', J$.T(3915385, verify_hipar, 12, false), true, false, false);
            clone = J$.N(3915409, 'clone', J$.T(3915401, clone, 12, false), true, false, false);
            var path = J$.W(3911793, 'path', J$.F(3911785, J$.I(typeof require === 'undefined' ? require = J$.R(3911769, 'require', undefined, true, true) : require = J$.R(3911769, 'require', require, true, true)), false)(J$.T(3911777, 'path', 21, false)), path, false, true);
            var tynt = J$.W(3911825, 'tynt', J$.F(3911817, J$.I(typeof require === 'undefined' ? require = J$.R(3911801, 'require', undefined, true, true) : require = J$.R(3911801, 'require', require, true, true)), false)(J$.T(3911809, 'tynt', 21, false)), tynt, false, true);
            var fs = J$.W(3911857, 'fs', J$.F(3911849, J$.I(typeof require === 'undefined' ? require = J$.R(3911833, 'require', undefined, true, true) : require = J$.R(3911833, 'require', require, true, true)), false)(J$.T(3911841, 'fs', 21, false)), fs, false, true);
            var rootMagicName = J$.W(3911873, 'rootMagicName', J$.T(3911865, 'R0ot', 21, false), rootMagicName, false, true);
            var http = J$.W(3911905, 'http', J$.F(3911897, J$.I(typeof require === 'undefined' ? require = J$.R(3911881, 'require', undefined, true, true) : require = J$.R(3911881, 'require', require, true, true)), false)(J$.T(3911889, 'http', 21, false)), http, false, true);
            J$.P(3915153, J$.I(typeof exports === 'undefined' ? exports = J$.R(3915137, 'exports', undefined, true, true) : exports = J$.R(3915137, 'exports', exports, true, true)), 'clone', J$.R(3915145, 'clone', clone, false, true));
            J$.P(3915177, J$.I(typeof exports === 'undefined' ? exports = J$.R(3915161, 'exports', undefined, true, true) : exports = J$.R(3915161, 'exports', exports, true, true)), 'loopProperty', J$.R(3915169, 'loopProperty', loopProperty, false, true));
            J$.P(3915201, J$.I(typeof exports === 'undefined' ? exports = J$.R(3915185, 'exports', undefined, true, true) : exports = J$.R(3915185, 'exports', exports, true, true)), 'verifyHipar', J$.R(3915193, 'verifyHipar', verifyHipar, false, true));
            J$.P(3915225, J$.I(typeof exports === 'undefined' ? exports = J$.R(3915209, 'exports', undefined, true, true) : exports = J$.R(3915209, 'exports', exports, true, true)), 'whatWeDoThisTime', J$.R(3915217, 'whatWeDoThisTime', whatWeDoThisTime, false, true));
            J$.P(3915249, J$.I(typeof exports === 'undefined' ? exports = J$.R(3915233, 'exports', undefined, true, true) : exports = J$.R(3915233, 'exports', exports, true, true)), 'sendViaWebRequest', J$.R(3915241, 'sendViaWebRequest', sendViaWebRequest, false, true));
        } catch (J$e) {
            J$.Ex(3915625, J$e);
        } finally {
            if (J$.Sr(3915633))
                continue jalangiLabel13;
            else
                break jalangiLabel13;
        }
    }
// JALANGI DO NOT INSTRUMENT

