J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(893833, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/context_object.js');
            function getContextObject(data, context) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(893761, arguments.callee, this, arguments);
                            arguments = J$.N(893769, 'arguments', arguments, true, false, false);
                            data = J$.N(893777, 'data', data, true, false, false);
                            context = J$.N(893785, 'context', context, true, false, false);
                            J$.N(893793, 'blog', blog, false, false, false);
                            J$.N(893801, 'chosenContext', chosenContext, false, false, false);
                            const blog = J$.W(893265, 'blog', J$.T(893257, {
                                cover_image: J$.M(893201, J$.R(893185, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(893193, 'cover_image', 21, false)),
                                twitter: J$.M(893225, J$.R(893209, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(893217, 'twitter', 21, false)),
                                facebook: J$.M(893249, J$.R(893233, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(893241, 'facebook', 21, false))
                            }, 11, false), blog, false, false);
                            let chosenContext;
                            if (J$.C(67128, J$.C(67048, J$.C(67040, J$.M(893297, J$.R(893273, '_', _, false, true), 'includes', false)(J$.R(893281, 'context', context, false, false), J$.T(893289, 'page', 21, false))) ? J$._() : J$.M(893329, J$.R(893305, '_', _, false, true), 'includes', false)(J$.R(893313, 'context', context, false, false), J$.T(893321, 'amp', 21, false))) ? J$.G(893345, J$.R(893337, 'data', data, false, false), 'post') : J$._())) {
                                chosenContext = J$.W(893369, 'chosenContext', J$.G(893361, J$.R(893353, 'data', data, false, false), 'post'), chosenContext, false, false);
                            } else if (J$.C(67120, J$.C(67056, J$.M(893401, J$.R(893377, '_', _, false, true), 'includes', false)(J$.R(893385, 'context', context, false, false), J$.T(893393, 'post', 21, false))) ? J$.G(893417, J$.R(893409, 'data', data, false, false), 'post') : J$._())) {
                                chosenContext = J$.W(893441, 'chosenContext', J$.G(893433, J$.R(893425, 'data', data, false, false), 'post'), chosenContext, false, false);
                            } else if (J$.C(67112, J$.C(67064, J$.M(893473, J$.R(893449, '_', _, false, true), 'includes', false)(J$.R(893457, 'context', context, false, false), J$.T(893465, 'page', 21, false))) ? J$.G(893489, J$.R(893481, 'data', data, false, false), 'page') : J$._())) {
                                chosenContext = J$.W(893513, 'chosenContext', J$.G(893505, J$.R(893497, 'data', data, false, false), 'page'), chosenContext, false, false);
                            } else if (J$.C(67104, J$.C(67072, J$.M(893545, J$.R(893521, '_', _, false, true), 'includes', false)(J$.R(893529, 'context', context, false, false), J$.T(893537, 'tag', 21, false))) ? J$.G(893561, J$.R(893553, 'data', data, false, false), 'tag') : J$._())) {
                                chosenContext = J$.W(893585, 'chosenContext', J$.G(893577, J$.R(893569, 'data', data, false, false), 'tag'), chosenContext, false, false);
                            } else if (J$.C(67096, J$.C(67080, J$.M(893617, J$.R(893593, '_', _, false, true), 'includes', false)(J$.R(893601, 'context', context, false, false), J$.T(893609, 'author', 21, false))) ? J$.G(893633, J$.R(893625, 'data', data, false, false), 'author') : J$._())) {
                                chosenContext = J$.W(893657, 'chosenContext', J$.G(893649, J$.R(893641, 'data', data, false, false), 'author'), chosenContext, false, false);
                            } else if (J$.C(67088, J$.G(893681, J$.R(893665, 'data', data, false, false), J$.R(893673, 'context', context, false, false)))) {
                                chosenContext = J$.W(893713, 'chosenContext', J$.G(893705, J$.R(893689, 'data', data, false, false), J$.R(893697, 'context', context, false, false)), chosenContext, false, false);
                            }
                            if (J$.C(67136, J$.U(89130, '!', J$.R(893721, 'chosenContext', chosenContext, false, false)))) {
                                chosenContext = J$.W(893737, 'chosenContext', J$.R(893729, 'blog', blog, false, false), chosenContext, false, false);
                            }
                            return J$.Rt(893753, J$.R(893745, 'chosenContext', chosenContext, false, false));
                        } catch (J$e) {
                            J$.Ex(893873, J$e);
                        } finally {
                            if (J$.Fr(893881))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(893841, 'settingsCache', settingsCache, false, false, false);
            J$.N(893849, '_', _, false, false, false);
            getContextObject = J$.N(893865, 'getContextObject', J$.T(893857, getContextObject, 12, false), true, false, false);
            const settingsCache = J$.W(893145, 'settingsCache', J$.F(893137, J$.I(typeof require === 'undefined' ? require = J$.R(893121, 'require', undefined, true, true) : require = J$.R(893121, 'require', require, true, true)), false)(J$.T(893129, '../../server/services/settings/cache', 21, false)), settingsCache, false, true);
            const _ = J$.W(893177, '_', J$.F(893169, J$.I(typeof require === 'undefined' ? require = J$.R(893153, 'require', undefined, true, true) : require = J$.R(893153, 'require', require, true, true)), false)(J$.T(893161, 'lodash', 21, false)), _, false, true);
            J$.P(893825, J$.I(typeof module === 'undefined' ? module = J$.R(893809, 'module', undefined, true, true) : module = J$.R(893809, 'module', module, true, true)), 'exports', J$.R(893817, 'getContextObject', getContextObject, false, true));
        } catch (J$e) {
            J$.Ex(893889, J$e);
        } finally {
            if (J$.Sr(893897))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

