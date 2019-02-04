"use strict";

import DataStorage from "../common/data-storage.js";
import displayBadge from "../common/display-badge.js";

// ==== START ==================================================================

// Access persistent data storage.
const dataStorage = new DataStorage();

// Display a badge over the toolbar icon.
dataStorage.getExtensionUpdateMessage().then(version => {
	const showOneTimeMessage = !(version && version >= 1.1);
	displayBadge(showOneTimeMessage);
});

// ==== END ====================================================================
