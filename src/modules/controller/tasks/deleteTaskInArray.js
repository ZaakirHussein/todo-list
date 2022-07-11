import {
  taskStorage,
  tasksDueTodayStorage,
  tasksDueWeekStorage,
} from "./addTaskToStorage";

const deleteTaskInArray = (row) => {
  taskStorage.splice(row.dataset.index, 1);
  tasksDueTodayStorage.splice(row.dataset.index, 1);
  tasksDueWeekStorage.splice(row.dataset.index, 1);
};

export default deleteTaskInArray;
