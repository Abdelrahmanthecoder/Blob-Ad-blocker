const defaultFilters = [
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
	"*://ads.google.com/*",
	"*://*.freeadstime.org/*",
	"*://*.findermaster.com/*",
	"*://*.advertiseera.com/*",
	"*://*.giganticlist.com/*",
	"*://*.wallclassifieds.com/*",
	"*://*.h1ad.com/*",
	"*://*.classifiedsfactor.com/*",
	"*://ads.shopolop.com/*",
	"*://ad.ologames.com/*",
	"*://ads.digitalmarketinghints.com/*",
	"*://*.angi.com/*",
	"*://*.bbb.org/*",
	"*://*.elocal.com/*",
	"*://*.ezlocal.com/*",
	"*://*.hotfrog.com/*",
	"*://*.insiderpages.com/*",
	"*://*.local.com/*",
	"*://*.manta.net/*",
	"*://*.merchantcircle.com/*",
	"*://*.submitexpress.com/*",
	"*://*.superpages.com/*",
	"*://*.thumbtack.com/*",
	"*://*.tupalo.com/*",
	"*://*.freeadstime.org/*",
	"*://*.findermaster.com/*",
	"*://*.advertiseera.com/*",
	"*://*.giganticlist.com/*",
	"*://*.adsthumb.com/*",
	"*://*.clickindia.com/*",
	"*://*.webhostingecommerce.org/*",
	"*://*.sell.com/*",
	"*://*.indialist.com/*",
	"*://*.locanto.in/*",
	"*://*.global-free-classified-ads.com/*",
	"*://rediff.Classifieds.com/*",
	"*://*.bechna.com/*",
	"*://*.adsglobe.com/*",
	"*://*.adpost.in/*",
	"*://*.quikr.com/*",
	"*://classifieds.ivarta.com/*",
	"*://*.ocala4sale.com/*",
	"*://*.bonqo.com/*",
	"*://*.traderonline.com/*",
	"*://*.claz.org/*",
	"*://*.adswale.in/*",
	"*://*.adpostbox.com/*",
	"*://*.classifieds.webindia123.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)
