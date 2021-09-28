const taskManager = new TaskManager(0);

taskManager.load();
taskManager.render();

// const form = document.querySelector("#Modal");

let name1 = document.getElementById('myName');
  let validateDescription = document.querySelector("#description");
  const validateAssignedTo = document.querySelector("#assign");
  const validateDueDate = document.querySelector("#dueDate");
  const validateStatus = document.querySelector("#status");

let btnSub2 = document.querySelector("#savechanges");

let errMsg1 = document.querySelector("#errMsg1");
let errMsg2 = document.querySelector("#errMsg2");
let errMsg3 = document.querySelector("#errMsg3");
let errMsg4 = document.querySelector("#errMsg4");
let errMsg5 = document.querySelector("#errMsg5");

// current and future date validation Step
var today = new Date().toISOString().split('T')[0];
  console.log("today" + today);
 validateDueDate.setAttribute('min', today);

btnSub2.addEventListener("click", validateBox);
// let validationFail = 0;
function validateBox() {
  let valFail = 0;

  // Task Name input value is more than 5 characters.
  if (name1.value == "" || name1.value.length < 5) {
    console.log(name1.value.length);
    errMsg1.innerHTML = "Length should be more than 5";
    errMsg1.style.color = "#ff0000";
    valFail += 1;
    console.log("valFail");

    name1.focus();
  } else {
    errMsg1.innerHTML = "All good ";
    errMsg1.style.color = "#eeeeee";

  }
  // Task Description input value is more than 5 characters.
  
  if (validateDescription.value == "" || validateDescription.value.length < 5) {
    console.log(validateDescription.value.length);
    errMsg2.innerHTML = "Length should be more than 5";
    errMsg2.style.color = "#ff0000";
    valFail += 1;
    validateDescription.focus();
    } else {
    errMsg2.innerHTML = "All good ";
    errMsg2.style.color = "#eeeeee";
  }
// // validate assignedto

if(validateAssignedTo.value === "assignedto"){
console.log(validateAssignedTo.value);
  errMsg3.innerHTML ="Choose the name";
  errMsg3.style.color = "#ff0000";
  valFail += 1;
  validateAssignedTo.focus();
  } else {
  errMsg3.innerHTML = "All good ";
  errMsg3.style.color = "#eeeeee";
}
//Duedate

if(!validateDueDate.value){
  console.log(validateDueDate.value);
    errMsg4.innerHTML ="Choose the date";
    errMsg4.style.color = "#ff0000";
    valFail += 1;
    validateDueDate.focus();
    } else {
    errMsg4.innerHTML = "";
    validateDueDate.focus();
  }
// // validate Status
if(validateStatus.value === "status"){
console.log(validateStatus.value);
  errMsg5.innerHTML ="Choose the status";
  errMsg5.style.color = "#ff0000";
  valFail += 1;
  validateStatus.focus();
  } else {
  errMsg5.innerHTML = "All good ";
  errMsg5.style.color = "#eeeeee";
}

  
    if (valFail >0) {
      valFail=0;
      return;
    } else {
      taskManager.addTask(
        name1.value,
        validateDescription.value,
        validateAssignedTo.value,
        validateDueDate.value,
        validateStatus.value
        );
    console.log(taskManager.tasks)
    // localStorage.setItem('MyTaskList', JSON.stringify(taskManager));
    taskManager.save();
    taskManager.render();
    
   }
  }
//    return;
// }


//Adding Task list step 8 
const taskList = document.querySelector("#task-list");
// Add an 'onclick' event listener to the Tasks List
taskList.addEventListener("click",(event) => {
// Check if a "Mark As Done" button was clicked
if (event.target.classList.contains("done-button")) {

    // Use console.log(event.target.parentElement) to see
    const parentTask =
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    // Get the taskId of the parent Task and turn it into a number.
    const taskId = Number(parentTask.dataset.taskId);
    // Get the task from the TaskManager using the taskId
    const task = taskManager.getTaskById(taskId);
    // Update the task status to 'DONE'
    task.tstatus = "Done";
    taskManager.save();
    // Render the tasks
    taskManager.render();
}
//task 10
if(event.target.classList.contains('delete-button')) {
const parentTask = 
event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
const taskId = Number(parentTask.dataset.taskId);
taskManager.deleteTask(taskId);
taskManager.save();
taskManager.render();
}
});


    
//     console.log(date.value);




  
//task 6 step 1- seperate code

    
    // let taskArray = [];

    // const addTask = (event) => {
    //   event.preventDefault(); //to stop the form submitting
    //   let task = {
    //     taskName: document.getElementById('myName').value,
    //     description: document.getElementById("description").value,
    //     assignedTo: document.getElementById("assign").value,
    //     dueDate: document.getElementById("dueDate").value,
    //     status: document.getElementById("status").value,
        
    //   }

        


    //   taskArray.push(task);
    //   document.forms[0].reset(); //to clear the form for the next entries
    //   // document.querySelector('form').reset();

    //   //for display purpose only
    //   alert("Task added", {taskArray});
    //   let pre = document.querySelector('#msg pre');
    //   pre.textContent = '\n' + JSON.stringify(taskArray, '\t', 2);

    //   //saving to local storage
      
    //   // localStorage.setItem('MyTaskList', JSON.stringify(taskArray));

      

      
    //   }
    //   document.addEventListener('DOMContentLoaded', () => {
    //     document.getElementById('savechanges').addEventListener('click', addTask);
    //   });


