/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/controller/projects/addProjectToStorage.js":
/*!****************************************************************!*\
  !*** ./src/modules/controller/projects/addProjectToStorage.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleProjectForm": () => (/* binding */ handleProjectForm),
/* harmony export */   "projectStorage": () => (/* binding */ projectStorage)
/* harmony export */ });
/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory */ "./src/modules/controller/projects/projectFactory.js");
/* harmony import */ var _display_form_display_form_events_formModules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../display/form-display/form-events/formModules */ "./src/modules/display/form-display/form-events/formModules.js");
/* harmony import */ var _display_project_display_refreshProjectDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../display/project-display/refreshProjectDisplay */ "./src/modules/display/project-display/refreshProjectDisplay.js");
/* harmony import */ var _display_panel_display_collapsibleContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../display/panel-display/collapsibleContent */ "./src/modules/display/panel-display/collapsibleContent.js");
/* harmony import */ var _display_project_display_addProjectToPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../display/project-display/addProjectToPanel */ "./src/modules/display/project-display/addProjectToPanel.js");
/* harmony import */ var _display_general_randomColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../display/general/randomColor */ "./src/modules/display/general/randomColor.js");







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
    project = new _projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"](projectTitleInput, projectDescriptionInput, false);
  })();

  const pushProjectToStorage = (() => {
    projectStorage.push(project);
    console.log(projectStorage);
  })();

  const closeFormEvent = (() => {
    const projectFormInput = document.querySelector(".project-form-content");
    const projectFormContainer = document.querySelector(".project-form");
    const overlayTrigger = document.querySelector(".overlay");
    (0,_display_form_display_form_events_formModules__WEBPACK_IMPORTED_MODULE_1__.deleteForm)(projectFormContainer, overlayTrigger, projectFormInput);
  })();
  (0,_display_panel_display_collapsibleContent__WEBPACK_IMPORTED_MODULE_3__.dropDownAnimation)();
  (0,_display_project_display_addProjectToPanel__WEBPACK_IMPORTED_MODULE_4__["default"])(project);
};




/***/ }),

/***/ "./src/modules/controller/projects/projectFactory.js":
/*!***********************************************************!*\
  !*** ./src/modules/controller/projects/projectFactory.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_general_randomColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../display/general/randomColor */ "./src/modules/display/general/randomColor.js");


function Project(title, description, status, color) {
  this.title = title;
  this.description = description;
  this.status = status;
  this.tasks = [];
  this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  const getProjectTitle = () => {
    return this.title;
  };

  const getProjectDescription = () => {
    return this.description;
  };

  const getProjectStatus = () => {
    return this.status;
  };

  const getProjectStorage = () => {
    return this.tasks;
  };

  const changeCompleteStatus = () => {
    this.status = !this.status;
  };

  const getProjectColor = () => {};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/modules/controller/tasks/addTaskToStorage.js":
/*!**********************************************************!*\
  !*** ./src/modules/controller/tasks/addTaskToStorage.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleForm": () => (/* binding */ handleForm),
/* harmony export */   "refreshTaskDisplay": () => (/* reexport safe */ _display_task_displays_refreshTaskDisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "taskStorage": () => (/* binding */ taskStorage),
/* harmony export */   "tasksDueTodayStorage": () => (/* binding */ tasksDueTodayStorage),
/* harmony export */   "tasksDueWeekStorage": () => (/* binding */ tasksDueWeekStorage)
/* harmony export */ });
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory */ "./src/modules/controller/tasks/taskFactory.js");
/* harmony import */ var _display_form_display_form_events_formModules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../display/form-display/form-events/formModules.js */ "./src/modules/display/form-display/form-events/formModules.js");
/* harmony import */ var _display_task_displays_refreshTaskDisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../display/task-displays/refreshTaskDisplay.js */ "./src/modules/display/task-displays/refreshTaskDisplay.js");
/* harmony import */ var _display_general_getTodaysDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../display/general/getTodaysDate */ "./src/modules/display/general/getTodaysDate.js");





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
    task = new _taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"](
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
    (0,_display_general_getTodaysDate__WEBPACK_IMPORTED_MODULE_3__.checkDate)(task);
  })();

  const closeFormEvent = (() => {
    const formInput = document.querySelector(".form-content");
    const formContainer = document.querySelector(".hidden-form");
    const overlayTrigger = document.querySelector(".overlay");
    (0,_display_form_display_form_events_formModules_js__WEBPACK_IMPORTED_MODULE_1__.closeForm)(formContainer, overlayTrigger, formInput);
  })();

  const refreshInboxTaskDisplay = (() => {
    const removeChildNode = document.querySelector(".table-container");
    (0,_display_task_displays_refreshTaskDisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"])(removeChildNode, taskStorage);
  })();
};




/***/ }),

/***/ "./src/modules/controller/tasks/deleteTaskInArray.js":
/*!***********************************************************!*\
  !*** ./src/modules/controller/tasks/deleteTaskInArray.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addTaskToStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTaskToStorage */ "./src/modules/controller/tasks/addTaskToStorage.js");


const deleteTaskInArray = (row) => {
  _addTaskToStorage__WEBPACK_IMPORTED_MODULE_0__.taskStorage.splice(row.dataset.index, 1);
  _addTaskToStorage__WEBPACK_IMPORTED_MODULE_0__.tasksDueTodayStorage.splice(row.dataset.index, 1);
  _addTaskToStorage__WEBPACK_IMPORTED_MODULE_0__.tasksDueWeekStorage.splice(row.dataset.index, 1);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTaskInArray);


/***/ }),

