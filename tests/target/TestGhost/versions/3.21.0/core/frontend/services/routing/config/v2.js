J$.noInstrEval = false;
jalangiLabel0:
    while (true) {
        try {
            J$.Se(914289, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/config/v2.js');
            J$.P(914185, J$.G(913945, J$.I(typeof module === 'undefined' ? module = J$.R(913937, 'module', undefined, true, true) : module = J$.R(913937, 'module', module, true, true)), 'exports'), 'QUERY', J$.T(914177, {
                tag: J$.T(914001, {
                    controller: J$.T(913953, 'tagsPublic', 21, false),
                    type: J$.T(913961, 'read', 21, false),
                    resource: J$.T(913969, 'tags', 21, false),
                    options: J$.T(913993, {
                        slug: J$.T(913977, '%s', 21, false),
                        visibility: J$.T(913985, 'public', 21, false)
                    }, 11, false)
                }, 11, false),
                author: J$.T(914049, {
                    controller: J$.T(914009, 'authorsPublic', 21, false),
                    type: J$.T(914017, 'read', 21, false),
                    resource: J$.T(914025, 'authors', 21, false),
                    options: J$.T(914041, { slug: J$.T(914033, '%s', 21, false) }, 11, false)
                }, 11, false),
                post: J$.T(914097, {
                    controller: J$.T(914057, 'postsPublic', 21, false),
                    type: J$.T(914065, 'read', 21, false),
                    resource: J$.T(914073, 'posts', 21, false),
                    options: J$.T(914089, { slug: J$.T(914081, '%s', 21, false) }, 11, false)
                }, 11, false),
                page: J$.T(914145, {
                    controller: J$.T(914105, 'pagesPublic', 21, false),
                    type: J$.T(914113, 'read', 21, false),
                    resource: J$.T(914121, 'pages', 21, false),
                    options: J$.T(914137, { slug: J$.T(914129, '%s', 21, false) }, 11, false)
                }, 11, false),
                preview: J$.T(914169, {
                    controller: J$.T(914153, 'preview', 21, false),
                    resource: J$.T(914161, 'preview', 21, false)
                }, 11, false)
            }, 11, false));
            J$.P(914281, J$.G(914201, J$.I(typeof module === 'undefined' ? module = J$.R(914193, 'module', undefined, true, true) : module = J$.R(914193, 'module', module, true, true)), 'exports'), 'TAXONOMIES', J$.T(914273, {
                tag: J$.T(914233, {
                    filter: J$.T(914209, 'tags:\'%s\'+tags.visibility:public', 21, false),
                    editRedirect: J$.T(914217, '#/tags/:slug/', 21, false),
                    resource: J$.T(914225, 'tags', 21, false)
                }, 11, false),
                author: J$.T(914265, {
                    filter: J$.T(914241, 'authors:\'%s\'', 21, false),
                    editRedirect: J$.T(914249, '#/team/:slug/', 21, false),
                    resource: J$.T(914257, 'authors', 21, false)
                }, 11, false)
            }, 11, false));
        } catch (J$e) {
            J$.Ex(914297, J$e);
        } finally {
            if (J$.Sr(914305))
                continue jalangiLabel0;
            else
                break jalangiLabel0;
        }
    }
// JALANGI DO NOT INSTRUMENT

