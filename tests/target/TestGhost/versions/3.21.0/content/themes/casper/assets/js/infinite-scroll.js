J$.noInstrEval = false;
J$.noInstrEval = false;
jalangiLabel7:
    while (true) {
        try {
            J$.Se(6769, '/home/hipar/HiPar/outputs/target_cache/TestGhost/content/themes/casper/assets/js/infinite-scroll.js');
            J$.F(6761, J$.T(6737, function (window, document) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(6561, arguments.callee, this, arguments);
                            function onPageLoad() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(5969, arguments.callee, this, arguments);
                                            arguments = J$.N(5977, 'arguments', arguments, true, false, false);
                                            J$.N(5985, 'postElements', postElements, false, false, false);
                                            J$.N(5993, 'resNextElement', resNextElement, false, false, false);
                                            if (J$.C(256, J$.B(362, '===', J$.G(5537, J$.R(5529, 'this', this, false, false), 'status'), J$.T(5545, 404, 22, false)))) {
                                                J$.M(5577, J$.R(5553, 'window', window, false, false), 'removeEventListener', false)(J$.T(5561, 'scroll', 21, false), J$.R(5569, 'onScroll', onScroll, false, false));
                                                J$.M(5609, J$.R(5585, 'window', window, false, false), 'removeEventListener', false)(J$.T(5593, 'resize', 21, false), J$.R(5601, 'onResize', onResize, false, false));
                                                return J$.Rt(5617, undefined);
                                            }
                                            var postElements = J$.W(5657, 'postElements', J$.M(5649, J$.G(5633, J$.R(5625, 'this', this, false, false), 'response'), 'querySelectorAll', false)(J$.T(5641, '.post-card', 21, false)), postElements, false, false);
                                            J$.M(5753, J$.R(5665, 'postElements', postElements, false, false), 'forEach', false)(J$.T(5745, function (item) {
                                                jalangiLabel0:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(5721, arguments.callee, this, arguments);
                                                            arguments = J$.N(5729, 'arguments', arguments, true, false, false);
                                                            item = J$.N(5737, 'item', item, true, false, false);
                                                            J$.M(5713, J$.R(5673, 'feedElement', feedElement, false, false), 'appendChild', false)(J$.M(5705, J$.R(5681, 'document', document, false, false), 'importNode', false)(J$.R(5689, 'item', item, false, false), J$.T(5697, true, 23, false)));
                                                        } catch (J$e) {
                                                            J$.Ex(6777, J$e);
                                                        } finally {
                                                            if (J$.Fr(6785))
                                                                continue jalangiLabel0;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false));
                                            var resNextElement = J$.W(5793, 'resNextElement', J$.M(5785, J$.G(5769, J$.R(5761, 'this', this, false, false), 'response'), 'querySelector', false)(J$.T(5777, 'link[rel=next]', 21, false)), resNextElement, false, false);
                                            if (J$.C(264, J$.R(5801, 'resNextElement', resNextElement, false, false))) {
                                                J$.P(5833, J$.R(5809, 'nextElement', nextElement, false, false), 'href', J$.G(5825, J$.R(5817, 'resNextElement', resNextElement, false, false), 'href'));
                                            } else {
                                                J$.M(5865, J$.R(5841, 'window', window, false, false), 'removeEventListener', false)(J$.T(5849, 'scroll', 21, false), J$.R(5857, 'onScroll', onScroll, false, false));
                                                J$.M(5897, J$.R(5873, 'window', window, false, false), 'removeEventListener', false)(J$.T(5881, 'resize', 21, false), J$.R(5889, 'onResize', onResize, false, false));
                                            }
                                            lastDocumentHeight = J$.W(5929, 'lastDocumentHeight', J$.G(5921, J$.G(5913, J$.R(5905, 'document', document, false, false), 'documentElement'), 'scrollHeight'), lastDocumentHeight, false, false);
                                            ticking = J$.W(5945, 'ticking', J$.T(5937, false, 23, false), ticking, false, false);
                                            loading = J$.W(5961, 'loading', J$.T(5953, false, 23, false), loading, false, false);
                                        } catch (J$e) {
                                            J$.Ex(6793, J$e);
                                        } finally {
                                            if (J$.Fr(6801))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function onUpdate() {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(6233, arguments.callee, this, arguments);
                                            arguments = J$.N(6241, 'arguments', arguments, true, false, false);
                                            J$.N(6249, 'xhr', xhr, false, false, false);
                                            if (J$.C(272, J$.R(6001, 'loading', loading, false, false))) {
                                                return J$.Rt(6009, undefined);
                                            }
                                            if (J$.C(280, J$.B(386, '<=', J$.B(370, '+', J$.R(6017, 'lastScrollY', lastScrollY, false, false), J$.R(6025, 'lastWindowHeight', lastWindowHeight, false, false)), J$.B(378, '-', J$.R(6033, 'lastDocumentHeight', lastDocumentHeight, false, false), J$.R(6041, 'buffer', buffer, false, false))))) {
                                                ticking = J$.W(6057, 'ticking', J$.T(6049, false, 23, false), ticking, false, false);
                                                return J$.Rt(6065, undefined);
                                            }
                                            loading = J$.W(6081, 'loading', J$.T(6073, true, 23, false), loading, false, false);
                                            var xhr = J$.W(6105, 'xhr', J$.M(6097, J$.R(6089, 'window', window, false, false), 'XMLHttpRequest', true)(), xhr, false, false);
                                            J$.P(6129, J$.R(6113, 'xhr', xhr, false, false), 'responseType', J$.T(6121, 'document', 21, false));
                                            J$.M(6161, J$.R(6137, 'xhr', xhr, false, false), 'addEventListener', false)(J$.T(6145, 'load', 21, false), J$.R(6153, 'onPageLoad', onPageLoad, false, false));
                                            J$.M(6201, J$.R(6169, 'xhr', xhr, false, false), 'open', false)(J$.T(6177, 'GET', 21, false), J$.G(6193, J$.R(6185, 'nextElement', nextElement, false, false), 'href'));
                                            J$.M(6225, J$.R(6209, 'xhr', xhr, false, false), 'send', false)(J$.T(6217, null, 25, false));
                                        } catch (J$e) {
                                            J$.Ex(6809, J$e);
                                        } finally {
                                            if (J$.Fr(6817))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function requestTick() {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(6305, arguments.callee, this, arguments);
                                            arguments = J$.N(6313, 'arguments', arguments, true, false, false);
                                            J$.C(288, J$.R(6257, 'ticking', ticking, false, false)) ? J$._() : J$.M(6281, J$.R(6265, 'window', window, false, false), 'requestAnimationFrame', false)(J$.R(6273, 'onUpdate', onUpdate, false, false));
                                            ticking = J$.W(6297, 'ticking', J$.T(6289, true, 23, false), ticking, false, false);
                                        } catch (J$e) {
                                            J$.Ex(6825, J$e);
                                        } finally {
                                            if (J$.Fr(6833))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function onScroll() {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(6361, arguments.callee, this, arguments);
                                            arguments = J$.N(6369, 'arguments', arguments, true, false, false);
                                            lastScrollY = J$.W(6337, 'lastScrollY', J$.G(6329, J$.R(6321, 'window', window, false, false), 'scrollY'), lastScrollY, false, false);
                                            J$.F(6353, J$.R(6345, 'requestTick', requestTick, false, false), false)();
                                        } catch (J$e) {
                                            J$.Ex(6841, J$e);
                                        } finally {
                                            if (J$.Fr(6849))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function onResize() {
                                jalangiLabel5:
                                    while (true) {
                                        try {
                                            J$.Fe(6449, arguments.callee, this, arguments);
                                            arguments = J$.N(6457, 'arguments', arguments, true, false, false);
                                            lastWindowHeight = J$.W(6393, 'lastWindowHeight', J$.G(6385, J$.R(6377, 'window', window, false, false), 'innerHeight'), lastWindowHeight, false, false);
                                            lastDocumentHeight = J$.W(6425, 'lastDocumentHeight', J$.G(6417, J$.G(6409, J$.R(6401, 'document', document, false, false), 'documentElement'), 'scrollHeight'), lastDocumentHeight, false, false);
                                            J$.F(6441, J$.R(6433, 'requestTick', requestTick, false, false), false)();
                                        } catch (J$e) {
                                            J$.Ex(6857, J$e);
                                        } finally {
                                            if (J$.Fr(6865))
                                                continue jalangiLabel5;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(6569, 'arguments', arguments, true, false, false);
                            window = J$.N(6577, 'window', window, true, false, false);
                            document = J$.N(6585, 'document', document, true, false, false);
                            J$.N(6593, 'nextElement', nextElement, false, false, false);
                            J$.N(6601, 'feedElement', feedElement, false, false, false);
                            J$.N(6609, 'buffer', buffer, false, false, false);
                            J$.N(6617, 'ticking', ticking, false, false, false);
                            J$.N(6625, 'loading', loading, false, false, false);
                            J$.N(6633, 'lastScrollY', lastScrollY, false, false, false);
                            J$.N(6641, 'lastWindowHeight', lastWindowHeight, false, false, false);
                            J$.N(6649, 'lastDocumentHeight', lastDocumentHeight, false, false, false);
                            onPageLoad = J$.N(6665, 'onPageLoad', J$.T(6657, onPageLoad, 12, false), true, false, false);
                            onUpdate = J$.N(6681, 'onUpdate', J$.T(6673, onUpdate, 12, false), true, false, false);
                            requestTick = J$.N(6697, 'requestTick', J$.T(6689, requestTick, 12, false), true, false, false);
                            onScroll = J$.N(6713, 'onScroll', J$.T(6705, onScroll, 12, false), true, false, false);
                            onResize = J$.N(6729, 'onResize', J$.T(6721, onResize, 12, false), true, false, false);
                            var nextElement = J$.W(5329, 'nextElement', J$.M(5321, J$.R(5305, 'document', document, false, false), 'querySelector', false)(J$.T(5313, 'link[rel=next]', 21, false)), nextElement, false, false);
                            if (J$.C(240, J$.U(346, '!', J$.R(5337, 'nextElement', nextElement, false, false)))) {
                                return J$.Rt(5345, undefined);
                            }
                            var feedElement = J$.W(5377, 'feedElement', J$.M(5369, J$.R(5353, 'document', document, false, false), 'querySelector', false)(J$.T(5361, '.post-feed', 21, false)), feedElement, false, false);
                            if (J$.C(248, J$.U(354, '!', J$.R(5385, 'feedElement', feedElement, false, false)))) {
                                return J$.Rt(5393, undefined);
                            }
                            var buffer = J$.W(5409, 'buffer', J$.T(5401, 300, 22, false), buffer, false, false);
                            var ticking = J$.W(5425, 'ticking', J$.T(5417, false, 23, false), ticking, false, false);
                            var loading = J$.W(5441, 'loading', J$.T(5433, false, 23, false), loading, false, false);
                            var lastScrollY = J$.W(5465, 'lastScrollY', J$.G(5457, J$.R(5449, 'window', window, false, false), 'scrollY'), lastScrollY, false, false);
                            var lastWindowHeight = J$.W(5489, 'lastWindowHeight', J$.G(5481, J$.R(5473, 'window', window, false, false), 'innerHeight'), lastWindowHeight, false, false);
                            var lastDocumentHeight = J$.W(5521, 'lastDocumentHeight', J$.G(5513, J$.G(5505, J$.R(5497, 'document', document, false, false), 'documentElement'), 'scrollHeight'), lastDocumentHeight, false, false);
                            J$.M(6505, J$.R(6465, 'window', window, false, false), 'addEventListener', false)(J$.T(6473, 'scroll', 21, false), J$.R(6481, 'onScroll', onScroll, false, false), J$.T(6497, { passive: J$.T(6489, true, 23, false) }, 11, false));
                            J$.M(6537, J$.R(6513, 'window', window, false, false), 'addEventListener', false)(J$.T(6521, 'resize', 21, false), J$.R(6529, 'onResize', onResize, false, false));
                            J$.F(6553, J$.R(6545, 'requestTick', requestTick, false, false), false)();
                        } catch (J$e) {
                            J$.Ex(6873, J$e);
                        } finally {
                            if (J$.Fr(6881))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), false)(J$.I(typeof window === 'undefined' ? window = J$.R(6745, 'window', undefined, true, true) : window = J$.R(6745, 'window', window, true, true)), J$.I(typeof document === 'undefined' ? document = J$.R(6753, 'document', undefined, true, true) : document = J$.R(6753, 'document', document, true, true)));
        } catch (J$e) {
            J$.Ex(6889, J$e);
        } finally {
            if (J$.Sr(6897))
                continue jalangiLabel7;
            else
                break jalangiLabel7;
        }
    }
// JALANGI DO NOT INSTRUMENT


