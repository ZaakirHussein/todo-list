import {
  overlayTrigger,
  hideOverlay,
  hideDescription,
} from "../../form-display/form-events/formModules";

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

  overlayTrigger();

  closeDescription.addEventListener("click", function () {
    hideOverlay();
    hideDescription();
  });
};

export default taskDescriptionModule;
