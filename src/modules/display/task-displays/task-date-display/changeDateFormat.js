import getNumberWithOrdinal from "./getNumberWithOrdinal";

const changeDateFormat = (taskObj, displayDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mar",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let unformattedDate = taskObj.dueDate;
  const dateParsed = unformattedDate.split("-");
  const formattedDate =
    months[dateParsed[1] - 1] +
    "  " +
    dateParsed[2] +
    getNumberWithOrdinal(dateParsed[2]);
  displayDate.textContent = formattedDate;
  return formattedDate;
};

export default changeDateFormat;
