let currentTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(async activeInfo => {
  console.log('Tab activated:', activeInfo);
  if (currentTab && startTime) {
    const duration = Date.now() - startTime;
    console.log(`Sending time data for ${currentTab.url}, duration: ${duration}ms`);
    sendTimeData(currentTab.url, duration);
  }

  const tab = await chrome.tabs.get(activeInfo.tabId);
  currentTab = tab;
  startTime = Date.now();
});

chrome.windows.onFocusChanged.addListener(windowId => {
  console.log('Window focus changed:', windowId);
  if (windowId === chrome.windows.WINDOW_ID_NONE) return;

  if (currentTab && startTime) {
    const duration = Date.now() - startTime;
    console.log(`Sending time data for ${currentTab.url}, duration: ${duration}ms`);
    sendTimeData(currentTab.url, duration);
  }

  startTime = Date.now();
});

function sendTimeData(url, duration) {
  fetch('http://localhost:3001/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: 'user1',
      domain: url,
      duration: Math.floor(duration / 1000),
      date: new Date()
    })
  })
  .then(res => console.log('✅ Sent:', url, duration))
  .catch(err => console.error('❌ Error:', err));
}



