//In js/taskManager.js, above the TaskManager class definition, create a new function, createTaskHtml. The function should accept the following parameters:

function createTaskHtml (id, myName, description, assignedto, dueDate, status){
  //Within this createTaskHtml function, create a string using template literals, copying across one of your tasks that we hardcoded in earlier in task 3 from the index.html
  //Using the template literal placeholders (${}), replace each text section of the task HTML with the correct parameter
  const html =`<div class="col-auto" data-task-id="${id}">
  <div class="p-2 bd-highlight">
  <div class="card" style="width: 20rem;">
  <div class="card-body">
  <h5 class="card-title">Task Name: ${myName}</h5>
  <p class="description text-start">Description: ${description}</p>
  <p class="card-text">Assigned to: ${assignedto}</p>
  <p class="card-text">Due Date: ${dueDate}</p>
  <p class="card-text">Status: ${status}</p>
<div class="card-footer row">
    <div class="col-3">
    <button class="btn btn-outline-success done-button">Done</button>
    </div>
    <div class="col-3">
    <button type="button" class="btn btn-outline-danger delete-button">Delete</button>
    </div>
      </div>
      </div>
      </div>
      </div>
</div>`

//Return the HTML from the function
 return html;
};



class TaskManager {
    constructor(currentId = 0) {
      this._tasks = [];
      this.currentId = currentId;
    }
    get tasks(){
      return this._tasks;
    }
  
    // Create the addTask method
    addTask(myName, description, assignedTo, dueDate, tstatus) {
      // Create a task object that we will push to the list of tasks
      
      const task = {
        id:this.currentId++,
          name:myName,
          description: description,
          assignedTo: assignedTo,
          dueDate: dueDate,
          tstatus: tstatus,
      };
    
  // Increment the current Id for each new task
      // this.currentId++,
     
      this.tasks.push(task);
      document.forms[0].reset();
      alert("Task added", {task})
    }

    getTaskById(taskId) {
      // Create a variable to store the found task
      let foundTask;
      // Loop over the tasks and find the task with the id passed as a parameter
      for (let i = 0; i < this._tasks.length; i++) {
        // Get the current task in the loop
        const task = this._tasks[i];
        // Check if its the right task by comparing the task's id to the id passed as a parameter
        if (task.id === taskId) {
          // Store the task in the foundTask variable
          foundTask = task;
        }
      }
      // Return the found task
      return foundTask;
    }
    //In js/taskManager.js, within the TaskManager class, create a render() method. This method does not need any parameters.
    //Create a variable tasksHtmlList and assign it an empty array. This will hold the HTML of all the tasks.
    render() {
      let taskHtmlList = [];
      // Loop over our tasks and create the html, storing it in the array
    for (let i = 0; i < this._tasks.length; i++) {
      // Get the current task in the loop
      const task = this._tasks[i];
      // Format the date
      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      // Create the task html
      const taskHtml = createTaskHtml(
        task.id,
        task.name,
        task.description,
        task.assignedTo,
        formattedDate,
        task.tstatus
      );
      // Push it to the tasksHtmlList array
      taskHtmlList.push(taskHtml);
      }
    // Create the tasksHtml by joining each item in the tasksHtmlList
    // with a new line in between each item.
    const tasksHtml = taskHtmlList.join("\n");

    // Set the inner html of the tasksList on the page
    const taskLists = document.querySelector("#task-list");
    taskLists.innerHTML = tasksHtml;
    }

    //task 9
    save() {
      // Create a JSON string of the tasks
      const tasksJson = JSON.stringify(this._tasks);
  
      // Store the JSON string in localStorage
      localStorage.setItem("tasks", tasksJson);
  
      // Convert the currentId to a string;
      const currentId = String(this.currentId);
  
      // Store the currentId in localStorage
      localStorage.setItem("currentId", currentId);
    }

    load() {
      if(localStorage.getItem('tasks')) {
        const tasksJson = localStorage.getItem('tasks');
        this._tasks = JSON.parse(tasksJson);
      }
      if(localStorage.getItem('currentId')) {
        const currentId = localStorage.getItem('currentId');
        this.currentId = Number(currentId);
      }
    }

    //task 10
    deleteTask(taskId) {
      const newTasks = [];
      for(let i = 0; i < this._tasks.length; i++) {
        const task = this._tasks[i];
        if(task.id !== taskId) {
          newTasks.push(task);
        }
      }
      this._tasks = newTasks;
    }
  }
  
  // let taskList = new TaskManager();
  // taskList.addTasks(name, description, assignedTo, dueDate, status);
  // console.log(taskList.tasks);

  

