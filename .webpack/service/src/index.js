(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/getAllProducts.ts":
/*!*******************************!*\
  !*** ./src/getAllProducts.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getAllProductsHandler = void 0;\r\nconst winstonLogger_1 = __webpack_require__(/*! ./utils/winstonLogger */ \"./src/utils/winstonLogger.ts\");\r\nconst apiResponseBuilder_1 = __webpack_require__(/*! ./utils/apiResponseBuilder */ \"./src/utils/apiResponseBuilder.ts\");\r\nconst productService = __importStar(__webpack_require__(/*! ./services/productService */ \"./src/services/productService.ts\"));\r\nexports.getAllProductsHandler = async (event, _context) => {\r\n    try {\r\n        winstonLogger_1.winstonLogger.logRequest(`Incoming event: ${JSON.stringify(event)}`);\r\n        const products = await productService.getAllProducts();\r\n        winstonLogger_1.winstonLogger.logRequest(`\"Received products: ${JSON.stringify(products)}`);\r\n        return apiResponseBuilder_1.successResponse(products);\r\n    }\r\n    catch (err) {\r\n        return apiResponseBuilder_1.errorResponse(err);\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2V0QWxsUHJvZHVjdHMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2V0QWxsUHJvZHVjdHMudHM/YzE3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aW5zdG9uTG9nZ2VyIH0gZnJvbSBcIi4vdXRpbHMvd2luc3RvbkxvZ2dlclwiO1xyXG5pbXBvcnQgeyBlcnJvclJlc3BvbnNlLCBzdWNjZXNzUmVzcG9uc2UgfSBmcm9tIFwiLi91dGlscy9hcGlSZXNwb25zZUJ1aWxkZXJcIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvcHJvZHVjdFNlcnZpY2VcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFByb2R1Y3RzSGFuZGxlciAgPSBhc3luYyAoZXZlbnQsIF9jb250ZXh0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdpbnN0b25Mb2dnZXIubG9nUmVxdWVzdChgSW5jb21pbmcgZXZlbnQ6ICR7IEpTT04uc3RyaW5naWZ5KCBldmVudCApIH1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRBbGxQcm9kdWN0cygpO1xyXG5cclxuICAgICAgICB3aW5zdG9uTG9nZ2VyLmxvZ1JlcXVlc3QoYFwiUmVjZWl2ZWQgcHJvZHVjdHM6ICR7IEpTT04uc3RyaW5naWZ5KCBwcm9kdWN0cyApIH1gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3NSZXNwb25zZSggcHJvZHVjdHMgKTtcclxuICAgIH0gXHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yUmVzcG9uc2UoIGVyciApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/getAllProducts.ts\n");

/***/ }),

