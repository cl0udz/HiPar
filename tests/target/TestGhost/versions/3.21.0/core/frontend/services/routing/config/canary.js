J$.noInstrEval = false;
jalangiLabel0:
    while (true) {
        try {
            J$.Se(913913, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/config/canary.js');
            J$.P(913809, J$.G(913569, J$.I(typeof module === 'undefined' ? module = J$.R(913561, 'module', undefined, true, true) : module = J$.R(913561, 'module', module, true, true)), 'exports'), 'QUERY', J$.T(913801, {
                tag: J$.T(913625, {
                    controller: J$.T(913577, 'tagsPublic', 21, false),
                    type: J$.T(913585, 'read', 21, false),
                    resource: J$.T(913593, 'tags', 21, false),
                    options: J$.T(913617, {
                        slug: J$.T(913601, '%s', 21, false),
                        visibility: J$.T(913609, 'public', 21, false)
                    }, 11, false)
                }, 11, false),
                author: J$.T(913673, {
                    controller: J$.T(913633, 'authorsPublic', 21, false),
                    type: J$.T(913641, 'read', 21, false),
                    resource: J$.T(913649, 'authors', 21, false),
                    options: J$.T(913665, { slug: J$.T(913657, '%s', 21, false) }, 11, false)
                }, 11, false),
                post: J$.T(913721, {
                    controller: J$.T(913681, 'postsPublic', 21, false),
                    type: J$.T(913689, 'read', 21, false),
                    resource: J$.T(913697, 'posts', 21, false),
                    options: J$.T(913713, { slug: J$.T(913705, '%s', 21, false) }, 11, false)
                }, 11, false),
                page: J$.T(913769, {
                    controller: J$.T(913729, 'pagesPublic', 21, false),
                    type: J$.T(913737, 'read', 21, false),
                    resource: J$.T(913745, 'pages', 21, false),
                    options: J$.T(913761, { slug: J$.T(913753, '%s', 21, false) }, 11, false)
                }, 11, false),
                preview: J$.T(913793, {
                    controller: J$.T(913777, 'preview', 21, false),
                    resource: J$.T(913785, 'preview', 21, false)
                }, 11, false)
            }, 11, false));
            J$.P(913905, J$.G(913825, J$.I(typeof module === 'undefined' ? module = J$.R(913817, 'module', undefined, true, true) : module = J$.R(913817, 'module', module, true, true)), 'exports'), 'TAXONOMIES', J$.T(913897, {
                tag: J$.T(913857, {
                    filter: J$.T(913833, 'tags:\'%s\'+tags.visibility:public', 21, false),
                    editRedirect: J$.T(913841, '#/tags/:slug/', 21, false),
                    resource: J$.T(913849, 'tags', 21, false)
                }, 11, false),
                author: J$.T(913889, {
                    filter: J$.T(913865, 'authors:\'%s\'', 21, false),
                    editRedirect: J$.T(913873, '#/team/:slug/', 21, false),
                    resource: J$.T(913881, 'authors', 21, false)
                }, 11, false)
            }, 11, false));
        } catch (J$e) {
            J$.Ex(913921, J$e);
        } finally {
            if (J$.Sr(913929))
                continue jalangiLabel0;
            else
                break jalangiLabel0;
        }
    }
// JALANGI DO NOT INSTRUMENT

