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

"use strict";
import DataStorage from "common/data-storage.js";
import displayBadge from "common/display-badge.js";

// ==== START ==================================================================

// Access persistent data storage.
const dataStorage = new DataStorage();

// Display a badge over the toolbar icon.
dataStorage.getExtensionUpdateMessageVersion().then(version => {
	const showOneTimeMessage = !(version && version >= 1.1);
	displayBadge(showOneTimeMessage);
});

// ==== END ====================================================================