/***/ "./src/getProductById.ts":
/*!*******************************!*\
  !*** ./src/getProductById.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getProductByIdHandler = void 0;\r\nconst winstonLogger_1 = __webpack_require__(/*! ./utils/winstonLogger */ \"./src/utils/winstonLogger.ts\");\r\nconst apiResponseBuilder_1 = __webpack_require__(/*! ./utils/apiResponseBuilder */ \"./src/utils/apiResponseBuilder.ts\");\r\nconst productService = __importStar(__webpack_require__(/*! ./services/productService */ \"./src/services/productService.ts\"));\r\nexports.getProductByIdHandler = async (event, _context) => {\r\n    try {\r\n        winstonLogger_1.winstonLogger.logRequest(`Incoming event: ${JSON.stringify(event)}`);\r\n        const { productId = '' } = event.pathParameters;\r\n        console.log(productService);\r\n        const product = await productService.getProductById(productId);\r\n        winstonLogger_1.winstonLogger.logRequest(`\"Received product with id: ${productId}: ${JSON.stringify(product)}`);\r\n        if (product)\r\n            return apiResponseBuilder_1.successResponse({ product });\r\n        return apiResponseBuilder_1.successResponse({ message: \"Product not found\" }, 404);\r\n    }\r\n    catch (err) {\r\n        return apiResponseBuilder_1.errorResponse(err);\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2V0UHJvZHVjdEJ5SWQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2V0UHJvZHVjdEJ5SWQudHM/YTBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aW5zdG9uTG9nZ2VyIH0gZnJvbSBcIi4vdXRpbHMvd2luc3RvbkxvZ2dlclwiO1xyXG5pbXBvcnQgeyBlcnJvclJlc3BvbnNlLCBzdWNjZXNzUmVzcG9uc2UgfSBmcm9tIFwiLi91dGlscy9hcGlSZXNwb25zZUJ1aWxkZXJcIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvcHJvZHVjdFNlcnZpY2VcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RCeUlkSGFuZGxlciA9IGFzeW5jIChldmVudCwgX2NvbnRleHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2luc3RvbkxvZ2dlci5sb2dSZXF1ZXN0KGBJbmNvbWluZyBldmVudDogJHsgSlNPTi5zdHJpbmdpZnkoIGV2ZW50ICkgfWApO1xyXG5cclxuICAgICAgICBjb25zdCB7IHByb2R1Y3RJZCA9ICcnIH0gPSBldmVudC5wYXRoUGFyYW1ldGVycztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdFNlcnZpY2UpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQoIHByb2R1Y3RJZCApO1xyXG5cclxuICAgICAgICB3aW5zdG9uTG9nZ2VyLmxvZ1JlcXVlc3QoYFwiUmVjZWl2ZWQgcHJvZHVjdCB3aXRoIGlkOiAkeyBwcm9kdWN0SWQgfTogJHsgSlNPTi5zdHJpbmdpZnkoIHByb2R1Y3QgKSB9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIHByb2R1Y3QgKVxyXG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc1Jlc3BvbnNlKCB7IHByb2R1Y3QgfSApO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3NSZXNwb25zZSggeyBtZXNzYWdlOiBcIlByb2R1Y3Qgbm90IGZvdW5kXCIgfSwgNDA0ICk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGVyciApIHtcclxuICAgICAgICByZXR1cm4gZXJyb3JSZXNwb25zZSggZXJyICk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/getProductById.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar getProductById_1 = __webpack_require__(/*! ./getProductById */ \"./src/getProductById.ts\");\r\nObject.defineProperty(exports, \"getProductByIdHandler\", { enumerable: true, get: function () { return getProductById_1.getProductByIdHandler; } });\r\nvar getAllProducts_1 = __webpack_require__(/*! ./getAllProducts */ \"./src/getAllProducts.ts\");\r\nObject.defineProperty(exports, \"getAllProductsHandler\", { enumerable: true, get: function () { return getAllProducts_1.getAllProductsHandler; } });\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBnZXRQcm9kdWN0QnlJZEhhbmRsZXIgfSBmcm9tICcuL2dldFByb2R1Y3RCeUlkJztcclxuZXhwb3J0IHsgZ2V0QWxsUHJvZHVjdHNIYW5kbGVyIH0gZnJvbSAnLi9nZXRBbGxQcm9kdWN0cyc7XHJcblxyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFBQTtBQUNBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/services/productService.ts":
/*!****************************************!*\
  !*** ./src/services/productService.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getAllProducts = exports.getProductById = void 0;\r\nconst productsList_1 = __webpack_require__(/*! ./productsList */ \"./src/services/productsList.ts\");\r\nexports.getProductById = async (id) => {\r\n    return productsList_1.productsMock.find((product) => product.id === id);\r\n};\r\nexports.getAllProducts = async () => {\r\n    return productsList_1.productsMock;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJvZHVjdFNlcnZpY2UudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcHJvZHVjdFNlcnZpY2UudHM/MjM4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0SW50ZXJmYWNlIH0gZnJvbSAnLi9wcm9kdWN0c0RUTydcclxuaW1wb3J0IHsgcHJvZHVjdHNNb2NrIH0gZnJvbSAnLi9wcm9kdWN0c0xpc3QnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8UHJvZHVjdEludGVyZmFjZSB8IHVuZGVmaW5lZD4gPT4ge1xyXG4gIHJldHVybiBwcm9kdWN0c01vY2suZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaWQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0cyA9IGFzeW5jICgpOiBQcm9taXNlPFByb2R1Y3RJbnRlcmZhY2VbXT4gPT4ge1xyXG4gIHJldHVybiBwcm9kdWN0c01vY2tcclxufVxyXG4iXSwibWFwcGluZ3MiOiI7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/productService.ts\n");

/***/ }),

