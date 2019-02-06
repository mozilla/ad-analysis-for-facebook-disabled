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

dataStorage.getExtensionUpdateMessage().then(version => {
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

const EXTENSION_UPDATE_MESSAGE_KEY = "extensionUpdateMessage";
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
 * Set the value of "extensionUpdateMessage".
 * @public @async
 * @param {number} version - Latest extension version.
 * @returns {number} Latest extension version.
 **/


DataStorage.prototype.setExtensionUpdateMessage = function (version) {
  return new Promise(resolve => {
    this._monitor.enter("setExtensionUpdateMessage");

    this._monitor.assert(typeof version === "number", "version =", version);

    this._setValue(EXTENSION_UPDATE_MESSAGE_KEY, version).then(version => {
      this._monitor.exit("setExtensionUpdateMessage");

      resolve(version);
    });
  });
};
/**
 * Get the value of "extensionUpdateMessage".
 * @public @async
 * @returns {number} Latest extension version.
 **/


DataStorage.prototype.getExtensionUpdateMessage = function () {
  return new Promise(resolve => {
    this._monitor.enter("getExtensionUpdateMessage");

    this._getValue(EXTENSION_UPDATE_MESSAGE_KEY).then(version => {
      this._monitor.exit("getExtensionUpdateMessage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9kYXRhLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2Rpc3BsYXktYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL21vbml0b3IuanMiXSwibmFtZXMiOlsiZGF0YVN0b3JhZ2UiLCJEYXRhU3RvcmFnZSIsImdldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2UiLCJ0aGVuIiwidmVyc2lvbiIsInNob3dPbmVUaW1lTWVzc2FnZSIsImRpc3BsYXlCYWRnZSIsIkVYVEVOU0lPTl9VUERBVEVfTUVTU0FHRV9LRVkiLCJfbW9uaXRvciIsIk1vbml0b3IiLCJlbnRlciIsImV4aXQiLCJwcm90b3R5cGUiLCJfc2V0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiYXNzZXJ0Iiwia2V5VmFsdWVQYWlycyIsImlucHV0IiwiYnJvd3NlciIsInN0b3JhZ2UiLCJsb2NhbCIsInNldCIsImdldCIsInJlc3VsdHMiLCJvdXRwdXQiLCJfZ2V0VmFsdWUiLCJzZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlIiwiYmFkZ2VUZXh0IiwiYmFkZ2VDb2xvciIsImJhZGdlUmVkQmFja2dyb3VuZCIsImJhZGdlR3JleUJhY2tncm91bmQiLCJtb25pdG9yIiwiYnJvd3NlckFjdGlvbiIsInNldEJhZGdlVGV4dENvbG9yIiwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IiLCJzZXRCYWRnZVRleHQiLCJkZWZhdWx0RmxhZ3MiLCJrZXlTdHJzIiwiZW50ZXJIYW5kbGVyIiwibWVzc2FnZSIsIm9iaiIsImRpc3BsYXlNZXNzYWdlIiwiY2FsbCIsIl9sZXZlbCIsImV4aXRIYW5kbGVyIiwiZXZlbnRIYW5kbGVyIiwiaW5wdXRIYW5kbGVyIiwib3V0cHV0SGFuZGxlciIsImRhdGFIYW5kbGVyIiwiYXNzZXJ0SGFuZGxlciIsImV4cHJlc3Npb24iLCJpc1dhcm5pbmciLCJnZXRLZXlTdHJzIiwicGFkU3RhcnQiLCJfaXNFbmFibGVkIiwiX2ZsYWdzIiwiaWRTdHIiLCJfaWRlbnRpZmllciIsInN1YnN0cmluZyIsInBhZEVuZCIsImtleVN0ciIsImNvbnNvbGUiLCJ3YXJuIiwibG9nIiwiaWRlbnRpZmllciIsIm9wdEZsYWdzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvY2VzcyIsImJpbmQiLCJldmVudCIsImRhdGEiLCJlbmFibGUiLCJkaXNhYmxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBOzs7O0FBSUE7Ozs7Ozs7QUFRYTs7QUFDYjtDQUdBO0FBRUE7O0FBQ0EsTUFBTUEsV0FBVyxHQUFHLElBQUlDLDhEQUFKLEVBQXBCLEMsQ0FFQTs7QUFDQUQsV0FBVyxDQUFDRSx5QkFBWixHQUF3Q0MsSUFBeEMsQ0FB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LENBQW1CLElBQW5CLENBQWQ7QUFDQSxTQUFLRSxJQUFMLEdBQVl2QixXQUFXLENBQUNxQixJQUFaLENBQWlCLElBQWpCLENBQVo7QUFDQSxTQUFLdEQsTUFBTCxHQUFja0MsYUFBYSxDQUFDb0IsSUFBZCxDQUFtQixJQUFuQixDQUFkO0FBQ0EsR0FSRCxNQVFPLEVBUU47QUFDRCxDQXRCRDtBQXdCQTs7Ozs7O0FBSUEvRCxPQUFPLENBQUNHLFNBQVIsQ0FBa0IrRCxNQUFsQixHQUEyQixZQUFXO0FBQ3JDLE9BQUtsQixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsQ0FGRDtBQUlBOzs7Ozs7QUFJQWhELE9BQU8sQ0FBQ0csU0FBUixDQUFrQmdFLE9BQWxCLEdBQTRCLFlBQVc7QUFDdEMsT0FBS25CLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxDQUZELEMsQ0FJQTs7O0FBRWVoRCxzRUFBZixFIiwiZmlsZSI6ImJhY2tncm91bmQvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanNcIik7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vKipcbiAqIEBvdmVydmlldyBCYWNrZ3JvdW5kIHNjcmlwdCBvZiB0aGUgQWQgQW5hbHlzaXMgZm9yIEZhY2Vib29rIGV4dGVuc2lvbi5cbiAqICAgICBJbiB0aGlzIGRpc2FibGVkIHZlcnNpb24gb2YgdGhlIGV4dGVuc2lvbiwgdGhlIGJhY2tncm91bmQgc2NyaXB0XG4gKiAgICAgZGlzcGxheXMgYSBiYWRnZSBzaG93aW5nIGFuIFwiWFwiIG92ZXIgdGhlIHRvb2xiYXIgaWNvbiB0byBpbmRpY2F0ZVxuICogICAgIHRoZSBleHRlbnNpb24gaGFzIGJlZW4gZGlzYWJsZWQuXG4gKiBAYXV0aG9yIEphc29uIENodWFuZyA8amNodWFuZ0Btb3ppbGxhLmNvbT5cbiAqKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgRGF0YVN0b3JhZ2UgZnJvbSBcImNvbW1vbi9kYXRhLXN0b3JhZ2UuanNcIjtcbmltcG9ydCBkaXNwbGF5QmFkZ2UgZnJvbSBcImNvbW1vbi9kaXNwbGF5LWJhZGdlLmpzXCI7XG5cbi8vID09PT0gU1RBUlQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEFjY2VzcyBwZXJzaXN0ZW50IGRhdGEgc3RvcmFnZS5cbmNvbnN0IGRhdGFTdG9yYWdlID0gbmV3IERhdGFTdG9yYWdlKCk7XG5cbi8vIERpc3BsYXkgYSBiYWRnZSBvdmVyIHRoZSB0b29sYmFyIGljb24uXG5kYXRhU3RvcmFnZS5nZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlKCkudGhlbih2ZXJzaW9uID0+IHtcblx0Y29uc3Qgc2hvd09uZVRpbWVNZXNzYWdlID0gISh2ZXJzaW9uICYmIHZlcnNpb24gPj0gMS4xKTtcblx0ZGlzcGxheUJhZGdlKHNob3dPbmVUaW1lTWVzc2FnZSk7XG59KTtcblxuLy8gPT09PSBFTkQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbi8qKlxuICogQG92ZXJ2aWV3IFV0aWxpdHkgbGlicmFyeSBmb3IgdGhlIEFkIEFuYWx5c2lzIGZvciBGYWNlYm9vayBleHRlbnNpb24uXG4gKiAgICAgUHJvdmlkZSByZWFkIGFuZCB3cml0ZSBhY2Nlc3MgdG8gdmFyaWFibGVzIGluIGxvY2FsIHN0b3JhZ2UuXG4gKiBAYXV0aG9yIEphc29uIENodWFuZyA8amNodWFuZ0Btb3ppbGxhLmNvbT5cbiAqKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgTW9uaXRvciBmcm9tIFwiY29tbW9uL21vbml0b3IuanNcIjtcblxuLy8gPT09PSBTVEFSVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RhbnQge3N0cmluZ30gS2V5IGZvciBkaXNwbGF5aW5nIG9uZS10aW1lIG1lc3NhZ2VzIGFmdGVyIGFuIHVwZGF0ZS5cbiAqKi9cbmNvbnN0IEVYVEVOU0lPTl9VUERBVEVfTUVTU0FHRV9LRVkgPSBcImV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VcIjtcblxuLyoqXG4gKiBJbnRlcmZhY2UgdG8gc3RvcmUgYW5kIHJldHJpZXZlIHBlcnNpc3RlbnQgZGF0YS5cbiAqIEBjbGFzc1xuICoqL1xuY29uc3QgRGF0YVN0b3JhZ2UgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5fbW9uaXRvciA9IG5ldyBNb25pdG9yKFwic3RvcmFnZVwiKTtcblx0dGhpcy5fbW9uaXRvci5lbnRlcihcIkRhdGFTdG9yYWdlXCIpO1xuXHR0aGlzLl9tb25pdG9yLmV4aXQoXCJEYXRhU3RvcmFnZVwiKTtcbn07XG5cbi8vIC0tLS0gUHJpdmF0ZSBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZSBvZiBhIHBlcnNpc3RhbnQgdmFyaWFibGUuXG4gKiBAcHJpdmF0ZSBAYXN5bmNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBLZXkgb2YgdGhlIHZhcmlhYmxlLlxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVmFsdWUgb2YgdGhlIHZhcmlhYmxlLlxuICogQHJldHVybnMge29iamVjdH0gRmluYWwgdmFsdWUgb2YgdGhlIHZhcmlhYmxlLlxuICovXG5EYXRhU3RvcmFnZS5wcm90b3R5cGUuX3NldFZhbHVlID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0dGhpcy5fbW9uaXRvci5lbnRlcihcIl9zZXRWYWx1ZVwiKTtcblx0XHR0aGlzLl9tb25pdG9yLmFzc2VydCh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiLCBcImtleSA9XCIsIGtleSk7XG5cdFx0dGhpcy5fbW9uaXRvci5hc3NlcnQodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiLCBcInZhbHVlID1cIiwgdmFsdWUpO1xuXHRcdGNvbnN0IGtleVZhbHVlUGFpcnMgPSB7fTtcblx0XHRrZXlWYWx1ZVBhaXJzW2tleV0gPSB2YWx1ZTtcblx0XHR0aGlzLl9tb25pdG9yLmlucHV0KGtleVZhbHVlUGFpcnMpO1xuXHRcdGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoa2V5VmFsdWVQYWlycykudGhlbigoKSA9PiB7XG5cdFx0XHRicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSkudGhlbihyZXN1bHRzID0+IHtcblx0XHRcdFx0dGhpcy5fbW9uaXRvci5vdXRwdXQocmVzdWx0cyk7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gcmVzdWx0c1trZXldO1xuXHRcdFx0XHR0aGlzLl9tb25pdG9yLmV4aXQoXCJfc2V0VmFsdWVcIik7XG5cdFx0XHRcdHJlc29sdmUodmFsdWUpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGEgcGVyc2lzdGFudCB2YXJpYWJsZS5cbiAqIEBwcml2YXRlIEBhc3luY1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIEtleSBvZiB0aGUgdmFyaWFibGUuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBWYWx1ZSBvZiB0aGUgdmFyaWFibGUuXG4gKiovXG5EYXRhU3RvcmFnZS5wcm90b3R5cGUuX2dldFZhbHVlID0gZnVuY3Rpb24oa2V5KSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHR0aGlzLl9tb25pdG9yLmVudGVyKFwiX2dldFZhbHVlXCIpO1xuXHRcdHRoaXMuX21vbml0b3IuYXNzZXJ0KHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIsIFwia2V5ID1cIiwga2V5KTtcblx0XHRicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSkudGhlbihyZXN1bHRzID0+IHtcblx0XHRcdHRoaXMuX21vbml0b3Iub3V0cHV0KHJlc3VsdHMpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSByZXN1bHRzW2tleV07XG5cdFx0XHR0aGlzLl9tb25pdG9yLmV4aXQoXCJfZ2V0VmFsdWVcIik7XG5cdFx0XHRyZXNvbHZlKHZhbHVlKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyAtLS0tIFB1YmxpYyBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFNldCB0aGUgdmFsdWUgb2YgXCJleHRlbnNpb25VcGRhdGVNZXNzYWdlXCIuXG4gKiBAcHVibGljIEBhc3luY1xuICogQHBhcmFtIHtudW1iZXJ9IHZlcnNpb24gLSBMYXRlc3QgZXh0ZW5zaW9uIHZlcnNpb24uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBMYXRlc3QgZXh0ZW5zaW9uIHZlcnNpb24uXG4gKiovXG5EYXRhU3RvcmFnZS5wcm90b3R5cGUuc2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdHRoaXMuX21vbml0b3IuZW50ZXIoXCJzZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlXCIpO1xuXHRcdHRoaXMuX21vbml0b3IuYXNzZXJ0KHR5cGVvZiB2ZXJzaW9uID09PSBcIm51bWJlclwiLCBcInZlcnNpb24gPVwiLCB2ZXJzaW9uKTtcblx0XHR0aGlzLl9zZXRWYWx1ZShFWFRFTlNJT05fVVBEQVRFX01FU1NBR0VfS0VZLCB2ZXJzaW9uKS50aGVuKHZlcnNpb24gPT4ge1xuXHRcdFx0dGhpcy5fbW9uaXRvci5leGl0KFwic2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVwiKTtcblx0XHRcdHJlc29sdmUodmVyc2lvbik7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIFwiZXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVwiLlxuICogQHB1YmxpYyBAYXN5bmNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IExhdGVzdCBleHRlbnNpb24gdmVyc2lvbi5cbiAqKi9cbkRhdGFTdG9yYWdlLnByb3RvdHlwZS5nZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHR0aGlzLl9tb25pdG9yLmVudGVyKFwiZ2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVwiKTtcblx0XHR0aGlzLl9nZXRWYWx1ZShFWFRFTlNJT05fVVBEQVRFX01FU1NBR0VfS0VZKS50aGVuKHZlcnNpb24gPT4ge1xuXHRcdFx0dGhpcy5fbW9uaXRvci5leGl0KFwiZ2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVwiKTtcblx0XHRcdHJlc29sdmUodmVyc2lvbik7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gPT09PSBFTkQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVN0b3JhZ2U7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vKipcbiAqIEBvdmVydmlldyBVdGlsaXR5IGxpYnJhcnkgZm9yIHRoZSBBZCBBbmFseXNpcyBmb3IgRmFjZWJvb2sgZXh0ZW5zaW9uLlxuICogICAgIERpc3BsYXkgYSBiYWRnZSBvdmVyIHRoZSB0b29sYmFyIGljb24uXG4gKiBAYXV0aG9yIEphc29uIENodWFuZyA8amNodWFuZ0Btb3ppbGxhLmNvbT5cbiAqKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgTW9uaXRvciBmcm9tIFwiY29tbW9uL21vbml0b3IuanNcIjtcblxuLy8gPT09PSBTVEFSVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3Qge3N0cmluZ30gVGV4dCBvZiB0aGUgYmFkZ2UgKCdYJyBmb3IgZGlzYWJsZWQpLlxuICoqL1xuY29uc3QgYmFkZ2VUZXh0ID0gXCJYXCI7XG5cbi8qKlxuICogQGNvbnN0IHtzdHJpbmd9IEZvcmVncm91bmQgY29sb3Igb2YgdGhlIGJhZGdlICh3aGl0ZSkuXG4gKiovXG5jb25zdCBiYWRnZUNvbG9yID0gXCIjZmZmXCI7XG5cbi8qKlxuICogQGNvbnN0IHtzdHJpbmd9IEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJhZGdlIChyZWQpLlxuICoqL1xuY29uc3QgYmFkZ2VSZWRCYWNrZ3JvdW5kID0gXCIjZDYyNzI4XCI7XG5cbi8qKlxuICogQGNvbnN0IHtzdHJpbmd9IEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJhZGdlIChncmV5KS5cbiAqKi9cbmNvbnN0IGJhZGdlR3JleUJhY2tncm91bmQgPSBcIiM5OTlcIjtcblxuLyoqXG4gKiBAY29uc3Qge01vbml0b3J9IEV2ZW50IGxvZ2dlci5cbiAqKi9cbmNvbnN0IG1vbml0b3IgPSBuZXcgTW9uaXRvcihcImJhZGdlXCIpO1xuXG4vKipcbiAqIERpc3BsYXkgYSBiYWRnZSBvdmVyIHRoZSB0b29sYmFyIGljb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dPbmVUaW1lTWVzc2FnZSAtIERpc3BsYXkgYmFkZ2UgaW4gcmVkLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBkaXNwbGF5QmFkZ2UgPSAoc2hvd09uZVRpbWVNZXNzYWdlID0gZmFsc2UpID0+IHtcblx0bW9uaXRvci5lbnRlcihcImRpc3BsYXlCYWRnZVwiKTtcblxuXHQvLyBTZXQgdGhlIGJhZGdlIGNvbG9ycyBhbmQgdGV4dFxuXHRicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0Q29sb3Ioe1xuXHRcdFwiY29sb3JcIjogYmFkZ2VDb2xvcixcblx0fSk7XG5cdGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7XG5cdFx0XCJjb2xvclwiOiBzaG93T25lVGltZU1lc3NhZ2UgPyBiYWRnZVJlZEJhY2tncm91bmQgOiBiYWRnZUdyZXlCYWNrZ3JvdW5kLFxuXHR9KTtcblx0YnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7XG5cdFx0XCJ0ZXh0XCI6IGJhZGdlVGV4dCxcblx0fSk7XG5cblx0bW9uaXRvci5leGl0KFwiZGlzcGxheUJhZGdlXCIpO1xufTtcblxuLy8gPT09PSBFTkQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUJhZGdlO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLyoqXG4gKiBAb3ZlcnZpZXcgVXRpbGl0eSBsaWJyYXJ5IGZvciB0aGUgQWQgQW5hbHlzaXMgZm9yIEZhY2Vib29rIGV4dGVuc2lvbi5cbiAqICAgICBBIGNvbWJpbmF0aW9uIG9mIGxvZ2dpbmcgYW5kIGxvZyBmb3JtYXR0aW5nIHRvb2xzIHRvIGFpZCBkZXZlbG9wbWVudCxcbiAqICAgICBkZWJ1Z2dpbmcsIGFuZCB0ZXN0aW5nLiBNb3N0IG9mIHRoZSBmdW5jYXRpb25hbGl0aWVzIGFyZSByZW1vdmVkIGluXG4gKiAgICAgdGhlIHJlbGVhc2UgYnVpbGQuIEFsbG93IHZhcmlvdXMgXCJ0eXBlc1wiIG9mIGV2ZW50cyB0byBiZSBsb2dnZWRcbiAqICAgICBzZXBhcmF0ZWx5IGluY2x1ZGluZyB0cmFkaXRpb25hbCBjb250cm9sIGZsb3dzLCBkYXRhIGV2ZW50cywgYW5kXG4gKiAgICAgYnJvd3NlciBleHRlbnNpb24gY29tbXVuaWNhdGlvbi4gQWxsb3cgc2ltcGxlIGFzc2VydGlvbnMuXG4gKiBAYXV0aG9yIEphc29uIENodWFuZyA8amNodWFuZ0Btb3ppbGxhLmNvbT5cbiAqKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vID09PT0gU1RBUlQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0IHtvYmplY3R9IERlZmF1bHQgdmFsdWVzIGZvciBhbGwgZXZlbnQga2V5cy5cbiAqKi9cbmNvbnN0IGRlZmF1bHRGbGFncyA9IHtcblx0XCJlbnRlclwiOiB0cnVlLFxuXHRcImV4aXRcIjogdHJ1ZSxcblx0XCJldmVudFwiOiB0cnVlLFxuXHRcImlucHV0XCI6IHRydWUsXG5cdFwib3V0cHV0XCI6IHRydWUsXG5cdFwiZGF0YVwiOiB0cnVlLFxuXHRcImFzc2VydFwiOiB0cnVlLFxufTtcblxuLyoqXG4gKiBAY29uc3Qge29iamVjdH0gVmlzdWFsIGluZGljYXRvcnMgYnkgZXZlbnQga2V5cy5cbiAqKi9cbmNvbnN0IGtleVN0cnMgPSB7XG5cdFwiZW50ZXJcIjogXCItPj5cIixcblx0XCJleGl0XCI6IFwiLTw8XCIsXG5cdFwiZXZlbnRcIjogXCItLS1cIixcblx0XCJpbnB1dFwiOiBcIiA+IFwiLFxuXHRcIm91dHB1dFwiOiBcIiA8IFwiLFxuXHRcImRhdGFcIjogXCJcIixcblx0XCJhc3NlcnRcIjogXCIhISFcIixcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2UgYW5kIGluY3JlbWVudCB0aGUgbmVzdGVkIGZ1bmN0aW9uIGxldmVscy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZW50ZXJIYW5kbGVyID0gZnVuY3Rpb24obWVzc2FnZSwgb2JqKSB7XG5cdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJlbnRlclwiLCBtZXNzYWdlLCBvYmopO1xuXHR0aGlzLl9sZXZlbCsrO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSBhbmQgZGVjcmVtZW50IHRoZSBuZXN0ZWQgZnVuY3Rpb24gbGV2ZWxzLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBleGl0SGFuZGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG9iaikge1xuXHR0aGlzLl9sZXZlbC0tO1xuXHRkaXNwbGF5TWVzc2FnZS5jYWxsKHRoaXMsIFwiZXhpdFwiLCBtZXNzYWdlLCBvYmopO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSB3aXRoIGV2ZW50LXJlbGF0ZWQgaW5kaWNhdG9ycy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZXZlbnRIYW5kbGVyID0gZnVuY3Rpb24obWVzc2FnZSwgb2JqKSB7XG5cdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJldmVudFwiLCBtZXNzYWdlLCBvYmopO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSB3aXRoIGlucHV0IChmdW5jdGlvbiBhcmd1bWVudHMpIGluZGljYXRvcnMuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IGlucHV0SGFuZGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG9iaikge1xuXHRkaXNwbGF5TWVzc2FnZS5jYWxsKHRoaXMsIFwiaW5wdXRcIiwgbWVzc2FnZSwgb2JqKTtcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2Ugd2l0aCBvdXRwdXQgKGZ1bmN0aW9uIHJldHVybnMpIGluZGljYXRvcnMuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IG91dHB1dEhhbmRsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCBvYmopIHtcblx0ZGlzcGxheU1lc3NhZ2UuY2FsbCh0aGlzLCBcIm91dHB1dFwiLCBtZXNzYWdlLCBvYmopO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSB3aXRoIGRhdGEgaW5kaWNhdG9ycy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZGF0YUhhbmRsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCBvYmopIHtcblx0ZGlzcGxheU1lc3NhZ2UuY2FsbCh0aGlzLCBcImRhdGFcIiwgbWVzc2FnZSwgb2JqKTtcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2UgaWYgYW4gYXNzZXJ0aW9uIGZhaWxzLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBhc3NlcnRIYW5kbGVyID0gZnVuY3Rpb24oZXhwcmVzc2lvbiwgbWVzc2FnZSwgb2JqKSB7XG5cdGlmICghZXhwcmVzc2lvbikge1xuXHRcdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJhc3NlcnRcIiwgbWVzc2FnZSwgb2JqLCB0cnVlKTtcblx0fVxufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRvIGRpc3BsYXkgYSAobmljZWx5LWZvcm1hdHRlZCkgbWVzc2FnZS5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZGlzcGxheU1lc3NhZ2UgPSBmdW5jdGlvbihrZXksIG1lc3NhZ2UsIG9iaiwgaXNXYXJuaW5nID0gZmFsc2UpIHtcblx0Y29uc3QgZ2V0S2V5U3RycyA9IChrZXkpID0+IHtcblx0XHRpZiAoa2V5ID09PSBcImVudGVyXCIpIHtcblx0XHRcdHJldHVybiBcIltcIiArIGtleVN0cnNba2V5XS5wYWRTdGFydCgzICsgdGhpcy5fbGV2ZWwgKiAyLCBcIi1cIikgKyBcIl1cIjtcblx0XHR9XG5cdFx0aWYgKGtleSA9PT0gXCJleGl0XCIpIHtcblx0XHRcdHJldHVybiBcIltcIiArIGtleVN0cnNba2V5XS5wYWRTdGFydCgzICsgdGhpcy5fbGV2ZWwgKiAyLCBcIi1cIikgKyBcIl1cIjtcblx0XHR9XG5cdFx0aWYgKGtleSA9PT0gXCJkYXRhXCIpIHtcblx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH1cblx0XHRyZXR1cm4gXCJbXCIgKyBrZXlTdHJzW2tleV0gKyBcIl1cIjtcblx0fTtcblx0aWYgKHRoaXMuX2lzRW5hYmxlZCAmJiB0aGlzLl9mbGFnc1trZXldKSB7XG5cdFx0Y29uc3QgaWRTdHIgPSBgWyR7dGhpcy5faWRlbnRpZmllci5zdWJzdHJpbmcoMCwgMTApLnBhZEVuZCgxMCwgXCIgXCIpfV1gO1xuXHRcdGNvbnN0IGtleVN0ciA9IGdldEtleVN0cnMoa2V5KTtcblx0XHRpZiAodHlwZW9mIG9iaiAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0aWYgKGlzV2FybmluZykge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oaWRTdHIsIGtleVN0ciwgbWVzc2FnZSwgb2JqKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGlkU3RyLCBrZXlTdHIsIG1lc3NhZ2UsIG9iaik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChpc1dhcm5pbmcpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGlkU3RyLCBrZXlTdHIsIG1lc3NhZ2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coaWRTdHIsIGtleVN0ciwgbWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vKipcbiAqIE1vbml0b3IgY2xhc3MgdG8gbG9nIGRpZmZlcmVudCB0eXBlcyBvZiBldmVudHMuXG4gKiBAY2xhc3NcbiAqKi9cbmNvbnN0IE1vbml0b3IgPSBmdW5jdGlvbihpZGVudGlmaWVyLCBvcHRGbGFncyA9IHt9KSB7XG5cdHRoaXMuX2lkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXHR0aGlzLl9mbGFncyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdEZsYWdzLCBvcHRGbGFncyk7XG5cdHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG5cdHRoaXMuX2xldmVsID0gMDtcblx0aWYgKHByb2Nlc3MuZW52LkRFQlVHID09PSBcInRydWVcIikge1xuXHRcdHRoaXMuZW50ZXIgPSBlbnRlckhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmV4aXQgPSBleGl0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZXZlbnQgPSBldmVudEhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmlucHV0ID0gaW5wdXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vdXRwdXQgPSBvdXRwdXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kYXRhID0gZGF0YUhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmFzc2VydCA9IGFzc2VydEhhbmRsZXIuYmluZCh0aGlzKTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLmVudGVyID0gKCkgPT4ge307XG5cdFx0dGhpcy5leGl0ID0gKCkgPT4ge307XG5cdFx0dGhpcy5ldmVudCA9ICgpID0+IHt9O1xuXHRcdHRoaXMuaW5wdXQgPSAoKSA9PiB7fTtcblx0XHR0aGlzLm91dHB1dCA9ICgpID0+IHt9O1xuXHRcdHRoaXMuZGF0YSA9ICgpID0+IHt9O1xuXHRcdHRoaXMuYXNzZXJ0ID0gYXNzZXJ0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG59O1xuXG4vKipcbiAqIEFsbG93IHRoZSBtb25pdG9yIHRvIGxvZyBtZXNzYWdlcy5cbiAqIEBwdWJsaWNcbiAqKi9cbk1vbml0b3IucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBEaXNhbGxvdyB0aGUgbW9uaXRvciB0byBsb2cgYW55IG1lc3NhZ2VzLlxuICogQHB1YmxpY1xuICoqL1xuTW9uaXRvci5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZTtcbn07XG5cbi8vID09PT0gRU5EID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBkZWZhdWx0IE1vbml0b3I7XG4iXSwic291cmNlUm9vdCI6IiJ9