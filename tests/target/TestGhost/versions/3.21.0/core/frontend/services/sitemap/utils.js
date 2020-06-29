J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(936817, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/sitemap/utils.js');
            J$.N(936825, 'urlUtils', urlUtils, false, false, false);
            J$.N(936833, 'sitemapsUtils', sitemapsUtils, false, false, false);
            const urlUtils = J$.W(936617, 'urlUtils', J$.F(936609, J$.I(typeof require === 'undefined' ? require = J$.R(936593, 'require', undefined, true, true) : require = J$.R(936593, 'require', require, true, true)), false)(J$.T(936601, '../../../shared/url-utils', 21, false)), urlUtils, false, true);
            let sitemapsUtils;
            sitemapsUtils = J$.W(936785, 'sitemapsUtils', J$.T(936777, {
                getDeclarations: J$.T(936769, function () {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(936745, arguments.callee, this, arguments);
                                arguments = J$.N(936753, 'arguments', arguments, true, false, false);
                                J$.N(936761, 'baseUrl', baseUrl, false, false, false);
                                let baseUrl = J$.W(936657, 'baseUrl', J$.M(936649, J$.R(936625, 'urlUtils', urlUtils, false, true), 'urlFor', false)(J$.T(936633, 'sitemap_xsl', 21, false), J$.T(936641, true, 23, false)), baseUrl, false, false);
                                baseUrl = J$.W(936697, 'baseUrl', J$.M(936689, J$.R(936665, 'baseUrl', baseUrl, false, false), 'replace', false)(J$.T(936673, /^(http:|https:)/, 14, false), J$.T(936681, '', 21, false)), baseUrl, false, false);
                                return J$.Rt(936737, J$.B(90162, '+', J$.B(90154, '+', J$.B(90146, '+', J$.T(936705, '<?xml version="1.0" encoding="UTF-8"?>', 21, false), J$.T(936713, '<?xml-stylesheet type="text/xsl" href="', 21, false)), J$.R(936721, 'baseUrl', baseUrl, false, false)), J$.T(936729, '"?>', 21, false)));
                            } catch (J$e) {
                                J$.Ex(936841, J$e);
                            } finally {
                                if (J$.Fr(936849))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false)
            }, 11, false), sitemapsUtils, false, true);
            J$.P(936809, J$.I(typeof module === 'undefined' ? module = J$.R(936793, 'module', undefined, true, true) : module = J$.R(936793, 'module', module, true, true)), 'exports', J$.R(936801, 'sitemapsUtils', sitemapsUtils, false, true));
        } catch (J$e) {
            J$.Ex(936857, J$e);
        } finally {
            if (J$.Sr(936865))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