/***/ "./src/services/productsList.ts":
/*!**************************************!*\
  !*** ./src/services/productsList.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.productsMock = void 0;\r\nexports.productsMock = [\r\n    {\r\n        count: 4,\r\n        description: 'Improving the Design of Existing Code ”shed light on the refactoring process, describing the principles and best practices for its implementation.',\r\n        id: '7567ec4b-b10c-48c5-9345-fc73c48a80aa',\r\n        price: 2.4,\r\n        title: 'Refactoring by M. Fowler',\r\n        logo: 'https://r5.readrate.com/img/pictures/basic/792/792600/7926007/w800h317-76be96b9.jpg',\r\n    },\r\n    {\r\n        count: 6,\r\n        description: '“Pragmatic programmer. The path from apprentice to master” will tell you everything a person needs to know, starting his way in the field of IT projects. Almost a cult book. You will learn how to deal with software shortcomings, how to create a dynamic, effective and adaptable program, how to form a successful team of programmers.',\r\n        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a0',\r\n        price: 10,\r\n        title: 'Pragmatic programmer. The path from apprentice to master. Andrew Hunt, David Thomas',\r\n        logo: 'https://r2.readrate.com/img/pictures/basic/792/792600/7926008/w800h317-89405d1d.jpg',\r\n    },\r\n    {\r\n        count: 7,\r\n        description: \"Perfect code. Master-class - an updated edition of the time-tested bestseller. A book that makes you think and helps you create the perfect code. And it doesn't matter if you are a beginner or a pro, in this publication you will definitely find information for growth and work on your project.\",\r\n        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a2',\r\n        price: 23,\r\n        title: 'Perfect code. Master Class. Steve McConnell',\r\n        logo: 'https://r5.readrate.com/img/pictures/basic/792/792600/7926009/w800h317-da60182f.jpg',\r\n    },\r\n    {\r\n        count: 12,\r\n        description: 'The book “At the peak. How to maintain maximum efficiency without burnout \"is especially necessary for programmers who are accustomed to plunge headlong into work, not keeping track of time and waste of resources such as strength and health. ',\r\n        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1',\r\n        price: 15,\r\n        title: 'At the peak. How to maintain maximum efficiency without burnout. Brad Stahlberg, Steve Magness',\r\n        logo: 'https://r2.readrate.com/img/pictures/basic/792/792601/7926010/w800h317-04d81319.jpg',\r\n    },\r\n    {\r\n        count: 7,\r\n        description: \"This book is interesting to read for both a beginner and an experienced programmer. The authors clearly and humorously talk about the fact that programming is in many ways communication. Programming style, naming, commenting, working with someone else's code - often agreements develop exactly where there is strict regulation at the programming language level.\",\r\n        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a2',\r\n        price: 23,\r\n        title: 'Programming without fools. Katrin Passig, Johannes Jander',\r\n        logo: 'https://r2.readrate.com/img/pictures/basic/792/792601/7926014/w800h317-a1bf3137.jpg',\r\n    },\r\n    {\r\n        count: 8,\r\n        description: 'Updated anniversary edition of the legendary book \"Design Patterns\". Many programming problems tend to be repetitive and duplicative. Developers around the world are solving completely identical problems and finding similar solutions. If you don\\'t want to reinvent the wheel, use the ready-made design patterns that this book is about to work with.',\r\n        id: '7567ec4b-b10c-48c5-9345-fc73348a80a1',\r\n        price: 15,\r\n        title: 'Head First. Design patterns. Eric Freeman, Elizabeth Freeman',\r\n        logo: 'https://r5.readrate.com/img/pictures/basic/792/792601/7926015/w800h317-8f4d4f25.jpg',\r\n    },\r\n    {\r\n        count: 2,\r\n        description: \"Can you easily change the code and get immediate feedback on the changes you make? How clear is this code? If you come across legacy code, Michael K. Feathers's book on working with it comes in handy.\\n\\nIn the book Effectively Working with Legacy Code, you will find information about mechanisms for making changes to software, porting legacy code to testing tools, writing tests that prevent new errors from being introduced into the code, and applying methods suitable for any language or platform. sample code in Java, C ++, C, and C #. In addition, you will learn how to pinpoint where changes need to be made in your code, how to work with legacy code that is not object-oriented, and much more.\",\r\n        id: '7567ec4b-b10c-48c5-9445-fc73c48a80a2',\r\n        price: 23,\r\n        title: 'Effective work with legacy code. Michael K. Feathers',\r\n        logo: 'https://r2.readrate.com/img/pictures/basic/792/792600/7926006/w800h317-535b11eb.jpg',\r\n    },\r\n    {\r\n        count: 3,\r\n        description: 'This publication is a collection of useful tips, many of which can only be formulated on our own experience after many years of work in the industry. There is no description of specific technologies, algorithms and programming languages - this is not the value of the Fanatic Programmer. The book will tell you how to overcome lack of motivation, choose the right priorities, understand the psychology of programming, build relationships with management and colleagues, etc.',\r\n        id: '7567ec4b-b10c-45c5-9345-fc73c48a80a1',\r\n        price: 15,\r\n        title: 'Fanatic programmer. Chad Fowler',\r\n        logo: 'https://r5.readrate.com/img/pictures/basic/792/792601/7926011/w800h317-16272c40.jpg',\r\n    },\r\n];\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJvZHVjdHNMaXN0LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Byb2R1Y3RzTGlzdC50cz83YzJjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9kdWN0c01vY2sgPSBbXHJcbiAge1xyXG4gICAgY291bnQ6IDQsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0ltcHJvdmluZyB0aGUgRGVzaWduIG9mIEV4aXN0aW5nIENvZGUg4oCdc2hlZCBsaWdodCBvbiB0aGUgcmVmYWN0b3JpbmcgcHJvY2VzcywgZGVzY3JpYmluZyB0aGUgcHJpbmNpcGxlcyBhbmQgYmVzdCBwcmFjdGljZXMgZm9yIGl0cyBpbXBsZW1lbnRhdGlvbi4nLFxyXG4gICAgaWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTM0NS1mYzczYzQ4YTgwYWEnLFxyXG4gICAgcHJpY2U6IDIuNCxcclxuICAgIHRpdGxlOiAnUmVmYWN0b3JpbmcgYnkgTS4gRm93bGVyJyxcclxuICAgIGxvZ286ICdodHRwczovL3I1LnJlYWRyYXRlLmNvbS9pbWcvcGljdHVyZXMvYmFzaWMvNzkyLzc5MjYwMC83OTI2MDA3L3c4MDBoMzE3LTc2YmU5NmI5LmpwZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb3VudDogNixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAn4oCcUHJhZ21hdGljIHByb2dyYW1tZXIuIFRoZSBwYXRoIGZyb20gYXBwcmVudGljZSB0byBtYXN0ZXLigJ0gd2lsbCB0ZWxsIHlvdSBldmVyeXRoaW5nIGEgcGVyc29uIG5lZWRzIHRvIGtub3csIHN0YXJ0aW5nIGhpcyB3YXkgaW4gdGhlIGZpZWxkIG9mIElUIHByb2plY3RzLiBBbG1vc3QgYSBjdWx0IGJvb2suIFlvdSB3aWxsIGxlYXJuIGhvdyB0byBkZWFsIHdpdGggc29mdHdhcmUgc2hvcnRjb21pbmdzLCBob3cgdG8gY3JlYXRlIGEgZHluYW1pYywgZWZmZWN0aXZlIGFuZCBhZGFwdGFibGUgcHJvZ3JhbSwgaG93IHRvIGZvcm0gYSBzdWNjZXNzZnVsIHRlYW0gb2YgcHJvZ3JhbW1lcnMuJyxcclxuICAgIGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3M2M0OGE4MGEwJyxcclxuICAgIHByaWNlOiAxMCxcclxuICAgIHRpdGxlOiAnUHJhZ21hdGljIHByb2dyYW1tZXIuIFRoZSBwYXRoIGZyb20gYXBwcmVudGljZSB0byBtYXN0ZXIuIEFuZHJldyBIdW50LCBEYXZpZCBUaG9tYXMnLFxyXG4gICAgbG9nbzogJ2h0dHBzOi8vcjIucmVhZHJhdGUuY29tL2ltZy9waWN0dXJlcy9iYXNpYy83OTIvNzkyNjAwLzc5MjYwMDgvdzgwMGgzMTctODk0MDVkMWQuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGNvdW50OiA3LFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUGVyZmVjdCBjb2RlLiBNYXN0ZXItY2xhc3MgLSBhbiB1cGRhdGVkIGVkaXRpb24gb2YgdGhlIHRpbWUtdGVzdGVkIGJlc3RzZWxsZXIuIEEgYm9vayB0aGF0IG1ha2VzIHlvdSB0aGluayBhbmQgaGVscHMgeW91IGNyZWF0ZSB0aGUgcGVyZmVjdCBjb2RlLiBBbmQgaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGFyZSBhIGJlZ2lubmVyIG9yIGEgcHJvLCBpbiB0aGlzIHB1YmxpY2F0aW9uIHlvdSB3aWxsIGRlZmluaXRlbHkgZmluZCBpbmZvcm1hdGlvbiBmb3IgZ3Jvd3RoIGFuZCB3b3JrIG9uIHlvdXIgcHJvamVjdC5cIixcclxuICAgIGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3M2M0OGE4MGEyJyxcclxuICAgIHByaWNlOiAyMyxcclxuICAgIHRpdGxlOiAnUGVyZmVjdCBjb2RlLiBNYXN0ZXIgQ2xhc3MuIFN0ZXZlIE1jQ29ubmVsbCcsXHJcbiAgICBsb2dvOiAnaHR0cHM6Ly9yNS5yZWFkcmF0ZS5jb20vaW1nL3BpY3R1cmVzL2Jhc2ljLzc5Mi83OTI2MDAvNzkyNjAwOS93ODAwaDMxNy1kYTYwMTgyZi5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY291bnQ6IDEyLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdUaGUgYm9vayDigJxBdCB0aGUgcGVhay4gSG93IHRvIG1haW50YWluIG1heGltdW0gZWZmaWNpZW5jeSB3aXRob3V0IGJ1cm5vdXQgXCJpcyBlc3BlY2lhbGx5IG5lY2Vzc2FyeSBmb3IgcHJvZ3JhbW1lcnMgd2hvIGFyZSBhY2N1c3RvbWVkIHRvIHBsdW5nZSBoZWFkbG9uZyBpbnRvIHdvcmssIG5vdCBrZWVwaW5nIHRyYWNrIG9mIHRpbWUgYW5kIHdhc3RlIG9mIHJlc291cmNlcyBzdWNoIGFzIHN0cmVuZ3RoIGFuZCBoZWFsdGguICcsXHJcbiAgICBpZDogJzc1NjdlYzRiLWIxMGMtNDhjNS05MzQ1LWZjNzNjNDhhODBhMScsXHJcbiAgICBwcmljZTogMTUsXHJcbiAgICB0aXRsZTogJ0F0IHRoZSBwZWFrLiBIb3cgdG8gbWFpbnRhaW4gbWF4aW11bSBlZmZpY2llbmN5IHdpdGhvdXQgYnVybm91dC4gQnJhZCBTdGFobGJlcmcsIFN0ZXZlIE1hZ25lc3MnLFxyXG4gICAgbG9nbzogJ2h0dHBzOi8vcjIucmVhZHJhdGUuY29tL2ltZy9waWN0dXJlcy9iYXNpYy83OTIvNzkyNjAxLzc5MjYwMTAvdzgwMGgzMTctMDRkODEzMTkuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGNvdW50OiA3LFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGhpcyBib29rIGlzIGludGVyZXN0aW5nIHRvIHJlYWQgZm9yIGJvdGggYSBiZWdpbm5lciBhbmQgYW4gZXhwZXJpZW5jZWQgcHJvZ3JhbW1lci4gVGhlIGF1dGhvcnMgY2xlYXJseSBhbmQgaHVtb3JvdXNseSB0YWxrIGFib3V0IHRoZSBmYWN0IHRoYXQgcHJvZ3JhbW1pbmcgaXMgaW4gbWFueSB3YXlzIGNvbW11bmljYXRpb24uIFByb2dyYW1taW5nIHN0eWxlLCBuYW1pbmcsIGNvbW1lbnRpbmcsIHdvcmtpbmcgd2l0aCBzb21lb25lIGVsc2UncyBjb2RlIC0gb2Z0ZW4gYWdyZWVtZW50cyBkZXZlbG9wIGV4YWN0bHkgd2hlcmUgdGhlcmUgaXMgc3RyaWN0IHJlZ3VsYXRpb24gYXQgdGhlIHByb2dyYW1taW5nIGxhbmd1YWdlIGxldmVsLlwiLFxyXG4gICAgaWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTM0NS1mYzczYzQ4YTgwYTInLFxyXG4gICAgcHJpY2U6IDIzLFxyXG4gICAgdGl0bGU6ICdQcm9ncmFtbWluZyB3aXRob3V0IGZvb2xzLiBLYXRyaW4gUGFzc2lnLCBKb2hhbm5lcyBKYW5kZXInLFxyXG4gICAgbG9nbzogJ2h0dHBzOi8vcjIucmVhZHJhdGUuY29tL2ltZy9waWN0dXJlcy9iYXNpYy83OTIvNzkyNjAxLzc5MjYwMTQvdzgwMGgzMTctYTFiZjMxMzcuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGNvdW50OiA4LFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdVcGRhdGVkIGFubml2ZXJzYXJ5IGVkaXRpb24gb2YgdGhlIGxlZ2VuZGFyeSBib29rIFwiRGVzaWduIFBhdHRlcm5zXCIuIE1hbnkgcHJvZ3JhbW1pbmcgcHJvYmxlbXMgdGVuZCB0byBiZSByZXBldGl0aXZlIGFuZCBkdXBsaWNhdGl2ZS4gRGV2ZWxvcGVycyBhcm91bmQgdGhlIHdvcmxkIGFyZSBzb2x2aW5nIGNvbXBsZXRlbHkgaWRlbnRpY2FsIHByb2JsZW1zIGFuZCBmaW5kaW5nIHNpbWlsYXIgc29sdXRpb25zLiBJZiB5b3UgZG9uXFwndCB3YW50IHRvIHJlaW52ZW50IHRoZSB3aGVlbCwgdXNlIHRoZSByZWFkeS1tYWRlIGRlc2lnbiBwYXR0ZXJucyB0aGF0IHRoaXMgYm9vayBpcyBhYm91dCB0byB3b3JrIHdpdGguJyxcclxuICAgIGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3MzM0OGE4MGExJyxcclxuICAgIHByaWNlOiAxNSxcclxuICAgIHRpdGxlOiAnSGVhZCBGaXJzdC4gRGVzaWduIHBhdHRlcm5zLiBFcmljIEZyZWVtYW4sIEVsaXphYmV0aCBGcmVlbWFuJyxcclxuICAgIGxvZ286ICdodHRwczovL3I1LnJlYWRyYXRlLmNvbS9pbWcvcGljdHVyZXMvYmFzaWMvNzkyLzc5MjYwMS83OTI2MDE1L3c4MDBoMzE3LThmNGQ0ZjI1LmpwZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb3VudDogMixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkNhbiB5b3UgZWFzaWx5IGNoYW5nZSB0aGUgY29kZSBhbmQgZ2V0IGltbWVkaWF0ZSBmZWVkYmFjayBvbiB0aGUgY2hhbmdlcyB5b3UgbWFrZT8gSG93IGNsZWFyIGlzIHRoaXMgY29kZT8gSWYgeW91IGNvbWUgYWNyb3NzIGxlZ2FjeSBjb2RlLCBNaWNoYWVsIEsuIEZlYXRoZXJzJ3MgYm9vayBvbiB3b3JraW5nIHdpdGggaXQgY29tZXMgaW4gaGFuZHkuXFxuXFxuSW4gdGhlIGJvb2sgRWZmZWN0aXZlbHkgV29ya2luZyB3aXRoIExlZ2FjeSBDb2RlLCB5b3Ugd2lsbCBmaW5kIGluZm9ybWF0aW9uIGFib3V0IG1lY2hhbmlzbXMgZm9yIG1ha2luZyBjaGFuZ2VzIHRvIHNvZnR3YXJlLCBwb3J0aW5nIGxlZ2FjeSBjb2RlIHRvIHRlc3RpbmcgdG9vbHMsIHdyaXRpbmcgdGVzdHMgdGhhdCBwcmV2ZW50IG5ldyBlcnJvcnMgZnJvbSBiZWluZyBpbnRyb2R1Y2VkIGludG8gdGhlIGNvZGUsIGFuZCBhcHBseWluZyBtZXRob2RzIHN1aXRhYmxlIGZvciBhbnkgbGFuZ3VhZ2Ugb3IgcGxhdGZvcm0uIHNhbXBsZSBjb2RlIGluIEphdmEsIEMgKyssIEMsIGFuZCBDICMuIEluIGFkZGl0aW9uLCB5b3Ugd2lsbCBsZWFybiBob3cgdG8gcGlucG9pbnQgd2hlcmUgY2hhbmdlcyBuZWVkIHRvIGJlIG1hZGUgaW4geW91ciBjb2RlLCBob3cgdG8gd29yayB3aXRoIGxlZ2FjeSBjb2RlIHRoYXQgaXMgbm90IG9iamVjdC1vcmllbnRlZCwgYW5kIG11Y2ggbW9yZS5cIixcclxuICAgIGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTk0NDUtZmM3M2M0OGE4MGEyJyxcclxuICAgIHByaWNlOiAyMyxcclxuICAgIHRpdGxlOiAnRWZmZWN0aXZlIHdvcmsgd2l0aCBsZWdhY3kgY29kZS4gTWljaGFlbCBLLiBGZWF0aGVycycsXHJcbiAgICBsb2dvOiAnaHR0cHM6Ly9yMi5yZWFkcmF0ZS5jb20vaW1nL3BpY3R1cmVzL2Jhc2ljLzc5Mi83OTI2MDAvNzkyNjAwNi93ODAwaDMxNy01MzViMTFlYi5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY291bnQ6IDMsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1RoaXMgcHVibGljYXRpb24gaXMgYSBjb2xsZWN0aW9uIG9mIHVzZWZ1bCB0aXBzLCBtYW55IG9mIHdoaWNoIGNhbiBvbmx5IGJlIGZvcm11bGF0ZWQgb24gb3VyIG93biBleHBlcmllbmNlIGFmdGVyIG1hbnkgeWVhcnMgb2Ygd29yayBpbiB0aGUgaW5kdXN0cnkuIFRoZXJlIGlzIG5vIGRlc2NyaXB0aW9uIG9mIHNwZWNpZmljIHRlY2hub2xvZ2llcywgYWxnb3JpdGhtcyBhbmQgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzIC0gdGhpcyBpcyBub3QgdGhlIHZhbHVlIG9mIHRoZSBGYW5hdGljIFByb2dyYW1tZXIuIFRoZSBib29rIHdpbGwgdGVsbCB5b3UgaG93IHRvIG92ZXJjb21lIGxhY2sgb2YgbW90aXZhdGlvbiwgY2hvb3NlIHRoZSByaWdodCBwcmlvcml0aWVzLCB1bmRlcnN0YW5kIHRoZSBwc3ljaG9sb2d5IG9mIHByb2dyYW1taW5nLCBidWlsZCByZWxhdGlvbnNoaXBzIHdpdGggbWFuYWdlbWVudCBhbmQgY29sbGVhZ3VlcywgZXRjLicsXHJcbiAgICBpZDogJzc1NjdlYzRiLWIxMGMtNDVjNS05MzQ1LWZjNzNjNDhhODBhMScsXHJcbiAgICBwcmljZTogMTUsXHJcbiAgICB0aXRsZTogJ0ZhbmF0aWMgcHJvZ3JhbW1lci4gQ2hhZCBGb3dsZXInLFxyXG4gICAgbG9nbzogJ2h0dHBzOi8vcjUucmVhZHJhdGUuY29tL2ltZy9waWN0dXJlcy9iYXNpYy83OTIvNzkyNjAxLzc5MjYwMTEvdzgwMGgzMTctMTYyNzJjNDAuanBnJyxcclxuICB9LFxyXG5dIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/productsList.ts\n");

/***/ }),

