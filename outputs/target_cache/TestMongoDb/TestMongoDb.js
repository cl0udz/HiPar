J$.noInstrEval = false;
jalangiLabel25:
    while (true) {
        try {
            J$.Se(6033321, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestMongoDb/TestMongoDb.js');
            function test(query) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(6031553, arguments.callee, this, arguments);
                            arguments = J$.N(6031561, 'arguments', arguments, true, false, false);
                            query = J$.N(6031569, 'query', query, true, false, false);
                            J$.M(6031545, J$.R(6031273, 'MongoClient', MongoClient, false, true), 'connect', false)(J$.R(6031281, 'url', url, false, true), J$.T(6031537, function (err, client) {
                                jalangiLabel7:
                                    while (true) {
                                        try {
                                            J$.Fe(6031497, arguments.callee, this, arguments);
                                            arguments = J$.N(6031505, 'arguments', arguments, true, false, false);
                                            err = J$.N(6031513, 'err', err, true, false, false);
                                            client = J$.N(6031521, 'client', client, true, false, false);
                                            J$.N(6031529, 'db', db, false, false, false);
                                            J$.M(6031313, J$.R(6031289, 'assert', assert, false, true), 'equal', false)(J$.T(6031297, null, 25, false), J$.R(6031305, 'err', err, false, false));
                                            J$.M(6031337, J$.I(typeof console === 'undefined' ? console = J$.R(6031321, 'console', undefined, true, true) : console = J$.R(6031321, 'console', console, true, true)), 'log', false)(J$.T(6031329, 'Connected successfully to server', 21, false));
                                            const db = J$.W(6031369, 'db', J$.M(6031361, J$.R(6031345, 'client', client, false, false), 'db', false)(J$.R(6031353, 'dbName', dbName, false, true)), db, false, false);
                                            J$.F(6031489, J$.R(6031377, 'insertManyDocuments', insertManyDocuments, false, true), false)(J$.R(6031385, 'db', db, false, false), J$.T(6031481, function () {
                                                jalangiLabel6:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(6031465, arguments.callee, this, arguments);
                                                            arguments = J$.N(6031473, 'arguments', arguments, true, false, false);
                                                            J$.F(6031457, J$.R(6031393, 'findOneDocuments', findOneDocuments, false, true), false)(J$.R(6031401, 'db', db, false, false), J$.R(6031409, 'query', query, false, false), J$.T(6031449, function () {
                                                                jalangiLabel5:
                                                                    while (true) {
                                                                        try {
                                                                            J$.Fe(6031433, arguments.callee, this, arguments);
                                                                            arguments = J$.N(6031441, 'arguments', arguments, true, false, false);
                                                                            J$.M(6031425, J$.R(6031417, 'client', client, false, false), 'close', false)();
                                                                        } catch (J$e) {
                                                                            J$.Ex(6033577, J$e);
                                                                        } finally {
                                                                            if (J$.Fr(6033585))
                                                                                continue jalangiLabel5;
                                                                            else
                                                                                return J$.Ra();
                                                                        }
                                                                    }
                                                            }, 12, false));
                                                        } catch (J$e) {
                                                            J$.Ex(6033593, J$e);
                                                        } finally {
                                                            if (J$.Fr(6033601))
                                                                continue jalangiLabel6;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false));
                                        } catch (J$e) {
                                            J$.Ex(6033609, J$e);
                                        } finally {
                                            if (J$.Fr(6033617))
                                                continue jalangiLabel7;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6033625, J$e);
                        } finally {
                            if (J$.Fr(6033633))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function testUpdate(query) {
                jalangiLabel13:
                    while (true) {
                        try {
                            J$.Fe(6032121, arguments.callee, this, arguments);
                            arguments = J$.N(6032129, 'arguments', arguments, true, false, false);
                            query = J$.N(6032137, 'query', query, true, false, false);
                            J$.M(6032113, J$.R(6031889, 'MongoClient', MongoClient, false, true), 'connect', false)(J$.R(6031897, 'url', url, false, true), J$.T(6032105, function (err, client) {
                                jalangiLabel12:
                                    while (true) {
                                        try {
                                            J$.Fe(6032065, arguments.callee, this, arguments);
                                            arguments = J$.N(6032073, 'arguments', arguments, true, false, false);
                                            err = J$.N(6032081, 'err', err, true, false, false);
                                            client = J$.N(6032089, 'client', client, true, false, false);
                                            J$.N(6032097, 'db', db, false, false, false);
                                            J$.M(6031929, J$.R(6031905, 'assert', assert, false, true), 'equal', false)(J$.T(6031913, null, 25, false), J$.R(6031921, 'err', err, false, false));
                                            J$.M(6031953, J$.I(typeof console === 'undefined' ? console = J$.R(6031937, 'console', undefined, true, true) : console = J$.R(6031937, 'console', console, true, true)), 'log', false)(J$.T(6031945, 'Connected successfully to server', 21, false));
                                            const db = J$.W(6031985, 'db', J$.M(6031977, J$.R(6031961, 'client', client, false, false), 'db', false)(J$.R(6031969, 'dbName', dbName, false, true)), db, false, false);
                                            J$.F(6032057, J$.R(6031993, 'updateDocument', updateDocument, false, true), false)(J$.R(6032001, 'db', db, false, false), J$.R(6032009, 'query', query, false, false), J$.T(6032049, function () {
                                                jalangiLabel11:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(6032033, arguments.callee, this, arguments);
                                                            arguments = J$.N(6032041, 'arguments', arguments, true, false, false);
                                                            J$.M(6032025, J$.R(6032017, 'client', client, false, false), 'close', false)();
                                                        } catch (J$e) {
                                                            J$.Ex(6033673, J$e);
                                                        } finally {
                                                            if (J$.Fr(6033681))
                                                                continue jalangiLabel11;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false));
                                        } catch (J$e) {
                                            J$.Ex(6033689, J$e);
                                        } finally {
                                            if (J$.Fr(6033697))
                                                continue jalangiLabel12;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6033705, J$e);
                        } finally {
                            if (J$.Fr(6033713))
                                continue jalangiLabel13;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function testRemove(query) {
                jalangiLabel18:
                    while (true) {
                        try {
                            J$.Fe(6032665, arguments.callee, this, arguments);
                            arguments = J$.N(6032673, 'arguments', arguments, true, false, false);
                            query = J$.N(6032681, 'query', query, true, false, false);
                            J$.M(6032657, J$.R(6032433, 'MongoClient', MongoClient, false, true), 'connect', false)(J$.R(6032441, 'url', url, false, true), J$.T(6032649, function (err, client) {
                                jalangiLabel17:
                                    while (true) {
                                        try {
                                            J$.Fe(6032609, arguments.callee, this, arguments);
                                            arguments = J$.N(6032617, 'arguments', arguments, true, false, false);
                                            err = J$.N(6032625, 'err', err, true, false, false);
                                            client = J$.N(6032633, 'client', client, true, false, false);
                                            J$.N(6032641, 'db', db, false, false, false);
                                            J$.M(6032473, J$.R(6032449, 'assert', assert, false, true), 'equal', false)(J$.T(6032457, null, 25, false), J$.R(6032465, 'err', err, false, false));
                                            J$.M(6032497, J$.I(typeof console === 'undefined' ? console = J$.R(6032481, 'console', undefined, true, true) : console = J$.R(6032481, 'console', console, true, true)), 'log', false)(J$.T(6032489, 'Connected successfully to server', 21, false));
                                            const db = J$.W(6032529, 'db', J$.M(6032521, J$.R(6032505, 'client', client, false, false), 'db', false)(J$.R(6032513, 'dbName', dbName, false, true)), db, false, false);
                                            J$.F(6032601, J$.R(6032537, 'removeDocument', removeDocument, false, true), false)(J$.R(6032545, 'db', db, false, false), J$.R(6032553, 'query', query, false, false), J$.T(6032593, function () {
                                                jalangiLabel16:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(6032577, arguments.callee, this, arguments);
                                                            arguments = J$.N(6032585, 'arguments', arguments, true, false, false);
                                                            J$.M(6032569, J$.R(6032561, 'client', client, false, false), 'close', false)();
                                                        } catch (J$e) {
                                                            J$.Ex(6033753, J$e);
                                                        } finally {
                                                            if (J$.Fr(6033761))
                                                                continue jalangiLabel16;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false));
                                        } catch (J$e) {
                                            J$.Ex(6033769, J$e);
                                        } finally {
                                            if (J$.Fr(6033777))
                                                continue jalangiLabel17;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6033785, J$e);
                        } finally {
                            if (J$.Fr(6033793))
                                continue jalangiLabel18;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function testIndex(query) {
                jalangiLabel23:
                    while (true) {
                        try {
                            J$.Fe(6033105, arguments.callee, this, arguments);
                            arguments = J$.N(6033113, 'arguments', arguments, true, false, false);
                            query = J$.N(6033121, 'query', query, true, false, false);
                            J$.M(6033097, J$.R(6032873, 'MongoClient', MongoClient, false, true), 'connect', false)(J$.R(6032881, 'url', url, false, true), J$.T(6033089, function (err, client) {
                                jalangiLabel22:
                                    while (true) {
                                        try {
                                            J$.Fe(6033049, arguments.callee, this, arguments);
                                            arguments = J$.N(6033057, 'arguments', arguments, true, false, false);
                                            err = J$.N(6033065, 'err', err, true, false, false);
                                            client = J$.N(6033073, 'client', client, true, false, false);
                                            J$.N(6033081, 'db', db, false, false, false);
                                            J$.M(6032913, J$.R(6032889, 'assert', assert, false, true), 'equal', false)(J$.T(6032897, null, 25, false), J$.R(6032905, 'err', err, false, false));
                                            J$.M(6032937, J$.I(typeof console === 'undefined' ? console = J$.R(6032921, 'console', undefined, true, true) : console = J$.R(6032921, 'console', console, true, true)), 'log', false)(J$.T(6032929, 'Connected successfully to server', 21, false));
                                            const db = J$.W(6032969, 'db', J$.M(6032961, J$.R(6032945, 'client', client, false, false), 'db', false)(J$.R(6032953, 'dbName', dbName, false, true)), db, false, false);
                                            J$.F(6033041, J$.R(6032977, 'indexCollection', indexCollection, false, true), false)(J$.R(6032985, 'db', db, false, false), J$.R(6032993, 'query', query, false, false), J$.T(6033033, function () {
                                                jalangiLabel21:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(6033017, arguments.callee, this, arguments);
                                                            arguments = J$.N(6033025, 'arguments', arguments, true, false, false);
                                                            J$.M(6033009, J$.R(6033001, 'client', client, false, false), 'close', false)();
                                                        } catch (J$e) {
                                                            J$.Ex(6033833, J$e);
                                                        } finally {
                                                            if (J$.Fr(6033841))
                                                                continue jalangiLabel21;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false));
                                        } catch (J$e) {
                                            J$.Ex(6033849, J$e);
                                        } finally {
                                            if (J$.Fr(6033857))
                                                continue jalangiLabel22;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6033865, J$e);
                        } finally {
                            if (J$.Fr(6033873))
                                continue jalangiLabel23;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function main() {
                jalangiLabel24:
                    while (true) {
                        try {
                            J$.Fe(6033289, arguments.callee, this, arguments);
                            arguments = J$.N(6033297, 'arguments', arguments, true, false, false);
                            J$.M(6033161, J$.R(6033129, 'utils', utils, false, true), 'entry', false)(J$.R(6033137, 'test', test, false, true), J$.T(6033153, { 'a': J$.T(6033145, 3, 22, false) }, 11, false));
                            J$.M(6033201, J$.R(6033169, 'utils', utils, false, true), 'entry', false)(J$.R(6033177, 'testUpdate', testUpdate, false, true), J$.T(6033193, { 'b': J$.T(6033185, 2, 22, false) }, 11, false));
                            J$.M(6033241, J$.R(6033209, 'utils', utils, false, true), 'entry', false)(J$.R(6033217, 'testRemove', testRemove, false, true), J$.T(6033233, { 'a': J$.T(6033225, 1, 22, false) }, 11, false));
                            J$.M(6033281, J$.R(6033249, 'utils', utils, false, true), 'entry', false)(J$.R(6033257, 'testIndex', testIndex, false, true), J$.T(6033273, { 'a': J$.T(6033265, 1, 22, false) }, 11, false));
                        } catch (J$e) {
                            J$.Ex(6033881, J$e);
                        } finally {
                            if (J$.Fr(6033889))
                                continue jalangiLabel24;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(6033329, 'MongoClient', MongoClient, false, false, false);
            J$.N(6033337, 'assert', assert, false, false, false);
            J$.N(6033345, 'path', path, false, false, false);
            J$.N(6033353, 'utils', utils, false, false, false);
            J$.N(6033361, 'url', url, false, false, false);
            J$.N(6033369, 'dbName', dbName, false, false, false);
            J$.N(6033377, 'insertManyDocuments', insertManyDocuments, false, false, false);
            J$.N(6033385, 'findOneDocuments', findOneDocuments, false, false, false);
            test = J$.N(6033401, 'test', J$.T(6033393, test, 12, false), true, false, false);
            J$.N(6033409, 'updateDocument', updateDocument, false, false, false);
            testUpdate = J$.N(6033425, 'testUpdate', J$.T(6033417, testUpdate, 12, false), true, false, false);
            J$.N(6033433, 'removeDocument', removeDocument, false, false, false);
            testRemove = J$.N(6033449, 'testRemove', J$.T(6033441, testRemove, 12, false), true, false, false);
            J$.N(6033457, 'indexCollection', indexCollection, false, false, false);
            testIndex = J$.N(6033473, 'testIndex', J$.T(6033465, testIndex, 12, false), true, false, false);
            main = J$.N(6033489, 'main', J$.T(6033481, main, 12, false), true, false, false);
            var MongoClient = J$.W(6030321, 'MongoClient', J$.G(6030313, J$.F(6030305, J$.I(typeof require === 'undefined' ? require = J$.R(6030289, 'require', undefined, true, true) : require = J$.R(6030289, 'require', require, true, true)), false)(J$.T(6030297, 'mongodb', 21, false)), 'MongoClient'), MongoClient, false, true);
            var assert = J$.W(6030353, 'assert', J$.F(6030345, J$.I(typeof require === 'undefined' ? require = J$.R(6030329, 'require', undefined, true, true) : require = J$.R(6030329, 'require', require, true, true)), false)(J$.T(6030337, 'assert', 21, false)), assert, false, true);
            var path = J$.W(6030385, 'path', J$.F(6030377, J$.I(typeof require === 'undefined' ? require = J$.R(6030361, 'require', undefined, true, true) : require = J$.R(6030361, 'require', require, true, true)), false)(J$.T(6030369, 'path', 21, false)), path, false, true);
            var utils = J$.W(6030417, 'utils', J$.F(6030409, J$.I(typeof require === 'undefined' ? require = J$.R(6030393, 'require', undefined, true, true) : require = J$.R(6030393, 'require', require, true, true)), false)(J$.T(6030401, '../TestcaseUtils.js', 21, false)), utils, false, true);
            const url = J$.W(6030433, 'url', J$.T(6030425, 'mongodb://localhost:27017', 21, false), url, false, true);
            const dbName = J$.W(6030449, 'dbName', J$.T(6030441, 'myproject', 21, false), dbName, false, true);
            J$.M(6030625, J$.R(6030457, 'MongoClient', MongoClient, false, true), 'connect', false)(J$.R(6030465, 'url', url, false, true), J$.T(6030617, function (err, client) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(6030577, arguments.callee, this, arguments);
                            arguments = J$.N(6030585, 'arguments', arguments, true, false, false);
                            err = J$.N(6030593, 'err', err, true, false, false);
                            client = J$.N(6030601, 'client', client, true, false, false);
                            J$.N(6030609, 'db', db, false, false, false);
                            J$.M(6030497, J$.R(6030473, 'assert', assert, false, true), 'equal', false)(J$.T(6030481, null, 25, false), J$.R(6030489, 'err', err, false, false));
                            J$.M(6030521, J$.I(typeof console === 'undefined' ? console = J$.R(6030505, 'console', undefined, true, true) : console = J$.R(6030505, 'console', console, true, true)), 'log', false)(J$.T(6030513, 'Connected successfully to server', 21, false));
                            const db = J$.W(6030553, 'db', J$.M(6030545, J$.R(6030529, 'client', client, false, false), 'db', false)(J$.R(6030537, 'dbName', dbName, false, true)), db, false, false);
                            J$.M(6030569, J$.R(6030561, 'client', client, false, false), 'close', false)();
                        } catch (J$e) {
                            J$.Ex(6033497, J$e);
                        } finally {
                            if (J$.Fr(6033505))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false));
            const insertManyDocuments = J$.W(6031001, 'insertManyDocuments', J$.T(6030993, function (db, callback) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(6030953, arguments.callee, this, arguments);
                            arguments = J$.N(6030961, 'arguments', arguments, true, false, false);
                            db = J$.N(6030969, 'db', db, true, false, false);
                            callback = J$.N(6030977, 'callback', callback, true, false, false);
                            J$.N(6030985, 'collection', collection, false, false, false);
                            const collection = J$.W(6030657, 'collection', J$.M(6030649, J$.R(6030633, 'db', db, false, false), 'collection', false)(J$.T(6030641, 'documents', 21, false)), collection, false, false);
                            J$.M(6030945, J$.R(6030665, 'collection', collection, false, false), 'insertMany', false)(J$.T(6030721, [
                                J$.T(6030681, { a: J$.T(6030673, 1, 22, false) }, 11, false),
                                J$.T(6030697, { a: J$.T(6030689, 2, 22, false) }, 11, false),
                                J$.T(6030713, { a: J$.T(6030705, 3, 22, false) }, 11, false)
                            ], 10, false), J$.T(6030937, function (err, result) {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(6030905, arguments.callee, this, arguments);
                                            arguments = J$.N(6030913, 'arguments', arguments, true, false, false);
                                            err = J$.N(6030921, 'err', err, true, false, false);
                                            result = J$.N(6030929, 'result', result, true, false, false);
                                            J$.M(6030753, J$.R(6030729, 'assert', assert, false, true), 'equal', false)(J$.R(6030737, 'err', err, false, false), J$.T(6030745, null, 25, false));
                                            J$.M(6030801, J$.R(6030761, 'assert', assert, false, true), 'equal', false)(J$.T(6030769, 3, 22, false), J$.G(6030793, J$.G(6030785, J$.R(6030777, 'result', result, false, false), 'result'), 'n'));
                                            J$.M(6030849, J$.R(6030809, 'assert', assert, false, true), 'equal', false)(J$.T(6030817, 3, 22, false), J$.G(6030841, J$.G(6030833, J$.R(6030825, 'result', result, false, false), 'ops'), 'length'));
                                            J$.M(6030873, J$.I(typeof console === 'undefined' ? console = J$.R(6030857, 'console', undefined, true, true) : console = J$.R(6030857, 'console', console, true, true)), 'log', false)(J$.T(6030865, 'Inserted 3 documents into the collection', 21, false));
                                            J$.F(6030897, J$.R(6030881, 'callback', callback, false, false), false)(J$.R(6030889, 'result', result, false, false));
                                        } catch (J$e) {
                                            J$.Ex(6033513, J$e);
                                        } finally {
                                            if (J$.Fr(6033521))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6033529, J$e);
                        } finally {
                            if (J$.Fr(6033537))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), insertManyDocuments, false, true);
            const findOneDocuments = J$.W(6031265, 'findOneDocuments', J$.T(6031257, function (db, query, callback) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(6031209, arguments.callee, this, arguments);
                            arguments = J$.N(6031217, 'arguments', arguments, true, false, false);
                            db = J$.N(6031225, 'db', db, true, false, false);
                            query = J$.N(6031233, 'query', query, true, false, false);
                            callback = J$.N(6031241, 'callback', callback, true, false, false);
                            J$.N(6031249, 'collection', collection, false, false, false);
                            const collection = J$.W(6031033, 'collection', J$.M(6031025, J$.R(6031009, 'db', db, false, false), 'collection', false)(J$.T(6031017, 'documents', 21, false)), collection, false, false);
                            J$.M(6031201, J$.R(6031041, 'collection', collection, false, false), 'findOne', false)(J$.R(6031049, 'query', query, false, false), J$.T(6031193, function (err, docs) {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(6031161, arguments.callee, this, arguments);
                                            arguments = J$.N(6031169, 'arguments', arguments, true, false, false);
                                            err = J$.N(6031177, 'err', err, true, false, false);
                                            docs = J$.N(6031185, 'docs', docs, true, false, false);
                                            J$.M(6031081, J$.R(6031057, 'assert', assert, false, true), 'equal', false)(J$.R(6031065, 'err', err, false, false), J$.T(6031073, null, 25, false));
                                            J$.M(6031105, J$.I(typeof console === 'undefined' ? console = J$.R(6031089, 'console', undefined, true, true) : console = J$.R(6031089, 'console', console, true, true)), 'log', false)(J$.T(6031097, 'Found the following records', 21, false));
                                            J$.M(6031129, J$.I(typeof console === 'undefined' ? console = J$.R(6031113, 'console', undefined, true, true) : console = J$.R(6031113, 'console', console, true, true)), 'log', false)(J$.R(6031121, 'docs', docs, false, false));
                                            J$.F(6031153, J$.R(6031137, 'callback', callback, false, false), false)(J$.R(6031145, 'docs', docs, false, false));
                                        } catch (J$e) {
                                            J$.Ex(6033545, J$e);
                                        } finally {
                                            if (J$.Fr(6033553))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6033561, J$e);
                        } finally {
                            if (J$.Fr(6033569))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), findOneDocuments, false, true);
            const updateDocument = J$.W(6031881, 'updateDocument', J$.T(6031873, function (db, query, callback) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(6031825, arguments.callee, this, arguments);
                            arguments = J$.N(6031833, 'arguments', arguments, true, false, false);
                            db = J$.N(6031841, 'db', db, true, false, false);
                            query = J$.N(6031849, 'query', query, true, false, false);
                            callback = J$.N(6031857, 'callback', callback, true, false, false);
                            J$.N(6031865, 'collection', collection, false, false, false);
                            const collection = J$.W(6031601, 'collection', J$.M(6031593, J$.R(6031577, 'db', db, false, false), 'collection', false)(J$.T(6031585, 'documents', 21, false)), collection, false, false);
                            J$.M(6031817, J$.R(6031609, 'collection', collection, false, false), 'updateOne', false)(J$.T(6031625, { a: J$.T(6031617, 2, 22, false) }, 11, false), J$.T(6031641, { $set: J$.R(6031633, 'query', query, false, false) }, 11, false), J$.T(6031809, function (err, result) {
                                jalangiLabel9:
                                    while (true) {
                                        try {
                                            J$.Fe(6031777, arguments.callee, this, arguments);
                                            arguments = J$.N(6031785, 'arguments', arguments, true, false, false);
                                            err = J$.N(6031793, 'err', err, true, false, false);
                                            result = J$.N(6031801, 'result', result, true, false, false);
                                            J$.M(6031673, J$.R(6031649, 'assert', assert, false, true), 'equal', false)(J$.R(6031657, 'err', err, false, false), J$.T(6031665, null, 25, false));
                                            J$.M(6031721, J$.R(6031681, 'assert', assert, false, true), 'equal', false)(J$.T(6031689, 1, 22, false), J$.G(6031713, J$.G(6031705, J$.R(6031697, 'result', result, false, false), 'result'), 'n'));
                                            J$.M(6031745, J$.I(typeof console === 'undefined' ? console = J$.R(6031729, 'console', undefined, true, true) : console = J$.R(6031729, 'console', console, true, true)), 'log', false)(J$.T(6031737, 'Updated the document with the field a equal to 2', 21, false));
                                            J$.F(6031769, J$.R(6031753, 'callback', callback, false, false), false)(J$.R(6031761, 'result', result, false, false));
                                        } catch (J$e) {
                                            J$.Ex(6033641, J$e);
                                        } finally {
                                            if (J$.Fr(6033649))
                                                continue jalangiLabel9;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6033657, J$e);
                        } finally {
                            if (J$.Fr(6033665))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), updateDocument, false, true);
            const removeDocument = J$.W(6032425, 'removeDocument', J$.T(6032417, function (db, query, callback) {
                jalangiLabel15:
                    while (true) {
                        try {
                            J$.Fe(6032369, arguments.callee, this, arguments);
                            arguments = J$.N(6032377, 'arguments', arguments, true, false, false);
                            db = J$.N(6032385, 'db', db, true, false, false);
                            query = J$.N(6032393, 'query', query, true, false, false);
                            callback = J$.N(6032401, 'callback', callback, true, false, false);
                            J$.N(6032409, 'collection', collection, false, false, false);
                            const collection = J$.W(6032169, 'collection', J$.M(6032161, J$.R(6032145, 'db', db, false, false), 'collection', false)(J$.T(6032153, 'documents', 21, false)), collection, false, false);
                            J$.M(6032361, J$.R(6032177, 'collection', collection, false, false), 'deleteOne', false)(J$.R(6032185, 'query', query, false, false), J$.T(6032353, function (err, result) {
                                jalangiLabel14:
                                    while (true) {
                                        try {
                                            J$.Fe(6032321, arguments.callee, this, arguments);
                                            arguments = J$.N(6032329, 'arguments', arguments, true, false, false);
                                            err = J$.N(6032337, 'err', err, true, false, false);
                                            result = J$.N(6032345, 'result', result, true, false, false);
                                            J$.M(6032217, J$.R(6032193, 'assert', assert, false, true), 'equal', false)(J$.R(6032201, 'err', err, false, false), J$.T(6032209, null, 25, false));
                                            J$.M(6032265, J$.R(6032225, 'assert', assert, false, true), 'equal', false)(J$.T(6032233, 1, 22, false), J$.G(6032257, J$.G(6032249, J$.R(6032241, 'result', result, false, false), 'result'), 'n'));
                                            J$.M(6032289, J$.I(typeof console === 'undefined' ? console = J$.R(6032273, 'console', undefined, true, true) : console = J$.R(6032273, 'console', console, true, true)), 'log', false)(J$.T(6032281, 'Removed the document with the field a equal to 3', 21, false));
                                            J$.F(6032313, J$.R(6032297, 'callback', callback, false, false), false)(J$.R(6032305, 'result', result, false, false));
                                        } catch (J$e) {
                                            J$.Ex(6033721, J$e);
                                        } finally {
                                            if (J$.Fr(6033729))
                                                continue jalangiLabel14;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6033737, J$e);
                        } finally {
                            if (J$.Fr(6033745))
                                continue jalangiLabel15;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), removeDocument, false, true);
            const indexCollection = J$.W(6032865, 'indexCollection', J$.T(6032857, function (db, query, callback) {
                jalangiLabel20:
                    while (true) {
                        try {
                            J$.Fe(6032817, arguments.callee, this, arguments);
                            arguments = J$.N(6032825, 'arguments', arguments, true, false, false);
                            db = J$.N(6032833, 'db', db, true, false, false);
                            query = J$.N(6032841, 'query', query, true, false, false);
                            callback = J$.N(6032849, 'callback', callback, true, false, false);
                            J$.M(6032809, J$.M(6032705, J$.R(6032689, 'db', db, false, false), 'collection', false)(J$.T(6032697, 'documents', 21, false)), 'createIndex', false)(J$.R(6032713, 'query', query, false, false), J$.T(6032721, null, 25, false), J$.T(6032801, function (err, results) {
                                jalangiLabel19:
                                    while (true) {
                                        try {
                                            J$.Fe(6032769, arguments.callee, this, arguments);
                                            arguments = J$.N(6032777, 'arguments', arguments, true, false, false);
                                            err = J$.N(6032785, 'err', err, true, false, false);
                                            results = J$.N(6032793, 'results', results, true, false, false);
                                            J$.M(6032745, J$.I(typeof console === 'undefined' ? console = J$.R(6032729, 'console', undefined, true, true) : console = J$.R(6032729, 'console', console, true, true)), 'log', false)(J$.R(6032737, 'results', results, false, false));
                                            J$.F(6032761, J$.R(6032753, 'callback', callback, false, false), false)();
                                        } catch (J$e) {
                                            J$.Ex(6033801, J$e);
                                        } finally {
                                            if (J$.Fr(6033809))
                                                continue jalangiLabel19;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false));
                        } catch (J$e) {
                            J$.Ex(6033817, J$e);
                        } finally {
                            if (J$.Fr(6033825))
                                continue jalangiLabel20;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false), indexCollection, false, true);
            J$.F(6033313, J$.R(6033305, 'main', main, false, true), false)();
        } catch (J$e) {
            J$.Ex(6033897, J$e);
        } finally {
            if (J$.Sr(6033905))
                continue jalangiLabel25;
            else
                break jalangiLabel25;
        }
    }
// JALANGI DO NOT INSTRUMENT

