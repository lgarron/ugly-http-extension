let timeout;

function display_status(message) {
  // Update status to let user know options were saved.
  const status = document.getElementById("status");
  status.textContent = message;
  setTimeout(() => {
    status.textContent = "";
  }, 750);
}

// Saves options to chrome.storage
function save_options() {
  const theme = document.getElementById("theme").value;
  const exceptions = document
    .getElementById("exceptions")
    .value.split("\n")
    .map(Function.prototype.call, String.prototype.trim);
  const exceptionsMap = {};
  for (const item of exceptions) {
    if (item) {
      exceptionsMap[item] = true;
    }
  }
  chrome.storage.local.set(
    {
      theme: theme,
      exceptions: exceptionsMap,
    },
    display_status.bind(this, "Option saved!"),
  );
}

// Save the option if the user stops writing for a second
function save_options_with_delay() {
  if (timeout) {
    window.clearTimeout(timeout);
  }
  timeout = window.setTimeout(save_options, 1000);
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get(
    {
      theme: "default",
      exceptions: {},
    },
    (items) => {
      document.getElementById("theme").value = items.theme;
      const exceptionList = document.getElementById("exceptions");
      for (const exception in items.exceptions) {
        exceptionList.value += `${exception}\n`;
      }
    },
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("theme").addEventListener("change", save_options);
document
  .getElementById("exceptions")
  .addEventListener("input", save_options_with_delay);
