chrome.commands.onCommand.addListener(function(command) {
  if (command === "go-secure") {
    chrome.tabs.executeScript(null, {
      code: "window.location.protocol = \"https:\""
    });
  }
});
