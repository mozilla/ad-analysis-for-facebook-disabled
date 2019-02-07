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
/******/ 	return __webpack_require__(__webpack_require__.s = "./toolbar/toolbar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./toolbar/toolbar.less":
/*!*************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/less-loader/dist/cjs.js!./toolbar/toolbar.less ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\ndiv,\ntable,\ntr,\ntd {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\nhtml {\n  width: 320px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\nbody {\n  width: 320px;\n  background-color: #ffffff;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  user-select: none;\n  -moz-user-select: none;\n}\n.panel {\n  width: 320px;\n  font-family: \"San Francisco\", \"Segoe UI\", \"Ubuntu\", \"Helvetica Neue\", sans-serif;\n  font-size: 13px;\n  font-weight: 300;\n  color: #000;\n}\n.panel .row {\n  padding: 14px;\n  border-top: 1px solid #ccc;\n}\n.panel .row:first-child {\n  border-top: none;\n}\n.panel .row.headerRow {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  font-weight: 600;\n}\n.panel .row .text {\n  margin-bottom: 8px;\n}\n.panel .row .text:last-child {\n  margin-bottom: 0;\n}\n.panel .row .text a {\n  color: #0060df;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

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

/***/ }),

/***/ "./toolbar/toolbar.js":
/*!****************************!*\
  !*** ./toolbar/toolbar.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolbar_toolbar_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toolbar/toolbar.less */ "./toolbar/toolbar.less");
/* harmony import */ var toolbar_toolbar_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toolbar_toolbar_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_data_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/data-storage.js */ "./common/data-storage.js");
/* harmony import */ var common_display_badge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/display-badge.js */ "./common/display-badge.js");
/* harmony import */ var common_monitor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/monitor.js */ "./common/monitor.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @overview Doorhanger script of the Ad Analysis for Facebook extension.
 *     In this disabled version of the extension, the scripts fills in the text
 *     message and relevant links in the doorhanger, and records that the user
 *     has seen the latest message for version 1.1.x.
 * @author Jason Chuang <jchuang@mozilla.com>
 **/





 // ==== START ==================================================================
// ---- Constants for US English -----------------------------------------------

/**
 * @const {string} Title of the doorhanger.
 **/

const title = "Ad Analysis for Facebook (U.S. English) - DISABLED";
/**
 * @const {Object.<string, string>} Dictionary containing all strings used in the doorhanger.
 **/

const strLanguages = {
  "strTitle": "Ad Analysis for Facebook",
  "strDisabledMessage": "Ad Analysis for Facebook is temporarily disabled. Facebook has blocked this extension, so it will no longer show you how you're targeted by advertisers.",
  "strLearnMore": "Learn more",
  "strBrowseMessage": "You may continue to browse the following public datasets.",
  "strTargetingData": "Targeting data collected by ProPublica",
  "strElectionData": "Top political advertisers in the United States"
};
/**
 * @const {Object.<string, string>} Dictionary containing all links in the doorhanger.
 **/

const aLinks = {
  "strLearnMore": "https://blog.mozilla.org/blog/2019/01/31/mozilla-raises-concerns-over-facebooks-lack-of-transparency/",
  "strTargetingData": "https://mozilla.github.io/ad-analysis-for-facebook/info.html#SeeAllTargets",
  "strElectionData": "https://mozilla.github.io/ad-analysis-for-facebook/info.html#TopAdvertisers"
}; // ---- Start of doorhanger script ---------------------------------------------
// Access persistent data storage

const dataStorage = new common_data_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"](); // Log UI events. Ensure query selections are non-empty.

const monitor = new common_monitor_js__WEBPACK_IMPORTED_MODULE_3__["default"]("toolbar"); // Insert all strings and links into the doorhanger HTML document.

const loader = function () {
  monitor.enter("loader"); // Update the title of the document.

  document.title = title; // Update text in the document.

  for (const key in strLanguages) {
    const value = strLanguages[key];
    const selector = `.str.${key}`;
    const elems = document.querySelectorAll(selector);
    monitor.assert(elems && elems.length > 0, "Empty query selection:", selector);
    elems.forEach(elem => {
      elem.innerText = value;
    });
  } // Update links in the document.


  for (const key in aLinks) {
    const value = aLinks[key];
    const selector = `a.str.${key}`;
    const elems = document.querySelectorAll(selector);
    monitor.assert(elems && elems.length > 0, "Empty query selection:", selector);
    elems.forEach(elem => {
      elem.href = value;
      elem.rel = "noopener noreferrer";
      elem.target = "_blank";
    });
  } // Record that the user has opened the doorhanger.
  // Update the badge over the toolbar icon.


  dataStorage.setExtensionUpdateMessageVersion(1.1).then(version => {
    const showOneTimeMessage = !(version && version >= 1.1);
    Object(common_display_badge_js__WEBPACK_IMPORTED_MODULE_2__["default"])(showOneTimeMessage);
    monitor.exit("loader");
  });
}; // Run loader when the doorhanger HTML document finishes loading.


document.addEventListener("DOMContentLoaded", loader); // ==== END ====================================================================

/***/ }),

