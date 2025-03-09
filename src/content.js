const themes = new Set([
  "faded",
  "grayscale",
  "sepia",
  "wide-blur",
  "overexposed",
  "flip-hue",
  "red",
  "blue",
  "none",
]);

function defaultTheme() {
  return "faded";
}

if (!window.isSecureContext) {
  document.body.classList.add("ugly-http-status-loaded");

  chrome.storage.local.get(
    {
      theme: "default",
      exceptions: {},
    },
    (items) => {
      let { theme } = items;
      if (!themes.has(theme)) {
        theme = defaultTheme();
      }
      if (!items.exceptions[window.location.hostname]) {
        document.body.classList.add(`ugly-http-theme-${theme}`);
      }
    },
  );
}
