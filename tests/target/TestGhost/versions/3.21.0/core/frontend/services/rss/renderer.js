J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(934793, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/rss/renderer.js');
            J$.N(934801, '_', _, false, false, false);
            J$.N(934809, 'rssCache', rssCache, false, false, false);
            const _ = J$.W(934481, '_', J$.F(934473, J$.I(typeof require === 'undefined' ? require = J$.R(934457, 'require', undefined, true, true) : require = J$.R(934457, 'require', require, true, true)), false)(J$.T(934465, 'lodash', 21, false)), _, false, true);
            const rssCache = J$.W(934513, 'rssCache', J$.F(934505, J$.I(typeof require === 'undefined' ? require = J$.R(934489, 'require', undefined, true, true) : require = J$.R(934489, 'require', require, true, true)), false)(J$.T(934497, './cache', 21, false)), rssCache, false, true);
            J$.P(934785, J$.G(934529, J$.I(typeof module === 'undefined' ? module = J$.R(934521, 'module', undefined, true, true) : module = J$.R(934521, 'module', module, true, true)), 'exports'), 'render', J$.T(934777, function render(res, baseUrl, data) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(934729, arguments.callee, this, arguments);
                            arguments = J$.N(934737, 'arguments', arguments, true, false, false);
                            res = J$.N(934745, 'res', res, true, false, false);
                            baseUrl = J$.N(934753, 'baseUrl', baseUrl, true, false, false);
                            data = J$.N(934761, 'data', data, true, false, false);
                            J$.N(934769, 'rssData', rssData, false, false, false);
                            const rssData = J$.W(934585, 'rssData', J$.M(934577, J$.R(934537, '_', _, false, true), 'merge', false)(J$.T(934545, {}, 11, false), J$.G(934561, J$.R(934553, 'res', res, false, false), 'locals'), J$.R(934569, 'data', data, false, false)), rssData, false, false);
                            return J$.Rt(934721, J$.M(934713, J$.M(934617, J$.R(934593, 'rssCache', rssCache, false, true), 'getXML', false)(J$.R(934601, 'baseUrl', baseUrl, false, false), J$.R(934609, 'rssData', rssData, false, false)), 'then', false)(J$.T(934705, function then(feedXml) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(934681, arguments.callee, this, arguments);
                                            arguments = J$.N(934689, 'arguments', arguments, true, false, false);
                                            feedXml = J$.N(934697, 'feedXml', feedXml, true, false, false);
                                            J$.M(934649, J$.R(934625, 'res', res, false, false), 'set', false)(J$.T(934633, 'Content-Type', 21, false), J$.T(934641, 'text/xml; charset=UTF-8', 21, false));
                                            J$.M(934673, J$.R(934657, 'res', res, false, false), 'send', false)(J$.R(934665, 'feedXml', feedXml, false, false));
                                        } catch (J$e) {
                                            J$.Ex(934817, J$e);
                                        } finally {
                                            if (J$.Fr(934825))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false)));
                        } catch (J$e) {
                            J$.Ex(934833, J$e);
                        } finally {
                            if (J$.Fr(934841))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(934849, J$e);
        } finally {
            if (J$.Sr(934857))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

