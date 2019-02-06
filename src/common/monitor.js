/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

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
	"assert": true,
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
	"assert": "!!!",
};

/**
 * Display a message and increment the nested function levels.
 * @function
 **/
const enterHandler = function(message, obj) {
	displayMessage.call(this, "enter", message, obj);
	this._level++;
};

/**
 * Display a message and decrement the nested function levels.
 * @function
 **/
const exitHandler = function(message, obj) {
	this._level--;
	displayMessage.call(this, "exit", message, obj);
};

/**
 * Display a message with event-related indicators.
 * @function
 **/
const eventHandler = function(message, obj) {
	displayMessage.call(this, "event", message, obj);
};

/**
 * Display a message with input (function arguments) indicators.
 * @function
 **/
const inputHandler = function(message, obj) {
	displayMessage.call(this, "input", message, obj);
};

/**
 * Display a message with output (function returns) indicators.
 * @function
 **/
const outputHandler = function(message, obj) {
	displayMessage.call(this, "output", message, obj);
};

/**
 * Display a message with data indicators.
 * @function
 **/
const dataHandler = function(message, obj) {
	displayMessage.call(this, "data", message, obj);
};

/**
 * Display a message if an assertion fails.
 * @function
 **/
const assertHandler = function(expression, message, obj) {
	if (!expression) {
		displayMessage.call(this, "assert", message, obj, true);
	}
};

/**
 * Prepare to display a message.
 * @function
 **/
const displayMessage = function(key, message, obj, isWarning = false) {
	const getKeyStrs = (key) => {
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
const Monitor = function(identifier, optFlags = {}) {
	this._identifier = identifier;
	this._flags = Object.assign(defaultFlags, optFlags);
	this._isEnabled = true;
	this._level = 0;
	if (process.env.DEBUG === "true") {
		this.enter = enterHandler.bind(this);
		this.exit = exitHandler.bind(this);
		this.event = eventHandler.bind(this);
		this.input = inputHandler.bind(this);
		this.output = outputHandler.bind(this);
		this.data = dataHandler.bind(this);
		this.assert = assertHandler.bind(this);
	} else {
		this.enter = () => {};
		this.exit = () => {};
		this.event = () => {};
		this.input = () => {};
		this.output = () => {};
		this.data = () => {};
		this.assert = assertHandler.bind(this);
	}
};

/**
 * Allow the monitor to log messages.
 * @public
 **/
Monitor.prototype.enable = function() {
	this._isEnabled = true;
};

/**
 * Disallow the monitor to log any messages.
 * @public
 **/
Monitor.prototype.disable = function() {
	this._isEnabled = false;
};

export default Monitor;
