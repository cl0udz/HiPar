J$.noInstrEval = false;
jalangiLabel0:
    while (true) {
        try {
            J$.Se(914665, '/home/hipar/HiPar/outputs/target_cache/TestGhost/current/core/frontend/services/routing/config/v3.js');
            J$.P(914561, J$.G(914321, J$.I(typeof module === 'undefined' ? module = J$.R(914313, 'module', undefined, true, true) : module = J$.R(914313, 'module', module, true, true)), 'exports'), 'QUERY', J$.T(914553, {
                tag: J$.T(914377, {
                    controller: J$.T(914329, 'tagsPublic', 21, false),
                    type: J$.T(914337, 'read', 21, false),
                    resource: J$.T(914345, 'tags', 21, false),
                    options: J$.T(914369, {
                        slug: J$.T(914353, '%s', 21, false),
                        visibility: J$.T(914361, 'public', 21, false)
                    }, 11, false)
                }, 11, false),
                author: J$.T(914425, {
                    controller: J$.T(914385, 'authorsPublic', 21, false),
                    type: J$.T(914393, 'read', 21, false),
                    resource: J$.T(914401, 'authors', 21, false),
                    options: J$.T(914417, { slug: J$.T(914409, '%s', 21, false) }, 11, false)
                }, 11, false),
                post: J$.T(914473, {
                    controller: J$.T(914433, 'postsPublic', 21, false),
                    type: J$.T(914441, 'read', 21, false),
                    resource: J$.T(914449, 'posts', 21, false),
                    options: J$.T(914465, { slug: J$.T(914457, '%s', 21, false) }, 11, false)
                }, 11, false),
                page: J$.T(914521, {
                    controller: J$.T(914481, 'pagesPublic', 21, false),
                    type: J$.T(914489, 'read', 21, false),
                    resource: J$.T(914497, 'pages', 21, false),
                    options: J$.T(914513, { slug: J$.T(914505, '%s', 21, false) }, 11, false)
                }, 11, false),
                preview: J$.T(914545, {
                    controller: J$.T(914529, 'preview', 21, false),
                    resource: J$.T(914537, 'preview', 21, false)
                }, 11, false)
            }, 11, false));
            J$.P(914657, J$.G(914577, J$.I(typeof module === 'undefined' ? module = J$.R(914569, 'module', undefined, true, true) : module = J$.R(914569, 'module', module, true, true)), 'exports'), 'TAXONOMIES', J$.T(914649, {
                tag: J$.T(914609, {
                    filter: J$.T(914585, 'tags:\'%s\'+tags.visibility:public', 21, false),
                    editRedirect: J$.T(914593, '#/tags/:slug/', 21, false),
                    resource: J$.T(914601, 'tags', 21, false)
                }, 11, false),
                author: J$.T(914641, {
                    filter: J$.T(914617, 'authors:\'%s\'', 21, false),
                    editRedirect: J$.T(914625, '#/team/:slug/', 21, false),
                    resource: J$.T(914633, 'authors', 21, false)
                }, 11, false)
            }, 11, false));
        } catch (J$e) {
            J$.Ex(914673, J$e);
        } finally {
            if (J$.Sr(914681))
                continue jalangiLabel0;
            else
                break jalangiLabel0;
        }
    }
// JALANGI DO NOT INSTRUMENT

