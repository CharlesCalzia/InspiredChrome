setInterval(function(){
    chrome.storage.sync.get('timerSecs', function(result) {
        var date = new Date(null);
        date.setSeconds(result.timerSecs);
        var time = date.toISOString().substr(11, 8);
        document.getElementById("timer").innerHTML = time;
    });
    
}, 1000);