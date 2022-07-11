const createTaskInputForm = () => {
  const mainContentContainer = document.querySelector(
    ".main-content-container"
  );
  const hiddenForm = mainContentContainer.appendChild(
    document.createElement("div")
  );
  hiddenForm.classList.add("hidden-form");

  const formContainer = hiddenForm.appendChild(document.createElement("div"));
  formContainer.classList.add("form-container");
  const formContent = formContainer.appendChild(document.createElement("form"));
  formContent.classList.add("form-content");

  const createTaskInput = (() => {
    const formTaskNameInput = formContent.appendChild(
      document.createElement("input")
    );
    formTaskNameInput.setAttribute("type", "text");
    formTaskNameInput.setAttribute("name", "title");
    formTaskNameInput.setAttribute("placeholder", "New Task");
    formTaskNameInput.setAttribute("id", "title");
    formTaskNameInput.required = true;
  })();
  const createDescriptionInput = (() => {
    const formDescriptionInput = formContent.appendChild(
      document.createElement("textarea")
    );
    formDescriptionInput.setAttribute("type", "textarea");
    formDescriptionInput.setAttribute("name", "description");
    formDescriptionInput.setAttribute("placeholder", "Description");
    formDescriptionInput.setAttribute("rows", 4);
    formDescriptionInput.setAttribute("id", "description");
  })();

  const formRightContainer = formContent.appendChild(
    document.createElement("div")
  );
  formRightContainer.classList.add("form-right-container");

  const createDueDate = (() => {
    const dueDateInput = formRightContainer.appendChild(
      document.createElement("input")
    );
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "dueDate");
    dueDateInput.setAttribute("id", "dueDate");
    dueDateInput.required = true;
    dueDateInput.min = new Date().toISOString().split("T")[0];
  })();
  const createPriortyInput = (() => {
    const priortyInput = formRightContainer.appendChild(
      document.createElement("select")
    );
    priortyInput.setAttribute("type", "select");
    priortyInput.setAttribute("name", "priorty");
    priortyInput.setAttribute("id", "priorty");

    const appendOptionsToSelect = (() => {
      const listOfOptions = ["High", "Medium", "Low"];
      for (let i = 0; i < listOfOptions.length; ++i) {
        const option = document.createElement("option");
        option.value = listOfOptions[i];
        option.text = listOfOptions[i];
        option.id = listOfOptions[i];
        priortyInput.appendChild(option);
      }
    })();
  })();

  const buttonContainer = formContent.appendChild(
    document.createElement("div")
  );
  buttonContainer.classList.add("button-container");

  const createCancelBtn = (() => {
    const cancelBtn = buttonContainer.appendChild(
      document.createElement("button")
    );
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.setAttribute("type", "button");
  })();
  const createSubmitInput = (() => {
    const submit = buttonContainer.appendChild(document.createElement("input"));
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.setAttribute("id", "input-css");
  })();
};

export default createTaskInputForm;
