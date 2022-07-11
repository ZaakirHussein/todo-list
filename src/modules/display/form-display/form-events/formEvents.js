import { openForm, closeForm } from "./formModules.js";
import { handleForm } from "../../../controller/tasks/addTaskToStorage";
import { hideDescription } from "./formModules";

const formEvents = () => {
  // Add Tasks Events
  const formInput = document.querySelector(".form-content");
  const formContainer = document.querySelector(".hidden-form");
  const overlayTrigger = document.querySelector(".overlay");
  const cancelBtn = document.querySelector(".cancel-btn");

  const closeFormEvents = (() => {
    overlayTrigger.addEventListener("click", function () {
      closeForm(formContainer, overlayTrigger, formInput);
      if (document.querySelector(".description-container") !== null) {
        hideDescription();
      }
    });

    cancelBtn.addEventListener("click", function () {
      closeForm(formContainer, overlayTrigger, formInput);
    });
  })();

  const submitTaskEvent = (() => {
    formInput.addEventListener("submit", handleForm);
  })();
};

export default formEvents;
