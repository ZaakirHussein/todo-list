import panelAnimation from "./panelAnimation";
import { collapseProjectHeader } from "./collapsibleContent";
import tabSwitchLogic from "../tab-displays/tabSwitchLogic";
import createInboxModule from "../tab-displays/InboxModule/createInboxModule";
import createTodayModule from "../tab-displays/TodayModule/createTodayModule";
import createWeekModule from "../tab-displays/WeekModule/createWeekModule";
import {
  taskStorage,
  tasksDueTodayStorage,
  tasksDueWeekStorage,
} from "../../controller/tasks/addTaskToStorage";

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
      tabSwitchLogic();
      createInboxModule();
      console.log(taskStorage);
    });

    todayContainer.addEventListener("click", function () {
      tabSwitchLogic();
      createTodayModule();
      console.log(tasksDueTodayStorage);
    });

    weekContainer.addEventListener("click", function () {
      tabSwitchLogic();
      createWeekModule();
      console.log(tasksDueWeekStorage);
    });
  })();

  //event Listeners
  panelAnimation(panel);
  collapseProjectHeader(projectsHeader);
})();

export default panelCreation;