/***/ "./src/modules/controller/tasks/taskFactory.js":
/*!*****************************************************!*\
  !*** ./src/modules/controller/tasks/taskFactory.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Task(title, description, dueDate, priority, status) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.status = status;

  const getTaskTitle = () => {
    return this.title;
  };

  const getTaskDescription = () => {
    return this.description;
  };

  const getTaskDueDate = () => {
    return this.dueDate;
  };

  const getTaskPriority = () => {
    return this.priority;
  };

  const getTaskStatus = () => {
    return this.status;
  };

  const changeCompleteStatus = () => {
    this.status = !this.status;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/modules/display/content-container/contentContainer.js":
/*!*******************************************************************!*\
  !*** ./src/modules/display/content-container/contentContainer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContentContainer = (() => {
  const addContent = document.querySelector(".content-container");
  const mainContentContainer = addContent.appendChild(
    document.createElement("div")
  );
  mainContentContainer.classList.add("main-content-container");
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContentContainer);


/***/ }),

/***/ "./src/modules/display/form-display/form-events/createOverlay.js":
/*!***********************************************************************!*\
  !*** ./src/modules/display/form-display/form-events/createOverlay.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createOverlay = (() => {
  const addContent = document.querySelector(".content-container");
  const overlay = addContent.appendChild(document.createElement("div"));
  overlay.classList.add("overlay");
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOverlay);


/***/ }),

/***/ "./src/modules/display/form-display/form-events/formEvents.js":
/*!********************************************************************!*\
  !*** ./src/modules/display/form-display/form-events/formEvents.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formModules */ "./src/modules/display/form-display/form-events/formModules.js");
/* harmony import */ var _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../controller/tasks/addTaskToStorage */ "./src/modules/controller/tasks/addTaskToStorage.js");




const formEvents = () => {
  // Add Tasks Events
  const formInput = document.querySelector(".form-content");
  const formContainer = document.querySelector(".hidden-form");
  const overlayTrigger = document.querySelector(".overlay");
  const cancelBtn = document.querySelector(".cancel-btn");

  const closeFormEvents = (() => {
    overlayTrigger.addEventListener("click", function () {
      (0,_formModules_js__WEBPACK_IMPORTED_MODULE_0__.closeForm)(formContainer, overlayTrigger, formInput);
      if (document.querySelector(".description-container") !== null) {
        (0,_formModules_js__WEBPACK_IMPORTED_MODULE_0__.hideDescription)();
      }
    });

    cancelBtn.addEventListener("click", function () {
      (0,_formModules_js__WEBPACK_IMPORTED_MODULE_0__.closeForm)(formContainer, overlayTrigger, formInput);
    });
  })();

  const submitTaskEvent = (() => {
    formInput.addEventListener("submit", _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_1__.handleForm);
  })();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formEvents);


/***/ }),

/***/ "./src/modules/display/form-display/form-events/formModules.js":
/*!*********************************************************************!*\
  !*** ./src/modules/display/form-display/form-events/formModules.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "deleteForm": () => (/* binding */ deleteForm),
/* harmony export */   "hideDescription": () => (/* binding */ hideDescription),
/* harmony export */   "hideOverlay": () => (/* binding */ hideOverlay),
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "overlayTrigger": () => (/* binding */ overlayTrigger)
/* harmony export */ });
const openForm = (form, overlay) => {
  form.style.display = "block";
  overlay.style.display = "block";
};

const closeForm = (form, overlay, input) => {
  form.style.display = "none";
  overlay.style.display = "none";
  input.reset();
};

const deleteForm = (form, overlay, input) => {
  form.remove();
  overlay.style.display = "none";
  input.reset();
};

const overlayTrigger = () => {
  document.querySelector(".overlay").style.display = "block";
};

const hideOverlay = () => {
  document.querySelector(".overlay").style.display = "none";
};

const hideDescription = () => {
  document.querySelector(".description-container").remove();
};




/***/ }),

/***/ "./src/modules/display/form-display/form-events/projectFormEvents.js":
/*!***************************************************************************!*\
  !*** ./src/modules/display/form-display/form-events/projectFormEvents.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openProjectForm": () => (/* binding */ openProjectForm),
/* harmony export */   "projectFormEvents": () => (/* binding */ projectFormEvents)
/* harmony export */ });
/* harmony import */ var _formModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formModules.js */ "./src/modules/display/form-display/form-events/formModules.js");
/* harmony import */ var _projectInputForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projectInputForm.js */ "./src/modules/display/form-display/projectInputForm.js");
/* harmony import */ var _controller_projects_addProjectToStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controller/projects/addProjectToStorage.js */ "./src/modules/controller/projects/addProjectToStorage.js");





const openProjectForm = (() => {
  const createProjectIcon = document.querySelector("#add-btn");

  createProjectIcon.addEventListener("click", function () {
    (0,_projectInputForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_formModules_js__WEBPACK_IMPORTED_MODULE_0__.overlayTrigger)();
  });
})();

const projectFormEvents = () => {
  const projectFormContainer = document.querySelector(".project-form");
  const projectFormInput = document.querySelector(".project-form-content");
  const projectCancelBtn = document.querySelector(".project-cancel-btn");
  const overlayTrigger = document.querySelector(".overlay");

  const closeProjectForm = (() => {
    overlayTrigger.addEventListener("click", function () {
      (0,_formModules_js__WEBPACK_IMPORTED_MODULE_0__.deleteForm)(projectFormContainer, overlayTrigger, projectFormInput);
    });

    projectCancelBtn.addEventListener("click", function () {
      (0,_formModules_js__WEBPACK_IMPORTED_MODULE_0__.deleteForm)(projectFormContainer, overlayTrigger, projectFormInput);
    });
  })();

  const submitProjectEvent = (() => {
    projectFormInput.addEventListener("submit", _controller_projects_addProjectToStorage_js__WEBPACK_IMPORTED_MODULE_2__.handleProjectForm);
  })();
};




