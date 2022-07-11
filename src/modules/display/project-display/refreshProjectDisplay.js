import { projectStorage } from "../../controller/projects/addProjectToStorage";
import addProjectToPanelDisplay from "./addProjectToPanel";
import removeAllChildNodes from "../general/removeChildNodes";

const refreshProjectDisplay = () => {
  const removeChildNode = document.querySelector(".project-list-container");
  removeAllChildNodes(removeChildNode);

  projectStorage.forEach((projectObj) => {
    addProjectToPanelDisplay(projectObj);
  });
};

export default refreshProjectDisplay;
