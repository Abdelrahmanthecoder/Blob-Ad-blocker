chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (isAd(details.url)) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

function isAd(url) {
  var adDomains = ["doubleclick.net", "googleadservices.com", "advertising.com"];
  for (var i = 0; i < adDomains.length; i++) {
    if (url.indexOf(adDomains[i]) !== -1) {
      return true;
    }
  }
  return false;
}
