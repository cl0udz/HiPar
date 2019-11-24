J$.noInstrEval = false;
jalangiLabel6:
    while (true) {
        try {
            J$.Se(7455833, '/home/james/nodejs/HiPar/outputs/target_cache/TestClassValidator/TestClassValidator.js');
            function test(userJson) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(7455801, arguments.callee, this, arguments);
                            arguments = J$.N(7455809, 'arguments', arguments, true, false, false);
                            userJson = J$.N(7455817, 'userJson', userJson, true, false, false);
                            J$.N(7455825, 'users', users, false, false, false);
                            var users = J$.W(7455649, 'users', J$.M(7455641, J$.R(7455617, 'class_transformer_1', class_transformer_1, false, true), 'plainToClass', false)(J$.R(7455625, 'Post', Post, false, true), J$.R(7455633, 'userJson', userJson, false, false)), users, false, false);
                            J$.M(7455793, J$.M(7455673, J$.R(7455657, 'class_validator_1', class_validator_1, false, true), 'validate', false)(J$.R(7455665, 'users', users, false, false)), 'then', false)(J$.T(7455785, function (errors) {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(7455761, arguments.callee, this, arguments);
                                            arguments = J$.N(7455769, 'arguments', arguments, true, false, false);
                                            errors = J$.N(7455777, 'errors', errors, true, false, false);
                                            if (J$.C(394984, J$.B(717586, '>', J$.G(7455689, J$.R(7455681, 'errors', errors, false, false), 'length'), J$.T(7455697, 0, 22, false)))) {
                                                J$.M(7455729, J$.I(typeof console === 'undefined' ? console = J$.R(7455705, 'console', undefined, true, true) : console = J$.R(7455705, 'console', console, true, true)), 'log', false)(J$.T(7455713, 'validation failed. errors: ', 21, false), J$.R(7455721, 'errors', errors, false, false));
                                            } else {
                                                J$.M(7455753, J$.I(typeof console === 'undefined' ? console = J$.R(7455737, 'console', undefined, true, true) : console = J$.R(7455737, 'console', console, true, true)), 'log', false)(J$.T(7455745, 'validation succeed', 21, false));
                                            }
                                        } catch (J$e) {
                                            J$.Ex(7455985, J$e);
                                        } finally {
                                            if (J$.Fr(7455993))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(7456001, J$e);
                        } finally {
                            if (J$.Fr(7456009))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(7455841, '__decorate', __decorate, false, false, false);
            J$.N(7455849, '__metadata', __metadata, false, false, false);
            J$.N(7455857, 'class_validator_1', class_validator_1, false, false, false);
            J$.N(7455865, 'class_transformer_1', class_transformer_1, false, false, false);
            J$.N(7455873, 'Post', Post, false, false, false);
            J$.N(7455881, 'userJson', userJson, false, false, false);
            J$.N(7455889, 'path', path, false, false, false);
            J$.N(7455897, 'utils', utils, false, false, false);
            test = J$.N(7455913, 'test', J$.T(7455905, test, 12, false), true, false, false);
            J$.T(7453745, 'use strict', 21, false);
            var __decorate = J$.W(7454401, '__decorate', J$.C(394944, J$.C(394848, J$.R(7453753, 'this', this, false, false)) ? J$.G(7453769, J$.R(7453761, 'this', this, false, false), '__decorate') : J$._()) ? J$._() : J$.T(7454393, function (decorators, target, key, desc) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(7454313, arguments.callee, this, arguments);
                            arguments = J$.N(7454321, 'arguments', arguments, true, false, false);
                            decorators = J$.N(7454329, 'decorators', decorators, true, false, false);
                            target = J$.N(7454337, 'target', target, true, false, false);
                            key = J$.N(7454345, 'key', key, true, false, false);
                            desc = J$.N(7454353, 'desc', desc, true, false, false);
                            J$.N(7454361, 'c', c, false, false, false);
                            J$.N(7454369, 'r', r, false, false, false);
                            J$.N(7454377, 'd', d, false, false, false);
                            J$.N(7454385, 'i', i, false, false, false);
                            var c = J$.W(7453881, 'c', J$.G(7453785, J$.I(typeof arguments === 'undefined' ? arguments = J$.R(7453777, 'arguments', undefined, true, true) : arguments = J$.R(7453777, 'arguments', arguments, true, true)), 'length'), c, false, false), r = J$.W(7453889, 'r', J$.C(394864, J$.B(717442, '<', J$.R(7453793, 'c', c, false, false), J$.T(7453801, 3, 22, false))) ? J$.R(7453809, 'target', target, false, false) : J$.C(394856, J$.B(717450, '===', J$.R(7453817, 'desc', desc, false, false), J$.T(7453825, null, 25, false))) ? desc = J$.W(7453865, 'desc', J$.M(7453857, J$.I(typeof Object === 'undefined' ? Object = J$.R(7453833, 'Object', undefined, true, true) : Object = J$.R(7453833, 'Object', Object, true, true)), 'getOwnPropertyDescriptor', false)(J$.R(7453841, 'target', target, false, false), J$.R(7453849, 'key', key, false, false)), desc, false, false) : J$.R(7453873, 'desc', desc, false, false), r, false, false), d;
                            if (J$.C(394920, J$.C(394872, J$.B(717466, '===', J$.U(717458, 'typeof', J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(7453897, 'Reflect', undefined, true, true) : Reflect = J$.R(7453897, 'Reflect', Reflect, true, true))), J$.T(7453905, 'object', 21, false))) ? J$.B(717482, '===', J$.U(717474, 'typeof', J$.G(7453921, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(7453913, 'Reflect', undefined, true, true) : Reflect = J$.R(7453913, 'Reflect', Reflect, true, true)), 'decorate')), J$.T(7453929, 'function', 21, false)) : J$._()))
                                r = J$.W(7453985, 'r', J$.M(7453977, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(7453937, 'Reflect', undefined, true, true) : Reflect = J$.R(7453937, 'Reflect', Reflect, true, true)), 'decorate', false)(J$.R(7453945, 'decorators', decorators, false, false), J$.R(7453953, 'target', target, false, false), J$.R(7453961, 'key', key, false, false), J$.R(7453969, 'desc', desc, false, false)), r, false, false);
                            else
                                for (var i = J$.W(7454017, 'i', J$.B(717490, '-', J$.G(7454001, J$.R(7453993, 'decorators', decorators, false, false), 'length'), J$.T(7454009, 1, 22, false)), i, false, false); J$.C(394912, J$.B(717498, '>=', J$.R(7454025, 'i', i, false, false), J$.T(7454033, 0, 22, false))); J$.B(717522, '+', i = J$.W(7454049, 'i', J$.B(717514, '-', J$.U(717506, '+', J$.R(7454041, 'i', i, false, false)), 1), i, false, false), 1))
                                    if (J$.C(394904, d = J$.W(7454081, 'd', J$.G(7454073, J$.R(7454057, 'decorators', decorators, false, false), J$.R(7454065, 'i', i, false, false)), d, false, false)))
                                        r = J$.W(7454225, 'r', J$.C(394896, J$.C(394888, J$.B(717530, '<', J$.R(7454089, 'c', c, false, false), J$.T(7454097, 3, 22, false))) ? J$.F(7454121, J$.R(7454105, 'd', d, false, false), false)(J$.R(7454113, 'r', r, false, false)) : J$.C(394880, J$.B(717538, '>', J$.R(7454129, 'c', c, false, false), J$.T(7454137, 3, 22, false))) ? J$.F(7454177, J$.R(7454145, 'd', d, false, false), false)(J$.R(7454153, 'target', target, false, false), J$.R(7454161, 'key', key, false, false), J$.R(7454169, 'r', r, false, false)) : J$.F(7454209, J$.R(7454185, 'd', d, false, false), false)(J$.R(7454193, 'target', target, false, false), J$.R(7454201, 'key', key, false, false))) ? J$._() : J$.R(7454217, 'r', r, false, false), r, false, false);
                            return J$.Rt(7454305, (J$.C(394936, J$.C(394928, J$.B(717546, '>', J$.R(7454233, 'c', c, false, false), J$.T(7454241, 3, 22, false))) ? J$.R(7454249, 'r', r, false, false) : J$._()) ? J$.M(7454289, J$.I(typeof Object === 'undefined' ? Object = J$.R(7454257, 'Object', undefined, true, true) : Object = J$.R(7454257, 'Object', Object, true, true)), 'defineProperty', false)(J$.R(7454265, 'target', target, false, false), J$.R(7454273, 'key', key, false, false), J$.R(7454281, 'r', r, false, false)) : J$._(), J$.R(7454297, 'r', r, false, false)));
                        } catch (J$e) {
                            J$.Ex(7455921, J$e);
                        } finally {
                            if (J$.Fr(7455929))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), __decorate, false, true);
            var __metadata = J$.W(7454553, '__metadata', J$.C(394976, J$.C(394952, J$.R(7454409, 'this', this, false, false)) ? J$.G(7454425, J$.R(7454417, 'this', this, false, false), '__metadata') : J$._()) ? J$._() : J$.T(7454545, function (k, v) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(7454513, arguments.callee, this, arguments);
                            arguments = J$.N(7454521, 'arguments', arguments, true, false, false);
                            k = J$.N(7454529, 'k', k, true, false, false);
                            v = J$.N(7454537, 'v', v, true, false, false);
                            if (J$.C(394968, J$.C(394960, J$.B(717562, '===', J$.U(717554, 'typeof', J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(7454433, 'Reflect', undefined, true, true) : Reflect = J$.R(7454433, 'Reflect', Reflect, true, true))), J$.T(7454441, 'object', 21, false))) ? J$.B(717578, '===', J$.U(717570, 'typeof', J$.G(7454457, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(7454449, 'Reflect', undefined, true, true) : Reflect = J$.R(7454449, 'Reflect', Reflect, true, true)), 'metadata')), J$.T(7454465, 'function', 21, false)) : J$._()))
                                return J$.Rt(7454505, J$.M(7454497, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(7454473, 'Reflect', undefined, true, true) : Reflect = J$.R(7454473, 'Reflect', Reflect, true, true)), 'metadata', false)(J$.R(7454481, 'k', k, false, false), J$.R(7454489, 'v', v, false, false)));
                        } catch (J$e) {
                            J$.Ex(7455937, J$e);
                        } finally {
                            if (J$.Fr(7455945))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), __metadata, false, true);
            J$.M(7454601, J$.I(typeof Object === 'undefined' ? Object = J$.R(7454561, 'Object', undefined, true, true) : Object = J$.R(7454561, 'Object', Object, true, true)), 'defineProperty', false)(J$.I(typeof exports === 'undefined' ? exports = J$.R(7454569, 'exports', undefined, true, true) : exports = J$.R(7454569, 'exports', exports, true, true)), J$.T(7454577, '__esModule', 21, false), J$.T(7454593, { value: J$.T(7454585, true, 23, false) }, 11, false));
            var class_validator_1 = J$.W(7454633, 'class_validator_1', J$.F(7454625, J$.I(typeof require === 'undefined' ? require = J$.R(7454609, 'require', undefined, true, true) : require = J$.R(7454609, 'require', require, true, true)), false)(J$.T(7454617, 'class-validator', 21, false)), class_validator_1, false, true);
            var class_transformer_1 = J$.W(7454665, 'class_transformer_1', J$.F(7454657, J$.I(typeof require === 'undefined' ? require = J$.R(7454641, 'require', undefined, true, true) : require = J$.R(7454641, 'require', require, true, true)), false)(J$.T(7454649, 'class-transformer', 21, false)), class_transformer_1, false, true);
            var Post = J$.W(7455449, 'Post', J$.F(7455441, J$.T(7455433, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(7455401, arguments.callee, this, arguments);
                            function Post() {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(7454673, arguments.callee, this, arguments);
                                            arguments = J$.N(7454681, 'arguments', arguments, true, false, false);
                                        } catch (J$e) {
                                            J$.Ex(7455953, J$e);
                                        } finally {
                                            if (J$.Fr(7455961))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(7455409, 'arguments', arguments, true, false, false);
                            Post = J$.N(7455425, 'Post', J$.T(7455417, Post, 12, false), true, false, false);
                            J$.F(7454801, J$.R(7454689, '__decorate', __decorate, false, true), false)(J$.T(7454761, [
                                J$.M(7454721, J$.R(7454697, 'class_validator_1', class_validator_1, false, true), 'Length', false)(J$.T(7454705, 10, 22, false), J$.T(7454713, 20, 22, false)),
                                J$.F(7454753, J$.R(7454729, '__metadata', __metadata, false, true), false)(J$.T(7454737, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(7454745, 'String', undefined, true, true) : String = J$.R(7454745, 'String', String, true, true)))
                            ], 10, false), J$.G(7454777, J$.R(7454769, 'Post', Post, false, false), 'prototype'), J$.T(7454785, 'title', 21, false), void J$.T(7454793, 0, 22, false));
                            J$.F(7454913, J$.R(7454809, '__decorate', __decorate, false, true), false)(J$.T(7454873, [
                                J$.M(7454833, J$.R(7454817, 'class_validator_1', class_validator_1, false, true), 'Contains', false)(J$.T(7454825, 'hello', 21, false)),
                                J$.F(7454865, J$.R(7454841, '__metadata', __metadata, false, true), false)(J$.T(7454849, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(7454857, 'String', undefined, true, true) : String = J$.R(7454857, 'String', String, true, true)))
                            ], 10, false), J$.G(7454889, J$.R(7454881, 'Post', Post, false, false), 'prototype'), J$.T(7454897, 'text', 21, false), void J$.T(7454905, 0, 22, false));
                            J$.F(7455065, J$.R(7454921, '__decorate', __decorate, false, true), false)(J$.T(7455025, [
                                J$.M(7454937, J$.R(7454929, 'class_validator_1', class_validator_1, false, true), 'IsInt', false)(),
                                J$.M(7454961, J$.R(7454945, 'class_validator_1', class_validator_1, false, true), 'Min', false)(J$.T(7454953, 0, 22, false)),
                                J$.M(7454985, J$.R(7454969, 'class_validator_1', class_validator_1, false, true), 'Max', false)(J$.T(7454977, 10, 22, false)),
                                J$.F(7455017, J$.R(7454993, '__metadata', __metadata, false, true), false)(J$.T(7455001, 'design:type', 21, false), J$.I(typeof Number === 'undefined' ? Number = J$.R(7455009, 'Number', undefined, true, true) : Number = J$.R(7455009, 'Number', Number, true, true)))
                            ], 10, false), J$.G(7455041, J$.R(7455033, 'Post', Post, false, false), 'prototype'), J$.T(7455049, 'rating', 21, false), void J$.T(7455057, 0, 22, false));
                            J$.F(7455169, J$.R(7455073, '__decorate', __decorate, false, true), false)(J$.T(7455129, [
                                J$.M(7455089, J$.R(7455081, 'class_validator_1', class_validator_1, false, true), 'IsEmail', false)(),
                                J$.F(7455121, J$.R(7455097, '__metadata', __metadata, false, true), false)(J$.T(7455105, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(7455113, 'String', undefined, true, true) : String = J$.R(7455113, 'String', String, true, true)))
                            ], 10, false), J$.G(7455145, J$.R(7455137, 'Post', Post, false, false), 'prototype'), J$.T(7455153, 'email', 21, false), void J$.T(7455161, 0, 22, false));
                            J$.F(7455273, J$.R(7455177, '__decorate', __decorate, false, true), false)(J$.T(7455233, [
                                J$.M(7455193, J$.R(7455185, 'class_validator_1', class_validator_1, false, true), 'IsFQDN', false)(),
                                J$.F(7455225, J$.R(7455201, '__metadata', __metadata, false, true), false)(J$.T(7455209, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(7455217, 'String', undefined, true, true) : String = J$.R(7455217, 'String', String, true, true)))
                            ], 10, false), J$.G(7455249, J$.R(7455241, 'Post', Post, false, false), 'prototype'), J$.T(7455257, 'site', 21, false), void J$.T(7455265, 0, 22, false));
                            J$.F(7455377, J$.R(7455281, '__decorate', __decorate, false, true), false)(J$.T(7455337, [
                                J$.M(7455297, J$.R(7455289, 'class_validator_1', class_validator_1, false, true), 'IsDate', false)(),
                                J$.F(7455329, J$.R(7455305, '__metadata', __metadata, false, true), false)(J$.T(7455313, 'design:type', 21, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(7455321, 'Date', undefined, true, true) : Date = J$.R(7455321, 'Date', Date, true, true)))
                            ], 10, false), J$.G(7455353, J$.R(7455345, 'Post', Post, false, false), 'prototype'), J$.T(7455361, 'createDate', 21, false), void J$.T(7455369, 0, 22, false));
                            return J$.Rt(7455393, J$.R(7455385, 'Post', Post, false, false));
                        } catch (J$e) {
                            J$.Ex(7455969, J$e);
                        } finally {
                            if (J$.Fr(7455977))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), false)(), Post, false, true);
            var userJson = J$.W(7455481, 'userJson', J$.M(7455473, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(7455457, 'JSON', undefined, true, true) : JSON = J$.R(7455457, 'JSON', JSON, true, true)), 'parse', false)(J$.T(7455465, '{"title":"Hello","rating":5}', 21, false)), userJson, false, true);
            var path = J$.W(7455513, 'path', J$.F(7455505, J$.I(typeof require === 'undefined' ? require = J$.R(7455489, 'require', undefined, true, true) : require = J$.R(7455489, 'require', require, true, true)), false)(J$.T(7455497, 'path', 21, false)), path, false, true);
            var utils = J$.W(7455569, 'utils', J$.F(7455561, J$.I(typeof require === 'undefined' ? require = J$.R(7455521, 'require', undefined, true, true) : require = J$.R(7455521, 'require', require, true, true)), false)(J$.M(7455553, J$.R(7455529, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(7455537, '__dirname', undefined, true, true) : __dirname = J$.R(7455537, '__dirname', __dirname, true, true)), J$.T(7455545, '../TestcaseUtils.js', 21, false))), utils, false, true);
            J$.M(7455609, J$.R(7455577, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(7455585, 'test', test, false, true), J$.R(7455593, 'userJson', userJson, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(7455601, '__dirname', undefined, true, true) : __dirname = J$.R(7455601, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(7456017, J$e);
        } finally {
            if (J$.Sr(7456025))
                continue jalangiLabel6;
            else
                break jalangiLabel6;
        }
    }
// JALANGI DO NOT INSTRUMENT

