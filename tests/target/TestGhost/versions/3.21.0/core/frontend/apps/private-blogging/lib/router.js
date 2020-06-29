J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(889913, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/apps/private-blogging/lib/router.js');
            function _renderer(req, res) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(889641, arguments.callee, this, arguments);
                            arguments = J$.N(889649, 'arguments', arguments, true, false, false);
                            req = J$.N(889657, 'req', req, true, false, false);
                            res = J$.N(889665, 'res', res, true, false, false);
                            J$.N(889673, 'data', data, false, false, false);
                            J$.P(889513, J$.R(889441, 'res', res, false, false), 'routerOptions', J$.T(889505, {
                                type: J$.T(889449, 'custom', 21, false),
                                templates: J$.R(889457, 'templateName', templateName, false, true),
                                defaultTemplate: J$.M(889497, J$.R(889465, 'path', path, false, true), 'resolve', false)(J$.I(typeof __dirname === 'undefined' ? __dirname = J$.R(889473, '__dirname', undefined, true, true) : __dirname = J$.R(889473, '__dirname', __dirname, true, true)), J$.T(889481, 'views', 21, false), `${ J$.R(889489, 'templateName', templateName, false, true) }.hbs`)
                            }, 11, false));
                            let data = J$.W(889529, 'data', J$.T(889521, {}, 11, false), data, false, false);
                            if (J$.C(66832, J$.G(889545, J$.R(889537, 'res', res, false, false), 'error'))) {
                                J$.P(889577, J$.R(889553, 'data', data, false, false), 'error', J$.G(889569, J$.R(889561, 'res', res, false, false), 'error'));
                            }
                            return J$.Rt(889633, J$.M(889625, J$.G(889593, J$.R(889585, 'routing', routing, false, true), 'helpers'), 'renderer', false)(J$.R(889601, 'req', req, false, false), J$.R(889609, 'res', res, false, false), J$.R(889617, 'data', data, false, false)));
                        } catch (J$e) {
                            J$.Ex(890001, J$e);
                        } finally {
                            if (J$.Fr(890009))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(889921, 'path', path, false, false, false);
            J$.N(889929, 'express', express, false, false, false);
            J$.N(889937, 'middleware', middleware, false, false, false);
            J$.N(889945, 'bodyParser', bodyParser, false, false, false);
            J$.N(889953, 'routing', routing, false, false, false);
            J$.N(889961, 'web', web, false, false, false);
            J$.N(889969, 'templateName', templateName, false, false, false);
            J$.N(889977, 'privateRouter', privateRouter, false, false, false);
            _renderer = J$.N(889993, '_renderer', J$.T(889985, _renderer, 12, false), true, false, false);
            const path = J$.W(889225, 'path', J$.F(889217, J$.I(typeof require === 'undefined' ? require = J$.R(889201, 'require', undefined, true, true) : require = J$.R(889201, 'require', require, true, true)), false)(J$.T(889209, 'path', 21, false)), path, false, true);
            const express = J$.W(889257, 'express', J$.F(889249, J$.I(typeof require === 'undefined' ? require = J$.R(889233, 'require', undefined, true, true) : require = J$.R(889233, 'require', require, true, true)), false)(J$.T(889241, '../../../../shared/express', 21, false)), express, false, true);
            const middleware = J$.W(889289, 'middleware', J$.F(889281, J$.I(typeof require === 'undefined' ? require = J$.R(889265, 'require', undefined, true, true) : require = J$.R(889265, 'require', require, true, true)), false)(J$.T(889273, './middleware', 21, false)), middleware, false, true);
            const bodyParser = J$.W(889321, 'bodyParser', J$.F(889313, J$.I(typeof require === 'undefined' ? require = J$.R(889297, 'require', undefined, true, true) : require = J$.R(889297, 'require', require, true, true)), false)(J$.T(889305, 'body-parser', 21, false)), bodyParser, false, true);
            const routing = J$.W(889353, 'routing', J$.F(889345, J$.I(typeof require === 'undefined' ? require = J$.R(889329, 'require', undefined, true, true) : require = J$.R(889329, 'require', require, true, true)), false)(J$.T(889337, '../../../services/routing', 21, false)), routing, false, true);
            const web = J$.W(889385, 'web', J$.F(889377, J$.I(typeof require === 'undefined' ? require = J$.R(889361, 'require', undefined, true, true) : require = J$.R(889361, 'require', require, true, true)), false)(J$.T(889369, '../../../../server/web', 21, false)), web, false, true);
            const templateName = J$.W(889401, 'templateName', J$.T(889393, 'private', 21, false), templateName, false, true);
            const privateRouter = J$.W(889433, 'privateRouter', J$.M(889425, J$.R(889409, 'express', express, false, true), 'Router', false)(J$.R(889417, 'templateName', templateName, false, true)), privateRouter, false, true);
            J$.M(889849, J$.M(889729, J$.M(889697, J$.R(889681, 'privateRouter', privateRouter, false, true), 'route', false)(J$.T(889689, '/', 21, false)), 'get', false)(J$.G(889713, J$.R(889705, 'middleware', middleware, false, true), 'redirectPrivateToHomeIfLoggedIn'), J$.R(889721, '_renderer', _renderer, false, true)), 'post', false)(J$.M(889761, J$.R(889737, 'bodyParser', bodyParser, false, true), 'urlencoded', false)(J$.T(889753, { extended: J$.T(889745, true, 23, false) }, 11, false)), J$.G(889777, J$.R(889769, 'middleware', middleware, false, true), 'redirectPrivateToHomeIfLoggedIn'), J$.G(889817, J$.G(889809, J$.G(889801, J$.G(889793, J$.R(889785, 'web', web, false, true), 'shared'), 'middlewares'), 'brute'), 'privateBlog'), J$.G(889833, J$.R(889825, 'middleware', middleware, false, true), 'doLoginToPrivateSite'), J$.R(889841, '_renderer', _renderer, false, true));
            J$.P(889873, J$.I(typeof module === 'undefined' ? module = J$.R(889857, 'module', undefined, true, true) : module = J$.R(889857, 'module', module, true, true)), 'exports', J$.R(889865, 'privateRouter', privateRouter, false, true));
            J$.P(889905, J$.G(889889, J$.I(typeof module === 'undefined' ? module = J$.R(889881, 'module', undefined, true, true) : module = J$.R(889881, 'module', module, true, true)), 'exports'), 'renderer', J$.R(889897, '_renderer', _renderer, false, true));
        } catch (J$e) {
            J$.Ex(890017, J$e);
        } finally {
            if (J$.Sr(890025))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

