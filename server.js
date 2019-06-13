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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: APP_PORT, RETHINKDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"APP_PORT\", function() { return APP_PORT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETHINKDB\", function() { return RETHINKDB; });\nvar _process = process,\n    env = Object({\"BUILD_TARGET\":\"server\",\"RETHINKDB_HOST\":undefined,\"RETHINKDB_PORT\":undefined});\nvar APP_PORT = env.PORT || 3000;\nvar RETHINKDB = {\n  HOST: env.RETHINKDB_HOST || 'localhost',\n  PORT: env.RETHINKDB_PORT || 28015,\n  DATABASE: 'breaksWebsite'\n};\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/rethinkdb/constants.js":
/*!************************************!*\
  !*** ./src/rethinkdb/constants.js ***!
  \************************************/
/*! exports provided: TABLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TABLES\", function() { return TABLES; });\nvar TABLES = {\n  SHOWS: 'shows'\n};\n\n//# sourceURL=webpack:///./src/rethinkdb/constants.js?");

/***/ }),

/***/ "./src/rethinkdb/create-table.js":
/*!***************************************!*\
  !*** ./src/rethinkdb/create-table.js ***!
  \***************************************/
/*! exports provided: createTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTable\", function() { return createTable; });\n/* harmony import */ var rethinkdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rethinkdb */ \"rethinkdb\");\n/* harmony import */ var rethinkdb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rethinkdb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _get_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-db */ \"./src/rethinkdb/get-db.js\");\n\n\nvar createTable = function createTable(conn, table) {\n  return Object(_get_db__WEBPACK_IMPORTED_MODULE_1__[\"getDB\"])().tableList().contains(table)[\"do\"](function (tableExists) {\n    return rethinkdb__WEBPACK_IMPORTED_MODULE_0___default.a.branch(tableExists, {\n      tables_created: 0\n    }, Object(_get_db__WEBPACK_IMPORTED_MODULE_1__[\"getDB\"])().tableCreate(table));\n  }).run(conn);\n};\n\n//# sourceURL=webpack:///./src/rethinkdb/create-table.js?");

/***/ }),

/***/ "./src/rethinkdb/entities/index.js":
/*!*****************************************!*\
  !*** ./src/rethinkdb/entities/index.js ***!
  \*****************************************/
/*! exports provided: show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show */ \"./src/rethinkdb/entities/show.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return _show__WEBPACK_IMPORTED_MODULE_0__[\"show\"]; });\n\n\n\n//# sourceURL=webpack:///./src/rethinkdb/entities/index.js?");

/***/ }),

/***/ "./src/rethinkdb/entities/show.js":
/*!****************************************!*\
  !*** ./src/rethinkdb/entities/show.js ***!
  \****************************************/