/***/ "./src/utils/apiResponseBuilder.ts":
/*!*****************************************!*\
  !*** ./src/utils/apiResponseBuilder.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.successResponse = exports.errorResponse = void 0;\r\nconst winstonLogger_1 = __webpack_require__(/*! ./winstonLogger */ \"./src/utils/winstonLogger.ts\");\r\nconst defaultHeaders = {\r\n    'Access-Control-Allow-Methods': '*',\r\n    'Access-Control-Allow-Headers': '*',\r\n    'Access-Control-Allow-Origin': '*'\r\n};\r\nconst errorResponse = (err, statusCode = 500) => {\r\n    winstonLogger_1.winstonLogger.logError(`Error: ${err.message}`);\r\n    return {\r\n        statusCode,\r\n        headers: Object.assign({}, defaultHeaders),\r\n        body: JSON.stringify({ message: err.message || 'Something went wrong !!!' })\r\n    };\r\n};\r\nexports.errorResponse = errorResponse;\r\nconst successResponse = (body, statusCode = 200) => {\r\n    winstonLogger_1.winstonLogger.logRequest(`Lambda successfully invoked and finished`);\r\n    return {\r\n        statusCode,\r\n        headers: Object.assign({}, defaultHeaders),\r\n        body: JSON.stringify(body)\r\n    };\r\n};\r\nexports.successResponse = successResponse;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpUmVzcG9uc2VCdWlsZGVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2FwaVJlc3BvbnNlQnVpbGRlci50cz80NTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7d2luc3RvbkxvZ2dlcn0gZnJvbSBcIi4vd2luc3RvbkxvZ2dlclwiO1xyXG5cclxuaW50ZXJmYWNlIFJlc3BvbnNlSW50ZXJmYWNlIHtcclxuICAgIHN0YXR1c0NvZGU6IG51bWJlclxyXG4gICAgaGVhZGVyczogT2JqZWN0LFxyXG4gICAgYm9keTogT2JqZWN0XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRIZWFkZXJzID0ge1xyXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnKicsXHJcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICcqJyxcclxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcclxufTtcclxuXHJcbmNvbnN0IGVycm9yUmVzcG9uc2UgPSAoIGVycjogRXJyb3IsIHN0YXR1c0NvZGU6IG51bWJlciA9IDUwMCApOiBSZXNwb25zZUludGVyZmFjZSA9PiB7XHJcbiAgICB3aW5zdG9uTG9nZ2VyLmxvZ0Vycm9yKCBgRXJyb3I6ICR7IGVyci5tZXNzYWdlICB9YCApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzQ29kZSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIC4uLmRlZmF1bHRIZWFkZXJzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSggeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmcgISEhJyB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdWNjZXNzUmVzcG9uc2UgPSAoIGJvZHk6IE9iamVjdCwgc3RhdHVzQ29kZTogbnVtYmVyID0gMjAwICk6IFJlc3BvbnNlSW50ZXJmYWNlID0+IHtcclxuICAgIHdpbnN0b25Mb2dnZXIubG9nUmVxdWVzdCggYExhbWJkYSBzdWNjZXNzZnVsbHkgaW52b2tlZCBhbmQgZmluaXNoZWRgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGF0dXNDb2RlLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgLi4uZGVmYXVsdEhlYWRlcnNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCBib2R5IClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZXJyb3JSZXNwb25zZSwgc3VjY2Vzc1Jlc3BvbnNlLCBSZXNwb25zZUludGVyZmFjZSB9O1xyXG4iXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFjQTtBQVpBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/apiResponseBuilder.ts\n");

