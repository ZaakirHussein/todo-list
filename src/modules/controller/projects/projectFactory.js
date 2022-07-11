import randomColorCode from "../../display/general/randomColor";

function Project(title, description, status, color) {
  this.title = title;
  this.description = description;
  this.status = status;
  this.tasks = [];
  this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  const getProjectTitle = () => {
    return this.title;
  };

  const getProjectDescription = () => {
    return this.description;
  };

  const getProjectStatus = () => {
    return this.status;
  };

  const getProjectStorage = () => {
    return this.tasks;
  };

  const changeCompleteStatus = () => {
    this.status = !this.status;
  };

  const getProjectColor = () => {};
}

export default Project;