/*! exports provided: SHOW_FIELDS, show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHOW_FIELDS\", function() { return SHOW_FIELDS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony import */ var rethinkdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rethinkdb */ \"rethinkdb\");\n/* harmony import */ var rethinkdb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rethinkdb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _get_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-connection */ \"./src/rethinkdb/get-connection.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/rethinkdb/constants.js\");\n/* harmony import */ var _get_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-db */ \"./src/rethinkdb/get-db.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar SHOW_FIELDS = {\n  ID: 'id',\n  CITY: 'city',\n  COUNTRY: 'country',\n  CREATED_DATE_TIME: 'createdDateTime',\n  DATE: 'date',\n  DETAILS: 'details',\n  EVENT_URL: 'eventUrl',\n  POSTAL_CODE: 'postalCode',\n  STATE: 'state',\n  TICKET_URL: 'ticketUrl',\n  UPDATED_DATE_TIME: 'updatedDateTime',\n  VENUE_NAME: 'venueName',\n  VENUE_URL: 'venueUrl'\n};\nvar ONE_DAY_IN_SECONDS = 60 * 60 * 24;\nvar DEFAULT_FIELDS = [SHOW_FIELDS.ID, SHOW_FIELDS.CITY, SHOW_FIELDS.COUNTRY, SHOW_FIELDS.CREATED_DATE_TIME, SHOW_FIELDS.DATE, SHOW_FIELDS.DETAILS, SHOW_FIELDS.EVENT_URL, SHOW_FIELDS.POSTAL_CODE, SHOW_FIELDS.STATE, SHOW_FIELDS.TICKET_URL, SHOW_FIELDS.UPDATED_DATE_TIME, SHOW_FIELDS.VENUE_NAME, SHOW_FIELDS.VENUE_URL];\nvar show = {\n  findUpcoming: function () {\n    var _findUpcoming = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      var _getDB$table;\n\n      var _ref,\n          _ref$fields,\n          fields,\n          _ref$limit,\n          limit,\n          _ref$table,\n          table,\n          _args = arguments;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref$fields = _ref.fields, fields = _ref$fields === void 0 ? DEFAULT_FIELDS : _ref$fields, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 100 : _ref$limit, _ref$table = _ref.table, table = _ref$table === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_2__[\"TABLES\"].SHOWS : _ref$table;\n              _context.t0 = (_getDB$table = Object(_get_db__WEBPACK_IMPORTED_MODULE_3__[\"getDB\"])().table(table)).pluck.apply(_getDB$table, _toConsumableArray(fields)).filter(function (show) {\n                return show(SHOW_FIELDS.DATE).gt(rethinkdb__WEBPACK_IMPORTED_MODULE_0___default.a.now().sub(ONE_DAY_IN_SECONDS));\n              }).orderBy(rethinkdb__WEBPACK_IMPORTED_MODULE_0___default.a.desc(SHOW_FIELDS.CREATED_DATE_TIME)).limit(Number(limit));\n              _context.next = 4;\n              return Object(_get_connection__WEBPACK_IMPORTED_MODULE_1__[\"getConnection\"])();\n\n            case 4:\n              _context.t1 = _context.sent;\n              return _context.abrupt(\"return\", _context.t0.run.call(_context.t0, _context.t1));\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function findUpcoming() {\n      return _findUpcoming.apply(this, arguments);\n    }\n\n    return findUpcoming;\n  }(),\n  list: function () {\n    var _list = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2(_ref2) {\n      var _ref2$fields, fields, _ref2$limit, limit, table;\n\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _ref2$fields = _ref2.fields, fields = _ref2$fields === void 0 ? DEFAULT_FIELDS : _ref2$fields, _ref2$limit = _ref2.limit, limit = _ref2$limit === void 0 ? 10 : _ref2$limit, table = _ref2.table;\n              _context2.t0 = Object(_get_db__WEBPACK_IMPORTED_MODULE_3__[\"getDB\"])().table(table).orderBy(rethinkdb__WEBPACK_IMPORTED_MODULE_0___default.a.desc(SHOW_FIELDS.CREATED_DATE_TIME)).limit(Number(limit)).pluck(fields);\n              _context2.next = 4;\n              return Object(_get_connection__WEBPACK_IMPORTED_MODULE_1__[\"getConnection\"])();\n\n            case 4:\n              _context2.t1 = _context2.sent;\n              return _context2.abrupt(\"return\", _context2.t0.run.call(_context2.t0, _context2.t1));\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    function list(_x) {\n      return _list.apply(this, arguments);\n    }\n\n    return list;\n  }(),\n  \"new\": function () {\n    var _new2 = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee3(_ref3) {\n      var table, content;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              table = _ref3.table, content = _ref3.content;\n              _context3.t0 = Object(_get_db__WEBPACK_IMPORTED_MODULE_3__[\"getDB\"])().table(table).insert(_objectSpread({}, content, {\n                createdDateTime: rethinkdb__WEBPACK_IMPORTED_MODULE_0___default.a.now()\n              }));\n              _context3.next = 4;\n              return Object(_get_connection__WEBPACK_IMPORTED_MODULE_1__[\"getConnection\"])();\n\n            case 4:\n              _context3.t1 = _context3.sent;\n              return _context3.abrupt(\"return\", _context3.t0.run.call(_context3.t0, _context3.t1));\n\n            case 6:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    function _new(_x2) {\n      return _new2.apply(this, arguments);\n    }\n\n    return _new;\n  }(),\n  show: function () {\n    var _show = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee4(_ref4) {\n      var table, id;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              table = _ref4.table, id = _ref4.id;\n              _context4.t0 = Object(_get_db__WEBPACK_IMPORTED_MODULE_3__[\"getDB\"])().table(table).get(id);\n              _context4.next = 4;\n              return Object(_get_connection__WEBPACK_IMPORTED_MODULE_1__[\"getConnection\"])();\n\n            case 4:\n              _context4.t1 = _context4.sent;\n              return _context4.abrupt(\"return\", _context4.t0.run.call(_context4.t0, _context4.t1));\n\n            case 6:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    function show(_x3) {\n      return _show.apply(this, arguments);\n    }\n\n    return show;\n  }(),\n  update: function () {\n    var _update = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee5(_ref5) {\n      var table, id, content;\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              table = _ref5.table, id = _ref5.id, content = _ref5.content;\n              _context5.t0 = Object(_get_db__WEBPACK_IMPORTED_MODULE_3__[\"getDB\"])().table(table).get(id).update(_objectSpread({}, content, {\n                updatedDateTime: rethinkdb__WEBPACK_IMPORTED_MODULE_0___default.a.now()\n              }));\n              _context5.next = 4;\n              return Object(_get_connection__WEBPACK_IMPORTED_MODULE_1__[\"getConnection\"])();\n\n            case 4:\n              _context5.t1 = _context5.sent;\n              return _context5.abrupt(\"return\", _context5.t0.run.call(_context5.t0, _context5.t1));\n\n            case 6:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    }));\n\n    function update(_x4) {\n      return _update.apply(this, arguments);\n    }\n\n    return update;\n  }(),\n  find: function () {\n    var _find = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee6(_ref6) {\n      var table, _ref6$fields, fields, filter, _ref6$limit, limit, _ref6$orderBy, orderBy;\n\n      return regeneratorRuntime.wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              table = _ref6.table, _ref6$fields = _ref6.fields, fields = _ref6$fields === void 0 ? DEFAULT_FIELDS : _ref6$fields, filter = _ref6.filter, _ref6$limit = _ref6.limit, limit = _ref6$limit === void 0 ? 10 : _ref6$limit, _ref6$orderBy = _ref6.orderBy, orderBy = _ref6$orderBy === void 0 ? SHOW_FIELDS.CREATED_DATE_TIME : _ref6$orderBy;\n              _context6.t0 = Object(_get_db__WEBPACK_IMPORTED_MODULE_3__[\"getDB\"])().table(table).filter(filter).pluck(fields).orderBy(orderBy).limit(limit);\n              _context6.next = 4;\n              return Object(_get_connection__WEBPACK_IMPORTED_MODULE_1__[\"getConnection\"])();\n\n            case 4:\n              _context6.t1 = _context6.sent;\n              return _context6.abrupt(\"return\", _context6.t0.run.call(_context6.t0, _context6.t1));\n\n            case 6:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6);\n    }));\n\n    function find(_x5) {\n      return _find.apply(this, arguments);\n    }\n\n    return find;\n  }()\n};\n\n//# sourceURL=webpack:///./src/rethinkdb/entities/show.js?");