/***/ }),

/***/ "./src/modules/display/form-display/projectInputForm.js":
/*!**************************************************************!*\
  !*** ./src/modules/display/form-display/projectInputForm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_events_projectFormEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-events/projectFormEvents */ "./src/modules/display/form-display/form-events/projectFormEvents.js");


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

  (0,_form_events_projectFormEvents__WEBPACK_IMPORTED_MODULE_0__.projectFormEvents)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectInputForm);


/***/ }),

/***/ "./src/modules/display/form-display/taskInputForm.js":
/*!***********************************************************!*\
  !*** ./src/modules/display/form-display/taskInputForm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskInputForm);


/***/ }),

/***/ "./src/modules/display/general/getTodaysDate.js":
/*!******************************************************!*\
  !*** ./src/modules/display/general/getTodaysDate.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDate": () => (/* binding */ checkDate),
/* harmony export */   "isTaskDueThisWeek": () => (/* binding */ isTaskDueThisWeek)
/* harmony export */ });
/* harmony import */ var _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/tasks/addTaskToStorage */ "./src/modules/controller/tasks/addTaskToStorage.js");
/* harmony import */ var _tab_displays_TodayModule_addTodaysTaskToDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tab-displays/TodayModule/addTodaysTaskToDisplay */ "./src/modules/display/tab-displays/TodayModule/addTodaysTaskToDisplay.js");
/* harmony import */ var _tab_displays_WeekModule_addWeeksTasksToDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-displays/WeekModule/addWeeksTasksToDisplay */ "./src/modules/display/tab-displays/WeekModule/addWeeksTasksToDisplay.js");





const checkDate = (task) => {
  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const inputDate = new Date(task.dueDate);

  const fixDateToTimezone = (() => {
    inputDate.setMinutes(
      inputDate.getMinutes() + inputDate.getTimezoneOffset()
    );
    console.log(`Your timezone is: ${localTimeZone}`);
    console.log(`The due date of ${task.title} is ${inputDate}`);
  })();

  isTaskDueToday(inputDate, task);
  isTaskDueThisWeek(inputDate, task);
};

const isTaskDueToday = (inputtedTaskDate, taskDueToday) => {
  const today = new Date();
  console.log(`Today is: ${today}`);

  if (today.toDateString() === inputtedTaskDate.toDateString()) {
    _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_0__.tasksDueTodayStorage.push(taskDueToday);
    console.log(_controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_0__.tasksDueTodayStorage);
    console.log("this task is due week");

    const ifTodayContainerExistsDisplay = (() => {
      const todayTaskContainer = document.querySelector(
        ".today-tasks-container"
      );
      if (todayTaskContainer !== null) {
        (0,_tab_displays_TodayModule_addTodaysTaskToDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])(
          taskDueToday,
          todayTaskContainer,
          _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_0__.tasksDueTodayStorage
        );
      }
    })();

    return true;
  }
  console.log("this task is NOT due today");
  return false;
};

const isTaskDueThisWeek = (inputtedTaskDate, taskDueThisWeek) => {
  const whatIsToday = new Date();
  const firstDayofWeek = new Date(
    whatIsToday.setDate(whatIsToday.getDate() - whatIsToday.getDay())
  );
  firstDayofWeek.setHours(0, 0, 0, 0);

  const lastDayofWeek = new Date(
    whatIsToday.setDate(whatIsToday.getDate() - whatIsToday.getDay() + 6)
  );
  lastDayofWeek.setHours(23, 59, 59, 999);

  if (inputtedTaskDate >= firstDayofWeek && inputtedTaskDate <= lastDayofWeek) {
    _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_0__.tasksDueWeekStorage.push(taskDueThisWeek);
    console.log(_controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_0__.tasksDueWeekStorage);
    console.log(
      `Valid: This task is due between ${firstDayofWeek} and ${lastDayofWeek}`
    );

    const ifWeekContainerExistsDisplay = (() => {
      const weekTaskContainer = document.querySelector(".week-tasks-container");
      if (weekTaskContainer !== null) {
        (0,_tab_displays_WeekModule_addWeeksTasksToDisplay__WEBPACK_IMPORTED_MODULE_2__["default"])(
          taskDueThisWeek,
          weekTaskContainer,
          _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_0__.tasksDueWeekStorage
        );
      }
    })();
  }
  return {
    firstDayofWeek,
    lastDayofWeek,
  };
};




/***/ }),

/***/ "./src/modules/display/general/randomColor.js":
/*!****************************************************!*\
  !*** ./src/modules/display/general/randomColor.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomColorCode = "#" + Math.floor(Math.random() * 16777215).toString(16);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomColorCode);


/***/ }),

/***/ "./src/modules/display/general/removeChildNodes.js":
/*!*********************************************************!*\
  !*** ./src/modules/display/general/removeChildNodes.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeAllChildNodes);


/***/ }),

