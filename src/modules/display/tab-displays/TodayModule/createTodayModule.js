import refreshTaskDisplay from "../../task-displays/refreshTaskDisplay";
import { tasksDueTodayStorage } from "../../../controller/tasks/addTaskToStorage";

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

  refreshTaskDisplay(tasksDueTodayContainer, tasksDueTodayStorage);
};

export default createTodayModule;
