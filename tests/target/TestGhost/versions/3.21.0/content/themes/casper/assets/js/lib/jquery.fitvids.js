J$.noInstrEval = false;
J$.noInstrEval = false;
jalangiLabel4:
    while (true) {
        try {
            J$.Se(8857, '/home/hipar/HiPar/outputs/target_cache/TestGhost/content/themes/casper/assets/js/lib/jquery.fitvids.js');
            ;
            J$.F(8849, J$.T(8809, function ($) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(8785, arguments.callee, this, arguments);
                            arguments = J$.N(8793, 'arguments', arguments, true, false, false);
                            $ = J$.N(8801, '$', $, true, false, false);
                            J$.T(6905, 'use strict', 21, false);
                            J$.P(8737, J$.G(6921, J$.R(6913, '$', $, false, false), 'fn'), 'fitVids', J$.T(8729, function (options) {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(8673, arguments.callee, this, arguments);
                                            arguments = J$.N(8681, 'arguments', arguments, true, false, false);
                                            options = J$.N(8689, 'options', options, true, false, false);
                                            J$.N(8697, 'settings', settings, false, false, false);
                                            J$.N(8705, 'head', head, false, false, false);
                                            J$.N(8713, 'css', css, false, false, false);
                                            J$.N(8721, 'div', div, false, false, false);
                                            var settings = J$.W(6953, 'settings', J$.T(6945, {
                                                customSelector: J$.T(6929, null, 25, false),
                                                ignore: J$.T(6937, null, 25, false)
                                            }, 11, false), settings, false, false);
                                            if (J$.C(304, J$.U(394, '!', J$.M(6977, J$.I(typeof document === 'undefined' ? document = J$.R(6961, 'document', undefined, true, true) : document = J$.R(6961, 'document', document, true, true)), 'getElementById', false)(J$.T(6969, 'fit-vids-style', 21, false))))) {
                                                var head = J$.W(7041, 'head', J$.C(296, J$.G(6993, J$.I(typeof document === 'undefined' ? document = J$.R(6985, 'document', undefined, true, true) : document = J$.R(6985, 'document', document, true, true)), 'head')) ? J$._() : J$.G(7033, J$.M(7017, J$.I(typeof document === 'undefined' ? document = J$.R(7001, 'document', undefined, true, true) : document = J$.R(7001, 'document', document, true, true)), 'getElementsByTagName', false)(J$.T(7009, 'head', 21, false)), J$.T(7025, 0, 22, false)), head, false, false);
                                                var css = J$.W(7057, 'css', J$.T(7049, '.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}', 21, false), css, false, false);
                                                var div = J$.W(7089, 'div', J$.M(7081, J$.I(typeof document === 'undefined' ? document = J$.R(7065, 'document', undefined, true, true) : document = J$.R(7065, 'document', document, true, true)), 'createElement', false)(J$.T(7073, 'div', 21, false)), div, false, false);
                                                J$.P(7129, J$.R(7097, 'div', div, false, false), 'innerHTML', J$.B(410, '+', J$.B(402, '+', J$.T(7105, '<p>x</p><style id="fit-vids-style">', 21, false), J$.R(7113, 'css', css, false, false)), J$.T(7121, '</style>', 21, false)));
                                                J$.M(7177, J$.R(7137, 'head', head, false, false), 'appendChild', false)(J$.G(7169, J$.G(7153, J$.R(7145, 'div', div, false, false), 'childNodes'), J$.T(7161, 1, 22, false)));
                                            }
                                            if (J$.C(312, J$.R(7185, 'options', options, false, false))) {
                                                J$.M(7217, J$.R(7193, '$', $, false, false), 'extend', false)(J$.R(7201, 'settings', settings, false, false), J$.R(7209, 'options', options, false, false));
                                            }
                                            return J$.Rt(8665, J$.M(8657, J$.R(7225, 'this', this, false, false), 'each', false)(J$.T(8649, function () {
                                                jalangiLabel1:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(8609, arguments.callee, this, arguments);
                                                            arguments = J$.N(8617, 'arguments', arguments, true, false, false);
                                                            J$.N(8625, 'selectors', selectors, false, false, false);
                                                            J$.N(8633, 'ignoreList', ignoreList, false, false, false);
                                                            J$.N(8641, '$allVideos', $allVideos, false, false, false);
                                                            var selectors = J$.W(7289, 'selectors', J$.T(7281, [
                                                                J$.T(7233, 'iframe[src*="player.vimeo.com"]', 21, false),
                                                                J$.T(7241, 'iframe[src*="youtube.com"]', 21, false),
                                                                J$.T(7249, 'iframe[src*="youtube-nocookie.com"]', 21, false),
                                                                J$.T(7257, 'iframe[src*="kickstarter.com"][src*="video.html"]', 21, false),
                                                                J$.T(7265, 'object', 21, false),
                                                                J$.T(7273, 'embed', 21, false)
                                                            ], 10, false), selectors, false, false);
                                                            if (J$.C(320, J$.G(7305, J$.R(7297, 'settings', settings, false, false), 'customSelector'))) {
                                                                J$.M(7337, J$.R(7313, 'selectors', selectors, false, false), 'push', false)(J$.G(7329, J$.R(7321, 'settings', settings, false, false), 'customSelector'));
                                                            }
                                                            var ignoreList = J$.W(7353, 'ignoreList', J$.T(7345, '.fitvidsignore', 21, false), ignoreList, false, false);
                                                            if (J$.C(328, J$.G(7369, J$.R(7361, 'settings', settings, false, false), 'ignore'))) {
                                                                ignoreList = J$.W(7409, 'ignoreList', J$.B(426, '+', J$.B(418, '+', J$.R(7377, 'ignoreList', ignoreList, false, false), J$.T(7385, ', ', 21, false)), J$.G(7401, J$.R(7393, 'settings', settings, false, false), 'ignore')), ignoreList, false, false);
                                                            }
                                                            var $allVideos = J$.W(7473, '$allVideos', J$.M(7465, J$.F(7433, J$.R(7417, '$', $, false, false), false)(J$.R(7425, 'this', this, false, false)), 'find', false)(J$.M(7457, J$.R(7441, 'selectors', selectors, false, false), 'join', false)(J$.T(7449, ',', 21, false))), $allVideos, false, false);
                                                            $allVideos = J$.W(7505, '$allVideos', J$.M(7497, J$.R(7481, '$allVideos', $allVideos, false, false), 'not', false)(J$.T(7489, 'object object', 21, false)), $allVideos, false, false);
                                                            $allVideos = J$.W(7537, '$allVideos', J$.M(7529, J$.R(7513, '$allVideos', $allVideos, false, false), 'not', false)(J$.R(7521, 'ignoreList', ignoreList, false, false)), $allVideos, false, false);
                                                            J$.M(8601, J$.R(7545, '$allVideos', $allVideos, false, false), 'each', false)(J$.T(8593, function () {
                                                                jalangiLabel0:
                                                                    while (true) {
                                                                        try {
                                                                            J$.Fe(8537, arguments.callee, this, arguments);
                                                                            arguments = J$.N(8545, 'arguments', arguments, true, false, false);
                                                                            J$.N(8553, '$this', $this, false, false, false);
                                                                            J$.N(8561, 'height', height, false, false, false);
                                                                            J$.N(8569, 'width', width, false, false, false);
                                                                            J$.N(8577, 'aspectRatio', aspectRatio, false, false, false);
                                                                            J$.N(8585, 'videoName', videoName, false, false, false);
                                                                            var $this = J$.W(7577, '$this', J$.F(7569, J$.R(7553, '$', $, false, false), false)(J$.R(7561, 'this', this, false, false)), $this, false, false);
                                                                            if (J$.C(336, J$.B(434, '>', J$.G(7609, J$.M(7601, J$.R(7585, '$this', $this, false, false), 'parents', false)(J$.R(7593, 'ignoreList', ignoreList, false, false)), 'length'), J$.T(7617, 0, 22, false)))) {
                                                                                return J$.Rt(7625, undefined);
                                                                            }
                                                                            if (J$.C(360, J$.C(352, J$.C(344, J$.B(442, '===', J$.M(7649, J$.G(7641, J$.R(7633, 'this', this, false, false), 'tagName'), 'toLowerCase', false)(), J$.T(7657, 'embed', 21, false))) ? J$.G(7689, J$.M(7681, J$.R(7665, '$this', $this, false, false), 'parent', false)(J$.T(7673, 'object', 21, false)), 'length') : J$._()) ? J$._() : J$.G(7721, J$.M(7713, J$.R(7697, '$this', $this, false, false), 'parent', false)(J$.T(7705, '.fluid-width-video-wrapper', 21, false)), 'length'))) {
                                                                                return J$.Rt(7729, undefined);
                                                                            }
                                                                            if (J$.C(392, J$.C(384, J$.C(368, J$.U(450, '!', J$.M(7753, J$.R(7737, '$this', $this, false, false), 'css', false)(J$.T(7745, 'height', 21, false)))) ? J$.U(458, '!', J$.M(7777, J$.R(7761, '$this', $this, false, false), 'css', false)(J$.T(7769, 'width', 21, false))) : J$._()) ? J$.C(376, J$.F(7817, J$.I(typeof isNaN === 'undefined' ? isNaN = J$.R(7785, 'isNaN', undefined, true, true) : isNaN = J$.R(7785, 'isNaN', isNaN, true, true)), false)(J$.M(7809, J$.R(7793, '$this', $this, false, false), 'attr', false)(J$.T(7801, 'height', 21, false)))) ? J$._() : J$.F(7857, J$.I(typeof isNaN === 'undefined' ? isNaN = J$.R(7825, 'isNaN', undefined, true, true) : isNaN = J$.R(7825, 'isNaN', isNaN, true, true)), false)(J$.M(7849, J$.R(7833, '$this', $this, false, false), 'attr', false)(J$.T(7841, 'width', 21, false))) : J$._())) {
                                                                                J$.M(7889, J$.R(7865, '$this', $this, false, false), 'attr', false)(J$.T(7873, 'height', 21, false), J$.T(7881, 9, 22, false));
                                                                                J$.M(7921, J$.R(7897, '$this', $this, false, false), 'attr', false)(J$.T(7905, 'width', 21, false), J$.T(7913, 16, 22, false));
                                                                            }
                                                                            var height = J$.W(8257, 'height', J$.C(416, J$.C(408, J$.B(466, '===', J$.M(7945, J$.G(7937, J$.R(7929, 'this', this, false, false), 'tagName'), 'toLowerCase', false)(), J$.T(7953, 'object', 21, false))) ? J$._() : J$.C(400, J$.M(7977, J$.R(7961, '$this', $this, false, false), 'attr', false)(J$.T(7969, 'height', 21, false))) ? J$.U(474, '!', J$.F(8041, J$.I(typeof isNaN === 'undefined' ? isNaN = J$.R(7985, 'isNaN', undefined, true, true) : isNaN = J$.R(7985, 'isNaN', isNaN, true, true)), false)(J$.F(8033, J$.I(typeof parseInt === 'undefined' ? parseInt = J$.R(7993, 'parseInt', undefined, true, true) : parseInt = J$.R(7993, 'parseInt', parseInt, true, true)), false)(J$.M(8017, J$.R(8001, '$this', $this, false, false), 'attr', false)(J$.T(8009, 'height', 21, false)), J$.T(8025, 10, 22, false)))) : J$._()) ? J$.F(8089, J$.I(typeof parseInt === 'undefined' ? parseInt = J$.R(8049, 'parseInt', undefined, true, true) : parseInt = J$.R(8049, 'parseInt', parseInt, true, true)), false)(J$.M(8073, J$.R(8057, '$this', $this, false, false), 'attr', false)(J$.T(8065, 'height', 21, false)), J$.T(8081, 10, 22, false)) : J$.M(8105, J$.R(8097, '$this', $this, false, false), 'height', false)(), height, false, false), width = J$.W(8265, 'width', J$.C(424, J$.U(482, '!', J$.F(8169, J$.I(typeof isNaN === 'undefined' ? isNaN = J$.R(8113, 'isNaN', undefined, true, true) : isNaN = J$.R(8113, 'isNaN', isNaN, true, true)), false)(J$.F(8161, J$.I(typeof parseInt === 'undefined' ? parseInt = J$.R(8121, 'parseInt', undefined, true, true) : parseInt = J$.R(8121, 'parseInt', parseInt, true, true)), false)(J$.M(8145, J$.R(8129, '$this', $this, false, false), 'attr', false)(J$.T(8137, 'width', 21, false)), J$.T(8153, 10, 22, false))))) ? J$.F(8217, J$.I(typeof parseInt === 'undefined' ? parseInt = J$.R(8177, 'parseInt', undefined, true, true) : parseInt = J$.R(8177, 'parseInt', parseInt, true, true)), false)(J$.M(8201, J$.R(8185, '$this', $this, false, false), 'attr', false)(J$.T(8193, 'width', 21, false)), J$.T(8209, 10, 22, false)) : J$.M(8233, J$.R(8225, '$this', $this, false, false), 'width', false)(), width, false, false), aspectRatio = J$.W(8273, 'aspectRatio', J$.B(490, '/', J$.R(8241, 'height', height, false, false), J$.R(8249, 'width', width, false, false)), aspectRatio, false, false);
                                                                            if (J$.C(432, J$.U(498, '!', J$.M(8297, J$.R(8281, '$this', $this, false, false), 'attr', false)(J$.T(8289, 'name', 21, false))))) {
                                                                                var videoName = J$.W(8345, 'videoName', J$.B(506, '+', J$.T(8305, 'fitvid', 21, false), J$.G(8337, J$.G(8329, J$.G(8321, J$.R(8313, '$', $, false, false), 'fn'), 'fitVids'), '_count')), videoName, false, false);
                                                                                J$.M(8377, J$.R(8353, '$this', $this, false, false), 'attr', false)(J$.T(8361, 'name', 21, false), J$.R(8369, 'videoName', videoName, false, false));
                                                                                J$.B(514, '-', J$.A(8409, J$.G(8401, J$.G(8393, J$.R(8385, '$', $, false, false), 'fn'), 'fitVids'), '_count', '+')(1), 1);
                                                                            }
                                                                            J$.M(8489, J$.M(8449, J$.M(8433, J$.R(8417, '$this', $this, false, false), 'wrap', false)(J$.T(8425, '<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>', 21, false)), 'parent', false)(J$.T(8441, '.fluid-width-video-wrapper', 21, false)), 'css', false)(J$.T(8457, 'padding-top', 21, false), J$.B(530, '+', J$.B(522, '*', J$.R(8465, 'aspectRatio', aspectRatio, false, false), J$.T(8473, 100, 22, false)), J$.T(8481, '%', 21, false)));
                                                                            J$.M(8529, J$.M(8513, J$.R(8497, '$this', $this, false, false), 'removeAttr', false)(J$.T(8505, 'height', 21, false)), 'removeAttr', false)(J$.T(8521, 'width', 21, false));
                                                                        } catch (J$e) {
                                                                            J$.Ex(8865, J$e);
                                                                        } finally {
                                                                            if (J$.Fr(8873))
                                                                                continue jalangiLabel0;
                                                                            else
                                                                                return J$.Ra();
                                                                        }
                                                                    }
                                                            }, 12, false));
                                                        } catch (J$e) {
                                                            J$.Ex(8881, J$e);
                                                        } finally {
                                                            if (J$.Fr(8889))
                                                                continue jalangiLabel1;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false)));
                                        } catch (J$e) {
                                            J$.Ex(8897, J$e);
                                        } finally {
                                            if (J$.Fr(8905))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            J$.P(8777, J$.G(8761, J$.G(8753, J$.R(8745, '$', $, false, false), 'fn'), 'fitVids'), '_count', J$.T(8769, 0, 22, false));
                        } catch (J$e) {
                            J$.Ex(8913, J$e);
                        } finally {
                            if (J$.Fr(8921))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), false)(J$.C(440, J$.G(8825, J$.I(typeof window === 'undefined' ? window = J$.R(8817, 'window', undefined, true, true) : window = J$.R(8817, 'window', window, true, true)), 'jQuery')) ? J$._() : J$.G(8841, J$.I(typeof window === 'undefined' ? window = J$.R(8833, 'window', undefined, true, true) : window = J$.R(8833, 'window', window, true, true)), 'Zepto'));
        } catch (J$e) {
            J$.Ex(8929, J$e);
        } finally {
            if (J$.Sr(8937))
                continue jalangiLabel4;
            else
                break jalangiLabel4;
        }
    }
// JALANGI DO NOT INSTRUMENT


