'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ajaxClient = require('./ajaxClient');

var _ajaxClient2 = _interopRequireDefault(_ajaxClient);

var _apiClient = require('./apiClient');

var _apiClient2 = _interopRequireDefault(_apiClient);

var _webstoreClient = require('./webstoreClient');

var _webstoreClient2 = _interopRequireDefault(_webstoreClient);

var _productCategories = require('./api/productCategories');

var _productCategories2 = _interopRequireDefault(_productCategories);

var _products = require('./api/products/products');

var _products2 = _interopRequireDefault(_products);

var _options = require('./api/products/options');

var _options2 = _interopRequireDefault(_options);

var _optionValues = require('./api/products/optionValues');

var _optionValues2 = _interopRequireDefault(_optionValues);

var _variants = require('./api/products/variants');

var _variants2 = _interopRequireDefault(_variants);

var _images = require('./api/products/images');

var _images2 = _interopRequireDefault(_images);

var _sitemap = require('./api/sitemap');

var _sitemap2 = _interopRequireDefault(_sitemap);

var _theme = require('./api/theme/theme');

var _theme2 = _interopRequireDefault(_theme);

var _settings = require('./api/theme/settings');

var _settings2 = _interopRequireDefault(_settings);

var _assets = require('./api/theme/assets');

var _assets2 = _interopRequireDefault(_assets);

var _placeholders = require('./api/theme/placeholders');

var _placeholders2 = _interopRequireDefault(_placeholders);

var _customerGroups = require('./api/customerGroups');

var _customerGroups2 = _interopRequireDefault(_customerGroups);

var _customers = require('./api/customers');

var _customers2 = _interopRequireDefault(_customers);

var _ajaxCart = require('./api/ajaxCart');

var _ajaxCart2 = _interopRequireDefault(_ajaxCart);

var _orders = require('./api/orders/orders');

var _orders2 = _interopRequireDefault(_orders);

var _discounts = require('./api/orders/discounts');

var _discounts2 = _interopRequireDefault(_discounts);

var _transactions = require('./api/orders/transactions');

var _transactions2 = _interopRequireDefault(_transactions);

var _items = require('./api/orders/items');

var _items2 = _interopRequireDefault(_items);

var _statuses = require('./api/orders/statuses');

var _statuses2 = _interopRequireDefault(_statuses);

var _shippingMethods = require('./api/shippingMethods');

var _shippingMethods2 = _interopRequireDefault(_shippingMethods);

var _paymentMethods = require('./api/paymentMethods');

var _paymentMethods2 = _interopRequireDefault(_paymentMethods);

var _paymentGateways = require('./api/paymentGateways');

var _paymentGateways2 = _interopRequireDefault(_paymentGateways);

var _ajaxShippingMethods = require('./api/ajaxShippingMethods');

var _ajaxShippingMethods2 = _interopRequireDefault(_ajaxShippingMethods);

var _ajaxPaymentMethods = require('./api/ajaxPaymentMethods');

var _ajaxPaymentMethods2 = _interopRequireDefault(_ajaxPaymentMethods);

var _ajaxPaymentFormSettings = require('./api/ajaxPaymentFormSettings');

var _ajaxPaymentFormSettings2 = _interopRequireDefault(_ajaxPaymentFormSettings);

var _countries = require('./api/countries');

var _countries2 = _interopRequireDefault(_countries);

var _currencies = require('./api/currencies');

var _currencies2 = _interopRequireDefault(_currencies);

var _text = require('./api/text');

var _text2 = _interopRequireDefault(_text);

var _settings3 = require('./api/settings');

var _settings4 = _interopRequireDefault(_settings3);

var _checkoutFields = require('./api/checkoutFields');

var _checkoutFields2 = _interopRequireDefault(_checkoutFields);

var _pages = require('./api/pages');

var _pages2 = _interopRequireDefault(_pages);

var _tokens = require('./api/tokens');

var _tokens2 = _interopRequireDefault(_tokens);

var _redirects = require('./api/redirects');

var _redirects2 = _interopRequireDefault(_redirects);

var _webhooks = require('./api/webhooks');

var _webhooks2 = _interopRequireDefault(_webhooks);

var _files = require('./api/files');

var _files2 = _interopRequireDefault(_files);

var _settings5 = require('./api/apps/settings');

var _settings6 = _interopRequireDefault(_settings5);

var _account = require('./webstore/account');

