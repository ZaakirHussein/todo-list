import navCreation from "./modules/display/header-display/createHeader";
import panelCreation from "./modules/display/panel-display/createLeftPanel";
import createContentContainer from "./modules/display/content-container/contentContainer";
import createOverlay from "./modules/display/form-display/form-events/createOverlay";
import {
  openForm,
  closeForm,
} from "./modules/display/form-display/form-events/formModules";
import {
  handleForm,
  taskStorage,
} from "./modules/controller/tasks/addTaskToStorage";
import Task from "./modules/controller/tasks/taskFactory";
import createInboxModule from "./modules/display/tab-displays/InboxModule/createInboxModule";
import { createTaskDisplay } from "./modules/display/task-displays/refreshTaskDisplay";
import createProjectInputForm from "./modules/display/form-display/projectInputForm";
import { openProjectForm } from "./modules/display/form-display/form-events/projectFormEvents";

createInboxModule();
