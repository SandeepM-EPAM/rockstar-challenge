"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users/authenticate";
exports.ids = ["pages/api/users/authenticate"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./helpers/api/api-handler.js":
/*!************************************!*\
  !*** ./helpers/api/api-handler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiHandler\": () => (/* binding */ apiHandler)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ \"(api)/./helpers/api/index.js\");\n\n\nfunction apiHandler(handler) {\n    return async (req, res)=>{\n        const method = req.method.toLowerCase();\n        // check handler supports HTTP method\n        if (!handler[method]) return res.status(405).end(`Method ${req.method} Not Allowed`);\n        try {\n            // global middleware\n            await (0,_api__WEBPACK_IMPORTED_MODULE_0__.jwtMiddleware)(req, res);\n            // route handler\n            await handler[method](req, res);\n        } catch (err) {\n            // global error handler\n            (0,_api__WEBPACK_IMPORTED_MODULE_0__.errorHandler)(err, res);\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS9hcGktaGFuZGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxRDtBQUUvQjtBQUV0QixTQUFTRSxVQUFVLENBQUNDLE9BQU8sRUFBRTtJQUN6QixPQUFPLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO1FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRSxNQUFNLENBQUNDLFdBQVcsRUFBRTtRQUV2QyxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDSixPQUFPLENBQUNHLE1BQU0sQ0FBQyxFQUNoQixPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFTCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRW5FLElBQUk7WUFDQSxvQkFBb0I7WUFDcEIsTUFBTUwsbURBQWEsQ0FBQ0csR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztZQUU5QixnQkFBZ0I7WUFDaEIsTUFBTUYsT0FBTyxDQUFDRyxNQUFNLENBQUMsQ0FBQ0YsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztTQUNuQyxDQUFDLE9BQU9LLEdBQUcsRUFBRTtZQUNWLHVCQUF1QjtZQUN2QlYsa0RBQVksQ0FBQ1UsR0FBRyxFQUFFTCxHQUFHLENBQUMsQ0FBQztTQUMxQjtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2FwaS9hcGktaGFuZGxlci5qcz8yNzE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVycm9ySGFuZGxlciwgand0TWlkZGxld2FyZSB9IGZyb20gJy4uL2FwaSc7XG5cbmV4cG9ydCB7IGFwaUhhbmRsZXIgfTtcblxuZnVuY3Rpb24gYXBpSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBtZXRob2QgPSByZXEubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gY2hlY2sgaGFuZGxlciBzdXBwb3J0cyBIVFRQIG1ldGhvZFxuICAgICAgICBpZiAoIWhhbmRsZXJbbWV0aG9kXSlcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBnbG9iYWwgbWlkZGxld2FyZVxuICAgICAgICAgICAgYXdhaXQgand0TWlkZGxld2FyZShyZXEsIHJlcyk7XG5cbiAgICAgICAgICAgIC8vIHJvdXRlIGhhbmRsZXJcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZXJbbWV0aG9kXShyZXEsIHJlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gZ2xvYmFsIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihlcnIsIHJlcyk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbImVycm9ySGFuZGxlciIsImp3dE1pZGRsZXdhcmUiLCJhcGlIYW5kbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvTG93ZXJDYXNlIiwic3RhdHVzIiwiZW5kIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./helpers/api/api-handler.js\n");

/***/ }),

