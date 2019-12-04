J$.noInstrEval = false;
jalangiLabel3:
    while (true) {
        try {
            J$.Se(6026241, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestDatalize/TestDatalize.js');
            function test(query) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(6026217, arguments.callee, this, arguments);
                            arguments = J$.N(6026225, 'arguments', arguments, true, false, false);
                            query = J$.N(6026233, 'query', query, true, false, false);
                            J$.M(6026209, J$.R(6026145, 'utils', utils, false, true), 'sendViaWebRequest', false)(J$.T(6026153, 'post', 21, false), J$.M(6026177, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(6026161, 'JSON', undefined, true, true) : JSON = J$.R(6026161, 'JSON', JSON, true, true)), 'stringify', false)(J$.R(6026169, 'query', query, false, false)), J$.T(6026185, '/', 21, false), J$.T(6026193, 3000, 22, false), J$.T(6026201, '127.0.0.1', 21, false));
                        } catch (J$e) {
                            J$.Ex(6026337, J$e);
                        } finally {
                            if (J$.Fr(6026345))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(6026249, 'express', express, false, false, false);
            J$.N(6026257, 'datalize', datalize, false, false, false);
            J$.N(6026265, 'field', field, false, false, false);
            J$.N(6026273, 'app', app, false, false, false);
            J$.N(6026281, 'utils', utils, false, false, false);
            test = J$.N(6026297, 'test', J$.T(6026289, test, 12, false), true, false, false);
            J$.T(6025409, 'use strict', 21, false);
            J$.F(6025433, J$.I(typeof require === 'undefined' ? require = J$.R(6025417, 'require', undefined, true, true) : require = J$.R(6025417, 'require', require, true, true)), false)(J$.T(6025425, 'core-js/modules/es.string.trim', 21, false));
            J$.F(6025457, J$.I(typeof require === 'undefined' ? require = J$.R(6025441, 'require', undefined, true, true) : require = J$.R(6025441, 'require', require, true, true)), false)(J$.T(6025449, 'core-js/modules/es.string.trim', 21, false));
            var express = J$.W(6025489, 'express', J$.F(6025481, J$.I(typeof require === 'undefined' ? require = J$.R(6025465, 'require', undefined, true, true) : require = J$.R(6025465, 'require', require, true, true)), false)(J$.T(6025473, 'express', 21, false)), express, false, true);
            var datalize = J$.W(6025521, 'datalize', J$.F(6025513, J$.I(typeof require === 'undefined' ? require = J$.R(6025497, 'require', undefined, true, true) : require = J$.R(6025497, 'require', require, true, true)), false)(J$.T(6025505, 'datalize', 21, false)), datalize, false, true);
            var field = J$.W(6025545, 'field', J$.G(6025537, J$.R(6025529, 'datalize', datalize, false, true), 'field'), field, false, true);
            var app = J$.W(6025569, 'app', J$.F(6025561, J$.R(6025553, 'express', express, false, true), false)(), app, false, true);
            J$.M(6025617, J$.R(6025577, 'app', app, false, true), 'use', false)(J$.M(6025609, J$.F(6025601, J$.I(typeof require === 'undefined' ? require = J$.R(6025585, 'require', undefined, true, true) : require = J$.R(6025585, 'require', require, true, true)), false)(J$.T(6025593, 'body-parser', 21, false)), 'json', false)());
            J$.M(6025929, J$.R(6025625, 'app', app, false, true), 'post', false)(J$.T(6025633, '/', 21, false), J$.F(6025833, J$.R(6025641, 'datalize', datalize, false, true), false)(J$.T(6025825, [
                J$.M(6025689, J$.M(6025681, J$.F(6025673, J$.R(6025649, 'field', field, false, true), false)(J$.T(6025657, 'email', 21, false), J$.T(6025665, 'E-mail', 21, false)), 'required', false)(), 'email', false)(),
                J$.M(6025729, J$.F(6025721, J$.R(6025697, 'field', field, false, true), false)(J$.T(6025705, 'firstname', 21, false), J$.T(6025713, 'Firstname', 21, false)), 'required', false)(),
                J$.M(6025777, J$.M(6025769, J$.F(6025761, J$.R(6025737, 'field', field, false, true), false)(J$.T(6025745, 'lastname', 21, false), J$.T(6025753, 'Lastname', 21, false)), 'required', false)(), 'trim', false)(),
                J$.M(6025817, J$.F(6025801, J$.R(6025785, 'field', field, false, true), false)(J$.T(6025793, 'isTerms', 21, false)), 'bool', false)(J$.T(6025809, true, 23, false))
            ], 10, false)), J$.T(6025921, function (req, res) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(6025889, arguments.callee, this, arguments);
                            arguments = J$.N(6025897, 'arguments', arguments, true, false, false);
                            req = J$.N(6025905, 'req', req, true, false, false);
                            res = J$.N(6025913, 'res', res, true, false, false);
                            J$.M(6025881, J$.R(6025841, 'res', res, false, false), 'send', false)(J$.T(6025873, {
                                status: J$.T(6025849, 'success', 21, false),
                                data: J$.G(6025865, J$.R(6025857, 'req', req, false, false), 'form')
                            }, 11, false));
                        } catch (J$e) {
                            J$.Ex(6026305, J$e);
                        } finally {
                            if (J$.Fr(6026313))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            var utils = J$.W(6025961, 'utils', J$.F(6025953, J$.I(typeof require === 'undefined' ? require = J$.R(6025937, 'require', undefined, true, true) : require = J$.R(6025937, 'require', require, true, true)), false)(J$.T(6025945, '../TestcaseUtils.js', 21, false)), utils, false, true);
            J$.M(6026137, J$.R(6025969, 'app', app, false, true), 'listen', false)(J$.T(6025977, 3000, 22, false), J$.T(6026129, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(6026113, arguments.callee, this, arguments);
                            arguments = J$.N(6026121, 'arguments', arguments, true, false, false);
                            J$.M(6026001, J$.I(typeof console === 'undefined' ? console = J$.R(6025985, 'console', undefined, true, true) : console = J$.R(6025985, 'console', console, true, true)), 'log', false)(J$.T(6025993, 'server start', 21, false));
                            J$.M(6026065, J$.R(6026009, 'utils', utils, false, true), 'entry', false)(J$.R(6026017, 'test', test, false, true), J$.T(6026057, {
                                email: J$.T(6026025, 'a@a.com', 21, false),
                                firstname: J$.T(6026033, 'bob', 21, false),
                                lastname: J$.T(6026041, 'Green', 21, false),
                                isTerms: J$.T(6026049, true, 23, false)
                            }, 11, false));
                            J$.F(6026105, J$.I(typeof setTimeout === 'undefined' ? setTimeout = J$.R(6026073, 'setTimeout', undefined, true, true) : setTimeout = J$.R(6026073, 'setTimeout', setTimeout, true, true)), false)(J$.G(6026089, J$.I(typeof process === 'undefined' ? process = J$.R(6026081, 'process', undefined, true, true) : process = J$.R(6026081, 'process', process, true, true)), 'exit'), J$.T(6026097, 5000, 22, false));
                        } catch (J$e) {
                            J$.Ex(6026321, J$e);
                        } finally {
                            if (J$.Fr(6026329))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(6026353, J$e);
        } finally {
            if (J$.Sr(6026361))
                continue jalangiLabel3;
            else
                break jalangiLabel3;
        }
    }
// JALANGI DO NOT INSTRUMENT

