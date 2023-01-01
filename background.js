]const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.locanto.ca/*",
	"*://*.oodle.com/*",
	"*://*.classifiedads.com/*",
	"*://*.adpost.com/*",
	"*://*.gumtree.com/*",
	"*://*.geebo.com/*",
	"*://*.hoobly.com/*",
	"*://*.yelp.com/*",
	"*://*.olx.com/*",
	"*://*.godaddy.com/*",
	"*://*.hero-wars.com/*",
	"*://*.blockchain-life.com/*",
	"*://*.a-ads.com/*",
	"*://*.wix.com/*",
	"*://*.ads.google.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)
