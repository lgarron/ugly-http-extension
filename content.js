
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
    theme: "default"
  }, function(items) {
    var theme = items.theme;
    if (themes.indexOf(theme) === -1) {
      theme = defaultTheme();
    }

    document.body.classList.add("ugly-http-theme-" + theme);
  });
}
setTimeout(function() {
document.body.classList.add("ugly-http-status-loaded");
}, 10);
