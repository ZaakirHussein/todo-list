import Task from "./taskFactory";
import { closeForm } from "../../display/form-display/form-events/formModules.js";
import refreshTaskDisplay from "../../display/task-displays/refreshTaskDisplay.js";
import { checkDate } from "../../display/general/getTodaysDate";

const taskStorage = [];
const tasksDueTodayStorage = [];
const tasksDueWeekStorage = [];

const handleForm = (event) => {
  event.preventDefault();
  let task;
  let formSelect = document.getElementById("priorty");

  //Form Inputs
  const titleInput = document.getElementById("title").value;
  const descriptionInput = document.getElementById("description").value;
  const dueDateInput = document.getElementById("dueDate").value;
  const priortyInput = formSelect.options[formSelect.selectedIndex].value;

  const createTaskObj = (() => {
    task = new Task(
      titleInput,
      descriptionInput,
      dueDateInput,
      priortyInput,
      false
    );
  })();

  const pushTaskToStorage = (() => {
    taskStorage.push(task);
    console.log(taskStorage);
  })();

  const pushTodaysTaskToStorage = (() => {
    checkDate(task);
  })();

  const closeFormEvent = (() => {
    const formInput = document.querySelector(".form-content");
    const formContainer = document.querySelector(".hidden-form");
    const overlayTrigger = document.querySelector(".overlay");
    closeForm(formContainer, overlayTrigger, formInput);
  })();

  const refreshInboxTaskDisplay = (() => {
    const removeChildNode = document.querySelector(".table-container");
    refreshTaskDisplay(removeChildNode, taskStorage);
  })();
};

export {
  handleForm,
  taskStorage,
  tasksDueTodayStorage,
  tasksDueWeekStorage,
  refreshTaskDisplay,
};
