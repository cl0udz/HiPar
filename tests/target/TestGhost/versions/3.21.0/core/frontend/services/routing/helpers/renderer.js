J$.noInstrEval = false;
jalangiLabel1:
    while (true) {
        try {
            J$.Se(928737, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/helpers/renderer.js');
            J$.N(928745, 'debug', debug, false, false, false);
            J$.N(928753, 'setContext', setContext, false, false, false);
            J$.N(928761, 'templates', templates, false, false, false);
            const debug = J$.W(928241, 'debug', J$.M(928233, J$.F(928217, J$.I(typeof require === 'undefined' ? require = J$.R(928201, 'require', undefined, true, true) : require = J$.R(928201, 'require', require, true, true)), false)(J$.T(928209, 'ghost-ignition', 21, false)), 'debug', false)(J$.T(928225, 'services:routing:helpers:renderer', 21, false)), debug, false, true);
            const setContext = J$.W(928273, 'setContext', J$.F(928265, J$.I(typeof require === 'undefined' ? require = J$.R(928249, 'require', undefined, true, true) : require = J$.R(928249, 'require', require, true, true)), false)(J$.T(928257, './context', 21, false)), setContext, false, true);
            const templates = J$.W(928305, 'templates', J$.F(928297, J$.I(typeof require === 'undefined' ? require = J$.R(928281, 'require', undefined, true, true) : require = J$.R(928281, 'require', require, true, true)), false)(J$.T(928289, './templates', 21, false)), templates, false, true);
            J$.P(928729, J$.I(typeof module === 'undefined' ? module = J$.R(928313, 'module', undefined, true, true) : module = J$.R(928313, 'module', module, true, true)), 'exports', J$.T(928721, function renderer(req, res, data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(928681, arguments.callee, this, arguments);
                            arguments = J$.N(928689, 'arguments', arguments, true, false, false);
                            req = J$.N(928697, 'req', req, true, false, false);
                            res = J$.N(928705, 'res', res, true, false, false);
                            data = J$.N(928713, 'data', data, true, false, false);
                            J$.F(928353, J$.R(928321, 'setContext', setContext, false, true), false)(J$.R(928329, 'req', req, false, false), J$.R(928337, 'res', res, false, false), J$.R(928345, 'data', data, false, false));
                            J$.M(928393, J$.R(928361, 'templates', templates, false, true), 'setTemplate', false)(J$.R(928369, 'req', req, false, false), J$.R(928377, 'res', res, false, false), J$.R(928385, 'data', data, false, false));
                            J$.F(928457, J$.R(928401, 'debug', debug, false, true), false)(J$.B(89850, '+', J$.B(89842, '+', J$.B(89834, '+', J$.T(928409, 'Rendering template: ', 21, false), J$.G(928425, J$.R(928417, 'res', res, false, false), '_template')), J$.T(928433, ' for: ', 21, false)), J$.G(928449, J$.R(928441, 'req', req, false, false), 'originalUrl')));
                            J$.F(928497, J$.R(928465, 'debug', debug, false, true), false)(J$.T(928473, 'res.locals', 21, false), J$.G(928489, J$.R(928481, 'res', res, false, false), 'locals'));
                            if (J$.C(69616, J$.C(69600, J$.G(928513, J$.R(928505, 'res', res, false, false), 'routerOptions')) ? J$.G(928537, J$.G(928529, J$.R(928521, 'res', res, false, false), 'routerOptions'), 'contentType') : J$._())) {
                                if (J$.C(69608, J$.B(89866, '!==', J$.M(928585, J$.G(928561, J$.G(928553, J$.R(928545, 'res', res, false, false), 'routerOptions'), 'templates'), 'indexOf', false)(J$.G(928577, J$.R(928569, 'res', res, false, false), '_template')), J$.U(89858, '-', J$.T(928593, 1, 22, false))))) {
                                    J$.M(928633, J$.R(928601, 'res', res, false, false), 'type', false)(J$.G(928625, J$.G(928617, J$.R(928609, 'res', res, false, false), 'routerOptions'), 'contentType'));
                                }
                            }
                            J$.M(928673, J$.R(928641, 'res', res, false, false), 'render', false)(J$.G(928657, J$.R(928649, 'res', res, false, false), '_template'), J$.R(928665, 'data', data, false, false));
                        } catch (J$e) {
                            J$.Ex(928769, J$e);
                        } finally {
                            if (J$.Fr(928777))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
        } catch (J$e) {
            J$.Ex(928785, J$e);
        } finally {
            if (J$.Sr(928793))
                continue jalangiLabel1;
            else
                break jalangiLabel1;
        }
    }
// JALANGI DO NOT INSTRUMENT