/***/ "(api)/./helpers/api/error-handler.js":
/*!**************************************!*\
  !*** ./helpers/api/error-handler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorHandler\": () => (/* binding */ errorHandler)\n/* harmony export */ });\n\nfunction errorHandler(err, res) {\n    if (typeof err === \"string\") {\n        // custom application error\n        const is404 = err.toLowerCase().endsWith(\"not found\");\n        const statusCode = is404 ? 404 : 400;\n        return res.status(statusCode).json({\n            message: err\n        });\n    }\n    if (err.name === \"UnauthorizedError\") {\n        // jwt authentication error\n        return res.status(401).json({\n            message: \"Invalid Token\"\n        });\n    }\n    // default to 500 server error\n    console.error(err);\n    return res.status(500).json({\n        message: err.message\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS9lcnJvci1oYW5kbGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBd0I7QUFFeEIsU0FBU0EsWUFBWSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QixJQUFJLE9BQVFELEdBQUcsS0FBTSxRQUFRLEVBQUU7UUFDM0IsMkJBQTJCO1FBQzNCLE1BQU1FLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxXQUFXLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNyRCxNQUFNQyxVQUFVLEdBQUdILEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRztRQUNwQyxPQUFPRCxHQUFHLENBQUNLLE1BQU0sQ0FBQ0QsVUFBVSxDQUFDLENBQUNFLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUVSLEdBQUc7U0FBRSxDQUFDLENBQUM7S0FDeEQ7SUFFRCxJQUFJQSxHQUFHLENBQUNTLElBQUksS0FBSyxtQkFBbUIsRUFBRTtRQUNsQywyQkFBMkI7UUFDM0IsT0FBT1IsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsZUFBZTtTQUFFLENBQUMsQ0FBQztLQUM3RDtJQUVELDhCQUE4QjtJQUM5QkUsT0FBTyxDQUFDQyxLQUFLLENBQUNYLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLE9BQU9DLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFUixHQUFHLENBQUNRLE9BQU87S0FBRSxDQUFDLENBQUM7Q0FDekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2FwaS9lcnJvci1oYW5kbGVyLmpzPzcxMTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZXJyb3JIYW5kbGVyIH07XG5cbmZ1bmN0aW9uIGVycm9ySGFuZGxlcihlcnIsIHJlcykge1xuICAgIGlmICh0eXBlb2YgKGVycikgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIGN1c3RvbSBhcHBsaWNhdGlvbiBlcnJvclxuICAgICAgICBjb25zdCBpczQwNCA9IGVyci50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCdub3QgZm91bmQnKTtcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IGlzNDA0ID8gNDA0IDogNDAwO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhzdGF0dXNDb2RlKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICAgIH1cblxuICAgIGlmIChlcnIubmFtZSA9PT0gJ1VuYXV0aG9yaXplZEVycm9yJykge1xuICAgICAgICAvLyBqd3QgYXV0aGVudGljYXRpb24gZXJyb3JcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgVG9rZW4nIH0pO1xuICAgIH1cblxuICAgIC8vIGRlZmF1bHQgdG8gNTAwIHNlcnZlciBlcnJvclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbn0iXSwibmFtZXMiOlsiZXJyb3JIYW5kbGVyIiwiZXJyIiwicmVzIiwiaXM0MDQiLCJ0b0xvd2VyQ2FzZSIsImVuZHNXaXRoIiwic3RhdHVzQ29kZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibmFtZSIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./helpers/api/error-handler.js\n");

/***/ }),

/***/ "(api)/./helpers/api/index.js":
/*!******************************!*\
  !*** ./helpers/api/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-handler */ \"(api)/./helpers/api/api-handler.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _api_handler__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _api_handler__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler */ \"(api)/./helpers/api/error-handler.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _error_handler__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _error_handler__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _jwt_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt-middleware */ \"(api)/./helpers/api/jwt-middleware.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _jwt_middleware__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _jwt_middleware__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./omit */ \"(api)/./helpers/api/omit.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _omit__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _omit__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _users_repo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-repo */ \"(api)/./helpers/api/users-repo.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _users_repo__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _users_repo__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDRTtBQUNDO0FBQ1Y7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hlbHBlcnMvYXBpL2luZGV4LmpzPzA5N2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hcGktaGFuZGxlcic7XG5leHBvcnQgKiBmcm9tICcuL2Vycm9yLWhhbmRsZXInO1xuZXhwb3J0ICogZnJvbSAnLi9qd3QtbWlkZGxld2FyZSc7XG5leHBvcnQgKiBmcm9tICcuL29taXQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2Vycy1yZXBvJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./helpers/api/index.js\n");

