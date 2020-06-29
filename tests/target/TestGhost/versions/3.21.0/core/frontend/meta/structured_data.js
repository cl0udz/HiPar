J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(909265, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/structured_data.js');
            function getStructuredData(metaData) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(909201, arguments.callee, this, arguments);
                            arguments = J$.N(909209, 'arguments', arguments, true, false, false);
                            metaData = J$.N(909217, 'metaData', metaData, true, false, false);
                            J$.N(909225, 'structuredData', structuredData, false, false, false);
                            J$.N(909233, 'card', card, false, false, false);
                            let structuredData;
                            let card = J$.W(908041, 'card', J$.T(908033, 'summary', 21, false), card, false, false);
                            if (J$.C(68424, J$.C(68416, J$.G(908057, J$.R(908049, 'metaData', metaData, false, false), 'twitterImage')) ? J$._() : J$.G(908081, J$.G(908073, J$.R(908065, 'metaData', metaData, false, false), 'coverImage'), 'url'))) {
                                card = J$.W(908097, 'card', J$.T(908089, 'summary_large_image', 21, false), card, false, false);
                            }
                            structuredData = J$.W(908713, 'structuredData', J$.T(908705, {
                                'og:site_name': J$.G(908121, J$.G(908113, J$.R(908105, 'metaData', metaData, false, false), 'site'), 'title'),
                                'og:type': J$.G(908137, J$.R(908129, 'metaData', metaData, false, false), 'ogType'),
                                'og:title': J$.G(908153, J$.R(908145, 'metaData', metaData, false, false), 'ogTitle'),
                                'og:description': J$.G(908169, J$.R(908161, 'metaData', metaData, false, false), 'ogDescription'),
                                'og:url': J$.G(908185, J$.R(908177, 'metaData', metaData, false, false), 'canonicalUrl'),
                                'og:image': J$.C(68432, J$.G(908209, J$.G(908201, J$.R(908193, 'metaData', metaData, false, false), 'ogImage'), 'url')) ? J$._() : J$.G(908233, J$.G(908225, J$.R(908217, 'metaData', metaData, false, false), 'coverImage'), 'url'),
                                'article:published_time': J$.G(908249, J$.R(908241, 'metaData', metaData, false, false), 'publishedDate'),
                                'article:modified_time': J$.G(908265, J$.R(908257, 'metaData', metaData, false, false), 'modifiedDate'),
                                'article:tag': J$.G(908281, J$.R(908273, 'metaData', metaData, false, false), 'keywords'),
                                'article:publisher': J$.C(68440, J$.G(908305, J$.G(908297, J$.R(908289, 'metaData', metaData, false, false), 'site'), 'facebook')) ? J$.M(908345, J$.R(908313, 'socialUrls', socialUrls, false, true), 'facebook', false)(J$.G(908337, J$.G(908329, J$.R(908321, 'metaData', metaData, false, false), 'site'), 'facebook')) : J$.T(908353, undefined, 24, false),
                                'article:author': J$.C(68448, J$.G(908369, J$.R(908361, 'metaData', metaData, false, false), 'authorFacebook')) ? J$.M(908401, J$.R(908377, 'socialUrls', socialUrls, false, true), 'facebook', false)(J$.G(908393, J$.R(908385, 'metaData', metaData, false, false), 'authorFacebook')) : J$.T(908409, undefined, 24, false),
                                'twitter:card': J$.R(908417, 'card', card, false, false),
                                'twitter:title': J$.G(908433, J$.R(908425, 'metaData', metaData, false, false), 'twitterTitle'),
                                'twitter:description': J$.G(908449, J$.R(908441, 'metaData', metaData, false, false), 'twitterDescription'),
                                'twitter:url': J$.G(908465, J$.R(908457, 'metaData', metaData, false, false), 'canonicalUrl'),
                                'twitter:image': J$.C(68456, J$.G(908481, J$.R(908473, 'metaData', metaData, false, false), 'twitterImage')) ? J$._() : J$.G(908505, J$.G(908497, J$.R(908489, 'metaData', metaData, false, false), 'coverImage'), 'url'),
                                'twitter:label1': J$.C(68464, J$.G(908521, J$.R(908513, 'metaData', metaData, false, false), 'authorName')) ? J$.T(908529, 'Written by', 21, false) : J$.T(908537, undefined, 24, false),
                                'twitter:data1': J$.G(908553, J$.R(908545, 'metaData', metaData, false, false), 'authorName'),
                                'twitter:label2': J$.C(68472, J$.G(908569, J$.R(908561, 'metaData', metaData, false, false), 'keywords')) ? J$.T(908577, 'Filed under', 21, false) : J$.T(908585, undefined, 24, false),
                                'twitter:data2': J$.C(68480, J$.G(908601, J$.R(908593, 'metaData', metaData, false, false), 'keywords')) ? J$.M(908633, J$.G(908617, J$.R(908609, 'metaData', metaData, false, false), 'keywords'), 'join', false)(J$.T(908625, ', ', 21, false)) : J$.T(908641, undefined, 24, false),
                                'twitter:site': J$.C(68488, J$.G(908665, J$.G(908657, J$.R(908649, 'metaData', metaData, false, false), 'site'), 'twitter')) ? J$._() : J$.T(908673, undefined, 24, false),
                                'twitter:creator': J$.C(68496, J$.G(908689, J$.R(908681, 'metaData', metaData, false, false), 'creatorTwitter')) ? J$._() : J$.T(908697, undefined, 24, false)
                            }, 11, false), structuredData, false, false);
                            if (J$.C(68512, J$.G(908737, J$.G(908729, J$.R(908721, 'metaData', metaData, false, false), 'ogImage'), 'dimensions'))) {
                                J$.P(908793, J$.R(908745, 'structuredData', structuredData, false, false), J$.T(908753, 'og:image:width', 21, false), J$.G(908785, J$.G(908777, J$.G(908769, J$.R(908761, 'metaData', metaData, false, false), 'ogImage'), 'dimensions'), 'width'));
                                J$.P(908849, J$.R(908801, 'structuredData', structuredData, false, false), J$.T(908809, 'og:image:height', 21, false), J$.G(908841, J$.G(908833, J$.G(908825, J$.R(908817, 'metaData', metaData, false, false), 'ogImage'), 'dimensions'), 'height'));
                            } else if (J$.C(68504, J$.G(908873, J$.G(908865, J$.R(908857, 'metaData', metaData, false, false), 'coverImage'), 'dimensions'))) {
                                J$.P(908929, J$.R(908881, 'structuredData', structuredData, false, false), J$.T(908889, 'og:image:width', 21, false), J$.G(908921, J$.G(908913, J$.G(908905, J$.R(908897, 'metaData', metaData, false, false), 'coverImage'), 'dimensions'), 'width'));
                                J$.P(908985, J$.R(908937, 'structuredData', structuredData, false, false), J$.T(908945, 'og:image:height', 21, false), J$.G(908977, J$.G(908969, J$.G(908961, J$.R(908953, 'metaData', metaData, false, false), 'coverImage'), 'dimensions'), 'height'));
                            }
                            return J$.Rt(909193, J$.M(909185, J$.M(909009, J$.I(typeof Object === 'undefined' ? Object = J$.R(908993, 'Object', undefined, true, true) : Object = J$.R(908993, 'Object', Object, true, true)), 'keys', false)(J$.R(909001, 'structuredData', structuredData, false, false)), 'reduce', false)(J$.T(909169, function (data, key) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(909129, arguments.callee, this, arguments);
                                            arguments = J$.N(909137, 'arguments', arguments, true, false, false);
                                            data = J$.N(909145, 'data', data, true, false, false);
                                            key = J$.N(909153, 'key', key, true, false, false);
                                            J$.N(909161, 'content', content, false, false, false);
                                            const content = J$.W(909041, 'content', J$.G(909033, J$.R(909017, 'structuredData', structuredData, false, false), J$.R(909025, 'key', key, false, false)), content, false, false);
                                            if (J$.C(68528, J$.C(68520, J$.B(89354, '!==', J$.R(909049, 'content', content, false, false), J$.T(909057, null, 25, false))) ? J$.B(89370, '!==', J$.U(89362, 'typeof', J$.R(909065, 'content', content, false, false)), J$.T(909073, 'undefined', 21, false)) : J$._())) {
                                                J$.P(909105, J$.R(909081, 'data', data, false, false), J$.R(909089, 'key', key, false, false), J$.R(909097, 'content', content, false, false));
                                            }
                                            return J$.Rt(909121, J$.R(909113, 'data', data, false, false));
                                        } catch (J$e) {
                                            J$.Ex(909297, J$e);
                                        } finally {
                                            if (J$.Fr(909305))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false), J$.T(909177, {}, 11, false)));
                        } catch (J$e) {
                            J$.Ex(909313, J$e);
                        } finally {
                            if (J$.Fr(909321))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(909273, 'socialUrls', socialUrls, false, false, false);
            getStructuredData = J$.N(909289, 'getStructuredData', J$.T(909281, getStructuredData, 12, false), true, false, false);
            const socialUrls = J$.W(908025, 'socialUrls', J$.F(908017, J$.I(typeof require === 'undefined' ? require = J$.R(908001, 'require', undefined, true, true) : require = J$.R(908001, 'require', require, true, true)), false)(J$.T(908009, '@tryghost/social-urls', 21, false)), socialUrls, false, true);
            J$.P(909257, J$.I(typeof module === 'undefined' ? module = J$.R(909241, 'module', undefined, true, true) : module = J$.R(909241, 'module', module, true, true)), 'exports', J$.R(909249, 'getStructuredData', getStructuredData, false, true));
        } catch (J$e) {
            J$.Ex(909329, J$e);
        } finally {
            if (J$.Sr(909337))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