/***/ }),

/***/ "./src/rethinkdb/get-connection.js":
/*!*****************************************!*\
  !*** ./src/rethinkdb/get-connection.js ***!
  \*****************************************/
/*! exports provided: getConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getConnection\", function() { return getConnection; });\n/* harmony import */ var rethinkdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rethinkdb */ \"rethinkdb\");\n/* harmony import */ var rethinkdb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rethinkdb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar connParams = {\n  host: _config__WEBPACK_IMPORTED_MODULE_1__[\"RETHINKDB\"].HOST,\n  port: _config__WEBPACK_IMPORTED_MODULE_1__[\"RETHINKDB\"].PORT\n}; // Max number of retries\n\nvar MAX_RETRIES = 3;\nvar WAIT_BETWEEN_RETRIES = 30 * 1000;\nvar conn;\nvar retries = 0;\n\nvar sleep = function sleep(ms) {\n  return new Promise(function (resolve) {\n    return setTimeout(resolve, ms);\n  });\n};\n\nvar getConnection =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n\n            if (!conn) {\n              _context.next = 8;\n              break;\n            }\n\n            if (conn.open) {\n              _context.next = 6;\n              break;\n            }\n\n            console.log('Trying to reconnecting to RethinkDB');\n            _context.next = 6;\n            return conn.reconnect();\n\n          case 6:\n            _context.next = 12;\n            break;\n\n          case 8:\n            console.log('Trying to connect to RethinkDB');\n            _context.next = 11;\n            return rethinkdb__WEBPACK_IMPORTED_MODULE_0___default.a.connect(connParams);\n\n          case 11:\n            conn = _context.sent;\n\n          case 12:\n            retries = 0;\n            return _context.abrupt(\"return\", conn);\n\n          case 16:\n            _context.prev = 16;\n            _context.t0 = _context[\"catch\"](0);\n            retries++;\n            console.log('There was a problem connecting or reconnecting to RethinkDB:', _context.t0.message);\n\n            if (!(retries > MAX_RETRIES)) {\n              _context.next = 22;\n              break;\n            }\n\n            throw new Error(_context.t0.message);\n\n          case 22:\n            console.log(\"Will retry to connect to RethinkDB in \".concat(WAIT_BETWEEN_RETRIES, \" ms\"));\n            _context.next = 25;\n            return sleep(WAIT_BETWEEN_RETRIES);\n\n          case 25:\n            return _context.abrupt(\"return\", getConnection());\n\n          case 26:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 16]]);\n  }));\n\n  return function getConnection() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/rethinkdb/get-connection.js?");

/***/ }),

/***/ "./src/rethinkdb/get-db.js":
/*!*********************************!*\
  !*** ./src/rethinkdb/get-db.js ***!
  \*********************************/
/*! exports provided: getDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDB\", function() { return getDB; });\n/* harmony import */ var rethinkdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rethinkdb */ \"rethinkdb\");\n/* harmony import */ var rethinkdb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rethinkdb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\nvar getDB = function getDB() {\n  return rethinkdb__WEBPACK_IMPORTED_MODULE_0___default.a.db(_config__WEBPACK_IMPORTED_MODULE_1__[\"RETHINKDB\"].DATABASE);\n};\n\n//# sourceURL=webpack:///./src/rethinkdb/get-db.js?");

/***/ }),

/***/ "./src/rethinkdb/index.js":
/*!********************************!*\
  !*** ./src/rethinkdb/index.js ***!
  \********************************/
/*! exports provided: TABLES, show, setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/rethinkdb/constants.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TABLES\", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__[\"TABLES\"]; });\n\n/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ \"./src/rethinkdb/entities/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return _entities__WEBPACK_IMPORTED_MODULE_1__[\"show\"]; });\n\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup */ \"./src/rethinkdb/setup.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setup\", function() { return _setup__WEBPACK_IMPORTED_MODULE_2__[\"setup\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/rethinkdb/index.js?");

/***/ }),

/***/ "./src/rethinkdb/setup.js":
/*!********************************!*\
  !*** ./src/rethinkdb/setup.js ***!
  \********************************/
