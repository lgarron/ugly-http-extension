chrome.tabs.query({active: true, currentWindow: true }, function(activeTabs) {
    if (activeTabs.length < 1) return;
    chrome.tabs.executeScript(null, {code:"document.body.classList.add('escape-httpugly');",
                                     allFrames: true, runAt:"document_idle"});
    window.close();
});
