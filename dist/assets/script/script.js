/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/entry.js":
/*!*****************************!*\
  !*** ./src/script/entry.js ***!
  \*****************************/
/***/ (function() {

eval("\n/** ページ内アンカー */\n\nconst internalLinks = document.querySelectorAll(`a[href^=\"#\"]`);\ninternalLinks.forEach(link => {\n  link.addEventListener('click', e => {\n    e.preventDefault();\n    const targetId = link.hash;\n    const targetElement = document.querySelector(targetId);\n    const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;\n    window.scrollTo({\n      top: targetOffsetTop,\n      behavior: \"smooth\"\n    });\n  });\n});\n\n//# sourceURL=webpack://coding/./src/script/entry.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/entry.js"]();
/******/ 	
/******/ })()
;