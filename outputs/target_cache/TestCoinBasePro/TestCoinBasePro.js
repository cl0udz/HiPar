J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(2149193, '/Users/ex1t/Desktop/nodeAnalysis/HiPar/outputs/target_cache/TestCoinBasePro/TestCoinBasePro.js');
            function test(input) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(2149017, arguments.callee, this, arguments);
                            arguments = J$.N(2149025, 'arguments', arguments, true, false, false);
                            input = J$.N(2149033, 'input', input, true, false, false);
                            J$.N(2149041, 'cb', cb, false, false, false);
                            J$.N(2149049, 'websocket', websocket, false, false, false);
                            J$.M(2148633, J$.I(typeof console === 'undefined' ? console = J$.R(2148617, 'console', undefined, true, true) : console = J$.R(2148617, 'console', console, true, true)), 'log', false)(J$.R(2148625, 'input', input, false, false));
                            var cb = J$.W(2148665, 'cb', J$.T(2148657, function a() {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(2148641, arguments.callee, this, arguments);
                                            arguments = J$.N(2148649, 'arguments', arguments, true, false, false);
                                        } catch (J$e) {
                                            J$.Ex(2149353, J$e);
                                        } finally {
                                            if (J$.Fr(2149361))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false), cb, false, false);
                            J$.M(2148713, J$.R(2148673, 'authedClient', authedClient, false, true), 'getOrders', false)(J$.G(2148697, J$.R(2148681, 'input', input, false, false), J$.T(2148689, 'getorder', 21, false)), J$.R(2148705, 'cb', cb, false, false));
                            J$.M(2148761, J$.R(2148721, 'authedClient', authedClient, false, true), 'marginTransfer', false)(J$.G(2148745, J$.R(2148729, 'input', input, false, false), J$.T(2148737, 'margintransfer', 21, false)), J$.R(2148753, 'cb', cb, false, false));
                            J$.M(2148809, J$.R(2148769, 'authedClient', authedClient, false, true), 'closePosition', false)(J$.G(2148793, J$.R(2148777, 'input', input, false, false), J$.T(2148785, 'closeposition', 21, false)), J$.R(2148801, 'cb', cb, false, false));
                            J$.M(2148857, J$.R(2148817, 'authedClient', authedClient, false, true), 'convert', false)(J$.G(2148841, J$.R(2148825, 'input', input, false, false), J$.T(2148833, 'convert', 21, false)), J$.R(2148849, 'cb', cb, false, false));
                            J$.M(2148905, J$.R(2148865, 'authedClient', authedClient, false, true), 'withdrawCrypto', false)(J$.G(2148889, J$.R(2148873, 'input', input, false, false), J$.T(2148881, 'withdraw', 21, false)), J$.R(2148897, 'cb', cb, false, false));
                            var websocket = J$.W(2149009, 'websocket', J$.M(2149001, J$.R(2148913, 'CoinbasePro', CoinbasePro, false, true), 'WebsocketClient', true)(J$.T(2148937, [
                                J$.T(2148921, 'BTC-USD', 21, false),
                                J$.T(2148929, 'ETH-USD', 21, false)
                            ], 10, false), J$.T(2148945, 'wss://ws-feed-public.sandbox.pro.coinbase.com', 21, false), J$.G(2148969, J$.R(2148953, 'input', input, false, false), J$.T(2148961, 'wsh', 21, false)), J$.G(2148993, J$.R(2148977, 'input', input, false, false), J$.T(2148985, 'wsb', 21, false))), websocket, false, false);
                        } catch (J$e) {
                            J$.Ex(2149369, J$e);
                        } finally {
                            if (J$.Fr(2149377))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(2149201, 'CoinbasePro', CoinbasePro, false, false, false);
            J$.N(2149209, 'publicClient', publicClient, false, false, false);
            J$.N(2149217, 'key', key, false, false, false);
            J$.N(2149225, 'secret', secret, false, false, false);
            J$.N(2149233, 'passphrase', passphrase, false, false, false);
            J$.N(2149241, 'apiURI', apiURI, false, false, false);
            J$.N(2149249, 'sandboxURI', sandboxURI, false, false, false);
            J$.N(2149257, 'authedClient', authedClient, false, false, false);
            J$.N(2149265, 'buyParams', buyParams, false, false, false);
            J$.N(2149273, 'params4', params4, false, false, false);
            J$.N(2149281, 'params2', params2, false, false, false);
            J$.N(2149289, 'params3', params3, false, false, false);
            J$.N(2149297, 'withdrawAddressParams', withdrawAddressParams, false, false, false);
            J$.N(2149305, 'header', header, false, false, false);
            J$.N(2149313, 'chnnel', chnnel, false, false, false);
            test = J$.N(2149329, 'test', J$.T(2149321, test, 12, false), true, false, false);
            J$.N(2149337, 'utils', utils, false, false, false);
            J$.N(2149345, 'input_para', input_para, false, false, false);
            J$.T(2148153, 'use strict', 21, false);
            var CoinbasePro = J$.W(2148185, 'CoinbasePro', J$.F(2148177, J$.I(typeof require === 'undefined' ? require = J$.R(2148161, 'require', undefined, true, true) : require = J$.R(2148161, 'require', require, true, true)), false)(J$.T(2148169, 'coinbase-pro', 21, false)), CoinbasePro, false, true);
            var publicClient = J$.W(2148209, 'publicClient', J$.M(2148201, J$.R(2148193, 'CoinbasePro', CoinbasePro, false, true), 'PublicClient', true)(), publicClient, false, true);
            var key = J$.W(2148225, 'key', J$.T(2148217, 'your_api_key', 21, false), key, false, true);
            var secret = J$.W(2148241, 'secret', J$.T(2148233, 'your_b64_secret', 21, false), secret, false, true);
            var passphrase = J$.W(2148257, 'passphrase', J$.T(2148249, 'your_passphrase', 21, false), passphrase, false, true);
            var apiURI = J$.W(2148273, 'apiURI', J$.T(2148265, 'https://api.pro.coinbase.com', 21, false), apiURI, false, true);
            var sandboxURI = J$.W(2148289, 'sandboxURI', J$.T(2148281, 'https://api-public.sandbox.pro.coinbase.com', 21, false), sandboxURI, false, true);
            var authedClient = J$.W(2148345, 'authedClient', J$.M(2148337, J$.R(2148297, 'CoinbasePro', CoinbasePro, false, true), 'AuthenticatedClient', true)(J$.R(2148305, 'key', key, false, true), J$.R(2148313, 'secret', secret, false, true), J$.R(2148321, 'passphrase', passphrase, false, true), J$.R(2148329, 'apiURI', apiURI, false, true)), authedClient, false, true);
            var buyParams = J$.W(2148377, 'buyParams', J$.T(2148369, {
                after: J$.T(2148353, 3000, 22, false),
                status: J$.T(2148361, 'open', 21, false)
            }, 11, false), buyParams, false, true);
            var params4 = J$.W(2148425, 'params4', J$.T(2148417, {
                margin_profile_id: J$.T(2148385, '45fa9e3b-00ba-4631-b907-8a98cbdf21be', 21, false),
                type: J$.T(2148393, 'deposit', 21, false),
                currency: J$.T(2148401, 'USD', 21, false),
                amount: J$.T(2148409, 2, 22, false)
            }, 11, false), params4, false, true);
            var params2 = J$.W(2148449, 'params2', J$.T(2148441, { repay_only: J$.T(2148433, false, 23, false) }, 11, false), params2, false, true);
            var params3 = J$.W(2148489, 'params3', J$.T(2148481, {
                from: J$.T(2148457, 'USD', 21, false),
                to: J$.T(2148465, 'USDC', 21, false),
                amount: J$.T(2148473, '100', 21, false)
            }, 11, false), params3, false, true);
            var withdrawAddressParams = J$.W(2148529, 'withdrawAddressParams', J$.T(2148521, {
                amount: J$.T(2148497, 10, 22, false),
                currency: J$.T(2148505, 'BTC', 21, false),
                crypto_address: J$.T(2148513, '15USXR6S4DhSWVHUxXRCuTkD1SA6qAdy', 21, false)
            }, 11, false), withdrawAddressParams, false, true);
            var header = J$.W(2148569, 'header', J$.T(2148561, {
                key: J$.T(2148537, 'suchkey', 21, false),
                secret: J$.T(2148545, 'suchsecret', 21, false),
                passphrase: J$.T(2148553, 'muchpassphrase', 21, false)
            }, 11, false), header, false, true);
            var chnnel = J$.W(2148609, 'chnnel', J$.T(2148601, {
                channels: J$.T(2148593, [
                    J$.T(2148577, 'full', 21, false),
                    J$.T(2148585, 'level2', 21, false)
                ], 10, false)
            }, 11, false), chnnel, false, true);
            var utils = J$.W(2149081, 'utils', J$.F(2149073, J$.I(typeof require === 'undefined' ? require = J$.R(2149057, 'require', undefined, true, true) : require = J$.R(2149057, 'require', require, true, true)), false)(J$.T(2149065, '../TestcaseUtils.js', 21, false)), utils, false, true);
            var input_para = J$.W(2149153, 'input_para', J$.T(2149145, {
                getorder: J$.R(2149089, 'buyParams', buyParams, false, true),
                margintransfer: J$.R(2149097, 'params4', params4, false, true),
                closeposition: J$.R(2149105, 'params2', params2, false, true),
                convert: J$.R(2149113, 'params3', params3, false, true),
                withdraw: J$.R(2149121, 'withdrawAddressParams', withdrawAddressParams, false, true),
                wsh: J$.R(2149129, 'header', header, false, true),
                wsb: J$.R(2149137, 'chnnel', chnnel, false, true)
            }, 11, false), input_para, false, true);
            J$.M(2149185, J$.R(2149161, 'utils', utils, false, true), 'entry', false)(J$.R(2149169, 'test', test, false, true), J$.R(2149177, 'input_para', input_para, false, true));
        } catch (J$e) {
            J$.Ex(2149385, J$e);
        } finally {
            if (J$.Sr(2149393))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

