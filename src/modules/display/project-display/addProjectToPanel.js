import projectPanelEvents from "./projectPanelEvents";

const addProjectToPanelDisplay = (project) => {
  const projectListContainer = document.querySelector(
    ".project-list-container"
  );

  const projectsTitleContainer = projectListContainer.appendChild(
    document.createElement("div")
  );
  projectsTitleContainer.classList.add("project-title-container");

  const projectCircle = projectsTitleContainer.appendChild(
    document.createElement("i")
  );
  projectCircle.className = "fa-solid fa-circle";
  projectCircle.style.color = project.color;

  const displayProjectInPanel = projectsTitleContainer.appendChild(
    document.createElement("p")
  );
  displayProjectInPanel.classList.add("collapsible-content");
  displayProjectInPanel.textContent = project.title;
  console.log(project.title);

  projectsTitleContainer.addEventListener("click", function () {
    projectPanelEvents(project);
  });
};

export default addProjectToPanelDisplay;