/***/ "./src/modules/display/header-display/createHeader.js":
/*!************************************************************!*\
  !*** ./src/modules/display/header-display/createHeader.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const navCreation = (() => {
  const addContent = document.querySelector(".content");
  const navBar = addContent.appendChild(document.createElement("nav"));
  navBar.classList.add("navigation-bar");
  // Left Navigation Bar
  const leftNavBar = navBar.appendChild(document.createElement("div"));
  leftNavBar.classList.add("nav-left");
  const panelBar = leftNavBar.appendChild(document.createElement("i"));
  panelBar.className = "fa-solid fa-bars";
  panelBar.setAttribute("id", "panel-bars");
  const homeButton = leftNavBar.appendChild(document.createElement("i"));
  homeButton.className = "fa-solid fa-house";
  homeButton.setAttribute("id", "home-button");
  const searchBarContainer = leftNavBar.appendChild(
    document.createElement("div")
  );
  searchBarContainer.classList.add("search-container");
  const searchInput = searchBarContainer.appendChild(
    document.createElement("input")
  );
  searchInput.classList.add("search-bar");
  const searchImg = searchInput.appendChild(document.createElement("svg"));
  searchImg.className = "fa-solid fa-magnifying-glass";
  searchInput.placeholder = "Search";
  // Center Navigation Bar
  const centerNavBar = navBar.appendChild(document.createElement("div"));
  centerNavBar.classList.add("nav-center");
  const leftNavLogo = centerNavBar.appendChild(document.createElement("img"));
  leftNavLogo.setAttribute("id", "nav-logo");
  leftNavLogo.src = "/dist/images/Todo List Secondary Logo(transparent).png";
  const navTitle = centerNavBar.appendChild(document.createElement("h1"));
  navTitle.textContent = "Todo List";
  navTitle.setAttribute("id", "nav-title");
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navCreation);


/***/ }),

/***/ "./src/modules/display/panel-display/collapsibleContent.js":
/*!*****************************************************************!*\
  !*** ./src/modules/display/panel-display/collapsibleContent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collapseProjectHeader": () => (/* binding */ collapseProjectHeader),
/* harmony export */   "collapsibleTextAnimation": () => (/* binding */ collapsibleTextAnimation),
/* harmony export */   "displayProjectsInPanel": () => (/* binding */ displayProjectsInPanel),
/* harmony export */   "dropDownAnimation": () => (/* binding */ dropDownAnimation)
/* harmony export */ });
const collapsibleTextAnimation = (element) => {
  if (element.style.display === "block") {
    element.style.display = "none";
    console.log(element.style.display);
    console.log("hidden");
  } else {
    element.style.display = "block";
    console.log("show");
  }
};

const dropDownAnimation = () => {
  const dropDownHeader = document.querySelector(".projects-header");
  dropDownHeader.classList.toggle("project-header--active");
};

const collapseProjectHeader = (header) => {
  const projectHeaderActiveToggle = (() => {
    header.addEventListener("click", function () {
      if (document.querySelector(".collapsible-content")) {
        displayProjectsInPanel();
        header.classList.toggle("project-header--active");
      } else alert("Make sure to create a project first");
    });
  })();
};

const displayProjectsInPanel = () => {
  const displayProject = document.querySelector(".project-list-container");
  displayProject.classList.toggle("hidden");
};




/***/ }),

/***/ "./src/modules/display/panel-display/createLeftPanel.js":
/*!**************************************************************!*\
  !*** ./src/modules/display/panel-display/createLeftPanel.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _panelAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panelAnimation */ "./src/modules/display/panel-display/panelAnimation.js");
/* harmony import */ var _collapsibleContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapsibleContent */ "./src/modules/display/panel-display/collapsibleContent.js");
/* harmony import */ var _tab_displays_tabSwitchLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-displays/tabSwitchLogic */ "./src/modules/display/tab-displays/tabSwitchLogic.js");
/* harmony import */ var _tab_displays_InboxModule_createInboxModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab-displays/InboxModule/createInboxModule */ "./src/modules/display/tab-displays/InboxModule/createInboxModule.js");
/* harmony import */ var _tab_displays_TodayModule_createTodayModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tab-displays/TodayModule/createTodayModule */ "./src/modules/display/tab-displays/TodayModule/createTodayModule.js");
/* harmony import */ var _tab_displays_WeekModule_createWeekModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tab-displays/WeekModule/createWeekModule */ "./src/modules/display/tab-displays/WeekModule/createWeekModule.js");
/* harmony import */ var _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controller/tasks/addTaskToStorage */ "./src/modules/controller/tasks/addTaskToStorage.js");








