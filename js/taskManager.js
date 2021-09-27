//In js/taskManager.js, above the TaskManager class definition, create a new function, createTaskHtml. The function should accept the following parameters:

function createTaskHtml (id, myName, description, assignedto, dueDate, status){
  //Within this createTaskHtml function, create a string using template literals, copying across one of your tasks that we hardcoded in earlier in task 3 from the index.html
  //Using the template literal placeholders (${}), replace each text section of the task HTML with the correct parameter
  const html = `
  <li class="card" data-task-id="${id}" style="width: 18rem;" id="taskcard">
  <div class="card-body">
    <h5 class="card-title">Task</h5>
    <p class="card-text">Name: ${myName}</p>
    <p>Description: ${description}</p>
    <p>Assigned to: ${assignedto}</p>
    <p> Duedate: ${dueDate}</p>
    <p> Status: ${status}</p>
    </div>
    <div class="card-footer row">
    <div class="col-3">
    <button class="btn btn-success done-button">Done</button>
    </div>
    <div class="col-3">
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
      </div>
      </div>
</li>`

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
    addTask(myName, description, assignedTo, dueDate, status) {
      // Create a task object that we will push to the list of tasks
      
      const newtask = {
        id:this.currentId++,
          name:myName,
          description: description,
          assignedTo: assignedTo,
          dueDate: dueDate,
          status: status,
      };
    
  // Increment the current Id for each new task
      // this.currentId++,
     
      this.tasks.push(newtask);
      document.forms[0].reset();
      alert("Task added", {newtask})
    }

    getTaskById(taskId) {
      // Create a variable to store the found task
      let foundTask;
      // Loop over the tasks and find the task with the id passed as a parameter
      for (let i = 0; i < this.tasks.length; i++) {
        // Get the current task in the loop
        const task = this.tasks[i];
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
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const newtask = this.tasks[i];
      // Format the date
      const date = new Date(newtask.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      // Create the task html
      const taskHtml = createTaskHtml(
        newtask.id,
        newtask.name,
        newtask.description,
        newtask.assignedTo,
        formattedDate,
        newtask.status
      );
      // Push it to the tasksHtmlList array
      taskHtmlList.push(taskHtml);
      }
    // Create the tasksHtml by joining each item in the tasksHtmlList
    // with a new line in between each item.
    const tasksHtml = taskHtmlList.join("\n");

    // Set the inner html of the tasksList on the page
    const taskLists = document.querySelector("#taskcard");
    taskLists.innerHTML = tasksHtml;
    }
    
  }
  
  // let taskList = new TaskManager();
  // taskList.addTasks(name, description, assignedTo, dueDate, status);
  // console.log(taskList.tasks);

 