var _account2 = _interopRequireDefault(_account);

var _services = require('./webstore/services');

var _services2 = _interopRequireDefault(_services);

var _serviceSettings = require('./webstore/serviceSettings');

var _serviceSettings2 = _interopRequireDefault(_serviceSettings);

var _serviceActions = require('./webstore/serviceActions');

var _serviceActions2 = _interopRequireDefault(_serviceActions);

var _serviceLogs = require('./webstore/serviceLogs');

var _serviceLogs2 = _interopRequireDefault(_serviceLogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function Client() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	_classCallCheck(this, Client);

	this.apiBaseUrl = options.apiBaseUrl || '/api/v1';
	this.apiToken = options.apiToken;
	this.ajaxBaseUrl = options.ajaxBaseUrl || '/ajax';
	this.webstoreToken = options.webstoreToken;

	var apiClient = new _apiClient2.default({
		baseUrl: this.apiBaseUrl,
		token: this.apiToken
	});
	var ajaxClient = new _ajaxClient2.default({ baseUrl: this.ajaxBaseUrl });
	var webstoreClient = new _webstoreClient2.default({ token: this.webstoreToken });

	this.products = new _products2.default(apiClient);
	this.products.options = new _options2.default(apiClient);
	this.products.options.values = new _optionValues2.default(apiClient);
	this.products.variants = new _variants2.default(apiClient);
	this.products.images = new _images2.default(apiClient);
	this.productCategories = new _productCategories2.default(apiClient);
	this.customers = new _customers2.default(apiClient);
	this.orders = new _orders2.default(apiClient);
	this.orders.discounts = new _discounts2.default(apiClient);
	this.orders.transactions = new _transactions2.default(apiClient);
	this.orders.items = new _items2.default(apiClient);
	this.orderStatuses = new _statuses2.default(apiClient);
	this.shippingMethods = new _shippingMethods2.default(apiClient);
	this.paymentMethods = new _paymentMethods2.default(apiClient);
	this.paymentGateways = new _paymentGateways2.default(apiClient);
	this.customerGroups = new _customerGroups2.default(apiClient);
	this.sitemap = new _sitemap2.default(apiClient);
	this.theme = new _theme2.default(apiClient);
	this.theme.settings = new _settings2.default(apiClient);
	this.theme.assets = new _assets2.default(apiClient);
	this.theme.placeholders = new _placeholders2.default(apiClient);
	this.countries = new _countries2.default(apiClient);
	this.currencies = new _currencies2.default(apiClient);
	this.text = new _text2.default(apiClient);
	this.settings = new _settings4.default(apiClient);
	this.checkoutFields = new _checkoutFields2.default(apiClient);
	this.pages = new _pages2.default(apiClient);
	this.tokens = new _tokens2.default(apiClient);
	this.redirects = new _redirects2.default(apiClient);
	this.webhooks = new _webhooks2.default(apiClient);
	this.files = new _files2.default(apiClient);
	this.apps = {};
	this.apps.settings = new _settings6.default(apiClient);

	this.ajax = {};
	this.ajax.products = new _products2.default(ajaxClient);
	this.ajax.sitemap = new _sitemap2.default(ajaxClient);
	this.ajax.cart = new _ajaxCart2.default(ajaxClient);
	this.ajax.countries = new _countries2.default(ajaxClient);
	this.ajax.currencies = new _currencies2.default(ajaxClient);
	this.ajax.shippingMethods = new _ajaxShippingMethods2.default(ajaxClient);
	this.ajax.paymentMethods = new _ajaxPaymentMethods2.default(ajaxClient);
	this.ajax.paymentFormSettings = new _ajaxPaymentFormSettings2.default(ajaxClient);
	this.ajax.pages = new _pages2.default(ajaxClient);

	this.webstore = {};
	this.webstore.account = new _account2.default(webstoreClient);
	this.webstore.services = new _services2.default(webstoreClient);
	this.webstore.services.settings = new _serviceSettings2.default(webstoreClient);
	this.webstore.services.actions = new _serviceActions2.default(webstoreClient);
	this.webstore.services.logs = new _serviceLogs2.default(webstoreClient);
};

Client.authorize = function (baseUrl, email) {
	return _apiClient2.default.authorize(baseUrl, email);
};

Client.authorizeInWebStore = function (email, adminUrl) {
	return _webstoreClient2.default.authorize(email, adminUrl);
};

exports.default = Client;