const panelCreation = (() => {
  const addContent = document.querySelector(".content");
  const contentContainer = addContent.appendChild(
    document.createElement("div")
  );
  contentContainer.classList.add("content-container");
  const panel = contentContainer.appendChild(document.createElement("div"));
  panel.classList.add("panel-container");

  // Left Navigation Bar
  const leftTabContainer = panel.appendChild(document.createElement("div"));
  leftTabContainer.classList.add("left-tab-container");

  const inboxContainer = leftTabContainer.appendChild(
    document.createElement("div")
  );
  inboxContainer.classList.add("inbox-tab");
  const inboxImg = inboxContainer.appendChild(document.createElement("i"));
  inboxImg.className = "fa-solid fa-inbox";
  const inboxHeader = inboxContainer.appendChild(document.createElement("h4"));
  inboxHeader.classList.add("panel-header");
  inboxHeader.textContent = "Inbox";
  const todayContainer = leftTabContainer.appendChild(
    document.createElement("div")
  );
  todayContainer.classList.add("today-tab");
  const todayImg = todayContainer.appendChild(document.createElement("i"));
  todayImg.className = "fa-solid fa-calendar-day";
  const todayHeader = todayContainer.appendChild(document.createElement("h4"));
  todayHeader.classList.add("panel-header");
  todayHeader.textContent = "Today";
  const weekContainer = leftTabContainer.appendChild(
    document.createElement("div")
  );
  weekContainer.classList.add("week-tab");
  const weekImg = weekContainer.appendChild(document.createElement("i"));
  weekImg.className = "fa-solid fa-calendar-week";
  const weekHeader = weekContainer.appendChild(document.createElement("h4"));
  weekHeader.classList.add("panel-header");
  weekHeader.textContent = "This Week";

  const dropDownContainer = panel.appendChild(document.createElement("div"));
  dropDownContainer.classList.add("dropdown-container");

  const projectContainer = dropDownContainer.appendChild(
    document.createElement("div")
  );
  projectContainer.classList.add("project-container");
  const projectsHeader = projectContainer.appendChild(
    document.createElement("h1")
  );
  projectsHeader.textContent = "Projects";
  projectsHeader.classList.add("projects-header");
  const addBtnContainer = projectContainer.appendChild(
    document.createElement("div")
  );
  addBtnContainer.classList.add("add-btn-container");
  const addBtn = addBtnContainer.appendChild(document.createElement("i"));
  addBtn.className = "fa-solid fa-plus";
  addBtn.setAttribute("id", "add-btn");
  const addProject = projectContainer.appendChild(document.createElement("i"));
  addProject.className = "fa-solid fa-circle-plus";
  addProject.setAttribute("id", "add-project");

  const listOfProjectsContainer = dropDownContainer.appendChild(
    document.createElement("div")
  );
  listOfProjectsContainer.classList.add("project-list-container");

  // Tab Listeners
  const tabListeners = (() => {
    inboxContainer.addEventListener("click", function () {
      (0,_tab_displays_tabSwitchLogic__WEBPACK_IMPORTED_MODULE_2__["default"])();
      (0,_tab_displays_InboxModule_createInboxModule__WEBPACK_IMPORTED_MODULE_3__["default"])();
      console.log(_controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_6__.taskStorage);
    });

    todayContainer.addEventListener("click", function () {
      (0,_tab_displays_tabSwitchLogic__WEBPACK_IMPORTED_MODULE_2__["default"])();
      (0,_tab_displays_TodayModule_createTodayModule__WEBPACK_IMPORTED_MODULE_4__["default"])();
      console.log(_controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_6__.tasksDueTodayStorage);
    });

    weekContainer.addEventListener("click", function () {
      (0,_tab_displays_tabSwitchLogic__WEBPACK_IMPORTED_MODULE_2__["default"])();
      (0,_tab_displays_WeekModule_createWeekModule__WEBPACK_IMPORTED_MODULE_5__["default"])();
      console.log(_controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_6__.tasksDueWeekStorage);
    });
  })();

  //event Listeners
  (0,_panelAnimation__WEBPACK_IMPORTED_MODULE_0__["default"])(panel);
  (0,_collapsibleContent__WEBPACK_IMPORTED_MODULE_1__.collapseProjectHeader)(projectsHeader);
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (panelCreation);


/***/ }),

/***/ "./src/modules/display/panel-display/panelAnimation.js":
/*!*************************************************************!*\
  !*** ./src/modules/display/panel-display/panelAnimation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (panelAnimation);


/***/ }),

/***/ "./src/modules/display/project-display/addProjectToPanel.js":
/*!******************************************************************!*\
  !*** ./src/modules/display/project-display/addProjectToPanel.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectPanelEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectPanelEvents */ "./src/modules/display/project-display/projectPanelEvents.js");


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
    (0,_projectPanelEvents__WEBPACK_IMPORTED_MODULE_0__["default"])(project);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProjectToPanelDisplay);


/***/ }),

/***/ "./src/modules/display/project-display/projectPanelEvents.js":
/*!*******************************************************************!*\
  !*** ./src/modules/display/project-display/projectPanelEvents.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectPanelEvents = (project) => {
  console.log(project.title);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectPanelEvents);


/***/ }),

/***/ "./src/modules/display/project-display/refreshProjectDisplay.js":
/*!**********************************************************************!*\
  !*** ./src/modules/display/project-display/refreshProjectDisplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_projects_addProjectToStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/projects/addProjectToStorage */ "./src/modules/controller/projects/addProjectToStorage.js");
/* harmony import */ var _addProjectToPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjectToPanel */ "./src/modules/display/project-display/addProjectToPanel.js");
/* harmony import */ var _general_removeChildNodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/removeChildNodes */ "./src/modules/display/general/removeChildNodes.js");




const refreshProjectDisplay = () => {
  const removeChildNode = document.querySelector(".project-list-container");
  (0,_general_removeChildNodes__WEBPACK_IMPORTED_MODULE_2__["default"])(removeChildNode);

  _controller_projects_addProjectToStorage__WEBPACK_IMPORTED_MODULE_0__.projectStorage.forEach((projectObj) => {
    (0,_addProjectToPanel__WEBPACK_IMPORTED_MODULE_1__["default"])(projectObj);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshProjectDisplay);


/***/ }),

/***/ "./src/modules/display/tab-displays/InboxModule/createInboxModule.js":
/*!***************************************************************************!*\
  !*** ./src/modules/display/tab-displays/InboxModule/createInboxModule.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_modules_display_form_display_taskInputForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/modules/display/form-display/taskInputForm.js */ "./src/modules/display/form-display/taskInputForm.js");
