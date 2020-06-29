J$.noInstrEval = false;
jalangiLabel6:
    while (true) {
        try {
            J$.Se(943337, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/themes/handlebars/utils.js');
            function _urlClean(url) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(942177, arguments.callee, this, arguments);
                            arguments = J$.N(942185, 'arguments', arguments, true, false, false);
                            url = J$.N(942193, 'url', url, true, false, false);
                            return J$.Rt(942169, J$.M(942161, J$.M(942137, J$.R(942113, 'url', url, false, false), 'replace', false)(J$.T(942121, /#.*?$/, 14, false), J$.T(942129, '', 21, false)), 'replace', false)(J$.T(942145, /^\/|\/$/g, 14, false), J$.T(942153, '', 21, false)));
                        } catch (J$e) {
                            J$.Ex(943433, J$e);
                        } finally {
                            if (J$.Fr(943441))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function _urlMatch(href, location) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(942313, arguments.callee, this, arguments);
                            arguments = J$.N(942321, 'arguments', arguments, true, false, false);
                            href = J$.N(942329, 'href', href, true, false, false);
                            location = J$.N(942337, 'location', location, true, false, false);
                            J$.N(942345, 'strippedHref', strippedHref, false, false, false);
                            J$.N(942353, 'strippedLocation', strippedLocation, false, false, false);
                            if (J$.C(70024, J$.U(90234, '!', J$.R(942201, 'location', location, false, false)))) {
                                return J$.Rt(942217, J$.T(942209, false, 23, false));
                            }
                            const strippedHref = J$.W(942249, 'strippedHref', J$.F(942241, J$.R(942225, '_urlClean', _urlClean, false, true), false)(J$.R(942233, 'href', href, false, false)), strippedHref, false, false);
                            const strippedLocation = J$.W(942281, 'strippedLocation', J$.F(942273, J$.R(942257, '_urlClean', _urlClean, false, true), false)(J$.R(942265, 'location', location, false, false)), strippedLocation, false, false);
                            return J$.Rt(942305, J$.B(90242, '===', J$.R(942289, 'strippedHref', strippedHref, false, false), J$.R(942297, 'strippedLocation', strippedLocation, false, false)));
                        } catch (J$e) {
                            J$.Ex(943449, J$e);
                        } finally {
                            if (J$.Fr(943457))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function _urlParentMatch(href, location) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(942681, arguments.callee, this, arguments);
                            arguments = J$.N(942689, 'arguments', arguments, true, false, false);
                            href = J$.N(942697, 'href', href, true, false, false);
                            location = J$.N(942705, 'location', location, true, false, false);
                            J$.N(942713, 'parent', parent, false, false, false);
                            J$.N(942721, 'locParts', locParts, false, false, false);
                            J$.N(942729, 'hrefParts', hrefParts, false, false, false);
                            J$.N(942737, 'i', i, false, false, false);
                            if (J$.C(70032, J$.U(90250, '!', J$.R(942361, 'location', location, false, false)))) {
                                return J$.Rt(942377, J$.T(942369, false, 23, false));
                            }
                            let parent = J$.W(942393, 'parent', J$.T(942385, false, 23, false), parent, false, false);
                            let locParts = J$.W(942441, 'locParts', J$.M(942433, J$.F(942417, J$.R(942401, '_urlClean', _urlClean, false, true), false)(J$.R(942409, 'location', location, false, false)), 'split', false)(J$.T(942425, '/', 21, false)), locParts, false, false);
                            let hrefParts = J$.W(942489, 'hrefParts', J$.M(942481, J$.F(942465, J$.R(942449, '_urlClean', _urlClean, false, true), false)(J$.R(942457, 'href', href, false, false)), 'split', false)(J$.T(942473, '/', 21, false)), hrefParts, false, false);
                            if (J$.C(70040, J$.B(90258, '<=', J$.G(942505, J$.R(942497, 'locParts', locParts, false, false), 'length'), J$.G(942521, J$.R(942513, 'hrefParts', hrefParts, false, false), 'length')))) {
                                return J$.Rt(942537, J$.T(942529, false, 23, false));
                            }
                            for (let i = J$.W(942553, 'i', J$.T(942545, 0, 22, false), i, false, false); J$.C(70048, J$.B(90266, '<', J$.R(942561, 'i', i, false, false), J$.G(942577, J$.R(942569, 'hrefParts', hrefParts, false, false), 'length'))); i = J$.W(942601, 'i', J$.B(90274, '+', J$.R(942593, 'i', i, false, false), J$.T(942585, 1, 22, false)), i, false, false)) {
                                parent = J$.W(942657, 'parent', J$.B(90282, '===', J$.G(942625, J$.R(942609, 'hrefParts', hrefParts, false, false), J$.R(942617, 'i', i, false, false)), J$.G(942649, J$.R(942633, 'locParts', locParts, false, false), J$.R(942641, 'i', i, false, false))), parent, false, false);
                            }
                            return J$.Rt(942673, J$.R(942665, 'parent', parent, false, false));
                        } catch (J$e) {
                            J$.Ex(943465, J$e);
                        } finally {
                            if (J$.Fr(943473))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(943345, '_', _, false, false, false);
            _urlClean = J$.N(943361, '_urlClean', J$.T(943353, _urlClean, 12, false), true, false, false);
            _urlMatch = J$.N(943377, '_urlMatch', J$.T(943369, _urlMatch, 12, false), true, false, false);
            _urlParentMatch = J$.N(943393, '_urlParentMatch', J$.T(943385, _urlParentMatch, 12, false), true, false, false);
            const _ = J$.W(941777, '_', J$.F(941769, J$.I(typeof require === 'undefined' ? require = J$.R(941753, 'require', undefined, true, true) : require = J$.R(941753, 'require', require, true, true)), false)(J$.T(941761, 'lodash', 21, false)), _, false, true);
            J$.P(942105, J$.G(941793, J$.I(typeof module === 'undefined' ? module = J$.R(941785, 'module', undefined, true, true) : module = J$.R(941785, 'module', module, true, true)), 'exports'), 'findKey', J$.T(942097, function findKey(key) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(942065, arguments.callee, this, arguments);
                            arguments = J$.N(942073, 'arguments', arguments, true, false, false);
                            key = J$.N(942081, 'key', key, true, false, false);
                            J$.N(942089, 'objects', objects, false, false, false);
                            let objects = J$.W(941849, 'objects', J$.M(941841, J$.G(941817, J$.G(941809, J$.I(typeof Array === 'undefined' ? Array = J$.R(941801, 'Array', undefined, true, true) : Array = J$.R(941801, 'Array', Array, true, true)), 'prototype'), 'slice'), 'call', false)(J$.I(typeof arguments === 'undefined' ? arguments = J$.R(941825, 'arguments', undefined, true, true) : arguments = J$.R(941825, 'arguments', arguments, true, true)), J$.T(941833, 1, 22, false)), objects, false, false);
                            return J$.Rt(942057, J$.M(942049, J$.R(941857, '_', _, false, true), 'reduceRight', false)(J$.R(941865, 'objects', objects, false, false), J$.T(942033, function (result, object) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(942001, arguments.callee, this, arguments);
                                            arguments = J$.N(942009, 'arguments', arguments, true, false, false);
                                            result = J$.N(942017, 'result', result, true, false, false);
                                            object = J$.N(942025, 'object', object, true, false, false);
                                            if (J$.C(70016, J$.C(70008, J$.C(70000, J$.R(941873, 'object', object, false, false)) ? J$.M(941905, J$.R(941881, '_', _, false, true), 'has', false)(J$.R(941889, 'object', object, false, false), J$.R(941897, 'key', key, false, false)) : J$._()) ? J$.U(90226, '!', J$.M(941945, J$.R(941913, '_', _, false, true), 'isEmpty', false)(J$.G(941937, J$.R(941921, 'object', object, false, false), J$.R(941929, 'key', key, false, false)))) : J$._())) {
                                                result = J$.W(941977, 'result', J$.G(941969, J$.R(941953, 'object', object, false, false), J$.R(941961, 'key', key, false, false)), result, false, false);
                                            }
                                            return J$.Rt(941993, J$.R(941985, 'result', result, false, false));
                                        } catch (J$e) {
                                            J$.Ex(943401, J$e);
                                        } finally {
                                            if (J$.Fr(943409))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false), J$.T(942041, null, 25, false)));
                        } catch (J$e) {
                            J$.Ex(943417, J$e);
                        } finally {
                            if (J$.Fr(943425))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            J$.P(943329, J$.G(942753, J$.I(typeof module === 'undefined' ? module = J$.R(942745, 'module', undefined, true, true) : module = J$.R(942745, 'module', module, true, true)), 'exports'), 'buildLinkClasses', J$.T(943321, function buildLinkClasses(siteUrl, href, options) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(943241, arguments.callee, this, arguments);
                            arguments = J$.N(943249, 'arguments', arguments, true, false, false);
                            siteUrl = J$.N(943257, 'siteUrl', siteUrl, true, false, false);
                            href = J$.N(943265, 'href', href, true, false, false);
                            options = J$.N(943273, 'options', options, true, false, false);
                            J$.N(943281, 'relativeHref', relativeHref, false, false, false);
                            J$.N(943289, 'location', location, false, false, false);
                            J$.N(943297, 'classes', classes, false, false, false);
                            J$.N(943305, 'activeClass', activeClass, false, false, false);
                            J$.N(943313, 'parentActiveClass', parentActiveClass, false, false, false);
                            let relativeHref = J$.W(942793, 'relativeHref', J$.M(942785, J$.R(942761, 'href', href, false, false), 'replace', false)(J$.R(942769, 'siteUrl', siteUrl, false, false), J$.T(942777, '', 21, false)), relativeHref, false, false);
                            let location = J$.W(942833, 'location', J$.G(942825, J$.G(942817, J$.G(942809, J$.R(942801, 'options', options, false, false), 'data'), 'root'), 'relativeUrl'), location, false, false);
                            let classes = J$.W(942921, 'classes', J$.C(70056, J$.G(942857, J$.G(942849, J$.R(942841, 'options', options, false, false), 'hash'), 'class')) ? J$.M(942905, J$.M(942889, J$.G(942881, J$.G(942873, J$.R(942865, 'options', options, false, false), 'hash'), 'class'), 'toString', false)(), 'split', false)(J$.T(942897, ' ', 21, false)) : J$.T(942913, [], 10, false), classes, false, false);
                            let activeClass = J$.W(943001, 'activeClass', J$.C(70064, J$.M(942961, J$.R(942929, '_', _, false, true), 'has', false)(J$.G(942945, J$.R(942937, 'options', options, false, false), 'hash'), J$.T(942953, 'activeClass', 21, false))) ? J$.G(942985, J$.G(942977, J$.R(942969, 'options', options, false, false), 'hash'), 'activeClass') : J$.T(942993, 'nav-current', 21, false), activeClass, false, false);
                            let parentActiveClass = J$.W(943089, 'parentActiveClass', J$.C(70080, J$.M(943041, J$.R(943009, '_', _, false, true), 'has', false)(J$.G(943025, J$.R(943017, 'options', options, false, false), 'hash'), J$.T(943033, 'parentActiveClass', 21, false))) ? J$.G(943065, J$.G(943057, J$.R(943049, 'options', options, false, false), 'hash'), 'parentActiveClass') : `${ J$.C(70072, J$.R(943073, 'activeClass', activeClass, false, false)) ? J$._() : J$.T(943081, 'nav-current', 21, false) }-parent`, parentActiveClass, false, false);
                            if (J$.C(70112, J$.C(70088, J$.F(943121, J$.R(943097, '_urlMatch', _urlMatch, false, true), false)(J$.R(943105, 'relativeHref', relativeHref, false, false), J$.R(943113, 'location', location, false, false))) ? J$.R(943129, 'activeClass', activeClass, false, false) : J$._())) {
                                J$.M(943153, J$.R(943137, 'classes', classes, false, false), 'push', false)(J$.R(943145, 'activeClass', activeClass, false, false));
                            } else if (J$.C(70104, J$.C(70096, J$.F(943185, J$.R(943161, '_urlParentMatch', _urlParentMatch, false, true), false)(J$.R(943169, 'relativeHref', relativeHref, false, false), J$.R(943177, 'location', location, false, false))) ? J$.R(943193, 'parentActiveClass', parentActiveClass, false, false) : J$._())) {
                                J$.M(943217, J$.R(943201, 'classes', classes, false, false), 'push', false)(J$.R(943209, 'parentActiveClass', parentActiveClass, false, false));
                            }
                            return J$.Rt(943233, J$.R(943225, 'classes', classes, false, false));
                        } catch (J$e) {
                            J$.Ex(943481, J$e);
                        } finally {
                            if (J$.Fr(943489))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(943497, J$e);
        } finally {
            if (J$.Sr(943505))
                continue jalangiLabel6;
            else
                break jalangiLabel6;
        }
    }
// JALANGI DO NOT INSTRUMENT

