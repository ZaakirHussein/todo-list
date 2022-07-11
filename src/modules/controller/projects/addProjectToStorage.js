import Project from "./projectFactory";
import { deleteForm } from "../../display/form-display/form-events/formModules";
import refreshProjectDisplay from "../../display/project-display/refreshProjectDisplay";
import { dropDownAnimation } from "../../display/panel-display/collapsibleContent";
import addProjectToPanelDisplay from "../../display/project-display/addProjectToPanel";
import randomColorGenerator from "../../display/general/randomColor";

const projectStorage = [];

const handleProjectForm = (event) => {
  event.preventDefault();
  let project;

  //Form Inputs
  const projectTitleInput = document.getElementById("project-title").value;
  const projectDescriptionInput = document.getElementById(
    "project-description"
  ).value;

  const createProjectObj = (() => {
    project = new Project(projectTitleInput, projectDescriptionInput, false);
  })();

  const pushProjectToStorage = (() => {
    projectStorage.push(project);
    console.log(projectStorage);
  })();

  const closeFormEvent = (() => {
    const projectFormInput = document.querySelector(".project-form-content");
    const projectFormContainer = document.querySelector(".project-form");
    const overlayTrigger = document.querySelector(".overlay");
    deleteForm(projectFormContainer, overlayTrigger, projectFormInput);
  })();
  dropDownAnimation();
  addProjectToPanelDisplay(project);
};

export { handleProjectForm, projectStorage };
