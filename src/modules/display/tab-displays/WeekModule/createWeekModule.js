import refreshTaskDisplay from "../../task-displays/refreshTaskDisplay";
import { tasksDueWeekStorage } from "../../../controller/tasks/addTaskToStorage";

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

  refreshTaskDisplay(tasksDueWeekContainer, tasksDueWeekStorage);
};

export default createWeekModule;
