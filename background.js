chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: ['1'] })
    .then(() => {
      chrome.declarativeNetRequest.addRules([{
        id: '1',
        priority: 1,
        action: { type: 'block' },
        condition: {
          urlFilter: { urls: ['<all_urls>'] },
          domains: ['doubleclick.net', 'googleadservices.com', 'advertising.com']
        }
      }]);
    });
});
