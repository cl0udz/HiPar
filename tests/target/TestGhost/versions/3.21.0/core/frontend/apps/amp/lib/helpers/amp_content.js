J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(888041, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/apps/amp/lib/helpers/amp_content.js');
            function getAmperizeHTML(html, post) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(887337, arguments.callee, this, arguments);
                            arguments = J$.N(887345, 'arguments', arguments, true, false, false);
                            html = J$.N(887353, 'html', html, true, false, false);
                            post = J$.N(887361, 'post', post, true, false, false);
                            J$.N(887369, 'Amperize', Amperize, false, false, false);
                            J$.N(887377, 'startedAtMoment', startedAtMoment, false, false, false);
                            if (J$.C(66744, J$.U(89074, '!', J$.R(886393, 'html', html, false, false)))) {
                                return J$.Rt(886401, undefined);
                            }
                            let Amperize = J$.W(886433, 'Amperize', J$.F(886425, J$.I(typeof require === 'undefined' ? require = J$.R(886409, 'require', undefined, true, true) : require = J$.R(886409, 'require', require, true, true)), false)(J$.T(886417, 'amperize', 21, false)), Amperize, false, false);
                            let startedAtMoment = J$.W(886457, 'startedAtMoment', J$.F(886449, J$.R(886441, 'moment', moment, false, true), false)(), startedAtMoment, false, false);
                            amperize = J$.W(886489, 'amperize', J$.C(66752, J$.R(886465, 'amperize', amperize, false, true)) ? J$._() : J$.F(886481, J$.R(886473, 'Amperize', Amperize, false, false), true)(), amperize, false, true);
                            html = J$.W(886537, 'html', J$.M(886529, J$.R(886497, 'urlUtils', urlUtils, false, true), 'htmlRelativeToAbsolute', false)(J$.R(886505, 'html', html, false, false), J$.G(886521, J$.R(886513, 'post', post, false, false), 'url')), html, false, false);
                            if (J$.C(66784, J$.C(66760, J$.U(89082, '!', J$.G(886569, J$.R(886545, 'amperizeCache', amperizeCache, false, true), J$.G(886561, J$.R(886553, 'post', post, false, false), 'id')))) ? J$._() : J$.B(89090, '<', J$.M(886681, J$.F(886641, J$.R(886577, 'moment', moment, false, true), false)(J$.F(886633, J$.I(typeof Date === 'undefined' ? Date = J$.R(886585, 'Date', undefined, true, true) : Date = J$.R(886585, 'Date', Date, true, true)), true)(J$.G(886625, J$.G(886617, J$.R(886593, 'amperizeCache', amperizeCache, false, true), J$.G(886609, J$.R(886601, 'post', post, false, false), 'id')), 'updated_at'))), 'diff', false)(J$.F(886673, J$.I(typeof Date === 'undefined' ? Date = J$.R(886649, 'Date', undefined, true, true) : Date = J$.R(886649, 'Date', Date, true, true)), true)(J$.G(886665, J$.R(886657, 'post', post, false, false), 'updated_at'))), J$.T(886689, 0, 22, false)))) {
                                return J$.Rt(887265, J$.F(887257, J$.R(886697, 'Promise', Promise, false, true), true)((J$.I(typeof resolve === 'undefined' ? resolve = J$.R(886705, 'resolve', undefined, true, true) : resolve = J$.R(886705, 'resolve', resolve, true, true))) => {
                                    J$.M(887249, J$.R(886713, 'amperize', amperize, false, true), 'parse', false)(J$.R(886721, 'html', html, false, false), (J$.I(typeof err === 'undefined' ? err = J$.R(886729, 'err', undefined, true, true) : err = J$.R(886729, 'err', err, true, true)), J$.I(typeof res === 'undefined' ? res = J$.R(886737, 'res', undefined, true, true) : res = J$.R(886737, 'res', res, true, true))) => {
                                        J$.M(886825, J$.R(886745, 'logging', logging, false, true), 'info', false)(J$.T(886753, 'amp.parse', 21, false), J$.G(886769, J$.R(886761, 'post', post, false, false), 'url'), J$.B(89098, '+', J$.M(886809, J$.F(886785, J$.R(886777, 'moment', moment, false, true), false)(), 'diff', false)(J$.R(886793, 'startedAtMoment', startedAtMoment, false, false), J$.T(886801, 'ms', 21, false)), J$.T(886817, 'ms', 21, false)));
                                        if (J$.C(66776, J$.I(typeof err === 'undefined' ? err = J$.R(886833, 'err', undefined, true, true) : err = J$.R(886833, 'err', err, true, true)))) {
                                            if (J$.C(66768, J$.G(886849, J$.I(typeof err === 'undefined' ? err = J$.R(886841, 'err', undefined, true, true) : err = J$.R(886841, 'err', err, true, true)), 'src'))) {
                                                J$.M(886961, J$.R(886857, 'logging', logging, false, true), 'error', false)(J$.M(886953, J$.R(886865, 'errors', errors, false, true), 'GhostError', true)(J$.T(886945, {
                                                    message: `AMP HTML couldn't get parsed: ${ J$.G(886881, J$.I(typeof err === 'undefined' ? err = J$.R(886873, 'err', undefined, true, true) : err = J$.R(886873, 'err', err, true, true)), 'src') }`,
                                                    code: J$.T(886889, 'AMP_PARSER_ERROR', 21, false),
                                                    err: J$.I(typeof err === 'undefined' ? err = J$.R(886897, 'err', undefined, true, true) : err = J$.R(886897, 'err', err, true, true)),
                                                    context: J$.G(886913, J$.R(886905, 'post', post, false, false), 'url'),
                                                    help: J$.M(886937, J$.R(886921, 'i18n', i18n, false, true), 't', false)(J$.T(886929, 'errors.apps.appWillNotBeLoaded.help', 21, false))
                                                }, 11, false)));
                                            } else {
                                                J$.M(887017, J$.R(886969, 'logging', logging, false, true), 'error', false)(J$.M(887009, J$.R(886977, 'errors', errors, false, true), 'GhostError', true)(J$.T(887001, {
                                                    err,
                                                    code: J$.T(886993, 'AMP_PARSER_ERROR', 21, false)
                                                }, 11, false)));
                                            }
                                            J$.P(887081, J$.R(887025, 'amperizeCache', amperizeCache, false, true), J$.G(887041, J$.R(887033, 'post', post, false, false), 'id'), J$.T(887073, {
                                                updated_at: J$.G(887057, J$.R(887049, 'post', post, false, false), 'updated_at'),
                                                amp: J$.R(887065, 'html', html, false, false)
                                            }, 11, false));
                                            return J$.Rt(887113, J$.F(887105, J$.I(typeof resolve === 'undefined' ? resolve = J$.R(887089, 'resolve', undefined, true, true) : resolve = J$.R(887089, 'resolve', resolve, true, true)), false)(J$.R(887097, 'html', html, false, false)));
                                        }
                                        J$.P(887177, J$.R(887121, 'amperizeCache', amperizeCache, false, true), J$.G(887137, J$.R(887129, 'post', post, false, false), 'id'), J$.T(887169, {
                                            updated_at: J$.G(887153, J$.R(887145, 'post', post, false, false), 'updated_at'),
                                            amp: J$.I(typeof res === 'undefined' ? res = J$.R(887161, 'res', undefined, true, true) : res = J$.R(887161, 'res', res, true, true))
                                        }, 11, false));
                                        return J$.Rt(887241, J$.F(887233, J$.I(typeof resolve === 'undefined' ? resolve = J$.R(887185, 'resolve', undefined, true, true) : resolve = J$.R(887185, 'resolve', resolve, true, true)), false)(J$.G(887225, J$.G(887217, J$.R(887193, 'amperizeCache', amperizeCache, false, true), J$.G(887209, J$.R(887201, 'post', post, false, false), 'id')), 'amp')));
                                    });
                                }));
                            }
                            return J$.Rt(887329, J$.M(887321, J$.R(887273, 'Promise', Promise, false, true), 'resolve', false)(J$.G(887313, J$.G(887305, J$.R(887281, 'amperizeCache', amperizeCache, false, true), J$.G(887297, J$.R(887289, 'post', post, false, false), 'id')), 'amp')));
                        } catch (J$e) {
                            J$.Ex(888193, J$e);
                        } finally {
                            if (J$.Fr(888201))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function ampContent() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(887969, arguments.callee, this, arguments);
                            arguments = J$.N(887977, 'arguments', arguments, true, false, false);
                            J$.N(887985, 'sanitizeHtml', sanitizeHtml, false, false, false);
                            J$.N(887993, 'cheerio', cheerio, false, false, false);
                            J$.N(888001, 'amperizeHTML', amperizeHTML, false, false, false);
                            J$.N(888009, '$', $, false, false, false);
                            let sanitizeHtml = J$.W(887409, 'sanitizeHtml', J$.F(887401, J$.I(typeof require === 'undefined' ? require = J$.R(887385, 'require', undefined, true, true) : require = J$.R(887385, 'require', require, true, true)), false)(J$.T(887393, 'sanitize-html', 21, false)), sanitizeHtml, false, false);
                            let cheerio = J$.W(887441, 'cheerio', J$.F(887433, J$.I(typeof require === 'undefined' ? require = J$.R(887417, 'require', undefined, true, true) : require = J$.R(887417, 'require', require, true, true)), false)(J$.T(887425, 'cheerio', 21, false)), cheerio, false, false);
                            let amperizeHTML = J$.W(887497, 'amperizeHTML', J$.T(887489, { amperize: J$.F(887481, J$.R(887449, 'getAmperizeHTML', getAmperizeHTML, false, true), false)(J$.G(887465, J$.R(887457, 'this', this, false, false), 'html'), J$.R(887473, 'this', this, false, false)) }, 11, false), amperizeHTML, false, false);
                            return J$.Rt(887961, J$.M(887953, J$.M(887521, J$.R(887505, 'Promise', Promise, false, true), 'props', false)(J$.R(887513, 'amperizeHTML', amperizeHTML, false, false)), 'then', false)((J$.I(typeof result === 'undefined' ? result = J$.R(887529, 'result', undefined, true, true) : result = J$.R(887529, 'result', result, true, true))) => {
                                let $ = J$.W(887545, '$', J$.T(887537, null, 25, false), $, false, false);
                                ampHTML = J$.W(887577, 'ampHTML', J$.C(66792, J$.G(887561, J$.I(typeof result === 'undefined' ? result = J$.R(887553, 'result', undefined, true, true) : result = J$.R(887553, 'result', result, true, true)), 'amperize')) ? J$._() : J$.T(887569, '', 21, false), ampHTML, false, true);
                                $ = J$.W(887609, '$', J$.M(887601, J$.R(887585, 'cheerio', cheerio, false, false), 'load', false)(J$.R(887593, 'ampHTML', ampHTML, false, true)), $, false, false);
                                J$.M(887657, J$.M(887649, J$.F(887633, J$.R(887617, '$', $, false, false), false)(J$.T(887625, 'video', 21, false)), 'children', false)(J$.T(887641, 'source', 21, false)), 'remove', false)();
                                J$.M(887705, J$.M(887697, J$.F(887681, J$.R(887665, '$', $, false, false), false)(J$.T(887673, 'video', 21, false)), 'children', false)(J$.T(887689, 'track', 21, false)), 'remove', false)();
                                J$.M(887753, J$.M(887745, J$.F(887729, J$.R(887713, '$', $, false, false), false)(J$.T(887721, 'audio', 21, false)), 'children', false)(J$.T(887737, 'source', 21, false)), 'remove', false)();
                                J$.M(887801, J$.M(887793, J$.F(887777, J$.R(887761, '$', $, false, false), false)(J$.T(887769, 'audio', 21, false)), 'children', false)(J$.T(887785, 'track', 21, false)), 'remove', false)();
                                ampHTML = J$.W(887825, 'ampHTML', J$.M(887817, J$.R(887809, '$', $, false, false), 'html', false)(), ampHTML, false, true);
                                cleanHTML = J$.W(887913, 'cleanHTML', J$.F(887905, J$.R(887833, 'sanitizeHtml', sanitizeHtml, false, false), false)(J$.R(887841, 'ampHTML', ampHTML, false, true), J$.T(887897, {
                                    allowedTags: J$.R(887849, 'allowedAMPTags', allowedAMPTags, false, true),
                                    allowedAttributes: J$.R(887857, 'allowedAMPAttributes', allowedAMPAttributes, false, true),
                                    selfClosing: J$.T(887889, [
                                        J$.T(887865, 'source', 21, false),
                                        J$.T(887873, 'track', 21, false),
                                        J$.T(887881, 'br', 21, false)
                                    ], 10, false)
                                }, 11, false)), cleanHTML, false, true);
                                return J$.Rt(887945, J$.F(887937, J$.R(887921, 'SafeString', SafeString, false, true), true)(J$.R(887929, 'cleanHTML', cleanHTML, false, true)));
                            }));
                        } catch (J$e) {
                            J$.Ex(888209, J$e);
                        } finally {
                            if (J$.Fr(888217))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(888049, 'Promise', Promise, false, false, false);
            J$.N(888057, 'moment', moment, false, false, false);
            J$.N(888065, 'proxy', proxy, false, false, false);
            J$.N(888073, 'SafeString', SafeString, false, false, false);
            J$.N(888081, 'logging', logging, false, false, false);
            J$.N(888089, 'i18n', i18n, false, false, false);
            J$.N(888097, 'errors', errors, false, false, false);
            J$.N(888105, 'urlUtils', urlUtils, false, false, false);
            J$.N(888113, 'amperizeCache', amperizeCache, false, false, false);
            J$.N(888121, 'allowedAMPTags', allowedAMPTags, false, false, false);
            J$.N(888129, 'allowedAMPAttributes', allowedAMPAttributes, false, false, false);
            J$.N(888137, 'amperize', amperize, false, false, false);
            J$.N(888145, 'ampHTML', ampHTML, false, false, false);
            J$.N(888153, 'cleanHTML', cleanHTML, false, false, false);
            getAmperizeHTML = J$.N(888169, 'getAmperizeHTML', J$.T(888161, getAmperizeHTML, 12, false), true, false, false);
            ampContent = J$.N(888185, 'ampContent', J$.T(888177, ampContent, 12, false), true, false, false);
            const Promise = J$.W(882825, 'Promise', J$.F(882817, J$.I(typeof require === 'undefined' ? require = J$.R(882801, 'require', undefined, true, true) : require = J$.R(882801, 'require', require, true, true)), false)(J$.T(882809, 'bluebird', 21, false)), Promise, false, true);
            const moment = J$.W(882857, 'moment', J$.F(882849, J$.I(typeof require === 'undefined' ? require = J$.R(882833, 'require', undefined, true, true) : require = J$.R(882833, 'require', require, true, true)), false)(J$.T(882841, 'moment', 21, false)), moment, false, true);
            const proxy = J$.W(882889, 'proxy', J$.F(882881, J$.I(typeof require === 'undefined' ? require = J$.R(882865, 'require', undefined, true, true) : require = J$.R(882865, 'require', require, true, true)), false)(J$.T(882873, '../../../../services/proxy', 21, false)), proxy, false, true);
            const SafeString = J$.W(882913, 'SafeString', J$.G(882905, J$.R(882897, 'proxy', proxy, false, true), 'SafeString'), SafeString, false, true);
            const logging = J$.W(882937, 'logging', J$.G(882929, J$.R(882921, 'proxy', proxy, false, true), 'logging'), logging, false, true);
            const i18n = J$.W(882961, 'i18n', J$.G(882953, J$.R(882945, 'proxy', proxy, false, true), 'i18n'), i18n, false, true);
            const errors = J$.W(882985, 'errors', J$.G(882977, J$.R(882969, 'proxy', proxy, false, true), 'errors'), errors, false, true);
            const urlUtils = J$.W(883009, 'urlUtils', J$.G(883001, J$.R(882993, 'proxy', proxy, false, true), 'urlUtils'), urlUtils, false, true);
            const amperizeCache = J$.W(883025, 'amperizeCache', J$.T(883017, {}, 11, false), amperizeCache, false, true);
            let allowedAMPTags = J$.W(883041, 'allowedAMPTags', J$.T(883033, [], 10, false), allowedAMPTags, false, true);
            let allowedAMPAttributes = J$.W(883057, 'allowedAMPAttributes', J$.T(883049, {}, 11, false), allowedAMPAttributes, false, true);
            let amperize = J$.W(883073, 'amperize', J$.T(883065, null, 25, false), amperize, false, true);
            let ampHTML = J$.W(883089, 'ampHTML', J$.T(883081, '', 21, false), ampHTML, false, true);
            let cleanHTML = J$.W(883105, 'cleanHTML', J$.T(883097, '', 21, false), cleanHTML, false, true);
            allowedAMPTags = J$.W(884153, 'allowedAMPTags', J$.T(884145, [
                J$.T(883113, 'html', 21, false),
                J$.T(883121, 'body', 21, false),
                J$.T(883129, 'article', 21, false),
                J$.T(883137, 'section', 21, false),
                J$.T(883145, 'nav', 21, false),
                J$.T(883153, 'aside', 21, false),
                J$.T(883161, 'h1', 21, false),
                J$.T(883169, 'h2', 21, false),
                J$.T(883177, 'h3', 21, false),
                J$.T(883185, 'h4', 21, false),
                J$.T(883193, 'h5', 21, false),
                J$.T(883201, 'h6', 21, false),
                J$.T(883209, 'header', 21, false),
                J$.T(883217, 'footer', 21, false),
                J$.T(883225, 'address', 21, false),
                J$.T(883233, 'p', 21, false),
                J$.T(883241, 'hr', 21, false),
                J$.T(883249, 'pre', 21, false),
                J$.T(883257, 'blockquote', 21, false),
                J$.T(883265, 'ol', 21, false),
                J$.T(883273, 'ul', 21, false),
                J$.T(883281, 'li', 21, false),
                J$.T(883289, 'dl', 21, false),
                J$.T(883297, 'dt', 21, false),
                J$.T(883305, 'dd', 21, false),
                J$.T(883313, 'figure', 21, false),
                J$.T(883321, 'figcaption', 21, false),
                J$.T(883329, 'div', 21, false),
                J$.T(883337, 'main', 21, false),
                J$.T(883345, 'a', 21, false),
                J$.T(883353, 'em', 21, false),
                J$.T(883361, 'strong', 21, false),
                J$.T(883369, 'small', 21, false),
                J$.T(883377, 's', 21, false),
                J$.T(883385, 'cite', 21, false),
                J$.T(883393, 'q', 21, false),
                J$.T(883401, 'dfn', 21, false),
                J$.T(883409, 'abbr', 21, false),
                J$.T(883417, 'data', 21, false),
                J$.T(883425, 'time', 21, false),
                J$.T(883433, 'code', 21, false),
                J$.T(883441, 'var', 21, false),
                J$.T(883449, 'samp', 21, false),
                J$.T(883457, 'kbd', 21, false),
                J$.T(883465, 'sub', 21, false),
                J$.T(883473, 'sup', 21, false),
                J$.T(883481, 'i', 21, false),
                J$.T(883489, 'b', 21, false),
                J$.T(883497, 'u', 21, false),
                J$.T(883505, 'mark', 21, false),
                J$.T(883513, 'ruby', 21, false),
                J$.T(883521, 'rb', 21, false),
                J$.T(883529, 'rt', 21, false),
                J$.T(883537, 'rtc', 21, false),
                J$.T(883545, 'rp', 21, false),
                J$.T(883553, 'bdi', 21, false),
                J$.T(883561, 'bdo', 21, false),
                J$.T(883569, 'span', 21, false),
                J$.T(883577, 'br', 21, false),
                J$.T(883585, 'wbr', 21, false),
                J$.T(883593, 'ins', 21, false),
                J$.T(883601, 'del', 21, false),
                J$.T(883609, 'source', 21, false),
                J$.T(883617, 'track', 21, false),
                J$.T(883625, 'svg', 21, false),
                J$.T(883633, 'g', 21, false),
                J$.T(883641, 'path', 21, false),
                J$.T(883649, 'glyph', 21, false),
                J$.T(883657, 'glyphref', 21, false),
                J$.T(883665, 'marker', 21, false),
                J$.T(883673, 'view', 21, false),
                J$.T(883681, 'circle', 21, false),
                J$.T(883689, 'line', 21, false),
                J$.T(883697, 'polygon', 21, false),
                J$.T(883705, 'polyline', 21, false),
                J$.T(883713, 'rect', 21, false),
                J$.T(883721, 'text', 21, false),
                J$.T(883729, 'textpath', 21, false),
                J$.T(883737, 'tref', 21, false),
                J$.T(883745, 'tspan', 21, false),
                J$.T(883753, 'clippath', 21, false),
                J$.T(883761, 'filter', 21, false),
                J$.T(883769, 'lineargradient', 21, false),
                J$.T(883777, 'radialgradient', 21, false),
                J$.T(883785, 'mask', 21, false),
                J$.T(883793, 'pattern', 21, false),
                J$.T(883801, 'vkern', 21, false),
                J$.T(883809, 'hkern', 21, false),
                J$.T(883817, 'defs', 21, false),
                J$.T(883825, 'stop', 21, false),
                J$.T(883833, 'use', 21, false),
                J$.T(883841, 'foreignobject', 21, false),
                J$.T(883849, 'symbol', 21, false),
                J$.T(883857, 'desc', 21, false),
                J$.T(883865, 'title', 21, false),
                J$.T(883873, 'table', 21, false),
                J$.T(883881, 'caption', 21, false),
                J$.T(883889, 'colgroup', 21, false),
                J$.T(883897, 'col', 21, false),
                J$.T(883905, 'tbody', 21, false),
                J$.T(883913, 'thead', 21, false),
                J$.T(883921, 'tfoot', 21, false),
                J$.T(883929, 'tr', 21, false),
                J$.T(883937, 'td', 21, false),
                J$.T(883945, 'th', 21, false),
                J$.T(883953, 'button', 21, false),
                J$.T(883961, 'noscript', 21, false),
                J$.T(883969, 'acronym', 21, false),
                J$.T(883977, 'center', 21, false),
                J$.T(883985, 'dir', 21, false),
                J$.T(883993, 'hgroup', 21, false),
                J$.T(884001, 'listing', 21, false),
                J$.T(884009, 'multicol', 21, false),
                J$.T(884017, 'nextid', 21, false),
                J$.T(884025, 'nobr', 21, false),
                J$.T(884033, 'spacer', 21, false),
                J$.T(884041, 'strike', 21, false),
                J$.T(884049, 'tt', 21, false),
                J$.T(884057, 'xmp', 21, false),
                J$.T(884065, 'amp-img', 21, false),
                J$.T(884073, 'amp-video', 21, false),
                J$.T(884081, 'amp-ad', 21, false),
                J$.T(884089, 'amp-embed', 21, false),
                J$.T(884097, 'amp-anim', 21, false),
                J$.T(884105, 'amp-iframe', 21, false),
                J$.T(884113, 'amp-youtube', 21, false),
                J$.T(884121, 'amp-pixel', 21, false),
                J$.T(884129, 'amp-audio', 21, false),
                J$.T(884137, 'O:P', 21, false)
            ], 10, false), allowedAMPTags, false, true);
            allowedAMPAttributes = J$.W(886385, 'allowedAMPAttributes', J$.T(886377, {
                '*': J$.T(884353, [
                    J$.T(884161, 'itemid', 21, false),
                    J$.T(884169, 'itemprop', 21, false),
                    J$.T(884177, 'itemref', 21, false),
                    J$.T(884185, 'itemscope', 21, false),
                    J$.T(884193, 'itemtype', 21, false),
                    J$.T(884201, 'accesskey', 21, false),
                    J$.T(884209, 'class', 21, false),
                    J$.T(884217, 'dir', 21, false),
                    J$.T(884225, 'draggable', 21, false),
                    J$.T(884233, 'id', 21, false),
                    J$.T(884241, 'lang', 21, false),
                    J$.T(884249, 'tabindex', 21, false),
                    J$.T(884257, 'title', 21, false),
                    J$.T(884265, 'translate', 21, false),
                    J$.T(884273, 'aria-*', 21, false),
                    J$.T(884281, 'role', 21, false),
                    J$.T(884289, 'placeholder', 21, false),
                    J$.T(884297, 'fallback', 21, false),
                    J$.T(884305, 'lightbox', 21, false),
                    J$.T(884313, 'overflow', 21, false),
                    J$.T(884321, 'amp-access', 21, false),
                    J$.T(884329, 'amp-access-*', 21, false),
                    J$.T(884337, 'i-amp-access-id', 21, false),
                    J$.T(884345, 'data-*', 21, false)
                ], 10, false),
                h1: J$.T(884369, [J$.T(884361, 'align', 21, false)], 10, false),
                h2: J$.T(884385, [J$.T(884377, 'align', 21, false)], 10, false),
                h3: J$.T(884401, [J$.T(884393, 'align', 21, false)], 10, false),
                h4: J$.T(884417, [J$.T(884409, 'align', 21, false)], 10, false),
                h5: J$.T(884433, [J$.T(884425, 'align', 21, false)], 10, false),
                h6: J$.T(884449, [J$.T(884441, 'align', 21, false)], 10, false),
                p: J$.T(884465, [J$.T(884457, 'align', 21, false)], 10, false),
                blockquote: J$.T(884481, [J$.T(884473, 'align', 21, false)], 10, false),
                ol: J$.T(884513, [
                    J$.T(884489, 'reversed', 21, false),
                    J$.T(884497, 'start', 21, false),
                    J$.T(884505, 'type', 21, false)
                ], 10, false),
                li: J$.T(884529, [J$.T(884521, 'value', 21, false)], 10, false),
                div: J$.T(884545, [J$.T(884537, 'align', 21, false)], 10, false),
                a: J$.T(884641, [
                    J$.T(884553, 'href', 21, false),
                    J$.T(884561, 'hreflang', 21, false),
                    J$.T(884569, 'rel', 21, false),
                    J$.T(884577, 'role', 21, false),
                    J$.T(884585, 'tabindex', 21, false),
                    J$.T(884593, 'target', 21, false),
                    J$.T(884601, 'download', 21, false),
                    J$.T(884609, 'media', 21, false),
                    J$.T(884617, 'type', 21, false),
                    J$.T(884625, 'border', 21, false),
                    J$.T(884633, 'name', 21, false)
                ], 10, false),
                time: J$.T(884657, [J$.T(884649, 'datetime', 21, false)], 10, false),
                bdo: J$.T(884673, [J$.T(884665, 'dir', 21, false)], 10, false),
                ins: J$.T(884689, [J$.T(884681, 'datetime', 21, false)], 10, false),
                del: J$.T(884705, [J$.T(884697, 'datetime', 21, false)], 10, false),
                source: J$.T(884777, [
                    J$.T(884713, 'src', 21, false),
                    J$.T(884721, 'srcset', 21, false),
                    J$.T(884729, 'sizes', 21, false),
                    J$.T(884737, 'media', 21, false),
                    J$.T(884745, 'type', 21, false),
                    J$.T(884753, 'kind', 21, false),
                    J$.T(884761, 'label', 21, false),
                    J$.T(884769, 'srclang', 21, false)
                ], 10, false),
                track: J$.T(884825, [
                    J$.T(884785, 'src', 21, false),
                    J$.T(884793, 'default', 21, false),
                    J$.T(884801, 'kind', 21, false),
                    J$.T(884809, 'label', 21, false),
                    J$.T(884817, 'srclang', 21, false)
                ], 10, false),
                svg: J$.T(884841, [J$.T(884833, '*', 21, false)], 10, false),
                g: J$.T(884857, [J$.T(884849, '*', 21, false)], 10, false),
                glyph: J$.T(884873, [J$.T(884865, '*', 21, false)], 10, false),
                glyphref: J$.T(884889, [J$.T(884881, '*', 21, false)], 10, false),
                marker: J$.T(884905, [J$.T(884897, '*', 21, false)], 10, false),
                path: J$.T(884921, [J$.T(884913, '*', 21, false)], 10, false),
                view: J$.T(884937, [J$.T(884929, '*', 21, false)], 10, false),
                circle: J$.T(884953, [J$.T(884945, '*', 21, false)], 10, false),
                line: J$.T(884969, [J$.T(884961, '*', 21, false)], 10, false),
                polygon: J$.T(884985, [J$.T(884977, '*', 21, false)], 10, false),
                polyline: J$.T(885001, [J$.T(884993, '*', 21, false)], 10, false),
                rect: J$.T(885017, [J$.T(885009, '*', 21, false)], 10, false),
                text: J$.T(885033, [J$.T(885025, '*', 21, false)], 10, false),
                textpath: J$.T(885049, [J$.T(885041, '*', 21, false)], 10, false),
                tref: J$.T(885065, [J$.T(885057, '*', 21, false)], 10, false),
                tspan: J$.T(885081, [J$.T(885073, '*', 21, false)], 10, false),
                clippath: J$.T(885097, [J$.T(885089, '*', 21, false)], 10, false),
                filter: J$.T(885113, [J$.T(885105, '*', 21, false)], 10, false),
                hkern: J$.T(885129, [J$.T(885121, '*', 21, false)], 10, false),
                lineargradient: J$.T(885145, [J$.T(885137, '*', 21, false)], 10, false),
                mask: J$.T(885161, [J$.T(885153, '*', 21, false)], 10, false),
                pattern: J$.T(885177, [J$.T(885169, '*', 21, false)], 10, false),
                radialgradient: J$.T(885193, [J$.T(885185, '*', 21, false)], 10, false),
                stop: J$.T(885209, [J$.T(885201, '*', 21, false)], 10, false),
                vkern: J$.T(885225, [J$.T(885217, '*', 21, false)], 10, false),
                defs: J$.T(885241, [J$.T(885233, '*', 21, false)], 10, false),
                symbol: J$.T(885257, [J$.T(885249, '*', 21, false)], 10, false),
                use: J$.T(885273, [J$.T(885265, '*', 21, false)], 10, false),
                foreignobject: J$.T(885289, [J$.T(885281, '*', 21, false)], 10, false),
                desc: J$.T(885305, [J$.T(885297, '*', 21, false)], 10, false),
                title: J$.T(885321, [J$.T(885313, '*', 21, false)], 10, false),
                table: J$.T(885385, [
                    J$.T(885329, 'sortable', 21, false),
                    J$.T(885337, 'align', 21, false),
                    J$.T(885345, 'border', 21, false),
                    J$.T(885353, 'bgcolor', 21, false),
                    J$.T(885361, 'cellpadding', 21, false),
                    J$.T(885369, 'cellspacing', 21, false),
                    J$.T(885377, 'width', 21, false)
                ], 10, false),
                colgroup: J$.T(885401, [J$.T(885393, 'span', 21, false)], 10, false),
                col: J$.T(885417, [J$.T(885409, 'span', 21, false)], 10, false),
                tr: J$.T(885457, [
                    J$.T(885425, 'align', 21, false),
                    J$.T(885433, 'bgcolor', 21, false),
                    J$.T(885441, 'height', 21, false),
                    J$.T(885449, 'valign', 21, false)
                ], 10, false),
                td: J$.T(885521, [
                    J$.T(885465, 'align', 21, false),
                    J$.T(885473, 'bgcolor', 21, false),
                    J$.T(885481, 'height', 21, false),
                    J$.T(885489, 'valign', 21, false),
                    J$.T(885497, 'colspan', 21, false),
                    J$.T(885505, 'headers', 21, false),
                    J$.T(885513, 'rowspan', 21, false)
                ], 10, false),
                th: J$.T(885609, [
                    J$.T(885529, 'align', 21, false),
                    J$.T(885537, 'bgcolor', 21, false),
                    J$.T(885545, 'height', 21, false),
                    J$.T(885553, 'valign', 21, false),
                    J$.T(885561, 'colspan', 21, false),
                    J$.T(885569, 'headers', 21, false),
                    J$.T(885577, 'rowspan', 21, false),
                    J$.T(885585, 'abbr', 21, false),
                    J$.T(885593, 'scope', 21, false),
                    J$.T(885601, 'sorted', 21, false)
                ], 10, false),
                button: J$.T(885673, [
                    J$.T(885617, 'disabled', 21, false),
                    J$.T(885625, 'name', 21, false),
                    J$.T(885633, 'role', 21, false),
                    J$.T(885641, 'tabindex', 21, false),
                    J$.T(885649, 'type', 21, false),
                    J$.T(885657, 'value', 21, false),
                    J$.T(885665, 'formtarget', 21, false)
                ], 10, false),
                'amp-img': J$.T(885761, [
                    J$.T(885681, 'media', 21, false),
                    J$.T(885689, 'noloading', 21, false),
                    J$.T(885697, 'alt', 21, false),
                    J$.T(885705, 'attribution', 21, false),
                    J$.T(885713, 'placeholder', 21, false),
                    J$.T(885721, 'src', 21, false),
                    J$.T(885729, 'srcset', 21, false),
                    J$.T(885737, 'width', 21, false),
                    J$.T(885745, 'height', 21, false),
                    J$.T(885753, 'layout', 21, false)
                ], 10, false),
                'amp-pixel': J$.T(885777, [J$.T(885769, 'src', 21, false)], 10, false),
                'amp-video': J$.T(885905, [
                    J$.T(885785, 'src', 21, false),
                    J$.T(885793, 'srcset', 21, false),
                    J$.T(885801, 'media', 21, false),
                    J$.T(885809, 'noloading', 21, false),
                    J$.T(885817, 'width', 21, false),
                    J$.T(885825, 'height', 21, false),
                    J$.T(885833, 'layout', 21, false),
                    J$.T(885841, 'alt', 21, false),
                    J$.T(885849, 'attribution', 21, false),
                    J$.T(885857, 'autoplay', 21, false),
                    J$.T(885865, 'controls', 21, false),
                    J$.T(885873, 'loop', 21, false),
                    J$.T(885881, 'muted', 21, false),
                    J$.T(885889, 'poster', 21, false),
                    J$.T(885897, 'preload', 21, false)
                ], 10, false),
                'amp-embed': J$.T(885977, [
                    J$.T(885913, 'media', 21, false),
                    J$.T(885921, 'noloading', 21, false),
                    J$.T(885929, 'width', 21, false),
                    J$.T(885937, 'height', 21, false),
                    J$.T(885945, 'layout', 21, false),
                    J$.T(885953, 'type', 21, false),
                    J$.T(885961, 'data-*', 21, false),
                    J$.T(885969, 'json', 21, false)
                ], 10, false),
                'amp-ad': J$.T(886049, [
                    J$.T(885985, 'media', 21, false),
                    J$.T(885993, 'noloading', 21, false),
                    J$.T(886001, 'width', 21, false),
                    J$.T(886009, 'height', 21, false),
                    J$.T(886017, 'layout', 21, false),
                    J$.T(886025, 'type', 21, false),
                    J$.T(886033, 'data-*', 21, false),
                    J$.T(886041, 'json', 21, false)
                ], 10, false),
                'amp-anim': J$.T(886137, [
                    J$.T(886057, 'media', 21, false),
                    J$.T(886065, 'noloading', 21, false),
                    J$.T(886073, 'alt', 21, false),
                    J$.T(886081, 'attribution', 21, false),
                    J$.T(886089, 'placeholder', 21, false),
                    J$.T(886097, 'src', 21, false),
                    J$.T(886105, 'srcset', 21, false),
                    J$.T(886113, 'width', 21, false),
                    J$.T(886121, 'height', 21, false),
                    J$.T(886129, 'layout', 21, false)
                ], 10, false),
                'amp-audio': J$.T(886201, [
                    J$.T(886145, 'src', 21, false),
                    J$.T(886153, 'width', 21, false),
                    J$.T(886161, 'height', 21, false),
                    J$.T(886169, 'autoplay', 21, false),
                    J$.T(886177, 'loop', 21, false),
                    J$.T(886185, 'muted', 21, false),
                    J$.T(886193, 'controls', 21, false)
                ], 10, false),
                'amp-iframe': J$.T(886289, [
                    J$.T(886209, 'src', 21, false),
                    J$.T(886217, 'srcdoc', 21, false),
                    J$.T(886225, 'width', 21, false),
                    J$.T(886233, 'height', 21, false),
                    J$.T(886241, 'layout', 21, false),
                    J$.T(886249, 'frameborder', 21, false),
                    J$.T(886257, 'allowfullscreen', 21, false),
                    J$.T(886265, 'allowtransparency', 21, false),
                    J$.T(886273, 'sandbox', 21, false),
                    J$.T(886281, 'referrerpolicy', 21, false)
                ], 10, false),
                'amp-youtube': J$.T(886369, [
                    J$.T(886297, 'src', 21, false),
                    J$.T(886305, 'width', 21, false),
                    J$.T(886313, 'height', 21, false),
                    J$.T(886321, 'layout', 21, false),
                    J$.T(886329, 'frameborder', 21, false),
                    J$.T(886337, 'autoplay', 21, false),
                    J$.T(886345, 'loop', 21, false),
                    J$.T(886353, 'data-videoid', 21, false),
                    J$.T(886361, 'data-live-channelid', 21, false)
                ], 10, false)
            }, 11, false), allowedAMPAttributes, false, true);
            J$.P(888033, J$.I(typeof module === 'undefined' ? module = J$.R(888017, 'module', undefined, true, true) : module = J$.R(888017, 'module', module, true, true)), 'exports', J$.R(888025, 'ampContent', ampContent, false, true));
        } catch (J$e) {
            J$.Ex(888225, J$e);
        } finally {
            if (J$.Sr(888233))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

