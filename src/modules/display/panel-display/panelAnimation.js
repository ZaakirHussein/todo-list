const panelAnimation = (panel) => {
  const navBarButton = document.querySelector("#panel-bars");
  const panelHeader = document.querySelectorAll(".panel-header");
  const projectHeader = document.querySelector(".projects-header");
  const inboxIcon = document.querySelector(".inbox-tab");
  const todayIcon = document.querySelector(".today-tab");
  const weekIcon = document.querySelector(".week-tab");
  const addProjectBtn = document.getElementById("add-project");
  const addProjectText = document.querySelector(".add-btn-container");
  const iconContainer = document.querySelector(".left-tab-container");

  // Nav bar button's event Listener that controllers the side panel's accordion animation
  navBarButton.addEventListener("click", function () {
    const decreasePanelWidth = (() => {
      panel.classList.toggle("panel-container_small");
    })();
    const removeHeaderText = (() => {
      panelHeader.forEach((header) => {
        header.classList.toggle("panel-header_remove");
      });
    })();
    const increaseIconSize = (() => {
      iconContainer.classList.toggle("left-tab-container_small");
      inboxIcon.classList.toggle("inbox-tab_larger");
      todayIcon.classList.toggle("today-tab_larger");
      weekIcon.classList.toggle("week-tab_larger");
    })();
    const addProjectButton = (() => {
      projectHeader.classList.toggle("projects-header_remove");
      if (addProjectBtn.style.display === "block") {
        addProjectBtn.style.display = "none";
      } else {
        addProjectBtn.style.display = "block";
      }
    })();

    const removeAddProjectText = (() => {
      addProjectText.classList.toggle("hidden");
    })();
  });
};

export default panelAnimation;
