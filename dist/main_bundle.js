/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-library"] = factory();
	else
		root["react-library"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\openlib\\\\src\\\\index.ts.\\n    at makeSourceMapAndFinish (D:\\\\openlib\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:55:18)\\n    at successLoader (D:\\\\openlib\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:42:5)\\n    at Object.loader (D:\\\\openlib\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:23:5)\");\n\n//# sourceURL=webpack://react-library/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});