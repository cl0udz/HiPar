var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 1806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(8);var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(18));var _react=_interopRequireWildcard(__webpack_require__(1));var _reactRouterDom=__webpack_require__(35);var _strapiHelperPlugin=__webpack_require__(11);var EditView=(0,_react.lazy)(function(){return Promise.all(/* import() */[__webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, 1951, 7));});var EditSettingsView=(0,_react.lazy)(function(){return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.t.bind(null, 1802, 7));});var ListView=(0,_react.lazy)(function(){return __webpack_require__.e(/* import() */ 6).then(__webpack_require__.t.bind(null, 2137, 7));});var ListSettingsView=(0,_react.lazy)(function(){return __webpack_require__.e(/* import() */ 7).then(__webpack_require__.t.bind(null, 2172, 7));});var RecursivePath=function RecursivePath(props){var _useRouteMatch=(0,_reactRouterDom.useRouteMatch)(),url=_useRouteMatch.url;var _useParams=(0,_reactRouterDom.useParams)(),slug=_useParams.slug;var renderRoute=function renderRoute(routeProps,Component){return _react["default"].createElement(Component,(0,_extends2["default"])({},props,routeProps,{slug:slug}));};var routes=[{path:'ctm-configurations/list-settings',comp:ListSettingsView},{path:'ctm-configurations/edit-settings/:type',comp:EditSettingsView},{path:':id',comp:EditView},{path:'',comp:ListView}].map(function(_ref){var path=_ref.path,comp=_ref.comp;return _react["default"].createElement(_reactRouterDom.Route,{key:path,path:"".concat(url,"/").concat(path),render:function render(props){return renderRoute(props,comp);}});});return _react["default"].createElement(_react.Suspense,{fallback:_react["default"].createElement(_strapiHelperPlugin.LoadingIndicatorPage,null)},_react["default"].createElement(_reactRouterDom.Switch,null,routes));};var _default=RecursivePath;exports["default"]=_default;

/***/ })

}]);