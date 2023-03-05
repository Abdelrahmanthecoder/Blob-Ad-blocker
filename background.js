chrome.runtime.onInstalled.addListener(() => {
    console.log("BLOB Adblocker installed");
  });
  
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("Blocking:", details.url);
        return {cancel: true};
    },
    {urls: adList},
    ["blocking"]
);
