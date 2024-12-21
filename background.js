let startTime;
let isTracking = false;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("youtube.com")) {
    if (!isTracking) {
      startTime = Date.now();
      isTracking = true;
    }
  } else {
    if (isTracking) {
      updateTimeSpent();
      isTracking = false;
    }
  }
});

function updateTimeSpent() {
    const endTime = Date.now();
    const timeSpent = endTime - startTime;
    
    chrome.storage.local.get(['totalTime'], (result) => {
      const newTotal = (result.totalTime || 0) + timeSpent;
      chrome.storage.local.set({ totalTime: newTotal });
    });
  }
  