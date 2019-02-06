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


  dataStorage.setExtensionUpdateMessage(1.1).then(version => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdG9vbGJhci90b29sYmFyLmxlc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9kYXRhLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2Rpc3BsYXktYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL21vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdG9vbGJhci90b29sYmFyLmpzIiwid2VicGFjazovLy8uL3Rvb2xiYXIvdG9vbGJhci5sZXNzP2NjZjEiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImNzcyIsImxvY2F0aW9uIiwid2luZG93IiwiRXJyb3IiLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwiY3VycmVudERpciIsInBhdGhuYW1lIiwicmVwbGFjZSIsImZpeGVkQ3NzIiwiZnVsbE1hdGNoIiwib3JpZ1VybCIsInVucXVvdGVkT3JpZ1VybCIsInRyaW0iLCJvIiwiJDEiLCJ0ZXN0IiwibmV3VXJsIiwiaW5kZXhPZiIsIkVYVEVOU0lPTl9VUERBVEVfTUVTU0FHRV9LRVkiLCJEYXRhU3RvcmFnZSIsIl9tb25pdG9yIiwiTW9uaXRvciIsImVudGVyIiwiZXhpdCIsInByb3RvdHlwZSIsIl9zZXRWYWx1ZSIsImtleSIsInZhbHVlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhc3NlcnQiLCJrZXlWYWx1ZVBhaXJzIiwiaW5wdXQiLCJicm93c2VyIiwic3RvcmFnZSIsImxvY2FsIiwic2V0IiwidGhlbiIsImdldCIsInJlc3VsdHMiLCJvdXRwdXQiLCJfZ2V0VmFsdWUiLCJzZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlIiwidmVyc2lvbiIsImdldEV4dGVuc2lvblVwZGF0ZU1lc3NhZ2UiLCJiYWRnZVRleHQiLCJiYWRnZUNvbG9yIiwiYmFkZ2VSZWRCYWNrZ3JvdW5kIiwiYmFkZ2VHcmV5QmFja2dyb3VuZCIsIm1vbml0b3IiLCJkaXNwbGF5QmFkZ2UiLCJzaG93T25lVGltZU1lc3NhZ2UiLCJicm93c2VyQWN0aW9uIiwic2V0QmFkZ2VUZXh0Q29sb3IiLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciIsInNldEJhZGdlVGV4dCIsImRlZmF1bHRGbGFncyIsImtleVN0cnMiLCJlbnRlckhhbmRsZXIiLCJtZXNzYWdlIiwib2JqIiwiZGlzcGxheU1lc3NhZ2UiLCJjYWxsIiwiX2xldmVsIiwiZXhpdEhhbmRsZXIiLCJldmVudEhhbmRsZXIiLCJpbnB1dEhhbmRsZXIiLCJvdXRwdXRIYW5kbGVyIiwiZGF0YUhhbmRsZXIiLCJhc3NlcnRIYW5kbGVyIiwiZXhwcmVzc2lvbiIsImlzV2FybmluZyIsImdldEtleVN0cnMiLCJwYWRTdGFydCIsIl9pc0VuYWJsZWQiLCJfZmxhZ3MiLCJpZFN0ciIsIl9pZGVudGlmaWVyIiwic3Vic3RyaW5nIiwicGFkRW5kIiwia2V5U3RyIiwiY29uc29sZSIsIndhcm4iLCJsb2ciLCJpZGVudGlmaWVyIiwib3B0RmxhZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9jZXNzIiwiYmluZCIsImV2ZW50IiwiZW5hYmxlIiwiZGlzYWJsZSIsInRpdGxlIiwic3RyTGFuZ3VhZ2VzIiwiYUxpbmtzIiwiZGF0YVN0b3JhZ2UiLCJsb2FkZXIiLCJkb2N1bWVudCIsInNlbGVjdG9yIiwiZWxlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW0iLCJpbm5lclRleHQiLCJocmVmIiwicmVsIiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLGlHQUErQztBQUNsRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsd0NBQXdDLGNBQWMsZUFBZSxjQUFjLEdBQUcsUUFBUSxpQkFBaUIsdUJB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDOVlBOzs7Ozs7Ozs7Ozs7QUFhQWhDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVZ0MsR0FBVixFQUFlO0FBQzlCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQU0sQ0FBQ0QsUUFBdkQ7O0FBRUEsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYixVQUFNLElBQUlFLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0QsR0FONkIsQ0FRL0I7OztBQUNBLE1BQUksQ0FBQ0gsR0FBRCxJQUFRLE9BQU9BLEdBQVAsS0FBZSxRQUEzQixFQUFxQztBQUNuQyxXQUFPQSxHQUFQO0FBQ0E7O0FBRUQsTUFBSUksT0FBTyxHQUFHSCxRQUFRLENBQUNJLFFBQVQsR0FBb0IsSUFBcEIsR0FBMkJKLFFBQVEsQ0FBQ0ssSUFBbEQ7QUFDQSxNQUFJQyxVQUFVLEdBQUdILE9BQU8sR0FBR0gsUUFBUSxDQUFDTyxRQUFULENBQWtCQyxPQUFsQixDQUEwQixXQUExQixFQUF1QyxHQUF2QyxDQUEzQixDQWQ4QixDQWdCL0I7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxNQUFJQyxRQUFRLEdBQUdWLEdBQUcsQ0FBQ1MsT0FBSixDQUFZLHFEQUFaLEVBQW1FLFVBQVNFLFNBQVQsRUFBb0JDLE9BQXBCLEVBQTZCO0FBQzlHO0FBQ0EsUUFBSUMsZUFBZSxHQUFHRCxPQUFPLENBQzNCRSxJQURvQixHQUVwQkwsT0FGb0IsQ0FFWixVQUZZLEVBRUEsVUFBU00sQ0FBVCxFQUFZQyxFQUFaLEVBQWU7QUFBRSxhQUFPQSxFQUFQO0FBQVksS0FGN0IsRUFHcEJQLE9BSG9CLENBR1osVUFIWSxFQUdBLFVBQVNNLENBQVQsRUFBWUMsRUFBWixFQUFlO0FBQUUsYUFBT0EsRUFBUDtBQUFZLEtBSDdCLENBQXRCLENBRjhHLENBTzlHOztBQUNBLFFBQUksb0RBQW9EQyxJQUFwRCxDQUF5REosZUFBekQsQ0FBSixFQUErRTtBQUM3RSxhQUFPRixTQUFQO0FBQ0QsS0FWNkcsQ0FZOUc7OztBQUNBLFFBQUlPLE1BQUo7O0FBRUEsUUFBSUwsZUFBZSxDQUFDTSxPQUFoQixDQUF3QixJQUF4QixNQUFrQyxDQUF0QyxFQUF5QztBQUN0QztBQUNGRCxZQUFNLEdBQUdMLGVBQVQ7QUFDQSxLQUhELE1BR08sSUFBSUEsZUFBZSxDQUFDTSxPQUFoQixDQUF3QixHQUF4QixNQUFpQyxDQUFyQyxFQUF3QztBQUM5QztBQUNBRCxZQUFNLEdBQUdkLE9BQU8sR0FBR1MsZUFBbkIsQ0FGOEMsQ0FFVjtBQUNwQyxLQUhNLE1BR0E7QUFDTjtBQUNBSyxZQUFNLEdBQUdYLFVBQVUsR0FBR00sZUFBZSxDQUFDSixPQUFoQixDQUF3QixPQUF4QixFQUFpQyxFQUFqQyxDQUF0QixDQUZNLENBRXNEO0FBQzVELEtBeEI2RyxDQTBCOUc7OztBQUNBLFdBQU8sU0FBU1osSUFBSSxDQUFDQyxTQUFMLENBQWVvQixNQUFmLENBQVQsR0FBa0MsR0FBekM7QUFDQSxHQTVCYyxDQUFmLENBMUMrQixDQXdFL0I7O0FBQ0EsU0FBT1IsUUFBUDtBQUNBLENBMUVELEM7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTs7OztBQUlBOzs7OztBQU1hOztDQUdiOztBQUVBOzs7O0FBR0EsTUFBTVUsNEJBQTRCLEdBQUcsd0JBQXJDO0FBRUE7Ozs7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFlBQVc7QUFDOUIsT0FBS0MsUUFBTCxHQUFnQixJQUFJQyx5REFBSixDQUFZLFNBQVosQ0FBaEI7O0FBQ0EsT0FBS0QsUUFBTCxDQUFjRSxLQUFkLENBQW9CLGFBQXBCOztBQUNBLE9BQUtGLFFBQUwsQ0FBY0csSUFBZCxDQUFtQixhQUFuQjtBQUNBLENBSkQsQyxDQU1BOztBQUVBOzs7Ozs7Ozs7QUFPQUosV0FBVyxDQUFDSyxTQUFaLENBQXNCQyxTQUF0QixHQUFrQyxVQUFTQyxHQUFULEVBQWNDLEtBQWQsRUFBcUI7QUFDdEQsU0FBTyxJQUFJQyxPQUFKLENBQVlDLE9BQU8sSUFBSTtBQUM3QixTQUFLVCxRQUFMLENBQWNFLEtBQWQsQ0FBb0IsV0FBcEI7O0FBQ0EsU0FBS0YsUUFBTCxDQUFjVSxNQUFkLENBQXFCLE9BQU9KLEdBQVAsS0FBZSxRQUFwQyxFQUE4QyxPQUE5QyxFQUF1REEsR0FBdkQ7O0FBQ0EsU0FBS04sUUFBTCxDQUFjVSxNQUFkLENBQXFCLE9BQU9ILEtBQVAsS0FBaUIsV0FBdEMsRUFBbUQsU0FBbkQsRUFBOERBLEtBQTlEOztBQUNBLFVBQU1JLGFBQWEsR0FBRyxFQUF0QjtBQUNBQSxpQkFBYSxDQUFDTCxHQUFELENBQWIsR0FBcUJDLEtBQXJCOztBQUNBLFNBQUtQLFFBQUwsQ0FBY1ksS0FBZCxDQUFvQkQsYUFBcEI7O0FBQ0FFLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQkMsS0FBaEIsQ0FBc0JDLEdBQXRCLENBQTBCTCxhQUExQixFQUF5Q00sSUFBekMsQ0FBOEMsTUFBTTtBQUNuREosYUFBTyxDQUFDQyxPQUFSLENBQWdCQyxLQUFoQixDQUFzQkcsR0FBdEIsQ0FBMEJaLEdBQTFCLEVBQStCVyxJQUEvQixDQUFvQ0UsT0FBTyxJQUFJO0FBQzlDLGFBQUtuQixRQUFMLENBQWNvQixNQUFkLENBQXFCRCxPQUFyQjs7QUFDQSxjQUFNWixLQUFLLEdBQUdZLE9BQU8sQ0FBQ2IsR0FBRCxDQUFyQjs7QUFDQSxhQUFLTixRQUFMLENBQWNHLElBQWQsQ0FBbUIsV0FBbkI7O0FBQ0FNLGVBQU8sQ0FBQ0YsS0FBRCxDQUFQO0FBQ0EsT0FMRDtBQU1BLEtBUEQ7QUFRQSxHQWZNLENBQVA7QUFnQkEsQ0FqQkQ7QUFtQkE7Ozs7Ozs7O0FBTUFSLFdBQVcsQ0FBQ0ssU0FBWixDQUFzQmlCLFNBQXRCLEdBQWtDLFVBQVNmLEdBQVQsRUFBYztBQUMvQyxTQUFPLElBQUlFLE9BQUosQ0FBWUMsT0FBTyxJQUFJO0FBQzdCLFNBQUtULFFBQUwsQ0FBY0UsS0FBZCxDQUFvQixXQUFwQjs7QUFDQSxTQUFLRixRQUFMLENBQWNVLE1BQWQsQ0FBcUIsT0FBT0osR0FBUCxLQUFlLFFBQXBDLEVBQThDLE9BQTlDLEVBQXVEQSxHQUF2RDs7QUFDQU8sV0FBTyxDQUFDQyxPQUFSLENBQWdCQyxLQUFoQixDQUFzQkcsR0FBdEIsQ0FBMEJaLEdBQTFCLEVBQStCVyxJQUEvQixDQUFvQ0UsT0FBTyxJQUFJO0FBQzlDLFdBQUtuQixRQUFMLENBQWNvQixNQUFkLENBQXFCRCxPQUFyQjs7QUFDQSxZQUFNWixLQUFLLEdBQUdZLE9BQU8sQ0FBQ2IsR0FBRCxDQUFyQjs7QUFDQSxXQUFLTixRQUFMLENBQWNHLElBQWQsQ0FBbUIsV0FBbkI7O0FBQ0FNLGFBQU8sQ0FBQ0YsS0FBRCxDQUFQO0FBQ0EsS0FMRDtBQU1BLEdBVE0sQ0FBUDtBQVVBLENBWEQsQyxDQWFBOztBQUVBOzs7Ozs7OztBQU1BUixXQUFXLENBQUNLLFNBQVosQ0FBc0JrQix5QkFBdEIsR0FBa0QsVUFBU0MsT0FBVCxFQUFrQjtBQUNuRSxTQUFPLElBQUlmLE9BQUosQ0FBWUMsT0FBTyxJQUFJO0FBQzdCLFNBQUtULFFBQUwsQ0FBY0UsS0FBZCxDQUFvQiwyQkFBcEI7O0FBQ0EsU0FBS0YsUUFBTCxDQUFjVSxNQUFkLENBQXFCLE9BQU9hLE9BQVAsS0FBbUIsUUFBeEMsRUFBa0QsV0FBbEQsRUFBK0RBLE9BQS9EOztBQUNBLFNBQUtsQixTQUFMLENBQWVQLDRCQUFmLEVBQTZDeUIsT0FBN0MsRUFBc0ROLElBQXRELENBQTJETSxPQUFPLElBQUk7QUFDckUsV0FBS3ZCLFFBQUwsQ0FBY0csSUFBZCxDQUFtQiwyQkFBbkI7O0FBQ0FNLGFBQU8sQ0FBQ2MsT0FBRCxDQUFQO0FBQ0EsS0FIRDtBQUlBLEdBUE0sQ0FBUDtBQVFBLENBVEQ7QUFXQTs7Ozs7OztBQUtBeEIsV0FBVyxDQUFDSyxTQUFaLENBQXNCb0IseUJBQXRCLEdBQWtELFlBQVc7QUFDNUQsU0FBTyxJQUFJaEIsT0FBSixDQUFZQyxPQUFPLElBQUk7QUFDN0IsU0FBS1QsUUFBTCxDQUFjRSxLQUFkLENBQW9CLDJCQUFwQjs7QUFDQSxTQUFLbUIsU0FBTCxDQUFldkIsNEJBQWYsRUFBNkNtQixJQUE3QyxDQUFrRE0sT0FBTyxJQUFJO0FBQzVELFdBQUt2QixRQUFMLENBQWNHLElBQWQsQ0FBbUIsMkJBQW5COztBQUNBTSxhQUFPLENBQUNjLE9BQUQsQ0FBUDtBQUNBLEtBSEQ7QUFJQSxHQU5NLENBQVA7QUFPQSxDQVJELEMsQ0FVQTs7O0FBRWV4QiwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUNqSEE7QUFBQTtBQUFBOzs7O0FBSUE7Ozs7O0FBTWE7O0NBR2I7O0FBRUE7Ozs7QUFHQSxNQUFNMEIsU0FBUyxHQUFHLEdBQWxCO0FBRUE7Ozs7QUFHQSxNQUFNQyxVQUFVLEdBQUcsTUFBbkI7QUFFQTs7OztBQUdBLE1BQU1DLGtCQUFrQixHQUFHLFNBQTNCO0FBRUE7Ozs7QUFHQSxNQUFNQyxtQkFBbUIsR0FBRyxNQUE1QjtBQUVBOzs7O0FBR0EsTUFBTUMsT0FBTyxHQUFHLElBQUk1Qix5REFBSixDQUFZLE9BQVosQ0FBaEI7QUFFQTs7Ozs7O0FBS0EsTUFBTTZCLFlBQVksR0FBRyxDQUFDQyxrQkFBa0IsR0FBRyxLQUF0QixLQUFnQztBQUNwREYsU0FBTyxDQUFDM0IsS0FBUixDQUFjLGNBQWQsRUFEb0QsQ0FHcEQ7O0FBQ0FXLFNBQU8sQ0FBQ21CLGFBQVIsQ0FBc0JDLGlCQUF0QixDQUF3QztBQUN2QyxhQUFTUDtBQUQ4QixHQUF4QztBQUdBYixTQUFPLENBQUNtQixhQUFSLENBQXNCRSx1QkFBdEIsQ0FBOEM7QUFDN0MsYUFBU0gsa0JBQWtCLEdBQUdKLGtCQUFILEdBQXdCQztBQUROLEdBQTlDO0FBR0FmLFNBQU8sQ0FBQ21CLGFBQVIsQ0FBc0JHLFlBQXRCLENBQW1DO0FBQ2xDLFlBQVFWO0FBRDBCLEdBQW5DO0FBSUFJLFNBQU8sQ0FBQzFCLElBQVIsQ0FBYSxjQUFiO0FBQ0EsQ0FmRCxDLENBaUJBOzs7QUFFZTJCLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBOzs7O0FBSUE7Ozs7Ozs7OztDQVlBOztBQUVBOzs7O0FBR0EsTUFBTU0sWUFBWSxHQUFHO0FBQ3BCLFdBQVMsSUFEVztBQUVwQixVQUFRLElBRlk7QUFHcEIsV0FBUyxJQUhXO0FBSXBCLFdBQVMsSUFKVztBQUtwQixZQUFVLElBTFU7QUFNcEIsVUFBUSxJQU5ZO0FBT3BCLFlBQVU7QUFQVSxDQUFyQjtBQVVBOzs7O0FBR0EsTUFBTUMsT0FBTyxHQUFHO0FBQ2YsV0FBUyxLQURNO0FBRWYsVUFBUSxLQUZPO0FBR2YsV0FBUyxLQUhNO0FBSWYsV0FBUyxLQUpNO0FBS2YsWUFBVSxLQUxLO0FBTWYsVUFBUSxFQU5PO0FBT2YsWUFBVTtBQVBLLENBQWhCO0FBVUE7Ozs7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFVBQVNDLE9BQVQsRUFBa0JDLEdBQWxCLEVBQXVCO0FBQzNDQyxnQkFBYyxDQUFDQyxJQUFmLENBQW9CLElBQXBCLEVBQTBCLE9BQTFCLEVBQW1DSCxPQUFuQyxFQUE0Q0MsR0FBNUM7QUFDQSxPQUFLRyxNQUFMO0FBQ0EsQ0FIRDtBQUtBOzs7Ozs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsVUFBU0wsT0FBVCxFQUFrQkMsR0FBbEIsRUFBdUI7QUFDMUMsT0FBS0csTUFBTDtBQUNBRixnQkFBYyxDQUFDQyxJQUFmLENBQW9CLElBQXBCLEVBQTBCLE1BQTFCLEVBQWtDSCxPQUFsQyxFQUEyQ0MsR0FBM0M7QUFDQSxDQUhEO0FBS0E7Ozs7OztBQUlBLE1BQU1LLFlBQVksR0FBRyxVQUFTTixPQUFULEVBQWtCQyxHQUFsQixFQUF1QjtBQUMzQ0MsZ0JBQWMsQ0FBQ0MsSUFBZixDQUFvQixJQUFwQixFQUEwQixPQUExQixFQUFtQ0gsT0FBbkMsRUFBNENDLEdBQTVDO0FBQ0EsQ0FGRDtBQUlBOzs7Ozs7QUFJQSxNQUFNTSxZQUFZLEdBQUcsVUFBU1AsT0FBVCxFQUFrQkMsR0FBbEIsRUFBdUI7QUFDM0NDLGdCQUFjLENBQUNDLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUNILE9BQW5DLEVBQTRDQyxHQUE1QztBQUNBLENBRkQ7QUFJQTs7Ozs7O0FBSUEsTUFBTU8sYUFBYSxHQUFHLFVBQVNSLE9BQVQsRUFBa0JDLEdBQWxCLEVBQXVCO0FBQzVDQyxnQkFBYyxDQUFDQyxJQUFmLENBQW9CLElBQXBCLEVBQTBCLFFBQTFCLEVBQW9DSCxPQUFwQyxFQUE2Q0MsR0FBN0M7QUFDQSxDQUZEO0FBSUE7Ozs7OztBQUlBLE1BQU1RLFdBQVcsR0FBRyxVQUFTVCxPQUFULEVBQWtCQyxHQUFsQixFQUF1QjtBQUMxQ0MsZ0JBQWMsQ0FBQ0MsSUFBZixDQUFvQixJQUFwQixFQUEwQixNQUExQixFQUFrQ0gsT0FBbEMsRUFBMkNDLEdBQTNDO0FBQ0EsQ0FGRDtBQUlBOzs7Ozs7QUFJQSxNQUFNUyxhQUFhLEdBQUcsVUFBU0MsVUFBVCxFQUFxQlgsT0FBckIsRUFBOEJDLEdBQTlCLEVBQW1DO0FBQ3hELE1BQUksQ0FBQ1UsVUFBTCxFQUFpQjtBQUNoQlQsa0JBQWMsQ0FBQ0MsSUFBZixDQUFvQixJQUFwQixFQUEwQixRQUExQixFQUFvQ0gsT0FBcEMsRUFBNkNDLEdBQTdDLEVBQWtELElBQWxEO0FBQ0E7QUFDRCxDQUpEO0FBTUE7Ozs7OztBQUlBLE1BQU1DLGNBQWMsR0FBRyxVQUFTbkMsR0FBVCxFQUFjaUMsT0FBZCxFQUF1QkMsR0FBdkIsRUFBNEJXLFNBQVMsR0FBRyxLQUF4QyxFQUErQztBQUNyRSxRQUFNQyxVQUFVLEdBQUk5QyxHQUFELElBQVM7QUFDM0IsUUFBSUEsR0FBRyxLQUFLLE9BQVosRUFBcUI7QUFDcEIsYUFBTyxNQUFNK0IsT0FBTyxDQUFDL0IsR0FBRCxDQUFQLENBQWErQyxRQUFiLENBQXNCLElBQUksS0FBS1YsTUFBTCxHQUFjLENBQXhDLEVBQTJDLEdBQTNDLENBQU4sR0FBd0QsR0FBL0Q7QUFDQTs7QUFDRCxRQUFJckMsR0FBRyxLQUFLLE1BQVosRUFBb0I7QUFDbkIsYUFBTyxNQUFNK0IsT0FBTyxDQUFDL0IsR0FBRCxDQUFQLENBQWErQyxRQUFiLENBQXNCLElBQUksS0FBS1YsTUFBTCxHQUFjLENBQXhDLEVBQTJDLEdBQTNDLENBQU4sR0FBd0QsR0FBL0Q7QUFDQTs7QUFDRCxRQUFJckMsR0FBRyxLQUFLLE1BQVosRUFBb0I7QUFDbkIsYUFBTyxFQUFQO0FBQ0E7O0FBQ0QsV0FBTyxNQUFNK0IsT0FBTyxDQUFDL0IsR0FBRCxDQUFiLEdBQXFCLEdBQTVCO0FBQ0EsR0FYRDs7QUFZQSxNQUFJLEtBQUtnRCxVQUFMLElBQW1CLEtBQUtDLE1BQUwsQ0FBWWpELEdBQVosQ0FBdkIsRUFBeUM7QUFDeEMsVUFBTWtELEtBQUssR0FBSSxJQUFHLEtBQUtDLFdBQUwsQ0FBaUJDLFNBQWpCLENBQTJCLENBQTNCLEVBQThCLEVBQTlCLEVBQWtDQyxNQUFsQyxDQUF5QyxFQUF6QyxFQUE2QyxHQUE3QyxDQUFrRCxHQUFwRTtBQUNBLFVBQU1DLE1BQU0sR0FBR1IsVUFBVSxDQUFDOUMsR0FBRCxDQUF6Qjs7QUFDQSxRQUFJLE9BQU9rQyxHQUFQLEtBQWUsV0FBbkIsRUFBZ0M7QUFDL0IsVUFBSVcsU0FBSixFQUFlO0FBQ2RVLGVBQU8sQ0FBQ0MsSUFBUixDQUFhTixLQUFiLEVBQW9CSSxNQUFwQixFQUE0QnJCLE9BQTVCLEVBQXFDQyxHQUFyQztBQUNBLE9BRkQsTUFFTztBQUNOcUIsZUFBTyxDQUFDRSxHQUFSLENBQVlQLEtBQVosRUFBbUJJLE1BQW5CLEVBQTJCckIsT0FBM0IsRUFBb0NDLEdBQXBDO0FBQ0E7QUFDRCxLQU5ELE1BTU87QUFDTixVQUFJVyxTQUFKLEVBQWU7QUFDZFUsZUFBTyxDQUFDQyxJQUFSLENBQWFOLEtBQWIsRUFBb0JJLE1BQXBCLEVBQTRCckIsT0FBNUI7QUFDQSxPQUZELE1BRU87QUFDTnNCLGVBQU8sQ0FBQ0UsR0FBUixDQUFZUCxLQUFaLEVBQW1CSSxNQUFuQixFQUEyQnJCLE9BQTNCO0FBQ0E7QUFDRDtBQUNEO0FBQ0QsQ0E5QkQ7QUFnQ0E7Ozs7OztBQUlBLE1BQU10QyxPQUFPLEdBQUcsVUFBUytELFVBQVQsRUFBcUJDLFFBQVEsR0FBRyxFQUFoQyxFQUFvQztBQUNuRCxPQUFLUixXQUFMLEdBQW1CTyxVQUFuQjtBQUNBLE9BQUtULE1BQUwsR0FBY1csTUFBTSxDQUFDQyxNQUFQLENBQWMvQixZQUFkLEVBQTRCNkIsUUFBNUIsQ0FBZDtBQUNBLE9BQUtYLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxPQUFLWCxNQUFMLEdBQWMsQ0FBZDs7QUFDQSxNQUFJeUIsSUFBSixFQUFrQztBQUNqQyxTQUFLbEUsS0FBTCxHQUFhb0MsWUFBWSxDQUFDK0IsSUFBYixDQUFrQixJQUFsQixDQUFiO0FBQ0EsU0FBS2xFLElBQUwsR0FBWXlDLFdBQVcsQ0FBQ3lCLElBQVosQ0FBaUIsSUFBakIsQ0FBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYXpCLFlBQVksQ0FBQ3dCLElBQWIsQ0FBa0IsSUFBbEIsQ0FBYjtBQUNBLFNBQUt6RCxLQUFMLEdBQWFrQyxZQUFZLENBQUN1QixJQUFiLENBQWtCLElBQWxCLENBQWI7QUFDQSxTQUFLakQsTUFBTCxHQUFjMkIsYUFBYSxDQUFDc0IsSUFBZCxDQUFtQixJQUFuQixDQUFkO0FBQ0EsU0FBSzVGLElBQUwsR0FBWXVFLFdBQVcsQ0FBQ3FCLElBQVosQ0FBaUIsSUFBakIsQ0FBWjtBQUNBLFNBQUszRCxNQUFMLEdBQWN1QyxhQUFhLENBQUNvQixJQUFkLENBQW1CLElBQW5CLENBQWQ7QUFDQSxHQVJELE1BUU8sRUFRTjtBQUNELENBdEJEO0FBd0JBOzs7Ozs7QUFJQXBFLE9BQU8sQ0FBQ0csU0FBUixDQUFrQm1FLE1BQWxCLEdBQTJCLFlBQVc7QUFDckMsT0FBS2pCLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxDQUZEO0FBSUE7Ozs7OztBQUlBckQsT0FBTyxDQUFDRyxTQUFSLENBQWtCb0UsT0FBbEIsR0FBNEIsWUFBVztBQUN0QyxPQUFLbEIsVUFBTCxHQUFrQixLQUFsQjtBQUNBLENBRkQsQyxDQUlBOzs7QUFFZXJELHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUlBOzs7Ozs7O0FBUWE7O0FBQ2I7QUFDQTtBQUNBO0NBR0E7QUFFQTs7QUFFQTs7OztBQUdBLE1BQU13RSxLQUFLLEdBQUcsb0RBQWQ7QUFFQTs7OztBQUdBLE1BQU1DLFlBQVksR0FBRztBQUNwQixjQUFZLDBCQURRO0FBRXBCLHdCQUFzQiwwSkFGRjtBQUdwQixrQkFBZ0IsWUFISTtBQUlwQixzQkFBb0IsMkRBSkE7QUFLcEIsc0JBQW9CLHdDQUxBO0FBTXBCLHFCQUFtQjtBQU5DLENBQXJCO0FBU0E7Ozs7QUFHQSxNQUFNQyxNQUFNLEdBQUc7QUFDZCxrQkFBZ0IsdUdBREY7QUFFZCxzQkFBb0IsNEVBRk47QUFHZCxxQkFBbUI7QUFITCxDQUFmLEMsQ0FNQTtBQUVBOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxJQUFJN0UsOERBQUosRUFBcEIsQyxDQUVBOztBQUNBLE1BQU04QixPQUFPLEdBQUcsSUFBSTVCLHlEQUFKLENBQVksU0FBWixDQUFoQixDLENBRUE7O0FBQ0EsTUFBTTRFLE1BQU0sR0FBRyxZQUFXO0FBQ3pCaEQsU0FBTyxDQUFDM0IsS0FBUixDQUFjLFFBQWQsRUFEeUIsQ0FHekI7O0FBQ0E0RSxVQUFRLENBQUNMLEtBQVQsR0FBaUJBLEtBQWpCLENBSnlCLENBTXpCOztBQUNBLE9BQUssTUFBTW5FLEdBQVgsSUFBa0JvRSxZQUFsQixFQUFnQztBQUMvQixVQUFNbkUsS0FBSyxHQUFHbUUsWUFBWSxDQUFDcEUsR0FBRCxDQUExQjtBQUNBLFVBQU15RSxRQUFRLEdBQUksUUFBT3pFLEdBQUksRUFBN0I7QUFDQSxVQUFNMEUsS0FBSyxHQUFHRixRQUFRLENBQUNHLGdCQUFULENBQTBCRixRQUExQixDQUFkO0FBQ0FsRCxXQUFPLENBQUNuQixNQUFSLENBQWVzRSxLQUFLLElBQUlBLEtBQUssQ0FBQ3pILE1BQU4sR0FBZSxDQUF2QyxFQUEwQyx3QkFBMUMsRUFBb0V3SCxRQUFwRTtBQUNBQyxTQUFLLENBQUNFLE9BQU4sQ0FBY0MsSUFBSSxJQUFJO0FBQ3JCQSxVQUFJLENBQUNDLFNBQUwsR0FBaUI3RSxLQUFqQjtBQUNBLEtBRkQ7QUFHQSxHQWZ3QixDQWlCekI7OztBQUNBLE9BQUssTUFBTUQsR0FBWCxJQUFrQnFFLE1BQWxCLEVBQTBCO0FBQ3pCLFVBQU1wRSxLQUFLLEdBQUdvRSxNQUFNLENBQUNyRSxHQUFELENBQXBCO0FBQ0EsVUFBTXlFLFFBQVEsR0FBSSxTQUFRekUsR0FBSSxFQUE5QjtBQUNBLFVBQU0wRSxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEJGLFFBQTFCLENBQWQ7QUFDQWxELFdBQU8sQ0FBQ25CLE1BQVIsQ0FBZXNFLEtBQUssSUFBSUEsS0FBSyxDQUFDekgsTUFBTixHQUFlLENBQXZDLEVBQTBDLHdCQUExQyxFQUFvRXdILFFBQXBFO0FBQ0FDLFNBQUssQ0FBQ0UsT0FBTixDQUFjQyxJQUFJLElBQUk7QUFDckJBLFVBQUksQ0FBQ0UsSUFBTCxHQUFZOUUsS0FBWjtBQUNBNEUsVUFBSSxDQUFDRyxHQUFMLEdBQVcscUJBQVg7QUFDQUgsVUFBSSxDQUFDSSxNQUFMLEdBQWMsUUFBZDtBQUNBLEtBSkQ7QUFLQSxHQTVCd0IsQ0E4QnpCO0FBQ0E7OztBQUNBWCxhQUFXLENBQUN0RCx5QkFBWixDQUFzQyxHQUF0QyxFQUEyQ0wsSUFBM0MsQ0FBZ0RNLE9BQU8sSUFBSTtBQUMxRCxVQUFNUSxrQkFBa0IsR0FBRyxFQUFFUixPQUFPLElBQUlBLE9BQU8sSUFBSSxHQUF4QixDQUEzQjtBQUNBTywyRUFBWSxDQUFDQyxrQkFBRCxDQUFaO0FBQ0FGLFdBQU8sQ0FBQzFCLElBQVIsQ0FBYSxRQUFiO0FBQ0EsR0FKRDtBQUtBLENBckNELEMsQ0F1Q0E7OztBQUNBMkUsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENYLE1BQTlDLEUsQ0FFQSxnRjs7Ozs7Ozs7Ozs7O0FDbEdBLGNBQWMsbUJBQU8sQ0FBQyxvTUFBb0c7O0FBRTFILDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx1R0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoidG9vbGJhci9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rvb2xiYXIvdG9vbGJhci5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5LFxcbmRpdixcXG50YWJsZSxcXG50cixcXG50ZCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5odG1sIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuYm9keSB7XFxuICB3aWR0aDogMzIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4ucGFuZWwge1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYW4gRnJhbmNpc2NvXFxcIiwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIlVidW50dVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5wYW5lbCAucm93IHtcXG4gIHBhZGRpbmc6IDE0cHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcXG59XFxuLnBhbmVsIC5yb3c6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuLnBhbmVsIC5yb3cuaGVhZGVyUm93IHtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnBhbmVsIC5yb3cgLnRleHQge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4ucGFuZWwgLnJvdyAudGV4dDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5wYW5lbCAucm93IC50ZXh0IGEge1xcbiAgY29sb3I6ICMwMDYwZGY7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbi8qKlxuICogQG92ZXJ2aWV3IFV0aWxpdHkgbGlicmFyeSBmb3IgdGhlIEFkIEFuYWx5c2lzIGZvciBGYWNlYm9vayBleHRlbnNpb24uXG4gKiAgICAgUHJvdmlkZSByZWFkIGFuZCB3cml0ZSBhY2Nlc3MgdG8gdmFyaWFibGVzIGluIGxvY2FsIHN0b3JhZ2UuXG4gKiBAYXV0aG9yIEphc29uIENodWFuZyA8amNodWFuZ0Btb3ppbGxhLmNvbT5cbiAqKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgTW9uaXRvciBmcm9tIFwiY29tbW9uL21vbml0b3IuanNcIjtcblxuLy8gPT09PSBTVEFSVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RhbnQge3N0cmluZ30gS2V5IGZvciBkaXNwbGF5aW5nIG9uZS10aW1lIG1lc3NhZ2VzIGFmdGVyIGFuIHVwZGF0ZS5cbiAqKi9cbmNvbnN0IEVYVEVOU0lPTl9VUERBVEVfTUVTU0FHRV9LRVkgPSBcImV4dGVuc2lvblVwZGF0ZU1lc3NhZ2VcIjtcblxuLyoqXG4gKiBJbnRlcmZhY2UgdG8gc3RvcmUgYW5kIHJldHJpZXZlIHBlcnNpc3RlbnQgZGF0YS5cbiAqIEBjbGFzc1xuICoqL1xuY29uc3QgRGF0YVN0b3JhZ2UgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5fbW9uaXRvciA9IG5ldyBNb25pdG9yKFwic3RvcmFnZVwiKTtcblx0dGhpcy5fbW9uaXRvci5lbnRlcihcIkRhdGFTdG9yYWdlXCIpO1xuXHR0aGlzLl9tb25pdG9yLmV4aXQoXCJEYXRhU3RvcmFnZVwiKTtcbn07XG5cbi8vIC0tLS0gUHJpdmF0ZSBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZSBvZiBhIHBlcnNpc3RhbnQgdmFyaWFibGUuXG4gKiBAcHJpdmF0ZSBAYXN5bmNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBLZXkgb2YgdGhlIHZhcmlhYmxlLlxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVmFsdWUgb2YgdGhlIHZhcmlhYmxlLlxuICogQHJldHVybnMge29iamVjdH0gRmluYWwgdmFsdWUgb2YgdGhlIHZhcmlhYmxlLlxuICovXG5EYXRhU3RvcmFnZS5wcm90b3R5cGUuX3NldFZhbHVlID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0dGhpcy5fbW9uaXRvci5lbnRlcihcIl9zZXRWYWx1ZVwiKTtcblx0XHR0aGlzLl9tb25pdG9yLmFzc2VydCh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiLCBcImtleSA9XCIsIGtleSk7XG5cdFx0dGhpcy5fbW9uaXRvci5hc3NlcnQodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiLCBcInZhbHVlID1cIiwgdmFsdWUpO1xuXHRcdGNvbnN0IGtleVZhbHVlUGFpcnMgPSB7fTtcblx0XHRrZXlWYWx1ZVBhaXJzW2tleV0gPSB2YWx1ZTtcblx0XHR0aGlzLl9tb25pdG9yLmlucHV0KGtleVZhbHVlUGFpcnMpO1xuXHRcdGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoa2V5VmFsdWVQYWlycykudGhlbigoKSA9PiB7XG5cdFx0XHRicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSkudGhlbihyZXN1bHRzID0+IHtcblx0XHRcdFx0dGhpcy5fbW9uaXRvci5vdXRwdXQocmVzdWx0cyk7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gcmVzdWx0c1trZXldO1xuXHRcdFx0XHR0aGlzLl9tb25pdG9yLmV4aXQoXCJfc2V0VmFsdWVcIik7XG5cdFx0XHRcdHJlc29sdmUodmFsdWUpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGEgcGVyc2lzdGFudCB2YXJpYWJsZS5cbiAqIEBwcml2YXRlIEBhc3luY1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIEtleSBvZiB0aGUgdmFyaWFibGUuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBWYWx1ZSBvZiB0aGUgdmFyaWFibGUuXG4gKiovXG5EYXRhU3RvcmFnZS5wcm90b3R5cGUuX2dldFZhbHVlID0gZnVuY3Rpb24oa2V5KSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHR0aGlzLl9tb25pdG9yLmVudGVyKFwiX2dldFZhbHVlXCIpO1xuXHRcdHRoaXMuX21vbml0b3IuYXNzZXJ0KHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIsIFwia2V5ID1cIiwga2V5KTtcblx0XHRicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSkudGhlbihyZXN1bHRzID0+IHtcblx0XHRcdHRoaXMuX21vbml0b3Iub3V0cHV0KHJlc3VsdHMpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSByZXN1bHRzW2tleV07XG5cdFx0XHR0aGlzLl9tb25pdG9yLmV4aXQoXCJfZ2V0VmFsdWVcIik7XG5cdFx0XHRyZXNvbHZlKHZhbHVlKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyAtLS0tIFB1YmxpYyBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFNldCB0aGUgdmFsdWUgb2YgXCJleHRlbnNpb25VcGRhdGVNZXNzYWdlXCIuXG4gKiBAcHVibGljIEBhc3luY1xuICogQHBhcmFtIHtudW1iZXJ9IHZlcnNpb24gLSBMYXRlc3QgZXh0ZW5zaW9uIHZlcnNpb24uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBMYXRlc3QgZXh0ZW5zaW9uIHZlcnNpb24uXG4gKiovXG5EYXRhU3RvcmFnZS5wcm90b3R5cGUuc2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdHRoaXMuX21vbml0b3IuZW50ZXIoXCJzZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlXCIpO1xuXHRcdHRoaXMuX21vbml0b3IuYXNzZXJ0KHR5cGVvZiB2ZXJzaW9uID09PSBcIm51bWJlclwiLCBcInZlcnNpb24gPVwiLCB2ZXJzaW9uKTtcblx0XHR0aGlzLl9zZXRWYWx1ZShFWFRFTlNJT05fVVBEQVRFX01FU1NBR0VfS0VZLCB2ZXJzaW9uKS50aGVuKHZlcnNpb24gPT4ge1xuXHRcdFx0dGhpcy5fbW9uaXRvci5leGl0KFwic2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVwiKTtcblx0XHRcdHJlc29sdmUodmVyc2lvbik7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIFwiZXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVwiLlxuICogQHB1YmxpYyBAYXN5bmNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IExhdGVzdCBleHRlbnNpb24gdmVyc2lvbi5cbiAqKi9cbkRhdGFTdG9yYWdlLnByb3RvdHlwZS5nZXRFeHRlbnNpb25VcGRhdGVNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHR0aGlzLl9tb25pdG9yLmVudGVyKFwiZ2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVwiKTtcblx0XHR0aGlzLl9nZXRWYWx1ZShFWFRFTlNJT05fVVBEQVRFX01FU1NBR0VfS0VZKS50aGVuKHZlcnNpb24gPT4ge1xuXHRcdFx0dGhpcy5fbW9uaXRvci5leGl0KFwiZ2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZVwiKTtcblx0XHRcdHJlc29sdmUodmVyc2lvbik7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8gPT09PSBFTkQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVN0b3JhZ2U7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vKipcbiAqIEBvdmVydmlldyBVdGlsaXR5IGxpYnJhcnkgZm9yIHRoZSBBZCBBbmFseXNpcyBmb3IgRmFjZWJvb2sgZXh0ZW5zaW9uLlxuICogICAgIERpc3BsYXkgYSBiYWRnZSBvdmVyIHRoZSB0b29sYmFyIGljb24uXG4gKiBAYXV0aG9yIEphc29uIENodWFuZyA8amNodWFuZ0Btb3ppbGxhLmNvbT5cbiAqKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgTW9uaXRvciBmcm9tIFwiY29tbW9uL21vbml0b3IuanNcIjtcblxuLy8gPT09PSBTVEFSVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3Qge3N0cmluZ30gVGV4dCBvZiB0aGUgYmFkZ2UgKCdYJyBmb3IgZGlzYWJsZWQpLlxuICoqL1xuY29uc3QgYmFkZ2VUZXh0ID0gXCJYXCI7XG5cbi8qKlxuICogQGNvbnN0IHtzdHJpbmd9IEZvcmVncm91bmQgY29sb3Igb2YgdGhlIGJhZGdlICh3aGl0ZSkuXG4gKiovXG5jb25zdCBiYWRnZUNvbG9yID0gXCIjZmZmXCI7XG5cbi8qKlxuICogQGNvbnN0IHtzdHJpbmd9IEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJhZGdlIChyZWQpLlxuICoqL1xuY29uc3QgYmFkZ2VSZWRCYWNrZ3JvdW5kID0gXCIjZDYyNzI4XCI7XG5cbi8qKlxuICogQGNvbnN0IHtzdHJpbmd9IEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJhZGdlIChncmV5KS5cbiAqKi9cbmNvbnN0IGJhZGdlR3JleUJhY2tncm91bmQgPSBcIiM5OTlcIjtcblxuLyoqXG4gKiBAY29uc3Qge01vbml0b3J9IEV2ZW50IGxvZ2dlci5cbiAqKi9cbmNvbnN0IG1vbml0b3IgPSBuZXcgTW9uaXRvcihcImJhZGdlXCIpO1xuXG4vKipcbiAqIERpc3BsYXkgYSBiYWRnZSBvdmVyIHRoZSB0b29sYmFyIGljb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dPbmVUaW1lTWVzc2FnZSAtIERpc3BsYXkgYmFkZ2UgaW4gcmVkLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBkaXNwbGF5QmFkZ2UgPSAoc2hvd09uZVRpbWVNZXNzYWdlID0gZmFsc2UpID0+IHtcblx0bW9uaXRvci5lbnRlcihcImRpc3BsYXlCYWRnZVwiKTtcblxuXHQvLyBTZXQgdGhlIGJhZGdlIGNvbG9ycyBhbmQgdGV4dFxuXHRicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0Q29sb3Ioe1xuXHRcdFwiY29sb3JcIjogYmFkZ2VDb2xvcixcblx0fSk7XG5cdGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7XG5cdFx0XCJjb2xvclwiOiBzaG93T25lVGltZU1lc3NhZ2UgPyBiYWRnZVJlZEJhY2tncm91bmQgOiBiYWRnZUdyZXlCYWNrZ3JvdW5kLFxuXHR9KTtcblx0YnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7XG5cdFx0XCJ0ZXh0XCI6IGJhZGdlVGV4dCxcblx0fSk7XG5cblx0bW9uaXRvci5leGl0KFwiZGlzcGxheUJhZGdlXCIpO1xufTtcblxuLy8gPT09PSBFTkQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUJhZGdlO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLyoqXG4gKiBAb3ZlcnZpZXcgVXRpbGl0eSBsaWJyYXJ5IGZvciB0aGUgQWQgQW5hbHlzaXMgZm9yIEZhY2Vib29rIGV4dGVuc2lvbi5cbiAqICAgICBBIGNvbWJpbmF0aW9uIG9mIGxvZ2dpbmcgYW5kIGxvZyBmb3JtYXR0aW5nIHRvb2xzIHRvIGFpZCBkZXZlbG9wbWVudCxcbiAqICAgICBkZWJ1Z2dpbmcsIGFuZCB0ZXN0aW5nLiBNb3N0IG9mIHRoZSBmdW5jYXRpb25hbGl0aWVzIGFyZSByZW1vdmVkIGluXG4gKiAgICAgdGhlIHJlbGVhc2UgYnVpbGQuIEFsbG93IHZhcmlvdXMgXCJ0eXBlc1wiIG9mIGV2ZW50cyB0byBiZSBsb2dnZWRcbiAqICAgICBzZXBhcmF0ZWx5IGluY2x1ZGluZyB0cmFkaXRpb25hbCBjb250cm9sIGZsb3dzLCBkYXRhIGV2ZW50cywgYW5kXG4gKiAgICAgYnJvd3NlciBleHRlbnNpb24gY29tbXVuaWNhdGlvbi4gQWxsb3cgc2ltcGxlIGFzc2VydGlvbnMuXG4gKiBAYXV0aG9yIEphc29uIENodWFuZyA8amNodWFuZ0Btb3ppbGxhLmNvbT5cbiAqKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vID09PT0gU1RBUlQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0IHtvYmplY3R9IERlZmF1bHQgdmFsdWVzIGZvciBhbGwgZXZlbnQga2V5cy5cbiAqKi9cbmNvbnN0IGRlZmF1bHRGbGFncyA9IHtcblx0XCJlbnRlclwiOiB0cnVlLFxuXHRcImV4aXRcIjogdHJ1ZSxcblx0XCJldmVudFwiOiB0cnVlLFxuXHRcImlucHV0XCI6IHRydWUsXG5cdFwib3V0cHV0XCI6IHRydWUsXG5cdFwiZGF0YVwiOiB0cnVlLFxuXHRcImFzc2VydFwiOiB0cnVlLFxufTtcblxuLyoqXG4gKiBAY29uc3Qge29iamVjdH0gVmlzdWFsIGluZGljYXRvcnMgYnkgZXZlbnQga2V5cy5cbiAqKi9cbmNvbnN0IGtleVN0cnMgPSB7XG5cdFwiZW50ZXJcIjogXCItPj5cIixcblx0XCJleGl0XCI6IFwiLTw8XCIsXG5cdFwiZXZlbnRcIjogXCItLS1cIixcblx0XCJpbnB1dFwiOiBcIiA+IFwiLFxuXHRcIm91dHB1dFwiOiBcIiA8IFwiLFxuXHRcImRhdGFcIjogXCJcIixcblx0XCJhc3NlcnRcIjogXCIhISFcIixcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2UgYW5kIGluY3JlbWVudCB0aGUgbmVzdGVkIGZ1bmN0aW9uIGxldmVscy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZW50ZXJIYW5kbGVyID0gZnVuY3Rpb24obWVzc2FnZSwgb2JqKSB7XG5cdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJlbnRlclwiLCBtZXNzYWdlLCBvYmopO1xuXHR0aGlzLl9sZXZlbCsrO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSBhbmQgZGVjcmVtZW50IHRoZSBuZXN0ZWQgZnVuY3Rpb24gbGV2ZWxzLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBleGl0SGFuZGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG9iaikge1xuXHR0aGlzLl9sZXZlbC0tO1xuXHRkaXNwbGF5TWVzc2FnZS5jYWxsKHRoaXMsIFwiZXhpdFwiLCBtZXNzYWdlLCBvYmopO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSB3aXRoIGV2ZW50LXJlbGF0ZWQgaW5kaWNhdG9ycy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZXZlbnRIYW5kbGVyID0gZnVuY3Rpb24obWVzc2FnZSwgb2JqKSB7XG5cdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJldmVudFwiLCBtZXNzYWdlLCBvYmopO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSB3aXRoIGlucHV0IChmdW5jdGlvbiBhcmd1bWVudHMpIGluZGljYXRvcnMuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IGlucHV0SGFuZGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG9iaikge1xuXHRkaXNwbGF5TWVzc2FnZS5jYWxsKHRoaXMsIFwiaW5wdXRcIiwgbWVzc2FnZSwgb2JqKTtcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2Ugd2l0aCBvdXRwdXQgKGZ1bmN0aW9uIHJldHVybnMpIGluZGljYXRvcnMuXG4gKiBAZnVuY3Rpb25cbiAqKi9cbmNvbnN0IG91dHB1dEhhbmRsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCBvYmopIHtcblx0ZGlzcGxheU1lc3NhZ2UuY2FsbCh0aGlzLCBcIm91dHB1dFwiLCBtZXNzYWdlLCBvYmopO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgbWVzc2FnZSB3aXRoIGRhdGEgaW5kaWNhdG9ycy5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZGF0YUhhbmRsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCBvYmopIHtcblx0ZGlzcGxheU1lc3NhZ2UuY2FsbCh0aGlzLCBcImRhdGFcIiwgbWVzc2FnZSwgb2JqKTtcbn07XG5cbi8qKlxuICogRGlzcGxheSBhIG1lc3NhZ2UgaWYgYW4gYXNzZXJ0aW9uIGZhaWxzLlxuICogQGZ1bmN0aW9uXG4gKiovXG5jb25zdCBhc3NlcnRIYW5kbGVyID0gZnVuY3Rpb24oZXhwcmVzc2lvbiwgbWVzc2FnZSwgb2JqKSB7XG5cdGlmICghZXhwcmVzc2lvbikge1xuXHRcdGRpc3BsYXlNZXNzYWdlLmNhbGwodGhpcywgXCJhc3NlcnRcIiwgbWVzc2FnZSwgb2JqLCB0cnVlKTtcblx0fVxufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRvIGRpc3BsYXkgYSAobmljZWx5LWZvcm1hdHRlZCkgbWVzc2FnZS5cbiAqIEBmdW5jdGlvblxuICoqL1xuY29uc3QgZGlzcGxheU1lc3NhZ2UgPSBmdW5jdGlvbihrZXksIG1lc3NhZ2UsIG9iaiwgaXNXYXJuaW5nID0gZmFsc2UpIHtcblx0Y29uc3QgZ2V0S2V5U3RycyA9IChrZXkpID0+IHtcblx0XHRpZiAoa2V5ID09PSBcImVudGVyXCIpIHtcblx0XHRcdHJldHVybiBcIltcIiArIGtleVN0cnNba2V5XS5wYWRTdGFydCgzICsgdGhpcy5fbGV2ZWwgKiAyLCBcIi1cIikgKyBcIl1cIjtcblx0XHR9XG5cdFx0aWYgKGtleSA9PT0gXCJleGl0XCIpIHtcblx0XHRcdHJldHVybiBcIltcIiArIGtleVN0cnNba2V5XS5wYWRTdGFydCgzICsgdGhpcy5fbGV2ZWwgKiAyLCBcIi1cIikgKyBcIl1cIjtcblx0XHR9XG5cdFx0aWYgKGtleSA9PT0gXCJkYXRhXCIpIHtcblx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH1cblx0XHRyZXR1cm4gXCJbXCIgKyBrZXlTdHJzW2tleV0gKyBcIl1cIjtcblx0fTtcblx0aWYgKHRoaXMuX2lzRW5hYmxlZCAmJiB0aGlzLl9mbGFnc1trZXldKSB7XG5cdFx0Y29uc3QgaWRTdHIgPSBgWyR7dGhpcy5faWRlbnRpZmllci5zdWJzdHJpbmcoMCwgMTApLnBhZEVuZCgxMCwgXCIgXCIpfV1gO1xuXHRcdGNvbnN0IGtleVN0ciA9IGdldEtleVN0cnMoa2V5KTtcblx0XHRpZiAodHlwZW9mIG9iaiAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0aWYgKGlzV2FybmluZykge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oaWRTdHIsIGtleVN0ciwgbWVzc2FnZSwgb2JqKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGlkU3RyLCBrZXlTdHIsIG1lc3NhZ2UsIG9iaik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChpc1dhcm5pbmcpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGlkU3RyLCBrZXlTdHIsIG1lc3NhZ2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coaWRTdHIsIGtleVN0ciwgbWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vKipcbiAqIE1vbml0b3IgY2xhc3MgdG8gbG9nIGRpZmZlcmVudCB0eXBlcyBvZiBldmVudHMuXG4gKiBAY2xhc3NcbiAqKi9cbmNvbnN0IE1vbml0b3IgPSBmdW5jdGlvbihpZGVudGlmaWVyLCBvcHRGbGFncyA9IHt9KSB7XG5cdHRoaXMuX2lkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXHR0aGlzLl9mbGFncyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdEZsYWdzLCBvcHRGbGFncyk7XG5cdHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG5cdHRoaXMuX2xldmVsID0gMDtcblx0aWYgKHByb2Nlc3MuZW52LkRFQlVHID09PSBcInRydWVcIikge1xuXHRcdHRoaXMuZW50ZXIgPSBlbnRlckhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmV4aXQgPSBleGl0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZXZlbnQgPSBldmVudEhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmlucHV0ID0gaW5wdXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vdXRwdXQgPSBvdXRwdXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kYXRhID0gZGF0YUhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmFzc2VydCA9IGFzc2VydEhhbmRsZXIuYmluZCh0aGlzKTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLmVudGVyID0gKCkgPT4ge307XG5cdFx0dGhpcy5leGl0ID0gKCkgPT4ge307XG5cdFx0dGhpcy5ldmVudCA9ICgpID0+IHt9O1xuXHRcdHRoaXMuaW5wdXQgPSAoKSA9PiB7fTtcblx0XHR0aGlzLm91dHB1dCA9ICgpID0+IHt9O1xuXHRcdHRoaXMuZGF0YSA9ICgpID0+IHt9O1xuXHRcdHRoaXMuYXNzZXJ0ID0gYXNzZXJ0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG59O1xuXG4vKipcbiAqIEFsbG93IHRoZSBtb25pdG9yIHRvIGxvZyBtZXNzYWdlcy5cbiAqIEBwdWJsaWNcbiAqKi9cbk1vbml0b3IucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBEaXNhbGxvdyB0aGUgbW9uaXRvciB0byBsb2cgYW55IG1lc3NhZ2VzLlxuICogQHB1YmxpY1xuICoqL1xuTW9uaXRvci5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZTtcbn07XG5cbi8vID09PT0gRU5EID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBkZWZhdWx0IE1vbml0b3I7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vKipcbiAqIEBvdmVydmlldyBEb29yaGFuZ2VyIHNjcmlwdCBvZiB0aGUgQWQgQW5hbHlzaXMgZm9yIEZhY2Vib29rIGV4dGVuc2lvbi5cbiAqICAgICBJbiB0aGlzIGRpc2FibGVkIHZlcnNpb24gb2YgdGhlIGV4dGVuc2lvbiwgdGhlIHNjcmlwdHMgZmlsbHMgaW4gdGhlIHRleHRcbiAqICAgICBtZXNzYWdlIGFuZCByZWxldmFudCBsaW5rcyBpbiB0aGUgZG9vcmhhbmdlciwgYW5kIHJlY29yZHMgdGhhdCB0aGUgdXNlclxuICogICAgIGhhcyBzZWVuIHRoZSBsYXRlc3QgbWVzc2FnZSBmb3IgdmVyc2lvbiAxLjEueC5cbiAqIEBhdXRob3IgSmFzb24gQ2h1YW5nIDxqY2h1YW5nQG1vemlsbGEuY29tPlxuICoqL1xuXG5cInVzZSBzdHJpY3RcIjtcbmltcG9ydCBcInRvb2xiYXIvdG9vbGJhci5sZXNzXCI7XG5pbXBvcnQgRGF0YVN0b3JhZ2UgZnJvbSBcImNvbW1vbi9kYXRhLXN0b3JhZ2UuanNcIjtcbmltcG9ydCBkaXNwbGF5QmFkZ2UgZnJvbSBcImNvbW1vbi9kaXNwbGF5LWJhZGdlLmpzXCI7XG5pbXBvcnQgTW9uaXRvciBmcm9tIFwiY29tbW9uL21vbml0b3IuanNcIjtcblxuLy8gPT09PSBTVEFSVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gLS0tLSBDb25zdGFudHMgZm9yIFVTIEVuZ2xpc2ggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY29uc3Qge3N0cmluZ30gVGl0bGUgb2YgdGhlIGRvb3JoYW5nZXIuXG4gKiovXG5jb25zdCB0aXRsZSA9IFwiQWQgQW5hbHlzaXMgZm9yIEZhY2Vib29rIChVLlMuIEVuZ2xpc2gpIC0gRElTQUJMRURcIjtcblxuLyoqXG4gKiBAY29uc3Qge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBEaWN0aW9uYXJ5IGNvbnRhaW5pbmcgYWxsIHN0cmluZ3MgdXNlZCBpbiB0aGUgZG9vcmhhbmdlci5cbiAqKi9cbmNvbnN0IHN0ckxhbmd1YWdlcyA9IHtcblx0XCJzdHJUaXRsZVwiOiBcIkFkIEFuYWx5c2lzIGZvciBGYWNlYm9va1wiLFxuXHRcInN0ckRpc2FibGVkTWVzc2FnZVwiOiBcIkFkIEFuYWx5c2lzIGZvciBGYWNlYm9vayBpcyB0ZW1wb3JhcmlseSBkaXNhYmxlZC4gRmFjZWJvb2sgaGFzIGJsb2NrZWQgdGhpcyBleHRlbnNpb24sIHNvIGl0IHdpbGwgbm8gbG9uZ2VyIHNob3cgeW91IGhvdyB5b3UncmUgdGFyZ2V0ZWQgYnkgYWR2ZXJ0aXNlcnMuXCIsXG5cdFwic3RyTGVhcm5Nb3JlXCI6IFwiTGVhcm4gbW9yZVwiLFxuXHRcInN0ckJyb3dzZU1lc3NhZ2VcIjogXCJZb3UgbWF5IGNvbnRpbnVlIHRvIGJyb3dzZSB0aGUgZm9sbG93aW5nIHB1YmxpYyBkYXRhc2V0cy5cIixcblx0XCJzdHJUYXJnZXRpbmdEYXRhXCI6IFwiVGFyZ2V0aW5nIGRhdGEgY29sbGVjdGVkIGJ5IFByb1B1YmxpY2FcIixcblx0XCJzdHJFbGVjdGlvbkRhdGFcIjogXCJUb3AgcG9saXRpY2FsIGFkdmVydGlzZXJzIGluIHRoZSBVbml0ZWQgU3RhdGVzXCIsXG59O1xuXG4vKipcbiAqIEBjb25zdCB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IERpY3Rpb25hcnkgY29udGFpbmluZyBhbGwgbGlua3MgaW4gdGhlIGRvb3JoYW5nZXIuXG4gKiovXG5jb25zdCBhTGlua3MgPSB7XG5cdFwic3RyTGVhcm5Nb3JlXCI6IFwiaHR0cHM6Ly9ibG9nLm1vemlsbGEub3JnL2Jsb2cvMjAxOS8wMS8zMS9tb3ppbGxhLXJhaXNlcy1jb25jZXJucy1vdmVyLWZhY2Vib29rcy1sYWNrLW9mLXRyYW5zcGFyZW5jeS9cIixcblx0XCJzdHJUYXJnZXRpbmdEYXRhXCI6IFwiaHR0cHM6Ly9tb3ppbGxhLmdpdGh1Yi5pby9hZC1hbmFseXNpcy1mb3ItZmFjZWJvb2svaW5mby5odG1sI1NlZUFsbFRhcmdldHNcIixcblx0XCJzdHJFbGVjdGlvbkRhdGFcIjogXCJodHRwczovL21vemlsbGEuZ2l0aHViLmlvL2FkLWFuYWx5c2lzLWZvci1mYWNlYm9vay9pbmZvLmh0bWwjVG9wQWR2ZXJ0aXNlcnNcIixcbn07XG5cbi8vIC0tLS0gU3RhcnQgb2YgZG9vcmhhbmdlciBzY3JpcHQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEFjY2VzcyBwZXJzaXN0ZW50IGRhdGEgc3RvcmFnZVxuY29uc3QgZGF0YVN0b3JhZ2UgPSBuZXcgRGF0YVN0b3JhZ2UoKTtcblxuLy8gTG9nIFVJIGV2ZW50cy4gRW5zdXJlIHF1ZXJ5IHNlbGVjdGlvbnMgYXJlIG5vbi1lbXB0eS5cbmNvbnN0IG1vbml0b3IgPSBuZXcgTW9uaXRvcihcInRvb2xiYXJcIik7XG5cbi8vIEluc2VydCBhbGwgc3RyaW5ncyBhbmQgbGlua3MgaW50byB0aGUgZG9vcmhhbmdlciBIVE1MIGRvY3VtZW50LlxuY29uc3QgbG9hZGVyID0gZnVuY3Rpb24oKSB7XG5cdG1vbml0b3IuZW50ZXIoXCJsb2FkZXJcIik7XG5cblx0Ly8gVXBkYXRlIHRoZSB0aXRsZSBvZiB0aGUgZG9jdW1lbnQuXG5cdGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG5cblx0Ly8gVXBkYXRlIHRleHQgaW4gdGhlIGRvY3VtZW50LlxuXHRmb3IgKGNvbnN0IGtleSBpbiBzdHJMYW5ndWFnZXMpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHN0ckxhbmd1YWdlc1trZXldO1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gYC5zdHIuJHtrZXl9YDtcblx0XHRjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHRcdG1vbml0b3IuYXNzZXJ0KGVsZW1zICYmIGVsZW1zLmxlbmd0aCA+IDAsIFwiRW1wdHkgcXVlcnkgc2VsZWN0aW9uOlwiLCBzZWxlY3Rvcik7XG5cdFx0ZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcblx0XHRcdGVsZW0uaW5uZXJUZXh0ID0gdmFsdWU7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBVcGRhdGUgbGlua3MgaW4gdGhlIGRvY3VtZW50LlxuXHRmb3IgKGNvbnN0IGtleSBpbiBhTGlua3MpIHtcblx0XHRjb25zdCB2YWx1ZSA9IGFMaW5rc1trZXldO1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gYGEuc3RyLiR7a2V5fWA7XG5cdFx0Y29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0XHRtb25pdG9yLmFzc2VydChlbGVtcyAmJiBlbGVtcy5sZW5ndGggPiAwLCBcIkVtcHR5IHF1ZXJ5IHNlbGVjdGlvbjpcIiwgc2VsZWN0b3IpO1xuXHRcdGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG5cdFx0XHRlbGVtLmhyZWYgPSB2YWx1ZTtcblx0XHRcdGVsZW0ucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5cdFx0XHRlbGVtLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBSZWNvcmQgdGhhdCB0aGUgdXNlciBoYXMgb3BlbmVkIHRoZSBkb29yaGFuZ2VyLlxuXHQvLyBVcGRhdGUgdGhlIGJhZGdlIG92ZXIgdGhlIHRvb2xiYXIgaWNvbi5cblx0ZGF0YVN0b3JhZ2Uuc2V0RXh0ZW5zaW9uVXBkYXRlTWVzc2FnZSgxLjEpLnRoZW4odmVyc2lvbiA9PiB7XG5cdFx0Y29uc3Qgc2hvd09uZVRpbWVNZXNzYWdlID0gISh2ZXJzaW9uICYmIHZlcnNpb24gPj0gMS4xKTtcblx0XHRkaXNwbGF5QmFkZ2Uoc2hvd09uZVRpbWVNZXNzYWdlKTtcblx0XHRtb25pdG9yLmV4aXQoXCJsb2FkZXJcIik7XG5cdH0pO1xufTtcblxuLy8gUnVuIGxvYWRlciB3aGVuIHRoZSBkb29yaGFuZ2VyIEhUTUwgZG9jdW1lbnQgZmluaXNoZXMgbG9hZGluZy5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGxvYWRlcik7XG5cbi8vID09PT0gRU5EID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9vbGJhci5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b29sYmFyLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b29sYmFyLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9