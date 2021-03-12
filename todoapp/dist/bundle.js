/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/header/header.js":
/*!******************************!*\
  !*** ./src/header/header.js ***!
  \******************************/
/*! exports provided: createHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeader", function() { return createHeader; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./src/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);


function createHeader() {
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['nav']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['title'], _header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['tag']], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('Flipkart')), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['right'], _header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['tag']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['user']], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('User')), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['button']], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('Logout'))])]);
}

/***/ }),

/***/ "./src/header/header.scss":
/*!********************************!*\
  !*** ./src/header/header.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"nav":"src-header-header__nav","tag":"src-header-header__tag","title":"src-header-header__title","right":"src-header-header__right","button":"src-header-header__button","user":"src-header-header__user"};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ "./src/header/header.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);




(function mainLayout() {
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["updateNode"])('main', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', ['container'], Object(_header_header__WEBPACK_IMPORTED_MODULE_0__["createHeader"])()));
})();

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: createElement, addStyle, withStyle, withAttributes, T, updateNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyle", function() { return withStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAttributes", function() { return withAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNode", function() { return updateNode; });
function createElement(type, classList, childList, id) {
  const el = document.createElement(type);
  if (classList) el.className = classList.reduce((a, c, i) => a + (i ? ' ' : '') + c, '');

  if (childList) {
    if (!Array.isArray(childList)) childList = [childList];
    childList.map(c => el.appendChild(c));
  }

  if (id) el.id = id;
  return el;
}
const addStyle = (container, style, value) => {
  container.style[style] = value;
  return container;
};
const withStyle = (container, style) => {
  Object.keys(style).map(s => container.style[s] = style[s]);
  return container;
};
const withAttributes = (container, attributes) => {
  Object.keys(attributes).map(s => container[s] = attributes[s]);
  return container;
};
const T = t => document.createTextNode(t);
const updateNode = (id, container) => {
  const el = document.querySelector(`#${id}`);

  if (el.children.length) {
    el.replaceChild(container, el.firstChild);
  } else {
    el.appendChild(container);
  }
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map