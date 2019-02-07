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
/******/ 	return __webpack_require__(__webpack_require__.s = "./background/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./background/background.js":
/*!**********************************!*\
  !*** ./background/background.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_data_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/data-storage.js */ "./common/data-storage.js");
/* harmony import */ var common_display_badge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/display-badge.js */ "./common/display-badge.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @overview Background script of the Ad Analysis for Facebook extension.
 *     In this disabled version of the extension, the background script
 *     displays a badge showing an "X" over the toolbar icon to indicate
 *     the extension has been disabled.
 * @author Jason Chuang <jchuang@mozilla.com>
 **/



 // ==== START ==================================================================
// Access persistent data storage.

const dataStorage = new common_data_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"](); // Display a badge over the toolbar icon.

dataStorage.getExtensionUpdateMessageVersion().then(version => {
  const showOneTimeMessage = !(version && version >= 1.1);
  Object(common_display_badge_js__WEBPACK_IMPORTED_MODULE_1__["default"])(showOneTimeMessage);
}); // ==== END ====================================================================

/***/ }),

/***/ "./common/data-storage.js":
/*!********************************!*\
  !*** ./common/data-storage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_monitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/monitor.js */ "./common/monitor.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @overview Utility library for the Ad Analysis for Facebook extension.
 *     Provide read and write access to variables in local storage.
 * @author Jason Chuang <jchuang@mozilla.com>
 **/


 // ==== START ==================================================================

/**
 * @constant {string} Key for displaying one-time messages after an update.
 **/

const EXTENSION_UPDATE_MESSAGE_VERSION_KEY = "extensionUpdateMessageVersion";
/**
 * Interface to store and retrieve persistent data.
 * @class
 **/

const DataStorage = function () {
  this._monitor = new common_monitor_js__WEBPACK_IMPORTED_MODULE_0__["default"]("storage");

  this._monitor.enter("DataStorage");

  this._monitor.exit("DataStorage");
}; // ---- Private methods --------------------------------------------------------

/**
 * Set the value of a persistant variable.
 * @private @async
 * @param {string} key - Key of the variable.
 * @param {object} value - Value of the variable.
 * @returns {object} Final value of the variable.
 */


DataStorage.prototype._setValue = function (key, value) {
  return new Promise(resolve => {
    this._monitor.enter("_setValue");

    this._monitor.assert(typeof key === "string", "key =", key);

    this._monitor.assert(typeof value !== "undefined", "value =", value);

    const keyValuePairs = {};
    keyValuePairs[key] = value;

    this._monitor.input(keyValuePairs);

    browser.storage.local.set(keyValuePairs).then(() => {
      browser.storage.local.get(key).then(results => {
        this._monitor.output(results);

        const value = results[key];

        this._monitor.exit("_setValue");

        resolve(value);
      });
    });
  });
};
/**
 * Get the value of a persistant variable.
 * @private @async
 * @param {string} key - Key of the variable.
 * @returns {object} Value of the variable.
 **/


DataStorage.prototype._getValue = function (key) {
  return new Promise(resolve => {
    this._monitor.enter("_getValue");

    this._monitor.assert(typeof key === "string", "key =", key);

    browser.storage.local.get(key).then(results => {
      this._monitor.output(results);

      const value = results[key];

      this._monitor.exit("_getValue");

      resolve(value);
    });
  });
}; // ---- Public methods ---------------------------------------------------------

/**
 * Set the value of "extensionUpdateMessageVersion".
 * @public @async
 * @param {number} version - Latest extension version.
 * @returns {number} Latest extension version.
 **/


DataStorage.prototype.setExtensionUpdateMessageVersion = function (version) {
  return new Promise(resolve => {
    this._monitor.enter("setExtensionUpdateMessageVersion");

    this._monitor.assert(typeof version === "number", "version =", version);

    this._setValue(EXTENSION_UPDATE_MESSAGE_VERSION_KEY, version).then(version => {
      this._monitor.exit("setExtensionUpdateMessageVersion");

      resolve(version);
    });
  });
};
/**
 * Get the value of "extensionUpdateMessageVersion".
 * @public @async
 * @returns {number} Latest extension version.
 **/


DataStorage.prototype.getExtensionUpdateMessageVersion = function () {
  return new Promise(resolve => {
    this._monitor.enter("getExtensionUpdateMessageVersion");

    this._getValue(EXTENSION_UPDATE_MESSAGE_VERSION_KEY).then(version => {
      this._monitor.exit("getExtensionUpdateMessageVersion");

      resolve(version);
    });
  });
}; // ==== END ====================================================================


/* harmony default export */ __webpack_exports__["default"] = (DataStorage);

/***/ }),

/***/ "./common/display-badge.js":
/*!*********************************!*\
  !*** ./common/display-badge.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_monitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/monitor.js */ "./common/monitor.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @overview Utility library for the Ad Analysis for Facebook extension.
 *     Display a badge over the toolbar icon.
 * @author Jason Chuang <jchuang@mozilla.com>
 **/


 // ==== START ==================================================================

