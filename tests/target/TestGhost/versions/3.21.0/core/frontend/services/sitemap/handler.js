J$.noInstrEval = false;
jalangiLabel4:
    while (true) {
        try {
            J$.Se(936481, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/sitemap/handler.js');
            J$.N(936489, 'config', config, false, false, false);
            J$.N(936497, 'Manager', Manager, false, false, false);
            J$.N(936505, 'manager', manager, false, false, false);
            const config = J$.W(935785, 'config', J$.F(935777, J$.I(typeof require === 'undefined' ? require = J$.R(935761, 'require', undefined, true, true) : require = J$.R(935761, 'require', require, true, true)), false)(J$.T(935769, '../../../shared/config', 21, false)), config, false, true);
            const Manager = J$.W(935817, 'Manager', J$.F(935809, J$.I(typeof require === 'undefined' ? require = J$.R(935793, 'require', undefined, true, true) : require = J$.R(935793, 'require', require, true, true)), false)(J$.T(935801, './manager', 21, false)), Manager, false, true);
            const manager = J$.W(935841, 'manager', J$.F(935833, J$.R(935825, 'Manager', Manager, false, true), true)(), manager, false, true);
            J$.P(936473, J$.I(typeof module === 'undefined' ? module = J$.R(935849, 'module', undefined, true, true) : module = J$.R(935849, 'module', module, true, true)), 'exports', J$.T(936465, function handler(siteApp) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(936433, arguments.callee, this, arguments);
                            arguments = J$.N(936441, 'arguments', arguments, true, false, false);
                            siteApp = J$.N(936449, 'siteApp', siteApp, true, false, false);
                            J$.N(936457, 'verifyResourceType', verifyResourceType, false, false, false);
                            const verifyResourceType = J$.W(936017, 'verifyResourceType', J$.T(936009, function verifyResourceType(req, res, next) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(935969, arguments.callee, this, arguments);
                                            arguments = J$.N(935977, 'arguments', arguments, true, false, false);
                                            req = J$.N(935985, 'req', req, true, false, false);
                                            res = J$.N(935993, 'res', res, true, false, false);
                                            next = J$.N(936001, 'next', next, true, false, false);
                                            if (J$.C(69888, J$.U(90122, '!', J$.M(935913, J$.G(935873, J$.G(935865, J$.I(typeof Object === 'undefined' ? Object = J$.R(935857, 'Object', undefined, true, true) : Object = J$.R(935857, 'Object', Object, true, true)), 'prototype'), 'hasOwnProperty'), 'call', false)(J$.R(935881, 'manager', manager, false, true), J$.G(935905, J$.G(935897, J$.R(935889, 'req', req, false, false), 'params'), 'resource'))))) {
                                                return J$.Rt(935945, J$.M(935937, J$.R(935921, 'res', res, false, false), 'sendStatus', false)(J$.T(935929, 404, 22, false)));
                                            }
                                            J$.F(935961, J$.R(935953, 'next', next, false, false), false)();
                                        } catch (J$e) {
                                            J$.Ex(936513, J$e);
                                        } finally {
                                            if (J$.Fr(936521))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false), verifyResourceType, false, false);
                            J$.M(936177, J$.R(936025, 'siteApp', siteApp, false, false), 'get', false)(J$.T(936033, '/sitemap.xml', 21, false), J$.T(936169, function sitemapXML(req, res) {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(936137, arguments.callee, this, arguments);
                                            arguments = J$.N(936145, 'arguments', arguments, true, false, false);
                                            req = J$.N(936153, 'req', req, true, false, false);
                                            res = J$.N(936161, 'res', res, true, false, false);
                                            J$.M(936097, J$.R(936041, 'res', res, false, false), 'set', false)(J$.T(936089, {
                                                'Cache-Control': J$.B(90130, '+', J$.T(936049, 'public, max-age=', 21, false), J$.M(936073, J$.R(936057, 'config', config, false, true), 'get', false)(J$.T(936065, 'caching:sitemap:maxAge', 21, false))),
                                                'Content-Type': J$.T(936081, 'text/xml', 21, false)
                                            }, 11, false));
                                            J$.M(936129, J$.R(936105, 'res', res, false, false), 'send', false)(J$.M(936121, J$.R(936113, 'manager', manager, false, true), 'getIndexXml', false)());
                                        } catch (J$e) {
                                            J$.Ex(936529, J$e);
                                        } finally {
                                            if (J$.Fr(936537))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                            J$.M(936425, J$.R(936185, 'siteApp', siteApp, false, false), 'get', false)(J$.T(936193, '/sitemap-:resource.xml', 21, false), J$.R(936201, 'verifyResourceType', verifyResourceType, false, false), J$.T(936417, function sitemapResourceXML(req, res) {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(936369, arguments.callee, this, arguments);
                                            arguments = J$.N(936377, 'arguments', arguments, true, false, false);
                                            req = J$.N(936385, 'req', req, true, false, false);
                                            res = J$.N(936393, 'res', res, true, false, false);
                                            J$.N(936401, 'type', type, false, false, false);
                                            J$.N(936409, 'page', page, false, false, false);
                                            const type = J$.W(936233, 'type', J$.G(936225, J$.G(936217, J$.R(936209, 'req', req, false, false), 'params'), 'resource'), type, false, false);
                                            const page = J$.W(936249, 'page', J$.T(936241, 1, 22, false), page, false, false);
                                            J$.M(936313, J$.R(936257, 'res', res, false, false), 'set', false)(J$.T(936305, {
                                                'Cache-Control': J$.B(90138, '+', J$.T(936265, 'public, max-age=', 21, false), J$.M(936289, J$.R(936273, 'config', config, false, true), 'get', false)(J$.T(936281, 'caching:sitemap:maxAge', 21, false))),
                                                'Content-Type': J$.T(936297, 'text/xml', 21, false)
                                            }, 11, false));
                                            J$.M(936361, J$.R(936321, 'res', res, false, false), 'send', false)(J$.M(936353, J$.R(936329, 'manager', manager, false, true), 'getSiteMapXml', false)(J$.R(936337, 'type', type, false, false), J$.R(936345, 'page', page, false, false)));
                                        } catch (J$e) {
                                            J$.Ex(936545, J$e);
                                        } finally {
                                            if (J$.Fr(936553))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(936561, J$e);
                        } finally {
                            if (J$.Fr(936569))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(936577, J$e);
        } finally {
            if (J$.Sr(936585))
                continue jalangiLabel4;
            else
                break jalangiLabel4;
        }
    }
// JALANGI DO NOT INSTRUMENT

