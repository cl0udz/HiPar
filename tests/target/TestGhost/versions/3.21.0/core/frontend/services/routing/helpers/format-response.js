J$.noInstrEval = false;
jalangiLabel3:
    while (true) {
        try {
            J$.Se(926649, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/helpers/format-response.js');
            function formatPageResponse(result) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(926529, arguments.callee, this, arguments);
                            arguments = J$.N(926537, 'arguments', arguments, true, false, false);
                            result = J$.N(926545, 'result', result, true, false, false);
                            J$.N(926553, 'response', response, false, false, false);
                            const response = J$.W(926129, 'response', J$.T(926121, {}, 11, false), response, false, false);
                            if (J$.C(69568, J$.G(926145, J$.R(926137, 'result', result, false, false), 'posts'))) {
                                J$.P(926177, J$.R(926153, 'response', response, false, false), 'posts', J$.G(926169, J$.R(926161, 'result', result, false, false), 'posts'));
                            }
                            if (J$.C(69584, J$.C(69576, J$.G(926193, J$.R(926185, 'result', result, false, false), 'meta')) ? J$.G(926217, J$.G(926209, J$.R(926201, 'result', result, false, false), 'meta'), 'pagination') : J$._())) {
                                J$.P(926257, J$.R(926225, 'response', response, false, false), 'pagination', J$.G(926249, J$.G(926241, J$.R(926233, 'result', result, false, false), 'meta'), 'pagination'));
                            }
                            J$.M(926505, J$.R(926265, '_', _, false, true), 'each', false)(J$.G(926281, J$.R(926273, 'result', result, false, false), 'data'), J$.T(926497, function (data, name) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(926465, arguments.callee, this, arguments);
                                            arguments = J$.N(926473, 'arguments', arguments, true, false, false);
                                            data = J$.N(926481, 'data', data, true, false, false);
                                            name = J$.N(926489, 'name', name, true, false, false);
                                            if (J$.C(69592, J$.G(926297, J$.R(926289, 'data', data, false, false), 'meta'))) {
                                                J$.P(926329, J$.R(926305, 'response', response, false, false), J$.R(926313, 'name', name, false, false), J$.R(926321, 'data', data, false, false));
                                                J$.P(926385, J$.G(926353, J$.R(926337, 'response', response, false, false), J$.R(926345, 'name', name, false, false)), 'pagination', J$.G(926377, J$.G(926369, J$.R(926361, 'data', data, false, false), 'meta'), 'pagination'));
                                                J$.B(89826, 'delete', J$.G(926409, J$.R(926393, 'response', response, false, false), J$.R(926401, 'name', name, false, false)), 'meta');
                                            } else {
                                                J$.P(926457, J$.R(926417, 'response', response, false, false), J$.R(926425, 'name', name, false, false), J$.G(926449, J$.R(926433, 'data', data, false, false), J$.T(926441, 0, 22, false)));
                                            }
                                        } catch (J$e) {
                                            J$.Ex(926697, J$e);
                                        } finally {
                                            if (J$.Fr(926705))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            return J$.Rt(926521, J$.R(926513, 'response', response, false, false));
                        } catch (J$e) {
                            J$.Ex(926713, J$e);
                        } finally {
                            if (J$.Fr(926721))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function formatResponse(post) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(926585, arguments.callee, this, arguments);
                            arguments = J$.N(926593, 'arguments', arguments, true, false, false);
                            post = J$.N(926601, 'post', post, true, false, false);
                            return J$.Rt(926577, J$.T(926569, { post: J$.R(926561, 'post', post, false, false) }, 11, false));
                        } catch (J$e) {
                            J$.Ex(926729, J$e);
                        } finally {
                            if (J$.Fr(926737))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(926657, '_', _, false, false, false);
            formatPageResponse = J$.N(926673, 'formatPageResponse', J$.T(926665, formatPageResponse, 12, false), true, false, false);
            formatResponse = J$.N(926689, 'formatResponse', J$.T(926681, formatResponse, 12, false), true, false, false);
            const _ = J$.W(926113, '_', J$.F(926105, J$.I(typeof require === 'undefined' ? require = J$.R(926089, 'require', undefined, true, true) : require = J$.R(926089, 'require', require, true, true)), false)(J$.T(926097, 'lodash', 21, false)), _, false, true);
            J$.P(926641, J$.I(typeof module === 'undefined' ? module = J$.R(926609, 'module', undefined, true, true) : module = J$.R(926609, 'module', module, true, true)), 'exports', J$.T(926633, {
                entries: J$.R(926617, 'formatPageResponse', formatPageResponse, false, true),
                entry: J$.R(926625, 'formatResponse', formatResponse, false, true)
            }, 11, false));
        } catch (J$e) {
            J$.Ex(926745, J$e);
        } finally {
            if (J$.Sr(926753))
                continue jalangiLabel3;
            else
                break jalangiLabel3;
        }
    }
// JALANGI DO NOT INSTRUMENT

