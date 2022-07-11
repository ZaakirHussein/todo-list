import { deleteForm } from "./formModules.js";
import createProjectInputForm from "../projectInputForm.js";
import { handleProjectForm } from "../../../controller/projects/addProjectToStorage.js";
import { overlayTrigger as trigger } from "./formModules.js";

const openProjectForm = (() => {
  const createProjectIcon = document.querySelector("#add-btn");

  createProjectIcon.addEventListener("click", function () {
    createProjectInputForm();
    trigger();
  });
})();

const projectFormEvents = () => {
  const projectFormContainer = document.querySelector(".project-form");
  const projectFormInput = document.querySelector(".project-form-content");
  const projectCancelBtn = document.querySelector(".project-cancel-btn");
  const overlayTrigger = document.querySelector(".overlay");

  const closeProjectForm = (() => {
    overlayTrigger.addEventListener("click", function () {
      deleteForm(projectFormContainer, overlayTrigger, projectFormInput);
    });

    projectCancelBtn.addEventListener("click", function () {
      deleteForm(projectFormContainer, overlayTrigger, projectFormInput);
    });
  })();

  const submitProjectEvent = (() => {
    projectFormInput.addEventListener("submit", handleProjectForm);
  })();
};

export { openProjectForm, projectFormEvents };
