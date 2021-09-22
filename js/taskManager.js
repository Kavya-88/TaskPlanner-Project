class TaskManager {
    constructor(currentId = 0) {
      this._tasks = [];
      this.currentId = currentId;
    }
    get tasks(){
      return this._tasks;
    }
  
    // Create the addTask method
    addTask(name, description, assignedTo, dueDate, status) {
      // Create a task object that we will push to the list of tasks
      
      const newtask = {
          name: name,
          description: description,
          assignedTo: assignedTo,
          dueDate: dueDate,
          status: status,
      };
  // Increment the current Id for each new task
      this.currentId++,

      this.tasks.push(newtask);
    }
  }
  // let taskList = new TaskManager();
  // taskList.addTasks(name, description, assignedTo, dueDate, status);
  // console.log(taskList.tasks);