/***/ }),

/***/ "(api)/./helpers/api/jwt-middleware.js":
/*!***************************************!*\
  !*** ./helpers/api/jwt-middleware.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jwtMiddleware\": () => (/* binding */ jwtMiddleware)\n/* harmony export */ });\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);\nconst expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\nconst util = __webpack_require__(/*! util */ \"util\");\n\nconst { serverRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();\n\nfunction jwtMiddleware(req, res) {\n    const secret = \"THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING\";\n    const middleware = expressJwt({\n        secret: secret,\n        algorithms: [\n            \"HS256\"\n        ]\n    }).unless({\n        path: [\n            // public routes that don't require authentication\n            \"/api/users/register\",\n            \"/api/users/authenticate\"\n        ]\n    });\n    return util.promisify(middleware)(req, res);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS9qd3QtbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsZ0NBQWEsQ0FBQztBQUN6QyxNQUFNQyxJQUFJLEdBQUdELG1CQUFPLENBQUMsa0JBQU0sQ0FBQztBQUNRO0FBRXBDLE1BQU0sRUFBRUcsbUJBQW1CLEdBQUUsR0FBR0Qsa0RBQVMsRUFBRTtBQUVsQjtBQUV6QixTQUFTRSxhQUFhLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdCLE1BQU1DLE1BQU0sR0FBRyxtR0FBbUc7SUFDbEgsTUFBTUMsVUFBVSxHQUFHVCxVQUFVLENBQUM7UUFBRVEsTUFBTSxFQUFFQSxNQUFNO1FBQUVFLFVBQVUsRUFBRTtZQUFDLE9BQU87U0FBQztLQUFFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDO1FBQzVFQyxJQUFJLEVBQUU7WUFDRixrREFBa0Q7WUFDbEQscUJBQXFCO1lBQ3JCLHlCQUF5QjtTQUM1QjtLQUNKLENBQUM7SUFFRixPQUFPVixJQUFJLENBQUNXLFNBQVMsQ0FBQ0osVUFBVSxDQUFDLENBQUNILEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7Q0FDL0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2FwaS9qd3QtbWlkZGxld2FyZS5qcz8xODdmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3NKd3QgPSByZXF1aXJlKCdleHByZXNzLWp3dCcpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuXG5jb25zdCB7IHNlcnZlclJ1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xuXG5leHBvcnQgeyBqd3RNaWRkbGV3YXJlIH07XG5cbmZ1bmN0aW9uIGp3dE1pZGRsZXdhcmUocmVxLCByZXMpIHtcbiAgICBjb25zdCBzZWNyZXQgPSAnVEhJUyBJUyBVU0VEIFRPIFNJR04gQU5EIFZFUklGWSBKV1QgVE9LRU5TLCBSRVBMQUNFIElUIFdJVEggWU9VUiBPV04gU0VDUkVULCBJVCBDQU4gQkUgQU5ZIFNUUklORyc7XG4gICAgY29uc3QgbWlkZGxld2FyZSA9IGV4cHJlc3NKd3QoeyBzZWNyZXQ6IHNlY3JldCwgYWxnb3JpdGhtczogWydIUzI1NiddIH0pLnVubGVzcyh7XG4gICAgICAgIHBhdGg6IFtcbiAgICAgICAgICAgIC8vIHB1YmxpYyByb3V0ZXMgdGhhdCBkb24ndCByZXF1aXJlIGF1dGhlbnRpY2F0aW9uXG4gICAgICAgICAgICAnL2FwaS91c2Vycy9yZWdpc3RlcicsXG4gICAgICAgICAgICAnL2FwaS91c2Vycy9hdXRoZW50aWNhdGUnXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHJldHVybiB1dGlsLnByb21pc2lmeShtaWRkbGV3YXJlKShyZXEsIHJlcyk7XG59Il0sIm5hbWVzIjpbImV4cHJlc3NKd3QiLCJyZXF1aXJlIiwidXRpbCIsImdldENvbmZpZyIsInNlcnZlclJ1bnRpbWVDb25maWciLCJqd3RNaWRkbGV3YXJlIiwicmVxIiwicmVzIiwic2VjcmV0IiwibWlkZGxld2FyZSIsImFsZ29yaXRobXMiLCJ1bmxlc3MiLCJwYXRoIiwicHJvbWlzaWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./helpers/api/jwt-middleware.js\n");