/*! exports provided: setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setup\", function() { return setup; });\n/* harmony import */ var rethinkdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rethinkdb */ \"rethinkdb\");\n/* harmony import */ var rethinkdb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rethinkdb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/rethinkdb/constants.js\");\n/* harmony import */ var _create_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-table */ \"./src/rethinkdb/create-table.js\");\n/* harmony import */ var _get_connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-connection */ \"./src/rethinkdb/get-connection.js\");\nvar _this = undefined;\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\nvar createDatabaseIfNotExists = function createDatabaseIfNotExists(conn) {\n  return rethinkdb__WEBPACK_IMPORTED_MODULE_0___default.a.dbList().contains(_config__WEBPACK_IMPORTED_MODULE_1__[\"RETHINKDB\"].DATABASE)[\"do\"](function (databaseExists) {\n    return rethinkdb__WEBPACK_IMPORTED_MODULE_0___default.a.branch(databaseExists, {\n      dbs_created: 0\n    }, rethinkdb__WEBPACK_IMPORTED_MODULE_0___default.a.dbCreate(_config__WEBPACK_IMPORTED_MODULE_1__[\"RETHINKDB\"].DATABASE));\n  }).run(conn);\n};\n\nvar createTables = function createTables(conn) {\n  return Object.values(_constants__WEBPACK_IMPORTED_MODULE_2__[\"TABLES\"]).map(_create_table__WEBPACK_IMPORTED_MODULE_3__[\"createTable\"].bind(_this, conn));\n};\n\nvar setup =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    var conn;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return Object(_get_connection__WEBPACK_IMPORTED_MODULE_4__[\"getConnection\"])();\n\n          case 3:\n            conn = _context.sent;\n            _context.next = 6;\n            return createDatabaseIfNotExists(conn);\n\n          case 6:\n            _context.next = 8;\n            return createTables(conn);\n\n          case 8:\n            return _context.abrupt(\"return\", conn);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            throw _context.t0;\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n\n  return function setup() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/rethinkdb/setup.js?");

/***/ }),

/***/ "./src/server/controllers/index.js":
/*!*****************************************!*\
  !*** ./src/server/controllers/index.js ***!
  \*****************************************/
/*! exports provided: web, createShow, getShow, show, showApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web */ \"./src/server/controllers/web.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"web\", function() { return _web__WEBPACK_IMPORTED_MODULE_0__[\"web\"]; });\n\n/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show */ \"./src/server/controllers/show.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createShow\", function() { return _show__WEBPACK_IMPORTED_MODULE_1__[\"createShow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getShow\", function() { return _show__WEBPACK_IMPORTED_MODULE_1__[\"getShow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return _show__WEBPACK_IMPORTED_MODULE_1__[\"show\"]; });\n\n/* harmony import */ var _show_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.api */ \"./src/server/controllers/show.api.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showApi\", function() { return _show_api__WEBPACK_IMPORTED_MODULE_2__[\"showApi\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/server/controllers/index.js?");

/***/ }),

/***/ "./src/server/controllers/instagram.js":
/*!*********************************************!*\
  !*** ./src/server/controllers/instagram.js ***!
  \*********************************************/
/*! exports provided: instagram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"instagram\", function() { return instagram; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n/* eslint-disable no-undef */\n\nvar INSTAGRAM_API_URL = \"https://api.instagram.com/v1/users/\".concat(\"3018065801\", \"/media/recent/?access_token=\").concat(\"3018065801.017f062.d51d7bfda2114e149b41f2c58523cecf\");\n/* eslint-enable no-undef */\n\nvar instagram = {\n  feed: function () {\n    var _feed = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      var instaResponse;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(INSTAGRAM_API_URL, {\n                method: 'get'\n              });\n\n            case 3:\n              instaResponse = _context.sent;\n              _context.next = 9;\n              break;\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context[\"catch\"](0);\n              console.log('instagram fetch failed', _context.t0);\n\n            case 9:\n              _context.prev = 9;\n              _context.next = 12;\n              return instaResponse.json();\n\n            case 12:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 15:\n              _context.prev = 15;\n              _context.t1 = _context[\"catch\"](9);\n              throw new Error('There was a problem with the instagram photo feed response', _context.t1);\n\n            case 18:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 6], [9, 15]]);\n    }));\n\n    function feed() {\n      return _feed.apply(this, arguments);\n    }\n\n    return feed;\n  }()\n};\n\n//# sourceURL=webpack:///./src/server/controllers/instagram.js?");

/***/ }),

/***/ "./src/server/controllers/show.api.js":
/*!********************************************!*\
  !*** ./src/server/controllers/show.api.js ***!
  \********************************************/
