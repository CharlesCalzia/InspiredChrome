console.log("bg running");
/*
*/
//check if youtube is in currently opened tabs

var timerSecs = 0;
console.log("content-script.js loaded");
chrome.storage.sync.get('timerSecs', function(result) {
    if (!result.timerSecs) {
        chrome.storage.sync.set({'timerSecs': 0}, function() {
            console.log('timer set to 0');
            
        });
    }
    else{
        console.log('timer is ' + result.timerSecs);
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
