import createTaskRow from "../../task-displays/createTaskRow";

const addWeeksTasksToDisplay = (taskObj, parentContainer, todayStorage) => {
  createTaskRow(taskObj, parentContainer, todayStorage);
};

export default addWeeksTasksToDisplay;