/* harmony import */ var _src_modules_display_form_display_form_events_formModules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/modules/display/form-display/form-events/formModules.js */ "./src/modules/display/form-display/form-events/formModules.js");
/* harmony import */ var _src_modules_display_form_display_form_events_formEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/modules/display/form-display/form-events/formEvents */ "./src/modules/display/form-display/form-events/formEvents.js");
/* harmony import */ var _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../controller/tasks/addTaskToStorage */ "./src/modules/controller/tasks/addTaskToStorage.js");






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

  (0,_src_modules_display_form_display_taskInputForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_src_modules_display_form_display_form_events_formEvents__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const openFormEvents = (() => {
    const formContainer = document.querySelector(".hidden-form");
    const overlayTrigger = document.querySelector(".overlay");
    newTask.addEventListener("click", function () {
      (0,_src_modules_display_form_display_form_events_formModules_js__WEBPACK_IMPORTED_MODULE_1__.openForm)(formContainer, overlayTrigger);
    });
  })();

  (0,_controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_3__.refreshTaskDisplay)(tableContainer, _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_3__.taskStorage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInboxModule);


/***/ }),

/***/ "./src/modules/display/tab-displays/TodayModule/addTodaysTaskToDisplay.js":
/*!********************************************************************************!*\
  !*** ./src/modules/display/tab-displays/TodayModule/addTodaysTaskToDisplay.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_displays_createTaskRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../task-displays/createTaskRow */ "./src/modules/display/task-displays/createTaskRow.js");


const addTodaysTaskToDisplay = (
  taskObj,
  parentContainer,
  todayStorage,
  inboxStorage
) => {
  (0,_task_displays_createTaskRow__WEBPACK_IMPORTED_MODULE_0__["default"])(taskObj, parentContainer, todayStorage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodaysTaskToDisplay);


/***/ }),

/***/ "./src/modules/display/tab-displays/TodayModule/createTodayModule.js":
/*!***************************************************************************!*\
  !*** ./src/modules/display/tab-displays/TodayModule/createTodayModule.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_displays_refreshTaskDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../task-displays/refreshTaskDisplay */ "./src/modules/display/task-displays/refreshTaskDisplay.js");
/* harmony import */ var _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../controller/tasks/addTaskToStorage */ "./src/modules/controller/tasks/addTaskToStorage.js");



const createTodayModule = () => {
  const addContent = document.querySelector(".main-content-container");

  const todayContainer = addContent.appendChild(document.createElement("div"));
  todayContainer.classList.add("today-container");

  const headerContainer = todayContainer.appendChild(
    document.createElement("div")
  );

  headerContainer.classList.add("today-header-container");

  const todayHeader = headerContainer.appendChild(document.createElement("h1"));
  todayHeader.classList.add("today-header");
  todayHeader.textContent = "Today";

  const tasksDueTodayContainer = todayContainer.appendChild(
    document.createElement("div")
  );
  tasksDueTodayContainer.classList.add("today-tasks-container");

  const displayTodaysDate = (() => {
    const today = new Date();
    const displayToday = headerContainer.appendChild(
      document.createElement("h2")
    );
    displayToday.classList.add("display-week");
    displayToday.textContent = `( ${today.toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
    })} )`;
  })();

  (0,_task_displays_refreshTaskDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(tasksDueTodayContainer, _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_1__.tasksDueTodayStorage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodayModule);


/***/ }),

/***/ "./src/modules/display/tab-displays/WeekModule/addWeeksTasksToDisplay.js":
/*!*******************************************************************************!*\
  !*** ./src/modules/display/tab-displays/WeekModule/addWeeksTasksToDisplay.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_displays_createTaskRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../task-displays/createTaskRow */ "./src/modules/display/task-displays/createTaskRow.js");


const addWeeksTasksToDisplay = (taskObj, parentContainer, todayStorage) => {
  (0,_task_displays_createTaskRow__WEBPACK_IMPORTED_MODULE_0__["default"])(taskObj, parentContainer, todayStorage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addWeeksTasksToDisplay);


/***/ }),

/***/ "./src/modules/display/tab-displays/WeekModule/createWeekModule.js":
/*!*************************************************************************!*\
  !*** ./src/modules/display/tab-displays/WeekModule/createWeekModule.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_displays_refreshTaskDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../task-displays/refreshTaskDisplay */ "./src/modules/display/task-displays/refreshTaskDisplay.js");
/* harmony import */ var _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../controller/tasks/addTaskToStorage */ "./src/modules/controller/tasks/addTaskToStorage.js");



const createWeekModule = () => {
  const addContent = document.querySelector(".main-content-container");

  const weekContainer = addContent.appendChild(document.createElement("div"));
  weekContainer.classList.add("week-container");

  const headerContainer = weekContainer.appendChild(
    document.createElement("div")
  );

  headerContainer.classList.add("week-header-container");

  const weekHeader = headerContainer.appendChild(document.createElement("h1"));
  weekHeader.classList.add("week-header");
  weekHeader.textContent = "This Week";

  const displayWeekStartAndEnd = (() => {
    const today = new Date();
    const firstDayofWeek = new Date(
      today.setDate(today.getDate() - today.getDay())
    );

    const lastDayofWeek = new Date(
      today.setDate(today.getDate() - today.getDay() + 6)
    );

    const displayWeek = headerContainer.appendChild(
      document.createElement("h2")
    );
    displayWeek.classList.add("display-week");
    displayWeek.textContent = `( ${firstDayofWeek.toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
    })} - ${lastDayofWeek.toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
    })} )`;
  })();

  const tasksDueWeekContainer = weekContainer.appendChild(
    document.createElement("div")
  );
  tasksDueWeekContainer.classList.add("week-tasks-container");

  (0,_task_displays_refreshTaskDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(tasksDueWeekContainer, _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_1__.tasksDueWeekStorage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWeekModule);


/***/ }),

/***/ "./src/modules/display/tab-displays/tabSwitchLogic.js":
/*!************************************************************!*\
  !*** ./src/modules/display/tab-displays/tabSwitchLogic.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tabSwitchLogic = () => {
  const contentContainer = document.querySelector(".main-content-container");
  contentContainer.replaceChildren();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabSwitchLogic);


/***/ }),