/*! exports provided: showApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showApi\", function() { return showApi; });\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/boom */ \"@hapi/boom\");\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_boom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rethinkdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rethinkdb */ \"./src/rethinkdb/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/server/utils/index.js\");\n/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show */ \"./src/server/controllers/show.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar showApi = {\n  archive: function archive() {\n    return (\n      /*#__PURE__*/\n      function () {\n        var _ref = _asyncToGenerator(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee(ctx) {\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return _rethinkdb__WEBPACK_IMPORTED_MODULE_1__[\"show\"].findArchived();\n\n                case 2:\n                  ctx.body = _context.sent;\n\n                case 3:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }()\n    );\n  },\n  upcoming: function upcoming() {\n    return (\n      /*#__PURE__*/\n      function () {\n        var _ref2 = _asyncToGenerator(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee2(ctx) {\n          return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  _context2.next = 2;\n                  return _rethinkdb__WEBPACK_IMPORTED_MODULE_1__[\"show\"].findUpcoming();\n\n                case 2:\n                  ctx.body = _context2.sent;\n\n                case 3:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2);\n        }));\n\n        return function (_x2) {\n          return _ref2.apply(this, arguments);\n        };\n      }()\n    );\n  },\n  list: function list() {\n    return (\n      /*#__PURE__*/\n      function () {\n        var _ref3 = _asyncToGenerator(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee3(ctx) {\n          return regeneratorRuntime.wrap(function _callee3$(_context3) {\n            while (1) {\n              switch (_context3.prev = _context3.next) {\n                case 0:\n                  _context3.next = 2;\n                  return _rethinkdb__WEBPACK_IMPORTED_MODULE_1__[\"show\"].list();\n\n                case 2:\n                  ctx.body = _context3.sent;\n\n                case 3:\n                case \"end\":\n                  return _context3.stop();\n              }\n            }\n          }, _callee3);\n        }));\n\n        return function (_x3) {\n          return _ref3.apply(this, arguments);\n        };\n      }()\n    );\n  },\n  \"new\": function _new() {\n    return (\n      /*#__PURE__*/\n      function () {\n        var _ref4 = _asyncToGenerator(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee4(ctx) {\n          var query, _ref5, id;\n\n          return regeneratorRuntime.wrap(function _callee4$(_context4) {\n            while (1) {\n              switch (_context4.prev = _context4.next) {\n                case 0:\n                  query = ctx.query; // TODO- how to find show data\n\n                  _context4.next = 3;\n                  return Object(_show__WEBPACK_IMPORTED_MODULE_3__[\"createShow\"])(ctx, query.force, query);\n\n                case 3:\n                  _ref5 = _context4.sent;\n                  id = _ref5.id;\n                  ctx.body = {\n                    message: \"Show \".concat(id, \" has been added\")\n                  };\n\n                case 6:\n                case \"end\":\n                  return _context4.stop();\n              }\n            }\n          }, _callee4);\n        }));\n\n        return function (_x4) {\n          return _ref4.apply(this, arguments);\n        };\n      }()\n    );\n  },\n  show: function show() {\n    return (\n      /*#__PURE__*/\n      function () {\n        var _ref6 = _asyncToGenerator(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee5(ctx, showId) {\n          return regeneratorRuntime.wrap(function _callee5$(_context5) {\n            while (1) {\n              switch (_context5.prev = _context5.next) {\n                case 0:\n                  _context5.next = 2;\n                  return Object(_show__WEBPACK_IMPORTED_MODULE_3__[\"getShow\"])(ctx, showId);\n\n                case 2:\n                  ctx.body = _context5.sent;\n\n                case 3:\n                case \"end\":\n                  return _context5.stop();\n              }\n            }\n          }, _callee5);\n        }));\n\n        return function (_x5, _x6) {\n          return _ref6.apply(this, arguments);\n        };\n      }()\n    );\n  },\n  notImplemented: function notImplemented() {\n    return (\n      /*#__PURE__*/\n      function () {\n        var _ref7 = _asyncToGenerator(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee6(ctx) {\n          return regeneratorRuntime.wrap(function _callee6$(_context6) {\n            while (1) {\n              switch (_context6.prev = _context6.next) {\n                case 0:\n                  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"boomWrapper\"])(ctx, _hapi_boom__WEBPACK_IMPORTED_MODULE_0___default.a.notImplemented, 'Route is not implemented');\n\n                case 1:\n                case \"end\":\n                  return _context6.stop();\n              }\n            }\n          }, _callee6);\n        }));\n\n        return function (_x7) {\n          return _ref7.apply(this, arguments);\n        };\n      }()\n    );\n  }\n};\n\n//# sourceURL=webpack:///./src/server/controllers/show.api.js?");

/***/ }),

/***/ "./src/server/controllers/show.js":
/*!****************************************!*\
  !*** ./src/server/controllers/show.js ***!
  \****************************************/
