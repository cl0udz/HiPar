var CoinbasePro = require('coinbase-pro');
var publicClient = new CoinbasePro.PublicClient();
var key = 'your_api_key';
var secret = 'your_b64_secret';
var passphrase = 'your_passphrase';

var apiURI = 'https://api.pro.coinbase.com';
var sandboxURI = 'https://api-public.sandbox.pro.coinbase.com';

var authedClient = new CoinbasePro.AuthenticatedClient(
    key,
    secret,
    passphrase,
    apiURI
);
var buyParams = { after: 3000, status: 'open' };
var params4 = {
    margin_profile_id: '45fa9e3b-00ba-4631-b907-8a98cbdf21be',
    type: 'deposit',
    currency: 'USD',
    amount: 2
};
var params2 = {
    repay_only: false,
};
var params3 = {
    from: 'USD',
    to: 'USDC',
    amount:'100',
};
var withdrawAddressParams = {
    amount: 10.0,
    currency: 'BTC',
    crypto_address: '15USXR6S4DhSWVHUxXRCuTkD1SA6qAdy',
};
var header = {
    key: 'suchkey',
    secret: 'suchsecret',
    passphrase: 'muchpassphrase',
};
var chnnel = { channels: ['full', 'level2'] };
function test(input){
    console.log(input);
    var cb = function a(){};
    authedClient.getOrders(input['getorder'], cb);
    authedClient.marginTransfer(input['margintransfer'], cb);
    authedClient.closePosition(input['closeposition'], cb);
    authedClient.convert(input['convert'], cb);
    authedClient.withdrawCrypto(input['withdraw'], cb);
    var websocket = new CoinbasePro.WebsocketClient(
        ['BTC-USD', 'ETH-USD'],
        'wss://ws-feed-public.sandbox.pro.coinbase.com',
        input['wsh'],
        input['wsb']
    );

}

var utils = require('../TestcaseUtils.js');
var input_para = {getorder:buyParams,margintransfer:params4,closeposition:params2,convert:params3,withdraw:withdrawAddressParams,wsh:header,wsb:chnnel};
utils.entry(test,input_para);


