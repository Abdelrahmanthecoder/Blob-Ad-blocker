chrome.declarativeNetRequest.onRequest.addRules({
    id: "block_ads",
    rules: [
        {
            action: {type: "block"},
            condition: {
                urls: [
                    "*://*.doubleclick.net/*",
                    "*://*.googlesyndication.com/*",
                    "*://*.googletagservices.com/*",
                    "*://*.googleadservices.com/*",
                    "*://*.google-analytics.com/*",
                    "*://*.googleadservices.com/*",
                    "*://*.zedo.com/*",
                    "*://*.adbrite.com/*",
                    "*://*.adbureau.net/*",
                    "*://*.carbonads.net/*",
                    "*://*.cdn.carbonads.com/*",
                    "*://*.cdn.carbonads.net/*",
                    "*://*.cdn.doubleclick.net/*",
                    "*://*.cdn.googletagservices.com/*",
                    "*://*.cdn.googleadservices.com/*",
                    "*://*.cdn.zedo.com/*",
                ]
            }
        }
    ]
}, function() {
    console.log("Blocking ads");
});
