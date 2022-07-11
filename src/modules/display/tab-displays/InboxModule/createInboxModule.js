import createTaskInputForm from "/src/modules/display/form-display/taskInputForm.js";
import { openForm } from "/src/modules/display/form-display/form-events/formModules.js";
import formEvents from "/src/modules/display/form-display/form-events/formEvents";
import { taskStorage } from "../../../controller/tasks/addTaskToStorage";
import { refreshTaskDisplay } from "../../../controller/tasks/addTaskToStorage";

const createInboxModule = () => {
  const addContent = document.querySelector(".main-content-container");

  const inboxContainer = addContent.appendChild(document.createElement("div"));
  inboxContainer.classList.add("inbox-container");

  const inboxHeader = inboxContainer.appendChild(document.createElement("h1"));
  inboxHeader.classList.add("inbox-header");
  inboxHeader.textContent = "Inbox";

  const tableContainer = inboxContainer.appendChild(
    document.createElement("div")
  );
  tableContainer.classList.add("table-container");

  const newTask = inboxContainer.appendChild(document.createElement("p"));
  newTask.classList.add("new-task");
  newTask.textContent = "Add Task";

  createTaskInputForm();
  formEvents();

  const openFormEvents = (() => {
    const formContainer = document.querySelector(".hidden-form");
    const overlayTrigger = document.querySelector(".overlay");
    newTask.addEventListener("click", function () {
      openForm(formContainer, overlayTrigger);
    });
  })();

  refreshTaskDisplay(tableContainer, taskStorage);
};

export default createInboxModule;
