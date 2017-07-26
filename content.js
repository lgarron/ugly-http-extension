
var themes = [
  "faded",
  "grayscale",
  "sepia",
  "wide-blur",
  "overexposed",
  "flip-hue",
  "red",
  "blue",
  "none"
];

function defaultTheme() {
  return "faded";
}

if (!window.isSecureContext) {
  chrome.storage.local.get({
    theme: "default",
    exceptions: {}
  }, function(items) {
    var theme = items.theme;
    var exceptions = items.exceptions;
    if (themes.indexOf(theme) === -1) {
      theme = defaultTheme();
    }
    if (!exceptions[window.location.hostname]) {
      document.body.classList.add("ugly-http-theme-" + theme);
    }
  });
}

document.body.classList.add("ugly-http-status-loaded");
