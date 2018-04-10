'use strict';

chrome.runtime.onInstalled.addListener(function() {
  // chrome.storage.sync.set({color: '#3aa757'}, function() {
  //   console.log("The color is green.");
  // });

  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  //   chrome.declarativeContent.onPageChanged.addRules([{
  //     conditions: [new chrome.declarativeContent.PageStateMatcher({
  //       pageUrl: {hostEquals: 'www.instagram.com'},
  //     })
  //     ],
  //         actions: [new chrome.declarativeContent.ShowPageAction()]
  //   }]);
  // });
});

function CallCrawlerPost(info)
{
  chrome.tabs.executeScript({code:'CrawThisPost()'});
  //chrome.tabs.create({url: "http://maps.google.com/maps?q=" + searchstring});
}

chrome.contextMenus.create({title: "CV訂單統計", contexts:["page"], onclick: CallCrawlerPost});