/**
 * @const {string} Text of the badge ('X' for disabled).
 **/

const badgeText = "X";
/**
 * @const {string} Foreground color of the badge (white).
 **/

const badgeColor = "#fff";
/**
 * @const {string} Background color of the badge (red).
 **/

const badgeRedBackground = "#d62728";
/**
 * @const {string} Background color of the badge (grey).
 **/

const badgeGreyBackground = "#999";
/**
 * @const {Monitor} Event logger.
 **/

const monitor = new common_monitor_js__WEBPACK_IMPORTED_MODULE_0__["default"]("badge");
/**
 * Display a badge over the toolbar icon.
 * @param {boolean} showOneTimeMessage - Display badge in red.
 * @function
 **/

const displayBadge = (showOneTimeMessage = false) => {
  monitor.enter("displayBadge"); // Set the badge colors and text

  browser.browserAction.setBadgeTextColor({
    "color": badgeColor
  });
  browser.browserAction.setBadgeBackgroundColor({
    "color": showOneTimeMessage ? badgeRedBackground : badgeGreyBackground
  });
  browser.browserAction.setBadgeText({
    "text": badgeText
  });
  monitor.exit("displayBadge");
}; // ==== END ====================================================================


/* harmony default export */ __webpack_exports__["default"] = (displayBadge);

/***/ }),

/***/ "./common/monitor.js":
/*!***************************!*\
  !*** ./common/monitor.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @overview Utility library for the Ad Analysis for Facebook extension.
 *     A combination of logging and log formatting tools to aid development,
 *     debugging, and testing. Most of the funcationalities are removed in
 *     the release build. Allow various "types" of events to be logged
 *     separately including traditional control flows, data events, and
 *     browser extension communication. Allow simple assertions.
 * @author Jason Chuang <jchuang@mozilla.com>
 **/
 // ==== START ==================================================================

/**
 * @const {object} Default values for all event keys.
 **/

const defaultFlags = {
  "enter": true,
  "exit": true,
  "event": true,
  "input": true,
  "output": true,
  "data": true,
  "assert": true
};
/**
 * @const {object} Visual indicators by event keys.
 **/

const keyStrs = {
  "enter": "->>",
  "exit": "-<<",
  "event": "---",
  "input": " > ",
  "output": " < ",
  "data": "",
  "assert": "!!!"
};
/**
 * Display a message and increment the nested function levels.
 * @function
 **/

const enterHandler = function (message, obj) {
  displayMessage.call(this, "enter", message, obj);
  this._level++;
};
/**
 * Display a message and decrement the nested function levels.
 * @function
 **/


const exitHandler = function (message, obj) {
  this._level--;
  displayMessage.call(this, "exit", message, obj);
};
/**
 * Display a message with event-related indicators.
 * @function
 **/


const eventHandler = function (message, obj) {
  displayMessage.call(this, "event", message, obj);
};
/**
 * Display a message with input (function arguments) indicators.
 * @function
 **/


const inputHandler = function (message, obj) {
  displayMessage.call(this, "input", message, obj);
};
/**
 * Display a message with output (function returns) indicators.
 * @function
 **/


const outputHandler = function (message, obj) {
  displayMessage.call(this, "output", message, obj);
};
/**
 * Display a message with data indicators.
 * @function
 **/


const dataHandler = function (message, obj) {
  displayMessage.call(this, "data", message, obj);
};
/**
 * Display a message if an assertion fails.
 * @function
 **/


const assertHandler = function (expression, message, obj) {
  if (!expression) {
    displayMessage.call(this, "assert", message, obj, true);
  }
};
/**
 * Prepare to display a (nicely-formatted) message.
 * @function
 **/


const displayMessage = function (key, message, obj, isWarning = false) {
  const getKeyStrs = key => {
    if (key === "enter") {
      return "[" + keyStrs[key].padStart(3 + this._level * 2, "-") + "]";
    }

    if (key === "exit") {
      return "[" + keyStrs[key].padStart(3 + this._level * 2, "-") + "]";
    }

    if (key === "data") {
      return "";
    }

    return "[" + keyStrs[key] + "]";
  };

  if (this._isEnabled && this._flags[key]) {
    const idStr = `[${this._identifier.substring(0, 10).padEnd(10, " ")}]`;
    const keyStr = getKeyStrs(key);

    if (typeof obj !== "undefined") {
      if (isWarning) {
        console.warn(idStr, keyStr, message, obj);
      } else {
        console.log(idStr, keyStr, message, obj);
      }
    } else {
      if (isWarning) {
        console.warn(idStr, keyStr, message);
      } else {
        console.log(idStr, keyStr, message);
      }
    }
  }
};
/**
 * Monitor class to log different types of events.
 * @class
 **/