/***/ }),

/***/ "(api)/./helpers/api/omit.js":
/*!*****************************!*\
  !*** ./helpers/api/omit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"omit\": () => (/* binding */ omit)\n/* harmony export */ });\n\nfunction omit(obj, key) {\n    const { [key]: omitted , ...rest } = obj;\n    return rest;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS9vbWl0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZ0I7QUFFaEIsU0FBU0EsSUFBSSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNwQixNQUFNLEVBQUUsQ0FBQ0EsR0FBRyxDQUFDLEVBQUVDLE9BQU8sR0FBRSxHQUFHQyxJQUFJLEVBQUUsR0FBR0gsR0FBRztJQUN2QyxPQUFPRyxJQUFJLENBQUM7Q0FDZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hlbHBlcnMvYXBpL29taXQuanM/MWU3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBvbWl0IH07XG5cbmZ1bmN0aW9uIG9taXQob2JqLCBrZXkpIHtcbiAgICBjb25zdCB7IFtrZXldOiBvbWl0dGVkLCAuLi5yZXN0IH0gPSBvYmo7XG4gICAgcmV0dXJuIHJlc3Q7XG59Il0sIm5hbWVzIjpbIm9taXQiLCJvYmoiLCJrZXkiLCJvbWl0dGVkIiwicmVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./helpers/api/omit.js\n");

/***/ }),

