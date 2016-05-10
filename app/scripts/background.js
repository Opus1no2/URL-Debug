'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: 'Debug'});

chrome.browserAction.onClicked.addListener(function(){
  var newURL = 'main.html';
  chrome.tabs.create({ url: newURL });
});
