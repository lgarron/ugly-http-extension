
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
    exceptions: ""
  }, function(items) {
    var theme = items.theme;
    var exceptions = items.exceptions.split(',')
        .map(Function.prototype.call, String.prototype.trim);
    if (themes.indexOf(theme) === -1) {
      theme = defaultTheme();
    }
    if (!exceptions.includes(window.location.host)) {
      document.body.classList.add("ugly-http-theme-" + theme);
    }
  });
}

document.body.classList.add("ugly-http-status-loaded");
