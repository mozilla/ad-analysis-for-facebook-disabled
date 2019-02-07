/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @overview Utility library for the Ad Analysis for Facebook extension.
 *     Provide read and write access to variables in local storage.
 * @author Jason Chuang <jchuang@mozilla.com>
 **/

"use strict";
import Monitor from "common/monitor.js";

// ==== START ==================================================================

/**
 * @constant {string} Key for displaying one-time messages after an update.
 **/
const EXTENSION_UPDATE_MESSAGE_VERSION_KEY = "extensionUpdateMessageVersion";

/**
 * Interface to store and retrieve persistent data.
 * @class
 **/
const DataStorage = function() {
	this._monitor = new Monitor("storage");
	this._monitor.enter("DataStorage");
	this._monitor.exit("DataStorage");
};

// ---- Private methods --------------------------------------------------------

/**
 * Set the value of a persistant variable.
 * @private @async
 * @param {string} key - Key of the variable.
 * @param {object} value - Value of the variable.
 * @returns {object} Final value of the variable.
 */
DataStorage.prototype._setValue = function(key, value) {
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
DataStorage.prototype._getValue = function(key) {
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
};

// ---- Public methods ---------------------------------------------------------

/**
 * Set the value of "extensionUpdateMessageVersion".
 * @public @async
 * @param {number} version - Latest extension version.
 * @returns {number} Latest extension version.
 **/
DataStorage.prototype.setExtensionUpdateMessageVersion = function(version) {
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
DataStorage.prototype.getExtensionUpdateMessageVersion = function() {
	return new Promise(resolve => {
		this._monitor.enter("getExtensionUpdateMessageVersion");
		this._getValue(EXTENSION_UPDATE_MESSAGE_VERSION_KEY).then(version => {
			this._monitor.exit("getExtensionUpdateMessageVersion");
			resolve(version);
		});
	});
};

// ==== END ====================================================================

export default DataStorage;
