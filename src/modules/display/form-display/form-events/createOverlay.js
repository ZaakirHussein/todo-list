const createOverlay = (() => {
  const addContent = document.querySelector(".content-container");
  const overlay = addContent.appendChild(document.createElement("div"));
  overlay.classList.add("overlay");
})();

export default createOverlay;
