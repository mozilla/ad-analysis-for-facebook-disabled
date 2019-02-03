"use strict";

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
const badgeBackground = "#d62728";

/**
 * Display a badge over the toolbar icon.
 * @private
 **/
const displayBadge = () => {
	browser.browserAction.setBadgeTextColor({
		"color": badgeColor,
	});
	browser.browserAction.setBadgeBackgroundColor({
		"color": badgeBackground,
	});
	browser.browserAction.setBadgeText({
		"text": badgeText,
	});
};

// Globally display a badge on startup.
displayBadge();
