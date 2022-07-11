import createTaskRow from "./createTaskRow";
import removeAllChildNodes from "../general/removeChildNodes";

const refreshTaskDisplay = (parent, storage) => {
  removeAllChildNodes(parent);

  storage.forEach((taskObj) => {
    createTaskRow(taskObj, parent, storage);
  });
};

export default refreshTaskDisplay;
