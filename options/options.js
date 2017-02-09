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
  chrome.storage.local.set({
    theme: theme,
  }, display_status.bind(this, "Option saved!"));
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get({
    theme: "default"
  }, function(items) {
    document.getElementById("theme").value = items.theme;
  });
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("theme").addEventListener("change",
    save_options);
