import { tasksDueTodayStorage } from "../../controller/tasks/addTaskToStorage";
import { tasksDueWeekStorage } from "../../controller/tasks/addTaskToStorage";
import addTodaysTaskToDisplay from "../tab-displays/TodayModule/addTodaysTaskToDisplay";
import addWeeksTasksToDisplay from "../tab-displays/WeekModule/addWeeksTasksToDisplay";

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
    tasksDueTodayStorage.push(taskDueToday);
    console.log(tasksDueTodayStorage);
    console.log("this task is due week");

    const ifTodayContainerExistsDisplay = (() => {
      const todayTaskContainer = document.querySelector(
        ".today-tasks-container"
      );
      if (todayTaskContainer !== null) {
        addTodaysTaskToDisplay(
          taskDueToday,
          todayTaskContainer,
          tasksDueTodayStorage
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
    tasksDueWeekStorage.push(taskDueThisWeek);
    console.log(tasksDueWeekStorage);
    console.log(
      `Valid: This task is due between ${firstDayofWeek} and ${lastDayofWeek}`
    );

    const ifWeekContainerExistsDisplay = (() => {
      const weekTaskContainer = document.querySelector(".week-tasks-container");
      if (weekTaskContainer !== null) {
        addWeeksTasksToDisplay(
          taskDueThisWeek,
          weekTaskContainer,
          tasksDueWeekStorage
        );
      }
    })();
  }
  return {
    firstDayofWeek,
    lastDayofWeek,
  };
};

export { checkDate, isTaskDueThisWeek };
