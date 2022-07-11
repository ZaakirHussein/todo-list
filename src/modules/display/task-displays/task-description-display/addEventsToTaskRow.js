import deleteTaskInArray from "../../../controller/tasks/deleteTaskInArray";
import taskDescriptionModule from "./createTaskDescription";
import refreshTaskDisplay from "../refreshTaskDisplay";
import {
  tasksDueTodayStorage,
  taskStorage,
} from "../../../controller/tasks/addTaskToStorage";

const addTaskRowEvents = (task, trash, rowContainer, array, taskContainer) => {
  const displayTaskDescription = (() => {
    const detailsBtn = document.querySelector(".details-btn");
    detailsBtn.addEventListener("click", function () {
      taskDescriptionModule(task);
    });
  })();

  const deleteRow = (() => {
    trash.addEventListener("click", function () {
      deleteTaskInArray(rowContainer);
      rowContainer.remove();
      refreshTaskDisplay(taskContainer, array);
      console.log("Today Task Storage:" + JSON.stringify(tasksDueTodayStorage));
      console.log("Inbox Task Storage:" + JSON.stringify(taskStorage));
    });
  })();
};

export default addTaskRowEvents;
