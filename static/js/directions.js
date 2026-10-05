(() => {
  const trigger = document.getElementById("directions-open");
  const dialog = document.getElementById("directions-dialog");
  const frame = document.getElementById("directions-frame");
  const printButton = document.getElementById("directions-print");
  if (!trigger || !dialog || typeof dialog.showModal !== "function") return;

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.showModal();
    document.body.classList.add("directions-open");
    if (!frame.getAttribute("src")) frame.src = frame.dataset.src;
  });
  frame.addEventListener("load", () => { printButton.disabled = false; });
  document.getElementById("directions-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => {
    document.body.classList.remove("directions-open");
    trigger.focus();
  });
  printButton.addEventListener("click", () => {
    try {
      frame.contentWindow.focus();
      frame.contentWindow.print();
    } catch (error) {
      window.open(frame.dataset.src, "_blank", "noopener");
    }
  });
})();
