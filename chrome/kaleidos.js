// Copyright (c) 2012 or whatever

function openImage(info, tab) {
  chrome.tabs.create({
    url: "http://coldhead.github.com/kaleidos/?src=" + info.srcUrl,
    active: true
  });
};

chrome.contextMenus.onClicked.addListener(openImage);

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "contexts": ["image"],
    "title":    "Open image in Kaleidos",
    "type":     "normal",
    "id":       "warmhead"
  });
});