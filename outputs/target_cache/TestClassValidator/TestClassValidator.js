J$.noInstrEval = false;
jalangiLabel6:
    while (true) {
        try {
            J$.Se(2843881, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestClassValidator/TestClassValidator.js');
            function test(userJson) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(2843849, arguments.callee, this, arguments);
                            arguments = J$.N(2843857, 'arguments', arguments, true, false, false);
                            userJson = J$.N(2843865, 'userJson', userJson, true, false, false);
                            J$.N(2843873, 'users', users, false, false, false);
                            var users = J$.W(2843697, 'users', J$.M(2843689, J$.R(2843665, 'class_transformer_1', class_transformer_1, false, true), 'plainToClass', false)(J$.R(2843673, 'Post', Post, false, true), J$.R(2843681, 'userJson', userJson, false, false)), users, false, false);
                            J$.M(2843841, J$.M(2843721, J$.R(2843705, 'class_validator_1', class_validator_1, false, true), 'validate', false)(J$.R(2843713, 'users', users, false, false)), 'then', false)(J$.T(2843833, function (errors) {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(2843809, arguments.callee, this, arguments);
                                            arguments = J$.N(2843817, 'arguments', arguments, true, false, false);
                                            errors = J$.N(2843825, 'errors', errors, true, false, false);
                                            if (J$.C(145344, J$.B(202514, '>', J$.G(2843737, J$.R(2843729, 'errors', errors, false, false), 'length'), J$.T(2843745, 0, 22, false)))) {
                                                J$.M(2843777, J$.I(typeof console === 'undefined' ? console = J$.R(2843753, 'console', undefined, true, true) : console = J$.R(2843753, 'console', console, true, true)), 'log', false)(J$.T(2843761, 'validation failed. errors: ', 21, false), J$.R(2843769, 'errors', errors, false, false));
                                            } else {
                                                J$.M(2843801, J$.I(typeof console === 'undefined' ? console = J$.R(2843785, 'console', undefined, true, true) : console = J$.R(2843785, 'console', console, true, true)), 'log', false)(J$.T(2843793, 'validation succeed', 21, false));
                                            }
                                        } catch (J$e) {
                                            J$.Ex(2844033, J$e);
                                        } finally {
                                            if (J$.Fr(2844041))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(2844049, J$e);
                        } finally {
                            if (J$.Fr(2844057))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(2843889, '__decorate', __decorate, false, false, false);
            J$.N(2843897, '__metadata', __metadata, false, false, false);
            J$.N(2843905, 'class_validator_1', class_validator_1, false, false, false);
            J$.N(2843913, 'class_transformer_1', class_transformer_1, false, false, false);
            J$.N(2843921, 'Post', Post, false, false, false);
            J$.N(2843929, 'userJson', userJson, false, false, false);
            J$.N(2843937, 'path', path, false, false, false);
            J$.N(2843945, 'utils', utils, false, false, false);
            test = J$.N(2843961, 'test', J$.T(2843953, test, 12, false), true, false, false);
            J$.T(2841793, 'use strict', 21, false);
            var __decorate = J$.W(2842449, '__decorate', J$.C(145304, J$.C(145208, J$.R(2841801, 'this', this, false, false)) ? J$.G(2841817, J$.R(2841809, 'this', this, false, false), '__decorate') : J$._()) ? J$._() : J$.T(2842441, function (decorators, target, key, desc) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(2842361, arguments.callee, this, arguments);
                            arguments = J$.N(2842369, 'arguments', arguments, true, false, false);
                            decorators = J$.N(2842377, 'decorators', decorators, true, false, false);
                            target = J$.N(2842385, 'target', target, true, false, false);
                            key = J$.N(2842393, 'key', key, true, false, false);
                            desc = J$.N(2842401, 'desc', desc, true, false, false);
                            J$.N(2842409, 'c', c, false, false, false);
                            J$.N(2842417, 'r', r, false, false, false);
                            J$.N(2842425, 'd', d, false, false, false);
                            J$.N(2842433, 'i', i, false, false, false);
                            var c = J$.W(2841929, 'c', J$.G(2841833, J$.I(typeof arguments === 'undefined' ? arguments = J$.R(2841825, 'arguments', undefined, true, true) : arguments = J$.R(2841825, 'arguments', arguments, true, true)), 'length'), c, false, false), r = J$.W(2841937, 'r', J$.C(145224, J$.B(202370, '<', J$.R(2841841, 'c', c, false, false), J$.T(2841849, 3, 22, false))) ? J$.R(2841857, 'target', target, false, false) : J$.C(145216, J$.B(202378, '===', J$.R(2841865, 'desc', desc, false, false), J$.T(2841873, null, 25, false))) ? desc = J$.W(2841913, 'desc', J$.M(2841905, J$.I(typeof Object === 'undefined' ? Object = J$.R(2841881, 'Object', undefined, true, true) : Object = J$.R(2841881, 'Object', Object, true, true)), 'getOwnPropertyDescriptor', false)(J$.R(2841889, 'target', target, false, false), J$.R(2841897, 'key', key, false, false)), desc, false, false) : J$.R(2841921, 'desc', desc, false, false), r, false, false), d;
                            if (J$.C(145280, J$.C(145232, J$.B(202394, '===', J$.U(202386, 'typeof', J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2841945, 'Reflect', undefined, true, true) : Reflect = J$.R(2841945, 'Reflect', Reflect, true, true))), J$.T(2841953, 'object', 21, false))) ? J$.B(202410, '===', J$.U(202402, 'typeof', J$.G(2841969, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2841961, 'Reflect', undefined, true, true) : Reflect = J$.R(2841961, 'Reflect', Reflect, true, true)), 'decorate')), J$.T(2841977, 'function', 21, false)) : J$._()))
                                r = J$.W(2842033, 'r', J$.M(2842025, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2841985, 'Reflect', undefined, true, true) : Reflect = J$.R(2841985, 'Reflect', Reflect, true, true)), 'decorate', false)(J$.R(2841993, 'decorators', decorators, false, false), J$.R(2842001, 'target', target, false, false), J$.R(2842009, 'key', key, false, false), J$.R(2842017, 'desc', desc, false, false)), r, false, false);
                            else
                                for (var i = J$.W(2842065, 'i', J$.B(202418, '-', J$.G(2842049, J$.R(2842041, 'decorators', decorators, false, false), 'length'), J$.T(2842057, 1, 22, false)), i, false, false); J$.C(145272, J$.B(202426, '>=', J$.R(2842073, 'i', i, false, false), J$.T(2842081, 0, 22, false))); J$.B(202450, '+', i = J$.W(2842097, 'i', J$.B(202442, '-', J$.U(202434, '+', J$.R(2842089, 'i', i, false, false)), 1), i, false, false), 1))
                                    if (J$.C(145264, d = J$.W(2842129, 'd', J$.G(2842121, J$.R(2842105, 'decorators', decorators, false, false), J$.R(2842113, 'i', i, false, false)), d, false, false)))
                                        r = J$.W(2842273, 'r', J$.C(145256, J$.C(145248, J$.B(202458, '<', J$.R(2842137, 'c', c, false, false), J$.T(2842145, 3, 22, false))) ? J$.F(2842169, J$.R(2842153, 'd', d, false, false), false)(J$.R(2842161, 'r', r, false, false)) : J$.C(145240, J$.B(202466, '>', J$.R(2842177, 'c', c, false, false), J$.T(2842185, 3, 22, false))) ? J$.F(2842225, J$.R(2842193, 'd', d, false, false), false)(J$.R(2842201, 'target', target, false, false), J$.R(2842209, 'key', key, false, false), J$.R(2842217, 'r', r, false, false)) : J$.F(2842257, J$.R(2842233, 'd', d, false, false), false)(J$.R(2842241, 'target', target, false, false), J$.R(2842249, 'key', key, false, false))) ? J$._() : J$.R(2842265, 'r', r, false, false), r, false, false);
                            return J$.Rt(2842353, (J$.C(145296, J$.C(145288, J$.B(202474, '>', J$.R(2842281, 'c', c, false, false), J$.T(2842289, 3, 22, false))) ? J$.R(2842297, 'r', r, false, false) : J$._()) ? J$.M(2842337, J$.I(typeof Object === 'undefined' ? Object = J$.R(2842305, 'Object', undefined, true, true) : Object = J$.R(2842305, 'Object', Object, true, true)), 'defineProperty', false)(J$.R(2842313, 'target', target, false, false), J$.R(2842321, 'key', key, false, false), J$.R(2842329, 'r', r, false, false)) : J$._(), J$.R(2842345, 'r', r, false, false)));
                        } catch (J$e) {
                            J$.Ex(2843969, J$e);
                        } finally {
                            if (J$.Fr(2843977))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), __decorate, false, true);
            var __metadata = J$.W(2842601, '__metadata', J$.C(145336, J$.C(145312, J$.R(2842457, 'this', this, false, false)) ? J$.G(2842473, J$.R(2842465, 'this', this, false, false), '__metadata') : J$._()) ? J$._() : J$.T(2842593, function (k, v) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(2842561, arguments.callee, this, arguments);
                            arguments = J$.N(2842569, 'arguments', arguments, true, false, false);
                            k = J$.N(2842577, 'k', k, true, false, false);
                            v = J$.N(2842585, 'v', v, true, false, false);
                            if (J$.C(145328, J$.C(145320, J$.B(202490, '===', J$.U(202482, 'typeof', J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2842481, 'Reflect', undefined, true, true) : Reflect = J$.R(2842481, 'Reflect', Reflect, true, true))), J$.T(2842489, 'object', 21, false))) ? J$.B(202506, '===', J$.U(202498, 'typeof', J$.G(2842505, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2842497, 'Reflect', undefined, true, true) : Reflect = J$.R(2842497, 'Reflect', Reflect, true, true)), 'metadata')), J$.T(2842513, 'function', 21, false)) : J$._()))
                                return J$.Rt(2842553, J$.M(2842545, J$.I(typeof Reflect === 'undefined' ? Reflect = J$.R(2842521, 'Reflect', undefined, true, true) : Reflect = J$.R(2842521, 'Reflect', Reflect, true, true)), 'metadata', false)(J$.R(2842529, 'k', k, false, false), J$.R(2842537, 'v', v, false, false)));
                        } catch (J$e) {
                            J$.Ex(2843985, J$e);
                        } finally {
                            if (J$.Fr(2843993))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), __metadata, false, true);
            J$.M(2842649, J$.I(typeof Object === 'undefined' ? Object = J$.R(2842609, 'Object', undefined, true, true) : Object = J$.R(2842609, 'Object', Object, true, true)), 'defineProperty', false)(J$.I(typeof exports === 'undefined' ? exports = J$.R(2842617, 'exports', undefined, true, true) : exports = J$.R(2842617, 'exports', exports, true, true)), J$.T(2842625, '__esModule', 21, false), J$.T(2842641, { value: J$.T(2842633, true, 23, false) }, 11, false));
            var class_validator_1 = J$.W(2842681, 'class_validator_1', J$.F(2842673, J$.I(typeof require === 'undefined' ? require = J$.R(2842657, 'require', undefined, true, true) : require = J$.R(2842657, 'require', require, true, true)), false)(J$.T(2842665, 'class-validator', 21, false)), class_validator_1, false, true);
            var class_transformer_1 = J$.W(2842713, 'class_transformer_1', J$.F(2842705, J$.I(typeof require === 'undefined' ? require = J$.R(2842689, 'require', undefined, true, true) : require = J$.R(2842689, 'require', require, true, true)), false)(J$.T(2842697, 'class-transformer', 21, false)), class_transformer_1, false, true);
            var Post = J$.W(2843497, 'Post', J$.F(2843489, J$.T(2843481, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(2843449, arguments.callee, this, arguments);
                            function Post() {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(2842721, arguments.callee, this, arguments);
                                            arguments = J$.N(2842729, 'arguments', arguments, true, false, false);
                                        } catch (J$e) {
                                            J$.Ex(2844001, J$e);
                                        } finally {
                                            if (J$.Fr(2844009))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(2843457, 'arguments', arguments, true, false, false);
                            Post = J$.N(2843473, 'Post', J$.T(2843465, Post, 12, false), true, false, false);
                            J$.F(2842849, J$.R(2842737, '__decorate', __decorate, false, true), false)(J$.T(2842809, [
                                J$.M(2842769, J$.R(2842745, 'class_validator_1', class_validator_1, false, true), 'Length', false)(J$.T(2842753, 10, 22, false), J$.T(2842761, 20, 22, false)),
                                J$.F(2842801, J$.R(2842777, '__metadata', __metadata, false, true), false)(J$.T(2842785, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(2842793, 'String', undefined, true, true) : String = J$.R(2842793, 'String', String, true, true)))
                            ], 10, false), J$.G(2842825, J$.R(2842817, 'Post', Post, false, false), 'prototype'), J$.T(2842833, 'title', 21, false), void J$.T(2842841, 0, 22, false));
                            J$.F(2842961, J$.R(2842857, '__decorate', __decorate, false, true), false)(J$.T(2842921, [
                                J$.M(2842881, J$.R(2842865, 'class_validator_1', class_validator_1, false, true), 'Contains', false)(J$.T(2842873, 'hello', 21, false)),
                                J$.F(2842913, J$.R(2842889, '__metadata', __metadata, false, true), false)(J$.T(2842897, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(2842905, 'String', undefined, true, true) : String = J$.R(2842905, 'String', String, true, true)))
                            ], 10, false), J$.G(2842937, J$.R(2842929, 'Post', Post, false, false), 'prototype'), J$.T(2842945, 'text', 21, false), void J$.T(2842953, 0, 22, false));
                            J$.F(2843113, J$.R(2842969, '__decorate', __decorate, false, true), false)(J$.T(2843073, [
                                J$.M(2842985, J$.R(2842977, 'class_validator_1', class_validator_1, false, true), 'IsInt', false)(),
                                J$.M(2843009, J$.R(2842993, 'class_validator_1', class_validator_1, false, true), 'Min', false)(J$.T(2843001, 0, 22, false)),
                                J$.M(2843033, J$.R(2843017, 'class_validator_1', class_validator_1, false, true), 'Max', false)(J$.T(2843025, 10, 22, false)),
                                J$.F(2843065, J$.R(2843041, '__metadata', __metadata, false, true), false)(J$.T(2843049, 'design:type', 21, false), J$.I(typeof Number === 'undefined' ? Number = J$.R(2843057, 'Number', undefined, true, true) : Number = J$.R(2843057, 'Number', Number, true, true)))
                            ], 10, false), J$.G(2843089, J$.R(2843081, 'Post', Post, false, false), 'prototype'), J$.T(2843097, 'rating', 21, false), void J$.T(2843105, 0, 22, false));
                            J$.F(2843217, J$.R(2843121, '__decorate', __decorate, false, true), false)(J$.T(2843177, [
                                J$.M(2843137, J$.R(2843129, 'class_validator_1', class_validator_1, false, true), 'IsEmail', false)(),
                                J$.F(2843169, J$.R(2843145, '__metadata', __metadata, false, true), false)(J$.T(2843153, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(2843161, 'String', undefined, true, true) : String = J$.R(2843161, 'String', String, true, true)))
                            ], 10, false), J$.G(2843193, J$.R(2843185, 'Post', Post, false, false), 'prototype'), J$.T(2843201, 'email', 21, false), void J$.T(2843209, 0, 22, false));
                            J$.F(2843321, J$.R(2843225, '__decorate', __decorate, false, true), false)(J$.T(2843281, [
                                J$.M(2843241, J$.R(2843233, 'class_validator_1', class_validator_1, false, true), 'IsFQDN', false)(),
                                J$.F(2843273, J$.R(2843249, '__metadata', __metadata, false, true), false)(J$.T(2843257, 'design:type', 21, false), J$.I(typeof String === 'undefined' ? String = J$.R(2843265, 'String', undefined, true, true) : String = J$.R(2843265, 'String', String, true, true)))
                            ], 10, false), J$.G(2843297, J$.R(2843289, 'Post', Post, false, false), 'prototype'), J$.T(2843305, 'site', 21, false), void J$.T(2843313, 0, 22, false));
                            J$.F(2843425, J$.R(2843329, '__decorate', __decorate, false, true), false)(J$.T(2843385, [
                                J$.M(2843345, J$.R(2843337, 'class_validator_1', class_validator_1, false, true), 'IsDate', false)(),
                                J$.F(2843377, J$.R(2843353, '__metadata', __metadata, false, true), false)(J$.T(2843361, 'design:type', 21, false), J$.I(typeof Date === 'undefined' ? Date = J$.R(2843369, 'Date', undefined, true, true) : Date = J$.R(2843369, 'Date', Date, true, true)))
                            ], 10, false), J$.G(2843401, J$.R(2843393, 'Post', Post, false, false), 'prototype'), J$.T(2843409, 'createDate', 21, false), void J$.T(2843417, 0, 22, false));
                            return J$.Rt(2843441, J$.R(2843433, 'Post', Post, false, false));
                        } catch (J$e) {
                            J$.Ex(2844017, J$e);
                        } finally {
                            if (J$.Fr(2844025))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), false)(), Post, false, true);
            var userJson = J$.W(2843529, 'userJson', J$.M(2843521, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(2843505, 'JSON', undefined, true, true) : JSON = J$.R(2843505, 'JSON', JSON, true, true)), 'parse', false)(J$.T(2843513, '{"title":"Hello","rating":5}', 21, false)), userJson, false, true);
            var path = J$.W(2843561, 'path', J$.F(2843553, J$.I(typeof require === 'undefined' ? require = J$.R(2843537, 'require', undefined, true, true) : require = J$.R(2843537, 'require', require, true, true)), false)(J$.T(2843545, 'path', 21, false)), path, false, true);
            var utils = J$.W(2843617, 'utils', J$.F(2843609, J$.I(typeof require === 'undefined' ? require = J$.R(2843569, 'require', undefined, true, true) : require = J$.R(2843569, 'require', require, true, true)), false)(J$.M(2843601, J$.R(2843577, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(2843585, '__dirname', undefined, true, true) : __dirname = J$.R(2843585, '__dirname', __dirname, true, true)), J$.T(2843593, '../TestcaseUtils.js', 21, false))), utils, false, true);
            J$.M(2843657, J$.R(2843625, 'utils', utils, false, true), 'whatWeDoThisTime', false)(J$.R(2843633, 'test', test, false, true), J$.R(2843641, 'userJson', userJson, false, true), J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(2843649, '__dirname', undefined, true, true) : __dirname = J$.R(2843649, '__dirname', __dirname, true, true)));
        } catch (J$e) {
            J$.Ex(2844065, J$e);
        } finally {
            if (J$.Sr(2844073))
                continue jalangiLabel6;
            else
                break jalangiLabel6;
        }
    }
// JALANGI DO NOT INSTRUMENT

