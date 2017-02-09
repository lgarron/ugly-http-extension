
var themes = [
  "faded",
  "grayscale",
  "sepia",
  "wide-blur",
  "overexposed",
  "flip-hue",
  "none"
];

function defaultTheme() {
  return "faded";
}

chrome.storage.local.get({
  theme: "default"
}, function(items) {
  var theme = items.theme;
  if (themes.indexOf(theme) === -1) {
    theme = defaultTheme();
  }

  document.body.classList.add("ugly-http-status-loaded");
  document.body.classList.add("ugly-http-theme-" + theme);
});