const Monitor = function (identifier, optFlags = {}) {
  this._identifier = identifier;
  this._flags = Object.assign(defaultFlags, optFlags);
  this._isEnabled = true;
  this._level = 0;

  if (true) {
    this.enter = enterHandler.bind(this);
    this.exit = exitHandler.bind(this);
    this.event = eventHandler.bind(this);
    this.input = inputHandler.bind(this);
    this.output = outputHandler.bind(this);
    this.data = dataHandler.bind(this);
    this.assert = assertHandler.bind(this);
  } else {}
};
/**
 * Allow the monitor to log messages.
 * @public
 **/


Monitor.prototype.enable = function () {
  this._isEnabled = true;
};
/**
 * Disallow the monitor to log any messages.
 * @public
 **/


Monitor.prototype.disable = function () {
  this._isEnabled = false;
}; // ==== END ====================================================================


/* harmony default export */ __webpack_exports__["default"] = (Monitor);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9kYXRhLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2Rpc3BsYXktYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL21vbml0b3IuanMiXSwibmFtZXMiOlsiZGF0YVN0b3JhZ2UiLCJEYXRhU3RvcmFnZSIsImdldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VWZXJzaW9uIiwidGhlbiIsInZlcnNpb24iLCJzaG93T25lVGltZU1lc3NhZ2UiLCJkaXNwbGF5QmFkZ2UiLCJFWFRFTlNJT05fVVBEQVRFX01FU1NBR0VfVkVSU0lPTl9LRVkiLCJfbW9uaXRvciIsIk1vbml0b3IiLCJlbnRlciIsImV4aXQiLCJwcm90b3R5cGUiLCJfc2V0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiYXNzZXJ0Iiwia2V5VmFsdWVQYWlycyIsImlucHV0IiwiYnJvd3NlciIsInN0b3JhZ2UiLCJsb2NhbCIsInNldCIsImdldCIsInJlc3VsdHMiLCJvdXRwdXQiLCJfZ2V0VmFsdWUiLCJzZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlVmVyc2lvbiIsImJhZGdlVGV4dCIsImJhZGdlQ29sb3IiLCJiYWRnZVJlZEJhY2tncm91bmQiLCJiYWRnZUdyZXlCYWNrZ3JvdW5kIiwibW9uaXRvciIsImJyb3dzZXJBY3Rpb24iLCJzZXRCYWRnZVRleHRDb2xvciIsInNldEJhZGdlQmFja2dyb3VuZENvbG9yIiwic2V0QmFkZ2VUZXh0IiwiZGVmYXVsdEZsYWdzIiwia2V5U3RycyIsImVudGVySGFuZGxlciIsIm1lc3NhZ2UiLCJvYmoiLCJkaXNwbGF5TWVzc2FnZSIsImNhbGwiLCJfbGV2ZWwiLCJleGl0SGFuZGxlciIsImV2ZW50SGFuZGxlciIsImlucHV0SGFuZGxlciIsIm91dHB1dEhhbmRsZXIiLCJkYXRhSGFuZGxlciIsImFzc2VydEhhbmRsZXIiLCJleHByZXNzaW9uIiwiaXNXYXJuaW5nIiwiZ2V0S2V5U3RycyIsInBhZFN0YXJ0IiwiX2lzRW5hYmxlZCIsIl9mbGFncyIsImlkU3RyIiwiX2lkZW50aWZpZXIiLCJzdWJzdHJpbmciLCJwYWRFbmQiLCJrZXlTdHIiLCJjb25zb2xlIiwid2FybiIsImxvZyIsImlkZW50aWZpZXIiLCJvcHRGbGFncyIsIk9iamVjdCIsImFzc2lnbiIsInByb2Nlc3MiLCJiaW5kIiwiZXZlbnQiLCJkYXRhIiwiZW5hYmxlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTs7OztBQUlBOzs7Ozs7O0FBUWE7O0FBQ2I7Q0FHQTtBQUVBOztBQUNBLE1BQU1BLFdBQVcsR0FBRyxJQUFJQyw4REFBSixFQUFwQixDLENBRUE7O0FBQ0FELFdBQVcsQ0FBQ0Us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QUFjdUIsYUFBYSxDQUFDc0IsSUFBZCxDQUFtQixJQUFuQixDQUFkO0FBQ0EsU0FBS0UsSUFBTCxHQUFZdkIsV0FBVyxDQUFDcUIsSUFBWixDQUFpQixJQUFqQixDQUFaO0FBQ0EsU0FBS3RELE1BQUwsR0FBY2tDLGFBQWEsQ0FBQ29CLElBQWQsQ0FBbUIsSUFBbkIsQ0FBZDtBQUNBLEdBUkQsTUFRTyxFQVFOO0FBQ0QsQ0F0QkQ7QUF3QkE7Ozs7OztBQUlBL0QsT0FBTyxDQUFDRyxTQUFSLENBQWtCK0QsTUFBbEIsR0FBMkIsWUFBVztBQUNyQyxPQUFLbEIsVUFBTCxHQUFrQixJQUFsQjtBQUNBLENBRkQ7QUFJQTs7Ozs7O0FBSUFoRCxPQUFPLENBQUNHLFNBQVIsQ0FBa0JnRSxPQUFsQixHQUE0QixZQUFXO0FBQ3RDLE9BQUtuQixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsQ0FGRCxDLENBSUE7OztBQUVlaEQsc0VBQWYsRSIsImZpbGUiOiJiYWNrZ3JvdW5kL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzXCIpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLyoqXG4gKiBAb3ZlcnZpZXcgQmFja2dyb3VuZCBzY3JpcHQgb2YgdGhlIEFkIEFuYWx5c2lzIGZvciBGYWNlYm9vayBleHRlbnNpb24uXG4gKiAgICAgSW4gdGhpcyBkaXNhYmxlZCB2ZXJzaW9uIG9mIHRoZSBleHRlbnNpb24sIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdFxuICogICAgIGRpc3BsYXlzIGEgYmFkZ2Ugc2hvd2luZyBhbiBcIlhcIiBvdmVyIHRoZSB0b29sYmFyIGljb24gdG8gaW5kaWNhdGVcbiAqICAgICB0aGUgZXh0ZW5zaW9uIGhhcyBiZWVuIGRpc2FibGVkLlxuICogQGF1dGhvciBKYXNvbiBDaHVhbmcgPGpjaHVhbmdAbW96aWxsYS5jb20+XG4gKiovXG5cblwidXNlIHN0cmljdFwiO1xuaW1wb3J0IERhdGFTdG9yYWdlIGZyb20gXCJjb21tb24vZGF0YS1zdG9yYWdlLmpzXCI7XG5pbXBvcnQgZGlzcGxheUJhZGdlIGZyb20gXCJjb21tb24vZGlzcGxheS1iYWRnZS5qc1wiO1xuXG4vLyA9PT09IFNUQVJUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBBY2Nlc3MgcGVyc2lzdGVudCBkYXRhIHN0b3JhZ2UuXG5jb25zdCBkYXRhU3RvcmFnZSA9IG5ldyBEYXRhU3RvcmFnZSgpO1xuXG4vLyBEaXNwbGF5IGEgYmFkZ2Ugb3ZlciB0aGUgdG9vbGJhciBpY29uLlxuZGF0YVN0b3JhZ2UuZ2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVZlcnNpb24oKS50aGVuKHZlcnNpb24gPT4ge1xuXHRjb25zdCBzaG93T25lVGltZU1lc3NhZ2UgPSAhKHZlcnNpb24gJiYgdmVyc2lvbiA+PSAxLjEpO1xuXHRkaXNwbGF5QmFkZ2Uoc2hvd09uZVRpbWVNZXNzYWdlKTtcbn0pO1xuXG4vLyA9PT09IEVORCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLyoqXG4gKiBAb3ZlcnZpZXcgVXRpbGl0eSBsaWJyYXJ5IGZvciB0aGUgQWQgQW5hbHlzaXMgZm9yIEZhY2Vib29rIGV4dGVuc2lvbi5cbiAqICAgICBQcm92aWRlIHJlYWQgYW5kIHdyaXRlIGFjY2VzcyB0byB2YXJpYWJsZXMgaW4gbG9jYWwgc3RvcmFnZS5cbiAqIEBhdXRob3IgSmFzb24gQ2h1YW5nIDxqY2h1YW5nQG1vemlsbGEuY29tPlxuICoqL1xuXG5cInVzZSBzdHJpY3RcIjtcbmltcG9ydCBNb25pdG9yIGZyb20gXCJjb21tb24vbW9uaXRvci5qc1wiO1xuXG4vLyA9PT09IFNUQVJUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdGFudCB7c3RyaW5nfSBLZXkgZm9yIGRpc3BsYXlpbmcgb25lLXRpbWUgbWVzc2FnZXMgYWZ0ZXIgYW4gdXBkYXRlLlxuICoqL1xuY29uc3QgRVhURU5TSU9OX1VQREFURV9NRVNTQUdFX1ZFUlNJT05fS0VZID0gXCJleHRlbnNpb25VcGRhdGVNZXNzYWdlVmVyc2lvblwiO1xuXG4vKipcbiAqIEludGVyZmFjZSB0byBzdG9yZSBhbmQgcmV0cmlldmUgcGVyc2lzdGVudCBkYXRhLlxuICogQGNsYXNzXG4gKiovXG5jb25zdCBEYXRhU3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLl9tb25pdG9yID0gbmV3IE1vbml0b3IoXCJzdG9yYWdlXCIpO1xuXHR0aGlzLl9tb25pdG9yLmVudGVyKFwiRGF0YVN0b3JhZ2VcIik7XG5cdHRoaXMuX21vbml0b3IuZXhpdChcIkRhdGFTdG9yYWdlXCIpO1xufTtcblxuLy8gLS0tLSBQcml2YXRlIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGEgcGVyc2lzdGFudCB2YXJpYWJsZS5cbiAqIEBwcml2YXRlIEBhc3luY1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIEtleSBvZiB0aGUgdmFyaWFibGUuXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBWYWx1ZSBvZiB0aGUgdmFyaWFibGUuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBGaW5hbCB2YWx1ZSBvZiB0aGUgdmFyaWFibGUuXG4gKi9cbkRhdGFTdG9yYWdlLnByb3RvdHlwZS5fc2V0VmFsdWUgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHR0aGlzLl9tb25pdG9yLmVudGVyKFwiX3NldFZhbHVlXCIpO1xuXHRcdHRoaXMuX21vbml0b3IuYXNzZXJ0KHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIsIFwia2V5ID1cIiwga2V5KTtcblx0XHR0aGlzLl9tb25pdG9yLmFzc2VydCh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIsIFwidmFsdWUgPVwiLCB2YWx1ZSk7XG5cdFx0Y29uc3Qga2V5VmFsdWVQYWlycyA9IHt9O1xuXHRcdGtleVZhbHVlUGFpcnNba2V5XSA9IHZhbHVlO1xuXHRcdHRoaXMuX21vbml0b3IuaW5wdXQoa2V5VmFsdWVQYWlycyk7XG5cdFx0YnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldChrZXlWYWx1ZVBhaXJzKS50aGVuKCgpID0+IHtcblx0XHRcdGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoa2V5KS50aGVuKHJlc3VsdHMgPT4ge1xuXHRcdFx0XHR0aGlzLl9tb25pdG9yLm91dHB1dChyZXN1bHRzKTtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSByZXN1bHRzW2tleV07XG5cdFx0XHRcdHRoaXMuX21vbml0b3IuZXhpdChcIl9zZXRWYWx1ZVwiKTtcblx0XHRcdFx0cmVzb2x2ZSh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdmFsdWUgb2YgYSBwZXJzaXN0YW50IHZhcmlhYmxlLlxuICogQHByaXZhdGUgQGFzeW5jXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gS2V5IG9mIHRoZSB2YXJpYWJsZS5cbiAqIEByZXR1cm5zIHtvYmplY3R9IFZhbHVlIG9mIHRoZSB2YXJpYWJsZS5cbiAqKi9cbkRhdGFTdG9yYWdlLnByb3RvdHlwZS5fZ2V0VmFsdWUgPSBmdW5jdGlvbihrZXkpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdHRoaXMuX21vbml0b3IuZW50ZXIoXCJfZ2V0VmFsdWVcIik7XG5cdFx0dGhpcy5fbW9uaXRvci5hc3NlcnQodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiwgXCJrZXkgPVwiLCBrZXkpO1xuXHRcdGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoa2V5KS50aGVuKHJlc3VsdHMgPT4ge1xuXHRcdFx0dGhpcy5fbW9uaXRvci5vdXRwdXQocmVzdWx0cyk7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHJlc3VsdHNba2V5XTtcblx0XHRcdHRoaXMuX21vbml0b3IuZXhpdChcIl9nZXRWYWx1ZVwiKTtcblx0XHRcdHJlc29sdmUodmFsdWUpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIC0tLS0gUHVibGljIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZSBvZiBcImV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VWZXJzaW9uXCIuXG4gKiBAcHVibGljIEBhc3luY1xuICogQHBhcmFtIHtudW1iZXJ9IHZlcnNpb24gLSBMYXRlc3QgZXh0ZW5zaW9uIHZlcnNpb24uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBMYXRlc3QgZXh0ZW5zaW9uIHZlcnNpb24uXG4gKiovXG5EYXRhU3RvcmFnZS5wcm90b3R5cGUuc2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVZlcnNpb24gPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHR0aGlzLl9tb25pdG9yLmVudGVyKFwic2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVZlcnNpb25cIik7XG5cdFx0dGhpcy5fbW9uaXRvci5hc3NlcnQodHlwZW9mIHZlcnNpb24gPT09IFwibnVtYmVyXCIsIFwidmVyc2lvbiA9XCIsIHZlcnNpb24pO1xuXHRcdHRoaXMuX3NldFZhbHVlKEVYVEVOU0lPTl9VUERBVEVfTUVTU0FHRV9WRVJTSU9OX0tFWSwgdmVyc2lvbikudGhlbih2ZXJzaW9uID0+IHtcblx0XHRcdHRoaXMuX21vbml0b3IuZXhpdChcInNldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VWZXJzaW9uXCIpO1xuXHRcdFx0cmVzb2x2ZSh2ZXJzaW9uKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdmFsdWUgb2YgXCJleHRlbnNpb25VcGRhdGVNZXNzYWdlVmVyc2lvblwiLlxuICogQHB1YmxpYyBAYXN5bmNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IExhdGVzdCBleHRlbnNpb24gdmVyc2lvbi5cbiAqKi9cbkRhdGFTdG9yYWdlLnByb3RvdHlwZS5nZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlVmVyc2lvbiA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0dGhpcy5fbW9uaXRvci5lbnRlcihcImdldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VWZXJzaW9uXCIpO1xuXHRcdHRoaXMuX2dldFZhbHVlKEVYVEVOU0lPTl9VUERBVEVfTUVTU0FHRV9WRVJTSU9OX0tFWSkudGhlbih2ZXJzaW9uID0+IHtcblx0XHRcdHRoaXMuX21vbml0b3IuZXhpdChcImdldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VWZXJzaW9uXCIpO1xuXHRcdFx0cmVzb2x2ZSh2ZXJzaW9uKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyA9PT09IEVORCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhU3RvcmFnZTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbi8qKlxuICogQG92ZXJ2aWV3IFV0aWxpdHkgbGlicmFyeSBmb3IgdGhlIEFkIEFuYWx5c2lzIGZvciBGYWNlYm9vayBleHRlbnNpb24uXG4gKiAgICAgRGlzcGxheSBhIGJhZGdlIG92ZXIgdGhlIHRvb2xiYXIgaWNvbi5cbiAqIEBhdXRob3IgSmFzb24gQ2h1YW5nIDxqY2h1YW5nQG1vemlsbGEuY29tPlxuICoqL1xuXG5cInVzZSBzdHJpY3RcIjtcbmltcG9ydCBNb25pdG9yIGZyb20gXCJjb21tb24vbW9uaXRvci5qc1wiO1xuXG4vLyA9PT09IFNUQVJUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdCB7c3RyaW5nfSBUZXh0IG9mIHRoZSBiYWRnZSAoJ1gnIGZvciBkaXNhYmxlZCkuXG4gKiovXG5jb25zdCBiYWRnZVRleHQgPSBcIlhcIjtcblxuLyoqXG4gKiBAY29uc3Qge3N0cmluZ30gRm9yZWdyb3VuZCBjb2xvciBvZiB0aGUgYmFkZ2UgKHdoaXRlKS5cbiAqKi9cbmNvbnN0IGJhZGdlQ29sb3IgPSBcIiNmZmZcIjtcblxuLyoqXG4gKiBAY29uc3Qge3N0cmluZ30gQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYmFkZ2UgKHJlZCkuXG4gKiovXG5jb25zdCBiYWRnZVJlZEJhY2tncm91bmQgPSBcIiNkNjI3MjhcIjtcblxuLyoqXG4gKiBAY29uc3Qge3N0cmluZ30gQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYmFkZ2UgKGdyZXkpLlxuICoqL1xuY29uc3QgYmFkZ2VHcmV5QmFja2dyb3VuZCA9IFwiIzk5OVwiO1xuXG4vKipcbiAqIEBjb25zdCB7TW9uaXRvcn0gRXZlbnQgbG9nZ2VyLlxuICoqL1xuY29uc3QgbW9uaXRvciA9IG5ldyBNb25pdG9yKFwiYmFkZ2VcIik7XG5cbi8qKlxuICogRGlzcGxheSBhIGJhZGdlIG92ZXIgdGhlIHRvb2xiYXIgaWNvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd09uZVRpbWVNZXNzYWdlIC0gRGlzcGxheSBiYWRnZSBpbiByZWQuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IGRpc3BsYXlCYWRnZSA9IChzaG93T25lVGltZU1lc3NhZ2UgPSBmYWxzZSkgPT4ge1xuXHRtb25pdG9yLmVudGVyKFwiZGlzcGxheUJhZGdlXCIpO1xuXG5cdC8vIFNldCB0aGUgYmFkZ2UgY29sb3JzIGFuZCB0ZXh0XG5cdGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHRDb2xvcih7XG5cdFx0XCJjb2xvclwiOiBiYWRnZUNvbG9yLFxuXHR9KTtcblx0YnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHtcblx0XHRcImNvbG9yXCI6IHNob3dPbmVUaW1lTWVzc2FnZSA/IGJhZGdlUmVkQmFja2dyb3VuZCA6IGJhZGdlR3JleUJhY2tncm91bmQsXG5cdH0pO1xuXHRicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHtcblx0XHRcInRleHRcIjogYmFkZ2VUZXh0LFxuXHR9KTtcblxuXHRtb25pdG9yLmV4aXQoXCJkaXNwbGF5QmFkZ2VcIik7XG59O1xuXG4vLyA9PT09IEVORCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5QmFkZ2U7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vKipcbiAqIEBvdmVydmlldyBVdGlsaXR5IGxpYnJhcnkgZm9yIHRoZSBBZCBBbmFseXNpcyBmb3IgRmFjZWJvb2sgZXh0ZW5zaW9uLlxuICogICAgIEEgY29tYmluYXRpb24gb2YgbG9nZ2luZyBhbmQgbG9nIGZvcm1hdHRpbmcgdG9vbHMgdG8gYWlkIGRldmVsb3BtZW50LFxuICogICAgIGRlYnVnZ2luZywgYW5kIHRlc3RpbmcuIE1vc3Qgb2YgdGhlIGZ1bmNhdGlvbmFsaXRpZXMgYXJlIHJlbW92ZWQgaW5cbiAqICAgICB0aGUgcmVsZWFzZSBidWlsZC4gQWxsb3cgdmFyaW91cyBcInR5cGVzXCIgb2YgZXZlbnRzIHRvIGJlIGxvZ2dlZFxuICogICAgIHNlcGFyYXRlbHkgaW5jbHVkaW5nIHRyYWRpdGlvbmFsIGNvbnRyb2wgZmxvd3MsIGRhdGEgZXZlbnRzLCBhbmRcbiAqICAgICBicm93c2VyIGV4dGVuc2lvbiBjb21tdW5pY2F0aW9uLiBBbGxvdyBzaW1wbGUgYXNzZXJ0aW9ucy5cbiAqIEBhdXRob3IgSmFzb24gQ2h1YW5nIDxqY2h1YW5nQG1vemlsbGEuY29tPlxuICoqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gPT09PSBTVEFSVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3Qge29iamVjdH0gRGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCBldmVudCBrZXlzLlxuICoqL1xuY29uc3QgZGVmYXVsdEZsYWdzID0ge1xuXHRcImVudGVyXCI6IHRydWUsXG5cdFwiZXhpdFwiOiB0cnVlLFxuXHRcImV2ZW50XCI6IHRydWUsXG5cdFwiaW5wdXRcIjogdHJ1ZSxcblx0XCJvdXRwdXRcIjogdHJ1ZSxcblx0XCJkYXRhXCI6IHRydWUsXG5cdFwiYXNzZXJ0XCI6IHRydWUsXG59O1xuXG4vKipcbiAqIEBjb25zdCB7b2JqZWN0fSBWaXN1YWwgaW5kaWNhdG9ycyBieSBldmVudCBrZXlzLlxuICoqL1xuY29uc3Qga2V5U3RycyA9IHtcblx0XCJlbnRlclwiOiBcIi0+PlwiLFxuXHRcImV4aXRcIjogXCItPDxcIixcblx0XCJldmVudFwiOiBcIi0tLVwiLFxuXHRcImlucHV0XCI6IFwiID4gXCIsXG5cdFwib3V0cHV0XCI6IFwiIDwgXCIsXG5cdFwiZGF0YVwiOiBcIlwiLFxuXHRcImFzc2VydFwiOiBcIiEhIVwiLFxufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSBhbmQgaW5jcmVtZW50IHRoZSBuZXN0ZWQgZnVuY3Rpb24gbGV2ZWxzLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBlbnRlckhhbmRsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCBvYmopIHtcblx0ZGlzcGxheU1lc3NhZ2UuY2FsbCh0aGlzLCBcImVudGVyXCIsIG1lc3NhZ2UsIG9iaik7XG5cdHRoaXMuX2xldmVsKys7XG59O1xuXG4vKipcbiAqIERpc3BsYXkgYSBtZXNzYWdlIGFuZCBkZWNyZW1lbnQgdGhlIG5lc3RlZCBmdW5jdGlvbiBsZXZlbHMuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IGV4aXRIYW5kbGVyID0gZnVuY3Rpb24obWVzc2FnZSwgb2JqKSB7XG5cdHRoaXMuX2xldmVsLS07XG5cdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJleGl0XCIsIG1lc3NhZ2UsIG9iaik7XG59O1xuXG4vKipcbiAqIERpc3BsYXkgYSBtZXNzYWdlIHdpdGggZXZlbnQtcmVsYXRlZCBpbmRpY2F0b3JzLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBldmVudEhhbmRsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCBvYmopIHtcblx0ZGlzcGxheU1lc3NhZ2UuY2FsbCh0aGlzLCBcImV2ZW50XCIsIG1lc3NhZ2UsIG9iaik7XG59O1xuXG4vKipcbiAqIERpc3BsYXkgYSBtZXNzYWdlIHdpdGggaW5wdXQgKGZ1bmN0aW9uIGFyZ3VtZW50cykgaW5kaWNhdG9ycy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgaW5wdXRIYW5kbGVyID0gZnVuY3Rpb24obWVzc2FnZSwgb2JqKSB7XG5cdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJpbnB1dFwiLCBtZXNzYWdlLCBvYmopO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSB3aXRoIG91dHB1dCAoZnVuY3Rpb24gcmV0dXJucykgaW5kaWNhdG9ycy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3Qgb3V0cHV0SGFuZGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG9iaikge1xuXHRkaXNwbGF5TWVzc2FnZS5jYWxsKHRoaXMsIFwib3V0cHV0XCIsIG1lc3NhZ2UsIG9iaik7XG59O1xuXG4vKipcbiAqIERpc3BsYXkgYSBtZXNzYWdlIHdpdGggZGF0YSBpbmRpY2F0b3JzLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBkYXRhSGFuZGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG9iaikge1xuXHRkaXNwbGF5TWVzc2FnZS5jYWxsKHRoaXMsIFwiZGF0YVwiLCBtZXNzYWdlLCBvYmopO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSBpZiBhbiBhc3NlcnRpb24gZmFpbHMuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IGFzc2VydEhhbmRsZXIgPSBmdW5jdGlvbihleHByZXNzaW9uLCBtZXNzYWdlLCBvYmopIHtcblx0aWYgKCFleHByZXNzaW9uKSB7XG5cdFx0ZGlzcGxheU1lc3NhZ2UuY2FsbCh0aGlzLCBcImFzc2VydFwiLCBtZXNzYWdlLCBvYmosIHRydWUpO1xuXHR9XG59O1xuXG4vKipcbiAqIFByZXBhcmUgdG8gZGlzcGxheSBhIChuaWNlbHktZm9ybWF0dGVkKSBtZXNzYWdlLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBkaXNwbGF5TWVzc2FnZSA9IGZ1bmN0aW9uKGtleSwgbWVzc2FnZSwgb2JqLCBpc1dhcm5pbmcgPSBmYWxzZSkge1xuXHRjb25zdCBnZXRLZXlTdHJzID0gKGtleSkgPT4ge1xuXHRcdGlmIChrZXkgPT09IFwiZW50ZXJcIikge1xuXHRcdFx0cmV0dXJuIFwiW1wiICsga2V5U3Ryc1trZXldLnBhZFN0YXJ0KDMgKyB0aGlzLl9sZXZlbCAqIDIsIFwiLVwiKSArIFwiXVwiO1xuXHRcdH1cblx0XHRpZiAoa2V5ID09PSBcImV4aXRcIikge1xuXHRcdFx0cmV0dXJuIFwiW1wiICsga2V5U3Ryc1trZXldLnBhZFN0YXJ0KDMgKyB0aGlzLl9sZXZlbCAqIDIsIFwiLVwiKSArIFwiXVwiO1xuXHRcdH1cblx0XHRpZiAoa2V5ID09PSBcImRhdGFcIikge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fVxuXHRcdHJldHVybiBcIltcIiArIGtleVN0cnNba2V5XSArIFwiXVwiO1xuXHR9O1xuXHRpZiAodGhpcy5faXNFbmFibGVkICYmIHRoaXMuX2ZsYWdzW2tleV0pIHtcblx0XHRjb25zdCBpZFN0ciA9IGBbJHt0aGlzLl9pZGVudGlmaWVyLnN1YnN0cmluZygwLCAxMCkucGFkRW5kKDEwLCBcIiBcIil9XWA7XG5cdFx0Y29uc3Qga2V5U3RyID0gZ2V0S2V5U3RycyhrZXkpO1xuXHRcdGlmICh0eXBlb2Ygb2JqICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRpZiAoaXNXYXJuaW5nKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihpZFN0ciwga2V5U3RyLCBtZXNzYWdlLCBvYmopO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coaWRTdHIsIGtleVN0ciwgbWVzc2FnZSwgb2JqKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGlzV2FybmluZykge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oaWRTdHIsIGtleVN0ciwgbWVzc2FnZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhpZFN0ciwga2V5U3RyLCBtZXNzYWdlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogTW9uaXRvciBjbGFzcyB0byBsb2cgZGlmZmVyZW50IHR5cGVzIG9mIGV2ZW50cy5cbiAqIEBjbGFzc1xuICoqL1xuY29uc3QgTW9uaXRvciA9IGZ1bmN0aW9uKGlkZW50aWZpZXIsIG9wdEZsYWdzID0ge30pIHtcblx0dGhpcy5faWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG5cdHRoaXMuX2ZsYWdzID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0RmxhZ3MsIG9wdEZsYWdzKTtcblx0dGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcblx0dGhpcy5fbGV2ZWwgPSAwO1xuXHRpZiAocHJvY2Vzcy5lbnYuREVCVUcgPT09IFwidHJ1ZVwiKSB7XG5cdFx0dGhpcy5lbnRlciA9IGVudGVySGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZXhpdCA9IGV4aXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5ldmVudCA9IGV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaW5wdXQgPSBpbnB1dEhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLm91dHB1dCA9IG91dHB1dEhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmRhdGEgPSBkYXRhSGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuYXNzZXJ0ID0gYXNzZXJ0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuZW50ZXIgPSAoKSA9PiB7fTtcblx0XHR0aGlzLmV4aXQgPSAoKSA9PiB7fTtcblx0XHR0aGlzLmV2ZW50ID0gKCkgPT4ge307XG5cdFx0dGhpcy5pbnB1dCA9ICgpID0+IHt9O1xuXHRcdHRoaXMub3V0cHV0ID0gKCkgPT4ge307XG5cdFx0dGhpcy5kYXRhID0gKCkgPT4ge307XG5cdFx0dGhpcy5hc3NlcnQgPSBhc3NlcnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogQWxsb3cgdGhlIG1vbml0b3IgdG8gbG9nIG1lc3NhZ2VzLlxuICogQHB1YmxpY1xuICoqL1xuTW9uaXRvci5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIERpc2FsbG93IHRoZSBtb25pdG9yIHRvIGxvZyBhbnkgbWVzc2FnZXMuXG4gKiBAcHVibGljXG4gKiovXG5Nb25pdG9yLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlO1xufTtcblxuLy8gPT09PSBFTkQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGRlZmF1bHQgTW9uaXRvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=