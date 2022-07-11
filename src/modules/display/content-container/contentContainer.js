const createContentContainer = (() => {
  const addContent = document.querySelector(".content-container");
  const mainContentContainer = addContent.appendChild(
    document.createElement("div")
  );
  mainContentContainer.classList.add("main-content-container");
})();

export default createContentContainer;
