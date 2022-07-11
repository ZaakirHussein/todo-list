import createTaskRow from "../../task-displays/createTaskRow";

const addTodaysTaskToDisplay = (
  taskObj,
  parentContainer,
  todayStorage,
  inboxStorage
) => {
  createTaskRow(taskObj, parentContainer, todayStorage);
};

export default addTodaysTaskToDisplay;
