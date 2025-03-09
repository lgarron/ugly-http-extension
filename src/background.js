chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["./src/clear.js"],
  });
});

chrome.commands.onCommand.addListener(async (command, tab) => {
  if (command === "go-secure") {
    const url = new URL(tab.url);
    if (url.protocol === "http:") {
      url.protocol = "https:";
      await chrome.tabs.update(tab.id, {
        url: url.toString(),
      });
    }
  }
});