/***/ "./src/modules/display/task-displays/createTaskRow.js":
/*!************************************************************!*\
  !*** ./src/modules/display/task-displays/createTaskRow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_date_display_changeDateFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-date-display/changeDateFormat */ "./src/modules/display/task-displays/task-date-display/changeDateFormat.js");
/* harmony import */ var _setFlagColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFlagColor */ "./src/modules/display/task-displays/setFlagColor.js");
/* harmony import */ var _task_description_display_addEventsToTaskRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-description-display/addEventsToTaskRow */ "./src/modules/display/task-displays/task-description-display/addEventsToTaskRow.js");




const createTaskRow = (task, taskListContainer, storage) => {
  const tableContainer = taskListContainer;
  tableContainer.classList.toggle("table-container--active");
  const row = tableContainer.appendChild(document.createElement("div"));
  row.setAttribute("data-index", `${storage.indexOf(task)}`);
  row.classList.add("row-task");

  const leftRow = row.appendChild(document.createElement("div"));
  leftRow.classList.add("left-row");
  const checkBox = leftRow.appendChild(document.createElement("input"));
  checkBox.setAttribute("type", "checkbox");
  const taskTitle = leftRow.appendChild(document.createElement("p"));
  taskTitle.textContent = task.title;

  const rowRight = row.appendChild(document.createElement("div"));
  rowRight.classList.add("right-row");
  const detailsBtn = rowRight.appendChild(document.createElement("button"));
  detailsBtn.textContent = "Details";
  detailsBtn.classList.add("details-btn");

  const displayDate = rowRight.appendChild(document.createElement("p"));
  displayDate.classList.add("display-date");

  const priorityFlag = rowRight.appendChild(document.createElement("i"));
  priorityFlag.className = "fa-solid fa-flag";
  const trashBtn = rowRight.appendChild(document.createElement("i"));
  trashBtn.className = "fa-solid fa-trash";
  trashBtn.setAttribute("id", "trash-btn");

  (0,_task_description_display_addEventsToTaskRow__WEBPACK_IMPORTED_MODULE_2__["default"])(task, trashBtn, row, storage, tableContainer);

  const rowStylings = (() => {
    (0,_task_date_display_changeDateFormat__WEBPACK_IMPORTED_MODULE_0__["default"])(task, displayDate);
    (0,_setFlagColor__WEBPACK_IMPORTED_MODULE_1__["default"])(task, priorityFlag);
  })();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskRow);


/***/ }),

/***/ "./src/modules/display/task-displays/refreshTaskDisplay.js":
/*!*****************************************************************!*\
  !*** ./src/modules/display/task-displays/refreshTaskDisplay.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTaskRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskRow */ "./src/modules/display/task-displays/createTaskRow.js");
/* harmony import */ var _general_removeChildNodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general/removeChildNodes */ "./src/modules/display/general/removeChildNodes.js");



const refreshTaskDisplay = (parent, storage) => {
  (0,_general_removeChildNodes__WEBPACK_IMPORTED_MODULE_1__["default"])(parent);

  storage.forEach((taskObj) => {
    (0,_createTaskRow__WEBPACK_IMPORTED_MODULE_0__["default"])(taskObj, parent, storage);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshTaskDisplay);


/***/ }),

/***/ "./src/modules/display/task-displays/setFlagColor.js":
/*!***********************************************************!*\
  !*** ./src/modules/display/task-displays/setFlagColor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setFlagColor(obj, flag) {
  if (obj.priority === "Low") {
    flag.style.color = "blue";
  } else if (obj.priority === "Medium") {
    flag.style.color = "orange";
  } else if (obj.priority === "High") {
    flag.style.color = "red";
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setFlagColor);


/***/ }),

/***/ "./src/modules/display/task-displays/task-date-display/changeDateFormat.js":
/*!*********************************************************************************!*\
  !*** ./src/modules/display/task-displays/task-date-display/changeDateFormat.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNumberWithOrdinal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNumberWithOrdinal */ "./src/modules/display/task-displays/task-date-display/getNumberWithOrdinal.js");


const changeDateFormat = (taskObj, displayDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mar",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let unformattedDate = taskObj.dueDate;
  const dateParsed = unformattedDate.split("-");
  const formattedDate =
    months[dateParsed[1] - 1] +
    "  " +
    dateParsed[2] +
    (0,_getNumberWithOrdinal__WEBPACK_IMPORTED_MODULE_0__["default"])(dateParsed[2]);
  displayDate.textContent = formattedDate;
  return formattedDate;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeDateFormat);


/***/ }),

/***/ "./src/modules/display/task-displays/task-date-display/getNumberWithOrdinal.js":
/*!*************************************************************************************!*\
  !*** ./src/modules/display/task-displays/task-date-display/getNumberWithOrdinal.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getNumberWithOrdinal = (n) => {
  let s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNumberWithOrdinal);


/***/ }),

/***/ "./src/modules/display/task-displays/task-description-display/addEventsToTaskRow.js":
/*!******************************************************************************************!*\
  !*** ./src/modules/display/task-displays/task-description-display/addEventsToTaskRow.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_tasks_deleteTaskInArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../controller/tasks/deleteTaskInArray */ "./src/modules/controller/tasks/deleteTaskInArray.js");
/* harmony import */ var _createTaskDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTaskDescription */ "./src/modules/display/task-displays/task-description-display/createTaskDescription.js");
/* harmony import */ var _refreshTaskDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../refreshTaskDisplay */ "./src/modules/display/task-displays/refreshTaskDisplay.js");
/* harmony import */ var _controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../controller/tasks/addTaskToStorage */ "./src/modules/controller/tasks/addTaskToStorage.js");