/***/ "(api)/./helpers/api/users-repo.js":
/*!***********************************!*\
  !*** ./helpers/api/users-repo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usersRepo\": () => (/* binding */ usersRepo)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n// users in JSON file for simplicity, store in a db for production applications\nlet users = __webpack_require__(/*! ../../data/users.json */ \"(api)/./data/users.json\");\nconst usersRepo = {\n    getAll: ()=>users\n    ,\n    getById: (id)=>users.find((x)=>x.id.toString() === id.toString()\n        )\n    ,\n    find: (x)=>users.find(x)\n    ,\n    create,\n    update,\n    delete: _delete\n};\nfunction create(user) {\n    // generate new user id\n    user.id = users.length ? Math.max(...users.map((x)=>x.id\n    )) + 1 : 1;\n    // set date created and updated\n    user.dateCreated = new Date().toISOString();\n    user.dateUpdated = new Date().toISOString();\n    // add and save user\n    users.push(user);\n    saveData();\n}\nfunction update(id, params) {\n    const user = users.find((x)=>x.id.toString() === id.toString()\n    );\n    // set date updated\n    user.dateUpdated = new Date().toISOString();\n    // update and save\n    Object.assign(user, params);\n    saveData();\n}\n// prefixed with underscore '_' because 'delete' is a reserved word in javascript\nfunction _delete(id) {\n    // filter out deleted user and save\n    users = users.filter((x)=>x.id.toString() !== id.toString()\n    );\n    saveData();\n}\n// private helper functions\nfunction saveData() {\n    fs.writeFileSync(\"../../data/users.json\", JSON.stringify(users, null, 4));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2FwaS91c2Vycy1yZXBvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBSSxDQUFDO0FBRXhCLCtFQUErRTtBQUMvRSxJQUFJQyxLQUFLLEdBQUdELG1CQUFPLENBQUMsc0RBQXVCLENBQUM7QUFFckMsTUFBTUUsU0FBUyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUsSUFBTUYsS0FBSztJQUFBO0lBQ25CRyxPQUFPLEVBQUVDLENBQUFBLEVBQUUsR0FBSUosS0FBSyxDQUFDSyxJQUFJLENBQUNDLENBQUFBLENBQUMsR0FBSUEsQ0FBQyxDQUFDRixFQUFFLENBQUNHLFFBQVEsRUFBRSxLQUFLSCxFQUFFLENBQUNHLFFBQVEsRUFBRTtRQUFBLENBQUM7SUFBQTtJQUNqRUYsSUFBSSxFQUFFQyxDQUFBQSxDQUFDLEdBQUlOLEtBQUssQ0FBQ0ssSUFBSSxDQUFDQyxDQUFDLENBQUM7SUFBQTtJQUN4QkUsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLE1BQU0sRUFBRUMsT0FBTztDQUNsQixDQUFDO0FBRUYsU0FBU0gsTUFBTSxDQUFDSSxJQUFJLEVBQUU7SUFDbEIsdUJBQXVCO0lBQ3ZCQSxJQUFJLENBQUNSLEVBQUUsR0FBR0osS0FBSyxDQUFDYSxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxJQUFJZixLQUFLLENBQUNnQixHQUFHLENBQUNWLENBQUFBLENBQUMsR0FBSUEsQ0FBQyxDQUFDRixFQUFFO0lBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVuRSwrQkFBK0I7SUFDL0JRLElBQUksQ0FBQ0ssV0FBVyxHQUFHLElBQUlDLElBQUksRUFBRSxDQUFDQyxXQUFXLEVBQUUsQ0FBQztJQUM1Q1AsSUFBSSxDQUFDUSxXQUFXLEdBQUcsSUFBSUYsSUFBSSxFQUFFLENBQUNDLFdBQVcsRUFBRSxDQUFDO0lBRTVDLG9CQUFvQjtJQUNwQm5CLEtBQUssQ0FBQ3FCLElBQUksQ0FBQ1QsSUFBSSxDQUFDLENBQUM7SUFDakJVLFFBQVEsRUFBRSxDQUFDO0NBQ2Q7QUFFRCxTQUFTYixNQUFNLENBQUNMLEVBQUUsRUFBRW1CLE1BQU0sRUFBRTtJQUN4QixNQUFNWCxJQUFJLEdBQUdaLEtBQUssQ0FBQ0ssSUFBSSxDQUFDQyxDQUFBQSxDQUFDLEdBQUlBLENBQUMsQ0FBQ0YsRUFBRSxDQUFDRyxRQUFRLEVBQUUsS0FBS0gsRUFBRSxDQUFDRyxRQUFRLEVBQUU7SUFBQSxDQUFDO0lBRS9ELG1CQUFtQjtJQUNuQkssSUFBSSxDQUFDUSxXQUFXLEdBQUcsSUFBSUYsSUFBSSxFQUFFLENBQUNDLFdBQVcsRUFBRSxDQUFDO0lBRTVDLGtCQUFrQjtJQUNsQkssTUFBTSxDQUFDQyxNQUFNLENBQUNiLElBQUksRUFBRVcsTUFBTSxDQUFDLENBQUM7SUFDNUJELFFBQVEsRUFBRSxDQUFDO0NBQ2Q7QUFFRCxpRkFBaUY7QUFDakYsU0FBU1gsT0FBTyxDQUFDUCxFQUFFLEVBQUU7SUFDakIsbUNBQW1DO0lBQ25DSixLQUFLLEdBQUdBLEtBQUssQ0FBQzBCLE1BQU0sQ0FBQ3BCLENBQUFBLENBQUMsR0FBSUEsQ0FBQyxDQUFDRixFQUFFLENBQUNHLFFBQVEsRUFBRSxLQUFLSCxFQUFFLENBQUNHLFFBQVEsRUFBRTtJQUFBLENBQUMsQ0FBQztJQUM3RGUsUUFBUSxFQUFFLENBQUM7Q0FFZDtBQUVELDJCQUEyQjtBQUUzQixTQUFTQSxRQUFRLEdBQUc7SUFDaEJ4QixFQUFFLENBQUM2QixhQUFhLENBQUMsdUJBQXVCLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDN0IsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGVscGVycy9hcGkvdXNlcnMtcmVwby5qcz8xODc2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcblxuLy8gdXNlcnMgaW4gSlNPTiBmaWxlIGZvciBzaW1wbGljaXR5LCBzdG9yZSBpbiBhIGRiIGZvciBwcm9kdWN0aW9uIGFwcGxpY2F0aW9uc1xubGV0IHVzZXJzID0gcmVxdWlyZSgnLi4vLi4vZGF0YS91c2Vycy5qc29uJyk7XG5cbmV4cG9ydCBjb25zdCB1c2Vyc1JlcG8gPSB7XG4gICAgZ2V0QWxsOiAoKSA9PiB1c2VycyxcbiAgICBnZXRCeUlkOiBpZCA9PiB1c2Vycy5maW5kKHggPT4geC5pZC50b1N0cmluZygpID09PSBpZC50b1N0cmluZygpKSxcbiAgICBmaW5kOiB4ID0+IHVzZXJzLmZpbmQoeCksXG4gICAgY3JlYXRlLFxuICAgIHVwZGF0ZSxcbiAgICBkZWxldGU6IF9kZWxldGVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZSh1c2VyKSB7XG4gICAgLy8gZ2VuZXJhdGUgbmV3IHVzZXIgaWRcbiAgICB1c2VyLmlkID0gdXNlcnMubGVuZ3RoID8gTWF0aC5tYXgoLi4udXNlcnMubWFwKHggPT4geC5pZCkpICsgMSA6IDE7XG5cbiAgICAvLyBzZXQgZGF0ZSBjcmVhdGVkIGFuZCB1cGRhdGVkXG4gICAgdXNlci5kYXRlQ3JlYXRlZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICB1c2VyLmRhdGVVcGRhdGVkID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gICAgLy8gYWRkIGFuZCBzYXZlIHVzZXJcbiAgICB1c2Vycy5wdXNoKHVzZXIpO1xuICAgIHNhdmVEYXRhKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShpZCwgcGFyYW1zKSB7XG4gICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoeCA9PiB4LmlkLnRvU3RyaW5nKCkgPT09IGlkLnRvU3RyaW5nKCkpO1xuXG4gICAgLy8gc2V0IGRhdGUgdXBkYXRlZFxuICAgIHVzZXIuZGF0ZVVwZGF0ZWQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG5cbiAgICAvLyB1cGRhdGUgYW5kIHNhdmVcbiAgICBPYmplY3QuYXNzaWduKHVzZXIsIHBhcmFtcyk7XG4gICAgc2F2ZURhdGEoKTtcbn1cblxuLy8gcHJlZml4ZWQgd2l0aCB1bmRlcnNjb3JlICdfJyBiZWNhdXNlICdkZWxldGUnIGlzIGEgcmVzZXJ2ZWQgd29yZCBpbiBqYXZhc2NyaXB0XG5mdW5jdGlvbiBfZGVsZXRlKGlkKSB7XG4gICAgLy8gZmlsdGVyIG91dCBkZWxldGVkIHVzZXIgYW5kIHNhdmVcbiAgICB1c2VycyA9IHVzZXJzLmZpbHRlcih4ID0+IHguaWQudG9TdHJpbmcoKSAhPT0gaWQudG9TdHJpbmcoKSk7XG4gICAgc2F2ZURhdGEoKTtcbiAgICBcbn1cblxuLy8gcHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIHNhdmVEYXRhKCkge1xuICAgIGZzLndyaXRlRmlsZVN5bmMoJy4uLy4uL2RhdGEvdXNlcnMuanNvbicsIEpTT04uc3RyaW5naWZ5KHVzZXJzLCBudWxsLCA0KSk7XG59Il0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsInVzZXJzIiwidXNlcnNSZXBvIiwiZ2V0QWxsIiwiZ2V0QnlJZCIsImlkIiwiZmluZCIsIngiLCJ0b1N0cmluZyIsImNyZWF0ZSIsInVwZGF0ZSIsImRlbGV0ZSIsIl9kZWxldGUiLCJ1c2VyIiwibGVuZ3RoIiwiTWF0aCIsIm1heCIsIm1hcCIsImRhdGVDcmVhdGVkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiZGF0ZVVwZGF0ZWQiLCJwdXNoIiwic2F2ZURhdGEiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmaWx0ZXIiLCJ3cml0ZUZpbGVTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./helpers/api/users-repo.js\n");

