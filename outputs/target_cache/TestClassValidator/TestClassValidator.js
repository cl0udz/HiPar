J$.noInstrEval = false;
jalangiLabel6:
    while (true) {
        try {
            J$.Se(2778105, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestClassValidator/TestClassValidator.js');
            function test(userJson) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(2778073, arguments.callee, this, arguments);
                            arguments = J$.N(2778081, 'arguments', arguments, true, false, false);
                            userJson = J$.N(2778089, 'userJson', userJson, true, false, false);
                            J$.N(2778097, 'users', users, false, false, false);
                            var users = J$.W(2777921, 'users', J$.M(2777913, J$.R(2777889, 'class_transformer_1', class_transformer_1, false, true), 'plainToClass', false)(J$.R(2777897, 'Post', Post, false, true), J$.R(2777905, 'userJson', userJson, false, false)), users, false, false);
                            J$.M(2778065, J$.M(2777945, J$.R(2777929, 'class_validator_1', class_validator_1, false, true), 'validate', false)(J$.R(2777937, 'users', users, false, false)), 'then', false)(J$.T(2778057, function (errors) {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(2778033, arguments.callee, this, arguments);
                                            arguments = J$.N(2778041, 'arguments', arguments, true, false, false);
                                            errors = J$.N(2778049, 'errors', errors, true, false, false);
                                            if (J$.C(148456, J$.B(310426, '>', J$.G(2777961, J$.R(2777953, 'errors', errors, false, false), 'length'), J$.T(2777969, 0, 22, false)))) {
                                                J$.M(2778001, J$.I(typeof console === 'undefined' ? console = J$.R(2777977, 'console', undefined, true, true) : console = J$.R(2777977, 'console', console, true, true)), 'log', false)(J$.T(2777985, 'validation failed. errors: ', 21, false), J$.R(2777993, 'errors', errors, false, false));
                                            } else {
                                                J$.M(2778025, J$.I(typeof console === 'undefined' ? console = J$.R(2778009, 'console', undefined, true, true) : console = J$.R(2778009, 'console', console, true, true)), 'log', false)(J$.T(2778017, 'validation succeed', 21, false));
                                            }
                                        } catch (J$e) {
                                            J$.Ex(2778257, J$e);
                                        } finally {
                                            if (J$.Fr(2778265))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(2778273, J$e);
                        } finally {
                            if (J$.Fr(2778281))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(2778113, '__decorate', __decorate, false, false, false);
            J$.N(2778121, '__metadata', __metadata, false, false, false);
            J$.N(2778129, 'class_validator_1', class_validator_1, false, false, false);
            J$.N(2778137, 'class_transformer_1', class_transformer_1, false, false, false);
            J$.N(2778145, 'Post', Post, false, false, false);
            J$.N(2778153, 'userJson', userJson, false, false, false);
            J$.N(2778161, 'path', path, false, false, false);
            J$.N(2778169, 'utils', utils, false, false, false);
            test = J$.N(2778185, 'test', J$.T(2778177, test, 12, false), true, false, false);
            J$.T(2776017, 'use strict', 21, false);
            var __decorate = J$.W(2776673, '__decorate', J$.C(148416, J$.C(148320, J$.R(2776025, 'this', this, false, false)) ? J$.G(2776041, J$.R(2776033, 'this', this, false, false), '__decorate') : J$._()) ? J$._() : J$.T(2776665, function (decorators, target, key, desc) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(2776585, arguments.callee, this, arguments);
                            arguments = J$.N(2776593, 'arguments', arguments, true, false, false);
                            decorators = J$.N(2776601, 'decorators', decorators, true, false, false);
                            target = J$.N(2776609, 'target', target, true, false, false);
                            key = J$.N(2776617, 'key', key, true, false, false);
                            desc = J$.N(2776625, 'desc', desc, true, false, false);
                            J$.N(2776633, 'c', c, false, false, false);
                            J$.N(2776641, 'r', r, false, false, false);
                            J$.N(2776649, 'd', d, false, false, false);
                            J$.N(2776657, 'i', i, false, false, false);
                            var c = J$.W(2776153, 'c', J$.G(2776057, J$.I(typeof arguments === 'undefined' ? arguments = J$.R(2776049, 'arguments', undefined, true, true) : arguments = J$.R(2776049, 'arguments', arguments, true, true)), 'length'), c, false, false), r = J$.W(2776161, 'r', J$.C(148336, J$.B(310282, '<', J$.R(2776065, 'c', c, false, false), J$.T(2776073, 3, 22, false))) ? J$.R(2776081, 'target', target, false, false) : J$.C(148328, J$.B(310290, '===', J$.R(2776089, 'desc', desc, false, false), J$.T(2776097, null, 25, false))) ? desc = J$.W(2776137, 'desc', J$.M(2776129, J$.I(typeof Object === 'undefined' ? Object = J$.R(2776105, 'Object', undefined, true, true) : Object = J$.R(2776105, 'Object', Object, true, true)), 'getOwnPropertyDescriptor', false)(J$.R(2776113, 'target', target, false, false), J$.R(2776121, 'key', key, false, false)), desc, false, false) : J$.R(2776145, 'desc', desc, false, false), r, false, false), d;
                            if (J$.C(148392, J$.C(148344, J$.B(310306, '===', J$.U(310298, 'typeof', J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2776169, 'Reflect', undefined, true, true) : Reflect = J$.R(2776169, 'Reflect', Reflect, true, true))), J$.T(2776177, 'object', 21, false))) ? J$.B(310322, '===', J$.U(310314, 'typeof', J$.G(2776193, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2776185, 'Reflect', undefined, true, true) : Reflect = J$.R(2776185, 'Reflect', Reflect, true, true)), 'decorate')), J$.T(2776201, 'function', 21, false)) : J$._()))
                                r = J$.W(2776257, 'r', J$.M(2776249, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2776209, 'Reflect', undefined, true, true) : Reflect = J$.R(2776209, 'Reflect', Reflect, true, true)), 'decorate', false)(J$.R(2776217, 'decorators', decorators, false, false), J$.R(2776225, 'target', target, false, false), J$.R(2776233, 'key', key, false, false), J$.R(2776241, 'desc', desc, false, false)), r, false, false);
                            else
                                for (var i = J$.W(2776289, 'i', J$.B(310330, '-', J$.G(2776273, J$.R(2776265, 'decorators', decorators, false, false), 'length'), J$.T(2776281, 1, 22, false)), i, false, false); J$.C(148384, J$.B(310338, '>=', J$.R(2776297, 'i', i, false, false), J$.T(2776305, 0, 22, false))); J$.B(310362, '+', i = J$.W(2776321, 'i', J$.B(310354, '-', J$.U(310346, '+', J$.R(2776313, 'i', i, false, false)), 1), i, false, false), 1))
                                    if (J$.C(148376, d = J$.W(2776353, 'd', J$.G(2776345, J$.R(2776329, 'decorators', decorators, false, false), J$.R(2776337, 'i', i, false, false)), d, false, false)))
                                        r = J$.W(2776497, 'r', J$.C(148368, J$.C(148360, J$.B(310370, '<', J$.R(2776361, 'c', c, false, false), J$.T(2776369, 3, 22, false))) ? J$.F(2776393, J$.R(2776377, 'd', d, false, false), false)(J$.R(2776385, 'r', r, false, false)) : J$.C(148352, J$.B(310378, '>', J$.R(2776401, 'c', c, false, false), J$.T(2776409, 3, 22, false))) ? J$.F(2776449, J$.R(2776417, 'd', d, false, false), false)(J$.R(2776425, 'target', target, false, false), J$.R(2776433, 'key', key, false, false), J$.R(2776441, 'r', r, false, false)) : J$.F(2776481, J$.R(2776457, 'd', d, false, false), false)(J$.R(2776465, 'target', target, false, false), J$.R(2776473, 'key', key, false, false))) ? J$._() : J$.R(2776489, 'r', r, false, false), r, false, false);
                            return J$.Rt(2776577, (J$.C(148408, J$.C(148400, J$.B(310386, '>', J$.R(2776505, 'c', c, false, false), J$.T(2776513, 3, 22, false))) ? J$.R(2776521, 'r', r, false, false) : J$._()) ? J$.M(2776561, J$.I(typeof Object === 'undefined' ? Object = J$.R(2776529, 'Object', undefined, true, true) : Object = J$.R(2776529, 'Object', Object, true, true)), 'defineProperty', false)(J$.R(2776537, 'target', target, false, false), J$.R(2776545, 'key', key, false, false), J$.R(2776553, 'r', r, false, false)) : J$._(), J$.R(2776569, 'r', r, false, false)));
                        } catch (J$e) {
                            J$.Ex(2778193, J$e);
                        } finally {
                            if (J$.Fr(2778201))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), __decorate, false, true);
            var __metadata = J$.W(2776825, '__metadata', J$.C(148448, J$.C(148424, J$.R(2776681, 'this', this, false, false)) ? J$.G(2776697, J$.R(2776689, 'this', this, false, false), '__metadata') : J$._()) ? J$._() : J$.T(2776817, function (k, v) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(2776785, arguments.callee, this, arguments);
                            arguments = J$.N(2776793, 'arguments', arguments, true, false, false);
                            k = J$.N(2776801, 'k', k, true, false, false);
                            v = J$.N(2776809, 'v', v, true, false, false);
                            if (J$.C(148440, J$.C(148432, J$.B(310402, '===', J$.U(310394, 'typeof', J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2776705, 'Reflect', undefined, true, true) : Reflect = J$.R(2776705, 'Reflect', Reflect, true, true))), J$.T(2776713, 'object', 21, false))) ? J$.B(310418, '===', J$.U(310410, 'typeof', J$.G(2776729, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2776721, 'Reflect', undefined, true, true) : Reflect = J$.R(2776721, 'Reflect', Reflect, true, true)), 'metadata')), J$.T(2776737, 'function', 21, false)) : J$._()))
                                return J$.Rt(2776777, J$.M(2776769, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2776745, 'Reflect', undefined, true, true) : Reflect = J$.R(2776745, 'Reflect', Reflect, true, true)), 'metadata', false)(J$.R(2776753, 'k', k, false, false), J$.R(2776761, 'v', v, false, false)));
                        } catch (J$e) {
                            J$.Ex(2778209, J$e);
                        } finally {
                            if (J$.Fr(2778217))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), __metadata, false, true);
            J$.M(2776873, J$.I(typeof Object === 'undefined' ? Object = J$.R(2776833, 'Object', undefined, true, true) : Object = J$.R(2776833, 'Object', Object, true, true)), 'defineProperty', false)(J$.I(typeof exports === 'undefined' ? exports = J$.R(2776841, 'exports', undefined, true, true) : exports = J$.R(2776841, 'exports', exports, true, true)), J$.T(2776849, '__esModule', 21, false), J$.T(2776865, { value: J$.T(2776857, true, 23, false) }, 11, false));
            var class_validator_1 = J$.W(2776905, 'class_validator_1', J$.F(2776897, J$.I(typeof require === 'undefined' ? require = J$.R(2776881, 'require', undefined, true, true) : require = J$.R(2776881, 'require', require, true, true)), false)(J$.T(2776889, 'class-validator', 21, false)), class_validator_1, false, true);
            var class_transformer_1 = J$.W(2776937, 'class_transformer_1', J$.F(2776929, J$.I(typeof require === 'undefined' ? require = J$.R(2776913, 'require', undefined, true, true) : require = J$.R(2776913, 'require', require, true, true)), false)(J$.T(2776921, 'class-transformer', 21, false)), class_transformer_1, false, true);
            var Post = J$.W(2777721, 'Post', J$.F(2777713, J$.T(2777705, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(2777673, arguments.callee, this, arguments);
                            function Post() {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(2776945, arguments.callee, this, arguments);
                                            arguments = J$.N(2776953, 'arguments', arguments, true, false, false);
                                        } catch (J$e) {
                                            J$.Ex(2778225, J$e);
                                        } finally {
                                            if (J$.Fr(2778233))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(2777681, 'arguments', arguments, true, false, false);
                            Post = J$.N(2777697, 'Post', J$.T(2777689, Post, 12, false), true, false, false);
                            J$.F(2777073, J$.R(2776961, '__decorate', __decorate, false, true), false)(J$.T(2777033, [
                                J$.M(2776993, J$.R(2776969, 'class_validator_1', class_validator_1, false, true), 'Length', false)(J$.T(2776977, 10, 22, false), J$.T(2776985, 20, 22, false)),
                                J$.F(2777025, J$.R(2777001, '__metadata', __metadata, false, true), false)(J$.T(2777009, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(2777017, 'String', undefined, true, true) : String = J$.R(2777017, 'String', String, true, true)))
                            ], 10, false), J$.G(2777049, J$.R(2777041, 'Post', Post, false, false), 'prototype'), J$.T(2777057, 'title', 21, false), void J$.T(2777065, 0, 22, false));
                            J$.F(2777185, J$.R(2777081, '__decorate', __decorate, false, true), false)(J$.T(2777145, [
                                J$.M(2777105, J$.R(2777089, 'class_validator_1', class_validator_1, false, true), 'Contains', false)(J$.T(2777097, 'hello', 21, false)),
                                J$.F(2777137, J$.R(2777113, '__metadata', __metadata, false, true), false)(J$.T(2777121, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(2777129, 'String', undefined, true, true) : String = J$.R(2777129, 'String', String, true, true)))
                            ], 10, false), J$.G(2777161, J$.R(2777153, 'Post', Post, false, false), 'prototype'), J$.T(2777169, 'text', 21, false), void J$.T(2777177, 0, 22, false));
                            J$.F(2777337, J$.R(2777193, '__decorate', __decorate, false, true), false)(J$.T(2777297, [
                                J$.M(2777209, J$.R(2777201, 'class_validator_1', class_validator_1, false, true), 'IsInt', false)(),
                                J$.M(2777233, J$.R(2777217, 'class_validator_1', class_validator_1, false, true), 'Min', false)(J$.T(2777225, 0, 22, false)),
                                J$.M(2777257, J$.R(2777241, 'class_validator_1', class_validator_1, false, true), 'Max', false)(J$.T(2777249, 10, 22, false)),
                                J$.F(2777289, J$.R(2777265, '__metadata', __metadata, false, true), false)(J$.T(2777273, 'design:type', 21, false), J$.I(typeof Number === 'undefined' ? Number = J$.R(2777281, 'Number', undefined, true, true) : Number = J$.R(2777281, 'Number', Number, true, true)))
                            ], 10, false), J$.G(2777313, J$.R(2777305, 'Post', Post, false, false), 'prototype'), J$.T(2777321, 'rating', 21, false), void J$.T(2777329, 0, 22, false));
                            J$.F(2777441, J$.R(2777345, '__decorate', __decorate, false, true), false)(J$.T(2777401, [
                                J$.M(2777361, J$.R(2777353, 'class_validator_1', class_validator_1, false, true), 'IsEmail', false)(),
                                J$.F(2777393, J$.R(2777369, '__metadata', __metadata, false, true), false)(J$.T(2777377, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(2777385, 'String', undefined, true, true) : String = J$.R(2777385, 'String', String, true, true)))
                            ], 10, false), J$.G(2777417, J$.R(2777409, 'Post', Post, false, false), 'prototype'), J$.T(2777425, 'email', 21, false), void J$.T(2777433, 0, 22, false));
                            J$.F(2777545, J$.R(2777449, '__decorate', __decorate, false, true), false)(J$.T(2777505, [
                                J$.M(2777465, J$.R(2777457, 'class_validator_1', class_validator_1, false, true), 'IsFQDN', false)(),
                                J$.F(2777497, J$.R(2777473, '__metadata', __metadata, false, true), false)(J$.T(2777481, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(2777489, 'String', undefined, true, true) : String = J$.R(2777489, 'String', String, true, true)))
                            ], 10, false), J$.G(2777521, J$.R(2777513, 'Post', Post, false, false), 'prototype'), J$.T(2777529, 'site', 21, false), void J$.T(2777537, 0, 22, false));
                            J$.F(2777649, J$.R(2777553, '__decorate', __decorate, false, true), false)(J$.T(2777609, [
                                J$.M(2777569, J$.R(2777561, 'class_validator_1', class_validator_1, false, true), 'IsDate', false)(),
                                J$.F(2777601, J$.R(2777577, '__metadata', __metadata, false, true), false)(J$.T(2777585, 'design:type', 21, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(2777593, 'Date', undefined, true, true) : Date = J$.R(2777593, 'Date', Date, true, true)))
                            ], 10, false), J$.G(2777625, J$.R(2777617, 'Post', Post, false, false), 'prototype'), J$.T(2777633, 'createDate', 21, false), void J$.T(2777641, 0, 22, false));
                            return J$.Rt(2777665, J$.R(2777657, 'Post', Post, false, false));
                        } catch (J$e) {
                            J$.Ex(2778241, J$e);
                        } finally {
                            if (J$.Fr(2778249))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), false)(), Post, false, true);
            var userJson = J$.W(2777753, 'userJson', J$.M(2777745, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(2777729, 'JSON', undefined, true, true) : JSON = J$.R(2777729, 'JSON', JSON, true, true)), 'parse', false)(J$.T(2777737, '{"title":"Hello","rating":5}', 21, false)), userJson, false, true);
            var path = J$.W(2777785, 'path', J$.F(2777777, J$.I(typeof require === 'undefined' ? require = J$.R(2777761, 'require', undefined, true, true) : require = J$.R(2777761, 'require', require, true, true)), false)(J$.T(2777769, 'path', 21, false)), path, false, true);
            var utils = J$.W(2777841, 'utils', J$.F(2777833, J$.I(typeof require === 'undefined' ? require = J$.R(2777793, 'require', undefined, true, true) : require = J$.R(2777793, 'require', require, true, true)), false)(J$.M(2777825, J$.R(2777801, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(2777809, '__dirname', undefined, true, true) : __dirname = J$.R(2777809, '__dirname', __dirname, true, true)), J$.T(2777817, '../TestcaseUtils.js', 21, false))), utils, false, true);
            J$.M(2777881, J$.R(2777849, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(2777857, 'test', test, false, true), J$.R(2777865, 'userJson', userJson, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(2777873, '__dirname', undefined, true, true) : __dirname = J$.R(2777873, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(2778289, J$e);
        } finally {
            if (J$.Sr(2778297))
                continue jalangiLabel6;
            else
                break jalangiLabel6;
        }
    }
// JALANGI DO NOT INSTRUMENT