/***/ }),

/***/ "./src/utils/winstonLogger.ts":
/*!************************************!*\
  !*** ./src/utils/winstonLogger.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.winstonLogger = void 0;\r\nconst winston_1 = __importDefault(__webpack_require__(/*! winston */ \"winston\"));\r\nclass WinstonLogger {\r\n    constructor() {\r\n        this.format = winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.timestamp(), winston_1.default.format.align(), winston_1.default.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`));\r\n        this.logger = winston_1.default.createLogger({\r\n            level: process.env.ENV_STAGE === 'prod' ? 'error' : 'info',\r\n            transports: [\r\n                new winston_1.default.transports.Console({\r\n                    format: this.format\r\n                })\r\n            ]\r\n        });\r\n    }\r\n    logRequest(message) {\r\n        this.logger.info(message);\r\n    }\r\n    logError(message) {\r\n        this.logger.error(message);\r\n    }\r\n}\r\nconst winstonLogger = new WinstonLogger();\r\nexports.winstonLogger = winstonLogger;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvd2luc3RvbkxvZ2dlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy93aW5zdG9uTG9nZ2VyLnRzPzc3YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XHJcblxyXG5pbnRlcmZhY2UgTG9nZ2VySW50ZXJmYWNlIHtcclxuICAgIGxvZ1JlcXVlc3Q6ICggbWVzc2FnZTogc3RyaW5nICkgPT4gdm9pZFxyXG4gICAgbG9nRXJyb3I6ICggbWVzc2FnZTogc3RyaW5nICkgPT4gdm9pZFxyXG59XHJcblxyXG5jbGFzcyBXaW5zdG9uTG9nZ2VyIGltcGxlbWVudHMgTG9nZ2VySW50ZXJmYWNlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyOiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvcm1hdDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gd2luc3Rvbi5mb3JtYXQuY29tYmluZShcclxuICAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuY29sb3JpemUoKSxcclxuICAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgIHdpbnN0b24uZm9ybWF0LmFsaWduKCksXHJcbiAgICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnByaW50ZihpbmZvID0+IGAke2luZm8udGltZXN0YW1wfSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xyXG4gICAgICAgICAgICBsZXZlbDogcHJvY2Vzcy5lbnYuRU5WX1NUQUdFID09PSAncHJvZCcgPyAnZXJyb3InIDogJ2luZm8nLFxyXG4gICAgICAgICAgICB0cmFuc3BvcnRzOiBbXHJcbiAgICAgICAgICAgICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvZ1JlcXVlc3QoIG1lc3NhZ2U6IHN0cmluZyApe1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oIG1lc3NhZ2UgKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dFcnJvciggbWVzc2FnZTogc3RyaW5nICl7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoIG1lc3NhZ2UgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgd2luc3RvbkxvZ2dlciA9IG5ldyBXaW5zdG9uTG9nZ2VyKCk7XHJcblxyXG5leHBvcnQgeyB3aW5zdG9uTG9nZ2VyIH07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFPQTtBQUlBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/winstonLogger.ts\n");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luc3Rvbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIndpbnN0b25cIj83OTdjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndpbnN0b25cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///winston\n");

/***/ })

/******/ })));