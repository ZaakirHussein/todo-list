function Task(title, description, dueDate, priority, status) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.status = status;

  const getTaskTitle = () => {
    return this.title;
  };

  const getTaskDescription = () => {
    return this.description;
  };

  const getTaskDueDate = () => {
    return this.dueDate;
  };

  const getTaskPriority = () => {
    return this.priority;
  };

  const getTaskStatus = () => {
    return this.status;
  };

  const changeCompleteStatus = () => {
    this.status = !this.status;
  };
}

export default Task;
