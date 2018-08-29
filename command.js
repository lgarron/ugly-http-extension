console.log("background!")

chrome.commands.onCommand.addListener(function(command) {
  console.log("command", command);
  if (command === "go-secure") {
    chrome.tabs.executeScript(null, {
      code: "window.location.protocol = \"https:\""
    });
  }
});
