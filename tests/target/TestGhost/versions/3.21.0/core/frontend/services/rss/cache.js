J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(934329, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/rss/cache.js');
            J$.N(934337, 'crypto', crypto, false, false, false);
            J$.N(934345, 'generateFeed', generateFeed, false, false, false);
            J$.N(934353, 'feedCache', feedCache, false, false, false);
            const crypto = J$.W(933945, 'crypto', J$.F(933937, J$.I(typeof require === 'undefined' ? require = J$.R(933921, 'require', undefined, true, true) : require = J$.R(933921, 'require', require, true, true)), false)(J$.T(933929, 'crypto', 21, false)), crypto, false, true);
            const generateFeed = J$.W(933977, 'generateFeed', J$.F(933969, J$.I(typeof require === 'undefined' ? require = J$.R(933953, 'require', undefined, true, true) : require = J$.R(933953, 'require', require, true, true)), false)(J$.T(933961, './generate-feed', 21, false)), generateFeed, false, true);
            const feedCache = J$.W(933993, 'feedCache', J$.T(933985, {}, 11, false), feedCache, false, true);
            J$.P(934321, J$.G(934009, J$.I(typeof module === 'undefined' ? module = J$.R(934001, 'module', undefined, true, true) : module = J$.R(934001, 'module', module, true, true)), 'exports'), 'getXML', J$.T(934313, function getFeedXml(baseUrl, data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(934273, arguments.callee, this, arguments);
                            arguments = J$.N(934281, 'arguments', arguments, true, false, false);
                            baseUrl = J$.N(934289, 'baseUrl', baseUrl, true, false, false);
                            data = J$.N(934297, 'data', data, true, false, false);
                            J$.N(934305, 'dataHash', dataHash, false, false, false);
                            const dataHash = J$.W(934089, 'dataHash', J$.M(934081, J$.M(934065, J$.M(934033, J$.R(934017, 'crypto', crypto, false, true), 'createHash', false)(J$.T(934025, 'md5', 21, false)), 'update', false)(J$.M(934057, J$.I(typeof JSON === 'undefined' ? JSON = J$.R(934041, 'JSON', undefined, true, true) : JSON = J$.R(934041, 'JSON', JSON, true, true)), 'stringify', false)(J$.R(934049, 'data', data, false, false))), 'digest', false)(J$.T(934073, 'hex', 21, false)), dataHash, false, false);
                            if (J$.C(69864, J$.C(69856, J$.U(90090, '!', J$.G(934113, J$.R(934097, 'feedCache', feedCache, false, true), J$.R(934105, 'baseUrl', baseUrl, false, false)))) ? J$._() : J$.B(90098, '!==', J$.G(934145, J$.G(934137, J$.R(934121, 'feedCache', feedCache, false, true), J$.R(934129, 'baseUrl', baseUrl, false, false)), 'hash'), J$.R(934153, 'dataHash', dataHash, false, false)))) {
                                J$.P(934225, J$.R(934161, 'feedCache', feedCache, false, true), J$.R(934169, 'baseUrl', baseUrl, false, false), J$.T(934217, {
                                    hash: J$.R(934177, 'dataHash', dataHash, false, false),
                                    xml: J$.F(934209, J$.R(934185, 'generateFeed', generateFeed, false, true), false)(J$.R(934193, 'baseUrl', baseUrl, false, false), J$.R(934201, 'data', data, false, false))
                                }, 11, false));
                            }
                            return J$.Rt(934265, J$.G(934257, J$.G(934249, J$.R(934233, 'feedCache', feedCache, false, true), J$.R(934241, 'baseUrl', baseUrl, false, false)), 'xml'));
                        } catch (J$e) {
                            J$.Ex(934361, J$e);
                        } finally {
                            if (J$.Fr(934369))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(934377, J$e);
        } finally {
            if (J$.Sr(934385))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

