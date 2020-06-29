J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(897361, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/meta/excerpt.js');
            function getExcerpt(html, truncateOptions) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(897297, arguments.callee, this, arguments);
                            arguments = J$.N(897305, 'arguments', arguments, true, false, false);
                            html = J$.N(897313, 'html', html, true, false, false);
                            truncateOptions = J$.N(897321, 'truncateOptions', truncateOptions, true, false, false);
                            J$.N(897329, 'excerpt', excerpt, false, false, false);
                            truncateOptions = J$.W(896993, 'truncateOptions', J$.C(67688, J$.R(896977, 'truncateOptions', truncateOptions, false, false)) ? J$._() : J$.T(896985, {}, 11, false), truncateOptions, false, false);
                            let excerpt = J$.W(897033, 'excerpt', J$.M(897025, J$.R(897001, 'html', html, false, false), 'replace', false)(J$.T(897009, /<a href="#fn.*?rel="footnote">.*?<\/a>/gi, 14, false), J$.T(897017, '', 21, false)), excerpt, false, false);
                            excerpt = J$.W(897073, 'excerpt', J$.M(897065, J$.R(897041, 'excerpt', excerpt, false, false), 'replace', false)(J$.T(897049, /<div class="footnotes"><ol>.*?<\/ol><\/div>/, 14, false), J$.T(897057, '', 21, false)), excerpt, false, false);
                            excerpt = J$.W(897113, 'excerpt', J$.M(897105, J$.R(897081, 'excerpt', excerpt, false, false), 'replace', false)(J$.T(897089, /(<\/p>|<br>)/gi, 14, false), J$.T(897097, ' ', 21, false)), excerpt, false, false);
                            excerpt = J$.W(897153, 'excerpt', J$.M(897145, J$.R(897121, 'excerpt', excerpt, false, false), 'replace', false)(J$.T(897129, /<\/?[^>]+>/gi, 14, false), J$.T(897137, '', 21, false)), excerpt, false, false);
                            excerpt = J$.W(897193, 'excerpt', J$.M(897185, J$.R(897161, 'excerpt', excerpt, false, false), 'replace', false)(J$.T(897169, /(\r\n|\n|\r)+/gm, 14, false), J$.T(897177, ' ', 21, false)), excerpt, false, false);
                            if (J$.C(67704, J$.C(67696, J$.U(89154, '!', J$.G(897209, J$.R(897201, 'truncateOptions', truncateOptions, false, false), 'words'))) ? J$.U(89162, '!', J$.G(897225, J$.R(897217, 'truncateOptions', truncateOptions, false, false), 'characters')) : J$._())) {
                                J$.P(897249, J$.R(897233, 'truncateOptions', truncateOptions, false, false), 'words', J$.T(897241, 50, 22, false));
                            }
                            return J$.Rt(897289, J$.F(897281, J$.R(897257, 'downsize', downsize, false, true), false)(J$.R(897265, 'excerpt', excerpt, false, false), J$.R(897273, 'truncateOptions', truncateOptions, false, false)));
                        } catch (J$e) {
                            J$.Ex(897393, J$e);
                        } finally {
                            if (J$.Fr(897401))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(897369, 'downsize', downsize, false, false, false);
            getExcerpt = J$.N(897385, 'getExcerpt', J$.T(897377, getExcerpt, 12, false), true, false, false);
            const downsize = J$.W(896969, 'downsize', J$.F(896961, J$.I(typeof require === 'undefined' ? require = J$.R(896945, 'require', undefined, true, true) : require = J$.R(896945, 'require', require, true, true)), false)(J$.T(896953, 'downsize', 21, false)), downsize, false, true);
            J$.P(897353, J$.I(typeof module === 'undefined' ? module = J$.R(897337, 'module', undefined, true, true) : module = J$.R(897337, 'module', module, true, true)), 'exports', J$.R(897345, 'getExcerpt', getExcerpt, false, true));
        } catch (J$e) {
            J$.Ex(897409, J$e);
        } finally {
            if (J$.Sr(897417))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

