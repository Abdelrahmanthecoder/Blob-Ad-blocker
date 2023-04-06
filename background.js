chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Check if request matches an ad network and block it if it does
    if (isAd(details.url)) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

function isAd(url) {
  // Check if URL matches an ad network
  var adDomains = ["doubleclick.net", "googleadservices.com", "advertising.com"];
  for (var i = 0; i < adDomains.length; i++) {
    if (url.indexOf(adDomains[i]) !== -1) {
      return true;
    }
  }
  return false;
}
