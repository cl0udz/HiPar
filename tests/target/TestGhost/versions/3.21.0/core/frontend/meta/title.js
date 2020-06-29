J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(911025, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/title.js');
            function getTitle(data, root, J$.I(typeof options === 'undefined' ? options = J$.R(909409, 'options', undefined, true, true) : options = J$.R(909409, 'options', options, true, true)) = J$.T(909417, {}, 11, false)) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(910913, arguments.callee, this, arguments);
                            arguments = J$.N(910921, 'arguments', arguments, true, false, false);
                            data = J$.N(910929, 'data', data, true, false, false);
                            root = J$.N(910937, 'root', root, true, false, false);
                            undefined = J$.N(910945, 'undefined', undefined, true, false, false);
                            J$.N(910953, 'context', context, false, false, false);
                            J$.N(910961, 'siteTitle', siteTitle, false, false, false);
                            J$.N(910969, 'pagination', pagination, false, false, false);
                            J$.N(910977, 'optionsPropertyName', optionsPropertyName, false, false, false);
                            J$.N(910985, 'title', title, false, false, false);
                            J$.N(910993, 'pageString', pageString, false, false, false);
                            const context = J$.W(909457, 'context', J$.C(68536, J$.R(909425, 'root', root, false, false)) ? J$.G(909441, J$.R(909433, 'root', root, false, false), 'context') : J$.T(909449, null, 25, false), context, false, false);
                            const siteTitle = J$.W(909489, 'siteTitle', J$.M(909481, J$.R(909465, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(909473, 'title', 21, false)), siteTitle, false, false);
                            const pagination = J$.W(909529, 'pagination', J$.C(68544, J$.R(909497, 'root', root, false, false)) ? J$.G(909513, J$.R(909505, 'root', root, false, false), 'pagination') : J$.T(909521, null, 25, false), pagination, false, false);
                            const optionsPropertyName = J$.W(909561, 'optionsPropertyName', `${ J$.C(68552, J$.G(909545, J$.I(typeof options === 'undefined' ? options = J$.R(909537, 'options', undefined, true, true) : options = J$.R(909537, 'options', options, true, true)), 'property')) ? J$._() : J$.T(909553, 'meta', 21, false) }_title`, optionsPropertyName, false, false);
                            let title = J$.W(909577, 'title', J$.T(909569, '', 21, false), title, false, false);
                            let pageString = J$.W(909593, 'pageString', J$.T(909585, '', 21, false), pageString, false, false);
                            if (J$.C(68576, J$.C(68560, J$.R(909601, 'pagination', pagination, false, false)) ? J$.B(89378, '>', J$.G(909617, J$.R(909609, 'pagination', pagination, false, false), 'total'), J$.T(909625, 1, 22, false)) : J$._())) {
                                pageString = J$.W(909761, 'pageString', J$.C(68568, J$.M(909665, J$.R(909633, '_', _, false, true), 'has', false)(J$.G(909649, J$.I(typeof options === 'undefined' ? options = J$.R(909641, 'options', undefined, true, true) : options = J$.R(909641, 'options', options, true, true)), 'hash'), J$.T(909657, 'page', 21, false))) ? J$.M(909721, J$.G(909689, J$.G(909681, J$.I(typeof options === 'undefined' ? options = J$.R(909673, 'options', undefined, true, true) : options = J$.R(909673, 'options', options, true, true)), 'hash'), 'page'), 'replace', false)(J$.T(909697, '%', 21, false), J$.G(909713, J$.R(909705, 'pagination', pagination, false, false), 'page')) : J$.B(89394, '+', J$.B(89386, '+', J$.T(909729, ' (Page ', 21, false), J$.G(909745, J$.R(909737, 'pagination', pagination, false, false), 'page')), J$.T(909753, ')', 21, false)), pageString, false, false);
                            }
                            if (J$.C(68808, J$.G(909777, J$.R(909769, 'data', data, false, false), 'meta_title'))) {
                                title = J$.W(909801, 'title', J$.G(909793, J$.R(909785, 'data', data, false, false), 'meta_title'), title, false, false);
                            } else if (J$.C(68800, J$.M(909833, J$.R(909809, '_', _, false, true), 'includes', false)(J$.R(909817, 'context', context, false, false), J$.T(909825, 'home', 21, false)))) {
                                if (J$.C(68600, J$.G(909849, J$.I(typeof options === 'undefined' ? options = J$.R(909841, 'options', undefined, true, true) : options = J$.R(909841, 'options', options, true, true)), 'property'))) {
                                    title = J$.W(909889, 'title', J$.C(68584, J$.M(909873, J$.R(909857, 'settingsCache', settingsCache, false, true), 'get', false)(J$.R(909865, 'optionsPropertyName', optionsPropertyName, false, false))) ? J$._() : J$.R(909881, 'siteTitle', siteTitle, false, false), title, false, false);
                                } else {
                                    title = J$.W(909929, 'title', J$.C(68592, J$.M(909913, J$.R(909897, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(909905, 'meta_title', 21, false))) ? J$._() : J$.R(909921, 'siteTitle', siteTitle, false, false), title, false, false);
                                }
                            } else if (J$.C(68792, J$.C(68616, J$.C(68608, J$.M(909961, J$.R(909937, '_', _, false, true), 'includes', false)(J$.R(909945, 'context', context, false, false), J$.T(909953, 'author', 21, false))) ? J$.G(909977, J$.R(909969, 'data', data, false, false), 'author') : J$._()) ? J$.M(910009, J$.R(909985, '_', _, false, true), 'includes', false)(J$.R(909993, 'context', context, false, false), J$.T(910001, 'paged', 21, false)) : J$._())) {
                                title = J$.W(910065, 'title', J$.B(89418, '+', J$.B(89410, '+', J$.B(89402, '+', J$.G(910033, J$.G(910025, J$.R(910017, 'data', data, false, false), 'author'), 'name'), J$.T(910041, ' - ', 21, false)), J$.R(910049, 'siteTitle', siteTitle, false, false)), J$.R(910057, 'pageString', pageString, false, false)), title, false, false);
                            } else if (J$.C(68784, J$.C(68624, J$.M(910097, J$.R(910073, '_', _, false, true), 'includes', false)(J$.R(910081, 'context', context, false, false), J$.T(910089, 'author', 21, false))) ? J$.G(910113, J$.R(910105, 'data', data, false, false), 'author') : J$._())) {
                                title = J$.W(910161, 'title', J$.B(89434, '+', J$.B(89426, '+', J$.G(910137, J$.G(910129, J$.R(910121, 'data', data, false, false), 'author'), 'name'), J$.T(910145, ' - ', 21, false)), J$.R(910153, 'siteTitle', siteTitle, false, false)), title, false, false);
                            } else if (J$.C(68776, J$.C(68640, J$.C(68632, J$.M(910193, J$.R(910169, '_', _, false, true), 'includes', false)(J$.R(910177, 'context', context, false, false), J$.T(910185, 'tag', 21, false))) ? J$.G(910209, J$.R(910201, 'data', data, false, false), 'tag') : J$._()) ? J$.M(910241, J$.R(910217, '_', _, false, true), 'includes', false)(J$.R(910225, 'context', context, false, false), J$.T(910233, 'paged', 21, false)) : J$._())) {
                                title = J$.W(910321, 'title', J$.C(68648, J$.G(910265, J$.G(910257, J$.R(910249, 'data', data, false, false), 'tag'), 'meta_title')) ? J$._() : J$.B(89458, '+', J$.B(89450, '+', J$.B(89442, '+', J$.G(910289, J$.G(910281, J$.R(910273, 'data', data, false, false), 'tag'), 'name'), J$.T(910297, ' - ', 21, false)), J$.R(910305, 'siteTitle', siteTitle, false, false)), J$.R(910313, 'pageString', pageString, false, false)), title, false, false);
                            } else if (J$.C(68768, J$.C(68656, J$.M(910353, J$.R(910329, '_', _, false, true), 'includes', false)(J$.R(910337, 'context', context, false, false), J$.T(910345, 'tag', 21, false))) ? J$.G(910369, J$.R(910361, 'data', data, false, false), 'tag') : J$._())) {
                                title = J$.W(910441, 'title', J$.C(68664, J$.G(910393, J$.G(910385, J$.R(910377, 'data', data, false, false), 'tag'), 'meta_title')) ? J$._() : J$.B(89474, '+', J$.B(89466, '+', J$.G(910417, J$.G(910409, J$.R(910401, 'data', data, false, false), 'tag'), 'name'), J$.T(910425, ' - ', 21, false)), J$.R(910433, 'siteTitle', siteTitle, false, false)), title, false, false);
                            } else if (J$.C(68760, J$.C(68672, J$.M(910473, J$.R(910449, '_', _, false, true), 'includes', false)(J$.R(910457, 'context', context, false, false), J$.T(910465, 'post', 21, false))) ? J$.G(910489, J$.R(910481, 'data', data, false, false), 'post') : J$._())) {
                                title = J$.W(910577, 'title', J$.C(68688, J$.C(68680, J$.G(910521, J$.G(910505, J$.R(910497, 'data', data, false, false), 'post'), J$.R(910513, 'optionsPropertyName', optionsPropertyName, false, false))) ? J$._() : J$.G(910545, J$.G(910537, J$.R(910529, 'data', data, false, false), 'post'), 'meta_title')) ? J$._() : J$.G(910569, J$.G(910561, J$.R(910553, 'data', data, false, false), 'post'), 'title'), title, false, false);
                            } else if (J$.C(68752, J$.C(68696, J$.M(910609, J$.R(910585, '_', _, false, true), 'includes', false)(J$.R(910593, 'context', context, false, false), J$.T(910601, 'page', 21, false))) ? J$.G(910625, J$.R(910617, 'data', data, false, false), 'post') : J$._())) {
                                title = J$.W(910713, 'title', J$.C(68712, J$.C(68704, J$.G(910657, J$.G(910641, J$.R(910633, 'data', data, false, false), 'post'), J$.R(910649, 'optionsPropertyName', optionsPropertyName, false, false))) ? J$._() : J$.G(910681, J$.G(910673, J$.R(910665, 'data', data, false, false), 'post'), 'meta_title')) ? J$._() : J$.G(910705, J$.G(910697, J$.R(910689, 'data', data, false, false), 'post'), 'title'), title, false, false);
                            } else if (J$.C(68744, J$.C(68720, J$.M(910745, J$.R(910721, '_', _, false, true), 'includes', false)(J$.R(910729, 'context', context, false, false), J$.T(910737, 'page', 21, false))) ? J$.G(910761, J$.R(910753, 'data', data, false, false), 'page') : J$._())) {
                                title = J$.W(910849, 'title', J$.C(68736, J$.C(68728, J$.G(910793, J$.G(910777, J$.R(910769, 'data', data, false, false), 'page'), J$.R(910785, 'optionsPropertyName', optionsPropertyName, false, false))) ? J$._() : J$.G(910817, J$.G(910809, J$.R(910801, 'data', data, false, false), 'page'), 'meta_title')) ? J$._() : J$.G(910841, J$.G(910833, J$.R(910825, 'data', data, false, false), 'page'), 'title'), title, false, false);
                            } else {
                                title = J$.W(910873, 'title', J$.B(89482, '+', J$.R(910857, 'siteTitle', siteTitle, false, false), J$.R(910865, 'pageString', pageString, false, false)), title, false, false);
                            }
                            return J$.Rt(910905, J$.M(910897, J$.C(68816, J$.R(910881, 'title', title, false, false)) ? J$._() : J$.T(910889, '', 21, false), 'trim', false)());
                        } catch (J$e) {
                            J$.Ex(911065, J$e);
                        } finally {
                            if (J$.Fr(911073))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(911033, '_', _, false, false, false);
            J$.N(911041, 'settingsCache', settingsCache, false, false, false);
            getTitle = J$.N(911057, 'getTitle', J$.T(911049, getTitle, 12, false), true, false, false);
            const _ = J$.W(909369, '_', J$.F(909361, J$.I(typeof require === 'undefined' ? require = J$.R(909345, 'require', undefined, true, true) : require = J$.R(909345, 'require', require, true, true)), false)(J$.T(909353, 'lodash', 21, false)), _, false, true);
            const settingsCache = J$.W(909401, 'settingsCache', J$.F(909393, J$.I(typeof require === 'undefined' ? require = J$.R(909377, 'require', undefined, true, true) : require = J$.R(909377, 'require', require, true, true)), false)(J$.T(909385, '../../server/services/settings/cache', 21, false)), settingsCache, false, true);
            J$.P(911017, J$.I(typeof module === 'undefined' ? module = J$.R(911001, 'module', undefined, true, true) : module = J$.R(911001, 'module', module, true, true)), 'exports', J$.R(911009, 'getTitle', getTitle, false, true));
        } catch (J$e) {
            J$.Ex(911081, J$e);
        } finally {
            if (J$.Sr(911089))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

