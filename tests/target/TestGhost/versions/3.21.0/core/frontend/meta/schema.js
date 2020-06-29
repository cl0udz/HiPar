J$.noInstrEval = false;
jalangiLabel10:
    while (true) {
        try {
            J$.Se(907641, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/schema.js');
            function schemaImageObject(metaDataVal) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(904321, arguments.callee, this, arguments);
                            arguments = J$.N(904329, 'arguments', arguments, true, false, false);
                            metaDataVal = J$.N(904337, 'metaDataVal', metaDataVal, true, false, false);
                            J$.N(904345, 'imageObject', imageObject, false, false, false);
                            let imageObject;
                            if (J$.C(68136, J$.C(68128, J$.U(89274, '!', J$.R(904129, 'metaDataVal', metaDataVal, false, false))) ? J$._() : J$.U(89282, '!', J$.G(904145, J$.R(904137, 'metaDataVal', metaDataVal, false, false), 'url')))) {
                                return J$.Rt(904161, J$.T(904153, null, 25, false));
                            }
                            imageObject = J$.W(904201, 'imageObject', J$.T(904193, {
                                '@type': J$.T(904169, 'ImageObject', 21, false),
                                url: J$.G(904185, J$.R(904177, 'metaDataVal', metaDataVal, false, false), 'url')
                            }, 11, false), imageObject, false, false);
                            if (J$.C(68144, J$.G(904217, J$.R(904209, 'metaDataVal', metaDataVal, false, false), 'dimensions'))) {
                                J$.P(904257, J$.R(904225, 'imageObject', imageObject, false, false), 'width', J$.G(904249, J$.G(904241, J$.R(904233, 'metaDataVal', metaDataVal, false, false), 'dimensions'), 'width'));
                                J$.P(904297, J$.R(904265, 'imageObject', imageObject, false, false), 'height', J$.G(904289, J$.G(904281, J$.R(904273, 'metaDataVal', metaDataVal, false, false), 'dimensions'), 'height'));
                            }
                            return J$.Rt(904313, J$.R(904305, 'imageObject', imageObject, false, false));
                        } catch (J$e) {
                            J$.Ex(907825, J$e);
                        } finally {
                            if (J$.Fr(907833))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function schemaPublisherObject(metaDataVal) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(904513, arguments.callee, this, arguments);
                            arguments = J$.N(904521, 'arguments', arguments, true, false, false);
                            metaDataVal = J$.N(904529, 'metaDataVal', metaDataVal, true, false, false);
                            J$.N(904537, 'publisherObject', publisherObject, false, false, false);
                            let publisherObject;
                            publisherObject = J$.W(904489, 'publisherObject', J$.T(904481, {
                                '@type': J$.T(904353, 'Organization', 21, false),
                                name: J$.F(904393, J$.R(904361, 'escapeExpression', escapeExpression, false, true), false)(J$.G(904385, J$.G(904377, J$.R(904369, 'metaDataVal', metaDataVal, false, false), 'site'), 'title')),
                                url: J$.C(68152, J$.G(904417, J$.G(904409, J$.R(904401, 'metaDataVal', metaDataVal, false, false), 'site'), 'url')) ? J$._() : J$.T(904425, null, 25, false),
                                logo: J$.C(68160, J$.F(904465, J$.R(904433, 'schemaImageObject', schemaImageObject, false, true), false)(J$.G(904457, J$.G(904449, J$.R(904441, 'metaDataVal', metaDataVal, false, false), 'site'), 'logo'))) ? J$._() : J$.T(904473, null, 25, false)
                            }, 11, false), publisherObject, false, false);
                            return J$.Rt(904505, J$.R(904497, 'publisherObject', publisherObject, false, false));
                        } catch (J$e) {
                            J$.Ex(907841, J$e);
                        } finally {
                            if (J$.Fr(907849))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function trimSchema(schema) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(904705, arguments.callee, this, arguments);
                            arguments = J$.N(904713, 'arguments', arguments, true, false, false);
                            schema = J$.N(904721, 'schema', schema, true, false, false);
                            J$.N(904729, 'schemaObject', schemaObject, false, false, false);
                            const schemaObject = J$.W(904553, 'schemaObject', J$.T(904545, {}, 11, false), schemaObject, false, false);
                            J$.M(904681, J$.R(904561, '_', _, false, true), 'each', false)(J$.R(904569, 'schema', schema, false, false), J$.T(904673, function (value, key) {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(904641, arguments.callee, this, arguments);
                                            arguments = J$.N(904649, 'arguments', arguments, true, false, false);
                                            value = J$.N(904657, 'value', value, true, false, false);
                                            key = J$.N(904665, 'key', key, true, false, false);
                                            if (J$.C(68176, J$.C(68168, J$.B(89290, '!==', J$.R(904577, 'value', value, false, false), J$.T(904585, null, 25, false))) ? J$.B(89306, '!==', J$.U(89298, 'typeof', J$.R(904593, 'value', value, false, false)), J$.T(904601, 'undefined', 21, false)) : J$._())) {
                                                J$.P(904633, J$.R(904609, 'schemaObject', schemaObject, false, false), J$.R(904617, 'key', key, false, false), J$.R(904625, 'value', value, false, false));
                                            }
                                        } catch (J$e) {
                                            J$.Ex(907857, J$e);
                                        } finally {
                                            if (J$.Fr(907865))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            return J$.Rt(904697, J$.R(904689, 'schemaObject', schemaObject, false, false));
                        } catch (J$e) {
                            J$.Ex(907873, J$e);
                        } finally {
                            if (J$.Fr(907881))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function trimSameAs(data, context) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(905393, arguments.callee, this, arguments);
                            arguments = J$.N(905401, 'arguments', arguments, true, false, false);
                            data = J$.N(905409, 'data', data, true, false, false);
                            context = J$.N(905417, 'context', context, true, false, false);
                            J$.N(905425, 'sameAs', sameAs, false, false, false);
                            const sameAs = J$.W(904745, 'sameAs', J$.T(904737, [], 10, false), sameAs, false, false);
                            if (J$.C(68248, J$.C(68184, J$.B(89314, '===', J$.R(904753, 'context', context, false, false), J$.T(904761, 'post', 21, false))) ? J$._() : J$.B(89322, '===', J$.R(904769, 'context', context, false, false), J$.T(904777, 'page', 21, false)))) {
                                if (J$.C(68192, J$.G(904817, J$.G(904809, J$.G(904801, J$.R(904785, 'data', data, false, false), J$.R(904793, 'context', context, false, false)), 'primary_author'), 'website'))) {
                                    J$.M(904889, J$.R(904825, 'sameAs', sameAs, false, false), 'push', false)(J$.F(904881, J$.R(904833, 'escapeExpression', escapeExpression, false, true), false)(J$.G(904873, J$.G(904865, J$.G(904857, J$.R(904841, 'data', data, false, false), J$.R(904849, 'context', context, false, false)), 'primary_author'), 'website')));
                                }
                                if (J$.C(68200, J$.G(904929, J$.G(904921, J$.G(904913, J$.R(904897, 'data', data, false, false), J$.R(904905, 'context', context, false, false)), 'primary_author'), 'facebook'))) {
                                    J$.M(905001, J$.R(904937, 'sameAs', sameAs, false, false), 'push', false)(J$.M(904993, J$.R(904945, 'socialUrls', socialUrls, false, true), 'facebook', false)(J$.G(904985, J$.G(904977, J$.G(904969, J$.R(904953, 'data', data, false, false), J$.R(904961, 'context', context, false, false)), 'primary_author'), 'facebook')));
                                }
                                if (J$.C(68208, J$.G(905041, J$.G(905033, J$.G(905025, J$.R(905009, 'data', data, false, false), J$.R(905017, 'context', context, false, false)), 'primary_author'), 'twitter'))) {
                                    J$.M(905113, J$.R(905049, 'sameAs', sameAs, false, false), 'push', false)(J$.M(905105, J$.R(905057, 'socialUrls', socialUrls, false, true), 'twitter', false)(J$.G(905097, J$.G(905089, J$.G(905081, J$.R(905065, 'data', data, false, false), J$.R(905073, 'context', context, false, false)), 'primary_author'), 'twitter')));
                                }
                            } else if (J$.C(68240, J$.B(89330, '===', J$.R(905121, 'context', context, false, false), J$.T(905129, 'author', 21, false)))) {
                                if (J$.C(68216, J$.G(905153, J$.G(905145, J$.R(905137, 'data', data, false, false), 'author'), 'website'))) {
                                    J$.M(905209, J$.R(905161, 'sameAs', sameAs, false, false), 'push', false)(J$.F(905201, J$.R(905169, 'escapeExpression', escapeExpression, false, true), false)(J$.G(905193, J$.G(905185, J$.R(905177, 'data', data, false, false), 'author'), 'website')));
                                }
                                if (J$.C(68224, J$.G(905233, J$.G(905225, J$.R(905217, 'data', data, false, false), 'author'), 'facebook'))) {
                                    J$.M(905289, J$.R(905241, 'sameAs', sameAs, false, false), 'push', false)(J$.M(905281, J$.R(905249, 'socialUrls', socialUrls, false, true), 'facebook', false)(J$.G(905273, J$.G(905265, J$.R(905257, 'data', data, false, false), 'author'), 'facebook')));
                                }
                                if (J$.C(68232, J$.G(905313, J$.G(905305, J$.R(905297, 'data', data, false, false), 'author'), 'twitter'))) {
                                    J$.M(905369, J$.R(905321, 'sameAs', sameAs, false, false), 'push', false)(J$.M(905361, J$.R(905329, 'socialUrls', socialUrls, false, true), 'twitter', false)(J$.G(905353, J$.G(905345, J$.R(905337, 'data', data, false, false), 'author'), 'twitter')));
                                }
                            }
                            return J$.Rt(905385, J$.R(905377, 'sameAs', sameAs, false, false));
                        } catch (J$e) {
                            J$.Ex(907889, J$e);
                        } finally {
                            if (J$.Fr(907897))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function getPostSchema(metaData, data) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(906185, arguments.callee, this, arguments);
                            arguments = J$.N(906193, 'arguments', arguments, true, false, false);
                            metaData = J$.N(906201, 'metaData', metaData, true, false, false);
                            data = J$.N(906209, 'data', data, true, false, false);
                            J$.N(906217, 'description', description, false, false, false);
                            J$.N(906225, 'schema', schema, false, false, false);
                            J$.N(906233, 'context', context, false, false, false);
                            const description = J$.W(905489, 'description', J$.C(68256, J$.G(905441, J$.R(905433, 'metaData', metaData, false, false), 'excerpt')) ? J$.F(905473, J$.R(905449, 'escapeExpression', escapeExpression, false, true), false)(J$.G(905465, J$.R(905457, 'metaData', metaData, false, false), 'excerpt')) : J$.T(905481, null, 25, false), description, false, false);
                            let schema;
                            const context = J$.W(905529, 'context', J$.C(68264, J$.G(905505, J$.R(905497, 'data', data, false, false), 'page')) ? J$.T(905513, 'page', 21, false) : J$.T(905521, 'post', 21, false), context, false, false);
                            schema = J$.W(906097, 'schema', J$.T(906089, {
                                '@context': J$.T(905537, 'https://schema.org', 21, false),
                                '@type': J$.T(905545, 'Article', 21, false),
                                publisher: J$.F(905569, J$.R(905553, 'schemaPublisherObject', schemaPublisherObject, false, true), false)(J$.R(905561, 'metaData', metaData, false, false)),
                                author: J$.T(905825, {
                                    '@type': J$.T(905577, 'Person', 21, false),
                                    name: J$.F(905633, J$.R(905585, 'escapeExpression', escapeExpression, false, true), false)(J$.G(905625, J$.G(905617, J$.G(905609, J$.R(905593, 'data', data, false, false), J$.R(905601, 'context', context, false, false)), 'primary_author'), 'name')),
                                    image: J$.F(905665, J$.R(905641, 'schemaImageObject', schemaImageObject, false, true), false)(J$.G(905657, J$.R(905649, 'metaData', metaData, false, false), 'authorImage')),
                                    url: J$.G(905681, J$.R(905673, 'metaData', metaData, false, false), 'authorUrl'),
                                    sameAs: J$.F(905713, J$.R(905689, 'trimSameAs', trimSameAs, false, true), false)(J$.R(905697, 'data', data, false, false), J$.R(905705, 'context', context, false, false)),
                                    description: J$.C(68272, J$.G(905753, J$.G(905745, J$.G(905737, J$.R(905721, 'data', data, false, false), J$.R(905729, 'context', context, false, false)), 'primary_author'), 'metaDescription')) ? J$.F(905809, J$.R(905761, 'escapeExpression', escapeExpression, false, true), false)(J$.G(905801, J$.G(905793, J$.G(905785, J$.R(905769, 'data', data, false, false), J$.R(905777, 'context', context, false, false)), 'primary_author'), 'metaDescription')) : J$.T(905817, null, 25, false)
                                }, 11, false),
                                headline: J$.F(905857, J$.R(905833, 'escapeExpression', escapeExpression, false, true), false)(J$.G(905849, J$.R(905841, 'metaData', metaData, false, false), 'metaTitle')),
                                url: J$.G(905873, J$.R(905865, 'metaData', metaData, false, false), 'url'),
                                datePublished: J$.G(905889, J$.R(905881, 'metaData', metaData, false, false), 'publishedDate'),
                                dateModified: J$.G(905905, J$.R(905897, 'metaData', metaData, false, false), 'modifiedDate'),
                                image: J$.F(905937, J$.R(905913, 'schemaImageObject', schemaImageObject, false, true), false)(J$.G(905929, J$.R(905921, 'metaData', metaData, false, false), 'coverImage')),
                                keywords: J$.C(68288, J$.C(68280, J$.G(905953, J$.R(905945, 'metaData', metaData, false, false), 'keywords')) ? J$.B(89338, '>', J$.G(905977, J$.G(905969, J$.R(905961, 'metaData', metaData, false, false), 'keywords'), 'length'), J$.T(905985, 0, 22, false)) : J$._()) ? J$.M(906017, J$.G(906001, J$.R(905993, 'metaData', metaData, false, false), 'keywords'), 'join', false)(J$.T(906009, ', ', 21, false)) : J$.T(906025, null, 25, false),
                                description: J$.R(906033, 'description', description, false, false),
                                mainEntityOfPage: J$.T(906081, {
                                    '@type': J$.T(906041, 'WebPage', 21, false),
                                    '@id': J$.C(68296, J$.G(906065, J$.G(906057, J$.R(906049, 'metaData', metaData, false, false), 'site'), 'url')) ? J$._() : J$.T(906073, null, 25, false)
                                }, 11, false)
                            }, 11, false), schema, false, false);
                            J$.P(906145, J$.R(906105, 'schema', schema, false, false), 'author', J$.F(906137, J$.R(906113, 'trimSchema', trimSchema, false, true), false)(J$.G(906129, J$.R(906121, 'schema', schema, false, false), 'author')));
                            return J$.Rt(906177, J$.F(906169, J$.R(906153, 'trimSchema', trimSchema, false, true), false)(J$.R(906161, 'schema', schema, false, false)));
                        } catch (J$e) {
                            J$.Ex(907905, J$e);
                        } finally {
                            if (J$.Fr(907913))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function getHomeSchema(metaData) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(906481, arguments.callee, this, arguments);
                            arguments = J$.N(906489, 'arguments', arguments, true, false, false);
                            metaData = J$.N(906497, 'metaData', metaData, true, false, false);
                            J$.N(906505, 'schema', schema, false, false, false);
                            const schema = J$.W(906441, 'schema', J$.T(906433, {
                                '@context': J$.T(906241, 'https://schema.org', 21, false),
                                '@type': J$.T(906249, 'WebSite', 21, false),
                                publisher: J$.F(906273, J$.R(906257, 'schemaPublisherObject', schemaPublisherObject, false, true), false)(J$.R(906265, 'metaData', metaData, false, false)),
                                url: J$.G(906289, J$.R(906281, 'metaData', metaData, false, false), 'url'),
                                image: J$.F(906321, J$.R(906297, 'schemaImageObject', schemaImageObject, false, true), false)(J$.G(906313, J$.R(906305, 'metaData', metaData, false, false), 'coverImage')),
                                mainEntityOfPage: J$.T(906369, {
                                    '@type': J$.T(906329, 'WebPage', 21, false),
                                    '@id': J$.C(68304, J$.G(906353, J$.G(906345, J$.R(906337, 'metaData', metaData, false, false), 'site'), 'url')) ? J$._() : J$.T(906361, null, 25, false)
                                }, 11, false),
                                description: J$.C(68312, J$.G(906385, J$.R(906377, 'metaData', metaData, false, false), 'metaDescription')) ? J$.F(906417, J$.R(906393, 'escapeExpression', escapeExpression, false, true), false)(J$.G(906409, J$.R(906401, 'metaData', metaData, false, false), 'metaDescription')) : J$.T(906425, null, 25, false)
                            }, 11, false), schema, false, false);
                            return J$.Rt(906473, J$.F(906465, J$.R(906449, 'trimSchema', trimSchema, false, true), false)(J$.R(906457, 'schema', schema, false, false)));
                        } catch (J$e) {
                            J$.Ex(907921, J$e);
                        } finally {
                            if (J$.Fr(907929))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function getTagSchema(metaData, data) {
                jalangiLabel7:
                    while (true) {
                        try {
                            J$.Fe(906777, arguments.callee, this, arguments);
                            arguments = J$.N(906785, 'arguments', arguments, true, false, false);
                            metaData = J$.N(906793, 'metaData', metaData, true, false, false);
                            data = J$.N(906801, 'data', data, true, false, false);
                            J$.N(906809, 'schema', schema, false, false, false);
                            const schema = J$.W(906737, 'schema', J$.T(906729, {
                                '@context': J$.T(906513, 'https://schema.org', 21, false),
                                '@type': J$.T(906521, 'Series', 21, false),
                                publisher: J$.F(906545, J$.R(906529, 'schemaPublisherObject', schemaPublisherObject, false, true), false)(J$.R(906537, 'metaData', metaData, false, false)),
                                url: J$.G(906561, J$.R(906553, 'metaData', metaData, false, false), 'url'),
                                image: J$.F(906593, J$.R(906569, 'schemaImageObject', schemaImageObject, false, true), false)(J$.G(906585, J$.R(906577, 'metaData', metaData, false, false), 'coverImage')),
                                name: J$.G(906617, J$.G(906609, J$.R(906601, 'data', data, false, false), 'tag'), 'name'),
                                mainEntityOfPage: J$.T(906665, {
                                    '@type': J$.T(906625, 'WebPage', 21, false),
                                    '@id': J$.C(68320, J$.G(906649, J$.G(906641, J$.R(906633, 'metaData', metaData, false, false), 'site'), 'url')) ? J$._() : J$.T(906657, null, 25, false)
                                }, 11, false),
                                description: J$.C(68328, J$.G(906681, J$.R(906673, 'metaData', metaData, false, false), 'metaDescription')) ? J$.F(906713, J$.R(906689, 'escapeExpression', escapeExpression, false, true), false)(J$.G(906705, J$.R(906697, 'metaData', metaData, false, false), 'metaDescription')) : J$.T(906721, null, 25, false)
                            }, 11, false), schema, false, false);
                            return J$.Rt(906769, J$.F(906761, J$.R(906745, 'trimSchema', trimSchema, false, true), false)(J$.R(906753, 'schema', schema, false, false)));
                        } catch (J$e) {
                            J$.Ex(907937, J$e);
                        } finally {
                            if (J$.Fr(907945))
                                continue jalangiLabel7;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function getAuthorSchema(metaData, data) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(907105, arguments.callee, this, arguments);
                            arguments = J$.N(907113, 'arguments', arguments, true, false, false);
                            metaData = J$.N(907121, 'metaData', metaData, true, false, false);
                            data = J$.N(907129, 'data', data, true, false, false);
                            J$.N(907137, 'schema', schema, false, false, false);
                            const schema = J$.W(907065, 'schema', J$.T(907057, {
                                '@context': J$.T(906817, 'https://schema.org', 21, false),
                                '@type': J$.T(906825, 'Person', 21, false),
                                sameAs: J$.F(906857, J$.R(906833, 'trimSameAs', trimSameAs, false, true), false)(J$.R(906841, 'data', data, false, false), J$.T(906849, 'author', 21, false)),
                                name: J$.F(906897, J$.R(906865, 'escapeExpression', escapeExpression, false, true), false)(J$.G(906889, J$.G(906881, J$.R(906873, 'data', data, false, false), 'author'), 'name')),
                                url: J$.G(906913, J$.R(906905, 'metaData', metaData, false, false), 'authorUrl'),
                                image: J$.F(906945, J$.R(906921, 'schemaImageObject', schemaImageObject, false, true), false)(J$.G(906937, J$.R(906929, 'metaData', metaData, false, false), 'coverImage')),
                                mainEntityOfPage: J$.T(906993, {
                                    '@type': J$.T(906953, 'WebPage', 21, false),
                                    '@id': J$.C(68336, J$.G(906977, J$.G(906969, J$.R(906961, 'metaData', metaData, false, false), 'site'), 'url')) ? J$._() : J$.T(906985, null, 25, false)
                                }, 11, false),
                                description: J$.C(68344, J$.G(907009, J$.R(907001, 'metaData', metaData, false, false), 'metaDescription')) ? J$.F(907041, J$.R(907017, 'escapeExpression', escapeExpression, false, true), false)(J$.G(907033, J$.R(907025, 'metaData', metaData, false, false), 'metaDescription')) : J$.T(907049, null, 25, false)
                            }, 11, false), schema, false, false);
                            return J$.Rt(907097, J$.F(907089, J$.R(907073, 'trimSchema', trimSchema, false, true), false)(J$.R(907081, 'schema', schema, false, false)));
                        } catch (J$e) {
                            J$.Ex(907953, J$e);
                        } finally {
                            if (J$.Fr(907961))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function getSchema(metaData, data) {
                jalangiLabel9:
                    while (true) {
                        try {
                            J$.Fe(907577, arguments.callee, this, arguments);
                            arguments = J$.N(907585, 'arguments', arguments, true, false, false);
                            metaData = J$.N(907593, 'metaData', metaData, true, false, false);
                            data = J$.N(907601, 'data', data, true, false, false);
                            J$.N(907609, 'context', context, false, false, false);
                            if (J$.C(68408, J$.U(89346, '!', J$.M(907161, J$.R(907145, 'config', config, false, true), 'isPrivacyDisabled', false)(J$.T(907153, 'useStructuredData', 21, false))))) {
                                const context = J$.W(907209, 'context', J$.C(68352, J$.G(907177, J$.R(907169, 'data', data, false, false), 'context')) ? J$.G(907193, J$.R(907185, 'data', data, false, false), 'context') : J$.T(907201, null, 25, false), context, false, false);
                                if (J$.C(68400, J$.C(68368, J$.C(68360, J$.M(907241, J$.R(907217, '_', _, false, true), 'includes', false)(J$.R(907225, 'context', context, false, false), J$.T(907233, 'post', 21, false))) ? J$._() : J$.M(907273, J$.R(907249, '_', _, false, true), 'includes', false)(J$.R(907257, 'context', context, false, false), J$.T(907265, 'page', 21, false))) ? J$._() : J$.M(907305, J$.R(907281, '_', _, false, true), 'includes', false)(J$.R(907289, 'context', context, false, false), J$.T(907297, 'amp', 21, false)))) {
                                    return J$.Rt(907345, J$.F(907337, J$.R(907313, 'getPostSchema', getPostSchema, false, true), false)(J$.R(907321, 'metaData', metaData, false, false), J$.R(907329, 'data', data, false, false)));
                                } else if (J$.C(68392, J$.M(907377, J$.R(907353, '_', _, false, true), 'includes', false)(J$.R(907361, 'context', context, false, false), J$.T(907369, 'home', 21, false)))) {
                                    return J$.Rt(907409, J$.F(907401, J$.R(907385, 'getHomeSchema', getHomeSchema, false, true), false)(J$.R(907393, 'metaData', metaData, false, false)));
                                } else if (J$.C(68384, J$.M(907441, J$.R(907417, '_', _, false, true), 'includes', false)(J$.R(907425, 'context', context, false, false), J$.T(907433, 'tag', 21, false)))) {
                                    return J$.Rt(907481, J$.F(907473, J$.R(907449, 'getTagSchema', getTagSchema, false, true), false)(J$.R(907457, 'metaData', metaData, false, false), J$.R(907465, 'data', data, false, false)));
                                } else if (J$.C(68376, J$.M(907513, J$.R(907489, '_', _, false, true), 'includes', false)(J$.R(907497, 'context', context, false, false), J$.T(907505, 'author', 21, false)))) {
                                    return J$.Rt(907553, J$.F(907545, J$.R(907521, 'getAuthorSchema', getAuthorSchema, false, true), false)(J$.R(907529, 'metaData', metaData, false, false), J$.R(907537, 'data', data, false, false)));
                                }
                            }
                            return J$.Rt(907569, J$.T(907561, null, 25, false));
                        } catch (J$e) {
                            J$.Ex(907969, J$e);
                        } finally {
                            if (J$.Fr(907977))
                                continue jalangiLabel9;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(907649, 'config', config, false, false, false);
            J$.N(907657, 'escapeExpression', escapeExpression, false, false, false);
            J$.N(907665, 'socialUrls', socialUrls, false, false, false);
            J$.N(907673, '_', _, false, false, false);
            schemaImageObject = J$.N(907689, 'schemaImageObject', J$.T(907681, schemaImageObject, 12, false), true, false, false);
            schemaPublisherObject = J$.N(907705, 'schemaPublisherObject', J$.T(907697, schemaPublisherObject, 12, false), true, false, false);
            trimSchema = J$.N(907721, 'trimSchema', J$.T(907713, trimSchema, 12, false), true, false, false);
            trimSameAs = J$.N(907737, 'trimSameAs', J$.T(907729, trimSameAs, 12, false), true, false, false);
            getPostSchema = J$.N(907753, 'getPostSchema', J$.T(907745, getPostSchema, 12, false), true, false, false);
            getHomeSchema = J$.N(907769, 'getHomeSchema', J$.T(907761, getHomeSchema, 12, false), true, false, false);
            getTagSchema = J$.N(907785, 'getTagSchema', J$.T(907777, getTagSchema, 12, false), true, false, false);
            getAuthorSchema = J$.N(907801, 'getAuthorSchema', J$.T(907793, getAuthorSchema, 12, false), true, false, false);
            getSchema = J$.N(907817, 'getSchema', J$.T(907809, getSchema, 12, false), true, false, false);
            const config = J$.W(904017, 'config', J$.F(904009, J$.I(typeof require === 'undefined' ? require = J$.R(903993, 'require', undefined, true, true) : require = J$.R(903993, 'require', require, true, true)), false)(J$.T(904001, '../../shared/config', 21, false)), config, false, true);
            const escapeExpression = J$.W(904057, 'escapeExpression', J$.G(904049, J$.F(904041, J$.I(typeof require === 'undefined' ? require = J$.R(904025, 'require', undefined, true, true) : require = J$.R(904025, 'require', require, true, true)), false)(J$.T(904033, '../services/themes/engine', 21, false)), 'escapeExpression'), escapeExpression, false, true);
            const socialUrls = J$.W(904089, 'socialUrls', J$.F(904081, J$.I(typeof require === 'undefined' ? require = J$.R(904065, 'require', undefined, true, true) : require = J$.R(904065, 'require', require, true, true)), false)(J$.T(904073, '@tryghost/social-urls', 21, false)), socialUrls, false, true);
            const _ = J$.W(904121, '_', J$.F(904113, J$.I(typeof require === 'undefined' ? require = J$.R(904097, 'require', undefined, true, true) : require = J$.R(904097, 'require', require, true, true)), false)(J$.T(904105, 'lodash', 21, false)), _, false, true);
            J$.P(907633, J$.I(typeof module === 'undefined' ? module = J$.R(907617, 'module', undefined, true, true) : module = J$.R(907617, 'module', module, true, true)), 'exports', J$.R(907625, 'getSchema', getSchema, false, true));
        } catch (J$e) {
            J$.Ex(907985, J$e);
        } finally {
            if (J$.Sr(907993))
                continue jalangiLabel10;
            else
                break jalangiLabel10;
        }
    }
// JALANGI DO NOT INSTRUMENT

