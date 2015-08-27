exports.id = 0;
exports.modules = {

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module, __dirname) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(65); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {\n\n'use strict';\n\nvar path = __webpack_require__(69);\nvar ROOT_PATH = path.resolve(__dirname);\nvar webpack = __webpack_require__(66);\n\nmodule.exports = {\n\n  resolve: {\n    extensions: ['', '.js']\n  },\n  module: {\n    loaders: [{\n      test: /\\.js$/,\n      loaders: ['react-hot', 'babel'],\n      exclude: /node_modules/,\n      include: __dirname\n    }]\n  }\n};\n\n/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(70), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(65))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"webpack.config.js\" + \": \" + err.message); } }); } } })(); }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module), \"\"))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./webpack.config.js\n ** module id = 68\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./webpack.config.js?");

/***/ }

};