/*! exports provided: createShow, getShow, show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createShow\", function() { return createShow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getShow\", function() { return getShow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony import */ var _rethinkdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rethinkdb */ \"./src/rethinkdb/index.js\");\n/* harmony import */ var _show_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.api */ \"./src/server/controllers/show.api.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar createShow =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(ctx) {\n    var force,\n        content,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            force = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;\n            content = _args.length > 2 ? _args[2] : undefined;\n            _context.prev = 2;\n            _context.next = 5;\n            return _rethinkdb__WEBPACK_IMPORTED_MODULE_0__[\"show\"][\"new\"](content);\n\n          case 5:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](2);\n            return _context.abrupt(\"return\", ctx[\"throw\"](_context.t0));\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 8]]);\n  }));\n\n  return function createShow(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar getShow =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(ctx, showId) {\n    var _show;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return _rethinkdb__WEBPACK_IMPORTED_MODULE_0__[\"show\"].show(showId);\n\n          case 3:\n            _show = _context2.sent;\n\n            if (_show) {\n              _context2.next = 6;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", ctx[\"throw\"](\"Cannot find show \".concat(showId), 404));\n\n          case 6:\n            return _context2.abrupt(\"return\", _show);\n\n          case 9:\n            _context2.prev = 9;\n            _context2.t0 = _context2[\"catch\"](0);\n            return _context2.abrupt(\"return\", ctx[\"throw\"](_context2.t0));\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 9]]);\n  }));\n\n  return function getShow(_x2, _x3) {\n    return _ref2.apply(this, arguments);\n  };\n}(); // TODO - do we want a web admin.  would need auth, etc.\n// import { showAdmin } from './show.admin';\n\nvar show = {\n  api: _show_api__WEBPACK_IMPORTED_MODULE_1__[\"showApi\"] // web: showAdmin\n\n};\n\n//# sourceURL=webpack:///./src/server/controllers/show.js?");

/***/ }),

/***/ "./src/server/controllers/web.js":
/*!***************************************!*\
  !*** ./src/server/controllers/web.js ***!
  \***************************************/
/*! exports provided: web */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"web\", function() { return web; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/react */ \"./src/shared/react/index.js\");\n/* harmony import */ var _shared_react_context___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/react/context/ */ \"./src/shared/react/context/index.js\");\n/* harmony import */ var _rethinkdb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../rethinkdb */ \"./src/rethinkdb/index.js\");\n/* harmony import */ var _instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instagram */ \"./src/server/controllers/instagram.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    color: #ff3300;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\n\nvar getStyleTags = function getStyleTags(children) {\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ServerStyleSheet\"]();\n  Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToStaticMarkup\"])(sheet.collectStyles(children));\n  return sheet.getStyleTags();\n};\n\nvar Heading = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1(_templateObject());\n\nvar getAppMarkup = function getAppMarkup(ctx) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: ctx.request.url\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_react__WEBPACK_IMPORTED_MODULE_4__[\"App\"], null));\n};\n\nvar getLayoutMarkup = function getLayoutMarkup(_ref) {\n  var appData = _ref.appData,\n      ctx = _ref.ctx,\n      styleTags = _ref.styleTags;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_react_context___WEBPACK_IMPORTED_MODULE_5__[\"AppDataProvider\"], appData, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_react__WEBPACK_IMPORTED_MODULE_4__[\"Layout\"], {\n    title: 'The Bantam Breaks',\n    styleTags: styleTags\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Heading, null, \"Hello World\"), styleTags && getAppMarkup(ctx)));\n};\n\nvar web = {\n  index: function index() {\n    return (\n      /*#__PURE__*/\n      function () {\n        var _ref2 = _asyncToGenerator(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee(ctx) {\n          var appData, styleTags;\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return _instagram__WEBPACK_IMPORTED_MODULE_7__[\"instagram\"].feed();\n\n                case 2:\n                  _context.t0 = _context.sent;\n                  _context.next = 5;\n                  return _rethinkdb__WEBPACK_IMPORTED_MODULE_6__[\"show\"].findUpcoming();\n\n                case 5:\n                  _context.t1 = _context.sent;\n                  appData = {\n                    instagramData: _context.t0,\n                    showData: _context.t1\n                  };\n                  styleTags = getStyleTags(getLayoutMarkup({\n                    appData: appData,\n                    ctx: ctx\n                  }));\n                  ctx.body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(getLayoutMarkup({\n                    appData: appData,\n                    ctx: ctx,\n                    styleTags: styleTags\n                  }));\n\n                case 9:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x) {\n          return _ref2.apply(this, arguments);\n        };\n      }()\n    );\n  }\n};\n\n//# sourceURL=webpack:///./src/server/controllers/web.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"./src/server/server.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_server__WEBPACK_IMPORTED_MODULE_0__[\"app\"]); // require(\"@babel/polyfill\");\n// // Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.\n// require(\"@babel/register\")({\n//   presets: [\"@babel/preset-env\"]\n// });\n// // Import the rest of our application.\n// module.exports = require('./server.js')\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/routes.js":
/*!******************************!*\
  !*** ./src/server/routes.js ***!
  \******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-route */ \"koa-route\");\n/* harmony import */ var koa_route__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_route__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-mount */ \"koa-mount\");\n/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_mount__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers */ \"./src/server/controllers/index.js\");\n\n\n\n\n // const staticRoute = path.resolve(__dirname, '.build/');\n\nvar generatedStaticRoute = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'public');\nvar staticRoute = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'src', 'shared', 'public');\nvar routes = function routes(app) {\n  var routeList = [// add static file paths\n  koa_static__WEBPACK_IMPORTED_MODULE_3___default()(generatedStaticRoute), // for client facing react bundle\n  koa_static__WEBPACK_IMPORTED_MODULE_3___default()(staticRoute), // for favicon\n  koa_mount__WEBPACK_IMPORTED_MODULE_2___default()('/css', koa_static__WEBPACK_IMPORTED_MODULE_3___default()(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(staticRoute, 'css/'))), koa_mount__WEBPACK_IMPORTED_MODULE_2___default()('/img', koa_static__WEBPACK_IMPORTED_MODULE_3___default()(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(staticRoute, 'img/'))), koa_mount__WEBPACK_IMPORTED_MODULE_2___default()('/js', koa_static__WEBPACK_IMPORTED_MODULE_3___default()(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(staticRoute, 'js/'))), // Reports Web\n  koa_route__WEBPACK_IMPORTED_MODULE_1___default.a.get('*', _controllers__WEBPACK_IMPORTED_MODULE_4__[\"web\"].index()) // Reports API\n  // route.get('/api/shows', show.api.list()),\n  // route.get('/api/shows/upcoming', show.api.upcoming()),\n  // route.get('/api/shows/archive', show.api.archive()),\n  // route.post('/api/shows/new', show.api.new()),\n  // route.get('/api/shows/:showId', show.api.show()),\n  ];\n  routeList.forEach(function (route) {\n    return app.use(route);\n  });\n};\n\n//# sourceURL=webpack:///./src/server/routes.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-logger */ \"koa-logger\");\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n/* harmony import */ var _rethinkdb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rethinkdb */ \"./src/rethinkdb/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ \"./src/server/routes.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\nvar server =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    var app;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\n            _context.next = 3;\n            return Object(_rethinkdb__WEBPACK_IMPORTED_MODULE_4__[\"setup\"])();\n\n          case 3:\n            app.use(koa_logger__WEBPACK_IMPORTED_MODULE_2___default()());\n            app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default()()); // Setup routes\n\n            Object(_routes__WEBPACK_IMPORTED_MODULE_5__[\"routes\"])(app);\n            app.listen(_config__WEBPACK_IMPORTED_MODULE_3__[\"APP_PORT\"]);\n            console.info(\"Started server on port \".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"APP_PORT\"]));\n            return _context.abrupt(\"return\", app);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function server() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar app = server();\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/server/utils/boom-wrapper.js":
/*!******************************************!*\
  !*** ./src/server/utils/boom-wrapper.js ***!
  \******************************************/
/*! exports provided: boomWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boomWrapper\", function() { return boomWrapper; });\nvar boomWrapper = function boomWrapper(ctx, boomFn) {\n  if (typeof boomFn === 'function') {\n    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      args[_key - 2] = arguments[_key];\n    }\n\n    var _boomFn = boomFn.apply(void 0, args),\n        output = _boomFn.output;\n\n    ctx.status = output.statusCode;\n    ctx.body = output.payload;\n    return ctx;\n  }\n\n  throw new Error(\"The given parameter is not a function \".concat(boomFn));\n};\n\n//# sourceURL=webpack:///./src/server/utils/boom-wrapper.js?");

/***/ }),

