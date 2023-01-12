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
		exports["shared-components"] = factory(require("react"));
	else
		root["shared-components"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Tbody/index.tsx":
/*!*************************!*\
  !*** ./Tbody/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.css */ \"./Tbody/index.module.css\");\n\n\nconst Tbody = ({\n  rowSelection,\n  columns,\n  data\n}) => {\n  const isRadio = rowSelection?.type === 'radio';\n  const isCheckbox = rowSelection?.type === 'checkbox';\n  const [selectedRows, setSelectedRows] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [selectedRowKeys, setSelectedRowKeys] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rowSelection?.selectedRowKeys || []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ([isRadio, isCheckbox].includes(true)) {\n      setSelectedRowKeys(rowSelection?.selectedRowKeys || []);\n    }\n  }, [rowSelection, rowSelection?.type]);\n  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e, object) => {\n    const value = e.target.value;\n    isCheckbox ? handleCheckBoxClick(value, object) : handleRadioClick(value, object);\n  }, [selectedRowKeys]);\n  const handleCheckBoxClick = (value, object) => {\n    let newCheckboxArr = [...selectedRowKeys];\n    if (newCheckboxArr.indexOf(value) >= 0) {\n      newCheckboxArr.splice(newCheckboxArr.indexOf(value), 1);\n    } else {\n      newCheckboxArr.push(value);\n    }\n    setSelectedRowKeys(newCheckboxArr);\n  };\n  const handleRadioClick = (value, object) => {\n    setSelectedRowKeys([value]);\n    setSelectedRows(object);\n  };\n  rowSelection?.onSelect(selectedRowKeys?.filter(i => i && i?.trim()), selectedRows);\n  const readerTbody = (index, object, data) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tbodyWrapper,\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: `${_index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tbodyContent} ${data?.length - 1 === index ? _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tbodyContentLast : ''}`\n    }, rowSelection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n      className: selectedRowKeys.includes(index.toString()) ? _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][`${rowSelection.type}Checked`] : _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][rowSelection.type]\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      onClick: e => handleClick(e, object),\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].inputRadio,\n      type: rowSelection.type,\n      name: rowSelection.type,\n      value: index\n    })), columns.map((item, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n        className: _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tbodyItem,\n        key: item.key + index\n      }, item.render ? item.render(object[item.key], object) : object[item.key]);\n    })));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tableContainer\n  }, data?.map((object, index) => {\n    return readerTbody(index, object, data);\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tbody);\n\n//# sourceURL=webpack://shared-components/./Tbody/index.tsx?");

/***/ }),

/***/ "./Thead/index.tsx":
/*!*************************!*\
  !*** ./Thead/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.css */ \"./Thead/index.module.css\");\n\n\nconst THead = ({\n  columns,\n  rowSelection,\n  newData,\n  setCopyNewData,\n  sortChecked,\n  setSortChecked\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].theadWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].theadContent\n  }, rowSelection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].checkbox\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].inputRadio\n  })), columns.map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].theadItem\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].theadItemText\n    }, item.title), item?.sorter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: `${_index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].theadItemSortWrapper} ${sortChecked.includes(index) ? _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].theadItemSortCheckedWrapper : ''}`,\n      onClick: () => {\n        newData?.sort(item?.sorter);\n        setCopyNewData(newData?.slice());\n        setSortChecked([index]);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: item?.sortDirections?.includes('descend') ? _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].theadItemSortDescend : item?.sortDirections?.includes('ascend') ? _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].theadItemSortAscend : _index_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].theadItemSortAscendAndDescend\n    })));\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (THead);\n\n//# sourceURL=webpack://shared-components/./Thead/index.tsx?");

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Thead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thead */ \"./Thead/index.tsx\");\n/* harmony import */ var _Tbody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tbody */ \"./Tbody/index.tsx\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./index.module.css\");\n\n\n\n\nconst Table = ({\n  rowSelection,\n  showHead,\n  columns,\n  data\n}) => {\n  const [sortChecked, setSortChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [copyNewData, setCopyNewData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].table\n  }, showHead && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Thead__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rowSelection: rowSelection,\n    columns: columns,\n    oldData: data,\n    newData: copyNewData,\n    sortChecked: sortChecked,\n    setSortChecked: setSortChecked,\n    setCopyNewData: setCopyNewData\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tbody__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    rowSelection: rowSelection,\n    columns: columns,\n    data: copyNewData\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Table));\n\n//# sourceURL=webpack://shared-components/./index.tsx?");

/***/ }),

/***/ "./Tbody/index.module.css":
/*!********************************!*\
  !*** ./Tbody/index.module.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"tbodyWrapper\":\"Tbody-index-module__tbodyWrapper--CgGLK\",\"tbodyContent\":\"Tbody-index-module__tbodyContent--X2h02\",\"tbodyContentLast\":\"Tbody-index-module__tbodyContentLast--DqmXS\",\"checkbox\":\"Tbody-index-module__checkbox--l1FlG\",\"checkboxChecked\":\"Tbody-index-module__checkboxChecked--hxHbc\",\"radio\":\"Tbody-index-module__radio--mVkVv\",\"radioChecked\":\"Tbody-index-module__radioChecked--fEJel\",\"inputRadio\":\"Tbody-index-module__inputRadio--ZYvaE\",\"spanRadio\":\"Tbody-index-module__spanRadio--ugoj9\",\"tbodyItem\":\"Tbody-index-module__tbodyItem--gAMBQ\"});\n\n//# sourceURL=webpack://shared-components/./Tbody/index.module.css?");

/***/ }),

/***/ "./Thead/index.module.css":
/*!********************************!*\
  !*** ./Thead/index.module.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"theadWrapper\":\"Thead-index-module__theadWrapper--Ylfhs\",\"theadContent\":\"Thead-index-module__theadContent--iXvDx\",\"checkbox\":\"Thead-index-module__checkbox--JhrZp\",\"inputRadio\":\"Thead-index-module__inputRadio--NxxQj\",\"tbodyCheckbox\":\"Thead-index-module__tbodyCheckbox--GGoJw\",\"tbodyCheckboxChecked\":\"Thead-index-module__tbodyCheckboxChecked--Rj6SP\",\"theadItem\":\"Thead-index-module__theadItem--mib2N\",\"theadItemText\":\"Thead-index-module__theadItemText--GQxv2\",\"theadItemSortWrapper\":\"Thead-index-module__theadItemSortWrapper--FA6Mr\",\"theadItemSortCheckedWrapper\":\"Thead-index-module__theadItemSortCheckedWrapper--WcXVM\",\"theadItemSortAscendAndDescend\":\"Thead-index-module__theadItemSortAscendAndDescend--DvYQi\",\"theadItemSortDescend\":\"Thead-index-module__theadItemSortDescend--PF7n2\",\"theadItemSortAscend\":\"Thead-index-module__theadItemSortAscend--TXKtf\"});\n\n//# sourceURL=webpack://shared-components/./Thead/index.module.css?");

/***/ }),

/***/ "./index.module.css":
/*!**************************!*\
  !*** ./index.module.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"table\":\"index-module__table--cCpR7\"});\n\n//# sourceURL=webpack://shared-components/./index.module.css?");

/***/ }),

/***/ "react":
/*!****************************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

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