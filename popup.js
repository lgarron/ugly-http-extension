
chrome.tabs.query({active: true, currentWindow: true }, function(activeTabs) {
  if (activeTabs.length < 1) return;
  chrome.tabs.executeScript(null, {
    code:"document.body.classList.forEach(function(c) {if (c.startsWith(\"ugly-http-theme-\")) {document.body.classList.remove(c)}});",
    allFrames: true,
    runAt:"document_idle"
  });
  window.close();
});