/***/ "./src/server/utils/index.js":
/*!***********************************!*\
  !*** ./src/server/utils/index.js ***!
  \***********************************/
/*! exports provided: boomWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boom_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boom-wrapper */ \"./src/server/utils/boom-wrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"boomWrapper\", function() { return _boom_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"boomWrapper\"]; });\n\n\n\n//# sourceURL=webpack:///./src/server/utils/index.js?");

/***/ }),

/***/ "./src/shared/react/components/App.js":
/*!********************************************!*\
  !*** ./src/shared/react/components/App.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./src/shared/react/components/Home.js\");\n/* harmony import */ var _MeetTheBand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetTheBand */ \"./src/shared/react/components/MeetTheBand.js\");\n/* harmony import */ var _NoMatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NoMatch */ \"./src/shared/react/components/NoMatch.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: '/band',\n  component: _MeetTheBand__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}];\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"app\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, routes.map(function (_ref) {\n        var path = _ref.path,\n            exact = _ref.exact,\n            Component = _ref.component;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n          key: path,\n          path: path,\n          exact: exact,\n          component: Component\n        });\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        render: function render(props) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoMatch__WEBPACK_IMPORTED_MODULE_4__[\"default\"], props);\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: '/band'\n      }, \"Band\"));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/shared/react/components/App.js?");

/***/ }),

/***/ "./src/shared/react/components/Home.js":
/*!*********************************************!*\
  !*** ./src/shared/react/components/Home.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Home = function Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Home Page\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/shared/react/components/Home.js?");

/***/ }),

/***/ "./src/shared/react/components/Layout.js":
/*!***********************************************!*\
  !*** ./src/shared/react/components/Layout.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    position: absolute;\\n    left: -9999px;\\n    height: 0;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    display: block;\\n    box-sizing: border-box;\\n    max-width: 1600px;\\n    margin: 0 auto;\\n    padding: 1rem 1rem;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    display: block;\\n    box-sizing: border-box;\\n    position: relative;\\n    padding: .5rem 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.main(_templateObject());\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());\nvar StylesDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());\n\nvar Layout = function Layout(props) {\n  var children = props.children,\n      className = props.className,\n      styleTags = props.styleTags,\n      title = props.title;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"html\", {\n    lang: \"en\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"head\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"body\", {\n    className: className\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StylesDiv, {\n    dangerouslySetInnerHTML: {\n      __html: styleTags\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n    src: \"/bundle.js\"\n  })));\n};\n\nLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  styleTags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,\n  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nLayout.defaultProps = {\n  className: '',\n  styleTags: undefined,\n  subtitle: undefined,\n  title: undefined\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/shared/react/components/Layout.js?");

/***/ }),

