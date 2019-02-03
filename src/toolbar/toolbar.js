"use strict";
import "./toolbar.less";

/**
 * @const {string} Title of the doorhanger.
 **/
const title = "Ad Analysis for Facebook (U.S. English) - DISABLED";

/**
 * @const {Object.<string, string>} Dictionary containing all strings used in the doorhanger.
 **/
const strLanguages = {
	"strTitle": "Ad Analysis for Facebook",
	"strDisabledMessage": "Ad Analysis for Facebook (U.S. English) has been temporarily disabled.",
	"strReadMore": "Read more.",
	"strBlogPost": "Mozilla Raises Concerns Over Facebook's Lack of Transparency",
	"strBrowseMessage": "You may continue to browse the following public datasets.",
	"strTargetingData": "Targeting data",
	"strElectionData": "Top political advertisers in the United States",
};

/**
 * @const {Object.<string, string>} Dictionary containing all links in the doorhanger.
 **/
const aLinks = {
	"strBlogPost": "https://blog.mozilla.org/blog/2019/01/31/mozilla-raises-concerns-over-facebooks-lack-of-transparency/",
	"strTargetingData": "https://mozilla.github.io/ad-analysis-for-facebook/info.html#SeeAllTargets",
	"strElectionData": "https://mozilla.github.io/ad-analysis-for-facebook/info.html#TopAdvertisers",
};

// Insert all strings and links into the doorhanger HTML document.
document.addEventListener("DOMContentLoaded", function() {
	document.title = title;
	for (const key in strLanguages) {
		const value = strLanguages[key];
		document.querySelectorAll(`.${key}`).forEach(elem => {
			elem.innerText = value;
		});
	}
	for (const key in aLinks) {
		const value = aLinks[key];
		document.querySelectorAll(`a.${key}`).forEach(elem => {
			elem.href = value;
			elem.rel = "noopener noreferrer";
			elem.target = "_blank";
		});
	}
});