/***/ "./toolbar/toolbar.less":
/*!******************************!*\
  !*** ./toolbar/toolbar.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!./toolbar.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./toolbar/toolbar.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdG9vbGJhci90b29sYmFyLmxlc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9kYXRhLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2Rpc3BsYXktYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL21vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdG9vbGJhci90b29sYmFyLmpzIiwid2VicGFjazovLy8uL3Rvb2xiYXIvdG9vbGJhci5sZXNzP2NjZjEiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImNzcyIsImxvY2F0aW9uIiwid2luZG93IiwiRXJyb3IiLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwiY3VycmVudERpciIsInBhdGhuYW1lIiwicmVwbGFjZSIsImZpeGVkQ3NzIiwiZnVsbE1hdGNoIiwib3JpZ1VybCIsInVucXVvdGVkT3JpZ1VybCIsInRyaW0iLCJvIiwiJDEiLCJ0ZXN0IiwibmV3VXJsIiwiaW5kZXhPZiIsIkVYVEVOU0lPTl9VUERBVEVfTUVTU0FHRV9WRVJTSU9OX0tFWSIsIkRhdGFTdG9yYWdlIiwiX21vbml0b3IiLCJNb25pdG9yIiwiZW50ZXIiLCJleGl0IiwicHJvdG90eXBlIiwiX3NldFZhbHVlIiwia2V5IiwidmFsdWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFzc2VydCIsImtleVZhbHVlUGFpcnMiLCJpbnB1dCIsImJyb3dzZXIiLCJzdG9yYWdlIiwibG9jYWwiLCJzZXQiLCJ0aGVuIiwiZ2V0IiwicmVzdWx0cyIsIm91dHB1dCIsIl9nZXRWYWx1ZSIsInNldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VWZXJzaW9uIiwidmVyc2lvbiIsImdldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VWZXJzaW9uIiwiYmFkZ2VUZXh0IiwiYmFkZ2VDb2xvciIsImJhZGdlUmVkQmFja2dyb3VuZCIsImJhZGdlR3JleUJhY2tncm91bmQiLCJtb25pdG9yIiwiZGlzcGxheUJhZGdlIiwic2hvd09uZVRpbWVNZXNzYWdlIiwiYnJvd3NlckFjdGlvbiIsInNldEJhZGdlVGV4dENvbG9yIiwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IiLCJzZXRCYWRnZVRleHQiLCJkZWZhdWx0RmxhZ3MiLCJrZXlTdHJzIiwiZW50ZXJIYW5kbGVyIiwibWVzc2FnZSIsIm9iaiIsImRpc3BsYXlNZXNzYWdlIiwiY2FsbCIsIl9sZXZlbCIsImV4aXRIYW5kbGVyIiwiZXZlbnRIYW5kbGVyIiwiaW5wdXRIYW5kbGVyIiwib3V0cHV0SGFuZGxlciIsImRhdGFIYW5kbGVyIiwiYXNzZXJ0SGFuZGxlciIsImV4cHJlc3Npb24iLCJpc1dhcm5pbmciLCJnZXRLZXlTdHJzIiwicGFkU3RhcnQiLCJfaXNFbmFibGVkIiwiX2ZsYWdzIiwiaWRTdHIiLCJfaWRlbnRpZmllciIsInN1YnN0cmluZyIsInBhZEVuZCIsImtleVN0ciIsImNvbnNvbGUiLCJ3YXJuIiwibG9nIiwiaWRlbnRpZmllciIsIm9wdEZsYWdzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvY2VzcyIsImJpbmQiLCJldmVudCIsImVuYWJsZSIsImRpc2FibGUiLCJ0aXRsZSIsInN0ckxhbmd1YWdlcyIsImFMaW5rcyIsImRhdGFTdG9yYWdlIiwibG9hZGVyIiwiZG9jdW1lbnQiLCJzZWxlY3RvciIsImVsZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtIiwiaW5uZXJUZXh0IiwiaHJlZiIsInJlbCIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyxpR0FBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLHdDQUF3QyxjQUFjLGVBQWUsY0FB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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURB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ZSI6InRvb2xiYXIvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90b29sYmFyL3Rvb2xiYXIuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG5kaXYsXFxudGFibGUsXFxudHIsXFxudGQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuaHRtbCB7XFxuICB3aWR0aDogMzIwcHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcbmJvZHkge1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnBhbmVsIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2FuIEZyYW5jaXNjb1xcXCIsIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJVYnVudHVcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4ucGFuZWwgLnJvdyB7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XFxufVxcbi5wYW5lbCAucm93OmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxufVxcbi5wYW5lbCAucm93LmhlYWRlclJvdyB7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5wYW5lbCAucm93IC50ZXh0IHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLnBhbmVsIC5yb3cgLnRleHQ6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ucGFuZWwgLnJvdyAudGV4dCBhIHtcXG4gIGNvbG9yOiAjMDA2MGRmO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vKipcbiAqIEBvdmVydmlldyBVdGlsaXR5IGxpYnJhcnkgZm9yIHRoZSBBZCBBbmFseXNpcyBmb3IgRmFjZWJvb2sgZXh0ZW5zaW9uLlxuICogICAgIFByb3ZpZGUgcmVhZCBhbmQgd3JpdGUgYWNjZXNzIHRvIHZhcmlhYmxlcyBpbiBsb2NhbCBzdG9yYWdlLlxuICogQGF1dGhvciBKYXNvbiBDaHVhbmcgPGpjaHVhbmdAbW96aWxsYS5jb20+XG4gKiovXG5cblwidXNlIHN0cmljdFwiO1xuaW1wb3J0IE1vbml0b3IgZnJvbSBcImNvbW1vbi9tb25pdG9yLmpzXCI7XG5cbi8vID09PT0gU1RBUlQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0YW50IHtzdHJpbmd9IEtleSBmb3IgZGlzcGxheWluZyBvbmUtdGltZSBtZXNzYWdlcyBhZnRlciBhbiB1cGRhdGUuXG4gKiovXG5jb25zdCBFWFRFTlNJT05fVVBEQVRFX01FU1NBR0VfVkVSU0lPTl9LRVkgPSBcImV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VWZXJzaW9uXCI7XG5cbi8qKlxuICogSW50ZXJmYWNlIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBwZXJzaXN0ZW50IGRhdGEuXG4gKiBAY2xhc3NcbiAqKi9cbmNvbnN0IERhdGFTdG9yYWdlID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuX21vbml0b3IgPSBuZXcgTW9uaXRvcihcInN0b3JhZ2VcIik7XG5cdHRoaXMuX21vbml0b3IuZW50ZXIoXCJEYXRhU3RvcmFnZVwiKTtcblx0dGhpcy5fbW9uaXRvci5leGl0KFwiRGF0YVN0b3JhZ2VcIik7XG59O1xuXG4vLyAtLS0tIFByaXZhdGUgbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFNldCB0aGUgdmFsdWUgb2YgYSBwZXJzaXN0YW50IHZhcmlhYmxlLlxuICogQHByaXZhdGUgQGFzeW5jXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gS2V5IG9mIHRoZSB2YXJpYWJsZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFZhbHVlIG9mIHRoZSB2YXJpYWJsZS5cbiAqIEByZXR1cm5zIHtvYmplY3R9IEZpbmFsIHZhbHVlIG9mIHRoZSB2YXJpYWJsZS5cbiAqL1xuRGF0YVN0b3JhZ2UucHJvdG90eXBlLl9zZXRWYWx1ZSA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdHRoaXMuX21vbml0b3IuZW50ZXIoXCJfc2V0VmFsdWVcIik7XG5cdFx0dGhpcy5fbW9uaXRvci5hc3NlcnQodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiwgXCJrZXkgPVwiLCBrZXkpO1xuXHRcdHRoaXMuX21vbml0b3IuYXNzZXJ0KHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiwgXCJ2YWx1ZSA9XCIsIHZhbHVlKTtcblx0XHRjb25zdCBrZXlWYWx1ZVBhaXJzID0ge307XG5cdFx0a2V5VmFsdWVQYWlyc1trZXldID0gdmFsdWU7XG5cdFx0dGhpcy5fbW9uaXRvci5pbnB1dChrZXlWYWx1ZVBhaXJzKTtcblx0XHRicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KGtleVZhbHVlUGFpcnMpLnRoZW4oKCkgPT4ge1xuXHRcdFx0YnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChrZXkpLnRoZW4ocmVzdWx0cyA9PiB7XG5cdFx0XHRcdHRoaXMuX21vbml0b3Iub3V0cHV0KHJlc3VsdHMpO1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IHJlc3VsdHNba2V5XTtcblx0XHRcdFx0dGhpcy5fbW9uaXRvci5leGl0KFwiX3NldFZhbHVlXCIpO1xuXHRcdFx0XHRyZXNvbHZlKHZhbHVlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB2YWx1ZSBvZiBhIHBlcnNpc3RhbnQgdmFyaWFibGUuXG4gKiBAcHJpdmF0ZSBAYXN5bmNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBLZXkgb2YgdGhlIHZhcmlhYmxlLlxuICogQHJldHVybnMge29iamVjdH0gVmFsdWUgb2YgdGhlIHZhcmlhYmxlLlxuICoqL1xuRGF0YVN0b3JhZ2UucHJvdG90eXBlLl9nZXRWYWx1ZSA9IGZ1bmN0aW9uKGtleSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0dGhpcy5fbW9uaXRvci5lbnRlcihcIl9nZXRWYWx1ZVwiKTtcblx0XHR0aGlzLl9tb25pdG9yLmFzc2VydCh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiLCBcImtleSA9XCIsIGtleSk7XG5cdFx0YnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChrZXkpLnRoZW4ocmVzdWx0cyA9PiB7XG5cdFx0XHR0aGlzLl9tb25pdG9yLm91dHB1dChyZXN1bHRzKTtcblx0XHRcdGNvbnN0IHZhbHVlID0gcmVzdWx0c1trZXldO1xuXHRcdFx0dGhpcy5fbW9uaXRvci5leGl0KFwiX2dldFZhbHVlXCIpO1xuXHRcdFx0cmVzb2x2ZSh2YWx1ZSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gLS0tLSBQdWJsaWMgbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIFwiZXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVZlcnNpb25cIi5cbiAqIEBwdWJsaWMgQGFzeW5jXG4gKiBAcGFyYW0ge251bWJlcn0gdmVyc2lvbiAtIExhdGVzdCBleHRlbnNpb24gdmVyc2lvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IExhdGVzdCBleHRlbnNpb24gdmVyc2lvbi5cbiAqKi9cbkRhdGFTdG9yYWdlLnByb3RvdHlwZS5zZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlVmVyc2lvbiA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdHRoaXMuX21vbml0b3IuZW50ZXIoXCJzZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlVmVyc2lvblwiKTtcblx0XHR0aGlzLl9tb25pdG9yLmFzc2VydCh0eXBlb2YgdmVyc2lvbiA9PT0gXCJudW1iZXJcIiwgXCJ2ZXJzaW9uID1cIiwgdmVyc2lvbik7XG5cdFx0dGhpcy5fc2V0VmFsdWUoRVhURU5TSU9OX1VQREFURV9NRVNTQUdFX1ZFUlNJT05fS0VZLCB2ZXJzaW9uKS50aGVuKHZlcnNpb24gPT4ge1xuXHRcdFx0dGhpcy5fbW9uaXRvci5leGl0KFwic2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVZlcnNpb25cIik7XG5cdFx0XHRyZXNvbHZlKHZlcnNpb24pO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB2YWx1ZSBvZiBcImV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VWZXJzaW9uXCIuXG4gKiBAcHVibGljIEBhc3luY1xuICogQHJldHVybnMge251bWJlcn0gTGF0ZXN0IGV4dGVuc2lvbiB2ZXJzaW9uLlxuICoqL1xuRGF0YVN0b3JhZ2UucHJvdG90eXBlLmdldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VWZXJzaW9uID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHR0aGlzLl9tb25pdG9yLmVudGVyKFwiZ2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVZlcnNpb25cIik7XG5cdFx0dGhpcy5fZ2V0VmFsdWUoRVhURU5TSU9OX1VQREFURV9NRVNTQUdFX1ZFUlNJT05fS0VZKS50aGVuKHZlcnNpb24gPT4ge1xuXHRcdFx0dGhpcy5fbW9uaXRvci5leGl0KFwiZ2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVZlcnNpb25cIik7XG5cdFx0XHRyZXNvbHZlKHZlcnNpb24pO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8vID09PT0gRU5EID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFTdG9yYWdlO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLyoqXG4gKiBAb3ZlcnZpZXcgVXRpbGl0eSBsaWJyYXJ5IGZvciB0aGUgQWQgQW5hbHlzaXMgZm9yIEZhY2Vib29rIGV4dGVuc2lvbi5cbiAqICAgICBEaXNwbGF5IGEgYmFkZ2Ugb3ZlciB0aGUgdG9vbGJhciBpY29uLlxuICogQGF1dGhvciBKYXNvbiBDaHVhbmcgPGpjaHVhbmdAbW96aWxsYS5jb20+XG4gKiovXG5cblwidXNlIHN0cmljdFwiO1xuaW1wb3J0IE1vbml0b3IgZnJvbSBcImNvbW1vbi9tb25pdG9yLmpzXCI7XG5cbi8vID09PT0gU1RBUlQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0IHtzdHJpbmd9IFRleHQgb2YgdGhlIGJhZGdlICgnWCcgZm9yIGRpc2FibGVkKS5cbiAqKi9cbmNvbnN0IGJhZGdlVGV4dCA9IFwiWFwiO1xuXG4vKipcbiAqIEBjb25zdCB7c3RyaW5nfSBGb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSBiYWRnZSAod2hpdGUpLlxuICoqL1xuY29uc3QgYmFkZ2VDb2xvciA9IFwiI2ZmZlwiO1xuXG4vKipcbiAqIEBjb25zdCB7c3RyaW5nfSBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBiYWRnZSAocmVkKS5cbiAqKi9cbmNvbnN0IGJhZGdlUmVkQmFja2dyb3VuZCA9IFwiI2Q2MjcyOFwiO1xuXG4vKipcbiAqIEBjb25zdCB7c3RyaW5nfSBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBiYWRnZSAoZ3JleSkuXG4gKiovXG5jb25zdCBiYWRnZUdyZXlCYWNrZ3JvdW5kID0gXCIjOTk5XCI7XG5cbi8qKlxuICogQGNvbnN0IHtNb25pdG9yfSBFdmVudCBsb2dnZXIuXG4gKiovXG5jb25zdCBtb25pdG9yID0gbmV3IE1vbml0b3IoXCJiYWRnZVwiKTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgYmFkZ2Ugb3ZlciB0aGUgdG9vbGJhciBpY29uLlxuICogQHBhcmFtIHtib29sZWFufSBzaG93T25lVGltZU1lc3NhZ2UgLSBEaXNwbGF5IGJhZGdlIGluIHJlZC5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZGlzcGxheUJhZGdlID0gKHNob3dPbmVUaW1lTWVzc2FnZSA9IGZhbHNlKSA9PiB7XG5cdG1vbml0b3IuZW50ZXIoXCJkaXNwbGF5QmFkZ2VcIik7XG5cblx0Ly8gU2V0IHRoZSBiYWRnZSBjb2xvcnMgYW5kIHRleHRcblx0YnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dENvbG9yKHtcblx0XHRcImNvbG9yXCI6IGJhZGdlQ29sb3IsXG5cdH0pO1xuXHRicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3Ioe1xuXHRcdFwiY29sb3JcIjogc2hvd09uZVRpbWVNZXNzYWdlID8gYmFkZ2VSZWRCYWNrZ3JvdW5kIDogYmFkZ2VHcmV5QmFja2dyb3VuZCxcblx0fSk7XG5cdGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe1xuXHRcdFwidGV4dFwiOiBiYWRnZVRleHQsXG5cdH0pO1xuXG5cdG1vbml0b3IuZXhpdChcImRpc3BsYXlCYWRnZVwiKTtcbn07XG5cbi8vID09PT0gRU5EID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlCYWRnZTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbi8qKlxuICogQG92ZXJ2aWV3IFV0aWxpdHkgbGlicmFyeSBmb3IgdGhlIEFkIEFuYWx5c2lzIGZvciBGYWNlYm9vayBleHRlbnNpb24uXG4gKiAgICAgQSBjb21iaW5hdGlvbiBvZiBsb2dnaW5nIGFuZCBsb2cgZm9ybWF0dGluZyB0b29scyB0byBhaWQgZGV2ZWxvcG1lbnQsXG4gKiAgICAgZGVidWdnaW5nLCBhbmQgdGVzdGluZy4gTW9zdCBvZiB0aGUgZnVuY2F0aW9uYWxpdGllcyBhcmUgcmVtb3ZlZCBpblxuICogICAgIHRoZSByZWxlYXNlIGJ1aWxkLiBBbGxvdyB2YXJpb3VzIFwidHlwZXNcIiBvZiBldmVudHMgdG8gYmUgbG9nZ2VkXG4gKiAgICAgc2VwYXJhdGVseSBpbmNsdWRpbmcgdHJhZGl0aW9uYWwgY29udHJvbCBmbG93cywgZGF0YSBldmVudHMsIGFuZFxuICogICAgIGJyb3dzZXIgZXh0ZW5zaW9uIGNvbW11bmljYXRpb24uIEFsbG93IHNpbXBsZSBhc3NlcnRpb25zLlxuICogQGF1dGhvciBKYXNvbiBDaHVhbmcgPGpjaHVhbmdAbW96aWxsYS5jb20+XG4gKiovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyA9PT09IFNUQVJUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdCB7b2JqZWN0fSBEZWZhdWx0IHZhbHVlcyBmb3IgYWxsIGV2ZW50IGtleXMuXG4gKiovXG5jb25zdCBkZWZhdWx0RmxhZ3MgPSB7XG5cdFwiZW50ZXJcIjogdHJ1ZSxcblx0XCJleGl0XCI6IHRydWUsXG5cdFwiZXZlbnRcIjogdHJ1ZSxcblx0XCJpbnB1dFwiOiB0cnVlLFxuXHRcIm91dHB1dFwiOiB0cnVlLFxuXHRcImRhdGFcIjogdHJ1ZSxcblx0XCJhc3NlcnRcIjogdHJ1ZSxcbn07XG5cbi8qKlxuICogQGNvbnN0IHtvYmplY3R9IFZpc3VhbCBpbmRpY2F0b3JzIGJ5IGV2ZW50IGtleXMuXG4gKiovXG5jb25zdCBrZXlTdHJzID0ge1xuXHRcImVudGVyXCI6IFwiLT4+XCIsXG5cdFwiZXhpdFwiOiBcIi08PFwiLFxuXHRcImV2ZW50XCI6IFwiLS0tXCIsXG5cdFwiaW5wdXRcIjogXCIgPiBcIixcblx0XCJvdXRwdXRcIjogXCIgPCBcIixcblx0XCJkYXRhXCI6IFwiXCIsXG5cdFwiYXNzZXJ0XCI6IFwiISEhXCIsXG59O1xuXG4vKipcbiAqIERpc3BsYXkgYSBtZXNzYWdlIGFuZCBpbmNyZW1lbnQgdGhlIG5lc3RlZCBmdW5jdGlvbiBsZXZlbHMuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IGVudGVySGFuZGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG9iaikge1xuXHRkaXNwbGF5TWVzc2FnZS5jYWxsKHRoaXMsIFwiZW50ZXJcIiwgbWVzc2FnZSwgb2JqKTtcblx0dGhpcy5fbGV2ZWwrKztcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2UgYW5kIGRlY3JlbWVudCB0aGUgbmVzdGVkIGZ1bmN0aW9uIGxldmVscy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZXhpdEhhbmRsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCBvYmopIHtcblx0dGhpcy5fbGV2ZWwtLTtcblx0ZGlzcGxheU1lc3NhZ2UuY2FsbCh0aGlzLCBcImV4aXRcIiwgbWVzc2FnZSwgb2JqKTtcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2Ugd2l0aCBldmVudC1yZWxhdGVkIGluZGljYXRvcnMuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IGV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG9iaikge1xuXHRkaXNwbGF5TWVzc2FnZS5jYWxsKHRoaXMsIFwiZXZlbnRcIiwgbWVzc2FnZSwgb2JqKTtcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2Ugd2l0aCBpbnB1dCAoZnVuY3Rpb24gYXJndW1lbnRzKSBpbmRpY2F0b3JzLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBpbnB1dEhhbmRsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCBvYmopIHtcblx0ZGlzcGxheU1lc3NhZ2UuY2FsbCh0aGlzLCBcImlucHV0XCIsIG1lc3NhZ2UsIG9iaik7XG59O1xuXG4vKipcbiAqIERpc3BsYXkgYSBtZXNzYWdlIHdpdGggb3V0cHV0IChmdW5jdGlvbiByZXR1cm5zKSBpbmRpY2F0b3JzLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBvdXRwdXRIYW5kbGVyID0gZnVuY3Rpb24obWVzc2FnZSwgb2JqKSB7XG5cdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJvdXRwdXRcIiwgbWVzc2FnZSwgb2JqKTtcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2Ugd2l0aCBkYXRhIGluZGljYXRvcnMuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IGRhdGFIYW5kbGVyID0gZnVuY3Rpb24obWVzc2FnZSwgb2JqKSB7XG5cdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJkYXRhXCIsIG1lc3NhZ2UsIG9iaik7XG59O1xuXG4vKipcbiAqIERpc3BsYXkgYSBtZXNzYWdlIGlmIGFuIGFzc2VydGlvbiBmYWlscy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgYXNzZXJ0SGFuZGxlciA9IGZ1bmN0aW9uKGV4cHJlc3Npb24sIG1lc3NhZ2UsIG9iaikge1xuXHRpZiAoIWV4cHJlc3Npb24pIHtcblx0XHRkaXNwbGF5TWVzc2FnZS5jYWxsKHRoaXMsIFwiYXNzZXJ0XCIsIG1lc3NhZ2UsIG9iaiwgdHJ1ZSk7XG5cdH1cbn07XG5cbi8qKlxuICogUHJlcGFyZSB0byBkaXNwbGF5IGEgKG5pY2VseS1mb3JtYXR0ZWQpIG1lc3NhZ2UuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IGRpc3BsYXlNZXNzYWdlID0gZnVuY3Rpb24oa2V5LCBtZXNzYWdlLCBvYmosIGlzV2FybmluZyA9IGZhbHNlKSB7XG5cdGNvbnN0IGdldEtleVN0cnMgPSAoa2V5KSA9PiB7XG5cdFx0aWYgKGtleSA9PT0gXCJlbnRlclwiKSB7XG5cdFx0XHRyZXR1cm4gXCJbXCIgKyBrZXlTdHJzW2tleV0ucGFkU3RhcnQoMyArIHRoaXMuX2xldmVsICogMiwgXCItXCIpICsgXCJdXCI7XG5cdFx0fVxuXHRcdGlmIChrZXkgPT09IFwiZXhpdFwiKSB7XG5cdFx0XHRyZXR1cm4gXCJbXCIgKyBrZXlTdHJzW2tleV0ucGFkU3RhcnQoMyArIHRoaXMuX2xldmVsICogMiwgXCItXCIpICsgXCJdXCI7XG5cdFx0fVxuXHRcdGlmIChrZXkgPT09IFwiZGF0YVwiKSB7XG5cdFx0XHRyZXR1cm4gXCJcIjtcblx0XHR9XG5cdFx0cmV0dXJuIFwiW1wiICsga2V5U3Ryc1trZXldICsgXCJdXCI7XG5cdH07XG5cdGlmICh0aGlzLl9pc0VuYWJsZWQgJiYgdGhpcy5fZmxhZ3Nba2V5XSkge1xuXHRcdGNvbnN0IGlkU3RyID0gYFske3RoaXMuX2lkZW50aWZpZXIuc3Vic3RyaW5nKDAsIDEwKS5wYWRFbmQoMTAsIFwiIFwiKX1dYDtcblx0XHRjb25zdCBrZXlTdHIgPSBnZXRLZXlTdHJzKGtleSk7XG5cdFx0aWYgKHR5cGVvZiBvYmogIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdGlmIChpc1dhcm5pbmcpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGlkU3RyLCBrZXlTdHIsIG1lc3NhZ2UsIG9iaik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhpZFN0ciwga2V5U3RyLCBtZXNzYWdlLCBvYmopO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoaXNXYXJuaW5nKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihpZFN0ciwga2V5U3RyLCBtZXNzYWdlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGlkU3RyLCBrZXlTdHIsIG1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBNb25pdG9yIGNsYXNzIHRvIGxvZyBkaWZmZXJlbnQgdHlwZXMgb2YgZXZlbnRzLlxuICogQGNsYXNzXG4gKiovXG5jb25zdCBNb25pdG9yID0gZnVuY3Rpb24oaWRlbnRpZmllciwgb3B0RmxhZ3MgPSB7fSkge1xuXHR0aGlzLl9pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcblx0dGhpcy5fZmxhZ3MgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRGbGFncywgb3B0RmxhZ3MpO1xuXHR0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuXHR0aGlzLl9sZXZlbCA9IDA7XG5cdGlmIChwcm9jZXNzLmVudi5ERUJVRyA9PT0gXCJ0cnVlXCIpIHtcblx0XHR0aGlzLmVudGVyID0gZW50ZXJIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5leGl0ID0gZXhpdEhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmV2ZW50ID0gZXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5pbnB1dCA9IGlucHV0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3V0cHV0ID0gb3V0cHV0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZGF0YSA9IGRhdGFIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5hc3NlcnQgPSBhc3NlcnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5lbnRlciA9ICgpID0+IHt9O1xuXHRcdHRoaXMuZXhpdCA9ICgpID0+IHt9O1xuXHRcdHRoaXMuZXZlbnQgPSAoKSA9PiB7fTtcblx0XHR0aGlzLmlucHV0ID0gKCkgPT4ge307XG5cdFx0dGhpcy5vdXRwdXQgPSAoKSA9PiB7fTtcblx0XHR0aGlzLmRhdGEgPSAoKSA9PiB7fTtcblx0XHR0aGlzLmFzc2VydCA9IGFzc2VydEhhbmRsZXIuYmluZCh0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBBbGxvdyB0aGUgbW9uaXRvciB0byBsb2cgbWVzc2FnZXMuXG4gKiBAcHVibGljXG4gKiovXG5Nb25pdG9yLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogRGlzYWxsb3cgdGhlIG1vbml0b3IgdG8gbG9nIGFueSBtZXNzYWdlcy5cbiAqIEBwdWJsaWNcbiAqKi9cbk1vbml0b3IucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5faXNFbmFibGVkID0gZmFsc2U7XG59O1xuXG4vLyA9PT09IEVORCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZGVmYXVsdCBNb25pdG9yO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLyoqXG4gKiBAb3ZlcnZpZXcgRG9vcmhhbmdlciBzY3JpcHQgb2YgdGhlIEFkIEFuYWx5c2lzIGZvciBGYWNlYm9vayBleHRlbnNpb24uXG4gKiAgICAgSW4gdGhpcyBkaXNhYmxlZCB2ZXJzaW9uIG9mIHRoZSBleHRlbnNpb24sIHRoZSBzY3JpcHRzIGZpbGxzIGluIHRoZSB0ZXh0XG4gKiAgICAgbWVzc2FnZSBhbmQgcmVsZXZhbnQgbGlua3MgaW4gdGhlIGRvb3JoYW5nZXIsIGFuZCByZWNvcmRzIHRoYXQgdGhlIHVzZXJcbiAqICAgICBoYXMgc2VlbiB0aGUgbGF0ZXN0IG1lc3NhZ2UgZm9yIHZlcnNpb24gMS4xLnguXG4gKiBAYXV0aG9yIEphc29uIENodWFuZyA8amNodWFuZ0Btb3ppbGxhLmNvbT5cbiAqKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgXCJ0b29sYmFyL3Rvb2xiYXIubGVzc1wiO1xuaW1wb3J0IERhdGFTdG9yYWdlIGZyb20gXCJjb21tb24vZGF0YS1zdG9yYWdlLmpzXCI7XG5pbXBvcnQgZGlzcGxheUJhZGdlIGZyb20gXCJjb21tb24vZGlzcGxheS1iYWRnZS5qc1wiO1xuaW1wb3J0IE1vbml0b3IgZnJvbSBcImNvbW1vbi9tb25pdG9yLmpzXCI7XG5cbi8vID09PT0gU1RBUlQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIC0tLS0gQ29uc3RhbnRzIGZvciBVUyBFbmdsaXNoIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNvbnN0IHtzdHJpbmd9IFRpdGxlIG9mIHRoZSBkb29yaGFuZ2VyLlxuICoqL1xuY29uc3QgdGl0bGUgPSBcIkFkIEFuYWx5c2lzIGZvciBGYWNlYm9vayAoVS5TLiBFbmdsaXNoKSAtIERJU0FCTEVEXCI7XG5cbi8qKlxuICogQGNvbnN0IHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gRGljdGlvbmFyeSBjb250YWluaW5nIGFsbCBzdHJpbmdzIHVzZWQgaW4gdGhlIGRvb3JoYW5nZXIuXG4gKiovXG5jb25zdCBzdHJMYW5ndWFnZXMgPSB7XG5cdFwic3RyVGl0bGVcIjogXCJBZCBBbmFseXNpcyBmb3IgRmFjZWJvb2tcIixcblx0XCJzdHJEaXNhYmxlZE1lc3NhZ2VcIjogXCJBZCBBbmFseXNpcyBmb3IgRmFjZWJvb2sgaXMgdGVtcG9yYXJpbHkgZGlzYWJsZWQuIEZhY2Vib29rIGhhcyBibG9ja2VkIHRoaXMgZXh0ZW5zaW9uLCBzbyBpdCB3aWxsIG5vIGxvbmdlciBzaG93IHlvdSBob3cgeW91J3JlIHRhcmdldGVkIGJ5IGFkdmVydGlzZXJzLlwiLFxuXHRcInN0ckxlYXJuTW9yZVwiOiBcIkxlYXJuIG1vcmVcIixcblx0XCJzdHJCcm93c2VNZXNzYWdlXCI6IFwiWW91IG1heSBjb250aW51ZSB0byBicm93c2UgdGhlIGZvbGxvd2luZyBwdWJsaWMgZGF0YXNldHMuXCIsXG5cdFwic3RyVGFyZ2V0aW5nRGF0YVwiOiBcIlRhcmdldGluZyBkYXRhIGNvbGxlY3RlZCBieSBQcm9QdWJsaWNhXCIsXG5cdFwic3RyRWxlY3Rpb25EYXRhXCI6IFwiVG9wIHBvbGl0aWNhbCBhZHZlcnRpc2VycyBpbiB0aGUgVW5pdGVkIFN0YXRlc1wiLFxufTtcblxuLyoqXG4gKiBAY29uc3Qge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBEaWN0aW9uYXJ5IGNvbnRhaW5pbmcgYWxsIGxpbmtzIGluIHRoZSBkb29yaGFuZ2VyLlxuICoqL1xuY29uc3QgYUxpbmtzID0ge1xuXHRcInN0ckxlYXJuTW9yZVwiOiBcImh0dHBzOi8vYmxvZy5tb3ppbGxhLm9yZy9ibG9nLzIwMTkvMDEvMzEvbW96aWxsYS1yYWlzZXMtY29uY2VybnMtb3Zlci1mYWNlYm9va3MtbGFjay1vZi10cmFuc3BhcmVuY3kvXCIsXG5cdFwic3RyVGFyZ2V0aW5nRGF0YVwiOiBcImh0dHBzOi8vbW96aWxsYS5naXRodWIuaW8vYWQtYW5hbHlzaXMtZm9yLWZhY2Vib29rL2luZm8uaHRtbCNTZWVBbGxUYXJnZXRzXCIsXG5cdFwic3RyRWxlY3Rpb25EYXRhXCI6IFwiaHR0cHM6Ly9tb3ppbGxhLmdpdGh1Yi5pby9hZC1hbmFseXNpcy1mb3ItZmFjZWJvb2svaW5mby5odG1sI1RvcEFkdmVydGlzZXJzXCIsXG59O1xuXG4vLyAtLS0tIFN0YXJ0IG9mIGRvb3JoYW5nZXIgc2NyaXB0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBBY2Nlc3MgcGVyc2lzdGVudCBkYXRhIHN0b3JhZ2VcbmNvbnN0IGRhdGFTdG9yYWdlID0gbmV3IERhdGFTdG9yYWdlKCk7XG5cbi8vIExvZyBVSSBldmVudHMuIEVuc3VyZSBxdWVyeSBzZWxlY3Rpb25zIGFyZSBub24tZW1wdHkuXG5jb25zdCBtb25pdG9yID0gbmV3IE1vbml0b3IoXCJ0b29sYmFyXCIpO1xuXG4vLyBJbnNlcnQgYWxsIHN0cmluZ3MgYW5kIGxpbmtzIGludG8gdGhlIGRvb3JoYW5nZXIgSFRNTCBkb2N1bWVudC5cbmNvbnN0IGxvYWRlciA9IGZ1bmN0aW9uKCkge1xuXHRtb25pdG9yLmVudGVyKFwibG9hZGVyXCIpO1xuXG5cdC8vIFVwZGF0ZSB0aGUgdGl0bGUgb2YgdGhlIGRvY3VtZW50LlxuXHRkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuXG5cdC8vIFVwZGF0ZSB0ZXh0IGluIHRoZSBkb2N1bWVudC5cblx0Zm9yIChjb25zdCBrZXkgaW4gc3RyTGFuZ3VhZ2VzKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBzdHJMYW5ndWFnZXNba2V5XTtcblx0XHRjb25zdCBzZWxlY3RvciA9IGAuc3RyLiR7a2V5fWA7XG5cdFx0Y29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0XHRtb25pdG9yLmFzc2VydChlbGVtcyAmJiBlbGVtcy5sZW5ndGggPiAwLCBcIkVtcHR5IHF1ZXJ5IHNlbGVjdGlvbjpcIiwgc2VsZWN0b3IpO1xuXHRcdGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG5cdFx0XHRlbGVtLmlubmVyVGV4dCA9IHZhbHVlO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gVXBkYXRlIGxpbmtzIGluIHRoZSBkb2N1bWVudC5cblx0Zm9yIChjb25zdCBrZXkgaW4gYUxpbmtzKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBhTGlua3Nba2V5XTtcblx0XHRjb25zdCBzZWxlY3RvciA9IGBhLnN0ci4ke2tleX1gO1xuXHRcdGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cdFx0bW9uaXRvci5hc3NlcnQoZWxlbXMgJiYgZWxlbXMubGVuZ3RoID4gMCwgXCJFbXB0eSBxdWVyeSBzZWxlY3Rpb246XCIsIHNlbGVjdG9yKTtcblx0XHRlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuXHRcdFx0ZWxlbS5ocmVmID0gdmFsdWU7XG5cdFx0XHRlbGVtLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuXHRcdFx0ZWxlbS50YXJnZXQgPSBcIl9ibGFua1wiO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gUmVjb3JkIHRoYXQgdGhlIHVzZXIgaGFzIG9wZW5lZCB0aGUgZG9vcmhhbmdlci5cblx0Ly8gVXBkYXRlIHRoZSBiYWRnZSBvdmVyIHRoZSB0b29sYmFyIGljb24uXG5cdGRhdGFTdG9yYWdlLnNldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VWZXJzaW9uKDEuMSkudGhlbih2ZXJzaW9uID0+IHtcblx0XHRjb25zdCBzaG93T25lVGltZU1lc3NhZ2UgPSAhKHZlcnNpb24gJiYgdmVyc2lvbiA+PSAxLjEpO1xuXHRcdGRpc3BsYXlCYWRnZShzaG93T25lVGltZU1lc3NhZ2UpO1xuXHRcdG1vbml0b3IuZXhpdChcImxvYWRlclwiKTtcblx0fSk7XG59O1xuXG4vLyBSdW4gbG9hZGVyIHdoZW4gdGhlIGRvb3JoYW5nZXIgSFRNTCBkb2N1bWVudCBmaW5pc2hlcyBsb2FkaW5nLlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbG9hZGVyKTtcblxuLy8gPT09PSBFTkQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b29sYmFyLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rvb2xiYXIubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rvb2xiYXIubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=