/***/ }),

/***/ "(api)/./pages/api/users/authenticate.js":
/*!*****************************************!*\
  !*** ./pages/api/users/authenticate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/api */ \"(api)/./helpers/api/index.js\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\n\nconst { serverRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_api__WEBPACK_IMPORTED_MODULE_1__.apiHandler)({\n    post: authenticate\n}));\nfunction authenticate(req, res) {\n    const { username , password  } = req.body;\n    const user = _helpers_api__WEBPACK_IMPORTED_MODULE_1__.usersRepo.find((u)=>u.username === username\n    );\n    // validate\n    if (!(user && bcrypt.compareSync(password, user.hash))) {\n        throw \"Username or password is incorrect\";\n    }\n    const secret = \"THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING\";\n    // create a jwt token that is valid for 7 days\n    const token = jwt.sign({\n        sub: user.id\n    }, secret, {\n        expiresIn: \"7d\"\n    });\n    // return basic user details and token\n    return res.status(200).json({\n        id: user.id,\n        username: user.username,\n        firstName: user.firstName,\n        lastName: user.lastName,\n        token\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvYXV0aGVudGljYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUdDLG1CQUFPLENBQUMsa0NBQWMsQ0FBQztBQUNuQyxNQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsMEJBQVUsQ0FBQztBQUNFO0FBRXlCO0FBRTdELE1BQU0sRUFBRUssbUJBQW1CLEdBQUUsR0FBR0gsa0RBQVMsRUFBRTtBQUUzQyxpRUFBZUMsd0RBQVUsQ0FBQztJQUN0QkcsSUFBSSxFQUFFQyxZQUFZO0NBQ3JCLENBQUMsRUFBQztBQUVILFNBQVNBLFlBQVksQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUIsTUFBTSxFQUFFQyxRQUFRLEdBQUVDLFFBQVEsR0FBRSxHQUFHSCxHQUFHLENBQUNJLElBQUk7SUFDdkMsTUFBTUMsSUFBSSxHQUFHVCx3REFBYyxDQUFDVyxDQUFBQSxDQUFDLEdBQUlBLENBQUMsQ0FBQ0wsUUFBUSxLQUFLQSxRQUFRO0lBQUEsQ0FBQztJQUV6RCxXQUFXO0lBQ1gsSUFBSSxDQUFDLENBQUNHLElBQUksSUFBSVosTUFBTSxDQUFDZSxXQUFXLENBQUNMLFFBQVEsRUFBRUUsSUFBSSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ3BELE1BQU0sbUNBQW1DLENBQUM7S0FDN0M7SUFFRCxNQUFNQyxNQUFNLEdBQUcsbUdBQW1HO0lBRWxILDhDQUE4QztJQUM5QyxNQUFNQyxLQUFLLEdBQUdwQixHQUFHLENBQUNxQixJQUFJLENBQUM7UUFBRUMsR0FBRyxFQUFFUixJQUFJLENBQUNTLEVBQUU7S0FBRSxFQUFFSixNQUFNLEVBQUU7UUFBRUssU0FBUyxFQUFFLElBQUk7S0FBRSxDQUFDO0lBRXJFLHNDQUFzQztJQUN0QyxPQUFPZCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQ3hCSCxFQUFFLEVBQUVULElBQUksQ0FBQ1MsRUFBRTtRQUNYWixRQUFRLEVBQUVHLElBQUksQ0FBQ0gsUUFBUTtRQUN2QmdCLFNBQVMsRUFBRWIsSUFBSSxDQUFDYSxTQUFTO1FBQ3pCQyxRQUFRLEVBQUVkLElBQUksQ0FBQ2MsUUFBUTtRQUN2QlIsS0FBSztLQUNSLENBQUMsQ0FBQztDQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VzZXJzL2F1dGhlbnRpY2F0ZS5qcz8wMzg5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuY29uc3QgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0anMnKTtcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuXG5pbXBvcnQgeyBhcGlIYW5kbGVyLCB1c2Vyc1JlcG8gfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2FwaSc7XG5cbmNvbnN0IHsgc2VydmVyUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUhhbmRsZXIoe1xuICAgIHBvc3Q6IGF1dGhlbnRpY2F0ZVxufSk7XG5cbmZ1bmN0aW9uIGF1dGhlbnRpY2F0ZShyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB1c2VyID0gdXNlcnNSZXBvLmZpbmQodSA9PiB1LnVzZXJuYW1lID09PSB1c2VybmFtZSk7XG5cbiAgICAvLyB2YWxpZGF0ZVxuICAgIGlmICghKHVzZXIgJiYgYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLmhhc2gpKSkge1xuICAgICAgICB0aHJvdyAnVXNlcm5hbWUgb3IgcGFzc3dvcmQgaXMgaW5jb3JyZWN0JztcbiAgICB9XG5cbiAgICBjb25zdCBzZWNyZXQgPSAnVEhJUyBJUyBVU0VEIFRPIFNJR04gQU5EIFZFUklGWSBKV1QgVE9LRU5TLCBSRVBMQUNFIElUIFdJVEggWU9VUiBPV04gU0VDUkVULCBJVCBDQU4gQkUgQU5ZIFNUUklORyc7XG4gICBcbiAgICAvLyBjcmVhdGUgYSBqd3QgdG9rZW4gdGhhdCBpcyB2YWxpZCBmb3IgNyBkYXlzXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IHN1YjogdXNlci5pZCB9LCBzZWNyZXQsIHsgZXhwaXJlc0luOiAnN2QnIH0pO1xuXG4gICAgLy8gcmV0dXJuIGJhc2ljIHVzZXIgZGV0YWlscyBhbmQgdG9rZW5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxuICAgICAgICB0b2tlblxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbImp3dCIsInJlcXVpcmUiLCJiY3J5cHQiLCJnZXRDb25maWciLCJhcGlIYW5kbGVyIiwidXNlcnNSZXBvIiwic2VydmVyUnVudGltZUNvbmZpZyIsInBvc3QiLCJhdXRoZW50aWNhdGUiLCJyZXEiLCJyZXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJmaW5kIiwidSIsImNvbXBhcmVTeW5jIiwiaGFzaCIsInNlY3JldCIsInRva2VuIiwic2lnbiIsInN1YiIsImlkIiwiZXhwaXJlc0luIiwic3RhdHVzIiwianNvbiIsImZpcnN0TmFtZSIsImxhc3ROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/authenticate.js\n");

/***/ }),

/***/ "(api)/./data/users.json":
/*!*************************!*\
  !*** ./data/users.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"firstName":"Angelina","lastName":"Murphy","username":"angel","hash":"$2a$10$f3BsZpNk4gg.WnT3gC/sxu3K9EsgtvRFu4EpjQxdYzbnzT7mwGw1.","id":2,"dateCreated":"2023-01-21T07:03:27.828Z","dateUpdated":"2023-01-21T07:03:27.828Z","gender":"female","emailid":"angel@testmail.com"},{"firstName":"Rick","lastName":"Becky","username":"rick","hash":"$2a$10$GlVKC3JIZZwolgPQvhxwiudYy59it.Qrb9MdqajFseF2mimY9chhC","id":3,"dateCreated":"2023-01-21T07:03:46.555Z","dateUpdated":"2023-01-21T07:03:46.555Z","gender":"male","emailid":"userb@testmail.com"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/authenticate.js"));
module.exports = __webpack_exports__;

})();