J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(882729, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/apps/amp/lib/helpers/amp_components.js');
            function ampComponents() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(882657, arguments.callee, this, arguments);
                            arguments = J$.N(882665, 'arguments', arguments, true, false, false);
                            J$.N(882673, 'components', components, false, false, false);
                            J$.N(882681, 'html', html, false, false, false);
                            J$.N(882689, 'iframeCount', iframeCount, false, false, false);
                            J$.N(882697, 'youtubeCount', youtubeCount, false, false, false);
                            let components = J$.W(882241, 'components', J$.T(882233, [], 10, false), components, false, false);
                            let html = J$.W(882305, 'html', J$.C(66680, J$.C(66672, J$.G(882257, J$.R(882249, 'this', this, false, false), 'post')) ? J$.G(882281, J$.G(882273, J$.R(882265, 'this', this, false, false), 'post'), 'html') : J$._()) ? J$._() : J$.G(882297, J$.R(882289, 'this', this, false, false), 'html'), html, false, false);
                            if (J$.C(66688, J$.U(89026, '!', J$.R(882313, 'html', html, false, false)))) {
                                return J$.Rt(882321, undefined);
                            }
                            if (J$.C(66696, J$.B(89042, '!==', J$.M(882345, J$.R(882329, 'html', html, false, false), 'indexOf', false)(J$.T(882337, '.gif', 21, false)), J$.U(89034, '-', J$.T(882353, 1, 22, false))))) {
                                J$.M(882377, J$.R(882361, 'components', components, false, false), 'push', false)(J$.T(882369, '<script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>', 21, false));
                            }
                            let iframeCount = J$.W(882425, 'iframeCount', J$.G(882417, J$.C(66704, J$.M(882401, J$.R(882385, 'html', html, false, false), 'match', false)(J$.T(882393, /(<iframe)(.*?\s*?)(<\/iframe>)/gi, 14, false))) ? J$._() : J$.T(882409, [], 10, false), 'length'), iframeCount, false, false);
                            let youtubeCount = J$.W(882473, 'youtubeCount', J$.G(882465, J$.C(66712, J$.M(882449, J$.R(882433, 'html', html, false, false), 'match', false)(J$.T(882441, /(<iframe)(.*?\s*?)(youtu.be\/|youtube(-nocookie)?.com\/(v\/|.*u\/\w\/|embed\/|.*v=))(.*?\s*?)(<\/iframe>)/gi, 14, false))) ? J$._() : J$.T(882457, [], 10, false), 'length'), youtubeCount, false, false);
                            if (J$.C(66720, J$.R(882481, 'youtubeCount', youtubeCount, false, false))) {
                                J$.M(882505, J$.R(882489, 'components', components, false, false), 'push', false)(J$.T(882497, '<script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>', 21, false));
                            }
                            if (J$.C(66728, J$.B(89050, '>', J$.R(882513, 'iframeCount', iframeCount, false, false), J$.R(882521, 'youtubeCount', youtubeCount, false, false)))) {
                                J$.M(882545, J$.R(882529, 'components', components, false, false), 'push', false)(J$.T(882537, '<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>', 21, false));
                            }
                            if (J$.C(66736, J$.B(89066, '!==', J$.M(882569, J$.R(882553, 'html', html, false, false), 'indexOf', false)(J$.T(882561, '<audio', 21, false)), J$.U(89058, '-', J$.T(882577, 1, 22, false))))) {
                                J$.M(882601, J$.R(882585, 'components', components, false, false), 'push', false)(J$.T(882593, '<script async custom-element="amp-audio" src="https://cdn.ampproject.org/v0/amp-audio-0.1.js"></script>', 21, false));
                            }
                            return J$.Rt(882649, J$.F(882641, J$.R(882609, 'SafeString', SafeString, false, true), true)(J$.M(882633, J$.R(882617, 'components', components, false, false), 'join', false)(J$.T(882625, '\n', 21, false))));
                        } catch (J$e) {
                            J$.Ex(882769, J$e);
                        } finally {
                            if (J$.Fr(882777))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(882737, 'proxy', proxy, false, false, false);
            J$.N(882745, 'SafeString', SafeString, false, false, false);
            ampComponents = J$.N(882761, 'ampComponents', J$.T(882753, ampComponents, 12, false), true, false, false);
            const proxy = J$.W(882201, 'proxy', J$.F(882193, J$.I(typeof require === 'undefined' ? require = J$.R(882177, 'require', undefined, true, true) : require = J$.R(882177, 'require', require, true, true)), false)(J$.T(882185, '../../../../services/proxy', 21, false)), proxy, false, true);
            const SafeString = J$.W(882225, 'SafeString', J$.G(882217, J$.R(882209, 'proxy', proxy, false, true), 'SafeString'), SafeString, false, true);
            J$.P(882721, J$.I(typeof module === 'undefined' ? module = J$.R(882705, 'module', undefined, true, true) : module = J$.R(882705, 'module', module, true, true)), 'exports', J$.R(882713, 'ampComponents', ampComponents, false, true));
        } catch (J$e) {
            J$.Ex(882785, J$e);
        } finally {
            if (J$.Sr(882793))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

