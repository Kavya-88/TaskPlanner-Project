//In js/taskManager.js, above the TaskManager class definition, create a new function, createTaskHtml. The function should accept the following parameters:

function createTaskHtml (id, myName, description, assignedto, dueDate, status){
  //Within this createTaskHtml function, create a string using template literals, copying across one of your tasks that we hardcoded in earlier in task 3 from the index.html
  //Using the template literal placeholders (${}), replace each text section of the task HTML with the correct parameter
  const html =`<div class="card col-auto" data-task-id="${id}" style="width: 15rem;">
  <div class="card-body p-2 bd-highlight">
  <h5 class="card-title justify text-center">Task Card</h5>
  <p class="card-text"><strong>Task Name:</strong> ${myName}</p>
  <p class="description text-start"><strong>Description:</strong> ${description}</p>
  <p class="card-text"><strong>Assigned to:</strong> ${assignedto}</p>
  <p class="card-text"><strong>Due Date:</strong> ${dueDate}</p>
  <p class="card-text status"><strong>Status:</strong> ${status}</p>
  
<button class="btn done-button ${status === "Done" ? "invisible" : "visible"}">Done</button>
    <button type="button" class="btn delete-button">Delete</button>
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
     
      this._tasks.push(task);
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
      // let taskHtmlList = [];
      //extra challenge starts here
      let doneHtmlList = [];
      let reviewHtmlList = [];
      let todoHtmlList = [];
      let inprogressHtmlList = [];
      //extra challenge ends here



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
      // taskHtmlList.push(taskHtml);
      
         

      //extra challenge starts here
      if (task.tstatus === 'To-Do') {
        todoHtmlList.push(taskHtml);
      } else if (task.tstatus === 'In-Progress') {
        inprogressHtmlList.push(taskHtml);
      } else if (task.tstatus === 'Review') {
        reviewHtmlList.push(taskHtml);
      } else {
        doneHtmlList.push(taskHtml);
      }
      // //extra challenge ends here
    }
    
    // Create the tasksHtml by joining each item in the tasksHtmlList
    // with a new line in between each item.
    // const tasksHtml = taskHtmlList.join("\n");

    // Set the inner html of the tasksList on the page
    // const taskLists = document.querySelector("#task-list");
    // taskLists.innerHTML = tasksHtml;

    

      //extra challenge starts here
      
      const todoHtml = todoHtmlList.join("\n");
      document.getElementById('todocolumn').innerHTML = todoHtml;

       const inprogressHtml = inprogressHtmlList.join("\n");
      document.getElementById('inprogresscolumn').innerHTML = inprogressHtml;

      const reviewHtml = reviewHtmlList.join("\n");
      document.getElementById('reviewcolumn').innerHTML = reviewHtml;

       const doneHtml = doneHtmlList.join("\n");
      document.getElementById('donecolumn').innerHTML = doneHtml;
      // extra challenge ends here

    }
     

    //task 9
    save() {
      // Create a JSON string of the tasks
      let tasksJson = JSON.stringify(this._tasks);
  
      // Store the JSON string in localStorage
      localStorage.setItem("tasks", tasksJson);
  
      // Convert the currentId to a string;
      let currentId = String(this.currentId);
  
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

  



