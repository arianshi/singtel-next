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
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["singtel-table"] = factory(require("react"));
	else
		root["singtel-table"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Tbody/index.module.css":
/*!********************************!*\
  !*** ./Tbody/index.module.css ***!
  \********************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../../node_modules/extract-text-webpack-plugin/dist/cjs.js):\\nTypeError: Cannot call a class as a function\\n    at _classCallCheck (/Users/arian/Documents/Singtel/singtel-next/node_modules/extract-text-webpack-plugin/dist/index.js:47:99)\\n    at Object.ExtractTextPlugin (/Users/arian/Documents/Singtel/singtel-next/node_modules/extract-text-webpack-plugin/dist/index.js:55:5)\");\n\n//# sourceURL=webpack://singtel-table/./Tbody/index.module.css?");

/***/ }),

/***/ "./Thead/index.module.css":
/*!********************************!*\
  !*** ./Thead/index.module.css ***!
  \********************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../../node_modules/extract-text-webpack-plugin/dist/cjs.js):\\nTypeError: Cannot call a class as a function\\n    at _classCallCheck (/Users/arian/Documents/Singtel/singtel-next/node_modules/extract-text-webpack-plugin/dist/index.js:47:99)\\n    at Object.ExtractTextPlugin (/Users/arian/Documents/Singtel/singtel-next/node_modules/extract-text-webpack-plugin/dist/index.js:55:5)\");\n\n//# sourceURL=webpack://singtel-table/./Thead/index.module.css?");

/***/ }),

/***/ "./index.module.css":
/*!**************************!*\
  !*** ./index.module.css ***!
  \**************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../../node_modules/extract-text-webpack-plugin/dist/cjs.js):\\nTypeError: Cannot call a class as a function\\n    at _classCallCheck (/Users/arian/Documents/Singtel/singtel-next/node_modules/extract-text-webpack-plugin/dist/index.js:47:99)\\n    at Object.ExtractTextPlugin (/Users/arian/Documents/Singtel/singtel-next/node_modules/extract-text-webpack-plugin/dist/index.js:55:5)\");\n\n//# sourceURL=webpack://singtel-table/./index.module.css?");

/***/ }),

/***/ "./Tbody/index.tsx":
/*!*************************!*\
  !*** ./Tbody/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.css */ \"./Tbody/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Tbody = ({\n  rowSelection,\n  columns,\n  data\n}) => {\n  const [selectedRowKeys, setSelectedRowKeys] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rowSelection?.selectedRowKeys || []);\n  const [selectedRows, setSelectedRows] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const isCheckbox = rowSelection?.type === 'checkbox';\n  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e, object) => {\n    const value = e.target.value;\n    isCheckbox ? handleCheckBoxClick(value, object) : handleRadioClick(value, object);\n  }, [selectedRowKeys]);\n  const handleCheckBoxClick = (value, object) => {\n    let newCheckboxArr = [...selectedRowKeys];\n    if (newCheckboxArr.indexOf(value) >= 0) {\n      newCheckboxArr.splice(newCheckboxArr.indexOf(value), 1);\n    } else {\n      newCheckboxArr.push(value);\n    }\n    setSelectedRowKeys(newCheckboxArr);\n  };\n  const handleRadioClick = (value, object) => {\n    setSelectedRowKeys([value]);\n    setSelectedRows(object);\n  };\n  console.log('rowSelection', rowSelection);\n  rowSelection?.onSelect(selectedRowKeys?.filter(i => i && i?.trim()), selectedRows);\n  const readerTbody = (index, object, data) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().tbodyWrapper),\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: `${(_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().tbodyContent)} ${data?.length - 1 === index ? (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().tbodyContentLast) : ''}`\n    }, rowSelection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n      className: selectedRowKeys.includes(index.toString()) ? (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default())[`${rowSelection.type}Checked`] : (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default())[rowSelection.type]\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      onClick: e => handleClick(e, object),\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputRadio),\n      type: rowSelection.type,\n      name: rowSelection.type,\n      value: index\n    })), columns.map((item, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().tbodyItem),\n        key: item.key + index\n      }, item.render ? item.render(object[item.key], object) : object[item.key]);\n    })));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().tableContainer)\n  }, data?.map((object, index) => {\n    return readerTbody(index, object, data);\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tbody);\n\n//# sourceURL=webpack://singtel-table/./Tbody/index.tsx?");

/***/ }),

/***/ "./Thead/index.tsx":
/*!*************************!*\
  !*** ./Thead/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.css */ \"./Thead/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nconst THead = ({\n  columns,\n  rowSelection,\n  oldData,\n  newData,\n  setCopyNewData,\n  sortChecked,\n  setSortChecked\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().theadWrapper)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().theadContent)\n  }, rowSelection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().checkbox)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputRadio)\n  })), columns.map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().theadItem)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().theadItemText)\n    }, item.title), item?.sorter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: `${(_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().theadItemSortWrapper)} ${sortChecked[index] ? (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().theadItemSortCheckedWrapper) : ''}`,\n      onClick: () => {\n        newData?.sort(item?.sorter);\n        setCopyNewData(newData?.slice());\n        setSortChecked(_objectSpread(_objectSpread({}, sortChecked), {}, {\n          [index]: !sortChecked[index]\n        }));\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_1___default().theadItemSort)\n    })));\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (THead);\n\n//# sourceURL=webpack://singtel-table/./Thead/index.tsx?");

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Thead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thead */ \"./Thead/index.tsx\");\n/* harmony import */ var _Tbody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tbody */ \"./Tbody/index.tsx\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Table = ({\n  rowSelection,\n  showHead,\n  columns,\n  data\n}) => {\n  const [sortChecked, setSortChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  const [copyNewData, setCopyNewData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().table)\n  }, showHead && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Thead__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rowSelection: rowSelection,\n    columns: columns,\n    oldData: data,\n    newData: copyNewData,\n    sortChecked: sortChecked,\n    setSortChecked: setSortChecked,\n    setCopyNewData: setCopyNewData\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tbody__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    rowSelection: rowSelection,\n    columns: columns,\n    data: copyNewData\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Table));\n\n//# sourceURL=webpack://singtel-table/./index.tsx?");

/***/ }),

/***/ "react":
/*!****************************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});