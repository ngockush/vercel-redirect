/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/[...postpath]"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CGithub%5Cvercel-redirect%5Cpages%5C%5B...postpath%5D.tsx&page=%2F%5B...postpath%5D!":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CGithub%5Cvercel-redirect%5Cpages%5C%5B...postpath%5D.tsx&page=%2F%5B...postpath%5D! ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/[...postpath]\",\n      function () {\n        return __webpack_require__(/*! ./pages/[...postpath].tsx */ \"./pages/[...postpath].tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/[...postpath]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1EJTNBJTVDR2l0aHViJTVDdmVyY2VsLXJlZGlyZWN0JTVDcGFnZXMlNUMlNUIuLi5wb3N0cGF0aCU1RC50c3gmcGFnZT0lMkYlNUIuLi5wb3N0cGF0aCU1RCEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0REFBMkI7QUFDbEQ7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzMyZDMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9bLi4ucG9zdHBhdGhdXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9bLi4ucG9zdHBhdGhdLnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvWy4uLnBvc3RwYXRoXVwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CGithub%5Cvercel-redirect%5Cpages%5C%5B...postpath%5D.tsx&page=%2F%5B...postpath%5D!\n"));

/***/ }),

/***/ "./pages/[...postpath].tsx":
/*!*********************************!*\
  !*** ./pages/[...postpath].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Post = function(props) {\n    var post = props.post, host = props.host, path = props.path;\n    // to remove tags from excerpt\n    var removeTags = function(str) {\n        if (str === null || str === \"\") return \"\";\n        else str = str.toString();\n        return str.replace(/(<([^>]+)>)/gi, \"\").replace(/\\[[^\\]]*\\]/, \"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: post.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 82,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"canonical\",\n                        href: \"https://\".concat(host, \"/\").concat(path)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 83,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: removeTags(post.excerpt)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 84,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:url\",\n                        content: \"https://\".concat(host, \"/\").concat(path)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 85,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"article\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 86,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:locale\",\n                        content: \"en_US\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 87,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:site_name\",\n                        content: host.split(\".\")[0]\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 88,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"article:published_time\",\n                        content: post.dateGmt\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 89,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"article:modified_time\",\n                        content: post.modifiedGmt\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 90,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: post.featuredImage.sourceUrl\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 91,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image:alt\",\n                        content: post.featuredImage.altText || post.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 92,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 96,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                lineNumber: 81,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"post-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 99,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.featuredImage.sourceUrl,\n                        alt: post.featuredImage.altText || post.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 100,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        dangerouslySetInnerHTML: {\n                            __html: post.content\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 104,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Github\\\\vercel-redirect\\\\pages\\\\[...postpath].tsx\",\n                lineNumber: 98,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxFQUFFekIsSUFBSSxDQUFDa0IsYUFBYSxDQUFDQyxTQUFTO3dCQUNqQ08sR0FBRyxFQUFFMUIsSUFBSSxDQUFDa0IsYUFBYSxDQUFDRSxPQUFPLElBQUlwQixJQUFJLENBQUNVLEtBQUs7Ozs7OzZCQUM1QztrQ0FDRiw4REFBQ2lCLFNBQU87d0JBQUNDLHVCQUF1QixFQUFFOzRCQUFFQyxNQUFNLEVBQUU3QixJQUFJLENBQUNTLE9BQU87eUJBQUU7Ozs7OzZCQUFJOzs7Ozs7cUJBQ3pEOztvQkFDSixDQUNGO0FBQ0gsQ0FBQztBQXZDS1gsS0FBQUEsSUFBSTs7QUF5Q1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bLi4ucG9zdHBhdGhdLnRzeD8zNzBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBHcmFwaFFMQ2xpZW50LCBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG5cdGNvbnN0IGVuZHBvaW50ID0gcHJvY2Vzcy5lbnYuR1JBUEhRTF9FTkRQT0lOVCBhcyBzdHJpbmc7XG5cdGNvbnN0IGdyYXBoUUxDbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudChlbmRwb2ludCk7XG5cdGNvbnN0IHJlZmVycmluZ1VSTCA9IGN0eC5yZXEuaGVhZGVycz8ucmVmZXJlciB8fCBudWxsO1xuXHRjb25zdCBwYXRoQXJyID0gY3R4LnF1ZXJ5LnBvc3RwYXRoIGFzIEFycmF5PHN0cmluZz47XG5cdGNvbnN0IHBhdGggPSBwYXRoQXJyLmpvaW4oJy8nKTtcblx0Y29uc29sZS5sb2cocGF0aCk7XG5cdGNvbnN0IGZiY2xpZCA9IGN0eC5xdWVyeS5mYmNsaWQ7XG5cblx0Ly8gY2h1eeG7g24gaMaw4bubbmcgbuG6v3UgZmFjZWJvb2sgbMOgIG5nxrDhu51pIGdp4bubaSB0aGnhu4d1IGhv4bq3YyB5w6p1IGPhuqd1IGNo4bupYSBmYmNsaWRcblx0aWYgKHJlZmVycmluZ1VSTD8uaW5jbHVkZXMoJ2ZhY2Vib29rLmNvbScpIHx8IGZiY2xpZCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZWRpcmVjdDoge1xuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxuXHRcdFx0XHRkZXN0aW5hdGlvbjogYCR7XG5cdFx0XHRcdFx0ZW5kcG9pbnQucmVwbGFjZSgvKFxcL2dyYXBocWxcXC8pLywgJy8nKSArIGVuY29kZVVSSShwYXRoIGFzIHN0cmluZylcblx0XHRcdFx0fWAsXG5cdFx0XHR9LFxuXHRcdH07XG5cdH1cblx0Y29uc3QgcXVlcnkgPSBncWxgXG5cdFx0e1xuXHRcdFx0cG9zdChpZDogXCIke3BhdGh9XCIsIGlkVHlwZTogXCJVUklcIikge1xuXHRcdFx0XHRpZFxuXHRcdFx0XHRleGNlcnB0XG5cdFx0XHRcdHRpdGxlXG5cdFx0XHRcdGxpbmtcblx0XHRcdFx0ZGF0ZUdtdFxuXHRcdFx0XHRtb2RpZmllZEdtdFxuXHRcdFx0XHRjb250ZW50XG5cdFx0XHRcdGF1dGhvciB7XG5cdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZlYXR1cmVkSW1hZ2Uge1xuXHRcdFx0XHRcdHNvdXJjZVVybFxuXHRcdFx0XHRcdGFsdFRleHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0YDtcblxuXHRjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhRTENsaWVudC5yZXF1ZXN0KHF1ZXJ5KTtcblx0Y29uc29sZS5sb2coZGF0YSk7XG5cdGlmICghZGF0YS5wb3N0KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5vdEZvdW5kOiB0cnVlLFxuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cGF0aCxcblx0XHRcdHBvc3Q6IGRhdGEucG9zdCxcblx0XHRcdGhvc3Q6IGN0eC5yZXEuaGVhZGVycy5ob3N0LFxuXHRcdH0sXG5cdH07XG59O1xuXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcblx0cG9zdDogYW55O1xuXHRob3N0OiBzdHJpbmc7XG5cdHBhdGg6IHN0cmluZztcbn1cblxuY29uc3QgUG9zdDogUmVhY3QuRkM8UG9zdFByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IHBvc3QsIGhvc3QsIHBhdGggfSA9IHByb3BzO1xuXG5cdC8vIHRvIHJlbW92ZSB0YWdzIGZyb20gZXhjZXJwdFxuXHRjb25zdCByZW1vdmVUYWdzID0gKHN0cjogc3RyaW5nKSA9PiB7XG5cdFx0aWYgKHN0ciA9PT0gbnVsbCB8fCBzdHIgPT09ICcnKSByZXR1cm4gJyc7XG5cdFx0ZWxzZSBzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJykucmVwbGFjZSgvXFxbW15cXF1dKlxcXS8sICcnKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Bvc3QudGl0bGV9IC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2BodHRwczovLyR7aG9zdH0vJHtwYXRofWB9IC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtyZW1vdmVUYWdzKHBvc3QuZXhjZXJwdCl9IC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YGh0dHBzOi8vJHtob3N0fS8ke3BhdGh9YH0gLz5cblx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cImFydGljbGVcIiAvPlxuXHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17aG9zdC5zcGxpdCgnLicpWzBdfSAvPlxuXHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cImFydGljbGU6cHVibGlzaGVkX3RpbWVcIiBjb250ZW50PXtwb3N0LmRhdGVHbXR9IC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwiYXJ0aWNsZTptb2RpZmllZF90aW1lXCIgY29udGVudD17cG9zdC5tb2RpZmllZEdtdH0gLz5cblx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3Bvc3QuZmVhdHVyZWRJbWFnZS5zb3VyY2VVcmx9IC8+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0cHJvcGVydHk9XCJvZzppbWFnZTphbHRcIlxuXHRcdFx0XHRcdGNvbnRlbnQ9e3Bvc3QuZmVhdHVyZWRJbWFnZS5hbHRUZXh0IHx8IHBvc3QudGl0bGV9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8aDE+e3Bvc3QudGl0bGV9PC9oMT5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdHNyYz17cG9zdC5mZWF0dXJlZEltYWdlLnNvdXJjZVVybH1cblx0XHRcdFx0XHRhbHQ9e3Bvc3QuZmVhdHVyZWRJbWFnZS5hbHRUZXh0IHx8IHBvc3QudGl0bGV9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxhcnRpY2xlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiUG9zdCIsInByb3BzIiwicG9zdCIsImhvc3QiLCJwYXRoIiwicmVtb3ZlVGFncyIsInN0ciIsInRvU3RyaW5nIiwicmVwbGFjZSIsIm1ldGEiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiZXhjZXJwdCIsInNwbGl0IiwiZGF0ZUdtdCIsIm1vZGlmaWVkR210IiwiZmVhdHVyZWRJbWFnZSIsInNvdXJjZVVybCIsImFsdFRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImltZyIsInNyYyIsImFsdCIsImFydGljbGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[...postpath].tsx\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CGithub%5Cvercel-redirect%5Cpages%5C%5B...postpath%5D.tsx&page=%2F%5B...postpath%5D!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);