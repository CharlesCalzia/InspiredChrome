var timerSecs = 0;
console.log("content-script.js loaded");
chrome.storage.sync.get('timerSecs', function(result) {
    if (!result.timerSecs) {
        chrome.storage.sync.set({'timerSecs': 0});
    }
    else{
        timerSecs = result.timerSecs;
    }
});
setInterval(function(){
    chrome.tabs.query({url: "https://www.youtube.com/*"}, function(tabs){
        if (tabs.length > 0){
            timerSecs++;
            chrome.storage.sync.set({'timerSecs': timerSecs});
        }
    });
}, 1000);
