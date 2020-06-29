J$.noInstrEval = false;
J$.noInstrEval = false;
jalangiLabel3:
    while (true) {
        try {
            J$.Se(5233, '/home/hipar/HiPar/outputs/target_cache/TestGhost/content/themes/casper/assets/js/gallery-card.js');
            J$.F(5225, J$.T(5201, function (window, document) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(5161, arguments.callee, this, arguments);
                            arguments = J$.N(5169, 'arguments', arguments, true, false, false);
                            window = J$.N(5177, 'window', window, true, false, false);
                            document = J$.N(5185, 'document', document, true, false, false);
                            J$.N(5193, 'resizeImagesInGalleries', resizeImagesInGalleries, false, false, false);
                            var resizeImagesInGalleries = J$.W(5121, 'resizeImagesInGalleries', J$.T(5113, function resizeImagesInGalleries() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(5089, arguments.callee, this, arguments);
                                            arguments = J$.N(5097, 'arguments', arguments, true, false, false);
                                            J$.N(5105, 'images', images, false, false, false);
                                            var images = J$.W(4825, 'images', J$.M(4817, J$.R(4801, 'document', document, false, false), 'querySelectorAll', false)(J$.T(4809, '.kg-gallery-image img', 21, false)), images, false, false);
                                            J$.M(5081, J$.R(4833, 'images', images, false, false), 'forEach', false)(J$.T(5073, function (image) {
                                                jalangiLabel0:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(5017, arguments.callee, this, arguments);
                                                            arguments = J$.N(5025, 'arguments', arguments, true, false, false);
                                                            image = J$.N(5033, 'image', image, true, false, false);
                                                            J$.N(5041, 'container', container, false, false, false);
                                                            J$.N(5049, 'width', width, false, false, false);
                                                            J$.N(5057, 'height', height, false, false, false);
                                                            J$.N(5065, 'ratio', ratio, false, false, false);
                                                            var container = J$.W(4865, 'container', J$.M(4857, J$.R(4841, 'image', image, false, false), 'closest', false)(J$.T(4849, '.kg-gallery-image', 21, false)), container, false, false);
                                                            var width = J$.W(4905, 'width', J$.G(4897, J$.G(4889, J$.G(4881, J$.R(4873, 'image', image, false, false), 'attributes'), 'width'), 'value'), width, false, false);
                                                            var height = J$.W(4945, 'height', J$.G(4937, J$.G(4929, J$.G(4921, J$.R(4913, 'image', image, false, false), 'attributes'), 'height'), 'value'), height, false, false);
                                                            var ratio = J$.W(4969, 'ratio', J$.B(330, '/', J$.R(4953, 'width', width, false, false), J$.R(4961, 'height', height, false, false)), ratio, false, false);
                                                            J$.P(5009, J$.G(4985, J$.R(4977, 'container', container, false, false), 'style'), 'flex', J$.B(338, '+', J$.R(4993, 'ratio', ratio, false, false), J$.T(5001, ' 1 0%', 21, false)));
                                                        } catch (J$e) {
                                                            J$.Ex(5241, J$e);
                                                        } finally {
                                                            if (J$.Fr(5249))
                                                                continue jalangiLabel0;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false));
                                        } catch (J$e) {
                                            J$.Ex(5257, J$e);
                                        } finally {
                                            if (J$.Fr(5265))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false), resizeImagesInGalleries, false, false);
                            J$.M(5153, J$.R(5129, 'document', document, false, false), 'addEventListener', false)(J$.T(5137, 'DOMContentLoaded', 21, false), J$.R(5145, 'resizeImagesInGalleries', resizeImagesInGalleries, false, false));
                        } catch (J$e) {
                            J$.Ex(5273, J$e);
                        } finally {
                            if (J$.Fr(5281))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), false)(J$.I(typeof window === 'undefined' ? window = J$.R(5209, 'window', undefined, true, true) : window = J$.R(5209, 'window', window, true, true)), J$.I(typeof document === 'undefined' ? document = J$.R(5217, 'document', undefined, true, true) : document = J$.R(5217, 'document', document, true, true)));
        } catch (J$e) {
            J$.Ex(5289, J$e);
        } finally {
            if (J$.Sr(5297))
                continue jalangiLabel3;
            else
                break jalangiLabel3;
        }
    }
// JALANGI DO NOT INSTRUMENT


