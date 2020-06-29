J$.noInstrEval = false;
J$.noInstrEval = false;
jalangiLabel5:
    while (true) {
        try {
            J$.Se(9721, '/home/hipar/HiPar/outputs/target_cache/TestGhost/content/themes/casper/assets/js/sticky-nav-title.js');
            J$.F(9713, J$.T(9689, function (window, document) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(9657, arguments.callee, this, arguments);
                            arguments = J$.N(9665, 'arguments', arguments, true, false, false);
                            window = J$.N(9673, 'window', window, true, false, false);
                            document = J$.N(9681, 'document', document, true, false, false);
                            if (J$.C(448, J$.U(538, '!', J$.G(8953, J$.R(8945, 'window', window, false, false), 'Casper')))) {
                                J$.P(8977, J$.R(8961, 'window', window, false, false), 'Casper', J$.T(8969, {}, 11, false));
                            }
                            J$.P(9649, J$.G(8993, J$.R(8985, 'window', window, false, false), 'Casper'), 'stickyNavTitle', J$.T(9641, function stickyNavTitle(options) {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(9537, arguments.callee, this, arguments);
                                            function onScroll() {
                                                jalangiLabel0:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(9161, arguments.callee, this, arguments);
                                                            arguments = J$.N(9169, 'arguments', arguments, true, false, false);
                                                            lastScrollY = J$.W(9137, 'lastScrollY', J$.G(9129, J$.R(9121, 'window', window, false, false), 'scrollY'), lastScrollY, false, false);
                                                            J$.F(9153, J$.R(9145, 'requestTick', requestTick, false, false), false)();
                                                        } catch (J$e) {
                                                            J$.Ex(9729, J$e);
                                                        } finally {
                                                            if (J$.Fr(9737))
                                                                continue jalangiLabel0;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }
                                            function requestTick() {
                                                jalangiLabel1:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(9225, arguments.callee, this, arguments);
                                                            arguments = J$.N(9233, 'arguments', arguments, true, false, false);
                                                            if (J$.C(456, J$.U(546, '!', J$.R(9177, 'ticking', ticking, false, false)))) {
                                                                J$.F(9201, J$.I(typeof requestAnimationFrame === 'undefined' ? requestAnimationFrame = J$.R(9185, 'requestAnimationFrame', undefined, true, true) : requestAnimationFrame = J$.R(9185, 'requestAnimationFrame', requestAnimationFrame, true, true)), false)(J$.R(9193, 'update', update, false, false));
                                                            }
                                                            ticking = J$.W(9217, 'ticking', J$.T(9209, true, 23, false), ticking, false, false);
                                                        } catch (J$e) {
                                                            J$.Ex(9745, J$e);
                                                        } finally {
                                                            if (J$.Fr(9753))
                                                                continue jalangiLabel1;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }
                                            function update() {
                                                jalangiLabel2:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(9441, arguments.callee, this, arguments);
                                                            arguments = J$.N(9449, 'arguments', arguments, true, false, false);
                                                            J$.N(9457, 'trigger', trigger, false, false, false);
                                                            J$.N(9465, 'triggerOffset', triggerOffset, false, false, false);
                                                            var trigger = J$.W(9281, 'trigger', J$.B(554, '+', J$.G(9257, J$.M(9249, J$.R(9241, 'title', title, false, false), 'getBoundingClientRect', false)(), 'top'), J$.G(9273, J$.R(9265, 'window', window, false, false), 'scrollY')), trigger, false, false);
                                                            var triggerOffset = J$.W(9313, 'triggerOffset', J$.B(562, '+', J$.G(9297, J$.R(9289, 'title', title, false, false), 'offsetHeight'), J$.T(9305, 35, 22, false)), triggerOffset, false, false);
                                                            if (J$.C(464, J$.B(578, '>=', J$.R(9321, 'lastScrollY', lastScrollY, false, false), J$.B(570, '+', J$.R(9329, 'trigger', trigger, false, false), J$.R(9337, 'triggerOffset', triggerOffset, false, false))))) {
                                                                J$.M(9377, J$.G(9353, J$.R(9345, 'nav', nav, false, false), 'classList'), 'add', false)(J$.G(9369, J$.R(9361, 'options', options, false, false), 'activeClass'));
                                                            } else {
                                                                J$.M(9417, J$.G(9393, J$.R(9385, 'nav', nav, false, false), 'classList'), 'remove', false)(J$.G(9409, J$.R(9401, 'options', options, false, false), 'activeClass'));
                                                            }
                                                            ticking = J$.W(9433, 'ticking', J$.T(9425, false, 23, false), ticking, false, false);
                                                        } catch (J$e) {
                                                            J$.Ex(9761, J$e);
                                                        } finally {
                                                            if (J$.Fr(9769))
                                                                continue jalangiLabel2;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }
                                            arguments = J$.N(9545, 'arguments', arguments, true, false, false);
                                            options = J$.N(9553, 'options', options, true, false, false);
                                            J$.N(9561, 'nav', nav, false, false, false);
                                            J$.N(9569, 'title', title, false, false, false);
                                            J$.N(9577, 'lastScrollY', lastScrollY, false, false, false);
                                            J$.N(9585, 'ticking', ticking, false, false, false);
                                            onScroll = J$.N(9601, 'onScroll', J$.T(9593, onScroll, 12, false), true, false, false);
                                            requestTick = J$.N(9617, 'requestTick', J$.T(9609, requestTick, 12, false), true, false, false);
                                            update = J$.N(9633, 'update', J$.T(9625, update, 12, false), true, false, false);
                                            var nav = J$.W(9033, 'nav', J$.M(9025, J$.R(9001, 'document', document, false, false), 'querySelector', false)(J$.G(9017, J$.R(9009, 'options', options, false, false), 'navSelector')), nav, false, false);
                                            var title = J$.W(9073, 'title', J$.M(9065, J$.R(9041, 'document', document, false, false), 'querySelector', false)(J$.G(9057, J$.R(9049, 'options', options, false, false), 'titleSelector')), title, false, false);
                                            var lastScrollY = J$.W(9097, 'lastScrollY', J$.G(9089, J$.R(9081, 'window', window, false, false), 'scrollY'), lastScrollY, false, false);
                                            var ticking = J$.W(9113, 'ticking', J$.T(9105, false, 23, false), ticking, false, false);
                                            J$.M(9513, J$.R(9473, 'window', window, false, false), 'addEventListener', false)(J$.T(9481, 'scroll', 21, false), J$.R(9489, 'onScroll', onScroll, false, false), J$.T(9505, { passive: J$.T(9497, true, 23, false) }, 11, false));
                                            J$.F(9529, J$.R(9521, 'update', update, false, false), false)();
                                        } catch (J$e) {
                                            J$.Ex(9777, J$e);
                                        } finally {
                                            if (J$.Fr(9785))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(9793, J$e);
                        } finally {
                            if (J$.Fr(9801))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), false)(J$.I(typeof window === 'undefined' ? window = J$.R(9697, 'window', undefined, true, true) : window = J$.R(9697, 'window', window, true, true)), J$.I(typeof document === 'undefined' ? document = J$.R(9705, 'document', undefined, true, true) : document = J$.R(9705, 'document', document, true, true)));
        } catch (J$e) {
            J$.Ex(9809, J$e);
        } finally {
            if (J$.Sr(9817))
                continue jalangiLabel5;
            else
                break jalangiLabel5;
        }
    }
// JALANGI DO NOT INSTRUMENT


