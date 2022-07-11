import changeDateFormat from "./task-date-display/changeDateFormat";
import setFlagColor from "./setFlagColor";
import addTaskRowEvents from "./task-description-display/addEventsToTaskRow";

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

  addTaskRowEvents(task, trashBtn, row, storage, tableContainer);

  const rowStylings = (() => {
    changeDateFormat(task, displayDate);
    setFlagColor(task, priorityFlag);
  })();
};

export default createTaskRow;
