J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(896865, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/description.js');
            function getDescription(data, root, J$.I(typeof options === 'undefined' ? options = J$.R(895081, 'options', undefined, true, true) : options = J$.R(895081, 'options', options, true, true)) = J$.T(895089, {}, 11, false)) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(896769, arguments.callee, this, arguments);
                            arguments = J$.N(896777, 'arguments', arguments, true, false, false);
                            data = J$.N(896785, 'data', data, true, false, false);
                            root = J$.N(896793, 'root', root, true, false, false);
                            undefined = J$.N(896801, 'undefined', undefined, true, false, false);
                            J$.N(896809, 'context', context, false, false, false);
                            J$.N(896817, 'description', description, false, false, false);
                            J$.N(896825, 'siteDescription', siteDescription, false, false, false);
                            J$.N(896833, 'optionsPropertyName', optionsPropertyName, false, false, false);
                            const context = J$.W(895129, 'context', J$.C(67240, J$.R(895097, 'root', root, false, false)) ? J$.G(895113, J$.R(895105, 'root', root, false, false), 'context') : J$.T(895121, null, 25, false), context, false, false);
                            let description = J$.W(895145, 'description', J$.T(895137, '', 21, false), description, false, false);
                            if (J$.C(67664, J$.G(895161, J$.R(895153, 'data', data, false, false), 'meta_description'))) {
                                description = J$.W(895185, 'description', J$.G(895177, J$.R(895169, 'data', data, false, false), 'meta_description'), description, false, false);
                            } else if (J$.C(67656, J$.M(895217, J$.R(895193, '_', _, false, true), 'includes', false)(J$.R(895201, 'context', context, false, false), J$.T(895209, 'home', 21, false)))) {
                                const siteDescription = J$.W(895273, 'siteDescription', J$.C(67248, J$.M(895241, J$.R(895225, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(895233, 'meta_description', 21, false))) ? J$._() : J$.M(895265, J$.R(895249, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(895257, 'description', 21, false)), siteDescription, false, false);
                                if (J$.C(67280, J$.G(895289, J$.I(typeof options === 'undefined' ? options = J$.R(895281, 'options', undefined, true, true) : options = J$.R(895281, 'options', options, true, true)), 'property'))) {
                                    const optionsPropertyName = J$.W(895321, 'optionsPropertyName', `${ J$.C(67256, J$.G(895305, J$.I(typeof options === 'undefined' ? options = J$.R(895297, 'options', undefined, true, true) : options = J$.R(895297, 'options', options, true, true)), 'property')) ? J$._() : J$.T(895313, 'meta', 21, false) }_description`, optionsPropertyName, false, false);
                                    description = J$.W(895369, 'description', J$.C(67272, J$.C(67264, J$.M(895345, J$.R(895329, 'settingsCache', settingsCache, false, true), 'get', false)(J$.R(895337, 'optionsPropertyName', optionsPropertyName, false, false))) ? J$._() : J$.R(895353, 'siteDescription', siteDescription, false, false)) ? J$._() : J$.T(895361, '', 21, false), description, false, false);
                                } else {
                                    description = J$.W(895385, 'description', J$.R(895377, 'siteDescription', siteDescription, false, false), description, false, false);
                                }
                            } else if (J$.C(67648, J$.C(67288, J$.M(895417, J$.R(895393, '_', _, false, true), 'includes', false)(J$.R(895401, 'context', context, false, false), J$.T(895409, 'author', 21, false))) ? J$.G(895433, J$.R(895425, 'data', data, false, false), 'author') : J$._())) {
                                if (J$.C(67336, J$.C(67296, J$.U(89138, '!', J$.G(895449, J$.I(typeof options === 'undefined' ? options = J$.R(895441, 'options', undefined, true, true) : options = J$.R(895441, 'options', options, true, true)), 'property'))) ? J$.M(895481, J$.R(895457, '_', _, false, true), 'includes', false)(J$.R(895465, 'context', context, false, false), J$.T(895473, 'paged', 21, false)) : J$._())) {
                                    description = J$.W(895497, 'description', J$.T(895489, '', 21, false), description, false, false);
                                } else {
                                    description = J$.W(895609, 'description', J$.C(67328, J$.C(67320, J$.C(67304, J$.G(895521, J$.G(895513, J$.R(895505, 'data', data, false, false), 'author'), 'meta_description')) ? J$._() : J$.G(895545, J$.G(895537, J$.R(895529, 'data', data, false, false), 'author'), 'bio')) ? J$._() : J$.C(67312, J$.G(895561, J$.I(typeof options === 'undefined' ? options = J$.R(895553, 'options', undefined, true, true) : options = J$.R(895553, 'options', options, true, true)), 'property')) ? J$.M(895585, J$.R(895569, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(895577, 'meta_description', 21, false)) : J$.T(895593, '', 21, false)) ? J$._() : J$.T(895601, '', 21, false), description, false, false);
                                }
                            } else if (J$.C(67640, J$.C(67344, J$.M(895641, J$.R(895617, '_', _, false, true), 'includes', false)(J$.R(895625, 'context', context, false, false), J$.T(895633, 'tag', 21, false))) ? J$.G(895657, J$.R(895649, 'data', data, false, false), 'tag') : J$._())) {
                                if (J$.C(67392, J$.C(67352, J$.U(89146, '!', J$.G(895673, J$.I(typeof options === 'undefined' ? options = J$.R(895665, 'options', undefined, true, true) : options = J$.R(895665, 'options', options, true, true)), 'property'))) ? J$.M(895705, J$.R(895681, '_', _, false, true), 'includes', false)(J$.R(895689, 'context', context, false, false), J$.T(895697, 'paged', 21, false)) : J$._())) {
                                    description = J$.W(895721, 'description', J$.T(895713, '', 21, false), description, false, false);
                                } else {
                                    description = J$.W(895833, 'description', J$.C(67384, J$.C(67376, J$.C(67360, J$.G(895745, J$.G(895737, J$.R(895729, 'data', data, false, false), 'tag'), 'meta_description')) ? J$._() : J$.G(895769, J$.G(895761, J$.R(895753, 'data', data, false, false), 'tag'), 'description')) ? J$._() : J$.C(67368, J$.G(895785, J$.I(typeof options === 'undefined' ? options = J$.R(895777, 'options', undefined, true, true) : options = J$.R(895777, 'options', options, true, true)), 'property')) ? J$.M(895809, J$.R(895793, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(895801, 'meta_description', 21, false)) : J$.T(895817, '', 21, false)) ? J$._() : J$.T(895825, '', 21, false), description, false, false);
                                }
                            } else if (J$.C(67632, J$.C(67400, J$.M(895865, J$.R(895841, '_', _, false, true), 'includes', false)(J$.R(895849, 'context', context, false, false), J$.T(895857, 'post', 21, false))) ? J$.G(895881, J$.R(895873, 'data', data, false, false), 'post') : J$._())) {
                                if (J$.C(67464, J$.G(895897, J$.I(typeof options === 'undefined' ? options = J$.R(895889, 'options', undefined, true, true) : options = J$.R(895889, 'options', options, true, true)), 'property'))) {
                                    description = J$.W(896089, 'description', J$.C(67448, J$.C(67440, J$.C(67432, J$.C(67416, J$.C(67408, J$.G(895937, J$.G(895913, J$.R(895905, 'data', data, false, false), 'post'), `${ J$.G(895929, J$.I(typeof options === 'undefined' ? options = J$.R(895921, 'options', undefined, true, true) : options = J$.R(895921, 'options', options, true, true)), 'property') }_description`)) ? J$._() : J$.G(895961, J$.G(895953, J$.R(895945, 'data', data, false, false), 'post'), 'custom_excerpt')) ? J$._() : J$.G(895985, J$.G(895977, J$.R(895969, 'data', data, false, false), 'post'), 'meta_description')) ? J$._() : J$.F(896049, J$.R(895993, 'getExcerpt', getExcerpt, false, true), false)(J$.C(67424, J$.G(896017, J$.G(896009, J$.R(896001, 'data', data, false, false), 'post'), 'html')) ? J$._() : J$.T(896025, '', 21, false), J$.T(896041, { words: J$.T(896033, 50, 22, false) }, 11, false))) ? J$._() : J$.M(896073, J$.R(896057, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(896065, 'description', 21, false))) ? J$._() : J$.T(896081, '', 21, false), description, false, false);
                                } else {
                                    description = J$.W(896129, 'description', J$.C(67456, J$.G(896113, J$.G(896105, J$.R(896097, 'data', data, false, false), 'post'), 'meta_description')) ? J$._() : J$.T(896121, '', 21, false), description, false, false);
                                }
                            } else if (J$.C(67624, J$.C(67472, J$.M(896161, J$.R(896137, '_', _, false, true), 'includes', false)(J$.R(896145, 'context', context, false, false), J$.T(896153, 'page', 21, false))) ? J$.G(896177, J$.R(896169, 'data', data, false, false), 'post') : J$._())) {
                                if (J$.C(67536, J$.G(896193, J$.I(typeof options === 'undefined' ? options = J$.R(896185, 'options', undefined, true, true) : options = J$.R(896185, 'options', options, true, true)), 'property'))) {
                                    description = J$.W(896385, 'description', J$.C(67520, J$.C(67512, J$.C(67504, J$.C(67488, J$.C(67480, J$.G(896233, J$.G(896209, J$.R(896201, 'data', data, false, false), 'post'), `${ J$.G(896225, J$.I(typeof options === 'undefined' ? options = J$.R(896217, 'options', undefined, true, true) : options = J$.R(896217, 'options', options, true, true)), 'property') }_description`)) ? J$._() : J$.G(896257, J$.G(896249, J$.R(896241, 'data', data, false, false), 'post'), 'custom_excerpt')) ? J$._() : J$.G(896281, J$.G(896273, J$.R(896265, 'data', data, false, false), 'post'), 'meta_description')) ? J$._() : J$.F(896345, J$.R(896289, 'getExcerpt', getExcerpt, false, true), false)(J$.C(67496, J$.G(896313, J$.G(896305, J$.R(896297, 'data', data, false, false), 'post'), 'html')) ? J$._() : J$.T(896321, '', 21, false), J$.T(896337, { words: J$.T(896329, 50, 22, false) }, 11, false))) ? J$._() : J$.M(896369, J$.R(896353, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(896361, 'description', 21, false))) ? J$._() : J$.T(896377, '', 21, false), description, false, false);
                                } else {
                                    description = J$.W(896425, 'description', J$.C(67528, J$.G(896409, J$.G(896401, J$.R(896393, 'data', data, false, false), 'post'), 'meta_description')) ? J$._() : J$.T(896417, '', 21, false), description, false, false);
                                }
                            } else if (J$.C(67616, J$.C(67544, J$.M(896457, J$.R(896433, '_', _, false, true), 'includes', false)(J$.R(896441, 'context', context, false, false), J$.T(896449, 'page', 21, false))) ? J$.G(896473, J$.R(896465, 'data', data, false, false), 'page') : J$._())) {
                                if (J$.C(67608, J$.G(896489, J$.I(typeof options === 'undefined' ? options = J$.R(896481, 'options', undefined, true, true) : options = J$.R(896481, 'options', options, true, true)), 'property'))) {
                                    description = J$.W(896681, 'description', J$.C(67592, J$.C(67584, J$.C(67576, J$.C(67560, J$.C(67552, J$.G(896529, J$.G(896505, J$.R(896497, 'data', data, false, false), 'page'), `${ J$.G(896521, J$.I(typeof options === 'undefined' ? options = J$.R(896513, 'options', undefined, true, true) : options = J$.R(896513, 'options', options, true, true)), 'property') }_description`)) ? J$._() : J$.G(896553, J$.G(896545, J$.R(896537, 'data', data, false, false), 'page'), 'custom_excerpt')) ? J$._() : J$.G(896577, J$.G(896569, J$.R(896561, 'data', data, false, false), 'page'), 'meta_description')) ? J$._() : J$.F(896641, J$.R(896585, 'getExcerpt', getExcerpt, false, true), false)(J$.C(67568, J$.G(896609, J$.G(896601, J$.R(896593, 'data', data, false, false), 'page'), 'html')) ? J$._() : J$.T(896617, '', 21, false), J$.T(896633, { words: J$.T(896625, 50, 22, false) }, 11, false))) ? J$._() : J$.M(896665, J$.R(896649, 'settingsCache', settingsCache, false, true), 'get', false)(J$.T(896657, 'description', 21, false))) ? J$._() : J$.T(896673, '', 21, false), description, false, false);
                                } else {
                                    description = J$.W(896721, 'description', J$.C(67600, J$.G(896705, J$.G(896697, J$.R(896689, 'data', data, false, false), 'page'), 'meta_description')) ? J$._() : J$.T(896713, '', 21, false), description, false, false);
                                }
                            }
                            return J$.Rt(896761, J$.C(67680, J$.M(896745, J$.C(67672, J$.R(896729, 'description', description, false, false)) ? J$._() : J$.T(896737, '', 21, false), 'trim', false)()) ? J$._() : J$.T(896753, null, 25, false));
                        } catch (J$e) {
                            J$.Ex(896913, J$e);
                        } finally {
                            if (J$.Fr(896921))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(896873, '_', _, false, false, false);
            J$.N(896881, 'settingsCache', settingsCache, false, false, false);
            J$.N(896889, 'getExcerpt', getExcerpt, false, false, false);
            getDescription = J$.N(896905, 'getDescription', J$.T(896897, getDescription, 12, false), true, false, false);
            const _ = J$.W(895009, '_', J$.F(895001, J$.I(typeof require === 'undefined' ? require = J$.R(894985, 'require', undefined, true, true) : require = J$.R(894985, 'require', require, true, true)), false)(J$.T(894993, 'lodash', 21, false)), _, false, true);
            const settingsCache = J$.W(895041, 'settingsCache', J$.F(895033, J$.I(typeof require === 'undefined' ? require = J$.R(895017, 'require', undefined, true, true) : require = J$.R(895017, 'require', require, true, true)), false)(J$.T(895025, '../../server/services/settings/cache', 21, false)), settingsCache, false, true);
            const getExcerpt = J$.W(895073, 'getExcerpt', J$.F(895065, J$.I(typeof require === 'undefined' ? require = J$.R(895049, 'require', undefined, true, true) : require = J$.R(895049, 'require', require, true, true)), false)(J$.T(895057, './excerpt', 21, false)), getExcerpt, false, true);
            J$.P(896857, J$.I(typeof module === 'undefined' ? module = J$.R(896841, 'module', undefined, true, true) : module = J$.R(896841, 'module', module, true, true)), 'exports', J$.R(896849, 'getDescription', getDescription, false, true));
        } catch (J$e) {
            J$.Ex(896929, J$e);
        } finally {
            if (J$.Sr(896937))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

