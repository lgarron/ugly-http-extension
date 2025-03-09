for (const className of document.body.classList) {
  if (className.startsWith("ugly-http-theme-")) {
    document.body.classList.remove(className);
  }
}
