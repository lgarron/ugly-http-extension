var timeout;

function display_status(message) {
  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.textContent = message;
  setTimeout(function() {
    status.textContent = "";
  }, 750);
}

// Saves options to chrome.storage
function save_options() {
  var theme = document.getElementById("theme").value;
  var exceptions = document.getElementById("exceptions").value;
  chrome.storage.local.set({
    theme: theme,
    exceptions: exceptions,
  }, display_status.bind(this, "Option saved!"));
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
  chrome.storage.local.get({
    theme: "default",
    exceptions: ""
  }, function(items) {
    document.getElementById("theme").value = items.theme;
    document.getElementById("exceptions").value = items.exceptions;
  });
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("theme").addEventListener("change",
    save_options);
document.getElementById("exceptions").addEventListener("input",
    save_options_with_delay);
