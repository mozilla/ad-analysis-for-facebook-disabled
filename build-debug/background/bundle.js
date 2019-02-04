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
/* harmony import */ var _common_data_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/data-storage.js */ "./common/data-storage.js");
/* harmony import */ var _common_display_badge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/display-badge.js */ "./common/display-badge.js");



 // ==== START ==================================================================
// Access persistent data storage.

const dataStorage = new _common_data_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"](); // Display a badge over the toolbar icon.

dataStorage.getExtensionUpdateMessage().then(version => {
  const showOneTimeMessage = !(version && version >= 1.1);
  Object(_common_display_badge_js__WEBPACK_IMPORTED_MODULE_1__["default"])(showOneTimeMessage);
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
/* harmony import */ var _common_monitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/monitor.js */ "./common/monitor.js");


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
  this._monitor = new _common_monitor_js__WEBPACK_IMPORTED_MODULE_0__["default"]("storage");

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
/* harmony import */ var _common_monitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/monitor.js */ "./common/monitor.js");


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

const monitor = new _common_monitor_js__WEBPACK_IMPORTED_MODULE_0__["default"]("badge");
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
 * Prepare to display a message.
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
 * @constructor
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
};

/* harmony default export */ __webpack_exports__["default"] = (Monitor);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9kYXRhLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2Rpc3BsYXktYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL21vbml0b3IuanMiXSwibmFtZXMiOlsiZGF0YVN0b3JhZ2UiLCJEYXRhU3RvcmFnZSIsImdldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2UiLCJ0aGVuIiwidmVyc2lvbiIsInNob3dPbmVUaW1lTWVzc2FnZSIsImRpc3BsYXlCYWRnZSIsIkVYVEVOU0lPTl9VUERBVEVfTUVTU0FHRV9LRVkiLCJfbW9uaXRvciIsIk1vbml0b3IiLCJlbnRlciIsImV4aXQiLCJwcm90b3R5cGUiLCJfc2V0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiYXNzZXJ0Iiwia2V5VmFsdWVQYWlycyIsImlucHV0IiwiYnJvd3NlciIsInN0b3JhZ2UiLCJsb2NhbCIsInNldCIsImdldCIsInJlc3VsdHMiLCJvdXRwdXQiLCJfZ2V0VmFsdWUiLCJzZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlIiwiYmFkZ2VUZXh0IiwiYmFkZ2VDb2xvciIsImJhZGdlUmVkQmFja2dyb3VuZCIsImJhZGdlR3JleUJhY2tncm91bmQiLCJtb25pdG9yIiwiYnJvd3NlckFjdGlvbiIsInNldEJhZGdlVGV4dENvbG9yIiwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IiLCJzZXRCYWRnZVRleHQiLCJkZWZhdWx0RmxhZ3MiLCJrZXlTdHJzIiwiZW50ZXJIYW5kbGVyIiwibWVzc2FnZSIsIm9iaiIsImRpc3BsYXlNZXNzYWdlIiwiY2FsbCIsIl9sZXZlbCIsImV4aXRIYW5kbGVyIiwiZXZlbnRIYW5kbGVyIiwiaW5wdXRIYW5kbGVyIiwib3V0cHV0SGFuZGxlciIsImRhdGFIYW5kbGVyIiwiYXNzZXJ0SGFuZGxlciIsImV4cHJlc3Npb24iLCJpc1dhcm5pbmciLCJnZXRLZXlTdHJzIiwicGFkU3RhcnQiLCJfaXNFbmFibGVkIiwiX2ZsYWdzIiwiaWRTdHIiLCJfaWRlbnRpZmllciIsInN1YnN0cmluZyIsInBhZEVuZCIsImtleVN0ciIsImNvbnNvbGUiLCJ3YXJuIiwibG9nIiwiaWRlbnRpZmllciIsIm9wdEZsYWdzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvY2VzcyIsImJpbmQiLCJldmVudCIsImRhdGEiLCJlbmFibGUiLCJkaXNhYmxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFhOztBQUViO0NBR0E7QUFFQTs7QUFDQSxNQUFNQSxXQUFXLEdBQUcsSUFBSUMsK0RBQUosRUFBcEIsQyxDQUVBOztBQUNBRCxXQUFXLENBQUNFLHlCQUFaLEdBQXdDQyxJQUF4QyxDQUE2Q0MsT0FBTyxJQUFJO0FBQ3ZE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QUFDQSxTQUFLdEQsTUFBTCxHQUFja0MsYUFBYSxDQUFDb0IsSUFBZCxDQUFtQixJQUFuQixDQUFkO0FBQ0EsR0FSRCxNQVFPLEVBUU47QUFDRCxDQXRCRDtBQXdCQTs7Ozs7O0FBSUEvRCxPQUFPLENBQUNHLFNBQVIsQ0FBa0IrRCxNQUFsQixHQUEyQixZQUFXO0FBQ3JDLE9BQUtsQixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsQ0FGRDtBQUlBOzs7Ozs7QUFJQWhELE9BQU8sQ0FBQ0csU0FBUixDQUFrQmdFLE9BQWxCLEdBQTRCLFlBQVc7QUFDdEMsT0FBS25CLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxDQUZEOztBQUllaEQsc0VBQWYsRSIsImZpbGUiOiJiYWNrZ3JvdW5kL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEYXRhU3RvcmFnZSBmcm9tIFwiLi4vY29tbW9uL2RhdGEtc3RvcmFnZS5qc1wiO1xuaW1wb3J0IGRpc3BsYXlCYWRnZSBmcm9tIFwiLi4vY29tbW9uL2Rpc3BsYXktYmFkZ2UuanNcIjtcblxuLy8gPT09PSBTVEFSVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gQWNjZXNzIHBlcnNpc3RlbnQgZGF0YSBzdG9yYWdlLlxuY29uc3QgZGF0YVN0b3JhZ2UgPSBuZXcgRGF0YVN0b3JhZ2UoKTtcblxuLy8gRGlzcGxheSBhIGJhZGdlIG92ZXIgdGhlIHRvb2xiYXIgaWNvbi5cbmRhdGFTdG9yYWdlLmdldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2UoKS50aGVuKHZlcnNpb24gPT4ge1xuXHRjb25zdCBzaG93T25lVGltZU1lc3NhZ2UgPSAhKHZlcnNpb24gJiYgdmVyc2lvbiA+PSAxLjEpO1xuXHRkaXNwbGF5QmFkZ2Uoc2hvd09uZVRpbWVNZXNzYWdlKTtcbn0pO1xuXG4vLyA9PT09IEVORCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNb25pdG9yIGZyb20gXCIuLi9jb21tb24vbW9uaXRvci5qc1wiO1xuXG4vLyA9PT09IFNUQVJUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdGFudCB7c3RyaW5nfSBLZXkgZm9yIGRpc3BsYXlpbmcgb25lLXRpbWUgbWVzc2FnZXMgYWZ0ZXIgYW4gdXBkYXRlLlxuICoqL1xuY29uc3QgRVhURU5TSU9OX1VQREFURV9NRVNTQUdFX0tFWSA9IFwiZXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVwiO1xuXG4vKipcbiAqIEludGVyZmFjZSB0byBzdG9yZSBhbmQgcmV0cmlldmUgcGVyc2lzdGVudCBkYXRhLlxuICogQGNsYXNzXG4gKiovXG5jb25zdCBEYXRhU3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLl9tb25pdG9yID0gbmV3IE1vbml0b3IoXCJzdG9yYWdlXCIpO1xuXHR0aGlzLl9tb25pdG9yLmVudGVyKFwiRGF0YVN0b3JhZ2VcIik7XG5cdHRoaXMuX21vbml0b3IuZXhpdChcIkRhdGFTdG9yYWdlXCIpO1xufTtcblxuLy8gLS0tLSBQcml2YXRlIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGEgcGVyc2lzdGFudCB2YXJpYWJsZS5cbiAqIEBwcml2YXRlIEBhc3luY1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIEtleSBvZiB0aGUgdmFyaWFibGUuXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBWYWx1ZSBvZiB0aGUgdmFyaWFibGUuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBGaW5hbCB2YWx1ZSBvZiB0aGUgdmFyaWFibGUuXG4gKi9cbkRhdGFTdG9yYWdlLnByb3RvdHlwZS5fc2V0VmFsdWUgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHR0aGlzLl9tb25pdG9yLmVudGVyKFwiX3NldFZhbHVlXCIpO1xuXHRcdHRoaXMuX21vbml0b3IuYXNzZXJ0KHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIsIFwia2V5ID1cIiwga2V5KTtcblx0XHR0aGlzLl9tb25pdG9yLmFzc2VydCh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIsIFwidmFsdWUgPVwiLCB2YWx1ZSk7XG5cdFx0Y29uc3Qga2V5VmFsdWVQYWlycyA9IHt9O1xuXHRcdGtleVZhbHVlUGFpcnNba2V5XSA9IHZhbHVlO1xuXHRcdHRoaXMuX21vbml0b3IuaW5wdXQoa2V5VmFsdWVQYWlycyk7XG5cdFx0YnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldChrZXlWYWx1ZVBhaXJzKS50aGVuKCgpID0+IHtcblx0XHRcdGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoa2V5KS50aGVuKHJlc3VsdHMgPT4ge1xuXHRcdFx0XHR0aGlzLl9tb25pdG9yLm91dHB1dChyZXN1bHRzKTtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSByZXN1bHRzW2tleV07XG5cdFx0XHRcdHRoaXMuX21vbml0b3IuZXhpdChcIl9zZXRWYWx1ZVwiKTtcblx0XHRcdFx0cmVzb2x2ZSh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdmFsdWUgb2YgYSBwZXJzaXN0YW50IHZhcmlhYmxlLlxuICogQHByaXZhdGUgQGFzeW5jXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gS2V5IG9mIHRoZSB2YXJpYWJsZS5cbiAqIEByZXR1cm5zIHtvYmplY3R9IFZhbHVlIG9mIHRoZSB2YXJpYWJsZS5cbiAqKi9cbkRhdGFTdG9yYWdlLnByb3RvdHlwZS5fZ2V0VmFsdWUgPSBmdW5jdGlvbihrZXkpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdHRoaXMuX21vbml0b3IuZW50ZXIoXCJfZ2V0VmFsdWVcIik7XG5cdFx0dGhpcy5fbW9uaXRvci5hc3NlcnQodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiwgXCJrZXkgPVwiLCBrZXkpO1xuXHRcdGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoa2V5KS50aGVuKHJlc3VsdHMgPT4ge1xuXHRcdFx0dGhpcy5fbW9uaXRvci5vdXRwdXQocmVzdWx0cyk7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHJlc3VsdHNba2V5XTtcblx0XHRcdHRoaXMuX21vbml0b3IuZXhpdChcIl9nZXRWYWx1ZVwiKTtcblx0XHRcdHJlc29sdmUodmFsdWUpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vIC0tLS0gUHVibGljIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZSBvZiBcImV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VcIi5cbiAqIEBwdWJsaWMgQGFzeW5jXG4gKiBAcGFyYW0ge251bWJlcn0gdmVyc2lvbiAtIExhdGVzdCBleHRlbnNpb24gdmVyc2lvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IExhdGVzdCBleHRlbnNpb24gdmVyc2lvbi5cbiAqKi9cbkRhdGFTdG9yYWdlLnByb3RvdHlwZS5zZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlID0gZnVuY3Rpb24odmVyc2lvbikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0dGhpcy5fbW9uaXRvci5lbnRlcihcInNldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VcIik7XG5cdFx0dGhpcy5fbW9uaXRvci5hc3NlcnQodHlwZW9mIHZlcnNpb24gPT09IFwibnVtYmVyXCIsIFwidmVyc2lvbiA9XCIsIHZlcnNpb24pO1xuXHRcdHRoaXMuX3NldFZhbHVlKEVYVEVOU0lPTl9VUERBVEVfTUVTU0FHRV9LRVksIHZlcnNpb24pLnRoZW4odmVyc2lvbiA9PiB7XG5cdFx0XHR0aGlzLl9tb25pdG9yLmV4aXQoXCJzZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlXCIpO1xuXHRcdFx0cmVzb2x2ZSh2ZXJzaW9uKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdmFsdWUgb2YgXCJleHRlbnNpb25VcGRhdGVNZXNzYWdlXCIuXG4gKiBAcHVibGljIEBhc3luY1xuICogQHJldHVybnMge251bWJlcn0gTGF0ZXN0IGV4dGVuc2lvbiB2ZXJzaW9uLlxuICoqL1xuRGF0YVN0b3JhZ2UucHJvdG90eXBlLmdldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdHRoaXMuX21vbml0b3IuZW50ZXIoXCJnZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlXCIpO1xuXHRcdHRoaXMuX2dldFZhbHVlKEVYVEVOU0lPTl9VUERBVEVfTUVTU0FHRV9LRVkpLnRoZW4odmVyc2lvbiA9PiB7XG5cdFx0XHR0aGlzLl9tb25pdG9yLmV4aXQoXCJnZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlXCIpO1xuXHRcdFx0cmVzb2x2ZSh2ZXJzaW9uKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyA9PT09IEVORCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhU3RvcmFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTW9uaXRvciBmcm9tIFwiLi4vY29tbW9uL21vbml0b3IuanNcIjtcblxuLy8gPT09PSBTVEFSVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3Qge3N0cmluZ30gVGV4dCBvZiB0aGUgYmFkZ2UgKCdYJyBmb3IgZGlzYWJsZWQpLlxuICoqL1xuY29uc3QgYmFkZ2VUZXh0ID0gXCJYXCI7XG5cbi8qKlxuICogQGNvbnN0IHtzdHJpbmd9IEZvcmVncm91bmQgY29sb3Igb2YgdGhlIGJhZGdlICh3aGl0ZSkuXG4gKiovXG5jb25zdCBiYWRnZUNvbG9yID0gXCIjZmZmXCI7XG5cbi8qKlxuICogQGNvbnN0IHtzdHJpbmd9IEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJhZGdlIChyZWQpLlxuICoqL1xuY29uc3QgYmFkZ2VSZWRCYWNrZ3JvdW5kID0gXCIjZDYyNzI4XCI7XG5cbi8qKlxuICogQGNvbnN0IHtzdHJpbmd9IEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJhZGdlIChncmV5KS5cbiAqKi9cbmNvbnN0IGJhZGdlR3JleUJhY2tncm91bmQgPSBcIiM5OTlcIjtcblxuLyoqXG4gKiBAY29uc3Qge01vbml0b3J9IEV2ZW50IGxvZ2dlci5cbiAqKi9cbmNvbnN0IG1vbml0b3IgPSBuZXcgTW9uaXRvcihcImJhZGdlXCIpO1xuXG4vKipcbiAqIERpc3BsYXkgYSBiYWRnZSBvdmVyIHRoZSB0b29sYmFyIGljb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dPbmVUaW1lTWVzc2FnZSAtIERpc3BsYXkgYmFkZ2UgaW4gcmVkLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBkaXNwbGF5QmFkZ2UgPSAoc2hvd09uZVRpbWVNZXNzYWdlID0gZmFsc2UpID0+IHtcblx0bW9uaXRvci5lbnRlcihcImRpc3BsYXlCYWRnZVwiKTtcblxuXHQvLyBTZXQgdGhlIGJhZGdlIGNvbG9ycyBhbmQgdGV4dFxuXHRicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0Q29sb3Ioe1xuXHRcdFwiY29sb3JcIjogYmFkZ2VDb2xvcixcblx0fSk7XG5cdGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7XG5cdFx0XCJjb2xvclwiOiBzaG93T25lVGltZU1lc3NhZ2UgPyBiYWRnZVJlZEJhY2tncm91bmQgOiBiYWRnZUdyZXlCYWNrZ3JvdW5kLFxuXHR9KTtcblx0YnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7XG5cdFx0XCJ0ZXh0XCI6IGJhZGdlVGV4dCxcblx0fSk7XG5cblx0bW9uaXRvci5leGl0KFwiZGlzcGxheUJhZGdlXCIpO1xufTtcblxuLy8gPT09PSBFTkQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUJhZGdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQGNvbnN0IHtvYmplY3R9IERlZmF1bHQgdmFsdWVzIGZvciBhbGwgZXZlbnQga2V5cy5cbiAqKi9cbmNvbnN0IGRlZmF1bHRGbGFncyA9IHtcblx0XCJlbnRlclwiOiB0cnVlLFxuXHRcImV4aXRcIjogdHJ1ZSxcblx0XCJldmVudFwiOiB0cnVlLFxuXHRcImlucHV0XCI6IHRydWUsXG5cdFwib3V0cHV0XCI6IHRydWUsXG5cdFwiZGF0YVwiOiB0cnVlLFxuXHRcImFzc2VydFwiOiB0cnVlLFxufTtcblxuLyoqXG4gKiBAY29uc3Qge29iamVjdH0gVmlzdWFsIGluZGljYXRvcnMgYnkgZXZlbnQga2V5cy5cbiAqKi9cbmNvbnN0IGtleVN0cnMgPSB7XG5cdFwiZW50ZXJcIjogXCItPj5cIixcblx0XCJleGl0XCI6IFwiLTw8XCIsXG5cdFwiZXZlbnRcIjogXCItLS1cIixcblx0XCJpbnB1dFwiOiBcIiA+IFwiLFxuXHRcIm91dHB1dFwiOiBcIiA8IFwiLFxuXHRcImRhdGFcIjogXCJcIixcblx0XCJhc3NlcnRcIjogXCIhISFcIixcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2UgYW5kIGluY3JlbWVudCB0aGUgbmVzdGVkIGZ1bmN0aW9uIGxldmVscy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZW50ZXJIYW5kbGVyID0gZnVuY3Rpb24obWVzc2FnZSwgb2JqKSB7XG5cdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJlbnRlclwiLCBtZXNzYWdlLCBvYmopO1xuXHR0aGlzLl9sZXZlbCsrO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSBhbmQgZGVjcmVtZW50IHRoZSBuZXN0ZWQgZnVuY3Rpb24gbGV2ZWxzLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBleGl0SGFuZGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG9iaikge1xuXHR0aGlzLl9sZXZlbC0tO1xuXHRkaXNwbGF5TWVzc2FnZS5jYWxsKHRoaXMsIFwiZXhpdFwiLCBtZXNzYWdlLCBvYmopO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSB3aXRoIGV2ZW50LXJlbGF0ZWQgaW5kaWNhdG9ycy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZXZlbnRIYW5kbGVyID0gZnVuY3Rpb24obWVzc2FnZSwgb2JqKSB7XG5cdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJldmVudFwiLCBtZXNzYWdlLCBvYmopO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSB3aXRoIGlucHV0IChmdW5jdGlvbiBhcmd1bWVudHMpIGluZGljYXRvcnMuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IGlucHV0SGFuZGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG9iaikge1xuXHRkaXNwbGF5TWVzc2FnZS5jYWxsKHRoaXMsIFwiaW5wdXRcIiwgbWVzc2FnZSwgb2JqKTtcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2Ugd2l0aCBvdXRwdXQgKGZ1bmN0aW9uIHJldHVybnMpIGluZGljYXRvcnMuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IG91dHB1dEhhbmRsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCBvYmopIHtcblx0ZGlzcGxheU1lc3NhZ2UuY2FsbCh0aGlzLCBcIm91dHB1dFwiLCBtZXNzYWdlLCBvYmopO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSB3aXRoIGRhdGEgaW5kaWNhdG9ycy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZGF0YUhhbmRsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCBvYmopIHtcblx0ZGlzcGxheU1lc3NhZ2UuY2FsbCh0aGlzLCBcImRhdGFcIiwgbWVzc2FnZSwgb2JqKTtcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2UgaWYgYW4gYXNzZXJ0aW9uIGZhaWxzLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBhc3NlcnRIYW5kbGVyID0gZnVuY3Rpb24oZXhwcmVzc2lvbiwgbWVzc2FnZSwgb2JqKSB7XG5cdGlmICghZXhwcmVzc2lvbikge1xuXHRcdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJhc3NlcnRcIiwgbWVzc2FnZSwgb2JqLCB0cnVlKTtcblx0fVxufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRvIGRpc3BsYXkgYSBtZXNzYWdlLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBkaXNwbGF5TWVzc2FnZSA9IGZ1bmN0aW9uKGtleSwgbWVzc2FnZSwgb2JqLCBpc1dhcm5pbmcgPSBmYWxzZSkge1xuXHRjb25zdCBnZXRLZXlTdHJzID0gKGtleSkgPT4ge1xuXHRcdGlmIChrZXkgPT09IFwiZW50ZXJcIikge1xuXHRcdFx0cmV0dXJuIFwiW1wiICsga2V5U3Ryc1trZXldLnBhZFN0YXJ0KDMgKyB0aGlzLl9sZXZlbCAqIDIsIFwiLVwiKSArIFwiXVwiO1xuXHRcdH1cblx0XHRpZiAoa2V5ID09PSBcImV4aXRcIikge1xuXHRcdFx0cmV0dXJuIFwiW1wiICsga2V5U3Ryc1trZXldLnBhZFN0YXJ0KDMgKyB0aGlzLl9sZXZlbCAqIDIsIFwiLVwiKSArIFwiXVwiO1xuXHRcdH1cblx0XHRpZiAoa2V5ID09PSBcImRhdGFcIikge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fVxuXHRcdHJldHVybiBcIltcIiArIGtleVN0cnNba2V5XSArIFwiXVwiO1xuXHR9O1xuXG5cdGlmICh0aGlzLl9pc0VuYWJsZWQgJiYgdGhpcy5fZmxhZ3Nba2V5XSkge1xuXHRcdGNvbnN0IGlkU3RyID0gYFske3RoaXMuX2lkZW50aWZpZXIuc3Vic3RyaW5nKDAsIDEwKS5wYWRFbmQoMTAsIFwiIFwiKX1dYDtcblx0XHRjb25zdCBrZXlTdHIgPSBnZXRLZXlTdHJzKGtleSk7XG5cdFx0aWYgKHR5cGVvZiBvYmogIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdGlmIChpc1dhcm5pbmcpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGlkU3RyLCBrZXlTdHIsIG1lc3NhZ2UsIG9iaik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhpZFN0ciwga2V5U3RyLCBtZXNzYWdlLCBvYmopO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoaXNXYXJuaW5nKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihpZFN0ciwga2V5U3RyLCBtZXNzYWdlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGlkU3RyLCBrZXlTdHIsIG1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBNb25pdG9yIGNsYXNzIHRvIGxvZyBkaWZmZXJlbnQgdHlwZXMgb2YgZXZlbnRzLlxuICogQGNvbnN0cnVjdG9yXG4gKiovXG5jb25zdCBNb25pdG9yID0gZnVuY3Rpb24oaWRlbnRpZmllciwgb3B0RmxhZ3MgPSB7fSkge1xuXHR0aGlzLl9pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcblx0dGhpcy5fZmxhZ3MgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRGbGFncywgb3B0RmxhZ3MpO1xuXHR0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuXHR0aGlzLl9sZXZlbCA9IDA7XG5cdGlmIChwcm9jZXNzLmVudi5ERUJVRyA9PT0gXCJ0cnVlXCIpIHtcblx0XHR0aGlzLmVudGVyID0gZW50ZXJIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5leGl0ID0gZXhpdEhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmV2ZW50ID0gZXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5pbnB1dCA9IGlucHV0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3V0cHV0ID0gb3V0cHV0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZGF0YSA9IGRhdGFIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5hc3NlcnQgPSBhc3NlcnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5lbnRlciA9ICgpID0+IHt9O1xuXHRcdHRoaXMuZXhpdCA9ICgpID0+IHt9O1xuXHRcdHRoaXMuZXZlbnQgPSAoKSA9PiB7fTtcblx0XHR0aGlzLmlucHV0ID0gKCkgPT4ge307XG5cdFx0dGhpcy5vdXRwdXQgPSAoKSA9PiB7fTtcblx0XHR0aGlzLmRhdGEgPSAoKSA9PiB7fTtcblx0XHR0aGlzLmFzc2VydCA9IGFzc2VydEhhbmRsZXIuYmluZCh0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBBbGxvdyB0aGUgbW9uaXRvciB0byBsb2cgbWVzc2FnZXMuXG4gKiBAcHVibGljXG4gKiovXG5Nb25pdG9yLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogRGlzYWxsb3cgdGhlIG1vbml0b3IgdG8gbG9nIGFueSBtZXNzYWdlcy5cbiAqIEBwdWJsaWNcbiAqKi9cbk1vbml0b3IucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5faXNFbmFibGVkID0gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb25pdG9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==