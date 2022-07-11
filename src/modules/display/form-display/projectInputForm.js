import { projectFormEvents } from "./form-events/projectFormEvents";

const createProjectInputForm = () => {
  const mainContentContainer = document.querySelector(
    ".main-content-container"
  );
  const projectForm = mainContentContainer.appendChild(
    document.createElement("div")
  );
  projectForm.classList.add("project-form");

  const projectFormContainer = projectForm.appendChild(
    document.createElement("div")
  );
  projectFormContainer.classList.add("project-form-container");
  const formContent = projectFormContainer.appendChild(
    document.createElement("form")
  );
  formContent.classList.add("project-form-content");

  const createProjectHeader = (() => {
    const projectHeader = formContent.appendChild(document.createElement("h1"));
    projectHeader.textContent = "Create a Project";
  })();

  const createProjectInput = (() => {
    const formProjectNameInput = formContent.appendChild(
      document.createElement("input")
    );
    formProjectNameInput.setAttribute("type", "text");
    formProjectNameInput.setAttribute("name", "title");
    formProjectNameInput.setAttribute("placeholder", "Project Title");
    formProjectNameInput.setAttribute("id", "project-title");
    formProjectNameInput.required = true;
  })();
  const createDescriptionInput = (() => {
    const projectFormDescriptionInput = formContent.appendChild(
      document.createElement("textarea")
    );
    projectFormDescriptionInput.setAttribute("type", "textarea");
    projectFormDescriptionInput.setAttribute("name", "description");
    projectFormDescriptionInput.setAttribute("placeholder", "Description");
    projectFormDescriptionInput.setAttribute("rows", 4);
    projectFormDescriptionInput.setAttribute("id", "project-description");
  })();

  const projectButtonContainer = formContent.appendChild(
    document.createElement("div")
  );
  projectButtonContainer.classList.add("project-button-container");

  const createProjectCancelBtn = (() => {
    const projectCancelBtn = projectButtonContainer.appendChild(
      document.createElement("button")
    );
    projectCancelBtn.textContent = "Cancel";
    projectCancelBtn.classList.add("project-cancel-btn");
    projectCancelBtn.setAttribute("type", "button");
  })();
  const createProjectSubmitInput = (() => {
    const projectSubmit = projectButtonContainer.appendChild(
      document.createElement("input")
    );
    projectSubmit.setAttribute("type", "submit");
    projectSubmit.setAttribute("value", "Submit");
    projectSubmit.setAttribute("id", "project-submit");
  })();

  projectFormEvents();
};

export default createProjectInputForm;