/***/ "./src/shared/react/components/MeetTheBand.js":
/*!****************************************************!*\
  !*** ./src/shared/react/components/MeetTheBand.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar MeetTheBand = function MeetTheBand() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Meet the Band\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetTheBand);\n\n//# sourceURL=webpack:///./src/shared/react/components/MeetTheBand.js?");

/***/ }),

/***/ "./src/shared/react/components/NoMatch.js":
/*!************************************************!*\
  !*** ./src/shared/react/components/NoMatch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NoMatch = function NoMatch() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Ruh Roh\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoMatch);\n\n//# sourceURL=webpack:///./src/shared/react/components/NoMatch.js?");

/***/ }),

/***/ "./src/shared/react/components/index.js":
/*!**********************************************!*\
  !*** ./src/shared/react/components/index.js ***!
  \**********************************************/
/*! exports provided: App, Home, Layout, MeetTheBand, NoMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/shared/react/components/App.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/shared/react/components/Home.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return _Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ \"./src/shared/react/components/Layout.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return _Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _MeetTheBand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetTheBand */ \"./src/shared/react/components/MeetTheBand.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MeetTheBand\", function() { return _MeetTheBand__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _NoMatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NoMatch */ \"./src/shared/react/components/NoMatch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NoMatch\", function() { return _NoMatch__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/shared/react/components/index.js?");

/***/ }),

/***/ "./src/shared/react/context/app-data-provider.js":
/*!*******************************************************!*\
  !*** ./src/shared/react/context/app-data-provider.js ***!
  \*******************************************************/
/*! exports provided: AppDataProvider, useAppDataContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppDataProvider\", function() { return AppDataProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAppDataContext\", function() { return useAppDataContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});\nvar AppDataProvider = function AppDataProvider(_ref) {\n  var instagramData = _ref.instagramData,\n      showData = _ref.showData,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {\n    instagramData: instagramData,\n    showData: showData\n  }, children);\n};\nAppDataProvider.propTypes = {\n  instagramData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  showData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired\n};\nAppDataProvider.defaultProps = {\n  instagramData: {},\n  showData: {}\n};\nvar useAppDataContext = function useAppDataContext() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(Context);\n};\n\n//# sourceURL=webpack:///./src/shared/react/context/app-data-provider.js?");

/***/ }),

/***/ "./src/shared/react/context/index.js":
/*!*******************************************!*\
  !*** ./src/shared/react/context/index.js ***!
  \*******************************************/
/*! exports provided: AppDataProvider, useAppDataContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-data-provider */ \"./src/shared/react/context/app-data-provider.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AppDataProvider\", function() { return _app_data_provider__WEBPACK_IMPORTED_MODULE_0__[\"AppDataProvider\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useAppDataContext\", function() { return _app_data_provider__WEBPACK_IMPORTED_MODULE_0__[\"useAppDataContext\"]; });\n\n\n\n//# sourceURL=webpack:///./src/shared/react/context/index.js?");

/***/ }),

/***/ "./src/shared/react/index.js":
/*!***********************************!*\
  !*** ./src/shared/react/index.js ***!
  \***********************************/
/*! exports provided: App, Home, Layout, MeetTheBand, NoMatch, AppDataProvider, useAppDataContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/shared/react/components/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return _components__WEBPACK_IMPORTED_MODULE_0__[\"App\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return _components__WEBPACK_IMPORTED_MODULE_0__[\"Home\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return _components__WEBPACK_IMPORTED_MODULE_0__[\"Layout\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MeetTheBand\", function() { return _components__WEBPACK_IMPORTED_MODULE_0__[\"MeetTheBand\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NoMatch\", function() { return _components__WEBPACK_IMPORTED_MODULE_0__[\"NoMatch\"]; });\n\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ \"./src/shared/react/context/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AppDataProvider\", function() { return _context__WEBPACK_IMPORTED_MODULE_1__[\"AppDataProvider\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useAppDataContext\", function() { return _context__WEBPACK_IMPORTED_MODULE_1__[\"useAppDataContext\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/shared/react/index.js?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi @babel/polyfill ./src/server/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/server/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "@hapi/boom":
/*!*****************************!*\
  !*** external "@hapi/boom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hapi/boom\");\n\n//# sourceURL=webpack:///external_%22@hapi/boom%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");\n\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ }),

/***/ "koa-logger":
/*!*****************************!*\
  !*** external "koa-logger" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-logger\");\n\n//# sourceURL=webpack:///external_%22koa-logger%22?");

/***/ }),

/***/ "koa-mount":
/*!****************************!*\
  !*** external "koa-mount" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-mount\");\n\n//# sourceURL=webpack:///external_%22koa-mount%22?");

/***/ }),

/***/ "koa-route":
/*!****************************!*\
  !*** external "koa-route" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-route\");\n\n//# sourceURL=webpack:///external_%22koa-route%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "rethinkdb":
/*!****************************!*\
  !*** external "rethinkdb" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rethinkdb\");\n\n//# sourceURL=webpack:///external_%22rethinkdb%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });