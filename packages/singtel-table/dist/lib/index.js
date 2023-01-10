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
		exports["singtel-table"] = factory();
	else
		root["singtel-table"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../../node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/arian/Documents/Singtel/singtel-next/packages/singtel-table/index.tsx: Unexpected reserved word 'interface'. (7:0)\\n\\n\\u001b[0m \\u001b[90m  5 |\\u001b[39m \\u001b[36mimport\\u001b[39m styles \\u001b[36mfrom\\u001b[39m \\u001b[32m'./index.module.css'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  6 |\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  7 |\\u001b[39m \\u001b[36minterface\\u001b[39m \\u001b[33mTableProps\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 |\\u001b[39m   showHead\\u001b[33m:\\u001b[39m boolean\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 |\\u001b[39m   columns\\u001b[33m:\\u001b[39m any\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 |\\u001b[39m   data\\u001b[33m:\\u001b[39m any\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at instantiate (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:67:32)\\n    at constructor (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:364:12)\\n    at Parser.raise (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:3363:19)\\n    at Parser.checkReservedWord (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:12475:12)\\n    at Parser.parseIdentifierName (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:12423:12)\\n    at Parser.parseIdentifier (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:12398:23)\\n    at Parser.parseExprAtom (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:11553:27)\\n    at Parser.parseExprSubscripts (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:11182:23)\\n    at Parser.parseUpdate (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:11164:21)\\n    at Parser.parseMaybeUnary (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:11138:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:10967:61)\\n    at Parser.parseExprOps (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:10973:23)\\n    at Parser.parseMaybeConditional (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:10948:23)\\n    at Parser.parseMaybeAssign (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:10906:21)\\n    at Parser.parseExpressionBase (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:10856:23)\\n    at /Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:10851:39\\n    at Parser.allowInAnd (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:12646:16)\\n    at Parser.parseExpression (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:10851:17)\\n    at Parser.parseStatementContent (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:13107:23)\\n    at Parser.parseStatementLike (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:12963:17)\\n    at Parser.parseModuleItem (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:12944:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:13569:36)\\n    at Parser.parseBlockBody (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:13561:10)\\n    at Parser.parseProgram (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:12853:10)\\n    at Parser.parseTopLevel (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:12843:25)\\n    at Parser.parse (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:14751:10)\\n    at parse (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/parser/lib/index.js:14793:38)\\n    at parser (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/core/lib/parser/index.js:41:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/core/lib/transformation/normalize-file.js:65:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/core/lib/transformation/index.js:21:50)\\n    at run.next (<anonymous>)\\n    at transform (/Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/core/lib/transform.js:22:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/arian/Documents/Singtel/singtel-next/node_modules/gensync/index.js:261:32)\\n    at /Users/arian/Documents/Singtel/singtel-next/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Users/arian/Documents/Singtel/singtel-next/node_modules/gensync/index.js:223:11)\\n    at /Users/arian/Documents/Singtel/singtel-next/node_modules/gensync/index.js:189:28\\n    at /Users/arian/Documents/Singtel/singtel-next/node_modules/@babel/core/lib/gensync-utils/async.js:68:7\\n    at /Users/arian/Documents/Singtel/singtel-next/node_modules/gensync/index.js:113:33\\n    at step (/Users/arian/Documents/Singtel/singtel-next/node_modules/gensync/index.js:287:14)\\n    at /Users/arian/Documents/Singtel/singtel-next/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Users/arian/Documents/Singtel/singtel-next/node_modules/gensync/index.js:223:11)\\n    at /Users/arian/Documents/Singtel/singtel-next/node_modules/gensync/index.js:37:40\");\n\n//# sourceURL=webpack://singtel-table/./index.tsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.tsx"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});