const addTaskRowEvents = (task, trash, rowContainer, array, taskContainer) => {
  const displayTaskDescription = (() => {
    const detailsBtn = document.querySelector(".details-btn");
    detailsBtn.addEventListener("click", function () {
      (0,_createTaskDescription__WEBPACK_IMPORTED_MODULE_1__["default"])(task);
    });
  })();

  const deleteRow = (() => {
    trash.addEventListener("click", function () {
      (0,_controller_tasks_deleteTaskInArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rowContainer);
      rowContainer.remove();
      (0,_refreshTaskDisplay__WEBPACK_IMPORTED_MODULE_2__["default"])(taskContainer, array);
      console.log("Today Task Storage:" + JSON.stringify(_controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_3__.tasksDueTodayStorage));
      console.log("Inbox Task Storage:" + JSON.stringify(_controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_3__.taskStorage));
    });
  })();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskRowEvents);


/***/ }),

/***/ "./src/modules/display/task-displays/task-description-display/createTaskDescription.js":
/*!*********************************************************************************************!*\
  !*** ./src/modules/display/task-displays/task-description-display/createTaskDescription.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_display_form_events_formModules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../form-display/form-events/formModules */ "./src/modules/display/form-display/form-events/formModules.js");


const taskDescriptionModule = (obj) => {
  const mainContentContainer = document.querySelector(
    ".main-content-container"
  );

  const taskDescriptionDisplay = mainContentContainer.appendChild(
    document.createElement("div")
  );
  taskDescriptionDisplay.classList.add("description-container");

  const descriptionContent = taskDescriptionDisplay.appendChild(
    document.createElement("div")
  );
  descriptionContent.classList.add("description-content");

  const closeDescription = descriptionContent.appendChild(
    document.createElement("div")
  );
  closeDescription.classList.add("close-description");
  closeDescription.textContent = "X";

  const taskHeader = descriptionContent.appendChild(
    document.createElement("h2")
  );
  taskHeader.textContent = obj.title;

  const taskDetails = descriptionContent.appendChild(
    document.createElement("div")
  );
  taskDetails.classList.add("task-details");
  const taskDescriptionHeader = taskDetails.appendChild(
    document.createElement("h5")
  );
  taskDescriptionHeader.textContent = "Details: ";
  const taskDescription = taskDescriptionHeader.appendChild(
    document.createElement("span")
  );
  taskDescription.textContent = obj.description;
  taskDescription.className = "task-text";
  const taskPriorityHeader = taskDetails.appendChild(
    document.createElement("h5")
  );
  taskPriorityHeader.textContent = "Priority: ";
  const taskPriority = taskPriorityHeader.appendChild(
    document.createElement("span")
  );
  taskPriority.textContent = obj.priority;
  taskPriority.className = "task-text";
  const taskDueDateHeader = taskDetails.appendChild(
    document.createElement("h5")
  );
  taskDueDateHeader.textContent = "Due Date: ";
  const taskDueDate = taskDueDateHeader.appendChild(
    document.createElement("span")
  );
  taskDueDate.textContent = obj.dueDate;
  taskDueDate.className = "task-text";

  (0,_form_display_form_events_formModules__WEBPACK_IMPORTED_MODULE_0__.overlayTrigger)();

  closeDescription.addEventListener("click", function () {
    (0,_form_display_form_events_formModules__WEBPACK_IMPORTED_MODULE_0__.hideOverlay)();
    (0,_form_display_form_events_formModules__WEBPACK_IMPORTED_MODULE_0__.hideDescription)();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskDescriptionModule);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_display_header_display_createHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display/header-display/createHeader */ "./src/modules/display/header-display/createHeader.js");
/* harmony import */ var _modules_display_panel_display_createLeftPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display/panel-display/createLeftPanel */ "./src/modules/display/panel-display/createLeftPanel.js");
/* harmony import */ var _modules_display_content_container_contentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display/content-container/contentContainer */ "./src/modules/display/content-container/contentContainer.js");
/* harmony import */ var _modules_display_form_display_form_events_createOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display/form-display/form-events/createOverlay */ "./src/modules/display/form-display/form-events/createOverlay.js");
/* harmony import */ var _modules_display_form_display_form_events_formModules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/display/form-display/form-events/formModules */ "./src/modules/display/form-display/form-events/formModules.js");
/* harmony import */ var _modules_controller_tasks_addTaskToStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/controller/tasks/addTaskToStorage */ "./src/modules/controller/tasks/addTaskToStorage.js");
/* harmony import */ var _modules_controller_tasks_taskFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/controller/tasks/taskFactory */ "./src/modules/controller/tasks/taskFactory.js");
/* harmony import */ var _modules_display_tab_displays_InboxModule_createInboxModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/display/tab-displays/InboxModule/createInboxModule */ "./src/modules/display/tab-displays/InboxModule/createInboxModule.js");
/* harmony import */ var _modules_display_task_displays_refreshTaskDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/display/task-displays/refreshTaskDisplay */ "./src/modules/display/task-displays/refreshTaskDisplay.js");
/* harmony import */ var _modules_display_form_display_projectInputForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/display/form-display/projectInputForm */ "./src/modules/display/form-display/projectInputForm.js");
/* harmony import */ var _modules_display_form_display_form_events_projectFormEvents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/display/form-display/form-events/projectFormEvents */ "./src/modules/display/form-display/form-events/projectFormEvents.js");












(0,_modules_display_tab_displays_InboxModule_createInboxModule__WEBPACK_IMPORTED_MODULE_7__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map